
export const Values = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            NUESTROS VALORES
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Values */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
              VALORES
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Disciplina, puntualidad, Responsabilidad, liderazgo, 
              honestidad, trabajo, calidad.
            </p>
          </div>

          {/* Professional Team */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
              NUESTRO PERSONAL
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Contamos con un equipo profesional de técnicos y 
              asesores altamente capacitados para brindar soluciones 
              integrales en Mantenimiento y reparación de máquinas y 
              equipos industriales y residenciales.
            </p>
          </div>
        </div>

        {/* Commissioning and Operation Section */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
            PUESTA EN MARCHA
          </h3>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Verificar que las instalaciones operen como un todo de acuerdo con las condiciones de diseño, 
              procediendo gradualmente a poner las instalaciones en operación paso por paso y de un modo 
              controlado, seguro y confiable hasta que estas reúnan las condiciones normales de operación 
              y la producción se haya estabilizado. En esta etapa se efectúan las pruebas para verificar el 
              cumplimiento de los parámetros garantizados.
            </p>
            <p className="text-lg leading-relaxed">
              La operación se realiza siguiendo las instrucciones de los manuales de fabricación, montaje, 
              prueba de materiales, equipos especializados o guías de adquisición, logrando de esta manera 
              alcanzar los objetivos especificados en los diseños.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
