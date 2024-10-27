// React
import { ReactElement } from "react";

// Material UI
import Typography from "@mui/material/Typography";

// Styles
import "./Hero.css";

const Hero = (): ReactElement => {
	return (
		<div id="hero-image-area">
			<Typography component="h3">
				Essential Workers:
				<br />
				Demographics across Missouri,
				<br />
				Illinois, and Saint Louis
			</Typography>
		</div>
	);
};

export default Hero;
