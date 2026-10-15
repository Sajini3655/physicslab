import { LessonDefinition } from '@/shared/curriculum/types';

export const ELECTRONICS_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 9.1: Semiconductors & Doping
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-1',
    slug: 'semiconductors-and-doping',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 1,
    syllabusRef: 'Competency 9.1',
    title: {
      en: 'Semiconductors & Doping',
      si: 'අර්ධ සන්නායක සහ මාත්‍රණය',
    },
    summary: {
      en: 'Explore energy band theory, intrinsic silicon and germanium lattices, trivalent (p-type, holes) and pentavalent (n-type, electrons) doping, majority/minority carriers, and the mass action law.',
      si: 'ශක්ති පටි වාදය, ශුද්ධ සිලිකන් හා ජර්මේනියම් දැලිස්, ත්‍රිසංයුජ (p-වර්ගයේ, කුහර) සහ පංචසංයුජ (n-වර්ගයේ, ඉලෙක්ට්‍රෝන) මාත්‍රණය, බහුතර/සුළුතර ආරෝපණ වාහක සහ ස්කන්ධ ක්‍රියාකාරී නියමය ගවේෂණය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Distinguish conductors, semiconductors, and insulators using energy band gaps (valence, forbidden, conduction bands).',
        si: 'ශක්ති පටි පරතර (සංයුජතා, තහනම්, සන්නායක පටි) භාවිතයෙන් සන්නායක, අර්ධ සන්නායක සහ පරිවාරක වෙන්කර හඳුනාගැනීම.',
      },
      {
        en: 'Explain intrinsic conduction via thermally generated electron-hole pairs and the effect of temperature.',
        si: 'තාපජව ජනනය වන ඉලෙක්ට්‍රෝන-කුහර යුගල මඟින් සිදුවන සහජ සන්නයනය සහ උෂ්ණත්වයේ බලපෑම පැහැදිලි කිරීම.',
      },
      {
        en: 'Explain extrinsic semiconductor formation through trivalent (acceptor) and pentavalent (donor) doping and apply the mass action law n_e · n_h = n_i².',
        si: 'ත්‍රිසංයුජ (ප්‍රතිග්‍රාහක) සහ පංචසංයුජ (දායක) මාත්‍රණය මඟින් බාහිර අර්ධ සන්නායක සෑදීම පැහැදිලි කිරීම සහ ස්කන්ධ ක්‍රියාකාරී නියමය n_e · n_h = n_i² යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Energy bands: valence band, forbidden gap (Eg), conduction band', si: 'ශක්ති පටි: සංයුජතා පටිය, තහනම් පරතරය (Eg), සන්නායක පටිය' },
      { en: 'Intrinsic semiconductors (Si: Eg ≈ 1.1 eV, Ge: Eg ≈ 0.67 eV)', si: 'සහජ අර්ධ සන්නායක (Si: Eg ≈ 1.1 eV, Ge: Eg ≈ 0.67 eV)' },
      { en: 'Extrinsic n-type (donor doping, Group 15, majority electrons)', si: 'බාහිර n-වර්ගය (දායක මාත්‍රණය, 15 කාණ්ඩය, බහුතර ඉලෙක්ට්‍රෝන)' },
      { en: 'Extrinsic p-type (acceptor doping, Group 13, majority holes)', si: 'බාහිර p-වර්ගය (ප්‍රතිග්‍රාහක මාත්‍රණය, 13 කාණ්ඩය, බහුතර කුහර)' },
      { en: 'Mass action law: n_e · n_h = n_i² and overall electrical neutrality', si: 'ස්කන්ධ ක්‍රියාකාරී නියමය: n_e · n_h = n_i² සහ සමස්ත විද්‍යුත් උදාසීනතාව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Modern solid-state electronics relies fundamentally on controlling the electrical conductivity of tetravalent group 14 elements—primarily Silicon and Germanium. By selectively introducing microscopic concentrations of group 13 or group 15 impurity atoms (doping), charge carrier concentrations can be engineered across eight orders of magnitude.',
        si: 'නූතන ඝන-තත්ව ඉලෙක්ට්‍රොනික විද්‍යාව මූලික වශයෙන් රඳා පවතින්නේ සිලිකන් සහ ජර්මේනියම් වැනි 14 වන කාණ්ඩයේ මූලද්‍රව්‍යවල විද්‍යුත් සන්නායකතාව පාලනය කිරීම මතය. 13 හෝ 15 කාණ්ඩයේ අපද්‍රව්‍ය පරමාණු ක්ෂුද්‍ර සාන්ද්‍රණයන්ගෙන් ඇතුළු කිරීමෙන් (මාත්‍රණය) ආරෝපණ වාහක ඝනත්වය අතිමහත් ලෙස වෙනස් කළ හැකිය.',
      },
      keyConcepts: [
        {
          title: { en: 'Energy Band Gaps', si: 'ශක්ති පටි පරතර' },
          description: {
            en: 'Insulators possess wide forbidden gaps (Eg > 5 eV), conductors have overlapping bands (Eg = 0), and semiconductors have moderate gaps: Silicon Eg ≈ 1.1 eV, Germanium Eg ≈ 0.67 eV at 300 K.',
            si: 'පරිවාරක සතුව පුළුල් තහනම් පරතර (Eg > 5 eV) ඇති අතර සන්නායකවල පටි අතිච්ඡාදනය වේ; අර්ධ සන්නායක සතුව මධ්‍යස්ථ පරතර පවතී (Si සඳහා Eg ≈ 1.1 eV, Ge සඳහා Eg ≈ 0.67 eV).',
          },
          formula: 'E_g(\\text{Si}) \\approx 1.1\\text{ eV}, \\quad E_g(\\text{Ge}) \\approx 0.67\\text{ eV}',
        },
        {
          title: { en: 'Mass Action Law', si: 'ස්කන්ධ ක්‍රියාකාරී නියමය' },
          description: {
            en: 'In thermal equilibrium, the product of electron concentration n_e and hole concentration n_h is independent of doping level and depends only on temperature.',
            si: 'තාපජ සමතුලිතතාවයේදී ඉලෙක්ට්‍රෝන ඝනත්වය n_e සහ කුහර ඝනත්වය n_h හි ගුණිතය මාත්‍රණ මට්ටම මත රඳා නොපවතින අතර උෂ්ණත්වය මත පමණක් රඳා පවතී.',
          },
          formula: 'n_e \\cdot n_h = n_i^2',
        },
        {
          title: { en: 'Overall Neutrality', si: 'සමස්ත උදාසීනතාව' },
          description: {
            en: 'Despite doping, extrinsic semiconductors remain macroscopic electrically neutral because donor and acceptor ions retain equal and opposite charges to the added mobile carriers.',
            si: 'මාත්‍රණය කළද, නිදහස් වන ජංගම වාහකයන්ට සමාන හා විරුද්ධ ආරෝපණයක් ස්ඵටික දැලිසේ අචල අයන සතු බැවින් සමස්ත ස්ඵටිකය විද්‍යුත් උදාසීන වේ.',
          },
          formula: 'q(N_D^+ + p) = q(N_A^- + n)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'An n-type semiconductor carries a net negative electric charge.',
            si: 'n-වර්ගයේ අර්ධ සන්නායකයකට ශුද්ධ සෘණ ආරෝපණයක් ඇත.',
          },
          clarification: {
            en: 'An n-type crystal is electrically neutral. For every extra free electron donated, an immobile positive donor ion (e.g., P⁺) remains bound in the crystal lattice.',
            si: 'n-වර්ගයේ ස්ඵටිකය විද්‍යුත් උදාසීන වේ. නිදහස් වන සෑම ඉලෙක්ට්‍රෝනයක් වෙනුවෙන්ම ස්ඵටික දැලිස තුළ අචල ධන දායක අයනයක් බැඳී පවතී.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-1-01',
          question: {
            en: 'Which impurity element produces a p-type semiconductor when added to pure Silicon?',
            si: 'ශුද්ධ සිලිකන් වෙත එක් කළ විට p-වර්ගයේ අර්ධ සන්නායකයක් ලබා දෙන අපද්‍රව්‍ය මූලද්‍රව්‍යය කුමක්ද?',
          },
          options: [
            { id: 'opt1', text: { en: 'Boron (Trivalent)', si: 'බෝරෝන් (ත්‍රිසංයුජ)' } },
            { id: 'opt2', text: { en: 'Phosphorus (Pentavalent)', si: 'පොස්පරස් (පංචසංයුජ)' } },
            { id: 'opt3', text: { en: 'Arsenic (Pentavalent)', si: 'ආසනික් (පංචසංයුජ)' } },
            { id: 'opt4', text: { en: 'Antimony (Pentavalent)', si: 'ඇන්ටිමනි (පංචසංයුජ)' } },
          ],
          correctOptionId: 'opt1',
          hint: {
            en: 'P-type doping requires Group 13 elements with 3 valence electrons.',
            si: 'p-වර්ගයේ මාත්‍රණය සඳහා සංයුජතා ඉලෙක්ට්‍රෝන 3ක් ඇති 13 කාණ්ඩයේ මූලද්‍රව්‍ය අවශ්‍ය වේ.',
          },
          answer: {
            en: 'Boron is trivalent and creates an electron deficiency (hole) in the covalent bond lattice.',
            si: 'බෝරෝන් ත්‍රිසංයුජ වන අතර සහසංයුජ දැලිසේ ඉලෙක්ට්‍රෝන ඌනතාවක් (කුහරයක්) සාදයි.',
          },
          competencyRef: 'Competency 9.1',
          difficulty: 'foundation',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.2: p-n Junction Diodes & Zener Diodes
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-2',
    slug: 'pn-junction-and-zener-diodes',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 2,
    syllabusRef: 'Competency 9.1',
    title: {
      en: 'p-n Junction Diodes & Zener Diodes',
      si: 'p-n සන්ධි ඩයෝඩ සහ සෙනර් ඩයෝඩ',
    },
    summary: {
      en: 'Examine depletion region physics, barrier potential, forward and reverse bias I-V characteristics, dynamic resistance, avalanche vs Zener breakdown, and voltage regulation.',
      si: 'ක්ෂය කලාප භෞතික විද්‍යාව, විභව බාධකය, පෙර හා පසු නැඹුරු I-V ලාක්ෂණික, ගතික ප්‍රතිරෝධය, ඇවලාන්ෂ් හා සෙනර් බිඳවැටීම සහ වෝල්ටීයතා නියාමනය විමර්ශනය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Explain how diffusion and recombination create the depletion region and contact barrier potential V_B (0.7 V for Si, 0.3 V for Ge).',
        si: 'විසරණය හා ප්‍රතිසංයෝජනය මඟින් ක්ෂය කලාපය හා විභව බාධකය V_B (Si සඳහා 0.7 V, Ge සඳහා 0.3 V) නිර්මාණය වන අයුරු පැහැදිලි කිරීම.',
      },
      {
        en: 'Interpret forward and reverse I-V characteristic curves and calculate dynamic resistance r_d = ΔV / ΔI.',
        si: 'පෙර හා පසු නැඹුරු I-V ලාක්ෂණික වක්‍ර අර්ථ දැක්වීම සහ ගතික ප්‍රතිරෝධය r_d = ΔV / ΔI ගණනය කිරීම.',
      },
      {
        en: 'Analyze Zener diode breakdown mechanics (tunneling vs avalanche) and solve voltage regulator circuits.',
        si: 'සෙනර් ඩයෝඩ බිඳවැටුම් යාන්ත්‍රණ (උමංකරණය හා ඇවලාන්ෂ්) විශ්ලේෂණය කිරීම සහ වෝල්ටීයතා නියාමක පරිපථ විසඳීම.',
      },
    ],
    topicOutline: [
      { en: 'Depletion layer formation, uncovered ions, and internal electric field', si: 'ක්ෂය කලාපය සෑදීම, නිරාවරණය වූ අයන සහ අභ්‍යන්තර විද්‍යුත් ක්ෂේත්‍රය' },
      { en: 'Forward bias: narrowing depletion layer and exponential current', si: 'පෙර නැඹුරුව: ක්ෂය කලාපය සිහින් වීම සහ ඝාතීය ධාරාව' },
      { en: 'Reverse bias: widening depletion layer and tiny reverse saturation current (Is)', si: 'පසු නැඹුරුව: ක්ෂය කලාපය පළල් වීම සහ ඉතා කුඩා පසු සන්තෘප්ත ධාරාව (Is)' },
      { en: 'Dynamic resistance r_d = ΔV / ΔI calculation from I-V curves', si: 'I-V වක්‍රවලින් ගතික ප්‍රතිරෝධය r_d = ΔV / ΔI ගණනය කිරීම' },
      { en: 'Zener diode voltage regulator: V_out = V_Z, current limits, and load regulation', si: 'සෙනර් ඩයෝඩ වෝල්ටීයතා නියාමකය: V_out = V_Z, ධාරා සීමා සහ භාර නියාමනය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'When a p-type semiconductor and an n-type semiconductor are metallurgically joined in a single monolithic crystal, free electrons and holes diffuse across the interface until an equilibrium internal electric field halts further net migration, establishing the fundamental p-n junction.',
        si: 'තනි ඒකශෛලී ස්ඵටිකයක් තුළ p-වර්ගයේ සහ n-වර්ගයේ අර්ධ සන්නායක එකට බද්ධ වූ විට, සමතුලිත අභ්‍යන්තර විද්‍යුත් ක්ෂේත්‍රයක් මඟින් ශුද්ධ සංක්‍රමණය නවත්වන තෙක් ඉලෙක්ට්‍රෝන හා කුහර විසරණය වී මූලික p-n සන්ධිය නිර්මාණය වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Barrier Potential', si: 'විභව බාධකය' },
          description: {
            en: 'The built-in electric field in the depletion layer creates a potential barrier: ~0.7 V for Silicon and ~0.3 V for Germanium at room temperature.',
            si: 'ක්ෂය කලාපයේ අභ්‍යන්තර විද්‍යුත් ක්ෂේත්‍රය මඟින් කාමර උෂ්ණත්වයේදී සිලිකන් සඳහා ~0.7 V ද ජර්මේනියම් සඳහා ~0.3 V ද විභව බාධකයක් ඇති කරයි.',
          },
          formula: 'V_B(\\text{Si}) \\approx 0.7\\text{ V}, \\quad V_B(\\text{Ge}) \\approx 0.3\\text{ V}',
        },
        {
          title: { en: 'Dynamic Resistance', si: 'ගතික ප්‍රතිරෝධය' },
          description: {
            en: 'The AC or dynamic resistance of a forward-biased diode is the reciprocal of the slope of its I-V characteristic curve: r_d = ΔV / ΔI.',
            si: 'පෙර නැඹුරු ඩයෝඩයක AC හෝ ගතික ප්‍රතිරෝධය යනු එහි I-V ලාක්ෂණික වක්‍රයේ අනුක්‍රමණයේ ප්‍රතිලෝමයයි: r_d = ΔV / ΔI.',
          },
          formula: 'r_d = \\frac{\\Delta V}{\\Delta I}',
        },
        {
          title: { en: 'Zener Voltage Regulator', si: 'සෙනර් වෝල්ටීයතා නියාමකය' },
          description: {
            en: 'When reverse-biased beyond its breakdown voltage V_Z, a Zener diode maintains an almost constant voltage despite large variations in supply voltage or load current.',
            si: 'සෙනර් ඩයෝඩයක් එහි බිඳවැටුම් වෝල්ටීයතාව V_Z ඉක්මවා පසු නැඹුරු කළ විට, ප්‍රභව වෝල්ටීයතාව හෝ භාර ධාරාව වෙනස් වුවද නියත වෝල්ටීයතාවක් පවත්වා ගනී.',
          },
          formula: 'V_L = V_Z, \\quad I_s = \\frac{V_{\\text{in}} - V_Z}{R_s} = I_Z + I_L',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A diode acts as a simple fixed linear resistor when forward biased.',
            si: 'පෙර නැඹුරු කළ විට ඩයෝඩය නියත රේඛීය ප්‍රතිරෝධකයක් සේ හැසිරේ.',
          },
          clarification: {
            en: 'A diode is highly non-linear. Below the knee voltage (~0.7 V for Si) negligible current flows; above knee voltage, current increases exponentially, and dynamic resistance drops to just a few ohms.',
            si: 'ඩයෝඩයක් දැඩි ලෙස අරේඛීය වේ. දණහිස් වෝල්ටීයතාවයට (~0.7 V) පහළින් ධාරාව ශුන්‍ය වන අතර, ඉන් ඔබ්බට ධාරාව ඝාතීයව ඉහළ ගොස් ගතික ප්‍රතිරෝධය ඕම් කිහිපයක් දක්වා පහත වැටේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-2-01',
          question: {
            en: 'A forward-biased silicon diode experiences a voltage increase from 0.70 V to 0.74 V, causing its current to rise from 10 mA to 30 mA. Calculate its dynamic resistance r_d in Ohms (Ω).',
            si: 'පෙර නැඹුරු සිලිකන් ඩයෝඩයක වෝල්ටීයතාව 0.70 V සිට 0.74 V දක්වා වැඩි වන විට, ධාරාව 10 mA සිට 30 mA දක්වා වැඩි වේ. ගතික ප්‍රතිරෝධය r_d (Ω) වලින් ගණනය කරන්න.',
          },
          numericalExpected: 2.0,
          numericalTolerance: 0.1,
          unit: { en: 'Ω', si: 'Ω' },
          hint: {
            en: 'r_d = ΔV / ΔI = (0.74 - 0.70) / (30 - 10) mA.',
            si: 'r_d = ΔV / ΔI = (0.74 - 0.70) / (30 - 10) mA.',
          },
          answer: {
            en: 'r_d = 0.04 V / 0.020 A = 2.0 Ω.',
            si: 'r_d = 0.04 V / 0.020 A = 2.0 Ω වේ.',
          },
          competencyRef: 'Competency 9.1',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.3: Rectification & Power Supplies
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-3',
    slug: 'rectification-and-power-supplies',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 3,
    syllabusRef: 'Competency 9.1',
    title: {
      en: 'Rectification & Power Supplies',
      si: 'ධාරා නිවැරදි කරණය සහ බල සැපයුම්',
    },
    summary: {
      en: 'Master AC to DC conversion: half-wave rectification, full-wave center-tapped and bridge rectifiers, capacitor smoothing filters, ripple factor calculation, and regulated DC power supplies.',
      si: 'AC සිට DC බවට පරිවර්තනය ප්‍රගුණ කරන්න: අර්ධ තරංග නිවැරදි කරණය, පූර්ණ තරංග මැද-තට්ටු හා පාලම් නිවැරදි කරක, ධාරිත්‍රක සුමටන පෙරහන්, රැළිති සාධකය සහ නියාමිත DC බල සැපයුම්.',
    },
    learningObjectives: [
      {
        en: 'Analyze half-wave and full-wave bridge rectifier circuits, tracing current conduction paths during both AC half-cycles.',
        si: 'AC අර්ධ චක්‍ර දෙකේදීම ධාරා සන්නයන මාර්ග සොයා බලමින් අර්ධ තරංග හා පූර්ණ තරංග පාලම් නිවැරදි කරක පරිපථ විශ්ලේෂණය කිරීම.',
      },
      {
        en: 'Determine output ripple frequencies: f_out = f_in for half-wave and f_out = 2 f_in for full-wave rectifiers.',
        si: 'ප්‍රතිදාන රැළිති සංඛ්‍යාත නිර්ණය කිරීම: අර්ධ තරංග සඳහා f_out = f_in සහ පූර්ණ තරංග සඳහා f_out = 2 f_in වේ.',
      },
      {
        en: 'Explain capacitor filter smoothing action and calculate peak-to-peak ripple voltage V_r = I_L / (f · C).',
        si: 'ධාරිත්‍රක පෙරහනක සුමටන ක්‍රියාව පැහැදිලි කිරීම සහ අග්‍රස්ථ-අග්‍රස්ථ රැළිති වෝල්ටීයතාව V_r = I_L / (f · C) ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Half-wave rectifier: circuit, single diode conduction, efficiency, and waveforms', si: 'අර්ධ තරංග නිවැරදි කරකය: පරිපථය, තනි ඩයෝඩ සන්නයනය, කාර්යක්ෂමතාව සහ තරංග ආකාර' },
      { en: 'Full-wave bridge rectifier: 4-diode Graetz topology, conduction cycles, PIV', si: 'පූර්ණ තරංග පාලම් නිවැරදි කරකය: ඩයෝඩ 4 ක පාලම, සන්නයන චක්‍ර, PIV' },
      { en: 'Reservoir capacitor filtering: charging and discharging curves', si: 'ධාරිත්‍රක පෙරහන: ආරෝපණ හා විසර්ජන වක්‍ර' },
      { en: 'Peak-to-peak ripple voltage formula: V_r = I_L / (f_r · C)', si: 'අග්‍රස්ථ-අග්‍රස්ථ රැළිති වෝල්ටීයතා සූත්‍රය: V_r = I_L / (f_r · C)' },
      { en: 'Complete regulated DC power supply architecture: Transformer → Rectifier → Filter → Zener Regulator', si: 'සම්පූර්ණ නියාමිත DC බල සැපයුම: ට්‍රාන්ස්ෆෝමරය → නිවැරදි කරකය → පෙරහන → සෙනර් නියාමකය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Almost all solid-state electronic devices require smooth, steady direct current (DC) operating voltages. A power supply converts high-voltage alternating mains current (AC) into low-voltage stable DC through four sequential stages: step-down transformation, rectification, capacitive smoothing, and Zener voltage regulation.',
        si: 'සියලුම පාහේ ඉලෙක්ට්‍රොනික උපාංග සඳහා සුමට ස්ථාවර සරල ධාරා (DC) වෝල්ටීයතාවක් අවශ්‍ය වේ. බල සැපයුමක් මඟින් ප්‍රධාන ප්‍රත්‍යාවර්තක ධාරාව (AC) අදියර හතරක් හරහා ස්ථාවර DC බවට පත් කරයි: වෝල්ටීයතාව පහත හෙළීම, නිවැරදි කරණය, ධාරිත්‍රක සුමටනය සහ සෙනර් නියාමනය.',
      },
      keyConcepts: [
        {
          title: { en: 'Full-Wave Bridge Output Peak', si: 'පාලම් නිවැරදි කරකයේ උපරිමය' },
          description: {
            en: 'In a bridge rectifier, current conducts through two forward-biased diodes in series during each half cycle, dropping 2 * 0.7 V = 1.4 V from secondary peak.',
            si: 'පාලම් නිවැරදි කරකයක සෑම අර්ධ චක්‍රයකදීම ශ්‍රේණිගත ඩයෝඩ දෙකක් හරහා ධාරාව ගලන බැවින් ද්විතියික උපරිමයෙන් 2 * 0.7 V = 1.4 V ක වෝල්ටීයතාවක් අඩුවේ.',
          },
          formula: 'V_{\\text{out,pk}} = V_{s,\\text{pk}} - 2 V_D = V_{\\text{rms}} \\sqrt{2} - 1.4\\text{ V}',
        },
        {
          title: { en: 'Peak-to-Peak Ripple Voltage', si: 'රැළිති වෝල්ටීයතාව' },
          description: {
            en: 'With a smoothing capacitor C discharging into load current I_L over period T = 1/f_r: V_r = I_L / (f_r · C).',
            si: 'ධාරිත්‍රකයක් C භාර ධාරාව I_L හරහා විසර්ජනය වීමේදී රැළිති වෝල්ටීයතාව V_r = I_L / (f_r · C) වේ.',
          },
          formula: 'V_r = \\frac{I_L}{f_r \\cdot C} = \\frac{V_{\\text{dc}}}{f_r \\cdot R_L \\cdot C}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A rectifier output with a capacitor produces perfectly flat DC with zero ripple.',
            si: 'ධාරිත්‍රකයක් සහිත නිවැරදි කරකයක ප්‍රතිදානය කිසිදු රැළිත්තක් නැති පරිපූර්ණ සමතලා DC වේ.',
          },
          clarification: {
            en: 'The capacitor continuously discharges between recharge peaks, producing a residual sawtooth ripple voltage V_r inversely proportional to capacitance C.',
            si: 'ස්පන්ද අතරතුර ධාරිත්‍රකය නොකඩවා විසර්ජනය වන බැවින් කියත් දත් හැඩැති කුඩා රැළිති වෝල්ටීයතාවක් V_r නිතරම ඉතිරි වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-3-01',
          question: {
            en: 'What is the ripple frequency of the output from a full-wave bridge rectifier supplied by 50 Hz AC mains?',
            si: '50 Hz AC සැපයුමකින් ක්‍රියාත්මක වන පූර්ණ තරංග පාලම් නිවැරදි කරකයක ප්‍රතිදාන රැළිති සංඛ්‍යාතය කොපමණද?',
          },
          options: [
            { id: 'opt1', text: { en: '100 Hz', si: '100 Hz' } },
            { id: 'opt2', text: { en: '50 Hz', si: '50 Hz' } },
            { id: 'opt3', text: { en: '25 Hz', si: '25 Hz' } },
            { id: 'opt4', text: { en: '200 Hz', si: '200 Hz' } },
          ],
          correctOptionId: 'opt1',
          hint: {
            en: 'A full-wave rectifier conducts on both half-cycles: f_out = 2 * f_in.',
            si: 'පූර්ණ තරංග නිවැරදි කරකය අර්ධ චක්‍ර දෙකේදීම සන්නයනය කරයි: f_out = 2 * f_in.',
          },
          answer: {
            en: 'Both half-cycles produce positive output pulses, doubling the frequency to 100 Hz.',
            si: 'අර්ධ චක්‍ර දෙකම ධන ස්පන්ද නිපදවන බැවින් සංඛ්‍යාතය 100 Hz දක්වා දෙගුණ වේ.',
          },
          competencyRef: 'Competency 9.1',
          difficulty: 'foundation',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.4: Bipolar Junction Transistors (BJT) & Amplification
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-4',
    slug: 'bjt-and-amplification',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 4,
    syllabusRef: 'Competency 9.2',
    title: {
      en: 'BJT Transistors & Amplification',
      si: 'ද්විධ්‍රැව සන්ධි ට්‍රාන්සිස්ටර සහ වර්ධනය',
    },
    summary: {
      en: 'Master BJT architecture (npn, pnp), active, saturation, and cut-off regions, DC current relations I_E = I_B + I_C, current gains (α, β), common-emitter voltage amplification, and electronic switching.',
      si: 'BJT ව්‍යුහය (npn, pnp), සක්‍රිය, සන්තෘප්ත හා විසන්ධි කලාප, DC ධාරා සම්බන්ධතා I_E = I_B + I_C, ධාරා ලාභ (α, β), පොදු විමෝචක වෝල්ටීයතා වර්ධනය සහ ඉලෙක්ට්‍රොනික ස්විච භාවිතය ප්‍රගුණ කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Explain physical operation of npn and pnp transistors and why the base must be thin and lightly doped.',
        si: 'npn සහ pnp ට්‍රාන්සිස්ටරවල භෞතික ක්‍රියාකාරිත්වය සහ පාදම තුනීව හා අඩුවෙන් මාත්‍රණය කළ යුත්තේ මන්දැයි පැහැදිලි කිරීම.',
      },
      {
        en: 'Apply current relations I_E = I_B + I_C, current gain β = I_C / I_B, α = I_C / I_E, and link them via α = β / (β + 1).',
        si: 'I_E = I_B + I_C, ධාරා ලාභය β = I_C / I_B, α = I_C / I_E සම්බන්ධතා යෙදීම සහ α = β / (β + 1) ඔස්සේ ඒවා සම්බන්ධ කිරීම.',
      },
      {
        en: 'Analyze Common Emitter (CE) amplifier operation, 180° phase inversion, and calculate voltage gain A_v = -β (R_C / R_in).',
        si: 'පොදු විමෝචක (CE) වර්ධක ක්‍රියාකාරිත්වය, 180° කලා විපර්යාසය විශ්ලේෂණය කිරීම සහ වෝල්ටීයතා ලාභය A_v = -β (R_C / R_in) ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'BJT construction: Emitter, Base, Collector doping and physical dimensions', si: 'BJT ව්‍යුහය: විමෝචකය, පාදම, සංග්‍රාහකය මාත්‍රණය සහ මාන' },
      { en: 'Three operating regions: Active (amplification), Saturation (ON switch), Cut-off (OFF switch)', si: 'ක්‍රියාකාරී කලාප තුන: සක්‍රිය (වර්ධනය), සන්තෘප්ත (ON ස්විචය), විසන්ධි (OFF ස්විචය)' },
      { en: 'Current equations: I_E = I_B + I_C and relations between beta and alpha', si: 'ධාරා සමීකරණ: I_E = I_B + I_C සහ බීටා හා ඇල්ෆා අතර සම්බන්ධතා' },
      { en: 'Common Emitter (CE) characteristics, DC load line, and Q-point stability', si: 'පොදු විමෝචක ලාක්ෂණික, DC භාර රේඛාව සහ Q-ලක්ෂ්‍ය ස්ථායීතාව' },
      { en: 'CE voltage amplifier: gain A_v = -β (R_C / R_in) and 180° phase inversion', si: 'CE වෝල්ටීයතා වර්ධකය: ලාභය A_v = -β (R_C / R_in) සහ 180° කලා විපර්යාසය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The Bipolar Junction Transistor (BJT) is a three-terminal semiconductor device that revolutionized electronics by enabling current amplification and high-speed electronic switching. A tiny current entering the base terminal controls a substantially larger current flowing between collector and emitter terminals.',
        si: 'ද්විධ්‍රැව සන්ධි ට්‍රාන්සිස්ටරය (BJT) යනු ධාරා වර්ධනය සහ අධිවේගී ඉලෙක්ට්‍රොනික ස්විචකරණය ලබා දෙමින් ඉලෙක්ට්‍රොනික විද්‍යාවේ විප්ලවයක් කළ අග්‍ර තුනකින් යුත් උපාංගයකි. පාදමට ඇතුළු වන ඉතා කුඩා ධාරාවක් මඟින් සංග්‍රාහකය හා විමෝචකය අතර ගලන විශාල ධාරාවක් පාලනය කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Transistor Current Relations', si: 'ට්‍රාන්සිස්ටර ධාරා සම්බන්ධතා' },
          description: {
            en: 'By Kirchhoff’s Current Law, total emitter current equals base plus collector current. Current gains are defined as β = I_C / I_B and α = I_C / I_E.',
            si: 'කර්චොෆ් ධාරා නියමයෙන් මුළු විමෝචක ධාරාව පාදම හා සංග්‍රාහක ධාරාවල එකතුවට සමාන වේ. ධාරා ලාභ β = I_C / I_B සහ α = I_C / I_E ලෙස අර්ථ දැක්වේ.',
          },
          formula: 'I_E = I_B + I_C, \\quad \\beta = \\frac{I_C}{I_B}, \\quad \\alpha = \\frac{\\beta}{\\beta + 1}',
        },
        {
          title: { en: 'Common Emitter Voltage Gain', si: 'පොදු විමෝචක වෝල්ටීයතා ලාභය' },
          description: {
            en: 'In CE configuration, small base voltage changes produce collector current changes across load R_C with a 180° phase reversal: A_v = -β (R_C / R_in).',
            si: 'CE වින්‍යාසයේදී පාදම වෝල්ටීයතාවේ කුඩා වෙනසක් R_C හරහා විශාල ප්‍රතිදාන වෙනසක් 180° කලා විපර්යාසයක් සමඟ ඇති කරයි: A_v = -β (R_C / R_in).',
          },
          formula: 'A_v = -\\beta \\frac{R_C}{R_{\\text{in}}} = \\frac{\\Delta V_{\\text{out}}}{\\Delta V_{\\text{in}}}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Transistor emitter and collector terminals are interchangeable because both are n-type in an npn transistor.',
            si: 'npn ට්‍රාන්සිස්ටරයක විමෝචකය හා සංග්‍රාහකය දෙකම n-වර්ගයේ බැවින් ඒවා එකිනෙකට මාරු කළ හැකිය.',
          },
          clarification: {
            en: 'Emitter is heavily doped to inject maximum carriers, while collector is physically much larger with moderate doping to dissipate heat. They are strictly non-interchangeable.',
            si: 'විමෝචකය වැඩි වාහක සංඛ්‍යාවක් එන්නත් කිරීමට තදින් මාත්‍රණය කර ඇති අතර, සංග්‍රාහකය තාපය විසුරුවා හැරීමට විශාල වර්ගඵලයකින් යුක්ත වේ; එබැවින් ඒවා මාරු කළ නොහැක.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-4-01',
          question: {
            en: 'In an npn transistor circuit, collector current I_C = 4.95 mA and base current I_B = 50 µA. Calculate the DC current gain beta (β).',
            si: 'npn ට්‍රාන්සිස්ටරයක සංග්‍රාහක ධාරාව I_C = 4.95 mA සහ පාදම ධාරාව I_B = 50 µA වේ. DC ධාරා ලාභය බීටා (β) ගණනය කරන්න.',
          },
          numericalExpected: 99.0,
          numericalTolerance: 0.5,
          hint: {
            en: 'β = I_C / I_B. Convert 50 µA to 0.050 mA.',
            si: 'β = I_C / I_B. 50 µA අගය 0.050 mA බවට හරවන්න.',
          },
          answer: {
            en: 'β = 4.95 mA / 0.050 mA = 99.0.',
            si: 'β = 4.95 mA / 0.050 mA = 99.0 වේ.',
          },
          competencyRef: 'Competency 9.2',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.5: Operational Amplifiers (Op-Amps)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-5',
    slug: 'operational-amplifiers',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 5,
    syllabusRef: 'Competency 9.3',
    title: {
      en: 'Operational Amplifiers (Op-Amps)',
      si: 'ක්‍රියාකාරී වර්ධක (Op-Amp)',
    },
    summary: {
      en: 'Analyze ideal operational amplifier properties (infinite gain, infinite input impedance, zero output impedance), virtual ground concept, inverting/non-inverting amplifiers, voltage followers, summing amplifiers, and comparators.',
      si: 'පරමාදර්ශී Op-Amp ලක්ෂණ (අනන්ත ලාභය, අනන්ත ආදාන සම්බාධනය, ශුන්‍ය ප්‍රතිදාන සම්බාධනය), අතථ්‍ය භූගත සංකල්පය, ප්‍රතිලෝම/අප්‍රතිලෝම වර්ධක, වෝල්ටීයතා අනුගාමික, එකතු කිරීමේ වර්ධක සහ සංසන්දක විශ්ලේෂණය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'State the 5 golden characteristics of an ideal operational amplifier and deduce the virtual short-circuit concept (V+ ≈ V-).',
        si: 'පරමාදර්ශී ක්‍රියාකාරී වර්ධකයක රන් ලක්ෂණ 5 ප්‍රකාශ කිරීම සහ අතථ්‍ය කෙටි-පරිපථ සංකල්පය (V+ ≈ V-) තහවුරු කිරීම.',
      },
      {
        en: 'Derive closed-loop voltage gain expressions: Inverting A_v = -R_f / R_in, Non-inverting A_v = 1 + R_f / R_1, and Buffer A_v = 1.',
        si: 'සංවෘත ලූප වෝල්ටීයතා ලාභ ප්‍රකාශන ව්‍යුත්පන්න කිරීම: ප්‍රතිලෝම A_v = -R_f / R_in, අප්‍රතිලෝම A_v = 1 + R_f / R_1, සහ බෆරය A_v = 1.',
      },
      {
        en: 'Analyze open-loop comparator switching behavior and explain supply rail saturation (+V_sat, -V_sat).',
        si: 'විවෘත ලූප සංසන්දක ස්විච හැසිරීම විශ්ලේෂණය කිරීම සහ සැපයුම් රේල් සන්තෘප්තිය (+V_sat, -V_sat) පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Op-Amp symbol, inverting (-) and non-inverting (+) inputs, power supply rails (±V_s)', si: 'Op-Amp සංකේතය, ප්‍රතිලෝම (-) හා අප්‍රතිලෝම (+) ආදාන, බල සැපයුම් රේල් (±V_s)' },
      { en: 'Ideal Op-Amp properties: A_OL = ∞, R_in = ∞, R_out = 0, bandwidth = ∞', si: 'පරමාදර්ශී Op-Amp ලක්ෂණ: A_OL = ∞, R_in = ∞, R_out = 0, කලාප පළල = ∞' },
      { en: 'Virtual ground and virtual short principles under negative feedback', si: 'සෘණ ප්‍රතිපෝෂණය යටතේ අතථ්‍ය භූගත හා අතථ්‍ය කෙටි-පරිපථ මූලධර්ම' },
      { en: 'Inverting amplifier: derivation of V_out = -(R_f / R_in) V_in', si: 'ප්‍රතිලෝම වර්ධකය: V_out = -(R_f / R_in) V_in ව්‍යුත්පන්න කිරීම' },
      { en: 'Non-inverting amplifier and voltage follower buffer circuits', si: 'අප්‍රතිලෝම වර්ධකය සහ වෝල්ටීයතා අනුගාමික බෆර පරිපථ' },
      { en: 'Inverting summing amplifier and open-loop voltage comparators', si: 'ප්‍රතිලෝම එකතු කිරීමේ වර්ධකය සහ විවෘත ලූප වෝල්ටීයතා සංසන්දක' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The Operational Amplifier (Op-Amp) is a high-gain DC-coupled differential voltage amplifier that forms the cornerstone of modern analogue signal processing. By applying stable negative feedback through external resistors, highly precise and temperature-independent amplifier circuits can be built.',
        si: 'ක්‍රියාකාරී වර්ධකය (Op-Amp) යනු නූතන ප්‍රතිසම සංඥා සැකසුම්කරණයේ පදනම වන අධික ලාභයක් සහිත අවකල වෝල්ටීයතා වර්ධකයකි. බාහිර ප්‍රතිරෝධක මඟින් ස්ථාවර සෘණ ප්‍රතිපෝෂණයක් ලබා දීමෙන් අතිශය නිරවද්‍ය පරිපථ නිර්මාණය කළ හැකිය.',
      },
      keyConcepts: [
        {
          title: { en: 'Inverting Amplifier Gain', si: 'ප්‍රතිලෝම වර්ධක ලාභය' },
          description: {
            en: 'Because input current into the inverting terminal is zero, current through R_in equals current through R_f, yielding V_out = -(R_f / R_in) V_in.',
            si: 'ප්‍රතිලෝම අග්‍රයට ඇතුළු වන ධාරාව ශුන්‍ය බැවින් R_in හරහා ධාරාව R_f හරහා ධාරාවට සමාන වී V_out = -(R_f / R_in) V_in ලැබේ.',
          },
          formula: 'A_v = -\\frac{R_f}{R_{\\text{in}}}, \\quad V_{\\text{out}} = -\\frac{R_f}{R_{\\text{in}}} V_{\\text{in}}',
        },
        {
          title: { en: 'Non-Inverting Amplifier Gain', si: 'අප්‍රතිලෝම වර්ධක ලාභය' },
          description: {
            en: 'Feedback voltage to the inverting terminal must match V_in at the non-inverting terminal, producing closed-loop gain A_v = 1 + (R_f / R_1).',
            si: 'අතථ්‍ය කෙටි-පරිපථය නිසා ප්‍රතිලෝම අග්‍රයේ විභවය V_in ට සමාන වන අතර සංවෘත ලාභය A_v = 1 + (R_f / R_1) වේ.',
          },
          formula: 'A_v = 1 + \\frac{R_f}{R_1}, \\quad V_{\\text{out}} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{\\text{in}}',
        },
        {
          title: { en: 'Rail Saturation', si: 'රේල් සන්තෘප්තිය' },
          description: {
            en: 'An Op-Amp output cannot exceed its DC supply voltages. When the calculated linear output exceeds ±V_s, the output clips to the saturation rails.',
            si: 'Op-Amp ප්‍රතිදානයට එහි DC සැපයුම් වෝල්ටීයතාව ඉක්මවිය නොහැක. ගණනය කළ අගය ±V_s ඉක්මවන විට ප්‍රතිදානය සන්තෘප්ත සීමාවේ කපා හැරේ.',
          },
          formula: '-V_{\\text{sat}} \\le V_{\\text{out}} \\le +V_{\\text{sat}}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'An Op-Amp can output 50 V if supplied by ±12 V rails as long as the theoretical gain is 100.',
            si: 'න්‍යායික ලාභය 100 නම්, ±12 V රේල් සැපයුමක් සහිත Op-Amp එකකින් 50 V ප්‍රතිදානයක් ලබාගත හැක.',
          },
          clarification: {
            en: 'The output is strictly limited by the physical supply rails (typically 1–2 V below rails, or rail-to-rail). It clips at saturation.',
            si: 'ප්‍රතිදානය සැපයුම් රේල් සීමාව මඟින් සීමා කර ඇති අතර සන්තෘප්ත වෝල්ටීයතාවයෙන් ඔබ්බට වැඩි විය නොහැක.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-5-01',
          question: {
            en: 'In an inverting Op-Amp circuit, R_in = 10 kΩ and R_f = 50 kΩ. If input voltage V_in = +1.2 V with supply rails at ±15 V, calculate the output voltage V_out in Volts.',
            si: 'ප්‍රතිලෝම Op-Amp පරිපථයක R_in = 10 kΩ සහ R_f = 50 kΩ වේ. සැපයුම ±15 V වන විට V_in = +1.2 V නම්, ප්‍රතිදානය V_out වෝල්ට් වලින් ගණනය කරන්න.',
          },
          numericalExpected: -6.0,
          numericalTolerance: 0.1,
          unit: { en: 'V', si: 'V' },
          hint: {
            en: 'V_out = -(R_f / R_in) * V_in.',
            si: 'V_out = -(R_f / R_in) * V_in.',
          },
          answer: {
            en: 'V_out = -(50 kΩ / 10 kΩ) * 1.2 V = -6.0 V.',
            si: 'V_out = -(50 / 10) * 1.2 V = -6.0 V වේ.',
          },
          competencyRef: 'Competency 9.3',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.6: Digital Logic Gates & Boolean Algebra
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-6',
    slug: 'digital-logic-gates',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 6,
    syllabusRef: 'Competency 9.4',
    title: {
      en: 'Digital Logic Gates & Boolean Algebra',
      si: 'ඩිජිටල් තාර්කික ද්වාර සහ බූලීය වීජ ගණිතය',
    },
    summary: {
      en: 'Explore binary logic levels (0 and 1), basic gates (NOT, AND, OR), universal gates (NAND, NOR), exclusive gates (XOR, XNOR), truth tables, Boolean theorems, De Morgan’s Laws, and sensor-based switching circuits.',
      si: 'ද්විමය තාර්කික මට්ටම් (0 සහ 1), මූලික ද්වාර (NOT, AND, OR), සාර්වත්‍ර ද්වාර (NAND, NOR), විසම ද්වාර (XOR, XNOR), සත්‍යතා වගු, බූලීය ප්‍රමේයයන්, ඩි මෝගන්ගේ නියමයන් සහ සංවේදක පාදක ස්විච පරිපථ ගවේෂණය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Define binary logic levels and construct truth tables for basic gates (NOT, AND, OR), universal gates (NAND, NOR), and XOR/XNOR.',
        si: 'ද්විමය මට්ටම් අර්ථ දැක්වීම සහ මූලික (NOT, AND, OR), සාර්වත්‍ර (NAND, NOR) සහ XOR/XNOR ද්වාර සඳහා සත්‍යතා වගු ගොඩනැගීම.',
      },
      {
        en: 'Explain why NAND and NOR are universal gates and demonstrate the synthesis of NOT, AND, and OR using NAND/NOR exclusively.',
        si: 'NAND සහ NOR සාර්වත්‍ර ද්වාර වන්නේ මන්දැයි පැහැදිලි කිරීම සහ ඒවා පමණක් යොදා ගනිමින් මූලික ද්වාර නිර්මාණය කිරීම.',
      },
      {
        en: 'Simplify complex digital logic expressions using Boolean theorems and De Morgan’s Laws: NOT(A+B) = NOT(A)·NOT(B).',
        si: 'බූලීය ප්‍රමේයයන් සහ ඩි මෝගන්ගේ නියමයන් මඟින් සංකීර්ණ තාර්කික ප්‍රකාශන සරල කිරීම: NOT(A+B) = NOT(A)·NOT(B).',
      },
    ],
    topicOutline: [
      { en: 'Binary logic levels: High (1) and Low (0) voltage thresholds', si: 'ද්විමය මට්ටම්: ඉහළ (1) සහ පහළ (0) වෝල්ටීයතා සීමා' },
      { en: 'Basic gates: Inverter (NOT), Conjunction (AND), Disjunction (OR)', si: 'මූලික ද්වාර: ප්‍රතිලෝමකය (NOT), සංයුක්තය (AND), වියුක්තය (OR)' },
      { en: 'Universal gates: NAND and NOR topologies and circuit synthesis', si: 'සාර්වත්‍ර ද්වාර: NAND සහ NOR සැකසුම් හා පරිපථ සංශ්ලේෂණය' },
      { en: 'Exclusive gates: XOR and XNOR applications in adders and parity checking', si: 'විසම ද්වාර: එකතු කිරීම් හා සමානතා පරික්ෂණවලදී XOR හා XNOR භාවිතය' },
      { en: 'Boolean algebra theorems and De Morgan’s Laws simplification', si: 'බූලීය වීජ ගණිත ප්‍රමේයයන් සහ ඩි මෝගන්ගේ නියමවලින් සරල කිරීම' },
      { en: 'Sensor-driven digital switching: LDR, thermistor, and transistor interface', si: 'සංවේදක පාදක ඩිජිටල් ස්විච: LDR, තාප ප්‍රතිරෝධක හා ට්‍රාන්සිස්ටර අතුරුමුහුණත' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Digital electronics abstracts continuous physical voltages into discrete binary logic states: High (1, typically +5 V) and Low (0, typically 0 V). Combining interconnected logic gates enables the design of digital calculators, computer processors, and automated industrial control systems.',
        si: 'ඩිජිටල් ඉලෙක්ට්‍රොනික විද්‍යාව මඟින් අඛණ්ඩ වෝල්ටීයතා අගයන් විවික්ත ද්විමය තත්ව දෙකකට (1 සහ 0) ලඝු කරයි. එකිනෙක සම්බන්ධ කළ තාර්කික ද්වාර මඟින් පරිගණක ප්‍රොසෙසර, ගණක යන්ත්‍ර සහ ස්වයංක්‍රීය පාලන පද්ධති ගොඩනැගේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Universal Logic Synthesis', si: 'සාර්වත්‍ර තාර්කික සංශ්ලේෂණය' },
          description: {
            en: 'Any Boolean function can be implemented using exclusively NAND gates (or exclusively NOR gates). Connecting both inputs of a NAND together produces an inverter NOT.',
            si: 'ඕනෑම බූලීය ශ්‍රිතයක් NAND ද්වාර පමණක් (හෝ NOR ද්වාර පමණක්) භාවිතයෙන් ගොඩනැඟිය හැක. NAND ද්වාරයේ ආදාන දෙක එකට සම්බන්ධ කළ විට NOT ද්වාරයක් ලැබේ.',
          },
          formula: '\\overline{A \\cdot A} = \\overline{A}, \\quad \\overline{\\overline{A \\cdot B}} = A \\cdot B',
        },
        {
          title: { en: 'De Morgan’s Laws', si: 'ඩි මෝගන්ගේ නියමයන්' },
          description: {
            en: 'De Morgan’s theorems allow conversions between AND and OR operations: The complement of an OR is the AND of complements, and vice versa.',
            si: 'ඩි මෝගන්ගේ ප්‍රමේයයන් මඟින් AND හා OR මෙහෙයුම් අතර පරිවර්තනය කළ හැක: ඓක්‍යයක අනුපූරකය අනුපූරකවල ගුණිතයට සමාන වේ.',
          },
          formula: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}, \\quad \\overline{A \\cdot B} = \\overline{A} + \\overline{B}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'An XOR gate produces output 1 when all its inputs are 1.',
            si: 'ආදාන සියල්ලම 1 වන විට XOR ද්වාරයක ප්‍රතිදානය 1 වේ.',
          },
          clarification: {
            en: 'In a 2-input XOR gate, output is 1 only when inputs differ. When both inputs are 1 (or both 0), the output is 0.',
            si: 'ආදාන 2 ක XOR ද්වාරයක ප්‍රතිදානය 1 වන්නේ ආදාන එකිනෙකට වෙනස් වූ විට පමණි; ආදාන දෙකම 1 වූ විට ප්‍රතිදානය 0 වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-9-6-01',
          question: {
            en: 'Which logic gate produces an output of logic 0 ONLY when both of its inputs are logic 1?',
            si: 'ආදාන දෙකම තාර්කික 1 වන විට පමණක් තාර්කික 0 ප්‍රතිදානයක් ලබා දෙන තාර්කික ද්වාරය කුමක්ද?',
          },
          options: [
            { id: 'opt1', text: { en: 'NAND gate', si: 'NAND ද්වාරය' } },
            { id: 'opt2', text: { en: 'NOR gate', si: 'NOR ද්වාරය' } },
            { id: 'opt3', text: { en: 'AND gate', si: 'AND ද්වාරය' } },
            { id: 'opt4', text: { en: 'XOR gate', si: 'XOR ද්වාරය' } },
          ],
          correctOptionId: 'opt1',
          hint: {
            en: 'NAND = NOT(AND). When both inputs are 1, AND produces 1, which NOT inverts to 0.',
            si: 'NAND = NOT(AND). ආදාන දෙකම 1 වන විට AND මඟින් 1 ලැබී එය ප්‍රතිලෝම වී 0 වේ.',
          },
          answer: {
            en: 'A NAND gate outputs 0 only for (1, 1); for all other inputs it outputs 1.',
            si: 'NAND ද්වාරය (1, 1) සඳහා පමණක් 0 ප්‍රතිදානයක් ලබා දෙයි.',
          },
          competencyRef: 'Competency 9.4',
          difficulty: 'foundation',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 9.7: Interactive Electronics & Op-Amp Simulation Lab
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-7',
    slug: 'electronics-simulation-lab',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 7,
    syllabusRef: 'Competency 9.4',
    title: {
      en: 'Interactive Electronics & Op-Amp Simulation Lab',
      si: 'අන්තර්ක්‍රියාකාරී ඉලෙක්ට්‍රොනික හා Op-Amp සමාකරණ විද්‍යාගාරය',
    },
    summary: {
      en: 'Multi-mode real-time laboratory simulator: Mode 1 Diode bridge rectifier with interactive capacitor filter and oscilloscope; Mode 2 Inverting/Non-inverting Op-Amp circuit simulator with real-time saturation clipping.',
      si: 'බහු-ආකාර තථ්‍ය-කාලීන විද්‍යාගාර සමාකරණය: ආකාරය 1 ධාරිත්‍රක පෙරහන හා දෝලනදර්ශකය සහිත පාලම් නිවැරදි කරකය; ආකාරය 2 සන්තෘප්ත සීමා නිරූපණය වන ප්‍රතිලෝම/අප්‍රතිලෝම Op-Amp පරිපථ සමාකරණය.',
    },
    learningObjectives: [
      {
        en: 'Visualize diode bridge rectification and test how varying filter capacitance C alters output ripple voltage V_r in real time.',
        si: 'පාලම් නිවැරදි කරණය දෘශ්‍යමාන කිරීම සහ පෙරහන් ධාරිතාව C වෙනස් වන විට රැළිති වෝල්ටීයතාව V_r තථ්‍ය කාලීනව වෙනස් වන අයුරු පරීක්ෂා කිරීම.',
      },
      {
        en: 'Investigate Op-Amp inverting and non-inverting closed-loop gains by adjusting feedback resistors and observe rail saturation clipping.',
        si: 'ප්‍රතිපෝෂණ ප්‍රතිරෝධක වෙනස් කරමින් Op-Amp ප්‍රතිලෝම හා අප්‍රතිලෝම සංවෘත ලාභ විමර්ශනය කිරීම සහ රේල් සන්තෘප්ත කපාහැරීම නිරීක්ෂණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Real-time oscilloscope tracing of AC input, rectified DC, and filtered DC waveforms', si: 'AC ආදානය, නිවැරදි කළ DC සහ පෙරූ DC තරංග ආකාර තථ්‍ය කාලීන දෝලනදර්ශකයෙන් සටහන් කිරීම' },
      { en: 'Filter capacitor discharge kinetics and ripple formula verification', si: 'පෙරහන් ධාරිත්‍රකයේ විසර්ජන චාලක විද්‍යාව සහ රැළිති සූත්‍රය තහවුරු කිරීම' },
      { en: 'Op-Amp gain control, input amplitude sweeping, and saturation threshold analysis', si: 'Op-Amp ලාභ පාලනය, ආදාන විස්තාරය වෙනස් කිරීම සහ සන්තෘප්ත සීමා විශ්ලේෂණය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electronics-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 9.8: Unit 9 Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-8',
    slug: 'electronics-assessment',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 8,
    syllabusRef: 'Competencies 9.1–9.4',
    title: {
      en: 'Unit 9 Assessment: Electronics',
      si: 'ඒකක 9 ඇගයීම: ඉලෙක්ට්‍රොනික විද්‍යාව',
    },
    summary: {
      en: 'Comprehensive summative evaluation covering all 6 syllabus competencies: semiconductors, p-n junction diodes, rectification, BJT amplification, operational amplifiers, and digital logic gates.',
      si: 'සියලුම විෂය නිර්දේශ නිපුණතා 6 ආවරණය වන සවිස්තරාත්මක සමාප්ති ඇගයීම: අර්ධ සන්නායක, p-n සන්ධි ඩයෝඩ, ධාරා නිවැරදි කරණය, BJT වර්ධනය, ක්‍රියාකාරී වර්ධක සහ ඩිජිටල් තාර්කික ද්වාර.',
    },
    learningObjectives: [
      {
        en: 'Synthesize concepts across all six electronics competencies under timed exam conditions.',
        si: 'විභාග කොන්දේසි යටතේ සියලුම ඉලෙක්ට්‍රොනික නිපුණතා 6 හරහා සංකල්ප ඒකාබද්ධ කර විසඳීම.',
      },
      {
        en: 'Evaluate individual mastery and receive targeted revision links for weak competencies.',
        si: 'පුද්ගලික ප්‍රවීණතාව ඇගයීම සහ දුර්වල නිපුණතා සඳහා ඉලක්කගත පුනරීක්ෂණ සබැඳි ලබා ගැනීම.',
      },
    ],
    topicOutline: [
      { en: '16 balanced questions across Competencies 9.1 through 9.6', si: 'නිපුණතා 9.1 සිට 9.6 දක්වා තුලිත ප්‍රශ්න 16 ක්' },
      { en: 'Automated scoring, per-competency performance breakdown, and revision suggestions', si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා අනුව කාර්යසාධන විශ්ලේෂණය සහ පුනරීක්ෂණ නිර්දේශ' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electronics-assessment',
  },

  // -------------------------------------------------------------------------
  // Lesson 9.9: Practical Investigations Hub
  // -------------------------------------------------------------------------
  {
    id: 'lesson-9-9',
    slug: 'practical-investigations',
    unitSlug: 'electronics',
    unitOrder: 9,
    lessonOrder: 9,
    syllabusRef: 'NIE Practical Handbook: Experiments 35, 36, 37',
    title: {
      en: 'Electronics Practicals Hub',
      si: 'ඉලෙක්ට්‍රොනික විද්‍යාව ප්‍රායෝගික පරීක්ෂණ මධ්‍යස්ථානය',
    },
    summary: {
      en: 'Official syllabus laboratory investigations: Exp 35 (I-V characteristics of a semiconductor diode), Exp 36 (CE npn transistor transfer characteristics and current gain β), and Exp 37 (identification of logic gates from truth tables).',
      si: 'විෂය නිර්දේශයේ ප්‍රායෝගික පරීක්ෂණ: පරීක්ෂණ 35 (අර්ධ සන්නායක ඩයෝඩයේ I-V ලාක්ෂණික), පරීක්ෂණ 36 (පොදු විමෝචක npn ට්‍රාන්සිස්ටරයක සම්ප්‍රේෂණ ලාක්ෂණික සහ ධාරා ලාභය β), සහ පරීක්ෂණ 37 (සත්‍යතා වගු භාවිතයෙන් තාර්කික ද්වාර හඳුනාගැනීම).',
    },
    learningObjectives: [
      {
        en: 'Investigate diode forward/reverse conduction, plot transistor transfer characteristics to determine β, and probe digital logic IC truth tables.',
        si: 'ඩයෝඩයේ පෙර නැඹුරු/පසු නැඹුරු සන්නයනය විමර්ශනය, ට්‍රාන්සිස්ටර සම්ප්‍රේෂණ ලාක්ෂණික ඇඳ β සෙවීම, සහ ඩිජිටල් තාර්කික IC සත්‍යතා වගු පරීක්ෂා කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Experiment 35: Semiconductor Diode Forward & Reverse Characteristics', si: 'පරීක්ෂණය 35: අර්ධ සන්නායක ඩයෝඩයේ පෙර සහ පසු නැඹුරු ලාක්ෂණික' },
      { en: 'Experiment 36: Common-Emitter BJT Transfer Characteristics & Current Gain (β)', si: 'පරීක්ෂණය 36: පොදු විමෝචක BJT සම්ප්‍රේෂණ ලාක්ෂණික සහ ධාරා ලාභය (β)' },
      { en: 'Experiment 37: Identification of Digital Logic Gates from Truth Tables', si: 'පරීක්ෂණය 37: සත්‍යතා වගු මඟින් ඩිජිටල් තාර්කික ද්වාර හඳුනාගැනීම' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electronics-practicals',
  },
];
