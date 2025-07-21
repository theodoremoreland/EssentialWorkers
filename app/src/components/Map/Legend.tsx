// React
import { ReactElement } from 'react';

// Material UI
import StopIcon from '@mui/icons-material/Stop';

// Styles
import './Legend.css';

interface Props {
    legendObj: {
        stops: [number, string][];
        stopLabels: string[];
        palette: string[];
        description: string;
    };
}

const Legend = (props: Props): ReactElement => {
    const { legendObj } = props;
    const { stops, description, stopLabels, palette } = legendObj;

    return (
        <div id="legend-area-container">
            <div id="legend-area">
                <label className="legend-label">{description}</label>
                {stops.map((_, index: number) => (
                    <div key={stopLabels[index]} className="legend">
                        <div key={stopLabels[index]} className="legend-values">
                            {stopLabels[index]}
                        </div>{' '}
                        <StopIcon
                            className="legend-colors"
                            style={{ color: palette[index] }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Legend;
