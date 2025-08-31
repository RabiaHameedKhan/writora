import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Animations from "../components/Animations";
import Footer from "../components/Footer";
import { dataCategories } from "../data/dataCategories"; // ✅ import your blogs data

// sample local blogs (Latest Blogs)
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

// category images
import sports from "../assets/categories/sports.jpg";
import beauty from "../assets/categories/beauty.jpg";
import music from "../assets/categories/music.jpg";
import lifestyle from "../assets/categories/lifestyle.jpg";
import food from "../assets/categories/food.jpg";
import tech from "../assets/categories/tech.jpg";
import health from "../assets/categories/health.jpg";
import education from "../assets/categories/education.jpg";

const Blogs = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // categories with images
  const categories = [
    { name: "Tech", image: tech },
    { name: "Food", image: food },
    { name: "Music", image: music },
    { name: "Lifestyle", image: lifestyle },
    { name: "Beauty", image: beauty },
    { name: "Sports", image: sports },
    { name: "Education", image: education },
    { name: "Health", image: health },
  ];

  const filteredCategories = searchTerm
    ? categories.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

  // local "latest blogs" (static)
  const blogs = [
    {
      id: 1,
      title: "5 Lessons I Learned from Solo Traveling",
      excerpt: "Traveling alone teaches you more than just navigating places...",
      author: "Emily Azel",
      date: "July 30, 2025",
      image: blog1,
    },
    {
      id: 2,
      title: "Designing with Purpose: Blog UI Tips",
      excerpt: "Good design is not about looks — it’s about experience...",
      author: "Ali Khan",
      date: "July 27, 2025",
      image: blog2,
    },
    {
      id: 3,
      title: "Why Writing Daily Changes Your Mind",
      excerpt: "Writing is not just self-expression. It's self-discovery...",
      author: "Rabia Khan",
      date: "July 25, 2025",
      image: blog3,
    },
  ];

  // find blogs for selected category
  const categoryBlogs = selectedCategory
    ? dataCategories.find(
        (cat) => cat.category.toLowerCase() === selectedCategory.toLowerCase()
      )?.blogs || []
    : [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-rose-100 to-pink-50 py-20 px-4 my-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Unfold Stories, Ideas & Insights
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Dive into a world of creativity and expression with our curated blogs.
        </p>
      </section>

      {/* Search Bar */}
      <div className="w-full flex flex-col items-center mt-[-30px] mb-10 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSelectedCategory(null);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          placeholder="Search blogs by category..."
          className="w-11/12 sm:w-2/3 md:w-1/2 px-5 py-3 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all duration-200 bg-white"
        />

        {showSuggestions && (
          <div className="absolute top-full mt-2 w-11/12 sm:w-2/3 md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-md z-10 max-h-60 overflow-y-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm(cat.name);
                    setSelectedCategory(cat.name);
                    setShowSuggestions(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-pink-100 text-gray-700"
                >
                  {cat.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No category found</div>
            )}
          </div>
        )}
      </div>

      <Animations delay={0.2}>
        {/* Categories Section */}
        {!selectedCategory && (
          <section className="px-4 md:px-10 lg:px-20 pb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Explore by Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-32 object-cover hover:shadow-lg hover:scale-[1.05] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-3 text-center">
                    <h3 className="text-pink-600 font-medium">{cat.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category Blogs (Dynamic from dataCategories.js) */}
        {selectedCategory && (
          <section className="px-4 md:px-10 lg:px-20 pb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {selectedCategory} Blogs
              </h2>
              {/* ✅ Back to categories button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                ← Back to Categories
              </button>
            </div>

            {categoryBlogs.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {blog.description}
                      </p>
                      {blog.author && blog.date && (
                        <div className="text-gray-500 text-sm mb-2">
                          By <span className="font-medium">{blog.author}</span> •{" "}
                          {blog.date}
                        </div>
                      )}
                      <Link to={`/blogdetail/${blog.id}`}>
                        <button className="text-pink-500 font-medium hover:underline">
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No blogs available for this category.
              </p>
            )}
          </section>
        )}

        {/* Latest Blogs */}
        <section className="px-4 md:px-10 lg:px-20 pb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Latest Blogs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                  <div className="text-gray-500 text-sm mb-2">
                    By <span className="font-medium">{blog.author}</span> •{" "}
                    {blog.date}
                  </div>
                  <Link to={`/blogdetail/${blog.id}`}>
                    <button className="text-pink-500 font-medium hover:underline">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-10 lg:px-20 pb-20">
          <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-50 rounded-xl py-8 px-6 md:px-12 shadow-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800">
                Wanna publish your own blog?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Login now and start sharing your stories with the world!
              </p>
            </div>
            <button
              onClick={() => navigate("/publish")}
              className="mt-4 md:mt-0 bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
            >
              Continue →
            </button>
          </div>
        </section>
      </Animations>
      <Footer />
    </div>
  );
};

export default Blogs;
