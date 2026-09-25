import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/instituteData';
import { MessageSquare, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface CounsellingSectionProps {
  initialProgram?: string;
}

export const CounsellingSection: React.FC<CounsellingSectionProps> = ({ initialProgram }) => {
  const [showForm, setShowForm] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('JEE (Main & Advanced)');
  const [studentClass, setStudentClass] = useState('Class XI');
  const [preferredCampus, setPreferredCampus] = useState('Bengaluru Central (Richmond Road)');
  const [preferredSlot, setPreferredSlot] = useState('Weekday Morning (10:00 AM - 12:00 PM)');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    ticketId: string;
    studentName: string;
    program: string;
    campus: string;
  }>(null);

  useEffect(() => {
    if (initialProgram) {
      setSelectedProgram(initialProgram);
      setShowForm(true);
    }
  }, [initialProgram]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter the student\'s full name.';
    }

    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = `PB-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionSuccess({
        ticketId: generatedTicket,
        studentName: fullName,
        program: selectedProgram,
        campus: preferredCampus,
      });
      // clear inputs
      setFullName('');
      setPhone('');
      setEmail('');
      setErrors({});
    }, 700);
  };

  return (
    <section
      id="counselling"
      className="w-full bg-[#30312e] text-[#f2f1ec] py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1120px] mx-auto text-center space-y-10 relative z-10">
        
        {/* Header Badges */}
        <span className="font-label-caps text-label-caps text-[#bdc8ff] tracking-[0.2em] uppercase block">
          TAKE THE DEFINITIVE STEP
        </span>

        <h2 className="font-headline-xl text-[40px] sm:text-[60px] lg:text-[72px] leading-tight text-white">
          Your Next Chapter <br />
          <span className="italic font-display-hero text-[#bdc8ff]">Starts Here.</span>
        </h2>

        <p className="font-body-lg text-[#dedfe9] max-w-xl mx-auto leading-relaxed">
          Arrange an in-person diagnostic evaluation and consultation with a Senior Academic Director at our Bengaluru or Delhi campus.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-4 rounded bg-[#1746d1] text-white hover:bg-[#0030a5] transition-all font-label-ui text-label-ui shadow-lg flex items-center gap-2 cursor-pointer font-semibold"
          >
            <span>{showForm ? 'IN-PERSON AUDIT APPLICATION' : 'SCHEDULE IN-PERSON AUDIT'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            className="px-8 py-4 rounded bg-white/[0.08] hover:bg-white/[0.14] text-white transition-all font-label-ui text-label-ui flex items-center gap-2 shadow-sm border border-white/[0.12]"
            href={CONTACT_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP DESK ({CONTACT_INFO.whatsappNumber})</span>
          </a>
        </div>

        {/* Quick Interactive In-Page Diagnostic Form */}
        {showForm && (
          <div
            id="counselling-form"
            className="max-w-xl mx-auto pt-8 text-left bg-[#fbf9f4] rounded-2xl p-6 sm:p-8 text-[#1b1c19] shadow-2xl transition-all border border-[#1b1c19]/[0.08]"
          >
            {submissionSuccess ? (
              <div className="space-y-4 py-4 text-center animate-in fade-in-50">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-headline-sm text-2xl text-[#1b1c19]">
                  Counselling Docket Confirmed
                </h4>
                <p className="font-body-sm text-sm text-[#5c5e67] max-w-md mx-auto">
                  Thank you, <strong>{submissionSuccess.studentName}</strong>. Your intake audit docket has been registered under reference <strong>{submissionSuccess.ticketId}</strong> for <strong>{submissionSuccess.program}</strong> at our <strong>{submissionSuccess.campus}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-[#f5f3ee] text-xs font-mono text-[#1b1c19] text-left space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#5c5e67]">Reference:</span>
                    <span className="font-bold">{submissionSuccess.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5c5e67]">Senior Director Call:</span>
                    <span className="text-emerald-700 font-bold">Within 4 Business Hours</span>
                  </div>
                </div>
                <button
                  onClick={() => setSubmissionSuccess(null)}
                  className="px-6 py-2.5 rounded bg-[#1746d1] text-white font-label-ui text-xs font-semibold hover:bg-[#0030a5] transition-colors"
                >
                  Submit Another Scholar Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h4 className="font-headline-sm text-xl text-[#1b1c19]">
                    Request Faculty Consultation &amp; Diagnostic Audit
                  </h4>
                  <p className="font-body-sm text-xs text-[#5c5e67] mt-1">
                    Enter candidate details below. Our academic registrar will reach out within 4 business hours to schedule your diagnostic viva.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                      Student Full Name *
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#1b1c19]/[0.08]'
                      }`}
                      placeholder="e.g. Priyanshu Sharma"
                      type="text"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                        Target Program *
                      </label>
                      <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border border-[#1b1c19]/[0.08]"
                      >
                        <option value="JEE (Main & Advanced)">JEE (Main &amp; Advanced)</option>
                        <option value="NEET-UG Medical Faculty">NEET-UG Medical Faculty</option>
                        <option value="Foundation & Olympiads">Foundation &amp; Olympiads</option>
                        <option value="Board Distinction & Theory">Board Distinction &amp; Theory</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                        Phone Number *
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#1b1c19]/[0.08]'
                        }`}
                        placeholder="+91 98450 00000"
                        type="tel"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                        Parent Email (Optional)
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#1b1c19]/[0.08]'
                        }`}
                        placeholder="parent@example.com"
                        type="email"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                        Current Class
                      </label>
                      <select
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        className="w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border border-[#1b1c19]/[0.08]"
                      >
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                        <option value="Class XI">Class XI</option>
                        <option value="Class XII">Class XII</option>
                        <option value="Repeater / Dropper">Repeater / Dropper</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-[#5c5e67] uppercase block mb-1">
                      Campus Preference
                    </label>
                    <select
                      value={preferredCampus}
                      onChange={(e) => setPreferredCampus(e.target.value)}
                      className="w-full px-4 py-3 rounded bg-[#f5f3ee] text-[#1b1c19] font-body-sm focus:outline-none focus:ring-1 focus:ring-[#0030a5] border border-[#1b1c19]/[0.08]"
                    >
                      <option value="Bengaluru Central (Richmond Road)">Bengaluru Central (Richmond Road)</option>
                      <option value="Delhi NCR (Hauz Khas Institutional Area)">Delhi NCR (Hauz Khas Institutional Area)</option>
                      <option value="Online Diagnostic Assessment (Remote)">Online Diagnostic Assessment (Remote)</option>
                    </select>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded bg-[#1746d1] text-white font-label-ui text-label-ui hover:bg-[#0030a5] transition-all mt-2 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2 font-bold"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>PROCESSING AUDIT ENROLLMENT...</span>
                      </>
                    ) : (
                      <span>CONFIRM COUNSELLING REQUEST</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        <div className="pt-8">
          <p className="font-label-caps text-[11px] text-[#dedfe9]/70 uppercase tracking-widest">
            CAMPUSES: RICHMOND ROAD, BENGALURU • HAUZ KHAS INSTITUTIONAL AREA, NEW DELHI
          </p>
        </div>

      </div>
    </section>
  );
};
