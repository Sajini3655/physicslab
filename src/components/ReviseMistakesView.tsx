'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  AssessmentAttemptRecord,
  QuestionAttemptDetail,
  evaluateSingleQuestion,
  useAssessmentHistory,
} from '@/shared/history';
import {
  X,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviseMistakesViewProps {
  attempt: AssessmentAttemptRecord;
  locale: Locale;
  onClose: () => void;
  onOpenReview?: () => void;
}

export const ReviseMistakesView: React.FC<ReviseMistakesViewProps> = ({
  attempt,
  locale,
  onClose,
  onOpenReview,
}) => {
  const { updateRevision } = useAssessmentHistory();

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

  // Mistakes are strictly incorrectly answered MCQs and Numerical questions
  const mistakeQuestions = attempt.questions.filter(
    (q) => (q.type === 'mcq' || q.type === 'numerical') && q.gradingStatus === 'incorrect'
  );

  const existingRev = attempt.revisionState || {
    answers: {},
    checked: {},
    results: {},
    revealedSolutions: {},
    completed: false,
  };

  const [revAnswers, setRevAnswers] = useState<Record<string, string>>(() => existingRev.answers || {});
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>(() => existingRev.checked || {});
  const [resultsState, setResultsState] = useState<Record<string, boolean>>(() => existingRev.results || {});
  const [solutionsRevealed, setSolutionsRevealed] = useState<Record<string, boolean>>(
    () => existingRev.revealedSolutions || {}
  );

  const t = {
    en: {
      title: 'Practise Mistakes',
      subtitle:
        'Target misconceptions by re-attempting questions you missed. This revision does not alter your original score.',
      noMistakesTitle: 'No mistakes to revise!',
      noMistakesDesc:
        'All multiple-choice and numerical questions in this assessment were answered correctly.',
      unansweredNote:
        'Unanswered questions are omitted from mistake practice so you can focus specifically on questions you attempted.',
      originalAnswer: 'Originally answered:',
      checkAnswer: 'Check Answer',
      tryAgain: 'Try Again',
      showSolution: 'View Solution',
      hideSolution: 'Hide Solution',
      correct: 'Correct! Excellent improvement.',
      incorrect: 'Not quite. Check the physics principles and try again.',
      enterValue: 'Enter numerical value',
      close: 'Close Revision',
      reviewFullAttempt: 'Review Full Attempt',
      congratulations: 'All mistakes corrected!',
      congratulationsDesc:
        'You have successfully corrected all the mistakes from this attempt. Great progress!',
      originalScorePreserved:
        'Note: Your original score ({score}/{total}) remains safely preserved in your history record.',
    },
    si: {
      title: 'වැරදුණු ප්‍රශ්න නැවත පුහුණුව',
      subtitle:
        'ඔබට වැරදුණු ප්‍රශ්න නැවත විසඳා සංකල්ප පැහැදිලි කරගන්න. මෙම පුහුණුව ඔබගේ මුල් ඇගයීම් ලකුණුවලට බලපෑමක් නොකරයි.',
      noMistakesTitle: 'පුහුණු වීමට වැරදුණු ප්‍රශ්න නැත!',
      noMistakesDesc:
        'මෙම ඇගයීමේ සියලුම බහුවරණ සහ සංඛ්‍යාත්මක ප්‍රශ්න සඳහා ඔබ නිවැරදි පිළිතුරු ලබාදී ඇත.',
      unansweredNote:
        'ඔබ පිළිතුරු නොදුන් ප්‍රශ්න මෙයට ඇතුළත් කර නොමැති අතර, වැරදුණු ප්‍රශ්න කෙරෙහි පමණක් අවධානය යොමු කළ හැක.',
      originalAnswer: 'මුලින් ලබාදුන් පිළිතුර:',
      checkAnswer: 'පිළිතුර පරීක්ෂා කරන්න',
      tryAgain: 'නැවත උත්සාහ කරන්න',
      showSolution: 'විසඳුම බලන්න',
      hideSolution: 'විසඳුම සඟවන්න',
      correct: 'නිවැරදියි! විශිෂ්ට ප්‍රගතියක්.',
      incorrect: 'පිළිතුර වැරදියි. භෞතික විද්‍යා නියම නැවත සලකා බලා උත්සාහ කරන්න.',
      enterValue: 'අගය ඇතුළත් කරන්න',
      close: 'පුහුණුව වසන්න',
      reviewFullAttempt: 'සමස්ත ඇගයීම සමාලෝචනය',
      congratulations: 'වැරදුණු සියලු ප්‍රශ්න නිවැරදි කර අවසන්!',
      congratulationsDesc:
        'මෙම ඇගයීමේ වැරදුණු සියලුම ප්‍රශ්න ඔබ සාර්ථකව නිවැරදි කර ඇත. ඉතා හොඳයි!',
      originalScorePreserved:
        'සටහන: ඔබගේ මුල් ලකුණු ({score}/{total}) ඉතිහාස සටහන්වල නොවෙනස්ව සුරැකී ඇත.',
    },
  }[locale];

  const handleSelectOption = (qId: string, optId: string) => {
    const nextAnswers = { ...revAnswers, [qId]: optId };
    setRevAnswers(nextAnswers);
    updateRevision(attempt.id, { answers: nextAnswers });
  };

  const handleNumericalChange = (qId: string, val: string) => {
    const nextAnswers = { ...revAnswers, [qId]: val };
    setRevAnswers(nextAnswers);
    updateRevision(attempt.id, { answers: nextAnswers });
  };

  const handleCheckAnswer = (q: QuestionAttemptDetail) => {
    const studentAns = revAnswers[q.questionId] || '';
    const evalRes = evaluateSingleQuestion(q, studentAns);
    const isCorrect = evalRes.gradingStatus === 'correct';

    const nextChecked = { ...checkedState, [q.questionId]: true };
    const nextResults = { ...resultsState, [q.questionId]: isCorrect };

    setCheckedState(nextChecked);
    setResultsState(nextResults);

    // Check if all mistakes are now corrected
    const allCorrect = mistakeQuestions.every((item) =>
      item.questionId === q.questionId ? isCorrect : resultsState[item.questionId]
    );

    updateRevision(attempt.id, {
      answers: revAnswers,
      checked: nextChecked,
      results: nextResults,
      completed: allCorrect,
    });
  };

  const handleToggleSolution = (qId: string) => {
    const next = { ...solutionsRevealed, [qId]: !solutionsRevealed[qId] };
    setSolutionsRevealed(next);
    updateRevision(attempt.id, { revealedSolutions: next });
  };

  const allCompleted =
    mistakeQuestions.length > 0 &&
    mistakeQuestions.every((q) => resultsState[q.questionId] === true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="revise-mistakes-title"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#DFE8EF] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#DFE8EF] bg-[#F8FAFC]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-[#0F766E]/10 text-[#0F766E]">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 id="revise-mistakes-title" className="text-base sm:text-lg font-bold text-[#14243A]">
                {t.title}
              </h2>
            </div>
            <p className="text-xs text-[#64748B] max-w-xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={t.close}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#14243A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* If no mistakes exist */}
          {mistakeQuestions.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#14243A]">
                {t.noMistakesTitle}
              </h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                {t.noMistakesDesc}
              </p>
              {onOpenReview && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenReview}
                  className="mt-2 text-xs border-[#DFE8EF]"
                >
                  {t.reviewFullAttempt}
                </Button>
              )}
            </div>
          ) : (
            <>
              {/* All Correct Celebration Banner */}
              {allCompleted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-emerald-900">
                      {t.congratulations}
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {t.congratulationsDesc}
                    </p>
                    <p className="text-[11px] text-emerald-700/90 italic pt-0.5">
                      {t.originalScorePreserved
                        .replace('{score}', String(attempt.score.totalAwarded))
                        .replace('{total}', String(attempt.score.totalAvailable))}
                    </p>
                  </div>
                </div>
              )}

              {/* Informational note regarding unanswered questions */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{t.unansweredNote}</p>
              </div>

              {/* Mistake Questions List */}
              <div className="space-y-4">
                {mistakeQuestions.map((q, idx) => {
                  const isChecked = !!checkedState[q.questionId];
                  const isCorrect = !!resultsState[q.questionId];
                  const studentAns = revAnswers[q.questionId] || '';
                  const isSolOpen = !!solutionsRevealed[q.questionId];

                  return (
                    <div
                      key={q.questionId}
                      className={`p-4 rounded-xl border transition-colors space-y-3 ${
                        isChecked && isCorrect
                          ? 'border-emerald-300 bg-emerald-50/30'
                          : isChecked && !isCorrect
                          ? 'border-rose-300 bg-rose-50/20'
                          : 'border-[#DFE8EF] bg-white'
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono font-bold text-xs text-[#0F766E] px-2 py-0.5 rounded bg-[#0F766E]/10 shrink-0">
                            Mistake #{idx + 1}
                          </span>
                          <p className="text-sm font-medium text-[#14243A] leading-snug">
                            {q.questionText[locale] || q.questionText.en}
                          </p>
                        </div>
                      </div>

                      {/* Original Answer Reference */}
                      <div className="text-xs text-[#64748B] flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded border border-[#DFE8EF]">
                        <span className="font-medium text-[#475569]">{t.originalAnswer}</span>
                        <span className="font-mono font-semibold text-rose-600 line-through">
                          {q.submittedAnswer || '—'}
                        </span>
                      </div>

                      {/* Interactive Answer Input: MCQ */}
                      {q.type === 'mcq' && q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt) => {
                            const isSelected = studentAns.trim().toUpperCase() === opt.id.toUpperCase();

                            let btnStyle = 'border-[#DFE8EF] hover:border-slate-300 bg-white text-[#14243A]';
                            if (isSelected) {
                              if (isChecked && isCorrect) {
                                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                              } else if (isChecked && !isCorrect) {
                                btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                              } else {
                                btnStyle = 'border-[#0F766E] bg-[#0F766E]/5 font-semibold text-[#0F766E]';
                              }
                            }

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleSelectOption(q.questionId, opt.id)}
                                className={`flex items-start gap-2 p-2.5 rounded-lg border text-left text-xs transition-colors ${btnStyle}`}
                              >
                                <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-white/80 border border-[#DFE8EF] text-[11px]">
                                  {opt.id}
                                </span>
                                <span className="leading-snug">{opt.text[locale] || opt.text.en}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Interactive Answer Input: Numerical */}
                      {q.type === 'numerical' && (
                        <div className="flex items-center gap-3 max-w-sm pt-1">
                          <input
                            type="text"
                            value={studentAns}
                            onChange={(e) => handleNumericalChange(q.questionId, e.target.value)}
                            placeholder={t.enterValue}
                            className="w-full px-3 py-2 text-sm border border-[#DFE8EF] rounded-lg outline-none focus:ring-1 focus:ring-[#0F766E] bg-white font-mono"
                          />
                          {q.unit && (
                            <span className="text-sm font-mono text-[#475569] whitespace-nowrap">
                              {q.unit}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Feedback Banner after checking */}
                      {isChecked && (
                        <div
                          className={`p-2.5 rounded-lg text-xs flex items-center justify-between gap-2 ${
                            isCorrect
                              ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300'
                              : 'bg-rose-100/70 text-rose-900 border border-rose-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                            )}
                            <span className="font-medium">
                              {isCorrect ? t.correct : t.incorrect}
                            </span>
                          </div>

                          {/* Show Solution Toggle (only visible after attempt) */}
                          {q.solution && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleToggleSolution(q.questionId)}
                              className="text-xs text-[#0F766E] hover:text-[#0D655E] h-7 px-2"
                            >
                              <HelpCircle className="w-3.5 h-3.5 mr-1" />
                              {isSolOpen ? t.hideSolution : t.showSolution}
                            </Button>
                          )}
                        </div>
                      )}

                      {/* Step-by-Step Worked Solution (strictly hidden until checked or toggled) */}
                      {isChecked && isSolOpen && q.solution && (
                        <div className="p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF] text-xs space-y-1">
                          <span className="font-bold text-[#0F766E] block">
                            {locale === 'si' ? 'පියවරෙන් පියවර විසඳුම:' : 'Step-by-step Solution:'}
                          </span>
                          <p className="whitespace-pre-line leading-relaxed text-[#14243A]">
                            {q.solution[locale] || q.solution.en}
                          </p>
                        </div>
                      )}

                      {/* Action Button: Check Answer */}
                      <div className="flex items-center justify-end gap-2 pt-1">
                        <Button
                          size="sm"
                          disabled={!studentAns.trim()}
                          onClick={() => handleCheckAnswer(q)}
                          className="text-xs bg-[#0F766E] hover:bg-[#0D655E] text-white"
                        >
                          {isChecked && !isCorrect ? t.tryAgain : t.checkAnswer}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 border-t border-[#DFE8EF] bg-[#F8FAFC] flex items-center justify-between gap-3">
          {onOpenReview ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenReview}
              className="text-xs border-[#DFE8EF] text-[#475569] hover:text-[#14243A]"
            >
              <BookOpen className="w-3.5 h-3.5 mr-1" />
              {t.reviewFullAttempt}
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
