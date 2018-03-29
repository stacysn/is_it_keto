import React, { Component } from "react";
import "../assets/styles/SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="sign-up-form">
          <form onSubmit>
            <h4>Sign Up</h4>
            <label htmlFor="userName">User Name: </label>
            <input />
            <br />
            <label htmlFor="weight">Weight: </label>
            <input />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
