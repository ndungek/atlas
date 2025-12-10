import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

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

export const metadata = {
  title: "Maureen — Data Engineer",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-[#0f172a] text-gray-200 antialiased selection:bg-cyan-400/20">
        <Curtain />
        <SocialBar />
        {/* Global responsive wrapper */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}