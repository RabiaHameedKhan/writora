import React from "react";
import aboutImage from "../assets/aboutImg.jpg";
import { Link } from "react-router-dom";
import Animations from "./Animations";

const AboutSection = () => {
  return (
    <Animations delay={0.2}>
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
        <div className="w-full">
          <img
            src={aboutImage}
            alt="About Writora"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-pink-600">About Writora</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Writora isn’t just a blog — it’s a space where voices find shape and stories find life.
            Built for readers and writers who value honesty, creativity, and expression.
            Whether you want to reflect, share, or explore — Writora welcomes you.
          </p>
           <Link to="/login">
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-medium hover:bg-pink-500 transition duration-300">
              Join the Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
    </Animations>
  );
};

export default AboutSection;
