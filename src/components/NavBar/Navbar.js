import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import logo from '../../images/Logo.svg.jpg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* IMPORTANT : Bootstrap 5 syntax */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projets</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
