import React from 'react';

export const AlumniMonograph: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf9f4] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="stories">
      <div className="max-w-[1120px] mx-auto text-center space-y-12">
        <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.18em] block">
          ALUMNI MONOGRAPH
        </span>

        {/* Oversized Serif Quote */}
        <div className="relative">
          <span className="text-8xl font-serif text-[#0030a5]/15 absolute -top-14 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            “
          </span>
          <blockquote className="font-headline-xl text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.25] text-[#1b1c19] italic max-w-4xl mx-auto relative z-10">
            I stopped studying longer. I started studying better. Prabodha taught me how to dissect extreme problem conditions without panic.
          </blockquote>
        </div>

        {/* Credential Block */}
        <div className="space-y-2">
          <p className="font-headline-sm text-xl text-[#1b1c19] font-semibold">
            Aarav Mehta
          </p>
          <p className="font-label-caps text-xs text-[#5c5e67] tracking-widest uppercase">
            AIR 34, JEE ADVANCED • NOW AT DEPARTMENT OF COMPUTER SCIENCE, IIT BOMBAY
          </p>
          <p className="font-body-sm text-xs text-[#0030a5] pt-1 font-semibold">
            Two-Year Integrated Scholastic Pod (2022–2024)
          </p>
        </div>
      </div>
    </section>
  );
};
