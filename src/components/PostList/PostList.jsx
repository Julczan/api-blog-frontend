import { useQuery } from "@tanstack/react-query";
import "./PostList.css";
import { getPosts } from "../../api/posts";
import { useNavigate } from "react-router";

function PostList({ domain }) {
  const { data, status, error } = useQuery({
    queryKey: ["posts", domain],
    queryFn: () => getPosts(domain),
  });

  const navigate = useNavigate();

  const handleCLick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <>
      {status === "pending" && "Loading..."}
      {error && <p>{error}</p>}
      <div className="postlist">
        {data &&
          data.map((post) => (
            <div
              className="post"
              key={post.id}
              onClick={() => handleCLick(post.id)}
            >
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
