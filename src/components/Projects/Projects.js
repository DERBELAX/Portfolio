import React from 'react';
import './Projects.css'; 
import { FaGithub } from 'react-icons/fa';  
import Booki from'../../images/Booki.png';
import Kasa from'../../images/Kasa.png';
import Sophie from'../../images/Sophie.png';
import Nina from'../../images/Nina .png';
import Grimoire from'../../images/Grimoire.png';

function Projects() {
  const projects = [
    {
      name: 'Booki',
      description: 'Création d une page d accueil responsive d une agence de voyage',
      image: Booki,
      link: 'https://derbelax.github.io/booki-starter-code/',
      githubLink: 'https://github.com/DERBELAX/booki-starter-code/tree/P2-BOOKI'
    },
    {
      name: 'Sophie Bluel',
      description: 'Création d un site web dynamique avec JavaScript',
      image: Sophie,
      link: 'https://derbelax.github.io/Portfolio-architecte-sophie-bluel/',
      githubLink: 'https://github.com/DERBELAX/Portfolio-architecte-sophie-bluel/tree/projet-3'
    },
    {
      name: 'Nina Carducci',
      description: 'Débugger grâce aux Chrome DevTools et optimiser les performances dun site de photographe Nina Carducci',
      image: Nina,
      link: 'https://6703a8caa3c1fd7c766b90a8--incredible-lollipop-e43c18.netlify.app/',
      githubLink: 'https://github.com/DERBELAX/Nina-Carducci-Dev/tree/Projet-4'
    },
    {
      name: 'Kasa',
      description: 'Création d unsite de location immobilière',
      image: Kasa,
      link: 'https://derbelax.github.io/projet-5-Kasa/',
      githubLink: 'https://github.com/DERBELAX/projet-5-Kasa'
    },
    {
      name: 'Mon Vieux Grimoire',
      description: 'Développer le backend d un site de référencement et de notation de livres avec Node.js.',
      image: Grimoire,
      link: 'https://derbelax.github.io/projet-5-Kasa/',
      githubLink: 'https://github.com/DERBELAX/P6-Dev-Web-livres/tree/Mon-Vieux-Grimoire'
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mes Projets</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card project-card">
              <img src={project.image} className="card-img-top project-image" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Voir le site</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mx-2">
                  <FaGithub /> 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
