import React from 'react';
import Navbar from '../NavBar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Resume from '../Resume';
import Footer from '../Footer/Footer';
import './Home.css';
import Image from '../../images/Image.jpeg';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO full-bleed (plus de .container ici) */}
        <section id="home" className="home-hero" aria-label="Accueil">
          <div className="home-inner">
            <img
              src={Image}
              alt="Portrait de Marwa Derbel, développeuse"
              className="round-image"
              loading="lazy"
            />
            <h1>Hello! Je suis Marwa Derbel</h1>
            <p className="lead">
              Développeuse Full-Stack Web & Mobile — React, Node, Java/Spring, Symfony
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-accent">Voir mes projets</a>
              <a href="#contact" className="btn-ghost">Me contacter</a>
            </div>
          </div>
        </section>

        <div className="section-sep" aria-hidden="true" />

        <section id="about" aria-label="À propos"><About /></section>
        <div className="section-sep" aria-hidden="true" />

        <section id="skills" aria-label="Compétences"><Skills /></section>
        <div className="section-sep" aria-hidden="true" />

        <section id="projects" aria-label="Projets"><Projects /></section>
        <div className="section-sep" aria-hidden="true" />

        <section id="contact" aria-label="Contact"><Contact /></section>
        <section id="resume" aria-label="CV"><Resume /></section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
