import React from "react";
import Select from "react-select";
import PostList from "../PostList/PostList";
import useFetch from "../../hooks/useFetch";
import "./Feed.css";
import { useState } from "react";

const Feed = () => {
    const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const uniqueAuthors = [...new Set(posts.map(post => post.userId))];
    const options = uniqueAuthors.map(authorID => ({
        value: authorID,
        label: `Author ${authorID}` 
    }));

    const filteredPosts = selectedOptions.length 
    ? posts.filter(post => selectedOptions.some(option => option.value === post.userId))
    : posts;

    const indexOfStartPost = (currentPage - 1) * postsPerPage;;
    const indexOfEndPost = currentPage * postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfStartPost, indexOfEndPost);

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions || []); 
        setCurrentPage(1);
    };

    return (
        <div className="feed">
             { !loading && (<Select
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                isMulti={true}
                placeholder="Select authors..."
                className="author-select"
            />)}

            {loading && <p id="loading-text">Loading posts...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <PostList posts={currentPosts} />}

            <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="previous-button"
                > Previous Page 
            </button>

            <span>Page {currentPage}</span>

            <button 
                onClick={() => setCurrentPage((prev) => currentPage + 1)}
                disabled={currentPosts.length < postsPerPage}
                className="next-button"
                > Next Page
            </button>
                
        </div>
    );
};

export default Feed;
