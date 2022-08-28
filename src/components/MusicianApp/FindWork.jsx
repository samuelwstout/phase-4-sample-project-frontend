import React from 'react'
import NavbarMusician from '../Navigation/NavbarMusician'

const FindWork = ({logoutMusician, currentMusician}) => {
  return (
    <div>
        <h2>Hey, {currentMusician.first_name}!</h2>
        <NavbarMusician logoutMusician={logoutMusician} />
        <input placeholder='search'></input>
        <input type='submit'></input>

        <div>
            <h2>Headline</h2>
            <h3>budget</h3>
            <h3>date</h3>
            <h3>location</h3>
            <h3>Bio</h3>
            <button>Save Job</button>
            <button>Apply</button>
        </div>
        <p>So on...</p>
    </div>
  )
}

export default FindWork