import React, { useRef, useEffect, useState } from 'react';
// ----------------------------------------------------------------------
// -- 1. Íconos de la Estructura Principal y del Flujo (Timeline) --
// ----------------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    // Íconos de la estructura
    faHourglassHalf, faCheckCircle, faTimesCircle, faDollarSign, 
    faLaptopCode, faSitemap, faChartLine, faShieldHalved, 
    faHandshake, faSackDollar, faCodeBranch, faUsersGear, 
    faMapLocationDot, faTachometerAlt, faCubes, // Icono solicitado para Diagnóstico
    
    // Íconos del nuevo ServiceData integrado
    faChessKnight, faClipboardCheck, faUsers, faFileContract, 
    faDiagramProject, faChartLine as faChartLineService, // Renombrado para evitar conflicto con el timeline
    faHandshake as faHandshakeService, // Renombrado para evitar conflicto con capitalSteps
} from '@fortawesome/free-solid-svg-icons';
// ----------------------------------------------------------------------

import './EstrategiaServiciosIntegrales.css'; 

// ----------------------------------------------------------------------
// -- DATOS INTEGRADOS (Anteriormente serviceData.js) --
// ----------------------------------------------------------------------

const services = [
    {
        icon: faChessKnight, 
        title: "Estrategia Inmobiliaria",
        description: "Diseñamos procesos estratégicos para maximizar el valor de terrenos y proyectos, asegurando la optimización de recursos y la mejor posición en el mercado."
    },
    {
        // Usamos el ícono renombrado para evitar conflicto con faChartLine del timeline
        icon: faChartLineService, 
        title: "Validación Financiera y Comercial",
        description: "Realizamos estudios de viabilidad, proyecciones financieras detalladas y análisis de mercado para garantizar que tus negocios inmobiliarios sean altamente rentables."
    },
    {
        icon: faCubes,
        title: "Análisis y Validación Volumétrica",
        description: "Utilizamos software propio avanzado para modelar, simular y optimizar el uso del suelo y el rendimiento de construcción, maximizando la densidad permitida."
    },
    {
        // Usamos el ícono renombrado para evitar conflicto con faHandshake de capitalSteps
        icon: faHandshakeService, 
        title: "Venta Técnica",
        description: "Transformamos complejos análisis y datos técnicos en argumentos de venta claros y persuasivos que generan gran confianza e impulsan la inversión."
    },
    {
        icon: faUsers,
        title: "Consultoría Integral",
        description: "Acompañamos a nuestros clientes en todo el proceso de desarrollo inmobiliario: desde la concepción de la idea, pasando por la validación, hasta el cierre exitoso del negocio."
    },
    {
        icon: faDiagramProject,
        title: "Desarrollo de Proyectos",
        description: "Conceptualizamos y ejecutamos desarrollos inmobiliarios de principio a fin, gestionando todas las fases, desde la planeación inicial hasta la entrega final del proyecto."
    },
    {
        icon: faFileContract,
        title: "Reingeniería de Proyectos",
        description: "Tomamos proyectos existentes que enfrentan retos y los rediseñamos o reestructuramos por completo para actualizar su enfoque y alcanzar su máximo potencial en el mercado actual."
    },
];

// --- Data de Bloques de la Estructura (Timeline y Capital) ---
const principalPasos = [
    { 
        // Icono ya es faCubes
        iconClass: faCubes, 
        title: '1. Diagnóstico de Volumetría y Viabilidad', 
        description: 'Usamos software especializado para determinar los metros cuadrados exactos de vialidades, estacionamiento, áreas vendibles y áreas comunes.',
    },
    { 
        iconClass: faSitemap, 
        title: '2. Análisis Multivariable (Escenarios A, B y C)', 
        description: 'Exploramos de forma rápida distintas opciones de producto y distribución para aislar el uso de suelo que ofrece la mayor rentabilidad.',
    },
    { 
        iconClass: faChartLine, 
        title: '3. Proyección Financiera y Plan de Acción', 
        description: 'Entregamos un estudio financiero (absorción, costos, precios) con el plan más rentable definido y justificado, listo para sustentar inversiones.',
    },
];

const capitalSteps = [
    { 
        iconClass: faShieldHalved, 
        title: 'Mitigación de Riesgo', 
        text: 'Validación técnica y financiera exhaustiva que reduce la incertidumbre en las primeras etapas del proyecto.',
        accentClass: 'capital-mitigation'
    },
    { 
        iconClass: faHandshake, 
        title: 'Atracción de Capital', 
        text: 'Documento base para asegurar Créditos Puente, y atraer Inversionistas o Socios al proyecto con un caso de negocio sólido.',
        accentClass: 'capital-attraction'
    },
    { 
        iconClass: faSackDollar, 
        title: 'Inversión Flexible', 
        text: 'Consulte nuestros esquemas de colaboración. Inversión inicial con opciones de acuerdo a resultados o términos de interés mutuo.',
        accentClass: 'capital-flexible'
    },
];

// --- Componente de Tarjeta Animada (Simplificado para usar objetos de íconos) ---
const AnimatedServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    // Lógica de animación con IntersectionObserver... 
    useEffect(() => {
        if (hasAnimated) return;
        let timeoutId;
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
        if (cardRef.current) { observer.observe(cardRef.current); }
        return () => {
            clearTimeout(timeoutId);
            if (cardRef.current) { observer.unobserve(cardRef.current); }
        };
    }, [index, hasAnimated]);


    return (
        <div 
            key={service.title} 
            ref={cardRef}
            className={`service-card-wrapper ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="service-card">
                <div className="service-card__visual">
                    {/* Renderizamos usando el objeto de ícono directamente */}
                    {service.icon && (
                         <FontAwesomeIcon icon={service.icon} className="service-card__icon" />
                    )}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
            </div>
        </div>
    );
};

// --- Componente Principal Fusionado ---
const EstrategiaServiciosIntegrales = () => {
    
    // Asignamos los objetos de ícono directamente
    const ICON_VELOCIDAD = faTachometerAlt; 
    const ICON_TIEMPO = faHourglassHalf; 
    const ICON_CHECK = faCheckCircle;
    const ICON_X = faTimesCircle;
    const ICON_CAPITAL = faDollarSign; 
    const ICON_TECNOLOGIA = faLaptopCode; 
    const ICON_CODIGO_BRANCH = faCodeBranch;
    const ICON_USERS_GEAR = faUsersGear;
    const ICON_MAP_LOCATION_DOT = faMapLocationDot;


    // Placeholder para Imagen de Mapa (Asumo que la ruta es correcta)
    const VolumetriaImage = () => (
        <div className="image-placeholder map-image-wrapper">
            <img src="/volumetria.jpg" alt="Mapa de Volumetría Avanzada" /> 
            <p className="caption">Visualización técnica y mapeo volumétrico.</p>
        </div>
    );

    // Componente auxiliar para renderizar íconos en listas y párrafos
    const FaIcon = ({ icon, style = {} }) => <FontAwesomeIcon icon={icon} style={style} />;

    return (
        <section className="estrategia-servicios-section">
            <div className="container">
                
                {/* === SECCIÓN 1: Título y Comparación de Procesos (Volumetría Avanzada) === */}
                <header className="section-header">
                    <h2>Volumetría Avanzada: Velocidad, Precisión y Máxima Rentabilidad</h2>
                    <p className="subtitle">
                        Deje de lado los procesos tradicionales de meses. Utilizamos <strong>software volumétrico único</strong> para validar el plan de acción más rentable y asegurar la viabilidad financiera de su proyecto en tiempo récord.
                    </p>
                </header>
                
                <div className="time-comparison-block">
                    <div className="time-box time-problem">
                        <FaIcon icon={ICON_TIEMPO} style={{color: 'var(--grey-motor)'}} />
                        <h4>PROCESO TRADICIONAL</h4>
                        <p>Iteración manual entre Comercial, Arquitectura y Finanzas. La validación toma <strong>meses</strong> y aumenta los costos por retrabajos.</p>
                        <ul className="time-list">
                            <li><FaIcon icon={ICON_X} /> Retrabajos costosos.</li>
                            <li><FaIcon icon={ICON_X} /> Riesgo elevado por incertidumbre.</li>
                        </ul>
                    </div>
                    
                    <div className="time-box time-solution">
                        <FaIcon icon={ICON_VELOCIDAD} style={{color: 'var(--secondary-color)'}} />
                        <h4>NUESTRA METODOLOGÍA</h4>
                        <p>Software especializado de volumetrías que integra todas las variables. El estudio es entregado en <strong>días</strong> con el plan más rentable definido.</p>
                        <ul className="time-list">
                            <li><FaIcon icon={ICON_CHECK} /> Plan de acción validado.</li>
                            <li><FaIcon icon={ICON_CHECK} /> Viabilidad financiera asegurada.</li>
                        </ul>
                    </div>
                </div>
                
                {/* === SECCIÓN 2: Ventaja Tecnológica Irrefutable (Con Imagen Lateral) === */}
                <div className="technology-advantage-section">
                    
                    <div className="tech-image-col">
                        <VolumetriaImage />
                    </div>
                    
                    <div className="tech-content-box">
                        <FaIcon icon={ICON_TECNOLOGIA} />
                        <h3>Ventaja tecnológica irrefutable</h3>
                        <p>Pocos en la industria combinan este nivel de dominio técnico con estrategia financiera:</p>
                        
                        <div className="tech-list">
                            <div className="tech-item">
                                <h5><FaIcon icon={ICON_CODIGO_BRANCH} /> Integración de datos</h5>
                                <p>Conectamos análisis volumétrico con proyecciones de absorción.</p>
                            </div>
                            <div className="tech-item">
                                <h5><FaIcon icon={ICON_USERS_GEAR} /> Experiencia ejecutiva</h5>
                                <p>Traducimos datos técnicos a lenguaje de negocio para inversionistas.</p>
                            </div>
                            <div className="tech-item">
                                <h5><FaIcon icon={ICON_MAP_LOCATION_DOT} /> Presencia de mercado</h5>
                                <p>Auditorías de ventas que validan su proyecto con datos reales.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === SECCIÓN 3: Proceso Paso a Paso (Timeline) === */}
                <div className="section-divider">
                    <h3>El proceso que garantiza su mayor rentabilidad</h3>
                </div>
                
                <div className="value-flow-steps">
                    {principalPasos.map((paso, index) => (
                        <div key={index} className="flow-step">
                            <div className="flow-step-icon-wrapper">
                                {/* ICONO EN LA BOLITA - Usa el objeto de ícono directo */}
                                <FaIcon icon={paso.iconClass} />
                            </div>
                            <div className="flow-step-content">
                                <h4>{paso.title}</h4>
                                <p>{paso.description}</p>
                            </div>
                            {index < principalPasos.length - 1 && <div className="flow-line"></div>}
                        </div>
                    ))}
                </div>
                
                {/* === SECCIÓN 4: Servicios Integrales Detallados === */}
                <div className="services-detailed-section">
                    <h2 className="services__title">Nuestros servicios integrales</h2>
                    <p className="services__subtitle">
                        Estrategia, planeación y ejecución bajo un mismo techo para impulsar su inversión inmobiliaria.
                    </p>

                    <div className="services__grid">
                        {/* Las tarjetas ahora usan los objetos de ícono directamente del array 'services' */}
                        {services.map((service, index) => (
                            <AnimatedServiceCard 
                                key={service.title || index} 
                                service={service} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>


                {/* === SECCIÓN 5: Acceso y Estructura de Capital (Bloque Final) === */}
                <div className="capital-section-final">
                    <FaIcon icon={ICON_CAPITAL} />
                    <h3>Acceso y Estructura de Capital</h3>
                    <p>El estudio financiero es su soporte oficial para:</p>

                    <div className="capital-steps-grid-final">
                        {capitalSteps.map((step, index) => (
                            <div key={index} className={`capital-step-final ${step.accentClass}`}>
                                {/* ICONO DENTRO DE LA TARJETA */}
                                <FaIcon icon={step.iconClass} />
                                <h5>{step.title}</h5>
                                <p>{step.text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="note-text-final">
                        *La mitigación de riesgo y la estructura de capital son claves. Contamos con <strong>esquemas flexibles de colaboración</strong> para alinear la inversión en nuestro servicio con los resultados del proyecto.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default EstrategiaServiciosIntegrales;