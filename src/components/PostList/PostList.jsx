import usePostsData from "../../api/usePostsData";
import "./PostList.css";

function PostList({ domain }) {
  const route = "/posts";

  const { postsData, error, loading } = usePostsData(domain + route);

  return (
    <>
      {loading && "Loading..."}
      {error && <p>{error}</p>}
      <div className="postlist">
        {postsData &&
          postsData.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-title">{post.title}</div>
              <div className="post-text">{post.text}</div>
              <div className="post-created">{post.createdAt}</div>
              <div className="post-updated">{post.updatedAt}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default PostList;
