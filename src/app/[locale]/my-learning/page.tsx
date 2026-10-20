import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAllUnits, Locale } from '@/shared/curriculum';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Link, routing } from '@/i18n/routing';
import { Atom, ArrowLeft, ChevronRight } from 'lucide-react';
import { MyLearningDashboard } from '@/components/MyLearningDashboard';

interface MyLearningPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function MyLearningPage({ params }: MyLearningPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMyLearning = await getTranslations('MyLearning');
  const tCurriculum = await getTranslations('Curriculum');
  const units = getAllUnits();
  const loc = locale as Locale;

  return (
    <div className="min-h-screen bg-[#F6FAFD] dark:bg-[#0B131E] text-[#475569] dark:text-[#CBD5E1] flex flex-col items-center selection:bg-[#B7E7EC] selection:text-[#14243A] overflow-x-hidden">
      {/* Navigation Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF]/85 dark:bg-[#111D2D]/85 backdrop-blur-md sticky top-0 z-30 transition-colors">
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

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-[#14243A] dark:text-[#E2E8F0] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors whitespace-nowrap"
          >
            {tCurriculum('backToHome')}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 overflow-x-hidden">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-[#0F766E] dark:hover:text-[#14B8A6] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{tCurriculum('backToHome')}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
            {tMyLearning('navLink')}
          </span>
        </nav>

        {/* Page Hero Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] font-heading">
            {tMyLearning('pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
            {tMyLearning('pageSubtitle')}
          </p>
        </div>

        {/* Interactive Progress Dashboard */}
        <MyLearningDashboard units={units} locale={loc} />
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
