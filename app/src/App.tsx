// React
import { ReactElement, useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Map from "./components/Map/Map";
import ScrollingTable from "./components/Table/ScrollingTable";
import Footer from "./components/Footer";

// Controller
import { map_summary, tables, GeographyName } from "./App.controller";

// Styles
import "./App.css";

const App = (): ReactElement => {
	const [selectedTableName] = useState<GeographyName>(GeographyName.Missouri);

	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<p id="intro">
					Essential workers are shouldering the responsibility of providing
					fundamental products and services during the COVID-19 pandemic all
					while being at especially high risk for exposure to the virus. This
					webpage is dedicated to helping others garner insight into the
					economic climate surrounding more than 2,000,000 essential workers
					across Missouri and Illinois.
				</p>
				<p id="map-summary">
					The interactive map below features county level data on essential
					workers across five measures. You are currently viewing data for{" "}
					{selectedTableName}. In {selectedTableName},{" "}
					{map_summary[selectedTableName]}
				</p>
				<Map selectedTableName={selectedTableName} />
				<p id="segway">
					The data table below details characteristics of essential workers by
					overall quantity and percentage, generalized into six groups. In
					generalizing frontline / essential industries, we took inspiration
					from the
					<a href="https://cepr.net/a-basic-demographic-profile-of-workers-in-frontline-industries/">
						{" "}
						Center for Economic and Policy Research
					</a>
					. Essential industry group features various, more specific industries,
					each classified by the Census Bureau's Industry Codes:
				</p>
				<ul id="groupings">
					<li>
						Grocery, Convenience, and Drug Stores: Grocery and related product
						merchant wholesalers (4470), Supermarkets and other grocery stores
						(4971), Convenience Stores (4972), Pharmacies and drug stores
						(5070), and General merchandise stores, including warehouse clubs
						and supercenters (5391)
					</li>
					<li>
						Public Transit: Rail transportation (6080) and Bus service and urban
						transit (6180).
					</li>
					<li>
						Trucking, Warehouse, and Postal Service: Truck transportation
						(6170), Warehousing and storage (6390), and Postal Service (6370).
					</li>
					<li>
						Building Cleaning Services: Cleaning Services to Buildings and
						Dwellings (7690).
					</li>
					<li>
						Health Care: Offices of physicians (7970), Outpatient care centers
						(8090), Home health care services (8170), Other health care services
						(8180), General medical and surgical hospitals, and specialty
						hospitals (8191), Psychiatric and substance abuse hospitals (8192),
						Nursing care facilities (skilled nursing facilities) (8270), and
						Residential care facilities, except skilled nursing facilities
						(8290).
					</li>
					<li>
						Child Care and Social Services: Individual and family services
						(8370), Community food and housing, and emergency services (8380),
						and Child day care services (8470).
					</li>
				</ul>
				<p id="table-summary">
					You are currently viewing data for {selectedTableName}.
				</p>
				<ScrollingTable
					tableData={{
						columns: [
							{ label: "", field: "index", width: 200 },
							{
								label: "All Frontline Industries",
								field: "All Frontline Industries",
								width: 200,
							},
							{ label: "All Workers", field: "All Workers", width: 200 },
							{
								label: "Building Cleaning Services",
								field: "Building Cleaning Services",
								width: 200,
							},
							{
								label: "Childcare & Social Services",
								field: "Childcare & Social Services",
								width: 200,
							},
							{
								label: "Grocery, Convenience, & Drug Stores",
								field: "Grocery, Convenience, & Drug Stores",
								width: 200,
							},
							{ label: "Health Care", field: "Health Care", width: 200 },
							{
								label: "Public Transit",
								field: "Public Transit",
								width: 200,
							},
							{
								label: "Trucking, Warehouse, & Postal Service",
								field: "Trucking, Warehouse, & Postal Service",
								width: 200,
							},
						],
						rows: [
							...tables[selectedTableName].rowsByCategory["Totals"],
							...tables[selectedTableName].rowsByCategory["Miscellaneous"],
							{ "Childcare & Social Services": "Full Time" },
							...tables[selectedTableName].rowsByCategory["Full/Part-time"],
							{ "Childcare & Social Services": "Race/Ethnicity" },
							...tables[selectedTableName].rowsByCategory["Race/Ethnicity"],
							{ "Childcare & Social Services": "Education Level" },
							...tables[selectedTableName].rowsByCategory["Education Level"],
							{ "Childcare & Social Services": "Compensation and Benefits" },
							...tables[selectedTableName].rowsByCategory[
								"Compensation and Benefits"
							],
							{ "Childcare & Social Services": "Family Responsibilities" },
							...tables[selectedTableName].rowsByCategory[
								"Family Responsibilities"
							],
						],
					}}
				/>
			</main>
			<Footer />
		</>
	);
};

export default App;
