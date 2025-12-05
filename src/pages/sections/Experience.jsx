import React, { useRef, useEffect, useState } from 'react';
// Importamos la lista de proyectos con descripciones
import { projectsWithDescription } from '../../data/projectData'; 
import './Experience.css'; 

// Importamos Font Awesome para los íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTasks } from '@fortawesome/free-solid-svg-icons';


// =========================================================================
// DEFINICIÓN DE CONSTANTES DE RUTAS DE IMAGEN
// =========================================================================
const UPTOWN_CUMBRES_IMG = '/img/portfolio/EB6.webp';
const LAGOS_SF_IMG = '/img/portfolio/lagos4.jpg';
const ZOLDANA_IMG = '/img/portfolio/Zoldana.jpeg';
const GRANADOS_IMG = '/img/portfolio/granados.webp';
const MICROPOLIS_IMG = '/img/portfolio/Micropolis.jpg';
const HIGHPARK_IMG = '/img/portfolio/higtpark.webp';
const CONNEXITY_IMG = '/img/portfolio/Connexity.jpg';
const PLAZA_FUNDADORES_IMG = '/img/portfolio/fundadores.jpg';

// Mapa para asociar el título del proyecto con su imagen
const projectImages = {
  "Uptown Cumbres": UPTOWN_CUMBRES_IMG,
  "Lagos de San Francisco": LAGOS_SF_IMG,
  "Zoldana (Próximamente)": ZOLDANA_IMG,
  "Granados del Mediterráneo": GRANADOS_IMG,
  "Micropolis": MICROPOLIS_IMG,
  "HighPark": HIGHPARK_IMG,
  "Connexity": CONNEXITY_IMG,
  "Plaza Fundadores": PLAZA_FUNDADORES_IMG,
};


// Este es el componente Card para un solo proyecto
const ProjectCard = ({ title, location, responsibilities, description, imageSrc, delay }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Garantiza que solo se anime una vez

  useEffect(() => {
    // Si ya animó, no hacemos nada
    if (hasAnimated) return; 

    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🎯 SOLUCIÓN: Usamos setTimeout para introducir el retraso escalonado
          // Esto asegura que el estado inicial invisible se mantenga hasta el momento exacto de la aparición
          timeoutId = setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay * 1000); // El delay viene en segundos, lo convertimos a milisegundos

          // Dejar de observar inmediatamente, garantizando la animación de una sola vez
          observer.unobserve(entry.target);
        }
      },
      // Umbral ajustado para que la animación comience al 20% de visibilidad
      { threshold: 0.2 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Limpieza: importante para evitar fugas de memoria y cancelar el timeout si el componente se desmonta.
    return () => {
      clearTimeout(timeoutId);
      if (cardRef.current) {
         observer.unobserve(cardRef.current);
      }
    };
  }, [delay, hasAnimated]); 

  return (
    <div 
      className={`projectcard__container ${isVisible ? 'is-visible' : ''}`} 
      ref={cardRef}
    >
      <div className="projectcard__image-wrapper">
        <img 
          src={imageSrc} 
          alt={`Vista del proyecto ${title}`} 
          className="projectcard__image"
        />
      </div>
      <div className="projectcard__content">
        <h3 className="projectcard__title">{title}</h3>
        
        {/* Ubicación */}
        <div className="projectcard__location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="projectcard__icon" />
          <span>{location}</span>
        </div>

        {/* Responsabilidades */}
        <div className="projectcard__responsibilities">
          <h4 className="projectcard__responsibilities-title">
              <FontAwesomeIcon icon={faTasks} className="projectcard__icon" />
              Responsabilidades:
          </h4>
          <ul className="projectcard__responsibilities-list">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* Descripción/Resumen */}
        <p className="projectcard__description">{description}</p>
        
      </div>
    </div>
  );
};

/**
 * Componente de la sección Experiencia y Proyectos.
 */
const Experience = () => {
  return (
    <section className="experience__container" id="experience-section">
      <div className="experience__header">
        <h2>Portafolio de Proyectos: Trayectoria y Resultados</h2>
        <p>Proyectos de alto impacto donde nuestra consultoría financiera, técnica y comercial ha garantizado el éxito y la máxima rentabilidad.</p>
      </div>
      
      <div className="experience__grid">
        {/* Se pasa el índice para calcular el retraso de la animación */}
        {projectsWithDescription.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            location={project.location}
            responsibilities={project.responsibilities}
            description={project.description}
            imageSrc={projectImages[project.title]} 
            delay={index * 0.15} // Retraso de 150ms entre cada tarjeta
          />
        ))}
      </div>

      {/* Botón CTA de ancho completo al final de la sección */}
      <div className="experience__cta-wrapper">
        <a href="#contact-section" className="experience__cta-button">
          Contáctanos para tu proyecto
        </a>
      </div>
    </section>
  );
};

export default Experience;