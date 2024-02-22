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

    ${
        "" /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */
    }

    ${
        "" /* background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%); */
    }
    ${
        "" /* background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%); */
    }

    .navbar-header {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        padding: 10px 300px;
        justify-content: space-between;

        @media (max-width: 768px) {
            padding: 10px;
            justify-content: center;
        }
    }

    .slogan {
        color: #027d34;
        font-size: 20px;
        font-weight: 500;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;

        .logo {
            height: 80px;
            width: 80px;
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
        padding: 10px 300px;

        @media (max-width: 768px) {
            padding: 10px;
        }
    }
`;
