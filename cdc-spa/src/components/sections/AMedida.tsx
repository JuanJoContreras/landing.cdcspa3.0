"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AMedida() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="medida" className="py-36 bg-[#1A1A1A] overflow-hidden relative">
      {/* Decorative orange accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E8650A] to-transparent opacity-40" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#E8650A] opacity-[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#E8650A]" />
              <span className="text-[#E8650A] text-xs tracking-[0.4em] uppercase font-medium">
                Proyectos a medida
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-white leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Sistemas
              <br />
              <span className="text-[#E8650A]">adaptables</span>
              <br />
              sin límites.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/55 text-base leading-relaxed mb-8 max-w-md"
            >
              Una ventana no tiene que ser siempre rectangular. Con nosotros las
              posibilidades son ilimitadas. Puedes añadir detalles de estilo o formas
              creativas que darán a la ventana un toque personal.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="text-white/55 text-base leading-relaxed mb-10 max-w-md"
            >
              Esto es especialmente importante para renovaciones: con nosotros podrás
              renovar tu hogar y lograr una <strong className="text-white font-semibold">hermeticidad única de mercado.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="flex gap-4"
            >
              <a
                href="tel:+56966879910"
                className="inline-flex items-center gap-3 bg-[#E8650A] hover:bg-[#C4540A] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                📞 Llámanos ahora
              </a>
              <a
                href="#cotizar"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Cotizar →
              </a>
            </motion.div>
          </div>

          {/* Right: Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              {
                titulo: "Formas personalizadas",
                detalle: "Arcos, trapezoides, círculos y cualquier geometría que necesites.",
                num: "01",
              },
              {
                titulo: "Renovación sin obras",
                detalle: "Reemplazamos ventanas antiguas sin necesidad de demolición. Instalación limpia en pocas horas.",
                num: "02",
              },
              {
                titulo: "Hermeticidad certificada",
                detalle: "Cada instalación se certifica con prueba de filtraciones. Garantía formal por escrito.",
                num: "03",
              },
              {
                titulo: "Proyectos residenciales y comerciales",
                detalle: "Desde un departamento hasta un edificio completo. Experiencia en ambas escalas.",
                num: "04",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 8, transition: { duration: 0.25 } }}
                className="flex gap-5 items-start p-6 border border-white/8 rounded-2xl hover:border-[#E8650A]/40 transition-all duration-300 group"
              >
                <span className="text-[#E8650A]/40 text-xs font-mono tracking-widest pt-1 flex-shrink-0 group-hover:text-[#E8650A] transition-colors">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{item.titulo}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.detalle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
