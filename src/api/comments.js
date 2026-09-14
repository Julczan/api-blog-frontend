export const getComment = async (domain, postId, commentId) => {
  const response = await fetch(
    `${domain}/posts/${postId}/comments/${commentId}`,
  );
  if (response.status >= 400) {
    const errorData = await response.json();
    return Promise.reject(errorData);
  }
  return response.json();
};

export const editComment = async ({ domain, postId, commentId, newText }) => {
  const response = await fetch(
    `${domain}/posts/${postId}/comments/${commentId}`,
    {
      method: "PUT",
      body: JSON.stringify({ text: newText }),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    },
  );
  if (response.status >= 400) {
    const errorData = await response.json();
    return Promise.reject(errorData.error);
  }
  return response.json();
};
