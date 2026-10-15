'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  generateUnit10Assessment,
  evaluateMatterPropertiesAssessment,
  MatterPropertiesAssessmentResult,
} from '../questions/assessment';
import { MatterPropertiesQuestion, MatterPropertiesCompetencyRef } from '../questions/types';
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

interface MatterPropertiesAssessmentProps {
  locale?: Locale;
}

export const MatterPropertiesAssessment: React.FC<MatterPropertiesAssessmentProps> = ({
  locale = 'en',
}) => {
  const [questions] = useState<MatterPropertiesQuestion[]>(() => generateUnit10Assessment());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<MatterPropertiesAssessmentResult | null>(null);
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});

  const handleSelectOption = (qId: string, optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionId }));
  };

  const handleNumericalChange = (qId: string, val: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    const res = evaluateMatterPropertiesAssessment(questions, answers);
    setResult(res);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setShowSolutions({});
  };

  const toggleSolution = (qId: string) => {
    setShowSolutions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const answeredCount = Object.keys(answers).filter(
    (k) => answers[k]?.trim() !== ''
  ).length;

  const t = {
    en: {
      title: 'Unit 10 Comprehensive Assessment: Mechanical Properties of Matter',
      subtitle:
        'Summative evaluation covering all 3 syllabus competencies (10.1 to 10.3): solid elasticity & Young’s modulus, fluid viscosity & Stokes’ law, and surface tension & capillary action.',
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
      comp101: 'Competency 10.1: Elasticity of Solids & Young’s Modulus',
      comp102: 'Competency 10.2: Viscosity of Fluids & Stokes’ Law',
      comp103: 'Competency 10.3: Surface Tension & Capillary Action',
    },
    si: {
      title: 'ඒකක 10 සමස්ත ඇගයීම: පදාර්ථයේ යාන්ත්‍රික ගුණ',
      subtitle:
        'සියලුම විෂය නිර්දේශ නිපුණතා 3 (10.1 සිට 10.3) ආවරණය වන සමාප්ති ඇගයීම: ඝන ද්‍රව්‍යවල ප්‍රත්‍යාස්ථතාව හා යං මාපාංකය, තරල දුස්ස්‍රාවිතාව හා ස්ටෝක්ස් නියමය, සහ පෘෂ්ඨික ආතතිය හා කේශික ක්‍රියාව.',
      answered: 'පිළිතුරු ලබාදී ඇත',
      submitBtn: 'ඇගයීම ඉදිරිපත් කරන්න',
      retakeBtn: 'නැවත උත්සාහ කරන්න',
      scoreCardTitle: 'කාර්යසාධන සාරාංශය සහ නිපුණතා විශ්ලේෂණය',
      scoreLabel: 'මුළු ලකුණු:',
      competencyBreakdown: 'විෂය නිර්දේශ නිපුණතා අනුව කාර්යසාධනය',
      revisionAdvice: 'නිර්දේශිත පුනරීක්ෂණ පාඩම්',
      showExplanation: 'භෞතික විවරණය බලන්න',
      hideExplanation: 'විවරණය සඟවන්න',
      correct: 'නිවැරදියි',
      incorrect: 'වැරදියි',
      solutionLabel: 'පියවරෙන් පියවර විසඳුම:',
      comp101: 'නිපුණතාව 10.1: ඝන ද්‍රව්‍යවල ප්‍රත්‍යාස්ථතාව සහ යං මාපාංකය',
      comp102: 'නිපුණතාව 10.2: තරලවල දුස්ස්‍රාවිතාව සහ ස්ටෝක්ස් නියමය',
      comp103: 'නිපුණතාව 10.3: පෘෂ්ඨික ආතතිය සහ කේශික ක්‍රියාව',
    },
  }[locale];

  const competencyTitles: Record<MatterPropertiesCompetencyRef, string> = {
    'Competency 10.1': t.comp101,
    'Competency 10.2': t.comp102,
    'Competency 10.3': t.comp103,
  };

  const competencyLessonSlugs: Record<MatterPropertiesCompetencyRef, string> = {
    'Competency 10.1': 'lesson-10-1',
    'Competency 10.2': 'lesson-10-2',
    'Competency 10.3': 'lesson-10-3',
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/40 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-teal-50 dark:bg-teal-950/60 rounded-lg text-teal-600 dark:text-teal-400">
            <Award className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title}
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {t.subtitle}
        </p>
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 border-t pt-3">
          <span>
            {t.answered}: {answeredCount} / {questions.length}
          </span>
          <span className="text-teal-600 dark:text-teal-400 font-semibold">
            Unit 10 • 16 Questions
          </span>
        </div>
      </div>

      {/* Results Card when Submitted */}
      {submitted && result && (
        <Card className="border-2 border-teal-500/40 shadow-md">
          <CardHeader className="bg-teal-50/50 dark:bg-teal-950/20 pb-4">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>{t.scoreCardTitle}</span>
              <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
                {result.totalCorrect} / {result.totalQuestions} ({result.percentageScore}%)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-sm">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(Object.keys(result.competencyBreakdown) as MatterPropertiesCompetencyRef[]).map(
                  (comp) => {
                    const data = result.competencyBreakdown[comp];
                    const isPassing = data.percentage >= 60;
                    return (
                      <div
                        key={comp}
                        className={`p-3 rounded-lg border text-sm flex items-center justify-between ${
                          isPassing
                            ? 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900'
                            : 'bg-rose-50/50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900'
                        }`}
                      >
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {competencyTitles[comp]}
                        </span>
                        <span
                          className={`font-bold ml-2 ${
                            isPassing ? 'text-emerald-600' : 'text-rose-600'
                          }`}
                        >
                          {data.correct}/{data.total} ({data.percentage}%)
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {result.weakCompetencies.length > 0 && (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {t.revisionAdvice}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {result.weakCompetencies.map((comp) => (
                    <Link
                      key={comp}
                      href={`/units/mechanical-properties-of-matter/${competencyLessonSlugs[comp]}`}
                      className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-md bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 hover:bg-amber-100 transition-colors"
                    >
                      {competencyTitles[comp]} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button
                onClick={handleReset}
                variant="outline"
                className="gap-2 text-slate-700 dark:text-slate-200"
              >
                <RotateCcw className="w-4 h-4" />
                {t.retakeBtn}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id]?.trim() || '';
          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const numVal = parseFloat(studentAns);
              if (!isNaN(numVal)) {
                const tol = q.tolerance ?? Math.abs(q.expected * 0.05);
                isCorrect = Math.abs(numVal - q.expected) <= tol;
              }
            }
          }

          return (
            <Card
              key={q.id}
              className={`border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20 dark:border-emerald-800'
                    : 'border-rose-300 bg-rose-50/20 dark:border-rose-800'
                  : 'hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">
                    {competencyTitles[q.competencyRef]}
                  </span>
                  <span className="uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {q.difficulty}
                  </span>
                </div>
                <CardTitle className="text-base font-medium leading-relaxed text-slate-800 dark:text-slate-100">
                  <span className="font-bold mr-2 text-slate-900 dark:text-white">
                    {idx + 1}.
                  </span>
                  {locale === 'si' ? q.question.si : q.question.en}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-1">
                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      let optionClasses =
                        'border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700';

                      if (submitted) {
                        if (opt.id === q.correctOptionId) {
                          optionClasses =
                            'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isSelected && !isCorrect) {
                          optionClasses =
                            'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                        }
                      } else if (isSelected) {
                        optionClasses =
                          'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100 font-medium';
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-center justify-between ${optionClasses}`}
                        >
                          <span>{locale === 'si' ? opt.text.si : opt.text.en}</span>
                          {submitted && opt.id === q.correctOptionId && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          )}
                          {submitted && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input */}
                {q.type === 'numerical' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 max-w-xs">
                      <input
                        type="number"
                        step="any"
                        disabled={submitted}
                        value={studentAns}
                        onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                        placeholder="Enter value..."
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {q.unit && (
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                          {locale === 'si' ? q.unit.si : q.unit.en}
                        </span>
                      )}
                    </div>
                    {submitted && (
                      <div className="text-xs font-medium">
                        {isCorrect ? (
                          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t.correct}
                          </span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> {t.incorrect} (Expected: {q.expected}{' '}
                            {locale === 'si' ? q.unit?.si : q.unit?.en})
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Structured Question Subparts & Rubric */}
                {q.type === 'structured' && q.parts && (
                  <div className="space-y-4 pt-2">
                    {q.parts.map((p) => {
                      const partAnsKey = `${q.id}_${p.id}`;
                      return (
                        <div key={p.id} className="p-3 bg-[#F8FAFC] border border-[#DFE8EF] rounded-lg space-y-2">
                          <div className="flex justify-between items-start text-xs font-semibold text-[#14243A]">
                            <span><span className="font-bold text-[#0F766E]">{p.partLabel}</span> {p.prompt[locale]}</span>
                            <span className="text-[#64748B] shrink-0 font-mono">[{p.allocatedMarks} {locale === 'si' ? 'ලකුණු' : 'marks'}]</span>
                          </div>
                          <textarea
                            disabled={submitted}
                            rows={2}
                            value={answers[partAnsKey] || ''}
                            onChange={(e) => setAnswers((prev) => ({ ...prev, [partAnsKey]: e.target.value, [q.id]: e.target.value }))}
                            placeholder={locale === 'si' ? 'ඔබේ පිළිතුර මෙහි ලියන්න...' : 'Write your answer here...'}
                            className="w-full p-2 text-xs border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E] bg-white font-sans"
                          />
                          {submitted && (
                            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded text-xs space-y-1">
                              <span className="font-bold text-emerald-800">{locale === 'si' ? 'ආදර්ශ පිළිතුර:' : 'Model Answer:'}</span>
                              <p className="text-emerald-900 whitespace-pre-line leading-relaxed">{p.modelAnswer[locale]}</p>
                              <div className="pt-1 border-t border-emerald-200/60 text-[11px] text-emerald-800">
                                <span className="font-semibold">{locale === 'si' ? 'ලකුණු දීමේ පටිපාටිය:' : 'Marking Rubric:'}</span>
                                <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                                  {p.rubric.map((r, rIdx) => (
                                    <li key={rIdx}>{r.description[locale]} ({r.point} {locale === 'si' ? 'ලකුණු' : 'marks'})</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Explanation Toggle when submitted */}
                {submitted && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      {showSolutions[q.id] ? t.hideExplanation : t.showExplanation}
                    </button>
                    {showSolutions[q.id] && (
                      <div className="mt-2.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        <div className="font-semibold mb-1 text-slate-900 dark:text-slate-100">
                          {t.solutionLabel}
                        </div>
                        {locale === 'si' ? q.solution.si : q.solution.en}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom Submit Bar */}
      {!submitted && (
        <div className="sticky bottom-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-lg flex items-center justify-between">
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t.answered}: <span className="font-bold text-teal-600">{answeredCount}</span> /{' '}
            {questions.length}
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6"
          >
            {t.submitBtn}
          </Button>
        </div>
      )}
    </div>
  );
};
