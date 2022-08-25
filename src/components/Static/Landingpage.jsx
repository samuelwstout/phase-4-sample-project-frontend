import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Freenote</h1>
      <h3>a job board for freelance musicians</h3>
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/signup">Sign up</Link></button>
    </div>
  )
}

export default Home