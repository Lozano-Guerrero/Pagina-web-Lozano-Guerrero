// En src/pages/Home.jsx

import React from 'react';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Methodology from './sections/Methodology';
import Experience from './sections/Experience'; 
import Contact from './sections/Contact';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import VisionAndCases from './sections/VisionAndCases';
import VisionSection from './sections/VisionSection';
import CaseStudiesSection from './sections/CaseStudiesSection';

const Home = () => {
  return (
    <main className="lozano-guerrero-landing">
      <Header /> 
      
      <section id="hero-section">
        <Hero />
      </section>

      <section id="services-section">
        <Services />
      </section>
     <section id="vision-section"> 
     
      <VisionSection />
      </section>
     
      {/* 🎯 CORRECCIÓN CLAVE: ID cambiado de 'About-section' a 'vision-section' */}
       <section id='Cases-section' > <CaseStudiesSection /></section>



      <section id="methodology-section">
        <Methodology />
      </section>

      <section id="experience-section">
        <Experience />
      </section>
      
      <section id="contact-section">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;