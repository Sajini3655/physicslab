'use client';

import React from 'react';
import {
  ConfirmedUniformMotionScenario,
  UniformMotionCandidate,
} from '@/shared/scenarios/uniform-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Compass, HelpCircle, BookOpen, Layers } from 'lucide-react';

interface ScenarioInfoPanelProps {
  scenario?: ConfirmedUniformMotionScenario;
  candidate?: UniformMotionCandidate;
  labels: {
    scenarioDetails: string;
    question: string;
    object: string;
    axis: string;
    givenValues: string;
    targetUnknown: string;
    displacement: string;
    velocity: string;
    time: string;
    unknownValue: string;
    visibilityNotice: string;
  };
}

export const ScenarioInfoPanel: React.FC<ScenarioInfoPanelProps> = ({
  scenario,
  candidate: candidateProp,
  labels,
}) => {
  const activeCandidate = scenario ? scenario.scenario : candidateProp;

  if (!activeCandidate) {
    return null;
  }

  const { originalText, object, axis, target, s, u, t } = activeCandidate;

  const targetLabel =
    target === 's'
      ? labels.displacement
      : target === 'u'
        ? labels.velocity
        : labels.time;

  return (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm rounded-xl overflow-hidden">
      <CardHeader className="p-4 pb-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>{labels.scenarioDetails}</span>
          </CardTitle>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-medium">
            <Layers className="w-3 h-3" />
            <span className="capitalize">{object}</span>
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4 text-xs">
        {/* Problem Statement */}
        <div className="bg-slate-50 dark:bg-slate-950/70 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {labels.question}
          </span>
          <p className="text-slate-800 dark:text-slate-200 font-normal leading-relaxed break-words">
            {originalText}
          </p>
        </div>

        {/* Given Quantities & Axis */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            {labels.givenValues}
          </span>
          <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-lg border border-slate-200/70 dark:border-slate-800 p-2.5 space-y-1.5">
            {s.type === 'given' && (
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="text-slate-600 dark:text-slate-400">{labels.displacement}:</span>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {s.value > 0 ? '+' : ''}{s.value} {s.unit}
                </span>
              </div>
            )}
            {u.type === 'given' && (
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="text-slate-600 dark:text-slate-400">{labels.velocity}:</span>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {u.value > 0 ? '+' : ''}{u.value} {u.unit}
                </span>
              </div>
            )}
            {t.type === 'given' && (
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="text-slate-600 dark:text-slate-400">{labels.time}:</span>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {t.value} {t.unit}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 pt-1.5 border-t border-slate-200/60 dark:border-slate-800">
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-slate-400" />
                {labels.axis}:
              </span>
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {axis.direction} <span className="text-[10px] text-slate-500">({axis.basis})</span>
              </span>
            </div>
          </div>
        </div>

        {/* Target to Find */}
        <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-lg p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
              {labels.targetUnknown}
            </span>
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-amber-900 dark:text-amber-200">
              {targetLabel}
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900/50 text-amber-900 dark:text-amber-300 font-mono font-semibold">
              ?
            </span>
          </div>
          <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 leading-relaxed pt-0.5">
            {labels.visibilityNotice}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
