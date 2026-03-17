import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import SocialBar from "@/app/components/SocialBar";
import Curtain from "@/app/components/Curtain"; 

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const metadata = {
  title: "Maureen — Data Analyst",
  description: "Portfolio",
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-[#0f172a] text-white antialiased selection:bg-cyan-400/20 min-h-screen overflow-x-hidden">
        <Curtain />
        <SocialBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}