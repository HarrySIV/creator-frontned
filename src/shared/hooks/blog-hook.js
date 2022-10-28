import { useHttpClient } from './http-hook';

export const useBlogs = () => {
  const backendURL = 'http://localhost:3001/api/blogs';
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const getBlogs = async () => {
    // fetches blogs from API
    try {
      const blogResponseData = await sendRequest(`${backendURL}`);
      if (blogResponseData.blogs.length) return blogResponseData.blogs.blogs;
    } catch (error) {}
  };

  // deletes a blog from DB
  const blogDeleteHandler = async (blogID) => {
    await fetch(`${backendURL}/blogs/${blogID}`, { method: 'DELETE' });
    console.log(blogID);
  };

  return { blogDeleteHandler, getBlogs };
};
