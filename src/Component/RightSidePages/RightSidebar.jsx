import React from 'react'
import CommunityList from '../Community/CommunityList'

const RightSidebar = () => {
  return (
    <div className='w-60 h-150 mr-15 bg-gray-50 p-5 fixed right-2 top-16 flex flex-col rounded-lg overflow-y-auto mt-6'>
        <div className='mb-6'>
            <CommunityList />
        </div>
        <div>
            <h2 className='text-lg font-bold'>Popular Users to Follow</h2>
            <ul className='mt-2'>
              
            </ul>
        </div>
    </div>
  )
}

export default RightSidebar
