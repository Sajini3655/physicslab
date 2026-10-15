'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  generateQuantumAssessment,
  evaluateQuantumAssessment,
} from '../questions/assessment';
import {
  QuantumQuestion,
  QuantumCompetency,
  AssessmentResult,
} from '../questions/types';
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

interface QuantumNuclearAssessmentProps {
  locale?: Locale;
}

export const QuantumNuclearAssessment: React.FC<QuantumNuclearAssessmentProps> = ({
  locale = 'en',
}) => {
  const [questions] = useState<QuantumQuestion[]>(() => generateQuantumAssessment());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
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
    const res = evaluateQuantumAssessment(questions, answers, 1200);
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
      title: 'Unit 11 Comprehensive Assessment: Matter and Radiation',
      subtitle:
        'Summative examination covering all 4 syllabus competencies (11.1 to 11.4): photoelectric effect & photons, de Broglie matter waves & X-rays, Bohr atomic model & spectral series, and nuclear radioactivity & mass-energy equivalence.',
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
      comp111: 'Competency 11.1: Black-Body Radiation & Quantum Theory',
      comp112: 'Competency 11.2: Photoelectric Effect & Photons',
      comp113: 'Competency 11.3: Wave-Particle Duality',
      comp114: 'Competency 11.4: X-Rays & Production',
      comp115: 'Competency 11.5: Atomic Models & Line Spectra',
      comp116: 'Competency 11.6: Nuclear Physics, Binding Energy, Fission & Fusion',
      comp117: 'Competency 11.7: Fundamental Particles & Standard Model',
    },
    si: {
      title: 'ඒකක 11 සමස්ත ඇගයීම: පදාර්ථය සහ විකිරණ',
      subtitle:
        'සියලුම විෂය නිර්දේශ නිපුණතා 7 (11.1 සිට 11.7) ආවරණය වන සමාප්ති ඇගයීම: කෘෂ්ණ වස්තු විකිරණය, ප්‍රකාශ විද්‍යුත් ආචරණය, තරංග-අංශු ද්වෛතය, එක්ස්-කිරණ, බෝර් පරමාණුක ආකෘතිය, න්‍යෂ්ටික විකිරණශීලතාව, විඛණ්ඩනය/විලයනය, සහ මූලික අංශු.',
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
      comp111: 'නිපුණතාව 11.1: කෘෂ්ණ වස්තු විකිරණය සහ ක්වොන්ටම් වාදය',
      comp112: 'නිපුණතාව 11.2: ප්‍රකාශ විද්‍යුත් ආචරණය සහ ෆෝටෝන',
      comp113: 'නිපුණතාව 11.3: තරංග-අංශු ද්වෛතය',
      comp114: 'නිපුණතාව 11.4: එක්ස්-කිරණ නිෂ්පාදනය සහ ගුණ',
      comp115: 'නිපුණතාව 11.5: පරමාණුක ආකෘති සහ රේඛීය වර්ණාවලි',
      comp116: 'නිපුණතාව 11.6: න්‍යෂ්ටික භෞතික විද්‍යාව, බන්ධන ශක්තිය, විඛණ්ඩනය සහ විලයනය',
      comp117: 'නිපුණතාව 11.7: මූලික අංශු සහ අන්තර්ක්‍රියා',
    },
  }[locale];

  const competencyTitles: Record<QuantumCompetency, string> = {
    '11.1': t.comp111,
    '11.2': t.comp112,
    '11.3': t.comp113,
    '11.4': t.comp114,
    '11.5': t.comp115,
    '11.6': t.comp116,
    '11.7': t.comp117,
  };

  const competencyLessonSlugs: Record<QuantumCompetency, string> = {
    '11.1': 'blackbody-radiation-and-quantum-theory',
    '11.2': 'photoelectric-effect-and-photons',
    '11.3': 'wave-particle-duality-and-xrays',
    '11.4': 'wave-particle-duality-and-xrays',
    '11.5': 'atomic-models-and-line-spectra',
    '11.6': 'nuclear-physics-and-radioactivity',
    '11.7': 'fundamental-particles-and-interactions',
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <Card className="border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
        <CardHeader className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                {t.title}
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {t.answered}: {answeredCount} / {questions.length}
              </span>
              {submitted ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReset}
                  className="text-xs gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.retakeBtn}
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  className="text-xs gap-1.5 bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.submitBtn}
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Performance Summary if Submitted */}
      {submitted && result && (
        <Card className="border border-teal-200 dark:border-teal-900/50 bg-teal-50/40 dark:bg-teal-950/20 shadow-sm">
          <CardHeader className="border-b border-teal-100 dark:border-teal-900/40 pb-4">
            <CardTitle className="text-lg font-bold text-teal-950 dark:text-teal-200 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" />
              {t.scoreCardTitle}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-900/40">
              <div>
                <span className="text-xs font-medium text-slate-500 block">{t.scoreLabel}</span>
                <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400 font-mono">
                  {result.score} / {result.totalQuestions} ({result.percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="w-full sm:w-64 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border">
                <div
                  className="h-full bg-teal-600 transition-all duration-500 rounded-full"
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
            </div>

            {/* Competency Mastery Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(Object.keys(result.competencyBreakdown) as QuantumCompetency[]).map((comp) => {
                  const brk = result.competencyBreakdown[comp];
                  const title = competencyTitles[comp];
                  return (
                    <div
                      key={comp}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
                          {title}
                        </span>
                        <span className="font-mono font-bold text-teal-700 dark:text-teal-400 shrink-0">
                          {brk.correct}/{brk.total} ({brk.percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            brk.percentage >= 75
                              ? 'bg-emerald-500'
                              : brk.percentage >= 50
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${brk.percentage}%` }}
                        />
                      </div>
                      {brk.percentage < 70 && (
                        <div className="pt-1">
                          <Link
                            href={`/units/matter-and-radiation/${competencyLessonSlugs[comp]}`}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 hover:text-teal-700 hover:underline"
                          >
                            <BookOpen className="w-3 h-3" />
                            {t.revisionAdvice}: {title}
                          </Link>
                        </div>
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
          const userAns = answers[q.id]?.trim() || '';
          let isCorrect = false;
          if (submitted && result) {
            const detail = result.details.find((d) => d.questionId === q.id);
            isCorrect = detail?.isCorrect || false;
          }

          return (
            <Card
              key={q.id}
              className={`border transition-colors ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                    : 'border-rose-300 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/10'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <CardContent className="p-5 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-900/40">
                      {competencyTitles[q.competency]}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {q.difficulty} • {q.type}
                    </span>
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          {t.correct}
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          {t.incorrect}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Question Prompt */}
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {q.question[locale]}
                </p>

                {/* Options for MCQ */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = userAns === opt.id;
                      const isRightOption = submitted && opt.id === q.correctOptionId;

                      let optClass =
                        'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900';
                      if (isSelected) {
                        optClass =
                          'border-teal-600 dark:border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 text-teal-950 dark:text-teal-200';
                      }
                      if (submitted) {
                        if (isRightOption) {
                          optClass =
                            'border-emerald-500 dark:border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200';
                        } else if (isSelected && !isRightOption) {
                          optClass =
                            'border-rose-500 dark:border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-3 ${optClass}`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center font-bold font-mono text-[11px] shrink-0 ${
                              isSelected
                                ? 'bg-teal-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span className="leading-relaxed">{opt.text[locale]}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input Field */}
                {q.type === 'numerical' && q.numericalAnswer && (
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        step="any"
                        placeholder="Enter numerical answer"
                        value={userAns}
                        disabled={submitted}
                        onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                        className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono w-48 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-xs font-bold font-mono text-slate-500">
                        {q.numericalAnswer.unit}
                      </span>
                    </div>

                    {submitted && (
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                        Expected: {q.numericalAnswer.value} {q.numericalAnswer.unit} (±{(q.numericalAnswer.tolerance * 100).toFixed(0)}%)
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

                {/* Explanation Toggle & Content */}
                {submitted && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      {showSolutions[q.id] ? t.hideExplanation : t.showExplanation}
                    </button>

                    {showSolutions[q.id] && (
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                        <span className="font-bold text-slate-900 dark:text-slate-100 block">
                          {t.solutionLabel}
                        </span>
                        <p>{q.explanation[locale]}</p>
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
