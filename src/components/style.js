import styled from "@emotion/styled";

export const StyledNavbarMarquee = styled.div`
    background: #027d33;
    color: #ffffff;
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
        width: 50%;
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
    height: 350px;
    color: #ffffff;

    .footer-container {
        display: flex;
        justify-content: space-around;
        padding: 20px 40px;
    }

    .footer-copyright {
        background: #025925;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    }

    .footer-container .our-services {
        display: flex;
        flex-direction: column;
        cursor: pointer;

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
