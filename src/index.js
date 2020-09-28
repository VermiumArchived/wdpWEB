import "./styles.less";

import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import { history } from "./_helpers";
import { App } from "./app/index";

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
