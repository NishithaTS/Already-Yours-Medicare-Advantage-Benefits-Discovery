import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MOCK_BENEFITS } from '../data/mockBenefits';
import {
  Bookmark,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Printer,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  Smile,
  Ear,
  ShoppingBag,
  Eye,
  Activity,
  Car,
  Utensils,
  Footprints
} from 'lucide-react';

export const SavedBenefitsPage: React.FC = () => {
  const {
    savedBenefitIds,
    toggleSaveBenefit,
    toggleChecklistStep,
    isStepCompleted,
    getCompletedStepsCount,
    currentPlan,
  } = useApp();

  const savedBenefits = MOCK_BENEFITS.filter((b) => savedBenefitIds.includes(b.id));

  const totalSavedAllowance = savedBenefits.reduce(
    (sum, b) => sum + (b.allowanceValueAnnual || 0),
    0
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile': return <Smile className="w-5 h-5 text-[#176B83]" />;
      case 'Ear': return <Ear className="w-5 h-5 text-[#176B83]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#176B83]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#176B83]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#176B83]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#176B83]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#176B83]" />;
      case 'Footprints': return <Footprints className="w-5 h-5 text-[#176B83]" />;
      default: return <Sparkles className="w-5 h-5 text-[#176B83]" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] pb-20">
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#233640]/10 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
              Personal Action Plan
            </span>
            <h1 className="text-3xl font-bold text-[#233640]">
              Saved Benefits & Checklists
            </h1>
            <p className="text-[#63747D] text-sm max-w-xl">
              Track the benefits you want to use for {currentPlan.carrier} ({currentPlan.planName}).
            </p>
          </div>

          {savedBenefits.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#EAF5F7] border border-[#176B83]/20 text-right">
                <span className="text-[11px] font-bold text-[#176B83] uppercase tracking-wider block">
                  Potential Saved Allowances
                </span>
                <span className="text-2xl font-bold text-[#12566C] tabular-nums">
                  ${totalSavedAllowance.toLocaleString()} / yr
                </span>
              </div>

              <button
                onClick={handlePrint}
                className="min-h-[44px] px-4 py-2.5 bg-white border border-[#233640]/20 hover:bg-[#EAF5F7] text-[#233640] text-xs font-bold rounded-xl transition-colors flex items-center gap-2 print:hidden shadow-xs"
                title="Print personal action checklist"
              >
                <Printer className="w-4 h-4 text-[#176B83]" />
                <span className="hidden sm:inline">Print All</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-left">
        
        {savedBenefits.length > 0 ? (
          <div className="space-y-6">
            {savedBenefits.map((benefit) => {
              const completedCount = getCompletedStepsCount(benefit.id);
              const totalSteps = benefit.checklist.length;
              const isAllDone = completedCount === totalSteps;

              return (
                <div
                  key={benefit.id}
                  className="rounded-3xl bg-white border border-[#233640]/15 p-6 sm:p-7 shadow-sm space-y-5"
                >
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#233640]/10 gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="h-11 w-11 rounded-xl bg-[#EAF5F7] flex items-center justify-center shrink-0">
                        {getIcon(benefit.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#176B83] uppercase tracking-wider">
                          {benefit.categoryLabel}
                        </span>
                        <h2 className="text-xl font-bold text-[#233640]">
                          {benefit.name}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#12566C] tabular-nums bg-[#FCFCFA] px-3 py-1 rounded-lg border border-[#233640]/10">
                        {benefit.allowance}
                      </span>

                      <button
                        onClick={() => toggleSaveBenefit(benefit.id)}
                        className="p-2 text-[#63747D] hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Remove from saved benefits"
                        aria-label={`Remove ${benefit.name} from saved list`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#63747D]">
                      <span>Action steps to claim this benefit:</span>
                      <span className={isAllDone ? 'text-emerald-700 font-bold' : ''}>
                        {completedCount} of {totalSteps} steps completed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {benefit.checklist.map((step) => {
                        const isDone = isStepCompleted(benefit.id, step.id);

                        return (
                          <div
                            key={step.id}
                            onClick={() => toggleChecklistStep(benefit.id, step.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 select-none ${
                              isDone
                                ? 'bg-emerald-50/50 border-emerald-300/50 text-emerald-950'
                                : 'bg-[#FCFCFA] border-[#233640]/10 hover:border-[#176B83]/40'
                            }`}
                          >
                            <button
                              type="button"
                              className={`h-5 w-5 rounded flex items-center justify-center transition-colors shrink-0 ${
                                isDone
                                  ? 'bg-emerald-600 text-white'
                                  : 'border-2 border-[#233640]/30 bg-white'
                              }`}
                              aria-label={`Toggle step ${step.stepNumber}`}
                            >
                              {isDone && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                            </button>

                            <div className="flex-1 text-xs sm:text-sm">
                              <span className="font-semibold">{step.title}</span>
                              <span className="text-[#63747D] hidden md:inline ml-2 font-normal">
                                — {step.description}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="pt-2 flex justify-end">
                    <Link
                      to={`/benefits/${benefit.id}`}
                      className="text-xs font-bold text-[#176B83] hover:text-[#12566C] inline-flex items-center gap-1"
                    >
                      <span>Full Benefit Details & Official Sources</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl bg-white border border-[#233640]/15 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="h-16 w-16 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center mx-auto">
              <Bookmark className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#233640]">No Saved Benefits Yet</h2>
            <p className="text-sm text-[#63747D] leading-relaxed">
              When exploring benefits on the dashboard, click the bookmark icon on any card to save it here. You can then print or track your progress completing the steps.
            </p>
            <div className="pt-2">
              <Link
                to="/benefits"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#176B83] hover:bg-[#12566C] text-white text-sm font-bold rounded-xl shadow-sm transition-all"
              >
                <span>Browse Benefits Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Prototype Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#63747D] flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Local Demonstration State:</strong> Your saved benefits and completed checklist steps are stored locally in your browser’s storage for the prototype session. This is not an official health insurer claim submission or binding insurance agreement.
          </p>
        </div>

      </main>
    </div>
  );
};
