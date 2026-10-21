import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  getLesson,
  getUnitBySlug,
  getAdjacentLessons,
  getAllUnits,
  Locale,
} from '@/shared/curriculum';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { PracticeSection } from '@/components/PracticeSection';
import { LessonSimulationWorkspace } from '@/features/simulation';
import { Link } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import {
  Atom,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ListOrdered,
  BookOpen,
  HelpCircle,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

interface LessonPageProps {
  params: Promise<{
    locale: string;
    unitSlug: string;
    lessonSlug: string;
  }>;
}

export function generateStaticParams() {
  const units = getAllUnits();
  const params: Array<{
    locale: string;
    unitSlug: string;
    lessonSlug: string;
  }> = [];

  for (const locale of routing.locales) {
    for (const unit of units) {
      for (const lesson of unit.lessons) {
        params.push({
          locale,
          unitSlug: unit.slug,
          lessonSlug: lesson.slug,
        });
      }
    }
  }

  return params;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { locale, unitSlug, lessonSlug } = await params;
  setRequestLocale(locale);

  const unit = getUnitBySlug(unitSlug);
  const lesson = getLesson(unitSlug, lessonSlug);

  if (!unit || !lesson) {
    notFound();
  }

  const loc = locale as Locale;
  const tCurriculum = await getTranslations('Curriculum');
  const tSim = await getTranslations('Simulation');
  const tVal = await getTranslations('Validation');

  const { previous, next } = getAdjacentLessons(unitSlug, lessonSlug);
  const isDevelopment = process.env.NODE_ENV === 'development';

  const simulationLabels = {
    title: tSim('title'),
    subtitle: tSim('subtitle'),
    scenarioDetails: tSim('scenarioDetails'),
    question: tSim('question'),
    object: tSim('object'),
    axis: tSim('axis'),
    axisBasis: tSim('axisBasis'),
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
    step1Validate: tSim('step1Validate'),
    step2Confirm: tSim('step2Confirm'),
    stepFixIssues: tSim('stepFixIssues'),
    studentScenarioActive: tSim('studentScenarioActive'),
    noConfirmedScenarioTitle: tSim('noConfirmedScenarioTitle'),
    noConfirmedScenarioDesc: tSim('noConfirmedScenarioDesc'),
    corruptedScenarioNotice: tSim('corruptedScenarioNotice'),
    enterQuestionCta: tSim('enterQuestionCta'),
    returnToReview: tSim('returnToReview'),
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

  return (
    <div className="min-h-screen bg-[#F6FAFD] dark:bg-[#0B131E] text-[#475569] dark:text-[#CBD5E1] flex flex-col items-center selection:bg-[#B7E7EC] selection:text-[#14243A]">
      {/* Top Header */}
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
        <nav aria-label="Breadcrumbs" className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-[#0F766E] dark:hover:text-[#14B8A6]">
            {tCurriculum('backToHome')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <Link href={`/units/${unit.slug}`} className="hover:text-[#0F766E] dark:hover:text-[#14B8A6]">
            {tCurriculum('unitLabel', { number: unit.syllabusOrder })}: {unit.title[loc]}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC] truncate max-w-xs">
            {lesson.title[loc]}
          </span>
        </nav>

        {/* Lesson Hero Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
                <Layers className="w-3.5 h-3.5" />
                Lesson {unit.syllabusOrder}.{lesson.lessonOrder} • {lesson.syllabusRef}
              </span>
              {lesson.hasSimulation ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]">
                  <Sparkles className="w-3 h-3" />
                  {tCurriculum('statusSimulated')}
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F6FAFD] dark:bg-[#17273C] text-[#64748B] dark:text-[#94A3B8] border border-[#DFE8EF] dark:border-[#1E334D]">
                  {lesson.status === 'ready' ? tCurriculum('statusReady') : tCurriculum('statusOutline')}
                </span>
              )}
            </div>

            <Link
              href={`/units/${unit.slug}`}
              className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] hover:underline"
            >
              {tCurriculum('backToUnit')}
            </Link>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#14243A] dark:text-[#F8FAFC] font-heading">
            {lesson.title[loc]}
          </h1>

          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-3xl">
            {lesson.summary[loc]}
          </p>
        </div>

        {/* LEARNING OBJECTIVES */}
        <section aria-label="Learning Objectives" className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
              {tCurriculum('learningObjectives')}
            </h2>
          </div>
          <ul className="space-y-2.5 pl-1">
            {lesson.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-2" />
                <span>{obj[loc]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* COMPLETE TEACHING CONTENT (If ready) */}
        {lesson.content && (
          <>
            {/* Core Theory & Concepts */}
            <section aria-label="Core Concepts" className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                  {tCurriculum('keyConcepts')}
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-6">
                <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  {lesson.content.introduction[loc]}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.content.keyConcepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                        {concept.title[loc]}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                        {concept.description[loc]}
                      </p>
                      {concept.formula && (
                        <div className="mt-2 p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono text-[#0F766E] dark:text-[#14B8A6] font-semibold text-center">
                          {concept.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Common Misconceptions */}
            {lesson.content.commonMisconceptions && (
              <section aria-label="Common Misconceptions" className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                    {tCurriculum('misconceptions')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.content.commonMisconceptions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-3"
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B45309] block">
                            Misconception
                          </span>
                          <p className="text-xs sm:text-sm text-[#14243A] dark:text-[#F8FAFC] font-medium leading-relaxed">
                            {item.misconception[loc]}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-xs text-[#0F766E] dark:text-[#14B8A6] leading-relaxed">
                        <span className="font-semibold block mb-0.5">Physical Clarification:</span>
                        {item.clarification[loc]}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* SYLLABUS TOPIC OUTLINE (Always present, labeled clearly) */}
        <section aria-label="Topic Outline" className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                {tCurriculum('lessonOutline')}
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
              {lesson.syllabusRef}
            </span>
          </div>

          {!lesson.content && (
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              {tCurriculum('outlineNotice')}
            </div>
          )}

          <ul className="space-y-2 pl-1">
            {lesson.topicOutline.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#F0F6FA] dark:bg-[#17273C] text-[#0F766E] dark:text-[#14B8A6] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{item[loc]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* INTERACTIVE SIMULATION SECTION (If lesson has simulation) */}
        {lesson.hasSimulation && lesson.simulationType === 'uniform-motion' && (
          <section
            id="simulation-activity"
            aria-label="Interactive Activity"
            className="space-y-4 pt-4 border-t border-[#DFE8EF] dark:border-[#1E334D]"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                    {tCurriculum('interactiveActivity')} — {tSim('title')}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
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

            <LessonSimulationWorkspace
              simulationLabels={simulationLabels}
              validationLabels={validationLabels}
              isDevelopment={isDevelopment}
            />
          </section>
        )}

        {/* PRACTICE QUESTIONS (If available) */}
        {lesson.content?.practiceQuestions && (
          <section aria-label="Practice Questions" className="space-y-4 pt-4 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC] font-heading">
                {tCurriculum('practiceQuestions')}
              </h2>
            </div>

            <PracticeSection
              questions={lesson.content.practiceQuestions}
              locale={loc}
              labels={{
                practiceQuestions: tCurriculum('practiceQuestions'),
                showHint: tCurriculum('showHint'),
                showAnswer: tCurriculum('showAnswer'),
              }}
            />
          </section>
        )}

        {/* PREVIOUS / NEXT LESSON NAVIGATION */}
        <nav
          aria-label="Lesson Navigation"
          className="pt-6 border-t border-[#DFE8EF] dark:border-[#1E334D] grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {previous ? (
            <Link
              href={`/units/${previous.unit.slug}/${previous.lesson.slug}`}
              className="group p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] shadow-2xs hover:shadow-xs transition-all flex items-center gap-3"
            >
              <ArrowLeft className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] block">
                  {tCurriculum('previousLesson')}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#14243A] dark:text-[#F8FAFC] truncate block group-hover:text-[#0F766E] transition-colors">
                  {previous.lesson.title[loc]}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/units/${next.unit.slug}/${next.lesson.slug}`}
              className="group p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] hover:border-[#0F766E] dark:hover:border-[#14B8A6] shadow-2xs hover:shadow-xs transition-all flex items-center justify-end text-right gap-3"
            >
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] block">
                  {tCurriculum('nextLesson')}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#14243A] dark:text-[#F8FAFC] truncate block group-hover:text-[#0F766E] transition-colors">
                  {next.lesson.title[loc]}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
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
