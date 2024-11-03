// React
import { ReactElement } from "react";

// Styles
import "./Hero.css";

const Hero = (): ReactElement => {
	return (
		<div id="hero">
			<h1>
				Essential Workers:
				<br />
				Demographics across Missouri,
				<br />
				Illinois, and Saint Louis
			</h1>
		</div>
	);
};

export default Hero;
