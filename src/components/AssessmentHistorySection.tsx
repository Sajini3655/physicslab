'use client';

import React, { useState, useMemo } from 'react';
import { Locale, getAllUnits } from '@/shared/curriculum';
import {
  useAssessmentHistory,
} from '@/shared/history';
import {
  Clock,
  Sparkles,
  BookOpen,
  Filter,
  ArrowRight,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { AttemptReviewModal } from './AttemptReviewModal';
import { ReviseMistakesView } from './ReviseMistakesView';

interface AssessmentHistorySectionProps {
  locale: Locale;
}

export const AssessmentHistorySection: React.FC<AssessmentHistorySectionProps> = ({ locale }) => {
  const { attempts } = useAssessmentHistory();
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>('all');
  const [reviewAttemptId, setReviewAttemptId] = useState<string | null>(null);
  const [mistakesAttemptId, setMistakesAttemptId] = useState<string | null>(null);

  const units = useMemo(() => getAllUnits(), []);

  const t = {
    en: {
      heading: 'Assessment History',
      subtitle:
        'Track all submitted summative attempts, review step-by-step solutions, self-assess rubric criteria, and practise mistakes.',
      filterAll: 'All Units',
      filterLabel: 'Filter by unit:',
      noAttemptsTitle: 'No assessments submitted yet',
      noAttemptsDesc:
        'Complete and submit a unit assessment to view your results, review solutions, and practise mistakes here.',
      takeAssessment: 'Explore Units & Assessments',
      reviewAttempt: 'Review Attempt',
      practiseMistakes: 'Practise Mistakes',
      mistakesRevisedBadge: 'Mistakes Revised',
      score: 'Score',
      autoMarks: 'Auto-Graded',
      rubricMarks: 'Rubric Scored',
      pendingRubrics: 'Pending Self-Assessment',
      unitPrefix: 'Unit',
      submittedOn: 'Submitted',
    },
    si: {
      heading: 'ඇගයීම් ඉතිහාසය',
      subtitle:
        'ඉදිරිපත් කළ සියලුම ඇගයීම් සමාලෝචනය කරන්න, පියවරෙන් පියවර විසඳුම් බලන්න, ලකුණු දීමේ පටිපාටි (rubrics) ස්වයං ඇගයීම කරන්න සහ වැරදුණු ප්‍රශ්න පුහුණු වන්න.',
      filterAll: 'සියලුම ඒකක',
      filterLabel: 'ඒකකය අනුව පෙරාගන්න:',
      noAttemptsTitle: 'තවමත් කිසිදු ඇගයීමක් ඉදිරිපත් කර නැත',
      noAttemptsDesc:
        'ප්‍රතිඵල බැලීමට, විසඳුම් සමාලෝචනය කිරීමට සහ වැරදුණු ප්‍රශ්න පුහුණු වීමට ඒකක ඇගයීමක් සම්පූර්ණ කර ඉදිරිපත් කරන්න.',
      takeAssessment: 'ඒකක සහ ඇගයීම් ගවේෂණය කරන්න',
      reviewAttempt: 'ඇගයීම සමාලෝචනය කරන්න',
      practiseMistakes: 'වැරදුණු ප්‍රශ්න පුහුණු වන්න',
      mistakesRevisedBadge: 'වැරදි නිවැරදි කර ඇත',
      score: 'ලකුණු',
      autoMarks: 'ස්වයංක්‍රීය',
      rubricMarks: 'පටිපාටි ලකුණු',
      pendingRubrics: 'ස්වයං ඇගයීම අවශ්‍යයි',
      unitPrefix: 'ඒකකය',
      submittedOn: 'ඉදිරිපත් කළේ',
    },
  }[locale];

  // Filter attempts by unit if selected
  const filteredAttempts = useMemo(() => {
    if (selectedUnitFilter === 'all') return attempts;
    return attempts.filter(
      (a) => a.unitId === selectedUnitFilter || a.unitSlug === selectedUnitFilter
    );
  }, [attempts, selectedUnitFilter]);

  const activeReviewAttempt = attempts.find((a) => a.id === reviewAttemptId);
  const activeMistakesAttempt = attempts.find((a) => a.id === mistakesAttemptId);

  return (
    <section className="space-y-4" aria-labelledby="assessment-history-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 id="assessment-history-heading" className="text-xl sm:text-2xl font-bold text-[#14243A]">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-0.5 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Unit Filter (only rendered if attempts exist) */}
        {attempts.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-[#64748B]" />
            <select
              value={selectedUnitFilter}
              onChange={(e) => setSelectedUnitFilter(e.target.value)}
              className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] bg-white text-[#14243A] outline-none focus:ring-1 focus:ring-[#0F766E]"
              aria-label={t.filterLabel}
            >
              <option value="all">{t.filterAll}</option>
              {units.map((u) => (
                <option key={u.id} value={u.slug}>
                  {t.unitPrefix} {u.syllabusOrder}: {u.title[locale]}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Empty State */}
      {attempts.length === 0 ? (
        <div className="p-8 rounded-2xl bg-white border border-[#DFE8EF] text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 text-[#0F766E] flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#14243A]">{t.noAttemptsTitle}</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            {t.noAttemptsDesc}
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F766E] text-white text-xs font-semibold hover:bg-[#0D655E] transition-colors"
            >
              <span>{t.takeAssessment}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : filteredAttempts.length === 0 ? (
        <div className="p-6 rounded-xl bg-white border border-[#DFE8EF] text-center text-xs text-[#64748B]">
          No attempts match the selected filter.
        </div>
      ) : (
        /* Attempts List */
        <div className="space-y-3">
          {filteredAttempts.map((attempt) => {
            const unit = units.find((u) => u.slug === attempt.unitSlug || u.id === attempt.unitId);
            const unitTitle = unit ? unit.title[locale] : attempt.unitSlug;

            const hasMistakes = attempt.questions.some(
              (q) => (q.type === 'mcq' || q.type === 'numerical') && q.gradingStatus === 'incorrect'
            );
            const isRevisionComplete = !!attempt.revisionState?.completed;

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
                key={attempt.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DFE8EF] shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all hover:border-[#0F766E]/40"
              >
                {/* Left metadata */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E]">
                      {t.unitPrefix} {attempt.unitSyllabusOrder}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#14243A] truncate">
                      {unitTitle}
                    </h3>
                    {isRevisionComplete && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {t.mistakesRevisedBadge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {t.submittedOn}: {formattedDate}
                    </span>
                    <span>
                      {attempt.answeredQuestions} / {attempt.totalQuestions}{' '}
                      {locale === 'si' ? 'පිළිතුරු දුන් ප්‍රශ්න' : 'questions answered'}
                    </span>
                  </div>

                  {/* Marks Breakdown Chips */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[#475569] font-medium">
                      {t.autoMarks}: {attempt.score.automaticScore}/{attempt.score.automaticTotal}
                    </span>
                    {attempt.score.rubricTotal > 0 && (
                      <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-medium border border-teal-200/60">
                        {t.rubricMarks}: {attempt.score.rubricScore}/{attempt.score.rubricTotal}
                      </span>
                    )}
                    {attempt.score.pendingManualMarks > 0 && (
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-medium border border-amber-200/60">
                        {t.pendingRubrics}: {attempt.score.pendingManualMarks}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Score & Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#DFE8EF]">
                  {/* Score Pill */}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#0F766E] leading-none">
                      {attempt.score.totalAwarded} / {attempt.score.totalAvailable}
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      {attempt.score.percentage}%
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    {hasMistakes && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setMistakesAttemptId(attempt.id)}
                        className="text-xs border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/10 h-8 px-2.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 mr-1" />
                        <span className="hidden sm:inline">{t.practiseMistakes}</span>
                        <span className="sm:hidden">Revise</span>
                      </Button>
                    )}

                    <Button
                      size="sm"
                      onClick={() => setReviewAttemptId(attempt.id)}
                      className="text-xs font-semibold bg-[#0F766E] hover:bg-[#0D655E] text-white h-8 px-3"
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      {t.reviewAttempt}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Review Attempt Modal */}
      {activeReviewAttempt && (
        <AttemptReviewModal
          attempt={activeReviewAttempt}
          locale={locale}
          onClose={() => setReviewAttemptId(null)}
          onOpenMistakePractice={() => {
            const id = activeReviewAttempt.id;
            setReviewAttemptId(null);
            setMistakesAttemptId(id);
          }}
        />
      )}

      {/* Revise Mistakes Modal */}
      {activeMistakesAttempt && (
        <ReviseMistakesView
          attempt={activeMistakesAttempt}
          locale={locale}
          onClose={() => setMistakesAttemptId(null)}
          onOpenReview={() => {
            const id = activeMistakesAttempt.id;
            setMistakesAttemptId(null);
            setReviewAttemptId(id);
          }}
        />
      )}
    </section>
  );
};
