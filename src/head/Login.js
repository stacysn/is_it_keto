import React, { Component } from "react";

import "../assets/styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return <h3 className="login">Login</h3>;
  }
}

export default Login;
