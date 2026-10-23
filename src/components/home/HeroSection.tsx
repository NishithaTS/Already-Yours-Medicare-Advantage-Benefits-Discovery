import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CreditCard, Search, Star, Smile, Ear, Eye } from 'lucide-react';
import { AvatarStack } from './AvatarStack';

export const HeroSection: React.FC = () => {
  return (
    <section aria-labelledby="hero-heading" className="px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] min-h-[560px] lg:min-h-[600px] flex">
          <img
            src="/images/hero-senior.png"
            alt="A smiling older woman relaxing in a dental chair during a routine checkup"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#16151D]/80 via-[#16151D]/45 to-transparent"
          />

          <div className="relative z-10 flex flex-col justify-between gap-10 w-full p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col gap-6 max-w-xl pt-6 lg:pt-12">
              <span className="self-start inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white text-[#5243C9] text-xs font-medium">
                <Star className="w-3 h-3 fill-[#6A5AE0] text-[#6A5AE0]" aria-hidden="true" />
                Free · No SSN or insurer login
              </span>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05] text-white text-balance"
              >
                Benefits you already have, ready to use.
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-md">
                Your Medicare Advantage plan may include dental, hearing, vision, and grocery allowances you haven&apos;t touched. Let&apos;s find them before they reset.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/upload"
                  className="inline-flex items-center gap-2.5 h-12 pl-1.5 pr-5 rounded-full bg-[#16151D] hover:bg-black text-white text-sm font-medium transition-colors"
                >
                  <span className="h-9 w-9 rounded-full bg-white text-[#16151D] flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </span>
                  Find My Benefits
                </Link>
                <Link
                  to="/upload"
                  className="inline-flex items-center gap-2.5 h-12 pl-1.5 pr-5 rounded-full bg-white hover:bg-[#F1EEFE] text-[#16151D] text-sm font-medium transition-colors"
                >
                  <span className="h-9 w-9 rounded-full bg-[#16151D] text-white flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </span>
                  Try a sample card
                </Link>
              </div>
            </div>

            <Link
              to="/how-it-works"
              className="self-start flex items-center gap-3 p-3 pr-4 rounded-2xl bg-white/85 backdrop-blur-md hover:bg-white transition-colors"
            >
              <AvatarStack />
              <span className="text-xs leading-snug text-[#16151D] max-w-[150px]">
                Built for older adults and family caregivers
              </span>
              <span className="h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <aside
            aria-label="Example allowance insight"
            className="hidden lg:flex absolute z-10 top-8 right-8 w-64 flex-col gap-4 p-4 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 text-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/85">Allowance insight</span>
              <span className="inline-flex items-center gap-0.5 h-6 px-2 rounded-full bg-white text-[#16151D] text-[11px] font-medium">
                <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                Resets Jan 1
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-full bg-white text-[#6A5AE0] flex items-center justify-center">
                <Smile className="w-4 h-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Dental care</span>
                <span className="text-[11px] text-white/80">Cleanings, fillings & dentures</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] text-white/85">
                <span>Used this year</span>
                <span>20%</span>
              </div>
              <div className="h-2 rounded-full bg-white/30 overflow-hidden">
                <div className="h-full w-1/5 rounded-full bg-[#6A5AE0]" />
              </div>
            </div>
            <p className="flex items-baseline gap-1.5">
              <span className="text-4xl font-light tabular-nums">$800</span>
              <span className="text-xs text-white/85">left to use</span>
            </p>
          </aside>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 px-2">
          <p className="text-sm text-[#5E5D6B] max-w-xs">
            Plain-English guidance and step-by-step checklists for every allowance.
          </p>
          <ul className="flex items-center gap-2" aria-label="Benefit categories covered">
            {[
              { icon: Smile, label: 'Dental' },
              { icon: Ear, label: 'Hearing' },
              { icon: Eye, label: 'Vision' },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-white border border-[#16151D]/5 text-sm text-[#16151D]"
              >
                <Icon className="w-4 h-4 text-[#6A5AE0]" aria-hidden="true" />
                {label}
              </li>
            ))}
            <li className="hidden sm:inline-flex items-center h-9 px-3.5 rounded-full bg-[#F1EEFE] text-sm text-[#5243C9]">
              +5 more
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
