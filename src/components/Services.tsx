
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, CheckCircle, Wrench } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "INGENIERÍA ELÉCTRICA",
      items: [
        "Diseño y ejecución de obras eléctricas industriales y residenciales",
        "Montaje e instalación de tableros CCMs, TDP, TDA, PLC",
        "Montaje de soportería, tubería, Bandeja",
        "Pruebas de continuidad de cableado de fuerza e instrumentación",
        "Diseño e Instalación y mantenimiento de Sistemas de Puestas a Tierra"
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

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            NUESTROS SERVICIOS
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
      </div>
    </section>
  );
};
