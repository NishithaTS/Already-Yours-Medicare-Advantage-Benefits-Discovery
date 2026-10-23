import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MOCK_BENEFITS } from '../data/mockBenefits';
import { Benefit } from '../types';
import {
  Search,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  Sparkles,
  Shield,
  Smile,
  Ear,
  ShoppingBag,
  Eye,
  Activity,
  Car,
  Utensils,
  Footprints,
  SlidersHorizontal,
  X,
  HeartHandshake,
  ArrowRight,
  Info
} from 'lucide-react';
import { ProgressSteps } from '../components/ProgressSteps';

export const BenefitsDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentPlan, savedBenefitIds, toggleSaveBenefit, isBenefitSaved, caregiverModeEnabled, getCompletedStepsCount } = useApp();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'allowance' | 'name' | 'saved'>('allowance');

  // Category tags
  const categories = [
    { id: 'all', label: 'All Benefits' },
    { id: 'dental', label: 'Dental Care' },
    { id: 'hearing', label: 'Hearing' },
    { id: 'otc', label: 'OTC Items' },
    { id: 'vision', label: 'Vision' },
    { id: 'fitness', label: 'Fitness & Gym' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'meals', label: 'Meals' },
    { id: 'wellness', label: 'Podiatry / Foot' },
  ];

  // Map icon name string to Lucide component
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#176B83]" />;
      case 'Ear':
        return <Ear className="w-6 h-6 text-[#176B83]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#176B83]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#176B83]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#176B83]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#176B83]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#176B83]" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-[#176B83]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#176B83]" />;
    }
  };

  const filteredAndSortedBenefits = useMemo(() => {
    return MOCK_BENEFITS.filter((benefit) => {
      const matchesCategory = selectedCategory === 'all' || benefit.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        benefit.name.toLowerCase().includes(query) ||
        benefit.briefSummary.toLowerCase().includes(query) ||
        benefit.allowance.toLowerCase().includes(query) ||
        benefit.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'allowance') {
        return b.allowanceValueAnnual - a.allowanceValueAnnual;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'saved') {
        const aSaved = isBenefitSaved(a.id) ? 1 : 0;
        const bSaved = isBenefitSaved(b.id) ? 1 : 0;
        return bSaved - aSaved;
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy, savedBenefitIds]);

  return (
    <div className="min-h-screen bg-[#FCFCFA] pb-16">
      <ProgressSteps />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Confirmed Plan Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#176B83]/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center font-bold shrink-0">
              <Shield className="w-5 h-5 text-[#176B83]" />
            </div>
            <div>
              <div className="text-xs text-[#63747D] uppercase font-bold tracking-wider">
                Active Plan Demonstration
              </div>
              <div className="text-base font-bold text-[#233640] flex flex-wrap items-center gap-2">
                <span>{currentPlan.planName}</span>
                <span className="font-mono text-xs text-[#176B83] bg-[#EAF5F7] px-2 py-0.5 rounded font-normal">
                  {currentPlan.contractId}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/confirm-plan"
              className="text-xs font-semibold text-[#176B83] hover:text-[#12566C] py-1 underline-offset-4 hover:underline"
            >
              Change or edit plan
            </Link>

            <Link
              to="/saved"
              className="px-3.5 py-2 rounded-lg bg-[#EAF5F7] hover:bg-[#176B83] text-[#12566C] hover:text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved Benefits ({savedBenefitIds.length})</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
            Step 4 of 4: Discover Your Benefits
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#233640] tracking-tight">
            Here are benefits to explore.
          </h1>
          <p className="text-base sm:text-lg text-[#63747D] leading-relaxed">
            Understand what's included in your plan and the steps you may need to take.
          </p>
        </div>

        {/* Search, Filter & Sort Controls */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#63747D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search benefits (e.g. dental, hearing aids, OTC, rides, gym)…"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#233640]/15 bg-white text-sm focus-visible:ring-2 focus-visible:ring-[#176B83] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#63747D] hover:text-[#233640]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-[#63747D]" />
              <label htmlFor="sortSelect" className="text-xs font-bold text-[#63747D] uppercase">
                Sort:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2.5 rounded-xl border border-[#233640]/15 bg-white text-xs font-semibold text-[#233640] focus-visible:ring-2 focus-visible:ring-[#176B83]"
              >
                <option value="allowance">Highest Allowance First</option>
                <option value="name">Alphabetical (A–Z)</option>
                <option value="saved">Saved Benefits First</option>
              </select>
            </div>
          </div>

          {/* Category Filter Buttons (Functional Segmented Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#176B83] text-white shadow-sm'
                    : 'bg-white border border-[#233640]/15 text-[#63747D] hover:text-[#233640] hover:bg-[#EAF5F7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        {filteredAndSortedBenefits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedBenefits.map((benefit) => {
              const saved = isBenefitSaved(benefit.id);
              const completedCount = getCompletedStepsCount(benefit.id);
              const totalSteps = benefit.checklist.length;

              return (
                <div
                  key={benefit.id}
                  className="rounded-3xl bg-white border border-[#233640]/15 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Save Bookmark */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-[#EAF5F7] flex items-center justify-center shrink-0">
                        {getBenefitIcon(benefit.iconName)}
                      </div>

                      <button
                        onClick={() => toggleSaveBenefit(benefit.id)}
                        className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl border transition-colors flex items-center justify-center ${
                          saved
                            ? 'bg-[#176B83] text-white border-[#176B83]'
                            : 'bg-white text-[#63747D] border-[#233640]/15 hover:bg-[#EAF5F7] hover:text-[#176B83]'
                        }`}
                        title={saved ? 'Remove from saved benefits' : 'Save benefit to checklist'}
                        aria-label={saved ? `Unsave ${benefit.name}` : `Save ${benefit.name}`}
                      >
                        {saved ? (
                          <BookmarkCheck className="w-5 h-5 fill-white" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Benefit Name & Category (Clean metadata without pill sandwich) */}
                    <div>
                      <div className="text-xs font-semibold text-[#176B83] uppercase tracking-wider">
                        {benefit.categoryLabel}
                      </div>
                      <h3 className="text-xl font-bold text-[#233640] group-hover:text-[#176B83] transition-colors mt-0.5">
                        {benefit.name}
                      </h3>
                    </div>

                    {/* Allowance Highlight Box */}
                    <div className="p-3.5 rounded-xl bg-[#FCFCFA] border border-[#233640]/10 space-y-1">
                      <div className="text-[11px] uppercase tracking-wider text-[#63747D] font-bold">
                        Illustrative Allowance
                      </div>
                      <div className="text-lg font-bold text-[#12566C] tabular-nums">
                        {benefit.allowance}
                      </div>
                      <div className="text-xs text-[#63747D]">
                        Frequency: {benefit.frequency}
                      </div>
                    </div>

                    {/* Plain English summary */}
                    <p className="text-sm text-[#63747D] leading-relaxed line-clamp-2">
                      {benefit.briefSummary}
                    </p>

                    {/* Checklist Progress if any completed */}
                    {completedCount > 0 && (
                      <div className="pt-2 border-t border-[#233640]/10 text-xs text-emerald-700 flex items-center justify-between">
                        <span>Checklist progress:</span>
                        <strong className="font-semibold">{completedCount} of {totalSteps} steps completed</strong>
                      </div>
                    )}

                    {/* Caregiver note callout if enabled */}
                    {caregiverModeEnabled && benefit.caregiverTip && (
                      <div className="p-3 rounded-xl bg-[#EAF5F7] border border-[#176B83]/20 text-xs text-[#12566C] flex items-start gap-2">
                        <HeartHandshake className="w-4 h-4 text-[#176B83] shrink-0 mt-0.5" />
                        <p className="leading-snug">
                          <strong>Caregiver tip:</strong> {benefit.caregiverTip}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-5 mt-4 border-t border-[#233640]/10">
                    <Link
                      to={`/benefits/${benefit.id}`}
                      className="w-full min-h-[44px] py-2.5 px-4 bg-[#EAF5F7] hover:bg-[#176B83] text-[#12566C] hover:text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-[#176B83] group-hover:text-white"
                    >
                      <span>See How to Use It</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="rounded-3xl bg-white border border-[#233640]/15 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#233640]">No matching benefits found</h3>
            <p className="text-sm text-[#63747D]">
              We couldn’t find any benefits matching &ldquo;{searchQuery}&rdquo;. Try clearing your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 bg-[#176B83] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[#12566C] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Informative Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#63747D] flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#176B83] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstration Values Notice:</strong> The allowances and benefit frequencies listed above are realistic representative figures for educational discovery. Already Yours does not access or display individual claims history, verified remaining account balances, or personal health records.
          </p>
        </div>

      </main>
    </div>
  );
};
