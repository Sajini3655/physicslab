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
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-xs rounded-2xl overflow-hidden">
      <CardHeader className="p-4 pb-3 border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD]/70 dark:bg-[#0B131E]/70">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm font-semibold text-[#14243A] dark:text-[#F8FAFC] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] shrink-0" />
            <span>{labels.scenarioDetails}</span>
          </CardTitle>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-[#0F766E] dark:text-[#14B8A6] font-medium">
            <Layers className="w-3 h-3" />
            <span className="capitalize">{object}</span>
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4 text-xs">
        {/* Problem Statement */}
        <div className="bg-[#F6FAFD] dark:bg-[#0B131E]/60 p-3.5 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
          <span className="text-[11px] font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider block mb-1">
            {labels.question}
          </span>
          <p className="text-[#14243A] dark:text-[#E2E8F0] font-normal leading-relaxed break-words">
            {originalText}
          </p>
        </div>

        {/* Given Quantities & Axis */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider block">
            {labels.givenValues}
          </span>
          <div className="bg-[#FFFFFF] dark:bg-[#0B131E]/40 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 space-y-2 shadow-2xs">
            {s.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.displacement}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                  {s.value > 0 ? '+' : ''}{s.value} {s.unit}
                </span>
              </div>
            )}
            {u.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.velocity}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                  {u.value > 0 ? '+' : ''}{u.value} {u.unit}
                </span>
              </div>
            )}
            {t.type === 'given' && (
              <div className="flex justify-between items-center text-[#475569] dark:text-[#CBD5E1]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">{labels.time}:</span>
                <span className="font-mono font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                  {t.value} {t.unit}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-[#64748B] dark:text-[#94A3B8] pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#79B9E7]" />
                {labels.axis}:
              </span>
              <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                {axis.direction} <span className="text-[10px] text-[#64748B] font-normal">({axis.basis})</span>
              </span>
            </div>
          </div>
        </div>

        {/* Target to Find */}
        <div className="bg-[#FFFBEB] dark:bg-[#451A03]/20 border border-[#FDE68A] dark:border-[#78350F]/60 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#B45309] dark:text-[#FBBF24] uppercase tracking-wider">
              {labels.targetUnknown}
            </span>
            <HelpCircle className="w-3.5 h-3.5 text-[#D97706] dark:text-[#FBBF24]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#78350F] dark:text-[#FDE68A]">
              {targetLabel}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#FDE68A] dark:bg-[#78350F] text-[#78350F] dark:text-[#FDE68A] font-mono font-bold">
              ?
            </span>
          </div>
          <p className="text-[11px] text-[#92400E] dark:text-[#FCD34D] leading-relaxed pt-0.5">
            {labels.visibilityNotice}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
