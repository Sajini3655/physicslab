import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SimulationDevHarness } from '@/features/simulation';
import { Atom } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50/80 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col items-center">
      {/* Compact PhysicsLab Header */}
      <header className="w-full max-w-7xl px-4 sm:px-6 pt-4 pb-3 flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xs sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs">
            <Atom className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            PhysicsLab
          </span>
          <span className="hidden sm:inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
            {tHome('moduleTitle')}
          </span>
        </div>
        <LanguageSwitcher currentLocale={locale} />
      </header>

      {/* Main Educational Workspace */}
      <main className="w-full max-w-7xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Concise Title & Contextual Header */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {tSim('title')}
            </h1>
            <span className="sm:hidden text-xs px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium">
              {tHome('moduleTitle')}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
            {tHome('description') || tSim('subtitle')}
          </p>
        </div>

        {/* Development Workspace (Desktop 2-column, Mobile stacked) */}
        {isDevelopment ? (
          <section aria-label="Interactive Physics Workspace" className="w-full">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400">
                Workspace Canvas &amp; Controls
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-mono text-[10px]">
                DEV HARNESS ACTIVE
              </span>
            </div>
            <SimulationDevHarness
              simulationLabels={simulationLabels}
              validationLabels={validationLabels}
            />
          </section>
        ) : (
          /* Production Customer-Facing Presentation */
          <div className="grid gap-6 w-full max-w-md mx-auto mt-8">
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {tHome('moduleTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {tHome('tagline')}
                </p>
                <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                  {tHome('status')}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
