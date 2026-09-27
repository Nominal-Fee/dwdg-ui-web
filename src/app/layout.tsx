import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DWDG UI — Do Well Do Good Universitas Indonesia | Stewardship 26/27",
  description:
    "Official portal of DWDG UI (Do Well Do Good Universitas Indonesia, formerly ShARE UI) — Stewardship 26/27. Empowering future leaders through management consulting, strategic education, ShARE IBCC, and social impact initiatives.",
  keywords: [
    "DWDG UI",
    "ShARE UI",
    "Universitas Indonesia",
    "Stewardship 26/27",
    "Management Consulting",
    "ShARE IBCC",
    "Company Campus Roadshow",
    "DWDG Conference",
    "Do Well Do Good",
    "Jade Case Program",
    "SUP",
    "DWDG Common",
  ],
  authors: [{ name: "DWDG UI External Relations" }],
  openGraph: {
    title: "DWDG UI — Empowering Future Leaders through Consulting and Impact",
    description:
      "DWDG UI (Do Well Do Good Universitas Indonesia, formerly ShARE UI) — Stewardship 26/27.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
