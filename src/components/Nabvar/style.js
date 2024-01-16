import styled from "@emotion/styled";

export const StyledNavbar = styled.div`
    ${
        "" /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    padding: 10px 20px;
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

    a {
        text-decoration: none;
        color: ${(props) => (props.isActive ? "blue" : "#000000")};
        font-weight: 500;
        font-size: 16px;
    }

    a:hover {
        transform: translateY(-2px);
        color: blue;
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
