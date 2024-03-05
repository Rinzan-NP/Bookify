import React from "react";

const Post = (props) => {
    const {image} = props;
    return (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="post"
            />
        </div>
    );
};

export default Post;
