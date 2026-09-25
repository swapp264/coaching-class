import React from 'react';
import { CAMPUS_ZONES, CampusZone } from '../data/instituteData';
import { Maximize2 } from 'lucide-react';

interface CampusSpacesSectionProps {
  onPreviewZone: (zone: CampusZone) => void;
}

export const CampusSpacesSection: React.FC<CampusSpacesSectionProps> = ({ onPreviewZone }) => {
  return (
    <section className="w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="campus-spaces">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
              SPATIAL INFRASTRUCTURE
            </span>
            <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
              A Place Built Purely for Focus.
            </h2>
          </div>
          <p className="font-body-md text-[#5c5e67] max-w-md">
            Acoustically treated environments engineered to sustain hours of uninterrupted intellectual concentration.
          </p>
        </div>

        {/* 4 Sanctuary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPUS_ZONES.map((zone) => (
            <div
              key={zone.id}
              onClick={() => onPreviewZone(zone)}
              className="bg-[#fbf9f4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#1b1c19]/[0.08] space-y-4 p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300"
            >
              <div className="h-48 rounded-xl overflow-hidden bg-[#f0eee9] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={zone.imageAlt}
                  src={zone.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/90 text-[#1b1c19] shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-label-caps text-[10px] text-[#0030a5] font-bold block">
                  {zone.zone}
                </span>
                <h3 className="font-headline-sm text-lg text-[#1b1c19] group-hover:text-[#0030a5] transition-colors">
                  {zone.title}
                </h3>
                <p className="font-body-sm text-xs text-[#5c5e67] leading-relaxed">
                  {zone.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-label-caps text-[#5c5e67] flex items-center justify-between">
                <span>CAMPUS TOUR ACTIVE</span>
                <span className="text-[#0030a5] font-semibold group-hover:translate-x-0.5 transition-transform">VIEW ↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
