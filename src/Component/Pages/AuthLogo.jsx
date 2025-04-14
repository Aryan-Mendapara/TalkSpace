import React from 'react'
import SignUp from './SignUp'

function AuthLogo() {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
            <div className='relative bg-white p-12 rounded-lg shadow-xl w-[28rem] h-[32rem] text-center'>
                <div className='flex justify-center mb-8'>
                    <img src={Logo} className='h-7' alt="SocialEcho Logo" />
                </div>

                <div className='flex border-b border-gray-300 mb-6'>
                    <button
                        className={`flex-1 p-3 text-lg ${isLogin
                            ? 'text-blue-600 font-bold border-b-4 border-blue-500'
                            : 'text-gray-400'
                            }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className={`flex-1 p-3 text-lg ${!isLogin
                            ? 'text-blue-600 font-bold border-b-4 border-blue-500'
                            : 'text-gray-400'
                            }`}
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            {/* <SignUp/> */}
        </div>
       
    )
}

export default AuthLogo
