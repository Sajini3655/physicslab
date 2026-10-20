'use client';

import React from 'react';
import { Locale, useAssessmentSession } from '@/shared/curriculum';
import { generateUnit3Assessment, evaluateWavesAssessment, WavesAssessmentResult } from '../questions/assessment';
import { WavesQuestion, WavesCompetencyRef } from '../questions/types';
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

interface WavesAssessmentProps {
  locale?: Locale;
}

export const WavesAssessment: React.FC<WavesAssessmentProps> = ({ locale = 'en' }) => {
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
  } = useAssessmentSession<WavesQuestion, WavesAssessmentResult>({
    storageKey: 'unit-3',
    generateQuestions: generateUnit3Assessment,
    evaluateAssessment: evaluateWavesAssessment,
  });

  const t = {
    en: {
      title: 'Unit 3 Comprehensive Assessment: Oscillations & Waves',
      subtitle: 'Summative evaluation covering all 7 syllabus competencies (3.1 to 3.7) including all 5 canonical laboratory practicals.',
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
      comp31: 'Competency 3.1: Simple Harmonic Motion (SHM)',
      comp32: 'Competency 3.2: Wave Properties & Superposition',
      comp33: 'Competency 3.3: Sound Waves, Intensity & Doppler',
      comp34: 'Competency 3.4: Stationary Waves (Strings & Pipes)',
      comp35: 'Competency 3.5: Geometrical Optics & Prisms',
      comp36: 'Competency 3.6: Thin Lenses & Optical Instruments',
      comp37: 'Competency 3.7: Physical Optics (Interference & Diffraction)',
      comp38: 'Competency 3.8: Electromagnetic Waves & Spectrum',
      comp39: 'Competency 3.9: Refraction, Lenses & Prisms',
      comp310: 'Competency 3.10: Human Eye & Defects of Vision',
      comp311: 'Competency 3.11: Optical Instruments (Microscopes & Telescopes)',
    },
    si: {
      title: 'ඒකක 3 සමස්ත ඇගයීම: දෝලන සහ තරංග',
      subtitle: 'සියලුම විෂය නිර්දේශ නිපුණතා (3.1 සිට 3.11) සහ ප්‍රායෝගික පරීක්ෂණ ආවරණය වන සමාප්ති ඇගයීම.',
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
      comp31: 'නිපුණතාව 3.1: සරල අනුවර්තී චලිතය (SHM)',
      comp32: 'නිපුණතාව 3.2: තරංග ගුණ සහ අධිස්ථාපනය',
      comp33: 'නිපුණතාව 3.3: ධ්වනි තරංග, තීව්‍රතාව සහ ඩොප්ලර් ආචරණය',
      comp34: 'නිපුණතාව 3.4: ස්ථාවර තරංග (තන්තු සහ නළ)',
      comp35: 'නිපුණතාව 3.5: ප්‍රකාශ විද්‍යාව සහ ප්‍රිස්ම',
      comp36: 'නිපුණතාව 3.6: තුනී කාච සහ ප්‍රකාශ උපකරණ',
      comp37: 'නිපුණතාව 3.7: භෞතික ප්‍රකාශ විද්‍යාව (ව්‍යතිකරණය සහ විවර්තනය)',
      comp38: 'නිපුණතාව 3.8: විද්‍යුත් චුම්භක තරංග සහ වර්ණාවලිය',
      comp39: 'නිපුණතාව 3.9: වර්තනය, කාච සහ ප්‍රිස්ම',
      comp310: 'නිපුණතාව 3.10: මිනිස් ඇස සහ දෘෂ්ටි ඌනතා',
      comp311: 'නිපුණතාව 3.11: ප්‍රකාශ උපකරණ (අන්වීක්ෂ සහ දුරදක්න)',
    },
  }[locale];

  const competencyLabels: Record<WavesCompetencyRef, string> = {
    'Competency 3.1': t.comp31,
    'Competency 3.2': t.comp32,
    'Competency 3.3': t.comp33,
    'Competency 3.4': t.comp34,
    'Competency 3.5': t.comp35,
    'Competency 3.6': t.comp36,
    'Competency 3.7': t.comp37,
    'Competency 3.8': t.comp38,
    'Competency 3.9': t.comp39,
    'Competency 3.10': t.comp310,
    'Competency 3.11': t.comp311,
  };

  return (
    <div className="space-y-6">
      {/* Assessment Header */}
      <div className="p-6 rounded-2xl bg-white border border-[#DFE8EF] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
            <Award className="w-4 h-4" />
            <span>{locale === 'si' ? 'නිල උසස් පෙළ ඇගයීම' : 'Official A/L Assessment'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14243A] font-serif mt-1">
            {t.title}
          </h2>
          <p className="text-sm text-[#475569] mt-1">{t.subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-[#475569] block">{t.answered}</span>
            <span className="text-lg font-bold font-mono text-[#0F766E]">
              {answeredCount} / {questions.length}
            </span>
          </div>

          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={answeredCount === 0}
              className="bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {t.submitBtn}
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleReset}
              className="text-[#475569] border-[#DFE8EF]"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t.retakeBtn}
            </Button>
          )}
        </div>
      </div>

      {/* Summative Results Card */}
      {submitted && result && (
        <Card className="border-[#DFE8EF] bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-[#F6FAFD] border-b border-[#DFE8EF] pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <CardTitle className="text-lg font-serif text-[#14243A]">
                {t.scoreCardTitle}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#475569]">{t.scoreLabel}</span>
                <span
                  className={`text-2xl font-bold font-mono ${
                    result.percentageScore >= 75
                      ? 'text-emerald-600'
                      : result.percentageScore >= 50
                      ? 'text-amber-600'
                      : 'text-rose-600'
                  }`}
                >
                  {result.totalCorrect} / {result.totalQuestions} ({result.percentageScore}%)
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Competency Breakdown Grid */}
            <div>
              <h4 className="text-sm font-semibold text-[#14243A] mb-3">
                {t.competencyBreakdown}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(Object.keys(result.competencyBreakdown) as WavesCompetencyRef[]).map((comp) => {
                  const stat = result.competencyBreakdown[comp];
                  if (stat.total === 0) return null;
                  const pct = stat.percentage;
                  return (
                    <div
                      key={comp}
                      className="p-3 rounded-lg border border-[#DFE8EF] bg-[#F6FAFD] flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="text-xs font-medium text-[#14243A]">
                          {competencyLabels[comp]}
                        </span>
                        <span
                          className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                            pct >= 75
                              ? 'bg-emerald-50 text-emerald-700'
                              : pct >= 50
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}
                        >
                          {stat.correct}/{stat.total} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            pct >= 75
                              ? 'bg-emerald-600'
                              : pct >= 50
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Targeted Revision Guidance */}
            {result.weakCompetencies.length > 0 && (
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span>{t.revisionAdvice}</span>
                </div>
                <ul className="text-xs text-[#475569] space-y-1 list-disc pl-5">
                  {result.weakCompetencies.map((comp) => (
                    <li key={comp}>
                      <span className="font-medium text-[#14243A]">{competencyLabels[comp]}</span>
                      {' — '}
                      <Link
                        href="/units/oscillations-and-waves/waves-practicals"
                        className="text-[#0F766E] underline hover:text-[#0D655E]"
                      >
                        {locale === 'si' ? 'ප්‍රායෝගික පරීක්ෂණ සහ සිද්ධාන්ත පුනරීක්ෂණය කරන්න' : 'Review practical investigations and theory'}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Question Items Navigator */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const studentAns = answers[q.id];
          const isAnswered = studentAns !== undefined && studentAns.trim() !== '';

          let isCorrect = false;
          if (submitted) {
            if (q.type === 'mcq') {
              isCorrect = studentAns?.trim() === q.correctOptionId;
            } else if (q.type === 'numerical' && q.expected !== undefined) {
              const numVal = parseFloat(studentAns || '');
              const tol = q.tolerance ?? 0.05 * Math.abs(q.expected);
              isCorrect = !isNaN(numVal) && Math.abs(numVal - q.expected) <= tol;
            }
          }

          return (
            <Card
              key={q.id}
              className={`border bg-white transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300'
                    : 'border-rose-300'
                  : isAnswered
                  ? 'border-[#0F766E]/40'
                  : 'border-[#DFE8EF]'
              }`}
            >
              <CardContent className="p-5 space-y-4">
                {/* Question Badge & Title */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#14243A] text-white text-xs font-mono flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-medium text-[#0F766E] bg-[#F6FAFD] border border-[#DFE8EF] px-2 py-0.5 rounded-full">
                      {q.competencyRef}
                    </span>
                    <span className="text-xs uppercase text-[#475569] font-semibold tracking-wider">
                      {q.type}
                    </span>
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                          {t.correct}
                        </span>
                      ) : (
                        <span className="flex items-center text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                          <XCircle className="w-3.5 h-3.5 mr-1" />
                          {t.incorrect}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Question Prompt */}
                <p className="text-sm sm:text-base font-medium text-[#14243A] leading-relaxed">
                  {locale === 'si' ? q.question.si : q.question.en}
                </p>

                {/* Multiple Choice Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = studentAns === opt.id;
                      const isCorrectOpt = submitted && opt.id === q.correctOptionId;
                      const isWrongSelection = submitted && isSelected && !isCorrect;

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          disabled={submitted}
                          className={`text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${
                            isCorrectOpt
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium'
                              : isWrongSelection
                              ? 'bg-rose-50 border-rose-300 text-rose-900 line-through'
                              : isSelected
                              ? 'bg-[#F6FAFD] border-[#0F766E] text-[#0F766E] font-medium shadow-sm'
                              : 'bg-white border-[#DFE8EF] text-[#475569] hover:bg-slate-50'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-[10px] ${
                              isSelected
                                ? 'border-[#0F766E] bg-[#0F766E] text-white'
                                : 'border-slate-400 bg-white'
                            }`}
                          >
                            {isSelected && '✓'}
                          </span>
                          <span>{locale === 'si' ? opt.text.si : opt.text.en}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input Response */}
                {q.type === 'numerical' && (
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="text"
                      value={studentAns || ''}
                      onChange={(e) => handleNumericalChange(q.id, e.target.value)}
                      disabled={submitted}
                      placeholder={locale === 'si' ? 'අගය ඇතුළත් කරන්න' : 'Enter numeric value'}
                      className="w-48 px-3 py-1.5 text-sm bg-white border border-[#DFE8EF] rounded-lg outline-none focus:ring-1 focus:ring-[#0F766E] font-mono text-[#14243A]"
                    />
                    {q.unit && (
                      <span className="text-xs text-[#475569] font-medium">
                        {locale === 'si' ? q.unit.si : q.unit.en}
                      </span>
                    )}
                    {submitted && q.expected !== undefined && (
                      <span className="text-xs font-mono text-[#475569]">
                        ({locale === 'si' ? 'අපේක්ෂිත අගය' : 'Expected'}: {q.expected} ± {q.tolerance})
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
                            <span><span className="font-bold text-[#0F766E]">{p.partLabel}</span> {locale === 'si' ? p.prompt.si : p.prompt.en}</span>
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
                              <p className="text-emerald-900 whitespace-pre-line leading-relaxed">{locale === 'si' ? p.modelAnswer.si : p.modelAnswer.en}</p>
                              <div className="pt-1 border-t border-emerald-200/60 text-[11px] text-emerald-800">
                                <span className="font-semibold">{locale === 'si' ? 'ලකුණු දීමේ පටිපාටිය:' : 'Marking Rubric:'}</span>
                                <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                                  {p.rubric.map((r, rIdx) => (
                                    <li key={rIdx}>{locale === 'si' ? r.description.si : r.description.en} ({r.point} {locale === 'si' ? 'ලකුණ' : 'mark'})</li>
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

                {/* Explanation / Solution Toggle (Available after submission) */}
                {submitted && (
                  <div className="pt-2 border-t border-[#DFE8EF]">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs text-[#0F766E] hover:bg-[#F6FAFD] p-0 h-auto"
                    >
                      <HelpCircle className="w-3.5 h-3.5 mr-1" />
                      {showSolutions[q.id] ? t.hideExplanation : t.showExplanation}
                    </Button>

                    {showSolutions[q.id] && (
                      <div className="mt-3 p-3.5 rounded-lg bg-[#F6FAFD] border border-[#DFE8EF] space-y-1.5 text-xs text-[#475569]">
                        <span className="font-semibold text-[#14243A] block">
                          {t.solutionLabel}
                        </span>
                        <p className="leading-relaxed whitespace-pre-line">
                          {locale === 'si' ? q.solution.si : q.solution.en}
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
