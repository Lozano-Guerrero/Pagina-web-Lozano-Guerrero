// src/data/methodologyData.js

import { 
  faSearch, 
  faLightbulb, 
  faChartBar, 
  faBullhorn, 
  faRulerCombined, 
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const methodologySteps = [
  {
    step: 1,
    icon: faSearch,
    title: "Investigación de Mercado",
    description: "Análisis exhaustivo de Oferta y Demanda para identificar *gaps* existentes y cuantificar la demanda insatisfecha."
  },
  {
    step: 2,
    icon: faLightbulb,
    title: "Conceptualización y Producto",
    description: "Determinamos el perfil del mercado meta para generar proyectos segmentados y únicos, definiendo el producto ideal."
  },
  {
    step: 3,
    icon: faChartBar,
    title: "Análisis y Modelo Financiero",
    description: "Modelamos los flujos de caja del proyecto en el tiempo (Cashflow Dinámico), considerando absorciones, costos y factores de financiamiento."
  },
  {
    step: 4,
    icon: faBullhorn,
    title: "Estrategia Comercial y Cobranza",
    description: "Diseño de la Estrategia Comercial y de Flujos, incluyendo tipo de enganche, plan de pagos y descuentos para maximizar la conversión."
  },
  {
    step: 5,
    icon: faRulerCombined,
    title: "Proforma y Diseño Volumétrico",
    description: "Creación de la Proforma Dinámica, que optimiza la ocupación y busca la mayor área total vendible según la reglamentación aplicable."
  },
  {
    step: 6,
    icon: faHandshake,
    title: "Implementación y Estructura de Negocio",
    description: "Definición de la estructura de participaciones y el esquema de negocio para el retorno de capital, basado en indicadores financieros clave."
  },
];