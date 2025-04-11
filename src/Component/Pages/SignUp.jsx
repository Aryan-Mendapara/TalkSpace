import React from 'react'

function SignUp() {

    const handluSbmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
    }
    return (
        <div >
            hello
            {/* Signup Form */}
            {/* <form className={`absolute w-full transition-transform duration-500 ease-in-out ${!isLogin
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`} onSumbit={handluSbmit}
            >
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
                    Sing Up
                </button>
            </form> */}
        </div>
    )
}

export default SignUp
