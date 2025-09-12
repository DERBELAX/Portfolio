// src/components/About/About.jsx
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./About.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = (fromX, prefersReducedMotion) =>
  prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, x: fromX, y: 18, scale: 0.98, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };

function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: false });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="container-xl my-5" ref={sectionRef} aria-label="À propos de moi">
      <h2 className="about-title">À propos de moi</h2>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Carte gauche */}
        <motion.article
          className="about-card"
          variants={cardVariants(40, prefersReducedMotion)}
          aria-labelledby="about-dev"
        >
         <h3 id="about-dev">
            Développeuse Full-Stack Web & Mobile
          </h3>
         <p>
            <strong>Développeuse full-stack</strong> (React&nbsp;/ Node.js&nbsp;/ Java&nbsp;Spring&nbsp;/ PHP&nbsp;Symfony),
            je conçois des interfaces <strong>performantes</strong> et <strong>accessibles</strong> et
            des <strong>APIs robustes</strong>, optimisées pour l’<strong>UX</strong> et le
            <strong>référencement SEO</strong>.
          </p>

          <p>
            Diplômée en <strong>Développement web</strong> et{" "}
            <strong>Conception d’applications</strong>, j’ai réalisé des projets intégrant :
          </p>

          <ul className="about-list">
            <li><strong>API REST</strong> & intégration de données dynamiques</li>
            <li><strong>Optimisation des performances</strong> (lazy loading, code splitting)</li>
            <li><strong>Design responsive</strong> tous écrans</li>
            <li>Respect <strong>W3C</strong> & bonnes pratiques <strong>WCAG</strong></li>
          </ul>

          <p>
            J’aime transformer les besoins métier en <strong>applications fiables</strong>, avec un
            <strong> code maintenable</strong> et <strong>documenté</strong>.
          </p>

          <div className="about-badges" aria-hidden="true">
            <span>React</span><span>Node/Express</span><span>Java/Spring</span><span>Symfony/PHP</span>
          </div>
        </motion.article>

        {/* Carte droite */}
       <motion.article
          className="about-card"
          variants={cardVariants(-40, prefersReducedMotion)}
          aria-labelledby="about-plus"
        >
          <h3 id="about-plus">
            Atout différenciant <br /> Analyse & gestion de projets complexes
          </h3>

          <p>
            Ancienne <strong>ingénieure agronome</strong>, j’ai piloté des
            <strong> projets complexes</strong> (multi-acteurs, contraintes techniques fortes).
          </p>

          <p>Cette expérience m’a apporté&nbsp;:</p>
          <ul className="about-list">
            <li><strong>Analyse systémique</strong> & résolution rapide de problèmes</li>
            <li><strong>Pilotage Agile</strong> (Scrum/Kanban) & communication claire</li>
            <li><strong>Priorisation par la valeur</strong> et focus impact</li>
            <li><strong>Culture qualité</strong> (tests, revues, CI/CD)</li>
          </ul>

          <p>
            Ma double compétence aide à <strong>comprendre vite</strong>, anticiper les contraintes
            et livrer des solutions <strong>innovantes</strong> et <strong>robustes</strong>.
          </p>

          <div className="about-badges" aria-hidden="true">
            <span>Agilité</span><span>Scrum/Kanban</span><span>CI/CD</span><span>Qualité</span>
          </div>
        </motion.article>

      </motion.div>
    </section>
  );
}

export default About;
