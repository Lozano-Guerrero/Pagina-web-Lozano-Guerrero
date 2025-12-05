// CaseStudiesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { caseStudies } from '../../data/caseStudiesData'; // Data de los casos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// CAMBIO CLAVE: Importamos el CSS específico para esta sección
import './CaseStudies.css'; 

// =========================================================================
// Componente Wrapper para la lógica de animación de cada tarjeta (CLASES MODIFICADAS)
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
            // CLASES MODIFICADAS: Prefijo 'newcases__'
            className={`newcases__card new-card-wrapper ${isVisible ? 'is-visible' : ''}`}
        >
            {/* NUEVO: Imagen del Caso de Estudio */}
            <div className="newcases__card-image-wrapper">
                <img 
                    src={caseItem.imagePath} 
                    alt={`Imagen del caso de estudio: ${caseItem.title}`}
                    className="newcases__card-image"
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
 * Componente de la nueva sección Casos de Éxito.
 */
const CaseStudiesSection = () => {
    return (
        <section className="newcases__section-container" id="cases-section"> 
            <div className="newcases__header">
                <h2 className="newcases__title">Casos de Éxito y Transformación</h2>
                <p className="newcases__subtitle">Conoce cómo convertimos desafíos complejos en oportunidades de alto valor para proyectos inmobiliarios.</p>
            </div>

            {/* --- Bloque de Cards de Casos de Éxito (Horizontal Scroll) --- */}
            {/* Contenedor para habilitar el scroll horizontal */}
            <div className="newcases__cards-scroll-wrapper">
                
                {/* Contenedor FLEX que mantiene las tarjetas en una fila */}
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