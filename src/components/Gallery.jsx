import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Gallery.scss";
import data from "../datas/logements.json";

const Gallery = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(data);
  }, []);

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card 
          key={logement.id} 
          id={logement.id} 
          title={logement.title} 
          cover={logement.cover} 
        />
      ))}
    </div>
  );
};

export default Gallery;
