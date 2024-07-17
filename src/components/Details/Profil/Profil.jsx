import React from "react";
import "./Profil.scss";

const Profil = ({ host }) => {
  return (
    <div className="details-host">
      <p className="details-host-name">{host.name}</p>
      <img
        src={host.picture}
        alt={host.name}
        className="details-host-picture"
      />
    </div>
  );
};

export default Profil;