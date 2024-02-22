import { StyledProfileCard } from "./style";

const ProfileCard = ({ data }) => {
    return (
        <StyledProfileCard>
            <div>
                <img src={data?.image} height={80} width={80} alt="image" />
            </div>
            <div>{data?.title}</div>
            <div className="description">{data?.description}</div>
        </StyledProfileCard>
    );
};

export default ProfileCard;
