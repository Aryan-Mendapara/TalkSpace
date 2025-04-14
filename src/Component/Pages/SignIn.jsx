// import React, { useState } from 'react'
// import Logo from "../../assets/img/SocialEcho.jpg"
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// function SignIn() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [emailInput, setEmailInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");  
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const body = isLogin ? { email: emailInput, password: passwordInput } : { username, email: emailInput, password:passwordInput }

//   const dispatch = useDispatch();
//   const email = useSelector((state) => state.auth.email);
//   const password = useSelector((state) => state.auth.password);

//   const handleSbmit = async (event) => {
//     event.preventDefault();
//     setError("");
//     setSuccess("");
//   }
//   const navigate = useNavigate()
//   const handleSignup = () => {
//     setIsLogin(false)
//     navigate('/signup')
//   }

//   return (
//     <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
//       <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
//         <div className='flex justify-center mb-8'>
//           <img src={Logo} className='h-7' />
//         </div>

//         {/* Toggle Button */}
//         <div className="flex border-b border-gray-300 mb-6">
//           <button className={`flex-1 p-3 text-lg ${
//             isLogin
//               ? "text-blue-600 font-bold border-b-4 border-blue-500"
//               : "text-gray-400"
//               } transition-all duration-300`}
//             onClick={() => setIsLogin(true)}
//           >
//             Sign In
//           </button>
//           <button className={`flex-1 p-3 text-lg ${
//             !isLogin
//               ? "text-blue-600 font-bold border-b-4 border-blue-500"
//               : "text-gray-400"
//               } transition-all duration-300`}
//             onClick={handleSignup}
//           >
//            Sign Up
//           </button>
//         </div>

//         {/* From Container */}
//         <div className='h-72 relative overflow-hidden'>
//           {/* Sing In from */}
//           <form className={`absolute w-full transition-transform duration-500 ease-in-out ${
//             isLogin
//               ? "opacity-100 translate-x-0"
//               : "opacity-0 translate-x-full"
//               }`} onSubmit={handleSbmit}
//           >
//             <input
//               type="email"
//               placeholder="Email addrees"
//               value={emailInput}
//               onChange={(e) => dispatch(setEmailInput(e.target.value))}
//               required
//               className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={passwordInput}
//               onChange={(e) => dispatch(setPasswordInput(e.target.value))}
//               required
//               className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//             />
//             <button className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg focus:border'>
//               Sing In
//             </button>
//             <div className='flex justify-between text-blue-500 text-sm'>
//               <a href="#">GitHub</a>
//               {/* <Link to="/admin-login" className='text-blue-500 text-sm'>Admin</Link> */}
//               <NavLink to="/admin-login">Admin</NavLink>
//             </div>
//           </form>
//         </div>
//         {error && <p className='text-red-500'>{error} </p>}
//         {success && <p className='text-green-500'>{success}</p>}
//       </div>
//     </div>
//   )
// } 

// export default SignIn


// import React, { useState, useEffect } from 'react';
// import Logo from '../../assets/img/SocialEcho.jpg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
//   clearMessages,
// } from '../../slice/authSlice';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user, loading, error, success } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(loginStart());

//     try {
//       // Replace this with your actual API call
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       dispatch(loginSuccess(data));
//     } catch (err) {
//       dispatch(loginFailure(err.message));
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       navigate('/dashboard');
//     }

//     return () => {
//       dispatch(clearMessages());
//     };
//   }, [user, dispatch, navigate]);

//   const handleSignup = () => {
//     setIsLogin(false);
//     navigate('/signup');
//   };

//   return (
//     <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
//       <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
//         {/* <div className='flex justify-center mb-8'>
//           <img src={Logo} className='h-7' alt="SocialEcho Logo" />
//         </div> */}

//         <div className='flex border-b border-gray-300 mb-6'>
//           <button
//             className={`flex-1 p-3 text-lg ${isLogin
//               ? 'text-blue-600 font-bold border-b-4 border-blue-500'
//               : 'text-gray-400'
//               }`}
//             onClick={handleSubmit}
//           >
//             Sign In
//           </button>
//           <button
//             className={`flex-1 p-3 text-lg ${!isLogin
//               ? 'text-blue-600 font-bold border-b-4 border-blue-500'
//               : 'text-gray-400'
//               }`}
//             onClick={handleSignup}
//           >
//             Sign Up
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <input
//             type='email'
//             placeholder='Email address'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//           />
//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//           />
//           <button
//             type='submit'
//             disabled={loading}
//             className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg'
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>
//         </form>

//         <div className='flex justify-between text-blue-500 text-sm'>
//           <a href='#'>GitHub</a>
//           <NavLink to='/admin-login'>Admin</NavLink>
//         </div>

//         {error && <p className='text-red-500 mt-4'>{error}</p>}
//         {success && <p className='text-green-500 mt-4'>{success}</p>}
//       </div>
//     </div>
//   );
// }

// export default SignIn;




import React, { useState } from 'react';
import Logo from "../../assets/img/SocialEcho.jpg";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
  
    const userPayload = { email: emailInput, password: passwordInput };
  
    dispatch(signIn(userPayload));
  
    // Check if user was set successfully in Redux
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
      setSuccess("Signed in successfully!");
      // navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };
  

  const handleSignup = () => navigate('/signup');

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
      <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
        <div className='flex justify-center mb-8'>
          <img src={Logo} className='h-7' alt="Logo" />
        </div>

        <div className="flex border-b border-gray-300 mb-6">
          <button className="flex-1 p-3 text-lg text-blue-600 font-bold border-b-4 border-blue-500">
            Sign In
          </button>
          <button className="flex-1 p-3 text-lg text-gray-400" onClick={handleSignup}>
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
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
          <button type="submit" className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg'>
            Sign In
          </button>
          <div className='flex justify-between text-blue-500 text-sm'>
            <a href="#">GitHub</a>
            <NavLink to="/admin-login">Admin</NavLink>
          </div>
        </form>

        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
      </div>
    </div>
  );
}

export default SignIn;
