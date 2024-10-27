import React from "react";

// Styles
import "./StickyControlPanel.css";

// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import missouri_img from "../../assets/images/river.jpg";
import illinois_img from "../../assets/images/bean.jpg";
import stl_img from "../../assets/images/arch.jpg";

const images = {
	Missouri: { img: missouri_img, title: "Missouri river" },
	Illinois: { img: illinois_img, title: "The Bean" },
	"Saint Louis": { img: stl_img, title: "The Arch" },
};

function StickyControlPanel(props) {
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
		<Card
			id="card"
			sx={{
				display: "flex",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<h5 id="ControlPanelTitle">Geography</h5>
				</CardContent>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						paddingLeft: 8,
						paddingBottom: 8,
					}}
					id="controls"
				>
					<IconButton
						aria-label="previous"
						onClick={cycleToPreviousTable}
						value="previous"
					>
						<NavigateBeforeIcon />
					</IconButton>
					<p id="ControlPanelDesc">{tableName}</p>
					<IconButton aria-label="next" onClick={cycleToNextTable} value="next">
						<NavigateNextIcon />
					</IconButton>
				</div>
			</div>
			<img
				id="cover"
				src={images[tableName].img}
				title={images[tableName].title}
				alt=""
			/>
		</Card>
	);
}

export default StickyControlPanel;
