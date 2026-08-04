import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Robiya Olimjonova — Data Scientist",
  description: "Data Scientist | Data Analyst | AI/ML Engineer — Tashkent, Uzbekistan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body text-text0`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
