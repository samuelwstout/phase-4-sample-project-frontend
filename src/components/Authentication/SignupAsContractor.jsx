import React from 'react'
import { Link } from 'react-router-dom'

const SignupAsContractor = () => {
  return (
    <div>
        <h1>Sign up to hire talent</h1>
        <form>
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