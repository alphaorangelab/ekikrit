import { Popover, Select } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Ekikrit_sahakari.png";
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import {
    StyledAboutUsContent,
    StyledButton,
    StyledNavbarComponent,
} from "./style";
import { useTranslation } from "react-i18next";

const NavbarComponent = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [value, setValue] = useState(localStorage.getItem("language"));

    return (
        <StyledNavbarComponent>
            <div className="navbar-header">
                <div className="logo-container">
                    <img src={Logo} alt="logo" className="logo" />
                    <div className="logo-text">
                        <span>{t(`Ekikrit Krishak`)}</span>
                        <span>Savings & Credit</span>
                    </div>
                </div>
                <div className="slogan">
                    आधुनिकता र सुविधा, एकीकृत सञ्चय र क्रेडिटको प्रतिबद्धता!
                </div>

                <div className="contact-info">
                    <span>
                        <FiPhoneCall /> 041-45687
                    </span>
                    <span>
                        <FiMail /> EkikritKrishaksacop@gmail.com
                    </span>
                    <span>
                        <IoLocation /> रत्ननगर-१६, हात्तीगाडे
                    </span>
                </div>
            </div>

            <div className="navbar-content">
                <div>
                    <StyledButton
                        key={1}
                        isActive={
                            location?.pathname === "/" ||
                            location?.pathname === "/home"
                        }
                    >
                        <Link to={"/"}>{t("HOME")}</Link>
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
                                {t("ABOUT US")} <FaChevronDown />
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
                                {t("SERVICES")} <FaChevronDown />
                            </Link>
                        </StyledButton>
                    </Popover>

                    <StyledButton
                        key={4}
                        isActive={location?.pathname === "/gallery"}
                    >
                        <Link to={"/gallery"}>{t("GALLERY")}</Link>{" "}
                    </StyledButton>
                </div>

                <div style={{ width: "100px" }}>
                    <Select
                        style={{ width: "100%" }}
                        onChange={(e) => {
                            localStorage.setItem("language", e);
                            setValue(e);
                            window.location.reload();
                        }}
                        value={value || "nep"}
                    >
                        <Select.Option value="nep">Nepali</Select.Option>
                        <Select.Option value="en">English</Select.Option>
                    </Select>
                </div>
            </div>
        </StyledNavbarComponent>
    );
};

export default NavbarComponent;
