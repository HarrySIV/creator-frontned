import BlogContainer from './Blog_Container';
import './Blog.css';
import { useBlogs } from '../../shared/hooks/blog-hook';

const Blog = () => {
  const { blogs, blogDeleteHandler } = useBlogs();

  return <BlogContainer blogs={blogs} onDeleteBlog={blogDeleteHandler} />;
};

export default Blog;
