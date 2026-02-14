import Navbar from "../../components/Navbar";

export default function CreatePost() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-2xl font-semibold text-center">Create Post</h1>
        <div className="mt-4">
          <label for="title">
            <span class="text-sm font-medium text-gray-700"> Title </span>

            <input
              type="text"
              id="title"
              class="mt-2 w-full rounded border border-gray-400 sm:text-sm p-2"
            />
          </label>
        </div>
        <div className="mt-4">
          <label for="description">
            <span class="text-sm font-medium text-gray-700"> Description </span>

            <textarea
              id="description"
              class="mt-2 w-full resize-none rounded border border-gray-400 sm:text-sm p-2"
              rows="8"
            ></textarea>
          </label>
        </div>
        <div className="mt-8">
          <button
            class="w-full rounded-sm border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 hover:cursor-pointer"
            href="#"
          >
            Create Post
          </button>
        </div>
      </main>
    </>
  );
}
