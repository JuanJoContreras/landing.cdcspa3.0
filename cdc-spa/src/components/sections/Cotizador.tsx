"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiposVentana = [
  "Corredera",
  "Abatible",
  "Proyectante",
  "Oscilante",
  "Oscilobatiente",
  "Fija",
  "No lo sé aún",
];

export default function Cotizador() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comuna: "",
    tipo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: conectar a API Route o Formspree: fetch('/api/contacto', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setEnviado(true);
  };

  const inputBase =
    "w-full border border-gray-200 text-gray-800 placeholder-gray-300 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#E8650A] focus:ring-1 focus:ring-[#E8650A]/20 transition-all duration-200 bg-white";

  return (
    <section id="cotizar" className="py-36 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#E8650A]" />
              <span className="text-[#E8650A] text-xs tracking-[0.4em] uppercase font-medium">
                Sin compromiso
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
              Cotiza con
              <br />
              nosotros.
              <br />
              <span className="text-[#E8650A]">¡Respondemos</span>
              <br />
              muy rápido!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed max-w-sm mb-12"
            >
              Cuéntanos tu proyecto y te enviamos una propuesta técnica detallada.
              Sin presiones, sin letras chicas.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "ventas@cdcspa.cl",
                  href: "mailto:ventas@cdcspa.cl",
                },
                {
                  icon: "📞",
                  label: "Teléfono",
                  value: "(+56 9) 4753 3300",
                  href: "tel:+56947533300",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "(+56 9) 6687 9910",
                  href: "https://api.whatsapp.com/send?phone=56966879910",
                },
                {
                  icon: "🕐",
                  label: "Atención",
                  value: "Lunes a Viernes: 09:00 – 18:00 hrs",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#E8650A]/10 rounded-full flex items-center justify-center text-[#E8650A] text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-800 text-sm font-medium hover:text-[#E8650A] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            {enviado ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#E8650A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3
                  className="text-gray-900 text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-400 text-sm">
                  Te contactaremos a la brevedad. Revisa también tu correo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 XXXX XXXX"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className={inputBase}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">Comuna</label>
                    <input
                      type="text"
                      name="comuna"
                      value={form.comuna}
                      onChange={handleChange}
                      placeholder="Ej: Providencia"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">Tipo de ventana</label>
                    <select
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      <option value="">Selecciona...</option>
                      {tiposVentana.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-1.5">
                    Cuéntanos tu proyecto
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cantidad de ventanas, medidas aproximadas, tipo de obra..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#E8650A] hover:bg-[#C4540A] text-white font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-300 disabled:opacity-60 mt-2 hover:shadow-lg"
                >
                  {loading ? "Enviando..." : "Solicitar cotización gratuita →"}
                </motion.button>

                <p className="text-center text-gray-400 text-xs mt-2">
                  Sin compromiso · Respuesta a la brevedad
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
