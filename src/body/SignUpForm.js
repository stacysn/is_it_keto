import React, { Component } from "react";
import "../assets/styles/SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      name: "",
      weight: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = event => {
    event.preventDefault();
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    }).then(response => {
      return response.json().then(json => {
        if (response.ok) {
          console.log("Sign up success!");
        } else {
          console.log("Sign up failed :(");
        }
      });
    });
  };

  render() {
    return (
      <div>
        <div className="sign-up-form">
          <form onSubmit={this.handleSignUp}>
            <h4>Sign Up</h4>
            <input
              name="userName"
              id="userName"
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
                value={this.state.password}
                onChange={this.handleChange}
                autoFocus
              />
              <br />
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              autoFocus
            />
            <br />
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

export default SignUpForm;
