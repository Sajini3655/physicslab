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
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] disabled:pointer-events-none disabled:opacity-50 border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D] text-[#14243A] dark:text-[#E2E8F0] shadow-xs hover:bg-[#F0F6FA] dark:hover:bg-[#17273C] h-9 px-3 cursor-pointer"
      >
        <Globe className="h-4 w-4 text-[#0F766E] dark:text-[#14B8A6]" />
        <span>{currentLocale === 'en' ? 'English' : 'සිංහල'}</span>
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
