import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.store.isLoginSuccess);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { userName, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    if (this.props.isLoginSuccess === true) {
      return <p>Logged In</p>;
    } else {
      return (
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label>UserName:</label>
              <input
                name="userName"
                onChange={e => this.setState({ userName: e.target.value })}
                value={userName}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
              />
            </div>
          </div>

          <input type="submit" value="Login" />

          <div className="message">
            {isLoginPending && <div>Please wait...</div>}
            {isLoginSuccess && <div>Success.</div>}
            {loginError && <div>{loginError.message}</div>}
          </div>
        </form>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: "",
      password: ""
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
