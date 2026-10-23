import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProgressSteps } from '../components/ProgressSteps';
import { CardUploader } from '../components/CardUploader';
import { SampleCardGallery } from '../components/SampleCardGallery';
import { UploadCloud, Layers, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { SampleCard } from '../types';

export const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const { isCustomUpload, selectedCard } = useApp();
  const [activeTab, setActiveTab] = useState<'sample' | 'upload'>(isCustomUpload ? 'upload' : 'sample');

  const handleCardSelected = (card: SampleCard) => {
    // Navigate smoothly to simulated review
    navigate('/review');
  };

  const handleCustomUploaded = () => {
    navigate('/review');
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA]">
      <ProgressSteps />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Page Title & Context */}
        <div className="max-w-3xl space-y-2 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#176B83]">
            Step 1 of 4: Choose Your Insurance Card
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#233640]">
            Let’s start with your health plan card
          </h1>
          <p className="text-base sm:text-lg text-[#63747D] leading-relaxed">
            Upload a photo of your Medicare Advantage insurance card, or select one of our 15 sample cards to try the demonstration immediately.
          </p>
        </div>

        {/* Tab Selection: Two equally clear choices */}
        <div className="flex border-b border-[#233640]/15 gap-4">
          <button
            onClick={() => setActiveTab('sample')}
            className={`min-h-[44px] pb-3 text-base font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'sample'
                ? 'border-[#176B83] text-[#12566C]'
                : 'border-transparent text-[#63747D] hover:text-[#233640]'
            }`}
          >
            <Layers className="w-5 h-5 text-[#176B83]" />
            <span>Option A: Try a Sample Card (15 Preloaded)</span>
          </button>

          <button
            onClick={() => setActiveTab('upload')}
            className={`min-h-[44px] pb-3 text-base font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'upload'
                ? 'border-[#176B83] text-[#12566C]'
                : 'border-transparent text-[#63747D] hover:text-[#233640]'
            }`}
          >
            <UploadCloud className="w-5 h-5 text-[#176B83]" />
            <span>Option B: Upload My Card</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'sample' ? (
          <div className="space-y-6">
            <SampleCardGallery onCardSelected={handleCardSelected} />
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            <CardUploader onUploaded={handleCustomUploaded} />
          </div>
        )}

        {/* Safe Prototype Information Note */}
        <div className="p-4 rounded-xl bg-white border border-[#233640]/10 flex items-start gap-3 text-xs text-[#63747D] max-w-3xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong>Privacy Guarantee:</strong> Already Yours does not send card images to any cloud OCR or machine learning service. All sample selection and photo processing happens locally in your browser.
          </p>
        </div>
      </main>
    </div>
  );
};
