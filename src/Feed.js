import React from "react";
import Select from "react-select";
import PostList from "./PostList";
import useFetch from "./useFetch";
import { useState } from "react";

const Feed = () => {
    const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [selectedOptions, setSelectedOptions] = useState([]);

    const filteredPosts = selectedOptions.length > 0
        ? posts.filter(post => selectedOptions.some(option => option.value === post.userId))
        : posts;

    const uniqueAuthors = [...new Set(posts.map(post => post.userId))];
    const options = uniqueAuthors.map(authorID => ({
        value: authorID,
        label: `Author ${authorID}` // Use 'label' for react-select
    }));

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions || []); 
    };

    return (
        <div className="feed">
            <Select
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                isMulti={true}
                placeholder="Select authors..."
            />
            {loading && <p id="loading-text">Loading posts...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <PostList posts={filteredPosts} />}
        </div>
    );
};

export default Feed;
