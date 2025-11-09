import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { Header } from "@/components/features/Header/Header";
import { Providers } from "./providers";
import { AiChat } from "@/components/features/AiChat";
import { Footer } from "@/components/features/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Мультибанк",
  description: "Единый интерфейс для всех ваших банков",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
          <AiChat />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
