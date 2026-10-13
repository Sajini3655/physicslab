'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { QuestionSubmissionInputSchema, type QuestionSubmissionInput } from '../schema';
import {
  UniformMotionDraftSchema,
  type UniformMotionDraft,
} from '@/shared/scenarios/uniform-motion';
import type { InterpretationResponse } from '../types';
import {
  loadStoredReview,
  saveStoredReview,
  clearStoredReview,
} from '../utils/review-helpers';
import { ScenarioReviewSection } from './ScenarioReviewSection';

const STORAGE_KEY = 'physicslab_question_draft_v1';
const WORKING_KEY = 'physicslab_question_working_v1';
const MAX_LENGTH = 4000;

const EN_EXAMPLE =
  'A car moves along a straight line at a constant velocity of 5 m/s for 8 s. Find its displacement in metres.';
const SI_EXAMPLE =
  'මෝටර් රථයක් සරල රේඛාවක් ඔස්සේ 5 m/s ඒකාකාර ප්රවේගයකින් තත්පර 8ක් ගමන් කරයි. එහි විස්ථාපනය මීටර්වලින් සොයන්න.';

function safeGetStorage(key: string): string | null {
  try {
    if (typeof window === 'undefined') return null;
    return window.sessionStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function safeSetStorage(key: string, value: string): boolean {
  try {
    if (typeof window === 'undefined') return false;
    window.sessionStorage?.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeRemoveStorage(key: string): void {
  try {
    if (typeof window === 'undefined') return;
    window.sessionStorage?.removeItem(key);
  } catch {}
}

export function QuestionInputForm({ initialLocale }: { initialLocale: 'en' | 'si' }) {
  const t = useTranslations('QuestionInput');

  // Question form state
  const [lessonId, setLessonId] = useState<'mechanics'>('mechanics');
  const [topicId, setTopicId] = useState<'straight-line-motion'>('straight-line-motion');
  const [subtopicId, setSubtopicId] = useState<'uniform-velocity'>('uniform-velocity');
  const [questionText, setQuestionText] = useState('');
  const [questionLocale, setQuestionLocale] = useState<'en' | 'si'>(initialLocale);
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  // Interpretation state
  const [isInterpreting, setIsInterpreting] = useState<boolean>(false);
  const [interpretationError, setInterpretationError] = useState<string | null>(null);
  const [interpretationErrorCode, setInterpretationErrorCode] = useState<string | null>(null);
  const [retryAfterSeconds, setRetryAfterSeconds] = useState<number | null>(null);
  const [unsupportedReason, setUnsupportedReason] = useState<string | null>(null);

  // Scenario Review state
  const [draft, setDraft] = useState<UniformMotionDraft | null>(null);
  const [interpretedSource, setInterpretedSource] = useState<{
    originalText: string;
    locale: 'en' | 'si';
  } | null>(null);
  const [temporaryValues, setTemporaryValues] = useState<{
    s?: string;
    u?: string;
    t?: string;
  }>({});

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isMountedRef = useRef<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef<number>(0);

  // Restore working draft and scenario review from sessionStorage on mount
  useEffect(() => {
    try {
      // 1. Check working draft first (preserves unsaved text across UI locale switches)
      const workingRaw = safeGetStorage(WORKING_KEY);
      if (workingRaw) {
        const parsed = JSON.parse(workingRaw);
        if (parsed && typeof parsed.originalText === 'string') {
          setTimeout(() => {
            setQuestionText(parsed.originalText);
            if (parsed.locale === 'en' || parsed.locale === 'si') {
              setQuestionLocale(parsed.locale);
            }
            if (typeof parsed.isSaved === 'boolean') {
              setSaveStatus(parsed.isSaved);
            }
          }, 0);
        }
      } else {
        // 2. Otherwise restore formal saved draft if available
        const savedRaw = safeGetStorage(STORAGE_KEY);
        if (savedRaw) {
          const parsed = JSON.parse(savedRaw);
          const validated = QuestionSubmissionInputSchema.safeParse(parsed);
          if (validated.success) {
            setTimeout(() => {
              setQuestionText(validated.data.originalText);
              setQuestionLocale(validated.data.locale);
              setSaveStatus(true);
            }, 0);
          }
        }
      }

      // 3. Restore Scenario Review state
      const storedReview = loadStoredReview();
      if (storedReview && storedReview.draft) {
        setTimeout(() => {
          setDraft(storedReview.draft);
          setInterpretedSource(storedReview.interpretedSource);
          setTemporaryValues(storedReview.temporaryValues || {});
        }, 0);
      }
    } catch {
      // Handle missing/corrupt storage gracefully without crashing
    } finally {
      setTimeout(() => {
        isMountedRef.current = true;
      }, 0);
    }
  }, []);

  // Synchronize working question state so language switcher does not drop unsaved text
  useEffect(() => {
    if (!isMountedRef.current) return;
    safeSetStorage(
      WORKING_KEY,
      JSON.stringify({
        originalText: questionText,
        locale: questionLocale,
        isSaved: saveStatus,
      })
    );
  }, [questionText, questionLocale, saveStatus]);

  // Synchronize scenario review state across refresh and language switches
  useEffect(() => {
    if (!isMountedRef.current) return;
    if (draft) {
      saveStoredReview({
        version: 1,
        draft,
        interpretedSource,
        temporaryValues,
      });
    } else {
      clearStoredReview();
    }
  }, [draft, interpretedSource, temporaryValues]);

  // Countdown timer for rate-limit retry
  useEffect(() => {
    if (retryAfterSeconds === null || retryAfterSeconds <= 0) return;
    const timer = setInterval(() => {
      setRetryAfterSeconds((prev) => {
        if (prev === null || prev <= 1) return null;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [retryAfterSeconds]);

  // Determine whether current review draft is stale with respect to source inputs
  const isStale =
    !!draft &&
    (interpretedSource === null ||
      questionText !== interpretedSource.originalText ||
      questionLocale !== interpretedSource.locale);

  const handleUseExample = () => {
    if (questionText.trim() !== '' || draft !== null) {
      if (!window.confirm(t('useExampleConfirm'))) return;
    }
    const example = questionLocale === 'en' ? EN_EXAMPLE : SI_EXAMPLE;
    setQuestionText(example);
    setSaveStatus(false);
    setError(null);
    setInterpretationError(null);
    setUnsupportedReason(null);
    setDraft(null);
    setInterpretedSource(null);
    setTemporaryValues({});
    clearStoredReview();
  };

  const handleClear = () => {
    if (questionText.trim() !== '' || draft !== null) {
      if (!window.confirm(t('clearConfirm'))) return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    requestIdRef.current += 1;

    setQuestionText('');
    setSaveStatus(false);
    setError(null);
    setInterpretationError(null);
    setInterpretationErrorCode(null);
    setRetryAfterSeconds(null);
    setUnsupportedReason(null);
    setDraft(null);
    setInterpretedSource(null);
    setTemporaryValues({});

    safeRemoveStorage(STORAGE_KEY);
    safeRemoveStorage(WORKING_KEY);
    clearStoredReview();
  };

  const handleSaveDraft = () => {
    if (!questionText.trim()) {
      setError(t('errorEmpty'));
      textareaRef.current?.focus();
      return;
    }

    if (questionText.length > MAX_LENGTH) {
      setError(t('errorTooLong'));
      textareaRef.current?.focus();
      return;
    }

    const submissionDraft: QuestionSubmissionInput = {
      lessonId,
      topicId,
      subtopicId,
      originalText: questionText,
      locale: questionLocale,
    };

    const saved = safeSetStorage(STORAGE_KEY, JSON.stringify(submissionDraft));
    if (saved) {
      setSaveStatus(true);
      setError(null);
    } else {
      setSaveStatus(false);
      setError(t('errorStorageUnavailable'));
    }
  };

  const handleInterpretQuestion = async () => {
    if (isInterpreting) return;

    // 1. Validate submission input with schema
    const validation = QuestionSubmissionInputSchema.safeParse({
      lessonId,
      topicId,
      subtopicId,
      originalText: questionText,
      locale: questionLocale,
    });

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      setError(firstIssue?.message || t('errorEmpty'));
      textareaRef.current?.focus();
      return;
    }

    // 2. Prepare request cancellation and identity guards
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    requestIdRef.current += 1;
    const currentRequestId = requestIdRef.current;

    setIsInterpreting(true);
    setError(null);
    setInterpretationError(null);
    setInterpretationErrorCode(null);
    setRetryAfterSeconds(null);
    setUnsupportedReason(null);

    try {
      const res = await fetch('/api/questions/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validation.data),
        signal: abortController.signal,
      });

      if (currentRequestId !== requestIdRef.current) return;

      const data: InterpretationResponse = await res.json();
      if (currentRequestId !== requestIdRef.current) return;

      if (res.status === 200 && data.status === 'success') {
        const draftValidation = UniformMotionDraftSchema.safeParse(data.draft);
        if (draftValidation.success) {
          setDraft(draftValidation.data);
          setInterpretedSource({
            originalText: questionText,
            locale: questionLocale,
          });
          setTemporaryValues({
            s: draftValidation.data.s.type === 'given' ? String(draftValidation.data.s.value) : undefined,
            u: draftValidation.data.u.type === 'given' ? String(draftValidation.data.u.value) : undefined,
            t: draftValidation.data.t.type === 'given' ? String(draftValidation.data.t.value) : undefined,
          });
        } else {
          setInterpretationError(t('errorInvalidDraft'));
        }
      } else if (res.status === 200 && data.status === 'unsupported') {
        setUnsupportedReason(data.reason);
        setDraft(null);
        setInterpretedSource(null);
        setTemporaryValues({});
      } else if (data.status === 'error') {
        setInterpretationErrorCode(data.error.code);
        setInterpretationError(data.error.message || t('errorGeneric'));
        if (data.error.code === 'RATE_LIMIT_EXCEEDED' && data.error.details?.retryAfter) {
          const seconds = parseInt(String(data.error.details.retryAfter), 10);
          if (!Number.isNaN(seconds) && seconds > 0) {
            setRetryAfterSeconds(seconds);
          }
        }
      } else {
        setInterpretationError(t('errorGeneric'));
      }
    } catch (err: unknown) {
      if (currentRequestId !== requestIdRef.current) return;
      if ((err as Error)?.name === 'AbortError') return;
      setInterpretationError(t('errorNetwork'));
    } finally {
      if (currentRequestId === requestIdRef.current) {
        setIsInterpreting(false);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Scope and Metadata Selection */}
      <div className="space-y-4 rounded-xl border p-6 bg-card text-card-foreground shadow-xs">
        <h2 className="text-xl font-semibold mb-4">{t('title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <Label htmlFor="lesson-select" className="text-muted-foreground">
              {t('lesson')}
            </Label>
            <Select
              value={lessonId}
              onValueChange={(val) => {
                setLessonId(val as 'mechanics');
                setSaveStatus(false);
              }}
            >
              <SelectTrigger id="lesson-select" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mechanics">{t('lesson_mechanics')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic-select" className="text-muted-foreground">
              {t('topic')}
            </Label>
            <Select
              value={topicId}
              onValueChange={(val) => {
                setTopicId(val as 'straight-line-motion');
                setSaveStatus(false);
              }}
            >
              <SelectTrigger id="topic-select" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="straight-line-motion">{t('topic_straight_line_motion')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtopic-select" className="text-muted-foreground">
              {t('subtopic')}
            </Label>
            <Select
              value={subtopicId}
              onValueChange={(val) => {
                setSubtopicId(val as 'uniform-velocity');
                setSaveStatus(false);
              }}
            >
              <SelectTrigger id="subtopic-select" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uniform-velocity">{t('subtopic_uniform_velocity')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 border-t pt-4">{t('scopeDescription')}</p>
      </div>

      {/* Question Textarea & Controls */}
      <div className="space-y-4">
        <div className="space-y-2 w-48">
          <Label htmlFor="question-language">{t('questionLanguage')}</Label>
          <Select
            value={questionLocale}
            onValueChange={(val) => {
              setQuestionLocale(val as 'en' | 'si');
              setSaveStatus(false);
            }}
          >
            <SelectTrigger id="question-language" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">{t('english')}</SelectItem>
              <SelectItem value="si">{t('sinhala')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="question-text">{t('questionText')}</Label>
          <Textarea
            id="question-text"
            ref={textareaRef}
            className="min-h-[140px] resize-y text-base"
            placeholder={t('questionPlaceholder')}
            value={questionText}
            onChange={(e) => {
              setQuestionText(e.target.value);
              setSaveStatus(false);
              if (error) setError(null);
            }}
          />
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <p>{t('questionGuidance')}</p>
            <span className={questionText.length > MAX_LENGTH ? 'text-destructive font-semibold' : ''}>
              {t('characterCount', { count: questionText.length })}
            </span>
          </div>

          {error && (
            <p className="text-sm font-medium text-destructive mt-1" role="alert">
              {error}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            type="button"
            variant="default"
            onClick={handleInterpretQuestion}
            disabled={isInterpreting || (retryAfterSeconds !== null && retryAfterSeconds > 0)}
            aria-busy={isInterpreting}
            className="min-w-[170px]"
          >
            {isInterpreting ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                {t('understandingInProgress')}
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                {t('understandQuestion')}
              </>
            )}
          </Button>

          <Button type="button" variant="secondary" onClick={handleUseExample} disabled={isInterpreting}>
            {t('useExample')}
          </Button>
          <Button type="button" variant="outline" onClick={handleClear} disabled={isInterpreting}>
            {t('clearReset')}
          </Button>
          <div className="flex-1" />
          <Button type="button" onClick={handleSaveDraft} disabled={isInterpreting}>
            {t('saveDraft')}
          </Button>
        </div>

        {saveStatus && (
          <div
            className="p-3 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-900 text-sm"
            role="status"
          >
            <p className="font-medium">{t('draftSaved')}</p>
            <p className="text-xs mt-0.5">{t('draftExplanation')}</p>
          </div>
        )}

        {/* Interpretation Error Alert with Retry */}
        {interpretationError && (
          <div
            className="p-4 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            role="alert"
          >
            <div>
              <p className="font-semibold">{interpretationErrorCode || t('errorGeneric')}</p>
              <p className="text-xs mt-1 text-foreground/90">{interpretationError}</p>
              {retryAfterSeconds !== null && retryAfterSeconds > 0 && (
                <p className="text-xs font-mono mt-1 text-muted-foreground">
                  {t('rateLimitWait', { seconds: retryAfterSeconds })}
                </p>
              )}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleInterpretQuestion}
              disabled={isInterpreting || (retryAfterSeconds !== null && retryAfterSeconds > 0)}
              className="shrink-0 bg-background text-foreground hover:bg-muted"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
              {t('retryInterpretation')}
            </Button>
          </div>
        )}

        {/* Unsupported Question Notice */}
        {unsupportedReason && (
          <div
            className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-sm space-y-2"
            role="alert"
          >
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {t('unsupportedTitle')}
            </div>
            <p className="text-xs text-amber-800 dark:text-amber-300">{unsupportedReason}</p>
            <p className="text-xs text-muted-foreground italic">{t('unsupportedNotice')}</p>
          </div>
        )}
      </div>

      {/* Editable Bilingual Scenario Review Section */}
      {draft && (
        <ScenarioReviewSection
          draft={draft}
          isStale={isStale}
          temporaryValues={temporaryValues}
          uiLocale={initialLocale}
          onUpdateDraft={setDraft}
          onUpdateTemporaryValue={(field, val) =>
            setTemporaryValues((prev) => ({ ...prev, [field]: val }))
          }
          onReinterpret={handleInterpretQuestion}
        />
      )}
    </div>
  );
}
