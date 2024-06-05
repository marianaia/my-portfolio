import React, { useState } from 'react';
import './Header.css';
import ChatPopup from '../ChatPopup/ChatPopup';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [showChatPopup, setShowChatPopup] = useState(false);

  const toggleChatPopup = () => {
    setShowChatPopup(!showChatPopup);
  };


  return (
    <header className="header" id="header">
      <div className="navbar">
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><a href="#header">Home</a></li>
          <li className="navbar-item"><a href="#projects">Projects</a></li>
          <li className="navbar-item"><a href="#skills">Skills</a></li>
          {/* <li className="navbar-item"><a href="#contact">More</a></li> */}
          <li><button onClick={toggleChatPopup}>Chat</button></li>
        </ul>
        {showChatPopup && <ChatPopup onClose={toggleChatPopup} />}
      </div>
      <div className="header-content">
        <h1 className="page-title">Software development & algorithms</h1>
        <p className="description">Experienced in full-stack development, microservices, and automated testing. Passionate about technology, continuous learning, and solving complex problems.</p>
        <button className="contact-button" onClick={toggleChatPopup}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
