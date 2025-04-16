import React, { useState } from 'react'
import Logo from "../../assets/img/SocialEcho.jpg"

const Header = () => {
    const [Search, setSearch] = useState("")

  return (
    <header className='fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-md z-50 bg-white'>
        {/* Logo */}
        <div className='mx-30'>
            <img src={Logo} className='h-5' />
        </div>

        {/* Search Bar */}
        <input 
            type="text" 
        />
    </header>
  )
}

export default Header
