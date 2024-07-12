import React from "react";
import "../styles/Rating.scss";

const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;