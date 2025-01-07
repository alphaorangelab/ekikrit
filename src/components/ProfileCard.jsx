import { StyledProfileCard } from "./style";

const ProfileCard = ({ data }) => {
    return (
        <StyledProfileCard>
          
            <div>
                <img src={data?.image} height={140} width={140} alt="image" />
            </div>
            <div className="profile-title">{data?.title}</div>
            <div className="description">{data?.description}</div>
        </StyledProfileCard>
    );
};

export default ProfileCard;
