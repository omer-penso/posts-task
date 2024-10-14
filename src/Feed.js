import PostList from "./PostList";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const Feed = () => {
    const {data: posts, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");
        
    return (
        <div className="feed">
            <h1>Feed</h1>
            {loading && <p>Loading posts...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <PostList posts={posts} />}
        </div>
    );
};
export default Feed;