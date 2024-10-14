const PostList = ({ posts }) => {
  return (
    <div className="post-list">
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>Written by: {post.body}</p>
            </div>
        ))}
    </div> 
  );
}