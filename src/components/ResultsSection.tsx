import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#30312e] text-[#f2f1ec] py-24 lg:py-32 px-6 lg:px-12 border-b border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-label-caps text-label-caps text-[#bdc8ff] uppercase tracking-[0.16em] block">
              AUDITED SCHOLASTIC MERIT
            </span>
            <h2 className="font-headline-xl text-headline-xl text-white">
              Results That Speak With Precision.
            </h2>
          </div>
          <p className="font-body-md text-[#e0e2ec] max-w-md">
            We publish verifiable roll numbers and audited percentiles. No composite claims. No misattributed rank acquisitions.
          </p>
        </div>

        {/* Stat Highlights in Dark Palette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#383f4d]/40 backdrop-blur-sm border border-white/[0.08] space-y-2">
            <p className="font-stat-numeral text-5xl font-light text-[#bdc8ff] tabular-nums">
              99.82
            </p>
            <p className="font-label-ui text-label-ui text-white">Highest JEE Advanced Percentile</p>
            <p className="font-body-sm text-xs text-[#e0e2ec]">Classroom Cohort 2024–2025 Regular Scholar</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#383f4d]/40 backdrop-blur-sm border border-white/[0.08] space-y-2">
            <p className="font-stat-numeral text-5xl font-light text-[#bdc8ff] tabular-nums">
              710<span className="text-2xl text-[#e0e2ec]">/720</span>
            </p>
            <p className="font-label-ui text-label-ui text-white">Peak NEET-UG Audited Score</p>
            <p className="font-body-sm text-xs text-[#e0e2ec]">AIIMS New Delhi Admission Register</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#383f4d]/40 backdrop-blur-sm border border-white/[0.08] space-y-2">
            <p className="font-stat-numeral text-5xl font-light text-[#bdc8ff] tabular-nums">
              98.6%
            </p>
            <p className="font-label-ui text-label-ui text-white">CBSE Class XII Highest Aggregation</p>
            <p className="font-body-sm text-xs text-[#e0e2ec]">100/100 Perfect Scores in Mathematics &amp; Physics</p>
          </div>
        </div>

        {/* Verified Student Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-4 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-lg text-white font-medium">Aarav Mehta</span>
              <span className="font-label-caps text-[10px] text-[#bdc8ff] uppercase font-bold tracking-wider">
                AIR 34 • IIT BOMBAY CS
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#e0e2ec] leading-relaxed">
              Roll No: PB-2024-JEE-081 • Two-Year Comprehensive Classroom Program.
            </p>
            <div className="text-[11px] font-label-caps text-[#e0e2ec]/60 tracking-wider flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <span>REGISTER AUDITED: MAY 2025</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-4 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-lg text-white font-medium">Shreya Kulkarni</span>
              <span className="font-label-caps text-[10px] text-[#bdc8ff] uppercase font-bold tracking-wider">
                AIR 78 • AIIMS NEW DELHI
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#e0e2ec] leading-relaxed">
              Roll No: PB-2024-NEET-114 • Two-Year Residential Medical Cohort.
            </p>
            <div className="text-[11px] font-label-caps text-[#e0e2ec]/60 tracking-wider flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <span>REGISTER AUDITED: JUNE 2025</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-4 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-lg text-white font-medium">Rohan Deshmukh</span>
              <span className="font-label-caps text-[10px] text-[#bdc8ff] uppercase font-bold tracking-wider">
                AIR 142 • IIT MADRAS EE
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#e0e2ec] leading-relaxed">
              Roll No: PB-2024-JEE-029 • Intensive Rank Refinement Pod.
            </p>
            <div className="text-[11px] font-label-caps text-[#e0e2ec]/60 tracking-wider flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <span>REGISTER AUDITED: MAY 2025</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 text-center">
          <p className="font-body-sm text-xs text-[#e0e2ec] italic">
            Every candidate listed completed 100% of their test-prep physically on our campuses. Statutory inspection records available at Richmond Road campus front desk.
          </p>
        </div>

      </div>
    </section>
  );
};
