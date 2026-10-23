import React from 'react';
import { Link } from 'react-router-dom';
import { Search, CreditCard, ShieldAlert } from 'lucide-react';
import { AvatarStack } from './AvatarStack';

export const CtaBanner: React.FC = () => {
  return (
    <section aria-labelledby="cta-heading" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <div className="rounded-[28px] bg-[#F1EEFE] px-6 py-16 sm:py-20 flex flex-col items-center gap-5 text-center">
          <AvatarStack size="md" />
          <p className="text-sm text-[#16151D]">15 sample plans from 7 major carriers</p>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-5xl font-normal tracking-tight text-[#16151D] text-balance max-w-2xl"
          >
            Don&apos;t let what&apos;s already yours expire
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/upload"
              className="inline-flex items-center gap-2.5 h-12 pl-1.5 pr-5 rounded-full bg-[#16151D] hover:bg-black text-white text-sm font-medium transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-white text-[#16151D] flex items-center justify-center">
                <Search className="w-4 h-4" aria-hidden="true" />
              </span>
              Find My Benefits
            </Link>
            <Link
              to="/upload"
              className="inline-flex items-center gap-2.5 h-12 pl-1.5 pr-5 rounded-full bg-white hover:bg-white/70 text-[#16151D] text-sm font-medium transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-[#16151D] text-white flex items-center justify-center">
                <CreditCard className="w-4 h-4" aria-hidden="true" />
              </span>
              Try a sample card
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-[#16151D]/5 p-5 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#6A5AE0] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-[#5E5D6B] leading-relaxed">
            <strong className="font-medium text-[#16151D]">Important verification notice:</strong> Benefits, eligibility, restrictions, and availability vary by plan. Always verify coverage with your health plan. Values shown are representative demonstration figures.
          </p>
        </div>
      </div>
    </section>
  );
};
