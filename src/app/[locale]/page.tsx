import {getTranslations, setRequestLocale} from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('HomePage');

  return (
    <div className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">PhysicsLab</h1>
        <LanguageSwitcher currentLocale={locale} />
      </header>

      <main className="w-full max-w-4xl flex flex-col gap-8 items-center">
        <p className="text-xl text-muted-foreground text-center max-w-2xl font-medium">
          {t('tagline')}
        </p>

        <div className="grid gap-6 w-full max-w-md mt-8">
          <Card className="relative overflow-hidden border-dashed border-2">
            <CardHeader>
              <CardTitle>{t('moduleTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground">
                {t('status')}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
