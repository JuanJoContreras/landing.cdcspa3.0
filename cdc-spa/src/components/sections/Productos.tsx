"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const productos = [
  {
    id: "corredera",
    nombre: "Corredera",
    descripcion:
      "Sistemas de cierre paralelo a muro. La ventana se desliza sobre un riel, ideal para grandes vanos y terrazas.",
    icono: "⟷",
    specs: ["Perfil 70mm", "DVH 4/12/4", "Alta hermeticidad"],
  },
  {
    id: "abatible",
    nombre: "Abatible",
    descripcion:
      "Sistema de apertura lateral con bisagras, aprovechando al máximo la abertura para mayor ventilación.",
    icono: "↻",
    specs: ["Perfil 70mm", "Apertura 100%", "Sellado superior"],
  },
  {
    id: "proyectante",
    nombre: "Proyectante",
    descripcion:
      "Apertura desde la parte inferior hacia el exterior, con regulación de abertura. Ideal para baños y cocinas.",
    icono: "↗",
    specs: ["Perfil 60mm", "Regulable", "Anti-lluvia"],
  },
  {
    id: "oscilante",
    nombre: "Oscilante",
    descripcion:
      "Abre desde la parte superior hacia el interior. Ventilación continua y segura, incluso con lluvia.",
    icono: "↕",
    specs: ["Perfil 60mm", "Apertura sup.", "Ventilación 24/7"],
  },
  {
    id: "oscilobatiente",
    nombre: "Oscilobatiente",
    descripcion:
      "Combina 2 sistemas de apertura —abatir y oscilante— en una misma ventana. El estándar europeo.",
    icono: "⊕",
    specs: ["Perfil 82mm", "2 en 1", "Alta seguridad"],
    destacado: true,
  },
  {
    id: "fija",
    nombre: "Fija",
    descripcion:
      "Sin sistema de apertura. Máxima superficie vidriada, utilizable desde piso a cielo o media altura.",
    icono: "□",
    specs: ["Perfil 60mm", "Max. luz", "Sin límite de ancho"],
  },
];

const coloresDisponibles = ["#FFFFFF", "#1A1A1A", "#5C3D1E", "#8B7355", "#C0C0C0", "#4A4A4A"];

export default function Productos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="productos" className="py-36 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#E8650A]" />
            <span className="text-[#E8650A] text-xs tracking-[0.4em] uppercase font-medium">
              Nuestros sistemas
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-gray-900 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Una solución para
              <br />
              cada espacio.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xs text-gray-400 text-sm leading-relaxed"
            >
              Con las ventanas de PVC conseguirás un excelente balance energético
              y un ahorro considerable en climatización.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.025, boxShadow: "0 25px 50px -10px rgba(0,0,0,0.12)", transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl p-8 cursor-default transition-all duration-300 ${
                p.destacado
                  ? "bg-[#E8650A] text-white"
                  : "bg-white border border-gray-100 hover:border-gray-200"
              }`}
            >
              {p.destacado && (
                <div className="absolute top-5 right-5 text-white/70 text-xs tracking-widest border border-white/30 px-3 py-1 rounded-full">
                  Más completa
                </div>
              )}

              {/* Icon */}
              <div
                className={`text-4xl mb-6 font-light ${
                  p.destacado ? "text-white" : "text-[#E8650A]"
                }`}
              >
                {p.icono}
              </div>

              <h3
                className={`font-bold text-2xl mb-3 leading-tight ${
                  p.destacado ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {p.nombre}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  p.destacado ? "text-white/75" : "text-gray-500"
                }`}
              >
                {p.descripcion}
              </p>

              {/* Specs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.specs.map((s) => (
                  <span
                    key={s}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      p.destacado
                        ? "border-white/25 text-white/70"
                        : "border-gray-200 text-gray-400"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Colores */}
              <div>
                <p className={`text-xs mb-2 ${p.destacado ? "text-white/50" : "text-gray-400"}`}>
                  Colores disponibles
                </p>
                <div className="flex gap-1.5">
                  {coloresDisponibles.map((c) => (
                    <div
                      key={c}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div
                className={`absolute bottom-7 right-7 w-8 h-8 rounded-full border flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 ${
                  p.destacado ? "border-white/40 text-white" : "border-gray-300 text-gray-600"
                }`}
              >
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quisiera%20información%20sobre%20los%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E8650A] hover:bg-[#C4540A] text-white px-10 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Consultar disponibilidad por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
