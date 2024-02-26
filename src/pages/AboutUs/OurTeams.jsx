import React from "react";
import NavbarComponent from "../../components/Nabvar/Navbar";
import FooterComponent from "../../components/FooterComponent";
import { StyledComponent } from "../style";
import { teamList } from "./helper";
import TeamComponent from "./TeamComponent";
import icon from "../../assets/members.png";
import { useTranslation } from "react-i18next";

const OurTeams = () => {
    const mainItem = {
        profile: icon,
        name: "Hari Ram Basnet",
        role: "Chairman",
    };
    const { t } = useTranslation();
    return (
        <>
            <NavbarComponent />
            <StyledComponent>
                <div className="our-team-wrapper">
                    <div className="heading">
                        <h1>{t("Our Team")}</h1>
                        <p>
                            {t("Meet our dynamic team, who made it possible")}
                        </p>
                    </div>
                    <div className="team-first">
                        <TeamComponent team={mainItem} />
                    </div>
                    <div className="teams">
                        {teamList.map((single) => (
                            <TeamComponent team={single} key={single?.key} />
                        ))}
                    </div>
                </div>
            </StyledComponent>
            <FooterComponent />
        </>
    );
};

export default OurTeams;
