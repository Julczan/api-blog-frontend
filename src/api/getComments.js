export const getComments = async (domain, postId) => {
  const response = await fetch(`${domain}/posts/${postId}/comments`);
  return response.json();
};
