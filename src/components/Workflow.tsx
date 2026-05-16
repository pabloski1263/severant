"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Análisis y Diseño",
    description:
      "Evaluamos tus necesidades: agentes de IA, aplicaciones web, o sitios digitales. Diseñamos la solución tecnológica óptima para tu negocio.",
  },
  {
    number: 2,
    title: "Desarrollo",
    description:
      "Creamos agentes de IA personalizados, desarrollamos aplicaciones web modernas y construimos sitios responsivos optimizados para tu marca.",
  },
  {
    number: 3,
    title: "Despliegue y Soporte",
    description:
      "Lanzamos tu solución con hosting confiable, capacitación del equipo y soporte continuo para garantizar el éxito de tu proyecto.",
  },
];

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflow" className="py-24 border-t border-gray-800 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Implementación de Soluciones Tecnológicas
            </h2>
            <p className="text-gray-400 mb-6">
              Desarrollamos y desplegamos soluciones tecnológicas completas en tres fases optimizadas.
              Desde el análisis de necesidades hasta el lanzamiento de aplicaciones web y agentes de IA
              personalizados.
            </p>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className={`flex-shrink-0 h-10 w-10 rounded-full border ${
                      step.number === 1
                        ? "border-blue-500 text-blue-400"
                        : "border-gray-600 text-gray-400"
                    } flex items-center justify-center font-bold`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-gray-400 mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500 ml-2">Severant Dashboard</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-xs">
                    U
                  </div>
                  <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm text-gray-300 max-w-[80%]">
                    Analiza el informe financiero Q3 y compáralo con las proyecciones del año pasado.
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-cyan-600/20 flex items-center justify-center text-cyan-400 text-xs">
                    AI
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg rounded-tr-none p-3 text-sm text-gray-200 max-w-[90%]">
                    <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                      <CheckCircle className="w-3 h-3" /> Analizando 4 documentos...
                    </div>
                    <p>
                      Basado en el archivo <strong>&apos;Q3_Finance.pdf&apos;</strong>, los ingresos operativos
                      aumentaron un 12% respecto a las proyecciones de 2023. Sin embargo, los costos
                      operativos...
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-11">
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
