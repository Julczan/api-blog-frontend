import { useParams } from "react-router";
import useData from "../../api/useData";

function Comment({ domain }) {
  const { postId, commentId } = useParams();

  const route = `/posts/${postId}/comments/${commentId}`;

  const { data, error, loading } = useData(domain + route);
  return (
    <>
      {loading && "Loading..."}
      {error && <p>{error}</p>}
      {data && (
        <>
          <div className="comment" key={data.id}>
            <div className="comment-title">{data.title}</div>
            <div className="comment-author">{data.author.username}</div>
            <div className="comment-text">{data.text}</div>
            <div className="comment-created">{data.createdAt}</div>
            <div className="comment-updated">{data.updatedAt}</div>
          </div>
        </>
      )}
    </>
  );
}

export default Comment;
