import React from "react";
import { StyledAboutEkikrit } from "./style";
import NavbarMarquee from "../../components/NavbarMarquee";
import Navbar from "../../components/Nabvar";
import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/Nabvar/Navbar";
import { useTranslation } from "react-i18next";

const AboutEkikrit = () => {
    const { t } = useTranslation();
    return (
        <>
            <NavbarComponent />
            <StyledAboutEkikrit>
                <h2>{t("Introduction")}</h2>
                <p>
                    {t(
                        "Welcome to Ekikrit Krishak Savings and Credit Cooperative Limited. Our cooperative is located in Ratnanagar, Chitwan, Nepal, and our main objective is to provide accessible, secure, and sustainable banking and non-banking services. We aim to contribute to the community's development through microfinance and other services, fostering collective growth among our members.Our organization adheres to the principles and values of the international cooperative movement and diligently follows the regulations, principles, and laws outlined in the Cooperative Act of Nepal."
                    )}

                    <br />
                    <br />
                    {t(
                        "Ekikrit Krishak' Savings and Credit Cooperative Limited is registered under registration number 978/068/069.Operated solely from our main office in Ratnanagar, Chitwan, managed by a dedicated team of eleven employees, including seven men and four women, we strive for excellence and professionalism in serving our members. Our esteemed CEO, Mr. Vishnu Prasad Aryal, leads our experienced and visionary management board, committees, audit committee, and competent staff."
                    )}
                    <br />
                    <br />

                    {t(
                       "In our commitment to continuous improvement and innovation, we plan to introduce internet banking services in the future for your convenience. Our office hours are from 10:00 am to 5:00 pm, Monday to Thursday, and from 10:00 am to 3:00 pm on Friday.If you have any questions or need assistance, please contact us at +97745356310 or email us at ekikritkrishakekikritkrishak@gmail.com. We appreciate your support as our financial partner, and we are dedicated to serving you and contributing to your economic well-being and community development."
                    )}
                </p>
            </StyledAboutEkikrit>
            {/* <NavbarMarquee /> */}

            <FooterComponent />
        </>
    );
};

export default AboutEkikrit;
