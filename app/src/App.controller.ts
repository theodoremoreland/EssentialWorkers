// Data
import missouri_json from "./data/missouri.json";
import illinois_json from "./data/illinois.json";
import stl_json from "./data/stl.json";

export enum GeographyName {
	Missouri = "Missouri",
	Illinois = "Illinois",
	"Saint Louis" = "Saint Louis",
}

export interface TableRow {
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

export const map_summary = {
	[GeographyName.Missouri]:
		"Taney County has the highest Frontline rate (73.92%). Unemployment rates increase as you move south east.",
	[GeographyName.Illinois]:
		"DuPage County has the highest Frontline rate (48.95%). Unemployment rates increase as you move south.",
	[GeographyName["Saint Louis"]]:
		"Jersey County has the lowest Frontline rate (17.88%).",
};

export const createRowsByCategory = (data: TableRow[]) => ({
	Totals: [data[0]],
	Miscellaneous: [data[1], data[2], data[3], data[4], data[5]],
	"Full/Part-time": [data[6], data[7]],
	"Race/Ethnicity": [data[8], data[9], data[10], data[11], data[12]],
	"Education Level": [data[13], data[14], data[15], data[16], data[17]],
	"Compensation and Benefits": [data[18], data[19], data[20]],
	"Family Responsibilities": [data[21], data[22]],
});

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
