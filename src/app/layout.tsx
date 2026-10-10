import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://powerise.co.ke"),
  title: {
    default: "Powerise Solutions: Intelligent IoT for a Connected Africa",
    template: "%s · Powerise Solutions"
  },
  description:
    "Powerise Solutions Limited designs and deploys IoT platforms for energy, generator, water, gas, cold-chain and smart-home applications across East Africa.",
  keywords: [
    "IoT Kenya",
    "Smart Home Nairobi",
    "Cold chain monitoring",
    "Energy monitoring",
    "Generator monitoring",
    "Powerise",
    "Smart meters",
    "Truck telematics"
  ],
  authors: [{ name: "Powerise Solutions Limited" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://powerise.co.ke",
    siteName: "Powerise Solutions",
    title: "Powerise Solutions: Intelligent IoT for a Connected Africa",
    description:
      "Energy, generator, water, gas, cold-chain and smart-home IoT, engineered for African conditions."
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerise Solutions: Intelligent IoT",
    description:
      "Energy, generator, water, gas, cold-chain and smart-home IoT, engineered for African conditions."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-ink-50 text-fog-100">
        <ScrollProgress />
        <Navbar />
        <main className="relative min-h-screen pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
