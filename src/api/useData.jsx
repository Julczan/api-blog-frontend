import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setPostsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        if (response.status >= 400) {
          const errorData = await response.json();
          throw new Error(errorData.message || "An error occurred");
        }
        return response.json();
      })
      .then((response) => setPostsData(response))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useData;
