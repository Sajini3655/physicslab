'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import {
  SonometerPractical,
  ResonanceTubePractical,
  PrismRefractionPractical,
  DiffractionGratingPractical,
  LensFocalLengthPractical,
} from './index';
import { Music, Waves, Eye, Sparkles, Scan, FlaskConical } from 'lucide-react';

interface WavesPracticalsHubProps {
  locale?: Locale;
}

export const WavesPracticalsHub: React.FC<WavesPracticalsHubProps> = ({
  locale = 'en',
}) => {
  const [activeTab, setActiveTab] = useState<'sonometer' | 'resonance' | 'prism' | 'grating' | 'lens'>('sonometer');

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 3 Oscillations & Waves Practicals Hub',
      hubSubtitle: 'Interactive virtual laboratory investigations covering all 5 official NIE A/L Physics syllabus practicals for Unit 3 Oscillations & Waves.',
      sonometerTab: '1. Sonometer & Transverse Vibrations',
      resonanceTab: '2. Resonance Tube Speed of Sound',
      prismTab: '3. Spectrometer Prism Refraction',
      gratingTab: '4. Diffraction Grating Wavelength',
      lensTab: '5. Convex Lens Displacement Method',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 3 දෝලන සහ තරංග ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle: 'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා විෂය නිර්දේශයේ ඒකක 3 දෝලන සහ තරංග ප්‍රායෝගික පරීක්ෂණ 5 සඳහා අන්තර්ක්‍රියාකාරී පරිසරය.',
      sonometerTab: '1. තන්තුමානය සහ තීර්යක් කම්පන',
      resonanceTab: '2. අනුනාද නළය සහ ධ්වනි ප්‍රවේගය',
      prismTab: '3. වර්ණාවලීමානය සහ ප්‍රිස්ම වර්තනය',
      gratingTab: '4. විවර්තන දැලිස සහ තරංග ආයාමය',
      lensTab: '5. විස්ථාපන ක්‍රමයෙන් උත්තල කාචය',
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
            variant={activeTab === 'prism' ? 'default' : 'outline'}
            onClick={() => setActiveTab('prism')}
            className={
              activeTab === 'prism'
                ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
                : 'text-[#475569] border-[#DFE8EF] hover:bg-slate-50'
            }
          >
            <Eye className="w-4 h-4 mr-1.5" />
            {t.prismTab}
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
        </div>
      </div>

      {/* Render Active Practical */}
      <div>
        {activeTab === 'sonometer' && <SonometerPractical locale={locale} />}
        {activeTab === 'resonance' && <ResonanceTubePractical locale={locale} />}
        {activeTab === 'prism' && <PrismRefractionPractical locale={locale} />}
        {activeTab === 'grating' && <DiffractionGratingPractical locale={locale} />}
        {activeTab === 'lens' && <LensFocalLengthPractical locale={locale} />}
      </div>
    </div>
  );
};
