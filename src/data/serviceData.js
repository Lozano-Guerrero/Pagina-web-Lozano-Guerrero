// src/data/serviceData.js
// Importamos los íconos específicos de Font Awesome:
import { 
  faChessKnight,
  faChartLine,
  faClipboardCheck,
  faHandshake,
  faUsers,
  faCubes,
  faFileContract, 
  faDiagramProject
} from '@fortawesome/free-solid-svg-icons';

export const services = [
  {
    icon: faChessKnight, // Usamos el objeto de icono de FA
    title: "Estrategia Inmobiliaria",
    description: "Diseñamos procesos estratégicos para maximizar el valor de terrenos y proyectos, asegurando la optimización de recursos y la mejor posición en el mercado."
  },
  {
    icon: faChartLine, 
    title: "Validación Financiera y Comercial",
    description: "Realizamos estudios de viabilidad, proyecciones financieras detalladas y análisis de mercado para garantizar que tus negocios inmobiliarios sean altamente rentables."
  },
  {
    icon:  faCubes,
    title: "Análisis y Validación Volumétrica",
    description: "Utilizamos software propio avanzado para modelar, simular y optimizar el uso del suelo y el rendimiento de construcción, maximizando la densidad permitida."
  },
  {
    icon: faHandshake,
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