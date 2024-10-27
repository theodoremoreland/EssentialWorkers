// React
import { ReactElement } from "react";

// Mapbox
import { GeoJSONFeature } from "mapbox-gl";

// Styles
import "./Tooltip.css";

interface Props {
	feature: GeoJSONFeature;
}

const Tooltip = ({ feature }: Props): ReactElement => {
	const { layer } = feature;
	const hidden = layer?.id === "root-layer" ? false : true;

	return (
		<div hidden={hidden}>
			{feature.properties && (
				<>
					<div>County: {feature.properties.NAME}</div>
					<div>GDP: {feature.properties["GDP (Thousands of dollars)"]}</div>
					<div>Labor Force: {feature.properties["Labor Force"]}</div>
					<div>Unemployment: {feature.properties["Unemployment Rate"]}</div>
					<div>
						Median Income:{" "}
						{feature.properties["Median Income Essential Workers"]}
					</div>
					<div>
						Frontline Rate: {feature.properties["Frontline Industry Rate"]}
					</div>
				</>
			)}
		</div>
	);
};

export default Tooltip;
