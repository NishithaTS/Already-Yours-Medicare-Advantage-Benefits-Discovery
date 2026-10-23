import React, { useState } from 'react';
import { SAMPLE_CARDS } from '../data/sampleCards';
import { SampleCard } from '../types';
import { useApp } from '../context/AppContext';
import { InsuranceCardSpecimen } from './InsuranceCardSpecimen';
import { Check, Sparkles, HelpCircle, ChevronRight, Info, ExternalLink } from 'lucide-react';

interface Props {
  onCardSelected?: (card: SampleCard) => void;
}

export const SampleCardGallery: React.FC<Props> = ({ onCardSelected }) => {
  const { selectedCard, selectSampleCard } = useApp();
  const [selectedId, setSelectedId] = useState<string>(selectedCard?.id || SAMPLE_CARDS[0].id);
  const [carrierFilter, setCarrierFilter] = useState<string>('All');
  const [showAssetNotes, setShowAssetNotes] = useState<boolean>(false);

  const carriers = ['All', 'Select Health', 'Healthfirst', 'Cigna Healthcare', 'SCAN Health Plan', 'UnitedHealthcare', 'Humana', 'Blue Cross Blue Shield'];

  const filteredCards = carrierFilter === 'All'
    ? SAMPLE_CARDS
    : SAMPLE_CARDS.filter((c) => c.carrier.toLowerCase().includes(carrierFilter.toLowerCase()));

  const currentActiveCard = SAMPLE_CARDS.find((c) => c.id === selectedId) || SAMPLE_CARDS[0];

  const handleSelect = (card: SampleCard) => {
    setSelectedId(card.id);
    selectSampleCard(card);
    if (onCardSelected) {
      onCardSelected(card);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#16151D]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F1EEFE] text-[#5243C9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#6A5AE0]" />
              Interactive Sample Gallery
            </span>
            <span className="text-xs text-[#5E5D6B]">
              15 Preloaded Medicare Advantage Cards
            </span>
          </div>
          <p className="text-sm text-[#5E5D6B] mt-1">
            Pick any sample card to simulate the discovery process without uploading your personal documents.
          </p>
        </div>

        <button
          onClick={() => setShowAssetNotes(!showAssetNotes)}
          className="text-xs font-medium text-[#6A5AE0] hover:text-[#5243C9] inline-flex items-center gap-1.5 self-start md:self-auto py-1"
        >
          <Info className="w-3.5 h-3.5" />
          <span>{showAssetNotes ? 'Hide Asset Info' : 'Asset & Download Info'}</span>
        </button>
      </div>

      {/* Asset Instructions Note */}
      {showAssetNotes && (
        <div className="p-4 rounded-xl bg-[#F1EEFE] border border-[#6A5AE0]/20 text-xs text-[#16151D] space-y-2">
          <p className="font-semibold text-[#5243C9]">
            About Sample Card Images:
          </p>
          <p className="text-[#5E5D6B] leading-relaxed">
            All 15 cards are mapped to their respective filenames in <code className="bg-white/80 px-1 py-0.5 rounded border border-[#6A5AE0]/15 font-mono">public/assets/medicare-cards/</code>. If an image file is not present locally, Already Yours automatically renders an authentic high-fidelity card specimen with carrier credentials so the prototype experience is always complete and accessible.
          </p>
          <p className="text-[#5E5D6B]">
            To provide your own physical card images, you can place PNG files named <code className="font-mono">01_select-health.png</code> through <code className="font-mono">15_humana-usaa_variation-2.png</code> in the folder, or use the "Upload My Card" tab above.
          </p>
        </div>
      )}

      {/* Carrier Filter Bar (Segmented button controls with functional click handlers) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {carriers.map((c) => (
          <button
            key={c}
            onClick={() => setCarrierFilter(c)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              carrierFilter === c
                ? 'bg-[#6A5AE0] text-white shadow-sm'
                : 'bg-white border border-[#16151D]/15 text-[#5E5D6B] hover:text-[#16151D] hover:bg-[#F1EEFE]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 15 Sample Cards Grid (2-3 columns desktop, 1-2 mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map((card) => {
          const isSelected = selectedId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleSelect(card)}
              className={`group cursor-pointer rounded-2xl p-3.5 transition-all text-left flex flex-col justify-between border-2 bg-white ${
                isSelected
                  ? 'border-[#6A5AE0] shadow-md ring-2 ring-[#6A5AE0]/20 bg-[#F5F5F7]'
                  : 'border-[#16151D]/10 hover:border-[#6A5AE0]/50 hover:shadow-sm'
              }`}
            >
              {/* Card Thumbnail */}
              <div className="relative">
                <InsuranceCardSpecimen card={card} />
                
                {/* Active Checkmark Indicator */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 bg-[#6A5AE0] text-white p-1 rounded-full shadow-md">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </div>

              {/* Card Meta and Action */}
              <div className="mt-3.5 space-y-2">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5E5D6B]">
                    <span className="font-semibold text-[#6A5AE0]">{card.carrier}</span>
                    <span className="font-mono text-[11px]">{card.contractId}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#16151D] line-clamp-1 group-hover:text-[#6A5AE0] transition-colors mt-0.5">
                    {card.displayLabel}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#16151D]/10 text-xs">
                  <span className="text-[#5E5D6B] text-[11px] font-mono truncate max-w-[140px]">
                    {card.filename}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(card);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#6A5AE0] text-white'
                        : 'bg-[#F1EEFE] text-[#5243C9] group-hover:bg-[#6A5AE0] group-hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Use This Card'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Sticky or Bottom Confirmation Banner */}
      <div className="sticky bottom-4 z-20 p-4 rounded-2xl bg-white border border-[#6A5AE0]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#F1EEFE] text-[#6A5AE0] flex items-center justify-center font-bold shrink-0">
            <Check className="w-5 h-5 text-[#6A5AE0]" />
          </div>
          <div>
            <div className="text-xs text-[#5E5D6B] uppercase font-bold tracking-wider">
              Ready to Review:
            </div>
            <div className="text-sm sm:text-base font-bold text-[#16151D]">
              {currentActiveCard.displayLabel}
            </div>
          </div>
        </div>

        <button
          onClick={() => handleSelect(currentActiveCard)}
          className="w-full sm:w-auto px-6 py-3 bg-[#6A5AE0] hover:bg-[#5243C9] active:scale-[0.98] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span>Use This Sample Card</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
