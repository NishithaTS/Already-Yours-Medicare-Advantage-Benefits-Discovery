import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, CheckCircle2, Sparkles, Shield, HeartHandshake, ArrowRight, Clock, DollarSign, Gift, ChevronRight } from 'lucide-react';
import { SAMPLE_CARDS } from '../data/sampleCards';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 bg-gradient-to-b from-[#EAF5F7]/70 via-[#FCFCFA] to-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#176B83]/20 shadow-xs text-xs font-semibold text-[#12566C]">
                <Clock className="w-3.5 h-3.5 text-[#176B83]" />
                <span>Don’t let what’s already yours expire.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#233640] leading-[1.18] text-balance">
                You may have benefits <span className="text-[#176B83]">waiting for you.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#63747D] leading-relaxed max-w-2xl font-normal">
                Your health plan may include benefits you haven't used yet. Let's discover what your plan offers and how to use it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/upload"
                  className="min-h-[48px] px-7 py-3.5 bg-[#176B83] hover:bg-[#12566C] active:scale-[0.98] text-white text-base font-bold rounded-xl shadow-md transition-all flex items-center gap-2.5"
                >
                  <span>Find My Benefits</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="min-h-[48px] px-6 py-3.5 bg-white border border-[#233640]/20 hover:bg-[#EAF5F7] text-[#233640] text-base font-semibold rounded-xl transition-all flex items-center gap-2"
                >
                  <span>How It Works</span>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-[#233640]/10 flex flex-wrap items-center gap-6 text-xs text-[#63747D]">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>No insurer passwords or SSN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free educational prototype</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#176B83]" />
                  <span>Caregiver & senior friendly</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview Card Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white p-6 shadow-xl border border-[#176B83]/20 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#233640]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
                    Medicare Advantage Allowance
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5F7] text-[#12566C] text-xs font-bold">
                    Resets Yearly
                  </span>
                </div>

                {/* Simulated Allowance Preview */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                        🦷
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#233640]">Dental Care</div>
                        <div className="text-xs text-[#63747D]">Cleanings, fillings & dentures</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#176B83] tabular-nums">$1,000 / yr</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                        🛍️
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#233640]">Over-The-Counter (OTC)</div>
                        <div className="text-xs text-[#63747D]">Toothpaste, vitamins & pharmacy</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#176B83] tabular-nums">$300 / yr</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                        👓
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#233640]">Vision & Eyewear</div>
                        <div className="text-xs text-[#63747D]">Free exam + frames allowance</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#176B83] tabular-nums">$150 / yr</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/upload"
                    className="w-full py-3 bg-[#EAF5F7] hover:bg-[#176B83] text-[#12566C] hover:text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Check with a sample card</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#233640] text-white p-4 rounded-2xl shadow-xl items-center gap-3 border border-white/10 max-w-xs">
                <Gift className="w-8 h-8 text-[#7BD4E2] shrink-0" />
                <p className="text-xs leading-snug">
                  <strong>Did you know?</strong> Most Medicare Advantage extra allowances do <em>not</em> roll over into the new year.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Core Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
            Simple & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#233640] mt-1">
            Three easy steps to discover your benefits
          </h2>
          <p className="text-[#63747D] text-base mt-2">
            Designed for clear reading on tablets, phones, and computers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1: Snap */}
          <div className="p-8 rounded-3xl bg-white border border-[#233640]/10 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#233640]">
                Snap
              </h3>
              <p className="text-base text-[#63747D] leading-relaxed">
                Take a quick photo or upload an image of your insurance card—or simply pick from our 15 preloaded sample cards.
              </p>
            </div>
            <div className="pt-6 border-t border-[#233640]/10 text-xs font-semibold text-[#176B83]">
              Upload card or pick a sample →
            </div>
          </div>

          {/* Step 2: Confirm */}
          <div className="p-8 rounded-3xl bg-white border border-[#233640]/10 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#233640]">
                Confirm
              </h3>
              <p className="text-base text-[#63747D] leading-relaxed">
                Review your plan details. You can easily adjust the provider, plan type, or service area to match your exact card.
              </p>
            </div>
            <div className="pt-6 border-t border-[#233640]/10 text-xs font-semibold text-[#176B83]">
              Verify plan details →
            </div>
          </div>

          {/* Step 3: Discover */}
          <div className="p-8 rounded-3xl bg-white border border-[#233640]/10 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#233640]">
                Discover
              </h3>
              <p className="text-base text-[#63747D] leading-relaxed">
                Explore dental, hearing, vision, gym, rides, and OTC grocery allowances. Get plain-English instructions on how to use them.
              </p>
            </div>
            <div className="pt-6 border-t border-[#233640]/10 text-xs font-semibold text-[#176B83]">
              Step-by-step action checklists →
            </div>
          </div>

        </div>

        <div className="text-center pt-10">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#176B83] hover:bg-[#12566C] text-white font-bold rounded-xl shadow-md transition-all text-base"
          >
            <span>Start Benefit Discovery Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Caregiver & Older Adult Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#12566C] text-white p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-[#EAF5F7]">
              <HeartHandshake className="w-4 h-4 text-[#7BD4E2]" />
              <span>For Family Caregivers & Adult Children</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
              Helping your parents navigate healthcare shouldn't feel like a full-time job.
            </h3>
            <p className="text-[#EAF5F7]/90 text-base leading-relaxed">
              We translate dense 120-page Evidence of Coverage booklets into simple, printable checklists. Turn on <strong>Caregiver Mode</strong> in the header to view tips on ordering OTC supplies, booking doctor rides, and arranging hearing tests.
            </p>
            <div className="pt-2">
              <Link
                to="/help"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#7BD4E2] hover:text-white transition-colors"
              >
                <span>Read the Family Caregiver Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-3 text-sm text-[#EAF5F7]">
            <h4 className="font-bold text-white text-base">Key Benefits Often Overlooked:</h4>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>OTC Catalogs:</strong> $300+ in annual funds for bandages, vitamins, and compression socks.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Medical Transportation:</strong> Up to 24 free one-way rides to clinics and pharmacies.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Post-Discharge Meals:</strong> 28 delivered meals following a hospital or rehab discharge.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Disclaimer Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm space-y-2 text-left">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <Shield className="w-4 h-4 text-amber-700" />
            <span>Important Verification Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
            Benefits, eligibility, restrictions, and availability vary by plan. Always verify coverage with your health plan. The benefit values shown in Already Yours are representative demonstration figures to illustrate how extra allowances work.
          </p>
        </div>
      </section>
    </div>
  );
};
