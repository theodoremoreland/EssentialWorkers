// React
import { ReactElement } from "react";

// Styles
import "./Footer.css";

const Footer = (): ReactElement => {
    return (
        <footer>
            <p>
                The{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/stlrda/essential-workers"
                >
                    Essential Workers project
                </a>{" "}
                was originally developed by the{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://stldata.org"
                >
                    St. Louis Regional Data Alliance{" "}
                </a>
                in partnership with{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://daugherty.com"
                >
                    Daugherty Business Solutions
                </a>
                . The data used was collected from the Census Bureau (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://data.census.gov/mdat/#/search?ds=ACSPUMS5Y2018"
                >
                    American Community Survey 5-year Estimates Public Use
                    Microdata Sample 2018
                </a>
                ) and the Bureau of Economic Analysis (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.bea.gov/iTable/iTable.cfm?reqid=99&step=1#reqid=99&step=1"
                >
                    GDP and Personal Income 2018
                </a>
                ).{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/stlrda/essential-workers/blob/master/data/stlrda-essential-workers-data.zip?raw=true"
                >
                    Download the data collected
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
