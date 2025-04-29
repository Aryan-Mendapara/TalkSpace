import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const SavePage = () => {
  const [savePosts, setSevePost] = useState([]);

  const handleUnsave = async (postId) => {
    
  }

  return (
    <>
      <div>
        <main className="flex justify-center ">          
          <div className="text-center ">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
              Your Saved Posts
            </h2>
          </div>

          {/* Saved Posts */}
          <div>
            {savePosts.length === 0 ? (
              <div className="flex flex-col items-center text-gray-500 mt-10">
                <img 
                  src="/assest/no-saved-posts.png" 
                  alt="No saved" 
                  className="w-52 mb-4"
                />
                <p>You haven't saved any posts yet.</p>
              </div>
            ) : (
              savePosts.map((post) => {
                <div
                  key={post.id}
                  className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6"
                >
                  {/* Unsave Button */}
                  <button
                    onClick={() => handleUnsave(post.id)}
                    className="absolute top-4 rigth-4 text-gray-400 hover:text-red-500"
                    title="Unsave"
                  >
                    <FaBookmark className="text-xl" />
                  </button>
                </div>
              })
            )}
          </div>
        </main>        
      </div>
    </>
  )
}

export default SavePage;