import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  CheckCircle,
  Sparkles,
  Shield,
  HeartHandshake,
  Clock,
  ArrowRight,
  HelpCircle,
  FileText,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFA] pb-20 text-left">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#EAF5F7]/80 to-[#FCFCFA] py-14 px-4 sm:px-6 lg:px-8 border-b border-[#233640]/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#12566C] border border-[#176B83]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#176B83]" />
            <span>Demystifying Medicare Advantage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#233640] tracking-tight">
            How Already Yours works
          </h1>

          <p className="text-lg sm:text-xl text-[#63747D] leading-relaxed max-w-2xl font-normal">
            Every year, billions of dollars in Medicare Advantage dental, vision, hearing, and OTC allowances go untouched. We help you find and use what you’ve already paid for.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* The 3 Core Steps in Depth */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
              The Three-Step Discovery Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#233640]">
              From insurance card to usable care in minutes
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#233640]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
                    Step 1: Snap or Select
                  </span>
                  <h3 className="text-xl font-bold text-[#233640]">
                    Upload your insurance card or try a sample
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#63747D] leading-relaxed">
                Take a quick photo of the front of your Medicare Advantage card using your smartphone or computer. If you prefer not to upload your own card, you can pick any of our 15 preloaded sample cards representing major health plans like Select Health, UnitedHealthcare, Humana, Cigna, SCAN, and Blue Cross Blue Shield.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#63747D] flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero cloud storage: Uploaded card photos remain solely on your local device.</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#233640]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
                    Step 2: Confirm
                  </span>
                  <h3 className="text-xl font-bold text-[#233640]">
                    Review and confirm your plan details
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#63747D] leading-relaxed">
                Because healthcare benefits vary by county and specific plan edition (HMO vs PPO), Already Yours presents a plan profile for your confirmation. You can quickly edit any field or choose a different demonstration plan with one click.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#233640]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
                    Step 3: Discover & Act
                  </span>
                  <h3 className="text-xl font-bold text-[#233640]">
                    Explore benefits with plain-English checklists
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#63747D] leading-relaxed">
                Browse through your allowances for dental cleanings, dentures, eyeglasses, hearing aids, gym memberships, and quarterly over-the-counter health items. For every benefit, you receive clear answers to: <strong>What this means</strong>, <strong>What you need to know</strong>, and a step-by-step <strong>Action Checklist</strong> you can check off or print.
              </p>
            </div>

          </div>
        </section>

        {/* Why Benefits Expire Unused */}
        <section className="rounded-3xl bg-[#12566C] text-white p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7BD4E2]">
              The Healthcare Blindspot
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Why do Medicare Advantage allowances expire?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#EAF5F7]">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">1. Dense, Confusing Paperwork</h3>
              <p className="leading-relaxed">
                Medicare Advantage plans send members an annual &ldquo;Evidence of Coverage&rdquo; booklet that often exceeds 150 pages of dense legal terminology. Most members never know they have funds for dental work or free rides.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">2. Strict Quarterly Expiration Dates</h3>
              <p className="leading-relaxed">
                Over-the-counter (OTC) health allowances ($50 to $100 per quarter) usually do <em>not</em> roll over. If unspent by March 31, June 30, September 30, or December 31, the money is forfeited back to the insurer.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">3. Fear of Hidden Costs</h3>
              <p className="leading-relaxed">
                Seniors are rightfully wary of surprise medical bills and avoid booking preventive eye or hearing exams because they worry Medicare won't cover them.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">4. Separate Benefit Cards</h3>
              <p className="leading-relaxed">
                Many plans issue separate debit cards (e.g. UCard, Flex Card, OTC Network Card) that must be activated by phone and swiped only at participating registers.
              </p>
            </div>
          </div>
        </section>

        {/* Caregiver Support Toolkit */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
              Family Caregiver Toolkit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#233640]">
              How adult children can help aging parents
            </h2>
            <p className="text-base text-[#63747D]">
              You don't need your parent's private online portal password to help them discover their benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#233640]/15 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                📱
              </div>
              <h3 className="font-bold text-base text-[#233640]">Order OTC Items Together</h3>
              <p className="text-sm text-[#63747D] leading-relaxed">
                Sit down with your parent quarterly for 10 minutes. Go through the online catalog and order daily essentials: pain relief ointments, calcium supplements, vitamins, and first-aid kits delivered to their door.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#233640]/15 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                🚗
              </div>
              <h3 className="font-bold text-base text-[#233640]">Book Safe Doctor Rides</h3>
              <p className="text-sm text-[#63747D] leading-relaxed">
                If taking time off work to drive them to specialist appointments is tough, use their plan's 24 annual transportation rides. You can accompany them for free as an authorized caregiver escort.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#233640]/15 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                🖨️
              </div>
              <h3 className="font-bold text-base text-[#233640]">Print the Action Checklist</h3>
              <p className="text-sm text-[#63747D] leading-relaxed">
                Use our &ldquo;Print Checklist&rdquo; button to create a clear physical one-pager your parent can bring to their dentist or eye doctor checkup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#233640]/15 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold">
                🍲
              </div>
              <h3 className="font-bold text-base text-[#233640]">Ask for Discharge Meals</h3>
              <p className="text-sm text-[#63747D] leading-relaxed">
                If your parent has a hospital or rehab stay, remind the hospital social worker before discharge to order their 28 covered home-delivered meals.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-[#EAF5F7] p-8 sm:p-10 border border-[#176B83]/20 text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#12566C]">
            Ready to discover what’s already yours?
          </h2>
          <p className="text-[#63747D] text-sm max-w-md mx-auto">
            Try our sample gallery or upload your card photo. Takes less than two minutes.
          </p>
          <div>
            <Link
              to="/upload"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#176B83] hover:bg-[#12566C] text-white font-bold rounded-xl shadow-md transition-all text-base"
            >
              <span>Start Discovery Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
};
