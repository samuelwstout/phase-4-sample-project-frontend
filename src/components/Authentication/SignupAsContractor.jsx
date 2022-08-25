import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignupAsContractor = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/create_job")
  }

  return (
    <div>
        <h1>Sign up to hire talent</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder='First name'></input>
            <input placeholder='Last name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Password'></input>
            <input type='submit'></input>
        </form>
        <h4>Already have an account? <button><Link to="/login">Log in</Link></button></h4>
    </div>
  )
}

export default SignupAsContractor