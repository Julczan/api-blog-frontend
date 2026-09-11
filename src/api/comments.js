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
