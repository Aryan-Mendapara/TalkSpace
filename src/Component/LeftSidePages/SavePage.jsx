import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const SavePage = () => {
  const [savePosts, setSavePost] = useState([]);

  const handleUnsave = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:7000/posts/unsave/${postId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        //Remove from UI instantly
        setSavePost((prev) => prev.filter((post) => post._id !== postId));
      }
    } catch (err) {
      console.error("Unsave failed: ", err);
    }
  };

  return (
    <div className="flex justify-center">
      <main>
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

                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
                  <div></div>
                </div>
              </div>
            })
          )}
        </div>
      </main>
    </div>
  )
}

export default SavePage;