import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SimulationDevHarness } from '@/features/simulation';

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
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            PhysicsLab
          </h1>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-secondary border border-border text-secondary-foreground">
            {tHome('moduleTitle')}
          </span>
        </div>
        <LanguageSwitcher currentLocale={locale} />
      </header>

      <main className="w-full max-w-4xl flex flex-col gap-8 items-center">
        {/* Core Customer-Facing App Presentation */}
        <p className="text-xl text-muted-foreground text-center max-w-2xl font-medium">
          {tHome('tagline')}
        </p>

        <div className="grid gap-6 w-full max-w-md">
          <Card className="relative overflow-hidden border-dashed border-2">
            <CardHeader>
              <CardTitle>{tHome('moduleTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground">
                {tHome('status')}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Development & Verification Harness (Excluded from production customer UI) */}
        {isDevelopment && (
          <section className="w-full mt-6 pt-6 border-t border-border flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Internal Development Tooling
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 font-mono">
                DEV ONLY
              </span>
            </div>
            <SimulationDevHarness
              simulationLabels={simulationLabels}
              validationLabels={validationLabels}
            />
          </section>
        )}
      </main>
    </div>
  );
}
