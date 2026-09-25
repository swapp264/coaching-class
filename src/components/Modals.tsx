import React, { useState } from 'react';
import { ProgramItem, CampusZone, FACULTY_DATA } from '../data/instituteData';
import { X, CheckCircle2, ShieldCheck, Play, Pause, Volume2, Search, ArrowRight, UserCheck } from 'lucide-react';

interface ModalsProps {
  selectedProgram: ProgramItem | null;
  onCloseProgramModal: () => void;
  selectedZone: CampusZone | null;
  onCloseZoneModal: () => void;
  isFacultyDirectoryOpen: boolean;
  onCloseFacultyDirectory: () => void;
  isVideoTourOpen: boolean;
  onCloseVideoTour: () => void;
  isAuditModalOpen: boolean;
  onCloseAuditModal: () => void;
  isPortalModalOpen: boolean;
  onClosePortalModal: () => void;
  onDirectEnroll: (programName: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedProgram,
  onCloseProgramModal,
  selectedZone,
  onCloseZoneModal,
  isFacultyDirectoryOpen,
  onCloseFacultyDirectory,
  isVideoTourOpen,
  onCloseVideoTour,
  isAuditModalOpen,
  onCloseAuditModal,
  isPortalModalOpen,
  onClosePortalModal,
  onDirectEnroll,
}) => {
  // Faculty directory filter state
  const [facultyFilter, setFacultyFilter] = useState('ALL');
  
  // Video player state
  const [isPlaying, setIsPlaying] = useState(true);

  // Scholar portal lookup state
  const [searchRoll, setSearchRoll] = useState('PB-2024-JEE-081');
  const [lookedUpData, setLookedUpData] = useState<{
    name: string;
    roll: string;
    percentile: string;
    rank: string;
    status: string;
    physicsScore: number;
    chemScore: number;
    mathScore: number;
  } | null>({
    name: 'Aarav Mehta',
    roll: 'PB-2024-JEE-081',
    percentile: '99.82 %ile',
    rank: 'AIR 34 (JEE Adv)',
    status: 'Verified Registry Scholar',
    physicsScore: 94,
    chemScore: 88,
    mathScore: 96,
  });

  const handleSearchRoll = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchRoll.toUpperCase().includes('NEET') || searchRoll.includes('114')) {
      setLookedUpData({
        name: 'Shreya Kulkarni',
        roll: 'PB-2024-NEET-114',
        percentile: '99.94 %ile',
        rank: 'AIR 78 (NEET-UG)',
        status: 'Verified Registry Scholar',
        physicsScore: 92,
        chemScore: 95,
        mathScore: 98,
      });
    } else {
      setLookedUpData({
        name: 'Aarav Mehta',
        roll: searchRoll || 'PB-2024-JEE-081',
        percentile: '99.82 %ile',
        rank: 'AIR 34 (JEE Adv)',
        status: 'Verified Registry Scholar',
        physicsScore: 94,
        chemScore: 88,
        mathScore: 96,
      });
    }
  };

  return (
    <>
      {/* 1. Program Curriculum Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50">
          <div className="bg-[#fbf9f4] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#1b1c19]/[0.1] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c19]/[0.08]">
              <div>
                <span className={`font-label-caps text-xs px-2.5 py-0.5 rounded font-bold uppercase ${selectedProgram.tagColor}`}>
                  {selectedProgram.tag}
                </span>
                <h3 className="font-headline-sm text-2xl text-[#1b1c19] mt-2">
                  {selectedProgram.title}
                </h3>
                <p className="text-xs text-[#5c5e67]">{selectedProgram.audience}</p>
              </div>
              <button
                onClick={onCloseProgramModal}
                className="p-2 rounded-full hover:bg-[#eae8e3] text-[#1b1c19] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <p className="font-body-md text-[#5c5e67] leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#f5f3ee] border border-[#1b1c19]/[0.06]">
                  <p className="font-label-caps text-[10px] text-[#5c5e67] uppercase">Weekly Commitment</p>
                  <p className="font-headline-sm text-base text-[#1b1c19] font-semibold mt-1">
                    {selectedProgram.metaLeft.value}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#f5f3ee] border border-[#1b1c19]/[0.06]">
                  <p className="font-label-caps text-[10px] text-[#5c5e67] uppercase">Mentorship Cohort</p>
                  <p className="font-headline-sm text-base text-[#1b1c19] font-semibold mt-1">
                    {selectedProgram.metaRight.value}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-label-caps text-xs uppercase text-[#1b1c19] font-bold mb-3 tracking-wider">
                  Curriculum Architecture &amp; Key Milestones
                </h4>
                <div className="space-y-2.5">
                  {selectedProgram.curriculumSummary.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#ffffff] border border-[#1b1c19]/[0.06]">
                      <CheckCircle2 className="w-4 h-4 text-[#0030a5] shrink-0 mt-0.5" />
                      <span className="font-body-sm text-xs text-[#1b1c19] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#dde1ff]/40 border border-[#0030a5]/20 flex items-center justify-between">
                <div>
                  <p className="font-label-caps text-[10px] text-[#0030a5] uppercase font-bold">Standard Target</p>
                  <p className="font-headline-sm text-sm text-[#001453]">{selectedProgram.targetHighlight}</p>
                </div>
                <span className="font-label-caps text-[11px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-1 rounded">
                  25 Scholars Cap
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1b1c19]/[0.08] flex items-center justify-end gap-3">
              <button
                onClick={onCloseProgramModal}
                className="px-5 py-2.5 rounded text-xs font-semibold text-[#5c5e67] hover:text-[#1b1c19]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onCloseProgramModal();
                  onDirectEnroll(selectedProgram.title);
                }}
                className="px-6 py-2.5 rounded bg-[#1746d1] text-white text-xs font-bold hover:bg-[#0030a5] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>APPLY FOR DIAGNOSTIC INTAKE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Campus Zone Preview Modal */}
      {selectedZone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in-50">
          <div className="bg-[#fbf9f4] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1b1c19]/[0.1]">
            <div className="relative h-72 w-full bg-[#30312e]">
              <img
                src={selectedZone.image}
                alt={selectedZone.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={onCloseZoneModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="font-label-caps text-[10px] bg-[#0030a5] text-white px-3 py-1 rounded font-bold uppercase">
                  {selectedZone.zone}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="font-headline-sm text-2xl text-[#1b1c19]">
                {selectedZone.title}
              </h3>
              <p className="font-body-md text-[#5c5e67] leading-relaxed">
                {selectedZone.description}
              </p>
              <div className="pt-2 text-xs font-label-caps text-[#5c5e67] border-t border-[#1b1c19]/[0.06] flex items-center justify-between">
                <span>ACOUSTIC DAMPING: NRC 0.85</span>
                <span>DESK OCCUPANCY: MONITORED</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Full Faculty Directory Modal (All 42 Chaired Mentors) */}
      {isFacultyDirectoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50">
          <div className="bg-[#fbf9f4] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#1b1c19]/[0.1] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c19]/[0.08]">
              <div>
                <span className="font-label-caps text-xs text-[#0030a5] font-bold uppercase tracking-wider">
                  INSTITUTIONAL DIRECTORY
                </span>
                <h3 className="font-headline-sm text-2xl text-[#1b1c19]">
                  Chaired Faculty &amp; Academic Pods (42 Mentors)
                </h3>
              </div>
              <button
                onClick={onCloseFacultyDirectory}
                className="p-2 rounded-full hover:bg-[#eae8e3] text-[#1b1c19] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 py-4 border-b border-[#1b1c19]/[0.06]">
              {['ALL', 'PHYSICS', 'CHEMISTRY', 'MATHEMATICS', 'BIOLOGY'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFacultyFilter(f)}
                  className={`px-3 py-1.5 rounded text-xs font-label-ui transition-colors cursor-pointer ${
                    facultyFilter === f
                      ? 'bg-[#0030a5] text-white shadow-xs font-bold'
                      : 'bg-[#eae8e3] text-[#1b1c19] hover:bg-[#dedfe9]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Faculty List */}
            <div className="py-4 space-y-4">
              {FACULTY_DATA.map((fac) => (
                <div
                  key={fac.id}
                  className="p-5 rounded-xl bg-[#ffffff] border border-[#1b1c19]/[0.08] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-16 h-16 rounded-full object-cover shrink-0 border border-[#1b1c19]/[0.1]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-headline-sm text-lg text-[#1b1c19] font-bold">{fac.name}</h4>
                      <span className="font-label-caps text-[10px] bg-[#dde1ff] text-[#001453] px-2 py-0.5 rounded font-bold">
                        {fac.roleTag}
                      </span>
                    </div>
                    <p className="font-body-sm text-xs text-[#5c5e67]">{fac.credentials}</p>
                    <p className="font-body-sm text-xs text-[#444655] leading-relaxed pt-1">{fac.bio}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-label-caps text-[10px] text-[#0030a5] font-bold block">
                      {fac.achievementBadge}
                    </span>
                    <span className="text-[11px] text-[#5c5e67] block">{fac.podBadge}</span>
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-[#f5f3ee] text-xs text-[#5c5e67] text-center border border-[#1b1c19]/[0.06]">
                All 42 faculty members are residential chairs with a statutory non-rotation policy. Mentors conduct daily 1-on-1 problem reviews in the Richmond and Hauz Khas alcoves.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Academic Experience Video Modal */}
      {isVideoTourOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-50">
          <div className="bg-[#1b1c19] text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/[0.1]">
            <div className="relative aspect-video w-full bg-[#0d1017] flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCrxG7OK3g0wTmp0DjjHl2pJk_f5c2LlxJxdvvj3amyqsKdneVrVat-R81BR9_lCjt9q1LRztPSro_0Ica7qp7mB3c6vi3ryhTS8K0Te-hg4mRPZLiYc03qPlbZ3rRWwQV8Y-NbWW3zlmxeGBWW0k81JMhxCBfySqTn2EhZOb-lxlqM7MlQAia8FNIbyQJyJbTAaEZMZje8qW-1SC2lJjO1NlHHWKLSKkEI5l-KTyCIABzxOMHGNr"
                alt="Sanctuary tour"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="font-label-caps text-xs tracking-wider uppercase text-white/90">
                      ACADEMIC ARCHIVES • RICHMOND CAMPUS TOUR
                    </span>
                  </div>
                  <button
                    onClick={onCloseVideoTour}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-2xl text-white">The Architecture of Concentration</h3>
                    <p className="font-body-sm text-xs text-white/70 max-w-lg mt-1">
                      A visual documentary exploring the silent carrels, Socratic seminar halls, and botanical reflection courts engineered for national competitive rigor.
                    </p>
                  </div>

                  {/* Video Player Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/20">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                      <span className="font-mono text-xs text-white/80 tabular-nums">01:42 / 03:12</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-white/70" />
                      <span className="text-[10px] font-label-caps uppercase text-white/70">DIRECTOR'S COMMENTARY ON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Audited Disclosures / Statutory Transparency Modal */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50">
          <div className="bg-[#fbf9f4] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#1b1c19]/[0.1] max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c19]/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#0030a5]" />
                <h3 className="font-headline-sm text-xl text-[#1b1c19]">
                  Audited Transparency &amp; Statutory Registry
                </h3>
              </div>
              <button
                onClick={onCloseAuditModal}
                className="p-2 rounded-full hover:bg-[#eae8e3] text-[#1b1c19] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-body-sm text-[#5c5e67] leading-relaxed">
              <p>
                Prabodha Academy operates under a strict transparency protocol. Unlike commercial aggregator platforms that purchase rank listings or merge distant distance-learning cohorts with classroom batches:
              </p>

              <div className="p-4 rounded-xl bg-[#ffffff] border border-[#1b1c19]/[0.06] space-y-2">
                <p className="font-bold text-[#1b1c19]">1. 100% Physical Campus Attendance Verification</p>
                <p>All candidates listed in our annual merit disclosures spent a minimum of 18 months physically attending daily classes and lab sessions at our Bengaluru or Delhi campus.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#ffffff] border border-[#1b1c19]/[0.06] space-y-2">
                <p className="font-bold text-[#1b1c19]">2. Independent External Statutory Audit</p>
                <p>Roll numbers, admitted percentiles, and university matriculation records are audited annually by certified chartered evaluators. Audited registry archives from 2014 through 2025 are available for open inspection at the Richmond Road front desk.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#ffffff] border border-[#1b1c19]/[0.06] space-y-2">
                <p className="font-bold text-[#1b1c19]">3. Hard 25-Scholar Division Ceiling</p>
                <p>Admission automatically terminates once 25 scholars enroll per division. Under our institutional charter, no supernumerary seats may be created to preserve the 1:8 faculty alcove ratio.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b1c19]/[0.08] flex justify-end">
              <button
                onClick={onCloseAuditModal}
                className="px-6 py-2.5 rounded bg-[#1746d1] text-white text-xs font-bold hover:bg-[#0030a5]"
              >
                Acknowledge Protocol
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Scholar Diagnostic Portal Lookup Modal */}
      {isPortalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50">
          <div className="bg-[#fbf9f4] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#1b1c19]/[0.1] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c19]/[0.08]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#0030a5]" />
                <h3 className="font-headline-sm text-lg text-[#1b1c19]">
                  Scholar Diagnostic Registry Dossier
                </h3>
              </div>
              <button
                onClick={onClosePortalModal}
                className="p-2 rounded-full hover:bg-[#eae8e3] text-[#1b1c19] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchRoll} className="flex gap-2">
              <input
                value={searchRoll}
                onChange={(e) => setSearchRoll(e.target.value)}
                placeholder="Enter Roll No (e.g. PB-2024-JEE-081)"
                className="flex-1 px-4 py-2.5 rounded bg-[#f5f3ee] text-xs font-mono text-[#1b1c19] border border-[#1b1c19]/[0.1] focus:outline-none focus:ring-1 focus:ring-[#0030a5]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded bg-[#0030a5] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-[#1746d1]"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Verify</span>
              </button>
            </form>

            {lookedUpData && (
              <div className="p-5 rounded-xl bg-[#ffffff] border border-[#1b1c19]/[0.08] space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline-sm text-lg text-[#1b1c19]">{lookedUpData.name}</h4>
                    <p className="text-xs font-mono text-[#5c5e67]">{lookedUpData.roll}</p>
                  </div>
                  <span className="text-[10px] font-label-caps bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-bold uppercase">
                    {lookedUpData.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded bg-[#f5f3ee]">
                    <span className="text-[10px] font-label-caps text-[#5c5e67] block">AUDITED SCORE</span>
                    <span className="text-sm font-bold text-[#0030a5] font-mono">{lookedUpData.percentile}</span>
                  </div>
                  <div className="p-3 rounded bg-[#f5f3ee]">
                    <span className="text-[10px] font-label-caps text-[#5c5e67] block">ALL-INDIA RANK</span>
                    <span className="text-sm font-bold text-[#1b1c19] font-mono">{lookedUpData.rank}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 text-xs">
                  <div className="flex justify-between text-[#5c5e67]">
                    <span>Physics Core Mastery:</span>
                    <span className="font-bold text-[#1b1c19]">{lookedUpData.physicsScore}%</span>
                  </div>
                  <div className="flex justify-between text-[#5c5e67]">
                    <span>Chemistry Diagnostic:</span>
                    <span className="font-bold text-[#1b1c19]">{lookedUpData.chemScore}%</span>
                  </div>
                  <div className="flex justify-between text-[#5c5e67]">
                    <span>Mathematics Benchmark:</span>
                    <span className="font-bold text-[#1b1c19]">{lookedUpData.mathScore}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
