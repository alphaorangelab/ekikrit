// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Set a base font size using rem units */
  html {
    font-size: 16px;
  }

  body {
    /* Set default font size and other global styles using rem units */
    font-size: 1rem;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  /* Add more global styles as needed */
`;

export default GlobalStyle;
