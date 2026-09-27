"use client";

import React, { useState } from "react";
import {
  Building2,
  Mail,
  Send,
  CheckCircle,
  Clock,
  Award,
  Users2,
  FileCheck2,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  MessageSquare,
  FileText,
} from "lucide-react";
import { PartnershipInquiry } from "@/types";

export default function Partnership() {
  const [formData, setFormData] = useState<PartnershipInquiry>({
    companyName: "",
    contactPerson: "",
    email: "",
    partnershipType: "DWDG Conference / CCR Host",
    timeline: "Q1 2027 (Mar - Apr)",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PartnershipInquiry, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const partnershipOptions = [
    "DWDG Conference / CCR Host (Q1)",
    "ShARE IBCC Sponsorship (Title / Platinum / Gold)",
    "Start-Up Projects (SUP) Pro-Bono Client",
    "DWDG Insights (SP / ENP) Co-Research & Media Partner",
    "Executive Guest Speaker / Masterclass Host",
    "Bespoke Institutional Collaboration",
  ];

  const timelineOptions = [
    "Immediate (Within 1 Month)",
    "Q4 2026 (ShARE IBCC Launch)",
    "Q1 2027 (DWDG Conference / CCR)",
    "Q2 2027 (Start-Up Projects SUP Cycle)",
    "Exploratory / Flexible",
  ];

  const validate = () => {
    const errs: Partial<Record<keyof PartnershipInquiry, string>> = {};

    if (!formData.companyName.trim()) {
      errs.companyName = "Company or organization name is required.";
    }
    if (!formData.contactPerson.trim()) {
      errs.contactPerson = "Contact person name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid work email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share details or objectives of your collaboration inquiry.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission to institutional backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`DWDG-PTR-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      partnershipType: "DWDG Conference / CCR Host",
      timeline: "Q1 2027 (Mar - Apr)",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="partnership" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate & Media Inbound</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner With DWDG Universitas Indonesia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Collaborate with Indonesia’s premier student management consultants under Stewardship 26/27
            for DWDG Conference immersion, ShARE IBCC sponsorship, and pro-bono growth advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Partner + Direct External Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 sm:p-7 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Industry Leaders Collaborate With Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Top-Tier Talent Pipeline</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Priority access to pre-vetted analysts trained in structured thinking, ready for
                      internships and graduate roles at MBB, big tech, and conglomerates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">ShARE IBCC Global Sponsorship</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Sponsor Southeast Asia’s most competitive collegiate case championship (230+ target teams)
                      and pose real business dilemmas to elite international delegates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Pro-Bono Advisory for Startups (SUP)</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Commission an 8-week strategic study by student teams guided by alumni consultants to
                      accelerate unit economics, ESG integration, and go-to-market.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement (Marcomm OKR: Response within 2 working days) */}
              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center gap-3 text-xs text-emerald-400 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Marcomm Commitment: Response within 2 working days.</span>
              </div>
            </div>

            {/* Direct Official Fast-Track Options (Google Form & WhatsApp Community) */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-950/70 to-slate-900 border border-emerald-700/40 p-6 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                Direct External Channels
              </span>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer an expedited route or direct chat with our external relations team? Use our official
                Google Form intake or connect via WhatsApp Business Community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Official Partnership Google Form Link */}
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500 text-xs font-semibold text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>Partnership G-Form</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* WhatsApp Business Community */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-600/40 text-xs font-semibold text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-300" />
                    <span>WhatsApp Community</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Direct Email */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>partnership@dwdgui.org</span>
                </span>
                <span className="text-[11px] text-slate-500">Kampus UI Depok</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inbound Partnership Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6 sm:p-8 shadow-xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                    <div>
                      <h3 className="text-lg font-bold text-white">Inbound Partnership Inquiry</h3>
                      <p className="text-xs text-slate-400">
                        Submit collaboration scope for corporate, media, or competition ties.
                      </p>
                    </div>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-600/30 px-2 py-0.5 rounded font-mono">
                      Stewardship 26/27
                    </span>
                  </div>

                  {/* Company Name & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Organization Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. McKinsey & Co / GoTo / Tech In Asia"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                          errors.companyName ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                        }`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactPerson" className="block text-xs font-semibold text-slate-300 mb-1">
                        Contact Person Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Sarah Pratama (Head of Talent)"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                          errors.contactPerson ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                        }`}
                      />
                      {errors.contactPerson && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.contactPerson}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Work Email & Estimated Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Corporate / Work Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.pratama@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                          errors.email ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Timeline / Cohort
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Partnership Type Dropdown */}
                  <div>
                    <label htmlFor="partnershipType" className="block text-xs font-semibold text-slate-300 mb-1">
                      Partnership Type <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="partnershipType"
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {partnershipOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Collaboration Scope & Objectives <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your partnership vision, intended audience, key milestones, or specific needs..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                        errors.message ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-white" />
                          <span>Transmitting Inquiry to DWDG Secretariat...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Collaboration Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Response within 2 working days via the DWDG UI External Relations Board.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-8 px-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                    Reference: {referenceId}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-2">
                    Partnership Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.contactPerson}</strong>. Our
                    Vice President of External Relations & Strategic Partnerships will review your
                    inquiry on behalf of <strong className="text-white">{formData.companyName}</strong> and
                    respond to <span className="text-emerald-300">{formData.email}</span> within 2 working days.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-left text-xs space-y-1.5 max-w-md mx-auto mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Collaboration Type:</span>
                      <span className="text-white font-medium">{formData.partnershipType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Timeline:</span>
                      <span className="text-white font-medium">{formData.timeline}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
