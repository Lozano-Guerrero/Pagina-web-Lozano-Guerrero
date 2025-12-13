import React from 'react';
import './Hero.css'; // Importamos sus estilos modulares

// Importa una imagen que usarás para la sección. 
// Guarda tu imagen (ej: hero_image.jpg) en src/assets/
import heroImage from '../../assets/hero.jpg'; 

/**
 * Componente de la sección Hero (Bienvenida).
 * Ahora utiliza una imagen de fondo al 100% de ancho/alto y superpone el contenido.
 */
const Hero = () => {
  // El ID "inicio" lo usaremos para la navegación desde el header
  return (
    <section className="hero__container" id="inicio"> 
      
      {/* 1. Imagen de Fondo (100% ancho, altura fija VH) */}
      <img 
        src={heroImage} 
        alt="Equipo de Lozano Guerrero en una oficina moderna" 
        className="hero__background-image"
      />
      
      {/* 2. Capa de Superposición de Contenido de Texto */}
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
            Determinación y validación del mas rentable uso de suelo
          </h1>
          <p className="hero__subtitle">
            Lozano Guerrero: Asesoría legal, técnica y financiera integral para proyectos de alto rendimiento.
          </p>
          <div className="hero__cta">
            {/* Botón CTA para Solicitar Consultoría (Acción Principal) */}
            <a href="#contacto" className="hero__cta-button primary-cta">
              Solicita tu Consultoría Hoy
            </a>
            
            {/* Nuevo Botón "Ver Más" que dirige a la siguiente sección (Servicios) */}
            <a href="#services-section" className="hero__cta-button secondary-cta">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;