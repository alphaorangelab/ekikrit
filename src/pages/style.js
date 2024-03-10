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

        @media only screen and (min-width: 1400px) {
            padding: 20px 300px;
        }
        /* Large devices (992px and up) */
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
            padding: 20px 150px;
        }

        /* Large devices (992px and up) */
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            padding: 20px 50px;
        }

        /* Medium devices (768px and up) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
            padding: 20px;
        }

        /* Small devices (600px and up) */
        @media only screen and (max-width: 767px) {
            padding: 20px;
        }
    }

    .institutional-profile {
        display: flex;
        flex-direction: column;
        padding: 20px;

        @media only screen and (min-width: 1400px) {
            padding: 20px 300px;
        }
        /* Large devices (992px and up) */
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
            padding: 20px 150px;
        }

        /* Large devices (992px and up) */
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            padding: 20px 50px;
        }

        /* Medium devices (768px and up) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
            padding: 20px;
        }

        /* Small devices (600px and up) */
        @media only screen and (max-width: 767px) {
            padding: 20px;
        }
    }

    .institutional-profile .profile-card-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        @media (max-width: 768px) {
            gap: 50px;
            justify-content: center;
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

    @media (max-width: 768px) {
        padding: 10px;
        justify-content: center;
    }

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
    minheight: 50vh;

    @media (max-width: 768px) {
        padding: 10px;
        justify-content: center;
    }

    .gallery-container {
        border: 1px solid #dddddd;
        padding: 15px;
        border-radius: 4px;
        transition: border 0.2s ease-in-out;
        min-height: 350px;
        min-width: 400px;

        img {
            height: 350px;
            width: 400px;
        }

        @media (max-width: 768px) {
            min-height: 300px;
            min-width: 300px;

            img {
                height: 300px;
                width: 300px;
            }
        }
    }
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

    @media (max-width: 768px) {
        p {
            font-size: 14px;
            line-height: 24px;
        }

        li {
            font-size: 16px;
            line-height: 30px;
        }
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
