'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Gauge, CheckCircle2, AlertCircle } from 'lucide-react';
import { verifyBoylesLaw } from '../physics/calculations';

interface BoylesLawPracticalProps {
  locale?: Locale;
}

interface BoylesTrial {
  id: number;
  openTubeReadingCm: string;
  closedTubeReadingCm: string;
  airColumnLengthCm: string;
}

export const BoylesLawPractical: React.FC<BoylesLawPracticalProps> = ({
  locale = 'en',
}) => {
  const [barometricPressureCmHg, setBarometricPressureCmHg] = useState<string>('76.0');

  const [trials, setTrials] = useState<BoylesTrial[]>([
    { id: 1, openTubeReadingCm: '65.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '18.0' },
    { id: 2, openTubeReadingCm: '55.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '20.2' },
    { id: 3, openTubeReadingCm: '45.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '23.0' },
    { id: 4, openTubeReadingCm: '35.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '26.8' },
    { id: 5, openTubeReadingCm: '25.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '32.1' },
  ]);

  const t = {
    en: {
      title: 'Practical 4.1: Verification of Boyle’s Law for a Gas',
      aim: 'Aim: To verify Boyle’s law (P · V = constant at constant temperature) for a fixed mass of dry air and determine atmospheric pressure graphically.',
      apparatus: 'Apparatus: Boyle’s law apparatus (graduated closed glass tube and open reservoir tube connected by flexible thick rubber tubing, filled with clean mercury), vertical metre scale, Fortin barometer.',
      theoryTitle: 'Physical Principle & Boyle’s Law',
      theoryText: 'For a fixed mass of an ideal gas at constant temperature, pressure is inversely proportional to volume:\n\nP · V = constant   ⟹   P ∝ 1 / V\n\nSince the closed glass tube has a uniform internal cross-sectional area A, the volume of the trapped air column is directly proportional to its length L (V = A · L):\n\nP · L = constant\n\nTotal absolute pressure P of the trapped air is:\n  P = H + h = H + (y_open - y_closed)\nwhere:\n• H is atmospheric pressure (from Fortin barometer, approx 76.0 cmHg)\n• h is the difference in mercury meniscus levels between the open and closed tubes\n\nPlotting total pressure P against 1/L yields a straight line passing through the origin. Alternatively, plotting difference h against 1/L gives a line with negative intercept -H on the vertical pressure axis.',
      procedure: 'Procedure: 1. Record ambient room temperature and barometric pressure H. 2. Level the apparatus vertically. 3. Adjust the movable reservoir tube to change the mercury level difference h in both positive (above) and negative (below) directions. 4. For each position, allow temperature to equalize, then record closed tube mercury level, open tube mercury level, and trapped air column length L. 5. Calculate total pressure P = H + h and compute the product P · L.',
      obsTitle: 'Experimental Observations (Pressure vs Air Column Length)',
      colTrial: 'Trial',
      colOpen: 'Open Tube Level y₁ (cm)',
      colClosed: 'Closed Tube Level y₂ (cm)',
      colHead: 'Difference h (cmHg)',
      colLength: 'Air Length L (cm)',
      colPressure: 'Total Pressure P (cmHg)',
      colProduct: 'P · L Product (cmHg · cm)',
      calcSummaryTitle: 'Analytical Verification of Boyle’s Law',
      meanProduct: 'Mean (P · L) Product:',
      barometricLabel: 'Atmospheric Barometer H:',
      percentageDiff: 'Max Deviation from Mean:',
      verdictPass: 'Boyle’s Law Verified (P · L Constant Within 3.5%)',
      verdictFail: 'Check Air Leaks or Temperature Fluctuations',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Raise and lower the mercury reservoir slowly to ensure compression/expansion is strictly isothermal, allowing air temperature to return to room temperature before taking readings. 2. The trapped air must be completely dry, as moisture vaporizes and deviates from ideal gas behavior. 3. Avoid parallax error when aligning with the curved mercury meniscus top.',
      loadSample: 'Load Sample Data (H = 76.0 cmHg)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4.1: වායුවක් සඳහා බොයිල් නියමය සත්‍යාපනය කිරීම',
      aim: 'අරමුණ: නියත උෂ්ණත්වයේදී වියළි වායු ස්කන්ධයක් සඳහා බොයිල් නියමය (P · V = නියතයකි) සත්‍යාපනය කිරීම සහ ප්‍රස්ථාරිකව වායුගෝලීය පීඩනය සෙවීම.',
      apparatus: 'උපකරණ: බොයිල් නීති උපකරණය (රසදිය පිරවූ, නම්‍යශීලී රබර් නළයකින් සම්බන්ධ කළ සංවෘත නළය සහ විවෘත නළය), සිරස් මීටර් පරිමාණය, ෆෝටින්ගේ බැරෝමීටරය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ බොයිල් නියමය',
      theoryText: 'නියත උෂ්ණත්වයකදී නියමිත වායු ස්කන්ධයක පීඩනය එහි පරිමාවට ප්‍රතිලෝමව සමානුපාතික වේ:\n\nP · V = නියතයකි   ⟹   P ∝ 1 / V\n\nසංවෘත නළයේ හරස්කඩ වර්ගඵලය A ඒකාකාර බැවින්, සිරවූ වායුවේ පරිමාව එහි දිගට L සමානුපාතික වේ (V = A · L):\n\nP · L = නියතයකි\n\nසිරවූ වායුවේ මුළු පීඩනය P:\n  P = H + h = H + (y_විවෘත - y_සංවෘත)\nමෙහි:\n• H යනු වායුගෝලීය පීඩනයයි (දළ වශයෙන් 76.0 cmHg)\n• h යනු රසදිය මට්ටම් අතර වෙනසයි\n\nP එදිරිව 1/L ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් වේ. h එදිරිව 1/L ප්‍රස්තාරයේ සිරස් අන්තඃඛණ්ඩයෙන් -H ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. කාමර උෂ්ණත්වය සහ බැරෝමීටර පීඩනය H සටහන් කරන්න. 2. විවෘත නළය ඉහළට හෝ පහළට ගෙන ගොස් රසදිය මට්ටම් වෙනස h වෙනස් කරන්න. 3. උෂ්ණත්වය සමතුලිත වීමට සුළු මොහොතක් තබා සංවෘත නළයේ වායු දිග L සහ රසදිය මට්ටම් කියවන්න. 4. P = H + h ගණනය කර P · L ගුණිතය නියතදැයි බලන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (පීඩනය සහ වායු කඳෙහි දිග)',
      colTrial: 'වාරය',
      colOpen: 'විවෘත නළ මට්ටම y₁ (cm)',
      colClosed: 'සංවෘත නළ මට්ටම y₂ (cm)',
      colHead: 'වෙනස h (cmHg)',
      colLength: 'වායු දිග L (cm)',
      colPressure: 'මුළු පීඩනය P (cmHg)',
      colProduct: 'P · L ගුණිතය (cmHg · cm)',
      calcSummaryTitle: 'බොයිල් නියමය විශ්ලේෂණ සාරාංශය',
      meanProduct: 'මධ්‍යන්‍ය (P · L) ගුණිතය:',
      barometricLabel: 'වායුගෝලීය පීඩනය H:',
      percentageDiff: 'මධ්‍යන්‍යයෙන් උපරිම අපගමනය:',
      verdictPass: 'බොයිල් නියමය සත්‍යාපනය විය (P · L නියතය 3.5% තුළ)',
      verdictFail: 'වායු කාන්දුවීම් හෝ උෂ්ණත්ව වෙනස්වීම් පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. උෂ්ණත්වය නියතව තබාගැනීමට රසදිය නළය සෙමෙන් ඉහළ පහළ කළ යුතුය (සමෝෂ්ණ ක්‍රියාවලිය). 2. සිරකර ඇති වායුව සම්පූර්ණයෙන්ම වියළි විය යුතුය. 3. රසදිය මට්ටම් කියවීමේදී නිරක්ෂ දෝෂ වළක්වා ගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (H = 76.0 cmHg)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof BoylesTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const atmH = parseFloat(barometricPressureCmHg) || 76.0;

  const calculatedTrials = trials.map((tr) => {
    const y1 = parseFloat(tr.openTubeReadingCm);
    const y2 = parseFloat(tr.closedTubeReadingCm);
    const lVal = parseFloat(tr.airColumnLengthCm);

    if (!isNaN(y1) && !isNaN(y2) && !isNaN(lVal) && lVal > 0) {
      const hDiff = y1 - y2;
      const totalP = atmH + hDiff;
      const prod = verifyBoylesLaw(totalP, lVal);
      return {
        ...tr,
        hDiff,
        totalP,
        prod,
      };
    }
    return { ...tr, hDiff: null, totalP: null, prod: null };
  });

  const validProds = calculatedTrials.map((t) => t.prod).filter((p): p is number => p !== null);
  const meanProd = validProds.length > 0 ? validProds.reduce((a, b) => a + b, 0) / validProds.length : null;

  const maxDeviationPerc =
    meanProd !== null && validProds.length > 0
      ? Math.max(...validProds.map((p) => (Math.abs(p - meanProd) / meanProd) * 100))
      : null;

  const isPass = maxDeviationPerc !== null && maxDeviationPerc <= 3.5;

  const handleLoadSample = () => {
    setBarometricPressureCmHg('76.0');
    setTrials([
      { id: 1, openTubeReadingCm: '65.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '18.0' },
      { id: 2, openTubeReadingCm: '55.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '20.2' },
      { id: 3, openTubeReadingCm: '45.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '23.0' },
      { id: 4, openTubeReadingCm: '35.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '26.8' },
      { id: 5, openTubeReadingCm: '25.0', closedTubeReadingCm: '45.0', airColumnLengthCm: '32.1' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, openTubeReadingCm: '', closedTubeReadingCm: '', airColumnLengthCm: '' })));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-[#DFE8EF] shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#14243A] font-serif">{t.title}</h2>
          <p className="text-sm text-[#475569] mt-1">{t.aim}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleLoadSample} className="text-[#0F766E] border-[#DFE8EF]">
            <Database className="w-4 h-4 mr-1.5" />
            {t.loadSample}
          </Button>
          <Button variant="outline" size="sm" onClick={handleClear} className="text-[#475569] border-[#DFE8EF]">
            <RotateCcw className="w-4 h-4 mr-1.5" />
            {t.clearInputs}
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()} className="text-[#475569] border-[#DFE8EF]">
            <Printer className="w-4 h-4 mr-1.5" />
            {t.printSheet}
          </Button>
        </div>
      </div>

      {/* Grid: Schematic & Theory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schematic Card */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'බොයිල් නීති උපකරණයේ සැකැස්ම' : 'Boyle’s Law Apparatus Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="220" viewBox="0 0 320 220" className="overflow-visible">
                {/* Metre scale wooden backboard */}
                <rect x="70" y="10" width="180" height="200" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="4" />
                
                {/* Closed Tube (Left) */}
                <rect x="100" y="30" width="16" height="150" fill="none" stroke="#64748B" strokeWidth="1.5" />
                <rect x="100" y="27" width="16" height="4" fill="#1E293B" rx="1" />
                <text x="108" y="22" textAnchor="middle" fontSize="8" fill="#1E293B" fontWeight="bold">Closed End</text>

                {/* Trapped Dry Air */}
                <rect x="101" y="31" width="14" height="60" fill="#E0F2FE" />
                <text x="108" y="65" textAnchor="middle" fontSize="9" fill="#0284C7" fontWeight="bold">Air (L)</text>

                {/* Mercury in closed tube */}
                <rect x="101" y="91" width="14" height="89" fill="#94A3B8" />

                {/* Open Tube (Right) */}
                <rect x="200" y="10" width="16" height="170" fill="none" stroke="#64748B" strokeWidth="1.5" />
                <text x="208" y="6" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">Open (Atm H)</text>

                {/* Mercury in open tube */}
                <rect x="201" y="55" width="14" height="125" fill="#94A3B8" />

                {/* Flexible Rubber Connecting Tube */}
                <path d="M 108 180 C 108 215 208 215 208 180" fill="none" stroke="#475569" strokeWidth="10" strokeLinecap="round" />
                <path d="M 108 180 C 108 215 208 215 208 180" fill="none" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" />

                {/* Mercury Head Difference h bracket */}
                <line x1="125" y1="91" x2="190" y2="91" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="125" y1="55" x2="190" y2="55" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="160" y1="55" x2="160" y2="91" stroke="#EF4444" strokeWidth="1.5" />
                <text x="170" y="76" fontSize="10" fill="#EF4444" fontWeight="bold">h</text>

                {/* Total Pressure equation text */}
                <text x="160" y="130" textAnchor="middle" fontSize="9" fill="#14243A" fontWeight="bold">P = H + h</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'P · L = නියතයකි (නියත උෂ්ණත්වයේදී P ∝ 1/L)' : 'P · L = constant at constant temperature (P ∝ 1/L)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Barometer setting */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF] flex items-center justify-between">
              <span className="font-semibold text-[#14243A]">{t.barometricLabel}</span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  step="0.1"
                  value={barometricPressureCmHg}
                  onChange={(e) => setBarometricPressureCmHg(e.target.value)}
                  className="w-20 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
                <span className="text-xs text-[#475569]">cmHg</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Observations Table */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.obsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#F6FAFD] border-b border-[#DFE8EF] text-[#14243A]">
                  <th className="py-2.5 px-3 font-semibold">{t.colTrial}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colOpen}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colClosed}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colHead}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colLength}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colPressure}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colProduct}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-medium text-[#14243A]">{tr.id}</td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.openTubeReadingCm}
                        onChange={(e) => updateTrial(tr.id, 'openTubeReadingCm', e.target.value)}
                        placeholder="e.g. 65.0"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.closedTubeReadingCm}
                        onChange={(e) => updateTrial(tr.id, 'closedTubeReadingCm', e.target.value)}
                        placeholder="e.g. 45.0"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#475569]">
                      {tr.hDiff !== null ? `${tr.hDiff >= 0 ? '+' : ''}${tr.hDiff.toFixed(1)}` : '—'}
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.airColumnLengthCm}
                        onChange={(e) => updateTrial(tr.id, 'airColumnLengthCm', e.target.value)}
                        placeholder="e.g. 18.0"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono font-medium text-[#14243A]">
                      {tr.totalP !== null ? tr.totalP.toFixed(1) : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0F766E]">
                      {tr.prod !== null ? tr.prod.toFixed(1) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analytical Summary Box */}
          <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.meanProduct}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {meanProd !== null ? `${meanProd.toFixed(1)} cmHg · cm` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.percentageDiff}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {maxDeviationPerc !== null ? `${maxDeviationPerc.toFixed(2)}%` : '—'}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-3 rounded-lg border bg-white">
              {isPass ? (
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictFail}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Precautions */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.precautionsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#475569] leading-relaxed">{t.precautions}</p>
        </CardContent>
      </Card>
    </div>
  );
};
