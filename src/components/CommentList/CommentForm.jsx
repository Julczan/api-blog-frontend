import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function CommentForm({ domain }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { postId } = useParams();

  const comment = async (e) => {
    setLoading(true);
    setError(null);
    e.preventDefault();

    const route = `/posts/${postId}/comments`;

    fetch(domain + route, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status >= 400) {
          const errorData = await response.json();
          return Promise.reject(errorData.error);
        }
        return response.json();
      })
      .then(() => {
        return navigate(`/posts/${postId}`);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          {error}. Please sign up to leave a comment:{" "}
          <Link to={"/signup"}>Sign Up</Link>
        </p>
      )}
      <form name="commentForm" onSubmit={comment}>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            id="comment"
            name="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="coolcoder99"
            type="textarea"
            autoComplete="no"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Comment
        </button>
      </form>
    </>
  );
}

export default CommentForm;
