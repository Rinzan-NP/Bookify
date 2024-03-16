import React, { useState } from "react";
import "./Post.css";

function Carousel(props) {
    const { images, content } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const showButton = images.length > 1;
    return (
        <div className="carousel rounded-lg">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="carousel-item"
                    style={{
                        backgroundImage: `url(${image})`,
                        display: index === currentIndex ? "block" : "none",
                    }}
                >
                    <div className="content">{content}</div>
                </div>
            ))}

            {showButton && (
                <>
                    <button className="prev" onClick={handlePrev}>
                        &#10094;
                    </button>
                    <button className="next" onClick={handleNext}>
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
}

export default Carousel;
