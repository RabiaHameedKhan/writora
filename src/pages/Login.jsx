import React, { useState } from 'react';
import bg from '../assets/loginbg.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        alert("Login Successful");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

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
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-2">{error}</p>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <a href="/signup" className="text-pink-500 hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
