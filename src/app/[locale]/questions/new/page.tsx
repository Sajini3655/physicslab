import { setRequestLocale } from 'next-intl/server';
import { QuestionInputForm } from '@/features/question-review/components/QuestionInputForm';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default async function NewQuestionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">PhysicsLab</h1>
        <LanguageSwitcher currentLocale={locale} />
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center">
        <QuestionInputForm initialLocale={locale as 'en' | 'si'} />
      </main>
    </div>
  );
}
