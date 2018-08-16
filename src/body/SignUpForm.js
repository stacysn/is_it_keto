import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";
import { browserHistory, withRouter } from "react-router-dom";

import "../assets/styles/SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      name: "",
      weight: "",
      feet: "",
      inches: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = async event => {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    });
    const json = await response.json();
    if (!json.userExists) {
      console.log("Sign up success!");
      let { userName, password } = this.state;
      this.props.login(userName, password);
      this.setState({
        userName: "",
        password: ""
      });
      this.props.history.push("/");
    } else {
      alert("Username already taken");
    }
  };

  render() {
    let { userName, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    if (isLoginSuccess) {
      this.props.history.push("/");
    } else {
      return (
        <div id="background-container">
          <div className="sign-up-form">
            <form onSubmit={this.handleSignUp}>
              <label htmlFor="username">Username: </label>
              <input
                name="userName"
                id="userName"
                minLength="4"
                maxLength="8"
                placeholder="User Name"
                value={this.state.userName}
                onChange={this.handleChange}
                autoFocus
              />
              <br />
              <label htmlFor="password">Password: </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="password"
                minLength="6"
                maxLength="10"
                value={this.state.password}
                onChange={this.handleChange}
                autoFocus
              />
              <br />
              <label id="name-label" htmlFor="name">Name: </label>
              <input
                name="name"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                autoFocus
              />
              <br />
              <label id="weight-label" htmlFor="name">Weight: </label>
              <input
                name="weight"
                id="weight"
                placeholder="Weight"
                value={this.state.weight}
                onChange={this.handleChange}
                autoFocus
              />
              <br />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(login(userName, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpForm));
