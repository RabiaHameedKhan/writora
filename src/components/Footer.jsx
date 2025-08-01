import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import Animations from "./Animations";

const Footer = () => {
  return (
    <Animations delay={0.2}>
    <footer className="bg-white text-gray-800 py-16 px-6 md:px-20 mt-20 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold text-pink-600">Writora</h2>
          <p className="mt-3 text-sm text-gray-700 max-w-xs font-medium" >
            Where stories bloom, and thoughts take flight. Join the Writora community today!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-sm font-bold">
          <a href="/" className="hover:text-rose-600 transition">Home</a>
          <a href="/about" className="hover:text-rose-600 transition">About</a>
          <a href="/blogs" className="hover:text-rose-600 transition">Blogs</a>
          <a href="/contact" className="hover:text-rose-600 transition">Contact</a>
          <a href="/login" className="hover:text-rose-600 transition">Join</a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 text-pink-600">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={24} className="hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={24} className="hover:scale-110 transition" />
            </a>
            <a href="mailto:hello@writora.com" className="hover:scale-110 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} Writora. Crafted with 💗. By Rabia Khan
      </div>
    </footer>
    </Animations>
  );
};

export default Footer;
