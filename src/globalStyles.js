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
	padding: 0 !important;
	border-radius: 0 !important;
	margin-top:7px !important;
  }
  .ant-popover-placement-bottomLeft {
	${"" /* inset: 319px auto auto 366.938px !important; */}
  }

  .floating-create {
    position: absolute;
    cursor: pointer;
    right: 20px;
    bottom: 20px;
    z-index:10;
  }

  .ant-modal-close {
	${
        "" /* top: -5px !important;
	inset-inline-end: 5px !important; */
    }
	width: 35px !important;
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
