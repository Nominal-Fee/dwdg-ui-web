"use client";

import React from "react";
import {
  ArrowUp,
  Mail,
  MapPin,
  ExternalLink,
  Radio,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Organization Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white font-extrabold text-sm shadow-md">
                DW
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block">
                  DWDG UI
                </span>
                <span className="text-[11px] text-slate-400">
                  Do Well Do Good Universitas Indonesia
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Universitas Indonesia’s premier student-led management consulting and impact
              organization (formerly ShARE UI). Operating under Stewardship 26/27, empowering
              multidisciplinary future leaders to excel commercially and drive sustainable social value.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pusat Kegiatan Mahasiswa, Kampus UI Depok, Jawa Barat 16424</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href="mailto:partnership@dwdgui.org"
                  className="hover:text-emerald-400 transition-colors"
                >
                  partnership@dwdgui.org
                </a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2 flex items-center gap-3">
              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com/company/dwdg-ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8Z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com/dwdgui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium Publications"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
              >
                <BookOpen className="w-4 h-4" />
              </a>

              {/* Spotify Podcast */}
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Podcast DWDG Talks"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors text-slate-300"
              >
                <Radio className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Pillars */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Core Pillars
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Management Consulting
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Education & Upskilling
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Do Well Do Good (ESG)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>ShARE UI Heritage</span>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Programs */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Flagship Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Company Campus Roadshow (CCR - Q1)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  ShARE IBCC International Case Competition
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Jade Case Program (4-Week Community)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  DWDG Common Knowledge Hub
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Start-Up Projects (SUP Pro-Bono)
                </a>
              </li>
            </ul>
          </div>

          {/* Inbound & Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Engagement & Inbound
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#partnership" className="hover:text-emerald-400 transition-colors">
                  Corporate Partnership Inquiry
                </a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-emerald-400 transition-colors">
                  ShARE IBCC Sponsorship
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-emerald-400 transition-colors">
                  DWDG Insights (SP & ENP)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Analyst Recruitment Portal
                </a>
              </li>
              <li>
                <a
                  href="https://ui.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Universitas Indonesia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 DWDG UI (Do Well Do Good Universitas Indonesia, formerly ShARE UI) — Stewardship 26/27. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Code of Ethics
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
