import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import api from "../api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // getAllPost
  // const getAllposts = async () => {
  //   const res = await api.get("/posts");
  //   setPosts(res.data);
  // };

  // getAllPost
  useEffect(() => {
    api.get("/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <Link
          to="posts/create"
          className="block bg-teal-600 p-4 rounded px-4 sm:px-6 lg:px-8 mt-8 text-lg font-bold text-white"
        >
          + Tambah Post
        </Link>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 mt-8">
          {posts.map((post) => (
            <Blog key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
