import styled from "@emotion/styled";

export const StyledNavbarMarquee = styled.div`
    background: #ffffff;
    color: #027d33;
    display: flex;
    align-items: center;
    height: 40px;
    @keyframes scroll {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .marquee-container {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .marquee-content {
        display: inline-block;
        animation: scroll 10s linear infinite;
    }
    .contacts {
        width: 50%;
        background: #ff0000;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 10px;
    }

    .contacts .content {
        display: flex;
        align-items: center;
        gap: 3px;
    }
`;

export const StyledProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 250px;
    background: #edf6ee;
    border-radius: 5px;

    .description {
        font-weight: 800;
        font-size: 20px;
    }
`;

export const StyledFooterComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #027d33;
    color: #ffffff;

    .footer-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;

        @media (min-width: 768px) {
            padding: 20px 300px;
        }
    }

    .footer-copyright {
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        color: #666666;
    }

    .footer-container .our-services {
        width: 100%;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            width: calc(25% - 20px);
        }

        h4 {
            text-decoration: underline;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        a {
            text-decoration: none;
            color: #ffffff;
        }
    }
    .our-services .content {
        display: flex;
        align-items: center;
        gap: 3px;
    }
`;

export const PlusButton = styled.button`
    border-radius: 50%;
    background: #027d34;
    box-shadow: 2px 2px 3px #999999;
    color: white;
    font-size: 20px;
    right: ${(props) => props.positionRight || "40px"};
    bottom: ${(props) => props.positionBottom || "30px"};
    width: 50px;
    height: 50px;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: ${(props) => props.position || "fixed"};

    :focus {
        outline: none;
    }
`;

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        ${"" /* text-align: center; */}
        margin-bottom: 20px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .description {
        width: 100%;
        text-align: justify;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            width: 60%; /* Adjust the width based on your preference */
        }
    }

    .logo-container {
        flex-shrink: 0; /* Prevent the logo from shrinking */
        margin-top: 20px; /* Add some spacing */
    }
`;
