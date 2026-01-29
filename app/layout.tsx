import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Anton } from "next/font/google"; // Import new fonts
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Handwritten font for "Danke..."
const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
});

// Block font for "#StadtlichtLemgo"
const anton = Anton({
  variable: "--font-block",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stadtlicht Lemgo - Farewell",
  description: "Danke für eine tolle Zeit! Besucht uns im neuen Luisa Restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${anton.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>

    </html>
  );
}
