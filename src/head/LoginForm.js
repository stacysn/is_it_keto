import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../redux/reducer";
import { browserHistory, withRouter } from "react-router-dom";

import "../assets/styles/Login.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//changes in the forms need to be handled by a function
  onSubmit = e => {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: "",
      password: ""
    });
  };

  logout = e => {
    e.preventDefault();
    this.props.logout(false);
    this.props.history.push("/");
  };

  render() {
    let { userName, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    if (
      this.props.history.location.pathname === "/profile" &&
      this.props.isLoginSuccess === true
    ) {
      return (
        <div>
          <nav className="nav-list">
            <a href="/home" type="submit" onClick={this.logout}>
              Logout
            </a>
          </nav>
        </div>
      );
    } else if (this.props.isLoginSuccess === true) {
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

                <div className="form-group">
                  <input type="submit" value="Login" className="login-button login-content" />
                </div>

              </div>
                
              <div className="message">
                {isLoginPending && <div>Please wait...</div>}
                {isLoginSuccess && <div>Success.</div>}
                {loginError && <div>{loginError.message}</div>}
              </div>

              <div className="signup-nav">
                Need an account?
                <a href="/signup">Sign Up!</a>
              </div>
            </form>
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
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(LoginForm)
);
