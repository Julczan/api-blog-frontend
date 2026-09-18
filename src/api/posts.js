export const getPosts = async (domain) => {
  const response = await fetch(`${domain}/posts`);
  return response.json();
};

export const getPost = async (domain, postId) => {
  const response = await fetch(`${domain}/posts/${postId}`);
  if (response.status >= 400) {
    const errorData = await response.json();
    return Promise.reject(errorData.error);
  }
  return response.json();
};
