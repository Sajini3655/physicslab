'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Compass,
  Layers,
  Sparkles,
  RefreshCw,
  Info,
} from 'lucide-react';
import type { UniformMotionDraft } from '@/shared/scenarios/uniform-motion';
import {
  generateScenarioDescription,
  computeCandidateReadiness,
  updateDraftObject,
  updateDraftAxis,
  updateDraftTarget,
  updateDraftQuantityValue,
  updateDraftQuantityUnit,
} from '../utils/review-helpers';

interface ScenarioReviewSectionProps {
  draft: UniformMotionDraft;
  isStale: boolean;
  temporaryValues: {
    s?: string;
    u?: string;
    t?: string;
  };
  uiLocale: 'en' | 'si';
  onUpdateDraft: (newDraft: UniformMotionDraft) => void;
  onUpdateTemporaryValue: (field: 's' | 'u' | 't', val: string) => void;
  onReinterpret: () => void;
}

export function ScenarioReviewSection({
  draft,
  isStale,
  temporaryValues,
  uiLocale,
  onUpdateDraft,
  onUpdateTemporaryValue,
  onReinterpret,
}: ScenarioReviewSectionProps) {
  const t = useTranslations('ScenarioReview');

  const readiness = computeCandidateReadiness(draft, isStale);
  const summaryDescription = generateScenarioDescription(draft, uiLocale);

  const handleObjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = updateDraftObject(draft, e.target.value);
    onUpdateDraft(updated);
  };

  const handleAxisDirectionChange = (val: string) => {
    const updated = updateDraftAxis(draft, val);
    onUpdateDraft(updated);
  };

  const handleTargetChange = (val: 's' | 'u' | 't') => {
    const updated = updateDraftTarget(draft, val);
    onUpdateDraft(updated);
  };

  const handleQuantityValueChange = (field: 's' | 'u' | 't', rawString: string) => {
    onUpdateTemporaryValue(field, rawString);
    const result = updateDraftQuantityValue(draft, field, rawString);
    onUpdateDraft(result.draft);
  };

  const handleQuantityUnitChange = (field: 's' | 'u' | 't', unit: string) => {
    const updated = updateDraftQuantityUnit(draft, field, unit);
    onUpdateDraft(updated);
  };

  // Helper to retrieve field clarifications
  const getFieldClarifications = (field: 'object' | 'axis' | 's' | 'u' | 't') => {
    return draft.clarifications.filter(
      (c) => c.fieldRef === field || (field === 'object' && c.code === 'MISSING_OBJECT')
    );
  };

  const generalClarifications = draft.clarifications.filter(
    (c) => !c.fieldRef || !['object', 'axis', 's', 'u', 't'].includes(c.fieldRef)
  );

  // Axis basis badge styling and label
  const renderAxisBasisBadge = () => {
    const basis = draft.axis?.basis;
    if (basis === 'question-stated') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
          {t('axisBasisStated')}
        </span>
      );
    }
    if (basis === 'student-selected') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
          {t('axisBasisSelected')}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">
        {t('axisBasisDisplay')}
      </span>
    );
  };

  return (
    <section className="w-full space-y-6 pt-4 border-t border-border" aria-label={t('title')}>
      {/* Header and readiness status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            {t('title')}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{t('subtitle')}</p>
        </div>

        <div>
          {isStale ? (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
              role="status"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              {t('statusStale')}
            </span>
          ) : readiness.isReady ? (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
              role="status"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t('statusReady')}
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-800"
              role="status"
            >
              <Info className="w-3.5 h-3.5" />
              {t('statusDraft')}
            </span>
          )}
        </div>
      </div>

      {/* Stale Warning Banner */}
      {isStale && (
        <div
          className="p-4 rounded-xl border border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 dark:text-amber-200"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold">{t('statusStale')}</p>
              <p className="text-xs mt-0.5 text-amber-800 dark:text-amber-300">{t('staleWarning')}</p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onReinterpret}
            className="shrink-0 bg-background text-foreground hover:bg-muted"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            {t('reanalyzeAction')}
          </Button>
        </div>
      )}

      {/* Scenario Summary Card */}
      <Card className="rounded-xl border shadow-xs bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('summaryHeading')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base text-foreground font-medium leading-relaxed bg-muted/40 p-3 rounded-lg border border-border/50">
            {summaryDescription}
          </p>

          <div className="space-y-1.5 pt-1">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              {t('originalQuestionHeading')}
            </Label>
            <blockquote className="text-xs text-muted-foreground italic border-l-2 border-primary/40 pl-3 py-1">
              &ldquo;{draft.originalText}&rdquo;
            </blockquote>
          </div>
        </CardContent>
      </Card>

      {/* Global Scenario Details (Object, Axis, Target) */}
      <Card className="rounded-xl border shadow-xs bg-card">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            {t('summaryHeading')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Object */}
            <div className="space-y-2">
              <Label htmlFor="scenario-object" className="text-sm font-medium">
                {t('objectLabel')}
              </Label>
              <Input
                id="scenario-object"
                value={draft.object ?? ''}
                placeholder={t('objectPlaceholder')}
                onChange={handleObjectChange}
                aria-describedby="object-clarification"
              />
              {getFieldClarifications('object').map((c, i) => (
                <p key={i} id="object-clarification" className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                  {c.message}
                </p>
              ))}
            </div>

            {/* Axis Direction */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="scenario-axis" className="text-sm font-medium flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-muted-foreground" />
                  {t('axisLabel')}
                </Label>
                {renderAxisBasisBadge()}
              </div>

              <Select
                value={draft.axis?.direction || 'right'}
                onValueChange={(val) => {
                  if (val) handleAxisDirectionChange(val);
                }}
              >
                <SelectTrigger id="scenario-axis" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="right">{t('axisOptionRight')}</SelectItem>
                  <SelectItem value="left">{t('axisOptionLeft')}</SelectItem>
                  <SelectItem value="east">{t('axisOptionEast')}</SelectItem>
                  <SelectItem value="west">{t('axisOptionWest')}</SelectItem>
                  <SelectItem value="north">{t('axisOptionNorth')}</SelectItem>
                  <SelectItem value="south">{t('axisOptionSouth')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Quantity */}
            <div className="space-y-2">
              <Label htmlFor="scenario-target" className="text-sm font-medium flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                {t('targetLabel')}
              </Label>
              <Select
                value={draft.target || 'u'}
                onValueChange={(val) => {
                  if (val) handleTargetChange(val as 's' | 'u' | 't');
                }}
              >
                <SelectTrigger id="scenario-target" className="w-full font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">{t('targetDisplacement')}</SelectItem>
                  <SelectItem value="u">{t('targetVelocity')}</SelectItem>
                  <SelectItem value="t">{t('targetTime')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3 Quantity Cards (s, u, t) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Displacement (s) Card */}
        <Card className={`rounded-xl border shadow-xs ${draft.target === 's' ? 'ring-2 ring-primary/40' : ''}`}>
          <CardHeader className="p-4 pb-2 border-b border-border/40 bg-muted/20">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{t('displacementLabel')}</span>
              {draft.target === 's' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary">
                  {t('stateUnknown')}
                </span>
              ) : draft.s.type === 'given' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {t('stateGiven')}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  {t('stateUnresolved')}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {draft.target === 's' ? (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">{t('targetValueNotice')}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-1.5 rounded-lg border bg-muted/40 text-sm font-mono text-muted-foreground text-center">
                    ?
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.s && draft.s.unit) || 'm'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('s', val);
                      }}
                    >
                      <SelectTrigger aria-label="Displacement unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m">m</SelectItem>
                        <SelectItem value="km">km</SelectItem>
                        <SelectItem value="cm">cm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Label htmlFor="quant-s-value" className="sr-only">
                      {t('valueLabel')}
                    </Label>
                    <Input
                      id="quant-s-value"
                      type="text"
                      inputMode="numeric"
                      value={
                        temporaryValues.s !== undefined
                          ? temporaryValues.s
                          : draft.s.type === 'given'
                          ? String(draft.s.value)
                          : ''
                      }
                      placeholder={t('valueLabel')}
                      onChange={(e) => handleQuantityValueChange('s', e.target.value)}
                    />
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.s && draft.s.unit) || 'm'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('s', val);
                      }}
                    >
                      <SelectTrigger aria-label="Displacement unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m">m</SelectItem>
                        <SelectItem value="km">km</SelectItem>
                        <SelectItem value="cm">cm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {draft.s.type === 'unresolved' && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">{draft.s.reason}</p>
                )}
              </div>
            )}

            {getFieldClarifications('s').map((c, i) => (
              <p key={i} className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                {c.message}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Velocity (u) Card */}
        <Card className={`rounded-xl border shadow-xs ${draft.target === 'u' ? 'ring-2 ring-primary/40' : ''}`}>
          <CardHeader className="p-4 pb-2 border-b border-border/40 bg-muted/20">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{t('velocityLabel')}</span>
              {draft.target === 'u' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary">
                  {t('stateUnknown')}
                </span>
              ) : draft.u.type === 'given' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {t('stateGiven')}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  {t('stateUnresolved')}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {draft.target === 'u' ? (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">{t('targetValueNotice')}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-1.5 rounded-lg border bg-muted/40 text-sm font-mono text-muted-foreground text-center">
                    ?
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.u && draft.u.unit) || 'm/s'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('u', val);
                      }}
                    >
                      <SelectTrigger aria-label="Velocity unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m/s">m/s</SelectItem>
                        <SelectItem value="km/h">km/h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Label htmlFor="quant-u-value" className="sr-only">
                      {t('valueLabel')}
                    </Label>
                    <Input
                      id="quant-u-value"
                      type="text"
                      inputMode="numeric"
                      value={
                        temporaryValues.u !== undefined
                          ? temporaryValues.u
                          : draft.u.type === 'given'
                          ? String(draft.u.value)
                          : ''
                      }
                      placeholder={t('valueLabel')}
                      onChange={(e) => handleQuantityValueChange('u', e.target.value)}
                    />
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.u && draft.u.unit) || 'm/s'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('u', val);
                      }}
                    >
                      <SelectTrigger aria-label="Velocity unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m/s">m/s</SelectItem>
                        <SelectItem value="km/h">km/h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {draft.u.type === 'unresolved' && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">{draft.u.reason}</p>
                )}
              </div>
            )}

            {getFieldClarifications('u').map((c, i) => (
              <p key={i} className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                {c.message}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Elapsed Time (t) Card */}
        <Card className={`rounded-xl border shadow-xs ${draft.target === 't' ? 'ring-2 ring-primary/40' : ''}`}>
          <CardHeader className="p-4 pb-2 border-b border-border/40 bg-muted/20">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{t('timeLabel')}</span>
              {draft.target === 't' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary">
                  {t('stateUnknown')}
                </span>
              ) : draft.t.type === 'given' ? (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {t('stateGiven')}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  {t('stateUnresolved')}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {draft.target === 't' ? (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">{t('targetValueNotice')}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-1.5 rounded-lg border bg-muted/40 text-sm font-mono text-muted-foreground text-center">
                    ?
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.t && draft.t.unit) || 's'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('t', val);
                      }}
                    >
                      <SelectTrigger aria-label="Time unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="s">s</SelectItem>
                        <SelectItem value="min">min</SelectItem>
                        <SelectItem value="h">h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Label htmlFor="quant-t-value" className="sr-only">
                      {t('valueLabel')}
                    </Label>
                    <Input
                      id="quant-t-value"
                      type="text"
                      inputMode="numeric"
                      value={
                        temporaryValues.t !== undefined
                          ? temporaryValues.t
                          : draft.t.type === 'given'
                          ? String(draft.t.value)
                          : ''
                      }
                      placeholder={t('valueLabel')}
                      onChange={(e) => handleQuantityValueChange('t', e.target.value)}
                    />
                  </div>
                  <div className="w-24">
                    <Select
                      value={('unit' in draft.t && draft.t.unit) || 's'}
                      onValueChange={(val) => {
                        if (val) handleQuantityUnitChange('t', val);
                      }}
                    >
                      <SelectTrigger aria-label="Time unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="s">s</SelectItem>
                        <SelectItem value="min">min</SelectItem>
                        <SelectItem value="h">h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {draft.t.type === 'given' && draft.t.value < 0 && (
                  <p className="text-xs text-destructive font-medium">{t('negativeTimeIssue')}</p>
                )}

                {draft.t.type === 'unresolved' && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">{draft.t.reason}</p>
                )}
              </div>
            )}

            {getFieldClarifications('t').map((c, i) => (
              <p key={i} className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                {c.message}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* General Clarifications (if any) */}
      {generalClarifications.length > 0 && (
        <Card className="rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {t('clarificationsHeading')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-1 space-y-1">
            {generalClarifications.map((c, i) => (
              <p key={i} className="text-xs text-amber-800 dark:text-amber-300">
                • {c.message}
              </p>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Structural Readiness Summary Box */}
      <div
        className={`p-4 rounded-xl border flex items-start gap-3 ${
          readiness.isReady
            ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
            : 'bg-muted/40 border-border text-foreground'
        }`}
        role="status"
      >
        {readiness.isReady ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        ) : (
          <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
        )}
        <div className="text-sm space-y-1">
          <p className="font-semibold">
            {readiness.isReady ? t('statusReady') : t('statusDraft')}
          </p>
          <p className="text-xs text-muted-foreground">
            {readiness.isReady ? t('statusReadyDesc') : t('statusDraftDesc')}
          </p>
          {!readiness.isReady && readiness.issues.length > 0 && !isStale && (
            <ul className="text-xs list-disc list-inside mt-2 space-y-0.5 text-muted-foreground">
              {readiness.issues.map((issue, idx) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
