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
        {/* Blobs décoratifs */}
          <div className="blob blob-left" aria-hidden="true" />
          <div className="blob blob-right" aria-hidden="true" />

          <div className="home-inner anim-rise">
            <img src={Image} alt="Portrait de Marwa Derbel, développeuse"
                className="round-image anim-rise anim-delay-1" loading="lazy" />
           <h1 className="gradient-title anim-rise anim-delay-2">
              Marwa Derbel — Développeuse Full-Stack React & {/** choisis Node ou Spring */}Node
            </h1>
            <p className="lead anim-rise anim-delay-3">
              SPA performantes (React) & APIs sécurisées ({/* Node ou Spring */}Node). 
            </p>

            <div className="hero-actions anim-rise anim-delay-3">
              <a href="#projects" className="btn-gradient">Voir mes projets</a>
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
