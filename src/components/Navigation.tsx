
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navigation background after scrolling a bit
      setIsScrolled(scrollY > 50);
      
      // Show logo when hero section is half visible
      setShowLogo(scrollY > heroHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "services", label: "Servicios" },
    { id: "values", label: "Valores" },
    { id: "gallery", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-sm border-b border-green-500/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div 
            className={`flex items-center space-x-3 transition-all duration-500 ${
              showLogo 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform -translate-y-4 pointer-events-none"
            }`}
          >
            <img 
              src="/lovable-uploads/c251566e-1834-47c9-bf6f-646e7a6162c4.png" 
              alt="SOIN D&L SAS Logo" 
              className="w-8 h-8"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              SOIN D&L SAS
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-green-400 hover:bg-green-500/10 transition-colors duration-200"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
