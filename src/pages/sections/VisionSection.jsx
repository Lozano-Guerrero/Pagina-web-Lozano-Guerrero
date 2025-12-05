// VisionSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './VisionAndCases.css'; 

// La imagen se asume que está en la carpeta public/img/ como "lozano.jpeg"
const photoPath = '/img/portfolio/lozano.jpeg'; 

/**
 * Componente centrado en la visión y estrategia de la empresa.
 */
const VisionSection = () => {
    const sectionRef = useRef(null);
    const [isMainContentVisible, setIsMainContentVisible] = useState(false);
    
    // Lógica para la animación del contenido principal (imagen y textos)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMainContentVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                 observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const contentClasses = isMainContentVisible ? 'is-visible' : '';

    return (
      <section 
          className="visioncases__container" 
          id="vision-section" // Corregido: Usar el ID completo
          ref={sectionRef}
      >
        
        {/* 1. Columna de Imagen (Animada) - AHORA CON PIE DE FOTO */}
        <div className={`visioncases__image-wrapper ${contentClasses}`}>
          
          {/* Nuevo: Utilizamos <figure> para agrupar la imagen y el pie de foto */}
          <figure className="visioncases__figure">
            
            <img 
              src={photoPath} 
              alt="Lozano Guerrero Estrategia y Arquitectura Financiera" 
              className="visioncases__image"
            />

            {/* Nuevo: Pie de Foto (FIGCAPTION) */}
            <figcaption className="visioncases__caption">
              <strong>Carlos Lozano</strong> CEO de Lozano Guerrero en Uptown Cumbres
            </figcaption>

          </figure>

        </div>
        
        {/* 2. Columna de Contenido (Animada) */}
        <div className={`visioncases__content-wrapper ${contentClasses}`}>

          {/* --- Bloque de Texto Principal --- */}
          <div className="visioncases__main-text">
            <h2 className="visioncases__title">Más que una empresa, somos estrategia</h2>
            <p className="visioncases__paragraph">
              Lozano Guerrero es una empresa familiar con más de 15 años de experiencia en consultoría de proyectos inmobiliarios. Desarrollamos estrategias integrales que abarcan todas las etapas: desde lo legal y la planeación, hasta el diseño, desarrollo y comercialización. Creamos visiones únicas que destacan por su solidez, coherencia y potencial de crecimiento.
            </p>
            <p className="visioncases__paragraph">
              Hemos brindado consultoría a decenas de proyectos inmobiliarios en todo el país, con presencia destacada en Nuevo León, Quintana Roo y Baja California. Nuestro enfoque se basa en identificar aquello que muchos consideran problemas y transformarlo en oportunidades de alto valor para nuestros clientes y sus desarrollos.
            </p>
          </div>
        </div>
      </section>
    );
};

export default VisionSection;