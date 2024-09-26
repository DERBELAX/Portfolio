import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:tonemail@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="mb-0">© 2024 Marwa Derbel. Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
