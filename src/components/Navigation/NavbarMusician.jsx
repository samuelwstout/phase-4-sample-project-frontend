import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavbarMusician = ({logoutMusician}) => {

  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    logoutMusician()
    navigate('/')
  }

  return (
    <div>
      <ul>
      <li onClick={ handleLogout }>Freenote</li>
        <li><Link to="/find_work">Find Work</Link></li>
        <li><Link to="/my_applications">My Applications</Link></li>
        <li onClick={ handleLogout }>Logout</li>
      </ul>
    </div>
  )
}

export default NavbarMusician