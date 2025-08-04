// React
import { ReactElement } from 'react';

// Custom
import { TableRow } from '../../App.controller';

// Styles
import './Table.css';

interface Props {
    id: string;
    groupLabelSuffix: string;
    tableData:
        | {
              columns: {
                  label: string;
                  field: string;
              }[];
              rows: TableRow[];
          }
        | undefined;
}

const groupings: {
    [key: string]: string;
} = {
    'Full-time': 'Full Time',
    'Part-time': 'Full Time',
    White: 'Race/Ethnicity',
    Black: 'Race/Ethnicity',
    Hispanic: 'Race/Ethnicity',
    AAPI: 'Race/Ethnicity',
    Other: 'Race/Ethnicity',
    'Less than High School': 'Education Level',
    HS: 'Education Level',
    'Some college': 'Education Level',
    College: 'Education Level',
    Advanced: 'Education Level',
    'Below poverty line': 'Compensation and Benefits',
    '<200% poverty line': 'Compensation and Benefits',
    'No health insurance': 'Compensation and Benefits',
    'Child in home': 'Family Responsibilities',
    'Senior (age 65+) in home': 'Family Responsibilities',
};

const Table = (props: Props): ReactElement => {
    const { id, groupLabelSuffix, tableData } = props;

    return (
        <table id={id} className="Table">
            <thead>
                <tr>
                    {tableData?.columns.map((column, index) => (
                        <th key={index}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData?.rows
                    .filter((row) => Boolean(groupings[row.index]) === false)
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
                <tr className="group-header">
                    <td className="left">Full Time ({groupLabelSuffix})</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="center">Full Time ({groupLabelSuffix})</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {tableData?.rows
                    .filter((row) => groupings[row.index] === 'Full Time')
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
                <tr className="group-header">
                    <td className="left">
                        Race/Ethnicity ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="center">
                        Race/Ethnicity ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {tableData?.rows
                    .filter((row) => groupings[row.index] === 'Race/Ethnicity')
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
                <tr className="group-header">
                    <td className="left">
                        Education Level ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="center">
                        Education Level ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {tableData?.rows
                    .filter((row) => groupings[row.index] === 'Education Level')
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
                <tr className="group-header">
                    <td className="left">
                        Compensation and Benefits ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="center">
                        Compensation and Benefits ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {tableData?.rows
                    .filter(
                        (row) =>
                            groupings[row.index] === 'Compensation and Benefits'
                    )
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
                <tr className="group-header">
                    <td className="left">
                        Family Responsibilities ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="center">
                        Family Responsibilities ({groupLabelSuffix})
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {tableData?.rows
                    .filter(
                        (row) =>
                            groupings[row.index] === 'Family Responsibilities'
                    )
                    .map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([, v], index) => (
                                <td key={index}>{v}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    {tableData?.columns.map((column, index) => (
                        <th key={index}>{column.label}</th>
                    ))}
                </tr>
            </tfoot>
        </table>
    );
};

export default Table;
