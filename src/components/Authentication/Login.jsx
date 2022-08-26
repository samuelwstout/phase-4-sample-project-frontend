import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals'
import { Link, useNavigate } from 'react-router-dom'

const SignupAsMusician = ({ loginMusician }) => {

  const navigate = useNavigate()

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const strongParams = {
        email,
        password
    }

    fetch(baseUrl + '/login', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(r => r.json())
      .then(data => {
        loginMusician(data.musician)
        localStorage.setItem('jwt', data.token)
        if (data.musician) navigate('/find_work')
      })
  }



  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' value={ email } onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' value={ password } onChange={e => setPassword(e.target.value)} />
          </div>

          <input type='submit' value='Login' />
        </form>

        <h4>Don't have an account? <button><Link to="/signup">Sign up</Link></button></h4>
    </div>
  )
}

export default SignupAsMusician