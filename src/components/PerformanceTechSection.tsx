import React, { useState } from 'react';
import { Zap, Brain, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

interface ScholarTelemetry {
  id: string;
  name: string;
  initials: string;
  batch: string;
  cycle: string;
  coverage: string;
  bars: {
    subject: string;
    percentage: number;
    color: string;
  }[];
  directive: {
    title: string;
    description: string;
    mentor: string;
  };
  metrics: {
    accuracy: string;
    avgTime: string;
    cycleStatus: string;
  };
}

const SCHOLAR_PROFILES: ScholarTelemetry[] = [
  {
    id: 'aarav',
    name: 'Aarav Mehta',
    initials: 'AM',
    batch: 'Batch P-Alpha (Engineering)',
    cycle: 'Diagnostic Cycle 04',
    coverage: '88%',
    bars: [
      { subject: 'Advanced Mechanics & Rigid Bodies', percentage: 94, color: 'bg-[#0030a5]' },
      { subject: 'Integral Calculus & Differential Equations', percentage: 90, color: 'bg-[#0030a5]' },
      { subject: 'Reaction Mechanisms (Electrophilic Substitution)', percentage: 82, color: 'bg-[#5c5e67]' },
    ],
    directive: {
      title: 'Target 12 Advanced Rotational Dynamics Problems before Thursday Simulated Mock.',
      description: 'Resolves 14-second hesitation in torque equilibrium equations on incline-plane collisions.',
      mentor: 'Intervention designated by Dr. Amit Sharma',
    },
    metrics: {
      accuracy: '91.2%',
      avgTime: '2m 14s',
      cycleStatus: 'On Track',
    },
  },
  {
    id: 'sneha',
    name: 'Sneha Patel',
    initials: 'SP',
    batch: 'Batch M-Apex (Medical)',
    cycle: 'Diagnostic Cycle 06',
    coverage: '92%',
    bars: [
      { subject: 'Human Physiology & Neurobiology', percentage: 96, color: 'bg-[#0030a5]' },
      { subject: 'Organic Chemistry & Biomolecules', percentage: 89, color: 'bg-[#0030a5]' },
      { subject: 'Ray Optics & Wave Dynamics', percentage: 84, color: 'bg-[#5c5e67]' },
    ],
    directive: {
      title: 'Complete 40 NCERT Micro-Line Recall drills on Endocrine Cascades.',
      description: 'Strengthens zero-hesitation response times for assertion-reason questions.',
      mentor: 'Intervention designated by Dr. Sunita Raman',
    },
    metrics: {
      accuracy: '94.8%',
      avgTime: '48s / bio-item',
      cycleStatus: 'Exceeding Benchmark',
    },
  },
];

export const PerformanceTechSection: React.FC = () => {
  const [selectedScholarIdx, setSelectedScholarIdx] = useState(0);
  const current = SCHOLAR_PROFILES[selectedScholarIdx];

  return (
    <section className="w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="performance-tech">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Copy (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-label-caps text-label-caps text-[#0030a5] uppercase tracking-[0.16em] block">
            PROPRIETARY EDTECH TELEMETRY
          </span>
          <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
            The Prabodha Cognitive Engine.
          </h2>
          <p className="font-body-lg text-[#5c5e67] leading-relaxed">
            High-performance preparation cannot rely on gut feeling. Every diagnostic test breaks down into cognitive vector mapping, isolating micro-weaknesses down to single reaction mechanisms.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#dde1ff] flex items-center justify-center text-[#0030a5] shrink-0 mt-1">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-[#1b1c19]">Speed-to-Accuracy Index</h4>
                <p className="font-body-sm text-xs text-[#5c5e67]">
                  Measures hesitation time per step in multi-concept physics setups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#dde1ff] flex items-center justify-center text-[#0030a5] shrink-0 mt-1">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-[#1b1c19]">Spaced Retention Alerts</h4>
                <p className="font-body-sm text-xs text-[#5c5e67]">
                  Automated reminders when memory decay is predicted for organic reagents.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Profile Switcher */}
          <div className="pt-2 flex items-center gap-2">
            <span className="text-xs font-label-caps text-[#5c5e67] uppercase">Simulate Profile:</span>
            {SCHOLAR_PROFILES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedScholarIdx(idx)}
                className={`px-3 py-1 text-xs rounded font-label-ui transition-all cursor-pointer ${
                  selectedScholarIdx === idx
                    ? 'bg-[#0030a5] text-white shadow-xs'
                    : 'bg-[#eae8e3] text-[#1b1c19] hover:bg-[#dedfe9]'
                }`}
              >
                {p.name.split(' ')[0]} ({p.id === 'aarav' ? 'JEE' : 'NEET'})
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive UI Simulation Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#fbf9f4] rounded-2xl p-6 lg:p-8 shadow-xl border border-[#1b1c19]/[0.08] space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c19]/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1746d1] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {current.initials}
                </div>
                <div>
                  <p className="font-label-ui text-label-ui text-[#1b1c19]">
                    Scholar: {current.name} ({current.batch})
                  </p>
                  <p className="font-body-sm text-xs text-[#5c5e67]">
                    {current.cycle} • Syllabus Coverage: {current.coverage}
                  </p>
                </div>
              </div>
              <span className="font-label-caps text-[11px] px-3 py-1 rounded bg-[#eae8e3] text-[#0030a5] font-bold tracking-wider">
                SYSTEM ACTIVE
              </span>
            </div>

            {/* Subject Mastery Progress Bars */}
            <div className="space-y-4">
              {current.bars.map((bar) => (
                <div key={bar.subject}>
                  <div className="flex justify-between font-label-ui text-xs mb-1.5">
                    <span className="text-[#1b1c19]">{bar.subject}</span>
                    <span className="text-[#0030a5] font-bold tabular-nums">{bar.percentage}% Mastery</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f0eee9] overflow-hidden border border-[#1b1c19]/[0.04]">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${bar.color}`}
                      style={{ width: `${bar.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Telemetry Action Card */}
            <div className="p-5 rounded-xl bg-[#f5f3ee] border border-[#1b1c19]/[0.06] flex items-start gap-4">
              <Sparkles className="w-5 h-5 text-[#0030a5] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-label-caps text-[10px] text-[#0030a5] tracking-wider uppercase font-bold">
                  NEXT COGNITIVE DIRECTIVE
                </p>
                <p className="font-headline-sm text-sm text-[#1b1c19] font-semibold">
                  {current.directive.title}
                </p>
                <p className="font-body-sm text-xs text-[#5c5e67]">
                  {current.directive.mentor}. {current.directive.description}
                </p>
              </div>
            </div>

            {/* Quick Telemetry Footnote */}
            <div className="flex items-center justify-between text-xs text-[#5c5e67] pt-2 border-t border-[#1b1c19]/[0.06] font-mono tabular-nums">
              <span>Accuracy Ratio: <strong className="text-[#1b1c19]">{current.metrics.accuracy}</strong></span>
              <span>Avg Solv Time: <strong className="text-[#1b1c19]">{current.metrics.avgTime}</strong></span>
              <span>Revision: <strong className="text-emerald-700">{current.metrics.cycleStatus}</strong></span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
