'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useLearningProgress } from '@/shared/progress';
import { getLesson, getUnitBySlug, Locale } from '@/shared/curriculum';
import { Link } from '@/i18n/routing';
import { PlayCircle, ArrowRight, Layers, Bookmark } from 'lucide-react';

interface ContinueLearningCardProps {
  locale: Locale;
  className?: string;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  locale,
  className = '',
}) => {
  const t = useTranslations('MyLearning');
  const { lastVisited, isCompleted, isBookmarked } = useLearningProgress();

  if (!lastVisited) {
    return null;
  }

  const lesson = getLesson(lastVisited.unitSlug, lastVisited.lessonSlug);
  const unit = getUnitBySlug(lastVisited.unitSlug);

  if (!lesson || !unit) {
    return null;
  }

  const completed = isCompleted(lesson.id);
  const bookmarked = isBookmarked(lesson.id);

  return (
    <section
      aria-label={t('continueLearningHeading')}
      className={`w-full max-w-full p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFFFFF] to-[#F0FDFA] dark:from-[#111D2D] dark:to-[#042F2E] border border-[#99F6E4]/70 dark:border-[#115E59] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 transition-all overflow-hidden ${className}`}
    >
      <div className="space-y-2 flex-1 min-w-0 w-full max-w-full">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0F766E]/10 dark:bg-[#14B8A6]/20 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
            <PlayCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{t('continueLearningHeading')}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] dark:text-[#94A3B8] truncate max-w-full">
            <Layers className="w-3 h-3 text-[#0F766E] dark:text-[#14B8A6] shrink-0" />
            Unit {unit.syllabusOrder}: {unit.title[locale]}
          </span>

          {completed && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4EA] dark:bg-[#137333]/30 text-[#137333] dark:text-[#81C995] border border-[#CEEAD6] dark:border-[#137333]">
              {t('completedBadge')}
            </span>
          )}

          {bookmarked && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EFF6FF] dark:bg-[#1E3A8A]/30 text-[#2563EB] dark:text-[#93C5FD]">
              <Bookmark className="w-2.5 h-2.5 fill-current" />
              Saved
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading truncate">
          {lesson.title[locale]}
        </h3>

        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] line-clamp-1 max-w-xl">
          {lesson.summary[locale]}
        </p>
      </div>

      <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-end">
        <Link
          href={`/units/${lastVisited.unitSlug}/${lastVisited.lessonSlug}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
        >
          <span>{t('resumeLesson')}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
