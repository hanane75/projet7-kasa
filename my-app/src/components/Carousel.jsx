import React, { useState } from 'react';


const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <div className="carousel-navigation">
          <img src='flechegauche.png' alt="Previous" onClick={goToPrevious} className="carousel-arrow left-arrow" />
          <img src='flechedroit.png' alt="Next" onClick={goToNext} className="carousel-arrow right-arrow" />
        </div>
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
