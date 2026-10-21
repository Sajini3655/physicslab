'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useLearningProgress } from '@/shared/progress';
import {
  CheckCircle2,
  Circle,
  Bookmark,
  BookmarkCheck,
  Info,
} from 'lucide-react';

interface LessonProgressActionsProps {
  lessonId: string;
  unitSlug: string;
  lessonSlug: string;
}

export const LessonProgressActions: React.FC<LessonProgressActionsProps> = ({
  lessonId,
  unitSlug,
  lessonSlug,
}) => {
  const t = useTranslations('MyLearning');
  const {
    isCompleted,
    isBookmarked,
    toggleCompleted,
    toggleBookmarked,
    recordVisit,
  } = useLearningProgress();

  // Track the most recently visited valid lesson without automatically completing it
  useEffect(() => {
    recordVisit(unitSlug, lessonSlug);
  }, [unitSlug, lessonSlug, recordVisit]);

  const completed = isCompleted(lessonId);
  const bookmarked = isBookmarked(lessonId);

  return (
    <div className="pt-3 border-t border-[#DFE8EF] dark:border-[#1E334D] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      {/* Interactive Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Completion Toggle */}
        <button
          type="button"
          onClick={() => toggleCompleted(lessonId)}
          aria-pressed={completed}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 cursor-pointer ${
            completed
              ? 'bg-[#0F766E] text-white shadow-xs hover:bg-[#0D655E]'
              : 'bg-[#FFFFFF] dark:bg-[#111D2D] text-[#0F766E] dark:text-[#14B8A6] border border-[#0F766E]/40 hover:bg-[#F0FDFA] dark:hover:bg-[#042F2E]'
          }`}
        >
          {completed ? (
            <>
              <CheckCircle2 className="w-4 h-4 fill-white text-[#0F766E]" />
              <span>{t('markAsIncomplete')}</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" />
              <span>{t('markAsComplete')}</span>
            </>
          )}
        </button>

        {/* Bookmark Toggle */}
        <button
          type="button"
          onClick={() => toggleBookmarked(lessonId)}
          aria-pressed={bookmarked}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 cursor-pointer ${
            bookmarked
              ? 'bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]'
              : 'bg-[#FFFFFF] dark:bg-[#111D2D] text-[#64748B] dark:text-[#94A3B8] border border-[#DFE8EF] dark:border-[#1E334D] hover:text-[#0F766E] dark:hover:text-[#14B8A6]'
          }`}
        >
          {bookmarked ? (
            <>
              <BookmarkCheck className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
              <span>{t('removeSavedLesson')}</span>
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4" />
              <span>{t('saveLesson')}</span>
            </>
          )}
        </button>
      </div>

      {/* Educational Disclaimer */}
      <p className="flex items-center gap-1.5 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
        <Info className="w-3.5 h-3.5 shrink-0 text-[#0F766E] dark:text-[#14B8A6]" />
        <span>{t('completionDisclaimer')}</span>
      </p>
    </div>
  );
};
