// React
import { ReactElement } from "react";

// Images
import rdaLogo from "../assets/images/RDA-Primary-Logo.png";
import daughertyLogo from "../assets/images/Daugherty_Logo.png";

// Styles
import "./Footer.css";

const Footer = (): ReactElement => {
	return (
		<footer>
			<p>
				The Essential Workers project was developed by the{" "}
				<a target="_blank" rel="noopener noreferrer" href="http://stldata.org">
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
				. The data used in this project was collected from the Census Bureau (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://data.census.gov/mdat/#/search?ds=ACSPUMS5Y2018"
				>
					Amercian Community Survey 5-year Estimates Public Use Microdata Sample
					2018
				</a>
				) and the Bureau of Economic Analysis (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://apps.bea.gov/iTable/iTable.cfm?reqid=99&step=1#reqid=99&step=1"
				>
					GDP and Personal Income 2018
				</a>
				). All of the data collected can be downloaded by clicking on the
				"Download Data" button to the right of the navigation bar.
			</p>
			<div className="logo-container">
				<img src={rdaLogo} className="logo" alt="Regional Data Alliance Logo" />
				<img
					src={daughertyLogo}
					className="logo"
					alt="Daugherty Business Solutions Logo"
				/>
			</div>
		</footer>
	);
};

export default Footer;
