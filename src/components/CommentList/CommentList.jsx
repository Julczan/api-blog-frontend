import CommentForm from "./CommentForm";
import { getComments } from "../../api/getComments";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import EditCommentForm from "./EditCommentForm";

function CommentList({ domain, postId }) {
  const [editing, setEditing] = useState("");

  const { data, status, error } = useQuery({
    queryKey: ["comments", domain, postId],
    queryFn: () => getComments(domain, postId),
  });

  const user = localStorage.getItem("User");

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
          data.map((comment) =>
            comment.id === editing ? (
              <div key={comment.id}>
                <EditCommentForm
                  domain={domain}
                  postId={postId}
                  commentId={comment.id}
                  text={comment.text}
                  setEditing={setEditing}
                />
                <button onClick={() => setEditing("")}>Cancel</button>
              </div>
            ) : (
              <div className="comment" key={comment.id}>
                <div className="comment-author">{comment.author.username}</div>
                <div className="comment-text">{comment.text}</div>
                <div className="comment-created">{comment.createdAt}</div>
                <div className="comment-updated">{comment.updatedAt}</div>
                {user === comment.author.username && (
                  <div className="comment-btns">
                    <button onClick={() => setEditing(comment.id)}>Edit</button>
                    <button>Delete</button>
                  </div>
                )}
              </div>
            ),
          )}
      </div>
      <CommentForm domain={domain} postId={postId} />
    </>
  );
}

export default CommentList;
