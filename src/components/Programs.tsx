"use client";

import React, { useState } from "react";
import { PROGRAMS_DATA } from "@/data/dwdgData";
import { ProgramItem } from "@/types";
import {
  Calendar,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  Building,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export default function Programs() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  const categories = [
    "All",
    "Corporate Tour",
    "Case Competition",
    "Training Community",
    "Open Knowledge",
    "Pro-Bono Advisory",
  ];

  const filteredPrograms =
    selectedFilter === "All"
      ? PROGRAMS_DATA
      : PROGRAMS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/50">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Stewardship 26/27 Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Flagship Programs & Initiatives
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Official program portfolio under the DWDG UI 26/27 Grand Design—spanning international
              case championships, pro-bono client advisory, training communities, and corporate conferences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  selectedFilter === cat
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-600/5 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative"
            >
              <div>
                {/* Header Badge & Program Code */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {program.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {program.code}
                  </span>
                </div>

                {/* Program Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                  {program.title}
                </h3>

                {/* Brand Equity Note for ShARE IBCC */}
                {program.id === "sibcc" && (
                  <div className="mb-3 px-2.5 py-1 rounded bg-amber-50 border border-amber-200/70 text-[11px] font-medium text-amber-800 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Brand Equity: Retaining ShARE for IBCC & OverShARE</span>
                  </div>
                )}

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {program.shortDesc}
                </p>

                {/* Key Stats Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  {program.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {st.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {program.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate max-w-[170px]">{program.timeline}</span>
                </span>

                <button
                  type="button"
                  onClick={() => setActiveModalProgram(program)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors shrink-0"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to Partnership / Inbound */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Interested in sponsoring ShARE IBCC or joining the DWDG Conference (CCR)?
              </h4>
              <p className="text-xs text-slate-600">
                We invite corporate and institutional partners to engage with top talents during our Q1 Conference & winter competition cycles.
              </p>
            </div>
          </div>
          <a
            href="#partnership"
            className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            Inquire for Collaboration →
          </a>
        </div>

      </div>

      {/* Program Deep-Dive Modal */}
      {activeModalProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {activeModalProgram.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeModalProgram.code}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {activeModalProgram.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalProgram.fullDesc}
            </p>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                  Target Audience
                </span>
                <span className="text-slate-800 font-medium">{activeModalProgram.audience}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                  Execution Timeline
                </span>
                <span className="text-slate-800 font-medium">{activeModalProgram.timeline}</span>
              </div>
            </div>

            {/* Key Program Highlights */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Core Program Highlights & Specifications
            </h4>
            <div className="space-y-2.5 mb-6">
              {activeModalProgram.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>

            {/* Past Corporate / Stakeholder Network */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Sample Partners & Evaluators
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProgram.partners.map((partner, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons inside modal */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Close
              </button>
              <a
                href="#partnership"
                onClick={() => setActiveModalProgram(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>{activeModalProgram.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
