// src/components/Contact/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', botField: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState('idle'); 
  const liveRegionRef = useRef(null);

  useEffect(() => { setIsSubmitted(false); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.botField) return; 

    setState('sending');

    try {
      const params = {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      };
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        params,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );

      setForm({ name: '', email: '', message: '', botField: '' });
      setIsSubmitted(true);
      setState('success');
      if (liveRegionRef.current) liveRegionRef.current.textContent = 'Message envoyé avec succès.';
      setTimeout(() => setIsSubmitted(false), 4500);
    } catch (err) {
      setState('error');
      if (liveRegionRef.current) liveRegionRef.current.textContent = "Erreur lors de l’envoi du message.";
      setTimeout(() => setState('idle'), 4500);
    }
  };

  const isDisabled = state === 'sending';

return (
  <section id="contact" className="container my-5" aria-label="Formulaire de contact">
    <div className="contact-card">
      <h2 className="text-center contact-title">Contact</h2>

      {/* Live region for screen readers */}
      <p className="visually-hidden" aria-live="polite" ref={liveRegionRef} />

      {isSubmitted && state === 'success' && (
        <div className="alert alert-success" role="alert">
          Merci ! Votre message a été envoyé avec succès.
        </div>
      )}

      {state === 'error' && (
        <div className="alert alert-danger" role="alert">
          Une erreur est survenue lors de l’envoi. Réessayez.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Honeypot (invisible) */}
        <input
          type="text"
          name="botField"
          value={form.botField}
          onChange={handleChange}
          className="hp"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text" id="name" name="name" className="form-control small-input"
            value={form.name} onChange={handleChange} required
            minLength={2} autoComplete="name" placeholder="Votre nom"
          />
          <div className="form-hint">Votre nom (au moins 2 caractères)</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email" id="email" name="email" className="form-control small-input"
            value={form.email} onChange={handleChange} required
            inputMode="email" autoComplete="email" placeholder="vous@email.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message" name="message" className="form-control small-input"
            value={form.message} onChange={handleChange} required
            rows={6} minLength={10} placeholder="Décrivez votre besoin…"
          />
          <div className="form-hint">Décrivez votre besoin (≥ 10 caractères)</div>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={isDisabled} aria-busy={isDisabled}>
          {state === 'sending' ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>

      <div className="social-links mt-4" aria-label="Réseaux sociaux">
        <a href="https://github.com/DERBELAX" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
          <FaGithub size={28} aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/marwa-derbel-144583131/" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
          <FaLinkedin size={28} aria-hidden="true" />
        </a>
        <a href="mailto:marwaderbel21@gmail.com" className="icon-link" title="Envoyer un email">
          <FaEnvelope size={28} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

}

export default Contact;
