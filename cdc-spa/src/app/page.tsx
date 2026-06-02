import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Nosotros from "@/components/sections/Nosotros";
import Productos from "@/components/sections/Productos";
import Colores from "@/components/sections/Colores";
import AMedida from "@/components/sections/AMedida";
import Cotizador from "@/components/sections/Cotizador";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <Colores />
      <AMedida />
      <Cotizador />
      <Footer />
    </main>
  );
}
