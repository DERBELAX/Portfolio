import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const smoothIn = (fromX) => ({
  hidden: { opacity: 0, x: fromX, y: 30, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: false });

  return (
    <section id="about" className="container my-5" ref={sectionRef}>
      <h2>À propos de moi</h2>

      <motion.div
        className="about-sections-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Bloc gauche — Profil de développeuse web */}
        <motion.div className="about-section" variants={smoothIn(100)}>
          <h3>Profil de développeuse web — Front-end React</h3>
          <p>
            <strong>Développeuse front-end spécialisée en React.js</strong>, je conçois des
            interfaces <strong>performantes</strong>, <strong>accessibles</strong> et{" "}
            <strong>responsive</strong>, optimisées pour l’<strong>expérience utilisateur (UX)</strong> 
            et le <strong>référencement SEO</strong>.
          </p>
          <p>
            Diplômée en <strong>Développement web</strong> et{" "}
            <strong>Conception d’applications</strong>, j’ai réalisé des projets intégrant :
          </p>
          <ul>
            <li><strong>API REST</strong> et intégration de données dynamiques</li>
            <li><strong>Optimisation des performances</strong> (lazy loading, code splitting)</li>
            <li><strong>Design responsive</strong> compatible tous écrans</li>
            <li>Respect des normes <strong>W3C</strong> et bonnes pratiques <strong>accessibilité (WCAG)</strong></li>
          </ul>
          <p>
            J’aime transformer des besoins métier en <strong>applications web fiables</strong>,
            avec un <strong>code maintenable</strong>, <strong>documenté</strong> et orienté
            <strong> meilleures pratiques</strong>.
          </p>
        </motion.div>

        {/* Bloc droit — Atout différenciant */}
        <motion.div className="about-section" variants={smoothIn(-100)}>
          <h3>Atout différenciant — Analyse et gestion de projets complexes</h3>
          <p>
            Avant le développement web, j’ai exercé comme <strong>ingénieure agronome</strong>,
            conduisant des <strong>projets complexes</strong> avec coordination multi-acteurs,
            gestion de données et respect de contraintes techniques strictes.
          </p>
          <p>
            Cette expérience m’a permis de développer :
          </p>
          <ul>
            <li>Un <strong>sens de l’analyse</strong> et de la <strong>résolution de problèmes complexes</strong></li>
            <li>Des compétences en <strong>gestion de projet Agile/Scrum</strong></li>
            <li>La capacité à <strong>communiquer efficacement</strong> avec des équipes pluridisciplinaires</li>
          </ul>
          <p>
            Ma double compétence me permet de <strong>comprendre rapidement les besoins</strong>,
            d’anticiper les contraintes et de livrer des solutions <strong>innovantes</strong> et{" "}
            <strong>à fort impact</strong>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
