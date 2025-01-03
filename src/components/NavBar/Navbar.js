import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import logo from '../../images/Logo.svg.jpg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false); //État pour le défilement

  // Change l'état selon le défilement
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // Attache et détache l'événement 'scroll'
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     // Ajout d'une classe CSS conditionnelle selon l'état de défilement (scrolled)
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo qui renvoie à la section d'accueil lorsqu'on clique dessus */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </a>
              {/* Bouton pour la version mobile qui permet de dérouler le menu */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu déroulant avec les liens de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Compétences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
