
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            CONTÁCTANOS
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Phone className="w-8 h-8 text-green-400" />,
              title: "Teléfonos",
              info: "+57 315 274 6269",
              info2: "+57 315 868 5619"
            },
            {
              icon: <Mail className="w-8 h-8 text-green-400" />,
              title: "Email",
              info: "soindl@hotmail.com"
            },
            {
              icon: <MapPin className="w-8 h-8 text-green-400" />,
              title: "Ubicación",
              info: "Colombia"
            }
          ].map((contact, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">{contact.title}</h3>
                <p className="text-gray-300">{contact.info}</p>
                <p className="text-gray-300">{contact.info2}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-black font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
          >
            Solicitar Cotización
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-green-500/20 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/c251566e-1834-47c9-bf6f-646e7a6162c4.png" 
              alt="SOIN D&L SAS Logo" 
              className="w-16 h-16"
            />
          </div>
          <p className="text-gray-400">
            © 2024 SOIN D&L SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};
