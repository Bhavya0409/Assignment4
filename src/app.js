import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import './styles/main.scss';

ReactDOM.render(<App/>, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
