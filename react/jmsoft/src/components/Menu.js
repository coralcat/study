import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  const activeStyle = {
    color: "green",
    fontSize: '2rem'
  }

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><NavLink to="/support" activeStyle={activeStyle}>Support</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu