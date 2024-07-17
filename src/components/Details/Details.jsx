import React from 'react';
import Rating from './Rating/Rating';
import Tags from './Tags/Tags';
import Profil from './Profil/Profil';
import Title from './Title/Title';
import './Details.scss';
import Collapse from "../Collapse/Collapse";

const Details = ({ rental }) => {
  return (
    <div className="details">
      <div className="details-header">
        <div className="details-title-profil">
          <Title title={rental.title} location={rental.location} />
          <Profil host={rental.host} />
        </div>
        <div className="details-tags-rating">
          <Tags tags={rental.tags} />
          <Rating rating={rental.rating} />
        </div>
      </div>
      <div className="details-collapse">
        <Collapse key="description" title="Description" content={rental.description} />
        <Collapse
          key="equipments"
          title="Équipements"
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
