'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useLearningProgress } from '@/shared/progress';
import { CheckCircle2 } from 'lucide-react';

interface UnitProgressBadgeProps {
  unitSlug: string;
  totalLessons: number;
}

export const UnitProgressBadge: React.FC<UnitProgressBadgeProps> = ({
  unitSlug,
  totalLessons,
}) => {
  const tCurriculum = useTranslations('Curriculum');
  const { getUnitProgress } = useLearningProgress();
  const { completed } = getUnitProgress(unitSlug);

  if (completed === 0) {
    return (
      <span className="text-[11px] font-medium text-[#64748B] dark:text-[#94A3B8]">
        {tCurriculum('lessonsCompletedCount', { completed: 0, total: totalLessons })}
      </span>
    );
  }

  const isAll = completed >= totalLessons;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
        isAll
          ? 'bg-[#E6F4EA] dark:bg-[#137333]/30 text-[#137333] dark:text-[#81C995] border border-[#CEEAD6] dark:border-[#137333]'
          : 'bg-[#F0FDFA] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#14B8A6] border border-[#99F6E4] dark:border-[#115E59]'
      }`}
    >
      <CheckCircle2 className="w-3 h-3" />
      <span>
        {tCurriculum('lessonsCompletedCount', { completed, total: totalLessons })}
      </span>
    </span>
  );
};

interface LessonCompletionStatusProps {
  lessonId: string;
}

export const LessonCompletionStatus: React.FC<LessonCompletionStatusProps> = ({
  lessonId,
}) => {
  const t = useTranslations('MyLearning');
  const { isCompleted } = useLearningProgress();

  if (!isCompleted(lessonId)) {
    return null;
  }

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4EA] dark:bg-[#137333]/30 text-[#137333] dark:text-[#81C995] border border-[#CEEAD6] dark:border-[#137333]"
      title="Completed"
    >
      <CheckCircle2 className="w-2.5 h-2.5" />
      <span>{t('completedBadge')}</span>
    </span>
  );
};
