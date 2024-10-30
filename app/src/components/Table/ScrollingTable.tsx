// React
import { ReactElement } from "react";

// Custom
import { TableRow } from "../../App.controller";

// Styles
import "./ScrollingTable.css";

/**
 * 							{ "Childcare & Social Services": "Full Time" },
 * 							{ "Childcare & Social Services": "Race/Ethnicity" },
 * 							{ "Childcare & Social Services": "Education Level" },
 * 							{ "Childcare & Social Services": "Compensation and Benefits" },
 * 							{ "Childcare & Social Services": "Family Responsibilities" },
 */

interface Props {
	tableData:
		| {
				columns: {
					label: string;
					field: string;
				}[];
				rows: TableRow[];
		  }
		| undefined;
}

const groupings: {
	[key: string]: string;
} = {
	"Full-time": "Full Time",
	"Part-time": "Full Time",
	White: "Race/Ethnicity",
	Black: "Race/Ethnicity",
	Hispanic: "Race/Ethnicity",
	AAPI: "Race/Ethnicity",
	Other: "Race/Ethnicity",
	"Less than High School": "Education Level",
	HS: "Education Level",
	"Some college": "Education Level",
	College: "Education Level",
	Advanced: "Education Level",
	"Below poverty line": "Compensation and Benefits",
	"<200% poverty line": "Compensation and Benefits",
	"No health insurance": "Compensation and Benefits",
	"Child in home": "Family Responsibilities",
	"Senior (age 65+) in home": "Family Responsibilities",
};
const ScrollingTable = (props: Props): ReactElement => {
	const { tableData } = props;

	return (
		<section id="scrolling-table-section">
			<table id="scrolling-table">
				<thead>
					<tr>
						{tableData?.columns.map((column, index) => (
							<th key={index}>{column.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData?.rows
						.filter((row) => Boolean(groupings[row.index]) === false)
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
					<tr className="group-header">
						<td>Full Time</td>
					</tr>
					{tableData?.rows
						.filter((row) => groupings[row.index] === "Full Time")
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
					<tr className="group-header">
						<td>Race/Ethnicity</td>
					</tr>
					{tableData?.rows
						.filter((row) => groupings[row.index] === "Race/Ethnicity")
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
					<tr className="group-header">
						<td>Education Level</td>
					</tr>
					{tableData?.rows
						.filter((row) => groupings[row.index] === "Education Level")
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
					<tr className="group-header">
						<td>Compensation and Benefits</td>
					</tr>
					{tableData?.rows
						.filter(
							(row) => groupings[row.index] === "Compensation and Benefits"
						)
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
					<tr className="group-header">
						<td>Family Responsibilities</td>
					</tr>
					{tableData?.rows
						.filter((row) => groupings[row.index] === "Family Responsibilities")
						.map((row, index) => (
							<tr key={index}>
								{Object.entries(row).map(([, v], index) => (
									<td key={index}>{v}</td>
								))}
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default ScrollingTable;
