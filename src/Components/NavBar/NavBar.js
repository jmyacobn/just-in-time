import React from 'react'
import "./NavBar.css"
import logo from "../../../src/Assets/logo.png"
import { NavLink } from 'react-router-dom'

const NavBar = ({category, setCategory}) => {

  return (
    <div className="nav-container">
      <img className='logo' src={logo} alt='Just In Time Logo'/>
      <div className='categories-container'>
        <nav className='categories-top'>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> setCategory("home")}
            to="/"
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("arts")}}
            to="/arts"
          >
            <p>Arts</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("books")}}
            to={`/books`}
          >
            <p>Books</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("business")}}
            to={`/business`}
          >
            <p>Business</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("food")}}
            to={`/food`}
          >
            <p>Food</p>
          </NavLink>
        </nav>
        <nav className='categories-bottom'>
        <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("health")}}
            to={`/health`}
          >
            <p>Health</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("movies")}}
            to={`/movies`}
          >
            <p>Movies</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("politics")}}
            to={`/politics`}
          >
            <p>Politics</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("science")}}
            to={`/science`}
          >
            <p>Science</p>
          </NavLink>
          <NavLink
            className="nav-link"
            activeclassname="active"
            exact="true"
            onClick={()=> {setCategory("sports")}}
            to={`/sports`}
          >
            <p>Sports</p>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default NavBar