import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



registerServiceWorker();
