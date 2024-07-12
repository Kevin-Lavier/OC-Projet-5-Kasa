import React from "react";
import "../styles/Details.scss";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";


const Details = ({ rental }) => {
  return (
    <div>
      <div className="details-name">
        <h1>{rental.title}</h1>
        <p>{rental.location}</p>
      </div>
      <div className="details-host">
        <img
          src={rental.host.picture}
          alt={rental.host.name}
          className="details-host-picture"
        />
        <p className="details-host-name">{rental.host.name}</p>
      </div>
      <div className="details-tags">
        {rental.tags.map((tag, index) => (
          <span key={index} className="details-tag">
            {tag}
          </span>
        ))}
      </div>
      <Rating rating={rental.rating} />
      <div className="collapse-containere">
        <Collapse title="Description" content={rental.description} />
        <Collapse
          title="Equipements"
          content={
            <ul>
              {rental.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Details;
