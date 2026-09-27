"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pillars", href: "#pillars" },
    { name: "Programs", href: "#programs" },
    { name: "Insights", href: "#insights" },
    { name: "Partnership", href: "#partnership" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Placeholder & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
            aria-label="DWDG UI Home"
          >
            {/* Custom geometric monogram logo */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-sm tracking-tighter">DW</span>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-emerald-950"></span>
              </div>
            </div>
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  DWDG UI
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  Univ. Indonesia
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Do Well Do Good <span className="text-slate-400">• formerly ShARE UI</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#about"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-md transition-colors"
            >
              Heritage
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#partnership"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 transition-colors"
            >
              Corporate Inbound
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200"
            >
              <span>Explore Programs</span>
              <ChevronRight className="w-4 h-4 text-emerald-100" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#programs"
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg"
            >
              Programs
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              Heritage & Story
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-sm"
            >
              <span>Explore All Programs</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#partnership"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
            >
              <span>Corporate Partnership Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
          
          <div className="mt-4 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Universitas Indonesia • Former ShARE UI Chapter</span>
          </div>
        </div>
      )}
    </header>
  );
}
