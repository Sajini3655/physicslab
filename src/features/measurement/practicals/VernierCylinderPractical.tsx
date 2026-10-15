'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { VernierCalipers } from '../instruments/VernierCalipers';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database } from 'lucide-react';
import { applyZeroCorrection, calculateCylinderMaterialVolume } from '../physics/calculations';

interface VernierCylinderPracticalProps {
  locale?: Locale;
}

export const VernierCylinderPractical: React.FC<VernierCylinderPracticalProps> = ({
  locale = 'en',
}) => {
  const [cylinderType, setCylinderType] = useState<'closed_bottom' | 'open_tube'>('closed_bottom');

  // Table rows: 3 trials each for D_ext, d_int, height_ext, and cavity_depth
  const [extTrials, setExtTrials] = useState<[string, string, string]>(['', '', '']);
  const [intTrials, setIntTrials] = useState<[string, string, string]>(['', '', '']);
  const [heightExtTrials, setHeightExtTrials] = useState<[string, string, string]>(['', '', '']);
  const [depthCavityTrials, setDepthCavityTrials] = useState<[string, string, string]>(['', '', '']);
  const [zeroError, setZeroError] = useState<string>('0.0');

  const t = {
    en: {
      title: 'Practical 1: Internal/External Radii & Material Volume of a Cylinder',
      aim: 'Aim: To determine the internal and external radii, external height, internal cavity depth, and volume of the material of a cylinder using Vernier Calipers.',
      apparatus: 'Apparatus: Vernier Calipers (Least Count 0.1 mm), Cylindrical specimen (Closed-bottom calorimeter vessel or open hollow pipe).',
      theoryTitle: 'Underlying Theory & Distinctions (Radius vs. Diameter, Tube vs. Closed Vessel)',
      theoryText: 'Vernier calipers measure diameters directly: outside jaws measure external diameter D, inside jaws measure internal diameter d, and the depth probe measures cavity depth h. The corresponding radii are calculated by halving: External Radius R = D / 2 and Internal Radius r = d / 2. For an open hollow pipe (length H), solid volume is V_solid = π(R² - r²)H. For a closed-bottom cylinder (e.g. calorimeter vessel with external height H and internal depth h), the base thickness is t_base = H - h, and material volume is V_solid = πR²H - πr²h. Zero error correction: Corrected = Observed - (Signed Zero Error).',
      procedure: 'Procedure: 1. Determine least count and check zero error. 2. Measure external diameter D at 3 orientations. 3. Measure internal diameter d using internal jaws. 4. Measure external height H with outside jaws. 5. If closed-bottom, measure internal depth h with the depth probe. 6. Correct for zero error, compute radii (R = D/2, r = d/2), and calculate material volume.',
      cylinderModel: 'Cylinder Specimen Geometry:',
      closedBottom: 'Closed-Bottom Cylinder (Calorimeter / Vessel)',
      openTube: 'Open Hollow Pipe (Tube)',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      trial1: 'Orientation / Pos 1 (mm)',
      trial2: 'Orientation / Pos 2 (mm)',
      trial3: 'Orientation / Pos 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      extDia: 'External Diameter (D) [Outside Jaws]',
      intDia: 'Internal Diameter (d) [Inside Jaws]',
      heightExt: 'External Height (H) [Outside Jaws]',
      depthCavity: 'Cavity Depth (h) [Depth Probe]',
      lengthTube: 'Length / Height (H) [Depth Probe / Jaws]',
      zeroErrorLabel: 'Zero Error (signed, mm):',
      calcTitle: 'Calculated Results & Material Volume',
      extRadius: 'External Radius R = D / 2:',
      intRadius: 'Internal Radius r = d / 2:',
      baseThickness: 'Base Thickness t_base = H - h:',
      wallThickness: 'Wall Thickness t_wall = R - r:',
      cavityVol: 'Internal Cavity Volume (V_cavity):',
      solidVol: 'Solid Material Volume (V_solid):',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 1: සිලින්ඩරයක අභ්‍යන්තර/බාහිර අරය සහ ද්‍රව්‍යයේ පරිමාව නිර්ණය කිරීම',
      aim: 'අරමුණ: වර්නියර් කැලිපරය භාවිතයෙන් සිලින්ඩරයක අභ්‍යන්තර සහ බාහිර අරයන්, උස, කුහර ගැඹුර සහ ද්‍රව්‍යයේ පරිමාව නිරවද්‍යව නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: වර්නියර් කැලිපරය (කුඩාම මිනුම 0.1 mm), සිලින්ඩරාකාර නිදර්ශකය (පතුල වැසූ කැලරිමීටර බඳුනක් හෝ විවෘත නලයක්).',
      theoryTitle: 'මූලධර්මය සහ පැහැදිලි කිරීම (අරය සහ විෂ්කම්භය අතර වෙනස, විවෘත නල සහ පතුල වැසූ සිලින්ඩර)',
      theoryText: 'වර්නියර් කැලිපරය මගින් මනිනු ලබන්නේ විෂ්කම්භයන්ය: බාහිර හනුවලින් බාහිර විෂ්කම්භය D, අභ්‍යන්තර හනුවලින් අභ්‍යන්තර විෂ්කම්භය d, සහ ගැඹුරු කූරෙන් ගැඹුර h මනියි. අරයන් ලබාගන්නේ අඩක් කිරීමෙනි: බාහිර අරය R = D / 2 සහ අභ්‍යන්තර අරය r = d / 2 වේ. විවෘත නලයක පරිමාව V_solid = π(R² - r²)H වේ. පතුල සහිත බඳුනක (උස H සහ අභ්‍යන්තර ගැඹුර h) පතුලේ ඝනකම t_base = H - h වන අතර, ද්‍රව්‍ය පරිමාව V_solid = πR²H - πr²h මගින් ලැබේ. ශූන්‍ය දෝෂ ශෝධනය: ශෝධිත = නිරීක්ෂිත - (ලකුණ සහිත ශූන්‍ය දෝෂය).',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම හා ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. විවිධ දිශා 3කින් බාහිර විෂ්කම්භය D මැනීම. 3. අභ්‍යන්තර හනුවලින් d මැනීම. 4. බාහිර උස H මැනීම. 5. පතුල සහිත නම් ගැඹුරු කූරෙන් h මැනීම. 6. අරයන් (R = D/2, r = d/2) හා පරිමාව ගණනය කිරීම.',
      cylinderModel: 'සිලින්ඩර නිදර්ශකයේ ජ්‍යාමිතිය:',
      closedBottom: 'පතුල වැසූ සිලින්ඩරය (කැලරිමීටර බඳුන)',
      openTube: 'විවෘත කුහර නලය (දෙකෙළවර විවෘත)',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      trial1: 'දිශාව / ස්ථානය 1 (mm)',
      trial2: 'දිශාව / ස්ථානය 2 (mm)',
      trial3: 'දිශාව / ස්ථානය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      extDia: 'බාහිර විෂ්කම්භය (D) [බාහිර හනු]',
      intDia: 'අභ්‍යන්තර විෂ්කම්භය (d) [අභ්‍යන්තර හනු]',
      heightExt: 'බාහිර උස (H) [බාහිර හනු]',
      depthCavity: 'කුහරයේ ගැඹුර (h) [ගැඹුරු කූර]',
      lengthTube: 'නලයේ දිග / උස (H) [ගැඹුරු කූර / හනු]',
      zeroErrorLabel: 'ශූන්‍ය දෝෂය (ලකුණ සමඟ, mm):',
      calcTitle: 'ගණනය කළ ප්‍රතිඵල සහ ද්‍රව්‍ය පරිමාව',
      extRadius: 'බාහිර අරය R = D / 2:',
      intRadius: 'අභ්‍යන්තර අරය r = d / 2:',
      baseThickness: 'පතුලේ ඝනකම t_base = H - h:',
      wallThickness: 'බිත්ති ඝනකම t_wall = R - r:',
      cavityVol: 'අභ්‍යන්තර කුහර පරිමාව (V_cavity):',
      solidVol: 'ද්‍රව්‍යයේ ඝන පරිමාව (V_solid):',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    setExtTrials(['25.4', '25.3', '25.5']);
    setIntTrials(['18.6', '18.7', '18.5']);
    setHeightExtTrials(['48.0', '48.2', '48.1']);
    setDepthCavityTrials(['44.0', '44.2', '44.1']);
    setZeroError('+0.1');
  };

  const handleClear = () => {
    setExtTrials(['', '', '']);
    setIntTrials(['', '', '']);
    setHeightExtTrials(['', '', '']);
    setDepthCavityTrials(['', '', '']);
    setZeroError('0.0');
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(2));
  };

  const ze = parseFloat(zeroError) || 0.0;
  const meanExt = parseMean(extTrials);
  const meanInt = parseMean(intTrials);
  const meanH = parseMean(heightExtTrials);
  const meanCav = parseMean(depthCavityTrials);

  const corrExt = meanExt !== null ? applyZeroCorrection(meanExt, ze) : null;
  const corrInt = meanInt !== null ? applyZeroCorrection(meanInt, ze) : null;
  const corrH = meanH !== null ? applyZeroCorrection(meanH, ze) : null;
  const corrCav = meanCav !== null ? applyZeroCorrection(meanCav, ze) : null;

  const rExt = corrExt !== null ? Number((corrExt / 2).toFixed(2)) : null;
  const rInt = corrInt !== null ? Number((corrInt / 2).toFixed(2)) : null;

  const volCalc = rExt !== null && rInt !== null && corrH !== null
    ? calculateCylinderMaterialVolume({
        geometry: cylinderType,
        rExt,
        rInt,
        heightExt: corrH,
        depthCavity: cylinderType === 'closed_bottom' ? (corrCav ?? corrH) : undefined,
      })
    : null;

  const cavityVol = volCalc ? volCalc.cavityVolume : null;
  const solidVol = volCalc ? volCalc.solidVolume : null;
  const baseThickness = volCalc?.baseThickness ?? null;
  const wallThickness = rExt !== null && rInt !== null ? Number((rExt - rInt).toFixed(2)) : null;

  return (
    <div className="space-y-6">
      {/* Aim & Theory Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p><strong>{t.apparatus}</strong></p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.theoryTitle}</span>
            <p>{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.procedure}
          </p>
        </CardContent>
      </Card>

      {/* Interactive Instrument Workspace */}
      <VernierCalipers locale={locale} leastCount={0.1} />

      {/* Observation Table Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div>
            <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.obsTable}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-semibold text-[#64748B]">{t.cylinderModel}</span>
              <Button
                size="sm"
                variant={cylinderType === 'closed_bottom' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => setCylinderType('closed_bottom')}
              >
                {t.closedBottom}
              </Button>
              <Button
                size="sm"
                variant={cylinderType === 'open_tube' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => setCylinderType('open_tube')}
              >
                {t.openTube}
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#0F766E] border-[#0F766E]/40"
              onClick={handleLoadSample}
            >
              <Database className="w-3.5 h-3.5 mr-1" /> {t.loadSample}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-8 text-[#64748B]"
              onClick={handleClear}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> {t.clearTable}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#14243A] dark:text-[#F8FAFC]"
              onClick={() => window.print()}
            >
              <Printer className="w-3.5 h-3.5 mr-1" /> {t.printSheet}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          {/* Zero Error Input */}
          <div className="flex items-center gap-2 max-w-xs">
            <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.zeroErrorLabel}
            </label>
            <input
              type="text"
              value={zeroError}
              onChange={(e) => setZeroError(e.target.value)}
              placeholder="0.0"
              className="w-20 px-2 py-1 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono text-center focus:outline-[#0F766E]"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8]">
                  <th className="p-3 font-semibold">{t.param}</th>
                  <th className="p-3 font-semibold">{t.trial1}</th>
                  <th className="p-3 font-semibold">{t.trial2}</th>
                  <th className="p-3 font-semibold">{t.trial3}</th>
                  <th className="p-3 font-semibold">{t.meanObs}</th>
                  <th className="p-3 font-semibold text-[#0F766E]">{t.correctedVal}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D] font-mono">
                {/* Ext Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.extDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[0]}
                      onChange={(e) => setExtTrials([e.target.value, extTrials[1], extTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[1]}
                      onChange={(e) => setExtTrials([extTrials[0], e.target.value, extTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[2]}
                      onChange={(e) => setExtTrials([extTrials[0], extTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanExt !== null ? `${meanExt} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrExt !== null ? `${corrExt} mm` : '—'}</td>
                </tr>

                {/* Int Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.intDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[0]}
                      onChange={(e) => setIntTrials([e.target.value, intTrials[1], intTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[1]}
                      onChange={(e) => setIntTrials([intTrials[0], e.target.value, intTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[2]}
                      onChange={(e) => setIntTrials([intTrials[0], intTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanInt !== null ? `${meanInt} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrInt !== null ? `${corrInt} mm` : '—'}</td>
                </tr>

                {/* External Height */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">
                    {cylinderType === 'closed_bottom' ? t.heightExt : t.lengthTube}
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={heightExtTrials[0]}
                      onChange={(e) => setHeightExtTrials([e.target.value, heightExtTrials[1], heightExtTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={heightExtTrials[1]}
                      onChange={(e) => setHeightExtTrials([heightExtTrials[0], e.target.value, heightExtTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={heightExtTrials[2]}
                      onChange={(e) => setHeightExtTrials([heightExtTrials[0], heightExtTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanH !== null ? `${meanH} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrH !== null ? `${corrH} mm` : '—'}</td>
                </tr>

                {/* Cavity Depth (for closed-bottom only) */}
                {cylinderType === 'closed_bottom' && (
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.depthCavity}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={depthCavityTrials[0]}
                        onChange={(e) => setDepthCavityTrials([e.target.value, depthCavityTrials[1], depthCavityTrials[2]])}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={depthCavityTrials[1]}
                        onChange={(e) => setDepthCavityTrials([depthCavityTrials[0], e.target.value, depthCavityTrials[2]])}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={depthCavityTrials[2]}
                        onChange={(e) => setDepthCavityTrials([depthCavityTrials[0], depthCavityTrials[1], e.target.value])}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{meanCav !== null ? `${meanCav} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">{corrCav !== null ? `${corrCav} mm` : '—'}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Derived Quantities & Volume Output */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              {t.calcTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.extRadius}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {rExt !== null ? `${rExt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.intRadius}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {rInt !== null ? `${rInt} mm` : '—'}
                </span>
              </div>
              {cylinderType === 'closed_bottom' ? (
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.baseThickness}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {baseThickness !== null ? `${baseThickness} mm` : '—'}
                  </span>
                </div>
              ) : (
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.wallThickness}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {wallThickness !== null ? `${wallThickness} mm` : '—'}
                  </span>
                </div>
              )}
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.cavityVol}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {cavityVol !== null ? `${cavityVol} mm³` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.solidVol}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {solidVol !== null ? `${solidVol} mm³` : '—'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
