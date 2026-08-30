import { useParams } from "react-router";
import useSinglePostData from "../../api/useSiglePostData";

function Post({ domain }) {
  const { postId } = useParams();

  const route = `/posts/${postId}`;

  const { postData, error, loading } = useSinglePostData(domain + route);

  return (
    <>
      {loading && "Loading..."}
      {error && <p>{error}</p>}
      {postData && (
        <div className="post" key={postData.id}>
          <div className="post-title">{postData.title}</div>
          <div className="post-text">{postData.text}</div>
          <div className="post-created">{postData.createdAt}</div>
          <div className="post-updated">{postData.updatedAt}</div>
        </div>
      )}
    </>
  );
}

export default Post;
