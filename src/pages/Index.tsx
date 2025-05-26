
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import { useEffect, useRef } from "react";

const Index = () => {
  const scrollY = useScrollParallax();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.children;
    if (!sections) return;

    Array.from(sections).forEach((section, index) => {
      const element = section as HTMLElement;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset based on scroll position
      const parallaxSpeed = 0.5;
      const offset = scrollY * parallaxSpeed * (index + 1) * 0.1;
      
      // Apply transform based on section position and scroll
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        element.style.transform = `translateY(${offset}px) translateZ(0)`;
        element.style.zIndex = (sections.length - index).toString();
      }
    });
  }, [scrollY]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white relative"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative z-50 bg-black">
        <Hero />
      </div>
      <div 
        className="relative z-40 bg-gray-900 shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transform: 'translateZ(0)'
        }}
      >
        <About />
      </div>
      <div 
        className="relative z-30 bg-black shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transform: 'translateZ(0)'
        }}
      >
        <Services />
      </div>
      <div 
        className="relative z-20 bg-gray-800 shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transform: 'translateZ(0)'
        }}
      >
        <Values />
      </div>
      <div 
        className="relative z-10 bg-gray-900 shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transform: 'translateZ(0)'
        }}
      >
        <Gallery />
      </div>
      <div 
        className="relative z-0 bg-black shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transform: 'translateZ(0)'
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Index;
