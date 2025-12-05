import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Iconos Sólidos (para dirección y contactos)
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Iconos de Marca (para redes sociales y WhatsApp)
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import './ContactInfo.css';

/**
 * Componente que muestra la información de contacto y redes sociales.
 */
const ContactInfo = () => {
    
    // URL de WhatsApp con mensaje predefinido (codificado)
    const whatsappMessage = "me gustaría una asesoria, vi su información en la pagina web";
    const whatsappLink1 = `https://wa.me/528132520400?text=${encodeURIComponent(whatsappMessage)}`;
    const whatsappLink2 = `https://wa.me/528112777073?text=${encodeURIComponent(whatsappMessage)}`;

    // URL de Google Maps para la nueva dirección
    const mapsQuery = 'Edificio Connexity, Sin Nombre de Col 39, Monterrey, N.L local 11';
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return (
    <div className="contactinfo__container">
      <h3 className="contactinfo__title">Oficinas Centrales</h3>
      <p className="contactinfo__description">
        Estamos listos para recibirte en nuestras oficinas para discutir tu próximo proyecto.
      </p>

      <ul className="contactinfo__list">
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contactinfo__icon" />
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="contactinfo__link">
            Dirección: Edificio Connexity, Sin Nombre de Col 39, Monterrey, N.L local 11 (Ver en Mapa)
          </a>
        </li>
        {/* -- NÚMEROS DE WHATSAPP -- */}
        <li>
          <FontAwesomeIcon icon={faPhone} className="contactinfo__icon" />
          <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="contactinfo__link">
            WhatsApp: +52 1 81 3252 0400
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contactinfo__icon" />
          <a href={whatsappLink2} target="_blank" rel="noopener noreferrer" className="contactinfo__link">
            WhatsApp: +52 1 81 1277 7073
          </a>
        </li>
        {/* -- CORREOS ELECTRÓNICOS -- */}
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contactinfo__icon" />
          <a href="mailto:tlozano@lozanoguerrero.com" className="contactinfo__link">
            Correo 1: tlozano@lozanoguerrero.com
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contactinfo__icon" />
          <a href="mailto:clozano@lozanoguerrero.com" className="contactinfo__link">
            Correo 2: clozano@lozanoguerrero.com
          </a>
        </li>
      </ul>

      <div className="contactinfo__social">
        <h4 className="contactinfo__social-title">Síguenos</h4>
        <div className="contactinfo__social-icons">
          {/* LinkedIn (Se mantiene) */}
          <a href="https://www.linkedin.com/company/lozano-guerrero/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="contactinfo__social-icon linkedin" />
          </a>
          {/* Facebook (Reemplaza a Twitter) */}
          <a href="https://www.facebook.com/profile.php?id=61580770139641" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="contactinfo__social-icon facebook" />
          </a>
          {/* Botón de WhatsApp general para redes (Opción 1) */}
          <a href={whatsappLink1} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="contactinfo__social-icon whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;