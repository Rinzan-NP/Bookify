import React from "react";
import "./Profile.css";

const UserPost = (props) => {
    // Dummy data for demonstration, replace it with your actual post data
    const posts = [
        {
            id: 1,
            imageUrl: "https://example.com/post1.jpg",
            likes: 120,
            comments: 5,
        }
    ];

    return (
        <div className="user-posts mt-4">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <img src={post.imageUrl} alt={`Post ${post.id}`} />
                    
                </div>
            ))}
        </div>
    );
};

export default UserPost;
