import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useBlogs } from '../../shared/hooks/blog-hook';

const BlogContainer = () => {
  const { getBlogs, blogDeleteHandler } = useBlogs();
  const [loadedBlogs, setLoadedBlogs] = useState([]);
  useEffect(() => {
    setLoadedBlogs(async () => await getBlogs());
  }, []);
  const displayBlogs = loadedBlogs.length ? (
    loadedBlogs.map((blog) => (
      <>
        <Link to={`/${blog._id}`} key={blog._id} className="no-link blog">
          <h2>{blog.title}</h2>
        </Link>
        <button
          onClick={() => {
            blogDeleteHandler(blog._id);
          }}
        >
          Delete
        </button>
      </>
    ))
  ) : (
    <LoadingSpinner />
  );
  return <div className="blog-container">{displayBlogs}</div>;
};

export default BlogContainer;
