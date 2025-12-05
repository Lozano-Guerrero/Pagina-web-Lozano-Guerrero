import React from 'react';
import AppRouter from './routes/AppRouter';

/**
 * Componente principal de la aplicación.
 * Simplemente renderiza el sistema de ruteo.
 */
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;