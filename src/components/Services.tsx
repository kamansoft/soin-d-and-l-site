

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Settings, CheckCircle, Wrench, Cog, AlertTriangle, PlayCircle, Gauge } from "lucide-react";

export const Services = () => {
  const mainServices = [
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "INGENIERÍA ELÉCTRICA",
      excerpt: "Diseño y ejecución de obras eléctricas industriales y residenciales, montaje de tableros CCMs, TDP, TDA, PLC...",
      items: [
        "Diseño y ejecución de obras eléctricas industriales y residenciales",
        "Montaje e instalación de tableros CCMs, TDP, TDA, PLC",
        "Montaje de soportería, tubería, Bandeja",
        "Pruebas de continuidad de cableado de fuerza e instrumentación",
        "Diseño e Instalación y mantenimiento de Sistemas de Puestas a Tierra",
        "Instalación de luminarias en postes y residenciales",
        "Fabricación e instalación de cerchas",
        "Adecuación de sistemas eléctricos bajo normatividad RETIE",
        "Proceso de certificación RETIE",
        "Diseño de plano eléctricos",
        "Memorias de cálculo eléctricos",
        "Montaje y diseño de estructuras metálicas",
        "Poda y limpieza de redes eléctricas",
        "Transporte de materiales eléctricos",
        "Siembra de postefios para cercas"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-green-400" />,
      title: "INSTRUMENTACIÓN",
      excerpt: "Uso de equipos electrónicos para medir o registrar procesos, optimizar recursos y ofrecer seguridad...",
      items: [
        "Uso de equipos electrónicos para medir o registrar procesos",
        "Optimizar los recursos y regulación, observación, transformación, ofrecer seguridad",
        "Montaje eléctrico y mecánico de instrumentos y sistemas de automatización"
      ]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-400" />,
      title: "PRECOMISIONADO",
      excerpt: "Ejecución de pruebas, chequeos y actividades antes de energizar y poner en funcionamiento los sistemas...",
      items: [
        "Ejecución de pruebas y verificaciones previas a la energización y puesta en marcha de sistemas y subsistemas, conforme a los procedimientos establecidos, garantizando el cumplimiento de los requerimientos técnicos especificados por cada disciplina."
      ]
    },
    {
      icon: <Gauge className="w-12 h-12 text-green-400" />,
      title: "COMISIONADO",
      excerpt: "Verificamos cada elemento del sistema (eléctrico, tubería y equipo) que permitan acondicionar a las instalaciones...",
      items: [
        "Realizamos la verificación integral de cada componente del sistema —eléctrico, de tubería y equipos— con el objetivo de acondicionar las instalaciones que conforman los sistemas operativos, asegurando su preparación para el arranque, puesta en marcha y estabilización de manera segura y controlada. El propósito del comisionamiento es garantizar que todos los sistemas del proyecto interactúen correctamente entre sí, conforme a los diseños, normativas aplicables, requerimientos del cliente y recomendaciones de los fabricantes, dejándolos completamente habilitados para iniciar las actividades de puesta en marcha de la planta."
      ]
    },
    {
      icon: <PlayCircle className="w-12 h-12 text-green-400" />,
      title: "PUESTA EN MARCHA",
      excerpt: "Verificar que las instalaciones operen como un todo de acuerdo con las condiciones de diseño...",
      items: [
        "Verificar que las instalaciones operen como un todo de acuerdo con las condiciones de diseño",
        "Proceder gradualmente a poner las instalaciones en operación paso por paso",
        "Modo controlado, seguro y confiable hasta que reúnan las condiciones normales de operación",
        "Estabilización de la producción",
        "Pruebas para verificar el cumplimiento de los parámetros garantizados",
        "Operación siguiendo las instrucciones de los manuales de fabricación",
        "Montaje, prueba de materiales, equipos especializados o guías de adquisición",
        "Alcanzar los objetivos especificados en los diseños"
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-green-400" />,
      title: "SERVICIOS DE EMERGENCIAS",
      excerpt: "Atención de servicios que por su gravedad requieren intervención inmediata para garantizar la continuidad operacional...",
      items: [
        "Atención de servicios que por su gravedad requieren intervención inmediata para garantizar la continuidad operacional"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Cog className="w-10 h-10 text-green-400" />,
      title: "METAL MECÁNICA",
      description: "Diseño, Fabricación y Montaje de estructuras metálicas, rejillas, barandas, escaleras, soportes especiales, casetas para equipos, puertas, techos, bandas y aplicación de soldadura en acero inoxidable."
    },
    {
      icon: <Settings className="w-10 h-10 text-green-400" />,
      title: "MANTENIMIENTO DE EQUIPOS",
      description: "Mantenimiento mecánico y eléctrico a maquinaria y equipos industriales. Planificación y Programación de Mantenimiento preventivo y correctivo. Mantenimiento Basado en Condición y Centrado en Confiabilidad."
    },
    {
      icon: <Wrench className="w-10 h-10 text-green-400" />,
      title: "MONTAJES DE EQUIPOS",
      description: "Montaje de sistemas de comederos, bebederos, cuadros de agua, silos y sistemas de reparto, sistemas de enfriamiento en panel y fogger, sistemas de ventilación y sistemas de pesaje en granjas."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            NUESTROS SERVICIOS
          </span>
        </h2>
        
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="text-center flex-shrink-0">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl text-green-400 font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Excerpt */}
                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                  {service.excerpt}
                </p>
                
                {/* Expandable Full List */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="items" className="border-green-500/20">
                    <AccordionTrigger className="text-green-400 hover:text-green-300 text-center justify-center">
                      Ver mas sobre servicio
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-4">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 text-center flex-1 flex flex-col">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-green-400 mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

