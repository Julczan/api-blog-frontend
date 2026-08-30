import { useEffect, useState } from "react";
import { getRequestWithNativeFetch } from "./getRequestWithFetch";
import PostList from "./PostList";

const FetchPosts = ({ domain }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      const route = "/posts";
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

    fetchDataForPosts();
  }, [domain]);

  return (
    <div>
      {loading && <div>Loading posts...</div>}
      {error && <div>{error}</div>}
      {data && <PostList data={data} />}
    </div>
  );
};

export default FetchPosts;
