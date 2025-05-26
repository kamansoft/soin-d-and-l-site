
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { Mission } from "@/components/Mission";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Values />
      <Mission />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
