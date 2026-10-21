'use client';

import React from 'react';
import { Locale, useAssessmentSession } from '@/shared/curriculum';
import { generateUnit1Assessment, evaluateAssessment, AssessmentResult } from '../questions/assessment';
import { MeasurementQuestion } from '../questions/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

interface UnitAssessmentProps {
  locale?: Locale;
}

export const UnitAssessment: React.FC<UnitAssessmentProps> = ({ locale = 'en' }) => {
  const {
    questions,
    answers,
    submitted,
    result,
    showSolutions,
    handleSelectOption,
    handleNumericalChange,
    handleSubmit,
    handleReset,
    toggleSolution,
    answeredCount,
  } = useAssessmentSession<MeasurementQuestion, AssessmentResult>({
    storageKey: 'unit-1',
    generateQuestions: generateUnit1Assessment,
    evaluateAssessment,
  });

  const t = {
    en: {
      title: 'Unit 1 Comprehensive Assessment',
      subtitle: '20-question summative evaluation covering all 5 syllabus competencies (1.1 to 1.5).',
      answered: 'Answered',
      submitBtn: 'Submit Assessment',
      retakeBtn: 'Retake Assessment',
      scoreCardTitle: 'Performance Summary & Competency Breakdown',
      scoreLabel: 'Total Score:',
      competencyBreakdown: 'Performance by Syllabus Competency',
      revisionAdvice: 'Recommended Revision Lessons',
      showExplanation: 'View Physical Explanation',
      hideExplanation: 'Hide Explanation',
      correct: 'Correct',
      incorrect: 'Incorrect',
      solutionLabel: 'Step-by-step Solution:',
      comp11: 'Competency 1.1: Nature of Physics & Scientific Investigation',
      comp12: 'Competency 1.2: Physical Quantities, SI Units & Prefixes',
      comp13: 'Competency 1.3: Dimensional Analysis & Equations',
      comp14: 'Competency 1.4: Measuring Instruments & Error Analysis',
      comp15: 'Competency 1.5: Vectors and Scalars',
    },
    si: {
      title: 'ඒකක 1 පුළුල් ඇගයීම් පරීක්ෂණය',
      subtitle: 'විෂය නිර්දේශයේ නිපුණතා 5 ම (1.1 සිට 1.5 දක්වා) ආවරණය වන ප්‍රශ්න 20 කින් යුත් සාරාංශ පරීක්ෂණය.',
      answered: 'පිළිතුරු සපයා ඇත',
      submitBtn: 'පරීක්ෂණය අවසන් කරන්න',
      retakeBtn: 'නැවත පරීක්ෂණය කරන්න',
      scoreCardTitle: 'ප්‍රතිඵල සාරාංශය සහ නිපුණතා විශ්ලේෂණය',
      scoreLabel: 'මුළු ලකුණු:',
      competencyBreakdown: 'විෂය නිර්දේශ නිපුණතා අනුව ප්‍රගතිය',
      revisionAdvice: 'නැවත පරිශීලනයට නිර්දේශිත පාඩම්',
      showExplanation: 'විද්‍යාත්මක පැහැදිලි කිරීම බලන්න',
      hideExplanation: 'පැහැදිලි කිරීම සඟවන්න',
      correct: 'නිවැරදියි',
      incorrect: 'වැරදියි',
      solutionLabel: 'පියවරෙන් පියවර විසඳුම:',
      comp11: 'නිපුණතාව 1.1: භෞතික විද්‍යාවේ ක්ෂේත්‍රය සහ විද්‍යාත්මක ගවේෂණය',
      comp12: 'නිපුණතාව 1.2: භෞතික රාශි, SI ඒකක සහ උපසර්ග',
      comp13: 'නිපුණතාව 1.3: මාන විශ්ලේෂණය සහ භෞතික සමීකරණ',
      comp14: 'නිපුණතාව 1.4: මිනුම් උපකරණ සහ දෝෂ විශ්ලේෂණය',
      comp15: 'නිපුණතාව 1.5: දෛශික සහ අදිශ',
    },
  }[locale];

  const lessonLinks: Record<string, { slug: string; name: string }> = {
    'Competency 1.1': { slug: 'scientific-investigation', name: t.comp11 },
    'Competency 1.2': { slug: 'physical-quantities-and-units', name: t.comp12 },
    'Competency 1.3': { slug: 'dimensional-analysis', name: t.comp13 },
    'Competency 1.4': { slug: 'measuring-instruments', name: t.comp14 },
    'Competency 1.5': { slug: 'vectors-and-scalars', name: t.comp15 },
  };

  return (
    <div className="space-y-8">
      {/* Assessment Header */}
      <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8]">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
              {t.answered}: {answeredCount} / {questions.length}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 pt-2">
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={answeredCount === 0}
              className="bg-[#0F766E] text-white hover:bg-[#0d645e] text-xs h-9 px-4 rounded-xl"
            >
              <CheckCircle2 className="w-4 h-4 mr-1.5" />
              {t.submitBtn}
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              variant="outline"
              className="text-xs h-9 px-4 rounded-xl text-[#0F766E] border-[#DFE8EF]"
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              {t.retakeBtn}
            </Button>
          )}
        </div>
      </div>

      {/* Result Score Card (Visible when submitted) */}
      {submitted && result && (
        <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#99F6E4] dark:border-[#115E59] rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="p-6 pb-3 bg-[#F0FDFA] dark:bg-[#042F2E] border-b border-[#99F6E4] dark:border-[#115E59]">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
              <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.scoreCardTitle}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D]">
              <div>
                <span className="text-xs text-[#64748B] block">{t.scoreLabel}</span>
                <span className="text-3xl font-extrabold text-[#0F766E] dark:text-[#14B8A6] font-mono">
                  {result.totalCorrect} / {result.totalQuestions} ({result.percentageScore}%)
                </span>
              </div>
              <div className="text-xs text-[#64748B] max-w-xs">
                {result.percentageScore >= 75
                  ? 'Outstanding achievement! You possess thorough mastery of Unit 1.'
                  : result.percentageScore >= 50
                  ? 'Good foundation. Review the recommended competency topics below to consolidate understanding.'
                  : 'Needs revision. Work through the practical and dimensional analysis modules before proceeding.'}
              </div>
            </div>

            {/* Competency Breakdown Bars */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(result.competencyBreakdown).map((compKey) => {
                  const b = result.competencyBreakdown[compKey];
                  const info = lessonLinks[compKey];
                  return (
                    <div
                      key={compKey}
                      className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2"
                    >
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                          {compKey}
                        </span>
                        <span className="font-mono font-bold text-[#0F766E]">
                          {b.correct}/{b.total} ({b.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] overflow-hidden">
                        <div
                          className="h-full bg-[#0F766E] rounded-full transition-all duration-500"
                          style={{ width: `${b.percentage}%` }}
                        />
                      </div>
                      {info && (
                        <Link
                          href={`/units/measurement/${info.slug}`}
                          className="text-[11px] text-[#0F766E] dark:text-[#14B8A6] hover:underline flex items-center gap-1 pt-0.5"
                        >
                          <BookOpen className="w-3 h-3" /> Review Lesson: {info.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id]?.trim();
          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns?.toUpperCase() === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const num = parseFloat(studentAns);
              isCorrect = !isNaN(num) && Math.abs(num - q.expected) <= (q.tolerance ?? 0.05);
            }
          }

          const isSolutionOpen = !!showSolutions[q.id];

          return (
            <Card
              key={q.id}
              className={`bg-[#FFFFFF] dark:bg-[#111D2D] border rounded-2xl shadow-2xs overflow-hidden transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 dark:border-emerald-800'
                    : 'border-rose-300 dark:border-rose-800'
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
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                        {q.competencyRef} • {q.difficulty}
                      </span>
                      <p className="text-sm sm:text-base text-[#14243A] dark:text-[#F8FAFC] font-medium leading-relaxed">
                        {q.question[locale]}
                      </p>
                    </div>
                  </div>

                  {submitted && (
                    <div className="shrink-0">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {t.correct}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-full border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" /> {t.incorrect}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 space-y-3">
                {/* Options (for MCQ) */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2 pt-2">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      const isOptionCorrect = submitted && opt.id === q.correctOptionId;
                      const isOptionWrongSelected = submitted && isSelected && !isCorrect;

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-3 transition-all ${
                            isOptionCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-950 dark:text-emerald-100 font-semibold'
                              : isOptionWrongSelected
                              ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-400 text-rose-950 dark:text-rose-100'
                              : isSelected
                              ? 'bg-[#F0FDFA] dark:bg-[#042F2E] border-[#0F766E] text-[#0F766E] dark:text-[#14B8A6] font-medium'
                              : 'bg-[#F6FAFD] dark:bg-[#0B131E] border-[#DFE8EF] dark:border-[#1E334D] text-[#475569] dark:text-[#CBD5E1] hover:border-[#0F766E]/40'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#0F766E] text-white'
                              : 'bg-[#E2E8F0] dark:bg-[#1E293B] text-[#64748B]'
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

                {/* Numerical Input */}
                {q.type === 'numerical' && (
                  <div className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      disabled={submitted}
                      value={studentAns || ''}
                      onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                      placeholder="Enter value"
                      className="px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono w-40 focus:outline-[#0F766E]"
                    />
                    {q.unit && (
                      <span className="text-xs font-mono text-[#64748B]">
                        {q.unit[locale]}
                      </span>
                    )}
                    {submitted && q.expected !== undefined && (
                      <span className="text-xs font-mono font-bold text-[#0F766E] ml-2">
                        (Expected: {q.expected} {q.unit ? q.unit[locale] : ''})
                      </span>
                    )}
                  </div>
                )}

                {/* Explanation Toggle (After submission or on demand) */}
                {submitted && (
                  <div className="pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs h-7 text-[#0F766E] dark:text-[#14B8A6] p-0"
                    >
                      <HelpCircle className="w-3.5 h-3.5 mr-1" />
                      {isSolutionOpen ? t.hideExplanation : t.showExplanation}
                    </Button>

                    {isSolutionOpen && (
                      <div className="mt-2 p-3.5 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-xs leading-relaxed text-[#0F766E] dark:text-[#14B8A6] space-y-1">
                        <span className="font-bold block">{t.solutionLabel}</span>
                        <p>{q.solution[locale]}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
