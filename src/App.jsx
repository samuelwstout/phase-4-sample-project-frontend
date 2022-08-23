import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './components/Static/Landingpage'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import SignupAsContractor from './components/Authentication/SignupAsContractor'
import SignupAsMusician from './components/Authentication/SignupAsMusician'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup_as_contractor" element={<SignupAsContractor />} />
        <Route path="/signup_as_musician" element={<SignupAsMusician />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
