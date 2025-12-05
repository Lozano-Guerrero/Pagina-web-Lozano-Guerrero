// src/data/projectData.js

// Función para generar un párrafo descriptivo con base en las responsabilidades
const generateDescription = (responsibilities, location) => {
  const responsibilitiesText = responsibilities.join(', ');
  return `Proyecto exitoso en ${location}. Nuestra participación incluyó la ${responsibilitiesText}. El enfoque fue asegurar la optimización financiera y el posicionamiento comercial del desarrollo inmobiliario.`;
};

export const projects = [
  {
    id: 1,
    title: "Uptown Cumbres",
    location: "Av. Puerta de Hierro, Monterrey N.L.",
    responsibilities: [
      "Planeación", 
      "Desarrollo de concepto", 
      "Dirección financiera", 
      "Dirección comercial"
    ],
  },
  {
    id: 2,
    title: "Lagos de San Francisco",
    location: "Av. Lagos de San Francisco, Santiago N.L.",
    responsibilities: [
      "Desarrollo de concepto", 
      "Dirección comercial"
    ],
  },
  {
    id: 3,
    title: "Zoldana (Próximamente)",
    location: "Tulum Centro, Q.R.",
    responsibilities: [
      "Desarrollo integral", 
      "Dirección integral"
    ],
  },
  {
    id: 4,
    title: "Granados del Mediterráneo",
    location: "Montemorelos, N.L.",
    responsibilities: [
      "Desarrollo de concepto", 
      "Dirección financiera", 
      "Dirección comercial"
    ],
  },
  {
    id: 5,
    title: "Micropolis",
    location: "Av. Eugenio Garza Sada, Monterrey, N.L.",
    responsibilities: [
      "Gerencia comercial"
    ],
  },
  {
    id: 6,
    title: "HighPark",
    location: "Av. Manuel Gómez Morin, Monterrey, N.L.",
    responsibilities: [
      "Gerencia comercial"
    ],
  },
  {
    id: 7,
    title: "Connexity",
    location: "Av. Lázaro Cardenas, Monterrey, N.L.",
    responsibilities: [
      "Gerencia comercial"
    ],
  },
  {
    id: 8,
    title: "Plaza Fundadores",
    location: "Montemorelos, N.L.",
    responsibilities: [
      "Planeación y validación"
    ],
  },
];

// Añadimos una descripción detallada y simplificada para usar en las tarjetas
export const projectsWithDescription = projects.map(p => ({
    ...p,
    description: generateDescription(p.responsibilities, p.location),
}));