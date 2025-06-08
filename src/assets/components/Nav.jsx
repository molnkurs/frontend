import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"

const Nav = () => {
  return (
    <nav  className='sidebar'>
      <div >
      <img src={logo} alt="" />
      </div>
      <NavLink to="/">Events</NavLink>
    </nav>
  )
}

export default Nav