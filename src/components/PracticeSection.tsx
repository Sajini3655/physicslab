'use client';

import React, { useState } from 'react';
import { PracticeQuestion, Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

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

  const toggleHint = (id: string) => {
    setOpenHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAnswer = (id: string) => {
    setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      {questions.map((q, idx) => {
        const isHintOpen = !!openHints[q.id];
        const isAnswerOpen = !!openAnswers[q.id];

        return (
          <Card
            key={q.id}
            className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#F0F6FA] dark:bg-[#17273C] text-[#0F766E] dark:text-[#14B8A6] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-[#14243A] dark:text-[#F8FAFC] font-medium leading-relaxed">
                  {q.question[locale]}
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-3">
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
