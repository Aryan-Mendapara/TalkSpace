import React, { useState } from 'react'
import Logo from "../../assets/img/SocialEcho.jpg"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()
  const body = isLogin ? { email, password } : { username, email, password }

  const handluSbmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
  }
  const handleSignup = () => {
    setIsLogin(false)
    navigate('/signup')
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
      <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
        <div className='flex justify-center mb-8'>
          <img src={Logo} className='h-7' />
        </div>

        {/* Toggle Button */}
        <div className="flex border-b border-gray-300 mb-6">
          <button className={`flex-1 p-3 text-lg ${isLogin
            ? "text-blue-600 font-bold border-b-4 border-blue-500"
            : "text-gray-400"
            } transition-all duration-300`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button className={`flex-1 p-3 text-lg ${!isLogin
            ? "text-blue-600 font-bold border-b-4 border-blue-500"
            : "text-gray-400"
            } transition-all duration-300`}
            onClick={handleSignup}
          >
           Sign Up
          </button>
        </div>

        {/* From Container */}
        <div className='h-72 relative overflow-hidden'>
          {/* Sing In from */}
          <form className={`absolute w-full transition-transform duration-500 ease-in-out ${isLogin
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
            }`} onSumbit={handluSbmit}
          >
            <input
              type="email"
              placeholder="Email addrees"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
            <button className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg focus:border'>
              Sing In
            </button>
            <div className='flex justify-between text-blue-500 text-sm'>
              <a href="#">GitHub</a>
              {/* <Link to="/admin-login" className='text-blue-500 text-sm'>Admin</Link> */}
              <NavLink to="/admin-login">Admin</NavLink>
            </div>
          </form>

{/* <SignUp/> */}

        </div>


        {error && <p>{ } </p>}
      </div>
    </div>
  )
}

export default SignIn
