import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaFilter } from 'react-icons/fa';
import projectsData from '../../data/projects';
import Reveal from '../_shared/Reveal.jsx';

const allTags = ['Tous', ...Array.from(new Set(projectsData.flatMap(p => p.tags)))];

export default function Projects() {
  const [active, setActive] = useState('Tous');

  const visible = useMemo(() => {
    if (active === 'Tous') return projectsData;
    return projectsData.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" aria-label="Projets">
      <div className="container">
        <Reveal><h2 className="mb-3">Mes Projets</h2></Reveal>
      </div>

      {/* Filtres sticky translucides */}
      <div className="filters-wrap" role="region" aria-label="Filtres de projets">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filtrer par technologie">
            <span className="me-2 text-muted d-none d-md-inline">
              <FaFilter aria-hidden="true" /> Filtrer :
            </span>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-pill ${active === tag ? 'active' : ''}`}
                onClick={() => setActive(tag)}
                role="tab"
                aria-selected={active === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <AnimatePresence mode="sync">
          <motion.div className="row" layout>
            {visible.map((p, i) => (
              <div className="col-md-6 col-lg-4 mb-4" key={`${p.name}-${i}`}>
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
                        className="project-image"
                        alt={`Aperçu du projet ${p.name}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="placeholder-gradient" aria-hidden="true" />
                    )}
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{p.name}</h3>
                    <p className="card-text">{p.description}</p>

                    <div className="mt-auto d-flex flex-wrap gap-2">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                        >
                          Voir le site
                        </a>
                      )}
                      {p.githubLink && (
                        <a
                          href={p.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                        >
                          <FaGithub className="me-1" aria-hidden="true" />
                          Code
                        </a>
                      )}
                    </div>

                    {p.tags?.length > 0 && (
                      <div className="tags mt-3">
                        {p.tags.map(t => (
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
