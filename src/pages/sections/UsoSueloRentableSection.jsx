import React from 'react';
import './UsoSueloRentableSection.css'; 

const UsoSueloRentableSection = () => {

    // --- ÍCONOS FONT AWESOME ---
    const ICON_VELOCIDAD = "fa-solid fa-clock"; 
    const ICON_ANALISIS = "fa-solid fa-chart-simple"; 
    const ICON_CAPITAL = "fa-solid fa-money-bill-transfer"; 
    const ICON_TECNOLOGIA = "fa-solid fa-microchip"; 
    const ICON_TIEMPO = "fa-solid fa-hourglass-half"; 
    const ICON_CHECK = "fa-solid fa-circle-check";
    const ICON_X = "fa-solid fa-circle-xmark";

    // --- Data del Flujo de Proceso (Timeline) ---
    const pasosSolucion = [
        { 
            iconClass: "fa-solid fa-calculator", // Cálculo
            title: '1. Diagnóstico de Volumetría y Viabilidad', 
            description: 'Usamos software especializado para determinar los metros cuadrados exactos de vialidades, estacionamiento, áreas vendibles y áreas comunes.',
        },
        { 
            iconClass: "fa-solid fa-cubes", // Comparación / Bloques
            title: '2. Análisis Multivariable (Escenarios A, B y C)', 
            description: 'Exploramos de forma rápida distintas opciones de producto y distribución para aislar el uso de suelo que ofrece la mayor rentabilidad.',
        },
        { 
            iconClass: "fa-solid fa-chart-line", // Resultados
            title: '3. Proyección Financiera y Plan de Acción', 
            description: 'Entregamos un estudio financiero (absorción, costos, precios) con el plan más rentable definido y justificado, listo para sustentar inversiones.',
        },
    ];
    
    // --- Data del Bloque de Capital ---
    const capitalSteps = [
        { 
            iconClass: "fa-solid fa-shield-halved", 
            title: 'Mitigación de Riesgo', 
            text: 'Validación técnica y financiera exhaustiva que reduce la incertidumbre en las primeras etapas del proyecto.',
            accentClass: 'capital-mitigation'
        },
        { 
            iconClass: "fa-solid fa-handshake", 
            title: 'Atracción de Capital', 
            text: 'Documento base para asegurar Créditos Puente, y atraer Inversionistas o Socios al proyecto con un caso de negocio sólido.',
            accentClass: 'capital-attraction'
        },
        { 
            iconClass: "fa-solid fa-sack-dollar", 
            title: 'Inversión Flexible', 
            text: 'Consulte nuestros esquemas de colaboración. Inversión inicial con opciones de acuerdo a resultados o términos de interés mutuo.',
            accentClass: 'capital-flexible'
        },
    ];

    // --- Placeholder para imágenes (usaremos las imágenes subidas como referencia visual) ---
    const VolumetriaImage = () => (
        <div className="image-placeholder map-image-wrapper">
            {/* Usando una de las imágenes subidas como ejemplo de mapa */}
            <img src="/image_9af284.jpg" alt="Mapa de Volumetría Avanzada" />
            <p className="caption">Visualización técnica y mapeo volumétrico.</p>
        </div>
    );
    
    return (
        <section className="usosuelo-section">
            <div className="container">
                
                {/* 1. Título y Comparación de Procesos */}
                <header className="section-header">
                    <h2>Volumetría Avanzada: Velocidad, Precisión y Máxima Rentabilidad</h2>
                    <p className="subtitle">
                        Deje de lado los procesos tradicionales de meses. Utilizamos <strong>software volumétrico único</strong> para validar el plan de acción más rentable y asegurar la viabilidad financiera de su proyecto en tiempo récord.
                    </p>
                </header>
                
                <div className="time-comparison-block">
                    <div className="time-box time-problem">
                        <i className={ICON_TIEMPO} style={{color: 'var(--grey-motor)'}}></i>
                        <h4>PROCESO TRADICIONAL</h4>
                        <p>Iteración manual entre Comercial, Arquitectura y Finanzas. La validación toma <strong>meses</strong> y aumenta los costos por retrabajos.</p>
                        <ul className="time-list">
                            <li><i className={ICON_X}></i> Retrabajos costosos.</li>
                            <li><i className={ICON_X}></i> Riesgo elevado por incertidumbre.</li>
                        </ul>
                    </div>
                    
                    <div className="time-box time-solution">
                        <i className={ICON_VELOCIDAD} style={{color: 'var(--secondary-color)'}}></i>
                        <h4>NUESTRA METODOLOGÍA</h4>
                        <p>Software especializado de volumetrías que integra todas las variables. El estudio es entregado en <strong>días</strong> con el plan más rentable definido.</p>
                        <ul className="time-list">
                            <li><i className={ICON_CHECK}></i> Plan de acción validado.</li>
                            <li><i className={ICON_CHECK}></i> Viabilidad financiera asegurada.</li>
                        </ul>
                    </div>
                </div>

                {/* 2. Proceso Paso a Paso (Timeline) */}
                <div className="section-divider">
                    <h3>El Proceso que Garantiza su Mayor Rentabilidad</h3>
                </div>
                
                <div className="value-flow-steps">
                    {pasosSolucion.map((paso, index) => (
                        <div key={index} className="flow-step">
                            <div className="flow-step-icon-wrapper">
                                <i className={paso.iconClass}></i>
                            </div>
                            <div className="flow-step-content">
                                <h4>{paso.title}</h4>
                                <p>{paso.description}</p>
                            </div>
                            {/* Línea de conexión para el Timeline, excepto en el último paso */}
                            {index < pasosSolucion.length - 1 && <div className="flow-line"></div>}
                        </div>
                    ))}
                </div>

                {/* 3. Ventaja Tecnológica Irrefutable (Con Imagen Lateral) */}
                <div className="technology-advantage-section">
                    
                    <div className="tech-content-box">
                        <i className={ICON_TECNOLOGIA}></i>
                        <h3>Ventaja Tecnológica Irrefutable</h3>
                        <p>Pocos en la industria combinan este nivel de dominio técnico con estrategia financiera:</p>
                        
                        <div className="tech-list">
                            <div className="tech-item">
                                <h5><i className="fa-solid fa-code-branch"></i> Integración de Datos</h5>
                                <p>Conectamos análisis volumétrico con proyecciones de absorción.</p>
                            </div>
                            <div className="tech-item">
                                <h5><i className="fa-solid fa-users-gear"></i> Experiencia Ejecutiva</h5>
                                <p>Traducimos datos técnicos a lenguaje de negocio para inversionistas.</p>
                            </div>
                            <div className="tech-item">
                                <h5><i className="fa-solid fa-map-location-dot"></i> Presencia de Mercado</h5>
                                <p>Auditorías de ventas que validan su proyecto con datos reales.</p>
                            </div>
                        </div>
                    </div>

                    <div className="tech-image-col">
                        <VolumetriaImage />
                    </div>
                </div>


                {/* 4. Acceso y Estructura de Capital (Última Sección) */}
                <div className="capital-section-final">
                    <i className={ICON_CAPITAL}></i>
                    <h3>Acceso y Estructura de Capital</h3>
                    <p>El estudio financiero es su soporte oficial para:</p>

                    <div className="capital-steps-grid-final">
                        {capitalSteps.map((step, index) => (
                            <div key={index} className={`capital-step-final ${step.accentClass}`}>
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

export default UsoSueloRentableSection;