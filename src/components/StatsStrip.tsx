import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatsStripProps {
  onOpenAuditModal: () => void;
}

export const StatsStrip: React.FC<StatsStripProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="w-full bg-[#fbf9f4] py-16 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-1">
            <p className="font-stat-numeral text-stat-numeral text-[#1b1c19] font-semibold tabular-nums">
              10,000<span className="text-[#0030a5] font-normal">+</span>
            </p>
            <p className="font-label-ui text-label-ui text-[#1b1c19]">Scholars Mentored</p>
            <p className="font-body-sm text-xs text-[#5c5e67]">Across IIT, NIT &amp; AIIMS cohorts since 2014</p>
          </div>

          <div className="space-y-1">
            <p className="font-stat-numeral text-stat-numeral text-[#1b1c19] font-semibold tabular-nums">
              15<span className="text-[#0030a5] font-normal">+</span> Yrs
            </p>
            <p className="font-label-ui text-label-ui text-[#1b1c19]">Pedagogic Research</p>
            <p className="font-body-sm text-xs text-[#5c5e67]">First-principles curricula refined annually</p>
          </div>

          <div className="space-y-1">
            <p className="font-stat-numeral text-stat-numeral text-[#1b1c19] font-semibold tabular-nums">
              500<span className="text-[#0030a5] font-normal">+</span>
            </p>
            <p className="font-label-ui text-label-ui text-[#1b1c19]">Diagnostic Test Engine</p>
            <p className="font-body-sm text-xs text-[#5c5e67]">Micro-topic stress tests with instant telemetry</p>
          </div>

          <div className="space-y-1">
            <p className="font-stat-numeral text-stat-numeral text-[#1b1c19] font-semibold tabular-nums">
              24/7
            </p>
            <p className="font-label-ui text-label-ui text-[#1b1c19]">Faculty Alcove Access</p>
            <p className="font-body-sm text-xs text-[#5c5e67]">Zero bottleneck peer-and-master problem review</p>
          </div>

        </div>

        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1b1c19]/[0.06] mt-8">
          <p className="font-body-sm text-xs text-[#5c5e67] italic">
            *Institutional statistics reflect aggregate registry archives certified under annual external academic audits (2014–2025).
          </p>
          <button
            onClick={onOpenAuditModal}
            className="font-label-caps text-[11px] tracking-wider uppercase text-[#0030a5] hover:text-[#1746d1] font-bold flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>AUDITED PEDAGOGY REGISTER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
