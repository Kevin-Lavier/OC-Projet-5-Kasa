import React from "react";
import "../styles/Details.scss";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Profil from "../components/Profil";
import Title from "../components/Title";


const Details = ({ rental }) => {
  return (
    <div>
      <Title title={rental.title} location={rental.location} />
      <Profil host={rental.host} />
      <Tags tags={rental.tags} />
      <Rating rating={rental.rating} />
      <div>
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
