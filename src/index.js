import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { LIGHT_ASH } from "./utils/color";

import { createGlobalStyle } from "styled-components";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${LIGHT_ASH};
    font-size: 14px;
    font-weight: 500;
  }
`;

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
