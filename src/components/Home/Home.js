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
    <div>
      <Navbar />
      <section id="home" className="container text-center my-5">
   
  
           <img src={Image} alt="Hot visual" className="img-fluid my-3 round-image" />
        <h1>Hello! Je suis Marwa Derbel</h1>
        <br></br>
        <p className="lead">
          Développeuse Web Full Stack spécialisée dans la création d'applications modernes et performantes...
        </p>
           
      </section>
      
      <hr />

      <section id="about">
        <About />
      </section>

      <hr />

      <section id="skills">
        <Skills />
      </section>

      <hr />

      <section id="projects">
        <Projects />
      </section>

      <hr />

      <section id="contact">
        <Contact />
        <Resume />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
