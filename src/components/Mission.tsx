
export const Mission = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03),transparent_70%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              NUESTRA FILOSOFÍA
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Enhanced Mission Card */}
          <div className="group relative">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-emerald-300/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-gray-900/60 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon and title section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-300/20 rounded-2xl mb-6 border border-green-400/30">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    MISIÓN
                  </span>
                </h3>
              </div>
              
              {/* Content with better typography */}
              <div className="flex-1 flex items-center">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed text-center font-light">
                  Somos una empresa dedicada al
                  <span className="text-green-300 font-medium"> diseño, desarrollo, ejecución, supervisión y mantenimiento </span> de:
                  equipos avícolas, sistemas eléctricos y mecánicos a nivel
                  <span className="text-green-300 font-medium"> residencial e industrial</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Vision Card */}
          <div className="group relative">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-emerald-300/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-gray-900/60 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon and title section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-300/20 rounded-2xl mb-6 border border-green-400/30">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    VISIÓN
                  </span>
                </h3>
              </div>
              
              {/* Content with better typography */}
              <div className="flex-1 flex items-center">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed text-center font-light">
                  Ser reconocido como una 
                  <span className="text-green-300 font-medium"> empresa líder en el mercado</span> 
                  del diseño, desarrollo, ejecución, supervisión, mantenimiento eléctrico y mecánico 
                  <span className="text-green-300 font-medium"> residencial e industrial</span> 
                  y los mejores ejecutores de proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Added subtle bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400/40 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
