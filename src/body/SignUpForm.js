import React, { Component } from "react";
import "../assets/styles/SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      name: "",
      weight: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="sign-up-form">
          <form onSubmit>
            <h4>Sign Up</h4>
            <label htmlFor="userName">User Name: </label>
            <input
              name="userName"
              id="userName"
              placeholder="userName"
              value={this.state.userName}
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
            <label htmlFor="weight">Weight: </label>
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
