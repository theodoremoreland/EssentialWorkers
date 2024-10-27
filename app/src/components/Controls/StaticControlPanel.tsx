import React from "react";

// Styles
import "./StaticControlPanel.css";

// Material UI
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function StaticControlPanel(props) {
	const { tableNames, currentView, setTableView } = props;
	const [tableName, setTableName] = React.useState(currentView);

	const cycleToNextTable = (event) => {
		let oldIndex = tableNames.indexOf(tableName);
		let newIndex = tableNames[oldIndex + 1] === undefined ? 0 : oldIndex + 1;
		let nextTable = tableNames[newIndex];
		setTableName(nextTable);
		setTableView(nextTable);
	};

	const cycleToPreviousTable = (event) => {
		let oldIndex = tableNames.indexOf(tableName);
		let newIndex =
			tableNames[oldIndex - 1] === undefined
				? tableNames.length - 1
				: oldIndex - 1;
		let previousTable = tableNames[newIndex];
		setTableName(previousTable);
		setTableView(previousTable);
	};

	return (
		<section className="static-controls-container">
			<div
				id="static-controls"
				style={{
					display: "flex",
					alignItems: "center",
					paddingLeft: 8,
					paddingBottom: 8,
				}}
			>
				<IconButton
					aria-label="previous"
					onClick={cycleToPreviousTable}
					value="previous"
				>
					<NavigateBeforeIcon />
				</IconButton>
				<p>{tableName}</p>
				<IconButton aria-label="next" onClick={cycleToNextTable} value="next">
					<NavigateNextIcon />
				</IconButton>
			</div>
		</section>
	);
}

export default StaticControlPanel;
