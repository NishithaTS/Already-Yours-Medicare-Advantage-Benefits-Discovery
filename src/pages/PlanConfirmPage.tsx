import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProgressSteps } from '../components/ProgressSteps';
import { MOCK_PLANS } from '../data/mockPlans';
import { Plan, PlanType } from '../types';
import { CheckCircle2, Edit3, ArrowRight, ArrowLeft, Shield, AlertCircle, Sparkles, Building, MapPin, Hash, Check } from 'lucide-react';

export const PlanConfirmPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentPlan, updateCurrentPlan, selectedCard } = useApp();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showPlanPicker, setShowPlanPicker] = useState<boolean>(false);

  // Form State for editing
  const [carrier, setCarrier] = useState(currentPlan.carrier);
  const [planName, setPlanName] = useState(currentPlan.planName);
  const [planType, setPlanType] = useState<PlanType>(currentPlan.planType);
  const [contractId, setContractId] = useState(currentPlan.contractId);
  const [serviceArea, setServiceArea] = useState(currentPlan.serviceArea);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!carrier.trim()) errors.carrier = 'Provider name is required';
    if (!planName.trim()) errors.planName = 'Plan name is required';
    if (!contractId.trim()) errors.contractId = 'CMS Contract ID is required (e.g. H1994-001)';
    if (!serviceArea.trim()) errors.serviceArea = 'Service area is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const updated: Plan = {
      ...currentPlan,
      carrier: carrier.trim(),
      planName: planName.trim(),
      planType,
      contractId: contractId.trim(),
      serviceArea: serviceArea.trim(),
      verified: true,
      notes: 'Custom edited plan details confirmed by user.',
    };

    updateCurrentPlan(updated);
    setIsEditing(false);
  };

  const handleSelectPresetPlan = (plan: Plan) => {
    updateCurrentPlan(plan);
    setCarrier(plan.carrier);
    setPlanName(plan.planName);
    setPlanType(plan.planType);
    setContractId(plan.contractId);
    setServiceArea(plan.serviceArea);
    setShowPlanPicker(false);
  };

  const handleConfirm = () => {
    navigate('/benefits');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <ProgressSteps />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Step Header */}
        <div className="space-y-2 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6A5AE0]">
            Step 3 of 4: Plan Confirmation
          </span>
          <h1 className="text-3xl font-bold text-[#16151D]">
            Confirm your Medicare Advantage plan
          </h1>
          <p className="text-[#5E5D6B] text-base leading-relaxed">
            Benefits vary by insurer, region, and CMS contract. Please review and confirm your plan details below so we display relevant demonstration benefits.
          </p>
        </div>

        {/* Plan Summary Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#16151D]/15 shadow-sm space-y-6">
          
          {/* Demonstration Notice */}
          <div className="p-4 rounded-xl bg-[#F1EEFE] border border-[#6A5AE0]/20 flex items-start gap-3 text-xs text-[#16151D]">
            <Sparkles className="w-4 h-4 text-[#6A5AE0] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#5243C9]">Demonstration Plan Profile:</strong> You are exploring benefits based on this plan configuration. Actual individual coverage and allowances must always be verified against official plan Evidence of Coverage documents.
            </p>
          </div>

          {!isEditing ? (
            /* Summary View */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#16151D]/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#16151D]/10 gap-2">
                  <div>
                    <span className="text-xs font-semibold text-[#6A5AE0] uppercase tracking-wider">
                      Health Plan Provider
                    </span>
                    <h2 className="text-2xl font-bold text-[#16151D]">
                      {currentPlan.carrier}
                    </h2>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#F1EEFE] text-[#5243C9] font-bold text-sm self-start sm:self-auto">
                    {currentPlan.planType} Plan
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs text-[#5E5D6B] flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#6A5AE0]" />
                      <span>Full Plan Name</span>
                    </span>
                    <p className="font-bold text-[#16151D]">{currentPlan.planName}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-[#5E5D6B] flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-[#6A5AE0]" />
                      <span>CMS Contract Identifier</span>
                    </span>
                    <p className="font-mono font-bold text-[#16151D]">{currentPlan.contractId}</p>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <span className="text-xs text-[#5E5D6B] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6A5AE0]" />
                      <span>Service Area & Region</span>
                    </span>
                    <p className="font-medium text-[#16151D]">{currentPlan.serviceArea}</p>
                  </div>
                </div>

                {currentPlan.notes && (
                  <p className="text-xs text-[#5E5D6B] pt-2 border-t border-[#16151D]/10 italic">
                    Note: {currentPlan.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#16151D]/10">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="min-h-[44px] px-4 py-2 bg-white border border-[#16151D]/20 hover:bg-[#F1EEFE] text-[#16151D] text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Edit3 className="w-4 h-4 text-[#6A5AE0]" />
                    <span>Edit Details</span>
                  </button>

                  <button
                    onClick={() => setShowPlanPicker(!showPlanPicker)}
                    className="min-h-[44px] px-4 py-2 bg-white border border-[#16151D]/20 hover:bg-[#F1EEFE] text-[#16151D] text-sm font-semibold rounded-xl transition-all"
                  >
                    <span>Choose Another Plan</span>
                  </button>
                </div>

                <button
                  onClick={handleConfirm}
                  className="w-full sm:w-auto min-h-[44px] px-8 py-3 bg-[#6A5AE0] hover:bg-[#5243C9] active:scale-[0.98] text-white text-base font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>Yes, This Is My Plan — Discover Benefits</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Editable Form View with Validation */
            <form onSubmit={handleSaveEdit} className="space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-[#16151D]/10">
                <h3 className="text-lg font-bold text-[#16151D]">Edit Plan Information</h3>
                <span className="text-xs text-[#5E5D6B]">All fields are validated</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Carrier */}
                <div>
                  <label htmlFor="carrierInput" className="block text-xs font-bold uppercase tracking-wider text-[#16151D] mb-1">
                    Insurance Provider / Carrier *
                  </label>
                  <input
                    id="carrierInput"
                    type="text"
                    value={carrier}
                    onChange={(e) => setCarrier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#16151D]/20 text-sm focus-visible:ring-2 focus-visible:ring-[#6A5AE0]"
                    placeholder="e.g. Select Health, Humana, UHC"
                  />
                  {formErrors.carrier && <p className="text-xs text-red-600 mt-1">{formErrors.carrier}</p>}
                </div>

                {/* Plan Type */}
                <div>
                  <label htmlFor="planTypeInput" className="block text-xs font-bold uppercase tracking-wider text-[#16151D] mb-1">
                    Plan Type *
                  </label>
                  <select
                    id="planTypeInput"
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value as PlanType)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#16151D]/20 text-sm focus-visible:ring-2 focus-visible:ring-[#6A5AE0] bg-white"
                  >
                    <option value="HMO">HMO (Health Maintenance Organization)</option>
                    <option value="PPO">PPO (Preferred Provider Organization)</option>
                    <option value="HMO-POS">HMO-POS (Point of Service)</option>
                    <option value="HMO-POS D-SNP">HMO-POS D-SNP (Dual Medicare/Medicaid)</option>
                    <option value="PFFS">PFFS (Private Fee-for-Service)</option>
                  </select>
                </div>

                {/* Plan Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="planNameInput" className="block text-xs font-bold uppercase tracking-wider text-[#16151D] mb-1">
                    Full Plan Marketing Name *
                  </label>
                  <input
                    id="planNameInput"
                    type="text"
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#16151D]/20 text-sm focus-visible:ring-2 focus-visible:ring-[#6A5AE0]"
                    placeholder="e.g. Select Health Advantage Choice (HMO)"
                  />
                  {formErrors.planName && <p className="text-xs text-red-600 mt-1">{formErrors.planName}</p>}
                </div>

                {/* Contract ID */}
                <div>
                  <label htmlFor="contractIdInput" className="block text-xs font-bold uppercase tracking-wider text-[#16151D] mb-1">
                    CMS Contract Identifier *
                  </label>
                  <input
                    id="contractIdInput"
                    type="text"
                    value={contractId}
                    onChange={(e) => setContractId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#16151D]/20 text-sm font-mono focus-visible:ring-2 focus-visible:ring-[#6A5AE0]"
                    placeholder="e.g. H1994-001"
                  />
                  {formErrors.contractId && <p className="text-xs text-red-600 mt-1">{formErrors.contractId}</p>}
                </div>

                {/* Service Area */}
                <div>
                  <label htmlFor="serviceAreaInput" className="block text-xs font-bold uppercase tracking-wider text-[#16151D] mb-1">
                    Service Area / State *
                  </label>
                  <input
                    id="serviceAreaInput"
                    type="text"
                    value={serviceArea}
                    onChange={(e) => setServiceArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#16151D]/20 text-sm focus-visible:ring-2 focus-visible:ring-[#6A5AE0]"
                    placeholder="e.g. Utah & Idaho Counties"
                  />
                  {formErrors.serviceArea && <p className="text-xs text-red-600 mt-1">{formErrors.serviceArea}</p>}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#16151D]/10">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm font-semibold rounded-xl text-[#5E5D6B] hover:bg-[#F1EEFE]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#6A5AE0] hover:bg-[#5243C9] text-white text-sm font-bold rounded-xl shadow-sm"
                >
                  Save and Update Details
                </button>
              </div>
            </form>
          )}

          {/* Quick Preset Plan Selector Accordion */}
          {showPlanPicker && (
            <div className="pt-6 border-t border-[#16151D]/10 space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-[#16151D]">
                Select from standard Medicare Advantage demonstration plans:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MOCK_PLANS.map((p) => {
                  const isCurrent = p.contractId === currentPlan.contractId;
                  return (
                    <div
                      key={p.id}
                      onClick={() => handleSelectPresetPlan(p)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        isCurrent
                          ? 'border-[#6A5AE0] bg-[#F1EEFE] ring-1 ring-[#6A5AE0]'
                          : 'border-[#16151D]/10 bg-white hover:border-[#6A5AE0]/40 hover:bg-[#F5F5F7]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-[#6A5AE0]">
                        <span>{p.carrier}</span>
                        <span className="font-mono text-[11px]">{p.contractId}</span>
                      </div>
                      <p className="text-sm font-bold text-[#16151D] line-clamp-1 mt-0.5">{p.planName}</p>
                      <p className="text-xs text-[#5E5D6B] line-clamp-1 mt-1">{p.serviceArea}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Navigation Return Button */}
        <div className="flex items-center justify-between text-xs text-[#5E5D6B]">
          <Link to="/review" className="hover:text-[#6A5AE0] flex items-center gap-1.5 py-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to card preview</span>
          </Link>
          <span>Already Yours Education Prototype</span>
        </div>
      </main>
    </div>
  );
};
