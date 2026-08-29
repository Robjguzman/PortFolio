import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // This function will handle the toggling of the navbar
  const toggleNavbar = () => {
    setExpandNavbar(prev => !prev);
  };

  return (
    <nav className={`navbar ${expandNavbar ? "open" : ""}`}>
      <div className="navbar-brand">
        <span>Robert J. Guzman</span>
      </div>
      
      <div className="mobile-menu-btn" onClick={toggleNavbar}>
        <span>Menu</span>
        <div className={`hamburger ${expandNavbar ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={`nav-links ${expandNavbar ? "open" : ""}`}>
        <a href="#home" onClick={toggleNavbar}>
          <span className="nav-icon">🏠</span>
          Home
        </a>
        <a href="#about" onClick={toggleNavbar}>
          <span className="nav-icon">👤</span>
          About
        </a>
        <a href="#projects" onClick={toggleNavbar}>
          <span className="nav-icon">💻</span>
          Projects
        </a>
        <a href="#experience" onClick={toggleNavbar}>
          <span className="nav-icon">💼</span>
          Experience
        </a>
        <a href="#contact" onClick={toggleNavbar}>
          <span className="nav-icon">📧</span>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

