"use client";

import { useState } from "react";
import { MessageSquare, Clock, Settings, Zap, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    mensaje: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          type: "success",
          message: data.message,
        });
        setFormData({ nombre: "", correo: "", empresa: "", mensaje: "" });
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Error al enviar el mensaje. Por favor intenta nuevamente.",
        });
      }
    } catch {
      setFormStatus({
        type: "error",
        message: "Error de conexión. Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contacta con Nuestros Expertos en Tecnología
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            ¿Listo para transformar tu empresa con tecnología avanzada? Solicita una consulta gratuita
            y descubre cómo nuestros agentes de IA y desarrollo web pueden potenciar tu negocio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                Conversemos sobre tu Agente
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Nuestro equipo está listo para ayudarte a diseñar la solución tecnológica perfecta:
                agentes de IA personalizados, aplicaciones web o sitios digitales. Te guiaremos en cada
                paso del proceso para asegurar el éxito de tu proyecto.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/20 rounded-lg flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Respuesta en 24 horas</div>
                    <div className="text-gray-500 text-sm">Consulta inicial gratuita</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-900/30 border border-purple-500/20 rounded-lg flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Configuración Gratuita</div>
                    <div className="text-gray-500 text-sm">Te ayudamos a crear tu primer agente</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-900/30 border border-green-500/20 rounded-lg flex items-center justify-center group-hover:border-green-500/50 transition-colors">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Agente Activo en Minutos</div>
                    <div className="text-gray-500 text-sm">Resultados inmediatos</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h4 className="text-xl font-bold text-white mb-6">Información de Contacto</h4>
              <div className="space-y-4">
                <a
                  href="mailto:contacto@severant.cl"
                  className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>contacto@severant.cl</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400 p-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Chile - Soporte 24/7</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {formStatus.type && (
                <div
                  className={`p-4 rounded-lg mb-4 ${
                    formStatus.type === "success"
                      ? "bg-green-900/50 border border-green-500/50 text-green-300"
                      : "bg-red-900/50 border border-red-500/50 text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all resize-none"
                  placeholder="Cuéntanos sobre el tipo de agente que te gustaría crear..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Datos protegidos bajo estándares empresariales.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent -z-10" />
    </section>
  );
}
