import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";


const Card = ({ id, title, cover }) => (
  <Link to={`/property/${id}`} className="card">
    <div className="card-image-container">
      <img src={cover} alt={title} className="card-image" />
      <div className="overlay"></div>
    </div>
    <h2 className="card-title">{title}</h2>
  </Link>
);

export default Card;
