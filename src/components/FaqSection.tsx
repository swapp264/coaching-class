import React, { useState } from 'react';
import { FAQS_DATA } from '../data/instituteData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#1b1c19]/[0.06]" id="faqs">
      <div className="max-w-[960px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase tracking-[0.16em] block">
            INSTITUTIONAL CLARITY
          </span>
          <h2 className="font-headline-xl text-headline-xl text-[#1b1c19]">
            Frequently Considered Matters.
          </h2>
          <p className="font-body-md text-[#5c5e67]">
            Direct answers for parents seeking an uncompromising academic environment.
          </p>
        </div>

        {/* Minimalist Clean Accordions */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="bg-[#fbf9f4] p-6 rounded-xl shadow-xs border border-[#1b1c19]/[0.06] transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-left font-headline-sm text-lg text-[#1b1c19] cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`text-[#0030a5] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 border-t border-[#1b1c19]/[0.06] mt-4 animate-in fade-in-50 duration-200">
                    <p className="font-body-md text-[#5c5e67] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
