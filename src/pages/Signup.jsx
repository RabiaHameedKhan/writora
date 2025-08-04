import React, { useState } from 'react';
import bg from '../assets/loginbg.jpg';
import Animations from '../components/Animations';
import Footer from '../components/Footer';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    try {
      const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        alert('Signup Successful 🎉');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setError('Signup failed. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <Animations delay={0.2}>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-pink-200/40 backdrop-brightness-90 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 bg-rose-50 bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Create Account 📝</h2>

          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Your name"
                required
              />
            </div>

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
              Signup
            </button>
          </form>

          {error && <p className="text-red-600 text-center mt-2">{error}</p>}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-pink-500 hover:underline">Login</a>
          </p>
        </div>
      </div>

      <Footer />
    </Animations>
  );
};

export default Signup;
