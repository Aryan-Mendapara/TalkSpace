import React, { useState } from 'react'
import Logo from "../../assets/img/SocialEcho.jpg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../slice/authSlice';

function SignUp() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSbmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
    
        const userPayload = {
            username ,        
            email: emailInput ,
            password: passwordInput
        };

        const existingUser = JSON.parse(localStorage.getItem("user"));
        if (existingUser && existingUser.email === userPayload.email) {
            setError("User already exists!");
            return;
        }
        dispatch(signUp(userPayload));
        setSuccess("Account created successfully!");
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };
    
    const handleSignIn = () => navigate("/");
    const handleSignup = () => navigate("/signUp"); 

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
            <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
                <div className='flex justify-center mb-8'>
                    <img src={Logo} className='h-7' />
                </div>

                {/* Toggle Button */}
                <div className="flex border-b border-gray-300 mb-6">
                    <button className={`flex-1 p-3 text-lg text-gray-400`} onClick={handleSignIn}>
                        Sign In
                    </button>
                    <button className={`flex-1 p-3 text-lg text-blue-600 font-bold border-b-4 border-blue-50`}
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </div>

                {/* From Container */}
                    <form onSubmit={handleSbmit}>
                        <input
                            type='text'
                            placeholder='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
                        />
                        <input
                            type='email'
                            placeholder='Email addrees'
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
                        <button className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg'
                            type='submit'>
                            Sing Up
                        </button>
                    </form>

                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-500'>{success}</p>}

            </div>
        </div>  
    )
}

export default SignUp

// import React, { useState } from 'react';
// import Logo from "../../assets/img/SocialEcho.jpg";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signUp } from '../../slice/authSlice';


// function SignUp() {
//     const [emailInput, setEmailInput] = useState("");
//     const [passwordInput, setPasswordInput] = useState("");
//     const [username, setUsername] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setError("");
//         setSuccess("");
    
//         const userPayload = {
//             username,
//             email: emailInput,
//             password: passwordInput,
//         };
    
//         // Simulate checking if already signed up (optional)
//         const existingUser = JSON.parse(localStorage.getItem("user"));
//         if (existingUser && existingUser.email === userPayload.email) {
//             setError("User already exists!");
//             return;
//         }
    
//         dispatch(signUp(userPayload));
//         setSuccess("Account created successfully!");
//         navigate("/"); 
//     };
    

//     const handleSignIn = () => navigate("/");
//     const handleSignUp = () => navigate("/signup");

//     return (
//         <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
//             <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
//                 <div className='flex justify-center mb-8'>
//                     <img src={Logo} className='h-7' alt="Logo" />
//                 </div>

//                 <div className="flex border-b border-gray-300 mb-6">
//                     <button className="flex-1 p-3 text-lg text-gray-400" onClick={handleSignIn}>
//                         Sign In
//                     </button>
//                     <button className="flex-1 p-3 text-lg text-blue-600 font-bold border-b-4 border-blue-500" onClick={handleSignUp}>
//                         Sign Up
//                     </button>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type='text'
//                         placeholder='Username'
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//                     />
//                     <input
//                         type='email'
//                         placeholder='Email address'
//                         value={emailInput}
//                         onChange={(e) => setEmailInput(e.target.value)}
//                         required
//                         className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={passwordInput}
//                         onChange={(e) => setPasswordInput(e.target.value)}
//                         required
//                         className='w-full p-4 mb-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200'
//                     />
//                     <button
//                         type='submit'
//                         className='w-full p-4 mb-6 bg-blue-500 text-white border border-gray-300 rounded-lg'
//                     >
//                         Sign Up
//                     </button>
//                 </form>

//                 {error && <p className='text-red-500'>{error}</p>}
//                 {success && <p className='text-green-500'>{success}</p>}
//             </div>
//         </div>
//     );
// }

// export default SignUp;
