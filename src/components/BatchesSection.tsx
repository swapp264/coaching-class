import React from 'react';
import { BATCHES_DATA, BatchItem } from '../data/instituteData';
import { ArrowRight } from 'lucide-react';

interface BatchesSectionProps {
  onEnrollBatch: (batch: BatchItem) => void;
}

export const BatchesSection: React.FC<BatchesSectionProps> = ({ onEnrollBatch }) => {
  return (
    <section className="w-full bg-[#fbf9f4] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="batches">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
              INTAKE REGISTER 2026–2027
            </span>
            <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
              Upcoming Academic Cohorts.
            </h2>
          </div>
          <p className="font-body-md text-[#5c5e67] max-w-md">
            To preserve the 1:8 faculty ratio, enrollment closes automatically once 25 scholars are verified per pod.
          </p>
        </div>

        {/* Batch Intake Table */}
        <div className="bg-[#f5f3ee] rounded-2xl overflow-hidden shadow-xs border border-[#1b1c19]/[0.08] p-6 lg:p-8 space-y-4">
          {BATCHES_DATA.map((batch) => (
            <div
              key={batch.id}
              className="bg-[#fbf9f4] p-6 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs border border-[#1b1c19]/[0.05] hover:border-[#0030a5]/40 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className={`font-label-caps text-[10px] px-2.5 py-0.5 rounded font-bold tracking-wider ${batch.badgeColor}`}>
                    {batch.badge}
                  </span>
                  <span className="font-body-sm text-xs text-[#5c5e67]">
                    {batch.targetYear}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl text-[#1b1c19]">
                  {batch.title}
                </h3>
                <p className="font-body-sm text-xs text-[#5c5e67]">
                  {batch.locationDetails}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 lg:pt-0">
                <div>
                  <p className="font-label-caps text-[10px] text-[#5c5e67]">START DATE</p>
                  <p className="font-label-ui text-sm text-[#1b1c19] font-bold">{batch.startDate}</p>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-[#5c5e67]">CAPACITY</p>
                  <p className="font-label-ui text-sm text-[#0030a5] font-bold">{batch.capacity}</p>
                </div>
                <button
                  onClick={() => onEnrollBatch(batch)}
                  className="px-5 py-2.5 rounded bg-[#1b1c19] text-[#fbf9f4] hover:bg-[#0030a5] transition-colors font-label-ui text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>ENROLL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
