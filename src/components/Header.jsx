import React, { useState, useEffect } from 'react'; 
import './Header.css'; 

// Define los enlaces de navegación para la barra.
const navLinks = [
  { name: 'Inicio', href: '#hero-section' },
  { name: 'Servicios', href: '#services-section' },
  { name: 'Mas que una empresa…', href: '#vision-section' }, 
  { name: 'Casos de exito', href: '#Cases-section' }, 
  { name: 'Nuestra metodología ', href: '#methodology-section' },
  { name: 'Portafolio', href: '#experience-section' },
  { name: 'Contacto', href: '#contact-section' },
];

const sectionIds = navLinks.map(link => link.href.substring(1));
const MOBILE_BREAKPOINT = 900; // Punto de quiebre CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section'); 
  // Estado para rastrear si estamos en tamaño móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  
  const logoPath = 'img/logonegro.png'; 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 1. Lógica para el tamaño de pantalla (Maneja el estado 'isMobile')
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(newIsMobile);
      
      // Cierra el menú si se cambia de móvil a escritorio
      if (!newIsMobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);
  
  // 2. Lógica del Intersection Observer (Mantenida por su solidez)
  useEffect(() => {
    // ... (Tu código Intersection Observer se mantiene aquí, es robusto) ...
    let visibleSections = new Set();
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                if (entry.isIntersecting) {
                    visibleSections.add(id);
                } else {
                    visibleSections.delete(id);
                }
            });

            for (const id of sectionIds) {
                if (visibleSections.has(id)) {
                    setActiveSection(id);
                    break;
                }
            }
        },
        { threshold: 0, rootMargin: '-10% 0px -90% 0px' } 
    );

    sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
        }
    });

    return () => observer.disconnect();
  }, []); 

  // Clases CSS dinámicas:
  // Si es móvil Y el menú está abierto, se aplica 'header__links--open'
  const ulClasses = [
    'header__links',
    isMobile ? 'is-mobile' : null,
    isMenuOpen && isMobile ? 'header__links--open' : null,
  ].filter(Boolean).join(' ');

  return (
    <header className="header__container">
      <nav className="header__nav">
        
        {/* CORRECCIÓN 1: Asegura que el logo use la clase CSS correcta */}
        <div className="header__logo">
          <a href="#hero-section" onClick={closeMenu}>
            <img 
              src={logoPath} 
              alt="Logo Lozano Guerrero Arquitectura Financiera" 
              className="header__logo-img" // Asegura que esta clase esté presente
            />
          </a>
        </div>

        {/* CORRECCIÓN 3: El botón hamburguesa */}
        {isMobile && (
          <button 
            className={`header__menu-button ${isMenuOpen ? 'open' : ''}`} 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
            onClick={toggleMenu} 
          >
            <span className="header__menu-icon" aria-hidden>
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        )}

        {/* CORRECCIÓN 2 & 3: La lista de enlaces con las clases de estado */}
        <ul className={ulClasses}>
          {navLinks.map((link) => (
            <li key={link.name} className="header__link-item">
              <a 
                href={link.href} 
                className={`header__link ${activeSection === link.href.substring(1) ? 'is-active' : ''}`}
                onClick={(e) => {
                    closeMenu(); 
                    setActiveSection(link.href.substring(1));
                }} 
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};

export default Header;