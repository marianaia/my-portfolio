import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Always looking for better ways to solve problems.',
    'Writing software that is reliable and easy to maintain.',
    'Passionate about building solutions from scratch.',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <p>{slide}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;