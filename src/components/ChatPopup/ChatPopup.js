// src/ChatPopup.js
import React, { useState } from 'react';
import './ChatPopup.css';


const ChatPopup = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can send the email using your preferred method, such as an API call or directly via email client
      console.log('Email sent:', email, message);
      // Close the popup after submitting the form
      onClose();
    };
  
    return (
      <div className="chat-popup">
        <div className="chat-popup-content">
          <h2>Send me a message</h2>
          <button className="close" onClick={onClose}>×</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ChatPopup;