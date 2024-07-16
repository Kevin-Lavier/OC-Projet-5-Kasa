import React from 'react';
import Rating from './Rating/Rating';
import Tags from './Tags/Tags';
import Profil from './Profil/Profil';
import Title from './Title/Title';
import './Details.scss';
import Collapse from "../Collapse/Collapse";


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
