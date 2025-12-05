import React from 'react';
import ContactForm from '../../components/ContactForm'; // Importar Formulario
import ContactInfo from '../../components/ContactInfo'; // Importar Info
import './Contact.css'; // Estilos modulares para la sección

/**
 * Componente de la sección de Contacto.
 * Utiliza CSS Grid para organizar el formulario y la información.
 * @returns {JSX.Element} La sección de contacto completa.
 */
const Contact = () => {
  return (
    <section className="contactsection__container" id="contact-section">
      <div className="contactsection__content-grid">
        
        {/* Lado 1: Información de Contacto (Ocupa la columna izquierda) */}
        <ContactInfo />
        
        {/* Lado 2: Formulario de Contacto (Ocupa la columna derecha) */}
        <ContactForm />

      </div>
    </section>
  );
};

export default Contact;