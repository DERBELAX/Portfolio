import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeClass, setFadeClass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Reset message au montage
  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const emailParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setForm({ name: '', email: '', message: '' });
        setIsSubmitted(true);
        setFadeClass('fade-in');

        // Lancer disparition après 4.5s
        setTimeout(() => {
          setFadeClass('fade-out');
          setTimeout(() => setIsSubmitted(false), 500); // retire complètement après fade-out
        }, 4500);
      })
      .catch(() => {
        setErrorMessage("Une erreur est survenue lors de l'envoi du message. Réessayez.");
        setFadeClass('fade-in');
        setTimeout(() => {
          setFadeClass('fade-out');
          setTimeout(() => setErrorMessage(''), 500);
        }, 4500);
      });
  };

  return (
    <div className="container my-5 contact-container">
      <h2 className="text-center">Contact</h2>

      {isSubmitted && (
        <div className={`alert alert-success ${fadeClass}`} role="alert">
          Merci ! Votre message a été envoyé avec succès.
        </div>
      )}

      {errorMessage && (
        <div className={`alert alert-danger ${fadeClass}`} role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control small-input"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control small-input"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control small-input"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Envoyer</button>
      </form>

      <div className="social-links mt-4">
        <a href="https://github.com/DERBELAX" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/marwa-derbel-144583131/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:marwaderbel21@gmail.com" className="icon-link">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
