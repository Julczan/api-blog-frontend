import { useParams } from "react-router";
import CommentList from "../CommentList/CommentList";
import Navbar from "../Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api/posts";
import parse from "html-react-parser";
import styles from "./Post.module.css";

function Post({ domain }) {
  const { postId } = useParams();

  const { data, status, error } = useQuery({
    queryKey: ["post", domain, postId],
    queryFn: () => getPost(domain, postId),
  });

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {status === "pending" && (
          <div className={styles.loadingMsg}>Loading post...</div>
        )}

        {error && <div className={styles.errorMsg}>{error}</div>}

        {data && (
          <>
            <article className={styles.post}>
              <header className={styles.header}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.meta}>
                  <span className={styles.author}>
                    By {data.author.username}
                  </span>
                  <span className={styles.date}>
                    Published: {data.createdAt}
                  </span>
                </div>
              </header>

              <div className={styles.content}>{parse(data.text)}</div>

              <div className={styles.updated}>
                Last updated: {data.updatedAt}
              </div>
            </article>

            <div className={styles.commentsSection}>
              <CommentList domain={domain} postId={postId} />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Post;
