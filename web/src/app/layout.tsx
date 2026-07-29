import type { Metadata } from "next";
import { Inter, Manrope, Montserrat, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoscript,
} from "@/components/analytics/GoogleTagManager";
import { RouteChangeTracker } from "@/components/analytics/RouteChangeTracker";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "JS AR Central | Instalação e Manutenção de Ar-Condicionado",
  description:
    "Instalação e manutenção de ar-condicionado credenciada pelos principais fabricantes. Rio de Janeiro e Baixada Fluminense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <GoogleTagManagerScript />
        <GoogleTagManagerNoscript />
        <RouteChangeTracker />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
