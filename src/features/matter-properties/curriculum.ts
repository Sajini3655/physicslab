import { LessonDefinition } from '@/shared/curriculum/types';

export const MATTER_PROPERTIES_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 10.1: Elasticity of Solids & Young's Modulus
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-1',
    slug: 'elasticity-and-young-modulus',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 1,
    syllabusRef: 'Competency 10.1',
    title: {
      en: 'Elasticity of Solids & Young’s Modulus',
      si: 'ඝන ද්‍රව්‍යවල ප්‍රත්‍යාස්ථතාව සහ යං මාපාංකය',
    },
    summary: {
      en: 'Master tensile stress σ = F/A, tensile strain ε = ΔL/L, Hooke’s law, stress-strain curves for ductile, brittle, and polymeric materials, Young’s modulus Y = (FL)/(AΔL), and strain energy density u = 0.5 Y ε².',
      si: 'ආතන්‍ය ප්‍රත්‍යබලය σ = F/A, ආතන්‍ය වික්‍රියාව ε = ΔL/L, හුක් නියමය, තන්‍ය, භංගුර හා බහුඅවයවික ද්‍රව්‍ය සඳහා ප්‍රත්‍යබල-වික්‍රියා වක්‍ර, යං මාපාංකය Y = (FL)/(AΔL) සහ වික්‍රියා ශක්ති ඝනත්වය u = 0.5 Y ε² ප්‍රගුණ කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Define tensile stress, tensile strain, proportional limit, elastic limit, yield point, and breaking stress.',
        si: 'ආතන්‍ය ප්‍රත්‍යබලය, ආතන්‍ය වික්‍රියාව, අනුපාතික සීමාව, ප්‍රත්‍යාස්ථ සීමාව, උත්පාදක ලක්ෂ්‍යය සහ බිඳුම් ප්‍රත්‍යබලය අර්ථ දැක්වීම.',
      },
      {
        en: 'State Hooke’s Law, calculate Young’s modulus Y, and determine wire elongation ΔL under tensile loading.',
        si: 'හුක් නියමය ප්‍රකාශ කිරීම, යං මාපාංකය Y ගණනය කිරීම සහ ආතතිය යටතේ කම්බියක දිගු වීම ΔL සෙවීම.',
      },
      {
        en: 'Derive elastic strain energy U = 0.5 F ΔL and energy density u = 0.5 Y ε² from the stress-strain graph area.',
        si: 'ප්‍රත්‍යබල-වික්‍රියා ප්‍රස්ථාරයේ වර්ගඵලයෙන් ප්‍රත්‍යාස්ථ වික්‍රියා ශක්තිය U = 0.5 F ΔL සහ ශක්ති ඝනත්වය u = 0.5 Y ε² ව්‍යුත්පන්න කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Interatomic forces and solid elasticity basis', si: 'අන්තර් පරමාණුක බල සහ ඝන ප්‍රත්‍යාස්ථතා පදනම' },
      { en: 'Stress (σ = F/A) and Strain (ε = ΔL/L) definitions and units', si: 'ප්‍රත්‍යබලය සහ වික්‍රියාව අර්ථ දැක්වීම් හා ඒකක' },
      { en: 'Stress-strain diagrams: ductile metals, brittle glass, and elastomeric rubber', si: 'ප්‍රත්‍යබල-වික්‍රියා සටහන්: තන්‍ය ලෝහ, භංගුර වීදුරු සහ රබර්' },
      { en: 'Hooke’s Law and Young’s Modulus: Y = (F L) / (A ΔL)', si: 'හුක් නියමය සහ යං මාපාංකය: Y = (F L) / (A ΔL)' },
      { en: 'Elastic potential energy (strain energy) U = 0.5 F ΔL and energy density', si: 'ප්‍රත්‍යාස්ථ විභව ශක්තිය (වික්‍රියා ශක්තිය) U = 0.5 F ΔL සහ ශක්ති ඝනත්වය' },
      { en: 'Searle’s apparatus methodology and twin-wire thermal compensation', si: 'සර්ල්ගේ උපකරණ ක්‍රමවේදය සහ ද්විත්ව කම්බි තාප හිලව්ව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'When external mechanical forces act on a solid, interatomic bonds deform like microscopic springs. Up to the elastic limit, the material returns fully to its initial length when the load is removed. Hooke’s law states that within the proportional limit, tensile stress is strictly proportional to tensile strain.',
        si: 'ඝන ද්‍රව්‍යයක් මත බාහිර යාන්ත්‍රික බල යෙදූ විට අන්තර් පරමාණුක බන්ධන ක්ෂුද්‍ර දුනු මෙන් විරූපණය වේ. ප්‍රත්‍යාස්ථ සීමාව දක්වා බර ඉවත් කළ විට ද්‍රව්‍යය නැවත මුල් දිගටම පැමිණේ. හුක් නියමයට අනුව අනුපාතික සීමාව තුළ ආතන්‍ය ප්‍රත්‍යබලය ආතන්‍ය වික්‍රියාවට අනුලෝමව සමානුපාතික වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Young’s Modulus Formula', si: 'යං මාපාංක සූත්‍රය' },
          description: {
            en: 'Ratio of tensile stress to tensile strain within the proportional limit: Y = (F / A) / (ΔL / L).',
            si: 'අනුපාතික සීමාව තුළ ආතන්‍ය ප්‍රත්‍යබලය සහ ආතන්‍ය වික්‍රියාව අතර අනුපාතය: Y = (F / A) / (ΔL / L).',
          },
          formula: 'Y = \\frac{F \\cdot L}{A \\cdot \\Delta L} = \\frac{4 F L}{\\pi d^2 \\Delta L}',
        },
        {
          title: { en: 'Strain Energy Density', si: 'වික්‍රියා ශක්ති ඝනත්වය' },
          description: {
            en: 'The elastic potential energy stored per unit volume equals the area under the linear stress-strain curve.',
            si: 'ඒකක පරිමාවක ගබඩා වන ප්‍රත්‍යාස්ථ විභව ශක්තිය රේඛීය ප්‍රත්‍යබල-වික්‍රියා වක්‍රය යටතේ වර්ගඵලයට සමාන වේ.',
          },
          formula: 'u = \\frac{1}{2} \\sigma \\epsilon = \\frac{1}{2} Y \\epsilon^2',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Breaking stress increases if a wire is made thicker.',
            si: 'කම්බියක් ඝනකම් කළ විට එහි බිඳුම් ප්‍රත්‍යබලය වැඩි වේ.',
          },
          clarification: {
            en: 'Breaking force increases with area, but breaking stress (force per unit area) is an intrinsic material property that remains constant.',
            si: 'බිඳුම් බලය වර්ගඵලය සමඟ වැඩි වුවද, බිඳුම් ප්‍රත්‍යබලය යනු ද්‍රව්‍යයේ සහජ නියතයක් වන බැවින් එය නියතව පවතී.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-10-1-01',
          question: {
            en: 'A wire of length 2.0 m and cross-sectional area 1.0e-6 m^2 stretches by 1.0 mm under a load of 100 N. Calculate Young’s modulus Y in Pa.',
            si: 'දිග 2.0 m සහ වර්ගඵලය 1.0e-6 m^2 වූ කම්බියක් 100 N බරක් යටතේ 1.0 mm කින් දිගු වේ. යං මාපාංකය Y (Pa වලින්) ගණනය කරන්න.',
          },
          numericalExpected: 2.0e11,
          numericalTolerance: 0.1e11,
          unit: { en: 'Pa', si: 'Pa' },
          hint: {
            en: 'Y = (F * L) / (A * ΔL) = (100 * 2) / (1e-6 * 1e-3).',
            si: 'Y = (F * L) / (A * ΔL).',
          },
          answer: {
            en: 'Y = 200 / 1e-9 = 2.0 × 10^11 Pa.',
            si: 'Y = 2.0 × 10^11 Pa වේ.',
          },
          competencyRef: 'Competency 10.1',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 10.2: Viscosity of Fluids & Stokes' Law
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-2',
    slug: 'viscosity-and-stokes-law',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 2,
    syllabusRef: 'Competency 10.2',
    title: {
      en: 'Viscosity of Fluids & Stokes’ Law',
      si: 'තරලවල දුස්ස්‍රාවිතාව සහ ස්ටෝක්ස් නියමය',
    },
    summary: {
      en: 'Investigate internal fluid friction, Newton’s viscosity law F = η A (dv/dx), dynamic viscosity coefficient η, streamline and turbulent flow, Poiseuille’s pipe flow formula Q = (π P r⁴)/(8 η L), Stokes’ drag F_d = 6πηrv, and terminal velocity v_t.',
      si: 'අභ්‍යන්තර තරල ඝර්ෂණය, නිව්ටන්ගේ දුස්ස්‍රාවිතා නියමය F = η A (dv/dx), ගතික දුස්ස්‍රාවිතා සංගුණකය η, ධාරාරේඛී හා කැළඹිලි ප්‍රවාහ, පුවසෙයිල් සූත්‍රය Q = (π P r⁴)/(8 η L), ස්ටෝක්ස් ඩ්‍රැග් බලය F_d = 6πηrv සහ අන්ත ප්‍රවේගය v_t විමර්ශනය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Define the coefficient of dynamic viscosity η and derive its SI unit (Pa·s or N·s·m⁻²).',
        si: 'ගතික දුස්ස්‍රාවිතා සංගුණකය η අර්ථ දැක්වීම සහ එහි SI ඒකකය (Pa·s හෙවත් N·s·m⁻²) ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'State Stokes’ Law for a spherical body, explain its validity conditions, and derive the terminal velocity equation.',
        si: 'ගෝලාකාර වස්තුවක් සඳහා ස්ටෝක්ස් නියමය ප්‍රකාශ කිරීම, වලංගුතා කොන්දේසි පැහැදිලි කිරීම සහ අන්ත ප්‍රවේග සමීකරණය ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Apply Poiseuille’s equation to determine volume flow rate through cylindrical tubes under laminar conditions.',
        si: 'ලැමිනාර් තත්ව යටතේ නල තුළින් පරිමා ප්‍රවාහ අනුපාතය සෙවීම සඳහා පුවසෙයිල් සමීකරණය යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Viscous shear resistance between adjacent laminar fluid layers', si: 'යාබද ලැමිනාර් තරල ස්ථර අතර දුස්ස්‍රාවී කැපුම් ප්‍රතිරෝධය' },
      { en: 'Newton’s law of viscosity: F = η A (dv/dx) and velocity gradient', si: 'නිව්ටන්ගේ දුස්ස්‍රාවිතා නියමය: F = η A (dv/dx) සහ ප්‍රවේග අනුක්‍රමණය' },
      { en: 'Streamline versus turbulent flow and critical velocity', si: 'ධාරාරේඛී හා කැළඹිලි ප්‍රවාහ සහ අවධි ප්‍රවේගය' },
      { en: 'Poiseuille’s formula: Q = (π P r⁴) / (8 η L) and fourth-power radius dependence', si: 'පුවසෙයිල් සූත්‍රය: Q = (π P r⁴) / (8 η L) සහ අරයේ 4 වන බලය මත රඳා පැවතීම' },
      { en: 'Stokes’ Law: F_d = 6πηrv and terminal velocity derivation v_t = 2r²(ρ - σ)g / 9η', si: 'ස්ටෝක්ස් නියමය: F_d = 6πηrv සහ අන්ත ප්‍රවේගය v_t = 2r²(ρ - σ)g / 9η ව්‍යුත්පන්නය' },
      { en: 'Stokes’ viscometer experimental design and wall effect precautions', si: 'ස්ටෝක්ස් දුස්ස්‍රාවීතාමාන පරීක්ෂණ සැලසුම සහ බිත්ති බලපෑම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Viscosity is internal fluid friction that resists relative motion between adjacent fluid layers. When a solid sphere moves slowly through a viscous fluid, viscous shear layers impart a drag force formulated by Sir George Gabriel Stokes as F_d = 6πηrv.',
        si: 'දුස්ස්‍රාවිතාව යනු යාබද තරල ස්ථර අතර සාපේක්ෂ චලිතයට විරුද්ධ වන අභ්‍යන්තර තරල ඝර්ෂණයයි. ගෝලාකාර වස්තුවක් දුස්ස්‍රාවී තරලයක් තුළින් සෙමින් ගමන් කරන විට ඇතිවන ඩ්‍රැග් බලය ජෝර්ජ් ස්ටෝක්ස් විසින් F_d = 6πηrv ලෙස ඉදිරිපත් කරන ලදී.',
      },
      keyConcepts: [
        {
          title: { en: 'Stokes’ Drag Law', si: 'ස්ටෝක්ස් ඩ්‍රැග් නියමය' },
          description: {
            en: 'For a sphere of radius r moving at laminar speed v through a fluid of viscosity η: F_d = 6πηrv.',
            si: 'දුස්ස්‍රාවිතාව η වූ තරලයක් තුළ v ලැමිනාර් ප්‍රවේගයෙන් චලනය වන අරය r වූ ගෝලයක් මත ඩ්‍රැග් බලය: F_d = 6πηrv වේ.',
          },
          formula: 'F_d = 6\\pi \\eta r v',
        },
        {
          title: { en: 'Terminal Velocity Equation', si: 'අන්ත ප්‍රවේග සමීකරණය' },
          description: {
            en: 'When downward weight equals buoyant upthrust plus viscous drag, acceleration ceases and terminal velocity is attained.',
            si: 'පහළට බර = උඩුකුරු තෙරපුම + දුස්ස්‍රාවී ඩ්‍රැග් බලය වූ විට ත්වරණය ශුන්‍ය වී අන්ත ප්‍රවේගය ලැබේ.',
          },
          formula: 'v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Terminal velocity is directly proportional to sphere radius r.',
            si: 'අන්ත ප්‍රවේගය ගෝලයේ අරය r ට සෘජුව සමානුපාතික වේ.',
          },
          clarification: {
            en: 'Net gravitational driving force scales with volume (r³), while Stokes drag scales with (r·v). Thus terminal velocity scales with radius squared: v_t ∝ r².',
            si: 'බර පරිමාව (r³) මතද ඩ්‍රැග් බලය r මතද රඳා පවතින බැවින් අන්ත ප්‍රවේගය අරයේ වර්ගයට අනුලෝමව සමානුපාතික වේ (v_t ∝ r²).',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-10-2-01',
          question: {
            en: 'Calculate the viscous drag force F_d in Newtons on a sphere of radius 2.0 mm falling at 0.050 m/s in oil of viscosity 0.80 Pa·s.',
            si: 'දුස්ස්‍රාවිතාව 0.80 Pa·s වූ තෙලක් තුළින් 0.050 m/s ප්‍රවේගයෙන් වැටෙන අරය 2.0 mm ගෝලයක් මත ඩ්‍රැග් බලය F_d (N වලින්) ගණනය කරන්න.',
          },
          numericalExpected: 0.00151,
          numericalTolerance: 0.0001,
          unit: { en: 'N', si: 'N' },
          hint: {
            en: 'F_d = 6 * pi * η * r * v.',
            si: 'F_d = 6 * pi * η * r * v.',
          },
          answer: {
            en: 'F_d = 6 * 3.1416 * 0.80 * 2.0e-3 * 0.050 = 0.00151 N.',
            si: 'F_d = 0.00151 N වේ.',
          },
          competencyRef: 'Competency 10.2',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 10.3: Surface Tension & Capillary Action
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-3',
    slug: 'surface-tension-and-capillarity',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 3,
    syllabusRef: 'Competency 10.3',
    title: {
      en: 'Surface Tension & Capillary Action',
      si: 'පෘෂ්ඨික ආතතිය සහ කේශික ක්‍රියාව',
    },
    summary: {
      en: 'Master intermolecular cohesion, surface energy, surface tension γ = F/L, excess pressure inside drops ΔP = 2γ/R and soap bubbles ΔP = 4γ/R, contact angle θ, and Jurin’s capillary rise law h = (2γ cosθ)/(ρ g r).',
      si: 'අන්තර් අණුක සංසක්තිය, පෘෂ්ඨික ශක්තිය, පෘෂ්ඨික ආතතිය γ = F/L, බිංදු තුළ අතිරික්ත පීඩනය ΔP = 2γ/R සහ සබන් බුබුලු තුළ ΔP = 4γ/R, ස්පර්ශ කෝණය θ, සහ ජූරින්ගේ කේශික උද්ගමන නියමය h = (2γ cosθ)/(ρ g r) ප්‍රගුණ කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Explain surface tension in terms of unbalanced cohesive intermolecular forces and surface free energy.',
        si: 'අසමතුලිත සංසක්ති අන්තර් අණුක බල සහ පෘෂ්ඨික නිදහස් ශක්තිය ඇසුරින් පෘෂ්ඨික ආතතිය පැහැදිලි කිරීම.',
      },
      {
        en: 'Derive excess pressure inside spherical liquid drops (2γ/R) and thin hollow soap bubbles (4γ/R).',
        si: 'ගෝලාකාර ද්‍රව බිංදු (2γ/R) සහ සිහින් සබන් බුබුලු (4γ/R) තුළ අතිරික්ත පීඩන සමීකරණ ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Apply Jurin’s Law h = (2γ cosθ)/(ρ g r) to determine capillary rise or depression and calculate surface tension.',
        si: 'කේශික උද්ගමනය හෝ අවපාතය සෙවීමට සහ පෘෂ්ඨික ආතතිය ගණනය කිරීමට ජූරින් නියමය h = (2γ cosθ)/(ρ g r) යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Molecular origin of surface tension: cohesion vs adhesion', si: 'පෘෂ්ඨික ආතතියේ අණුක සම්භවය: සංසක්තිය හා ආසක්තිය' },
      { en: 'Surface tension force (γ = F/L) and surface energy (γ = W/ΔA)', si: 'පෘෂ්ඨික ආතති බලය (γ = F/L) සහ පෘෂ්ඨික ශක්තිය (γ = W/ΔA)' },
      { en: 'Excess pressure in drops (ΔP = 2γ/R) and bubbles (ΔP = 4γ/R)', si: 'බිංදු (ΔP = 2γ/R) සහ බුබුලු (ΔP = 4γ/R) තුළ අතිරික්ත පීඩනය' },
      { en: 'Angle of contact θ, meniscus shapes, and wetting phenomena', si: 'ස්පර්ශ කෝණය θ, මෙනිස්කස් හැඩය සහ තෙත් කිරීමේ සංසිද්ධි' },
      { en: 'Capillary rise (Jurin’s Law): h = (2γ cosθ) / (ρ g r)', si: 'කේශික උද්ගමනය (ජූරින් නියමය): h = (2γ cosθ) / (ρ g r)' },
      { en: 'Experimental determination: capillary rise and microscope glass slide methods', si: 'පරීක්ෂණාත්මකව සෙවීම: කේශික උද්ගමන ක්‍රමය සහ අන්වීක්ෂ කදා ක්‍රමය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Molecules inside the bulk of a liquid experience cohesive attractions symmetrically in all directions. At the surface boundary, missing upward neighbors leave an unbalanced inward attraction, creating a microscopic surface tension that behaves like a stretched elastic membrane.',
        si: 'ද්‍රවයක් අභ්‍යන්තරයේ ඇති අණු සෑම දිශාවකින්ම සමමිතික සංසක්ති ආකර්ෂණ බලවලට ලක්වේ. පෘෂ්ඨයේ ඇති අණුවලට ඉහළින් අණු නොමැති බැවින් අභ්‍යන්තරය දෙසට අසමතුලිත ඇදීමක් හටගෙන පෘෂ්ඨය ඇදුණු ප්‍රත්‍යාස්ථ පටලයක් සේ හැසිරේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Excess Pressure Formulas', si: 'අතිරික්ත පීඩන සූත්‍ර' },
          description: {
            en: 'Inside a spherical liquid drop (1 surface) ΔP = 2γ/R. Inside a hollow soap bubble (2 surfaces) ΔP = 4γ/R.',
            si: 'ද්‍රව බිංදුවක් (පෘෂ්ඨ 1) තුළ ΔP = 2γ/R වේ. සබන් බුබුලක් (පෘෂ්ඨ 2) තුළ ΔP = 4γ/R වේ.',
          },
          formula: '\\Delta P_{\\text{drop}} = \\frac{2\\gamma}{R}, \\quad \\Delta P_{\\text{bubble}} = \\frac{4\\gamma}{R}',
        },
        {
          title: { en: 'Jurin’s Capillary Law', si: 'ජූරින්ගේ කේශික නියමය' },
          description: {
            en: 'Capillary height h attained in a tube of radius r is directly proportional to surface tension and inversely proportional to radius and liquid density.',
            si: 'අරය r වූ නලයක නගින කේශික උස h පෘෂ්ඨික ආතතියට අනුලෝමවද අරයට හා ඝනත්වයට ප්‍රතිලෝමවද සමානුපාතික වේ.',
          },
          formula: 'h = \\frac{2\\gamma \\cos\\theta}{\\rho g r}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A soap bubble and a water droplet of the same radius have the same excess internal pressure.',
            si: 'එකම අරය සහිත සබන් බුබුලක සහ ජල බිංදුවක අභ්‍යන්තර අතිරික්ත පීඩනය සමාන වේ.',
          },
          clarification: {
            en: 'A hollow soap bubble has both inner and outer liquid-gas surfaces, doubling the excess pressure (4γ/R) compared to a solid drop (2γ/R).',
            si: 'සබන් බුබුලකට ඇතුළත හා පිටත පෘෂ්ඨ දෙකක් ඇති බැවින් එහි අතිරික්ත පීඩනය (4γ/R) බිංදුවකට (2γ/R) වඩා දෙගුණයකි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'q-10-3-01',
          question: {
            en: 'Calculate the excess pressure inside a soap bubble of radius 2.0 cm in air if surface tension γ = 0.030 N/m.',
            si: 'පෘෂ්ඨික ආතතිය γ = 0.030 N/m වූ අරය 2.0 cm සබන් බුබුලක් තුළ අතිරික්ත පීඩනය (Pa වලින්) ගණනය කරන්න.',
          },
          numericalExpected: 6.0,
          numericalTolerance: 0.1,
          unit: { en: 'Pa', si: 'Pa' },
          hint: {
            en: 'ΔP = 4γ / R = (4 * 0.030) / 0.02.',
            si: 'ΔP = 4γ / R.',
          },
          answer: {
            en: 'ΔP = 0.12 / 0.02 = 6.0 Pa.',
            si: 'ΔP = 6.0 Pa වේ.',
          },
          competencyRef: 'Competency 10.3',
          difficulty: 'intermediate',
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 10.4: Practicals Hub
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-4',
    slug: 'matter-properties-practicals-hub',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 4,
    syllabusRef: 'Competencies 10.1, 10.2 & 10.3',
    title: {
      en: 'Mechanical Properties of Matter Practicals Hub',
      si: 'පදාර්ථයේ යාන්ත්‍රික ගුණ ප්‍රායෝගික පරීක්ෂණ මධ්‍යස්ථානය',
    },
    summary: {
      en: 'Complete interactive investigations for all 4 official NIE A/L Physics syllabus practicals: Searle’s wire Young’s modulus (Exp 14), Stokes’ falling sphere viscosity (Exp 15), Capillary tube surface tension (Exp 16), and Microscope slide surface tension (Exp 17).',
      si: 'නිල NIE ප්‍රායෝගික පරීක්ෂණ 4 ම සඳහා අන්තර්ක්‍රියාකාරී පරිසරය: සර්ල්ගේ යං මාපාංකය (පරීක්ෂණ 14), ස්ටෝක්ස් දුස්ස්‍රාවිතාව (පරීක්ෂණ 15), කේශික උද්ගමනය (පරීක්ෂණ 16) සහ අන්වීක්ෂ කදාව (පරීක්ෂණ 17).',
    },
    learningObjectives: [
      {
        en: 'Perform virtual experiments with live data tables, graph plotting, and gradient analysis.',
        si: 'දත්ත සටහන්, ප්‍රස්ථාර ඇඳීම් සහ අනුක්‍රමණ විශ්ලේෂණ සහිතව පරීක්ෂණ සිදු කිරීම.',
      },
      {
        en: 'Apply official precautions, eliminate zero and backlash errors, and assess experimental uncertainties.',
        si: 'නිල පූර්වාරක්ෂාවන් යෙදීම, ශූන්‍ය දෝෂ සහ පශ්චාත්පාත දෝෂ ඉවත් කිරීම සහ අවිනිශ්චිතතා තක්සේරු කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Experiment 14: Searle’s Young’s modulus apparatus and spirit level leveling', si: 'පරීක්ෂණ 14: සර්ල්ගේ යං මාපාංක උපකරණය' },
      { en: 'Experiment 15: Stokes’ falling sphere viscometer and terminal velocity timing', si: 'පරීක්ෂණ 15: ස්ටෝක්ස් දුස්ස්‍රාවීතාමානය' },
      { en: 'Experiment 16: Capillary rise and travelling microscope meniscus measurement', si: 'පරීක්ෂණ 16: කේශික උද්ගමන ක්‍රමය' },
      { en: 'Experiment 17: Microscope glass slide pull-off force method', si: 'පරීක්ෂණ 17: අන්වීක්ෂ කදා ක්‍රමය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'matter-properties-practicals',
  },

  // -------------------------------------------------------------------------
  // Lesson 10.5: Simulation Lab
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-5',
    slug: 'matter-properties-simulation-lab',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 5,
    syllabusRef: 'Unit 10 Interactive Lab',
    title: {
      en: 'Interactive Materials & Fluid Dynamics Simulation Lab',
      si: 'අන්තර්ක්‍රියාකාරී ද්‍රව්‍ය හා තරල ගති විද්‍යා සමාකරණ විද්‍යාගාරය',
    },
    summary: {
      en: '60fps multi-mode laboratory simulator: Mode 1 Searle’s wire elasticity with spirit level deflection; Mode 2 Stokes’ viscometer falling sphere with real-time vector drag tracking; Mode 3 Capillary tube rise and meniscus curvature.',
      si: '60fps බහු-ආකාර සමාකරණ විද්‍යාගාරය: ආකාරය 1 සර්ල්ගේ ප්‍රත්‍යාස්ථතා උපකරණය; ආකාරය 2 ස්ටෝක්ස් දුස්ස්‍රාවීතාමානය; ආකාරය 3 කේශික උද්ගමනය හා මෙනිස්කස් වක්‍රතාව.',
    },
    learningObjectives: [
      {
        en: 'Investigate how varying wire diameter and hanging load alters tensile strain and spirit level tilt in Searle’s apparatus.',
        si: 'කම්බි විෂ්කම්භය හා බර වෙනස් වන විට සර්ල්ගේ උපකරණයේ දිගු වීම හා ආත්ම මට්ටම වෙනස් වන අයුරු විමර්ශනය කිරීම.',
      },
      {
        en: 'Observe terminal velocity attainment and test how fluid viscosity and sphere radius govern viscous drag.',
        si: 'අන්ත ප්‍රවේගයට පත්වීම නිරීක්ෂණය කිරීම සහ තරල දුස්ස්‍රාවිතාව හා අරය ඩ්‍රැග් බලයට බලපාන අයුරු පරීක්ෂා කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Searle’s wire strain physics and micrometer reading simulation', si: 'සර්ල්ගේ කම්බි වික්‍රියා භෞතික විද්‍යාව' },
      { en: 'Falling sphere terminal velocity dynamics and free body vector diagrams', si: 'වැටෙන ගෝලයේ අන්ත ප්‍රවේග ගතිකය' },
      { en: 'Capillary rise vs depression and meniscus contact angle physics', si: 'කේශික උද්ගමනය සහ අවපාතය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'matter-properties-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 10.6: Unit 10 Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-10-6',
    slug: 'matter-properties-assessment',
    unitSlug: 'mechanical-properties-of-matter',
    unitOrder: 10,
    lessonOrder: 6,
    syllabusRef: 'Unit 10 Assessment',
    title: {
      en: 'Unit 10 Assessment: Mechanical Properties of Matter',
      si: 'ඒකක 10 ඇගයීම: පදාර්ථයේ යාන්ත්‍රික ගුණ',
    },
    summary: {
      en: 'Comprehensive summative evaluation covering all 3 syllabus competencies: solid elasticity & Young’s modulus, fluid viscosity & Stokes’ law, and surface tension & capillary action.',
      si: 'සියලුම විෂය නිර්දේශ නිපුණතා 3 ආවරණය වන සවිස්තරාත්මක සමාප්ති ඇගයීම: ඝන ප්‍රත්‍යාස්ථතාව, තරල දුස්ස්‍රාවිතාව සහ පෘෂ්ඨික ආතතිය.',
    },
    learningObjectives: [
      {
        en: 'Synthesize concepts across all matter properties competencies under timed exam conditions.',
        si: 'විභාග කොන්දේසි යටතේ පදාර්ථයේ යාන්ත්‍රික ගුණ නිපුණතා හරහා සංකල්ප ඒකාබද්ධ කර විසඳීම.',
      },
      {
        en: 'Evaluate individual mastery and receive targeted revision links for weak competencies.',
        si: 'පුද්ගලික ප්‍රවීණතාව ඇගයීම සහ දුර්වල නිපුණතා සඳහා ඉලක්කගත පුනරීක්ෂණ සබැඳි ලබා ගැනීම.',
      },
    ],
    topicOutline: [
      { en: '16 balanced questions across Competencies 10.1 through 10.3', si: 'නිපුණතා 10.1 සිට 10.3 දක්වා තුලිත ප්‍රශ්න 16 ක්' },
      { en: 'Automated scoring, per-competency performance breakdown, and revision suggestions', si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම සහ නිපුණතා අනුව කාර්යසාධන විශ්ලේෂණය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'matter-properties-assessment',
  },
];
