import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const SECONDARY_STEPS = [
  { title: 'Confirm your plan details', to: '/upload' },
  { title: 'Follow plain-English checklists', to: '/how-it-works' },
];

export const StepsShowcase: React.FC = () => {
  return (
    <section aria-labelledby="steps-heading" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 id="steps-heading" className="text-3xl sm:text-5xl font-normal tracking-tight text-[#233640]">
            Three simple steps
          </h2>
          <p className="text-sm text-[#63747D] leading-relaxed max-w-sm">
            Designed for clear reading on phones, tablets, and computers, with large text and caregiver tips built in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl min-h-[280px]">
            <img
              src="/images/caregiver.png"
              alt="An adult daughter helping her father review his health plan on a tablet"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Link
              to="/help"
              className="absolute left-4 bottom-4 inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-[#233640] hover:bg-white transition-colors"
            >
              Read the caregiver guide
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <Link
              to="/upload"
              className="group flex-1 flex flex-col justify-between gap-8 rounded-3xl bg-[#176B83] hover:bg-[#12566C] p-6 sm:p-8 text-white transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white/80 uppercase tracking-wider">Step 01</span>
                  <span className="text-2xl sm:text-3xl font-normal tracking-tight">Snap or select your card</span>
                </div>
                <span className="h-11 w-11 shrink-0 rounded-full bg-white text-[#233640] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed max-w-md">
                Upload a photo of your Medicare Advantage card, or pick one of 15 sample cards from carriers like Humana, UnitedHealthcare, and Cigna.
              </p>
            </Link>

            {SECONDARY_STEPS.map((step, index) => (
              <Link
                key={step.title}
                to={step.to}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white border border-[#233640]/5 px-6 py-5 hover:border-[#176B83]/40 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs text-[#63747D] tabular-nums">{`0${index + 2}`}</span>
                  <span className="text-base text-[#233640]">{step.title}</span>
                </span>
                <ArrowDownRight
                  className="w-5 h-5 text-[#233640] transition-transform group-hover:-rotate-90"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
