import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #000000;

    .carousel-container {
        // Add styles as needed
    }

    .company-description {
        padding: 20px;

        @media (min-width: 768px) {
            padding: 20px 300px;
        }
    }

    .institutional-profile {
        display: flex;
        flex-direction: column;
        padding: 20px;

        @media (min-width: 768px) {
            padding: 20px 300px;
        }
    }

    .institutional-profile .profile-card-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        @media (min-width: 768px) {
            gap: 50px;
        }
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
        width: 70%;
        text-align: justify;
    }
`;

export const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    padding: 100px 150px;

    .truncate {
        width: 190px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const StyledGalleryContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 50px 150px;
`;

export const StyledComponent = styled.div`
    padding: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: justify;
    color: #333333;

    p {
        font-size: 18px;
        line-height: 32px;
    }

    li {
        font-size: 22px;
        line-height: 52px;
    }

    .our-team-wrapper {
        display: flex;
        flex-direction: column;

        .heading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .team-first {
            margin: 50px 0;
        }

        .teams {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 60px;
        }
    }

    @media screen and (min-width: 576px) {
        padding: 30px;
    }

    @media screen and (min-width: 768px) {
        padding: 50px;
    }

    @media screen and (min-width: 1200px) {
        padding: 50px 300px;
    }
`;
