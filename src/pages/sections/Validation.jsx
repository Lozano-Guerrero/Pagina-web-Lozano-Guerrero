import React from 'react';
import './Validation.css';

// Sugerencia: guarda tus imágenes en src/assets/
// import offerImage from '../../assets/offer_analysis.jpg'; 
// import demandImage from '../../assets/demand_analysis.jpg'; 

/**
 * Componente de la sección de Validación y Estudio de Mercado (El Doble Eje).
 * Muestra el valor de analizar Oferta y Demanda de forma integral.
 */
const Validation = () => {
  return (
    <section className="validation__container">
      <div className="validation__header">
        <h2>Validación de Uso de Suelo: El Doble Eje</h2>
        <p>No solo analizamos la competencia, determinamos el producto exacto que tu mercado está esperando para asegurar la máxima absorción y retorno.</p>
      </div>
      
      <div className="validation__grid">
        
        {/* Bloque 1: Análisis de Oferta */}
        <div className="validation__card offer-side">
          {/* <img src={offerImage} alt="Análisis de Oferta" className="validation__card-image" /> */}
          <div className="validation__card-image-placeholder">
            [Imagen de Gráfico de Competencia]
          </div>
          <div className="validation__card-content">
            <h3 className="validation__card-title">1. Análisis de la Oferta Existente</h3>
            <p>Realizamos una **radiografía** clara de la competencia (precios, inventario, tipologías y ubicación) para identificar con precisión los **gaps** del mercado. Esto nos permite posicionar tu proyecto donde la demanda está insatisfecha.</p>
          </div>
        </div>

        {/* Bloque 2: Determinación de Demanda */}
        <div className="validation__card demand-side">
          {/* <img src={demandImage} alt="Análisis de Demanda" className="validation__card-image" /> */}
          <div className="validation__card-image-placeholder">
            [Imagen de Segmentación de Mercado]
          </div>
          <div className="validation__card-content">
            <h3 className="validation__card-title">2. Determinación del Producto Nuclear</h3>
            <p>Definimos el **Producto Nuclear** (metrajes, ubicación), el **Producto Ampliado** (amenidades) y el **Metaproducto** (marca y diseño) con base en las necesidades reales y preferencias del mercado meta que lozano identifica.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Validation;