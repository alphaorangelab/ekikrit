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
    height: 320px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    h2 {
        margin-bottom: 20px;
        border-bottom: 3px solid green;
        display: inline;
    }

    .description {
        font-weight: 800;
        font-size: 18px;
        text-align: center;
    }

    .profile-title {
        font-weight: 800;
        font-size: 23px;
    }
`;

export const StyledFooterComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #027d33;
    color: #ffffff;

    h2 {
        border-bottom: 3px solid green;
        display: inline;
    }

    .footer-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;

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
        }

        /* Small devices (600px and up) */
        @media only screen and (max-width: 767px) {
            padding: 10px;
        }
    }

    .footer-copyright {
        background: #014c1f;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        color: #ffffff;
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

export const ChairmanMessageStyle = styled.div`
    .container {
        background-color: #f9f9f9;
    }

    .message-ceo-section {
        padding: 50px 0;
        margin: 0 auto;
        width: 70%;
        box-sizing: border-box;

        @media (max-width: 768px) {
            width: 90%; /* Adjust width for smaller screens */
        }
    }

    .row {
        display: flex;
        gap: 20px;

        @media (max-width: 768px) {
            flex-direction: column; /* Stack columns vertically */
            align-items: center; /* Center items */
        }
    }

    .message-ceo-section h2 {
        font-size: 24px;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            text-align: center; /* Center align heading */
            font-size: 20px; /* Adjust font size */
        }
    }

    .message-ceo-section p {
        font-size: 16px;
        line-height: 1.8;

        @media (max-width: 768px) {
            font-size: 14px; /* Adjust font size for mobile */
            text-align: center; /* Center align text */
        }
    }

    .chairman-img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            margin-top: 20px; /* Add spacing above image */
        }
    }

    @media (max-width: 768px) {
        .message-ceo-section .col-lg-6,
        .message-ceo-section .col-md-6 {
            text-align: center;
            margin-bottom: 30px;
        }
    }
`;

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
        border-bottom: 3px solid green;
        display: inline-block !important;
        align-self: flex-start;

        @media (max-width: 768px) {
            text-align: center; /* Center align heading on smaller screens */
            font-size: 22px; /* Adjust font size for mobile */
        }
    }

    .about-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column; /* Stack content vertically */
            align-items: center;
            gap: 20px; /* Add spacing between sections */
        }
    }

    .description {
        width: 100%;
        text-align: justify;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            width: 60%; /* Maintain width for larger screens */
        }

        @media (max-width: 768px) {
            width: 90%; /* Reduce width for smaller screens */
            font-size: 14px; /* Adjust font size for readability */
        }
    }

    .logo-container {
        flex-shrink: 0; /* Prevent the logo from shrinking */
        margin-top: 20px; /* Add spacing above logo */
        text-align: center;

        img {
            max-width: 100%; /* Ensure image is responsive */
            height: auto; /* Maintain aspect ratio */

            @media (max-width: 768px) {
                max-width: 80%; /* Adjust image size for smaller screens */
            }
        }
    }
`;
