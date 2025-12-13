import React from 'react';
// Importa los íconos necesarios (asegúrate de tener instalado 'lucide-react')
import { Briefcase, Zap, Bank, TrendingUp, BarChart, HardHat, DollarSign } from 'lucide-react'; 

const EstrategiaInmobiliaria = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            <Briefcase className="inline-block w-10 h-10 mr-3 text-indigo-600 align-text-bottom" />
            Estrategia Inmobiliaria: El Uso de Suelo Más Rentable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reducimos la incertidumbre y las vueltas del proceso tradicional, transformando tu terreno en un proyecto viable y financiable en <span className="font-extrabold text-indigo-600">pocos días</span>.
          </p>
        </div>

        {/* Bloque 1: El Problema del Proceso Tradicional vs. Nuestra Solución (Estilo de Tarjetas) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Proceso Tradicional (El Problema) - Rojo para Alertar */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-300 transform border-t-8 border-red-500 hover:shadow-2xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
              <HardHat className="w-7 h-7 mr-3 text-red-500 flex-shrink-0" />
              El Proceso Tradicional <span className="ml-2 text-base font-medium text-red-500">(Lento y Costoso)</span>
            </h3>
            <p className="text-gray-600 mb-5 border-l-4 border-red-200 pl-3">
              Meses de iteraciones y retrabajos costosos que siguen un flujo lineal:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-2 mt-[-4px]">•</span>
                <div>
                    <span className="font-semibold text-gray-900">Comercial:</span> Define distribución (Experiencia, no Data).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-2 mt-[-4px]">•</span>
                <div>
                    <span className="font-semibold text-gray-900">Arquitecto:</span> Dibuja el proyecto (Propuesta fija).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-2 mt-[-4px]">•</span>
                <div>
                    <span className="font-semibold text-gray-900">Financiero:</span> Evalúa la viabilidad (Al final).
                </div>
              </li>
            </ul>
            <p className="text-sm italic mt-6 text-gray-500">Resultado: El modelo económico se define después de meses de diseño.</p>
          </div>

          {/* Nuestra Solución (La Ventaja) - Índigo para Resaltar */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-300 transform border-t-8 border-indigo-600 hover:shadow-2xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
              <Zap className="w-7 h-7 mr-3 text-indigo-600 flex-shrink-0" />
              Nuestra Solución <span className="ml-2 text-base font-medium text-indigo-600">(Rápida y Optimizada)</span>
            </h3>
            <p className="text-gray-600 mb-5 border-l-4 border-indigo-200 pl-3">
              Usamos <span className="font-bold text-indigo-600">Software de Volumetrías</span> para integrar datos desde el día 1:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <BarChart className="w-5 h-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Exploración Rápida:</span> Comparamos Opciones A, B y C.
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Validación Inmediata:</span> Encontramos el **Uso de Suelo Más Rentable**.
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Decisión Ágil:</span> Reducción drástica de costos y retrabajos.
              </li>
            </ul>
            <p className="text-sm italic mt-6 text-gray-500">Evaluamos producto, precio y distribución de forma simultánea.</p>
          </div>
        </div>
        
        {/* Bloque 2: Nuestro Análisis Integrado (La Clave de la Solución) */}
        <div className="text-center mb-12 bg-white p-8 rounded-2xl shadow-inner border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <BarChart className="w-8 h-8 mr-3 text-indigo-600 flex-shrink-0" />
            Análisis de Viabilidad: La Conexión Financiera y Física
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Nuestro análisis produce una volumetría lista para la toma de decisiones, basada en dos pilares clave:
          </p>
          
          {/* Diagrama de Flujo (Señal para la Imagen) */}
          <div className="my-8">
            
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
            {/* Estudio Financiero */}
            <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600 shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-800 mb-3 flex items-center">
                <DollarSign className="w-5 h-5 mr-3 text-indigo-600" />
                Estudio Financiero Sólido
              </h4>
              <p className="text-gray-700">Valida la rentabilidad y el flujo de caja, considerando:</p>
              <ul className="mt-3 text-gray-700 space-y-1 list-disc pl-5">
                <li>Precios, Costos y Tiempos de Desarrollo.</li>
                <li className="font-semibold">Absorción (Velocidad de venta mensual real).</li>
              </ul>
            </div>
            
            {/* Análisis Volumétrico */}
            <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600 shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-800 mb-3 flex items-center">
                <HardHat className="w-5 h-5 mr-3 text-indigo-600" />
                Volumetría Física Precisa
              </h4>
              <p className="text-gray-700">Determina el metro total de construcción para:</p>
              <ul className="mt-3 text-gray-700 space-y-1 list-disc pl-5">
                <li className="font-semibold">M2 de Venta/Renta (Producto viable).</li>
                <li>Vialidades, Cajones de Estacionamiento y Áreas Comunes.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bloque 3: Financiamiento y Atracción de Capital (Destacado) */}
        <div className="bg-indigo-700 p-10 rounded-2xl shadow-2xl mt-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Bank className="w-8 h-8 mr-3 text-amber-300" />
                Acceso a Capital: La Herramienta para Financiar tu Visión
            </h3>
            <p className="text-xl text-indigo-200 max-w-4xl mx-auto mb-8">
                Nuestro estudio financiero es el soporte profesional que necesitas para conseguir el recurso.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 bg-white rounded-xl shadow-lg border-b-4 border-amber-300">
                    <h4 className="text-lg font-extrabold text-indigo-800 mb-2">Créditos Puente</h4>
                    <p className="text-gray-600 text-sm">Documentación sólida para la banca.</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow-lg border-b-4 border-amber-300">
                    <h4 className="text-lg font-extrabold text-indigo-800 mb-2">Inversión Externa</h4>
                    <p className="text-gray-600 text-sm">Atrae capital con un caso de negocio irrefutable.</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow-lg border-b-4 border-amber-300">
                    <h4 className="text-lg font-extrabold text-indigo-800 mb-2">Socios y Due Diligence</h4>
                    <p className="text-gray-600 text-sm">Genera confianza y transparencia.</p>
                </div>
            </div>
        </div>

        {/* Bloque de Cierre y Llamada a la Acción (CTA) */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-gray-900 mb-6">
            Te mostramos las opciones A, B y C. ¿Cuál es la más rentable para ti?
          </p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105 uppercase text-lg tracking-wider"
            // Nota: Aquí puedes añadir tu función onClick o enlace
          >
            Agenda tu Análisis Rápido de Uso de Suelo
          </button>
        </div>
      </div>
    </section>
  );
};

export default EstrategiaInmobiliaria;