import SliderPrincipal from "@/components/inicio/SliderPrincipal";
import QuienesSomosSection from "@/components/inicio/QuienesSomosSection";
import TrayectoriaSection from "@/components/inicio/TrayectoriaSection";
import ServiciosSection from "@/components/inicio/ServiciosSection";
import ProyectosSection from "@/components/inicio/ProyectosSection";
import PorQueElegirnosSection from "@/components/inicio/PorQueElegirnosSection";
import EquipoSection from "@/components/inicio/EquipoSection";
import ContactoSection from "@/components/inicio/ContactoSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SliderPrincipal />
      <QuienesSomosSection />
      <TrayectoriaSection />
      <ServiciosSection />
      <ProyectosSection />
      <PorQueElegirnosSection />
      <EquipoSection />
      <ContactoSection />
    </div>
  );
}
