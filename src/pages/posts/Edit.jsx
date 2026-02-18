import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import api from "../../api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getPostById();
  }, []);

  async function getPostById() {
    const response = await api.get(`/posts/${id}`);
    const post = response.data.data;

    console.log(post);

    setTitle(post.title);
    setContent(post.content);
    setAuthor(post.author);
  }

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const response = await api.put(`/posts/${id}`, {
      title,
      content,
      author,
    });

    if (response.status === 200) {
      alert("Post updated successfully");
      setTitle("");
      setContent("");
      setAuthor("");

      navigate({
        pathname: "/",
      });
    } else {
      alert("Failed to update post");
    }
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-2xl font-semibold text-center">Edit Post</h1>

        <form onSubmit={handleSubmitEdit}>
          <div className="mt-4">
            <label htmlFor="title">
              <span className="text-sm font-medium text-gray-700"> Title </span>

              <input
                type="text"
                id="title"
                className="mt-2 w-full rounded border border-gray-400 sm:text-sm p-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="content">
              <span className="text-sm font-medium text-gray-700">Content</span>

              <textarea
                id="content"
                className="mt-2 w-full resize-none rounded border border-gray-400 sm:text-sm p-2"
                rows="8"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="author">
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Author{" "}
              </span>

              <input
                type="text"
                id="author"
                className="mt-2 w-full rounded border border-gray-400 sm:text-sm p-2"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-8">
            <button
              className="w-full rounded-sm border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 hover:cursor-pointer"
              type="submit"
            >
              Edit Post
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
