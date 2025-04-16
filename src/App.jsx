import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './Component/Pages/SignIn'
import AdminLogin from './Component/Admin/AdminLogin'
import SignUp from './Component/Pages/SignUp'
import ProtectedRoutes from './Component/Routes/ProtectedRoutes'
import Home from './Component/Pages/Home'
import Layout from './Component/Utils/Layout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>          
          {/* Public Routes */}
          <Route path="/" element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/admin-login" element={<AdminLogin/>} />

          {/* Protected Routes Wrapped in Layout */}
          <Route
            path='/*'
            element={
              <ProtectedRoutes>
                <Layout>
                  <Routes>
                    <Route path='home' element={<Home/>} />
                  </Routes>
                </Layout>
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
