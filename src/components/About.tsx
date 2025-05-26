
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
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-500/20">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Somos una empresa joven, formada por personal calificado, 
            cuyas actividades se centran en:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Instalación especializada de máquinas y equipos",
              "Instalaciones eléctricas residenciales e industriales",
              "Fabricación de tableros eléctricos",
              "Programación de controladores lógicos programables",
              "Control de sistemas de temperatura",
              "Montaje de sistema eléctrico en granjas con ambiente controlado y tradicional",
              "Instalación de redes de baja tensión, subterráneas o aéreas"
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
