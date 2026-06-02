import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Colores & Texturas", href: "#colores" },
  { label: "Proyectos a Medida", href: "#medida" },
  { label: "Cotizar", href: "#cotizar" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-cdc.jpg"
              alt="CDC SPA"
              width={140}
              height={52}
              className="h-12 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Empresa innovadora dedicada a la instalación y venta de ventanas de PVC
              a lo largo de todo Chile. Innovación, Tecnología y Diseño al servicio de tu proyecto.
            </p>
            {/* Social */}
            <a
              href="https://www.instagram.com/iruzspa.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              @iruzspa.cl
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ventas@cdcspa.cl"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  ventas@cdcspa.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56947533300"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  (+56 9) 4753 3300
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=56966879910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  (+56 9) 6687 9910 (WhatsApp)
                </a>
              </li>
              <li className="text-white/30 text-xs leading-relaxed pt-2 border-t border-white/8">
                Lunes a Viernes<br />09:00 – 18:00 hrs
              </li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quisiera%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#E8650A] hover:bg-[#C4540A] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} CDC SPA – Cierres de Cristal. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Ventanas de PVC · Fabricación &amp; Instalación · Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
