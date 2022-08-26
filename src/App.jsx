import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './components/Static/Landingpage'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import SignupAsContractor from './components/Authentication/SignupAsContractor'
import SignupAsMusician from './components/Authentication/SignupAsMusician'
import CreateJob from './components/ContractorApp/CreateJob'
import MyJobs from './components/ContractorApp/MyJobs'
import FindWork from './components/MusicianApp/FindWork'
import MyApplications from './components/MusicianApp/MyApplications'
import ContractorProfile from './components/ContractorApp/ContractorProfile'
import { baseUrl, headers, getToken } from './Globals'

const App = () => {

  const [currentMusician, setCurrentMusician] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const loginMusician = (musician) => {
    setCurrentMusician(musician)
    setLoggedIn(true)
  }
  
  const logoutMusician = () => {
    setCurrentMusician({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && !loggedIn) {
      fetch(baseUrl + '/get-current-musician', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
      .then(r => r.json())
      .then(musician => loginMusician(musician))
    } 
  }, [loggedIn])

  return (
    <Router>
      { loggedIn ? <h1>Hey, you're logged in!</h1> : null}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup_as_contractor" element={<SignupAsContractor />} />
        <Route path="/signup_as_musician" element={<SignupAsMusician loginMusician={loginMusician} />} />
        <Route path="/login" element={<Login loginMusician={loginMusician}/>} />
        <Route path="/create_job" element={<CreateJob />} />
        <Route path="/my_jobs" element={<MyJobs />} />
        {/* When a contractor clicks on a job in 'my jobs'. /my_jobs/job/:id */}
        <Route path="/contractor_profile" element={<ContractorProfile />} />
        <Route path="/find_work" element={<FindWork logoutMusician={logoutMusician} />} />
        {/* When musician clicks 'apply' on a job posting (/find_work/job/:id) */}
        <Route path="/my_applications" element={<MyApplications />} />
        <Route path="/musician_profile"></Route>
      </Routes>
    </Router>
  );
}

export default App;
