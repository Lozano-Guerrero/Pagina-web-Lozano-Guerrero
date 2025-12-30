// CaseStudiesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { caseStudies } from '../../data/caseStudiesData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './CaseStudies.css'; 

/**
 * Componente de Tarjeta Individual con animación síncrona
 */
const AnimatedCaseCard = ({ caseItem }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Aparecen todas al mismo tiempo cuando entran en el viewport
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { 
                threshold: 0.1, // Se activa apenas asoma un 10% de la card
                rootMargin: "0px 0px -50px 0px" // Margen para que no sea tan instantáneo al borde
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`newcases__card ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="newcases__card-image-wrapper">
                <img 
                    src={caseItem.imagePath} 
                    alt={`Imagen del caso de estudio: ${caseItem.title}`}
                    className="newcases__card-image"
                />
            </div>
            
            <div className="newcases__card-content">
                <div className="newcases__card-header-icon">
                    <FontAwesomeIcon icon={faCheckCircle} className="newcases__card-icon" />
                    <h4 className="newcases__card-title">{caseItem.title}</h4>
                </div>
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
 * Componente Principal de la Sección
 */
const CaseStudiesSection = () => {
    return (
        <section className="newcases__section-container" id="cases-section"> 
            <div className="newcases__header">
                <h2 className="newcases__title">Casos de Éxito y Transformación</h2>
                <p className="newcases__subtitle">
                    Conoce cómo convertimos desafíos complejos en oportunidades de alto valor para proyectos inmobiliarios.
                </p>
            </div>

            {/* Contenedor principal que en Desktop puede tener scroll 
                pero en Mobile se ajusta verticalmente 
            */}
            <div className="newcases__main-wrapper">
                <div className="newcases__cards-grid">
                    {caseStudies.map((caseItem) => (
                        <AnimatedCaseCard 
                            key={caseItem.id} 
                            caseItem={caseItem} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;