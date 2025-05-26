
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        {/* Flowing curves */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400C300 200 600 600 1200 300V0H0V400Z" fill="url(#gradient1)" />
          <path d="M0 600C400 300 800 700 1200 400V800H0V600Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/c251566e-1834-47c9-bf6f-646e7a6162c4.png" 
            alt="SOIN D&L SAS Logo" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-fade-in"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in whitespace-nowrap">
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            SOIN D&L SAS
          </span>
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in delay-200">
          Mantenimiento eléctrico y mecánico
        </p>

        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in delay-300">
          Empresa joven formada por personal calificado, especializada en servicios 
          eléctricos y mecánicos para la industria agropecuaria
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-black font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg animate-fade-in delay-500 hover:scale-105 transition-all duration-300"
        >
          Conoce Nuestros Servicios
          <ArrowDown className="ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-green-400" />
      </div>
    </section>
  );
};
