import useData from "../../api/useData";
import "./PostList.css";

function PostList({ domain }) {
  const route = "/posts";

  const { data, error, loading } = useData(domain + route);

  return (
    <>
      {loading && "Loading..."}
      {error && <p>{error}</p>}
      <div className="postlist">
        {data &&
          data.map((post) => (
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
