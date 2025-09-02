import { useParams, Link } from "react-router-dom";
import { dataBlogs } from "../data/dataBlogs";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = dataBlogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-gray-600 mt-20">Blog not found</h2>;
  }

  // Helper: format lines cleanly
  const formatLine = (line, idx) => {
    // Bold text between ** **
    const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // If line starts with a number (like "1." or "2.")
    if (/^\d+\./.test(line)) {
      return (
        <h3
          key={idx}
          className="text-xl font-semibold text-gray-900 mt-8 mb-3"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    }

    return (
      <p
        key={idx}
        className="text-gray-800 leading-relaxed mb-5"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="px-4 md:px-16 lg:px-32 py-12">
       
        <Link
          to="/blogs"
          className="text-pink-600 hover:text-pink-700 text-sm mb-6 inline-block font-medium"
        >
          ← Back to Blogs
        </Link>

       
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
          {blog.title}
        </h1>

        
        <div className="flex items-center gap-3 mb-8">
          <img
            src={`https://i.pravatar.cc/100?u=${blog.author}`} //Uses Pravatar service for author avatar rzndom

            alt={blog.author}
            className="w-10 h-10 rounded-full"
          />
          <div className="text-sm text-gray-600">
            <p className="font-semibold">{blog.author}</p>
            <p>{blog.date}</p>
          </div>
        </div>

        
        <div className="mb-10 -mx-4 md:-mx-16 lg:-mx-32">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[600px] object-cover"
          />
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg max-w-none text-left">
          {blog.content.split("\n").map((line, idx) => formatLine(line, idx))}
        </article>
      </div>
    </main>
  );
}
