// React
import { ReactElement } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import Footer from './components/Footer';

// Controller
import { tableRows, GeographyName } from './App.controller';

// Styles
import './App.css';

const App = (): ReactElement => {
    return (
        <>
            <Navbar />
            <Hero />
            <main>
                <section id="intro" className="vertical-items">
                    <p>
                        Essential workers are undertaking the vital
                        responsibility of providing essential products and
                        services throughout the COVID-19 pandemic. Despite the
                        increased risk of exposure to the virus, these workers
                        continue to perform their duties to ensure the
                        community's needs are met. This webpage is dedicated to
                        offering a comprehensive understanding of the economic
                        conditions impacting more than 2,000,000 essential
                        workers in Saint Louis, Missouri and Illinois. By
                        exploring this information, we aim to shed light on the
                        challenges and contributions of these indispensable
                        individuals.
                    </p>
                    <p>
                        The interactive map below features county level data on
                        essential workers across three geographies (Saint Louis,
                        Missouri, and Illinois) and five measures (GDP, Labor
                        Force, Unemployment Rate, Median Income, and Frontline
                        Industry Rate).
                    </p>
                </section>
                <section id="map-section">
                    <Map />
                </section>
                <section id="stl" className="table-summary vertical-items">
                    <h2>{GeographyName['Saint Louis']}</h2>
                    <p>
                        <b>Table 1</b> shows a demographic profile of frontline
                        workers across Greater Saint Louis. For example, of
                        7,232 frontline workers, a notable percentage of workers
                        lack health insurance, namely those in Grocery,
                        Convenience, & Drug Stores (22.1%).
                    </p>
                </section>
                <section className="table-section">
                    <Table
                        id="table-1"
                        tableData={{
                            columns: [
                                ...Object.keys(
                                    tableRows[GeographyName['Saint Louis']][0]
                                ).map((key) => {
                                    return {
                                        label: key === 'index' ? '' : key,
                                        field: key,
                                    };
                                }),
                            ],
                            rows: tableRows[GeographyName['Saint Louis']],
                        }}
                    />
                </section>
                <section className="table-summary vertical-items">
                    <h2>{GeographyName.Missouri}</h2>
                    <p>
                        <b>Table 2</b> shows a demographic profile of frontline
                        workers across Missouri. For example, of 645,170
                        employed in frontline industries, workers aged 50 and
                        above represent 34.2% of the frontline workforce.
                    </p>
                </section>
                <section className="table-section">
                    <Table
                        id="table-2"
                        tableData={{
                            columns: [
                                ...Object.keys(
                                    tableRows[GeographyName.Missouri][0]
                                ).map((key) => {
                                    return {
                                        label: key === 'index' ? '' : key,
                                        field: key,
                                    };
                                }),
                            ],
                            rows: tableRows[GeographyName.Missouri],
                        }}
                    />
                </section>
                <section className="table-summary vertical-items">
                    <h2>{GeographyName.Illinois}</h2>
                    <p>
                        <b>Table 3</b> shows a demographic profile of frontline
                        workers across Illinois. For example, of 1,320,714
                        frontline workers, a notable portion live below the
                        poverty line (6.9%) or below 200% of the poverty line
                        (21.5%).
                    </p>
                </section>
                <section className="table-section">
                    <Table
                        id="table-3"
                        tableData={{
                            columns: [
                                ...Object.keys(
                                    tableRows[GeographyName.Illinois][0]
                                ).map((key) => {
                                    return {
                                        label: key === 'index' ? '' : key,
                                        field: key,
                                    };
                                }),
                            ],
                            rows: tableRows[GeographyName.Illinois],
                        }}
                    />
                </section>
                <section id="methodology" className="vertical-items">
                    <h2>Methodology</h2>
                    <p>
                        In generalizing frontline/essential industries,
                        inspiration was took from the{' '}
                        <a
                            target="_blank"
                            href="https://cepr.net/a-basic-demographic-profile-of-workers-in-frontline-industries/"
                        >
                            Center for Economic and Policy Research
                        </a>
                        . An essential industry group features various, more
                        specific industries, each classified by the Census
                        Bureau's Industry Codes:
                    </p>
                    <ul id="groupings">
                        <li>
                            Grocery, Convenience, and Drug Stores: Grocery and
                            related product merchant wholesalers (4470),
                            Supermarkets and other grocery stores (4971),
                            Convenience Stores (4972), Pharmacies and drug
                            stores (5070), and General merchandise stores,
                            including warehouse clubs and supercenters (5391).
                        </li>
                        <li>
                            Public Transit: Rail transportation (6080) and Bus
                            service and urban transit (6180).
                        </li>
                        <li>
                            Trucking, Warehouse, and Postal Service: Truck
                            transportation (6170), Warehousing and storage
                            (6390), and Postal Service (6370).
                        </li>
                        <li>
                            Building Cleaning Services: Cleaning Services to
                            Buildings and Dwellings (7690).
                        </li>
                        <li>
                            Health Care: Offices of physicians (7970),
                            Outpatient care centers (8090), Home health care
                            services (8170), Other health care services (8180),
                            General medical and surgical hospitals, and
                            specialty hospitals (8191), Psychiatric and
                            substance abuse hospitals (8192), Nursing care
                            facilities (skilled nursing facilities) (8270), and
                            Residential care facilities, except skilled nursing
                            facilities (8290).
                        </li>
                        <li>
                            Child Care and Social Services: Individual and
                            family services (8370), Community food and housing,
                            and emergency services (8380), and Child day care
                            services (8470).
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default App;
