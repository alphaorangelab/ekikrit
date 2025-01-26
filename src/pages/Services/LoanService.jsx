import React from "react";
import NavbarComponent from "../../components/Nabvar/Navbar";
import FooterComponent from "../../components/FooterComponent";
import { StyledComponent } from "../style";
import { useTranslation } from "react-i18next";

const LoanService = () => {
    const { t } = useTranslation();
    return (
        <>
            {" "}
            <NavbarComponent />
            <StyledComponent>
                <h2>{t("Loan Services")}</h2>
                <ol>
                    {" "}
                    <li>व्यवसाय कर्जा (Business Loan)</li>{" "}
                    <li>कृषि कर्जा (Agricultural Loan)</li>{" "}
                    <li>घर-घडेरी कर्जा (Home and Land Loan)</li>{" "}
                    <li>
                        सम्पत्ति तथा घर निर्माण कर्जा (Property and House
                        Construction Loan)
                    </li>{" "}
                    <li>शिक्षा कर्जा (Education Loan)</li>{" "}
                    <li>स्थिर कर्जा (Fixed Loan)</li>{" "}
                    <li>विदेश रोजगार कर्जा (Abroad Working Loan)</li>{" "}
                    <li>बिरामी कर्जा (Birami Loan)</li>{" "}
                </ol>
            </StyledComponent>
            <FooterComponent />
        </>
    );
};

export default LoanService;
