import React from 'react';
import { FACULTY_DATA } from '../data/instituteData';
import { ArrowRight } from 'lucide-react';

interface FacultySectionProps {
  onOpenFacultyDirectory: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenFacultyDirectory }) => {
  return (
    <section className="w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="faculty">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
              THE SCHOLARS COUNCIL
            </span>
            <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
              Meet the People Behind the Progress.
            </h2>
          </div>
          <p className="font-body-md text-[#5c5e67] max-w-md">
            Permanent chairs, lifelong researchers, and renowned pedagogues who remain on campus for every single cohort.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FACULTY_DATA.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-[#fbf9f4] rounded-2xl overflow-hidden shadow-sm border border-[#1b1c19]/[0.08] flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-[340px] overflow-hidden bg-[#f0eee9]">
                  <img
                    alt={faculty.imageAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    src={faculty.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-[#fbf9f4]/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-label-caps uppercase text-[#0030a5] font-semibold border border-[#1b1c19]/[0.08] shadow-xs">
                    {faculty.roleTag}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-2xl text-[#1b1c19]">
                      {faculty.name}
                    </h3>
                    <p className="font-label-ui text-xs text-[#5c5e67] mt-1">
                      {faculty.credentials}
                    </p>
                  </div>
                  <p className="font-body-sm text-[#5c5e67] leading-relaxed">
                    {faculty.bio}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="pt-4 border-t border-[#1b1c19]/[0.06] flex items-center justify-between text-xs font-label-caps text-[#5c5e67]">
                  <span>{faculty.podBadge}</span>
                  <span className="text-[#0030a5] font-bold">{faculty.achievementBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directory CTA */}
        <div className="text-center pt-6">
          <button
            onClick={onOpenFacultyDirectory}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#fbf9f4] hover:bg-[#f0eee9] text-[#1b1c19] font-label-ui text-label-ui shadow-sm border border-[#1b1c19]/[0.08] transition-all cursor-pointer group"
          >
            <span>MEET ALL 42 RESIDENTIAL MENTORS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
