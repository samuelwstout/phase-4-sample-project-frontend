import React from 'react'
import NavbarContractor from '../Navigation/NavbarContractor'


const CreateJob = () => {
  return (
    <div>
      <NavbarContractor />
        <h1>Create Job Post</h1>
        <form>
            <input placeholder='Headline'></input>
            <input placeholder='Description'></input>
            <input placeholder='Date(s)'></input>
            <input placeholder='Location'></input>
            <input placeholder='Budget'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default CreateJob