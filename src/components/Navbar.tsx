"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Severant Logo"
                className="w-8 h-8 object-contain"
              />
              Severant
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("workflow")}
                className="hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black hover:bg-blue-50 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer"
              >
                Agendar Demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("workflow")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
              >
                Agendar Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
