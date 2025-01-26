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
                            ekikritkrishakekikritkrishak@gmail.com
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
                        <li>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.85546883408833!2d84.55325738523035!3d27.665138577576258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM5JzU0LjUiTiA4NMKwMzMnMTIuMCJF!5e0!3m2!1sen!2snp!4v1716610393505!5m2!1sen!2snp"
                                width="350"
                                height="200"
                                style={{
                                    border: "none",
                                    outline: "none",
                                    marginTop: "5px",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                © 2025 Ekikrit Krishak Credit and Savings Coop
            </div>
        </StyledFooterComponent>
    );
};

export default FooterComponent;
