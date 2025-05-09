import { useEffect, useState } from "react"
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FollowingPage = () => {
  const [Following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect( () => {
    const fetchFollowing = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found.");
          return;
        }

        const response = await fetch("http://localhost:7000/user/followedUsers", {
          headers: { Authorization: `Bearer ${token}`},
        });

        if(!response.ok) throw new Error("Failed to fetch following list");
        
        const data = await response.json();
        setFollowing(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, []);

  const handleUnfollow = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found.");
        return;
      }
      
      const response = await fetch(`http://localhost:7000/user/unfollow/${userId}`, {        
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`},
      });
      if (!response.ok) throw new Error("Failed to unfollow user");
      
      setFollowing((prev) => prev.filter((user) => user._id !== userId));
    } catch (err) {
      setError(err.message);
    }
  };

  if(loading) return <p className="text-center text-gray-600">Loading...</p>
  if(error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <div className="ml-50 mt-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-center font-bold mb-6">People You're Following</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Following.length > 0 ? (
              Following.map((user) => (
                <div 
                  key={user.id}
                  className="bg-white p-5 rounded-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition"
                  onClick={() => navigate(`/profile/${user.id}`)}  
                >
                  <div className="flex justify-center">
                    <FaUserCircle className="text-gray-400" size={50} />
                  </div>
                  <h3 className="text-lg font-bold mt-2">{user.username}</h3>
                  <p className="text-gray-500 text-sm">{user.location || "Unknown"}</p>
                  <button
                    className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:text-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                You're not following anyone yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FollowingPage
