import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../slice/authSlice';

function SignIn() {  
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSbmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
  

  const userPayload = {email: emailInput , password: passwordInput}
  dispatch(signIn(userPayload));

  const storedUser = JSON.parse(localStorage.getItem("user"))
  if (storedUser &&
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
          setSuccess("Sign In successfully!")
          navigate("home");
      }else{
        setError("Invalid credentials")
      }
  }
  const handleSignup = () => navigate('/signup')

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
      <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
        {/* Logo */}
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-blue-500">Talk</span>
          <span className="text-black">Space</span>
        </h1>

        {/* Toggle Button */}
        <div className="flex border-b border-gray-300 mb-6">
          <button className={`flex-1 p-3 text-lg text-blue-600 font-bold border-b-4`}>
            Sign In
          </button>
          <button className={`flex-1 p-3 text-lg text-gray-400 `} onClick={handleSignup} >
           Sign Up
          </button>
        </div>

        {/* From Container */}
          <form onSubmit={handleSbmit}>
            <input
              type="email"
              placeholder="Email addrees"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <button type='submit' className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg focus:border'>
              Sing In
            </button>
            <div className='flex justify-between text-blue-500 text-sm'>
              <a href="#">GitHub</a>              
              <NavLink to="/admin-login">Admin</NavLink>
            </div>
          </form>
           
        {error && <p className='text-red-500'>{error} </p>}
        {success && <p className='text-green-500'>{success}</p>}
      </div>
    </div>
  )
} 

export default SignIn
