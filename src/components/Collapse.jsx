import React, { useState } from "react";
import "../styles/Collapse.scss";
import arrow from "../assets/up_arrow.svg"; // Utilisez une seule icône pour la flèche

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <img
          src={arrow}
          alt="Toggle collapse"
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
