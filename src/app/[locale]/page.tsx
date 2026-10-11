import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { PhysicsHeroIllustration } from '@/components/PhysicsHeroIllustration';
import { CurriculumBrowser } from '@/components/CurriculumBrowser';
import { getAllUnits, Locale } from '@/shared/curriculum';
import { Link } from '@/i18n/routing';
import { Atom, ArrowDownRight, Sparkles, Layers } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations('HomePage');
  const tCurriculum = await getTranslations('Curriculum');
  const units = getAllUnits();

  const curriculumLabels = {
    unitsTitle: tCurriculum('unitsTitle'),
    unitsSubtitle: tCurriculum('unitsSubtitle'),
    searchPlaceholder: tCurriculum('searchPlaceholder'),
    searchResults: tCurriculum('searchResults'),
    noResults: tCurriculum('noResults'),
    viewAllUnits: tCurriculum('viewAllUnits'),
    lessonsCount: tCurriculum('lessonsCount'),
    unitLabel: tCurriculum('unitLabel'),
    competencyLabel: tCurriculum('competencyLabel'),
    openUnit: tCurriculum('openUnit'),
    statusReady: tCurriculum('statusReady'),
    statusOutline: tCurriculum('statusOutline'),
    statusSimulated: tCurriculum('statusSimulated'),
  };

  return (
    <div className="min-h-screen bg-[#F6FAFD] dark:bg-[#0B131E] text-[#475569] dark:text-[#CBD5E1] flex flex-col items-center selection:bg-[#B7E7EC] selection:text-[#14243A]">
      {/* Compact PhysicsLab Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF]/85 dark:bg-[#111D2D]/85 backdrop-blur-md sticky top-0 z-30 transition-colors">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Atom className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] leading-none">
                PhysicsLab
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                A/L Physics Platform
              </span>
            </div>
          </Link>
        </div>

        {/* Real destinations and accessible language selector */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#curriculum-units"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#14243A] dark:text-[#E2E8F0] hover:text-[#0F766E] dark:hover:text-[#14B8A6] px-3 py-1.5 rounded-lg transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
            <span>{tCurriculum('unitsTitle')}</span>
          </a>
          <Link
            href="/units/mechanics/rectilinear-motion-uniform-velocity"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] hover:bg-[#F0FDFA] dark:hover:bg-[#042F2E] px-3 py-1.5 rounded-lg border border-[#99F6E4] dark:border-[#115E59] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{tHome('featuredModuleTitle')}</span>
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      {/* Main Educational Workspace */}
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10 sm:gap-14">
        {/* ============================================================ */}
        {/* SPACIOUS SPLIT HERO SECTION (WHOLE COURSE ENTRANCE)          */}
        {/* ============================================================ */}
        <section
          aria-label="PhysicsLab Introduction"
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4"
        >
          {/* Left Hero Column: Real copy, A/L Physics badge, primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            {/* A/L Physics category pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0F766E] dark:bg-[#14B8A6]" />
              <span>{tHome('heroBadge')}</span>
              <span className="text-[#DFE8EF] dark:text-[#1E334D]">|</span>
              <span className="text-[#64748B] dark:text-[#94A3B8] font-medium">11 Units • 42 Lessons</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] leading-[1.15] whitespace-pre-line font-heading">
              {tHome('heroHeadline')}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] max-w-xl leading-relaxed font-normal">
              {tHome('heroSubtitle')}
            </p>

            {/* Concise Course Description */}
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-lg leading-relaxed pt-0.5">
              {tHome('description')}
            </p>

            {/* Functional Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#curriculum-units"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white text-sm font-semibold shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>{tHome('heroCta')}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <Link
                href="/units/mechanics/rectilinear-motion-uniform-velocity"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0F766E] dark:text-[#14B8A6] bg-[#FFFFFF] dark:bg-[#111D2D] hover:bg-[#F0FDFA] dark:hover:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] shadow-2xs transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{tHome('featuredModuleAction')}</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Column: Original Dimensional SVG Illustration */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <PhysicsHeroIllustration />
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED UNIFORM MOTION MODULE BANNER                         */}
        {/* ============================================================ */}
        <section
          aria-label="Featured Module"
          className="w-full p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F0FDFA] dark:bg-[#042F2E] text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
              <Sparkles className="w-3 h-3" />
              <span>{tHome('featuredHeading')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
              {tHome('featuredModuleTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl">
              {tHome('featuredModuleDesc')}
            </p>
          </div>

          <Link
            href="/units/mechanics/rectilinear-motion-uniform-velocity"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
          >
            <span>{tHome('featuredModuleAction')}</span>
            <ArrowDownRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ============================================================ */}
        {/* 11-UNIT CURRICULUM BROWSER & LESSON SEARCH                     */}
        {/* ============================================================ */}
        <CurriculumBrowser
          units={units}
          locale={locale as Locale}
          labels={curriculumLabels}
        />
      </main>

      {/* Restrained Educational Footer */}
      <footer className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-12 border-t border-[#DFE8EF] dark:border-[#1E334D] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#64748B] dark:text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <Atom className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
          <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">PhysicsLab</span>
          <span>• G.C.E. A/L Physics Sri Lanka</span>
        </div>
        <p className="text-center sm:text-right">
          Bilingual curriculum matching the official NIE syllabus. English &amp; සිංහල.
        </p>
      </footer>
    </div>
  );
}
