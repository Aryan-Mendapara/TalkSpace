import { useEffect, useState } from "react"
import { BiPencil } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { LuAlignLeft, LuMapPin } from "react-icons/lu";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(""); //Full User Data
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);

  //  Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:7000/user/getprofile", {
        headers: { Authorization: `Bearer ${token}`}
      });
      const data = await res.json();
      setUserData(data);
      setBio(data.bio || "");
      setLocation(data.location || "")
      setInterests(data.interests?.json(",") || "")
    };

    fetchUser();
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
    setBio(data.bio || "");
    setLocation(data.location || "");
    setInterests(userData.interests?.json(",") || "");
  }

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await fetch ("http://localhost:7000/user/updateInfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          bio,
          location,
          interests: interests.split(",").map((i) => i.trim()),
        }),
      });
      
      const updated = await res.json();
      if (res.ok) {
        setUserData(updated);
        setIsEditing(updated);
      } else {
        alert(updated.message || "Update failed")
      }
    } catch (err) {      
      alert("Error updating profile",err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex px-4 md:px-10 gap-6 mt-6 ml-60">
        {/* Center Profile Card */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-2xl w-[550px] min-h-[400px] p-8 relative">
            {/* Edit Button */}
            {!isEditing && (
              <button
                className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
                onClick={() => setIsEditing(true)}
              >
                <BiPencil />
              </button>
            )}

            {/* Profile Info */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex justify-center">
                <FaUserCircle className="text-gray-400" size={100} />
              </div>
              <h2 className="text-xl font-semibold">{userData.username}</h2>
              <div className="text-sm text-gray-600 mt-1 flex font-bold items-center gap-1">
                <LuAlignLeft size={15} />
                {isEditing ? (
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Add a Bio"
                    className="border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <span>{userData.bio || "Bio not added"}</span>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold">Location</h3>
              <div className="text-sm text-gray-600 font-bold flex items-center gap-1">
                <LuMapPin size={14}/>
                {isEditing ? (
                  <input 
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Add a Location"
                    className="border-b border-gray-300 Interests"
                  />
                ) : (
                  <span>{userData.location || "Location not added"}</span>
                )}
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold">Interests</h3>
              {isEditing ? (
                <textarea 
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="Add your interests"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 text-sm"
                />
              ) : userData.interests && userData.interests.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1 font-bold">
                  {userData.interests.map((interest, index) => {
                    <span
                      key={index}
                      className="text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded-md"
                    >
                      {interest}
                    </span>
                  })}
                </div>
              ) : (
                <p className="text-gray-600 text-sm mt-1">
                  No interests have been set yet. Add some interests to let
                  people know more about you.
                </p>
              )}
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 text-sm rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {loading ? "Saving..." : "Update"}
                </button>
              </div>
            )}

            {/* Link */}
            <div className="mt-6 border-t pt-4 text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Manage Devices and Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
