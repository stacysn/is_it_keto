import React, { Component } from 'react'
import '../assets/styles/Header.css';


class Header extends Component {
  render () {
    return (
      <div className = "header">
        <a href="/"> Is It Keto? </a>
          <nav className='nav-list'>
            <a href="/profile">My Profile</a>
            <a href="/signup">Sign Up</a>
          </nav>
      </div>
    )
  }
}
export default Header
