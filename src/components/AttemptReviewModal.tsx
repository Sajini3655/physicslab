'use client';

import React, { useEffect } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  AssessmentAttemptRecord,
  useAssessmentHistory,
} from '@/shared/history';
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  CheckSquare,
  Square,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AttemptReviewModalProps {
  attempt: AssessmentAttemptRecord;
  locale: Locale;
  onClose: () => void;
  onOpenMistakePractice?: () => void;
}

export const AttemptReviewModal: React.FC<AttemptReviewModalProps> = ({
  attempt,
  locale,
  onClose,
  onOpenMistakePractice,
}) => {
  const { updateRubric } = useAssessmentHistory();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const t = {
    en: {
      title: 'Assessment Review',
      submittedAt: 'Submitted',
      overallScore: 'Overall Score',
      autoGraded: 'Auto-Graded',
      rubricScored: 'Rubric Scored',
      pendingRubrics: 'Pending Self-Assessment',
      questionsAnswered: 'Questions Answered',
      yourAnswer: 'Your Answer:',
      correctAnswer: 'Correct Answer:',
      expectedValue: 'Expected:',
      tolerance: 'Tolerance:',
      modelAnswer: 'Model Answer:',
      rubricNotice:
        'Self-Assessment: Review the rubric criteria below for your written answer and check off the points you earned.',
      rubricCriteria: 'Marking Rubric Criteria',
      pointUnit: 'pt',
      pointsUnit: 'pts',
      stepSolution: 'Step-by-step Solution:',
      practiseMistakesCta: 'Practise Mistakes',
      close: 'Close',
      correct: 'Correct',
      incorrect: 'Incorrect',
      unanswered: 'Unanswered',
      pending: 'Pending Rubric',
      selfAssessed: 'Self-Assessed',
      noneGiven: '(No answer entered)',
    },
    si: {
      title: 'ඇගයීම් සමාලෝචනය',
      submittedAt: 'ඉදිරිපත් කළේ',
      overallScore: 'සමස්ත ලකුණු',
      autoGraded: 'ස්වයංක්‍රීය ලකුණු',
      rubricScored: 'පටිපාටි ලකුණු',
      pendingRubrics: 'ස්වයං ඇගයීම අවශ්‍යයි',
      questionsAnswered: 'පිළිතුරු දුන් ප්‍රශ්න',
      yourAnswer: 'ඔබේ පිළිතුර:',
      correctAnswer: 'නිවැරදි පිළිතුර:',
      expectedValue: 'අපේක්ෂිත අගය:',
      tolerance: 'පරාසය:',
      modelAnswer: 'ආදර්ශ පිළිතුර:',
      rubricNotice:
        'ස්වයං ඇගයීම: ඔබගේ ලිඛිත පිළිතුර සඳහා පහත ලකුණු දීමේ නිර්ණායක පරීක්ෂා කර ඔබ ලබාගත් ලකුණු සලකුණු කරන්න.',
      rubricCriteria: 'ලකුණු දීමේ නිර්ණායක',
      pointUnit: 'ලකුණ',
      pointsUnit: 'ලකුණු',
      stepSolution: 'පියවරෙන් පියවර විසඳුම:',
      practiseMistakesCta: 'වැරදුණු ප්‍රශ්න පුහුණු වන්න',
      close: 'වසන්න',
      correct: 'නිවැරදියි',
      incorrect: 'වැරදියි',
      unanswered: 'පිළිතුරු දී නැත',
      pending: 'පටිපාටි ඇගයීම අවශ්‍යයි',
      selfAssessed: 'ස්වයං ඇගයීම අවසන්',
      noneGiven: '(පිළිතුරක් ඇතුළත් කර නැත)',
    },
  }[locale];

  const handleToggleRubricItem = (
    questionId: string,
    rubricKey: string,
    currentScore: number,
    itemPoint: number
  ) => {
    const question = attempt.questions.find((q) => q.questionId === questionId);
    const existingScores = { ...(question?.rubricScores || {}) };

    if (currentScore > 0) {
      // Uncheck
      delete existingScores[rubricKey];
    } else {
      // Check
      existingScores[rubricKey] = itemPoint;
    }

    updateRubric(attempt.id, questionId, existingScores);
  };

  const hasMistakes = attempt.questions.some(
    (q) => (q.type === 'mcq' || q.type === 'numerical') && q.gradingStatus === 'incorrect'
  );

  const formattedDate = new Date(attempt.submittedAt).toLocaleDateString(
    locale === 'si' ? 'si-LK' : 'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="attempt-review-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#DFE8EF] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#DFE8EF] bg-[#F8FAFC]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E]">
                {locale === 'si' ? `ඒකකය ${attempt.unitSyllabusOrder}` : `Unit ${attempt.unitSyllabusOrder}`}
              </span>
              <h2 id="attempt-review-title" className="text-base sm:text-lg font-bold text-[#14243A]">
                {t.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748B] mt-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.submittedAt}: {formattedDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {hasMistakes && onOpenMistakePractice && (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenMistakePractice}
                className="hidden sm:inline-flex text-xs font-medium border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/10"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1 text-[#0F766E]" />
                {t.practiseMistakesCta}
              </Button>
            )}
            <button
              onClick={onClose}
              aria-label={t.close}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#14243A] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Score Summary Banner */}
        <div className="px-5 py-3.5 bg-[#F6FAFD] border-b border-[#DFE8EF] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-white border border-[#DFE8EF]">
            <span className="text-[#64748B] block font-medium">{t.overallScore}</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-lg font-bold font-mono text-[#0F766E]">
                {attempt.score.totalAwarded} / {attempt.score.totalAvailable}
              </span>
              <span className="text-xs font-semibold text-[#475569]">
                ({attempt.score.percentage}%)
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-[#DFE8EF]">
            <span className="text-[#64748B] block font-medium">{t.autoGraded}</span>
            <span className="text-sm font-semibold font-mono text-[#14243A] mt-0.5 block">
              {attempt.score.automaticScore} / {attempt.score.automaticTotal}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-[#DFE8EF]">
            <span className="text-[#64748B] block font-medium">{t.rubricScored}</span>
            <span className="text-sm font-semibold font-mono text-emerald-700 mt-0.5 block">
              {attempt.score.rubricScore} / {attempt.score.rubricTotal}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-[#DFE8EF]">
            <span className="text-[#64748B] block font-medium">{t.pendingRubrics}</span>
            <span className="text-sm font-semibold font-mono text-amber-700 mt-0.5 block">
              {attempt.score.pendingManualMarks} {locale === 'si' ? 'ලකුණු' : 'marks'}
            </span>
          </div>
        </div>

        {/* Questions List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {attempt.questions.map((q, idx) => {
            const isCorrect = q.gradingStatus === 'correct';
            const isIncorrect = q.gradingStatus === 'incorrect';
            const isPending = q.gradingStatus === 'pending';
            const isSelfAssessed = q.gradingStatus === 'self_assessed';

            let statusBadge = (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                <HelpCircle className="w-3 h-3" />
                {t.unanswered}
              </span>
            );

            if (isCorrect) {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {t.correct} (+{q.awardedMarks})
                </span>
              );
            } else if (isIncorrect) {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  <XCircle className="w-3 h-3 text-rose-600" />
                  {t.incorrect} (0/{q.availableMarks})
                </span>
              );
            } else if (isSelfAssessed) {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  <Award className="w-3 h-3 text-teal-600" />
                  {t.selfAssessed} ({q.awardedMarks}/{q.availableMarks})
                </span>
              );
            } else if (isPending) {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  <Award className="w-3 h-3 text-amber-600" />
                  {t.pending} (0/{q.availableMarks})
                </span>
              );
            }

            return (
              <div
                key={q.questionId}
                className="p-4 rounded-xl border border-[#DFE8EF] bg-white space-y-3 shadow-xs"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-xs text-[#0F766E] px-2 py-0.5 rounded bg-[#0F766E]/10 shrink-0">
                      Q{idx + 1}
                    </span>
                    <p className="text-sm font-medium text-[#14243A] leading-snug">
                      {q.questionText[locale] || q.questionText.en}
                    </p>
                  </div>
                  <div className="shrink-0">{statusBadge}</div>
                </div>

                {/* Question Type: MCQ */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = q.submittedAnswer?.trim().toUpperCase() === opt.id.toUpperCase();
                      const isCorrectOpt = q.correctOptionId?.trim().toUpperCase() === opt.id.toUpperCase();

                      let optClass = 'border-[#DFE8EF] bg-slate-50/50 text-[#475569]';
                      if (isCorrectOpt) {
                        optClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                      } else if (isSelected && !isCorrectOpt) {
                        optClass = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs ${optClass}`}
                        >
                          <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-white/80 border border-[#DFE8EF] text-[11px]">
                            {opt.id}
                          </span>
                          <span className="leading-snug">{opt.text[locale] || opt.text.en}</span>
                          {isSelected && (
                            <span className="ml-auto text-[10px] font-mono uppercase font-bold text-slate-500">
                              (Selected)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Question Type: Numerical */}
                {q.type === 'numerical' && (
                  <div className="p-3 bg-slate-50 rounded-lg border border-[#DFE8EF] text-xs space-y-1.5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <div>
                        <span className="text-[#64748B] font-medium mr-1">{t.yourAnswer}</span>
                        <span className="font-mono font-bold text-[#14243A]">
                          {q.submittedAnswer ? `${q.submittedAnswer} ${q.unit || ''}` : t.noneGiven}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#64748B] font-medium mr-1">{t.expectedValue}</span>
                        <span className="font-mono font-bold text-emerald-700">
                          {q.expected} {q.unit || ''}
                        </span>
                      </div>
                      {typeof q.tolerance === 'number' && (
                        <div>
                          <span className="text-[#64748B] font-medium mr-1">{t.tolerance}</span>
                          <span className="font-mono text-[#475569]">±{q.tolerance} {q.unit || ''}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Question Type: Structured (with Subparts & Interactive Rubrics) */}
                {q.type === 'structured' && q.parts && (
                  <div className="space-y-3 pt-1">
                    <div className="p-2.5 bg-teal-50/70 border border-teal-200 rounded-lg text-xs text-teal-900 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{t.rubricNotice}</p>
                    </div>

                    {q.parts.map((p, pIdx) => (
                      <div
                        key={p.partId || pIdx}
                        className="p-3.5 bg-[#F8FAFC] border border-[#DFE8EF] rounded-lg space-y-2 text-xs"
                      >
                        <div className="font-semibold text-[#14243A] flex items-baseline justify-between gap-2">
                          <span>
                            <span className="text-[#0F766E] font-bold mr-1.5">
                              {p.label[locale] || p.label.en}
                            </span>
                            {p.prompt[locale] || p.prompt.en}
                          </span>
                        </div>

                        {/* Student's answer */}
                        {q.submittedAnswer && (
                          <div className="p-2 rounded bg-white border border-[#DFE8EF] text-[#334155]">
                            <span className="text-[#64748B] block font-medium text-[11px] mb-0.5">
                              {t.yourAnswer}
                            </span>
                            <p className="whitespace-pre-line leading-relaxed">
                              {q.submittedAnswer}
                            </p>
                          </div>
                        )}

                        {/* Model answer */}
                        <div className="p-2 rounded bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                          <span className="font-bold text-emerald-800 block text-[11px] mb-0.5">
                            {t.modelAnswer}
                          </span>
                          <p className="whitespace-pre-line leading-relaxed">
                            {p.modelAnswer[locale] || p.modelAnswer.en}
                          </p>
                        </div>

                        {/* Marking Rubric Items */}
                        {p.rubric && p.rubric.length > 0 && (
                          <div className="pt-2 border-t border-[#DFE8EF] space-y-1.5">
                            <span className="font-bold text-[#14243A] text-[11px] block">
                              {t.rubricCriteria}
                            </span>
                            <div className="space-y-1">
                              {p.rubric.map((r, rIdx) => {
                                const rubricKey = `${p.partId || pIdx}_r${rIdx}`;
                                const isChecked =
                                  (q.rubricScores?.[rubricKey] || 0) > 0;

                                return (
                                  <button
                                    key={rIdx}
                                    type="button"
                                    onClick={() =>
                                      handleToggleRubricItem(
                                        q.questionId,
                                        rubricKey,
                                        isChecked ? r.point : 0,
                                        r.point
                                      )
                                    }
                                    className={`w-full flex items-start gap-2.5 p-2 rounded text-left transition-colors text-xs border ${
                                      isChecked
                                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                                        : 'bg-white border-[#DFE8EF] text-[#475569] hover:bg-slate-50'
                                    }`}
                                  >
                                    <div className="shrink-0 mt-0.5">
                                      {isChecked ? (
                                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                                      ) : (
                                        <Square className="w-4 h-4 text-[#94A3B8]" />
                                      )}
                                    </div>
                                    <div className="flex-1 leading-snug">
                                      {r.description[locale] || r.description.en}
                                    </div>
                                    <span className="font-mono font-bold text-xs shrink-0 text-[#0F766E]">
                                      +{r.point} {r.point === 1 ? t.pointUnit : t.pointsUnit}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Step-by-Step Worked Solution */}
                {q.solution && (
                  <div className="p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF] text-xs space-y-1">
                    <span className="font-bold text-[#0F766E] block">
                      {t.stepSolution}
                    </span>
                    <p className="whitespace-pre-line leading-relaxed text-[#14243A]">
                      {q.solution[locale] || q.solution.en}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 border-t border-[#DFE8EF] bg-[#F8FAFC] flex items-center justify-between gap-3">
          {hasMistakes && onOpenMistakePractice ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenMistakePractice}
              className="text-xs font-medium border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/10"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#0F766E]" />
              {t.practiseMistakesCta}
            </Button>
          ) : (
            <div />
          )}

          <Button
            size="sm"
            onClick={onClose}
            className="text-xs font-semibold bg-[#0F766E] hover:bg-[#0D655E] text-white"
          >
            {t.close}
          </Button>
        </div>
      </div>
    </div>
  );
};
