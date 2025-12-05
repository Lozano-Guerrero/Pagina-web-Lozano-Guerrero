import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Importa cualquier estilo global aquí si lo tienes
import './styles/global.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);