import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div>
       <Header />
       <main>
      <section className="flex-column">
        <p className="large-text">404</p>
        <p className="medium-text">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="nav-link">Retourner sur la page d’accueil</NavLink>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
