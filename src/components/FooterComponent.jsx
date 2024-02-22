import GoogleMapComponent from "./Map";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";

import { StyledFooterComponent } from "./style";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <StyledFooterComponent>
            <div className="footer-container">
                <div className="our-services">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                            <Link to={"/loan-service"}>Loan Service</Link>{" "}
                        </li>
                        <li>
                            <Link to={"/deposit-service"}>Deposit Service</Link>
                        </li>
                    </ul>
                </div>
                <div className="our-services">
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <Link to={"/home"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about-ekikrit"}>About Us</Link>
                        </li>

                        <li>
                            <Link to={"/gallery"}>Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div className="our-services">
                    <h4>Contact Us</h4>
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
                    <h4>Location</h4>
                    <ul>
                        <li className="content">
                            <IoLocation />
                            रत्ननगर-१६, हात्तीगाडे{" "}
                        </li>
                    </ul>
                    {/* <GoogleMapComponent /> */}
                </div>
            </div>
            <div className="footer-copyright">
                © 2023 Ekikrit Krishak Credit and Savings Coop
            </div>
        </StyledFooterComponent>
    );
};

export default FooterComponent;
