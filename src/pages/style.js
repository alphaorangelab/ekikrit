import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #000000;

    .carousel-container {
    }
    .company-description {
        height: 400px;
        padding: 20px 50px;
    }
    .institutional-profile {
        display: flex;
        padding: 20px 50px;
        flex-direction: column;
    }
    .institutional-profile .profile-card-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }
`;

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    .container {
        display: flex;
        justify-content: space-between;
    }
    .container .description {
        width: 50%;
    }
`;

export const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    padding: 50px;
`;
