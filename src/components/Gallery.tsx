import {useState} from "react";
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
import {Star} from "lucide-react";

export const Gallery = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const featuredProjects = [
        {
            id: 1,
            title: "Montaje de Equipos",
            shortDescription: "Istalación de sistemas para la alimentación, ventilación, enfriamiento y pesaje en granja avicola.",
            coverImage: "/lovable-uploads/montaje_2.jpg",
            gallery: [
                "/lovable-uploads/montaje_1.jpg",
                "/lovable-uploads/montaje_2.jpg",
                "/lovable-uploads/montaje_3.jpg",
                "/lovable-uploads/montaje_4.jpg",
                "/lovable-uploads/montaje_5.jpg",
                "/lovable-uploads/montaje_6.jpg",

            ],
            fullDescription: "Ejecución de trabajos de instalación y montaje de sistemas integrales en granjas, incluyendo: comederos, bebederos, cuadros de agua, silos, sistemas de distribución de alimento, sistemas de enfriamiento tipo panel y fogger, sistemas de ventilación forzada y natural, así como sistemas de pesaje automatizados."
        },
        {
            id: 2,
            title: "Servicios de Emergencia",
            shortDescription: "Servicios de atencion que por su gravedad requieren intervención inmediata.",
            coverImage: "/lovable-uploads/emergencia_4.jpg",
            gallery: [
                "/lovable-uploads/emergencia_1.jpg",
                "/lovable-uploads/emergencia_2.jpg",
                "/lovable-uploads/emergencia_3.jpg",
                "/lovable-uploads/emergencia_4.jpg",
                "/lovable-uploads/emergencia_5.jpg",
                "/lovable-uploads/emergencia_6.jpg",
                "/lovable-uploads/emergencia_7.jpg",
                "/lovable-uploads/emergencia_8.jpg",

            ],
            fullDescription: "Servicios de atencion que por su gravedad requieren intervención inmediata."
        }
    ];

    const clientTestimonials = [
        {
            id: 1,
            name: "Carlos Mendoza",
            company: "Granja San Pedro",
            rating: 5,
            comment: "Excelente trabajo en la automatización de nuestra granja avícola. El sistema funciona perfectamente y ha mejorado significativamente nuestra productividad.",
            date: "Marzo 2024"
        },
        {
            id: 2,
            name: "María González",
            company: "Industrias del Valle",
            rating: 5,
            comment: "SOIN D&L SAS realizó una instalación eléctrica impecable en nuestra planta. Personal altamente capacitado y profesional en todo momento.",
            date: "Febrero 2024"
        },
        {
            id: 3,
            name: "Luis Rodriguez",
            company: "Agropecuaria El Dorado",
            rating: 5,
            comment: "Servicio de mantenimiento excelente. Siempre responden rápido a nuestras emergencias y mantienen nuestros equipos en perfecto estado.",
            date: "Enero 2024"
        },
        {
            id: 4,
            name: "Ana Patricia Jiménez",
            company: "Procesadora de Alimentos Central",
            rating: 5,
            comment: "La modernización de nuestro sistema eléctrico fue ejecutada sin contratiempos. Muy satisfechos con la calidad del trabajo realizado.",
            date: "Diciembre 2023"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({length: 5}, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                }`}
            />
        ));
    };

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
                        Proyectos y Servicios Realizados
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
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                        <p className="text-gray-300 text-sm">{project.shortDescription}</p>
                                        <div
                                            className="mt-3 inline-block px-3 py-1 bg-green-500/80 rounded-full text-xs font-medium text-black">
                                            Ver Galería
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Testimonials */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
                        Comentarios de Clientes
                    </h3>
                    <Carousel className="w-full max-w-5xl mx-auto">
                        <CarouselContent>
                            {clientTestimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                                    <div className="bg-gray-900/50 border border-green-500/20 rounded-xl p-6 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="flex space-x-1 mr-3">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                            <span className="text-gray-400 text-sm">{testimonial.date}</span>
                                        </div>
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            "{testimonial.comment}"
                                        </p>
                                        <div className="border-t border-green-500/20 pt-4">
                                            <h4 className="text-green-400 font-semibold">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-green-400 border-green-400/40 hover:bg-green-400/10"/>
                        <CarouselNext className="text-green-400 border-green-400/40 hover:bg-green-400/10"/>
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
                                <CarouselPrevious className="text-green-400 border-green-400/40 hover:bg-green-400/10"/>
                                <CarouselNext className="text-green-400 border-green-400/40 hover:bg-green-400/10"/>
                            </Carousel>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
