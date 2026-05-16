"use client";

import { Users, BookOpen, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techFeatures = [
  {
    icon: Users,
    title: "Agentes Personalizables",
    description:
      "Crea tu propio asistente IA según tus necesidades específicas. Define personalidad, especialidades y áreas de expertise.",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "Conocimiento Propio",
    description:
      "Carga tus datos, documentos o información específica para entrenar a tu asistente con conocimiento personalizado.",
    color: "cyan",
  },
  {
    icon: Settings,
    title: "Respuestas Parametrizables",
    description:
      "Configura el tono, profundidad y estilo de las respuestas. Adapta la comunicación a tu preferencia.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Integración Total",
    description:
      "Conecta tu asistente con tus herramientas favoritas: CRM, email, calendarios, redes sociales y más.",
    color: "green",
  },
];

const colorMap: Record<string, { border: string; text: string }> = {
  blue: { border: "border-t-blue-500/50", text: "text-blue-400" },
  cyan: { border: "border-t-cyan-500/50", text: "text-cyan-400" },
  purple: { border: "border-t-purple-500/50", text: "text-purple-400" },
  green: { border: "border-t-green-500/50", text: "text-green-400" },
};

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-24 bg-severant-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">
            Infraestructura
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tecnología Avanzada
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Construido sobre una arquitectura diseñada para la privacidad, la velocidad y la precisión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 rounded-xl border-t-2 ${colors.border}`}
              >
                <div className={`mb-4 ${colors.text}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10" />
    </section>
  );
}
