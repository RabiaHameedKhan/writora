import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md border-b border-pink-200 fixed top-0 left-0 z-50">
      <div className="w-full  px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl font-extrabold text-pink-600 tracking-wide">
          Writora
        </Link>


        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-xl text-pink-600 font-bold">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/blogs" className="hover:text-gray-500">Blogs</Link>
          <Link to="/login" className="hover:text-gray-500">Login</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
         
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-pink-600 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
