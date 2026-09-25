import React from 'react';
import { Play } from 'lucide-react';

interface CampusVideoSectionProps {
  onOpenVideoTour: () => void;
}

export const CampusVideoSection: React.FC<CampusVideoSectionProps> = ({ onOpenVideoTour }) => {
  return (
    <section className="relative w-full py-24 lg:py-36 px-6 lg:px-12 bg-[#fbf9f4] border-b border-[#1b1c19]/[0.06]">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative w-full h-[540px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-[#1b1c19]/[0.08]">
          <img
            alt="Lush courtyard library sanctuary with wooden study tables and peaceful skylights"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCrxG7OK3g0wTmp0DjjHl2pJk_f5c2LlxJxdvvj3amyqsKdneVrVat-R81BR9_lCjt9q1LRztPSro_0Ica7qp7mB3c6vi3ryhTS8K0Te-hg4mRPZLiYc03qPlbZ3rRWwQV8Y-NbWW3zlmxeGBWW0k81JMhxCBfySqTn2EhZOb-lxlqM7MlQAia8FNIbyQJyJbTAaEZMZje8qW-1SC2lJjO1NlHHWKLSKkEI5l-KTyCIABzxOMHGNr"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#30312e]/50 backdrop-blur-[1px]"></div>
          
          <div className="relative z-10 text-center px-6 max-w-2xl space-y-6 text-white">
            <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-[#dde1ff] block font-bold">
              CAMPUS ARCHITECTURE &amp; ENVIRONMENT
            </span>
            <h2 className="font-headline-xl text-[38px] sm:text-[54px] lg:text-[64px] leading-tight text-white">
              Learning Should Feel <span className="italic font-display-hero">Alive.</span>
            </h2>
            <p className="font-body-lg text-[#e0e2ec] leading-relaxed">
              A sanctuary sculpted with natural oak, biophilic courtyards, and acoustic dampening to honor deep scholastic concentration.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenVideoTour}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fbf9f4]/95 text-[#1b1c19] hover:bg-[#ffffff] hover:scale-105 transition-all font-label-ui text-label-ui shadow-lg cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#1746d1] text-white flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="font-bold tracking-wide">WATCH THE ACADEMIC EXPERIENCE (3:12 MIN)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
