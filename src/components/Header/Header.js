import React, { useState } from 'react';
import './Header.css';
import headerBack from "../../images/about_back.svg";
import { Bullets } from './Bullets';


const Header = () => {

  const myData = [
    {
      highlight: "Backend Development",
      text: "Rust/Axum, Python/Django, REST API design and implementation"
    },
    {
      highlight: "Software Architecture",
      text: "Modular design, microservices, distributed architectures"
    },
    {
      highlight: "Network & Communication",
      text: "TCP/IP, UDP, network protocols, service communication"
    }
  ];

  return (
    <header
      className="w-full min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${headerBack})` }}
    >
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2.5 bg-white/70 backdrop-blur-md rounded-b-[12px] border-b border-gray-200/50 shadow-sm">
        <div className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base tracking-wide">
          Welcome to my software development portfolio!
        </div>
      </div>
      <div className="header-content">
        <h1 className="mb-6 p-5 text-3xl font-extrabold capitalize rounded-xl border border-gray-100 bg-header-back text-center text-text-dark sm:text-4xl md:text-5xl">
          Software Engineering & Algorithms
        </h1>
        <div className="my-5 mb-10 mx-auto max-w-[900px] rounded-xl border border-gray-100 bg-header-back px-4 py-4 text-center text-base text-text-dark sm:px-5 sm:py-5 sm:text-lg md:text-xl">
          <p>I enjoy building reliable software that solves complex problems.</p>
          <p>With hands on experience across different projects and technologies.</p>
        </div>
      </div>
      <Bullets
        items={myData}
      />
    </header >
  );
};

export default Header;
