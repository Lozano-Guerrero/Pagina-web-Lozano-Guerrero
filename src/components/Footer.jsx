import React from 'react';

/**
 * Componente Footer (Pie de página) para información de contacto y copyright.
 * @returns {JSX.Element} El pie de página de la aplicación.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {currentYear} Lozano Guerrero. Todos los derechos reservados.
        </p>
        <div className="footer-links">
          <a href="#contact-section">Contáctanos</a>
          {/* En el futuro, podríamos añadir enlaces a Política de Privacidad y Términos */}
          {/* <a href="/privacy">Política de Privacidad</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;