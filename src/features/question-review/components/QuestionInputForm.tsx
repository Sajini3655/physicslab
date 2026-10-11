'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { QuestionSubmissionInputSchema, type QuestionSubmissionInput } from '../schema';

const STORAGE_KEY = 'physicslab_question_draft_v1';
const WORKING_KEY = 'physicslab_question_working_v1';
const MAX_LENGTH = 4000;

const EN_EXAMPLE = "A car moves along a straight line at a constant velocity of 5 m/s for 8 s. Find its displacement in metres.";
const SI_EXAMPLE = "මෝටර් රථයක් සරල රේඛාවක් ඔස්සේ 5 m/s ඒකාකාර ප්රවේගයකින් තත්පර 8ක් ගමන් කරයි. එහි විස්ථාපනය මීටර්වලින් සොයන්න.";

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
  
  const [lessonId, setLessonId] = useState<'mechanics'>('mechanics');
  const [topicId, setTopicId] = useState<'straight-line-motion'>('straight-line-motion');
  const [subtopicId, setSubtopicId] = useState<'uniform-velocity'>('uniform-velocity');
  const [questionText, setQuestionText] = useState('');
  const [questionLocale, setQuestionLocale] = useState<'en' | 'si'>(initialLocale);
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isMountedRef = useRef<boolean>(false);

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
            isMountedRef.current = true;
          }, 0);
          return;
        }
      }

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
            isMountedRef.current = true;
          }, 0);
          return;
        }
      }
    } catch {
      // Handle missing/corrupt storage gracefully without crashing
    } finally {
      setTimeout(() => {
        isMountedRef.current = true;
      }, 0);
    }
  }, []);

  // Synchronize working state so language switcher does not drop unsaved text
  useEffect(() => {
    if (!isMountedRef.current) return;
    safeSetStorage(WORKING_KEY, JSON.stringify({
      originalText: questionText,
      locale: questionLocale,
      isSaved: saveStatus
    }));
  }, [questionText, questionLocale, saveStatus]);

  const handleUseExample = () => {
    if (questionText.trim() !== '') {
      if (!window.confirm(t('useExampleConfirm'))) return;
    }
    const example = questionLocale === 'en' ? EN_EXAMPLE : SI_EXAMPLE;
    setQuestionText(example);
    setSaveStatus(false);
    setError(null);
  };

  const handleClear = () => {
    if (questionText.trim() !== '') {
      if (!window.confirm(t('clearConfirm'))) return;
    }
    setQuestionText('');
    setSaveStatus(false);
    setError(null);
    safeRemoveStorage(STORAGE_KEY);
    safeRemoveStorage(WORKING_KEY);
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

    const draft: QuestionSubmissionInput = {
      lessonId,
      topicId,
      subtopicId,
      originalText: questionText,
      locale: questionLocale
    };

    const saved = safeSetStorage(STORAGE_KEY, JSON.stringify(draft));
    if (saved) {
      setSaveStatus(true);
      setError(null);
    } else {
      setSaveStatus(false);
      setError(t('errorStorageUnavailable'));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-4 rounded-lg border p-6 bg-card text-card-foreground shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{t('title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <Label htmlFor="lesson-select" className="text-muted-foreground">{t('lesson')}</Label>
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
            <Label htmlFor="topic-select" className="text-muted-foreground">{t('topic')}</Label>
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
            <Label htmlFor="subtopic-select" className="text-muted-foreground">{t('subtopic')}</Label>
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
        
        <p className="text-sm text-muted-foreground mt-4 border-t pt-4">
          {t('scopeDescription')}
        </p>
      </div>

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
            className="min-h-[150px] resize-y"
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

        <div className="flex flex-wrap gap-3 pt-2">
          <Button type="button" variant="secondary" onClick={handleUseExample}>
            {t('useExample')}
          </Button>
          <Button type="button" variant="outline" onClick={handleClear}>
            {t('clearReset')}
          </Button>
          <div className="flex-1" />
          <Button type="button" onClick={handleSaveDraft}>
            {t('saveDraft')}
          </Button>
        </div>
        
        {saveStatus && (
          <div className="p-3 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-md border border-green-200 dark:border-green-900 text-sm" role="status">
            <p className="font-medium">{t('draftSaved')}</p>
            <p className="text-xs mt-1">{t('draftExplanation')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
