"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const colores = [
  { nombre: "Blanco", hex: "#F5F5F5", texto: "#1A1A1A", descripcion: "El clásico atemporal" },
  { nombre: "Black Brown", hex: "#2C1810", texto: "#FFFFFF", descripcion: "Elegancia oscura" },
  { nombre: "Antracita Rugoso", hex: "#3C3C3C", texto: "#FFFFFF", descripcion: "Moderno y sofisticado" },
  { nombre: "Roble Dorado", hex: "#8B6914", texto: "#FFFFFF", descripcion: "Calidez natural" },
  { nombre: "Nogal", hex: "#5C3D1E", texto: "#FFFFFF", descripcion: "Madera clásica" },
  { nombre: "Monument Oak", hex: "#6B6B5A", texto: "#FFFFFF", descripcion: "Gris terroso premium" },
];

export default function Colores() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="colores" className="py-36 bg-white overflow-hidden">
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
              Personalización
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
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
              Colores &amp; Texturas
              <br />
              a tu medida.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-sm text-gray-400 text-sm leading-relaxed"
            >
              Folios de acabado liso, madera o metalizado. Resistentes a la intemperie,
              alta solidez frente a la luz y fáciles de cuidar.
            </motion.p>
          </div>
        </div>

        {/* Color grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {colores.map((c, i) => (
            <motion.div
              key={c.nombre}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
              className="group cursor-default"
            >
              <div
                className="w-full aspect-square rounded-2xl mb-3 transition-shadow duration-300 group-hover:shadow-xl flex items-end p-3"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className="text-xs font-medium opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ color: c.texto }}
                >
                  {c.descripcion}
                </span>
              </div>
              <p className="text-gray-800 text-sm font-medium text-center">{c.nombre}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#f8f6f3] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { titulo: "Resistentes a la intemperie", detalle: "Soportan lluvia, sol y cambios extremos de temperatura sin deformarse ni decolorarse." },
            { titulo: "Alta solidez frente a la luz", detalle: "Los folios no se destiñen con la radiación UV. Colores estables durante décadas." },
            { titulo: "Fácil cuidado", detalle: "Limpieza con agua y jabón neutro. Sin pintura, barniz ni tratamientos periódicos." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-6 h-0.5 bg-[#E8650A]" />
              <h3 className="text-gray-900 font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.detalle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
