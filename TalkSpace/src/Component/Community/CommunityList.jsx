import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [joinedCommunities , setJoinedCommunities] = useState(new Set());
    const perPage = 3;
   

    // const handleJoinUnjoin = async () => {
    //   try {
    //     if(joinedCommunities.has(communityId)) {

    //     }
    //   } catch(error) {

    //   }
    // }

    const start = (currentPage - 1) *   perPage;
    const end = start + perPage;
    const CurrentCommunities = communities.slice(start, end);
    const totalpages = Math.ceil(communities.length / perPage);

  return (
    <div>
      <h2 className='text-lg font-bold mb-2'>Suggested Communities</h2>
      <ul className='space-y-2'>
        {CurrentCommunities.map((comm) => (
            <li key={comm.id} className='flex justify-between items-center p-2 border-b border-gray-300'>
                <div className='w-full'>
                    <Link to={`/community${comm.name}`} className='text-black font-semibold text-sm hover:underline'>
                      {comm.name}
                    </Link>
                    <p className='text-xs text-gray-500 font-medium'>Members: {comm.memberCount}</p>
                </div>
                <button>
                  {joinedCommunities.has(comm.id) ? "Unjion" : "Join"}
                </button>
            </li>
        ))}
      </ul>

      <div className='flex items-center justify-between'>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className='p-1 hover:bg-gray-200 rounded transition-all'>
          <FaAngleLeft size={10} /> 
        </button>
        <span className='text-xs text-gray-500'>
          {currentPage} / {totalpages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalpages))} className='p-1 hover:bg-gray-200 rounded transition-all'>
          <FaAngleRight size={10} />          
        </button>
      </div>
    </div>
  )
}

export default CommunityList
