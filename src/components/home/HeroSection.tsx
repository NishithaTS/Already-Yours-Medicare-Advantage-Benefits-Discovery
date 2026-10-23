import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AvatarStack } from './AvatarStack';

export const HeroSection: React.FC = () => {
  return (
    <section aria-labelledby="hero-heading" className="px-4 sm:px-6 lg:px-8 pt-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] min-h-[560px] lg:min-h-[640px] flex items-end">
          <img
            src="/images/hero-advisor.png"
            alt="A benefits advisor warmly shaking hands with a smiling older man in a bright clinic lobby"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#233640]/85 via-[#233640]/35 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#12566C]/50 via-transparent to-transparent"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 max-w-2xl">
              <span className="self-start inline-flex items-center gap-2 h-9 pl-1.5 pr-4 rounded-full bg-white/85 backdrop-blur-md text-sm text-[#233640]">
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#12566C] to-[#176B83] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <strong className="font-semibold">Free</strong> to use
                  <span aria-hidden="true" className="mx-1.5">{'•'}</span>
                  <strong className="font-semibold">No</strong> SSN required
                </span>
              </span>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.02] text-white text-balance"
              >
                Your Benefits, Finally Simplified
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-lg">
                Dental, hearing, vision, and grocery allowances are often already in your Medicare Advantage plan. We help you find and use them before they reset.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/upload"
                  className="inline-flex items-center gap-3 h-14 pl-6 pr-2 rounded-full bg-gradient-to-r from-[#12566C] to-[#176B83] hover:from-[#233640] hover:to-[#12566C] text-white text-base font-medium transition-colors"
                >
                  Find My Benefits
                  <span className="h-10 w-10 rounded-full bg-white text-[#12566C] flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-3 h-14 pl-6 pr-2 rounded-full bg-white hover:bg-[#EAF5F7] text-[#233640] text-base font-medium transition-colors"
                >
                  See How It Works
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-[#12566C] to-[#176B83] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>

            <Link
              to="/help"
              className="self-start lg:self-end flex flex-col gap-3 w-full max-w-[290px] p-4 rounded-3xl bg-white hover:bg-[#FCFCFA] transition-colors shadow-lg shadow-[#233640]/10"
            >
              <span className="text-base font-medium text-[#233640]">Plain-English Help</span>
              <span className="flex items-center gap-3 p-3 rounded-2xl bg-[#EAF5F7]">
                <AvatarStack size="md" />
                <span className="text-sm leading-snug text-[#233640]">
                  Built for members &amp; family caregivers
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
