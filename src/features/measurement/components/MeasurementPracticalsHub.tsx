'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import {
  VernierCylinderPractical,
  MicrometerCoinPractical,
  SpherometerCurvaturePractical,
  TravellingMicroscopePractical,
  DensitySolidPractical,
} from '../practicals';
import { FlaskConical, Target, Disc, CircleDot, Microscope, Scale } from 'lucide-react';

import { usePracticalWork } from '@/shared/practicals';

interface MeasurementPracticalsHubProps {
  locale?: Locale;
}

export const MeasurementPracticalsHub: React.FC<MeasurementPracticalsHubProps> = ({
  locale = 'en',
}) => {
  const { observations, updateObservations } = usePracticalWork({
    experimentId: 'exp-measurement-hub',
    defaultObservations: { activeTab: 'vernier' },
  });
  const activeTab = (observations.activeTab || 'vernier') as
    | 'vernier'
    | 'micrometer'
    | 'spherometer'
    | 'microscope'
    | 'density';
  const setActiveTab = (tab: 'vernier' | 'micrometer' | 'spherometer' | 'microscope' | 'density') =>
    updateObservations({ activeTab: tab });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 1 Practicals Hub',
      hubSubtitle: 'Complete hands-on virtual laboratory practicals for all 5 official NIE Grade 12 syllabus investigations.',
      vernierTab: '1. Vernier Calipers (Cylinder)',
      micrometerTab: '2. Micrometer Gauge (Coin)',
      spherometerTab: '3. Spherometer (Curvature)',
      microscopeTab: '4. Travelling Microscope (Tube)',
      densityTab: '5. Solid Density & Balance',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 1 ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle: 'ජාතික අධ්‍යාපන ආයතන (NIE) 12 ශ්‍රේණියේ නිල විෂය නිර්දේශයේ ප්‍රායෝගික පරීක්ෂණ 5 සඳහා අන්තර්ක්‍රියාකාරී පරිසරය.',
      vernierTab: '1. වර්නියර් කැලිපරය (සිලින්ඩරය)',
      micrometerTab: '2. මයික්‍රොමීටරය (කාසිය)',
      spherometerTab: '3. ගෝලමානය (වක්‍රතාව)',
      microscopeTab: '4. චල අන්වීක්ෂය (රබර් නලය)',
      densityTab: '5. ඝනත්ව නිර්ණය සහ තුලාව',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Hub Top Bar */}
      <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.hubTitle}
            </h2>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              {t.hubSubtitle}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
          <Button
            size="sm"
            variant={activeTab === 'vernier' ? 'default' : 'outline'}
            className="text-xs h-8 rounded-xl font-medium"
            onClick={() => setActiveTab('vernier')}
          >
            <Target className="w-3.5 h-3.5 mr-1" /> {t.vernierTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'micrometer' ? 'default' : 'outline'}
            className="text-xs h-8 rounded-xl font-medium"
            onClick={() => setActiveTab('micrometer')}
          >
            <CircleDot className="w-3.5 h-3.5 mr-1" /> {t.micrometerTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'spherometer' ? 'default' : 'outline'}
            className="text-xs h-8 rounded-xl font-medium"
            onClick={() => setActiveTab('spherometer')}
          >
            <Disc className="w-3.5 h-3.5 mr-1" /> {t.spherometerTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'microscope' ? 'default' : 'outline'}
            className="text-xs h-8 rounded-xl font-medium"
            onClick={() => setActiveTab('microscope')}
          >
            <Microscope className="w-3.5 h-3.5 mr-1" /> {t.microscopeTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'density' ? 'default' : 'outline'}
            className="text-xs h-8 rounded-xl font-medium"
            onClick={() => setActiveTab('density')}
          >
            <Scale className="w-3.5 h-3.5 mr-1" /> {t.densityTab}
          </Button>
        </div>
      </div>

      {/* Active Practical Content */}
      <div className="pt-2">
        {activeTab === 'vernier' && <VernierCylinderPractical locale={locale} />}
        {activeTab === 'micrometer' && <MicrometerCoinPractical locale={locale} />}
        {activeTab === 'spherometer' && <SpherometerCurvaturePractical locale={locale} />}
        {activeTab === 'microscope' && <TravellingMicroscopePractical locale={locale} />}
        {activeTab === 'density' && <DensitySolidPractical locale={locale} />}
      </div>
    </div>
  );
};
