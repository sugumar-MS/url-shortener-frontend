// app.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgPassword'
import ResetPassword from './Components/ResetPassword'
import Dashboard from './Components/Dashboard'
import Urlshortner from './Components/Urlshortner'
function App() {
 
  return (
    <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/urlshortner" element={<Urlshortner />}></Route>
      </Routes>
    </BrowserRouter></>
  )
};
   

export default App;