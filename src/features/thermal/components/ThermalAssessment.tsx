'use client';

import React from 'react';
import { Locale, useAssessmentSession } from '@/shared/curriculum';
import {
  generateUnit4Assessment,
  evaluateThermalAssessment,
  ThermalAssessmentResult,
} from '../questions/assessment';
import { ThermalQuestion, ThermalCompetencyRef } from '../questions/types';
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

interface ThermalAssessmentProps {
  locale?: Locale;
}

export const ThermalAssessment: React.FC<ThermalAssessmentProps> = ({
  locale = 'en',
}) => {
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
  } = useAssessmentSession<ThermalQuestion, ThermalAssessmentResult>({
    storageKey: 'unit-4',
    generateQuestions: generateUnit4Assessment,
    evaluateAssessment: evaluateThermalAssessment,
  });

  const t = {
    en: {
      title: 'Unit 4 Comprehensive Assessment: Thermal Physics',
      subtitle:
        'Summative evaluation covering all 5 syllabus competencies (4.1 to 4.5) including all 6 canonical laboratory practicals.',
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
      comp41: 'Competency 4.1: Temperature & Thermometry',
      comp42: 'Competency 4.2: Thermal Expansion of Solids & Liquids',
      comp43: 'Competency 4.3: Calorimetry, Latent Heat & Cooling',
      comp44: 'Competency 4.4: Gas Laws & Kinetic Theory',
      comp45: 'Competency 4.5: Heat Transfer & Thermodynamics First Law',
      comp46: 'Competency 4.6: Specific Heat Capacity & Phase Transitions',
      comp47: 'Competency 4.7: Vapour Pressure & Humidity',
      comp48: 'Competency 4.8: Laws of Thermodynamics & Heat Engines',
      comp49: 'Competency 4.9: Heat Transfer Mechanisms & Radiation',
    },
    si: {
      title: 'ඒකක 4 සමස්ත ඇගයීම: තාප භෞතික විද්‍යාව',
      subtitle:
        'සියලුම විෂය නිර්දේශ නිපුණතා (4.1 සිට 4.9) සහ ප්‍රායෝගික පරීක්ෂණ ආවරණය වන සමාප්ති ඇගයීම.',
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
      comp41: 'නිපුණතාව 4.1: උෂ්ණත්වය සහ උෂ්ණත්වමිතිය',
      comp42: 'නිපුණතාව 4.2: ඝන සහ ද්‍රවවල තාප ප්‍රසාරණය',
      comp43: 'නිපුණතාව 4.3: කැලරිමිතිය, ගුප්ත තාපය සහ සිසිලනය',
      comp44: 'නිපුණතාව 4.4: වායු නියම සහ චාලක වාදය',
      comp45: 'නිපුණතාව 4.5: තාප හුවමාරුව සහ තාපගති විද්‍යාවේ පළමු නියමය',
      comp46: 'නිපුණතාව 4.6: විශිෂ්ට තාප ධාරිතාව සහ කලාප විපර්යාස',
      comp47: 'නිපුණතාව 4.7: වාෂ්ප පීඩනය සහ ආර්ද්‍රතාව',
      comp48: 'නිපුණතාව 4.8: තාපගති විද්‍යා නියම සහ තාප එන්ජින්',
      comp49: 'නිපුණතාව 4.9: තාප හුවමාරු යාන්ත්‍රණ සහ විකිරණය',
    },
  }[locale];

  const competencyLabels: Record<ThermalCompetencyRef, string> = {
    'Competency 4.1': t.comp41,
    'Competency 4.2': t.comp42,
    'Competency 4.3': t.comp43,
    'Competency 4.4': t.comp44,
    'Competency 4.5': t.comp45,
    'Competency 4.6': t.comp46,
    'Competency 4.7': t.comp47,
    'Competency 4.8': t.comp48,
    'Competency 4.9': t.comp49,
  };

  const revisionRoutes: Record<ThermalCompetencyRef, { slug: string; title: string }> = {
    'Competency 4.1': {
      slug: 'thermometry-and-thermal-expansion',
      title: locale === 'en' ? 'Temperature & Scales' : 'උෂ්ණත්වය සහ පරිමාණ',
    },
    'Competency 4.2': {
      slug: 'thermometry-and-thermal-expansion',
      title: locale === 'en' ? 'Thermal Expansion' : 'තාප ප්‍රසාරණය',
    },
    'Competency 4.3': {
      slug: 'calorimetry-and-phase-changes',
      title: locale === 'en' ? 'Calorimetry & Cooling' : 'කැලරිමිතිය සහ සිසිලනය',
    },
    'Competency 4.4': {
      slug: 'ideal-gas-laws-and-kinetic-theory',
      title: locale === 'en' ? 'Gas Laws & Kinetic Theory' : 'වායු නියම සහ චාලක වාදය',
    },
    'Competency 4.5': {
      slug: 'thermodynamics-first-law',
      title: locale === 'en' ? 'Thermodynamics & Heat Transfer' : 'තාපගති විද්‍යාව සහ තාප හුවමාරුව',
    },
    'Competency 4.6': {
      slug: 'calorimetry-and-phase-changes',
      title: locale === 'en' ? 'Latent Heat & Phase Transitions' : 'ගුප්ත තාපය සහ කලාප විපර්යාස',
    },
    'Competency 4.7': {
      slug: 'calorimetry-and-phase-changes',
      title: locale === 'en' ? 'Vapour Pressure & Hygrometry' : 'වාෂ්ප පීඩනය සහ ආර්ද්‍රතාමිතිය',
    },
    'Competency 4.8': {
      slug: 'laws-of-thermodynamics',
      title: locale === 'en' ? 'Laws of Thermodynamics' : 'තාපගති විද්‍යා නියම',
    },
    'Competency 4.9': {
      slug: 'heat-transfer-mechanisms',
      title: locale === 'en' ? 'Heat Transfer Mechanisms' : 'තාප හුවමාරු යාන්ත්‍රණ',
    },
  };

  return (
    <div className="space-y-6">
      {/* Assessment Header */}
      <Card className="border border-[#DFE8EF] shadow-sm">
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
                      ? 'bg-emerald-100 text-emerald-800'
                      : result.percentageScore >= 50
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {result.percentageScore >= 75
                    ? locale === 'en'
                      ? 'Distinction Mastery'
                      : 'විශිෂ්ට සාමාර්ථය'
                    : result.percentageScore >= 50
                    ? locale === 'en'
                      ? 'Competent Passing'
                      : 'සතුටුදායක සාමාර්ථය'
                    : locale === 'en'
                    ? 'Revision Needed'
                    : 'පුනරීක්ෂණය අවශ්‍යයි'}
                </span>
              </div>
            </div>

            {/* Competency Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(Object.keys(result.competencyBreakdown) as ThermalCompetencyRef[]).map(
                  (comp) => {
                    const data = result.competencyBreakdown[comp];
                    const pass = data.percentage >= 60;
                    return (
                      <div
                        key={comp}
                        className="p-3 bg-white rounded-lg border border-[#DFE8EF] flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#14243A]">
                            {competencyLabels[comp]}
                          </div>
                          <div className="text-[11px] text-[#475569] font-mono mt-0.5">
                            {data.correct} / {data.total} ({data.percentage}%)
                          </div>
                        </div>
                        {pass ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Weak Competencies & Revision Advice */}
            {result.weakCompetencies.length > 0 && (
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <BookOpen className="w-4 h-4" />
                  {t.revisionAdvice}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {result.weakCompetencies.map((comp) => {
                    const rev = revisionRoutes[comp];
                    if (!rev) return null;
                    return (
                      <Link
                        key={comp}
                        href={`/units/thermal-physics/${rev.slug}`}
                        className="px-3 py-1 bg-white border border-amber-300 rounded-md text-xs font-medium text-amber-950 hover:bg-amber-100/60 transition-colors"
                      >
                        {rev.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id]?.trim() || '';
          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const num = parseFloat(studentAns);
              const tol = q.tolerance ?? Math.abs(q.expected * 0.05);
              isCorrect = !isNaN(num) && Math.abs(num - q.expected) <= tol;
            } else if (q.type === 'structured') {
              isCorrect = studentAns.length > 0 && studentAns !== '999999' && studentAns !== 'incorrect';
            }
          }

          return (
            <Card
              key={q.id}
              className={`border transition-colors ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-[#DFE8EF] hover:border-teal-300'
              }`}
            >
              <CardContent className="p-5 space-y-4">
                {/* Question Top Info */}
                <div className="flex items-center justify-between text-xs text-[#475569]">
                  <span className="font-semibold text-teal-800">
                    Question {idx + 1} of {questions.length} • {q.competencyRef}
                  </span>
                  <span className="capitalize font-mono px-2 py-0.5 rounded bg-slate-100">
                    {q.type.toUpperCase()}
                  </span>
                </div>

                {/* Question Text */}
                <p className="text-sm font-medium text-[#14243A] leading-relaxed">
                  {q.question[locale]}
                </p>

                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      let optionStyle =
                        'border-slate-200 bg-white hover:border-teal-400 text-slate-800';

                      if (submitted) {
                        if (opt.id === q.correctOptionId) {
                          optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                        } else if (isSelected && !isCorrect) {
                          optionStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                        } else {
                          optionStyle = 'border-slate-200 bg-slate-50/50 opacity-60';
                        }
                      } else if (isSelected) {
                        optionStyle = 'border-[#0F766E] bg-teal-50/50 text-[#0F766E] font-medium';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all flex items-start gap-2.5 ${optionStyle}`}
                        >
                          <span className="font-mono uppercase font-bold text-xs shrink-0 mt-0.5">
                            {opt.id.replace('opt-', '')}.
                          </span>
                          <span className="leading-snug">{opt.text[locale]}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input */}
                {q.type === 'numerical' && (
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="number"
                      step="any"
                      placeholder="Enter numerical value"
                      disabled={submitted}
                      value={studentAns}
                      onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                      className={`w-48 px-3 py-1.5 text-sm font-mono border rounded-md focus:outline-none ${
                        submitted
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-rose-500 bg-rose-50'
                          : 'border-slate-300 focus:border-[#0F766E]'
                      }`}
                    />
                    {q.unit && (
                      <span className="text-xs font-mono text-slate-600">
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

                {/* Submitted Feedback & Solutions Toggle */}
                {submitted && (
                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            {t.correct}
                          </span>
                        ) : (
                          <span className="text-rose-700 font-semibold flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            {t.incorrect}
                          </span>
                        )}
                        {q.type === 'numerical' && (
                          <span className="text-slate-500 font-mono text-[11px] ml-2">
                            (Expected: {q.expected} ± {q.tolerance ?? 0} {q.unit?.[locale]})
                          </span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSolution(q.id)}
                        className="text-xs text-teal-800 hover:text-teal-900 gap-1 h-7 px-2"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        {showSolutions[q.id] ? t.hideExplanation : t.showExplanation}
                      </Button>
                    </div>

                    {showSolutions[q.id] && (
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                        <div className="font-semibold text-slate-900">
                          {t.solutionLabel}
                        </div>
                        <p className="whitespace-pre-line leading-relaxed font-sans">
                          {q.solution[locale]}
                        </p>
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
