import React from 'react';
import { ProgramItem, PROGRAMS_DATA } from '../data/instituteData';
import { ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section className="w-full bg-[#fbf9f4] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="programs">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
              SCHOLASTIC DIVISIONS
            </span>
            <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
              Find Your Academic Path.
            </h2>
          </div>
          <p className="font-body-md text-[#5c5e67] max-w-md">
            Structured for distinct phases of secondary scholarship with individualized mentor pacing and continuous diagnostic tracking.
          </p>
        </div>

        {/* 4 Program Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS_DATA.map((program) => (
            <div
              key={program.id}
              className="p-8 lg:p-10 rounded-2xl bg-[#f5f3ee] hover:bg-[#f0eee9] transition-all duration-300 shadow-xs border border-[#1b1c19]/[0.06] flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`font-label-caps text-label-caps px-3 py-1 rounded uppercase font-bold tracking-wider ${program.tagColor}`}>
                    {program.tag}
                  </span>
                  <span className="font-body-sm text-xs text-[#5c5e67]">
                    {program.audience}
                  </span>
                </div>

                <h3 className="font-headline-lg text-headline-lg text-[#1b1c19] group-hover:text-[#0030a5] transition-colors">
                  {program.title}
                </h3>

                <p className="font-body-md text-[#5c5e67] leading-relaxed">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded bg-[#fbf9f4] shadow-xs border border-[#1b1c19]/[0.05]">
                    <span className="font-label-caps text-[10px] text-[#5c5e67] block">
                      {program.metaLeft.label}
                    </span>
                    <p className="font-headline-sm text-sm text-[#1b1c19] mt-1 font-semibold">
                      {program.metaLeft.value}
                    </p>
                  </div>
                  <div className="p-4 rounded bg-[#fbf9f4] shadow-xs border border-[#1b1c19]/[0.05]">
                    <span className="font-label-caps text-[10px] text-[#5c5e67] block">
                      {program.metaRight.label}
                    </span>
                    <p className="font-headline-sm text-sm text-[#1b1c19] mt-1 font-semibold">
                      {program.metaRight.value}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#1b1c19]/[0.06]">
                <span className="font-label-caps text-xs text-[#0030a5] font-semibold tracking-wider">
                  {program.targetHighlight}
                </span>
                <button
                  onClick={() => onSelectProgram(program)}
                  className="font-label-ui text-label-ui text-[#1b1c19] group-hover:text-[#0030a5] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>EXPLORE CURRICULUM</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
