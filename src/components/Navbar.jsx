import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md border-b border-pink-200 fixed top-0 left-0 z-50">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-4xl font-extrabold text-pink-600 tracking-wide">
          Writora
        </Link>

        {/* responsiveness for dektop */}
        <div className="hidden md:flex space-x-8 text-xl text-pink-600 font-bold">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/blogs" className="hover:text-gray-500">Blogs</Link>
          <Link to="/publish" className="hover:text-gray-500">Publish</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
        </div>

        {/* Mobile navbar icon*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-600 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navbar dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-3 text-pink-600 font-bold text-lg bg-white shadow">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Home</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Blogs</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Publish</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
