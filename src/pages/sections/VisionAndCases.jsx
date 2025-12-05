// CaseStudiesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
// IMPORTANTE: Aquí se importa la data con los nuevos campos 'imagePath'
import { caseStudies } from '../../data/caseStudiesData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './CaseStudies.css'; 
// ELIMINAMOS la constante CASE_IMAGES, ya que la data viene del JSON


// =========================================================================
// Componente Wrapper para la lógica de animación de cada tarjeta
// =========================================================================
const AnimatedCaseCard = ({ caseItem, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    let timeoutId;

    useEffect(() => {
        if (hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }, index * 100); 
                    
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 } 
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            clearTimeout(timeoutId);
            if (cardRef.current) {
                 observer.unobserve(cardRef.current);
            }
        };
    }, [index, hasAnimated]);

    return (
        <div 
            key={caseItem.id} 
            ref={cardRef}
            className={`newcases__card new-card-wrapper ${isVisible ? 'is-visible' : ''}`}
        >
            {/* 🎯 Implementación de la Imagen usando el campo 'imagePath' del JSON */}
            <div className="newcases__card-image-wrapper">
                <img 
                    src={caseItem.imagePath} 
                    alt={`Imagen del caso de estudio: ${caseItem.title}`}
                    className="newcases__card-image"
                    // Si tienes problemas, revisa que la ruta 'caseItem.imagePath' sea correcta
                />
            </div>
            
            <div className="newcases__card-content">
                <FontAwesomeIcon icon={faCheckCircle} className="newcases__card-icon" />
                <h4 className="newcases__card-title">{caseItem.title}</h4>
                <p className="newcases__card-subtitle">{caseItem.subtitle}</p>
                <p className="newcases__card-description">{caseItem.description}</p>
                <a href="#contact-section" className="newcases__card-link">
                    Agenda tu Consultoría <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
            </div>
        </div>
    );
};


/**
 * Componente principal de la sección Casos de Éxito.
 */
const CaseStudiesSection = () => {
    return (
        <section className="newcases__section-container" id="cases-section"> 
            <div className="newcases__header">
                <h2 className="newcases__title">Casos de Éxito y Transformación</h2>
                <p className="newcases__subtitle">Conoce cómo convertimos desafíos complejos en oportunidades de alto valor para proyectos inmobiliarios.</p>
            </div>

            {/* Bloque de Cards de Casos de Éxito (Horizontal Scroll) */}
            <div className="newcases__cards-scroll-wrapper">
                
                {/* Mapeo de la data: El componente CaseStudies lee la data completa con imágenes */}
                <div className="newcases__cards-row">
                    {caseStudies.map((caseItem, index) => (
                        <AnimatedCaseCard 
                            key={caseItem.id} 
                            caseItem={caseItem} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;