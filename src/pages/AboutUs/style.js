import styled from "@emotion/styled";

export const StyledAboutEkikrit = styled.div`
    padding: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: justify;

    p {
        font-size: 18px;
        line-height: 32px;
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

export const StyledTeamComponent = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    .member-profile {
        height: 345px;
        width: 276px;
        margin-bottom: 8px;

        img {
            border-radius: 10px;
        }
    }
    .member-name {
        font-size: 18px;
        font-weight: 700;
        color: #027d34;
    }

    .member-role {
        font-size: 16px;
        line-height: 21px;
    }
`;
