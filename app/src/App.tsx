// React
import { ReactElement, useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Map from "./components/Map/Map";
import Table from "./components/Table/Table";
import Footer from "./components/Footer";

// Controller
import { tables, GeographyName } from "./App.controller";

// Styles
import "./App.css";

const App = (): ReactElement => {
	const [selectedTableName] = useState<GeographyName>(GeographyName.Missouri);

	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<section className="vertical-items">
					<p>
						Essential workers are shouldering the responsibility of providing
						fundamental products and services during the COVID-19 pandemic all
						while being at especially high risk for exposure to the virus. This
						webpage is dedicated to helping others garner insight into the
						economic climate surrounding more than 2,000,000 essential workers
						across Missouri and Illinois.
					</p>
					<p>
						The interactive map below features county level data on essential
						workers across five measures.
					</p>
				</section>
				<section id="map-section">
					<Map selectedTableName={selectedTableName} />
				</section>
				<section className="vertical-items">
					<p>
						The tables below detail characteristics of essential workers by
						overall quantity and percentage, generalized into six groups. In
						generalizing frontline/essential industries, we took inspiration
						from the
						<a
							target="_blank"
							href="https://cepr.net/a-basic-demographic-profile-of-workers-in-frontline-industries/"
						>
							{" "}
							Center for Economic and Policy Research
						</a>
						. Essential industry group features various, more specific
						industries, each classified by the Census Bureau's Industry Codes:
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
							Public Transit: Rail transportation (6080) and Bus service and
							urban transit (6180).
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
							(8090), Home health care services (8170), Other health care
							services (8180), General medical and surgical hospitals, and
							specialty hospitals (8191), Psychiatric and substance abuse
							hospitals (8192), Nursing care facilities (skilled nursing
							facilities) (8270), and Residential care facilities, except
							skilled nursing facilities (8290).
						</li>
						<li>
							Child Care and Social Services: Individual and family services
							(8370), Community food and housing, and emergency services (8380),
							and Child day care services (8470).
						</li>
					</ul>
				</section>
				<section className="table-summary vertical-items">
					<h2>{GeographyName["Saint Louis"]}</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						sapien felis, aliquam non hendrerit imperdiet, tempus non quam.
						Aenean condimentum, tellus id tempor rhoncus, mi diam luctus quam,
						nec commodo erat arcu sit amet nisi. Vestibulum bibendum placerat
						magna a laoreet. Duis ac metus lobortis, egestas ligula ut, feugiat
						urna. Nunc ullamcorper venenatis varius. Pellentesque massa lorem,
						accumsan vel purus vitae, dapibus suscipit urna.
					</p>
				</section>
				<section className="table-section">
					<Table
						tableData={{
							columns: [
								{ label: "", field: "index" },
								{
									label: "All Frontline Industries",
									field: "All Frontline Industries",
								},
								{ label: "All Workers", field: "All Workers" },
								{
									label: "Building Cleaning Services",
									field: "Building Cleaning Services",
								},
								{
									label: "Childcare & Social Services",
									field: "Childcare & Social Services",
								},
								{
									label: "Grocery, Convenience, & Drug Stores",
									field: "Grocery, Convenience, & Drug Stores",
								},
								{ label: "Health Care", field: "Health Care" },
								{
									label: "Public Transit",
									field: "Public Transit",
								},
								{
									label: "Trucking, Warehouse, & Postal Service",
									field: "Trucking, Warehouse, & Postal Service",
								},
							],
							rows: [
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Totals"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Miscellaneous"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Full/Part-time"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Race/Ethnicity"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Education Level"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Compensation and Benefits"
								],
								...tables[GeographyName["Saint Louis"]].rowsByCategory[
									"Family Responsibilities"
								],
							],
						}}
					/>
				</section>
				<section className="table-summary vertical items">
					<h2>{GeographyName.Missouri}</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						sapien felis, aliquam non hendrerit imperdiet, tempus non quam.
						Aenean condimentum, tellus id tempor rhoncus, mi diam luctus quam,
						nec commodo erat arcu sit amet nisi. Vestibulum bibendum placerat
						magna a laoreet. Duis ac metus lobortis, egestas ligula ut, feugiat
						urna. Nunc ullamcorper venenatis varius. Pellentesque massa lorem,
						accumsan vel purus vitae, dapibus suscipit urna.
					</p>
				</section>
				<section className="table-section">
					<Table
						tableData={{
							columns: [
								{ label: "", field: "index" },
								{
									label: "All Frontline Industries",
									field: "All Frontline Industries",
								},
								{ label: "All Workers", field: "All Workers" },
								{
									label: "Building Cleaning Services",
									field: "Building Cleaning Services",
								},
								{
									label: "Childcare & Social Services",
									field: "Childcare & Social Services",
								},
								{
									label: "Grocery, Convenience, & Drug Stores",
									field: "Grocery, Convenience, & Drug Stores",
								},
								{ label: "Health Care", field: "Health Care" },
								{
									label: "Public Transit",
									field: "Public Transit",
								},
								{
									label: "Trucking, Warehouse, & Postal Service",
									field: "Trucking, Warehouse, & Postal Service",
								},
							],
							rows: [
								...tables[GeographyName.Missouri].rowsByCategory["Totals"],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Miscellaneous"
								],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Full/Part-time"
								],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Race/Ethnicity"
								],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Education Level"
								],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Compensation and Benefits"
								],
								...tables[GeographyName.Missouri].rowsByCategory[
									"Family Responsibilities"
								],
							],
						}}
					/>
				</section>
				<section className="table-summary vertical-items">
					<h2>{GeographyName.Illinois}</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						sapien felis, aliquam non hendrerit imperdiet, tempus non quam.
						Aenean condimentum, tellus id tempor rhoncus, mi diam luctus quam,
						nec commodo erat arcu sit amet nisi. Vestibulum bibendum placerat
						magna a laoreet. Duis ac metus lobortis, egestas ligula ut, feugiat
						urna. Nunc ullamcorper venenatis varius. Pellentesque massa lorem,
						accumsan vel purus vitae, dapibus suscipit urna.
					</p>
				</section>
				<section className="table-section">
					<Table
						tableData={{
							columns: [
								{ label: "", field: "index" },
								{
									label: "All Frontline Industries",
									field: "All Frontline Industries",
								},
								{ label: "All Workers", field: "All Workers" },
								{
									label: "Building Cleaning Services",
									field: "Building Cleaning Services",
								},
								{
									label: "Childcare & Social Services",
									field: "Childcare & Social Services",
								},
								{
									label: "Grocery, Convenience, & Drug Stores",
									field: "Grocery, Convenience, & Drug Stores",
								},
								{ label: "Health Care", field: "Health Care" },
								{
									label: "Public Transit",
									field: "Public Transit",
								},
								{
									label: "Trucking, Warehouse, & Postal Service",
									field: "Trucking, Warehouse, & Postal Service",
								},
							],
							rows: [
								...tables[GeographyName.Illinois].rowsByCategory["Totals"],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Miscellaneous"
								],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Full/Part-time"
								],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Race/Ethnicity"
								],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Education Level"
								],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Compensation and Benefits"
								],
								...tables[GeographyName.Illinois].rowsByCategory[
									"Family Responsibilities"
								],
							],
						}}
					/>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default App;
