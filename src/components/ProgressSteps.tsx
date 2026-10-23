import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, CreditCard, Scan, FileCheck, Sparkles } from 'lucide-react';

interface Step {
  step: number;
  label: string;
  path: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  { step: 1, label: 'Select Card', path: '/upload', icon: CreditCard },
  { step: 2, label: 'Review Card', path: '/review', icon: Scan },
  { step: 3, label: 'Confirm Plan', path: '/confirm-plan', icon: FileCheck },
  { step: 4, label: 'Discover Benefits', path: '/benefits', icon: Sparkles },
];

export const ProgressSteps: React.FC = () => {
  const location = useLocation();

  const getCurrentStepIndex = () => {
    const path = location.pathname;
    if (path.startsWith('/upload')) return 0;
    if (path.startsWith('/review')) return 1;
    if (path.startsWith('/confirm-plan')) return 2;
    if (path.startsWith('/benefits') || path.startsWith('/saved')) return 3;
    return -1;
  };

  const currentIndex = getCurrentStepIndex();
  if (currentIndex === -1) return null; // Don't show on Home, How It Works, Help

  return (
    <div className="w-full bg-[#F1EEFE]/60 border-b border-[#6A5AE0]/15 py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {STEPS.map((s, idx) => {
              const isCompleted = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              const StepIcon = s.icon;

              return (
                <li key={s.step} className="relative flex-1 flex flex-col items-center">
                  {/* Connecting Line */}
                  {idx > 0 && (
                    <div
                      className={`absolute top-4 left-[-50%] right-[50%] h-[2px] -translate-y-1/2 transition-colors ${
                        idx <= currentIndex ? 'bg-[#6A5AE0]' : 'bg-[#16151D]/15'
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Circle / Link */}
                  {isCompleted ? (
                    <Link
                      to={s.path}
                      className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#6A5AE0] text-white hover:bg-[#5243C9] transition-colors focus-visible:ring-2 focus-visible:ring-[#6A5AE0]"
                      title={`Return to step ${s.step}: ${s.label}`}
                    >
                      <Check className="h-4 w-4 stroke-[2.5]" />
                      <span className="sr-only">{s.label} (Completed)</span>
                    </Link>
                  ) : isCurrent ? (
                    <div
                      className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border-2 border-[#6A5AE0] text-[#6A5AE0] shadow-sm font-bold text-sm"
                      aria-current="step"
                    >
                      <StepIcon className="h-4 w-4" />
                      <span className="sr-only">{s.label} (Current)</span>
                    </div>
                  ) : (
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#16151D]/20 text-[#5E5D6B] text-sm">
                      <span className="text-xs font-semibold">{s.step}</span>
                      <span className="sr-only">{s.label}</span>
                    </div>
                  )}

                  {/* Step Label */}
                  <div className="mt-2 text-center">
                    <span
                      className={`block text-xs sm:text-sm font-semibold whitespace-nowrap ${
                        isCurrent
                          ? 'text-[#5243C9]'
                          : isCompleted
                          ? 'text-[#16151D] hover:text-[#6A5AE0]'
                          : 'text-[#5E5D6B]'
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="hidden sm:block text-[11px] text-[#5E5D6B]">
                      Step {s.step} of 4
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
