import React from 'react'
import "./NavBar.css"
import logo from "../../../src/Assets/logo.png"

const NavBar = () => {
  return (
    <div className="nav-container">
      <img className='logo' src={logo} alt='Just In Time Logo'/>
      <div className='categories-container'>
        <nav className='categories-top'>
          <p>HOME</p>
          <p>Arts</p>
          <p>Books</p>
          <p>Business</p>
          <p>Food</p>
        </nav>
        <nav className='categories-bottom'>
          <p>Health</p>
          <p>Movies</p>
          <p>Politics</p>
          <p>Science</p>
          <p>Sports</p>
        </nav>
      </div>
    </div>
  )
}

export default NavBar