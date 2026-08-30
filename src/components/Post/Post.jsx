function Post({ data }) {
  return (
    <div className="post" key={data.id}>
      <div className="post-title">{data.title}</div>
      <div className="post-text">{data.text}</div>
      <div className="post-created">{data.createdAt}</div>
      <div className="post-updated">{data.updatedAt}</div>
    </div>
  );
}

export default Post;
