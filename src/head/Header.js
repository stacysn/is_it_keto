import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from '../redux/store';
import LoginForm from "./LoginForm.js";
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className = "header">
        <a href="/"> Is It Keto? </a>
          <nav className='nav-list'>
            <a href="/profile">My Profile</a>
            <a href="/signup">Sign Up</a>
          </nav>
          <LoginForm />
      </div>
    );
  }
}
export default Header;
