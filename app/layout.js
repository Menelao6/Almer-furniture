import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEO from "./components/SEO/SEO.js"
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  manifest: '/site.webmanifest',
  title: "Almer",
  description: "Almer - Punime Artizanale me Dru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SEO />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
