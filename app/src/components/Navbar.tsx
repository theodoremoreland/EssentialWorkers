// React
import { ReactElement } from "react";

// Material UI
import { Toolbar, AppBar, Button } from "@mui/material";

// Styles
import "./Navbar.css";

const Navbar = (): ReactElement => {
    return (
        <AppBar position="sticky">
            <Toolbar>
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
