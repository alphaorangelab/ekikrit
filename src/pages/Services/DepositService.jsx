import React from "react";
import NavbarComponent from "../../components/Nabvar/Navbar";
import { StyledComponent } from "../style";
import FooterComponent from "../../components/FooterComponent";
import { useTranslation } from "react-i18next";

const DepositService = () => {
    const { t } = useTranslation();
    return (
        <>
            {" "}
            <NavbarComponent />
            <StyledComponent>
                <h2>{t("Deposit Services")}</h2>
                <ol>
                    <li>जेष्ठ नागरीक बचत योजना (६० वर्ष पुरा भइ सकेपछि)</li>
                    <li>सुरक्षित भविष्य बचत योजना</li>
                    <li>घुमफिर बचत योजना (टुर बचत योजना)</li>
                    <li>शैक्षिक बचत योजना</li>
                    <li> पर्व वचत योजना (चाड पर्वको लागि बचत)</li>
                    <li>साधारण बचत खाता</li>
                    <li>गृहलक्ष्मी बचत योजना</li>
                    <li>बाल बचत योजना र यसका विशेषताहरु</li>
                    <li>
                        {" "}
                        दैनिक खाता बचत गर्दा दिइने व्याज दर र यसका विशेषताहरु
                    </li>
                </ol>
            </StyledComponent>
            <FooterComponent />
        </>
    );
};

export default DepositService;
