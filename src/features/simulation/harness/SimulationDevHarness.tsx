'use client';

import React, { useState } from 'react';
import {
  UniformMotionCandidate,
  PhysicsValidationResult,
  ConfirmedUniformMotionScenario,
  validCandidateUnknownS,
  validCandidateUnknownU,
  validCandidateUnknownT,
  physicallyIndeterminateCandidate,
} from '@/shared/scenarios/uniform-motion';
import { validateUniformMotion, confirmScenario } from '../physics/engine';
import {
  UniformMotionSimulation,
  UniformMotionSimulationProps,
} from '../components/UniformMotionSimulation';
import { ScenarioInfoPanel } from '../components/ScenarioInfoPanel';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sliders,
  ChevronDown,
  Play,
  Clock,
  Sparkles,
} from 'lucide-react';

interface PresetDefinition {
  id: string;
  name: string;
  candidate: UniformMotionCandidate;
}

const PRESETS: PresetDefinition[] = [
  {
    id: 'milestone-find-s',
    name: '1. Given u=20 m/s, t=10 s (Find s)',
    candidate: validCandidateUnknownS,
  },
  {
    id: 'milestone-find-u',
    name: '2. Given s=-50 m, t=5 s (Find u)',
    candidate: validCandidateUnknownU,
  },
  {
    id: 'milestone-find-t',
    name: '3. Given s=-120 km, u=-60 km/h (Find t)',
    candidate: validCandidateUnknownT,
  },
  {
    id: 'stationary',
    name: '4. Stationary (u=0 m/s, t=10 s, Find s)',
    candidate: {
      schemaVersion: 1,
      scenarioId: 'sc-stat-1',
      revision: 1,
      topic: 'uniform-velocity',
      originalText: 'A parked vehicle remains stationary for 10 seconds. Find its displacement in metres.',
      locale: 'en',
      object: 'parked-car',
      axis: { direction: 'right', basis: 'display-convention' },
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 0, unit: 'm/s' },
      t: { type: 'given', value: 10, unit: 's' },
      target: 's',
      clarifications: [],
    },
  },
  {
    id: 'zero-duration',
    name: '5. Zero Duration (u=0 m/s, t=0 s, Find s)',
    candidate: {
      schemaVersion: 1,
      scenarioId: 'sc-zero-1',
      revision: 1,
      topic: 'uniform-velocity',
      originalText: 'An object at the start line at t = 0 s. Find displacement.',
      locale: 'en',
      object: 'marker',
      axis: { direction: 'east', basis: 'question-stated' },
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 0, unit: 'm/s' },
      t: { type: 'given', value: 0, unit: 's' },
      target: 's',
      clarifications: [],
    },
  },
  {
    id: 'indeterminate',
    name: '6. Indeterminate Zero Test (s=0, u=0, Find t)',
    candidate: physicallyIndeterminateCandidate,
  },
  {
    id: 'invalid-sign',
    name: '7. Sign Mismatch Error (s=+50m, u=-10m/s, Find t)',
    candidate: {
      schemaVersion: 1,
      scenarioId: 'sc-err-sign',
      revision: 1,
      topic: 'uniform-velocity',
      originalText: 'A test scenario with displacement +50 m and velocity -10 m/s.',
      locale: 'en',
      object: 'test-particle',
      axis: { direction: 'right', basis: 'display-convention' },
      s: { type: 'given', value: 50, unit: 'm' },
      u: { type: 'given', value: -10, unit: 'm/s' },
      t: { type: 'unknown', unit: 's' },
      target: 't',
      clarifications: [],
    },
  },
];

interface SimulationDevHarnessProps {
  simulationLabels: UniformMotionSimulationProps['labels'] & {
    placeholderTitle?: string;
    placeholderDesc?: string;
    awaitingValidation?: string;
    readyToConfirm?: string;
    confirmed?: string;
    failed?: string;
    confirmationDisabledHint?: string;
    confirmedHint?: string;
    resetLifecycle?: string;
    devToolsTitle?: string;
    devToolsSubtitle?: string;
    candidateMeta?: string;
    revisionLabel?: string;
    candidateIdLabel?: string;
    step1Validate?: string;
    step2Confirm?: string;
    stepFixIssues?: string;
    devHarness: {
      title: string;
      subtitle: string;
      selectPreset: string;
      validateBtn: string;
      confirmBtn: string;
      editDraftBtn: string;
      statusValid: string;
      statusInvalid: string;
      statusConfirmed: string;
      statusDraft: string;
    };
  };
  validationLabels: Record<string, string>;
}

export const SimulationDevHarness: React.FC<SimulationDevHarnessProps> = ({
  simulationLabels,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [candidate, setCandidate] = useState<UniformMotionCandidate>(PRESETS[0].candidate);
  const [validationResult, setValidationResult] = useState<PhysicsValidationResult | null>(null);
  const [confirmedScenario, setConfirmedScenario] = useState<ConfirmedUniformMotionScenario | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSelectPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (!found) return;

    setSelectedPresetId(presetId);
    setCandidate(JSON.parse(JSON.stringify(found.candidate)));
    // Invalidate prior validation and confirmation immediately on scenario change
    setValidationResult(null);
    setConfirmedScenario(null);
    setIsEditing(false);
  };

  const handleFieldChange = (field: 'object' | 'axisDirection' | 'question', value: string) => {
    // Editing increments candidate revision and resets validation / confirmation
    setCandidate((prev) => {
      const next: UniformMotionCandidate = {
        ...prev,
        revision: prev.revision + 1,
        ...(field === 'object' ? { object: value } : {}),
        ...(field === 'axisDirection'
          ? { axis: { ...prev.axis, direction: value } }
          : {}),
        ...(field === 'question' ? { originalText: value } : {}),
      };
      return next;
    });

    setValidationResult(null);
    setConfirmedScenario(null);
  };

  const handleValidate = () => {
    const result = validateUniformMotion(candidate);
    setValidationResult(result);
    // If validation fails, ensure confirmed scenario is cleared
    if (!result.isValid) {
      setConfirmedScenario(null);
    }
  };

  const handleConfirm = () => {
    if (!validationResult || !validationResult.isValid) return;

    try {
      const confirmed = confirmScenario(candidate, validationResult);
      setConfirmedScenario(confirmed);
      setIsEditing(false);
    } catch (err) {
      console.error('Confirmation error:', err);
    }
  };

  const handleReset = () => {
    setValidationResult(null);
    setConfirmedScenario(null);
  };

  // Determine current lifecycle state
  const isValidationFailed = validationResult !== null && !validationResult.isValid;
  const isReadyToConfirm = validationResult?.isValid === true && !confirmedScenario;
  const isConfirmed = Boolean(confirmedScenario);

  // Status badge config
  const statusBadge = isConfirmed ? {
    label: simulationLabels.confirmed || simulationLabels.devHarness.statusConfirmed,
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />,
    badgeClass: 'bg-[#F0FDFA] dark:bg-[#042F2E] border-[#99F6E4] dark:border-[#115E59] text-[#0F766E] dark:text-[#14B8A6]',
  } : isReadyToConfirm ? {
    label: simulationLabels.readyToConfirm || 'Ready to Confirm',
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />,
    badgeClass: 'bg-[#F0FDFA] dark:bg-[#042F2E] border-[#99F6E4] dark:border-[#115E59] text-[#0F766E] dark:text-[#14B8A6]',
  } : isValidationFailed ? {
    label: simulationLabels.failed || simulationLabels.devHarness.statusInvalid,
    icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
    badgeClass: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300',
  } : {
    label: simulationLabels.awaitingValidation || 'Awaiting Validation',
    icon: <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
    badgeClass: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300',
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* ============================================================ */}
      {/* TOP COMPACT ACTION STRIP: Lifecycle Status + Next Action CTA */}
      {/* ============================================================ */}
      <div className="w-full bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all">
        {/* Status Badge + Natural Guidance Note */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusBadge.badgeClass}`}
          >
            {statusBadge.icon}
            <span>{statusBadge.label}</span>
          </span>

          <span className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-normal leading-tight">
            {isConfirmed ? (
              <span className="text-[#0F766E] dark:text-[#14B8A6] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {simulationLabels.confirmedHint || 'Scenario confirmed. Motion playback is ready.'}
              </span>
            ) : isReadyToConfirm ? (
              <span className="text-[#0F766E] dark:text-[#14B8A6] font-medium">
                Physical rules passed. Click &ldquo;Confirm Scenario&rdquo; to unlock motion playback.
              </span>
            ) : isValidationFailed ? (
              <span className="text-rose-600 dark:text-rose-400 font-medium">
                Physical rules validation failed. Review issues below.
              </span>
            ) : (
              <span className="text-[#64748B] dark:text-[#94A3B8]">
                {simulationLabels.confirmationDisabledHint || 'Validate physical rules before confirming.'}
              </span>
            )}
          </span>
        </div>

        {/* Action Buttons (Validate / Confirm / Reset) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
          <Button
            type="button"
            variant="default"
            size="default"
            onClick={handleValidate}
            className="min-h-[42px] px-4 bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white font-semibold rounded-xl shadow-xs flex items-center justify-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <Sparkles className="w-4 h-4" />
            <span>{simulationLabels.devHarness.validateBtn}</span>
          </Button>

          <Button
            type="button"
            variant="default"
            size="default"
            disabled={!isReadyToConfirm}
            onClick={handleConfirm}
            className={`min-h-[42px] px-4 font-semibold rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-colors ${
              isReadyToConfirm
                ? 'bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F766E]'
                : 'bg-[#F0F6FA] dark:bg-[#17273C] text-[#94A3B8] dark:text-[#64748B] border border-[#DFE8EF] dark:border-[#1E334D] cursor-not-allowed'
            }`}
            aria-disabled={!isReadyToConfirm}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{simulationLabels.devHarness.confirmBtn}</span>
          </Button>

          {(validationResult || confirmedScenario) && (
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleReset}
              className="min-h-[42px] px-3 text-xs sm:text-sm text-[#64748B] hover:text-[#14243A] dark:text-[#94A3B8] dark:hover:text-[#FFFFFF] border-[#DFE8EF] dark:border-[#1E334D] hover:bg-[#F0F6FA] dark:hover:bg-[#17273C] flex items-center justify-center gap-1 cursor-pointer rounded-xl"
              aria-label={simulationLabels.resetLifecycle || 'Reset'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{simulationLabels.resetLifecycle || 'Reset'}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Validation Issues Alert Banner (if failed) */}
      {isValidationFailed && validationResult?.issues && (
        <div
          className="p-3.5 sm:p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/80 rounded-2xl text-xs sm:text-sm space-y-2 text-rose-800 dark:text-rose-300"
          role="alert"
          aria-live="polite"
        >
          <div className="font-semibold flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
            <span>Validation Issues ({validationResult.issues.length})</span>
          </div>
          <ul className="space-y-1.5 pl-1 pt-0.5">
            {validationResult.issues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-rose-500 font-bold shrink-0">•</span>
                <span>
                  <code className="text-xs font-mono bg-rose-100 dark:bg-rose-900/60 px-1.5 py-0.5 rounded text-rose-900 dark:text-rose-200">
                    {issue.code}
                  </code>{' '}
                  {issue.message}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ============================================================ */}
      {/* TWO-COLUMN WORKSPACE: Scenario Sidebar (Left) + Canvas (Right) */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Column: Streamlined Scenario Overview & Secondary Dev Tools */}
        <div className="w-full lg:w-[350px] xl:w-[380px] flex flex-col gap-4 shrink-0">
          <ScenarioInfoPanel
            candidate={candidate}
            labels={{
              scenarioDetails: simulationLabels.scenarioDetails,
              question: simulationLabels.question,
              object: simulationLabels.object,
              axis: simulationLabels.axis,
              givenValues: simulationLabels.givenValues,
              targetUnknown: simulationLabels.targetUnknown,
              displacement: simulationLabels.displacement,
              velocity: simulationLabels.velocity,
              time: simulationLabels.time,
              unknownValue: simulationLabels.unknownValue,
              visibilityNotice: simulationLabels.visibilityNotice,
            }}
          />

          {/* Secondary Collapsible Developer Tools */}
          <details className="group bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
            <summary className="flex items-center justify-between p-3.5 cursor-pointer list-none select-none text-xs font-semibold text-[#14243A] dark:text-[#CBD5E1] hover:bg-[#F6FAFD] dark:hover:bg-[#17273C] transition-colors">
              <span className="flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>{simulationLabels.devToolsTitle || 'Developer tools & testing fixtures'}</span>
              </span>
              <ChevronDown className="w-4 h-4 text-[#64748B] transition-transform group-open:rotate-180" />
            </summary>

            <div className="p-3.5 pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D] space-y-3 text-xs bg-[#F6FAFD]/40 dark:bg-[#0B131E]/40">
              {/* Fixture Selector */}
              <div className="space-y-1.5">
                <label htmlFor="dev-preset-select" className="text-[11px] font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider block">
                  {simulationLabels.devHarness.selectPreset}:
                </label>
                <select
                  id="dev-preset-select"
                  value={selectedPresetId}
                  onChange={(e) => handleSelectPreset(e.target.value)}
                  className="w-full bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-xl px-3 py-2 text-xs text-[#14243A] dark:text-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                >
                  {PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technical Metadata (including Axis Basis) */}
              <div className="bg-[#FFFFFF] dark:bg-[#0B131E] p-2.5 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] font-mono text-[11px] space-y-1 text-[#64748B] dark:text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>ID:</span>
                  <span className="font-semibold text-[#14243A] dark:text-[#CBD5E1]">{candidate.scenarioId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Revision:</span>
                  <span className="font-semibold text-[#0F766E] dark:text-[#14B8A6]">r{candidate.revision}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="font-semibold text-[#D97706] dark:text-[#FBBF24]">{candidate.target}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D]">
                  <span>Basis:</span>
                  <span className="text-[#14243A] dark:text-[#CBD5E1]">{candidate.axis.basis}</span>
                </div>
              </div>

              {/* Edit Scenario Toggle */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="w-full min-h-[38px] text-xs border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#CBD5E1] hover:bg-[#F0F6FA] dark:hover:bg-[#17273C] flex items-center justify-center gap-1.5 rounded-xl"
              >
                <span>{simulationLabels.devHarness.editDraftBtn}</span>
              </Button>

              {/* Scenario Editor Drawer */}
              {isEditing && (
                <div className="p-3 bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-xl space-y-2.5">
                  <p className="text-[11px] text-[#B45309] dark:text-[#FBBF24] font-medium leading-relaxed">
                    Editing increments revision and stops active playback.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[11px] text-[#64748B] mb-0.5">Object Name:</label>
                      <input
                        type="text"
                        value={candidate.object}
                        onChange={(e) => handleFieldChange('object', e.target.value)}
                        className="w-full bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] rounded-lg px-2.5 py-1 text-xs text-[#14243A] dark:text-[#CBD5E1]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#64748B] mb-0.5">Axis Direction:</label>
                      <input
                        type="text"
                        value={candidate.axis.direction}
                        onChange={(e) => handleFieldChange('axisDirection', e.target.value)}
                        className="w-full bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] rounded-lg px-2.5 py-1 text-xs text-[#14243A] dark:text-[#CBD5E1]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </details>
        </div>

        {/* Right Column: Interactive Simulation Canvas or Polished Placeholder */}
        <div className="w-full flex-1 min-w-0 flex flex-col gap-4">
          {confirmedScenario ? (
            <UniformMotionSimulation
              scenario={confirmedScenario}
              showInfoPanel={false}
              labels={simulationLabels}
            />
          ) : (
            <div className="w-full min-h-[360px] bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-xs p-6 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Decorative subtle background grid */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#0F766E_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Central icon bubble */}
              <div className="w-16 h-16 rounded-2xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] flex items-center justify-center text-[#0F766E] dark:text-[#14B8A6] mb-4 shadow-xs">
                <Play className="w-7 h-7 fill-[#0F766E]/20 dark:fill-[#14B8A6]/20 translate-x-0.5" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] mb-2 font-heading">
                {simulationLabels.placeholderTitle || 'Interactive Physics Canvas'}
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] max-w-md leading-relaxed mb-6 font-normal">
                {simulationLabels.placeholderDesc || 'Validate physical rules and confirm the scenario to launch motion playback.'}
              </p>

              {/* Step prompt badge (No 'on the left' wording) */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F6FA] dark:bg-[#17273C] text-xs sm:text-sm text-[#14243A] dark:text-[#CBD5E1] font-semibold border border-[#DFE8EF] dark:border-[#1E334D]">
                <span className="w-2 h-2 rounded-full bg-[#0F766E] dark:bg-[#14B8A6] animate-pulse" />
                <span>
                  {isReadyToConfirm
                    ? (simulationLabels.step2Confirm || 'Step 2: Confirm scenario above to launch playback.')
                    : isValidationFailed
                    ? (simulationLabels.stepFixIssues || 'Resolve the physical issues above to proceed.')
                    : (simulationLabels.step1Validate || 'Step 1: Validate scenario above to proceed.')}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
