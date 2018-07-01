import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'materialize-css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.min.css';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("index")
);
