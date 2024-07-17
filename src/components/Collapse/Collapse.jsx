import React, { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/up_arrow.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-wrapper">
      <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h2 className="collapse-title">{title}</h2>
          <img
            src={arrow}
            alt="Toggle collapse"
            className={`collapse-icon ${isOpen ? "open" : ""}`}
          />
        </div>
        <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          <div className="collapse-content-inner">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
