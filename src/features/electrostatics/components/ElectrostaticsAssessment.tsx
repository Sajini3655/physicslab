'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  generateUnit6Assessment,
  evaluateElectrostaticsAssessment,
  ElectrostaticsAssessmentResult,
} from '../questions/assessment';
import { ElectrostaticsQuestion, ElectrostaticsCompetencyRef } from '../questions/types';
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

interface ElectrostaticsAssessmentProps {
  locale?: Locale;
}

export const ElectrostaticsAssessment: React.FC<ElectrostaticsAssessmentProps> = ({
  locale = 'en',
}) => {
  const [questions] = useState<ElectrostaticsQuestion[]>(() => generateUnit6Assessment());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<ElectrostaticsAssessmentResult | null>(null);
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
    const res = evaluateElectrostaticsAssessment(questions, answers);
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
      title: 'Unit 6 Comprehensive Assessment: Electrostatic Field',
      subtitle:
        'Summative evaluation covering all 4 syllabus competencies (6.1 to 6.4): Coulomb’s law, electric field, potential, Gauss’s theorem, conductors, and capacitance.',
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
      comp61: 'Competency 6.1: Coulomb’s Law & Electric Field Intensity',
      comp62: 'Competency 6.2: Electric Potential & Equipotential Surfaces',
      comp63: 'Competency 6.3: Gauss’s Law & Conductor Electrostatics',
      comp64: 'Competency 6.4: Capacitors, Dielectrics & Energy',
    },
    si: {
      title: 'ඒකක 6 සමස්ත ඇගයීම: ස්ථිති විද්‍යුත් ක්ෂේත්‍ර',
      subtitle:
        'සියලුම විෂය නිර්දේශ නිපුණතා 4 (6.1 සිට 6.4) ආවරණය වන සමාප්ති ඇගයීම: කූලෝම් නියමය, විද්‍යුත් ක්ෂේත්‍රය, විභවය, ගවුස් නියමය, සන්නායක සහ ධාරිතාව.',
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
      comp61: 'නිපුණතාව 6.1: කූලෝම් නියමය සහ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව',
      comp62: 'නිපුණතාව 6.2: විද්‍යුත් විභවය සහ සමවිභව පෘෂ්ඨ',
      comp63: 'නිපුණතාව 6.3: ගවුස් නියමය සහ සන්නායකවල ස්ථිති විද්‍යුතය',
      comp64: 'නිපුණතාව 6.4: ධාරිත්‍රක, පාරවිද්‍යුත සහ ශක්තිය',
    },
  }[locale];

  const competencyLabels: Record<ElectrostaticsCompetencyRef, string> = {
    'Competency 6.1': t.comp61,
    'Competency 6.2': t.comp62,
    'Competency 6.3': t.comp63,
    'Competency 6.4': t.comp64,
  };

  const revisionRoutes: Record<ElectrostaticsCompetencyRef, { slug: string; title: string }> = {
    'Competency 6.1': {
      slug: 'coulombs-law-and-electric-field',
      title: locale === 'en' ? 'Coulomb’s Law & Field' : 'කූලෝම් නියමය සහ ක්ෂේත්‍රය',
    },
    'Competency 6.2': {
      slug: 'electric-potential-and-equipotential-surfaces',
      title: locale === 'en' ? 'Potential & Equipotentials' : 'විභවය සහ සමවිභව පෘෂ්ඨ',
    },
    'Competency 6.3': {
      slug: 'gauss-law-and-conductors',
      title: locale === 'en' ? 'Gauss’s Law & Conductors' : 'ගවුස් නියමය සහ සන්නායක',
    },
    'Competency 6.4': {
      slug: 'capacitance-dielectrics-and-energy',
      title: locale === 'en' ? 'Capacitors & Dielectrics' : 'ධාරිත්‍රක සහ පාරවිද්‍යුත',
    },
  };

  return (
    <div className="space-y-6">
      {/* Assessment Header */}
      <Card className="border border-[#DFE8EF] shadow-2xs">
        <CardHeader className="bg-[#F8FAFC] border-b border-[#DFE8EF] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-[#14243A] font-serif flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0F766E]" />
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-[#DFE8EF] rounded-full text-[#475569]">
              {t.answered}: {answeredCount} / {questions.length}
            </span>
            {submitted ? (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t.retakeBtn}
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={handleSubmit}
                className="bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold"
              >
                {t.submitBtn}
              </Button>
            )}
          </div>
        </CardHeader>

        {/* Score & Evaluation Panel */}
        {submitted && result && (
          <CardContent className="p-6 bg-teal-50/50 border-b border-teal-100 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white rounded-xl border border-teal-200 shadow-2xs">
              <div>
                <h3 className="text-base font-bold text-[#14243A]">
                  {t.scoreCardTitle}
                </h3>
                <p className="text-xs text-[#475569] mt-0.5">
                  {t.scoreLabel}{' '}
                  <span className="text-base font-bold font-mono text-[#0F766E]">
                    {result.totalCorrect} / {result.totalQuestions} ({result.percentageScore}%)
                  </span>
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full inline-block ${
                    result.percentageScore >= 75
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : result.percentageScore >= 50
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {result.percentageScore >= 75
                    ? locale === 'en'
                      ? 'Distinction / Mastery'
                      : 'විශිෂ්ට සාමාර්ථය'
                    : result.percentageScore >= 50
                    ? locale === 'en'
                      ? 'Satisfactory Pass'
                      : 'සතුටුදායක සාමාර්ථය'
                    : locale === 'en'
                    ? 'Revision Required'
                    : 'පුනරීක්ෂණය අවශ්‍යයි'}
                </span>
              </div>
            </div>

            {/* Competency Breakdown Cards */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(
                  Object.keys(result.competencyBreakdown) as ElectrostaticsCompetencyRef[]
                ).map((comp) => {
                  const data = result.competencyBreakdown[comp];
                  const isWeak = data.percentage < 60;
                  return (
                    <div
                      key={comp}
                      className={`p-3 rounded-lg border text-xs flex flex-col justify-between ${
                        isWeak
                          ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                          : 'bg-white border-[#DFE8EF] text-[#14243A]'
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold mb-1">
                        <span>{competencyLabels[comp]}</span>
                        <span className="font-mono text-sm">
                          {data.correct}/{data.total} ({data.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                        <div
                          className={`h-full rounded-full ${
                            isWeak ? 'bg-rose-500' : 'bg-[#0F766E]'
                          }`}
                          style={{ width: `${data.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Revision Advice */}
            {result.weakCompetencies.length > 0 && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  {t.revisionAdvice}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {result.weakCompetencies.map((comp) => {
                    const lesson = revisionRoutes[comp];
                    return (
                      <Link
                        key={comp}
                        href={`/units/electrostatic-field/${lesson.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-amber-300 hover:border-amber-500 text-amber-900 text-xs font-medium rounded-md shadow-2xs transition-colors"
                      >
                        <BookOpen className="w-3 h-3 text-amber-600" />
                        {lesson.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Question List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id]?.trim() || '';
          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const parsed = parseFloat(studentAns);
              if (!isNaN(parsed)) {
                const tol = q.tolerance ?? Math.abs(q.expected * 0.05);
                isCorrect = Math.abs(parsed - q.expected) <= tol;
              }
            } else if (q.type === 'structured') {
              isCorrect = studentAns.length > 0 && studentAns !== '999999' && studentAns !== 'incorrect';
            }
          }

          return (
            <Card
              key={q.id}
              className={`border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-[#DFE8EF] hover:border-slate-300'
              }`}
            >
              <CardContent className="p-5 space-y-4">
                {/* Question Meta Bar */}
                <div className="flex items-center justify-between text-xs text-[#475569]">
                  <span className="font-semibold text-[#14243A]">
                    {locale === 'en' ? `Question ${idx + 1}` : `ප්‍රශ්නය ${idx + 1}`}{' '}
                    <span className="text-[#0F766E] font-normal">
                      ({q.competencyRef})
                    </span>
                  </span>
                  <span className="capitalize px-2 py-0.5 bg-slate-100 rounded text-[11px]">
                    {q.difficulty}
                  </span>
                </div>

                {/* Question Prompt */}
                <p className="text-sm sm:text-base font-medium text-[#14243A] leading-relaxed">
                  {q.question[locale]}
                </p>

                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      const isOptionCorrect = opt.id === q.correctOptionId;

                      let optClasses =
                        'flex items-center gap-3 p-3 text-xs sm:text-sm rounded-lg border text-left transition-colors ';
                      if (submitted) {
                        if (isOptionCorrect) {
                          optClasses +=
                            'bg-emerald-100/70 border-emerald-400 text-emerald-950 font-semibold';
                        } else if (isSelected && !isOptionCorrect) {
                          optClasses +=
                            'bg-rose-100/70 border-rose-400 text-rose-950';
                        } else {
                          optClasses += 'bg-white border-slate-200 text-slate-500 opacity-70';
                        }
                      } else {
                        if (isSelected) {
                          optClasses +=
                            'bg-teal-50 border-[#0F766E] text-[#0F766E] font-semibold';
                        } else {
                          optClasses +=
                            'bg-white border-slate-200 hover:border-slate-300 text-[#14243A]';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={optClasses}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs uppercase shrink-0 ${
                              isSelected
                                ? 'bg-[#0F766E] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span className="flex-1">{opt.text[locale]}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input */}
                {q.type === 'numerical' && (
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <input
                      type="text"
                      disabled={submitted}
                      value={answers[q.id] || ''}
                      onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                      placeholder={locale === 'en' ? 'Enter numerical answer...' : 'සංඛ්‍යාත්මක අගය ඇතුළත් කරන්න...'}
                      className="px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F766E] font-mono w-56"
                    />
                    {q.unit && (
                      <span className="text-xs font-semibold text-[#475569] font-mono">
                        {q.unit[locale]}
                      </span>
                    )}
                    {submitted && (
                      <span className="text-xs font-mono text-slate-600">
                        {locale === 'en' ? `[Expected: ${q.expected} ± ${q.tolerance ?? '5%'}]` : `[අපේක්ෂිත: ${q.expected} ± ${q.tolerance ?? '5%'}]`}
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

                {/* Submission Result Feedback */}
                {submitted && (
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            {t.correct}
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <XCircle className="w-4 h-4 text-rose-600" />
                            {t.incorrect}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleSolution(q.id)}
                        className="text-xs text-[#0F766E] hover:underline flex items-center gap-1"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        {showSolutions[q.id] ? t.hideExplanation : t.showExplanation}
                      </button>
                    </div>

                    {/* Collapsible Solution */}
                    {showSolutions[q.id] && (
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 text-slate-700 animate-in fade-in duration-200">
                        <div className="font-semibold text-[#14243A]">
                          {t.solutionLabel}
                        </div>
                        <p className="leading-relaxed">{q.solution[locale]}</p>
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
