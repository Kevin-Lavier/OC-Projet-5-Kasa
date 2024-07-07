import React from "react";
import "../styles/Card.scss";

const Card = ({ title, cover }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={cover} alt={title} className="card-image" />
      <div className="overlay"></div>
    </div>
    <h2 className="card-title">{title}</h2>
  </div>
);

export default Card;
