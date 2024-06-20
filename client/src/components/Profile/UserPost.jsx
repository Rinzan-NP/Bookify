import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

const UserPost = (props) => {
    const { username, setNoPosts } = props;
    const [Posts, setPosts] = useState([]);
    const baseUrl = "http://127.0.0.1:8001/";
    // Dummy data for demonstration, replace it with your actual post data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8001/api/get/userposts/${username}`
                );
                if (response.status == 200) {
                    console.log(response.data);
                    setNoPosts(response.data.length);
                    setPosts(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="user-posts mt-4">
            {Posts.map((post) => (
                <div
                    key={post.id}
                    className="post border-2 border-black"
                    style={{
                        backgroundImage: `url(${
                            baseUrl + post.background_image.background_image
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        height: "300px",
                        width: "100%",
                    }}
                >
                    <p
                        className="text-[#252525] "
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontFamily: "Handlee",
                            fontSize: "1.5rem",
                            textAlign: "center",
                        }}
                    >
                        {post.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default UserPost;
