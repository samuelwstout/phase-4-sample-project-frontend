import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals'
import { Link } from 'react-router-dom'

const SignupAsMusician = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [instrument, setInstrument] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [media, setMedia] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    const strongParams = {
      musician: {
        firstName,
        lastName,
        email,
        password,
        instrument,
        location,
        bio,
        media
      }
    }

    fetch(baseUrl + '/musicians', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
  }


  return (
    <div>
        <h1>Sign up to find work</h1>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor='first_name'>First name: </label>
            <input type='text' name='first name' id='first_name' value={ firstName } onChange={e => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='last_name'>Last name: </label>
            <input type='text' name='last name' id='last_name' value={ lastName } onChange={e => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' value={ email } onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='text' name='password' id='password' value={ password } onChange={e => setPassword(e.target.value)} />
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
            <input type='text' name='bio' id='bio' value={ bio } onChange={e => setBio(e.target.value)} />
          </div>
          <div>
            <label htmlFor='media'>Import a video or audio file of you performing: </label>
            <input type='file' name='media' id='media' value={ media } onChange={e => setMedia(e.target.value)} />
          </div>

          <input type='submit' value='Create account' />
        </form>

        <h4>Already have an account? <button><Link to="/login">Log in</Link></button></h4>
    </div>
  )
}

export default SignupAsMusician