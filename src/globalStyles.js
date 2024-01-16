// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  /* Set a base font size using rem units */

  /* Add more global styles as needed */
  ${
      "" /* .ant-layout .ant-layout-sider {
	background:#027d34;
  } */
  }
  .ant-popover-inner {
	padding: 0 !important
  }
  ${
      "" /* .ant-menu-light .ant-menu-item-selected{
	background: #272727 !important;
  }
  .ant-menu-light .ant-menu-item:not(.ant-menu-item-disabled):focus-visible {
		outline: none !important;
  } */
  }
  
`;

export default GlobalStyle;
