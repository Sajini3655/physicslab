'use client';

import React, { useState, useEffect } from 'react';
import {
  ConfirmedUniformMotionScenario,
  ConfirmedUniformMotionScenarioSchema,
} from '@/shared/scenarios/uniform-motion';
import { validateUniformMotion } from '../physics/engine';
import { UniformMotionSimulation, UniformMotionSimulationProps } from './UniformMotionSimulation';
import { SimulationDevHarness } from '../harness/SimulationDevHarness';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

const CONFIRMED_STORAGE_KEY = 'physicslab_confirmed_scenario_v1';

export interface LessonSimulationWorkspaceProps {
  simulationLabels: UniformMotionSimulationProps['labels'] & {
    studentScenarioActive?: string;
    noConfirmedScenarioTitle?: string;
    noConfirmedScenarioDesc?: string;
    corruptedScenarioNotice?: string;
    enterQuestionCta?: string;
    returnToReview?: string;
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
  isDevelopment: boolean;
}

export const LessonSimulationWorkspace: React.FC<LessonSimulationWorkspaceProps> = ({
  simulationLabels,
  validationLabels,
  isDevelopment,
}) => {
  const [studentScenario, setStudentScenario] = useState<ConfirmedUniformMotionScenario | null>(null);
  const [status, setStatus] = useState<'loading' | 'valid' | 'empty' | 'malformed'>('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (typeof window === 'undefined' || !window.sessionStorage) {
          setStatus('empty');
          return;
        }

        const raw = window.sessionStorage.getItem(CONFIRMED_STORAGE_KEY);
        if (!raw) {
          setStatus('empty');
          return;
        }

        const parsed = JSON.parse(raw);
        const validated = ConfirmedUniformMotionScenarioSchema.safeParse(parsed);
        if (!validated.success) {
          setStatus('malformed');
          return;
        }

        const confirmed = validated.data;
        const valResult = validateUniformMotion(confirmed.scenario);
        if (
          !valResult.isValid ||
          valResult.scenarioId !== confirmed.scenario.scenarioId ||
          valResult.revision !== confirmed.scenario.revision ||
          confirmed.confirmationId !== confirmed.scenario.scenarioId ||
          confirmed.confirmedRevision !== confirmed.scenario.revision
        ) {
          setStatus('malformed');
          return;
        }

        setStudentScenario(confirmed);
        setStatus('valid');
      } catch {
        setStatus('malformed');
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleClearStudentScenario = () => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(CONFIRMED_STORAGE_KEY);
      }
    } catch {}
    setStudentScenario(null);
    setStatus('empty');
  };

  // 1. Recoverable Malformed / Stale State Alert
  if (status === 'malformed') {
    return (
      <div
        className="w-full p-5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl text-rose-800 dark:text-rose-200 space-y-3"
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center gap-2 font-semibold text-sm">
          <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          <span>
            {simulationLabels.corruptedScenarioNotice ||
              'The stored simulation scenario is invalid or expired.'}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/questions/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-xs"
          >
            <span>{simulationLabels.returnToReview || 'Review Question'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClearStudentScenario}
            className="text-xs rounded-xl"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            <span>{simulationLabels.resetLifecycle || 'Dismiss'}</span>
          </Button>
        </div>
      </div>
    );
  }

  // 2. Confirmed Student Scenario Active
  if (status === 'valid' && studentScenario) {
    return (
      <div className="w-full space-y-4">
        {/* Confirmed Student Scenario Context Banner */}
        <div className="w-full p-4 bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0F766E] text-white">
                <CheckCircle2 className="w-3 h-3" />
                <span>{simulationLabels.studentScenarioActive || 'Confirmed Student Scenario'}</span>
              </span>
              <span className="text-xs text-[#0F766E] dark:text-[#14B8A6] font-medium capitalize">
                {studentScenario.scenario.object}
              </span>
            </div>
            <p className="text-xs text-[#475569] dark:text-[#CBD5E1] line-clamp-1 italic">
              &ldquo;{studentScenario.scenario.originalText}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/questions/new"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold shadow-xs"
            >
              <span>{simulationLabels.returnToReview || 'Review Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClearStudentScenario}
              className="text-xs rounded-xl"
              aria-label="Clear student scenario"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>{simulationLabels.resetLifecycle || 'Reset'}</span>
            </Button>
          </div>
        </div>

        {/* Reused Production Simulation Component */}
        <UniformMotionSimulation
          scenario={studentScenario}
          showInfoPanel={true}
          labels={simulationLabels}
        />
      </div>
    );
  }

  // 3. Empty State (No confirmed scenario)
  if (isDevelopment) {
    return (
      <SimulationDevHarness
        simulationLabels={simulationLabels}
        validationLabels={validationLabels}
      />
    );
  }

  // Production Empty / Recoverable State
  return (
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-sm rounded-2xl overflow-hidden max-w-lg mx-auto">
      <CardHeader className="p-6 pb-3 border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD]/60 dark:bg-[#0B131E]/60">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
          <CardTitle className="text-base font-semibold text-[#14243A] dark:text-[#F8FAFC]">
            {simulationLabels.noConfirmedScenarioTitle || 'Interactive Simulation Workspace'}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          {simulationLabels.noConfirmedScenarioDesc ||
            'Enter and confirm a physics question to simulate your custom scenario in real time.'}
        </p>
        <div className="pt-2">
          <Link
            href="/questions/new"
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-sm font-semibold shadow-xs transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>{simulationLabels.enterQuestionCta || 'Enter a question'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
