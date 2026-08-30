import { useState, useEffect } from "react";

const usePostsData = (url) => {
  const [postsData, setPostsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setPostsData(response))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { postsData, error, loading };
};

export default usePostsData;
