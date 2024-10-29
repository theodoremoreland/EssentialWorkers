// Data
import missouri_json from "./data/missouri.json";
import illinois_json from "./data/illinois.json";
import stl_json from "./data/stl.json";

export enum GeographyName {
	Missouri = "Missouri",
	Illinois = "Illinois",
	"Saint Louis" = "Saint Louis",
}

export interface RawRow {
	index: string;
	"All Workers": number;
	"All Frontline Industries": number;
	"Grocery, Convenience, & Drug Stores": number;
	"Public Transit": number;
	"Trucking, Warehouse, & Postal Service": number;
	"Building Cleaning Services": number;
	"Health Care": number;
	"Childcare & Social Services": number;
}

export interface TableRow {
	index: string;
	"All Workers": string | number;
	"All Frontline Industries": string | number;
	"Grocery, Convenience, & Drug Stores": string | number;
	"Public Transit": string | number;
	"Trucking, Warehouse, & Postal Service": string | number;
	"Building Cleaning Services": string | number;
	"Health Care": string | number;
	"Childcare & Social Services": string | number;
}

export const map_summary = {
	[GeographyName.Missouri]:
		"Taney County has the highest Frontline rate (73.92%). Unemployment rates increase as you move south east.",
	[GeographyName.Illinois]:
		"DuPage County has the highest Frontline rate (48.95%). Unemployment rates increase as you move south.",
	[GeographyName["Saint Louis"]]:
		"Jersey County has the lowest Frontline rate (17.88%).",
};

const format = (value: number) => `${value.toFixed(2)}%`;

export const createRowsByCategory = (data: RawRow[]) => {
	const formattedRows = data.map((row) => {
		if (row.index === "All Workers (16+)") return row;

		const formattedRow: TableRow = {
			index: row.index,
			"All Workers": format(row["All Workers"]),
			"All Frontline Industries": format(row["All Frontline Industries"]),
			"Grocery, Convenience, & Drug Stores": format(
				row["Grocery, Convenience, & Drug Stores"]
			),
			"Public Transit": format(row["Public Transit"]),
			"Trucking, Warehouse, & Postal Service": format(
				row["Trucking, Warehouse, & Postal Service"]
			),
			"Building Cleaning Services": format(row["Building Cleaning Services"]),
			"Health Care": format(row["Health Care"]),
			"Childcare & Social Services": format(row["Childcare & Social Services"]),
		};

		return formattedRow;
	});

	return {
		Totals: [formattedRows[0]],
		Miscellaneous: [
			formattedRows[1],
			formattedRows[2],
			formattedRows[3],
			formattedRows[4],
			formattedRows[5],
		],
		"Full/Part-time": [formattedRows[6], formattedRows[7]],
		"Race/Ethnicity": [
			formattedRows[8],
			formattedRows[9],
			formattedRows[10],
			formattedRows[11],
			formattedRows[12],
		],
		"Education Level": [
			formattedRows[13],
			formattedRows[14],
			formattedRows[15],
			formattedRows[16],
			formattedRows[17],
		],
		"Compensation and Benefits": [
			formattedRows[18],
			formattedRows[19],
			formattedRows[20],
		],
		"Family Responsibilities": [formattedRows[21], formattedRows[22]],
	};
};

export const tables = {
	[GeographyName.Missouri]: {
		rowsByCategory: createRowsByCategory(missouri_json),
	},
	[GeographyName.Illinois]: {
		rowsByCategory: createRowsByCategory(illinois_json),
	},
	[GeographyName["Saint Louis"]]: {
		rowsByCategory: createRowsByCategory(stl_json),
	},
};
