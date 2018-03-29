import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from "./Login.js";
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1> Keto Header </h1>
        <Login />
      </div>
    );
  }
}
export default Header;
