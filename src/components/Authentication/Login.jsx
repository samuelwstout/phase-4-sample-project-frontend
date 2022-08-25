import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Log in to Freenote</h1>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <button>Log in</button>
      <h4>Don't have a Freenote account? <button><Link to="/signup">Sign up</Link></button></h4>
    </div>
  )
}

export default Login