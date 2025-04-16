import React, { useState } from 'react'
import Logo from "../../assets/img/SocialEcho.jpg"
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';

function AdminLogin() {
  const [usernameInput , setUsernameInut] = useState("");
  const [passwordInput , setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSbmit = async(event) => {  
    event.preventDefault();
    setError("");
    setSuccess("");

    const userPayload = {
      username: usernameInput,
      password: passwordInput
    }
  }

  return (
   <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
         <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[26rem] text-center'>

          {/* Back Arrow Button */}
          <button 
            onClick={() => navigate(-1)} 
            className='absolute top-4 left-4 text-gray-500 hover:text-black transition duration-300 cursor-pointer'
          >
            <FaArrowLeft size= {20}/>
          </button>

          {/* Logo*/}
          <div className='flex justify-center mb-2'>
            <img src={Logo} className='h-7' />
          </div>
          
          <p className='text-center text-gray-500 font-bold'>Sign in as Admin</p>

          {/* From Container */}
          <form  onSubmit={handleSbmit} className='mt-6'>
            <input
              type='text'
              placeholder='Username'
              value={usernameInput}
              onChange={(e) => setUsernameInut(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <input
              type='password'
              placeholder='password'
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <button 
                className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg'
                type='submit'
            >
              Sign In
            </button>            
          </form>

          {/* Error Message */}
          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>{success}</p>}
      </div>
    </div>
  )
}

export default AdminLogin
