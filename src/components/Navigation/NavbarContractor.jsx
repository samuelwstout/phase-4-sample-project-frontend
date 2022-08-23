import React from 'react'
import { Link } from 'react-router-dom'

const NavbarContractor = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Freenote</Link></li>
        <li><Link to="/create_job">Create Job</Link></li>
        <li><Link to="/my_jobs">My Job</Link></li>
      </ul>
    </div>
  )
}

export default NavbarContractor