import React, { useMemo, useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { FaGithub, FaFilter } from "react-icons/fa";
import projectsData from "../../data/projects";
import Reveal from "../_shared/Reveal.jsx";

function ProjectFacts({ items = [] }) {
  if (!items?.length) return null;
  return (
    <ul className="facts" aria-label="Résultats et métriques du projet">
      {items.map((f, i) => (
        <li key={i} className="fact">{f}</li>
      ))}
    </ul>
  );
}

const allTags = ["Tous", ...Array.from(new Set(projectsData.flatMap((p) => p.tags)))];

export default function Projects() {
  const [active, setActive] = useState("Tous");
  const tablistId = useId();

  const visible = useMemo(() => {
    if (active === "Tous") return projectsData;
    return projectsData.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" aria-label="Projets">
      <div className="container">
        <Reveal><h2 className="mb-3">Mes Projets</h2></Reveal>
      </div>

      {/* Filtres sticky translucides */}
      <div className="filters-wrap" role="region" aria-label="Filtres de projets">
        <div className="container">
          <div
            id={tablistId}
            className="filters"
            role="tablist"
            aria-label="Filtrer par technologie"
          >
            <span className="me-2 text-muted d-none d-md-inline">
              <FaFilter aria-hidden="true" /> Filtrer
            </span>
            {allTags.map((tag) => {
              const selected = active === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  className={`filter-pill ${selected ? "active" : ""}`}
                  onClick={() => setActive(tag)}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="projects-grid"
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <AnimatePresence mode="sync">
          <motion.div id="projects-grid" className="row" layout>
            {visible.map((p, i) => (
              <div className="col-md-6 col-lg-4 mb-4" key={p.slug || `${p.name}-${i}`}>
                <motion.article
                  className="project-card h-100"
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.65, 0.2, 1], delay: i * 0.03 }}
                  layout
                >
                  <div className="project-media">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`Aperçu du projet ${p.name}`}
                        className="project-image"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="placeholder-gradient" aria-hidden="true" />
                    )}
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{p.name}</h3>
                    <p className="card-text">{p.description}</p>

                    <ProjectFacts items={p.facts} />

                    <div className="mt-auto d-flex flex-wrap gap-2">
                      {p.link?.href && (
                        <a
                          href={p.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          aria-label={`Ouvrir la démo du projet ${p.name} dans un nouvel onglet`}
                          title={p.link.label || "Démo"}
                        >
                          {p.link.label || "Démo"}
                        </a>
                      )}
                      {p.githubLink?.href && (
                        <a
                          href={p.githubLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          aria-label={`Ouvrir le code GitHub du projet ${p.name} dans un nouvel onglet`}
                          title={p.githubLink.label || "Code (GitHub)"}
                        >
                          <FaGithub className="me-1" aria-hidden="true" />
                          {p.githubLink.label || "Code (GitHub)"}
                        </a>
                      )}
                    </div>

                    {p.tags?.length > 0 && (
                      <div className="tags mt-3" aria-label="Technologies du projet">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
