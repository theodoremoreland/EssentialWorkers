// React
import { ReactElement } from "react";

// Material UI
import { Button } from "@mui/material";

// Styles
import "./Navbar.css";

const Navbar = (): ReactElement => {
    return (
        <nav id="app-nav">
            <Button className="nav-button">
                <a
                    id="download"
                    href="https://github.com/stlrda/essential-workers/blob/master/data/stlrda-essential-workers-data.zip?raw=true"
                >
                    Download Data
                </a>
            </Button>
        </nav>
    );
};

export default Navbar;
