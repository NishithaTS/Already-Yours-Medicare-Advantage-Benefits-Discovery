import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { useApp } from '../context/AppContext';
import { UploadCloud, Camera, Trash2, RefreshCw, AlertCircle, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { InsuranceCardSpecimen } from './InsuranceCardSpecimen';

interface Props {
  onUploaded?: () => void;
}

export const CardUploader: React.FC<Props> = ({ onUploaded }) => {
  const { customCardImage, isCustomUpload, uploadCustomCard } = useApp();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(isCustomUpload ? customCardImage : null);
  const [fileName, setFileName] = useState<string>('My Insurance Card');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSizeBytes = 10 * 1024 * 1024; // 10MB

  const handleFileProcess = (file: File) => {
    setErrorMessage(null);

    if (!allowedTypes.includes(file.type.toLowerCase())) {
      setErrorMessage(
        'Please upload a valid image file (JPG, PNG, or WEBP). PDF documents or other file formats are not supported in this image scanner.'
      );
      return;
    }

    if (file.size > maxSizeBytes) {
      setErrorMessage('The image file size is too large (maximum 10MB). Please select a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      setFileName(file.name);
      uploadCustomCard(result, file.name);
    };
    reader.onerror = () => {
      setErrorMessage('Could not read the selected image file. Please try again or select another image.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setFileName('');
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Unable to use this image</p>
            <p className="text-xs text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {!previewUrl ? (
        /* Upload Area */
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative rounded-3xl border-2 border-dashed p-8 sm:p-12 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
            dragActive
              ? 'border-[#176B83] bg-[#EAF5F7]/80 scale-[1.01]'
              : 'border-[#233640]/20 hover:border-[#176B83] bg-white hover:bg-[#EAF5F7]/30'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleInputChange}
            className="hidden"
            aria-label="Upload Insurance Card Image"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleInputChange}
            className="hidden"
            aria-label="Take Photo with Camera"
          />

          <div className="h-16 w-16 rounded-2xl bg-[#EAF5F7] text-[#176B83] flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
            <UploadCloud className="w-8 h-8 text-[#176B83]" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#233640] mb-1">
            Drag and drop your insurance card here
          </h3>
          <p className="text-sm text-[#63747D] max-w-md mb-6">
            Supports JPG, JPEG, PNG, or WEBP photos up to 10MB.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="min-h-[44px] px-5 py-2.5 bg-[#176B83] hover:bg-[#12566C] active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              Browse Files
            </button>

            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="min-h-[44px] px-5 py-2.5 bg-white border border-[#233640]/20 hover:bg-[#EAF5F7] text-[#233640] font-semibold text-sm rounded-xl transition-all flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-[#176B83]" />
              <span>Use Camera</span>
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-[#63747D]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Processed entirely inside your browser. No image is sent to an external server.</span>
          </div>
        </div>
      ) : (
        /* Preview with Replace / Remove controls */
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-[#233640]/15 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#233640]/10">
              <div className="flex items-center gap-2 text-sm font-bold text-[#12566C]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Card Photo Ready for Review</span>
              </div>
              <span className="text-xs text-[#63747D] font-mono truncate max-w-[200px]">
                {fileName}
              </span>
            </div>

            {/* Card Preview */}
            <InsuranceCardSpecimen customImageUrl={previewUrl} isCustomUpload={true} large={true} />

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-[#233640]/20 text-[#233640] hover:bg-[#EAF5F7] transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#176B83]" />
                  <span>Replace Photo</span>
                </button>

                <button
                  type="button"
                  onClick={handleRemove}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Remove</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onUploaded) onUploaded();
                }}
                className="min-h-[44px] px-6 py-2.5 bg-[#176B83] hover:bg-[#12566C] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Continue to Simulated Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
