import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "TUPS Pro - Master Rhythm in 15 Minutes Daily",
  description: "Professional rhythm training app with 4 progressive exercises. Develop unshakeable timing and rhythm skills. Coming January 2025.",
  keywords: ["rhythm training", "music practice", "metronome", "timing", "musician", "tuplets", "polyrhythm"],
  authors: [{ name: "TUPS Pro Team" }],
  creator: "TUPS Pro",
  publisher: "TUPS Pro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TUPS Pro - Master Rhythm in 15 Minutes Daily",
    description: "Professional rhythm training app with 4 progressive exercises. Develop unshakeable timing and rhythm skills.",
    url: "https://tupspro.com",
    siteName: "TUPS Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TUPS Pro - Master Rhythm in 15 Minutes Daily",
    description: "Professional rhythm training app with 4 progressive exercises. Develop unshakeable timing and rhythm skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}