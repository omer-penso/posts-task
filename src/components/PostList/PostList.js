import Post from "../Post/Post";
import "./PostList.css";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
        {posts.map((post) => (
           <Post post={post} />
        ))}
    </div> 
  );
}
export default PostList;