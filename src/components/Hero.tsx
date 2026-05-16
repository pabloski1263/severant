"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-gradient-animated">IA y Desarrollo Web</span>
          <div className="text-4xl md:text-5xl text-white mt-2">
            <span className="text-white-glow">para tu Negocio</span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
        >
          Innovación tecnológica: agentes de IA personalizados, aplicaciones web y sitios web que
          transforman tu empresa
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 md:text-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:scale-105 cursor-pointer"
          >
            Comenzar
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="px-8 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 hover:border-gray-600 md:text-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            Explorar Soluciones
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
    </section>
  );
}
