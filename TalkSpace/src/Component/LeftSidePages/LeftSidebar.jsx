import { useState } from 'react'
import { BiSolidFolderOpen } from 'react-icons/bi'
import { FaBookmark, FaHome, FaUser, FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const LeftSidebar = () => {
    const navigate = useNavigate()

    const [communities] = useState(["Travel", "Programming", "Food and Cooking", "Sports", "Education"])

  return (
    <div className='w-64 h-150 ml-15 items-start bg-gray-50 p-5 fixed left-4 top-16 flex flex-col rounded-lg overflow-y-auto mt-6'>
        <ul className='space-y-2'>
            <li 
                className='flex items-center p-3 text-lg cursor-pointer rounded-lg transition-all hover:bg-gray-200'
                onClick={() => navigate("/home")}
            >
                <FaHome className='mr-3' /> Home
            </li>
            <li 
                className='flex items-center p-3 text-lg cursor-pointer rounded-lg transition-all hover:bg-gray-200'
                onClick={() => navigate("/profile")}
            >
               <FaUser className='mr-3'/> Profile
            </li>
            <li 
                className='flex items-center p-3 text-lg cursor-pointer rounded-lg transition-all hover:bg-gray-200'
                onClick={() => navigate("/saved")}
            >
                <FaBookmark className='mr-3'/> Saved
            </li>
            <li 
                className='flex items-center p-3 text-lg cursor-pointer rounded-lg transition-all hover:bg-gray-200'
                onClick={() => navigate("/following")}
            >
                <BiSolidFolderOpen className='mr-3'/> Following
            </li>            
        </ul>

        <hr className='my-4 border-t bg-gray-300' />

        <div className='flex flex-col pl-2'>
            <div className='flex justify-between items-center text-lg font-bold mb-2'>
                <li
                    className='flex items-center p-3 text-lg cursor-pointer rounded-lg transition-all hover:bg-gray-200'
                    onClick={() => navigate("/communities")}
                >
                    <FaUsers className='mr-3' /> Communities
                </li>

                <a href="#" className='text-blue-500 text-sm hover:text-blue-500 flex items-center'>
                    See all <span className='bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full ml-2'>10</span>
                </a>
            </div>
            <ul className='space-y-1'>
                {communities.map((community, index) => (
                    <li key={index} className='text-gray-600 cursor-pointer transition-colors hover:text-black text-sm p-1'>
                        {community}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default LeftSidebar
