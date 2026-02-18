import { Link } from "react-router-dom";
import api from "../api";

export default function Blog({ post }) {
  const handleDeletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const response = await api.delete(`/posts/${id}`);
      if (response.status === 200) {
        window.location.reload();
      } else {
        alert("Failed to delete post");
      }
    }
  };

  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg p-2">
      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500">
          {post.createdat
            ? new Date(post.createdat).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {post.content}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-end gap-4">
        <Link
          to={`/posts/${post.id}/edit`}
          className="bg-yellow-600 text-white px-4 py-2 rounded text-sm font-semibold"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeletePost(post.id)}
          className="ml-2 bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
