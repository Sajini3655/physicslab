'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      // replace ensures we don't build up a massive history of language switches
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3"
      >
        <Globe className="h-4 w-4" />
        {currentLocale === 'en' ? 'English' : 'සිංහල'}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onSelectChange('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange('si')}>
          සිංහල
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
