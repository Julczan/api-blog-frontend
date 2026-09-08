import { useParams } from "react-router";
import useData from "../../api/useData";
import CommentList from "../CommentList/CommentList";
import Navbar from "../Navbar/Navbar";

function Post({ domain }) {
  const { postId } = useParams();

  const route = `/posts/${postId}`;

  const { data, error, loading } = useData(domain + route);

  return (
    <>
      <Navbar />
      {loading && "Loading..."}
      {error && <p>{error}</p>}
      {data && (
        <>
          <div className="post" key={data.id}>
            <div className="post-title">{data.title}</div>
            <div className="post-text">{data.text}</div>
            <div className="post-created">{data.createdAt}</div>
            <div className="post-updated">{data.updatedAt}</div>
          </div>
          <CommentList domain={domain} postId={postId} />
        </>
      )}
    </>
  );
}

export default Post;
