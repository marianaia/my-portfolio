import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Experienced in both frontend and backend development, creating complete web applications from scratch.',
    'Specialized in building responsive and user-friendly interfaces using modern frontend technologies.',
    'Designing robust APIs and managing databases to support scalable applications.',
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