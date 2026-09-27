"use client";

import React, { useState } from "react";
import { INSIGHTS_DATA } from "@/data/dwdgData";
import { InsightItem, ResearchStream } from "@/types";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Download,
  X,
  Sparkles,
  Layers,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function Insights() {
  const [selectedStream, setSelectedStream] = useState<string>("All Streams");
  const [activeInsight, setActiveInsight] = useState<InsightItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const streams: (string | ResearchStream)[] = [
    "All Streams",
    "Climate Change",
    "Circular Economy",
    "Purpose-Led Company",
    "Inclusive Products",
    "Inclusive Jobs",
  ];

  const filteredInsights =
    selectedStream === "All Streams"
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedStream);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <section id="insights" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>SP & ENP Research Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              DWDG Insights: 5 Core Curriculum Streams
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Research articles curated by Junior Members and Expertise Network Managers (ENMs)
              based on their Strategic Presentations (SP) and Expertise Network Projects (ENP),
              tackling Indonesia’s most critical sustainability and economic frontiers.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Stewardship 26/27 Curriculum</span>
            </span>
          </div>
        </div>

        {/* Filter Pills for the 5 Streams */}
        <div className="flex flex-wrap gap-2 mb-8">
          {streams.map((stream) => (
            <button
              key={stream}
              type="button"
              onClick={() => setSelectedStream(stream)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedStream === stream
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200"
              }`}
            >
              {stream}
            </button>
          ))}
        </div>

        {/* Insights Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((article) => (
            <div
              key={article.id}
              className={`rounded-2xl border bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group ${
                article.featured
                  ? "border-emerald-400 ring-1 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[10px]">
                    {article.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Curriculum Type Badge */}
                <div className="mb-2">
                  <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wide">
                    {article.curriculumType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5 leading-snug">
                  {article.title}
                </h3>

                {/* Authors */}
                <p className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Curated by {article.authors}</span>
                </p>

                {/* Abstract */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {article.abstract}
                </p>

                {/* Key takeaway teaser */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Research Finding:
                  </span>
                  <p className="text-xs text-slate-700 italic line-clamp-2">
                    &ldquo;{article.keyTakeaways[0]}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{article.date}</span>
                <button
                  type="button"
                  onClick={() => setActiveInsight(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Insight Preview Modal */}
        {activeInsight && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              
              <button
                type="button"
                onClick={() => setActiveInsight(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close insight preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                  {activeInsight.category}
                </span>
                <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                  {activeInsight.curriculumType}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">{activeInsight.readTime}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{activeInsight.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                {activeInsight.title}
              </h3>

              <p className="text-xs text-emerald-800 font-semibold mb-5">
                Research Authors: {activeInsight.authors} • DWDG Universitas Indonesia
              </p>

              <div className="prose prose-sm text-slate-600 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Executive Abstract & Context
                </h4>
                <p className="text-sm leading-relaxed mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {activeInsight.abstract}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Strategic Findings & Practical Implications
                </h4>
                <div className="space-y-2.5">
                  {activeInsight.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download simulated state */}
              {downloadSuccess && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 mb-4 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Research Briefing document generated & downloaded successfully.</span>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-mono">
                  Curriculum ID: DWDG-2627-{activeInsight.id.replace("insight-", "").toUpperCase()}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Briefing</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveInsight(null)}
                    className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
