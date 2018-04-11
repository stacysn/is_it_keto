import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import LoginForm from "./LoginForm.js";
import { browserHistory, withRouter } from "react-router-dom";

import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    if (this.props.history.location.pathname === "/signup") {
      return (
        <div className="header">
          <a href="/"> Is It Keto? </a>
        </div>
      );
    } else {
      return (
        <div className="header">
          <a href="/"> Is It Keto? </a>
          <LoginForm />
        </div>
      );
    }
  }
}
export default withRouter(Header);
