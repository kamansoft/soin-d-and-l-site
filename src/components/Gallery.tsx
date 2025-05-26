
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const featuredProjects = [
    {
      id: 1,
      title: "Sistema Eléctrico Industrial Completo",
      shortDescription: "Instalación completa de sistemas eléctricos para complejo industrial de 5000m²",
      coverImage: "/lovable-uploads/f52e6484-9fe6-410c-9519-0f8ba770dbaa.png",
      gallery: [
        "/lovable-uploads/f52e6484-9fe6-410c-9519-0f8ba770dbaa.png",
        "/lovable-uploads/2fb99dde-998e-4c93-8514-31fa12afaad9.png",
        "/lovable-uploads/5b5b40f1-e066-4b4b-a51d-6da3d09f0472.png"
      ],
      fullDescription: "Proyecto integral que incluyó el diseño e instalación de tableros de control, sistemas de iluminación LED industriales, y redes de distribución eléctrica para una planta de manufactura."
    },
    {
      id: 2,
      title: "Automatización Granja Avícola",
      shortDescription: "Sistema automatizado para control de ambiente y alimentación en granja de 10,000 aves",
      coverImage: "/lovable-uploads/01e0dee9-8562-4bef-9d46-e4ee442bbb97.png",
      gallery: [
        "/lovable-uploads/01e0dee9-8562-4bef-9d46-e4ee442bbb97.png",
        "/lovable-uploads/f2c8c0e4-44e3-40ef-aa8f-02c36b5ef28a.png",
        "/lovable-uploads/8da8ca72-95eb-4861-9af5-fb3365b7fbf2.png"
      ],
      fullDescription: "Implementación de sistemas de control automatizado para temperatura, humedad, ventilación y alimentación, incluyendo sensores IoT y paneles de control centralizados."
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
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 text-sm">{project.shortDescription}</p>
                    <div className="mt-3 inline-block px-3 py-1 bg-green-500/80 rounded-full text-xs font-medium text-black">
                      Ver Galería
                    </div>
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

      {/* Project Gallery Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-black border-green-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-400">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.gallery.map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img 
                          src={image} 
                          alt={`${selectedProject.title} - Imagen ${index + 1}`}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-green-400 border-green-400/40 hover:bg-green-400/10" />
                <CarouselNext className="text-green-400 border-green-400/40 hover:bg-green-400/10" />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
