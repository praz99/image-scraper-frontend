import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found-container">
    <div className="message-box"><p className="message">Looks like you are lost.</p></div>
    <Link to="/" className="home-button home-not-found">Home</Link>
  </div>
);

export default NotFound;
