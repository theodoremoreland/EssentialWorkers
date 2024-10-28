// React
import { ReactElement } from "react";

// MDBReact
import { MDBDataTable } from "mdbreact";

// Custom
import { TableRow } from "../../App.controller";

// Styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./ScrollingTable.css";

interface Props {
	tableData:
		| {
				columns: {
					label?: string;
					field?: string;
					sort?: string;
					width?: number;
					searchable?: boolean;
					[rest: string]: unknown;
				}[];
				rows: (TableRow | { [key: string]: string })[];
		  }
		| undefined;
}

const ScrollingTable = (props: Props): ReactElement => {
	const { tableData } = props;

	return (
		<section id="scrolling-table-section">
			<MDBDataTable
				id="scrolling-table"
				paging={false}
				searching={false}
				sortable={false}
				data={tableData}
				hover
				small
				striped
				responsive
			/>
		</section>
	);
};

export default ScrollingTable;
