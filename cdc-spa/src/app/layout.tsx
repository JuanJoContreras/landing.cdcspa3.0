import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDC SPA – Ventanas de PVC | Cierres de Cristal",
  description:
    "Fabricación e instalación de ventanas de PVC de alta calidad en Chile. Aislación térmica superior, variedad de colores y proyectos a medida. Cotiza gratis.",
  keywords: "ventanas PVC, cierres de cristal, ventanas Chile, aislación térmica, CDC SPA",
  openGraph: {
    title: "CDC SPA – Ventanas de PVC",
    description: "Fabricación e instalación de ventanas de PVC de alta calidad en Chile.",
    url: "https://cdcspa.cl",
    siteName: "CDC SPA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
