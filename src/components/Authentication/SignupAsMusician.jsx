import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals'
import { Link, useNavigate } from 'react-router-dom'

const SignupAsMusician = ({ loginMusician }) => {

  const navigate = useNavigate()

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [instrument, setInstrument] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [media_url1, setMedia1] = useState('')
  const [media_url2, setMedia2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const strongParams = {
      musician: {
        first_name,
        last_name,
        email,
        password,
        instrument,
        location,
        bio,
        media_url1,
        media_url2
      }
    }

    fetch(baseUrl + '/musicians', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(r => r.json())
      .then(data => {
        loginMusician(data.musician)
        localStorage.setItem('jwt', data.token)
        navigate('/find_work')
      })
  }


  return (
    <div>
        <h1>Sign up to find work</h1>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor='first_name'>First name: </label>
            <input type='text' name='first name' id='first_name' value={ first_name } onChange={e => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='last_name'>Last name: </label>
            <input type='text' name='last name' id='last_name' value={ last_name } onChange={e => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' value={ email } onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' value={ password } onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor='instrument'>Instrument(s): </label>
            <input type='text' name='instrument' id='instrument' value={ instrument } onChange={e => setInstrument(e.target.value)} />
          </div>
          <div>
            <label htmlFor='location'>Location: </label>
            <input type='text' name='location' id='location' value={ location } onChange={e => setLocation(e.target.value)} />
          </div>
          <div>
            <label htmlFor='bio'>Bio: </label>
            <textarea type='text' name='bio' id='bio' value={ bio } onChange={e => setBio(e.target.value)} />
          </div>
          <div>
            <label htmlFor='media1'>Import two YouTube videos of you performing: </label>
            <input type='text' name='media1' id='media1' value={ media_url1 } onChange={e => setMedia1(e.target.value)} />
            <input type='text' name='media2' id='media2' value={ media_url2 } onChange={e => setMedia2(e.target.value)} />
          </div>

          <input type='submit' value='Create account' />
        </form>

        <h4>Already have an account? <button><Link to="/login">Log in</Link></button></h4>
    </div>
  )
}

export default SignupAsMusician