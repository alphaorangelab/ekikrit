import React from "react";
import NavbarComponent from "../../components/Nabvar/Navbar";
import FooterComponent from "../../components/FooterComponent";
import { StyledComponent } from "../style";

const LoanService = () => {
    return (
        <>
            {" "}
            <NavbarComponent />
            <StyledComponent>
                <h2>Loan Services</h2>
                <ol>
                    <li>घर-घडेरी कर्जा (Home and Land Loan)</li>
                    <li>बैदेशिक राेजगारी कर्जा (Foreigner Employment Loan)</li>
                    <li>लघु कर्जा</li>
                    <li>
                        बैक व्यालेन्स कर्जा तथा भिसा प्रकृया कर्जा (Bank Balance
                        and Visa Processing Loan)
                    </li>
                    <li>सामूहिक जमानी कर्जा</li>
                    <li>सवारी-साधन कर्जा (Vehicle Loan)</li>
                </ol>
            </StyledComponent>
            <FooterComponent />
        </>
    );
};

export default LoanService;
