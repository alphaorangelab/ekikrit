import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/ekikrit-header-logo.png";
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import npFlag from "../../assets/np.svg";
import usFlag from "../../assets/us.svg";
import {
    StyledAboutUsContent,
    StyledButton,
    StyledNavbarComponent,
} from "./style";
import i18n from "../../i18n"; // Import your i18n instance

const NavbarComponent = () => {
    const location = useLocation();
    const { t } = useTranslation();
    
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    const handleLanguageChange = (lang) => {
        localStorage.setItem("language", lang); // Save language in localStorage
        i18n.changeLanguage(lang); // Change the i18n language dynamically
        setLanguage(lang); // Update state
    };

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
                        <a style={{ textDecoration: "none", color: "#027D33" }} href="tel:041-45687">
                            <FiPhoneCall /> 041-45687
                        </a>
                    </span>
                    <span>
                        <FiMail /> EkikritKrishaksacop@gmail.com
                    </span>
                </div>
            </div>

            <div className="navbar-content">
                <div>
                    <StyledButton
                        key={1}
                        isActive={location?.pathname === "/" || location?.pathname === "/home"}
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
                                <Link className="content" to={"/deposit-service"}>
                                    {t("Deposit Service")}
                                </Link>
                            </StyledAboutUsContent>
                        }
                        placement="bottomLeft"
                        arrow={false}
                    >
                        <StyledButton
                            key={2}
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

                <div className="language-switcher" style={{ cursor: "pointer" }}>
                
                    <span
                        onClick={() => handleLanguageChange("nep")}
                        style={{
                            fontWeight: language === "nep" ? "bold" : "normal",
                            marginRight: "10px", color: "#fff"
                        }}
                    >
                        <img src={npFlag} alt="logo" className="logo" height={13} style={{marginRight: "5px"}} />Nepali
                    </span>
                    <span className="separator" style={{ color: "#fff"}}> | </span>
                    <span
                        onClick={() => handleLanguageChange("en")}
                        style={{
                            fontWeight: language === "en" ? "bold" : "normal",
                            marginLeft: "10px", color: "#fff"
                        }}
                    >
                <img src={usFlag} alt="logo" className="logo" height={10} style={{marginRight: "5px"}} />
                 English
                    </span>
                </div>
            </div>
        </StyledNavbarComponent>
    );
};

export default NavbarComponent;
