import type { Metadata } from "next";

export const siteName = "Carricabio";
export const title = "Tu fondo de inversión de confianza";
export const description =
  "Un fondo de inversión versátil: elige entre estabilidad, volatilidad o equilibrio y maximiza tus beneficios según tu perfil de riesgo.";
export const keywords = [
  "fondo de inversión",
  "crypto",
  "criptomonedas",
  "inversión",
  "dinero",
  "finanzas",
];

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: `${title} | ${siteName}`,
  },
  description,
  keywords,
  creator: "Martín Stanicio",
  generator: "Next.js",
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es",
    url: "/",
  },
};
