import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  Shield,
  Phone,
  ExternalLink,
  HeartHandshake,
  FileText,
  CreditCard,
  AlertCircle
} from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string | React.ReactNode;
}

export const HelpPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-6']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'General',
      question: 'How Already Yours works',
      answer:
        'Already Yours is an accessible educational tool designed to help older adults (65+) and family caregivers discover overlooked benefits in Medicare Advantage plans. You can upload an insurance card photo or choose from 15 preloaded sample cards. We then provide plain-English summaries of supplemental dental, vision, hearing, gym, and OTC allowances, complete with interactive step-by-step checklists so you know exactly how to use them before they expire.',
    },
    {
      id: 'faq-2',
      category: 'Card Upload',
      question: 'How to upload an insurance card',
      answer:
        'Navigate to the "Select Card" page and click on the "Option B: Upload My Card" tab. You can drag and drop a photo file (JPG, JPEG, PNG, or WEBP up to 10MB) from your computer, click "Browse Files", or tap "Use Camera" on your smartphone or tablet to take a fresh photo. Your image stays strictly in your browser and is never uploaded or sent to external AI or third-party cloud servers.',
    },
    {
      id: 'faq-3',
      category: 'Sample Cards',
      question: 'How to select a sample card',
      answer:
        'If you do not have your card handy or prefer not to use your personal card, click "Option A: Try a Sample Card". We have preloaded 15 Medicare Advantage cards representing major national and regional insurers (Select Health, UnitedHealthcare, Humana, Cigna, SCAN, Healthfirst, and Blue Cross Blue Shield). Simply click on any card to view its simulated profile and explore representative benefits.',
    },
    {
      id: 'faq-4',
      category: 'Benefits & Rules',
      question: 'How to understand restrictions and limitations',
      answer:
        'Every Medicare Advantage plan comes with specific rules set by the insurer and CMS. Common restrictions include: 1) In-network provider requirements (services must be performed by contracted dentists or optometrists); 2) Prior authorization (getting plan pre-approval before undergoing major dental or medical procedures); and 3) Expiration dates (most OTC health item funds expire at the end of each quarter and do NOT roll over). On every benefit detail page, we explicitly spell out these conditions in plain English under "What you need to know".',
    },
    {
      id: 'faq-5',
      category: 'Plan Contact',
      question: 'How to contact your health plan directly',
      answer:
        'Look at the back of your physical insurance card. There is always a toll-free "Member Services" phone number printed on the back. When you call, have your Member ID number and date of birth ready. Ask the representative: "I would like to verify my current supplemental allowance balance for [dental / vision / OTC items] and get the network directory."',
    },
    {
      id: 'faq-6',
      category: 'Caregivers',
      question: 'How a family caregiver can help',
      answer:
        'Family caregivers and adult children are essential partners in healthcare. You can help by: 1) Turning on "Caregiver Mode" in our header to view tailored coordination tips; 2) Helping order OTC health items quarterly through the plan catalog or retail app; 3) Scheduling and accompanying your loved one on covered medical transportation rides; and 4) Printing the step-by-step action checklist to take with you to medical and dental appointments.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-20 text-left">
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#16151D]/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6A5AE0]">
            Support & Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#16151D]">
            Help & Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#5E5D6B] max-w-2xl leading-relaxed">
            Find answers to common questions about using Already Yours, understanding your Medicare Advantage plan, and taking action.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Accessible Accordion Sections */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#16151D]/10">
            <h2 className="text-lg font-bold text-[#16151D]">
              Frequently Asked Questions
            </h2>
            <div className="text-xs text-[#5E5D6B]">
              Click any question to expand
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#16151D]/15 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F1EEFE]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#6A5AE0] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#F1EEFE] text-[#5243C9] uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#16151D]">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-[#6A5AE0] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-content`}
                      className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#5E5D6B] leading-relaxed border-t border-[#16151D]/5 animate-fadeIn"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Official Resources & SHIP Directory */}
        <section className="rounded-3xl bg-white border border-[#16151D]/15 p-6 sm:p-8 space-y-6">
          <div className="space-y-1 pb-4 border-b border-[#16151D]/10">
            <h2 className="text-xl font-bold text-[#16151D]">
              Free, Unbiased Medicare Counseling Resources
            </h2>
            <p className="text-xs text-[#5E5D6B]">
              Independent non-profit and government programs that help seniors with Medicare questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* SHIP */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#16151D]/10 space-y-2">
              <span className="text-xs font-bold text-[#6A5AE0] uppercase tracking-wider block">
                State Health Insurance Assistance (SHIP)
              </span>
              <p className="text-xs text-[#5E5D6B] leading-relaxed">
                Free, local, unbiased personalized Medicare counseling provided by trained volunteers funded by federal grants.
              </p>
              <a
                href="https://www.shiphelp.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6A5AE0] hover:underline pt-1"
              >
                <span>Find Your Local SHIP Office (shiphelp.org)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 1-800-MEDICARE */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#16151D]/10 space-y-2">
              <span className="text-xs font-bold text-[#6A5AE0] uppercase tracking-wider block">
                1-800-MEDICARE Helpline
              </span>
              <p className="text-xs text-[#5E5D6B] leading-relaxed">
                Official federal phone hotline open 24 hours a day, 7 days a week (except federal holidays) for Medicare questions.
              </p>
              <div className="pt-1 text-xs font-mono font-bold text-[#5243C9]">
                Call: 1-800-633-4227 (TTY: 1-877-486-2048)
              </div>
            </div>

          </div>
        </section>

        {/* Return Button */}
        <div className="text-center pt-4">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6A5AE0] hover:bg-[#5243C9] text-white font-bold rounded-xl shadow-md text-base"
          >
            <span>Start Exploring Benefits</span>
          </Link>
        </div>

      </main>
    </div>
  );
};
