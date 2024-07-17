import React from "react";
import "./Rating.scss";
import greyStar from "../../../assets/grey_star.svg";
import redStar from "../../../assets/red_star.svg";



const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? redStar : greyStar}
          alt={index < rating ? "filled star" : "star"}
          className={`star ${index < rating ? "filled" : ""}`}
        />
      ))}
    </div>
  );
};

export default Rating;