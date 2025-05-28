export const Mission = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                MISIÓN
              </span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">
                            Somos una empresa dedicada al diseño, desarrollo, ejecución,
                            supervisión, montaje de equipos avícolas, mantenimiento eléctrico,
                            mecánico, residencial e industrial.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                VISIÓN
              </span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">
                            Ser reconocido como una empresa líder en el mercado del diseño,
                            desarrollo, ejecución, supervisión, montaje de equipos avícolas,
                            mantenimiento eléctrico y mecánico residencial e industrial y los
                            mejores ejecutores de Proyectos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
