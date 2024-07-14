import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fredoka } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"], weight: "400" }); 
export const metadata: Metadata = {
  title: "Max's Portfolio",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
