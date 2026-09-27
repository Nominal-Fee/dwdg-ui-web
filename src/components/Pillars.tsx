"use client";

import React, { useState } from "react";
import { PILLARS_DATA } from "@/data/dwdgData";
import {
  Compass,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  CheckCircle,
  Quote,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { PillarItem } from "@/types";

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = useState<string>(PILLARS_DATA[0].id);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-emerald-700" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-teal-600" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  const activePillarObj = PILLARS_DATA.find((p) => p.id === selectedPillar) || PILLARS_DATA[0];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Organizational DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 4 Core Pillars of DWDG UI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our comprehensive curriculum seamlessly fuses commercial strategy, ethical leadership,
            peer empowerment, and sustainable social impact.
          </p>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PILLARS_DATA.map((pillar: PillarItem) => {
            const isSelected = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border relative overflow-hidden group ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20 -translate-y-1"
                    : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {/* Decorative subtle corner bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-all ${
                    isSelected ? "bg-emerald-600" : "bg-transparent group-hover:bg-slate-200"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-emerald-50" : "bg-slate-100 group-hover:bg-emerald-50/60"
                      }`}
                    >
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className={isSelected ? "text-emerald-700 font-semibold" : ""}>
                    {isSelected ? "Currently Viewing" : "Click to Explore Focus"}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "translate-x-0.5 text-emerald-600" : "text-slate-400"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Focus Deep-Dive for the Selected Pillar */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/50">
                  Focus Deep-Dive
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-sm font-semibold text-slate-700">
                  {activePillarObj.title} Curriculum
                </span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                {activePillarObj.subtitle}
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activePillarObj.description}
              </p>

              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Core Deliverables & Methodologies:
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activePillarObj.keyOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right quote card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-7 rounded-xl shadow-inner relative flex flex-col justify-between min-h-[220px]">
              <Quote className="w-8 h-8 text-emerald-400/40 mb-3" />
              <p className="text-sm sm:text-base font-serif italic text-emerald-50 leading-relaxed mb-6">
                &ldquo;{activePillarObj.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300/80">
                <span className="font-semibold text-white">DWDG UI Ethos</span>
                <span>Universitas Indonesia Chapter</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
