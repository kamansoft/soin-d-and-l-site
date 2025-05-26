
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
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
              Los valores que nos definen como organización y guían nuestro trabajo diario:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Disciplina
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Puntualidad
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Responsabilidad
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Liderazgo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Honestidad
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Trabajo en equipo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Calidad
              </li>
            </ul>
          </div>

          {/* Professional Team */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
              NUESTRO PERSONAL
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Contamos con un equipo profesional de técnicos y 
              asesores altamente capacitados para brindar soluciones 
              integrales en Mantenimiento y reparación de máquinas y 
              equipos industriales y residenciales.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nuestro personal encarna estos valores en cada proyecto, 
              demostrando disciplina en la ejecución, puntualidad en las entregas, 
              y responsabilidad en cada compromiso adquirido. Su liderazgo y 
              honestidad, combinados con un trabajo en equipo excepcional, 
              garantizan la calidad que nos caracteriza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
