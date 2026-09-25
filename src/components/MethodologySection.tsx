import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: '01',
      title: 'UNDERSTAND',
      summary: 'First-principles derivation. Zero formula black-boxes. Scholars observe how classical equations were forged.',
      clearance: 'STAGE CLEARANCE: ORAL VIVA',
      details: 'Scholars do not memorize formulas before proving them from foundational postulates. Weekly 15-minute viva checkpoints ensure conceptual fidelity before practical problem application begins.',
    },
    {
      num: '02',
      title: 'PRACTICE',
      summary: 'Graded difficulty modules: Fundamental → Multi-Concept → Non-Standard. Eliminates superficial pattern-matching.',
      clearance: 'MINIMUM 120 PROBS/TOPIC',
      details: 'Graduated problem sets structured into 3 discrete difficulty bands. Questions mix concepts across chapters (e.g. Electrodynamics combined with Simple Harmonic Motion).',
    },
    {
      num: '03',
      title: 'TEST',
      summary: 'High-fidelity simulated conditions. Exact NTA/JEE interface with time pressure, negative marking, and surprise sequencing.',
      clearance: 'BI-WEEKLY 3-HR RIGOR',
      details: 'Executed in our on-campus Simulation Labs under strict computer-based testing conditions that precisely simulate server latency, exam anxiety, and question randomization.',
    },
    {
      num: '04',
      title: 'ANALYSE',
      summary: 'Automated cognitive error classification: Was it calculation, conceptual misinterpretation, or uncalibrated rushing?',
      clearance: 'TELEMETRY DIAGNOSTIC',
      details: 'Our algorithm categorizes every wrong response into one of four error vectors: 1) Knowledge Void, 2) Reading Slip, 3) Algebraic Hazard, or 4) Time-Pressure Collapse.',
    },
    {
      num: '05',
      title: 'IMPROVE',
      summary: 'Targeted micro-remediation sets and 1-on-1 mentor intervention to seal cognitive leaks before moving forward.',
      clearance: 'ALCOVE SIGN-OFF REQUIRED',
      details: 'Scholars sit in physical faculty alcoves with senior teachers. A topic is never certified complete until customized error-remediation problem sets achieve 90%+ audited mastery.',
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="methodology">
      <div className="max-w-[1360px] mx-auto space-y-20">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
            THE PRABODHA PEDAGOGIC ARCHITECTURE
          </span>
          <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
            A System Built Around Unforgiving Progress.
          </h2>
          <p className="font-body-lg text-[#5c5e67]">
            Five non-negotiable stages executed systematically for every single core theorem.
          </p>
        </div>

        {/* 5-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 border ${
                  isSelected
                    ? 'bg-[#ffffff] border-[#0030a5] shadow-md ring-1 ring-[#0030a5]/20 -translate-y-1'
                    : 'bg-[#f5f3ee] hover:bg-[#f0eee9] border-[#1b1c19]/[0.06] shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-stat-numeral text-3xl font-light text-[#0030a5]">
                      {stage.num}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#0030a5]"></span>
                    )}
                  </div>

                  <h3 className="font-headline-sm text-lg text-[#1b1c19]">
                    {stage.title}
                  </h3>

                  <p className="font-body-sm text-xs text-[#5c5e67] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1b1c19]/[0.06]">
                  <span className="font-label-caps text-[9px] text-[#444655] uppercase block font-semibold">
                    {stage.clearance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Drawer for Selected Stage */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-[#1b1c19]/[0.08] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-label-caps uppercase text-[#0030a5]">
              <Sparkles className="w-4 h-4" />
              <span>STAGE {stages[activeStage].num} AUDITED EXECUTION PROTOCOL</span>
            </div>
            <h4 className="font-headline-sm text-xl text-[#1b1c19]">
              {stages[activeStage].title} — In-Depth Mechanics
            </h4>
            <p className="font-body-sm text-sm text-[#5c5e67] leading-relaxed">
              {stages[activeStage].details}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="font-label-caps text-xs text-[#5c5e67] uppercase">
              {stages[activeStage].clearance}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#dde1ff] text-[#0030a5] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
