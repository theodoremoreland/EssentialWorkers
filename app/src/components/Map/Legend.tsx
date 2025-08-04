// React
import { ReactElement, useState } from 'react';

// Material UI
import ChevronRight from '@mui/icons-material/ChevronRight';
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

    const [isLegendOpen, setIsLegendOpen] = useState<boolean>(false);

    return (
        <div id="legend-area-container">
            <div id="legend-area">
                <button
                    className={`legend-button ${
                        isLegendOpen ? 'open' : 'closed'
                    }`}
                    onClick={() => setIsLegendOpen(!isLegendOpen)}
                    aria-label="Toggle Legend"
                >
                    <span>{isLegendOpen ? 'Hide Legend' : 'Show Legend'}</span>
                    <ChevronRight
                        sx={{ fontSize: '1.3em' }}
                        className="legend-chevron"
                    />
                </button>
                {isLegendOpen && (
                    <>
                        <label className="legend-label">{description}</label>
                        {stops.map((_, index: number) => (
                            <div key={stopLabels[index]} className="legend">
                                <div
                                    key={stopLabels[index]}
                                    className="legend-values"
                                >
                                    {stopLabels[index]}
                                </div>{' '}
                                <StopIcon
                                    className="legend-colors"
                                    style={{ color: palette[index] }}
                                />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Legend;
