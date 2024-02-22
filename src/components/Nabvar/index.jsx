import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Ekikrit_sahakari.png";

import { StyledAboutUsContent, StyledButton, StyledNavbar } from "./style";
import { Popover } from "antd";

const drawerWidth = 240;

function Navbar(props) {
    // const { window } = props;
    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen((prevState) => !prevState);
    // };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const location = useLocation();
    console.log(location, "location at the ..");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    // const container =
    //     window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            {/* <CssBaseline /> */}
            <StyledNavbar>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <img src={Logo} alt="logo" height={60} width={60} />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            color: "#027d34",
                            fontSize: "20px",
                            fontWeight: 500,
                        }}
                    >
                        <span>Ekikrit Krishak</span>
                        <span>Savings & Credit</span>
                    </div>
                </div>

                <div>
                    <StyledButton
                        key={1}
                        isActive={
                            location?.pathname === "/" ||
                            location?.pathname === "/home"
                        }
                    >
                        <Link to={"/"}>Home</Link>
                    </StyledButton>

                    <Popover
                        content={
                            <StyledAboutUsContent>
                                <Link className="content" to={"/about-ekikrit"}>
                                    About Ekikrit
                                </Link>
                            </StyledAboutUsContent>
                        }
                        placement="bottom"
                        arrow={false}
                        // trigger="click"
                        // open={true}
                        // onOpenChange={handleOpenChange}
                    >
                        <StyledButton
                            key={2}
                            isActive={location?.pathname === "/aboutus"}
                        >
                            <Link>About Us</Link>
                        </StyledButton>
                    </Popover>

                    <StyledButton
                        key={3}
                        isActive={location?.pathname === "/news"}
                    >
                        <Link to={"/news"}>News</Link>
                    </StyledButton>
                    <StyledButton
                        key={4}
                        isActive={location?.pathname === "/gallery"}
                    >
                        <Link to={"/gallery"}>Gallery</Link>{" "}
                    </StyledButton>
                </div>
            </StyledNavbar>
        </div>
    );
}

export default Navbar;
