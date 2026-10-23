import React, { useState } from 'react';
import { SampleCard } from '../types';
import { Shield, Sparkles, AlertCircle, FileText } from 'lucide-react';

interface Props {
  card?: SampleCard | null;
  customImageUrl?: string | null;
  isCustomUpload?: boolean;
  className?: string;
  large?: boolean;
}

export const InsuranceCardSpecimen: React.FC<Props> = ({
  card,
  customImageUrl,
  isCustomUpload = false,
  className = '',
  large = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // If custom upload image provided:
  if (isCustomUpload && customImageUrl) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden border-2 border-[#176B83] shadow-md bg-slate-900 transition-all ${
          large ? 'max-w-2xl mx-auto aspect-[1.58/1]' : 'w-full aspect-[1.58/1]'
        } ${className}`}
      >
        <img
          src={customImageUrl}
          alt="Uploaded Insurance Card"
          className="w-full h-full object-contain bg-slate-950"
        />
        <div className="absolute top-3 left-3 bg-[#176B83] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
          Your Uploaded Card
        </div>
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md">
          Client-side preview only
        </div>
      </div>
    );
  }

  // If sample card has an image and it didn't error:
  const imageSrc = card?.localImagePath;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-[#233640]/15 shadow-sm transition-all bg-white flex flex-col justify-between ${
        large ? 'max-w-2xl mx-auto aspect-[1.58/1] shadow-lg' : 'w-full aspect-[1.58/1]'
      } ${className}`}
      style={{
        background: !imageError && imageSrc ? '#0C2340' : undefined,
      }}
    >
      {/* If image loads properly */}
      {!imageError && imageSrc && (
        <img
          src={imageSrc}
          alt={card?.displayLabel || 'Sample Medicare Advantage Card'}
          onError={() => setImageError(true)}
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      )}

      {/* Fallback Specimen Simulation Card if image is missing from local path */}
      {(imageError || !imageSrc) && card && (
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#0F2937] via-[#123847] to-[#0A1E29] text-white select-none">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-2 border-b border-white/15 pb-2.5">
            <div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#C9C1FF]" />
                <span className="font-bold text-sm sm:text-base tracking-wide text-white uppercase">
                  {card.carrier}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#EAF5F7]/80 truncate max-w-[200px] sm:max-w-[280px]">
                {card.planName}
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded bg-white/20 text-[#EAF5F7] tracking-wider uppercase">
                {card.planType}
              </span>
              <p className="text-[9px] sm:text-[10px] text-white/60 font-mono mt-0.5">
                {card.contractId}
              </p>
            </div>
          </div>

          {/* Member Info Middle */}
          <div className="my-auto py-2">
            <div className="text-[10px] uppercase tracking-wider text-[#C9C1FF] font-semibold">
              Member Name
            </div>
            <div className="text-sm sm:text-base font-bold tracking-wider text-white">
              ELEANOR ROOSEVELT (SAMPLE)
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10 text-xs">
              <div>
                <span className="text-[9px] uppercase text-white/50 block">Member ID</span>
                <span className="font-mono font-semibold tracking-wider text-white text-[11px] sm:text-xs">
                  {card.memberIdDummy}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase text-white/50 block">Group Number</span>
                <span className="font-mono font-semibold tracking-wider text-white text-[11px] sm:text-xs">
                  {card.groupDummy}
                </span>
              </div>
            </div>
          </div>

          {/* Card Footer: Rx info and Copays */}
          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[9px] sm:text-[10px] text-white/80 font-mono">
            <div className="space-x-2">
              <span>RxBIN: <strong>{card.rxBin}</strong></span>
              <span>PCN: <strong>{card.pcn}</strong></span>
            </div>
            <div className="flex items-center gap-2 font-sans font-medium text-white/90">
              <span>PCP: <strong className="text-white">{card.copayPcp}</strong></span>
              <span>Spec: <strong className="text-white">{card.copaySpec}</strong></span>
              <span>ER: <strong className="text-white">{card.copayEr}</strong></span>
            </div>
          </div>

          {/* Specimen Badge */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-amber-500/90 text-slate-950 font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>SAMPLE SPECIMEN</span>
          </div>
        </div>
      )}

      {/* Asset Identifier Tag */}
      {card && (
        <div className="absolute bottom-1.5 left-2 text-[9px] text-white/40 font-mono truncate max-w-[200px] pointer-events-none">
          {card.filename}
        </div>
      )}
    </div>
  );
};
