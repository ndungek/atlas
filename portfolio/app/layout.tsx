import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

import SocialBar from "@/app/components/SocialBar";

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
        <SocialBar />
        {children}
      </body>
    </html>
  );
}
