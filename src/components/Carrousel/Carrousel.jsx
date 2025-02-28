import React, { useState } from 'react';
import './Carrousel.scss';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      {images.length > 1 && (
        <button className="left-arrow" onClick={prevSlide}>❮</button>
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />
      {images.length > 1 && (
        <button className="right-arrow" onClick={nextSlide}>❯</button>
      )}
      <div className="image-counter-container">
        <div className="image-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
