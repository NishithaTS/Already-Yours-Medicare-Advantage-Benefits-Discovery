import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SampleCard, Plan } from '../types';
import { SAMPLE_CARDS } from '../data/sampleCards';
import { DEFAULT_PLAN, MOCK_PLANS } from '../data/mockPlans';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}

interface AppContextType {
  selectedCard: SampleCard | null;
  customCardImage: string | null;
  isCustomUpload: boolean;
  currentPlan: Plan;
  savedBenefitIds: string[];
  completedChecklistSteps: Record<string, string[]>;
  caregiverModeEnabled: boolean;
  fontSizePreference: 'normal' | 'large';
  toasts: ToastMessage[];
  selectSampleCard: (card: SampleCard) => void;
  uploadCustomCard: (dataUrl: string, fileName?: string) => void;
  updateCurrentPlan: (plan: Plan) => void;
  toggleSaveBenefit: (benefitId: string) => void;
  isBenefitSaved: (benefitId: string) => boolean;
  toggleChecklistStep: (benefitId: string, stepId: string) => void;
  isStepCompleted: (benefitId: string, stepId: string) => boolean;
  getCompletedStepsCount: (benefitId: string) => number;
  toggleCaregiverMode: () => void;
  toggleFontSize: () => void;
  addToast: (title: string, description?: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  resetDemo: () => void;
}

const STORAGE_KEY = 'already_yours_demo_state_v1';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const [selectedCard, setSelectedCard] = useState<SampleCard | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.selectedCardId) {
          return SAMPLE_CARDS.find((c) => c.id === parsed.selectedCardId) || SAMPLE_CARDS[0];
        }
      }
    } catch {
      // fallback
    }
    return SAMPLE_CARDS[0]; // Default to first sample card for demo friendliness
  });

  const [customCardImage, setCustomCardImage] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.customCardImage || null;
      }
    } catch {
      // fallback
    }
    return null;
  });

  const [isCustomUpload, setIsCustomUpload] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Boolean(parsed.isCustomUpload);
      }
    } catch {
      // fallback
    }
    return false;
  });

  const [currentPlan, setCurrentPlan] = useState<Plan>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.currentPlan) return parsed.currentPlan;
      }
    } catch {
      // fallback
    }
    return DEFAULT_PLAN;
  });

  const [savedBenefitIds, setSavedBenefitIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.savedBenefitIds)) return parsed.savedBenefitIds;
      }
    } catch {
      // fallback
    }
    return ['benefit-dental', 'benefit-otc']; // pre-seed 2 for quick discovery
  });

  const [completedChecklistSteps, setCompletedChecklistSteps] = useState<Record<string, string[]>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.completedChecklistSteps) return parsed.completedChecklistSteps;
      }
    } catch {
      // fallback
    }
    return {
      'benefit-dental': ['step-dental-1'],
    };
  });

  const [caregiverModeEnabled, setCaregiverModeEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Boolean(parsed.caregiverModeEnabled);
      }
    } catch {
      // fallback
    }
    return false;
  });

  const [fontSizePreference, setFontSizePreference] = useState<'normal' | 'large'>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.fontSizePreference === 'large' ? 'large' : 'normal';
      }
    } catch {
      // fallback
    }
    return 'normal';
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      const stateToSave = {
        selectedCardId: selectedCard?.id,
        customCardImage,
        isCustomUpload,
        currentPlan,
        savedBenefitIds,
        completedChecklistSteps,
        caregiverModeEnabled,
        fontSizePreference,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.warn('Unable to write to localStorage:', e);
    }
  }, [
    selectedCard,
    customCardImage,
    isCustomUpload,
    currentPlan,
    savedBenefitIds,
    completedChecklistSteps,
    caregiverModeEnabled,
    fontSizePreference,
  ]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const selectSampleCard = (card: SampleCard) => {
    setSelectedCard(card);
    setIsCustomUpload(false);
    setCustomCardImage(null);

    // Also match associated mock plan if available
    const matchingPlan = MOCK_PLANS.find(
      (p) => p.carrier.toLowerCase() === card.carrier.toLowerCase() || p.contractId === card.contractId
    );
    if (matchingPlan) {
      setCurrentPlan(matchingPlan);
    } else {
      setCurrentPlan({
        id: `plan-${card.id}`,
        carrier: card.carrier,
        planName: card.planName,
        planType: card.planType,
        contractId: card.contractId,
        serviceArea: card.serviceArea,
        estimatedTotalAllowance: '$2,750 / year',
        verified: false,
        notes: `Selected from sample card: ${card.displayLabel}. Actual plan details require CMS member confirmation.`,
      });
    }

    addToast('Sample Card Selected', `${card.displayLabel} ready for simulated review.`, 'info');
  };

  const uploadCustomCard = (dataUrl: string, fileName = 'Uploaded Card') => {
    setCustomCardImage(dataUrl);
    setIsCustomUpload(true);
    setSelectedCard(null);

    // Set generic custom demonstration plan
    setCurrentPlan({
      id: 'plan-custom-upload',
      carrier: 'Plan Provider (Unconfirmed)',
      planName: 'Medicare Advantage Plan (Needs Confirmation)',
      planType: 'HMO',
      contractId: 'HXXXX-XXX',
      serviceArea: 'Local Area (To Be Confirmed)',
      estimatedTotalAllowance: 'To be calculated',
      verified: false,
      notes: 'Card image uploaded by user. Plan details need confirmation before proceeding.',
    });

    addToast('Card Image Uploaded', `${fileName} is ready for simulated review.`, 'success');
  };

  const updateCurrentPlan = (plan: Plan) => {
    setCurrentPlan(plan);
    addToast('Plan Updated', `${plan.planName} has been saved.`, 'success');
  };

  const toggleSaveBenefit = (benefitId: string) => {
    setSavedBenefitIds((prev) => {
      const exists = prev.includes(benefitId);
      if (exists) {
        addToast('Benefit Removed', 'Removed from your saved benefits list.', 'info');
        return prev.filter((id) => id !== benefitId);
      } else {
        addToast('Benefit Saved', 'Added to your saved benefits for easy access.', 'success');
        return [...prev, benefitId];
      }
    });
  };

  const isBenefitSaved = (benefitId: string) => {
    return savedBenefitIds.includes(benefitId);
  };

  const toggleChecklistStep = (benefitId: string, stepId: string) => {
    setCompletedChecklistSteps((prev) => {
      const currentList = prev[benefitId] || [];
      const exists = currentList.includes(stepId);
      let updated: string[];
      if (exists) {
        updated = currentList.filter((id) => id !== stepId);
        addToast('Step Incomplete', 'Marked step as not yet completed.', 'info');
      } else {
        updated = [...currentList, stepId];
        addToast('Step Completed!', 'Great progress toward using this benefit.', 'success');
      }
      return {
        ...prev,
        [benefitId]: updated,
      };
    });
  };

  const isStepCompleted = (benefitId: string, stepId: string) => {
    return Boolean(completedChecklistSteps[benefitId]?.includes(stepId));
  };

  const getCompletedStepsCount = (benefitId: string) => {
    return (completedChecklistSteps[benefitId] || []).length;
  };

  const toggleCaregiverMode = () => {
    setCaregiverModeEnabled((prev) => {
      const next = !prev;
      addToast(
        next ? 'Caregiver Mode Enabled' : 'Caregiver Mode Disabled',
        next
          ? 'Special caregiver advice and coordination tips are now highlighted.'
          : 'Standard view restored.',
        'info'
      );
      return next;
    });
  };

  const toggleFontSize = () => {
    setFontSizePreference((prev) => {
      const next = prev === 'normal' ? 'large' : 'normal';
      addToast(
        next === 'large' ? 'Large Text Enabled' : 'Standard Text Restored',
        'Adjusted text size for comfort and readability.',
        'info'
      );
      return next;
    });
  };

  const resetDemo = () => {
    setSelectedCard(SAMPLE_CARDS[0]);
    setCustomCardImage(null);
    setIsCustomUpload(false);
    setCurrentPlan(DEFAULT_PLAN);
    setSavedBenefitIds(['benefit-dental', 'benefit-otc']);
    setCompletedChecklistSteps({ 'benefit-dental': ['step-dental-1'] });
    setCaregiverModeEnabled(false);
    setFontSizePreference('normal');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    addToast('Demo Reset', 'All settings and saved benefits have been reset.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        selectedCard,
        customCardImage,
        isCustomUpload,
        currentPlan,
        savedBenefitIds,
        completedChecklistSteps,
        caregiverModeEnabled,
        fontSizePreference,
        toasts,
        selectSampleCard,
        uploadCustomCard,
        updateCurrentPlan,
        toggleSaveBenefit,
        isBenefitSaved,
        toggleChecklistStep,
        isStepCompleted,
        getCompletedStepsCount,
        toggleCaregiverMode,
        toggleFontSize,
        addToast,
        removeToast,
        resetDemo,
      }}
    >
      <div className={fontSizePreference === 'large' ? 'text-lg' : 'text-base'}>{children}</div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
