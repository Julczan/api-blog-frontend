import { useEffect, useState } from "react";
import { getRequestWithNativeFetch } from "./getRequestWithFetch";
import Post from "./Post/Post";
import { useParams } from "react-router";

const FetchSinglePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { postId } = useParams();
  const domain = "http://localhost:3000";

  useEffect(() => {
    const fetchDataForSinglePost = async () => {
      const route = `/posts/${postId}`;
      try {
        const postsData = await getRequestWithNativeFetch(domain + route);

        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForSinglePost();
  }, [domain, postId]);

  return (
    <div>
      {loading && <div>Loading post...</div>}
      {error && <div>{error}</div>}
      {data && <Post data={data} />}
    </div>
  );
};

export default FetchSinglePost;
