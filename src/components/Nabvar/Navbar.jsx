import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/ekikrit-header-logo.png";
import styled from "styled-components";
import { FiMail, FiPhoneCall, FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import npFlag from "../../assets/np.svg";
import usFlag from "../../assets/us.svg";
import {
    StyledAboutUsContent,
    StyledButton,
    StyledNavbarComponent,
} from "./style";
import i18n from "../../i18n"; // Import i18n instance
import "./Navbar.css"; // Import CSS for responsive styles

const NavbarComponent = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

    const handleLanguageChange = (lang) => {
        localStorage.setItem("language", lang); // Save language in localStorage
        i18n.changeLanguage(lang); // Change the i18n language dynamically
        setLanguage(lang); // Update state
    };

    const toggleMenu = () => setMenuOpen((prev) => !prev); // Toggle menu open/close
    const closeMenu = () => setMenuOpen(false); // Close menu when a link is clicked

    return (
        <StyledNavbarComponent>
            <div className="navbar-header">
                <div className="logo-container">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div className="slogan">
                    आधुनिकता र सुविधा, एकिकृत कृषकको प्रतिबद्धता!
                </div>

                <div className="contact-info">
                    <span>
                        <a
                            style={{ textDecoration: "none", color: "#027D33" }}
                            href="tel:041-45687"
                        >
                            <FiPhoneCall /> 041-45687
                        </a>
                    </span>
                    <span>
                        <FiMail /> EkikritKrishaksacop@gmail.com
                    </span>
                </div>
            </div>

            {/* Green navigation bar */}
            <div className="navbar-green">
                <div className="desktop-menu">
                    <div>
                        <StyledButton
                            key={1}
                            isActive={
                                location?.pathname === "/" ||
                                location?.pathname === "/home"
                            }
                        >
                            <Link to={"/"}>{t("Home")}</Link>
                        </StyledButton>

                        <Popover
                            content={
                                <StyledAboutUsContent>
                                    <Link
                                        className="content"
                                        to={"/about-ekikrit"}
                                        style={{
                                            borderBottom: "2px solid #f5f5f5",
                                        }}
                                    >
                                        {t("About Ekikrit")}
                                    </Link>
                                    <Link className="content" to={"/teams"}>
                                        {t("Our Team")}
                                    </Link>
                                </StyledAboutUsContent>
                            }
                            placement="bottomLeft"
                            arrow={false}
                        >
                            <StyledButton
                                key={2}
                                isActive={
                                    location?.pathname === "/about-ekikrit" ||
                                    location.pathname === "/teams"
                                }
                            >
                                <Link
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "3px",
                                    }}
                                >
                                    {t("About us")} <FaChevronDown />
                                </Link>
                            </StyledButton>
                        </Popover>

                        <Popover
                            content={
                                <StyledAboutUsContent>
                                    <Link
                                        className="content"
                                        to={"/loan-service"}
                                        style={{
                                            borderBottom: "2px solid #f5f5f5",
                                        }}
                                    >
                                        {t("Loan Service")}
                                    </Link>
                                    <Link
                                        className="content"
                                        to={"/deposit-service"}
                                    >
                                        {t("Deposit Service")}
                                    </Link>
                                </StyledAboutUsContent>
                            }
                            placement="bottomLeft"
                            arrow={false}
                        >
                            <StyledButton
                                key={3}
                                isActive={
                                    location?.pathname === "/loan-service" ||
                                    location?.pathname === "/deposit-service"
                                }
                            >
                                <Link
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "3px",
                                    }}
                                >
                                    {t("Services")} <FaChevronDown />
                                </Link>
                            </StyledButton>
                        </Popover>

                        <StyledButton
                            key={4}
                            isActive={location?.pathname === "/gallery"}
                        >
                            <Link to={"/gallery"}>{t("Gallery")}</Link>
                        </StyledButton>
                    </div>

                    <div
                        className="language-switcher"
                        style={{ cursor: "pointer" }}
                    >
                        <span
                            onClick={() => handleLanguageChange("nep")}
                            style={{
                                fontWeight:
                                    language === "nep" ? "bold" : "normal",
                                marginRight: "10px",
                                color: "#fff",
                            }}
                        >
                            <img
                                src={npFlag}
                                alt="logo"
                                className="logo"
                                height={13}
                                style={{ marginRight: "5px" }}
                            />
                            Nepali
                        </span>
                        <span className="separator" style={{ color: "#fff" }}>
                            {" "}
                            |{" "}
                        </span>
                        <span
                            onClick={() => handleLanguageChange("en")}
                            style={{
                                fontWeight:
                                    language === "en" ? "bold" : "normal",
                                marginLeft: "10px",
                                color: "#fff",
                            }}
                        >
                            <img
                                src={usFlag}
                                alt="logo"
                                className="logo"
                                height={10}
                                style={{ marginRight: "5px" }}
                            />
                            English
                        </span>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="hamburger-menu-icon" onClick={toggleMenu} >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile sliding menu */}
            <div
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Link to="/" onClick={closeMenu}>
                        {t("Home")}
                    </Link>
                    <Link to="/about-ekikrit" onClick={closeMenu}>
                        {t("About Ekikrit")}
                    </Link>{" "}
                    <Link to="/teams" onClick={closeMenu}>
                        {t("Our Team")}
                    </Link>
                    <Link to="/loan-service" onClick={closeMenu}>
                        {t("Loan Service")}
                    </Link>
                    <Link to="/deposit-service" onClick={closeMenu}>
                        {t("Deposit Service")}
                    </Link>
                    <Link to="/gallery" onClick={closeMenu}>
                        {t("Gallery")}
                    </Link>
                </div>

                <div style={{ cursor: "pointer" }}>
                    <span
                        onClick={() => {
                            handleLanguageChange("nep");
                            closeMenu();
                        }}
                        style={{
                            fontWeight: language === "nep" ? "bold" : "normal",
                            marginRight: "10px",
                            color: "#fff",
                        }}
                    >
                        <img
                            src={npFlag}
                            alt="logo"
                            className="logo"
                            height={13}
                            style={{ marginRight: "5px" }}
                        />
                        Nepali
                    </span>
                    <span className="separator" style={{ color: "#fff" }}>
                        {" "}
                        |{" "}
                    </span>
                    <span
                        onClick={() => {
                            handleLanguageChange("en");
                            closeMenu();
                        }}
                        style={{
                            fontWeight: language === "en" ? "bold" : "normal",
                            marginLeft: "10px",
                            color: "#fff",
                        }}
                    >
                        <img
                            src={usFlag}
                            alt="logo"
                            className="logo"
                            height={10}
                            style={{ marginRight: "5px" }}
                        />
                        English
                    </span>
                </div>
            </div>
        </StyledNavbarComponent>
    );
};

export default NavbarComponent;
