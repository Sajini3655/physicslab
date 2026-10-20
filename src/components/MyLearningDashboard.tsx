'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useLearningProgress } from '@/shared/progress';
import { UnitDefinition, Locale } from '@/shared/curriculum';
import { Link } from '@/i18n/routing';
import { ContinueLearningCard } from '@/components/ContinueLearningCard';
import {
  BookOpen,
  Bookmark,
  CheckCircle2,
  Trash2,
  ArrowRight,
  HardDrive,
  Compass,
  Layers,
  Info,
} from 'lucide-react';

interface MyLearningDashboardProps {
  units: UnitDefinition[];
  locale: Locale;
}

export const MyLearningDashboard: React.FC<MyLearningDashboardProps> = ({
  units,
  locale,
}) => {
  const t = useTranslations('MyLearning');
  const tCurriculum = useTranslations('Curriculum');
  const {
    completedLessonIds,
    bookmarkedLessons,
    lastVisited,
    toggleBookmarked,
    getUnitProgress,
    totalCompleted,
    totalLessons,
    overallPercentage,
  } = useLearningProgress();

  const isBrandNewVisitor =
    completedLessonIds.length === 0 &&
    bookmarkedLessons.length === 0 &&
    !lastVisited;

  return (
    <div className="space-y-10">
      {/* Device Storage Note */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#F0FDFA] dark:bg-[#042F2E] flex items-center justify-center text-[#0F766E] dark:text-[#14B8A6]">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t('savedOnDevice')}
            </h2>
            <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              {t('savedOnDeviceDesc')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>
            {totalCompleted} of {totalLessons} completed ({overallPercentage}%)
          </span>
        </div>
      </div>

      {/* Brand New Visitor Empty State */}
      {isBrandNewVisitor ? (
        <section
          aria-label={t('emptyStateHeading')}
          className="p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] mx-auto flex items-center justify-center">
            <Compass className="w-7 h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
            {t('emptyStateHeading')}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
            {t('emptyStateDesc')}
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('browseLessons')}</span>
            </Link>
          </div>
        </section>
      ) : (
        <>
          {/* Continue Learning Section */}
          {lastVisited && (
            <div className="space-y-3">
              <ContinueLearningCard locale={locale} />
            </div>
          )}

          {/* Saved Lessons Section */}
          <section
            aria-label={t('savedLessonsHeading')}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] fill-current" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                    {t('savedLessonsHeading')} ({bookmarkedLessons.length})
                  </h2>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                  {t('savedLessonsSubtitle')}
                </p>
              </div>
            </div>

            {bookmarkedLessons.length === 0 ? (
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-dashed border-[#DFE8EF] dark:border-[#1E334D] text-center space-y-2">
                <p className="text-sm font-medium text-[#14243A] dark:text-[#F8FAFC]">
                  {t('noSavedLessons')}
                </p>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
                  {t('noSavedLessonsDesc')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookmarkedLessons.map(({ unit, lesson }) => (
                  <div
                    key={lesson.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] shadow-2xs transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold tracking-wider text-[#0F766E] dark:text-[#14B8A6] uppercase">
                          Unit {unit.syllabusOrder} • {lesson.syllabusRef}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleBookmarked(lesson.id)}
                          aria-label={`${t('removeBookmark')}: ${lesson.title[locale]}`}
                          className="text-[#64748B] dark:text-[#94A3B8] hover:text-[#DC2626] dark:hover:text-[#F87171] p-1 rounded-md transition-colors cursor-pointer"
                          title={t('removeBookmark')}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h3 className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC] leading-snug">
                        {lesson.title[locale]}
                      </h3>

                      <p className="text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                        {lesson.summary[locale]}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0F6FA] dark:border-[#1E334D] flex items-center justify-between">
                      <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                        {unit.title[locale]}
                      </span>
                      <Link
                        href={`/units/${unit.slug}/${lesson.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] hover:underline"
                      >
                        <span>Open</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}

      {/* 11 Units Progress Overview */}
      <section
        aria-label={t('unitProgressHeading')}
        className="space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                {t('unitProgressHeading')}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8]">
              {t('unitProgressSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
            <Info className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6] shrink-0" />
            <span>{t('completionDisclaimer')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((unit) => {
            const { completed, total, percentage } = getUnitProgress(unit.slug);
            const isAll = completed >= total && total > 0;

            return (
              <div
                key={unit.id}
                className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] uppercase tracking-wider">
                      Unit {unit.syllabusOrder}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        isAll
                          ? 'bg-[#E6F4EA] dark:bg-[#137333]/30 text-[#137333] dark:text-[#81C995]'
                          : completed > 0
                          ? 'bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6]'
                          : 'bg-[#F6FAFD] dark:bg-[#17273C] text-[#64748B] dark:text-[#94A3B8]'
                      }`}
                    >
                      {completed} of {total} completed ({percentage}%)
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC] leading-snug">
                      {unit.title[locale]}
                    </h3>
                    <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                      {unit.competencyRange}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div
                      className="w-full bg-[#DFE8EF] dark:bg-[#1E334D] h-2 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${unit.title[locale]} progress`}
                    >
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isAll ? 'bg-[#10B981]' : 'bg-[#0F766E]'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0F6FA] dark:border-[#1E334D] flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">
                    {tCurriculum('lessonsCount', { count: total })}
                  </span>
                  <Link
                    href={`/units/${unit.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#0F766E] dark:text-[#14B8A6] hover:underline"
                  >
                    <span>{tCurriculum('viewLessons')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
