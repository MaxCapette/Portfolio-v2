import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max's Portfolio | Développeur Web Fullstack",
  description: "Portfolio de Maxime Capette, développeur web fullstack passionné par la création d'applications web complètes et performantes.",
  keywords: "développeur web, fullstack, portfolio, javascript, react, nextjs, node.js",
  authors: [{ name: "Maxime Capette" }],
  creator: "Maxime Capette",
  publisher: "Maxime Capette",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votredomaine.com",
    title: "Max's Portfolio | Développeur Web Fullstack",
    description: "Portfolio de Maxime Capette, développeur web fullstack passionné par la création d'applications web complètes et performantes.",
    siteName: "Portfolio de Maxime Capette",
    images: [
      {
        url: "/about2.jpeg",
        width: 800,
        height: 600,
        alt: "Max Capette - Développeur Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max's Portfolio | Développeur Web Fullstack",
    description: "Portfolio de Maxime Capette, développeur web fullstack passionné par la création d'applications web complètes et performantes.",
    images: ["/about2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
