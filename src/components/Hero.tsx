import React from 'react';
import { ArrowRight, ArrowUpRight, ArrowDown, CalendarCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCounselling: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling }) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-[#f5f3ee] px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Copy & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#fbf9f4] shadow-sm self-start border border-[#1b1c19]/[0.05]">
            <span className="w-2 h-2 rounded-full bg-[#0030a5] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-[#0030a5] tracking-[0.16em]">
              JEE • NEET • FOUNDATION • BOARDS
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="font-headline-xl text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.02] tracking-[-0.03em] text-[#1b1c19]">
              MAKE YOUR POTENTIAL <br className="hidden sm:inline" />
              <span className="italic font-display-hero text-[#1746d1] font-normal">PROVEN.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-[#5c5e67] max-w-xl pt-2 leading-relaxed">
              Expert-led preparation, personal mentorship, and a rigorous cognitive learning system engineered for ambitious students striving for national merit.
            </p>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-7 py-4 rounded bg-[#1746d1] text-white font-label-ui text-label-ui hover:bg-[#0030a5] transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center gap-2 px-7 py-4 rounded bg-[#fbf9f4] hover:bg-[#f0eee9] text-[#1b1c19] font-label-ui text-label-ui transition-all duration-200 shadow-sm border border-[#1b1c19]/[0.08] cursor-pointer"
            >
              <span>BOOK FREE COUNSELLING</span>
              <span className="font-serif text-base leading-none">↗</span>
            </button>
          </div>

          {/* Trust Note & Calendar Badge */}
          <div className="flex items-center gap-4 pt-4 border-t border-[#1b1c19]/[0.06]">
            <div className="w-10 h-10 rounded-full bg-[#fbf9f4] flex items-center justify-center shadow-sm text-[#0030a5] border border-[#1b1c19]/[0.05]">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-label-ui text-label-ui text-[#1b1c19]">Academic Cohort 2026–2027 Admissions Open</p>
              <p className="font-body-sm text-xs text-[#5c5e67]">Diagnostic intake slots limited to 25 scholars per division.</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#manifesto"
            className="pt-4 flex items-center gap-2 text-[#5c5e67] hover:text-[#1b1c19] transition-colors font-label-caps text-[11px] tracking-[0.14em] uppercase self-start"
          >
            <span>DISCOVER OUR PHILOSOPHY</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

        {/* Right Column: Student Portrait & Floating Metrics (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px]">
            
            {/* Decorative Blur Background */}
            <div className="absolute -inset-4 bg-[#dde1ff]/40 rounded-[2rem] blur-2xl -z-10"></div>
            
            {/* Student Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#fbf9f4] border border-[#1b1c19]/[0.08]">
              <img
                alt="Prabodha Academy Scholar in silent study hall"
                className="w-full h-[520px] object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6WxMDHjjeE7O8Kd8KTBI0SNBpNZGUS0pBa25DbXt7aAhMKIOG2tTIkpuER27VSnQcO-wkafV6C3RhYChrZ46k9Iqe3U4PQzv0hx_q9IO8ea2XN3qnpmUT45eKaTzA1L7KMwpZBToouhcAo-HzyWIMiQ-K64SqwcbMdTDY6ZOD48JoUcIusLeotOUy-mmzinZ1OA8EGoHMVNWSw5bXZ6IxnFbMjtDPfVvxyPYbu320b7GiFdCwm9rU"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30312e]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-[#dde1ff] block mb-1">
                  SCHOLAR PROFILE
                </span>
                <p className="font-headline-sm text-lg text-white">
                  Ananya Sundaram • AIR 42 Aspirant
                </p>
                <p className="text-xs text-[#dedfe9] mt-0.5">
                  Two-Year Integrated Scholastic Pod (Mathematics & Physics)
                </p>
              </div>
            </div>

            {/* Discreet Floating Spec Metric Card 1 (Audited Percentile) */}
            <div className="absolute -left-4 sm:-left-6 top-16 bg-[#fbf9f4]/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-lg border border-[#1b1c19]/[0.08] flex items-center gap-3.5 max-w-[220px]">
              <div className="w-10 h-10 rounded-lg bg-[#eae8e3] flex items-center justify-center text-[#0030a5] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-stat-numeral text-2xl font-bold leading-tight text-[#1b1c19] tabular-nums">
                  99.84%
                </p>
                <p className="font-label-caps text-[10px] text-[#5c5e67] tracking-wider uppercase">
                  Audited Mock Percentile
                </p>
              </div>
            </div>

            {/* Discreet Floating Spec Metric Card 2 (Mentor Ratio) */}
            <div className="absolute -right-2 sm:-right-4 bottom-12 bg-[#fbf9f4]/95 backdrop-blur-md px-5 py-3.5 rounded-xl shadow-lg border border-[#1b1c19]/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1746d1] text-white flex items-center justify-center text-xs font-bold shrink-0">
                1:8
              </div>
              <div>
                <p className="font-label-ui text-label-ui text-[#1b1c19]">Mentor Ratio</p>
                <p className="font-body-sm text-[11px] text-[#5c5e67]">Direct Senior Faculty</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
