import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './Component/Pages/SignIn'
import AdminLogin from './Component/Admin/AdminLogin'
import SignUp from './Component/Pages/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/admin-login" element={<AdminLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
