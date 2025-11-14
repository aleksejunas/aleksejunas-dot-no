import type { Metadata } from "next";
import { Geist, Geist_Mono, Arapey } from "next/font/google";
import HomeLink from "@/components/navigation/HomeLink";
import "./globals.css";
import PunkThemeToggleButton from "@/components/buttons/PunkThemeToggleButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arapey = Arapey({
  variable: "--font-arapey",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "aleksejunas-dot-no",
  description: "Rewritten by Rolf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInit = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        if (t && t !== 'system') {
          document.documentElement.setAttribute('data-style', t); 
          else {
            document.documentElement.removeAttribute('data-style'); // Let system win
          }
        } catch (__) {}
      }
    });
  `;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arapey.variable} antialiased`}
      >
        <main className="relative">
          <HomeLink />
          {children}
        </main>
        <PunkThemeToggleButton />
      </body>
    </html>
  );
}
