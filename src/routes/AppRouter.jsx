import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'; // El componente de la landing page

/**
 * Componente que define y gestiona todas las rutas de la aplicación.
 * @returns {JSX.Element} El router configurado.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Ruta principal: Muestra la landing page completa.
          En el futuro, podríamos añadir rutas como /servicios o /contacto
          que cargarían otros componentes de 'pages'.
        */}
        <Route path="/" element={<Home />} />
        
        {/*
          Ruta de fallback: Redirige a la página de inicio si la URL no coincide.
          Podría ser reemplazada por un componente <NotFound />
        */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;