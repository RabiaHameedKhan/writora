import React, { useState } from "react";
import bg from "../assets/loginbg.jpg";

const PublishBlog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); // show thankyou page
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12 pt-28 relative"
      style={{
        backgroundImage: `url(${bg})`, 
      }}
    >
      <div className="absolute inset-0 bg-pink-200/40 backdrop-brightness-90 backdrop-blur-sm z-0"></div>

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
        {!submitted ? (
          <>
            
            <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
              Publish Your Blog
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your blog title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

        


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Image (URL)
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Paste image link (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog here..."
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-pink-600 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md transition"
              >
                Publish Blog
              </button>
            </form>
          </>
        ) : (
          // Thank You Page , show afterfr blog submiitted
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 text-lg">
              Dear <span className="font-semibold">{name}</span>, your blog has been
              received and will be published on the site soon.  
              Keep writing with <span className="font-semibold text-pink-600">Writora</span> 💖
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default PublishBlog;
