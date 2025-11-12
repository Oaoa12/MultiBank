import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { Header } from "@/components/features/Header/Header";
import { Providers } from "./providers";
import { AiChat } from "@/components/features/AiChat";
import { Footer } from "@/components/features/Footer";
import { AdsModal } from "@/components/features/Ads";

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
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
          <AiChat />
          <AdsModal />
        </Providers>
      </body>
    </html>
  );
}
