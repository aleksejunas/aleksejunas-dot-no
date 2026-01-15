import type { Metadata } from "next";
import { Geist, Geist_Mono, Arapey } from "next/font/google";
import HomeLink from "@/components/navigation/HomeLink";
import "./globals.css";
import PunkThemeToggleButton from "@/components/buttons/PunkThemeToggleButton";
import AuthStatusDot from "@/components/navigation/AuthStatusDot";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arapey.variable} antialiased`}
      >
        <main className="relative">
          <div className="absolute top-6 right-6 z-40 flex items-center gap-4">
            <HomeLink />
          </div>
          {children}
        </main>
        <div className="fixed bottom-4 left-4">
          <PunkThemeToggleButton />
          <AuthStatusDot />
        </div>
      </body>
    </html>
  );
}
