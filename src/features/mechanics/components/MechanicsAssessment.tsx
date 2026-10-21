'use client';

import React from 'react';
import { Locale, useAssessmentSession } from '@/shared/curriculum';
import { generateUnit2Assessment, evaluateMechanicsAssessment, MechanicsAssessmentResult } from '../questions/assessment';
import { MechanicsQuestion, MechanicsCompetencyRef } from '../questions/types';
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

interface MechanicsAssessmentProps {
  locale?: Locale;
}

export const MechanicsAssessment: React.FC<MechanicsAssessmentProps> = ({ locale = 'en' }) => {
  const {
    questions,
    answers,
    setAnswers,
    submitted,
    result,
    showSolutions,
    handleSelectOption,
    handleNumericalChange,
    handleSubmit,
    handleReset,
    toggleSolution,
    answeredCount,
  } = useAssessmentSession<MechanicsQuestion, MechanicsAssessmentResult>({
    storageKey: 'unit-2',
    generateQuestions: generateUnit2Assessment,
    evaluateAssessment: evaluateMechanicsAssessment,
  });

  const t = {
    en: {
      title: 'Unit 2 Comprehensive Assessment: Mechanics',
      subtitle: '20-question summative evaluation covering all syllabus competencies (2.1 to 2.8) including all 5 laboratory investigations.',
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
      comp21: 'Competency 2.1: Kinematics',
      comp22: 'Competency 2.2: Resultant Forces, Moments & Centres of Gravity',
      comp23: 'Competency 2.3: Newton’s Laws & Momentum',
      comp24: 'Competency 2.4: Equilibrium',
      comp25: 'Competency 2.5: Work, Energy & Power',
      comp26: 'Competency 2.6: Rotational & Circular Motion',
      comp27: 'Competency 2.7: Hydrostatics',
      comp28: 'Competency 2.8: Fluid Dynamics',
    },
    si: {
      title: 'ඒකක 2 සමස්ත ඇගයීම: යාන්ත්‍ර විද්‍යාව',
      subtitle: 'සියලුම විෂය නිර්දේශ නිපුණතා (2.1 සිට 2.8) සහ ප්‍රායෝගික පරීක්ෂණ ආවරණය වන ප්‍රශ්න 20කින් යුත් සමාප්ති ඇගයීම.',
      answered: 'පිළිතුරු ලබාදී ඇත',
      submitBtn: 'ඇගයීම ඉදිරිපත් කරන්න',
      retakeBtn: 'නැවත උත්සාහ කරන්න',
      scoreCardTitle: 'කාර්යසාධන සාරාංශය සහ නිපුණතා විශ්ලේෂණය',
      scoreLabel: 'මුළු ලකුණු:',
      competencyBreakdown: 'විෂය නිර්දේශ නිපුණතා අනුව කාර්යසාධනය',
      revisionAdvice: 'නිර්දේශිත පුනරීක්ෂණ පාඩම්',
      showExplanation: 'භෞතික පැහැදිලි කිරීම බලන්න',
      hideExplanation: 'පැහැදිලි කිරීම සඟවන්න',
      correct: 'නිවැරදියි',
      incorrect: 'වැරදියි',
      solutionLabel: 'පියවරෙන් පියවර විසඳුම:',
      comp21: 'නිපුණතාව 2.1: චාලිතය',
      comp22: 'නිපුණතාව 2.2: සම්ප්‍රයුක්ත බල, ඝූර්ණ සහ ගුරුත්ව කේන්ද්‍ර',
      comp23: 'නිපුණතාව 2.3: නිව්ටන් නියම සහ ගම්‍යතාව',
      comp24: 'නිපුණතාව 2.4: සමතුලිතතාව',
      comp25: 'නිපුණතාව 2.5: කාර්යය, ශක්තිය සහ ක්ෂමතාව',
      comp26: 'නිපුණතාව 2.6: භ්‍රමණ සහ වෘත්ත චලිතය',
      comp27: 'නිපුණතාව 2.7: ජලස්ථිතික විද්‍යාව',
      comp28: 'නිපුණතාව 2.8: තරල ගතිවිද්‍යාව',
    },
  }[locale];

  const competencyLabels: Record<MechanicsCompetencyRef, string> = {
    'Competency 2.1': t.comp21,
    'Competency 2.2': t.comp22,
    'Competency 2.3': t.comp23,
    'Competency 2.4': t.comp24,
    'Competency 2.5': t.comp25,
    'Competency 2.6': t.comp26,
    'Competency 2.7': t.comp27,
    'Competency 2.8': t.comp28,
  };

  const competencyLessonUrls: Record<MechanicsCompetencyRef, { slug: string; name: string }> = {
    'Competency 2.1': { slug: 'rectilinear-motion-uniform-velocity', name: locale === 'si' ? '2.1 චාලිතය' : '2.1 Kinematics' },
    'Competency 2.2': { slug: 'moments-and-couples', name: locale === 'si' ? '2.2 ඝූර්ණ සහ ගුරුත්ව කේන්ද්‍රය' : '2.2 Moments & Centres of Gravity' },
    'Competency 2.3': { slug: 'newton-laws-of-motion', name: locale === 'si' ? '2.3 නිව්ටන් නියම සහ ගම්‍යතාව' : '2.3 Newton’s Laws & Momentum' },
    'Competency 2.4': { slug: 'equilibrium-of-forces', name: locale === 'si' ? '2.4 බල සමතුලිතතාව' : '2.4 Equilibrium of Forces' },
    'Competency 2.5': { slug: 'work-energy-and-power', name: locale === 'si' ? '2.5 කාර්යය, ශක්තිය සහ ක්ෂමතාව' : '2.5 Work, Energy & Power' },
    'Competency 2.6': { slug: 'circular-motion', name: locale === 'si' ? '2.6 භ්‍රමණ සහ වෘත්ත චලිතය' : '2.6 Rotational & Circular Motion' },
    'Competency 2.7': { slug: 'fluid-statics', name: locale === 'si' ? '2.7 ජලස්ථිතික විද්‍යාව' : '2.7 Hydrostatics' },
    'Competency 2.8': { slug: 'fluid-statics', name: locale === 'si' ? '2.8 තරල ගතිවිද්‍යාව' : '2.8 Fluid Dynamics' },
  };

  return (
    <div className="space-y-8">
      {/* Assessment Header */}
      <div className="p-6 rounded-2xl bg-white border border-[#DFE8EF] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14243A] font-serif">
            {t.title}
          </h2>
          <p className="text-sm text-[#475569] mt-1 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#475569] px-3 py-1 bg-[#F6FAFD] rounded-full border border-[#DFE8EF]">
            {t.answered}: {answeredCount} / {questions.length}
          </span>
          {submitted ? (
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="text-[#0F766E] border-[#DFE8EF]"
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              {t.retakeBtn}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              size="sm"
              className="bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm"
              disabled={answeredCount === 0}
            >
              {t.submitBtn}
            </Button>
          )}
        </div>
      </div>

      {/* Result Card (When Submitted) */}
      {submitted && result && (
        <Card className="border-[#0F766E]/30 bg-[#F6FAFD] overflow-hidden">
          <CardHeader className="bg-white border-b border-[#DFE8EF] pb-4">
            <CardTitle className="flex items-center justify-between text-lg text-[#14243A]">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0F766E]" />
                {t.scoreCardTitle}
              </span>
              <span className="text-2xl font-bold font-mono text-[#0F766E]">
                {result.percentageScore}% ({result.totalCorrect} / {result.totalQuestions})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Competency Breakdown Bars */}
            <div>
              <h4 className="text-sm font-semibold text-[#14243A] mb-3">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(Object.keys(result.competencyBreakdown) as MechanicsCompetencyRef[]).map((cKey) => {
                  const stat = result.competencyBreakdown[cKey];
                  const isPassing = stat.percentage >= 60;
                  return (
                    <div
                      key={cKey}
                      className="p-3 bg-white rounded-lg border border-[#DFE8EF] space-y-1"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-[#14243A]">
                          {competencyLabels[cKey]}
                        </span>
                        <span
                          className={`font-mono font-bold ${
                            isPassing ? 'text-[#0F766E]' : 'text-amber-600'
                          }`}
                        >
                          {stat.correct}/{stat.total} ({stat.percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isPassing ? 'bg-[#0F766E]' : 'bg-amber-500'
                          }`}
                          style={{ width: `${stat.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Targeted Revision Advice */}
            {result.weakCompetencies.length > 0 && (
              <div className="p-4 bg-white rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-2">
                  <BookOpen className="w-4 h-4" />
                  {t.revisionAdvice}
                </div>
                <p className="text-xs text-[#475569] mb-3">
                  {locale === 'si'
                    ? 'පහත නිපුණතා සඳහා ලකුණු 60% ට වඩා අඩු බැවින් අදාළ පාඩම් නැවත අධ්‍යයනය කිරීම නිර්දේශ කෙරේ:'
                    : 'Your score was below 60% in the following competencies. We recommend reviewing these lessons:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.weakCompetencies.map((cKey) => {
                    const lesson = competencyLessonUrls[cKey];
                    return (
                      <Link
                        key={cKey}
                        href={`/units/mechanics/${lesson.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0F766E] bg-[#F6FAFD] border border-[#DFE8EF] hover:border-[#0F766E] rounded-md transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {lesson.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id];
          const isShowSol = showSolutions[q.id];

          // Compute individual status if submitted
          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const numVal = parseFloat(studentAns);
              if (!isNaN(numVal)) {
                const tol = q.tolerance ?? 0.05 * Math.abs(q.expected);
                isCorrect = Math.abs(numVal - q.expected) <= tol;
              }
            }
          }

          return (
            <Card
              key={q.id}
              className={`border transition-colors bg-white ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300'
                    : 'border-rose-300'
                  : 'border-[#DFE8EF]'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 bg-[#F6FAFD] text-[#0F766E] border border-[#DFE8EF] rounded">
                      Q{idx + 1}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {competencyLabels[q.competencyRef]}
                    </span>
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t.correct}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" />
                          {t.incorrect}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <CardTitle className="text-base text-[#14243A] font-normal leading-relaxed pt-2">
                  {q.question[locale]}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      const isOptionCorrect = opt.id === q.correctOptionId;

                      let btnStyle = 'border-[#DFE8EF] hover:bg-slate-50 text-[#14243A]';
                      if (isSelected) {
                        btnStyle = 'border-[#0F766E] bg-teal-50 text-[#0F766E] font-semibold';
                      }
                      if (submitted) {
                        if (isOptionCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                        } else if (isSelected && !isOptionCorrect) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`flex items-start gap-2.5 p-3 text-left text-sm rounded-lg border transition-colors ${btnStyle}`}
                        >
                          <span className="font-mono font-bold text-xs uppercase px-1.5 py-0.5 rounded bg-white/70 border border-[#DFE8EF]">
                            {opt.id}
                          </span>
                          <span className="leading-snug">{opt.text[locale]}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input */}
                {q.type === 'numerical' && (
                  <div className="flex items-center gap-3 max-w-sm">
                    <input
                      type="text"
                      disabled={submitted}
                      value={studentAns || ''}
                      onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                      placeholder={locale === 'si' ? 'අගය ඇතුළත් කරන්න' : 'Enter numerical value'}
                      className="w-full px-3 py-2 text-sm border border-[#DFE8EF] rounded-lg outline-none focus:ring-1 focus:ring-[#0F766E]"
                    />
                    {q.unit && (
                      <span className="text-sm font-mono text-[#475569] whitespace-nowrap">
                        {q.unit[locale]}
                      </span>
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
                                <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                                  {p.rubric.map((r, rIdx) => (
                                    <li key={rIdx}>{r.description[locale]} ({r.point} {locale === 'si' ? 'ලකුණ' : 'mark'})</li>
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

                {/* Hint / Explanation Button */}
                <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF]">
                  <p className="text-xs text-[#64748B] italic">
                    <span className="font-semibold">{locale === 'si' ? 'ඉඟිය:' : 'Hint:'} </span>
                    {q.hint[locale]}
                  </p>
                  {submitted && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs text-[#0F766E] hover:text-[#0D655E]"
                    >
                      <HelpCircle className="w-3.5 h-3.5 mr-1" />
                      {isShowSol ? t.hideExplanation : t.showExplanation}
                    </Button>
                  )}
                </div>

                {/* Step-by-Step Worked Solution */}
                {submitted && isShowSol && (
                  <div className="p-3.5 rounded-lg bg-[#F6FAFD] border border-[#DFE8EF] text-xs text-[#14243A] space-y-1.5">
                    <span className="font-bold text-[#0F766E] block">
                      {t.solutionLabel}
                    </span>
                    <p className="whitespace-pre-line leading-relaxed">
                      {q.solution[locale]}
                    </p>
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
