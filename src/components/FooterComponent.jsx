import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";

import { StyledFooterComponent } from "./style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterComponent = () => {
    const { t } = useTranslation();
    return (
        <StyledFooterComponent>
            <div className="footer-container">
                <div className="our-services">
                    <h4>{t("Our Services")}</h4>
                    <ul>
                        <li>
                            <Link to={"/loan-service"}>
                                {t("Loan Service")}
                            </Link>{" "}
                        </li>
                        <li>
                            <Link to={"/deposit-service"}>
                                {t("Deposit Service")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="our-services">
                    <h4>{t("Links")}</h4>
                    <ul>
                        <li>
                            <Link to={"/home"}>{t("Home")}</Link>
                        </li>
                        <li>
                            <Link to={"/about-ekikrit"}>{t("About Us")}</Link>
                        </li>

                        <li>
                            <Link to={"/gallery"}>{t("Gallery")}</Link>
                        </li>
                    </ul>
                </div>
                <div className="our-services">
                    <h4>{t("Contact Us")}</h4>
                    <ul>
                        <li className="content">
                            <FiPhoneCall /> 041-45687
                        </li>
                        <li className="content">
                            {" "}
                            <FiMail />
                            EkikritKrishaksacop@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="our-services">
                    <h4>{t("Location")}</h4>
                    <ul>
                        <li className="content">
                            <IoLocation />
                            रत्ननगर-१६, हात्तीगाडे{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                © 2023 Ekikrit Krishak Credit and Savings Coop
            </div>
        </StyledFooterComponent>
    );
};

export default FooterComponent;
