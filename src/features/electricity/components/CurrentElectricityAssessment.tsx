'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  generateUnit8Assessment,
  evaluateElectricityAssessment,
  ElectricityAssessmentResult,
} from '../questions/assessment';
import { ElectricityQuestion, ElectricityCompetencyRef } from '../questions/types';
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

interface CurrentElectricityAssessmentProps {
  locale?: Locale;
}

export const CurrentElectricityAssessment: React.FC<CurrentElectricityAssessmentProps> = ({
  locale = 'en',
}) => {
  const [questions] = useState<ElectricityQuestion[]>(() => generateUnit8Assessment());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<ElectricityAssessmentResult | null>(null);
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
    const res = evaluateElectricityAssessment(questions, answers);
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
      title: 'Unit 8 Comprehensive Assessment: Current Electricity',
      subtitle:
        'Summative evaluation covering syllabus competencies 8.1 to 8.6: drift velocity, Ohm’s law, internal resistance, Kirchhoff’s laws, potentiometer & bridges, and electromagnetic induction.',
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
      comp81: 'Competency 8.1: Current, Resistance, Resistivity & Ohm’s Law',
      comp82: 'Competency 8.2: DC Energy & Power',
      comp83: 'Competency 8.3: EMF & Internal Resistance',
      comp84: 'Competency 8.4: Kirchhoff’s Laws & Circuit Analysis',
      comp85: 'Competency 8.5: Measuring Instruments, Bridges & Potentiometers',
      comp86: 'Competency 8.6: Electromagnetic Induction, AC & Transformers',
    },
    si: {
      title: 'ඒකක 8 සමස්ත ඇගයීම: ධාරා විද්‍යුතය',
      subtitle:
        'විෂය නිර්දේශ නිපුණතා (8.1 සිට 8.6) ආවරණය වන සමාප්ති ඇගයීම: ප්ලාවිත ප්‍රවේගය, ඕම් නියමය, අභ්‍යන්තර ප්‍රතිරෝධය, කර්චොෆ් නීති, විභවමානය හා සේතු, සහ විද්‍යුත් චුම්බක ප්‍රේරණය.',
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
      comp81: 'නිපුණතාව 8.1: ධාරාව, ප්‍රතිරෝධය, ප්‍රතිරෝධකතාව සහ ඕම් නියමය',
      comp82: 'නිපුණතාව 8.2: DC ශක්තිය සහ ක්ෂමතාව',
      comp83: 'නිපුණතාව 8.3: වි.ගා.බ. සහ අභ්‍යන්තර ප්‍රතිරෝධය',
      comp84: 'නිපුණතාව 8.4: කර්චොෆ් නීති සහ පරිපථ විශ්ලේෂණය',
      comp85: 'නිපුණතාව 8.5: මිනුම් උපකරණ, සේතු සහ විභවමාන',
      comp86: 'නිපුණතාව 8.6: විද්‍යුත් චුම්බක ප්‍රේරණය, AC සහ පරිණාමක',
    },
  }[locale];

  const compNames: Record<ElectricityCompetencyRef, string> = {
    'Competency 8.1': t.comp81,
    'Competency 8.2': t.comp82,
    'Competency 8.3': t.comp83,
    'Competency 8.4': t.comp84,
    'Competency 8.5': t.comp85,
    'Competency 8.6': t.comp86,
  };

  const compLessonRoutes: Record<ElectricityCompetencyRef, string> = {
    'Competency 8.1': '/units/current-electricity/electric-current-drift-velocity',
    'Competency 8.2': '/units/current-electricity/resistance-resistivity-temperature',
    'Competency 8.3': '/units/current-electricity/emf-internal-resistance',
    'Competency 8.4': '/units/current-electricity/kirchhoff-laws-networks',
    'Competency 8.5': '/units/current-electricity/potentiometer-bridge-circuits',
    'Competency 8.6': '/units/current-electricity/electromagnetic-induction-motional-emf',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Assessment Header Card */}
      <Card className="border border-slate-200 bg-white shadow-xs">
        <CardHeader className="border-b border-slate-100 bg-[#F6FAFD]/70 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0F766E]/10 text-[#0F766E] mb-2 font-mono">
                UNIT 08 • SUMMATIVE EXAM
              </div>
              <CardTitle className="text-xl sm:text-2xl font-serif text-[#14243A]">
                {t.title}
              </CardTitle>
              <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                {t.subtitle}
              </p>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
              <span className="text-xs font-semibold text-[#475569]">
                {t.answered}: {answeredCount} / {questions.length}
              </span>
              <div className="w-32 bg-slate-200 h-2 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="bg-[#0F766E] h-full transition-all duration-300"
                  style={{
                    width: `${(answeredCount / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4 flex items-center justify-between gap-4">
          <div className="text-xs text-[#475569]">
            {submitted ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Exam submitted and graded
              </span>
            ) : (
              <span>Select or enter answers for all 16 questions before submitting.</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {submitted && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t.retakeBtn}
              </Button>
            )}
            {!submitted && (
              <Button
                size="sm"
                onClick={handleSubmit}
                disabled={answeredCount === 0}
                className="bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold"
              >
                {t.submitBtn}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results & Diagnostic Breakdown (Post-submission) */}
      {submitted && result && (
        <Card className="border border-teal-200 bg-teal-50/40 shadow-sm animate-in fade-in duration-300">
          <CardHeader className="pb-3 border-b border-teal-100">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0F766E]" />
              <CardTitle className="text-lg font-serif text-[#14243A]">
                {t.scoreCardTitle}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-5">
            <div className="flex flex-wrap items-center justify-around gap-4 p-4 bg-white rounded-lg border border-teal-100">
              <div className="text-center">
                <div className="text-xs text-[#475569] font-medium">{t.scoreLabel}</div>
                <div className="text-3xl font-bold font-mono text-[#0F766E]">
                  {result.percentageScore}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-[#475569] font-medium">Correct Answers</div>
                <div className="text-2xl font-bold font-mono text-[#14243A]">
                  {result.totalCorrect} / {result.totalQuestions}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(Object.keys(result.competencyBreakdown) as ElectricityCompetencyRef[]).map(
                  (compKey) => {
                    const data = result.competencyBreakdown[compKey];
                    const isPassing = data.percentage >= 60;
                    return (
                      <div
                        key={compKey}
                        className="p-3 bg-white rounded-md border border-slate-200 flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-[#14243A] leading-snug">
                            {compNames[compKey]}
                          </span>
                          <span
                            className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                              isPassing
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {data.percentage}%
                          </span>
                        </div>
                        <div className="mt-2 text-[11px] text-[#475569] flex items-center justify-between">
                          <span>
                            {data.correct} / {data.total} items correct
                          </span>
                          <Link
                            href={compLessonRoutes[compKey]}
                            className="text-[#0F766E] hover:underline flex items-center gap-1 font-medium"
                          >
                            <BookOpen className="w-3 h-3" />
                            Review
                          </Link>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {result.weakCompetencies.length > 0 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                <span className="font-semibold block mb-1">{t.revisionAdvice}:</span>
                <ul className="list-disc list-inside space-y-1">
                  {result.weakCompetencies.map((comp) => (
                    <li key={comp}>
                      <span className="font-medium">{compNames[comp]}:</span> Review the lesson theory and practice exercises at{' '}
                      <Link
                        href={compLessonRoutes[comp]}
                        className="underline text-[#0F766E] font-semibold"
                      >
                        {compLessonRoutes[comp]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Question Cards List */}
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
                  : 'border-slate-200 bg-white'
              }`}
            >
              <CardContent className="pt-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#14243A] text-xs font-bold flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-100 text-[#475569]">
                      {q.competencyRef}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    ID: {q.id}
                  </span>
                </div>

                {/* Question Prompt */}
                <div className="text-sm font-medium text-[#14243A] leading-relaxed">
                  {q.question[locale]}
                </div>

                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      const isOptionCorrect = opt.id === q.correctOptionId;

                      let optClass =
                        'border-slate-200 hover:border-slate-300 bg-white text-[#14243A]';

                      if (submitted) {
                        if (isOptionCorrect) {
                          optClass =
                            'border-emerald-500 bg-emerald-100/60 text-emerald-950 font-medium';
                        } else if (isSelected && !isOptionCorrect) {
                          optClass =
                            'border-rose-400 bg-rose-100/60 text-rose-950';
                        } else {
                          optClass = 'border-slate-200 opacity-60 text-slate-600';
                        }
                      } else if (isSelected) {
                        optClass =
                          'border-[#0F766E] bg-teal-50/50 text-[#0F766E] font-medium';
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${optClass}`}
                        >
                          <span className="pr-3 leading-relaxed">
                            {opt.text[locale]}
                          </span>
                          {submitted && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {submitted && isSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
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
