// React
import { useRef, useEffect, useState, ReactElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

// Mapbox
import mapboxgl, { GeoJSONFeature, Map, Popup } from 'mapbox-gl';

// Custom
import { GeographyName } from '../../App.controller';

// Components
import Dropdown from './Dropdown';
import Legend from './Legend';
import Tooltip from './Tooltip';

// Data
import stl_counties_raw from '../../data/geojson/MSA_Stats.geojson?raw';
import mo_counties_raw from '../../data/geojson/MO_Stats.geojson?raw';
import il_counties_raw from '../../data/geojson/IL_Stats.geojson?raw';

// Styles
import './Map.css';

// Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

enum Measure {
    GDP = 'GDP (Thousands of dollars)',
    LaborForce = 'Labor Force',
    UnemploymentRate = 'Unemployment Rate',
    MedianIncome = 'Median Income Essential Workers',
    FrontlineIndustryRate = 'Frontline Industry Rate',
}

const stl_counties = JSON.parse(stl_counties_raw);
const mo_counties = JSON.parse(mo_counties_raw);
const il_counties = JSON.parse(il_counties_raw);

const data: {
    [key: string]: GeoJSON.FeatureCollection;
} = {
    'Saint Louis': stl_counties,
    Illinois: il_counties,
    Missouri: mo_counties,
};

const palette: string[] = [
    '#ece7f2',
    '#deebf7',
    '#c6dbef',
    '#9ecae1',
    '#6baed6',
    '#4292c6',
    '#2171b5',
    '#08519c',
    '#08306b',
];

const legendData: {
    [measure: string]: {
        stops: [number, string][];
        stopLabels: string[];
        palette: string[];
        description: string;
    };
} = {
    [Measure.GDP]: {
        stops: [
            64_000, 2_400_000, 7_000_000, 16_000_000, 32_000_000, 47_000_000,
            67_000_000, 91_000_000, 411_000_000,
        ].map((stop, index) => [stop, palette[index]]),
        stopLabels: [
            '< $2,400,000',
            '$2,400,000 - $7,000,000',
            '$7,000,000 - $16,000,000',
            '$16,000,000 - $32,000,000',
            '$32,000,000 - $47,000,000',
            '$47,000,000 - $67,000,000',
            '$67,000,000 - $91,000,000',
            '$91,000,000 - $411,000,000',
            '> $411,000,000',
        ],
        palette,
        description: 'Gross Domestic Product in US Dollars (2018)',
    },
    [Measure.LaborForce]: {
        stops: [
            940, 14_000, 44_000, 100_000, 170_000, 280_000, 380_000, 500_000,
            2_000_000,
        ].map((stop, index) => [stop, palette[index]]),
        stopLabels: [
            '< 14,000',
            '14,000 - 44,000',
            '44,000 - 100,000',
            '100,000 - 170,000',
            '170,000 - 280,000',
            '280,000 - 380,000',
            '380,000 - 500,000',
            '500,000 - 2,000,000',
            '> 2,000,000 people',
        ],
        palette,
        description: 'Sum of individuals in Labor Force (2018)',
    },
    [Measure.UnemploymentRate]: {
        stops: [2, 3, 4, 5, 6, 7, 8, 10, 15].map((stop, index) => [
            stop,
            palette[index],
        ]),
        stopLabels: [
            '< 3%',
            '3% - 4%',
            '4% - 5%',
            '5% - 6%',
            '6% - 7%',
            '7% - 8%',
            '8% - 10%',
            '10% - 15%',
            '> 15%',
        ],
        palette,
        description: 'Percentage of individuals that are unemployed (2018)',
    },
    [Measure.MedianIncome]: {
        stops: [
            20_000, 25_000, 30_000, 32_000, 35_000, 38_000, 40_000, 44_000,
            50_000,
        ].map((stop, index) => [stop, palette[index]]),
        stopLabels: [
            '< $25,000',
            '$25,000 - $30,000',
            '$30,000 - $32,000',
            '$32,000 - $35,000',
            '$35,000 - $38,000',
            '$38,000 - $40,000',
            '$40,000 - $44,000',
            '$44,000 - $50,000',
            '> $50,000',
        ],
        palette,
        description: 'Median Income in US Dollars (2018)',
    },
    [Measure.FrontlineIndustryRate]: {
        stops: [2, 10, 15, 20, 25, 30, 40, 45, 70].map((stop, index) => [
            stop,
            palette[index],
        ]),
        stopLabels: [
            '< 10%',
            '10% - 15%',
            '15% - 20%',
            '20% - 25%',
            '25% - $30%',
            '30% - 40%',
            '40% - 45%',
            '45% - 70%',
            '> 70%',
        ],
        palette,
        description: 'Percentage of essential workers in Labor Force (2018)',
    },
};

const mapViews: {
    [key: string]: { center: [number, number]; zoom: number };
} = {
    [GeographyName.Missouri]: { center: [-91.8318, 37.9643], zoom: 5 },
    [GeographyName.Illinois]: { center: [-88.3985, 39.6331], zoom: 5 },
    [GeographyName['Saint Louis']]: {
        center: [-90.1998378, 38.6264178],
        zoom: 7,
    },
};

const initialSelectedGeography: GeographyName = GeographyName['Saint Louis'];
const initialLng: number = mapViews[initialSelectedGeography].center[0];
const initialLat: number = mapViews[initialSelectedGeography].center[1];
const initialZoom: number = mapViews[initialSelectedGeography].zoom;
const initialSourceData: GeoJSON.FeatureCollection =
    data[initialSelectedGeography];
const initialMeasure: string = Measure.GDP;
const initialDataLayer: {
    id: string;
    type: 'fill';
    source: string;
    paint: {
        'fill-color': {
            property: string;
            stops: [number, string][];
        };
        'fill-opacity': number;
    };
} = {
    id: 'root-layer',
    type: 'fill',
    source: 'source-data',
    paint: {
        'fill-color': {
            property: initialMeasure,
            stops: legendData[initialMeasure].stops,
        },
        'fill-opacity': 0.8,
    },
};

const MapWrapper = (): ReactElement => {
    const [selectedGeography, setSelectedGeography] = useState<GeographyName>(
        initialSelectedGeography
    );
    const [selectedMeasure, setSelectedMeasure] =
        useState<string>(initialMeasure);

    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);
    const tooltipRef = useRef<Popup>(new mapboxgl.Popup({ offset: 15 }));

    // Initialize map when component mounts
    useEffect(() => {
        if (mapContainerRef.current === null) return;

        const map: Map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [initialLng, initialLat],
            zoom: initialZoom,
            minZoom: 3,
            minPitch: 0,
            maxPitch: 0,
            doubleClickZoom: false,
        });

        // change cursor to pointer when user hovers over a clickable feature
        map.on('mouseenter', 'root-layer', (e) => {
            if (e.features?.length && e.features.length > 0) {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        // reset cursor to default when user is no longer hovering over a clickable feature
        map.on('mouseleave', 'root-layer', () => {
            map.getCanvas().style.cursor = '';
        });

        // add tooltip when users mouse move over a point
        map.on('click', 'root-layer', (e) => {
            const features: GeoJSONFeature[] = map.queryRenderedFeatures(
                e.point
            );

            if (features.length) {
                const feature: GeoJSONFeature = features[0];
                // Create tooltip node
                const tooltipNode: HTMLDivElement =
                    document.createElement('div');

                const root: Root = createRoot(tooltipNode);
                root.render(<Tooltip feature={feature} />);

                // Set tooltip on map
                tooltipRef.current
                    .setLngLat(e.lngLat)
                    .setDOMContent(tooltipNode)
                    .addTo(map);
            }
        });

        map.on('load', () => {
            map.addSource('source-data', {
                type: 'geojson',
                data: initialSourceData,
            });
            map.addLayer(initialDataLayer);

            mapRef.current = map;
        });

        return () => map.remove();
    }, []);

    // Updates Geography
    useEffect(() => {
        if (mapRef.current && selectedGeography) {
            mapRef.current.easeTo(mapViews[selectedGeography]);
            (
                mapRef.current.getSource(
                    'source-data'
                ) as mapboxgl.GeoJSONSource
            )?.setData(data[selectedGeography]);
        }
    }, [selectedGeography]);

    // Updates Measure
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setPaintProperty('root-layer', 'fill-color', {
                property: selectedMeasure,
                stops: legendData[selectedMeasure].stops,
            });
        }
    }, [selectedMeasure]);

    return (
        <div id="map-container-wrapper">
            <Legend legendObj={legendData[selectedMeasure]} />
            <form id="map-form">
                <Dropdown
                    label="Geography"
                    selectedValue={selectedGeography}
                    setSelectedValue={(value: string) =>
                        setSelectedGeography(value as GeographyName)
                    }
                    options={Object.keys(GeographyName).map((geography) => ({
                        value: geography,
                        label: geography,
                    }))}
                />
                <Dropdown
                    label="Measure"
                    selectedValue={selectedMeasure}
                    setSelectedValue={setSelectedMeasure}
                    options={Object.keys(legendData).map((measure) => ({
                        value: measure,
                        label: measure,
                    }))}
                />
            </form>
            <div id="map-container" ref={mapContainerRef} />
        </div>
    );
};

export default MapWrapper;
