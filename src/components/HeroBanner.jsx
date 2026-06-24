import React from "react";

const HeroBanner = () => (
  <header className="hero">
    <div className="logo">A&K</div>
    <nav>
      <ul>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#travel">Travel & Stay</a></li>
        <li><a href="#blessings">Blessings</a></li>
        <li><a href="#registry">Registry</a></li>
      </ul>
    </nav>
    <div className="hero-text">
      <h1>We’re Getting Married</h1>
      <h2>Adarsh & Karthika</h2>
      <p>September 13, 2026<br/>SN Study Center, Ambalakavala<br/>11:15 AM</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTZrW_36kcw88s84lb4SDZU0gA5a9Ql-IdMOiREAXwMxO-lw/viewform?usp=publish-editor"
         target="_blank" rel="noreferrer" className="rsvp-btn">RSVP</a>
    </div>
  </header>
);

export default HeroBanner;
