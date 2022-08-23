import React from 'react'

const SignupAsMusician = () => {
  return (
    <div>
        <h1>Sign up to find work</h1>
        <input placeholder='First name'></input>
        <input placeholder='Last name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
        <input placeholder='Instrument(s)'></input>
        <input placeholder='Location'></input>
        <input placeholder='Bio'></input>
        <p>Import video or audio files of you performing (at least 2)</p>
        <button>Select files</button>
        <button>Create my account</button>
    </div>
  )
}

export default SignupAsMusician