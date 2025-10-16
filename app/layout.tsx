import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WOSS ID — Identidad verificada y documentos seguros",
  description:
    "Verifica tu identidad y guarda documentos en un solo lugar. Empieza gratis con START o desbloquea todo con ONE.",
  metadataBase: new URL("https://woss.id"),
  openGraph: {
    title: "WOSS ID — Identidad verificada y documentos seguros",
    description:
      "Verifica tu identidad y guarda documentos en un solo lugar. Empieza gratis con START o desbloquea todo con ONE.",
    url: "https://woss.id",
    siteName: "WOSS ID",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Panel de WOSS ID mostrando identidad verificada y documentos seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOSS ID — Identidad verificada y documentos seguros",
    description: "Crea tu pasaporte digital y comparte con seguridad.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${outfit.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
