import styled from "@emotion/styled";

export const StyledNavbar = styled.div`
    background: #f0f0f0;
    ${
        "" /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    padding: 10px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled("button")`
    all: unset;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: #ffffff;

    a {
        text-decoration: none;
        color: ${(props) => (props.isActive ? "#20c997" : "#f0f0f0")};
        font-weight: 400;
        font-size: 18px;
    }

    a:hover {
        transform: translateY(-2px);
        color: #20c997;
    }
`;

export const StyledAboutUsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;

    padding: 0;
    a {
        text-decoration: none;
        color: #000000;
        font-weight: 500;
        font-size: 16px;
    }

    .content {
        padding: 12px;
    }

    .content:hover {
        background: #f5f5f5;
    }
`;

export const StyledNavbarComponent = styled.div`
    display: flex;
    flex-direction: column;

    .language-switcher {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-header {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        padding: 10px 300px;
        justify-content: space-between;

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        /* Extra-large devices (1200px and up) */

        @media only screen and (min-width: 1400px) {
            padding: 10px 300px;
            justify-content: space-between;
        }
        /* Large devices (992px and up) */
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
            padding: 10px 150px;
            justify-content: space-between;
        }

        /* Large devices (992px and up) */
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            padding: 10px 50px;
            justify-content: space-between;
        }

        /* Medium devices (768px and up) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
            padding: 10px;
            justify-content: center;
            flex-direction: column;
        }

        /* Small devices (600px and up) */
        @media only screen and (max-width: 767px) {
            padding: 10px;
            justify-content: center;
            flex-direction: column;
        }
    }

    .slogan {
        color: #027d34;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;

        .logo {
            width: 400px;
        }

        .logo-text {
            display: flex;
            flex-direction: column;
            color: #027d34;
            font-size: 14px;
            font-weight: 500;
        }
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        color: #027d33;
    }

    .navbar-content {
        background: #027d33;
        padding: 0px 300px;
        display: flex;
        justify-content: space-between;

        @media only screen and (min-width: 1400px) {
            padding: 10px 300px;
        }
        /* Large devices (992px and up) */
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
            padding: 10px 150px;
        }

        /* Large devices (992px and up) */
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            padding: 10px 50px;
        }

        /* Medium devices (768px and up) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
            padding: 10px;
            display: flex;
            justify-content: center;
        }

        /* Small devices (600px and up) */
        @media only screen and (max-width: 767px) {
            padding: 10px;
        }
    }
`;
