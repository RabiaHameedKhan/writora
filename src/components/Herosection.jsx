import React from "react";
import { Link } from "react-router-dom";

import heroBg from "../assets/herobg.jpg";
import Animations from "./Animations";

const HeroSection = () => {
  return (
    <Animations delay={0.2}>
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 drop-shadow-lg">
            Your Story Deserves a Beautiful Space
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-xl mx-auto font-medium">
            Writora is where thoughts meet elegance. Share your words. Inspire others.
          </p>
          <Link to="/blogs">
  <button className="mt-6 px-6 py-3 bg-pink-600 font-medium text-white rounded-xl text-lg hover:bg-pink-500 transition duration-300">
    Explore Blogs
  </button>
</Link>

        </div>
      </div>
    </div>
    </Animations>
  );
};

export default HeroSection;
