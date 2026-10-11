'use client';

import React from 'react';
import { ConfirmedUniformMotionScenario } from '@/shared/scenarios/uniform-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Info, HelpCircle } from 'lucide-react';

interface ScenarioInfoPanelProps {
  scenario: ConfirmedUniformMotionScenario;
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
  labels,
}) => {
  const candidate = scenario.scenario;
  const { originalText, object, axis, target, s, u, t } = candidate;

  const targetLabel =
    target === 's'
      ? labels.displacement
      : target === 'u'
        ? labels.velocity
        : labels.time;

  return (
    <Card className="bg-slate-900/90 border-slate-800 text-slate-100">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-sky-400 flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-400" />
            {labels.scenarioDetails}
          </CardTitle>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {object}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        {/* Question Text */}
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            {labels.question}
          </span>
          <p className="text-slate-200 font-medium">{originalText}</p>
        </div>

        {/* Given and Target Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Given Quantities */}
          <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              {labels.givenValues}
            </span>
            <ul className="space-y-1 text-xs">
              {s.type === 'given' && (
                <li className="flex justify-between items-center text-slate-300">
                  <span>{labels.displacement}:</span>
                  <span className="font-mono font-semibold text-emerald-400">
                    {s.value > 0 ? '+' : ''}{s.value} {s.unit}
                  </span>
                </li>
              )}
              {u.type === 'given' && (
                <li className="flex justify-between items-center text-slate-300">
                  <span>{labels.velocity}:</span>
                  <span className="font-mono font-semibold text-emerald-400">
                    {u.value > 0 ? '+' : ''}{u.value} {u.unit}
                  </span>
                </li>
              )}
              {t.type === 'given' && (
                <li className="flex justify-between items-center text-slate-300">
                  <span>{labels.time}:</span>
                  <span className="font-mono font-semibold text-emerald-400">
                    {t.value} {t.unit}
                  </span>
                </li>
              )}
              <li className="flex justify-between items-center text-slate-400 pt-1 border-t border-slate-800">
                <span>{labels.axis}:</span>
                <span className="font-mono text-slate-300">
                  {axis.direction} ({axis.basis})
                </span>
              </li>
            </ul>
          </div>

          {/* Target Unknown */}
          <div className="bg-amber-950/20 p-3 rounded-lg border border-amber-800/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {labels.targetUnknown}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span className="text-base font-bold text-amber-200">{targetLabel}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">
              {labels.visibilityNotice}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
