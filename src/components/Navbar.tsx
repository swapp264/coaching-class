import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/instituteData';
import { Menu, X, ArrowUpRight, User, Phone, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenCounselling: (program?: string) => void;
  onOpenPortalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCounselling, onOpenPortalModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('programs');

  const navLinks = [
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Faculty', href: '#faculty', id: 'faculty' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Performance Tech', href: '#performance-tech', id: 'performance-tech' },
    { label: 'Campus', href: '#campus-spaces', id: 'campus-spaces' },
    { label: 'Stories', href: '#stories', id: 'stories' },
    { label: 'Admissions', href: '#counselling', id: 'admissions' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f5f3ee]/90 backdrop-blur-md border-b border-[#1b1c19]/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all">
      <div className="h-20 max-w-[1360px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Zone */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0030a5]"
          aria-label="Prabodha Academy Home"
        >
          <img
            alt="Prabodha Academy Emblem Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W5CmayHiVUUoAPd-UZHfSTANN6AHWTl0Iay8epyH9On1wiBaJjXoBN5nb1sN5ckaMb87tcfqHc_S7hyxi7Yj2UhAliZy00Pu1RW8W-4IUZ3nL6CPLgXO_Xs8wZW2i6KHeclEeuefhSGo-6FqC5x6MxGGKOJ2Kfl-b5iSaLQiJqv-SOtC36twZ360z1hchS-gOhWCxUDrW3Mv5EzIehskQBRcsYpIUsGSinx1G3uUh9R7wVK5_JQXA97Q"
            onError={(e) => {
              // Graceful SVG badge fallback if external URL fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps tracking-[0.16em] uppercase text-[#1b1c19] font-bold">
              PRABODHA ACADEMY
            </span>
            <span className="font-label-caps text-[10px] tracking-[0.1em] uppercase text-[#5c5e67]">
              INSTITUTE OF HIGHER RIGOR
            </span>
          </div>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveNav(link.id)}
              className={`font-label-ui text-label-ui transition-colors py-1 ${
                activeNav === link.id
                  ? 'text-[#0030a5] font-bold border-b-2 border-[#0030a5]'
                  : 'text-[#444655] hover:text-[#1b1c19]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls Zone */}
        <div className="flex items-center gap-5 shrink-0">
          <div className="hidden md:flex flex-col text-right pr-2">
            <span className="font-label-caps text-[10px] tracking-[0.12em] text-[#5c5e67] uppercase">
              {CONTACT_INFO.admissionsDeskTitle}
            </span>
            <a
              className="font-label-ui text-label-ui text-[#1b1c19] hover:text-[#0030a5] transition-colors flex items-center justify-end gap-1.5"
              href={`tel:${CONTACT_INFO.phone}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => onOpenCounselling()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#30312e] text-[#f2f1ec] hover:bg-[#1746d1] hover:text-white transition-all duration-200 font-label-ui text-label-ui font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer"
          >
            <span>BOOK FREE COUNSELLING</span>
            <span className="font-serif text-sm leading-none">↗</span>
          </button>

          <button
            onClick={onOpenPortalModal}
            className="w-8 h-8 rounded-full bg-[#0030a5] hover:bg-[#1746d1] flex items-center justify-center shrink-0 text-white transition-colors cursor-pointer shadow-sm"
            title="Scholar Diagnostic Portal"
            aria-label="Open Scholar Portal"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-[#1b1c19] hover:bg-[#eae8e3] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f4] border-b border-[#c4c5d7] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-base font-semibold transition-colors flex items-center justify-between ${
                  activeNav === link.id ? 'text-[#0030a5]' : 'text-[#1b1c19] hover:text-[#0030a5]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#5c5e67]">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#e4e2dd] space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 py-2 text-sm font-semibold text-[#1b1c19]"
              >
                <div className="w-8 h-8 rounded-full bg-[#dde1ff] text-[#0030a5] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#5c5e67] uppercase">Direct Admissions Line</p>
                  <p className="text-sm font-bold">{CONTACT_INFO.phoneDisplay}</p>
                </div>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="w-full py-3.5 rounded bg-[#1746d1] text-white font-label-ui text-sm font-bold text-center block shadow-md hover:bg-[#0030a5] transition-colors"
              >
                BOOK FREE COUNSELLING ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
