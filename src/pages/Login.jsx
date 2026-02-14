import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 lg:px-0">
      <Link to="/" className="max-w-sm my-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-teal-600">
          CONTENT MANAGEMENT SYSTEM
        </h1>
      </Link>
      <div className="w-full lg:w-md p-8 rounded-xl border border-gray-200 space-y-4">
        <h1 className="text-lg font-bold text-teal-600 text-center">Login</h1>
        <div className="mt-4">
          <label for="Email">
            <span class="text-sm font-medium text-gray-700"> Email </span>

            <input
              type="email"
              id="Email"
              class="mt-2 w-full rounded border border-gray-400 sm:text-sm p-2"
            />
          </label>
        </div>
        <div className="mt-4">
          <label for="password">
            <span class="text-sm font-medium text-gray-700"> Password </span>

            <input
              type="password"
              id="password"
              class="mt-1 w-full rounded border border-gray-400 sm:text-sm p-2"
            />
          </label>
        </div>
        <div className="mt-8">
          <button
            class="w-full rounded-sm border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 hover:cursor-pointer"
            href="#"
          >
            Log in
          </button>
        </div>
        <div className="mt-4">
          <p className="text-center text-sm">
            belum punya akun?
            <Link to="/register" className="text-teal-600 font-semibold ml-2">
              Buat Akun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
