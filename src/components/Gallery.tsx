
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Gallery = () => {
  const projectImages = [
    {
      src: "/lovable-uploads/f52e6484-9fe6-410c-9519-0f8ba770dbaa.png",
      title: "Instalaciones Eléctricas Industriales",
      description: "Montaje de tableros y sistemas de control"
    },
    {
      src: "/lovable-uploads/01e0dee9-8562-4bef-9d46-e4ee442bbb97.png",
      title: "Sistemas Agropecuarios",
      description: "Instalaciones para granjas avícolas"
    }
  ];

  const servicePhotos = [
    {
      src: "/lovable-uploads/2fb99dde-998e-4c93-8514-31fa12afaad9.png",
      title: "Trabajos Eléctricos Especializados",
      category: "Ingeniería Eléctrica"
    },
    {
      src: "/lovable-uploads/5b5b40f1-e066-4b4b-a51d-6da3d09f0472.png", 
      title: "Instalaciones Industriales",
      category: "Sistemas Industriales"
    },
    {
      src: "/lovable-uploads/f2c8c0e4-44e3-40ef-aa8f-02c36b5ef28a.png",
      title: "Montajes de Equipos para Granjas",
      category: "Equipos Agropecuarios"
    },
    {
      src: "/lovable-uploads/8da8ca72-95eb-4861-9af5-fb3365b7fbf2.png",
      title: "Servicios de Emergencia",
      category: "Mantenimiento"
    }
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
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">{image.title}</h4>
                    <p className="text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Photos Carousel */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
            Galería de Servicios
          </h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {servicePhotos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block px-2 py-1 bg-green-500/80 rounded text-xs font-medium text-black mb-2">
                          {photo.category}
                        </div>
                        <h4 className="text-sm font-bold text-white">{photo.title}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-green-400 border-green-400/40 hover:bg-green-400/10" />
            <CarouselNext className="text-green-400 border-green-400/40 hover:bg-green-400/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
