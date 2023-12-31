import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
