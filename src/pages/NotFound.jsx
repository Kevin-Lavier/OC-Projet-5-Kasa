import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
       <Header />
      <div className="flex-column">
        <p className="large-text">404</p>
        <p className="medium-text">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="nav-link">Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
