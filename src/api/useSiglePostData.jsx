import { useState, useEffect } from "react";

const useSinglePostData = (url) => {
  const [postData, setPostData] = useState(null);
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
      .then((response) => setPostData(response))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { postData, error, loading };
};

export default useSinglePostData;
