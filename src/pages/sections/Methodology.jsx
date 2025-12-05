import React, { useRef, useEffect, useState } from 'react'; // 🎯 Importamos hooks necesarios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { methodologySteps } from '../../data/methodologyData'; 
import './Methodology.css'; 

// =========================================================================
// Componente Wrapper para la lógica de animación de cada tarjeta
// =========================================================================
const AnimatedStepCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    let timeoutId;

    useEffect(() => {
        if (hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Retraso escalonado (150ms por tarjeta)
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }, index * 150); 
                    
                    observer.unobserve(entry.target);
                }
            },
            // Se activa cuando el 20% de la tarjeta es visible
            { threshold: 0.2 } 
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Limpieza
        return () => {
            clearTimeout(timeoutId);
            if (cardRef.current) {
                 observer.unobserve(cardRef.current);
            }
        };
    }, [index, hasAnimated]);

    return (
        <div 
            ref={cardRef} 
            // 🎯 Clase para la animación con rebote
            className={`methodology__step-card-wrapper ${isVisible ? 'is-visible' : ''}`} 
        >
            {/* Contenido original de la tarjeta */}
            <div key={item.step} className="methodology__step-card">
                <div className="methodology__step-number">{item.step}</div>
                
                <FontAwesomeIcon 
                    icon={item.icon} 
                    className="methodology__step-icon" 
                />

                <h3 className="methodology__step-title">{item.title}</h3>
                <p className="methodology__step-description">{item.description}</p>
            </div>
        </div>
    );
};


/**
 * Componente de la sección Nuestra Metodología.
 */
const Methodology = () => {
  return (
    <section className="methodology__container" id="methodology-section">
      <div className="methodology__header">
        <h2>Nuestra Metodología Única</h2>
        <p>Un proceso probado y estructurado en 6 pasos para asegurar la máxima rentabilidad y el éxito de tu proyecto inmobiliario.</p>
      </div>

      <div className="methodology__steps-grid">
        {methodologySteps.map((item, index) => (
          <AnimatedStepCard 
                key={item.step}
                item={item}
                index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Methodology;