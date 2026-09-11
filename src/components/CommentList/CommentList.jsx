import CommentForm from "./CommentForm";
import { getComments } from "../../api/getComments";
import { useQuery } from "@tanstack/react-query";

function CommentList({ domain, postId }) {
  const { data, status, error } = useQuery({
    queryKey: ["comments", domain, postId],
    queryFn: () => getComments(domain, postId),
  });

  if (data && data.length === 0) {
    return (
      <>
        <p>There is no comments yet</p>
        <CommentForm domain={domain} postId={postId} />
      </>
    );
  }

  return (
    <>
      {status === "pending" && "Loading..."}
      {error && <p>{error.message}</p>}

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
      <CommentForm domain={domain} postId={postId} />
    </>
  );
}

export default CommentList;
