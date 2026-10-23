import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProgressSteps } from '../components/ProgressSteps';
import { InsuranceCardSpecimen } from '../components/InsuranceCardSpecimen';
import { Loader2, CheckCircle, AlertTriangle, ArrowRight, ArrowLeft, Edit3, ShieldAlert, Sparkles } from 'lucide-react';

export const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedCard, customCardImage, isCustomUpload, currentPlan } = useApp();
  const [isScanning, setIsScanning] = useState<boolean>(true);

  // Simulated scan animation for 1.6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  const hasSupportedPlan = !isCustomUpload && selectedCard;

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <ProgressSteps />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Step Header */}
        <div className="space-y-2 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6A5AE0]">
            Step 2 of 4: Simulated Card Review
          </span>
          <h1 className="text-3xl font-bold text-[#16151D]">
            Reviewing your insurance card
          </h1>
          <p className="text-[#5E5D6B] text-base">
            This simulated demonstration inspects card fields before proceeding to your benefit discovery.
          </p>
        </div>

        {/* Large Card Preview Container */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-[#16151D]/15 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#16151D]/10 text-xs">
            <span className="font-semibold text-[#6A5AE0]">
              {isCustomUpload ? 'Uploaded Card Photo' : `Sample: ${selectedCard?.displayLabel}`}
            </span>
            <span className="text-[#5E5D6B]">
              Aspect Ratio: 1.58 : 1 (Standard Health ID)
            </span>
          </div>

          {/* Card Display with scanning laser line effect during scan */}
          <div className="relative overflow-hidden rounded-2xl">
            <InsuranceCardSpecimen
              card={selectedCard}
              customImageUrl={customCardImage}
              isCustomUpload={isCustomUpload}
              large={true}
            />

            {isScanning && (
              <div className="absolute inset-0 bg-[#5243C9]/20 backdrop-blur-[1px] flex flex-col items-center justify-center text-white">
                <div className="h-1 bg-[#C9C1FF] w-full absolute top-0 animate-bounce" />
                <div className="p-4 rounded-2xl bg-[#16151D]/90 backdrop-blur-md flex items-center gap-3 shadow-lg">
                  <Loader2 className="w-5 h-5 text-[#C9C1FF] animate-spin" />
                  <span className="text-sm font-semibold tracking-wide">Reviewing your card…</span>
                </div>
              </div>
            )}
          </div>

          {/* Simulated Disclaimer Banner */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#5E5D6B] flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              <strong>Simulated demonstration:</strong> No live OCR, AI recognition, or external insurance database queries are performed.
            </span>
          </div>

          {/* Extracted / Mocked Plan Details Status */}
          {!isScanning && (
            <div className="space-y-4 pt-2">
              {hasSupportedPlan ? (
                <div className="p-5 rounded-2xl bg-[#F1EEFE] border border-[#6A5AE0]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#5243C9]">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>Card Matched to Demonstration Plan</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#6A5AE0] bg-white px-2 py-0.5 rounded border border-[#6A5AE0]/20">
                      {selectedCard.contractId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <span className="text-[#5E5D6B] block">Identified Insurer:</span>
                      <strong className="text-sm text-[#16151D]">{selectedCard.carrier}</strong>
                    </div>
                    <div>
                      <span className="text-[#5E5D6B] block">Plan Name:</span>
                      <strong className="text-sm text-[#16151D]">{selectedCard.planName}</strong>
                    </div>
                    <div>
                      <span className="text-[#5E5D6B] block">Plan Type:</span>
                      <strong className="text-[#16151D]">{selectedCard.planType}</strong>
                    </div>
                    <div>
                      <span className="text-[#5E5D6B] block">Region / Service Area:</span>
                      <strong className="text-[#16151D]">{selectedCard.serviceArea}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5E5D6B] pt-2 border-t border-[#6A5AE0]/15">
                    Plan details need your confirmation before uncovering extra benefits.
                  </p>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span>Sample card selected — plan details need confirmation.</span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Because this is an uploaded or unverified card image, plan details cannot be inferred automatically. Please confirm or manually select your Medicare Advantage plan on the next screen.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#16151D]/10">
                <Link
                  to="/upload"
                  className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#16151D]/20 hover:bg-[#F1EEFE] text-[#16151D] text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Choose Another Card</span>
                </Link>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => navigate('/confirm-plan')}
                    className="w-full sm:w-auto px-6 py-3 bg-[#6A5AE0] hover:bg-[#5243C9] active:scale-[0.98] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Confirm Plan Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
