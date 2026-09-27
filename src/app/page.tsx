import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeritageBanner from "@/components/HeritageBanner";
import Pillars from "@/components/Pillars";
import Programs from "@/components/Programs";
import Partnership from "@/components/Partnership";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Navbar */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* Brand Heritage: ShARE UI to DWDG UI */}
        <HeritageBanner />

        {/* 3. 4 Core Pillars Section */}
        <Pillars />

        {/* 4. Programs Showcase (CCR, SIBCC, Jade Case, DWDG Common, SUP) */}
        <Programs />

        {/* 5. Inbound Partnership Section */}
        <Partnership />

        {/* 6. Insights Section */}
        <Insights />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
