
export const Gallery = () => {
  const images = [
    "/lovable-uploads/f52e6484-9fe6-410c-9519-0f8ba770dbaa.png",
    "/lovable-uploads/01e0dee9-8562-4bef-9d46-e4ee442bbb97.png"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            NUESTROS TRABAJOS
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <img 
                src={image} 
                alt={`Proyecto ${index + 1}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
