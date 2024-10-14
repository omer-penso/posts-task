import "./Post.css";

const Post = ({ post }) => {
    return (
        <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>Written by: {post.body}</p>
        </div>
    );
}
export default Post;