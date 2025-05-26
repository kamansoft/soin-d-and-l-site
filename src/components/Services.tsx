
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, CheckCircle, Wrench, Cog, AlertTriangle } from "lucide-react";

export const Services = () => {
  const mainServices = [
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "INGENIERÍA ELÉCTRICA",
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
      items: [
        "Uso de equipos electrónicos para medir o registrar procesos",
        "Optimizar los recursos y regulación, observación, transformación, ofrecer seguridad",
        "Montaje eléctrico y mecánico de instrumentos y sistemas de automatización"
      ]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-400" />,
      title: "PRECOMISIONADO",
      items: [
        "Ejecución de pruebas, chequeos y actividades antes de energizar y poner en funcionamiento los Sistema y Subsistemas, de acuerdo a lo descrito en los procedimientos"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-400" />,
      title: "MONTAJES DE EQUIPOS",
      items: [
        "Montaje de sistemas de comederos, bebederos, cuadros de agua, silos",
        "Sistemas de reparto, sistemas de enfriamiento en panel y fogger",
        "Sistemas de ventilación y sistemas de pesaje en granjas"
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
      icon: <AlertTriangle className="w-10 h-10 text-green-400" />,
      title: "SERVICIOS DE EMERGENCIAS",
      description: "Atención de servicios que por su gravedad requieren intervención inmediata para garantizar la continuidad operacional."
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
            <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl text-green-400 font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-green-400 mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
