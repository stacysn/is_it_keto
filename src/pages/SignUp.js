import React, { Component } from "react";
import Header from "../head/Header.js";
import SignUpForm from "../body/SignUpForm.js";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUpForm />
      </div>
    );
  }
}
export default SignUp;
