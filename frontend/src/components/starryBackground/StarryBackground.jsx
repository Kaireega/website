import React, { useEffect, useState } from "react";
import "./StarryBackground.css";

const StarryBackground = ({ starCount = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: starCount }, () => ({
      x: Math.random() * 100, // Random horizontal position
      y: Math.random() * 100, // Random vertical position
      size: Math.random() * 3 + 1, // Size range (1 to 4 pixels)
      speed: Math.random() * 5 + 3, // Speed (3 to 8 seconds)
    }));

    setStars(newStars);
  }, [starCount]);

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.speed}s`,
          }}
        ></div>
      ))}
    </>
  );
};

export default StarryBackground;
