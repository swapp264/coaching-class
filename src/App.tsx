import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { Manifesto } from './components/Manifesto';
import { ProgramsSection } from './components/ProgramsSection';
import { FacultySection } from './components/FacultySection';
import { MethodologySection } from './components/MethodologySection';
import { ResultsSection } from './components/ResultsSection';
import { CampusVideoSection } from './components/CampusVideoSection';
import { PerformanceTechSection } from './components/PerformanceTechSection';
import { AlumniMonograph } from './components/AlumniMonograph';
import { CampusSpacesSection } from './components/CampusSpacesSection';
import { BatchesSection } from './components/BatchesSection';
import { FaqSection } from './components/FaqSection';
import { CounsellingSection } from './components/CounsellingSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ProgramItem, CampusZone, PROGRAMS_DATA, BatchItem } from './data/instituteData';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [selectedZone, setSelectedZone] = useState<CampusZone | null>(null);
  const [isFacultyDirectoryOpen, setIsFacultyDirectoryOpen] = useState(false);
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [preselectedProgramForForm, setPreselectedProgramForForm] = useState<string | undefined>(undefined);

  const handleOpenCounselling = (programName?: string) => {
    if (programName) {
      setPreselectedProgramForForm(programName);
    }
    const elem = document.getElementById('counselling');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollBatch = (batch: BatchItem) => {
    setPreselectedProgramForForm(batch.programValue);
    const elem = document.getElementById('counselling');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgramById = (programId: string) => {
    const prog = PROGRAMS_DATA.find((p) => p.id === programId);
    if (prog) {
      setSelectedProgram(prog);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] selection:bg-[#dde1ff] selection:text-[#001453] relative">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenCounselling={() => handleOpenCounselling()}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#fbf9f4] min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <Hero onOpenCounselling={() => handleOpenCounselling()} />

          {/* 2. Audited Proof & Stats Strip */}
          <StatsStrip onOpenAuditModal={() => setIsAuditModalOpen(true)} />

          {/* 3. Brand Statement & Editorial Manifesto */}
          <Manifesto />

          {/* 4. Scholastic Divisions / Programs */}
          <ProgramsSection onSelectProgram={(prog) => setSelectedProgram(prog)} />

          {/* 5. Chaired Faculty Showcase */}
          <FacultySection onOpenFacultyDirectory={() => setIsFacultyDirectoryOpen(true)} />

          {/* 6. Teaching Methodology Architecture */}
          <MethodologySection />

          {/* 7. Results & Audited Excellence */}
          <ResultsSection />

          {/* 8. Cinematic Classroom & Campus Life */}
          <CampusVideoSection onOpenVideoTour={() => setIsVideoTourOpen(true)} />

          {/* 9. Personal Performance Technology */}
          <PerformanceTechSection />

          {/* 10. Editorial Student Story (Alumni Monograph) */}
          <AlumniMonograph />

          {/* 11. Campus Sanctuaries & Spaces */}
          <CampusSpacesSection onPreviewZone={(zone) => setSelectedZone(zone)} />

          {/* 12. Upcoming Batches & Enrollment Calendar */}
          <BatchesSection onEnrollBatch={handleEnrollBatch} />

          {/* 13. Transparent FAQs & Parent Inquiries */}
          <FaqSection />

          {/* 14. Climactic Final Call to Action & Working Diagnostic Form */}
          <CounsellingSection initialProgram={preselectedProgramForForm} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenFacultyDirectory={() => setIsFacultyDirectoryOpen(true)}
        onSelectProgramById={handleSelectProgramById}
      />

      {/* Interactive Overlays & Modals */}
      <Modals
        selectedProgram={selectedProgram}
        onCloseProgramModal={() => setSelectedProgram(null)}
        selectedZone={selectedZone}
        onCloseZoneModal={() => setSelectedZone(null)}
        isFacultyDirectoryOpen={isFacultyDirectoryOpen}
        onCloseFacultyDirectory={() => setIsFacultyDirectoryOpen(false)}
        isVideoTourOpen={isVideoTourOpen}
        onCloseVideoTour={() => setIsVideoTourOpen(false)}
        isAuditModalOpen={isAuditModalOpen}
        onCloseAuditModal={() => setIsAuditModalOpen(false)}
        isPortalModalOpen={isPortalModalOpen}
        onClosePortalModal={() => setIsPortalModalOpen(false)}
        onDirectEnroll={(progName) => handleOpenCounselling(progName)}
      />
    </div>
  );
}
