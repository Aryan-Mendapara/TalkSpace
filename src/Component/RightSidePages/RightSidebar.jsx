import React, { useState } from 'react'
import CommunityList from '../Community/CommunityList'
import { useNavigate } from 'react-router-dom'
import axios from "axios";


const RightSidebar = () => {
  const navigate = useNavigate();
  const [popularUsers, setPopulaerUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [following , setFollowing] = useState([]);
  const perPage = 3;

  const start = (currentPage -1 ) * perPage;
  const end = start + perPage;
  const currentUser = popularUsers.slice(start, end);
  const totalPages = Math.ceil(popularUsers.length / perPage);

  const handleUnfollow = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:7000/user/unfollow${userId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );  
    } catch (error) {
      
    }
  }

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () => currentPage < totalPages &&  setCurrentPage(currentPage + 1);

  return (
    <div className='w-60 h-150 mr-15 bg-gray-50 p-5 fixed right-2 top-16 flex flex-col rounded-lg overflow-y-auto mt-6'>
        <div className='mb-6'>
            <CommunityList />
        </div>
        <div>
            <h2 className='text-lg font-bold'>Popular Users to Follow</h2>
            <ul className='mt-2'>
              {currentUser.map((user) => (
                <li
                  key={user.id}
                  className='flex justify-between items-center p-2 border-b border-gray-300 cursor-pointer hover: bg-gray-100'
                >
                  <div onClick={() => navigate(`/profile/${user.id}`)}>
                    <p className='font-semibold'>{user.username}</p>
                    <p className='text-xs text-gray-500'>
                      Followers: {user.followers}
                    </p>
                  </div>
                  {following.includes(user.id) ? (
                    <button
                      className='px-3 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500 transition'
                      onClick={() => handleUnfollow(user.id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button></button>
                  )}
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default RightSidebar
