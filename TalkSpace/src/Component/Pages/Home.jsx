import { useEffect, useState } from "react"
import CreatePost from "./CreatePost";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setposts] = useState([]);
  const [openCommentPostId, setOpenCommentPostId] = useState();

  const currentUserId = localStorage.getItem("UserId");

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:7000/posts/getpost", {
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
      setposts(data);
    } catch (error) {
      console.error("Error fetching posts : ", error.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
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
                setIsModalOpen={setIsModalOpen}
              />
            )}

            {/* Post Display */}
            <div className="mt-10 w-full">
              {Array.isArray(posts) && posts.length === 0 ? (
                <p className="text-center text-gray-400">No posts available</p>
              ) : (
                posts.map((post) => {
                  <div
                    key={post.id}
                    className="bg-white p-5 rounded-2xl shadow-md mb-6 w-full transition hover:shadow-lg border border-gray-200"
                  >
                    {/* Header: User + Comunity + Time */}
                    <div className="flex justify-center items-center mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {post.user?.username || "Unknown User"}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {post.community || "General"}
                        </p>
                      </div>
                      <p className="text-gray-400 text-xs">
                        {timeAgo(post.createdAt)}
                      </p>
                    </div>

                    {/* Title + Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-700">{post.content}</p>

                    {/* Post Actions Component */}
                    <PostAction
                      post={post}
                      currentUserId={currentUserId}
                      getPosts={getPosts}
                      setOpenCommentPostId={setOpenCommentPostId}
                      openCommentPostId={openCommentPostId}
                    />
                  </div>
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
