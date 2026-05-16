import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Severant - IA y Desarrollo Web para tu Negocio",
  description:
    "Severant crea agentes de IA personalizados y desarrolla aplicaciones web para empresas. Automatiza procesos, desarrolla sitios web y mejora la productividad con soluciones tecnológicas adaptadas a tu negocio.",
  keywords:
    "agentes IA, desarrollo web, aplicaciones personalizadas, inteligencia artificial empresarial, automatización procesos, chatbots personalizados, desarrollo sitios web, machine learning, análisis datos",
  openGraph: {
    title: "Severant - IA y Desarrollo Web para tu Negocio",
    description:
      "Desarrollamos agentes de IA personalizados y aplicaciones web que automatizan procesos y transforman tu empresa.",
    url: "https://severant.cl",
    siteName: "Severant",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
