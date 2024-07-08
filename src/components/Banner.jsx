import React from "react";
import "../styles/Banner.scss";

const Banner = ({ isHome, text, imageUrl }) => {
  return (
    <div
      className={`banner ${isHome ? "home" : "about"}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="overlay"></div>
      {isHome && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;
