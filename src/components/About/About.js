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
        {/* Bloc gauche */}
        <motion.div className="about-section" variants={smoothIn(100)}>
          <h3>Du terrain au code : créer et innover avec React</h3>
          <p>
            Diplômée des formations <strong>Développeur web</strong> (OpenClassrooms) et{" "}
            <strong>Concepteur Développeur d’Applications</strong> (m2i), je suis{" "}
            <strong>développeuse front-end spécialisée en React</strong>.<br />
            Je conçois des interfaces <strong>rapides</strong>, <strong>intuitives</strong> et{" "}
            <strong>accessibles</strong>, avec un soin particulier pour l’expérience utilisateur
            et les détails visuels.
          </p>
          <p>
            Mon profil hybride me permet de <strong>faire le lien</strong> entre les besoins métier
            et la technique, et de contribuer à des projets où <strong>innovation</strong> et{" "}
            <strong>pertinence</strong> vont de pair.
          </p>
          <p>
            C’est en cherchant à automatiser certaines tâches que j’ai découvert le code — un{" "}
            <strong>véritable déclic</strong>. J’y ai retrouvé les mêmes exigences qu’en agronomie :
            <strong> logique</strong>, <strong>précision</strong> et{" "}
            <strong>résolution de problèmes concrets</strong>.<br />
            Aujourd’hui, je combine cette approche analytique et créative pour concevoir des
            solutions <strong>utiles et efficaces</strong>.
          </p>
        </motion.div>

        {/* Bloc droit */}
        <motion.div className="about-section" variants={smoothIn(-100)}>
          <h3>Ingénierie agronome : analyse, gestion et solutions durables</h3>
          <p>
            Formée comme <strong>ingénieure agronome</strong>, j’ai piloté des{" "}
            <strong>projets agricoles innovants</strong> sur le terrain, en travaillant avec des
            acteurs variés du secteur.<br />
            Mon expérience m’a permis de développer une solide{" "}
            <strong>expertise en gestion de projet</strong> et en{" "}
            <strong>analyse de systèmes complexes</strong>.
          </p>
          <p>
            Parmi mes missions : l’<strong>optimisation de systèmes d’irrigation</strong>, la mise
            en œuvre de <strong>pratiques culturales durables</strong> et la réalisation
            d’<strong>études d’impact environnemental</strong>.
          </p>
          <p>
            Ces expériences m’ont appris la <strong>rigueur</strong>, le{" "}
            <strong>travail collaboratif</strong> et l’<strong>adaptabilité</strong>, des
            compétences que je mobilise aujourd’hui dans le développement web.<br />
            Mon objectif : créer des solutions <strong>innovantes</strong>,{" "}
            <strong>performantes</strong> et <strong>alignées sur les besoins réels</strong> des
            utilisateurs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
