import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMusician = () => {
  return (
    <div>
      <ul>
      <li><Link to="/">Freenote</Link></li>
        <li><Link to="/find_work">Find Work</Link></li>
        <li><Link to="/my_applications">My Applications</Link></li>
      </ul>
    </div>
  )
}

export default NavbarMusician