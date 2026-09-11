export const addComment = async ({ domain, postId, text }) => {
  const route = `/posts/${postId}/comments`;

  const response = await fetch(domain + route, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  if (response.status >= 400) {
    const errorData = await response.json();
    return Promise.reject(errorData.error);
  }
  return response.json();
};
