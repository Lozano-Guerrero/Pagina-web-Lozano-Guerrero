import React, { useState } from 'react';
import './ContactForm.css'; // Estilos modulares

// 🛑 IMPORTANTE: REEMPLAZA ESTA URL con el endpoint REAL de tu servidor
// (Basado en tu API: https://[dominio]/api/email/send-contact)
const API_ENDPOINT = 'https://granadosdelmediterraneo.com/api/email/send-form'; 

/**
 * Componente de formulario de contacto independiente.
 * Maneja el estado de los campos, la validación y el envío real al backend.
 * @returns {JSX.Element} Un formulario interactivo.
 */
const ContactForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Usamos 'phone' para el estado interno
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado para manejar el mensaje al usuario: 'idle', 'success', 'error'
  const [status, setStatus] = useState('idle'); 

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Restablecer el estado si el usuario empieza a escribir
    if (status !== 'idle') setStatus('idle'); 

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Lógica de envío REAL al Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle'); // Reiniciar estado al intentar enviar

    // Validación de campos obligatorios
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    // 🎯 CORRECCIÓN CLAVE EN EL PAYLOAD
    // 1. Mapeamos el valor de estado (formData.phone) al nombre de clave que el backend espera (numero).
    // 2. Usamos '|| ""' para asegurar que, si está vacío, enviamos una cadena vacía y no undefined.
    const payload = {
        nombre: formData.name, 
        email: formData.email, 
        numero: formData.phone || '', // <--- ¡AQUÍ ESTÁ LA CORRECCIÓN!
        mensaje: formData.message, 
    };

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        // Verificamos si la respuesta del servidor fue OK (código 200-299)
        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
        } else {
            // Si el servidor devuelve un error (ej. 400, 500), lo manejamos
            const errorResult = await response.json();
            console.error("Error del Servidor:", errorResult.message || response.statusText);
            setStatus('error');
        }

    } catch (error) {
        // Manejo de errores de conexión/red
        console.error('Error de Conexión al enviar el formulario:', error);
        setStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="contactform__wrapper">
      <h3 className="contactform__title">Envíanos un Mensaje</h3>
      <p className="contactform__subtitle">
        Cuéntanos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.
      </p>
      
      <form onSubmit={handleSubmit} className="contactform__form">
        
        <div className="contactform__group">
          <label htmlFor="name" className="contactform__label">Nombre completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contactform__input"
            required
            aria-required="true"
          />
        </div>

        <div className="contactform__group">
          <label htmlFor="email" className="contactform__label">Correo electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contactform__input"
            required
            aria-required="true"
          />
        </div>

        <div className="contactform__group">
          <label htmlFor="phone" className="contactform__label">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="contactform__input"
          />
        </div>

        <div className="contactform__group">
          <label htmlFor="message" className="contactform__label">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contactform__textarea"
            rows="4"
            required
            aria-required="true"
          ></textarea>
        </div>

        {/* 🎯 MENSAJES DE ESTADO */}
        {status === 'success' && (
          <p className="contactform__message success">
            ✅ ¡Mensaje enviado con éxito! Pronto nos pondremos en contacto.
          </p>
        )}
        {status === 'error' && (
          <p className="contactform__message error">
            ❌ Ocurrió un error al enviar el mensaje. Por favor, verifica tu conexión e inténtalo de nuevo.
          </p>
        )}

        <button 
          type="submit" 
          className="contactform__submit-btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;