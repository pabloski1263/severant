"use client";

import { Database, BrainCircuit, FileText, Globe, Smartphone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Database,
    title: "Análisis Inteligente de Datos",
    description:
      "Convierte grandes volúmenes de datos en insights accionables. Nuestros agentes de machine learning analizan documentos, bases de datos y información no estructurada.",
    color: "blue",
  },
  {
    icon: BrainCircuit,
    title: "Automatización de Procesos",
    description:
      "Automatiza workflows complejos y elimina tareas repetitivas. Nuestros chatbots empresariales se adaptan a tus procesos específicos.",
    color: "cyan",
  },
  {
    icon: FileText,
    title: "Documentación Automatizada",
    description:
      "Genera reportes técnicos, análisis de mercado y documentación empresarial de forma automática para acelerar la toma de decisiones.",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Desarrollo de Sitios Web",
    description:
      "Creamos sitios web modernos, responsivos y optimizados para SEO que representen profesionalmente tu marca y aumenten tu presencia digital.",
    color: "green",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web Personalizadas",
    description:
      "Desarrollamos aplicaciones web a medida, plataformas digitales y sistemas web adaptados a las necesidades específicas de tu empresa.",
    color: "orange",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description:
      "Asistentes virtuales personalizados que atienden a tus clientes 24/7, responden preguntas frecuentes y automatizan la atención al cliente con IA conversacional avanzada.",
    color: "indigo",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-900/50", text: "text-blue-400" },
  cyan: { bg: "bg-cyan-900/50", text: "text-cyan-400" },
  purple: { bg: "bg-purple-900/50", text: "text-purple-400" },
  green: { bg: "bg-green-900/50", text: "text-green-400" },
  orange: { bg: "bg-orange-900/50", text: "text-orange-400" },
  indigo: { bg: "bg-indigo-900/50", text: "text-indigo-400" },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-severant-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Nuestras Soluciones Tecnológicas
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Potencia tu Negocio con IA y Desarrollo Web
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Desarrollamos soluciones tecnológicas integrales que combinan agentes de IA personalizados
            con desarrollo web moderno. Desde automatización inteligente hasta aplicaciones web y sitios
            digitales que transforman tu empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-6 ${colors.text}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
