import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl shadow-lg border text-sm flex items-start gap-3 transition-all transform animate-slideUp bg-white ${
              isSuccess
                ? 'border-emerald-200 text-slate-800'
                : isWarning
                ? 'border-amber-200 text-slate-800'
                : 'border-[#6A5AE0]/20 text-slate-800'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : isWarning ? (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-[#6A5AE0] shrink-0 mt-0.5" />
            )}

            <div className="flex-1 space-y-0.5">
              <p className="font-bold text-xs uppercase tracking-wider text-[#5243C9]">
                {toast.title}
              </p>
              {toast.description && (
                <p className="text-xs text-[#5E5D6B] leading-snug">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#5E5D6B] hover:text-[#16151D] p-1 rounded-md transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
