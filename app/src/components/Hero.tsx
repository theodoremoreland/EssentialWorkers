// React
import { ReactElement } from 'react';

// Styles
import './Hero.css';

const Hero = (): ReactElement => {
    return (
        <div id="hero">
            <h1>
                Essential Workers:
                <br />
                Demographics across Saint Louis,
                <br />
                Missouri, and Illinois
            </h1>
        </div>
    );
};

export default Hero;
