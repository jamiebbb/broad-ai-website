import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Broad.AI - AI Consultancy & Automation",
  description: "Tech-first AI consultancy specializing in compliance automation, RNS feeds, web scraping, chatbots, and intelligent business solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <MouseTracker />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
