import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Manifesto Text (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
            OUR PEDAGOGIC DOCTRINE
          </span>
          
          <h2 className="font-headline-xl text-[34px] sm:text-[48px] lg:text-[54px] leading-[1.1] text-[#1b1c19]">
            We don’t just teach chapters. <br />
            <span className="italic font-display-hero text-[#0030a5]">We build resilient thinkers.</span>
          </h2>
          
          <p className="font-body-lg text-body-lg text-[#5c5e67] leading-relaxed max-w-2xl">
            Competitive examinations do not measure retention; they measure cognitive decompression under pressure. Our pedagogy strips away repetitive rote patterns, training scholars to reconstruct theorems from zero baseline and navigate novel problem structures with mathematical poise.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-[#fbf9f4] shadow-sm border border-[#1b1c19]/[0.06] space-y-2">
              <span className="font-label-caps text-[11px] text-[#0030a5] font-bold block">PILLAR 01</span>
              <h3 className="font-headline-sm text-lg text-[#1b1c19]">First-Principles Physics</h3>
              <p className="font-body-sm text-xs text-[#5c5e67] leading-relaxed">
                Derivation before computation. Intuitive mechanics anchored in invariant conservation laws.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbf9f4] shadow-sm border border-[#1b1c19]/[0.06] space-y-2">
              <span className="font-label-caps text-[11px] text-[#0030a5] font-bold block">PILLAR 02</span>
              <h3 className="font-headline-sm text-lg text-[#1b1c19]">Clinical Bio Precision</h3>
              <p className="font-body-sm text-xs text-[#5c5e67] leading-relaxed">
                Sentence-by-sentence NCERT deconstruction mapped to physiological diagnostic paradigms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbf9f4] shadow-sm border border-[#1b1c19]/[0.06] space-y-2">
              <span className="font-label-caps text-[11px] text-[#0030a5] font-bold block">PILLAR 03</span>
              <h3 className="font-headline-sm text-lg text-[#1b1c19]">Proof-Based Math</h3>
              <p className="font-body-sm text-xs text-[#5c5e67] leading-relaxed">
                Rigorous algebra, combinatorics and multi-curve calculus without speculative shortcuts.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Classroom Image (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#fbf9f4] p-2.5 border border-[#1b1c19]/[0.08]">
            <img
              alt="Professorial seminar room with attentive scholars discussing physics models"
              className="w-full h-[520px] object-cover rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfzpOtc8JQwnK3wKxubsuKN8wc6BsYHcjQlY8odbLFMM1RhAOibyNIm1SBHpIJYEaWE5y59lENAlBnNCHhpuqwPwbfSeG3dhgwggogUXpo--ohqyDEXl_5b81b7DJ9BErmo03INkfcp9PcD4OZiKmuw1DhyXNdzc2sURcKJ7drYrsiHz0reG_3FNpgIlwNqg-znhKolw2IFjBvT9cQXWoLjLQkJw0u4E6uRcSIT-t9JnT0fjJiYAYx"
              referrerPolicy="no-referrer"
            />
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="font-headline-sm text-base text-[#1b1c19]">The Seminar Hall • Richmond Campus</p>
                <p className="font-body-sm text-xs text-[#5c5e67]">Interactive Socratic review session with Dr. Amit Sharma</p>
              </div>
              <span className="font-label-caps text-[10px] bg-[#eae8e3] px-2.5 py-1 rounded text-[#0030a5] uppercase font-bold tracking-wider">
                LIVE COHORT
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
