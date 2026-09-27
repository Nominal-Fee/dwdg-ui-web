"use client";

import React from "react";
import { ArrowRight, ShieldCheck, ChevronRight, TrendingUp, Award, Building2, Users } from "lucide-react";
import { PLACEMENT_LOGOS } from "@/data/dwdgData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-slate-50/30 to-white">
      {/* Background Decorative Mesh & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none hero-glow z-0" />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Verified Chapter Branding */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200 shadow-xs mb-6 text-xs sm:text-sm font-medium text-emerald-900 hover:border-emerald-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-950">
              DWDG UI (Do Well Do Good Universitas Indonesia, formerly ShARE UI)
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-semibold">Stewardship 26/27</span>
          </div>

          {/* Main Direct Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Empowering Future Leaders through{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
              Consulting and Impact
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Universitas Indonesia’s premier student-led management consulting and social impact
            organization. Under Stewardship 26/27, we unite rigorous strategic problem solving with
            real-world impact initiatives to empower multidisciplinary university talents and drive
            sustainable value across Indonesia.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-16">
            <a
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Flagship Programs</span>
              <ArrowRight className="w-4 h-4 text-emerald-100" />
            </a>

            <a
              href="#partnership"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/90 rounded-xl shadow-xs hover:border-slate-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Building2 className="w-4 h-4 text-slate-500" />
              <span>Partner With Us</span>
            </a>

            <a
              href="#insights"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              <span>Read DWDG Insights</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grounded & Realistic Impact Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-4 rounded-xl bg-white/80 border border-slate-200/90 shadow-xs hover:border-emerald-200 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-emerald-600" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900">Alumni Placement</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700">Top-Tier Trajectory</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Active analysts placed across MBB, Tier-1 Tech & MNCs</p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-slate-200/90 shadow-xs hover:border-emerald-200 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900">Stewardship</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700">26/27 Grand Design</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Institutional governance, SP & ENP curriculum</p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-slate-200/90 shadow-xs hover:border-emerald-200 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900">Case Excellence</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700">Delegates & Host</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Organizers of ShARE IBCC & Jade Case Program</p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-slate-200/90 shadow-xs hover:border-emerald-200 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900">100% Pro-Bono</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700">Social Impact</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Start-Up Projects & community masterclasses</p>
            </div>
          </div>
        </div>

        {/* Corporate Trust & Destination Brands Ticker */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Alumni Career Trajectories & Corporate Collaboration Partners
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {PLACEMENT_LOGOS.map((item) => (
              <div
                key={item.name}
                className="group px-3 py-1.5 rounded-lg bg-slate-50/80 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-200 transition-all flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-emerald-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                <span>{item.name}</span>
                <span className="text-[10px] text-slate-400 hidden lg:inline">({item.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
