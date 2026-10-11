import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { PhysicsHeroIllustration } from '@/components/PhysicsHeroIllustration';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SimulationDevHarness } from '@/features/simulation';
import { Atom, Compass, ArrowDownRight, Sparkles, BookOpen } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations('HomePage');
  const tSim = await getTranslations('Simulation');
  const tVal = await getTranslations('Validation');

  const simulationLabels = {
    title: tSim('title'),
    subtitle: tSim('subtitle'),
    scenarioDetails: tSim('scenarioDetails'),
    question: tSim('question'),
    object: tSim('object'),
    axis: tSim('axis'),
    givenValues: tSim('givenValues'),
    targetUnknown: tSim('targetUnknown'),
    displacement: tSim('displacement'),
    velocity: tSim('velocity'),
    time: tSim('time'),
    unknownValue: tSim('unknownValue'),
    origin: tSim('origin'),
    startPoint: tSim('startPoint'),
    endPoint: tSim('endPoint'),
    visibilityNotice: tSim('visibilityNotice'),
    placeholderTitle: tSim('placeholderTitle'),
    placeholderDesc: tSim('placeholderDesc'),
    awaitingValidation: tSim('awaitingValidation'),
    readyToConfirm: tSim('readyToConfirm'),
    confirmed: tSim('confirmed'),
    failed: tSim('failed'),
    confirmationDisabledHint: tSim('confirmationDisabledHint'),
    confirmedHint: tSim('confirmedHint'),
    resetLifecycle: tSim('resetLifecycle'),
    devToolsTitle: tSim('devToolsTitle'),
    devToolsSubtitle: tSim('devToolsSubtitle'),
    candidateMeta: tSim('candidateMeta'),
    revisionLabel: tSim('revisionLabel'),
    candidateIdLabel: tSim('candidateIdLabel'),
    controls: {
      play: tSim('controls.play'),
      pause: tSim('controls.pause'),
      resume: tSim('controls.resume'),
      replay: tSim('controls.replay'),
      reset: tSim('controls.reset'),
      speed: tSim('controls.speed'),
      progress: tSim('controls.progress'),
      completed: tSim('controls.completed'),
      ready: tSim('controls.ready'),
    },
    devHarness: {
      title: tSim('devHarness.title'),
      subtitle: tSim('devHarness.subtitle'),
      selectPreset: tSim('devHarness.selectPreset'),
      validateBtn: tSim('devHarness.validateBtn'),
      confirmBtn: tSim('devHarness.confirmBtn'),
      editDraftBtn: tSim('devHarness.editDraftBtn'),
      statusValid: tSim('devHarness.statusValid'),
      statusInvalid: tSim('devHarness.statusInvalid'),
      statusConfirmed: tSim('devHarness.statusConfirmed'),
      statusDraft: tSim('devHarness.statusDraft'),
    },
  };

  const validationLabels = {
    targetMustBeUnknown: tVal('targetMustBeUnknown'),
    missingDisplacement: tVal('missingDisplacement'),
    missingVelocity: tVal('missingVelocity'),
    missingTime: tVal('missingTime'),
    invalidTarget: tVal('invalidTarget'),
    nonFiniteValue: tVal('nonFiniteValue'),
    negativeTime: tVal('negativeTime'),
    unsupportedUnit: tVal('unsupportedUnit'),
    signMismatch: tVal('signMismatch'),
    indeterminateTime: tVal('indeterminateTime'),
    indeterminateVelocity: tVal('indeterminateVelocity'),
    impossibleStationaryDisplacement: tVal('impossibleStationaryDisplacement'),
    impossibleZeroDurationDisplacement: tVal('impossibleZeroDurationDisplacement'),
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen bg-[#F6FAFD] dark:bg-[#0B131E] text-[#475569] dark:text-[#CBD5E1] flex flex-col items-center selection:bg-[#B7E7EC] selection:text-[#14243A]">
      {/* Compact PhysicsLab Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF]/85 dark:bg-[#111D2D]/85 backdrop-blur-md sticky top-0 z-30 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-white shadow-xs">
            <Atom className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] leading-none">
              PhysicsLab
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] dark:text-[#94A3B8] mt-0.5">
              Interactive Kinematics
            </span>
          </div>
        </div>

        {/* Real destinations and accessible language selector */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#simulation-workspace"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#14243A] dark:text-[#E2E8F0] hover:text-[#0F766E] dark:hover:text-[#14B8A6] px-3 py-1.5 rounded-lg transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
            <span>{tHome('moduleTitle')}</span>
          </a>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      {/* Main Educational Workspace */}
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10 sm:gap-14">
        {/* ============================================================ */}
        {/* SPACIOUS SPLIT HERO SECTION                                   */}
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
              <span>{tHome('heroBadge') || 'G.C.E. A/L Physics'}</span>
              <span className="text-[#DFE8EF] dark:text-[#1E334D]">|</span>
              <span className="text-[#64748B] dark:text-[#94A3B8] font-medium">{tHome('moduleTitle')}</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] leading-[1.15] whitespace-pre-line font-heading">
              {tHome('heroHeadline') || 'Understand physics.\nSee it in motion.'}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] max-w-xl leading-relaxed font-normal">
              {tHome('heroSubtitle') || 'Explore motion step by step, in English or Sinhala.'}
            </p>

            {/* Concise Physical Concept Explanation */}
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-lg leading-relaxed pt-0.5">
              {tHome('description')}
            </p>

            {/* Functional Primary Action pointing to actual simulation */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#simulation-workspace"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white text-sm font-semibold shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>{tHome('heroCta') || 'Open Simulation'}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#64748B] dark:text-[#94A3B8] bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D]">
                <Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>{tHome('status')} • s = u × t</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Original Dimensional SVG Illustration */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <PhysicsHeroIllustration />
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED SIMULATION WORKSPACE SECTION                         */}
        {/* ============================================================ */}
        <section
          id="simulation-workspace"
          aria-label="Interactive Uniform Motion Workspace"
          className="w-full flex flex-col gap-5 pt-6 border-t border-[#DFE8EF] dark:border-[#1E334D]"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#0F766E] rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC]">
                  {tSim('title')}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {tSim('subtitle')}
              </p>
            </div>

            {isDevelopment && (
              <div className="self-start sm:self-auto flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] text-[11px] font-mono text-[#0F766E] dark:text-[#14B8A6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-ping" />
                <span>DEV HARNESS ACTIVE</span>
              </div>
            )}
          </div>

          {/* Development Workspace (Desktop 2-column, Mobile stacked) */}
          {isDevelopment ? (
            <div className="w-full">
              <SimulationDevHarness
                simulationLabels={simulationLabels}
                validationLabels={validationLabels}
              />
            </div>
          ) : (
            /* Production Customer-Facing Presentation */
            <div className="grid gap-6 w-full max-w-lg mx-auto py-10">
              <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-sm rounded-2xl overflow-hidden">
                <CardHeader className="p-6 pb-3 border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD]/60 dark:bg-[#0B131E]/60">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                    <CardTitle className="text-base font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                      {tHome('moduleTitle')}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                    {tHome('tagline')}
                  </p>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {tHome('description')}
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-[#99F6E4] bg-[#F0FDFA] dark:bg-[#042F2E] px-3 py-0.5 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                      {tHome('status')}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">
                      s = u × t
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </main>

      {/* Restrained Educational Footer */}
      <footer className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-12 border-t border-[#DFE8EF] dark:border-[#1E334D] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#64748B] dark:text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <Atom className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
          <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">PhysicsLab</span>
          <span>• A/L Physics Kinematics</span>
        </div>
        <p className="text-center sm:text-right">
          Interactive learning platform. English &amp; සිංහල bilingual curriculum support.
        </p>
      </footer>
    </div>
  );
}

