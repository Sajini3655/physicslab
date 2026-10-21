'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import {
  ForceParallelogramPractical,
  PrincipleOfMomentsPractical,
  UTubePractical,
  HaresApparatusPractical,
  WeightedTestTubePractical,
} from './index';
import { FlaskConical, GitBranch, Scale, Waves, Droplets, Ship } from 'lucide-react';

import { usePracticalWork } from '@/shared/practicals';

interface MechanicsPracticalsHubProps {
  locale?: Locale;
}

export const MechanicsPracticalsHub: React.FC<MechanicsPracticalsHubProps> = ({
  locale = 'en',
}) => {
  const { observations, updateObservations } = usePracticalWork({
    experimentId: 'exp-mechanics-hub',
    defaultObservations: { activeTab: 'force' },
  });
  const activeTab = (observations.activeTab || 'force') as
    | 'force'
    | 'moments'
    | 'utube'
    | 'hares'
    | 'testtube';
  const setActiveTab = (tab: 'force' | 'moments' | 'utube' | 'hares' | 'testtube') => updateObservations({ activeTab: tab });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 2 Mechanics Practicals Hub',
      hubSubtitle: 'Interactive virtual laboratory investigations covering all 5 official NIE A/L Physics syllabus practicals for Unit 2 Mechanics.',
      forceTab: '5. Force Parallelogram & Triangle',
      momentsTab: '6. Principle of Moments & Mass',
      utubeTab: '7. U-Tube Immiscible Liquids',
      haresTab: '8. Hare’s Apparatus & Slope',
      testtubeTab: '9. Loaded Test Tube Flotation',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 2 යාන්ත්‍ර විද්‍යාව ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle: 'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා විෂය නිර්දේශයේ ඒකක 2 යාන්ත්‍ර විද්‍යාව ප්‍රායෝගික පරීක්ෂණ 5 සඳහා අන්තර්ක්‍රියාකාරී පරිසරය.',
      forceTab: '5. බල සමාන්තරාස්‍රය සහ ත්‍රිකෝණය',
      momentsTab: '6. ඝූර්ණ මූලධර්මය සහ ස්කන්ධය',
      utubeTab: '7. U-නළය (මිශ්‍ර නොවන ද්‍රව)',
      haresTab: '8. හේයාර් උපකරණය සහ බෑවුම',
      testtubeTab: '9. පරීක්ෂණ නළය (පාවීමේ නියමය)',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Hub Top Bar */}
      <div className="p-6 rounded-2xl bg-white border border-[#DFE8EF] shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center text-white shadow-sm">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#14243A] font-serif">
              {t.hubTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              {t.hubSubtitle}
            </p>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DFE8EF]">
          <Button
            size="sm"
            variant={activeTab === 'force' ? 'default' : 'outline'}
            onClick={() => setActiveTab('force')}
            className={
              activeTab === 'force'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <GitBranch className="w-4 h-4 mr-1.5" />
            {t.forceTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'moments' ? 'default' : 'outline'}
            onClick={() => setActiveTab('moments')}
            className={
              activeTab === 'moments'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Scale className="w-4 h-4 mr-1.5" />
            {t.momentsTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'utube' ? 'default' : 'outline'}
            onClick={() => setActiveTab('utube')}
            className={
              activeTab === 'utube'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Waves className="w-4 h-4 mr-1.5" />
            {t.utubeTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'hares' ? 'default' : 'outline'}
            onClick={() => setActiveTab('hares')}
            className={
              activeTab === 'hares'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Droplets className="w-4 h-4 mr-1.5" />
            {t.haresTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'testtube' ? 'default' : 'outline'}
            onClick={() => setActiveTab('testtube')}
            className={
              activeTab === 'testtube'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Ship className="w-4 h-4 mr-1.5" />
            {t.testtubeTab}
          </Button>
        </div>
      </div>

      {/* Render Active Practical */}
      <div className="transition-all duration-200">
        {activeTab === 'force' && <ForceParallelogramPractical locale={locale} />}
        {activeTab === 'moments' && <PrincipleOfMomentsPractical locale={locale} />}
        {activeTab === 'utube' && <UTubePractical locale={locale} />}
        {activeTab === 'hares' && <HaresApparatusPractical locale={locale} />}
        {activeTab === 'testtube' && <WeightedTestTubePractical locale={locale} />}
      </div>
    </div>
  );
};
