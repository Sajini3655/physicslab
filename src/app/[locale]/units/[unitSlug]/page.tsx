import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getUnitBySlug, getAllUnits, Locale } from '@/shared/curriculum';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import {
  Atom,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

interface UnitPageProps {
  params: Promise<{
    locale: string;
    unitSlug: string;
  }>;
}

export function generateStaticParams() {
  const units = getAllUnits();
  const params: Array<{ locale: string; unitSlug: string }> = [];

  for (const locale of routing.locales) {
    for (const unit of units) {
      params.push({ locale, unitSlug: unit.slug });
    }
  }

  return params;
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { locale, unitSlug } = await params;
  setRequestLocale(locale);

  const unit = getUnitBySlug(unitSlug);
  if (!unit) {
    notFound();
  }

  const tCurriculum = await getTranslations('Curriculum');
  const loc = locale as Locale;

  return (
    <div className="min-h-screen bg-[#F6FAFD] dark:bg-[#0B131E] text-[#475569] dark:text-[#CBD5E1] flex flex-col items-center selection:bg-[#B7E7EC] selection:text-[#14243A]">
      {/* Navigation Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF]/85 dark:bg-[#111D2D]/85 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white shadow-xs">
              <Atom className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              PhysicsLab
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-[#0F766E] dark:hover:text-[#14B8A6] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{tCurriculum('backToHome')}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
            {tCurriculum('unitLabel', { number: unit.syllabusOrder })}
          </span>
        </nav>

        {/* Unit Hero Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
              <Layers className="w-3.5 h-3.5" />
              {tCurriculum('unitLabel', { number: unit.syllabusOrder })} • {unit.competencyRange}
            </span>
            <span className="text-xs font-medium text-[#64748B] dark:text-[#94A3B8]">
              {tCurriculum('lessonsCount', { count: unit.lessons.length })}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] font-heading">
            {unit.title[loc]}
          </h1>

          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-3xl">
            {unit.description[loc]}
          </p>
        </div>

        {/* Ordered Lessons List */}
        <section aria-label="Unit Lessons" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
              {unit.title[loc]} — Lessons ({unit.lessons.length})
            </h2>
          </div>

          <div className="space-y-3">
            {unit.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/units/${unit.slug}/${lesson.slug}`}
                className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                      Lesson {unit.syllabusOrder}.{lesson.lessonOrder}
                    </span>
                    <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                      • {lesson.syllabusRef}
                    </span>
                    {lesson.hasSimulation && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
                        <Sparkles className="w-2.5 h-2.5" />
                        {tCurriculum('statusSimulated')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC] group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors leading-snug">
                    {lesson.title[loc]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {lesson.summary[loc]}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] self-end sm:self-center">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-12 border-t border-[#DFE8EF] dark:border-[#1E334D] flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
        <span>PhysicsLab • G.C.E. A/L Physics</span>
        <Link href="/" className="hover:text-[#0F766E]">
          {tCurriculum('backToHome')}
        </Link>
      </footer>
    </div>
  );
}
