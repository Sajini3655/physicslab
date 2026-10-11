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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, RefreshCw, FlaskConical } from 'lucide-react';

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

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Dev Harness Controls Card */}
      <Card className="bg-slate-900 border-indigo-900/60 shadow-lg text-slate-100">
        <CardHeader className="border-b border-slate-800 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-indigo-400" />
              <div>
                <CardTitle className="text-lg font-bold text-indigo-300">
                  {simulationLabels.devHarness.title}
                </CardTitle>
                <p className="text-xs text-slate-400 mt-0.5">
                  {simulationLabels.devHarness.subtitle}
                </p>
              </div>
            </div>
            {/* Status Indicator */}
            <div>
              {confirmedScenario ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 border border-emerald-800 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {simulationLabels.devHarness.statusConfirmed} (r{confirmedScenario.confirmedRevision})
                </span>
              ) : validationResult?.isValid ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 border border-sky-800 text-sky-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {simulationLabels.devHarness.statusValid}
                </span>
              ) : validationResult?.isValid === false ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950 border border-rose-800 text-rose-300">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {simulationLabels.devHarness.statusInvalid}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                  {simulationLabels.devHarness.statusDraft} (r{candidate.revision})
                </span>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4 space-y-4">
          {/* Preset Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <label htmlFor="preset-select" className="text-xs font-semibold text-slate-300">
              {simulationLabels.devHarness.selectPreset}:
            </label>
            <select
              id="preset-select"
              value={selectedPresetId}
              onChange={(e) => handleSelectPreset(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Scenario Fields */}
          <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs space-y-2">
            <div className="flex justify-between items-center text-slate-400">
              <span>Candidate ID: <strong className="text-slate-200">{candidate.scenarioId}</strong> (rev {candidate.revision})</span>
              <span>Target: <strong className="text-amber-400">{candidate.target}</strong></span>
              <span>Axis: <strong className="text-slate-200">{candidate.axis.direction} ({candidate.axis.basis})</strong></span>
            </div>
            <p className="text-slate-300 italic border-l-2 border-indigo-500 pl-2">
              &quot;{candidate.originalText}&quot;
            </p>
          </div>

          {/* Action Buttons: Lifecycle Flow */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleValidate}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs"
            >
              {simulationLabels.devHarness.validateBtn}
            </Button>

            <Button
              variant="default"
              size="sm"
              disabled={!validationResult?.isValid || Boolean(confirmedScenario)}
              onClick={handleConfirm}
              className={`text-xs font-medium ${
                validationResult?.isValid && !confirmedScenario
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white animate-pulse'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              {simulationLabels.devHarness.confirmBtn}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-slate-300 border-slate-700 hover:bg-slate-800"
            >
              {simulationLabels.devHarness.editDraftBtn}
            </Button>

            {(validationResult || confirmedScenario) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1" />
                Reset Lifecycle
              </Button>
            )}
          </div>

          {/* Editor drawer when isEditing is true */}
          {isEditing && (
            <div className="p-4 bg-slate-950 border border-slate-700 rounded-lg space-y-3 mt-3">
              <p className="text-xs font-semibold text-indigo-400">
                Modify Candidate (editing immediately invalidates confirmation &amp; stops playback):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Object Name:</label>
                  <input
                    type="text"
                    value={candidate.object}
                    onChange={(e) => handleFieldChange('object', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Axis Direction:</label>
                  <input
                    type="text"
                    value={candidate.axis.direction}
                    onChange={(e) => handleFieldChange('axisDirection', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Validation Issues Alert */}
          {validationResult && !validationResult.isValid && validationResult.issues && (
            <div className="p-3 bg-rose-950/40 border border-rose-800 rounded-lg text-xs space-y-1 text-rose-300">
              <div className="font-semibold flex items-center gap-1.5 text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                Validation Issues ({validationResult.issues.length}):
              </div>
              <ul className="list-disc list-inside space-y-0.5 pt-1 pl-1">
                {validationResult.issues.map((issue, idx) => (
                  <li key={idx}>
                    <code className="text-rose-200 font-mono">[{issue.code}]</code> {issue.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmed Uniform Motion Simulation */}
      {confirmedScenario ? (
        <UniformMotionSimulation
          scenario={confirmedScenario}
          labels={simulationLabels}
        />
      ) : (
        <div className="p-8 bg-slate-900/40 border border-dashed border-slate-800 rounded-xl text-center text-slate-400">
          <p className="text-sm font-medium">Simulation Idle</p>
          <p className="text-xs text-slate-500 mt-1">
            Validate physical rules and confirm the scenario candidate above to launch interactive simulation.
          </p>
        </div>
      )}
    </div>
  );
};
