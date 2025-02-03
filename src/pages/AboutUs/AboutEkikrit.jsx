import { StyledAboutEkikrit } from "./style";
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
                        "Farmers residing in the former Pithuwa-1, currently Ratnanagar Municipality-16, Chitwan district, gathered with the objective of saving money for unforeseen expenses, achieving financial growth, and improving their living standards. Their broader vision was to make the entire Ratnanagar, Kalika, and Khairahani municipalities self-sufficient and prosperous. With this goal in mind, on the 10th of Bhadra, 2055 (B.S.), the 'Shree Bhadrakali Farmers Group' was established under the leadership of then-chairman Bishnu Prasad Aryal. An 11-member executive committee was formed, and it was decided to collect a monthly savings of NPR 10 per member. Gradually, the number of members increased rapidly. After some time, the District Development Committee (DDC) initiated the PEDP program in various Village Development Committees (VDCs). Under this program, our group was officially registered as the 'Chitwan Farmers Community Institution,' replacing the previous name, and we continued our operations under the PEDP program. Over time, the local people’s warmth and enthusiasm for the institution grew significantly, leading to an increase in membership. Dear fellow members, when we started this institution, our monthly savings began at NPR 10. Over time, we increased it to NPR 20, 30, 50, and 100, and today, we have successfully reached a monthly savings of NPR 1,000. Looking back at our journey, we can clearly see that our lives have undergone a significant transformation."
                    )}
                    <br />
                    <br />
                    {t(
                        "As time passed, our savings amount continued to grow. Realizing the need to secure and safeguard our members' savings, we concluded that transitioning to a cooperative model was necessary. With this decision, the Chitwan Farmers Community Institution underwent its third name change and was renamed Integrated Farmers Savings and Credit Cooperative Institution. On 23rd Bhadra, 2068 B.S., the institution was officially registered as a savings and credit cooperative under registration number 978 at the District Cooperative Division and Training Office. Upon registration, we received one copy of the statute and one copy of the loan policy under the savings and credit cooperative framework. Over time, we have amended these documents as needed through the general assembly to keep them relevant to changing circumstances."
                    )}
                    <br />
                    <br />
                </p>
            </StyledAboutEkikrit>
            {/* <NavbarMarquee /> */}

            <FooterComponent />
        </>
    );
};

export default AboutEkikrit;
