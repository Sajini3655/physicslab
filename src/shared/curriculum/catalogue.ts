import { UnitDefinition } from './types';
import { MECHANICS_LESSONS } from '@/features/mechanics/curriculum';
import { WAVES_LESSONS } from '@/features/waves/curriculum';
import { THERMAL_LESSONS } from '@/features/thermal/curriculum';
import { GRAVITATION_LESSONS } from '@/features/gravitation/curriculum';
import { ELECTROSTATICS_LESSONS } from '@/features/electrostatics/curriculum';
import { MAGNETISM_LESSONS } from '@/features/magnetism/curriculum';
import { ELECTRICITY_LESSONS } from '@/features/electricity/curriculum';
import { ELECTRONICS_LESSONS } from '@/features/electronics/curriculum';
import { MATTER_PROPERTIES_LESSONS } from '@/features/matter-properties/curriculum';
import { QUANTUM_NUCLEAR_LESSONS } from '@/features/quantum-nuclear/curriculum';

export const UNITS: UnitDefinition[] = [
  // =========================================================================
  // UNIT 1: Measurement (මිනුම) - Syllabus Competency 1 (1.1 – 1.5)
  // =========================================================================
  {
    id: 'unit-1',
    slug: 'measurement',
    syllabusOrder: 1,
    competencyRange: 'Competency 1.1 – 1.5',
    title: {
      en: 'Measurement',
      si: 'මිනුම',
    },
    description: {
      en: 'Foundations of physical quantities, SI base & derived units, dimensional analysis, precision laboratory measuring instruments (Vernier, Micrometer, Spherometer, Travelling Microscope), measurement errors, and vectors.',
      si: 'භෞතික රාශි, ජාත්‍යන්තර (SI) මූලික හා ව්‍යුත්පන්න ඒකක, මාන විශ්ලේෂණය, නිරවද්‍ය රසායනාගාර මිනුම් උපකරණ (වර්නියර්, මයික්‍රොමීටර, ගෝලමානය, චල අන්වීක්ෂය), මිනුම් දෝෂ සහ දෛශික.',
    },
    lessons: [
      {
        id: 'lesson-1-1',
        slug: 'scientific-investigation',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 1,
        syllabusRef: 'Competency 1.1',
        title: {
          en: 'Nature of Physics & Scientific Investigation',
          si: 'භෞතික විද්‍යාවේ ක්ෂේත්‍රය සහ විද්‍යාත්මක ගවේෂණය',
        },
        summary: {
          en: 'Scope and branches of physics, qualitative observations versus quantitative inferences, variables (independent, dependent, controlled), hypothesis formulation, and applications of physics in human progress.',
          si: 'භෞතික විද්‍යාවේ විෂය පථය, ගුණාත්මක නිරීක්ෂණ හා ප්‍රමාණාත්මක නිගමන, විචල්‍යයන් (ස්වායත්ත, පරායත්ත, පාලිත), විද්‍යාත්මක උපකල්පන සහ තාක්ෂණික යෙදවුම්.',
        },
        learningObjectives: [
          {
            en: 'Distinguish clearly between direct empirical observations and theoretical inferences.',
            si: 'සෘජු ප්‍රත්‍යක්ෂ නිරීක්ෂණ සහ න්‍යායික නිගමන අතර වෙනස හඳුනා ගැනීම.',
          },
          {
            en: 'Identify independent, dependent, and controlled variables in laboratory scientific investigations.',
            si: 'විද්‍යාත්මක පරීක්ෂණවල ස්වායත්ත, පරායත්ත සහ පාලිත විචල්‍යයන් හඳුනා ගැනීම.',
          },
          {
            en: 'Formulate testable, falsifiable scientific hypotheses and design controlled experiments.',
            si: 'පරීක්ෂා කළ හැකි විද්‍යාත්මක උපකල්පන ගොඩනැගීම සහ පාලිත පරීක්ෂණ සැලසුම් කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Scope of physics and its contribution to modern technology', si: 'භෞතික විද්‍යාවේ ක්ෂේත්‍රය සහ නූතන තාක්ෂණයට දායකත්වය' },
          { en: 'Empirical observations versus deductions and inferences', si: 'ප්‍රත්‍යක්ෂ නිරීක්ෂණ සහ න්‍යායික නිගමන' },
          { en: 'Independent, dependent, and controlled variables', si: 'ස්වායත්ත, පරායත්ත සහ පාලිත විචල්‍යයන්' },
          { en: 'Hypothesis testing, experimental repeatability, and falsifiability', si: 'උපකල්පන පරීක්ෂාව, පුනරාවර්තනය සහ සත්‍යාපනය' },
        ],
        status: 'ready',
        hasSimulation: false,
        content: {
          introduction: {
            en: 'Physics is the foundational natural science investigating matter, energy, space, time, and their fundamental interactions. Progress in physics relies on the scientific method: systematic observation, rigorous measurement, controlled hypothesis testing, and mathematical model development.',
            si: 'භෞතික විද්‍යාව යනු පදාර්ථය, ශක්තිය, අවකාශය, කාලය සහ ඒවා අතර මූලික අන්තර්ක්‍රියා අධ්‍යයනය කරන මූලික ස්වභාවික විද්‍යාවයි. භෞතික විද්‍යාවේ දියුණුව පදනම් වන්නේ ක්‍රමානුකූල නිරීක්ෂණ, නිරවද්‍ය මිනුම්, පාලිත උපකල්පන පරීක්ෂා කිරීම සහ ගණිතමය ආකෘති නිර්මාණය මතය.',
          },
          keyConcepts: [
            {
              title: { en: 'Observations vs Inferences', si: 'නිරීක්ෂණ සහ නිගමන' },
              description: {
                en: 'An observation is raw empirical data gathered directly through human senses or measuring instruments (e.g. "the liquid column height is 760 mm"). An inference is a logical deduction explaining the observation using underlying physical laws (e.g. "atmospheric pressure balances the mercury weight").',
                si: 'නිරීක්ෂණයක් යනු ඉන්ද්‍රියයන්ගෙන් හෝ මිනුම් උපකරණවලින් සෘජුවම ලබාගන්නා ප්‍රත්‍යක්ෂ දත්තයකි. නිගමනයක් යනු එම නිරීක්ෂණයට හේතුව භෞතික නියම ඇසුරෙන් තාර්කිකව පැහැදිලි කිරීමයි.',
              },
            },
            {
              title: { en: 'Experimental Variables', si: 'පරීක්ෂණාත්මක විචල්‍යයන්' },
              description: {
                en: 'In a controlled investigation: the Independent Variable is deliberately manipulated by the experimenter; the Dependent Variable is measured to observe the response; Controlled Variables are held constant so they do not confound results.',
                si: 'පාලිත පරීක්ෂණයකදී: ස්වායත්ත විචල්‍යය පරීක්ෂකයා විසින් අභිමත පරිදි වෙනස් කරයි; පරායත්ත විචල්‍යය එහි ප්‍රතිඵලයක් ලෙස මනිනු ලැබේ; පාලිත විචල්‍යයන් ප්‍රතිඵලවලට බලපෑම් නොවන සේ නියතව තබා ගනී.',
              },
            },
            {
              title: { en: 'Falsifiability of Hypotheses', si: 'උපකල්පනවල අසත්‍ය කළ හැකි බව' },
              description: {
                en: 'A valid scientific hypothesis must make distinct, testable predictions capable of being proven false (falsified) by an empirical test. Hypotheses that cannot be tested lie outside scientific inquiry.',
                si: 'වලංගු විද්‍යාත්මක උපකල්පනයක් මගින් පරීක්ෂණයකින් අසත්‍ය බව පෙන්විය හැකි (falsifiable) පුරෝකථන සැපයිය යුතුය. පරීක්ෂා කළ නොහැකි උපකල්පන විද්‍යාත්මක ක්‍රමවේදයට අයත් නොවේ.',
              },
            },
            {
              title: { en: 'Data Plotting & Best-Fit Trends', si: 'ප්‍රස්ථාරකරණය සහ ගැළපුම් රේඛා' },
              description: {
                en: 'Joining experimental data points dot-to-dot incorrectly assumes zero uncertainty in every reading. A smooth best-fit line or curve balances random deviations and reveals the underlying physical relationship.',
                si: 'ප්‍රස්ථාරගත ලක්ෂ්‍ය එකිනෙක යා කිරීමෙන් එක් එක් ලක්ෂ්‍යයේ දෝෂ රහිත බව වැරදි ලෙස උපකල්පනය වේ. හොඳම ගැළපුම් රේඛාවකින් (best-fit line) අහඹු දෝෂ තුලනය කර මූලික නියමය පෙන්වයි.',
              },
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'A scientific theory becomes a law once it has been proved many times.',
                si: 'විද්‍යාත්මක වාදයක් (theory) බොහෝ වාරයක් ඔප්පු කළ විට එය නියමයක් (law) බවට පත්වේ.',
              },
              clarification: {
                en: 'Theories and laws are fundamentally different categories. A law describes what happens under specific conditions (e.g. F = ma), whereas a theory explains why and how it happens (e.g. Kinetic Theory). Theories never "graduate" into laws.',
                si: 'නියම සහ වාද යනු සම්පූර්ණයෙන්ම වෙනස් ප්‍රභේද දෙකකි. නියමයකින් සිදුවන්නේ කුමක්දැයි විස්තර කරයි (F = ma); වාදයකින් එය සිදුවන යාන්ත්‍රණය පැහැදිලි කරයි. වාද කිසි විටෙකත් නියම බවට පත් නොවේ.',
              },
            },
            {
              misconception: {
                en: 'A repeated measurement eliminates all experimental error.',
                si: 'මිනුමක් නැවත නැවත ලබාගැනීමෙන් සියලු පරීක්ෂණාත්මක දෝෂ ඉවත් වේ.',
              },
              clarification: {
                en: 'Averaging repeated measurements reduces random fluctuations, but has zero effect on systematic errors (such as zero error or miscalibrated scale markers).',
                si: 'නැවත නැවත මැනීමෙන් අවම වන්නේ අහඹු දෝෂ (random errors) පමණි. ක්‍රමානුකූල ශූන්‍ය දෝෂ හෝ පරිමාණ දෝෂ මධ්‍යන්‍යයෙන් ඉවත් නොවේ.',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-1-1',
              competencyRef: 'Competency 1.1',
              difficulty: 'foundation',
              question: {
                en: 'Which of the following statements represents an empirical observation rather than an inference?',
                si: 'පහත ප්‍රකාශ අතරින් නිගමනයකට වඩා ප්‍රත්‍යක්ෂ නිරීක්ෂණයක් නියෝජනය කරන්නේ කුමක්ද?',
              },
              options: [
                { id: 'A', text: { en: 'The liquid boiled because its vapour pressure equalled atmospheric pressure.', si: 'ද්‍රවය නැටුවේ එහි වාෂ්ප පීඩනය වායුගෝලීය පීඩනයට සමාන වූ බැවිනි.' } },
                { id: 'B', text: { en: 'The mercury column height in the tube was 760 mm.', si: 'නලයේ රසදිය කඳෙහි උස 760 mm විය.' } },
                { id: 'C', text: { en: 'The object moved because of an unbalanced external force.', si: 'වස්තුව චලනය වූයේ අසමතුලිත බාහිර බලයක් නිසාය.' } },
                { id: 'D', text: { en: 'Heat flowed through the metal by free electron conduction.', si: 'ලෝහය තුළින් තාපය ගලා ගියේ නිදහස් ඉලෙක්ට්‍රෝන සන්නයනයෙනි.' } },
              ],
              correctOptionId: 'B',
              hint: {
                en: 'An observation is an unadorned sensory or scale reading without causal explanation.',
                si: 'නිරීක්ෂණයක් යනු හේතු පැහැදිලි කිරීමකින් තොරව පරිමාණයකින් ලබාගන්නා සෘජු පාඨාංකයකි.',
              },
              answer: {
                en: 'Option B is a direct measurement recorded on a scale. Options A, C, and D are theoretical inferences explaining why events occurred.',
                si: 'B යනු පරිමාණයකින් සෘජුවම ලබාගත් මිනුමකි. A, C සහ D යනු සංසිද්ධියට හේතු පැහැදිලි කරන න්‍යායික නිගමන වේ.',
              },
            },
            {
              id: 'pq-1-1-2',
              competencyRef: 'Competency 1.1',
              difficulty: 'intermediate',
              question: {
                en: 'In an experiment investigating how wire resistance depends on length, what is the independent variable?',
                si: 'කම්බියක ප්‍රතිරෝධය එහි දිග මත රඳා පවතින ආකාරය පරීක්ෂා කිරීමේදී ස්වායත්ත විචල්‍යය කුමක්ද?',
              },
              options: [
                { id: 'A', text: { en: 'Resistance (R)', si: 'ප්‍රතිරෝධය (R)' } },
                { id: 'B', text: { en: 'Length of wire (L)', si: 'කම්බියේ දිග (L)' } },
                { id: 'C', text: { en: 'Cross-sectional area (A)', si: 'හරස්කඩ වර්ගඵලය (A)' } },
                { id: 'D', text: { en: 'Ambient temperature', si: 'පරිසර උෂ්ණත්වය' } },
              ],
              correctOptionId: 'B',
              hint: {
                en: 'The independent variable is the one intentionally varied by the student.',
                si: 'ස්වායත්ත විචල්‍යය යනු පරීක්ෂකයා විසින් අභිමත පරිදි වෙනස් කරන සාධකයයි.',
              },
              answer: {
                en: 'The length (L) is deliberately chosen and varied, making it the independent variable. Resistance is the dependent variable, while wire area and temperature are controlled variables.',
                si: 'කම්බියේ දිග (L) පරීක්ෂකයා විසින් වෙනස් කරන බැවින් එය ස්වායත්ත විචල්‍යයයි. ප්‍රතිරෝධය පරායත්ත විචල්‍යය වන අතර වර්ගඵලය හා උෂ්ණත්වය පාලිත විචල්‍ය වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-2',
        slug: 'physical-quantities-and-units',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 2,
        syllabusRef: 'Competency 1.2',
        title: {
          en: 'Physical Quantities, SI Units, and Prefixes',
          si: 'භෞතික රාශි, SI ඒකක සහ උපසර්ග',
        },
        summary: {
          en: 'Fundamental and derived physical quantities, the 7 SI base units, supplementary and derived units, standard decimal prefixes (femto to giga), scientific notation, and unit conversions.',
          si: 'මූලික සහ ව්‍යුත්පන්න භෞතික රාශි, SI මූලික ඒකක 7, ව්‍යුත්පන්න ඒකක, සම්මත දශම උපසර්ග, විද්‍යාත්මක අංකනය සහ ඒකක පරිවර්තන (g cm⁻³ සිට kg m⁻³, km h⁻¹ සිට m s⁻¹).',
        },
        learningObjectives: [
          {
            en: 'Identify the 7 SI base quantities, their base units, and standard symbols.',
            si: 'SI මූලික රාශි 7, ඒවායේ මූලික ඒකක සහ සම්මත සංකේත හඳුනා ගැනීම.',
          },
          {
            en: 'Express derived units systematically in terms of SI base units.',
            si: 'ව්‍යුත්පන්න ඒකක SI මූලික ඒකක ඇසුරෙන් ක්‍රමානුකූලව ප්‍රකාශ කිරීම.',
          },
          {
            en: 'Apply standard SI decimal prefixes and convert non-standard laboratory units into coherent SI units.',
            si: 'සම්මත SI උපසර්ග නිවැරදිව භාවිත කිරීම සහ රසායනාගාර ඒකක සම්මත SI ඒකක බවට පරිවර්තනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Fundamental vs derived physical quantities', si: 'මූලික සහ ව්‍යුත්පන්න භෞතික රාශි' },
          { en: 'The 7 SI base units (kg, m, s, A, K, mol, cd)', si: 'SI මූලික ඒකක 7 (kg, m, s, A, K, mol, cd)' },
          { en: 'Expressing derived units in SI base units (J, N, Pa, V, W)', si: 'ව්‍යුත්පන්න ඒකක මූලික ඒකකවලින් දැක්වීම' },
          { en: 'Metric decimal prefixes (femto, pico, nano, micro, milli, centi, kilo, mega, giga)', si: 'මෙට්‍රික් දශම උපසර්ග' },
          { en: 'Unit conversions (density g cm⁻³ to kg m⁻³, speed km h⁻¹ to m s⁻¹)', si: 'ඒකක පරිවර්තන (ඝනත්වය, වේගය, වර්ගඵලය, පරිමාව)' },
        ],
        status: 'ready',
        hasSimulation: false,
        content: {
          introduction: {
            en: 'A physical quantity is any property of a phenomenon, body, or substance that can be quantified by measurement. The International System of Units (SI) defines 7 independent base quantities from which all other derived mechanical, electrical, thermal, and optical units are coherently generated.',
            si: 'භෞතික රාශියක් යනු මැනිය හැකි ඕනෑම සංසිද්ධියක, වස්තුවක හෝ ද්‍රව්‍යයක ගුණයකි. ජාත්‍යන්තර ඒකක ක්‍රමය (SI) මගින් ස්වාධීන මූලික රාශි 7ක් අර්ථ දක්වා ඇති අතර, අනෙකුත් සියලුම යාන්ත්‍රික, විද්‍යුත්, තාප සහ ප්‍රකාශ ව්‍යුත්පන්න ඒකක ඒවායින් ගොඩනැගේ.',
          },
          keyConcepts: [
            {
              title: { en: 'The 7 SI Base Units', si: 'SI මූලික ඒකක 7' },
              description: {
                en: 'Length (metre, m), Mass (kilogram, kg), Time (second, s), Electric current (ampere, A), Thermodynamic temperature (kelvin, K), Amount of substance (mole, mol), and Luminous intensity (candela, cd).',
                si: 'දිග (මීටර්, m), ස්කන්ධය (කිලෝග්‍රෑම්, kg), කාලය (තත්පර, s), විද්‍යුත් ධාරාව (ඇම්පියර්, A), තාපගතික උෂ්ණත්වය (කෙල්වින්, K), ද්‍රව්‍ය ප්‍රමාණය (මවුල, mol), සහ දීප්ත තීව්‍රතාව (කැන්ඩෙලා, cd).',
              },
            },
            {
              title: { en: 'Derived Units in Base Units', si: 'ව්‍යුත්පන්න ඒකක මූලික ඒකකවලින්' },
              description: {
                en: 'Force: Newton (N = kg m s⁻²); Work/Energy: Joule (J = N m = kg m² s⁻²); Power: Watt (W = J s⁻¹ = kg m² s⁻³); Pressure: Pascal (Pa = N m⁻² = kg m⁻¹ s⁻²); Potential Difference: Volt (V = J C⁻¹ = kg m² s⁻³ A⁻¹).',
                si: 'බලය: නිව්ටන් (N = kg m s⁻²); කාර්යය: ජූල් (J = kg m² s⁻²); ක්ෂමතාව: වොට් (W = kg m² s⁻³); පීඩනය: පැස්කල් (Pa = kg m⁻¹ s⁻²); විභව අන්තරය: වෝල්ට් (V = kg m² s⁻³ A⁻¹).',
              },
              formula: '1 J = 1 kg m² s⁻², 1 V = 1 kg m² s⁻³ A⁻¹',
            },
            {
              title: { en: 'Density Conversion Factor', si: 'ඝනත්ව පරිවර්තන සාධකය' },
              description: {
                en: 'Since 1 g = 10⁻³ kg and 1 cm³ = 10⁻⁶ m³, 1 g cm⁻³ = (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg m⁻³ = 1000 kg m⁻³. To convert g cm⁻³ to kg m⁻³, multiply by 1000.',
                si: '1 g = 10⁻³ kg සහ 1 cm³ = 10⁻⁶ m³ බැවින්, 1 g cm⁻³ = 10³ kg m⁻³ = 1000 kg m⁻³ වේ. g cm⁻³ සිට kg m⁻³ බවට පත් කිරීමට 1000 න් ගුණ කරන්න.',
              },
              formula: 'ρ (kg m⁻³) = ρ (g cm⁻³) × 1000',
            },
            {
              title: { en: 'Standard Metric Prefixes', si: 'සම්මත මෙට්‍රික් උපසර්ග' },
              description: {
                en: 'femto (10⁻¹⁵), pico (10⁻¹²), nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), centi (10⁻²), deci (10⁻¹), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²).',
                si: 'ෆෙම්ටෝ (10⁻¹⁵), පිකෝ (10⁻¹²), නැනෝ (10⁻⁹), මයික්‍රෝ (10⁻⁶), මිලි (10⁻³), සෙන්ටි (10⁻²), කිලෝ (10³), මෙගා (10⁶), ගිගා (10⁹), ටෙරා (10¹²).',
              },
            },
            {
              title: { en: '2019 SI Redefinition Constants', si: '2019 SI ප්‍රතිනිර්වචන නියතයන්' },
              description: {
                en: 'Since May 2019, all 7 SI base units are defined by fixing exact numerical values of 7 defining physical constants: Planck constant h = 6.62607015 × 10⁻³⁴ J s (defines kg), Elementary charge e = 1.602176634 × 10⁻¹⁹ C (defines A), Boltzmann constant k = 1.380649 × 10⁻²³ J K⁻¹ (defines K), Avogadro constant N_A = 6.02214076 × 10²³ mol⁻¹ (defines mol), Speed of light c = 299792458 m s⁻¹ (defines m), Caesium transition frequency Δν_Cs = 9192631770 Hz (defines s), and Luminous efficacy K_cd = 683 lm W⁻¹ (defines cd). Physical artefacts (like the Le Grand K cylinder) are obsolete.',
                si: '2019 මැයි සිට සියලුම SI මූලික ඒකක 7 නිර්වචනය කර ඇත්තේ මූලික භෞතික නියතයන් 7ක නියම අගයන් නියත ලෙස තබා ගැනීමෙනි: ප්ලාන්ක් නියතය h = 6.62607015 × 10⁻³⁴ J s (kg), මූලික ආරෝපණය e = 1.602176634 × 10⁻¹⁹ C (A), බෝල්ට්ස්මාන් නියතය k = 1.380649 × 10⁻²³ J K⁻¹ (K), ඇවගාඩ්‍රෝ නියතය N_A = 6.02214076 × 10²³ mol⁻¹ (mol), ආලෝකයේ ප්‍රවේගය c = 299792458 m s⁻¹ (m), සහ සීසියම් සංඛ්‍යාතය Δν_Cs = 9192631770 Hz (s). භෞතික මූලාකෘති (පැරණි kg සිලින්ඩරය) සම්පූර්ණයෙන්ම ඉවත් කර ඇත.',
              },
              formula: 'h, e, k, N_A, c, Δν_Cs, K_cd are exact defining constants',
            },
            {
              title: { en: 'Scientific Notation & Significant Figures', si: 'විද්‍යාත්මක අංකනය සහ සාර්ථක සංඛ්‍යා' },
              description: {
                en: 'Scientific notation represents any quantity as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Significant figures (sig figs) express experimental precision: 1. All non-zero digits are significant. 2. Zeros between non-zeros are significant (305 has 3). 3. Leading zeros are never significant (0.0042 has 2). 4. Trailing zeros after a decimal point are significant (4.500 has 4). When multiplying/dividing, round the final answer to the least number of sig figs among the inputs.',
                si: 'විද්‍යාත්මක අංකනය A × 10ⁿ ලෙස ලියයි (1 ≤ A < 10). සාර්ථක සංඛ්‍යා මඟින් මිනුමක නිරවද්‍යතාව දක්වයි: 1. ශූන්‍ය නොවන සියලු සංඛ්‍යා සාර්ථකයි. 2. ශූන්‍ය නොවන සංඛ්‍යා අතර ඇති ශූන්‍ය සාර්ථකයි (305 හි 3ක් ඇත). 3. සංඛ්‍යාවක මුලට ඇති ශූන්‍ය කිසි විටෙකත් සාර්ථක නොවේ (0.0042 හි 2ක් ඇත). 4. දශම ලක්ෂ්‍යයකින් පසු අගට ඇති ශූන්‍ය සාර්ථකයි (4.500 හි 4ක් ඇත). ගුණ කිරීමේදී හා බෙදීමේදී පිළිතුර ආදානවල අවම සාර්ථක සංඛ්‍යා ගණනට වටයනු ලැබේ.',
              },
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'To convert density from g cm⁻³ to kg m⁻³, one should divide by 1000.',
                si: 'g cm⁻³ සිට kg m⁻³ බවට ඝනත්වය පරිවර්තනය කිරීමට 1000 න් බෙදිය යුතුය.',
              },
              clarification: {
                en: 'Although kg is 1000 times larger than g, a cubic metre (1 m³) is 1,000,000 times larger than 1 cm³. Hence 1 cubic metre contains 1000 times more grams, meaning water of density 1.0 g cm⁻³ has density 1000 kg m⁻³.',
                si: 'ඝන සෙන්ටිමීටර 1කට වඩා ඝන මීටර 1ක් මිලියනයක් (10⁶) ගුණයකින් විශාලය. එබැවින් ඝන මීටරයක ස්කන්ධය 1000 ගුණයකින් වැඩි වේ: 1 g cm⁻³ = 1000 kg m⁻³ වේ.',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-2-1',
              competencyRef: 'Competency 1.2',
              difficulty: 'intermediate',
              question: {
                en: 'What is the unit of pressure (Pascal, Pa) expressed solely in SI base units?',
                si: 'පීඩනයේ ඒකකය වන පැස්කල් (Pa) SI මූලික ඒකක ඇසුරෙන් දැක්වූ විට කුමක්ද?',
              },
              options: [
                { id: 'A', text: { en: 'kg m⁻¹ s⁻²', si: 'kg m⁻¹ s⁻²' } },
                { id: 'B', text: { en: 'kg m s⁻²', si: 'kg m s⁻²' } },
                { id: 'C', text: { en: 'kg m² s⁻²', si: 'kg m² s⁻²' } },
                { id: 'D', text: { en: 'kg m⁻² s⁻²', si: 'kg m⁻² s⁻²' } },
              ],
              correctOptionId: 'A',
              hint: {
                en: 'Pressure = Force / Area = (kg m s⁻²) / m².',
                si: 'පීඩනය = බලය / වර්ගඵලය = (kg m s⁻²) / m².',
              },
              answer: {
                en: 'Pressure P = F / A = (kg m s⁻²) / m² = kg m⁻¹ s⁻².',
                si: 'P = F / A = (kg m s⁻²) / m² = kg m⁻¹ s⁻² වේ.',
              },
            },
            {
              id: 'pq-1-2-2',
              competencyRef: 'Competency 1.2',
              difficulty: 'foundation',
              question: {
                en: 'Aluminum has a density of 2.7 g cm⁻³. Express this density in standard SI units (kg m⁻³):',
                si: 'ඇලුමිනියම්වල ඝනත්වය 2.7 g cm⁻³ වේ. සම්මත SI ඒකකවලින් (kg m⁻³) එහි අගය කීයද?',
              },
              numericalExpected: 2700,
              numericalTolerance: 10,
              unit: { en: 'kg m⁻³', si: 'kg m⁻³' },
              hint: {
                en: 'Multiply by 1000.',
                si: '1000 න් ගුණ කරන්න.',
              },
              answer: {
                en: '2.7 g cm⁻³ = 2.7 × 1000 = 2700 kg m⁻³.',
                si: '2.7 × 1000 = 2700 kg m⁻³ වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-3',
        slug: 'dimensional-analysis',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 3,
        syllabusRef: 'Competency 1.3',
        title: {
          en: 'Dimensional Analysis & Physical Equations',
          si: 'මාන විශ්ලේෂණය සහ භෞතික සමීකරණ',
        },
        summary: {
          en: 'Dimensions of physical quantities [M], [L], [T], principle of dimensional homogeneity, testing the validity of physical equations, deriving relationships between quantities, and limitations of dimensional methods.',
          si: 'භෞතික රාශිවල මාන [M], [L], [T], මාන සමජාතීයතා මූලධර්මය, සමීකරණවල නිරවද්‍යතාව පරීක්ෂා කිරීම, භෞතික සම්බන්ධතා ව්‍යුත්පන්න කිරීම සහ මාන ක්‍රමයේ සීමාවන්.',
        },
        learningObjectives: [
          {
            en: 'Derive dimensions of mechanical, electrical, and thermodynamic quantities.',
            si: 'යාන්ත්‍රික, විද්‍යුත් සහ තාප භෞතික රාශිවල මාන ව්‍යුත්පන්න කිරීම.',
          },
          {
            en: 'Apply the principle of dimensional homogeneity to verify whether a physical equation is dimensionally consistent.',
            si: 'භෞතික සමීකරණයක මාන සමජාතීයතාව පරීක්ෂා කිරීම.',
          },
          {
            en: 'Deduce physical proportionality relationships using method of dimensions and recognize its limitations.',
            si: 'මාන ක්‍රමය මගින් භෞතික සම්බන්ධතා ව්‍යුත්පන්න කිරීම සහ එහි සීමාවන් හඳුනා ගැනීම.',
          },
        ],
        topicOutline: [
          { en: 'Concept of physical dimensions [M], [L], [T], [I], [θ]', si: 'භෞතික මාන සංකල්පය' },
          { en: 'Dimensions of standard quantities (force, energy, pressure, gravitational constant G)', si: 'සම්මත රාශිවල මාන' },
          { en: 'Principle of dimensional homogeneity', si: 'මාන සමජාතීයතා මූලධර්මය' },
          { en: 'Checking physical consistency of kinematic and dynamic equations', si: 'සමීකරණවල මාන නිරවද්‍යතාව පරීක්ෂා කිරීම' },
          { en: 'Deriving power laws by dimensional analysis and inherent limitations', si: 'සම්බන්ධතා ව්‍යුත්පන්නය සහ මාන ක්‍රමයේ සීමාවන්' },
        ],
        status: 'ready',
        hasSimulation: false,
        content: {
          introduction: {
            en: 'Dimensional analysis is a powerful analytical technique based on the physical nature of measured quantities. Regardless of chosen unit system, every physical quantity can be expressed in terms of fundamental dimensions: Mass [M], Length [L], Time [T], Electric Current [I], and Temperature [θ].',
            si: 'මාන විශ්ලේෂණය යනු මනින ලද රාශිවල ස්වභාවය මත පදනම් වූ ප්‍රබල විශ්ලේෂණ ක්‍රමයකි. ඒකක කුමක් වුවත්, සෑම භෞතික රාශියක්ම මූලික මාන වන ස්කන්ධය [M], දිග [L], කාලය [T], ධාරාව [I] සහ උෂ්ණත්වය [θ] ඇසුරෙන් ප්‍රකාශ කළ හැක.',
          },
          keyConcepts: [
            {
              title: { en: 'Dimensions of Core Quantities', si: 'ප්‍රධාන රාශිවල මාන' },
              description: {
                en: 'Velocity: [v] = L T⁻¹; Acceleration: [a] = L T⁻²; Force: [F] = M L T⁻²; Work/Energy: [W] = M L² T⁻²; Pressure: [P] = M L⁻¹ T⁻²; Gravitational Constant G: [G] = M⁻¹ L³ T⁻².',
                si: 'ප්‍රවේගය: L T⁻¹; ත්වරණය: L T⁻²; බලය: M L T⁻²; කාර්යය/ශක්තිය: M L² T⁻²; පීඩනය: M L⁻¹ T⁻²; විශ්ව ගුරුත්වාකර්ෂණ නියතය G: M⁻¹ L³ T⁻².',
              },
              formula: '[F] = M L T⁻², [G] = M⁻¹ L³ T⁻²',
            },
            {
              title: { en: 'Principle of Dimensional Homogeneity', si: 'මාන සමජාතීයතා මූලධර්මය' },
              description: {
                en: 'Only physical quantities possessing identical dimensions can be added, subtracted, or equated. In any physically valid equation A = B + C, each separate term must share the exact same dimensions: [A] = [B] = [C].',
                si: 'එකතු කිරීමට, අඩු කිරීමට හෝ සමාන කිරීමට හැක්කේ එකම මාන ඇති භෞතික රාශි පමණි. A = B + C නම්, [A] = [B] = [C] විය යුතුය.',
              },
            },
            {
              title: { en: 'Identical Dimensions in Different Quantities', si: 'එකම මාන සහිත විවිධ රාශි' },
              description: {
                en: 'Work and Torque both have dimensions M L² T⁻². Frequency, angular velocity, and radioactive decay constant all have dimensions T⁻¹. Having identical dimensions does NOT mean the physical concepts are identical.',
                si: 'කාර්යය සහ ව්‍යාවර්තය යන දෙකෙහිම මාන M L² T⁻² වේ. සංඛ්‍යාතය සහ කෝණික ප්‍රවේගයේ මාන T⁻¹ වේ. මාන සමාන වූ පමණින් රාශීන් එක හා සමාන නොවේ.',
              },
            },
            {
              title: { en: 'Limitations of Dimensional Analysis', si: 'මාන ක්‍රමයේ සීමාවන්' },
              description: {
                en: '1. Dimensionless numerical constants (e.g. 1/2 in ½at², 2π in pendulum formula) cannot be determined. 2. Equations with trigonometric, logarithmic, or exponential functions cannot be fully derived. 3. It cannot resolve equations depending on more than 3 variables if only M, L, T are available.',
                si: '1. 1/2 හෝ 2π වැනි මාන රහිත සංඛ්‍යාත්මක නියතයන් නිර්ණය කළ නොහැක. 2. ත්‍රිකෝණමිතික හෝ ඝාතීය ශ්‍රිත අඩංගු සමීකරණ සම්පූර්ණයෙන් ව්‍යුත්පන්න කළ නොහැක. 3. විචල්‍යයන් 3කට වඩා ඇති විට විසඳිය නොහැක.',
              },
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'If an equation is dimensionally consistent, it is guaranteed to be physically correct.',
                si: 'සමීකරණයක් මාන අතින් නිවැරදි නම් එය භෞතිකවද අනිවාර්යයෙන්ම නිවැරදිය.',
              },
              clarification: {
                en: 'Dimensional consistency is a necessary condition, but not sufficient. For example, s = ut + 5at² is dimensionally homogeneous, but physically false because the correct numerical factor is 1/2, not 5.',
                si: 'මාන සමජාතීයතාව අත්‍යවශ්‍ය වුවද ප්‍රමාණවත් නොවේ. උදාහරණයක් ලෙස s = ut + 5at² මාන අතින් සමජාතීය වුවද භෞතිකව වැරදිය (නිවැරදි සාධකය 1/2 වේ).',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-3-1',
              competencyRef: 'Competency 1.3',
              difficulty: 'intermediate',
              question: {
                en: 'What are the dimensions of the Universal Gravitational Constant G in F = G m₁ m₂ / r²?',
                si: 'F = G m₁ m₂ / r² සමීකරණයේ G හි මාන කුමක්ද?',
              },
              options: [
                { id: 'A', text: { en: 'M⁻¹ L³ T⁻²', si: 'M⁻¹ L³ T⁻²' } },
                { id: 'B', text: { en: 'M L³ T⁻²', si: 'M L³ T⁻²' } },
                { id: 'C', text: { en: 'M⁻² L² T⁻¹', si: 'M⁻² L² T⁻¹' } },
                { id: 'D', text: { en: 'M L² T⁻²', si: 'M L² T⁻²' } },
              ],
              correctOptionId: 'A',
              hint: {
                en: 'G = F r² / (m₁ m₂). Substitute [F] = M L T⁻².',
                si: 'G = F r² / (m₁ m₂). [F] = M L T⁻² ආදේශ කරන්න.',
              },
              answer: {
                en: '[G] = (M L T⁻²)(L²) / M² = M⁻¹ L³ T⁻².',
                si: '[G] = M⁻¹ L³ T⁻² වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-4',
        slug: 'measuring-instruments',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 4,
        syllabusRef: 'Competency 1.4',
        title: {
          en: 'Measuring Instruments & Least Count',
          si: 'මිනුම් උපකරණ සහ කුඩාම මිනුම',
        },
        summary: {
          en: 'Operating principles, least count determination, zero errors (positive and negative), zero corrections, and readings for Vernier calipers, micrometer screw gauges, spherometers, and travelling microscopes.',
          si: 'වර්නියර් කැලිපරය, මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය, ගෝලමානය සහ චල අන්වීක්ෂයේ මූලධර්ම, කුඩාම මිනුම, ධන හා සෘණ ශූන්‍ය දෝෂ, ශූන්‍ය ශෝධන සහ නිරවද්‍ය පාඨාංක ගැනීම.',
        },
        learningObjectives: [
          {
            en: 'Calculate least count for Vernier scales, micrometer screw gauges, spherometers, and travelling microscopes.',
            si: 'වර්නියර්, මයික්‍රොමීටර, ගෝලමාන සහ චල අන්වීක්ෂවල කුඩාම මිනුම ගණනය කිරීම.',
          },
          {
            en: 'Identify signed zero error and apply the zero correction formula: Corrected = Observed - (Signed Zero Error).',
            si: 'ලකුණ සහිත ශූන්‍ය දෝෂය හඳුනාගෙන ශෝධිත පාඨාංකය = නිරීක්ෂිත - (ශූන්‍ය දෝෂය) සූත්‍රය යෙදීම.',
          },
          {
            en: 'Select the optimal measuring instrument according to specimen dimension and tolerance.',
            si: 'මනින මානයේ විශාලත්වය සහ සියුම් බව අනුව සුදුසුම මිනුම් උපකරණය තෝරා ගැනීම.',
          },
        ],
        topicOutline: [
          { en: 'Vernier principle: least count = 1 MSD - 1 VSD', si: 'වර්නියර් මූලධර්මය සහ කුඩාම මිනුම' },
          { en: 'Micrometer screw gauge: pitch and circular divisions', si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය: අන්තරාලය සහ කරකැවුම' },
          { en: 'Spherometer: pitch scale, disc divisions, and curvature', si: 'ගෝලමානය: අන්තරාල පරිමාණය, තැටිය සහ වක්‍රතාව' },
          { en: 'Travelling microscope: fine horizontal/vertical non-contact readings', si: 'චල අන්වීක්ෂය: ස්පර්ශ රහිත සියුම් මිනුම්' },
          { en: 'Zero error identification (positive and negative) and systematic correction', si: 'ශූන්‍ය දෝෂ හඳුනාගැනීම සහ ක්‍රමානුකූල ශෝධනය' },
        ],
        status: 'ready',
        hasSimulation: true,
        simulationType: 'measurement-instruments',
        content: {
          introduction: {
            en: 'Laboratory measurement requires selecting instruments matched to the required precision. A standard metre ruler reads to 1 mm; a Vernier caliper reads to 0.1 mm (or 0.02 mm); a micrometer screw gauge and spherometer read to 0.01 mm; and a travelling microscope provides non-contact optical precision to 0.01 mm.',
            si: 'රසායනාගාර මිනුම් සඳහා අවශ්‍ය නිරවද්‍යතාවට ගැළපෙන උපකරණ තෝරා ගත යුතුය. සාමාන්‍ය මීටර් කෝදුව 1 mm දක්වාද, වර්නියර් කැලිපරය 0.1 mm දක්වාද, මයික්‍රොමීටරය සහ ගෝලමානය 0.01 mm දක්වාද, චල අන්වීක්ෂය ස්පර්ශ රහිතව 0.01 mm දක්වාද මනියි.',
          },
          keyConcepts: [
            {
              title: { en: 'Vernier Calipers Principle', si: 'වර්නියර් කැලිපර මූලධර්මය' },
              description: {
                en: 'n divisions of the Vernier scale equal (n - 1) divisions of the main scale. Least Count LC = 1 MSD - 1 VSD = (1/n) MSD. For 10 divisions spanning 9 mm: LC = 1 mm - 0.9 mm = 0.1 mm.',
                si: 'වර්නියර් කොටස් n ක් ප්‍රධාන පරිමාණ කොටස් (n - 1) කට සමාන වේ. කුඩාම මිනුම = 1 MSD - 1 VSD වේ. කොටස් 10 ක් 9 mm ට සමාන නම්: LC = 1.0 - 0.9 = 0.1 mm.',
              },
              formula: 'LC = 1 MSD - 1 VSD = 0.1 mm',
            },
            {
              title: { en: 'Micrometer Screw Gauge Principle', si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමාන මූලධර්මය' },
              description: {
                en: 'One complete rotation advances the spindle by the pitch (p = 0.5 mm). If the circular head has N = 50 divisions, Least Count LC = Pitch / N = 0.5 mm / 50 = 0.01 mm. Always use the ratchet stop to guarantee uniform contact force.',
                si: 'එක් සම්පූර්ණ වටයකින් දඟරය අන්තරාලය (0.5 mm) ප්‍රමාණයකින් ඉදිරියට යයි. වට පරිමාණයේ කොටස් 50 ක් ඇත්නම්: LC = 0.5 mm / 50 = 0.01 mm වේ. නියත තෙරපුමක් සඳහා සැමවිටම රැචටය භාවිත කරන්න.',
              },
              formula: 'LC = Pitch / Circular Divisions = 0.5 mm / 50 = 0.01 mm',
            },
            {
              title: { en: 'Signed Zero Error & Correction', si: 'ශූන්‍ය දෝෂය සහ ශෝධනය' },
              description: {
                en: 'When jaws/spindle close: Positive zero error occurs when instrument reads > 0 (e = +Δx); Negative zero error occurs when reading < 0 (e = -Δx). Universal formula: Corrected Reading = Observed Reading - (Signed Zero Error).',
                si: 'හනු වැසූ විට: පාඨාංකය 0 ට වඩා වැඩි නම් ධන ශූන්‍ය දෝෂයකි (+e); 0 ට වඩා අඩු නම් සෘණ ශූන්‍ය දෝෂයකි (-e). විශ්ව සූත්‍රය: ශෝධිත පාඨාංකය = නිරීක්ෂිත - (ලකුණ සහිත ශූන්‍ය දෝෂය).',
              },
              formula: 'Corrected = Observed - (Zero Error)',
            },
            {
              title: { en: 'Spherometer Curvature Principle', si: 'ගෝලමාන වක්‍රතා මූලධර්මය' },
              description: {
                en: 'Three outer legs form an equilateral triangle of mean separation a. Center screw measures sagitta height h. Radius of curvature: R = (a² / 6h) + (h / 2). If h = 0, R = ∞ (plane glass plate).',
                si: 'බාහිර පාද තුන මධ්‍යන්‍ය දුර a වූ සමපාද ත්‍රිකෝණයක් සාදයි. මැද ඉස්කුරුප්පුවෙන් එසවීම h මනියි. වක්‍රතා අරය: R = (a² / 6h) + (h / 2) වේ. h = 0 නම් R = ∞ (තල පෘෂ්ඨය).',
              },
              formula: 'R = (a² / 6h) + (h / 2)',
            },
            {
              title: { en: 'Metre Ruler Metrology & Parallax Error', si: 'මීටර් කෝදුව සහ දෘෂ්ටි විලාස දෝෂය' },
              description: {
                en: 'Standard laboratory metre rulers have a least count of 1 mm (0.1 cm). To prevent parallax error, the observer’s line of sight must be strictly perpendicular to the scale graduation marks. To eliminate zero-end wear errors (where ruler edges are rounded or chipped), measure between two arbitrary clear graduations (e.g. from 10.0 cm to 35.4 cm) and compute length by difference: L = 35.4 - 10.0 = 25.4 cm.',
                si: 'සම්මත මීටර් කෝදුවක කුඩාම මිනුම 1 mm (0.1 cm) වේ. දෘෂ්ටි විලාස දෝෂය වැළැක්වීම සඳහා නිරීක්ෂකයාගේ ඇස පරිමාණ සලකුණුවලට සෘජුවම ලම්බක විය යුතුය. කෙළවර ගෙවීයාම නිසා හටගන්නා දෝෂ වැළැක්වීමට, 0 සලකුණ වෙනුවට 10.0 cm වැනි පැහැදිලි සලකුණක සිට මැන වෙනස ලබා ගත යුතුය: L = 35.4 - 10.0 = 25.4 cm.',
              },
            },
            {
              title: { en: 'Laboratory Balances & Taring', si: 'රසායනාගාර තුලා සහ තාරා කිරීම' },
              description: {
                en: 'Triple-beam balances (LC 0.1 g or 0.01 g) and electronic digital balances (LC 0.01 g or 0.001 g) measure inertial/gravitational mass. Before weighing: 1. Level the balance using the leveling bubble feet. 2. Tare or zero the balance to eliminate container mass. 3. Use draft shields for high-precision 3-decimal balances to shield against air convection currents.',
                si: 'තුලා තුලා (LC 0.1 g / 0.01 g) සහ ඉලෙක්ට්‍රොනික සංඛ්‍යාංක තුලා (LC 0.01 g / 0.001 g) මඟින් ස්කන්ධය මනියි. කිරුමට පෙර: 1. මට්ටම් බුබුල මධ්‍යයේ තබා තුලාව තිරස් කරන්න. 2. බඳුනේ ස්කන්ධය ඉවත් කිරීමට තාරා (Tare) හෝ ශූන්‍ය කරන්න. 3. සියුම් තුලාවලදී වායු ධාරාවලින් බාධා නොවීමට ආවරණ භාවිත කරන්න.',
              },
            },
            {
              title: { en: 'Stopwatches & Reaction Time Reduction', si: 'නැවතුම් ඔරලෝසු සහ ප්‍රතික්‍රියා කාලය' },
              description: {
                en: 'Mechanical stopwatches have LC 0.1 s; digital stopwatches display to 0.01 s. However, physiological human start/stop reaction time introduces a random uncertainty of ~0.2 s to 0.3 s. To reduce fractional timing uncertainty ΔT / T when measuring periodic phenomena (e.g. simple pendulum period T), measure the total time t for N = 20 or 50 complete oscillations: T = t / N, reducing uncertainty in period to ΔT = Δt / N.',
                si: 'යාන්ත්‍රික නැවතුම් ඔරලෝසුවල LC 0.1 s වන අතර ඩිජිටල් ඔරලෝසුවල 0.01 s වේ. එහෙත් මිනිස් ප්‍රතික්‍රියා කාලය තත්පර 0.2 - 0.3 ක අහඹු දෝෂයක් එකතු කරයි. සරල අවලම්බයක ආවර්ත කාලය T මැනීමේදී භාගික දෝෂය අවම කිරීමට, සම්පූර්ණ දෝලන N = 20 හෝ 50 ක කාලය t මැන T = t / N ලබා ගනී. එවිට එක් ආවර්තයක දෝෂය ΔT = Δt / N ලෙස බෙදී කුඩා වේ.',
              },
              formula: 'T = t / N, ΔT = Δt / N',
            },
            {
              title: { en: 'Digital Multimeter (DMM) Ranges & Impedance', si: 'ඩිජිටල් බහුමීටරය (DMM) සහ සම්බාධනය' },
              description: {
                en: 'A Digital Multimeter (DMM) measures DC/AC voltage, DC/AC current, and resistance. Range selection rules: Always start at highest range when measuring unknown voltages/currents to protect fuses, then switch to the lowest range that safely exceeds the signal to maximize display digits and resolution. Voltmeter mode features very high input impedance (~10 MΩ) to prevent circuit loading; ammeter mode features near-zero internal shunt resistance to prevent dropping voltage.',
                si: 'DMM මඟින් වෝල්ටීයතාව, ධාරාව සහ ප්‍රතිරෝධය මනියි. පරාස තේරීම: නොදන්නා අගයන් සඳහා උපරිම පරාසයෙන් අරඹා, පාඨාංකයට වඩා මඳක් වැඩි අඩුම පරාසයට මාරු වීමෙන් උපරිම නිරවද්‍යතාව ලබා ගනී. වෝල්ට්මීටරයක් ලෙස පරිපථයෙන් ධාරාව නොගැනීමට අධික ආදාන සම්බාධනයක් (~10 MΩ) ඇති අතර, ඇමීටරයක් ලෙස ශූන්‍යයට ආසන්න අඩු ප්‍රතිරෝධයක් ඇත.',
              },
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'Negative zero error means you should subtract the error from the observed reading.',
                si: 'සෘණ ශූන්‍ය දෝෂයක් ඇති විට නිරීක්ෂිත පාඨාංකයෙන් දෝෂය අඩු කළ යුතුය.',
              },
              clarification: {
                en: 'Remember the universal rule: Corrected = Observed - (Signed Error). When error is negative (-e), subtracting a negative number ADDS the value: Observed - (-e) = Observed + e.',
                si: 'සූත්‍රය: ශෝධිත = නිරීක්ෂිත - (ශූන්‍ය දෝෂය). දෝෂය සෘණ (-e) වූ විට සෘණ ලකුණු දෙකක් එකතු වේ: නිරීක්ෂිත - (-e) = නිරීක්ෂිත + e.',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-4-1',
              competencyRef: 'Competency 1.4',
              difficulty: 'intermediate',
              question: {
                en: 'A Vernier caliper (least count 0.1 mm) has a negative zero error of -0.2 mm. If the observed reading is 28.4 mm, what is the corrected reading?',
                si: 'වර්නියර් කැලිපරයක (LC = 0.1 mm) සෘණ ශූන්‍ය දෝෂය -0.2 mm වේ. නිරීක්ෂිත පාඨාංකය 28.4 mm නම්, ශෝධිත පාඨාංකය කුමක්ද?',
              },
              numericalExpected: 28.6,
              numericalTolerance: 0.05,
              unit: { en: 'mm', si: 'mm' },
              hint: {
                en: 'Corrected = Observed - (Signed Zero Error) = 28.4 - (-0.2).',
                si: 'ශෝධිත = 28.4 - (-0.2) = 28.4 + 0.2 mm.',
              },
              answer: {
                en: '28.4 - (-0.2) = 28.6 mm.',
                si: '28.4 - (-0.2) = 28.6 mm වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-5',
        slug: 'errors-and-uncertainties',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 5,
        syllabusRef: 'Competency 1.4',
        title: {
          en: 'Errors and Uncertainty Analysis',
          si: 'මිනුම් දෝෂ සහ අවිනිශ්චිතතා විශ්ලේෂණය',
        },
        summary: {
          en: 'Systematic versus random errors, absolute error, fractional and percentage uncertainty, error combination rules (addition, subtraction, multiplication, division, powers), and significant figure rules.',
          si: 'පද්ධතිමය සහ අහඹු දෝෂ, නිරපේක්ෂ, භාගික හා ප්‍රතිශත අවිනිශ්චිතතාව, දෝෂ සංයෝජන නීති (එකතු කිරීම, අඩු කිරීම, ගුණ කිරීම, බෙදීම, බල) සහ සාර්ථක අංක නීති.',
        },
        learningObjectives: [
          {
            en: 'Distinguish between systematic errors (constant shift) and random uncertainties (statistical spread).',
            si: 'ක්‍රමානුකූල දෝෂ සහ අහඹු අවිනිශ්චිතතා අතර වෙනස හඳුනා ගැනීම.',
          },
          {
            en: 'Calculate absolute, fractional, and percentage uncertainties for experimental values.',
            si: 'නිරපේක්ෂ, භාගික සහ ප්‍රතිශත අවිනිශ්චිතතා ගණනය කිරීම.',
          },
          {
            en: 'Apply error propagation rules to compute uncertainties in combined formulas.',
            si: 'සංයුක්ත සූත්‍රවල දෝෂ ප්‍රචාරණ නීති යොදා ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Systematic errors: calibration, zero error, end correction', si: 'ක්‍රමානුකූල දෝෂ' },
          { en: 'Random errors: parallax, thermal fluctuations, timing reaction', si: 'අහඹු දෝෂ' },
          { en: 'Absolute uncertainty (Δx), fractional uncertainty (Δx/x), percentage uncertainty', si: 'නිරපේක්ෂ, භාගික සහ ප්‍රතිශත අවිනිශ්චිතතාව' },
          { en: 'Propagation in addition and subtraction: ΔZ = ΔX + ΔY', si: 'එකතු කිරීම හා අඩු කිරීමේදී දෝෂ සංයෝජනය' },
          { en: 'Propagation in multiplication, division, and powers: ΔZ/Z = a(ΔX/X) + b(ΔY/Y)', si: 'ගුණ කිරීම, බෙදීම සහ බලවලදී දෝෂ සංයෝජනය' },
          { en: 'Significant figures in experimental reporting', si: 'ප්‍රතිඵල වාර්තා කිරීමේදී සාර්ථක අංක' },
        ],
        status: 'ready',
        hasSimulation: false,
        content: {
          introduction: {
            en: 'Every physical measurement carries uncertainty due to instrument limitations and experimental variations. Scientific communication demands reporting not just a number, but its uncertainty and appropriate significant figures.',
            si: 'උපකරණවල සීමාවන් සහ පරීක්ෂණාත්මක විචල්‍යතා නිසා සෑම මිනුමකම අවිනිශ්චිතතාවක් පවතී. නිවැරදි විද්‍යාත්මක වාර්තාකරණයේදී අගය සමඟ එහි අවිනිශ්චිතතාව සහ සාර්ථක අංක නිවැරදිව දැක්වීම අනිවාර්ය වේ.',
          },
          keyConcepts: [
            {
              title: { en: 'Systematic vs Random Errors', si: 'ක්‍රමානුකූල සහ අහඹු දෝෂ' },
              description: {
                en: 'Systematic errors shift measurements predictably in one direction (e.g. zero error, miscalibration, parallax). Repeating readings does NOT remove them. Random errors fluctuate unpredictably both above and below the true value; averaging multiple readings minimizes them.',
                si: 'ක්‍රමානුකූල දෝෂ එකම දිශාවකට නියතව සිදුවේ (ශූන්‍ය දෝෂ වැනි). නැවත මැනීමෙන් ඒවා ඉවත් නොවේ. අහඹු දෝෂ සත්‍ය අගය දෙපසට විසිරෙන බැවින් මධ්‍යන්‍යය ගැනීමෙන් ඒවා අවම වේ.',
              },
            },
            {
              title: { en: 'Uncertainty Definitions', si: 'අවිනිශ්චිතතා අර්ථ දැක්වීම්' },
              description: {
                en: 'If measurement is x ± Δx: Absolute uncertainty = Δx; Fractional uncertainty = Δx / x; Percentage uncertainty = (Δx / x) × 100%.',
                si: 'මිනුම x ± Δx නම්: නිරපේක්ෂ අවිනිශ්චිතතාව = Δx; භාගික අවිනිශ්චිතතාව = Δx / x; ප්‍රතිශත අවිනිශ්චිතතාව = (Δx / x) × 100%.',
              },
              formula: '% Uncertainty = (Δx / x) × 100%',
            },
            {
              title: { en: 'Propagation in Addition & Subtraction', si: 'එකතු කිරීම හා අඩු කිරීමේ නීතිය' },
              description: {
                en: 'When adding or subtracting quantities Z = X ± Y: Absolute uncertainties always accumulate: ΔZ = ΔX + ΔY. Errors NEVER cancel out.',
                si: 'Z = X ± Y එකතු කිරීමේදී හෝ අඩු කිරීමේදී නිරපේක්ෂ අවිනිශ්චිතතා සැමවිටම එකතු වේ: ΔZ = ΔX + ΔY. දෝෂ කිසි විටෙකත් අවලංගු නොවේ.',
              },
              formula: 'ΔZ = ΔX + ΔY',
            },
            {
              title: { en: 'Propagation in Products, Quotients & Powers', si: 'ගුණ කිරීම, බෙදීම සහ බල නීතිය' },
              description: {
                en: 'For Z = X^a × Y^b / W^c: Fractional uncertainties combine: (ΔZ / Z) = a(ΔX / X) + b(ΔY / Y) + c(ΔW / W). Powers have the largest multiplier effect.',
                si: 'Z = X^a Y^b / W^c සඳහා භාගික අවිනිශ්චිතතා එකතු වේ: (ΔZ / Z) = a(ΔX / X) + b(ΔY / Y) + c(ΔW / W).',
              },
              formula: '(ΔZ / Z) = a(ΔX / X) + b(ΔY / Y) + c(ΔW / W)',
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'When subtracting two numbers (Z = X - Y), you subtract their uncertainties: ΔZ = ΔX - ΔY.',
                si: 'අඩු කිරීමකදී (Z = X - Y) අවිනිශ්චිතතාද අඩු වේ: ΔZ = ΔX - ΔY.',
              },
              clarification: {
                en: 'Uncertainties always represent potential error intervals. Subtracting two uncertain values increases the total uncertainty interval, so absolute errors ALWAYS ADD: ΔZ = ΔX + ΔY.',
                si: 'අඩු කිරීමකදීද දෝෂ පරාසය විශාල වන බැවින් නිරපේක්ෂ දෝෂ සැමවිටම එකතු වේ: ΔZ = ΔX + ΔY.',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-5-1',
              competencyRef: 'Competency 1.4',
              difficulty: 'intermediate',
              question: {
                en: 'If x = (10.0 ± 0.2) cm and y = (4.0 ± 0.1) cm, what is the absolute uncertainty in z = x - y?',
                si: 'x = (10.0 ± 0.2) cm සහ y = (4.0 ± 0.1) cm නම්, z = x - y හි නිරපේක්ෂ අවිනිශ්චිතතාව කුමක්ද?',
              },
              numericalExpected: 0.3,
              numericalTolerance: 0.05,
              unit: { en: 'cm', si: 'cm' },
              hint: {
                en: 'In subtraction, absolute errors add: Δz = Δx + Δy.',
                si: 'අඩු කිරීමේදී නිරපේක්ෂ දෝෂ එකතු වේ: 0.2 + 0.1 cm.',
              },
              answer: {
                en: 'Δz = 0.2 + 0.1 = 0.3 cm.',
                si: 'Δz = 0.2 + 0.1 = 0.3 cm වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-6',
        slug: 'vectors-and-scalars',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 6,
        syllabusRef: 'Competency 1.5',
        title: {
          en: 'Vectors and Scalars',
          si: 'දෛශික සහ අදිශ',
        },
        summary: {
          en: 'Distinction between scalar and vector quantities, geometric representation, vector addition (triangle law, parallelogram law), subtraction, and resolution into mutually perpendicular rectangular components.',
          si: 'අදිශ සහ දෛශික රාශි අතර වෙනස, ජ්‍යාමිතික නිරූපණය, දෛශික එකතු කිරීම (ත්‍රිකෝණ නීතිය, සමාන්තරාස්‍ර නීතිය), අඩු කිරීම, සහ ලම්බක සෘජුකෝණී සංරචකවලට විභේදනය.',
        },
        learningObjectives: [
          {
            en: 'Distinguish rigorously between scalars and vectors based on physical transformation laws.',
            si: 'භෞතික එකතු කිරීමේ නීති මත පදනම්ව අදිශ සහ දෛශික වෙන්කර හඳුනා ගැනීම.',
          },
          {
            en: 'Resolve vectors along mutually perpendicular axes: Ax = A cos θ, Ay = A sin θ.',
            si: 'දෛශික ලම්බක අක්ෂ ඔස්සේ විභේදනය කිරීම: Ax = A cos θ, Ay = A sin θ.',
          },
          {
            en: 'Determine the resultant magnitude and direction of coplanar concurrent vectors analytically.',
            si: 'තලීය සමගාමී දෛශිකවල සම්ප්‍රයුක්තයේ විශාලත්වය සහ දිශාව වීජීයව සෙවීම.',
          },
        ],
        topicOutline: [
          { en: 'Scalars versus vectors definition and examples', si: 'අදිශ හා දෛශික අර්ථ දැක්වීම්' },
          { en: 'Parallelogram Law of vector addition: R = √(A² + B² + 2AB cos θ)', si: 'දෛශික එකතු කිරීමේ සමාන්තරාස්‍ර නීතිය' },
          { en: 'Triangle Law and Polygon Law of concurrent vectors', si: 'ත්‍රිකෝණ සහ බහුඅස්‍ර නීතිය' },
          { en: 'Resolution into rectangular components Ax and Ay', si: 'සෘජුකෝණී සංරචකවලට විභේදනය' },
          { en: 'Resultant calculation: Rx = ΣAx, Ry = ΣAy, R = √(Rx² + Ry²)', si: 'සම්ප්‍රයුක්තය ගණනය කිරීම' },
        ],
        status: 'ready',
        hasSimulation: true,
        simulationType: 'vector-canvas',
        content: {
          introduction: {
            en: 'Physical quantities are categorized into scalars and vectors. A scalar has only magnitude and unit (e.g. mass, time, temperature). A vector has magnitude, unit, and an essential spatial direction, obeying the geometric laws of vector addition (e.g. displacement, velocity, force).',
            si: 'භෞතික රාශි අදිශ සහ දෛශික ලෙස වර්ගීකරණය කෙරේ. අදිශයකට ඇත්තේ විශාලත්වයක් පමණි (ස්කන්ධය, කාලය, උෂ්ණත්වය). දෛශිකයකට විශාලත්වයක් මෙන්ම නිශ්චිත දිශාවක් ඇති අතර දෛශික එකතු කිරීමේ ජ්‍යාමිතික නීති පිළිපදියි (විස්ථාපනය, ප්‍රවේගය, බලය).',
          },
          keyConcepts: [
            {
              title: { en: 'Why Current is a Scalar', si: 'විද්‍යුත් ධාරාව අදිශයක් වන්නේ ඇයි' },
              description: {
                en: 'Although electric current has a directional flow along a wire, it does NOT obey the parallelogram law of vector addition. Current at a junction combines purely algebraically (I = I₁ + I₂) according to Kirchhoff’s First Law, regardless of conductor angles.',
                si: 'කම්බියක් ඔස්සේ ධාරාවට දිශාවක් තිබුණද, එය දෛශික සමාන්තරාස්‍ර නියමය පිළිපදින්නේ නැත. සන්ධියකදී ධාරා එකතු වන්නේ කෝණය කුමක් වුවත් සරල වීජීය එකතුවක් (I = I₁ + I₂) ලෙසිනි. එබැවින් ධාරාව අදිශයකි.',
              },
            },
            {
              title: { en: 'Rectangular Resolution', si: 'සෘජුකෝණී විභේදනය' },
              description: {
                en: 'Any vector A making an angle θ with the positive x-axis resolves into perpendicular components: Ax = A cos θ (horizontal) and Ay = A sin θ (vertical). Magnitude is restored via Pythagoras: A = √(Ax² + Ay²).',
                si: 'තිරස සමඟ θ කෝණයක් සාදන දෛශිකයක සංරචක: Ax = A cos θ සහ Ay = A sin θ වේ. විශාලත්වය: A = √(Ax² + Ay²).',
              },
              formula: 'Ax = A cos θ, Ay = A sin θ',
            },
            {
              title: { en: 'Parallelogram Law of Addition', si: 'සමාන්තරාස්‍ර නීතිය' },
              description: {
                en: 'For two vectors A and B with angle θ between them, the resultant magnitude is: R = √(A² + B² + 2AB cos θ). If perpendicular (θ = 90°), R = √(A² + B²).',
                si: 'θ කෝණයකින් ක්‍රියා කරන A සහ B දෛශික දෙකක සම්ප්‍රයුක්තය: R = √(A² + B² + 2AB cos θ). ලම්බක වූ විට R = √(A² + B²).',
              },
              formula: 'R = √(A² + B² + 2AB cos θ)',
            },
            {
              title: { en: 'Vector Subtraction & Relative Velocity', si: 'දෛශික අඩු කිරීම සහ සාපේක්ෂ ප්‍රවේගය' },
              description: {
                en: 'Subtracting vector B from vector A is defined as adding the negative vector: D = A - B = A + (-B). The negative vector -B has equal magnitude but opposite direction (rotated 180°). In kinematics, relative velocity of body A with respect to body B is given by vector subtraction: v_AB = v_A - v_B.',
                si: 'A ගෙන් B දෛශිකය අඩු කිරීම යනු සෘණ දෛශිකය එකතු කිරීමයි: D = A - B = A + (-B). සෘණ දෛශිකයට ඇත්තේ සමාන විශාලත්වයක් සහ ප්‍රතිවිරුද්ධ (180° හැරුණු) දිශාවකි. සාපේක්ෂ ප්‍රවේගය ගණනය කරන්නේද දෛශික අඩු කිරීමෙනි: v_AB = v_A - v_B.',
              },
              formula: 'A - B = A + (-B), v_AB = v_A - v_B',
            },
            {
              title: { en: 'Polygon Law of Vectors & Equilibrium', si: 'දෛශික බහුඅස්‍ර නීතිය සහ තුල්‍යතාව' },
              description: {
                en: 'If any number of coplanar vectors are represented in magnitude and direction by the sides of an open polygon taken in order (head-to-tail), their resultant is represented in magnitude and direction by the closing side drawn from the tail of the first vector to the head of the last vector. If the vectors form a closed polygon, the resultant is zero (ΣF = 0), representing a state of static or dynamic equilibrium.',
                si: 'ඒකතල දෛශික ගණනාවක් විශාලත්වයෙන් හා දිශාවෙන් විවෘත බහුඅස්‍රයක අනුපිළිවෙළින් ගත් පාදවලින් නිරූපණය වන්නේ නම්, ඒවායේ සම්ප්‍රයුක්තය පළමු දෛශිකයේ මුල සිට අවසන් දෛශිකයේ අග දක්වා ප්‍රතිවිරුද්ධ දිශාවට ඇඳි පාදයෙන් නිරූපණය වේ. දෛශික එකතුවෙන් සංවෘත බහුඅස්‍රයක් සෑදේ නම් සම්ප්‍රයුක්තය ශූන්‍ය වේ (ΣF = 0), එනම් පද්ධතිය තුල්‍යතාවයේ පවතී.',
              },
              formula: 'R = A + B + C + ... (Closed polygon: ΣF = 0)',
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'Any physical quantity that has a direction is automatically a vector.',
                si: 'දිශාවක් ඇති ඕනෑම රාශියක් ස්වයංක්‍රීයවම දෛශිකයක් වේ.',
              },
              clarification: {
                en: 'False. Having a direction is a necessary condition, but to be a vector, the quantity must obey the parallelogram/triangle law of vector addition. Electric current and pressure have direction but are scalars.',
                si: 'වැරදියි. දිශාවක් තිබූ පමණින් දෛශිකයක් නොවේ. එය දෛශික එකතු කිරීමේ නීති අනිවාර්යයෙන්ම පිළිපැදිය යුතුය (උදා: විද්‍යුත් ධාරාව අදිශයකි).',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'pq-1-6-1',
              competencyRef: 'Competency 1.5',
              difficulty: 'intermediate',
              question: {
                en: 'Two perpendicular forces of 6.0 N and 8.0 N act at a point. What is the magnitude of their resultant in N?',
                si: 'ලක්ෂ්‍යයක් මත ලම්බකව ක්‍රියා කරන 6.0 N සහ 8.0 N බල දෙකක සම්ප්‍රයුක්තයේ විශාලත්වය (N) කීයද?',
              },
              numericalExpected: 10.0,
              numericalTolerance: 0.1,
              unit: { en: 'N', si: 'N' },
              hint: {
                en: 'R = √(6² + 8²) = √(36 + 64).',
                si: 'R = √(36 + 64) = √100 = 10 N.',
              },
              answer: {
                en: 'R = √(6² + 8²) = 10.0 N.',
                si: 'R = √(6² + 8²) = 10.0 N වේ.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-7',
        slug: 'practical-investigations',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 7,
        syllabusRef: 'Competency 1.4',
        title: {
          en: 'Practical Laboratory Investigations',
          si: 'ප්‍රායෝගික රසායනාගාර පරීක්ෂණ',
        },
        summary: {
          en: 'Interactive virtual laboratory covering all 5 official NIE Grade 12 practicals: (1) Vernier Calipers (Hollow Cylinder), (2) Micrometer Screw Gauge (Coin), (3) Spherometer (Radius of Curvature), (4) Travelling Microscope (Rubber Tube), (5) Density of Regular Solid.',
          si: 'ජාතික අධ්‍යාපන ආයතන (NIE) ප්‍රායෝගික පරීක්ෂණ 5 සඳහා අන්තර්ක්‍රියාකාරී පරිසරය: (1) වර්නියර් කැලිපරය, (2) මයික්‍රොමීටරය, (3) ගෝලමානය, (4) චල අන්වීක්ෂය, (5) ඝනත්ව නිර්ණය.',
        },
        learningObjectives: [
          {
            en: 'Execute laboratory protocols, record structured observations, and apply zero error corrections.',
            si: 'රසායනාගාර නිරීක්ෂණ ක්‍රමානුකූලව සටහන් කරගෙන ශූන්‍ය දෝෂ ශෝධන යෙදීම.',
          },
          {
            en: 'Analyze sample data and compute material volume, curvature radius, tube radii, and solid density.',
            si: 'දත්ත විශ්ලේෂණය කර පරිමාව, වක්‍රතා අරය, නල අරයන් සහ ඝනත්වය ගණනය කිරීම.',
          },
          {
            en: 'Propagate fractional uncertainties and generate printable laboratory records.',
            si: 'භාගික අවිනිශ්චිතතා ප්‍රචාරණය කර මුද්‍රණය කළ හැකි රසායනාගාර වාර්තා සකස් කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Practical 1: Vernier Calipers – hollow cylinder dimensions & volume', si: 'ප්‍රායෝගික පරීක්ෂණය 1: වර්නියර් කැලිපරය - කුහර සිලින්ඩරය' },
          { en: 'Practical 2: Micrometer Screw Gauge – coin diameter and thickness', si: 'ප්‍රායෝගික පරීක්ෂණය 2: මයික්‍රොමීටරය - කාසියේ මාන' },
          { en: 'Practical 3: Spherometer – spherical mirror/lens radius of curvature', si: 'ප්‍රායෝගික පරීක්ෂණය 3: ගෝලමානය - වක්‍රතා අරය' },
          { en: 'Practical 4: Travelling Microscope – rubber tube internal and external radii', si: 'ප්‍රායෝගික පරීක්ෂණය 4: චල අන්වීක්ෂය - රබර් නලයේ අරයන්' },
          { en: 'Practical 5: Density of Regular Solid – mass, volume, and unit conversions', si: 'ප්‍රායෝගික පරීක්ෂණය 5: ක්‍රමවත් ඝන ද්‍රව්‍යයක ඝනත්වය' },
        ],
        status: 'ready',
        hasSimulation: true,
        simulationType: 'measurement-practicals',
        content: {
          introduction: {
            en: 'Practical laboratory work is the cornerstone of G.C.E. A/L Physics. Unit 1 features 5 prescribed investigations that teach measurement rigor, instrument zero correction, repeated sampling, and uncertainty propagation.',
            si: 'ප්‍රායෝගික රසායනාගාර පරීක්ෂණ උසස් පෙළ භෞතික විද්‍යාවේ පදනමයි. ඒකක 1 යටතේ නියමිත පරීක්ෂණ 5 මගින් නිරවද්‍ය මිනුම් ගැනීම, ශූන්‍ය දෝෂ ශෝධනය, පුනරාවර්තනය සහ අවිනිශ්චිතතා ප්‍රචාරණය ප්‍රගුණ කෙරේ.',
          },
          keyConcepts: [
            {
              title: { en: 'Practical 1: Hollow Cylinder', si: 'පරීක්ෂණය 1: කුහර සිලින්ඩරය' },
              description: {
                en: 'Measure external diameter D (lower jaws), internal diameter d (upper jaws), and depth h (depth probe). Volume of material: V = π(R² - r²)h.',
                si: 'බාහිර විෂ්කම්භය D, අභ්‍යන්තර විෂ්කම්භය d සහ ගැඹුර h මැනීම. ද්‍රව්‍යයේ පරිමාව: V = π(R² - r²)h.',
              },
            },
            {
              title: { en: 'Practical 2: Coin Dimensions', si: 'පරීක්ෂණය 2: කාසියේ මාන' },
              description: {
                en: 'Use ratchet to prevent coin deformation. Measure diameter across 3 directions to account for eccentricity. Volume V = π(D/2)²t.',
                si: 'විරූපණය වැළැක්වීමට රැචටය භාවිත කරන්න. අණ්ඩාකාර දෝෂ වැළැක්වීමට විෂ්කම්භ 3ක් මනින්න. V = π(D/2)²t.',
              },
            },
            {
              title: { en: 'Practical 3: Spherometer Curvature', si: 'පරීක්ෂණය 3: ගෝලමාන වක්‍රතාව' },
              description: {
                en: 'Measure leg spacing a on paper pricks. Obtain plane zero h₀ on glass. Measure curved elevation h₁. Formula: R = (a² / 6h) + (h / 2).',
                si: 'කඩදාසි මත පාද ලකුණු කර a මනින්න. තල වීදුරුවෙන් h₀ ද, ගෝලීය පෘෂ්ඨයෙන් h₁ ද ගෙන R = (a² / 6h) + (h / 2) මගින් R සොයන්න.',
              },
            },
            {
              title: { en: 'Practical 4: Travelling Microscope Tube', si: 'පරීක්ෂණය 4: චල අන්වීක්ෂයෙන් නලය' },
              description: {
                en: 'Traverse horizontally in ONE direction to prevent backlash error. Record x₁, x₂, x₃, x₄. d_int = x₃ - x₂, d_ext = x₄ - x₁, thickness t = (d_ext - d_int)/2.',
                si: 'පශ්චාත්පාත දෝෂය වැළැක්වීමට එකම දිශාවකට ගමන් කර x₁, x₂, x₃, x₄ සටහන් කරන්න. අභ්‍යන්තර විෂ්කම්භය = x₃ - x₂, බාහිර විෂ්කම්භය = x₄ - x₁.',
              },
            },
            {
              title: { en: 'Practical 5: Solid Density', si: 'පරීක්ෂණය 5: ඝනත්වය නිර්ණය' },
              description: {
                en: 'Select balance for mass and vernier/micrometer for dimensions. Density ρ = m/V. Convert g cm⁻³ to kg m⁻³ by multiplying by 1000.',
                si: 'ස්කන්ධය තුලාවෙන්ද මාන කැලිපරයෙන්ද මැන ρ = m/V ගණනය කරන්න. 1000 න් ගුණ කර kg m⁻³ බවට පත් කරන්න.',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-1-8',
        slug: 'unit-assessment',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 8,
        syllabusRef: 'Competencies 1.1 – 1.5',
        title: {
          en: 'Unit 1 Comprehensive Assessment',
          si: 'ඒකක 1 පුළුල් ඇගයීම් පරීක්ෂණය',
        },
        summary: {
          en: 'Summative 20-question randomized evaluation testing all 5 syllabus competencies with instant grading, physical explanations, and targeted lesson recap links.',
          si: 'විෂය නිර්දේශයේ නිපුණතා 5 ම ආවරණය වන ප්‍රශ්න 20 කින් යුත් සාරාංශ ඇගයීම, ක්ෂණික ලකුණු ලබාදීම, විද්‍යාත්මක පැහැදිලි කිරීම් සහ පාඩම් සමාලෝචන සබැඳි.',
        },
        learningObjectives: [
          {
            en: 'Synthesize concepts across all 5 measurement competencies under exam-style conditions.',
            si: 'මිනුම ඒකකයේ සියලු නිපුණතා ඒකාබද්ධ කර ගැටලු විසඳීම.',
          },
          {
            en: 'Assess individual mastery across each competency to identify areas requiring revision.',
            si: 'තමන්ගේ ප්‍රගතිය නිපුණතා මට්ටමින් ස්වයං ඇගයීම කර සංශෝධන අවශ්‍ය ක්ෂේත්‍ර හඳුනා ගැනීම.',
          },
        ],
        topicOutline: [
          { en: 'Competency 1.1: Nature of science & investigation', si: 'නිපුණතාව 1.1: විද්‍යාත්මක ගවේෂණය' },
          { en: 'Competency 1.2: Physical quantities & SI units', si: 'නිපුණතාව 1.2: භෞතික රාශි සහ SI ඒකක' },
          { en: 'Competency 1.3: Dimensional analysis & equations', si: 'නිපුණතාව 1.3: මාන විශ්ලේෂණය' },
          { en: 'Competency 1.4: Measuring instruments & errors', si: 'නිපුණතාව 1.4: මිනුම් උපකරණ සහ දෝෂ' },
          { en: 'Competency 1.5: Vectors and scalars', si: 'නිපුණතාව 1.5: දෛශික සහ අදිශ' },
        ],
        status: 'ready',
        hasSimulation: true,
        simulationType: 'unit-assessment',
      },
    ],
  },

  // =========================================================================
  // UNIT 2: Mechanics (යාන්ත්‍ර විද්‍යාව) - Syllabus Competency 2
  // =========================================================================
  {
    id: 'unit-2',
    slug: 'mechanics',
    syllabusOrder: 2,
    competencyRange: 'Competency 2.1 – 2.8',
    title: {
      en: 'Mechanics',
      si: 'යාන්ත්‍ර විද්‍යාව',
    },
    description: {
      en: 'Kinematics, vectors, Newton laws of motion, work, energy, power, circular motion, rotational dynamics, and fluid hydrostatics.',
      si: 'චාලක විද්‍යාව, දෛශික, නිව්ටන්ගේ චලිත නියම, කාර්යය, ශක්තිය, ක්ෂමතාව, වෘත්ත චලිතය, භ්‍රමණ ගතිවිද්‍යාව සහ තරල ස්ථිති විද්‍යාව.',
    },
    lessons: MECHANICS_LESSONS,
  },

  // =========================================================================
  // UNIT 3: Oscillations and Waves (කම්පන සහ තරංග) - Syllabus Competency 3
  // =========================================================================
  {
    id: 'unit-3',
    slug: 'oscillations-and-waves',
    syllabusOrder: 3,
    competencyRange: 'Competency 3.1 – 3.11',
    title: {
      en: 'Oscillations and Waves',
      si: 'කම්පන සහ තරංග',
    },
    description: {
      en: 'Simple harmonic motion, mechanical waves, sound wave propagation, Doppler effect, and physical/geometrical optics.',
      si: 'සරල අනුවර්තී චලිතය, යාන්ත්‍රික තරංග, ධ්වනි තරංග සම්ප්‍රේෂණය, ඩොප්ලර් ආචරණය, සහ භෞතික හා ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව.',
    },
    lessons: WAVES_LESSONS,
  },

  // =========================================================================
  // UNIT 4: Thermal Physics (තාප භෞතික විද්‍යාව) - Syllabus Competency 4
  // =========================================================================
  {
    id: 'unit-4',
    slug: 'thermal-physics',
    syllabusOrder: 4,
    competencyRange: 'Competency 4.1 – 4.9',
    title: {
      en: 'Thermal Physics',
      si: 'තාප භෞතික විද්‍යාව',
    },
    description: {
      en: 'Thermometry, thermal expansion, calorimetry, ideal gas laws, kinetic theory of gases, thermodynamics, and heat transfer mechanisms.',
      si: 'උෂ්ණත්වමිතිය, තාප ප්‍රසාරණය, කැලරිමිතිය, පරිපූර්ණ වායු නියම, වායුවල චාලක වාදය, තාපගති විද්‍යාව සහ තාප සංක්‍රාමණ ක්‍රම.',
    },
    lessons: THERMAL_LESSONS,
  },

  // =========================================================================
  // UNIT 5: Gravitational Field (ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර) - Syllabus Competency 5
  // =========================================================================
  {
    id: 'unit-5',
    slug: 'gravitational-field',
    syllabusOrder: 5,
    competencyRange: 'Competency 5.1 – 5.2',
    title: {
      en: 'Gravitational Field',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර',
    },
    description: {
      en: 'Newton’s universal law of gravitation, gravitational field intensity, gravitational potential, orbital mechanics, Kepler’s laws, geostationary and polar satellites, and escape velocity.',
      si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය, ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව, ගුරුත්වාකර්ෂණ විභවය, කක්ෂීය යාන්ත්‍ර විද්‍යාව, කෙප්ලර් නියම, භූ-ස්ථාවර හා ධ්‍රැවීය චන්ද්‍රිකා සහ නිදහස් ප්‍රවේගය.',
    },
    lessons: GRAVITATION_LESSONS,
  },

  // =========================================================================
  // UNIT 6: Electrostatic Field (ස්ථිති විද්‍යුත් ක්ෂේත්‍ර) - Syllabus Competency 6
  // =========================================================================
  {
    id: 'unit-6',
    slug: 'electrostatic-field',
    syllabusOrder: 6,
    competencyRange: 'Competency 6.1 – 6.4',
    title: {
      en: 'Electrostatic Field',
      si: 'ස්ථිති විද්‍යුත් ක්ෂේත්‍ර',
    },
    description: {
      en: 'Coulomb’s law, electric field intensity, Gauss’s theorem, electric potential, capacitance, and dielectrics in parallel plate capacitors.',
      si: 'කූලෝම් නියමය, විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව, ගවුස්ගේ ප්‍රමේයය, විද්‍යුත් විභවය, ධාරිතාව සහ සමාන්තර තහඩු ධාරිත්‍රකවල පාරවිද්‍යුත් ද්‍රව්‍ය.',
    },
    lessons: ELECTROSTATICS_LESSONS,
  },

  // =========================================================================
  // UNIT 7: Magnetic Field (චුම්බක ක්ෂේත්‍ර) - Syllabus Competency 7
  // =========================================================================
  {
    id: 'unit-7',
    slug: 'magnetic-field',
    syllabusOrder: 7,
    competencyRange: 'Competency 7.1 – 7.3',
    title: {
      en: 'Magnetic Field',
      si: 'චුම්බක ක්ෂේත්‍ර',
    },
    description: {
      en: 'Magnetic flux density, terrestrial magnetism, Lorentz magnetic force, Hall effect, conductor and parallel wire interactions, moving-coil galvanometer, Biot-Savart and Ampere’s laws, and solenoids.',
      si: 'චුම්බක ස්‍රාව ඝනත්වය, භෞමික චුම්බකත්වය, ලොරෙන්ට්ස් චුම්බක බලය, හෝල් ආචරණය, සන්නායක හා සමාන්තර කම්බි අන්තර්ක්‍රියා, සසල දඟර ගැල්වනෝමීටරය, බියෝ-සැවා සහ ඇම්පියර් නියම, සහ සොලනොයිඩ.',
    },
    lessons: MAGNETISM_LESSONS,
  },

  // =========================================================================
  // UNIT 8: Current Electricity (ධාරා විද්‍යුතය) - Syllabus Competency 8
  // =========================================================================
  {
    id: 'unit-8',
    slug: 'current-electricity',
    syllabusOrder: 8,
    competencyRange: 'Competency 8.1 – 8.6',
    title: {
      en: 'Current Electricity',
      si: 'ධාරා විද්‍යුතය',
    },
    description: {
      en: 'Drift velocity, Ohm’s law, resistivity, temperature coefficient of resistance, internal resistance, Kirchhoff’s circuit laws, potentiometer, Wheatstone bridge, electromagnetic induction, motional EMF, AC circuits, and transformers.',
      si: 'ප්ලාවිත ප්‍රවේගය, ඕම් නියමය, ප්‍රතිරෝධකතාව, ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය, අභ්‍යන්තර ප්‍රතිරෝධය, කර්චොෆ් නියම, විභවමානය, විට්ස්ටන් සේතුව, විද්‍යුත් චුම්බක ප්‍රේරණය, චාලක වි.ගා.බ., AC පරිපථ සහ පරිණාමක.',
    },
    lessons: ELECTRICITY_LESSONS,
  },

  // =========================================================================
  // UNIT 9: Electronics (ඉලෙක්ට්‍රොනික විද්‍යාව) - Syllabus Competency 9
  // =========================================================================
  {
    id: 'unit-9',
    slug: 'electronics',
    syllabusOrder: 9,
    competencyRange: 'Competency 9.1 – 9.4',
    title: {
      en: 'Electronics',
      si: 'ඉලෙක්ට්‍රොනික විද්‍යාව',
    },
    description: {
      en: 'Semiconductor physics, p-n junction diodes, rectification and power supplies, bipolar junction transistors (BJT), operational amplifiers (Op-Amps), and digital logic gates.',
      si: 'අර්ධ සන්නායක භෞතික විද්‍යාව, p-n සන්ධි ඩයෝඩ, ධාරා නිවැරදි කරණය හා බල සැපයුම්, ද්විධ්‍රැව සන්ධි ට්‍රාන්සිස්ටර (BJT), ක්‍රියාකාරී වර්ධක (Op-Amp) සහ ඩිජිටල් තාර්කික ද්වාර.',
    },
    lessons: ELECTRONICS_LESSONS,
  },

  // =========================================================================
  // UNIT 10: Mechanical Properties of Matter (පදාර්ථයේ යාන්ත්‍රික ගුණ) - Syllabus Competency 10
  // =========================================================================
  {
    id: 'unit-10',
    slug: 'mechanical-properties-of-matter',
    syllabusOrder: 10,
    competencyRange: 'Competency 10.1 – 10.3',
    title: {
      en: 'Mechanical Properties of Matter',
      si: 'පදාර්ථයේ යාන්ත්‍රික ගුණ',
    },
    description: {
      en: 'Solid elasticity, Hooke’s law, Young’s modulus, fluid viscosity, Stokes’ law, Poiseuille flow, surface tension, and capillary action.',
      si: 'ඝන ප්‍රත්‍යාස්ථතාව, හුක් නියමය, යං මාපාංකය, තරල දුස්ස්‍රාවිතාව, ස්ටෝක්ස් නියමය, පුවසෙයිල් ප්‍රවාහය, පෘෂ්ඨික ආතතිය සහ කේශික ක්‍රියාව.',
    },
    lessons: MATTER_PROPERTIES_LESSONS,
  },

  // =========================================================================
  // UNIT 11: Matter and Radiation (පදාර්ථය සහ විකිරණ) - Syllabus Competency 11
  // =========================================================================
  {
    id: 'unit-11',
    slug: 'matter-and-radiation',
    syllabusOrder: 11,
    competencyRange: 'Competency 11.1 – 11.7',
    title: {
      en: 'Matter and Radiation',
      si: 'පදාර්ථය සහ විකිරණ',
    },
    description: {
      en: 'Quantum nature of radiation, photoelectric effect, Einstein’s equation, line spectra, X-rays, wave-particle duality, and nuclear physics basics.',
      si: 'විකිරණයේ ක්වොන්ටම් ස්වභාවය, ප්‍රකාශ විද්‍යුත් ආචරණය, අයින්ස්ටයින් සමීකරණය, රේඛීය වර්ණාවලි, එක්ස්-කිරණ, තරංග-අංශු ද්වෛතය සහ න්‍යෂ්ටික භෞතික විද්‍යාවේ මූලික කරුණු.',
    },
    lessons: QUANTUM_NUCLEAR_LESSONS,
  },
];
