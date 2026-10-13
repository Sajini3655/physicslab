'use client';

import React, { useState } from 'react';
import { PracticeQuestion, Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, CheckCircle, ChevronDown, ChevronUp, CheckCircle2, XCircle } from 'lucide-react';

interface PracticeSectionProps {
  questions: PracticeQuestion[];
  locale: Locale;
  labels: {
    practiceQuestions: string;
    showHint: string;
    showAnswer: string;
  };
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  questions,
  locale,
  labels,
}) => {
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [numericalInputs, setNumericalInputs] = useState<Record<string, string>>({});
  const [gradingState, setGradingState] = useState<Record<string, 'correct' | 'incorrect'>>({});

  const toggleHint = (id: string) => {
    setOpenHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAnswer = (id: string) => {
    setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (qId: string, optId: string, correctOptId?: string) => {
    setSelectedOptions((prev) => ({ ...prev, [qId]: optId }));
    if (correctOptId) {
      if (optId === correctOptId) {
        setGradingState((prev) => ({ ...prev, [qId]: 'correct' }));
      } else {
        setGradingState((prev) => ({ ...prev, [qId]: 'incorrect' }));
      }
    }
  };

  const handleCheckNumerical = (qId: string, expected?: number, tolerance?: number) => {
    const raw = numericalInputs[qId]?.trim();
    if (!raw || expected === undefined) return;
    const val = parseFloat(raw);
    const tol = tolerance ?? 0.05;
    if (!isNaN(val) && Math.abs(val - expected) <= tol) {
      setGradingState((prev) => ({ ...prev, [qId]: 'correct' }));
    } else {
      setGradingState((prev) => ({ ...prev, [qId]: 'incorrect' }));
    }
  };

  return (
    <div className="space-y-4">
      {questions.map((q, idx) => {
        const isHintOpen = !!openHints[q.id];
        const isAnswerOpen = !!openAnswers[q.id];
        const status = gradingState[q.id];

        return (
          <Card
            key={q.id}
            className={`bg-[#FFFFFF] dark:bg-[#111D2D] border rounded-2xl shadow-2xs overflow-hidden transition-all ${
              status === 'correct'
                ? 'border-emerald-300 dark:border-emerald-800'
                : status === 'incorrect'
                ? 'border-amber-300 dark:border-amber-800'
                : 'border-[#DFE8EF] dark:border-[#1E334D]'
            }`}
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#F0F6FA] dark:bg-[#17273C] text-[#0F766E] dark:text-[#14B8A6] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </span>
                  <div>
                    {q.competencyRef && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-0.5">
                        {q.competencyRef} {q.difficulty ? `• ${q.difficulty}` : ''}
                      </span>
                    )}
                    <p className="text-sm sm:text-base text-[#14243A] dark:text-[#F8FAFC] font-medium leading-relaxed">
                      {q.question[locale]}
                    </p>
                  </div>
                </div>

                {status && (
                  <div className="shrink-0">
                    {status === 'correct' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200">
                        <XCircle className="w-3.5 h-3.5" /> Check again
                      </span>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-3">
              {/* Interactive MCQ choices if present */}
              {q.options && (
                <div className="space-y-2 pt-2">
                  {q.options.map((opt) => {
                    const isSelected = selectedOptions[q.id] === opt.id;
                    const isOptionCorrect = opt.id === q.correctOptionId;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(q.id, opt.id, q.correctOptionId)}
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-3 transition-all ${
                          isSelected && isOptionCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-950 dark:text-emerald-100 font-semibold'
                            : isSelected && !isOptionCorrect
                            ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 text-amber-950 dark:text-amber-100'
                            : isSelected
                            ? 'bg-[#F0FDFA] dark:bg-[#042F2E] border-[#0F766E] text-[#0F766E] font-medium'
                            : 'bg-[#F6FAFD] dark:bg-[#0B131E] border-[#DFE8EF] dark:border-[#1E334D] text-[#475569] dark:text-[#CBD5E1] hover:border-[#0F766E]/40'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isSelected ? 'bg-[#0F766E] text-white' : 'bg-[#E2E8F0] dark:bg-[#1E293B] text-[#64748B]'
                        }`}>
                          {opt.id}
                        </span>
                        <span className="flex-1 leading-relaxed">
                          {opt.text[locale]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Interactive Numerical Input if present */}
              {q.numericalExpected !== undefined && (
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={numericalInputs[q.id] || ''}
                    onChange={(e) => setNumericalInputs((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Enter numerical answer"
                    className="px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono w-48 focus:outline-[#0F766E]"
                  />
                  {q.unit && (
                    <span className="text-xs font-mono text-[#64748B]">
                      {q.unit[locale]}
                    </span>
                  )}
                  <Button
                    size="sm"
                    onClick={() => handleCheckNumerical(q.id, q.numericalExpected, q.numericalTolerance)}
                    className="text-xs h-8 bg-[#0F766E] text-white hover:bg-[#0d645e]"
                  >
                    Check
                  </Button>
                </div>
              )}

              {/* Action Buttons: Hint & Answer */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F0F6FA] dark:border-[#1E334D]">
                {q.hint && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => toggleHint(q.id)}
                    className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] border-[#DFE8EF] dark:border-[#1E334D] rounded-lg h-8"
                  >
                    <HelpCircle className="w-3.5 h-3.5 mr-1" />
                    <span>{labels.showHint}</span>
                    {isHintOpen ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                  </Button>
                )}

                {q.answer && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => toggleAnswer(q.id)}
                    className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] border-[#DFE8EF] dark:border-[#1E334D] rounded-lg h-8"
                  >
                    <CheckCircle className="w-3.5 h-3.5 mr-1 text-[#0F766E]" />
                    <span>{labels.showAnswer}</span>
                    {isAnswerOpen ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                  </Button>
                )}
              </div>

              {/* Hint Box */}
              {isHintOpen && q.hint && (
                <div className="p-3.5 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] leading-relaxed animate-in fade-in duration-200">
                  <span className="font-semibold block mb-0.5">Hint:</span>
                  {q.hint[locale]}
                </div>
              )}

              {/* Solution Box */}
              {isAnswerOpen && q.answer && (
                <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs sm:text-sm text-[#14243A] dark:text-[#CBD5E1] leading-relaxed font-mono animate-in fade-in duration-200">
                  <span className="font-semibold block mb-0.5 font-sans text-[#0F766E]">Solution:</span>
                  {q.answer[locale]}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
