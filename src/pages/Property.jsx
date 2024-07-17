import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Details from "../components/Details/Details";
import NotFound from './NotFound/NotFound';

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
      <div className="global-container">
      <Header />
      <main>
        <section>
          <article>
            <Carrousel images={rental.pictures} />
          </article>
          <article>
            <Details rental={rental} />
          </article>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
