'use client';

import React from 'react';
import { Locale, StructuredSubPart } from '@/shared/curriculum/types';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, HelpCircle, BookOpen, CheckSquare, Square, PenLine } from 'lucide-react';

export interface StructuredQuestionCardProps {
  question: {
    id: string;
    competencyRef?: string;
    question: { en: string; si: string };
    parts?: StructuredSubPart[];
    hint?: { en: string; si: string };
    solution?: { en: string; si: string };
  };
  locale: Locale;
  index: number;
  answers: Record<string, string>;
  onAnswerChange: (partKey: string, val: string) => void;
  submitted: boolean;
  showSolution: boolean;
  onToggleSolution: () => void;
  selfMarkedPoints: Record<string, boolean>;
  onToggleRubricPoint: (pointKey: string) => void;
}

export const StructuredQuestionCard: React.FC<StructuredQuestionCardProps> = ({
  question,
  locale,
  index,
  answers,
  onAnswerChange,
  submitted,
  showSolution,
  onToggleSolution,
  selfMarkedPoints,
  onToggleRubricPoint,
}) => {
  const parts = question.parts || [];
  const totalAllocatedMarks = parts.reduce((acc, p) => acc + (p.allocatedMarks || 0), 0);

  // Compute self-marked score
  let earnedMarks = 0;
  parts.forEach((p) => {
    p.rubric.forEach((r, rIdx) => {
      const key = `${question.id}_${p.id}_${rIdx}`;
      if (selfMarkedPoints[key]) {
        earnedMarks += r.point;
      }
    });
  });

  const t = {
    en: {
      typeBadge: 'Structured Essay / Multipart Practical Question',
      totalMarks: `Total: ${totalAllocatedMarks} Marks`,
      scenarioLabel: 'Physical Scenario / Experimental Context',
      studentWorkingPlaceholder: 'Type your physics derivation, reasoning, numerical working, and final answer here...',
      modelAnswer: 'Official Model Answer & Calculation Steps',
      markingScheme: 'Self-Marking Rubric & Allocated Points',
      earnedPoint: 'Mark earned according to rubric criteria',
      showScheme: 'View Official Marking Scheme & Rubric',
      hideScheme: 'Hide Marking Scheme',
      selfScoreSummary: `Self-Assessed Score: ${earnedMarks} / ${totalAllocatedMarks} Marks`,
      hint: 'Physical Hint',
    },
    si: {
      typeBadge: 'ව්‍යුහගත රචනා / බහුවිධ ප්‍රායෝගික ප්‍රශ්නය',
      totalMarks: `මුළු ලකුණු: ${totalAllocatedMarks}`,
      scenarioLabel: 'භෞතික පසුබිම / පරීක්ෂණාත්මක අවස්ථාව',
      studentWorkingPlaceholder: 'ඔබේ භෞතික විද්‍යා සාධනය, හේතු දැක්වීම, ගණනය කිරීම් සහ අවසාන පිළිතුර මෙහි සටහන් කරන්න...',
      modelAnswer: 'නිල ආදර්ශ පිළිතුර සහ ගණනය කිරීමේ පියවර',
      markingScheme: 'ස්වයං ලකුණු ලබාදීමේ ක්‍රමවේදය සහ ලකුණු බෙදීම',
      earnedPoint: 'ලකුණු ක්‍රමවේදයට අනුකූලව ලකුණ හිමි කරගන්නා ලදී',
      showScheme: 'නිල ලකුණු ක්‍රමවේදය සහ විවරණය බලන්න',
      hideScheme: 'ලකුණු ක්‍රමවේදය සඟවන්න',
      selfScoreSummary: `ස්වයං ඇගයූ ලකුණු: ${earnedMarks} / ${totalAllocatedMarks}`,
      hint: 'භෞතික ඉඟිය',
    },
  }[locale];

  return (
    <Card className="border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden bg-white dark:bg-slate-900">
      <CardHeader className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              {index}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
              {t.typeBadge}
            </span>
            {question.competencyRef && (
              <span className="text-xs text-slate-500 font-mono">
                {question.competencyRef}
              </span>
            )}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            {t.totalMarks}
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-5 sm:p-6 space-y-6">
        {/* Main scenario stem */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-sans">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            {t.scenarioLabel}
          </div>
          <p className="whitespace-pre-line font-medium text-slate-900 dark:text-slate-100">
            {question.question[locale]}
          </p>
        </div>

        {/* Sub-parts */}
        <div className="space-y-6">
          {parts.map((part) => {
            const answerKey = `${question.id}_${part.id}`;
            const studentAnswer = answers[answerKey] || '';

            return (
              <div
                key={part.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-3 bg-white dark:bg-slate-900/60"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm">
                      {part.partLabel}
                    </span>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {part.prompt[locale]}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded shrink-0">
                    [{part.allocatedMarks} {locale === 'si' ? 'ලකුණු' : 'Marks'}]
                  </span>
                </div>

                {/* Working textarea */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <PenLine className="w-3.5 h-3.5" />
                    <span>{locale === 'si' ? 'ඔබේ පිළිතුර / ගණනය' : 'Your Answer / Derivation'}</span>
                  </div>
                  <textarea
                    disabled={submitted}
                    value={studentAnswer}
                    onChange={(e) => onAnswerChange(answerKey, e.target.value)}
                    placeholder={t.studentWorkingPlaceholder}
                    rows={3}
                    className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-85 font-mono"
                  />
                </div>

                {/* Model answer and marking rubric when submitted */}
                {submitted && (
                  <div className="mt-3 space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                    {/* Model Answer */}
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 space-y-1">
                      <div className="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {t.modelAnswer}
                      </div>
                      <p className="whitespace-pre-line font-mono text-xs">
                        {part.modelAnswer[locale]}
                      </p>
                    </div>

                    {/* Marking Rubric & Self-Scoring */}
                    <div className="p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
                      <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {t.markingScheme}
                      </div>
                      <div className="space-y-1.5">
                        {part.rubric.map((r, rIdx) => {
                          const pointKey = `${question.id}_${part.id}_${rIdx}`;
                          const isChecked = !!selfMarkedPoints[pointKey];

                          return (
                            <button
                              key={rIdx}
                              type="button"
                              onClick={() => onToggleRubricPoint(pointKey)}
                              className={`w-full text-left flex items-start gap-2 p-2 rounded border transition-colors ${
                                isChecked
                                  ? 'bg-amber-100/80 dark:bg-amber-900/40 border-amber-300 dark:border-amber-700'
                                  : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-amber-50/50'
                              }`}
                            >
                              <span className="mt-0.5 text-amber-700 dark:text-amber-300 shrink-0">
                                {isChecked ? (
                                  <CheckSquare className="w-4 h-4 text-amber-600" />
                                ) : (
                                  <Square className="w-4 h-4 text-slate-400" />
                                )}
                              </span>
                              <div className="text-xs text-slate-800 dark:text-slate-200 flex-1">
                                <span className="font-semibold text-amber-800 dark:text-amber-300 mr-1.5">
                                  [{r.point} {locale === 'si' ? 'ලකුණ' : 'Mark'}]:
                                </span>
                                {r.description[locale]}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom self-assessment score badge & solution toggle */}
        {submitted && (
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm font-semibold text-indigo-900 dark:text-indigo-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              {t.selfScoreSummary}
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onToggleSolution}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {showSolution ? t.hideScheme : t.showScheme}
            </Button>
          </div>
        )}

        {/* Global physical solution if toggled */}
        {submitted && showSolution && question.solution && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
            <div className="font-bold text-slate-900 dark:text-slate-100">
              {locale === 'si' ? 'සම්පූර්ණ භෞතික විග්‍රහය සහ මූලධර්ම:' : 'Comprehensive Physical Derivation & Notes:'}
            </div>
            <p className="whitespace-pre-line leading-relaxed">
              {question.solution[locale]}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
