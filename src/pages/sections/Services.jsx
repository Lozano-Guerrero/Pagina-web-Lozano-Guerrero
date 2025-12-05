import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '../../data/serviceData'; 
import './Services.css';

// Componente Wrapper para la lógica de animación de cada tarjeta
const AnimatedServiceCard = ({ service, index }) => {
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
          }, index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
      key={service.id} 
      ref={cardRef}
      className={`service-card-wrapper ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="service-card">
        <div className="service-card__visual">
          {service.icon && (
            <FontAwesomeIcon icon={service.icon} className="service-card__icon" />
          )}
          {service.title.includes("Volumetrías") && (
            <div className="cubes-visual">
              <span className="cube cube-1"></span>
              <span className="cube cube-2"></span>
            </div>
          )}
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.description}</p>
      </div>
    </div>
  );
};

// Componente principal de la sección de Servicios
const ServicesSection = () => {
  return (
    <section className="services__container" id="servicios">
      <h2 className="services__title">Nuestros Servicios Integrales</h2>
      <p className="services__subtitle">
        Estrategia, planeación y ejecución bajo un mismo techo para impulsar su inversión inmobiliaria.
      </p>

      <div className="services__grid">
        {services.map((service, index) => (
          <AnimatedServiceCard 
            key={service.id || index} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
