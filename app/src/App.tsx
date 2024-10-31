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
				<section className="table-summary vertical-items">
					<h2>{GeographyName["Saint Louis"]}</h2>
					<p>
						There are 34,205 workers aged 16 and above, with 7,232 working in
						frontline industries. Females constitute a significant portion of
						the workforce in frontline industries, with notable representation
						in Public Transit (85.54%) and Building Cleaning Services (75.26%).
						Foreign-born workers are present across all frontline sectors, with
						the highest representation in Health Care (10.64%) and Grocery,
						Convenience, & Drug Stores (10.49%). Workers aged 50 and above are
						well-represented, especially in Health Care (53.89%) and Childcare &
						Social Services (48.3%). A majority of workers in frontline
						industries own homes, with Health Care workers having the highest
						home ownership rate (71.62%). The workforce is diverse, with
						significant representation of Black workers in Childcare & Social
						Services (73.3%) and Public Transit (39.28%). A portion of workers
						live below the poverty line, with the highest in Grocery,
						Convenience, & Drug Stores (20.31%). A notable percentage of workers
						lack health insurance, especially in Grocery, Convenience, & Drug
						Stores (22.1%).
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
				<section className="table-summary vertical-items">
					<h2>{GeographyName.Missouri}</h2>
					<p>
						Missouri has 2,888,430 workers aged 16 and above, with 645,170
						employed in frontline industries. Females make up a significant
						portion of the frontline workforce (64.9%), especially in Health
						Care (78.1%) and Childcare & Social Services (86.8%). Workers aged
						50 and above represent 34.2% of the frontline workforce, with
						notable representation in Public Transit (41.0%) and Trucking,
						Warehouse, & Postal Service (43.3%). A majority of frontline workers
						own homes (65.7%), with the highest rates in Public Transit (69.4%).
						The frontline workforce is predominantly White (77.6%), with
						significant representation of Black workers (16.0%) and Hispanic
						workers (3.0%). A notable portion of frontline workers live below
						the poverty line (8.3%) or below 200% of the poverty line (25.6%).
						11.2% of frontline workers lack health insurance, with the highest
						rates in Building Cleaning Services (27.9%).
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
				<section id="methodoly" className="vertical-items">
					<h2>Methodology</h2>
					<p>
						In generalizing frontline/essential industries, we took inspiration
						from the{" "}
						<a
							target="_blank"
							href="https://cepr.net/a-basic-demographic-profile-of-workers-in-frontline-industries/"
						>
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
			</main>
			<Footer />
		</>
	);
};

export default App;
