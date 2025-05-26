
export const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            ¿Quiénes Somos?
          </span>
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-500/20 mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Somos una empresa joven, formada por personal calificado, 
            cuyas actividades se centran en:
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed text-left">
            Nos distinguimos en la instalación especializada de máquinas y equipos, 
            así como en instalaciones eléctricas tanto residenciales como industriales. 
            Desarrollamos la fabricación de tableros eléctricos y programación de controladores 
            lógicos programables, además del control de sistemas de temperatura. Realizamos 
            el montaje de sistemas eléctricos en granjas con ambiente controlado y tradicional, 
            junto con la instalación de redes de baja tensión, tanto subterráneas como aéreas.
          </p>
        </div>

        {/* Mission and Vision Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                MISIÓN
              </span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Somos una empresa dedicada al diseño, desarrollo, ejecución, supervisión, 
              mantenimiento eléctrico y mecánico residencial e industrial.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                VISIÓN
              </span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Ser reconocido como una empresa líder en el mercado del diseño, desarrollo, 
              ejecución, supervisión, mantenimiento eléctrico y mecánico residencial e 
              industrial y los mejores ejecutores de Proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
