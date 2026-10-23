import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MOCK_BENEFITS } from '../data/mockBenefits';
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Circle,
  FileText,
  Phone,
  ExternalLink,
  ShieldAlert,
  HeartHandshake,
  Calendar,
  AlertCircle,
  HelpCircle,
  CheckSquare,
  Printer,
  ChevronRight,
  Smile,
  Ear,
  ShoppingBag,
  Eye,
  Activity,
  Car,
  Utensils,
  Footprints,
  Sparkles
} from 'lucide-react';

export const BenefitDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    currentPlan,
    toggleSaveBenefit,
    isBenefitSaved,
    toggleChecklistStep,
    isStepCompleted,
    getCompletedStepsCount,
    caregiverModeEnabled,
  } = useApp();

  const benefit = MOCK_BENEFITS.find((b) => b.id === id);

  if (!benefit) {
    return (
      <div className="min-h-screen bg-[#FCFCFA] flex flex-col items-center justify-center p-6 text-center">
        <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-[#233640] mb-2">Benefit Not Found</h2>
        <p className="text-sm text-[#63747D] max-w-md mb-6">
          The requested Medicare Advantage benefit could not be located in our demonstration catalog.
        </p>
        <Link
          to="/benefits"
          className="px-6 py-2.5 bg-[#176B83] text-white font-bold rounded-xl shadow-sm text-sm"
        >
          Return to All Benefits
        </Link>
      </div>
    );
  }

  const isSaved = isBenefitSaved(benefit.id);
  const completedStepsCount = getCompletedStepsCount(benefit.id);
  const totalSteps = benefit.checklist.length;
  const progressPercent = Math.round((completedStepsCount / totalSteps) * 100);

  // Icon mapping
  const getIcon = () => {
    switch (benefit.iconName) {
      case 'Smile': return <Smile className="w-8 h-8 text-[#176B83]" />;
      case 'Ear': return <Ear className="w-8 h-8 text-[#176B83]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-[#176B83]" />;
      case 'Eye': return <Eye className="w-8 h-8 text-[#176B83]" />;
      case 'Activity': return <Activity className="w-8 h-8 text-[#176B83]" />;
      case 'Car': return <Car className="w-8 h-8 text-[#176B83]" />;
      case 'Utensils': return <Utensils className="w-8 h-8 text-[#176B83]" />;
      case 'Footprints': return <Footprints className="w-8 h-8 text-[#176B83]" />;
      default: return <Sparkles className="w-8 h-8 text-[#176B83]" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] pb-20">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#233640]/10 bg-white py-3.5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <Link
            to="/benefits"
            className="inline-flex items-center gap-1.5 text-[#176B83] hover:text-[#12566C] font-semibold py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Benefits Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-[#233640]/15 hover:bg-[#EAF5F7] text-[#233640] text-xs font-semibold flex items-center gap-1.5 transition-colors print:hidden"
              title="Print this benefit checklist for your doctor appointment"
            >
              <Printer className="w-3.5 h-3.5 text-[#176B83]" />
              <span className="hidden sm:inline">Print Checklist</span>
            </button>

            <button
              onClick={() => toggleSaveBenefit(benefit.id)}
              className={`min-h-[36px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                isSaved
                  ? 'bg-[#176B83] text-white border-[#176B83]'
                  : 'bg-white text-[#233640] border-[#233640]/20 hover:bg-[#EAF5F7]'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? 'Saved in My List' : 'Save for Later'}</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-left">
        
        {/* Hero Card */}
        <div className="rounded-3xl bg-white border border-[#233640]/15 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#233640]/10">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-2xl bg-[#EAF5F7] flex items-center justify-center shrink-0">
                {getIcon()}
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
                  {benefit.categoryLabel} · {currentPlan.carrier}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#233640] leading-tight">
                  {benefit.name}
                </h1>
                <p className="text-xs text-[#63747D]">
                  CMS Contract: {currentPlan.contractId} · {currentPlan.planName}
                </p>
              </div>
            </div>

            {/* Allowance Box */}
            <div className="p-4 rounded-2xl bg-[#FCFCFA] border border-[#233640]/15 self-start md:self-auto shrink-0 min-w-[200px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#63747D] block">
                Illustrative Allowance
              </span>
              <div className="text-2xl font-bold text-[#12566C] tabular-nums mt-0.5">
                {benefit.allowance}
              </div>
              <span className="text-xs text-[#63747D] block mt-0.5">
                {benefit.frequency}
              </span>
            </div>
          </div>

          {/* Section 1: What this means */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-[#176B83]">
              What this means
            </h2>
            <p className="text-base sm:text-lg text-[#233640] leading-relaxed font-normal">
              {benefit.plainEnglishExplanation}
            </p>
          </div>

          {/* Caregiver Note if enabled */}
          {(caregiverModeEnabled || benefit.caregiverTip) && (
            <div className="p-4 rounded-2xl bg-[#EAF5F7] border border-[#176B83]/20 flex items-start gap-3 text-sm text-[#12566C]">
              <HeartHandshake className="w-5 h-5 text-[#176B83] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block text-xs uppercase tracking-wider font-bold">
                  Caregiver Advice:
                </strong>
                <p className="text-xs sm:text-sm text-[#233640] leading-relaxed">
                  {benefit.caregiverTip}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: What you need to know */}
        <div className="rounded-3xl bg-white border border-[#233640]/15 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-[#233640]/10 pb-3">
            <h2 className="text-xl font-bold text-[#233640]">
              What you need to know
            </h2>
            <p className="text-xs text-[#63747D] mt-0.5">
              Specific coverage rules, provider constraints, and expiration terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            
            {/* Coverage Limit */}
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
              <span className="text-xs font-bold text-[#176B83] uppercase tracking-wider block">
                Coverage Limit
              </span>
              <p className="text-[#233640] leading-relaxed font-medium">
                {benefit.coverageLimit}
              </p>
            </div>

            {/* Benefit Frequency */}
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
              <span className="text-xs font-bold text-[#176B83] uppercase tracking-wider block">
                Benefit Frequency
              </span>
              <p className="text-[#233640] leading-relaxed font-medium">
                {benefit.benefitFrequency}
              </p>
            </div>

            {/* Eligibility Conditions */}
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
              <span className="text-xs font-bold text-[#176B83] uppercase tracking-wider block">
                Eligibility Conditions
              </span>
              <p className="text-[#233640] leading-relaxed font-medium">
                {benefit.eligibilityConditions}
              </p>
            </div>

            {/* Participating Provider Requirement */}
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
              <span className="text-xs font-bold text-[#176B83] uppercase tracking-wider block">
                Network & Provider Rules
              </span>
              <p className="text-[#233640] leading-relaxed font-medium">
                {benefit.participatingProviderRequirement}
              </p>
            </div>

            {/* Prior Authorization */}
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
              <span className="text-xs font-bold text-[#176B83] uppercase tracking-wider block">
                Prior Authorization
              </span>
              <p className="text-[#233640] leading-relaxed font-medium">
                {benefit.priorAuthorization}
              </p>
            </div>

            {/* Expiration Rules */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-950 space-y-1">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                Expiration & Rollover Terms
              </span>
              <p className="leading-relaxed font-medium">
                {benefit.expirationRules}
              </p>
            </div>

          </div>
        </div>

        {/* Section 3: How to use this benefit (Interactive Action Checklist) */}
        <div className="rounded-3xl bg-white border border-[#233640]/15 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#233640]/10 gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#233640] flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-[#176B83]" />
                <span>How to use this benefit</span>
              </h2>
              <p className="text-xs text-[#63747D] mt-0.5">
                Check off each step as you complete it. Your progress is saved in your browser.
              </p>
            </div>

            {/* Progress Meter */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs font-bold text-[#12566C]">
                  {completedStepsCount} of {totalSteps} Completed
                </span>
                <span className="text-[11px] text-[#63747D] block">
                  {progressPercent}% ready
                </span>
              </div>
              <div className="w-20 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-[#176B83] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Numbered Steps List */}
          <div className="space-y-4">
            {benefit.checklist.map((step) => {
              const isDone = isStepCompleted(benefit.id, step.id);

              return (
                <div
                  key={step.id}
                  onClick={() => toggleChecklistStep(benefit.id, step.id)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 select-none ${
                    isDone
                      ? 'border-emerald-500/40 bg-emerald-50/40'
                      : 'border-[#233640]/10 bg-[#FCFCFA] hover:border-[#176B83]/40'
                  }`}
                >
                  {/* Step Checkbox Button */}
                  <div className="pt-0.5 shrink-0">
                    <button
                      type="button"
                      className={`h-6 w-6 rounded-md flex items-center justify-center transition-colors ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-[#233640]/30 bg-white hover:border-[#176B83]'
                      }`}
                      aria-label={`Mark step ${step.stepNumber} as ${isDone ? 'incomplete' : 'complete'}`}
                    >
                      {isDone && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </button>
                  </div>

                  {/* Step Description */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#176B83]">
                        Step {step.stepNumber}
                      </span>
                      <h3
                        className={`text-base font-bold ${
                          isDone ? 'text-emerald-950 line-through opacity-85' : 'text-[#233640]'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#63747D] leading-relaxed">
                      {step.description}
                    </p>

                    {step.actionHint && (
                      <div className="pt-1.5 text-xs text-[#12566C] font-medium flex items-center gap-1.5">
                        <span className="font-bold">Helpful Tip:</span>
                        <span>{step.actionHint}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Official source reference */}
        <div className="rounded-3xl bg-white border border-[#233640]/15 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#233640]/10">
            <h2 className="text-lg font-bold text-[#233640] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#176B83]" />
              <span>Official source document</span>
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase">
              Demonstration Reference
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#233640]">
            <div className="p-4 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-2">
              <div>
                <span className="text-xs font-bold text-[#176B83] block uppercase tracking-wider">
                  Document Reference
                </span>
                <p className="font-semibold text-sm text-[#233640]">
                  {benefit.sourceReference.documentTitle}
                </p>
                <p className="text-xs text-[#63747D]">
                  {benefit.sourceReference.section}
                </p>
              </div>

              <blockquote className="p-3 rounded-lg bg-white border-l-2 border-[#176B83] text-xs text-[#63747D] italic leading-relaxed">
                {benefit.sourceReference.excerpt}
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#63747D]">
              {benefit.sourceReference.officialUrl && (
                <a
                  href={benefit.sourceReference.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#176B83] hover:underline font-semibold"
                >
                  <span>Official Medicare coverage guidelines</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {benefit.sourceReference.contactNumber && (
                <div className="flex items-center gap-1.5 text-[#233640]">
                  <Phone className="w-3.5 h-3.5 text-[#176B83]" />
                  <span>Contact: {benefit.sourceReference.contactNumber}</span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-[#63747D] pt-2 border-t border-[#233640]/10">
              * Note: Phone numbers, excerpts, and URLs are representative demonstration samples. Always check the specific customer service number on the back of your physical card for verified insurer assistance.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <Link
            to="/benefits"
            className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#233640]/20 hover:bg-[#EAF5F7] text-[#233640] text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Benefits</span>
          </Link>

          <Link
            to="/saved"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#176B83] hover:bg-[#12566C] text-white text-sm font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>View Saved Benefits & Checklists</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
  );
};
