import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, HeartHandshake, Plus, ArrowUpRight, ClipboardCheck } from 'lucide-react';

export const MissionSection: React.FC = () => {
  return (
    <section aria-labelledby="mission-heading" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[28px] bg-white border border-[#233640]/5 p-6 sm:p-10 lg:p-14 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <h2
            id="mission-heading"
            className="md:col-span-5 text-3xl sm:text-4xl font-normal tracking-tight text-[#233640] text-balance"
          >
            Your coverage, in plain English
          </h2>
          <div className="md:col-span-7 flex flex-col gap-5">
            <Quote className="w-6 h-6 text-[#233640]/25" aria-hidden="true" />
            <p className="text-lg sm:text-xl leading-relaxed text-[#233640] text-pretty">
              Evidence of Coverage booklets run over 120 pages. We translate them into short explanations and printable checklists, so you know what&apos;s covered, what rules apply, and exactly how to use each allowance.
            </p>
            <Link
              to="/how-it-works"
              className="self-start inline-flex items-center gap-2 text-sm text-[#233640] hover:text-[#176B83] transition-colors"
            >
              Read more
              <span className="h-6 w-6 rounded-full bg-[#233640] text-white flex items-center justify-center">
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Link
            to="/help"
            className="md:col-span-3 flex flex-col justify-between gap-6 min-h-[240px] rounded-3xl bg-[#EAF7F6] p-5 hover:-translate-y-0.5 transition-transform"
          >
            <span className="h-11 w-11 rounded-full bg-white flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#233640]" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium text-[#233640]">Caregiver mode</span>
              <span className="text-sm text-[#63747D] leading-relaxed">
                Practical tips for ordering OTC items, booking rides, and coordinating discharge meals.
              </span>
            </div>
            <span className="flex items-center justify-between text-xs text-[#233640]">
              # For families
              <span className="h-7 px-3 rounded-full bg-white inline-flex items-center">Learn more</span>
            </span>
          </Link>

          <div className="md:col-span-4 rounded-3xl bg-[#EAF5F7] p-4 flex">
            <Link
              to="/how-it-works"
              className="flex-1 flex flex-col justify-between gap-6 min-h-[208px] rounded-2xl bg-[#176B83] hover:bg-[#12566C] p-5 text-white shadow-[0_16px_32px_-12px_rgba(23,107,131,0.6)] transition-colors"
            >
              <span className="self-start h-6 px-2.5 rounded-full bg-white text-[#233640] text-[11px] inline-flex items-center">
                # Checklists
              </span>
              <ClipboardCheck className="w-10 h-10 text-white/90" strokeWidth={1.4} aria-hidden="true" />
              <span className="flex items-end justify-between gap-2">
                <span className="text-lg leading-snug">
                  Not just coverage.
                  <br />
                  Clear next steps.
                </span>
                <span className="h-7 w-7 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>

          <figure className="md:col-span-5 relative overflow-hidden rounded-3xl bg-[#7BD4E2] min-h-[240px] p-5 flex flex-col justify-between text-white">
            <img
              src="/images/member-portrait.png"
              alt=""
              className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-top opacity-90 [mask-image:linear-gradient(to_left,black_55%,transparent)]"
            />
            <div className="relative flex items-center justify-between gap-3">
              <figcaption className="flex items-center gap-2.5">
                <img
                  src="/images/member-portrait.png"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white/60"
                />
                <span className="flex flex-col">
                  <span className="text-sm font-medium">James, 68</span>
                  <span className="text-xs text-white/85">Demo member story</span>
                </span>
              </figcaption>
              <Link
                to="/upload"
                className="inline-flex items-center gap-1 h-8 px-3 rounded-full bg-white text-[#233640] text-xs font-medium"
              >
                Try it
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <blockquote className="relative max-w-[60%] text-lg sm:text-xl leading-snug text-balance">
              &ldquo;I had $300 in OTC credit I never knew about.&rdquo;
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
};
