import React, { useState } from "react";
import bg from '../assets/loginbg.jpg';

const PublishBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  return (
   <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12 pt-28 relative"
      style={{
        backgroundImage: `url(${bg})`, // ✅ use imported image here
      }}
    >
      <div className="absolute inset-0 bg-pink-200/40 backdrop-brightness-90 backdrop-blur-sm z-0"></div>

      {/* Content Box */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
        {/* Page Heading */}
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
          ✍️ Publish Your Blog
        </h2>

        <form className="space-y-6">
          {/* Title */}
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
            />
          </div>

          {/* Image URL */}
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

          {/* Content */}
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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default PublishBlog;
