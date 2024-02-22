import { StyledTeamComponent } from "./style";

const TeamComponent = ({ team }) => {
    console.log(team);
    return (
        <StyledTeamComponent>
            <div className="member-profile">
                <img
                    src={team?.profile}
                    height={"100%"}
                    width={"100%"}
                    alt="member"
                />
            </div>
            <div className="member-name">{team?.name}</div>
            <div className="member-role">{team?.role}</div>
        </StyledTeamComponent>
    );
};

export default TeamComponent;
