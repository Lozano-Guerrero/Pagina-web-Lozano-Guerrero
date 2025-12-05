// src/components/ServiceCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // <-- ¡Importamos el componente de FA!
import './ServiceCard.css'; 

/**
 * Componente Tarjeta de Servicio reutilizable.
 * @param {object} props - Propiedades del componente.
 * @param {object} props.IconComponent - El objeto de ícono de Font Awesome (e.g., faChessKnight).
 * @param {string} props.title - El título del servicio.
 * @param {string} props.description - La descripción detallada del servicio.
 * @returns {JSX.Element} Una tarjeta de servicio estilizada.
 */
const ServiceCard = ({ IconComponent, title, description }) => {
  return (
    <div className="servicecard__container"> 
      <div className="servicecard__icon-wrapper">
        {/* Usamos el componente FontAwesomeIcon, pasando el objeto de icono a la prop 'icon' */}
        <FontAwesomeIcon icon={IconComponent} className="servicecard__icon" /> 
      </div>
      <h3 className="servicecard__title">{title}</h3>
      <p className="servicecard__description">{description}</p>
    </div>
  );
};

export default ServiceCard;