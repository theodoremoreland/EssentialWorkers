// Utils
import { formatAsLocaleNumber, formatAsPercentage } from "./utils";

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

const formatRow = (row: RawRow): TableRow => {
    if (row.index === "All Workers (16+)") {
        return {
            index: row.index,
            "All Workers": formatAsLocaleNumber(row["All Workers"]),
            "All Frontline Industries": formatAsLocaleNumber(
                row["All Frontline Industries"]
            ),
            "Grocery, Convenience, & Drug Stores": formatAsLocaleNumber(
                row["Grocery, Convenience, & Drug Stores"]
            ),
            "Public Transit": formatAsLocaleNumber(row["Public Transit"]),
            "Trucking, Warehouse, & Postal Service": formatAsLocaleNumber(
                row["Trucking, Warehouse, & Postal Service"]
            ),
            "Building Cleaning Services": formatAsLocaleNumber(
                row["Building Cleaning Services"]
            ),
            "Health Care": formatAsLocaleNumber(row["Health Care"]),
            "Childcare & Social Services": formatAsLocaleNumber(
                row["Childcare & Social Services"]
            ),
        };
    }

    return {
        index: row.index,
        "All Workers": formatAsPercentage(row["All Workers"]),
        "All Frontline Industries": formatAsPercentage(
            row["All Frontline Industries"]
        ),
        "Grocery, Convenience, & Drug Stores": formatAsPercentage(
            row["Grocery, Convenience, & Drug Stores"]
        ),
        "Public Transit": formatAsPercentage(row["Public Transit"]),
        "Trucking, Warehouse, & Postal Service": formatAsPercentage(
            row["Trucking, Warehouse, & Postal Service"]
        ),
        "Building Cleaning Services": formatAsPercentage(
            row["Building Cleaning Services"]
        ),
        "Health Care": formatAsPercentage(row["Health Care"]),
        "Childcare & Social Services": formatAsPercentage(
            row["Childcare & Social Services"]
        ),
    };
};

export const tableRows: {
    [geography in GeographyName]: TableRow[];
} = {
    [GeographyName.Missouri]: missouri_json.map(formatRow),
    [GeographyName.Illinois]: illinois_json.map(formatRow),
    [GeographyName["Saint Louis"]]: stl_json.map(formatRow),
};
