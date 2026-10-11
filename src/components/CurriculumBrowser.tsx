'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { UnitDefinition, searchLessons, Locale } from '@/shared/curriculum';
import { Link } from '@/i18n/routing';
import {
  Search,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';

interface CurriculumBrowserProps {
  units: UnitDefinition[];
  locale: Locale;
}

export const CurriculumBrowser: React.FC<CurriculumBrowserProps> = ({
  units,
  locale,
}) => {
  const t = useTranslations('Curriculum');
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery.trim()
    ? searchLessons(searchQuery, locale)
    : [];

  return (
    <section
      id="curriculum-units"
      aria-label={t('unitsTitle')}
      className="w-full flex flex-col gap-6 pt-8 border-t border-[#DFE8EF] dark:border-[#1E334D]"
    >
      {/* Section Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#0F766E] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] font-heading">
              {t('unitsTitle')}
            </h2>
            <span className="ml-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F0F6FA] dark:bg-[#17273C] text-[#0F766E] dark:text-[#14B8A6] border border-[#DFE8EF] dark:border-[#1E334D]">
              {t('curriculumTotals', { units: 11, lessons: 45 })}
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
            {t('unitsSubtitle')}
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-80 relative">
          <label htmlFor="lesson-search-input" className="sr-only">
            {t('searchPlaceholder')}
          </label>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-[#94A3B8] pointer-events-none" />
            <input
              id="lesson-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] text-sm text-[#14243A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F766E] shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#14243A] dark:hover:text-[#F8FAFC] cursor-pointer"
                aria-label={t('clearSearch')}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH RESULTS VIEW */}
      {searchQuery.trim() !== '' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
              {t('searchResults')} ({searchResults.length})
            </h3>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-medium text-[#0F766E] dark:text-[#14B8A6] hover:underline cursor-pointer"
            >
              {t('clearSearch')}
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-8 text-center bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">
                {t('noResults')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map(({ unit, lesson }) => (
                <Link
                  key={`${unit.slug}-${lesson.slug}`}
                  href={`/units/${unit.slug}/${lesson.slug}`}
                  className="group p-5 bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-2xl shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold tracking-wider text-[#0F766E] dark:text-[#14B8A6] uppercase">
                        {t('unitLabel', { number: unit.syllabusOrder })} • {lesson.syllabusRef}
                      </span>
                      {lesson.hasSimulation ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
                          <Sparkles className="w-2.5 h-2.5" />
                          {t('statusSimulated')}
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F6FAFD] dark:bg-[#17273C] text-[#64748B] dark:text-[#94A3B8] border border-[#DFE8EF] dark:border-[#1E334D]">
                          {lesson.status === 'ready' ? t('statusReady') : t('statusOutline')}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC] group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors leading-snug">
                      {lesson.title[locale]}
                    </h4>

                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                      {lesson.summary[locale]}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#F0F6FA] dark:border-[#1E334D] flex items-center justify-between text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                    <span>{unit.title[locale]}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* 11 COMPACT UNIT CARDS GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((unit) => {
            return (
              <Link
                key={unit.id}
                href={`/units/${unit.slug}`}
                className="group p-5 bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-2xl shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] uppercase tracking-wider">
                      {t('unitLabel', { number: unit.syllabusOrder })}
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B] dark:text-[#94A3B8]">
                      {t('lessonsCount', { count: unit.lessons.length })}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC] group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors leading-snug">
                      {unit.title[locale]}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                    {unit.description[locale]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F6FA] dark:border-[#1E334D] flex items-center justify-between text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                  <span>{t('viewLessons')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
