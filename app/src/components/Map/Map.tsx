// React
import {
	useRef,
	useEffect,
	useLayoutEffect,
	useState,
	ChangeEvent,
	useMemo,
	ReactElement,
} from "react";
import ReactDOM from "react-dom";

// Material UI
import Hidden from "@mui/material/Hidden";

// Mapbox
import mapboxgl, { GeoJSONFeature, Map, Popup } from "mapbox-gl";

// Custom Components
import { FilterLarge, FilterSmall } from "./Filter";
import { LegendLarge, LegendSmall } from "./Legend";
import Tooltip from "./Tooltip";

// Data
import stl_counties_raw from "../../data/geojson/MSA_Stats.geojson?raw";
import mo_counties_raw from "../../data/geojson/MO_Stats.geojson?raw";
import il_counties_raw from "../../data/geojson/IL_Stats.geojson?raw";

// Styles
import "./Map.css";

// Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const stl_counties = JSON.parse(stl_counties_raw);
const mo_counties = JSON.parse(mo_counties_raw);
const il_counties = JSON.parse(il_counties_raw);

const data: {
	[key: string]: GeoJSON.FeatureCollection;
} = {
	"Saint Louis": stl_counties,
	Illinois: il_counties,
	Missouri: mo_counties,
};

const palette: string[] = [
	"#ffffd9",
	"#edf8b1",
	"#c7e9b4",
	"#7fcdbb",
	"#41b6c4",
	"#1d91c0",
	"#225ea8",
	"#253494",
	"#081d58",
];

const legendData: {
	[key: string]: {
		stops: [number, string][];
		stopLabels: string[];
		palette: string[];
		description: string;
	};
} = {
	"GDP (Thousands of dollars)": {
		stops: [
			64_000, 2_400_000, 7_000_000, 16_000_000, 32_000_000, 47_000_000,
			67_000_000, 91_000_000, 411_000_000,
		].map((stop, index) => [stop, palette[index]]),
		stopLabels: [
			"Less Than $2,400,000",
			"Between $2,400,000 and $7,000,000",
			"Between $7,000,000 and $16,000,000",
			"Between $16,000,000 and $32,000,000",
			"Between $32,000,000 and $47,000,000",
			"Between $47,000,000 and $67,000,000",
			"Between $67,000,000 and $91,000,000",
			"Between $91,000,000 and $411,000,000",
			"More than $411,000,000",
		],
		palette,
		description: "Gross Domestic Product in US Dollars (2018)",
	},
	"Labor Force": {
		stops: [
			940, 14_000, 44_000, 100_000, 170_000, 280_000, 380_000, 500_000,
			2_000_000,
		].map((stop, index) => [stop, palette[index]]),
		stopLabels: [
			"Less Than 14,000",
			"Between 14,000 and 44,000",
			"Between 44,000 and 100,000",
			"Between 100,000 and 170,000",
			"Between 170,000 and 280,000",
			"Between 280,000 and 380,000",
			"Between 380,000 and 500,000",
			"Between 500,000 and 2,000,000",
			"More than 2,000,000 people",
		],
		palette,
		description: "Sum of individuals in Labor Force (2018)",
	},
	"Unemployment Rate": {
		stops: [2, 3, 4, 5, 6, 7, 8, 10, 15].map((stop, index) => [
			stop,
			palette[index],
		]),
		stopLabels: [
			"Less Than 3%",
			"Between 3% and 4%",
			"Between 4% and 5%",
			"Between 5% and 6%",
			"Between 6% and 7%",
			"Between 7% and 8%",
			"Between 8% and 10%",
			"Between 10% and 15%",
			"More than 15%",
		],
		palette,
		description: "Percentage of individuals that are unemployed (2018)",
	},
	"Median Income Essential Workers": {
		stops: [
			20_000, 25_000, 30_000, 32_000, 35_000, 38_000, 40_000, 44_000, 50_000,
		].map((stop, index) => [stop, palette[index]]),
		stopLabels: [
			"Less Than $25,000",
			"Between $25,000 and $30,000",
			"Between $30,000 and $32,000",
			"Between $32,000 and $35,000",
			"Between $35,000 and $38,000",
			"Between $38,000 and $40,000",
			"Between $40,000 and $44,000",
			"Between $44,000 and $50,000",
			"More than $50,000",
		],
		palette,
		description: "Median Income in US Dollars (2018)",
	},
	"Frontline Industry Rate": {
		stops: [2, 10, 15, 20, 25, 30, 40, 45, 70].map((stop, index) => [
			stop,
			palette[index],
		]),
		stopLabels: [
			"Less Than 10%",
			"Between 10% and 15%",
			"Between 15% and 20%",
			"Between 20% and 25%",
			"Between 25% and $30%",
			"Between 30% and 40%",
			"Between 40% and 45%",
			"Between 45% and 70%",
			"More than 70%",
		],
		palette,
		description: "Percentage of essential workers in Labor Force (2018)",
	},
};

const mapViews: {
	[key: string]: { center: [number, number]; zoom: number };
} = {
	Missouri: { center: [-91.8318, 37.9643], zoom: 5 },
	Illinois: { center: [-88.3985, 39.6331], zoom: 5 },
	"Saint Louis": { center: [-90.1998378, 38.6264178], zoom: 7 },
};

interface Props {
	selectedTableName: string;
}

const MapWrapper = (props: Props): ReactElement => {
	const { selectedTableName } = props;

	const firstUpdate = useRef<boolean>(true);
	const secondUpdate = useRef<boolean>(true);

	const mapContainerRef = useRef<HTMLDivElement>(null);
	const [mapRef, setMapRef] = useState<Map | null>(null);
	const tooltipRef = useRef<Popup>(new mapboxgl.Popup({ offset: 15 }));
	const [radio, setRadio] = useState<string>("GDP (Thousands of dollars)");

	const [lng, setLng] = useState<number>(mapViews[selectedTableName].center[0]);
	const [lat, setLat] = useState<number>(mapViews[selectedTableName].center[1]);
	const [zoom, setZoom] = useState<number>(mapViews[selectedTableName].zoom);

	const dataLayer: {
		id: string;
		type: "fill";
		source: string;
		paint: {
			"fill-color": {
				property: string;
				stops: [number, string][];
			};
			"fill-opacity": number;
		};
	} = useMemo(() => {
		return {
			id: "root-layer",
			type: "fill",
			source: "source-data",
			paint: {
				"fill-color": {
					property: radio,
					stops: legendData[radio].stops,
				},
				"fill-opacity": 0.8,
			},
		};
	}, [radio]);

	const updateRadio = (event: ChangeEvent<HTMLInputElement>): void => {
		setRadio(event.target.value);
	};

	// Initialize map when component mounts
	useEffect(() => {
		if (mapContainerRef.current === null) return;

		const map: Map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [lng, lat],
			zoom: zoom,
			minZoom: 5,
			minPitch: 0,
			maxPitch: 0,
			doubleClickZoom: false,
		});

		map.on("move", () => {
			const _lng: string = map.getCenter().lng.toFixed(4);
			const _lat: string = map.getCenter().lat.toFixed(4);
			const _zoom: string = map.getZoom().toFixed(2);

			setLng(parseInt(_lng));
			setLat(parseInt(_lat));
			setZoom(parseInt(_zoom));
		});

		// change cursor to pointer when user hovers over a clickable feature
		map.on("mouseenter", "root-layer", (e) => {
			if (e.features?.length && e.features.length > 0) {
				map.getCanvas().style.cursor = "pointer";
			}
		});

		// reset cursor to default when user is no longer hovering over a clickable feature
		map.on("mouseleave", "root-layer", () => {
			map.getCanvas().style.cursor = "";
		});

		// add tooltip when users mouse move over a point
		map.on("click", "root-layer", (e) => {
			const features: GeoJSONFeature[] = map.queryRenderedFeatures(e.point);

			if (features.length) {
				const feature: GeoJSONFeature = features[0];
				// Create tooltip node
				const tooltipNode: HTMLDivElement = document.createElement("div");

				ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

				// Set tooltip on map
				tooltipRef.current
					.setLngLat(e.lngLat)
					.setDOMContent(tooltipNode)
					.addTo(map);
			}
		});

		map.on("load", () => {
			map.addSource("source-data", { type: "geojson", data: mo_counties });
			map.addLayer(dataLayer);
		});

		setMapRef(map);

		return () => map.remove();
	}, [dataLayer, lat, lng, selectedTableName, zoom]);

	// Updates Geography
	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;

			return;
		} else if (mapRef) {
			mapRef.easeTo(mapViews[selectedTableName]);
			(mapRef.getSource("source-data") as mapboxgl.GeoJSONSource)?.setData(
				data[selectedTableName]
			);
		}
	}, [selectedTableName, mapRef]);

	// Updates Measure
	useLayoutEffect(() => {
		if (secondUpdate.current) {
			secondUpdate.current = false;

			return;
		} else if (mapRef) {
			mapRef.setPaintProperty("root-layer", "fill-color", {
				property: radio,
				stops: legendData[radio].stops,
			});
		}
	}, [radio, mapRef]);

	return (
		<>
			{/* Filter (above map) */}
			<Hidden lgUp>
				<FilterSmall radio={radio} updateRadio={updateRadio} />
			</Hidden>
			<section id="map-section">
				<Hidden only={["xs", "sm", "md"]}>
					{/* Filter (atop map) */}
					<FilterLarge radio={radio} updateRadio={updateRadio} />
					{/* Legend (atop map) */}
					<LegendLarge legendObj={legendData[radio]} />
				</Hidden>
				{/* Map */}
				<div className="map-container" ref={mapContainerRef} />
			</section>
			{/* Legend (below map) */}
			<Hidden lgUp>
				<LegendSmall legendObj={legendData[radio]} />
			</Hidden>
		</>
	);
};

export default MapWrapper;
