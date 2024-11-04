// React
import { ReactElement } from "react";

// Material UI
import { Toolbar, AppBar, Button } from "@mui/material";

// Images
import RDALogo from "../assets/images/RDA-logo-FINAL_Horiz-full-color-revised.png";

// Styles
import "./Navbar.css";

const Navbar = (): ReactElement => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <a href="https://stldata.org/" rel="noopener">
                    <img
                        id="logo"
                        src={RDALogo}
                        alt="Regional Data Alliance Logo"
                    />
                </a>
                <Button className="nav-button">
                    <a
                        id="download"
                        href="https://github.com/stlrda/essential-workers/blob/master/data/stlrda-essential-workers-data.zip?raw=true"
                    >
                        Download Data
                    </a>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
