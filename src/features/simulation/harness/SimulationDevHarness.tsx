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
import { Card, CardHeader, CardContent } from '@/components/ui/card';
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
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
    badgeClass: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300',
  } : isReadyToConfirm ? {
    label: simulationLabels.readyToConfirm || 'Ready to Confirm',
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
    badgeClass: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300',
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
    <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
      {/* ============================================================ */}
      {/* LEFT COLUMN: Scenario Overview + Lifecycle Actions + Dev Tools */}
      {/* ============================================================ */}
      <div className="w-full lg:w-[350px] xl:w-[380px] flex flex-col gap-4 shrink-0">
        {/* Scenario Overview Panel */}
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

        {/* Validation & Confirmation Lifecycle Card */}
        <Card className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm rounded-xl overflow-hidden">
          <CardHeader className="p-4 pb-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Scenario Lifecycle
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusBadge.badgeClass}`}
              >
                {statusBadge.icon}
                <span>{statusBadge.label}</span>
              </span>
            </div>
          </CardHeader>

          <CardContent className="p-4 space-y-3.5 text-xs">
            {/* Primary Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="default"
                size="default"
                onClick={handleValidate}
                className="min-h-[44px] bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm flex items-center justify-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{simulationLabels.devHarness.validateBtn}</span>
              </Button>

              <Button
                type="button"
                variant="default"
                size="default"
                disabled={!isReadyToConfirm}
                onClick={handleConfirm}
                className={`min-h-[44px] font-medium rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors ${
                  isReadyToConfirm
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                }`}
                aria-disabled={!isReadyToConfirm}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{simulationLabels.devHarness.confirmBtn}</span>
              </Button>
            </div>

            {/* Explanatory hint below action buttons */}
            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {isConfirmed ? (
                <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  {simulationLabels.confirmedHint || 'Scenario confirmed. Motion simulation is active.'}
                </span>
              ) : isReadyToConfirm ? (
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  Physical validation passed. Click Confirm Scenario to unlock simulation.
                </span>
              ) : isValidationFailed ? (
                <span className="text-rose-600 dark:text-rose-400 font-medium">
                  Please fix the physical validation errors listed below.
                </span>
              ) : (
                <span className="text-slate-500">
                  {simulationLabels.confirmationDisabledHint || 'Physical validation must pass before confirmation.'}
                </span>
              )}
            </div>

            {/* Validation Issues Alert Box */}
            {isValidationFailed && validationResult?.issues && (
              <div
                className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/80 rounded-lg text-xs space-y-1.5 text-rose-800 dark:text-rose-300"
                role="alert"
                aria-live="polite"
              >
                <div className="font-semibold flex items-center gap-1.5 text-rose-700 dark:text-rose-300">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                  <span>Validation Issues ({validationResult.issues.length})</span>
                </div>
                <ul className="space-y-1 pl-1 pt-0.5">
                  {validationResult.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-rose-500 font-bold shrink-0">•</span>
                      <span>
                        <code className="text-[10px] font-mono bg-rose-100 dark:bg-rose-900/60 px-1 py-0.5 rounded text-rose-900 dark:text-rose-200">
                          {issue.code}
                        </code>{' '}
                        {issue.message}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reset button when confirmed or validated */}
            {(validationResult || confirmedScenario) && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="w-full min-h-[38px] text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{simulationLabels.resetLifecycle || 'Reset / Re-validate'}</span>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Collapsible Developer Tools (Technical metadata & fixture switching) */}
        <details className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden">
          <summary className="flex items-center justify-between p-3.5 cursor-pointer list-none select-none text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <span className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{simulationLabels.devToolsTitle || 'Developer tools & testing fixtures'}</span>
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>

          <div className="p-3.5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs bg-slate-50/40 dark:bg-slate-950/30">
            {/* Fixture Selector */}
            <div className="space-y-1.5">
              <label htmlFor="dev-preset-select" className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                {simulationLabels.devHarness.selectPreset}:
              </label>
              <select
                id="dev-preset-select"
                value={selectedPresetId}
                onChange={(e) => handleSelectPreset(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Technical Metadata */}
            <div className="bg-slate-100/70 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 font-mono text-[11px] space-y-1 text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>ID:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{candidate.scenarioId}</span>
              </div>
              <div className="flex justify-between">
                <span>Revision:</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">r{candidate.revision}</span>
              </div>
              <div className="flex justify-between">
                <span>Target:</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">{candidate.target}</span>
              </div>
            </div>

            {/* Edit Candidate Toggle */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="w-full min-h-[38px] text-xs border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5"
            >
              <span>{simulationLabels.devHarness.editDraftBtn}</span>
            </Button>

            {/* Candidate Editor Drawer */}
            {isEditing && (
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg space-y-2.5">
                <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                  Editing increments candidate revision and immediately stops active playback.
                </p>
                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-0.5">Object Name:</label>
                    <input
                      type="text"
                      value={candidate.object}
                      onChange={(e) => handleFieldChange('object', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1 text-xs text-slate-800 dark:text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-0.5">Axis Direction:</label>
                    <input
                      type="text"
                      value={candidate.axis.direction}
                      onChange={(e) => handleFieldChange('axisDirection', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1 text-xs text-slate-800 dark:text-slate-200"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </details>
      </div>

      {/* ============================================================ */}
      {/* RIGHT COLUMN: Interactive Simulation Canvas or Polished Placeholder */}
      {/* ============================================================ */}
      <div className="w-full flex-1 min-w-0 flex flex-col gap-4">
        {confirmedScenario ? (
          <UniformMotionSimulation
            scenario={confirmedScenario}
            showInfoPanel={false}
            labels={simulationLabels}
          />
        ) : (
          <div className="w-full min-h-[360px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl shadow-sm p-6 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Decorative subtle background grid */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Central icon bubble */}
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-xs">
              <Play className="w-7 h-7 fill-indigo-600/20 dark:fill-indigo-400/20 translate-x-0.5" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
              {simulationLabels.placeholderTitle || 'Interactive Physics Canvas'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-6">
              {simulationLabels.placeholderDesc || 'Validate physical rules and confirm the scenario candidate to launch motion playback.'}
            </p>

            {/* Step prompt badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 font-medium border border-slate-200/80 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>
                {isReadyToConfirm
                  ? 'Step 2 of 2: Click "Confirm Scenario" on the left.'
                  : isValidationFailed
                  ? 'Resolve issues on the left to proceed.'
                  : 'Step 1 of 2: Click "Validate Physical Rules" on the left.'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
