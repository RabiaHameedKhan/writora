import React from 'react';
import bg from '../assets/loginbg.jpg'; // make sure the path & extension are correct

const Login = () => {
  return (
   <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
  style={{
    backgroundImage: `url(${bg})`,
  }}
>
  {/* Soft Transparent Overlay */}
  <div className="absolute inset-0 bg-pink-200/40 backdrop-brightness-90 backdrop-blur-sm z-0"></div>

  {/* Login Box */}
  <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-md">
    <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Welcome 👋</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Login
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-4">
      Don’t have an account? <a href="/signup" className="text-pink-500 hover:underline">Signup</a>
    </p>
  </div>
</div>

  );
};

export default Login;
