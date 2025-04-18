import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './Component/Pages/SignIn'
import AdminLogin from './Component/Admin/AdminLogin'
import SignUp from './Component/Pages/SignUp'
import ProtectedRoutes from './Component/Routes/ProtectedRoutes'
import HomePages from './Component/Pages/Home'
import Layout from './Component/Utils/Layout'
import ProfilePage from './Component/LeftSidePages/ProfilePage'
import SavePage from './Component/LeftSidePages/SavePage'
import FollowingPage from './Component/LeftSidePages/FollowingPage'
import Communities from './Component/LeftSidePages/Communities'

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
                    <Route path='home' element={<HomePages />} />
                    <Route path='profile' element={<ProfilePage />} />
                    <Route path='saved' element={<SavePage />} />
                    <Route path='following' element={<FollowingPage />} />
                    <Route path='communities' element={<Communities />} />
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
