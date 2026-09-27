"use client";

import React from "react";
import { Sparkles, ArrowRight, CheckCircle2, History, Award } from "lucide-react";

export default function HeritageBanner() {
  return (
    <section id="about" className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Context & Narrative */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <History className="w-3.5 h-3.5" />
                <span>Organizational Heritage & Rebranding Guidelines</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                DWDG UI (Do Well Do Good Universitas Indonesia, formerly ShARE UI) —{" "}
                <span className="text-emerald-400">Stewardship 26/27</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Under the official <strong className="text-white font-semibold">DWDG UI 26/27 Grand Design</strong>,
                our chapter consolidates its core organizational identity as <strong>DWDG UI</strong> while
                purposefully retaining the <strong>&ldquo;ShARE&rdquo;</strong> branding for flagship platforms like{" "}
                <strong className="text-emerald-300">ShARE IBCC</strong> and <strong>OverShARE</strong> to preserve
                decisive external brand equity among international delegations and global sponsors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Do Well (Commercial & Strategic Rigor)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Elite problem structuring, case competitions, and analyst placement into MBB and Tier-1 firms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Do Good (Social Impact & Research)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Pro-bono startup advisory (SUP), open education, and 5 research streams under SP and ENP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multidisciplinary Talent Profile */}
            <div className="lg:col-span-4 bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 justify-center lg:justify-start">
                <Award className="w-3.5 h-3.5" />
                <span>Multidisciplinary Talents</span>
              </span>
              <p className="text-lg font-bold text-white mt-1 mb-2">
                Diverse Faculties Across Universitas Indonesia
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Multidisciplinary talent representing diverse faculties across Universitas Indonesia,
                bridging economics, engineering, sciences, social disciplines, and medicine into high-performing
                problem-solving teams.
              </p>

              <a
                href="#pillars"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Discover our 4 Core Pillars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
