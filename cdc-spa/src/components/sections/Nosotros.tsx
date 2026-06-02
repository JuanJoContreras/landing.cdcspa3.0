"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { num: "+200", label: "Proyectos ejecutados" },
  { num: "10+", label: "Años de experiencia" },
  { num: "100%", label: "Equipo propio" },
  { num: "5 años", label: "Garantía en instalación" },
];

export default function Nosotros() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#E8650A]" />
              <span className="text-[#E8650A] text-xs tracking-[0.4em] uppercase font-medium">
                Nuestra empresa
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-gray-900 leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Somos CDC SPA –<br />
              <span className="text-[#E8650A]">Cierres de Cristal</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-gray-500 text-base leading-relaxed"
            >
              <p>
                Somos una empresa innovadora dedicada a la instalación y venta de ventanas de PVC
                a lo largo de todo Chile. Contamos con sólida experiencia en el desarrollo y
                ejecución de obras en Cierres de Cristal.
              </p>
              <p>
                Desde las disciplinas de la Innovación, Tecnología y el Diseño, nos hemos
                caracterizado por un abordaje pertinente y de excelencia a las necesidades
                propias de cada proyecto encomendado.
              </p>
              <p>
                Hemos liderado proyectos de diversas complejidades del mercado nacional, tanto
                a nivel de empresas como particulares, entregando soluciones personalizadas,
                inteligentes y eficientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex gap-4 flex-wrap"
            >
              <a
                href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8650A] hover:bg-[#C4540A] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contactar por WhatsApp
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-medium text-sm hover:border-gray-400 transition-all duration-300"
              >
                Ver productos →
              </a>
            </motion.div>
          </div>

          {/* Right: Stats + visual */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Background block */}
              <div className="absolute -top-6 -right-6 w-2/3 h-full bg-[#f8f6f3] rounded-3xl -z-10" />

              {/* Main image placeholder */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#1a2f45] to-[#0d1b2a] flex items-center justify-center">
                {/*
                  INSTRUCCIÓN: Reemplaza con Image real:
                  <Image src="/images/nosotros.jpg" fill alt="Equipo CDC SPA" className="object-cover" />
                */}
                <div className="text-center px-10">
                  <div className="text-[#E8650A] text-6xl font-black mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    CDC
                  </div>
                  <p className="text-white/40 text-sm tracking-widest uppercase">Cierres de Cristal</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
                  >
                    <p
                      className="text-[#E8650A] font-black text-2xl mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.num}
                    </p>
                    <p className="text-gray-500 text-xs tracking-wide">{p.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
