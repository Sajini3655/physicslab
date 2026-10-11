import { z } from 'zod';

export const QuestionSubmissionInputSchema = z.object({
  lessonId: z.literal('mechanics'),
  topicId: z.literal('straight-line-motion'),
  subtopicId: z.literal('uniform-velocity'),
  originalText: z.string().trim().min(1, 'Question text cannot be empty').max(4000, 'Question exceeds maximum length'),
  locale: z.enum(['en', 'si'])
});

export type QuestionSubmissionInput = z.infer<typeof QuestionSubmissionInputSchema>;
