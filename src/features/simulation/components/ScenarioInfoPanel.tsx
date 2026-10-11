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

  // Format positive direction with natural arrow
  const dirLower = axis.direction.toLowerCase();
  const dirArrow = dirLower.includes('left') || dirLower.includes('west') || dirLower.includes('-x')
    ? '←'
    : '→';
  const displayDirection = `${axis.direction.charAt(0).toUpperCase() + axis.direction.slice(1)} ${dirArrow}`;

  return (
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="p-4 sm:p-5 pb-3 border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD]/60 dark:bg-[#0B131E]/60">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-semibold text-[#14243A] dark:text-[#F8FAFC] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] shrink-0" />
            <span>{labels.scenarioDetails}</span>
          </CardTitle>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-[#0F766E] dark:text-[#14B8A6] font-medium">
            <Layers className="w-3 h-3" />
            <span className="capitalize">{object}</span>
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-5 space-y-4 text-sm">
        {/* Problem Statement */}
        <div className="space-y-1">
          <span className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider block">
            {labels.question}
          </span>
          <p className="text-[15px] sm:text-base text-[#14243A] dark:text-[#F8FAFC] font-normal leading-relaxed break-words">
            {originalText}
          </p>
        </div>

        {/* Given Quantities & Direction */}
        <div className="space-y-2 pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D]">
          <span className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider block pt-1">
            {labels.givenValues}
          </span>
          <div className="space-y-2 text-sm">
            {s.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.displacement}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6] text-sm">
                  {s.value > 0 ? '+' : ''}{s.value} {s.unit}
                </span>
              </div>
            )}
            {u.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.velocity}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6] text-sm">
                  {u.value > 0 ? '+' : ''}{u.value} {u.unit}
                </span>
              </div>
            )}
            {t.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.time}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6] text-sm">
                  {t.value} {t.unit}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-[#64748B] dark:text-[#94A3B8] pt-1">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#79B9E7]" />
                {labels.axis}:
              </span>
              <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                {displayDirection}
              </span>
            </div>
          </div>
        </div>

        {/* Concise Target to Find */}
        <div className="pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] flex items-center justify-between bg-[#FFFBEB] dark:bg-[#451A03]/20 border border-[#FDE68A] dark:border-[#78350F]/60 rounded-xl px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D97706] dark:text-[#FBBF24] shrink-0" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-semibold text-[#92400E] dark:text-[#FCD34D]">
                {labels.targetUnknown}:
              </span>
              <span className="text-sm font-bold text-[#78350F] dark:text-[#FDE68A]">
                {targetLabel}
              </span>
            </div>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#FDE68A] dark:bg-[#78350F] text-[#78350F] dark:text-[#FDE68A] font-mono font-bold">
            ?
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
