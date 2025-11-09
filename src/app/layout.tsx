import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { Header } from "@/components/features/Header/Header";
import { Providers } from "./providers";
import { AiChat } from "@/components/features/AiChat";
import { Footer } from "@/components/features/Footer";

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
    <html lang="ru" className="font-inter">
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
