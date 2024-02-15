import React from "react";

const Logo = (props) => {
    const { width, height } = props;
    return (
        <img
            style={{ width: width, height: height }}
            src="https://i.imgur.com/FeufZQ0.png"
            alt="logo"
        />
    );
};

export default Logo;
