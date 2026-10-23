export type PlanType = 'HMO' | 'PPO' | 'HMO-POS' | 'HMO-POS D-SNP' | 'PFFS' | 'MSA';

export interface SampleCard {
  id: string;
  filename: string;
  localImagePath: string;
  driveUrl: string;
  displayLabel: string;
  carrier: string;
  planName: string;
  planType: PlanType;
  contractId: string;
  serviceArea: string;
  planDetailsVerified: boolean;
  notes?: string;
  accentColor: string;
  textColor: string;
  memberIdDummy: string;
  groupDummy: string;
  rxBin: string;
  pcn: string;
  copayPcp: string;
  copaySpec: string;
  copayEr: string;
}

export interface Plan {
  id: string;
  carrier: string;
  planName: string;
  planType: PlanType;
  contractId: string;
  serviceArea: string;
  estimatedTotalAllowance: string;
  verified: boolean;
  notes: string;
}

export interface SourceReference {
  documentTitle: string;
  section: string;
  excerpt: string;
  officialUrl?: string;
  contactNumber?: string;
  isMockSource: boolean;
}

export interface ChecklistStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  actionHint?: string;
}

export interface Benefit {
  id: string;
  name: string;
  category: 'dental' | 'hearing' | 'otc' | 'vision' | 'fitness' | 'transportation' | 'meals' | 'wellness';
  categoryLabel: string;
  iconName: string;
  allowance: string;
  allowanceValueAnnual: number;
  frequency: string;
  briefSummary: string;
  plainEnglishExplanation: string;
  coverageLimit: string;
  benefitFrequency: string;
  eligibilityConditions: string;
  participatingProviderRequirement: string;
  priorAuthorization: string;
  expirationRules: string;
  checklist: ChecklistStep[];
  sourceReference: SourceReference;
  caregiverTip?: string;
}

export interface UserProgress {
  selectedCardId?: string;
  customCardImage?: string; // base64 or object URL
  isCustomUpload: boolean;
  currentPlan: Plan;
  savedBenefitIds: string[];
  completedChecklistSteps: Record<string, string[]>; // benefitId -> stepIds[]
  caregiverModeEnabled: boolean;
  fontSizePreference: 'normal' | 'large';
}
