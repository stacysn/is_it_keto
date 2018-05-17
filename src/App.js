import React, { Component } from "react";
import "./assets/styles/App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
        <div className="footer-copyright">
          <div className="container" style={{ fontSize: "16px" }}>
            © 2018 Copyright:{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/ryan-barrett"
            >
              Ryan Barrett
            </a>,{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/dalazaro"
            >
              Daryl Lazaro
            </a>, &{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/stacysn"
            >
              Stacy Suen
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
