import { useState } from "react"
import CreatePost from "./CreatePost";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setpost] = useState([]);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localStorage:7000/posts/getpost", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch posts");
      }
      setpost(data);
    } catch (error) {

    }
  }

  return (
    <main className="flex justify-center">
      <div className="w-full max-w-2xl px-5">
        <div className="w-[750px] px-5 flex flex-col items-center ml-[120px]">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            + Create Post
          </button>
          {isModalOpen && (
            <CreatePost
              onPostCreated={getPosts}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home
