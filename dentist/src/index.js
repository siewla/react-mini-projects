import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter as Router } from "react-router-dom";

import "./styles.css";

ReactDOM.render(
  <Router basename={process.env.REACT_APP_BASE_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);
