'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import {
  SimplePendulumPractical,
  HelicalSpringPractical,
  SonometerPractical,
  ResonanceTubePractical,
  PrismRefractionPractical,
  PrismCriticalAnglePractical,
  DiffractionGratingPractical,
  LensFocalLengthPractical,
} from './index';
import {
  Activity,
  ArrowUpDown,
  Music,
  Waves,
  Eye,
  Sparkles,
  Scan,
  FlaskConical,
} from 'lucide-react';
import { usePracticalWork } from '@/shared/practicals';

interface WavesPracticalsHubProps {
  locale?: Locale;
}

export type WavesTab =
  | 'pendulum'
  | 'spring'
  | 'sonometer'
  | 'resonance'
  | 'prism_critical'
  | 'prism'
  | 'lens'
  | 'grating';

export const WavesPracticalsHub: React.FC<WavesPracticalsHubProps> = ({
  locale = 'en',
}) => {
  const { observations, updateObservations } = usePracticalWork({
    experimentId: 'exp-waves-hub',
    defaultObservations: { activeTab: 'pendulum' },
  });

  const activeTab = (observations.activeTab || 'pendulum') as WavesTab;
  const setActiveTab = (tab: WavesTab) => updateObservations({ activeTab: tab });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 3 Oscillations & Waves Practicals Hub',
      hubSubtitle:
        'Interactive virtual laboratory investigations covering official NIE A/L Physics syllabus practicals for Unit 3 Oscillations & Waves (Practicals 10–21.2).',
      pendulumTab: '10. Simple Pendulum (Exp 10)',
      springTab: '11. Helical Spring (Exp 11)',
      sonometerTab: '12 & 13. Sonometer (Exp 12–13)',
      resonanceTab: '14 & 15. Resonance Tube (Exp 14–15)',
      prismCriticalTab: '18. Prism Critical Angle (Exp 18)',
      prismTab: '17, 19 & 20. Spectrometer & Prism (Exp 17, 19, 20)',
      lensTab: '21.1 & 21.2. Convex & Concave Lenses',
      gratingTab: 'Additional: Diffraction Grating Spectrometer',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 3 දෝලන සහ තරංග ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle:
        'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා විෂය නිර්දේශයේ ඒකක 3 දෝලන සහ තරංග ප්‍රායෝගික පරීක්ෂණ (පරීක්ෂණ 10–21.2) සඳහා සම්පූර්ණ අන්තර්ක්‍රියාකාරී පරිසරය.',
      pendulumTab: '10. සරල පැද්දුම (පරීක්ෂණ 10)',
      springTab: '11. හෙලික්සීය දුන්න (පරීක්ෂණ 11)',
      sonometerTab: '12 සහ 13. තන්තුමානය (පරීක්ෂණ 12–13)',
      resonanceTab: '14 සහ 15. අනුනාද නළය (පරීක්ෂණ 14–15)',
      prismCriticalTab: '18. ප්‍රිස්ම අවධි කෝණ ක්‍රමය (පරීක්ෂණ 18)',
      prismTab: '17, 19 සහ 20. වර්ණාවලීමානය සහ ප්‍රිස්ම (පරීක්ෂණ 17, 19, 20)',
      lensTab: '21.1 සහ 21.2. උත්තල සහ අවතල කාච',
      gratingTab: 'අතිරේක: විවර්තන දැලිස වර්ණාවලීමානය',
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
            variant={activeTab === 'pendulum' ? 'default' : 'outline'}
            onClick={() => setActiveTab('pendulum')}
            className={
              activeTab === 'pendulum'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Activity className="w-4 h-4 mr-1.5" />
            {t.pendulumTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'spring' ? 'default' : 'outline'}
            onClick={() => setActiveTab('spring')}
            className={
              activeTab === 'spring'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <ArrowUpDown className="w-4 h-4 mr-1.5" />
            {t.springTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'sonometer' ? 'default' : 'outline'}
            onClick={() => setActiveTab('sonometer')}
            className={
              activeTab === 'sonometer'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Music className="w-4 h-4 mr-1.5" />
            {t.sonometerTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'resonance' ? 'default' : 'outline'}
            onClick={() => setActiveTab('resonance')}
            className={
              activeTab === 'resonance'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Waves className="w-4 h-4 mr-1.5" />
            {t.resonanceTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'prism_critical' ? 'default' : 'outline'}
            onClick={() => setActiveTab('prism_critical')}
            className={
              activeTab === 'prism_critical'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Eye className="w-4 h-4 mr-1.5" />
            {t.prismCriticalTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'prism' ? 'default' : 'outline'}
            onClick={() => setActiveTab('prism')}
            className={
              activeTab === 'prism'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Scan className="w-4 h-4 mr-1.5" />
            {t.prismTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'lens' ? 'default' : 'outline'}
            onClick={() => setActiveTab('lens')}
            className={
              activeTab === 'lens'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Scan className="w-4 h-4 mr-1.5" />
            {t.lensTab}
          </Button>

          <Button
            size="sm"
            variant={activeTab === 'grating' ? 'default' : 'outline'}
            onClick={() => setActiveTab('grating')}
            className={
              activeTab === 'grating'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Sparkles className="w-4 h-4 mr-1.5" />
            {t.gratingTab}
          </Button>
        </div>
      </div>

      {/* Render Active Practical */}
      <div>
        {activeTab === 'pendulum' && <SimplePendulumPractical locale={locale} />}
        {activeTab === 'spring' && <HelicalSpringPractical locale={locale} />}
        {activeTab === 'sonometer' && <SonometerPractical locale={locale} />}
        {activeTab === 'resonance' && <ResonanceTubePractical locale={locale} />}
        {activeTab === 'prism_critical' && <PrismCriticalAnglePractical locale={locale} />}
        {activeTab === 'prism' && <PrismRefractionPractical locale={locale} />}
        {activeTab === 'lens' && <LensFocalLengthPractical locale={locale} />}
        {activeTab === 'grating' && <DiffractionGratingPractical locale={locale} />}
      </div>
    </div>
  );
};
