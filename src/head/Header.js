import React, { Component } from 'react'
import '../assets/styles/Header.css';


class Header extends Component {
  render () {
    return (
      <div className = "header">
        <h1> Is It Keto? </h1>
          <nav className='nav-list'>
            <a href='/profile'>Sign In</a>
            <a href="/signup">Sign Up</a>
          </nav>
      </div>
    )
  }
}
export default Header
