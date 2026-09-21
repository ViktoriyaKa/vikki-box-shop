import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Vikki Box Shop — маленькие радости для твоего дня",
    template: "%s · Vikki Box Shop",
  },
  description:
    "Подарочные боксы ручной сборки: канцелярия, котики, сюрпризы и тёплые наборы без повода.",
  icons: {
    icon: "/brand/favicon-256.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
