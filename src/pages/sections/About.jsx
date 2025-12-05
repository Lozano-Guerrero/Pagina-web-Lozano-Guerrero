import React from 'react';
import './About.css'; // Estilos modulares
// Importa una imagen que represente al equipo o la filosofía de la empresa
import teamImage from '/img/empresa.jpg'; 

/**
 * Componente de la sección Acerca de Nosotros/Quiénes Somos.
 * Usa un layout de dos columnas (Imagen y Texto) para humanizar la marca.
 */
const About = () => {
  return (
    <section className="about__container" id="about-section">
      
      {/* 1. Contenido de Texto */}
      <div className="about__content">
        <h2 className="about__title">Más Allá del Ladrillo: Arquitectura Financiera.</h2>
        <p className="about__paragraph">
          Somos Lozano Guerrero, una firma de consultoría especializada en la **Estrategia y Determinación del Más Rentable Uso de Suelo** para proyectos inmobiliarios. Nuestro enfoque va más allá de la construcción; nos centramos en la **arquitectura financiera** y comercial que maximiza el valor y asegura la viabilidad de cada inversión.
        </p>
        <p className="about__paragraph">
          Con una década de experiencia, ofrecemos soluciones integrales a desarrolladores, inversionistas y arquitectos, transformando activos inmobiliarios con inteligencia de mercado, validación volumétrica y estrategias comerciales integradoras.
        </p>
        <a href="#experience-section" className="about__cta-link">
          Conoce nuestra trayectoria completa →
        </a>
      </div>
      
      {/* 2. Imagen Corporativa */}
      <div className="about__image-wrapper">
        {/* Placeholder para la imagen, reemplaza con tu etiqueta <img> */}
        <img 
          src={teamImage} 
          alt="Equipo de consultores de Lozano Guerrero" 
          className="about__image"
        />
      </div>
    </section>
  );
};

export default About;