import React, { useEffect, useState } from 'react'
import Logo from "../../assets/img/SocialEcho.jpg"
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    const [Search, setSearch] = useState("");
    const [showenu, setShowMenu] = useState(false);
    const [User, setUser] = useState({username: "", email: ""});
    const navigate = useNavigate();

    useEffect(() => {
      const stroedUser = JSON.parse(localStorage.getItem("user"));
      if(stroedUser) {
        setUser(stroedUser);
      } else {
        navigate("/");
      }
    }, [navigate]);

    const handleLogout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("user");
      navigate("/");
    }

  return (
    <header className='fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-md z-50 bg-white'>
        {/* Logo */}
        <div className=''>
            <img src={Logo} className='h-5' />
        </div>

        {/* Search Bar */}
        <input 
            type="text" 
            placeholder='Search for people, posts or communities'
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className='flex-grow max-w-[600px] min-w-[350px] h-10 border border-gray-300 rounded-full text-lg outline-none bg-gray-100 px-5 placeholder-gray-500'
        />

        {/* Profile Section */}
        <div className='relative cursor-pointer flex items-center gap-3'>
          <FaUserCircle 
            className='text-4xl text-gray-600'
            onClick={() => setShowMenu(!showenu)}
          />
          {showenu && (
            <div className='absolute top-12 right-0 w-64 bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200'>
              <FaUserCircle className='text-6xl text-gray-500 mx-auto'/>
              <p className='text-lg font-bold mt-2'>{User.username || "User"}</p>
              <p className='text-sm text-gray-500 mb-4'>
                {User.email || "user@example.com"}
              </p>
              <div className='w-full h-px bg-gray-300 my-2 '></div>
              <button 
                className='w-full py-2 text-red-600 font-semibold flex items-center justify-center gap-2 text-lg transition-colors duration-300 hover:text-red-800 cursor-pointer'
                onClick={handleLogout}
              >
                Logout <FiLogOut className='text-xl' />
              </button>
            </div>
          )}
        </div>
    </header>
  )
}

export default Header
