import React, { useState } from 'react'
import Communities from '../LeftSidePages/Communities';

const CreatePost = ({onPostCreated, setIsModalOpen}) => {
  const [category, setCategory] = useState("");
  const [Communities, setCommunities] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token")

    if (!category) {
      console.error("Error : No category selected!");
      return;
    }
    
    const postData = {
      title,
      content: body,
      category,
    };
  }

  return (
    <>
      <div className='fixed ml-100 inset-0 flex items-center justify-center bg-white bg-opacity-50'>
        <div className='bg-white mr-100 p-5 rounded-lg shadow-lg w-200'>
          <h2 className='text-xl font-bold mb-4'>Create a post</h2>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border border-gray-300 rounded-lg px-4 py-2 w-full mb-2'
          >
            <option value="">Select Community</option>
            {Communities.map((comm) => (
              <option key={comm._id} value={comm._id}>
                {comm.name}
              </option>
            ))}
          </select>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
            className='border border-gray-300 rounded-lg px-4 py-2 w-full mb-2'
          />
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter'
            className='border border-gray-300 rounded-lg px-4 py-2 w-full mb-2'
          ></textarea>
          <div className='flex justify-end gap-2'>
            <button
              onClick={() => setIsModalOpen(false)}
              className='bg-gray-300 text-black px-4 py-2 rounded-lg'
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost
