import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://pharma-door-backend.vercel.app/api/v1/blog"
      );
      setBlogs(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-medium text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-medium text-gray-500">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-xl font-bold text-center mb-12">
        Latest Articles from Our Blog
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog) => (
          <article
            key={blog._id}
            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <a
                  href={`/blog/${blog._id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-2">
        <button
          className="px-3 py-1 border rounded hover:bg-indigo-100"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-indigo-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          className="px-3 py-1 border rounded hover:bg-indigo-100"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
