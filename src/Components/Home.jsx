
// Home.jsx
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if(res.data.status) {
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>Menu
      
      <br /> <br />
      <button onClick={handleLogout}>Login</button>
      <br /> <br />
      <button><Link to="/Urlshortner" >url-shortener</Link></button>
      <br /> <br />
      <button><Link to="/dashboard" >Dashboard</Link></button>
    </div>
  )
}

export default Home