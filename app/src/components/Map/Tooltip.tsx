// React
import { ReactElement } from 'react';

// Mapbox
import { GeoJSONFeature } from 'mapbox-gl';

// Utils
import {
    formatAsLocaleNumber,
    formatAsPercentage,
    formatAsCurrency,
} from '../../utils';

// Styles
import './Tooltip.css';

interface Props {
    feature: GeoJSONFeature;
}

const Tooltip = ({ feature }: Props): ReactElement => {
    const { layer } = feature;
    const hidden: boolean = layer?.id === 'root-layer' ? false : true;

    return (
        <div hidden={hidden}>
            {feature.properties && (
                <>
                    <div>County: {feature.properties.NAME}</div>
                    <div>
                        GDP:{' '}
                        {formatAsCurrency(
                            feature.properties['GDP (Thousands of dollars)']
                        )}
                    </div>
                    <div>
                        Labor Force:{' '}
                        {formatAsLocaleNumber(
                            feature.properties['Labor Force']
                        )}
                    </div>
                    <div>
                        Unemployment:{' '}
                        {formatAsPercentage(
                            feature.properties['Unemployment Rate']
                        )}
                    </div>
                    <div>
                        Median Income:{' '}
                        {formatAsCurrency(
                            feature.properties[
                                'Median Income Essential Workers'
                            ]
                        )}
                    </div>
                    <div>
                        Frontline Rate:{' '}
                        {formatAsPercentage(
                            feature.properties['Frontline Industry Rate']
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Tooltip;
