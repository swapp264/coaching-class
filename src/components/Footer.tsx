import React from 'react';
import { CONTACT_INFO } from '../data/instituteData';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenFacultyDirectory: () => void;
  onSelectProgramById: (programId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAuditModal,
  onOpenFacultyDirectory,
  onSelectProgramById,
}) => {
  return (
    <footer className="w-full bg-[#f5f3ee] border-t border-[#1b1c19]/[0.08] text-[#1b1c19] mt-24">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1b1c19]/[0.08]">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Prabodha Academy Emblem Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W5CmayHiVUUoAPd-UZHfSTANN6AHWTl0Iay8epyH9On1wiBaJjXoBN5nb1sN5ckaMb87tcfqHc_S7hyxi7Yj2UhAliZy00Pu1RW8W-4IUZ3nL6CPLgXO_Xs8wZW2i6KHeclEeuefhSGo-6FqC5x6MxGGKOJ2Kfl-b5iSaLQiJqv-SOtC36twZ360z1hchS-gOhWCxUDrW3Mv5EzIehskQBRcsYpIUsGSinx1G3uUh9R7wVK5_JQXA97Q"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-label-caps text-label-caps tracking-[0.16em] uppercase text-[#1b1c19] font-bold">
                PRABODHA ACADEMY
              </span>
            </div>
            
            <p className="font-headline-sm text-headline-sm font-normal text-[#1b1c19] pr-6">
              The Vanguard of Elite Scholastic Preparation.
            </p>
            
            <p className="font-body-sm text-body-sm text-[#5c5e67] leading-relaxed max-w-sm">
              Bengaluru &amp; New Delhi Campuses. Dedicated to the uncompromising mastery of Physics, Chemistry, and Pure Mathematics for national merit.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <span className="font-label-caps text-label-caps text-[#5c5e67]">EST. 2014</span>
              <span className="w-1 h-1 rounded-full bg-[#747686]"></span>
              <span className="font-label-caps text-label-caps text-[#5c5e67]">AUDITED PEDAGOGY</span>
            </div>
          </div>

          {/* Col 2: Academic Divisions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase">
              Academic Divisions
            </span>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-[#444655]">
              <li>
                <button
                  onClick={() => onSelectProgramById('jee-advanced')}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  JEE Advanced Scholastic Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProgramById('neet-ug')}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  NEET-UG Medical Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProgramById('foundation')}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  National &amp; Int. Olympiads
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProgramById('foundation')}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  Class VIII-X Foundation Rigor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProgramById('board-distinction')}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  Board Distinction &amp; Theory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institute & Governance (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase">
              Institute &amp; Governance
            </span>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-[#444655]">
              <li>
                <button
                  onClick={onOpenFacultyDirectory}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  Chaired Faculty Directory
                </button>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#0030a5] transition-colors">
                  The Prabodha Method
                </a>
              </li>
              <li>
                <a href="#performance-tech" className="hover:text-[#0030a5] transition-colors">
                  Cognitive Diagnostic Engine
                </a>
              </li>
              <li>
                <a href="#campus-spaces" className="hover:text-[#0030a5] transition-colors">
                  Residential Campuses
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAuditModal}
                  className="hover:text-[#0030a5] transition-colors text-left cursor-pointer"
                >
                  Audited Rank Dossiers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultation & Campuses (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-[#5c5e67] uppercase">
              Consultation
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm">
              <span className="text-[#1b1c19] font-medium">Bengaluru Campus</span>
              <span className="text-[#5c5e67] text-xs leading-relaxed">
                Richmond Road, Bengaluru, KA 560025
              </span>

              <span className="text-[#1b1c19] font-medium pt-2">Delhi NCR Campus</span>
              <span className="text-[#5c5e67] text-xs leading-relaxed">
                Institutional Area, Hauz Khas, New Delhi 110016
              </span>

              <a
                className="font-label-ui text-label-ui text-[#0030a5] font-semibold pt-2 hover:underline"
                href={`tel:${CONTACT_INFO.phone}`}
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body-sm text-xs text-[#5c5e67]">
          <div>
            <p>© 2026 Prabodha Academy for Advanced Science &amp; Mathematics. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-[#444655]/80">
              Certified Transparency Policy: Statistics and ranks reflect independent statutory audit registers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-label-ui text-label-ui">
            <button
              onClick={onOpenAuditModal}
              className="hover:text-[#1b1c19] transition-colors cursor-pointer"
            >
              Audited Disclosures
            </button>
            <button
              onClick={onOpenAuditModal}
              className="hover:text-[#1b1c19] transition-colors cursor-pointer"
            >
              Accreditation
            </button>
            <button
              onClick={onOpenAuditModal}
              className="hover:text-[#1b1c19] transition-colors cursor-pointer"
            >
              Terms of Candidacy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
