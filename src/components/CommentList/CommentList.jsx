import useData from "../../api/useData";

function CommentList({ domain, postId }) {
  const route = `/posts/${postId}/comments`;

  const { data, error, loading } = useData(domain + route);

  if (data && data.length === 0) {
    return <p>There is no comments yet</p>;
  }

  return (
    <>
      {loading && "Loading..."}
      {error && <p>{error}</p>}

      <div className="commentList">
        {data &&
          data.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-author">{comment.author.username}</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-created">{comment.createdAt}</div>
              <div className="comment-updated">{comment.updatedAt}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CommentList;
