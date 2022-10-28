import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useBlogs } from '../../shared/hooks/blog-hook';

const BlogPost = (props) => {
  const [id, setID] = useState(null);
  const { blogs } = useBlogs();
  const { blogID } = useParams();
  useEffect(() => {
    setID(
      blogs.findIndex((blog) => {
        return blog._id.toString() === blogID.toString();
      })
    );
  }, [blogID, blogs]);
  if (!blogs[id]) return <LoadingSpinner />;
  return (
    <>
      <h2>{`${blogs[id].title}`}</h2>
      <p>{`${blogs[id].body}`}</p>
    </>
  );
};

export default BlogPost;
