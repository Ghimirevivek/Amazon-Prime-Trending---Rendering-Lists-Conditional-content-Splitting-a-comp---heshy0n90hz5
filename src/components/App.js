import React, {Component,useState } from "react";
import '../styles/App.css';
import { slides } from "../data";

const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;

  const handlePrevClick = () => {
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const handleRestartClick = () => {
    setCurrentSlideIndex(0);
  };

  return (
    <div className="App">
      <h1 data-testid="title">{currentSlide.title}</h1>
      <p data-testid="text">{currentSlide.text}</p>
      <button
        data-testid="button-prev"
        disabled={isFirstSlide}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={isLastSlide}
        onClick={handleNextClick}
      >
        Next
      </button>
      <button
        data-testid="button-restart"
        disabled={isFirstSlide}
        onClick={handleRestartClick}
      >
        Restart
      </button>
    </div>
  );
};

export default App;
