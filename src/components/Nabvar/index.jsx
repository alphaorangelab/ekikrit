import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Ekikrit_sahakari.png";

import { StyledAboutUsContent, StyledButton, StyledNavbar } from "./style";
import { Popover } from "antd";
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons"; // Ant Design menu icon
import "./Navbar.css"; // Import custom CSS for the sliding menu

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
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
                        <span>{t("Ekikrit Krishak")}</span>
                        <span>{t("Savings & Credit")}</span>
                    </div>
                    {/* Hamburger icon for mobile */}
                    <MenuOutlined
                        className="hamburger-icon"
                        onClick={toggleMenu}
                        style={{
                            fontSize: "24px",
                            color: "#027d34",
                            cursor: "pointer",
                            display: "none", // Hidden on desktop
                        }}
                    />
                </div>

                {/* Main menu for desktop */}
                <div className="desktop-menu">
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
                        <Link to={"/gallery"}>Gallery</Link>
                    </StyledButton>
                </div>

                {/* Sliding menu for mobile */}
                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-menu-content">
                        <button className="close-button" onClick={closeMenu}>
                            ✕
                        </button>
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                        <Link to="/about-ekikrit" onClick={closeMenu}>
                            About Ekikrit
                        </Link>
                        <Link to="/news" onClick={closeMenu}>
                            News
                        </Link>
                        <Link to="/gallery" onClick={closeMenu}>
                            Gallery
                        </Link>
                    </div>
                </div>
            </StyledNavbar>
        </div>
    );
}

export default Navbar;
