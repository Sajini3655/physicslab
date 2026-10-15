import { LessonDefinition } from '@/shared/curriculum/types';

export const THERMAL_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 4.1: Thermometry and Thermal Expansion
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-1',
    slug: 'thermometry-and-thermal-expansion',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 1,
    syllabusRef: 'Competency 4.1 & 4.2',
    title: {
      en: 'Thermometry and Thermal Expansion',
      si: 'උෂ්ණත්වමිතිය සහ තාප ප්‍රසාරණය',
    },
    summary: {
      en: 'Thermometric properties, Celsius and Kelvin temperature scales, constant-volume gas thermometer, linear, superficial, and cubical thermal expansion of solids and liquids, real vs apparent expansion, and anomalous expansion of water.',
      si: 'උෂ්ණත්වමිතික ගුණ, සෙල්සියස් සහ කෙල්වින් උෂ්ණත්ව පරිමාණ, නියත පරිමා වායු උෂ්ණත්වමානය, ඝන සහ ද්‍රවවල රේඛීය, වර්ගඵල සහ ඝනඵල ප්‍රසාරණය, සත්‍ය හා දෘශ්‍ය ප්‍රසාරණය, සහ ජලයේ විෂම ප්‍රසාරණය.',
    },
    learningObjectives: [
      {
        en: 'Construct and calibrate empirical temperature scales using measurable physical thermometric properties.',
        si: 'මැනිය හැකි භෞතික උෂ්ණත්වමිතික ගුණ ඇසුරින් උෂ්ණත්ව පරිමාණ ගොඩනැගීම සහ ක්‍රමාංකනය කිරීම.',
      },
      {
        en: 'Calculate linear (ΔL = L₀αΔT), superficial (ΔA = A₀βΔT), and cubical (ΔV = V₀γΔT) expansion of solids and liquids.',
        si: 'ඝන සහ ද්‍රවවල රේඛීය (ΔL = L₀αΔT), වර්ගඵල (ΔA = A₀βΔT), සහ ඝනඵල (ΔV = V₀γΔT) ප්‍රසාරණ ගණනය කිරීම.',
      },
      {
        en: 'Distinguish real and apparent cubical expansivity of liquids (γ_r = γ_a + γ_glass) and explain ecological consequences of water density maximum at 4 °C.',
        si: 'ද්‍රවවල සත්‍ය සහ දෘශ්‍ය ප්‍රසාරණතාව (γ_r = γ_a + γ_glass) වෙන්කර හඳුනා ගැනීම සහ 4 °C හි ජලයේ උපරිම ඝනත්වයේ පාරිසරික වැදගත්කම පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Thermometric properties and scale calibration: θ = [(X_θ - X₀)/(X₁₀₀ - X₀)] × 100', si: 'උෂ්ණත්වමිතික ගුණ සහ පරිමාණ ක්‍රමාංකනය' },
      { en: 'Absolute thermodynamic temperature scale and triple point of water (273.16 K)', si: 'නිරපේක්ෂ තාපගතික උෂ්ණත්ව පරිමාණය සහ ජලයේ ත්‍රිත්ව ලක්ෂ්‍යය' },
      { en: 'Coefficients of linear (α), superficial (β ≈ 2α), and cubical (γ ≈ 3α) expansion', si: 'රේඛීය, වර්ගඵල සහ ඝනඵල ප්‍රසාරණ සංගුණක' },
      { en: 'Real vs apparent expansion of liquids in dilatometer vessels', si: 'ද්‍රවවල සත්‍ය සහ දෘශ්‍ය පරිමා ප්‍රසාරණය' },
      { en: 'Anomalous expansion of water between 0 °C and 4 °C', si: '0 °C සහ 4 °C අතර ජලයේ විෂම ප්‍රසාරණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Thermal physics begins with temperature—a macroscopic measure of average molecular translational kinetic energy. When thermal energy is added to matter, internal vibrational amplitudes increase, producing thermal expansion in solids and liquids.',
        si: 'තාප භෞතික විද්‍යාව ආරම්භ වන්නේ උෂ්ණත්වයෙනි—එය අණුක මධ්‍යන්‍ය චාලක ශක්තියේ සාර්ව මිනුමකි. පදාර්ථයට තාප ශක්තිය ලබා දෙන විට අණුක කම්පන විස්තාරය වැඩි වී තාප ප්‍රසාරණය හටගනී.',
      },
      keyConcepts: [
        {
          title: { en: 'Two-Point Linear Celsius Scale', si: 'ලක්ෂ්‍ය-දෙකේ රේඛීය සෙල්සියස් පරිමාණය' },
          description: {
            en: 'For any property X varying linearly with temperature: θ = [(X_θ - X₀) / (X₁₀₀ - X₀)] × 100 °C.',
            si: 'උෂ්ණත්වය සමඟ රේඛීයව විචලනය වන ගුණයක් සඳහා: θ = [(X_θ - X₀) / (X₁₀₀ - X₀)] × 100 °C.',
          },
          formula: 'θ = [(X_θ - X₀) / (X₁₀₀ - X₀)] × 100',
        },
        {
          title: { en: 'Linear Expansion of Solids', si: 'ඝන ද්‍රව්‍යවල රේඛීය ප්‍රසාරණය' },
          description: {
            en: 'Fractional change in length per unit temperature rise: ΔL = L₀ · α · ΔT.',
            si: 'ඒකක උෂ්ණත්ව වැඩිවීමකට සිදුවන භාගික දිග වෙනස: ΔL = L₀ · α · ΔT.',
          },
          formula: 'ΔL = L₀ · α · ΔT',
        },
        {
          title: { en: 'Real vs Apparent Liquid Expansivity', si: 'ද්‍රවවල සත්‍ය සහ දෘශ්‍ය ප්‍රසාරණතාව' },
          description: {
            en: 'Real volume expansion equals apparent liquid overflow plus vessel expansion: γ_real = γ_apparent + γ_glass = γ_apparent + 3α_glass.',
            si: 'ද්‍රවයක සත්‍ය පරිමා ප්‍රසාරණතාව = දෘශ්‍ය ප්‍රසාරණතාව + බඳුනේ ඝන ප්‍රසාරණතාව: γ_real = γ_apparent + 3α_glass.',
          },
          formula: 'γ_real = γ_apparent + 3α_glass',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'When a ring or hollow sphere is heated, the internal hole shrinks because material expands inward.',
            si: 'මුදුවක් හෝ කුහර ගෝලයක් රත් කළ විට ද්‍රව්‍යය ඇතුළට ප්‍රසාරණය වී කුහරය කුඩා වේ.',
          },
          clarification: {
            en: 'Thermal expansion is photographic enlargement; every linear dimension expands outwards. The hole expands exactly as if it were filled with solid material.',
            si: 'තාප ප්‍රසාරණය ඡායාරූප විශාලනයක් බඳුය. සියලු මාන පිටතට විශාල වන අතර කුහරයද ඝන ද්‍රව්‍යයෙන් පිරී තිබුණාක් මෙන් ප්‍රසාරණය වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-4-1-1',
          competencyRef: 'Competency 4.1',
          difficulty: 'foundation',
          question: {
            en: 'A platinum resistance thermometer reads 80.0 Ω at 0 °C and 90.0 Ω at 100 °C. What temperature does it indicate when the resistance is 86.4 Ω?',
            si: 'ප්ලැටිනම් ප්‍රතිරෝධ උෂ්ණත්වමානයක් 0 °C හිදී 80.0 Ω ද 100 °C හිදී 90.0 Ω ද දක්වයි. ප්‍රතිරෝධය 86.4 Ω වන විට උෂ්ණත්වය කීයද?',
          },
          options: [
            { id: 'A', text: { en: '64.0 °C', si: '64.0 °C' } },
            { id: 'B', text: { en: '54.0 °C', si: '54.0 °C' } },
            { id: 'C', text: { en: '86.4 °C', si: '86.4 °C' } },
            { id: 'D', text: { en: '72.0 °C', si: '72.0 °C' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'θ = [(86.4 - 80.0) / (90.0 - 80.0)] × 100.',
            si: 'θ = [(86.4 - 80.0) / (90.0 - 80.0)] × 100.',
          },
          answer: {
            en: 'θ = (6.4 / 10.0) × 100 = 64.0 °C.',
            si: 'θ = (6.4 / 10.0) × 100 = 64.0 °C.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.2: Calorimetry and Latent Heat
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-2',
    slug: 'calorimetry-and-phase-changes',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 2,
    syllabusRef: 'Competency 4.3',
    title: {
      en: 'Calorimetry and Latent Heat',
      si: 'කැලරිමිතිය සහ ගුප්ත තාපය',
    },
    summary: {
      en: 'Specific heat capacity (Q = mcΔθ), latent heat of fusion (L_f) and vaporization (L_v), method of mixtures with radiation loss corrections, and Newton’s Law of Cooling.',
      si: 'විශිෂ්ට තාප ධාරිතාව (Q = mcΔθ), විලයනයේ (L_f) සහ වාෂ්පීකරණයේ (L_v) විශිෂ්ට ගුප්ත තාපය, විකිරණ හානි ශෝධන සහිත මිශ්‍රණ ක්‍රමය, සහ නිව්ටන්ගේ සිසිලන නියමය.',
    },
    learningObjectives: [
      {
        en: 'Apply heat energy conservation to multi-phase mixtures involving melting ice and condensing steam.',
        si: 'දියවන අයිස් සහ ඝනීභවනය වන වාෂ්ප සහිත බහු-කලාප මිශ්‍රණ සඳහා තාප ශක්ති සංස්ථිතිය යෙදීම.',
      },
      {
        en: 'Explain experimental precautions in latent heat measurements (dry ice, steam trap, cooling compensation).',
        si: 'ගුප්ත තාප පරීක්ෂණවල ප්‍රායෝගික ආරක්ෂක උපක්‍රම (වියළි අයිස්, වාෂ්ප උගුල, සිසිලන තුලනය) පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Sensible heat transfer: Q = m · c · Δθ', si: 'සංවේදී තාප හුවමාරුව: Q = m · c · Δθ' },
      { en: 'Latent heat of fusion of ice (L_f ≈ 3.34 × 10⁵ J/kg)', si: 'අයිස් විලයනයේ විශිෂ්ට ගුප්ත තාපය' },
      { en: 'Latent heat of vaporization of water (L_v ≈ 2.26 × 10⁶ J/kg)', si: 'ජල වාෂ්පීකරණයේ විශිෂ්ට ගුප්ත තාපය' },
      { en: 'Newton’s Law of Cooling: dθ/dt = -k(θ - θ₀)', si: 'නිව්ටන්ගේ සිසිලන නියමය: dθ/dt = -k(θ - θ₀)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Calorimetry quantifies the transfer of thermal energy during temperature changes and constant-temperature phase transformations, governed by the conservation of energy.',
        si: 'කැලරිමිතිය මඟින් උෂ්ණත්ව වෙනස්වීම් සහ නියත උෂ්ණත්ව කලාප විපර්යාසයන්හිදී සිදුවන තාප ශක්ති හුවමාරුව ශක්ති සංස්ථිති මූලධර්මය ඇසුරින් ප්‍රමාණාත්මකව මනිනු ලබයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Conservation of Heat Energy in Mixtures', si: 'මිශ්‍රණවල තාප ශක්ති සංස්ථිතිය' },
          description: {
            en: 'In an isolated calorimeter: Total Heat Lost by Hot Bodies = Total Heat Gained by Cold Bodies.',
            si: 'හුදකලා කැලරිමීටරයක: උණුසුම් වස්තු පිටකළ තාපය = සීතල වස්තු ලබාගත් තාපය.',
          },
          formula: 'Σ Q_lost = Σ Q_gained',
        },
        {
          title: { en: 'Latent Phase Transformation', si: 'ගුප්ත කලාප විපර්යාසය' },
          description: {
            en: 'During melting or boiling, temperature remains constant as absorbed energy breaks intermolecular bonds: Q = m · L.',
            si: 'ද්‍රවාංකයේදී හෝ තාපාංකයේදී උෂ්ණත්වය නියතව පවතින අතර උරාගන්නා ශක්තිය අන්තර්-අණුක බන්ධන බිඳීමට වැයවේ: Q = m · L.',
          },
          formula: 'Q = m · L',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'When water is boiling at 100 °C, continuing to supply heat makes the liquid water hotter than 100 °C.',
            si: 'ජලය 100 °C හි නටන විට දිගටම තාපය සැපයීමෙන් ද්‍රව ජලය 100 °C ට වඩා රත් වේ.',
          },
          clarification: {
            en: 'At constant atmospheric pressure, liquid water cannot exceed 100 °C. All added heat supplies latent heat of vaporization (L_v) converting liquid into steam.',
            si: 'නියත වායුගෝලීය පීඩනයේදී ද්‍රව ජලය 100 °C නොඉක්මවයි. සපයන සියලු තාපය වාෂ්පීකරණ ගුප්ත තාපය ලෙස වාෂ්ප සෑදීමට වැයවේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-4-2-1',
          competencyRef: 'Competency 4.3',
          difficulty: 'intermediate',
          question: {
            en: 'How much energy in kJ is required to melt 0.50 kg of ice at 0 °C into liquid water at 0 °C? (L_f = 3.34 × 10⁵ J/kg).',
            si: '0 °C හි පවතින අයිස් 0.50 kg ක් 0 °C ජලය බවට පත් කිරීමට අවශ්‍ය ශක්තිය kJ වලින් කීයද?',
          },
          options: [
            { id: 'A', text: { en: '167 kJ', si: '167 kJ' } },
            { id: 'B', text: { en: '334 kJ', si: '334 kJ' } },
            { id: 'C', text: { en: '83.5 kJ', si: '83.5 kJ' } },
            { id: 'D', text: { en: '668 kJ', si: '668 kJ' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'Q = m · L_f = 0.50 × 334 kJ.',
            si: 'Q = m · L_f = 0.50 × 334 kJ.',
          },
          answer: {
            en: 'Q = 0.50 × 334,000 J = 167,000 J = 167 kJ.',
            si: 'Q = 0.50 × 334 kJ = 167 kJ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.3: Gas Laws and Kinetic Theory
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-3',
    slug: 'ideal-gas-laws-and-kinetic-theory',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 3,
    syllabusRef: 'Competency 4.4',
    title: {
      en: 'Gas Laws and Kinetic Theory',
      si: 'වායු නියම සහ චාලක වාදය',
    },
    summary: {
      en: 'Boyle’s, Charles’s, and Pressure laws, ideal gas equation of state PV = nRT, microscopic kinetic model derivation P = ⅓ρc_rms², and molecular translational kinetic energy (E_k = 3/2 k_B T).',
      si: 'බොයිල්, චාල්ස් සහ පීඩන නියම, පරිපූර්ණ වායු අවස්ථා සමීකරණය PV = nRT, අන්වීක්ෂීය චාලක ආකෘතිය P = ⅓ρc_rms², සහ අණුක රේඛීය චාලක ශක්තිය (E_k = 3/2 k_B T).',
    },
    learningObjectives: [
      {
        en: 'Verify Boyle’s Law experimentally and apply PV = nRT across changing thermodynamic states.',
        si: 'බොයිල් නියමය ප්‍රායෝගිකව සත්‍යාපනය කිරීම සහ PV = nRT විවිධ තාපගතික අවස්ථා සඳහා යෙදීම.',
      },
      {
        en: 'Derive kinetic theory pressure formula P = ⅓ρc_rms² from elastic collision momentum transfers.',
        si: 'ප්‍රත්‍යාස්ථ ගැටුම් ගම්‍යතා හුවමාරුවෙන් චාලක වාද පීඩන සූත්‍රය P = ⅓ρc_rms² ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Relate absolute temperature directly to mean molecular translational kinetic energy.',
        si: 'නිරපේක්ෂ උෂ්ණත්වය අණුක මධ්‍යන්‍ය රේඛීය චාලක ශක්තියට සෘජුව සම්බන්ධ කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Boyle’s Law: P · V = const (T = const)', si: 'බොයිල් නියමය: P · V = නියතය (T = නියත)' },
      { en: 'Charles’s and Pressure Laws: V/T = const, P/T = const', si: 'චාල්ස් සහ පීඩන නියම' },
      { en: 'Ideal gas equation: PV = nRT = N k_B T', si: 'පරිපූර්ණ වායු සමීකරණය: PV = nRT' },
      { en: 'Microscopic kinetic derivation: P = ⅓ ρ c_rms²', si: 'අන්වීක්ෂීය චාලක ව්‍යුත්පන්නය: P = ⅓ ρ c_rms²' },
      { en: 'Molecular RMS speed: c_rms = √(3RT/M)', si: 'වර්ග මධ්‍යන්‍ය මූල ප්‍රවේගය: c_rms = √(3RT/M)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The kinetic theory of gases bridges macroscopic thermal observables (pressure, volume, temperature) with microscopic Newtonian particle collisions of millions of randomly moving molecules.',
        si: 'වායුවල චාලක වාදය මඟින් සාර්ව තාපගතික විචල්‍යයන් (පීඩනය, පරිමාව, උෂ්ණත්වය) අහඹු ලෙස චලනය වන අණුවල අන්වීක්ෂීය නිව්ටෝනියානු අංශු ගැටුම් සමඟ සම්බන්ධ කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Ideal Gas Equation of State', si: 'පරිපූර්ණ වායු අවස්ථා සමීකරණය' },
          description: {
            en: 'Combines all three empirical gas laws into a unified equation: PV = nRT.',
            si: 'ප්‍රායෝගික වායු නියම තුනම ඒකාබද්ධ කරන සමීකරණය: PV = nRT.',
          },
          formula: 'PV = nRT',
        },
        {
          title: { en: 'Kinetic Pressure Equation', si: 'චාලක පීඩන සමීකරණය' },
          description: {
            en: 'Pressure is the rate of momentum transfer per unit wall area from elastic molecular collisions: P = 1/3 ρ c_rms².',
            si: 'පීඩනය යනු බිත්තියේ ඒකක වර්ගඵලයකට සිදුවන ගම්‍යතා හුවමාරු සීඝ්‍රතාවයි: P = 1/3 ρ c_rms².',
          },
          formula: 'P = 1/3 ρ c_rms²',
        },
        {
          title: { en: 'Molecular Kinetic Energy and Temperature', si: 'අණුක චාලක ශක්තිය සහ උෂ්ණත්වය' },
          description: {
            en: 'Average translational kinetic energy per molecule is strictly proportional to absolute temperature: E_k = 3/2 k_B T.',
            si: 'අණුවක මධ්‍යන්‍ය රේඛීය චාලක ශක්තිය නිරපේක්ෂ උෂ්ණත්වයට සෘජුව සමානුපාතික වේ: E_k = 3/2 k_B T.',
          },
          formula: 'E_k = 3/2 k_B T',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Heavier gas molecules at the same temperature have higher kinetic energy than lighter ones.',
            si: 'එකම උෂ්ණත්වයේදී බරින් වැඩි වායු අණුවලට සැහැල්ලු අණුවලට වඩා වැඩි චාලක ශක්තියක් ඇත.',
          },
          clarification: {
            en: 'Translational kinetic energy depends strictly on temperature (E_k = 3/2 k_B T). Heavier molecules move with smaller RMS speed, but their mean kinetic energy is identical to lighter molecules.',
            si: 'චාලක ශක්තිය රඳා පවතින්නේ උෂ්ණත්වය මත පමණි (3/2 k_B T). බර අණුවල වේගය අඩු නමුත් මධ්‍යන්‍ය චාලක ශක්තිය හරියටම සමාන වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-4-3-1',
          competencyRef: 'Competency 4.4',
          difficulty: 'intermediate',
          question: {
            en: 'If the absolute temperature of an ideal gas is quadrupled from 200 K to 800 K, by what factor does the molecular r.m.s. speed increase?',
            si: 'පරිපූර්ණ වායුවක නිරපේක්ෂ උෂ්ණත්වය 200 K සිට 800 K දක්වා 4 ගුණයකින් වැඩි කළහොත්, අණුවල වර්ග මධ්‍යන්‍ය මූල ප්‍රවේගය වැඩිවන සාධකය කුමක්ද?',
          },
          options: [
            { id: 'A', text: { en: '2 times', si: '2 ගුණයකින්' } },
            { id: 'B', text: { en: '4 times', si: '4 ගුණයකින්' } },
            { id: 'C', text: { en: '16 times', si: '16 ගුණයකින්' } },
            { id: 'D', text: { en: '√2 times', si: '√2 ගුණයකින්' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'c_rms ∝ √T.',
            si: 'c_rms ∝ √T.',
          },
          answer: {
            en: 'c_rms is proportional to √T, so √4 = 2 times.',
            si: 'c_rms ∝ √T බැවින් √4 = 2 ගුණයකින් වැඩිවේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.4: First Law of Thermodynamics
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-4',
    slug: 'thermodynamics-first-law',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 4,
    syllabusRef: 'Competency 4.5',
    title: {
      en: 'First Law of Thermodynamics',
      si: 'තාපගති විද්‍යාවේ පළමු වන නියමය',
    },
    summary: {
      en: 'Thermodynamic systems, internal energy, work done by expanding gas (W = ∫ P dV), First Law statement (ΔQ = ΔU + W), and isothermal, isobaric, isochoric, and adiabatic processes.',
      si: 'තාපගතික පද්ධති, අභ්‍යන්තර ශක්තිය, වායු ප්‍රසාරණ කාර්යය (W = ∫ P dV), පළමු නියමය (ΔQ = ΔU + W), සහ සමෝෂ්ණ, සමපීඩන, සමපරිමා, සහ රෝධෝෂ්ණ ක්‍රියාවලි.',
    },
    learningObjectives: [
      {
        en: 'Apply First Law of Thermodynamics energy balance ΔQ = ΔU + W with consistent sign conventions.',
        si: 'නිවැරදි සලකුණු සම්මුති සහිතව තාපගති විද්‍යාවේ පළමු නියමය ΔQ = ΔU + W යෙදීම.',
      },
      {
        en: 'Interpret PV indicator diagrams and calculate work done as the area under the process curve.',
        si: 'PV දර්ශක සටහන් අර්ථකථනය කර වක්‍රය යටතේ වර්ගඵලයෙන් කාර්යය ගණනය කිරීම.',
      },
      {
        en: 'Compare isothermal (T = const, ΔU = 0) and adiabatic (ΔQ = 0, PV^γ = const) expansions.',
        si: 'සමෝෂ්ණ (ΔU = 0) සහ රෝධෝෂ්ණ (ΔQ = 0, PV^γ = නියත) ප්‍රසාරණ සංසන්දනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of internal energy U and state functions', si: 'අභ්‍යන්තර ශක්තිය සහ අවස්ථා ශ්‍රිත' },
      { en: 'Work done during expansion: W = ∫ P dV (area under PV graph)', si: 'ප්‍රසාරණ කාර්යය: W = ∫ P dV' },
      { en: 'First Law equation: ΔQ = ΔU + W', si: 'පළමු නියම සමීකරණය: ΔQ = ΔU + W' },
      { en: 'Isothermal, isobaric, isochoric, and adiabatic processes', si: 'සමෝෂ්ණ, සමපීඩන, සමපරිමා සහ රෝධෝෂ්ණ ක්‍රියාවලි' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The First Law of Thermodynamics is the universal law of conservation of energy applied to thermodynamic systems. Heat added to a system either increases its internal energy or performs work on the surroundings.',
        si: 'තාපගති විද්‍යාවේ පළමු නියමය යනු තාපගතික පද්ධති සඳහා ශක්ති සංස්ථිති මූලධර්මය යෙදීමයි. පද්ධතියකට සපයන තාපය එහි අභ්‍යන්තර ශක්තිය වැඩි කිරීමට හෝ බාහිර කාර්යය කිරීමට යොදා ගැනේ.',
      },
      keyConcepts: [
        {
          title: { en: 'First Law of Thermodynamics', si: 'තාපගති විද්‍යාවේ පළමු නියමය' },
          description: {
            en: 'ΔQ = ΔU + W, where ΔQ is heat supplied, ΔU is increase in internal energy, and W is work done by the system.',
            si: 'ΔQ = ΔU + W, මෙහි ΔQ යනු සැපයූ තාපය, ΔU යනු අභ්‍යන්තර ශක්ති වැඩිවීම, සහ W යනු පද්ධතිය මඟින් කළ කාර්යයයි.',
          },
          formula: 'ΔQ = ΔU + W',
        },
        {
          title: { en: 'Work Done on PV Diagram', si: 'PV ප්‍රස්තාරයේ කළ කාර්යය' },
          description: {
            en: 'Work done equals the area under the process curve on a pressure-volume indicator diagram: W = ∫ P dV.',
            si: 'කාර්යය යනු PV දර්ශක සටහනේ ක්‍රියාවලි වක්‍රයට යටින් වූ වර්ගඵලයයි: W = ∫ P dV.',
          },
          formula: 'W = ∫ P dV',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A gas doing work in an expansion must always have heat supplied to it.',
            si: 'ප්‍රසාරණයේදී කාර්යය කරන වායුවකට සැමවිටම පිටතින් තාපය සැපයිය යුතුය.',
          },
          clarification: {
            en: 'In an adiabatic expansion (ΔQ = 0), the gas does positive work at the expense of its own internal energy (W = -ΔU), cooling down in the process.',
            si: 'රෝධෝෂ්ණ ප්‍රසාරණයකදී (ΔQ = 0), වායුව කාර්යය කරන්නේ තමන්ගේම අභ්‍යන්තර ශක්තිය වැය කරමිනි (W = -ΔU). එහිදී වායුව සිසිල් වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-4-4-1',
          competencyRef: 'Competency 4.5',
          difficulty: 'intermediate',
          question: {
            en: 'A gas expands at a constant pressure of 3.0 × 10⁵ Pa from 0.02 m³ to 0.05 m³. If 12,000 J of heat was added to the gas, what is its change in internal energy ΔU?',
            si: '3.0 × 10⁵ Pa නියත පීඩනයක් යටතේ වායුවක් 0.02 m³ සිට 0.05 m³ දක්වා ප්‍රසාරණය වේ. වායුවට 12,000 J තාපයක් සැපයුවේ නම් අභ්‍යන්තර ශක්ති වෙනස ΔU කීයද?',
          },
          options: [
            { id: 'A', text: { en: '+3,000 J', si: '+3,000 J' } },
            { id: 'B', text: { en: '+9,000 J', si: '+9,000 J' } },
            { id: 'C', text: { en: '-3,000 J', si: '-3,000 J' } },
            { id: 'D', text: { en: '+21,000 J', si: '+21,000 J' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'W = P · ΔV = 3.0 × 10⁵ × 0.03 = 9,000 J. ΔU = ΔQ - W.',
            si: 'W = P · ΔV = 9,000 J. ΔU = 12,000 - 9,000.',
          },
          answer: {
            en: 'W = 9,000 J. ΔU = 12,000 - 9,000 = +3,000 J.',
            si: 'W = 9,000 J. ΔU = 12,000 - 9,000 = +3,000 J.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.5: Thermal Conduction, Convection & Radiation
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-5',
    slug: 'thermal-conduction-convection-radiation',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 5,
    syllabusRef: 'Competency 4.5',
    title: {
      en: 'Thermal Conduction, Convection & Radiation',
      si: 'තාප සන්නයනය, සංවහනය සහ විකිරණය',
    },
    summary: {
      en: 'Steady-state conduction (dQ/dt = kA(θ₁ - θ₂)/d), Searle’s bar method, natural and forced convection, blackbody radiation, Stefan-Boltzmann law (P = eσAT⁴), and Wien’s displacement law.',
      si: 'ස්ථාවර සන්නයනය (dQ/dt = kA(θ₁ - θ₂)/d), සර්ල්ගේ දණ්ඩ ක්‍රමය, ස්වභාවික හා බලිත සංවහනය, කෘෂ්ණ වස්තු විකිරණය, ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය (P = eσAT⁴), සහ වින්ගේ විස්ථාපන නියමය.',
    },
    learningObjectives: [
      {
        en: 'Calculate rate of steady-state heat conduction across single and composite layers.',
        si: 'තනි සහ සංයුක්ත ස්ථර හරහා ස්ථාවර තාප සන්නයන සීඝ්‍රතාව ගණනය කිරීම.',
      },
      {
        en: 'Determine thermal conductivity of a good conductor using Searle’s bar apparatus.',
        si: 'සර්ල්ගේ උපකරණය භාවිතයෙන් හොඳ සන්නායකයක තාප සන්නායකතාව නිර්ණය කිරීම.',
      },
      {
        en: 'Apply Stefan-Boltzmann and Wien’s displacement laws to blackbody radiation emission.',
        si: 'කෘෂ්ණ වස්තු විකිරණය සඳහා ස්ටෙෆාන්-බෝල්ට්ස්මාන් සහ වින්ගේ විස්ථාපන නියම යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Fourier’s law of heat conduction: dQ/dt = k · A · (Δθ / d)', si: 'තාප සන්නයනය පිළිබඳ ෆූරියර් නියමය' },
      { en: 'Searle’s bar apparatus for thermal conductivity of copper', si: 'තඹවල තාප සන්නායකතාව සෙවීමේ සර්ල්ගේ දණ්ඩ' },
      { en: 'Mechanisms of natural and forced convection', si: 'ස්වභාවික සහ බලිත සංවහන ක්‍රම' },
      { en: 'Stefan-Boltzmann law of thermal radiation: P = e · σ · A · T⁴', si: 'ස්ටෙෆාන්-බෝල්ට්ස්මාන් විකිරණ නියමය' },
      { en: 'Wien’s displacement law: λ_max · T = b', si: 'වින්ගේ විස්ථාපන නියමය: λ_max · T = b' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Heat transfer describes the energy flow driven by temperature differences via three fundamental mechanisms: conduction through microscopic collisions and free electrons, convection via bulk fluid circulation, and electromagnetic thermal radiation.',
        si: 'තාප හුවමාරුව උෂ්ණත්ව වෙනස්කම් නිසා ශක්තිය ගලා යාම මූලික ක්‍රම 3ක් ඔස්සේ පැහැදිලි කරයි: අණුක ගැටුම් සහ නිදහස් ඉලෙක්ට්‍රෝන මඟින් සන්නයනය, තරල සංසරණය මඟින් සංවහනය, සහ විද්‍යුත් චුම්භක තරංග මඟින් විකිරණය.',
      },
      keyConcepts: [
        {
          title: { en: 'Steady-State Conduction', si: 'ස්ථාවර අවස්ථා තාප සන්නයනය' },
          description: {
            en: 'Rate of heat flow is proportional to cross-sectional area and temperature gradient: dQ/dt = k · A · (θ₁ - θ₂) / d.',
            si: 'තාප ගැලුම් සීඝ්‍රතාව හරස්කඩ වර්ගඵලයට සහ උෂ්ණත්ව අනුක්‍රමණයට සමානුපාතික වේ: dQ/dt = k · A · (θ₁ - θ₂) / d.',
          },
          formula: 'dQ/dt = k · A · (θ₁ - θ₂) / d',
        },
        {
          title: { en: 'Stefan-Boltzmann Law', si: 'ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය' },
          description: {
            en: 'Total power radiated per unit area is proportional to the fourth power of absolute temperature: P = e · σ · A · T⁴.',
            si: 'විකිරණය වන මුළු ජවය නිරපේක්ෂ උෂ්ණත්වයේ සිව්වන බලයට සමානුපාතික වේ: P = e · σ · A · T⁴.',
          },
          formula: 'P = e · σ · A · T⁴',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thermal radiation requires an intervening gaseous medium to propagate.',
            si: 'තාප විකිරණය ගමන් කිරීම සඳහා වායුමය මාධ්‍යයක් අවශ්‍ය වේ.',
          },
          clarification: {
            en: 'Thermal radiation consists of electromagnetic waves (infrared and light) and propagates at the speed of light through empty vacuum.',
            si: 'තාප විකිරණය යනු විද්‍යුත් චුම්භක තරංග වන අතර සම්පූර්ණ රික්තකය හරහා ආලෝකයේ වේගයෙන් ගමන් කරයි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-4-5-1',
          competencyRef: 'Competency 4.5',
          difficulty: 'intermediate',
          question: {
            en: 'If the absolute temperature of a blackbody emitter is doubled, by what factor does its emitted radiation power increase?',
            si: 'කෘෂ්ණ වස්තු විමෝචකයක නිරපේක්ෂ උෂ්ණත්වය දෙගුණ කළහොත්, එහි විමෝචිත විකිරණ ජවය වැඩිවන සාධකය කුමක්ද?',
          },
          options: [
            { id: 'A', text: { en: '16 times', si: '16 ගුණයකින්' } },
            { id: 'B', text: { en: '8 times', si: '8 ගුණයකින්' } },
            { id: 'C', text: { en: '4 times', si: '4 ගුණයකින්' } },
            { id: 'D', text: { en: '2 times', si: '2 ගුණයකින්' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'P ∝ T⁴. (2)⁴ = 16.',
            si: 'P ∝ T⁴. (2)⁴ = 16.',
          },
          answer: {
            en: 'By Stefan-Boltzmann law, P ∝ T⁴. 2⁴ = 16 times.',
            si: 'P ∝ T⁴ බැවින් 2⁴ = 16 ගුණයකින් වැඩිවේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.6: Interactive Thermodynamics Simulation
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-6',
    slug: 'ideal-gas-thermodynamics-simulation',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 6,
    syllabusRef: 'Competency 4.4 & 4.5',
    title: {
      en: 'Interactive Ideal Gas Thermodynamics Laboratory',
      si: 'අන්තර්ක්‍රියාකාරී පරිපූර්ණ වායු තාපගති විද්‍යාගාරය',
    },
    summary: {
      en: 'Real-time interactive piston-cylinder gas simulation with live PV indicator diagrams, molecular kinetic motion visualizer, and energy balance metrics across Isothermal, Isobaric, Isochoric, and Adiabatic processes.',
      si: 'සජීවී PV දර්ශක සටහන්, අණුක චාලක චලිතය සහ සමෝෂ්ණ, සමපීඩන, සමපරිමා, සහ රෝධෝෂ්ණ ක්‍රියාවලිවල ශක්ති තුලනය සහිත අන්තර්ක්‍රියාකාරී වායු සිලින්ඩර සමාකරණය.',
    },
    learningObjectives: [
      {
        en: 'Visualize molecular collisions and pressure generation in real-time under changing chamber volume and temperature.',
        si: 'සිලින්ඩර පරිමාව සහ උෂ්ණත්වය වෙනස් වන විට අණුක ගැටුම් සහ පීඩනය ඇතිවන ආකාරය සජීවීව නිරීක්ෂණය කිරීම.',
      },
      {
        en: 'Verify First Law of Thermodynamics energy balances (ΔQ = ΔU + W) across distinct thermodynamic paths.',
        si: 'විවිධ තාපගතික මාර්ග ඔස්සේ පළමු නියම ශක්ති තුලනය (ΔQ = ΔU + W) සත්‍යාපනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Isothermal expansion and compression (T = const, ΔU = 0)', si: 'සමෝෂ්ණ ප්‍රසාරණය සහ සම්පීඩනය' },
      { en: 'Isobaric heating and cooling (P = const, W = PΔV)', si: 'සමපීඩන රත්කිරීම සහ සිසිල්කිරීම' },
      { en: 'Isochoric pressure variation (V = const, W = 0)', si: 'සමපරිමා පීඩන විචලනය' },
      { en: 'Adiabatic expansion and compression (ΔQ = 0, PV^γ = const)', si: 'රෝධෝෂ්ණ ප්‍රසාරණය සහ සම්පීඩනය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'ideal-gas-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 4.7: Unit 4 Practicals Hub
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-7',
    slug: 'thermal-practicals-hub',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 7,
    syllabusRef: 'Competencies 4.3, 4.4 & 4.5',
    title: {
      en: 'Unit 4 Practicals Hub: Virtual Thermal Laboratory',
      si: 'ඒකක 4 ප්‍රායෝගික පරීක්ෂණ: අතථ්‍ය තාප විද්‍යාගාරය',
    },
    summary: {
      en: 'Interactive virtual laboratory investigations for all 6 official NIE syllabus practicals: Boyle’s Law, solid specific heat capacity, latent heat of fusion of ice, latent heat of vaporization of water, Newton’s Law of Cooling, and Searle’s bar thermal conductivity.',
      si: 'විෂය නිර්දේශයේ නිල ප්‍රායෝගික පරීක්ෂණ 6 සඳහා අන්තර්ක්‍රියාකාරී පරිසරය: බොයිල් නියමය, ඝන ද්‍රව්‍යයක විශිෂ්ට තාප ධාරිතාව, අයිස් විලයන ගුප්ත තාපය, ජල වාෂ්පීකරණ ගුප්ත තාපය, නිව්ටන්ගේ සිසිලන නියමය, සහ සර්ල්ගේ දණ්ඩෙන් තාප සන්නායකතාව.',
    },
    learningObjectives: [
      {
        en: 'Perform virtual measurements, verify physical equations, and evaluate percentage discrepancies against standard literature values.',
        si: 'අතථ්‍ය මිනුම් ලබා ගැනීම, භෞතික සමීකරණ සත්‍යාපනය කිරීම සහ සම්මත අගයන් සමඟ ප්‍රතිශත විෂමතා තක්සේරු කිරීම.',
      },
      {
        en: 'Master laboratory precautions and error elimination procedures for practical examinations.',
        si: 'ප්‍රායෝගික පරීක්ෂණ විභාග සඳහා විද්‍යාගාර ආරක්ෂක පියවර සහ දෝෂ අවම කිරීමේ ක්‍රමවේද ප්‍රගුණ කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Practical 4.1: Boyle’s Law Verification (U-tube Manometer)', si: 'ප්‍රායෝගික 4.1: බොයිල් නියමය සත්‍යාපනය' },
      { en: 'Practical 4.2: Specific Heat of a Solid Metal by Method of Mixtures', si: 'ප්‍රායෝගික 4.2: මිශ්‍රණ ක්‍රමයෙන් ලෝහයක විශිෂ්ට තාප ධාරිතාව' },
      { en: 'Practical 4.3: Specific Latent Heat of Fusion of Ice', si: 'ප්‍රායෝගික 4.3: අයිස් විලයනයේ විශිෂ්ට ගුප්ත තාපය' },
      { en: 'Practical 4.4: Specific Latent Heat of Vaporization of Steam', si: 'ප්‍රායෝගික 4.4: ජල වාෂ්පීකරණයේ විශිෂ්ට ගුප්ත තාපය' },
      { en: 'Practical 4.5: Verification of Newton’s Law of Cooling', si: 'ප්‍රායෝගික 4.5: නිව්ටන්ගේ සිසිලන නියමය සත්‍යාපනය' },
      { en: 'Practical 4.6: Thermal Conductivity of Copper by Searle’s Bar', si: 'ප්‍රායෝගික 4.6: සර්ල්ගේ දණ්ඩෙන් තඹවල තාප සන්නායකතාව' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'thermal-practicals',
  },

  // -------------------------------------------------------------------------
  // Lesson 4.8: Laws of Thermodynamics & Cyclic Processes
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-8',
    slug: 'laws-of-thermodynamics',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 8,
    syllabusRef: 'Competency 4.8',
    title: {
      en: 'Laws of Thermodynamics and Cyclic Processes',
      si: 'තාපගති විද්‍යා නියම සහ චක්‍රීය ක්‍රියාවලි',
    },
    summary: {
      en: 'Zeroth Law, First Law of Thermodynamics ΔQ = ΔU + W, work done in gas expansion W = ∫p dV, isothermal, isobaric, isochoric, and adiabatic processes, and heat engine efficiency.',
      si: 'ශුන්‍ය වන නියමය, තාපගති විද්‍යාවේ පළමු නියමය ΔQ = ΔU + W, වායු ප්‍රසාරණයේ කාර්යය W = ∫p dV, සමෝෂ්ණ, සමපීඩන, සමපරිමා, සහ රෝධෝෂ්ණ ක්‍රියාවලි සහ තාප එන්ජින් කාර්යක්ෂමතාව.',
    },
    learningObjectives: [
      {
        en: 'Apply the First Law of Thermodynamics ΔQ = ΔU + W with proper sign conventions across diverse thermodynamic processes.',
        si: 'විවිධ තාපගතික ක්‍රියාවලි හරහා නිවැරදි ලකුණු සම්මුති සහිතව තාපගති විද්‍යාවේ පළමු නියමය ΔQ = ΔU + W යෙදීම.',
      },
      {
        en: 'Calculate work done from p-V indicator diagrams and determine net work and thermal efficiency for closed cycles.',
        si: 'p-V දර්ශක සටහන්වලින් සිදුකළ කාර්යය ගණනය කිරීම සහ සංවෘත චක්‍ර සඳහා ශුද්ධ කාර්යය හා තාප කාර්යක්ෂමතාව තීරණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Zeroth Law of Thermodynamics and concept of temperature', si: 'ශුන්‍ය වන නියමය සහ උෂ්ණත්ව සංකල්පය' },
      { en: 'First Law of Thermodynamics: ΔQ = ΔU + W sign convention', si: 'පළමු නියමය: ΔQ = ΔU + W ලකුණු සම්මුතිය' },
      { en: 'Internal energy U = (3/2)nRT of an ideal gas', si: 'පරිපූර්ණ වායුවක අභ්‍යන්තර ශක්තිය U = (3/2)nRT' },
      { en: 'Work done in isobaric (W = pΔV) and isothermal (W = nRT ln(V₂/V₁)) expansions', si: 'සමපීඩන සහ සමෝෂ්ණ ප්‍රසාරණවලදී කාර්යය' },
      { en: 'Adiabatic processes: ΔQ = 0, pV^γ = constant, work done at expense of internal energy', si: 'රෝධෝෂ්ණ ක්‍රියාවලි: ΔQ = 0, pV^γ = නියතයකි' },
      { en: 'Cyclic processes: net work from enclosed area in p-V loop, heat engine efficiency η = W_net / Q_in', si: 'චක්‍රීය ක්‍රියාවලි: p-V ලූපයේ වර්ගඵලයෙන් ශුද්ධ කාර්යය, තාප එන්ජින් කාර්යක්ෂමතාව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Thermodynamics governs energy transformations involving thermal energy and mechanical work. The First Law expresses universal conservation of energy applied to thermodynamic systems.',
        si: 'තාපගති විද්‍යාව මගින් තාප ශක්තිය සහ යාන්ත්‍රික කාර්යය අතර ශක්ති පරිවර්තන අධ්‍යයනය කරයි. පළමු නියමය යනු තාපගතික පද්ධති සඳහා ශක්ති සංස්ථිති නියමයයි.',
      },
      keyConcepts: [
        {
          title: { en: 'First Law of Thermodynamics', si: 'තාපගති විද්‍යාවේ පළමු නියමය' },
          description: {
            en: 'When heat ΔQ is supplied to a system, it increases internal energy by ΔU and performs external work W: ΔQ = ΔU + W. For an ideal gas, U depends solely on absolute temperature T.',
            si: 'පද්ධතියකට තාපය ΔQ සැපයූ විට එය අභ්‍යන්තර ශක්තිය ΔU කින් වැඩි කරන අතර බාහිර කාර්යය W සිදු කරයි: ΔQ = ΔU + W.',
          },
          formula: '\\Delta Q = \\Delta U + W, \\quad W = \\int p \\, dV',
        },
        {
          title: { en: 'Thermal Efficiency of a Cycle', si: 'චක්‍රයක තාප කාර්යක්ෂමතාව' },
          description: {
            en: 'In a cyclic engine, the system returns to its initial state (ΔU_cycle = 0). Net work done equals net heat absorbed: W_net = Q_in - Q_out. Thermal efficiency is η = W_net / Q_in = 1 - (Q_out / Q_in).',
            si: 'චක්‍රීය එන්ජිමක ආරම්භක තත්ත්වයට නැවත පැමිණේ (ΔU = 0). ශුද්ධ කාර්යය W_net = Q_in - Q_out. කාර්යක්ෂමතාව η = W_net / Q_in = 1 - (Q_out / Q_in) වේ.',
          },
          formula: '\\eta = \\frac{W_{\\text{net}}}{Q_{\\text{in}}} = 1 - \\frac{Q_{\\text{out}}}{Q_{\\text{in}}}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'In an isothermal expansion, work done is zero because temperature is constant.',
            si: 'සමෝෂ්ණ ප්‍රසාරණයකදී උෂ්ණත්වය නියත බැවින් සිදුකළ කාර්යය ශුන්‍ය වේ.',
          },
          clarification: {
            en: 'Because temperature is constant, change in internal energy ΔU = 0. Therefore, all heat supplied is converted directly into external work: W = ΔQ = nRT ln(V₂/V₁) > 0.',
            si: 'උෂ්ණත්වය නියත බැවින් අභ්‍යන්තර ශක්ති වෙනස ΔU = 0 වේ. එබැවින් සපයන සියලු තාපය බාහිර කාර්යය බවට පත්වේ: W = ΔQ > 0.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.9: Heat Transfer Mechanisms & Newton's Law of Cooling
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-9',
    slug: 'heat-transfer-mechanisms',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 9,
    syllabusRef: 'Competency 4.9',
    title: {
      en: 'Heat Transfer Mechanisms and Newton’s Law of Cooling',
      si: 'තාප සංක්‍රාමණ ක්‍රම සහ නිව්ටන්ගේ සිසිලන නියමය',
    },
    summary: {
      en: 'Conduction, Fourier’s law dQ/dt = -kA dT/dx, thermal conductivity k, composite rods in series/parallel, convection currents, black-body radiation, Stefan-Boltzmann law E = σeAT⁴, and Newton’s Law of Cooling.',
      si: 'සන්නයනය, ෆූරියේ නියමය dQ/dt = -kA dT/dx, තාප සන්නායකතාව k, ශ්‍රේණිගත/සමාන්තරගත සංයුක්ත දඬු, සංවහන ධාරා, කෘෂ්ණ වස්තු විකිරණය, ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය E = σeAT⁴ සහ නිව්ටන්ගේ සිසිලන නියමය.',
    },
    learningObjectives: [
      {
        en: 'Derive rate of heat flow through uniform and composite conductors in steady state using Fourier’s law.',
        si: 'ෆූරියේ නියමය ඇසුරින් ස්ථාවර තත්ත්වයේ ඒකාකාර හා සංයුක්ත සන්නායක තුළින් තාප ගැලීමේ සීඝ්‍රතාව ගොඩනැගීම.',
      },
      {
        en: 'Apply the Stefan-Boltzmann law and Newton’s Law of Cooling to solve practical cooling rate problems.',
        si: 'ප්‍රායෝගික සිසිලන සීඝ්‍රතා ගැටලු විසඳීමට ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය සහ නිව්ටන්ගේ සිසිලන නියමය යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Mechanism of thermal conduction: free electrons and lattice vibrations (phonons)', si: 'තාප සන්නයන යාන්ත්‍රණය: නිදහස් ඉලෙක්ට්‍රෝන සහ දැලිස් කම්පන' },
      { en: 'Fourier’s law of heat conduction: dQ/dt = kA(θ₁ - θ₂)/L', si: 'ෆූරියේ තාප සන්නයන නියමය: dQ/dt = kA(θ₁ - θ₂)/L' },
      { en: 'Composite thermal conductors in series and interface temperature', si: 'ශ්‍රේණිගත සංයුක්ත සන්නායක සහ අතුරු මුහුණත් උෂ්ණත්වය' },
      { en: 'Thermal radiation: Stefan-Boltzmann law E = σ e A T⁴, net heat exchange', si: 'තාප විකිරණය: ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය E = σ e A T⁴' },
      { en: 'Newton’s Law of Cooling: dθ/dt = -k(θ - θ₀) for small temperature excess', si: 'නිව්ටන්ගේ සිසිලන නියමය: සුළු උෂ්ණත්ව වෙනස්කම් සඳහා dθ/dt = -k(θ - θ₀)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Heat energy spontaneously transfers from regions of higher temperature to regions of lower temperature through three distinct physical mechanisms: conduction (particle contact), convection (bulk fluid movement), and radiation (electromagnetic waves).',
        si: 'තාප ශක්තිය වැඩි උෂ්ණත්ව ප්‍රදේශවල සිට අඩු උෂ්ණත්ව ප්‍රදේශ වෙත ක්‍රම තුනකින් සංක්‍රාමණය වේ: සන්නයනය (අංශු ගැටුම්), සංවහනය (තරල චලිතය), සහ විකිරණය (විද්‍යුත් චුම්භක තරංග).',
      },
      keyConcepts: [
        {
          title: { en: 'Thermal Conduction & Fourier’s Law', si: 'තාප සන්නයනය සහ ෆූරියේ නියමය' },
          description: {
            en: 'In steady state along a conductor of cross-sectional area A and length L with end temperatures θ₁ > θ₂: dQ/dt = k A (θ₁ - θ₂) / L, where k is the thermal conductivity (W m⁻¹ K⁻¹).',
            si: 'ස්ථාවර තත්ත්වයේ හරස්කඩ වර්ගඵලය A සහ දිග L වන දණ්ඩක් ඔස්සේ තාප ගැලීමේ සීඝ්‍රතාව: dQ/dt = k A (θ₁ - θ₂) / L වේ. මෙහි k යනු තාප සන්නායකතාවයි.',
          },
          formula: '\\frac{dQ}{dt} = k A \\frac{\\theta_1 - \\theta_2}{L}',
        },
        {
          title: { en: 'Stefan-Boltzmann Radiation & Net Exchange', si: 'ස්ටෙෆාන්-බෝල්ට්ස්මාන් විකිරණය' },
          description: {
            en: 'A surface of area A, emissivity e, and absolute temperature T emits radiation at rate P = σ e A T⁴, where σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴. In surroundings at temperature T₀: P_net = σ e A (T⁴ - T₀⁴).',
            si: 'නිරපේක්ෂ උෂ්ණත්වය T වන පෘෂ්ඨයකින් විකිරණය වන තාප සීඝ්‍රතාව P = σ e A T⁴ වේ. T₀ පරිසරයකදී ශුද්ධ විකිරණ සීඝ්‍රතාව P_net = σ e A (T⁴ - T₀⁴) වේ.',
          },
          formula: 'P_{\\text{net}} = \\sigma e A \\left(T^4 - T_0^4\\right)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Newton’s law of cooling applies accurately at all temperature differences, even several hundred degrees Celsius.',
            si: 'සෙල්සියස් අංශක සිය ගණනක විශාල උෂ්ණත්ව වෙනස්කම් සඳහාද නිව්ටන්ගේ සිසිලන නියමය නිවැරදිව වලංගු වේ.',
          },
          clarification: {
            en: 'Newton’s law of cooling dθ/dt ∝ (θ - θ₀) is a linear approximation of Stefan’s T⁴ law, valid ONLY when temperature excess (θ - θ₀) is small (typically < 30 °C). At high excess, T⁴ radiation dominates.',
            si: 'නිව්ටන්ගේ සිසිලන නියමය යනු ස්ටෙෆාන්ගේ T⁴ නියමයේ රේඛීය ආසන්න කිරීමකි. එය වලංගු වන්නේ පරිසරයට වඩා උෂ්ණත්ව වෙනස කුඩා වන විට (සාමාන්‍යයෙන් < 30 °C) පමණි.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 4.10: Unit 4 Summative Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-4-10',
    slug: 'thermal-physics-assessment',
    unitSlug: 'thermal-physics',
    unitOrder: 4,
    lessonOrder: 10,
    syllabusRef: 'Competencies 4.1 to 4.9',
    title: {
      en: 'Unit 4 Comprehensive Assessment: Thermal Physics',
      si: 'ඒකක 4 සමස්ත ඇගයීම: තාප භෞතික විද්‍යාව',
    },
    summary: {
      en: 'Rigorous 20-question summative examination covering all 9 syllabus competencies (4.1 to 4.9: Thermometry, Expansion, Gas Laws, Kinetic Theory, Calorimetry, Phase Changes, Humidity, Thermodynamics, Heat Transfer) with automated grading and competency analysis.',
      si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම සහ නිපුණතා විශ්ලේෂණය සහිත සියලුම නිපුණතා 9 (4.1 සිට 4.9) ආවරණය වන ප්‍රශ්න 20 කින් යුත් සමාප්ති ඇගයීම් විභාගය.',
    },
    learningObjectives: [
      {
        en: 'Assess student mastery across all Unit 4 conceptual, numerical, and practical competencies under exam conditions.',
        si: 'විභාග මට්ටමේ තත්ත්වයන් යටතේ ඒකක 4 හි සියලුම සංකල්පීය, ගණනය කිරීම් සහ ප්‍රායෝගික නිපුණතාවල ශිෂ්‍ය ප්‍රවීණතාව තක්සේරු කිරීම.',
      },
      {
        en: 'Identify weak competencies and access targeted revision lesson recommendations.',
        si: 'දුර්වල නිපුණතා හඳුනාගෙන ඉලක්කගත පුනරීක්ෂණ පාඩම් වෙත යොමුවීම.',
      },
    ],
    topicOutline: [
      { en: 'Thermometry and scale conversion (Competency 4.1)', si: 'උෂ්ණත්වමිතිය සහ පරිමාණ' },
      { en: 'Thermal expansion of solids and liquids (Competency 4.2)', si: 'තාප ප්‍රසාරණය' },
      { en: 'Gas laws and equation of state (Competency 4.3)', si: 'වායු නියම සහ තත්ත්ව සමීකරණය' },
      { en: 'Kinetic theory of gases (Competency 4.4)', si: 'වායුවල චාලක වාදය' },
      { en: 'Calorimetry and specific heat capacity (Competency 4.5)', si: 'කැලරිමිතිය සහ විශිෂ්ට තාප ධාරිතාව' },
      { en: 'Phase changes and latent heat (Competency 4.6)', si: 'කලාප විපර්යාස සහ ගුප්ත තාපය' },
      { en: 'Vapour pressure and relative humidity (Competency 4.7)', si: 'වාෂ්ප පීඩනය සහ සාපේක්ෂ ආර්ද්‍රතාව' },
      { en: 'Laws of thermodynamics and cyclic processes (Competency 4.8)', si: 'තාපගති විද්‍යා නියම සහ චක්‍රීය ක්‍රියාවලි' },
      { en: 'Heat transfer mechanisms and Newton’s cooling (Competency 4.9)', si: 'තාප සංක්‍රාමණ ක්‍රම සහ නිව්ටන්ගේ සිසිලනය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'thermal-assessment',
  },
];

