import React from "react";
import "./Profil.scss";

const Profil = ({ host }) => {
  return (
    <div className="details-host">
      <img
        src={host.picture}
        alt={host.name}
        className="details-host-picture"
      />
      <p className="details-host-name">{host.name}</p>
    </div>
  );
};

export default Profil;