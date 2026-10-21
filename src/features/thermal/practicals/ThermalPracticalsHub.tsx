'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import {
  BoylesLawPractical,
  CalorimetryMetalPractical,
  LatentHeatFusionPractical,
  LatentHeatVaporizationPractical,
  NewtonsCoolingPractical,
  SearlesBarPractical,
  HumidityDewPointPractical,
} from './index';
import { Wind, CupSoda, Snowflake, CloudRain, Flame, Gauge, FlaskConical, Droplets } from 'lucide-react';
import { usePracticalWork } from '@/shared/practicals';

interface ThermalPracticalsHubProps {
  locale?: Locale;
}

export const ThermalPracticalsHub: React.FC<ThermalPracticalsHubProps> = ({
  locale = 'en',
}) => {
  const { observations, updateObservations } = usePracticalWork({
    experimentId: 'exp-thermal-hub',
    defaultObservations: { activeTab: 'boyle' },
  });
  const activeTab = (observations.activeTab || 'boyle') as
    | 'boyle'
    | 'calorimetry'
    | 'fusion'
    | 'vaporization'
    | 'cooling'
    | 'searle'
    | 'humidity';
  const setActiveTab = (tab: 'boyle' | 'calorimetry' | 'fusion' | 'vaporization' | 'cooling' | 'searle' | 'humidity') =>
    updateObservations({ activeTab: tab });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 4 Thermal Physics Practicals Hub',
      hubSubtitle:
        'Interactive virtual laboratory investigations covering official NIE A/L Physics syllabus practicals (Exp 22–30) for Unit 4 Thermal Physics.',
      boyleTab: "22–24. Boyle & Gas Laws (Exp 22–24)",
      calorimetryTab: '25. Metal Specific Heat (Exp 25)',
      coolingTab: "26. Newton's Law of Cooling (Exp 26)",
      fusionTab: '27. Latent Heat of Ice Fusion (Exp 27)',
      vaporizationTab: '28. Latent Heat of Steam Vaporization (Exp 28)',
      humidityTab: '29. Relative Humidity (Dew Point) (Exp 29)',
      searleTab: "30. Searle's Bar Conductivity (Exp 30)",
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 4 තාප භෞතික විද්‍යාව ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle:
        'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා විෂය නිර්දේශයේ ඒකක 4 තාප භෞතික විද්‍යාව ප්‍රායෝගික පරීක්ෂණ (පරීක්ෂණ 22–30) සඳහා අන්තර්ක්‍රියාකාරී පරිසරය.',
      boyleTab: '22–24. බොයිල් සහ වායු නීති (පරීක්ෂණ 22–24)',
      calorimetryTab: '25. ලෝහයක විශිෂ්ට තාප ධාරිතාව (පරීක්ෂණ 25)',
      coolingTab: '26. නිව්ටන්ගේ සිසිලන නියමය (පරීක්ෂණ 26)',
      fusionTab: '27. අයිස් විලයනයේ විශිෂ්ට ගුප්ත තාපය (පරීක්ෂණ 27)',
      vaporizationTab: '28. ජල වාෂ්පීකරණයේ විශිෂ්ට ගුප්ත තාපය (පරීක්ෂණ 28)',
      humidityTab: '29. සාපේක්ෂ ආර්ද්‍රතාව (තුෂාර අංකය) (පරීක්ෂණ 29)',
      searleTab: '30. සර්ල්ගේ දණ්ඩෙන් තාප සන්නායකතාව (පරීක්ෂණ 30)',
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
            <p className="text-xs sm:text-sm text-[#475569]">{t.hubSubtitle}</p>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DFE8EF]">
          <Button
            size="sm"
            variant={activeTab === 'boyle' ? 'default' : 'outline'}
            onClick={() => setActiveTab('boyle')}
            className={
              activeTab === 'boyle'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <Wind className="w-4 h-4" />
            {t.boyleTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'calorimetry' ? 'default' : 'outline'}
            onClick={() => setActiveTab('calorimetry')}
            className={
              activeTab === 'calorimetry'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <CupSoda className="w-4 h-4" />
            {t.calorimetryTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'fusion' ? 'default' : 'outline'}
            onClick={() => setActiveTab('fusion')}
            className={
              activeTab === 'fusion'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <Snowflake className="w-4 h-4" />
            {t.fusionTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'vaporization' ? 'default' : 'outline'}
            onClick={() => setActiveTab('vaporization')}
            className={
              activeTab === 'vaporization'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <CloudRain className="w-4 h-4" />
            {t.vaporizationTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'cooling' ? 'default' : 'outline'}
            onClick={() => setActiveTab('cooling')}
            className={
              activeTab === 'cooling'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <Flame className="w-4 h-4" />
            {t.coolingTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'searle' ? 'default' : 'outline'}
            onClick={() => setActiveTab('searle')}
            className={
              activeTab === 'searle'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <Gauge className="w-4 h-4" />
            {t.searleTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'humidity' ? 'default' : 'outline'}
            onClick={() => setActiveTab('humidity')}
            className={
              activeTab === 'humidity'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white gap-1.5'
                : 'text-[#475569] hover:text-[#14243A] gap-1.5'
            }
          >
            <Droplets className="w-4 h-4" />
            {t.humidityTab}
          </Button>
        </div>
      </div>

      {/* Render Active Practical Component */}
      <div className="transition-all duration-150">
        {activeTab === 'boyle' && <BoylesLawPractical locale={locale} />}
        {activeTab === 'calorimetry' && <CalorimetryMetalPractical locale={locale} />}
        {activeTab === 'fusion' && <LatentHeatFusionPractical locale={locale} />}
        {activeTab === 'vaporization' && <LatentHeatVaporizationPractical locale={locale} />}
        {activeTab === 'cooling' && <NewtonsCoolingPractical locale={locale} />}
        {activeTab === 'searle' && <SearlesBarPractical locale={locale} />}
        {activeTab === 'humidity' && <HumidityDewPointPractical locale={locale} />}
      </div>
    </div>
  );
};
