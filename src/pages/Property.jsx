import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Details from "../components/Details";
import NotFound from './NotFound';

const Property = () => {
  const { id } = useParams();
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRental = logements.find((logement) => logement.id === id);
    setRental(foundRental);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!rental) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <div className="carrousel-wrapper">
        <Carrousel images={rental.pictures} />
      </div>
      <div className="details-wrapper">
        <Details rental={rental} />
      </div>
      <Footer />
    </div>
  );
};

export default Property;