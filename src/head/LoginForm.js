import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../redux/reducer";

import "../assets/styles/Login.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  render() {
    let { userName, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    if (this.props.isLoginSuccess === true) {
      return (
        <div>
          <nav className="nav-list">
            <a href="/profile">My Profile</a>
            <a href="/home" type="submit" onClick={this.logout}>
              Logout
            </a>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav-list signup-nav">
            <a href="/signup">Sign Up</a>
          </nav>
          <form name="loginForm" id="loginForm" onSubmit={this.onSubmit}>
            <div className="form-group-collection">
              <div className="form-group login-form-username">
                <label>UserName:</label>
                <input
                  name="userName"
                  onChange={e => this.setState({ userName: e.target.value })}
                  value={userName}
                />
              </div>

              <div className="form-group login-form-password">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={e => this.setState({ password: e.target.value })}
                  value={password}
                />
              </div>
            </div>

            <input type="submit" value="Login" className="login-button" />

            <div className="message">
              {isLoginPending && <div>Please wait...</div>}
              {isLoginSuccess && <div>Success.</div>}
              {loginError && <div>{loginError.message}</div>}
            </div>
          </form>
        </div>
      );
    }
  }

  onSubmit = function(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: "",
      password: ""
    });
  };

  logout = function(e) {
    e.preventDefault();
    this.props.logout(false);
  };
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
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
