import { UnitDefinition } from './types';

export const UNITS: UnitDefinition[] = [
  // =========================================================================
  // UNIT 1: Measurement (මිනුම) - Syllabus Competency 1
  // =========================================================================
  {
    id: 'unit-1',
    slug: 'measurement',
    syllabusOrder: 1,
    competencyRange: 'Competency 1.1 – 1.3',
    title: {
      en: 'Measurement',
      si: 'මිනුම',
    },
    description: {
      en: 'Foundations of physical quantities, SI units, dimensional analysis, precision measuring instruments, and error analysis.',
      si: 'භෞතික රාශි, ජාත්‍යන්තර (SI) ඒකක, මාන විශ්ලේෂණය, නිරවද්‍ය මිනුම් උපකරණ සහ දෝෂ විශ්ලේෂණයේ මූලධර්ම.',
    },
    lessons: [
      {
        id: 'lesson-1-1',
        slug: 'physical-quantities-and-units',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 1,
        syllabusRef: 'Competency 1.1',
        title: {
          en: 'Physical Quantities and SI Units',
          si: 'භෞතික රාශි සහ SI ඒකක',
        },
        summary: {
          en: 'Basic and derived physical quantities, standard SI base units, prefixes, and dimensional equations.',
          si: 'මූලික සහ ව්‍යුත්පන්න භෞතික රාශි, සම්මත SI මූලික ඒකක, උපසර්ග සහ මාන සමීකරණ.',
        },
        learningObjectives: [
          {
            en: 'Distinguish between fundamental and derived physical quantities and their standard SI units.',
            si: 'මූලික සහ ව්‍යුත්පන්න භෞතික රාශි සහ ඒවායේ සම්මත SI ඒකක හඳුනා ගැනීම.',
          },
          {
            en: 'Derive dimensions of physical quantities and verify dimensional homogeneity in physical equations.',
            si: 'භෞතික රාශිවල මාන ව්‍යුත්පන්න කිරීම සහ භෞතික සමීකරණවල මාන සමජාතීයතාව පරීක්ෂා කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Base quantities and SI base units', si: 'මූලික රාශි සහ SI මූලික ඒකක' },
          { en: 'Derived quantities and coherent unit derivation', si: 'ව්‍යුත්පන්න රාශි සහ ඒකක ව්‍යුත්පන්නය' },
          { en: 'Dimensional representation of physical quantities', si: 'භෞතික රාශිවල මාන නිරූපණය' },
          { en: 'Checking physical consistency using dimensions', si: 'මාන භාවිතයෙන් සමීකරණවල නිරවද්‍යතාව පරීක්ෂා කිරීම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-1-2',
        slug: 'measuring-instruments',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 2,
        syllabusRef: 'Competency 1.2',
        title: {
          en: 'Measuring Instruments & Least Count',
          si: 'මිනුම් උපකරණ සහ කුඩාම මිනුම',
        },
        summary: {
          en: 'Principles, least count calculations, zero error identification, and readings for Vernier calipers, micrometer screw gauges, and spherometers.',
          si: 'වර්නියර් කැලිපරය, මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය සහ ගෝලමානයේ මූලධර්ම, කුඩාම මිනුම, ශූන්‍ය දෝෂ සහ පාඨාංක ලබාගැනීම.',
        },
        learningObjectives: [
          {
            en: 'Determine the least count and zero error of standard laboratory length-measuring instruments.',
            si: 'සම්මත දිග මනින උපකරණවල කුඩාම මිනුම සහ ශූන්‍ය දෝෂ ගණනය කිරීම.',
          },
          {
            en: 'Record accurate measurements and apply zero corrections systematically.',
            si: 'නිරවද්‍ය පාඨාංක සටහන් කර ගැනීම සහ ශූන්‍ය දෝෂ ශෝධන ක්‍රමානුකූලව යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Vernier caliper principle and least count', si: 'වර්නියර් කැලිපරයේ මූලධර්මය සහ කුඩාම මිනුම' },
          { en: 'Micrometer screw gauge: pitch and circular scale', si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය: අන්තරාලය සහ වට පරිමාණය' },
          { en: 'Spherometer and radius of curvature determination', si: 'ගෝලමානය සහ වක්‍රතා අරය නිර්ණය කිරීම' },
          { en: 'Travelling microscope and fine vertical/horizontal measurements', si: 'චල අන්වීක්ෂය සහ සියුම් මිනුම් ලබාගැනීම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-1-3',
        slug: 'errors-in-measurement',
        unitSlug: 'measurement',
        unitOrder: 1,
        lessonOrder: 3,
        syllabusRef: 'Competency 1.3',
        title: {
          en: 'Errors and Uncertainty in Measurement',
          si: 'මිනුම්වල දෝෂ සහ අවිනිශ්චිතතාව',
        },
        summary: {
          en: 'Systematic and random errors, fractional and percentage uncertainty, and error propagation in experimental calculations.',
          si: 'පද්ධතිමය සහ සසම්භාවී දෝෂ, භාගික සහ ප්‍රතිශත අවිනිශ්චිතතාව, සහ ගණනය කිරීම්වල දෝෂ සංයෝජනය.',
        },
        learningObjectives: [
          {
            en: 'Distinguish between systematic errors and random experimental uncertainties.',
            si: 'පද්ධතිමය දෝෂ සහ සසම්භාවී අවිනිශ්චිතතා අතර වෙනස හඳුනා ගැනීම.',
          },
          {
            en: 'Compute absolute, fractional, and percentage errors in compound formula calculations.',
            si: 'සංයුක්ත සූත්‍ර ගණනය කිරීම්වල නිරපේක්ෂ, භාගික සහ ප්‍රතිශත දෝෂ ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Classification of experimental errors', si: 'ප්‍රායෝගික දෝෂ වර්ගීකරණය' },
          { en: 'Fractional and percentage error estimation', si: 'භාගික සහ ප්‍රතිශත දෝෂ ඇස්තමේන්තු කිරීම' },
          { en: 'Propagation of errors in addition, subtraction, powers, and quotients', si: 'එකතු කිරීම, අඩු කිරීම, බල සහ ගුණාකාරවල දෝෂ සංයෝජනය' },
        ],
        status: 'outline',
        hasSimulation: false,
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
    competencyRange: 'Competency 2.1 – 2.10',
    title: {
      en: 'Mechanics',
      si: 'යාන්ත්‍ර විද්‍යාව',
    },
    description: {
      en: 'Kinematics, vectors, Newton laws of motion, work, energy, power, circular motion, rotational dynamics, and fluid hydrostatics.',
      si: 'චාලක විද්‍යාව, දෛශික, නිව්ටන්ගේ චලිත නියම, කාර්යය, ශක්තිය, ක්ෂමතාව, වෘත්ත චලිතය, භ්‍රමණ ගතිවිද්‍යාව සහ තරල ස්ථිති විද්‍යාව.',
    },
    lessons: [
      {
        id: 'lesson-2-1',
        slug: 'vectors-and-scalars',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 1,
        syllabusRef: 'Competency 2.1',
        title: {
          en: 'Vectors and Scalars',
          si: 'දෛශික සහ අදිශ',
        },
        summary: {
          en: 'Distinction between scalar and vector quantities, geometric addition, parallelogram and triangle laws, and resolution of vectors into perpendicular components.',
          si: 'අදිශ සහ දෛශික රාශි, ජ්‍යාමිතික එකතු කිරීම, සමාන්තරාස්‍ර හා ත්‍රිකෝණ නීති, සහ ලම්බක සංරචකවලට දෛශික විභේදනය.',
        },
        learningObjectives: [
          {
            en: 'Categorize physical quantities as vectors or scalars based on magnitude and direction.',
            si: 'විශාලත්වය සහ දිශාව මත පදනම්ව භෞතික රාශි අදිශ හෝ දෛශික ලෙස වර්ගීකරණය කිරීම.',
          },
          {
            en: 'Resolve vectors along mutually perpendicular axes to find resultants.',
            si: 'සම්ප්‍රයුක්තය සෙවීම සඳහා දෛශික ලම්බක අක්ෂ ඔස්සේ විභේදනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Scalars versus vectors definition', si: 'අදිශ හා දෛශික අර්ථ දැක්වීම්' },
          { en: 'Vector addition and subtraction laws', si: 'දෛශික එකතු කිරීමේ සහ අඩු කිරීමේ නීති' },
          { en: 'Resolution of vectors into rectangular components', si: 'දෛශික සෘජුකෝණී සංරචකවලට විභේදනය' },
          { en: 'Resultant of coplanar concurrent vectors', si: 'තලීය සමගාමී දෛශිකවල සම්ප්‍රයුක්තය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-2',
        slug: 'rectilinear-motion-uniform-velocity',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 2,
        syllabusRef: 'Competency 2.2',
        title: {
          en: 'Rectilinear Motion: Uniform Velocity',
          si: 'සරල රේඛීය චලිතය: ඒකාකාර ප්‍රවේගය',
        },
        summary: {
          en: 'Displacement, velocity, and time relationships for one-dimensional straight-line motion at constant velocity (s = u × t), signed conventions, and kinematic graphing.',
          si: 'නියත ප්‍රවේගයෙන් වන සරල රේඛීය චලිතය (s = u × t), සලකුණු සම්මුති, සහ චාලක ප්‍රස්තාර ආශ්‍රිත විස්ථාපනය, ප්‍රවේගය සහ කාලය අතර සම්බන්ධතා.',
        },
        learningObjectives: [
          {
            en: 'Define position, displacement, speed, and velocity rigorously in one dimension.',
            si: 'එක් මානයක පිහිටුම, විස්ථාපනය, වේගය සහ ප්‍රවේගය නිරවද්‍යව අර්ථ දැක්වීම.',
          },
          {
            en: 'Apply s = u × t with consistent directional signs to solve for unknown quantities.',
            si: 'දිශා සලකුණු නිවැරදිව යොදමින් s = u × t සමීකරණය මගින් නොදන්නා රාශි විසඳීම.',
          },
          {
            en: 'Interpret displacement-time and velocity-time graphs for uniform velocity motion.',
            si: 'ඒකාකාර ප්‍රවේගී චලිතය සඳහා විස්ථාපන-කාල සහ ප්‍රවේග-කාල ප්‍රස්තාර අර්ථකථනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Displacement as a signed vector quantity', si: 'ලකුණු සහිත දෛශික රාශියක් ලෙස විස්ථාපනය' },
          { en: 'Uniform velocity definition and the fundamental equation s = u × t', si: 'ඒකාකාර ප්‍රවේගය සහ මූලික සමීකරණය s = u × t' },
          { en: 'Displacement-time graphs: gradient as velocity', si: 'විස්ථාපන-කාල ප්‍රස්තාර: අනුක්‍රමණයෙන් ප්‍රවේගය ලබාගැනීම' },
          { en: 'Velocity-time graphs: area under curve as displacement', si: 'ප්‍රවේග-කාල ප්‍රස්තාර: ප්‍රස්තාරය යට වර්ගඵලයෙන් විස්ථාපනය' },
          { en: 'Interactive computer simulation and physical rule verification', si: 'අන්තර්ක්‍රියාකාරී පරිගණක අනුකරණය සහ භෞතික නීති තහවුරු කිරීම' },
        ],
        status: 'ready',
        hasSimulation: true,
        simulationType: 'uniform-motion',
        content: {
          introduction: {
            en: 'Uniform rectilinear motion represents the most fundamental form of motion in mechanics: an object translating along a single straight axis with zero acceleration, covering equal displacements in equal intervals of time.',
            si: 'ඒකාකාර සරල රේඛීය චලිතය යනු යාන්ත්‍ර විද්‍යාවේ වඩාත්ම මූලික චලිත ආකාරයයි: වස්තුවක් ශූන්‍ය ත්වරණයකින් එක් සරල රේඛාවක් ඔස්සේ ගමන් කරමින් සමාන කාල ප්‍රාන්තර තුළ සමාන විස්ථාපන ආවරණය කරයි.',
          },
          keyConcepts: [
            {
              title: {
                en: 'Displacement vs Distance',
                si: 'විස්ථාපනය සහ දුර',
              },
              description: {
                en: 'Distance is a scalar reflecting total path length, while displacement (s) is a signed vector measuring net change in position from start to destination along the chosen coordinate axis.',
                si: 'දුර යනු ගමන් කළ මුළු මාර්ග දිග දක්වන අදිශයකි. විස්ථාපනය (s) යනු තෝරාගත් ඛණ්ඩාංක අක්ෂය ඔස්සේ ආරම්භයේ සිට ගමනාන්තය දක්වා සිදුවූ ශුද්ධ පිහිටුම් වෙනස දක්වන ලකුණු සහිත දෛශිකයකි.',
              },
              formula: 's = x_final - x_initial',
            },
            {
              title: {
                en: 'Uniform Velocity Equation',
                si: 'ඒකාකාර ප්‍රවේග සමීකරණය',
              },
              description: {
                en: 'When velocity is invariant over duration t, acceleration is identically zero. The kinematic relationship connecting displacement s, velocity u, and elapsed time t is linear.',
                si: 't කාල සීමාව තුළ ප්‍රවේගය නියතව පවතින විට ත්වරණය ශූන්‍ය වේ. විස්ථාපනය s, ප්‍රවේගය u සහ ගතවූ කාලය t අතර සම්බන්ධතාවය රේඛීය වේ.',
              },
              formula: 's = u × t',
            },
            {
              title: {
                en: 'Sign Conventions Along the Axis',
                si: 'අක්ෂය ඔස්සේ සලකුණු සම්මුතිය',
              },
              description: {
                en: 'A reference positive direction must be established. Displacements and velocities pointing in the defined positive direction are positive (+); those directed reversely are negative (-). Time t must always be non-negative (t ≥ 0).',
                si: 'යොමු ධන දිශාවක් තෝරාගත යුතුය. එම ධන දිශාවට යොමුවූ විස්ථාපන හා ප්‍රවේග ධන (+) වන අතර විරුද්ධ දිශාවට යොමුවූ ඒවා සෘණ (-) වේ. ගතවන කාලය t සැමවිටම සෘණ නොවන අගයක් විය යුතුය (t ≥ 0).',
              },
            },
          ],
          commonMisconceptions: [
            {
              misconception: {
                en: 'Confusing negative velocity with deceleration or slowing down.',
                si: 'සෘණ ප්‍රවේගය යනු මන්දනයක් හෝ වේගය අඩුවීමක් යැයි වරදවා වටහා ගැනීම.',
              },
              clarification: {
                en: 'Negative velocity indicates movement in the negative coordinate direction at constant speed; it does not imply deceleration.',
                si: 'සෘණ ප්‍රවේගය යනු තෝරාගත් ධන දිශාවට විරුද්ධ දිශාවට නියත වේගයකින් ගමන් කිරීමයි. එයින් වේගය අඩුවීමක් අදහස් නොවේ.',
              },
            },
            {
              misconception: {
                en: 'Treating speed and velocity as interchangeable when signs matter.',
                si: 'ලකුණු වැදගත් වන අවස්ථාවලදී වේගය සහ ප්‍රවේගය එක සමාන යැයි සැලකීම.',
              },
              clarification: {
                en: 'Speed is magnitude |u| and is always positive. Velocity u carries directional sign essential for vector calculation.',
                si: 'වේගය යනු විශාලත්වය |u| පමණක් වන අතර සැමවිටම ධන වේ. ප්‍රවේගය u තුළ දෛශික ගණනය කිරීම් සඳහා අත්‍යවශ්‍ය වන දිශා සලකුණ පවතී.',
              },
            },
          ],
          practiceQuestions: [
            {
              id: 'q1',
              question: {
                en: 'A car moves along a straight road towards the East at a constant velocity of 20 m/s for 15 seconds. Choosing East as the positive direction, calculate its displacement.',
                si: 'මෝටර් රථයක් නැගෙනහිර දෙසට 20 m/s නියත ප්‍රවේගයකින් තත්පර 15 ක් සරල රේඛීයව ගමන් කරයි. නැගෙනහිර ධන දිශාව ලෙස ගෙන එහි විස්ථාපනය ගණනය කරන්න.',
              },
              hint: {
                en: 'Use s = u × t with u = +20 m/s and t = 15 s.',
                si: 'u = +20 m/s සහ t = 15 s ආදේශ කර s = u × t සූත්‍රය යොදන්න.',
              },
              answer: {
                en: 's = (+20 m/s) × 15 s = +300 m (300 m towards East)',
                si: 's = (+20 m/s) × 15 s = +300 m (නැගෙනහිර දෙසට 300 m)',
              },
            },
            {
              id: 'q2',
              question: {
                en: 'An athlete runs along a straight track towards the West, covering 120 m in 20 seconds. If the positive axis is defined towards the East, find the athlete velocity.',
                si: 'ක්‍රීඩකයෙක් බටහිර දෙසට සරල රේඛීයව තත්පර 20 කදී 120 m ක විස්ථාපනයක් සිදු කරයි. නැගෙනහිර ධන දිශාව ලෙස ගතහොත් ක්‍රීඩකයාගේ ප්‍රවේගය සොයන්න.',
              },
              hint: {
                en: 'Because motion is West and positive is East, displacement s = -120 m.',
                si: 'චලිතය බටහිරට වන අතර ධන දිශාව නැගෙනහිර බැවින් විස්ථාපනය s = -120 m වේ.',
              },
              answer: {
                en: 'u = s / t = (-120 m) / 20 s = -6.0 m/s (6.0 m/s towards West)',
                si: 'u = s / t = (-120 m) / 20 s = -6.0 m/s (බටහිර දෙසට 6.0 m/s)',
              },
            },
          ],
        },
      },
      {
        id: 'lesson-2-3',
        slug: 'uniformly-accelerated-motion',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 3,
        syllabusRef: 'Competency 2.3',
        title: {
          en: 'Uniformly Accelerated Motion',
          si: 'ඒකාකාර ත්වරිත චලිතය',
        },
        summary: {
          en: 'Equations of linear motion under constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, and motion under gravity.',
          si: 'නියත ත්වරණය යටතේ සරල රේඛීය චලිත සමීකරණ: v = u + at, s = ut + ½at², v² = u² + 2as, සහ ගුරුත්වය යටතේ චලිතය.',
        },
        learningObjectives: [
          {
            en: 'Derive and apply the kinematic equations for constant acceleration.',
            si: 'නියත ත්වරණය සඳහා චාලක සමීකරණ ව්‍යුත්පන්න කිරීම සහ යෙදීම.',
          },
          {
            en: 'Solve vertical motion problems under gravitational acceleration g.',
            si: 'ගුරුත්වජ ත්වරණය g යටතේ සිරස් චලිත ගැටලු විසඳීම.',
          },
        ],
        topicOutline: [
          { en: 'Definition of acceleration as rate of change of velocity', si: 'ප්‍රවේගය වෙනස්වීමේ සීඝ්‍රතාව ලෙස ත්වරණය' },
          { en: 'Derivation of the four linear kinematic equations', si: 'රේඛීය චාලක සමීකරණ හතර ව්‍යුත්පන්න කිරීම' },
          { en: 'Vertical projectile motion under gravity', si: 'ගුරුත්වය යටතේ සිරස් ප්‍රක්ෂිප්ත චලිතය' },
          { en: 'Graphical problem solving using v-t diagrams', si: 'v-t ප්‍රස්තාර ඇසුරින් ගැටලු විසඳීම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-4',
        slug: 'projectiles',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 4,
        syllabusRef: 'Competency 2.4',
        title: {
          en: 'Projectile Motion in Two Dimensions',
          si: 'ද්විමාන ප්‍රක්ෂිප්ත චලිතය',
        },
        summary: {
          en: 'Independence of horizontal and vertical motions, trajectory equation, maximum height, time of flight, and horizontal range.',
          si: 'තිරස් සහ සිරස් චලිතවල ස්වාධීනත්වය, පථ සමීකරණය, උපරිම උස, පියාසර කාලය සහ තිරස් පරාසය.',
        },
        learningObjectives: [
          {
            en: 'Analyze two-dimensional projectile motion by resolving into perpendicular axes.',
            si: 'ලම්බක අක්ෂ වලට විභේදනය කර ද්විමාන ප්‍රක්ෂිප්ත චලිතය විශ්ලේෂණය කිරීම.',
          },
          {
            en: 'Calculate time of flight, maximum height, and horizontal range for oblique projection.',
            si: 'ආනත ප්‍රක්ෂේපණය සඳහා පියාසර කාලය, උපරිම උස සහ තිරස් පරාසය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Principle of physical independence of perpendicular motions', si: 'ලම්බක චලිතවල භෞතික ස්වාධීනතා මූලධර්මය' },
          { en: 'Horizontal projection from a height', si: 'උසක සිට තිරස් ප්‍රක්ෂේපණය' },
          { en: 'Oblique projection from ground level', si: 'තිරසට ආනතව පොළොව මට්ටමේ සිට ප්‍රක්ෂේපණය' },
          { en: 'Parabolic trajectory equation', si: 'පරාවලයික පථ සමීකරණය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-5',
        slug: 'newton-laws-of-motion',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 5,
        syllabusRef: 'Competency 2.5',
        title: {
          en: 'Newton’s Laws of Motion & Friction',
          si: 'නිව්ටන්ගේ චලිත නියම සහ ඝර්ෂණය',
        },
        summary: {
          en: 'Inertia, force and momentum (F = dp/dt = ma), action-reaction pairs, free body diagrams, and laws of static and dynamic friction.',
          si: 'අවස්ථිතිය, බලය සහ ගම්‍යතාව (F = dp/dt = ma), ක්‍රියා-ප්‍රතික්‍රියා යුගල, නිදහස් වස්තු රූප සටහන්, සහ ස්ථිතික හා ගතික ඝර්ෂණ නියම.',
        },
        learningObjectives: [
          {
            en: 'State and apply Newton’s three laws of motion to connected bodies.',
            si: 'නිව්ටන්ගේ චලිත නියම තුන ප්‍රකාශ කිරීම සහ එකිනෙක ඈඳූ වස්තු පද්ධති සඳහා යෙදීම.',
          },
          {
            en: 'Construct free-body diagrams and model limiting friction accurately.',
            si: 'නිදහස් වස්තු රූප සටහන් ඇඳීම සහ සීමාකාරී ඝර්ෂණය නිවැරදිව ආදර්ශනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Newton’s First Law and inertial reference frames', si: 'නිව්ටන්ගේ පළමු නියමය සහ අවස්ථිතික රාමු' },
          { en: 'Newton’s Second Law and linear momentum (F = ma)', si: 'නිව්ටන්ගේ දෙවන නියමය සහ රේඛීය ගම්‍යතාව (F = ma)' },
          { en: 'Newton’s Third Law and action-reaction pairs', si: 'නිව්ටන්ගේ තෙවන නියමය සහ ක්‍රියා-ප්‍රතික්‍රියා යුගල' },
          { en: 'Static, limiting, and dynamic friction laws', si: 'ස්ථිතික, සීමාකාරී සහ ගතික ඝර්ෂණ නීති' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-6',
        slug: 'work-energy-and-power',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 6,
        syllabusRef: 'Competency 2.6',
        title: {
          en: 'Work, Energy, and Power',
          si: 'කාර්යය, ශක්තිය සහ ක්ෂමතාව',
        },
        summary: {
          en: 'Work done by constant and variable forces, kinetic energy, gravitational and elastic potential energy, conservation of mechanical energy, and power.',
          si: 'නියත සහ විචල්‍ය බල මගින් කෙරෙන කාර්යය, චාලක ශක්තිය, ගුරුත්වාකර්ෂණ හා ප්‍රත්‍යාස්ථ විභව ශක්තිය, යාන්ත්‍රික ශක්ති සංස්ථිතිය සහ ක්ෂමතාව.',
        },
        learningObjectives: [
          {
            en: 'Calculate work done and apply the work-energy theorem to mechanical systems.',
            si: 'කාර්යය ගණනය කිරීම සහ යාන්ත්‍රික පද්ධති සඳහා කාර්ය-ශක්ති ප්‍රමේයය යෙදීම.',
          },
          {
            en: 'Apply the principle of conservation of mechanical energy to conservative forces.',
            si: 'සංස්ථිතික බල ක්ෂේත්‍ර තුළ යාන්ත්‍රික ශක්ති සංස්ථිති මූලධර්මය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Work done by a force (W = F · s)', si: 'බලයක් මගින් කෙරෙන කාර්යය (W = F · s)' },
          { en: 'Work-energy theorem and kinetic energy derivation', si: 'කාර්ය-ශක්ති ප්‍රමේයය සහ චාලක ශක්තිය' },
          { en: 'Potential energy in gravitational and elastic systems', si: 'ගුරුත්වාකර්ෂණ සහ ප්‍රත්‍යාස්ථ විභව ශක්තිය' },
          { en: 'Conservation of mechanical energy and power rating', si: 'යාන්ත්‍රික ශක්ති සංස්ථිතිය සහ ක්ෂමතාව' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-7',
        slug: 'linear-momentum-and-impulse',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 7,
        syllabusRef: 'Competency 2.7',
        title: {
          en: 'Linear Momentum and Impulse',
          si: 'රේඛීය ගම්‍යතාව සහ ආවේගය',
        },
        summary: {
          en: 'Principle of conservation of linear momentum, impulse of a force, elastic and inelastic collisions, and rocket propulsion principles.',
          si: 'රේඛීය ගම්‍යතා සංස්ථිති මූලධර්මය, බලයක ආවේගය, ප්‍රත්‍යාස්ථ සහ අප්‍රත්‍යාස්ථ ගැටුම්, සහ රොකට් ප්‍රචාලන මූලධර්ම.',
        },
        learningObjectives: [
          {
            en: 'Apply the principle of conservation of linear momentum to isolated colliding systems.',
            si: 'හුදකලා ගැටුම් පද්ධති සඳහා රේඛීය ගම්‍යතා සංස්ථිති මූලධර්මය යෙදීම.',
          },
          {
            en: 'Distinguish between kinetic-energy-conserving elastic collisions and inelastic collisions.',
            si: 'චාලක ශක්තිය සංස්ථිතික වන ප්‍රත්‍යාස්ථ ගැටුම් සහ අප්‍රත්‍යාස්ථ ගැටුම් වෙන්කර හඳුනා ගැනීම.',
          },
        ],
        topicOutline: [
          { en: 'Linear momentum and Newton’s second law', si: 'රේඛීය ගම්‍යතාව සහ නිව්ටන්ගේ දෙවන නියමය' },
          { en: 'Impulse of a force (J = Δp = ∫ F dt)', si: 'බලයක ආවේගය (J = Δp = ∫ F dt)' },
          { en: 'Principle of conservation of linear momentum', si: 'රේඛීය ගම්‍යතා සංස්ථිති මූලධර්මය' },
          { en: 'One-dimensional elastic and inelastic collisions', si: 'එක් මානයක ප්‍රත්‍යාස්ථ හා අප්‍රත්‍යාස්ථ ගැටුම්' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-8',
        slug: 'circular-motion',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 8,
        syllabusRef: 'Competency 2.8',
        title: {
          en: 'Uniform Circular Motion',
          si: 'ඒකාකාර වෘත්ත චලිතය',
        },
        summary: {
          en: 'Angular velocity, centripetal acceleration (v²/r = ω²r), centripetal force, banked roads, and motion in horizontal and vertical circles.',
          si: 'කෝණික ප්‍රවේගය, කේන්ද්‍රාභිසාරී ත්වරණය (v²/r = ω²r), කේන්ද්‍රාභිසාරී බලය, බැංකුගත මාර්ග, සහ තිරස් හා සිරස් වෘත්තාකාර චලිතය.',
        },
        learningObjectives: [
          {
            en: 'Define angular displacement, angular velocity, and establish relation v = rω.',
            si: 'කෝණික විස්ථාපනය, කෝණික ප්‍රවේගය අර්ථ දැක්වීම සහ v = rω සම්බන්ධතාව ගොඩනැගීම.',
          },
          {
            en: 'Calculate centripetal force in banked curves and conical pendulums.',
            si: 'බැංකුගත වක්‍ර මාර්ග සහ කේතු අවලම්බ තුළ කේන්ද්‍රාභිසාරී බලය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Angular kinematics parameters (θ, ω, α)', si: 'කෝණික චාලක රාශි (θ, ω, α)' },
          { en: 'Centripetal acceleration and centripetal force', si: 'කේන්ද්‍රාභිසාරී ත්වරණය සහ කේන්ද්‍රාභිසාරී බලය' },
          { en: 'Motion on banked roads and tracks', si: 'බැංකුගත මාර්ගවල සහ ධාවන පථවල චලිතය' },
          { en: 'Motion in a vertical circle and critical velocity', si: 'සිරස් වෘත්තයක චලිතය සහ අවම තීරක ප්‍රවේගය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-9',
        slug: 'rotational-dynamics',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 9,
        syllabusRef: 'Competency 2.9',
        title: {
          en: 'Rotational Dynamics & Moment of Inertia',
          si: 'භ්‍රමණ ගතිවිද්‍යාව සහ අවස්ථිති ඝූර්ණය',
        },
        summary: {
          en: 'Torque, moment of inertia of rigid bodies, angular momentum conservation, and rotational kinetic energy.',
          si: 'බල ඝූර්ණය, දෘඪ වස්තුවල අවස්ථිති ඝූර්ණය, කෝණික ගම්‍යතා සංස්ථිතිය සහ භ්‍රමණ චාලක ශක්තිය.',
        },
        learningObjectives: [
          {
            en: 'State and apply the rotational analogue of Newton’s second law (τ = Iα).',
            si: 'නිව්ටන්ගේ දෙවන නියමයේ භ්‍රමණ සමරූපය (τ = Iα) ප්‍රකාශ කිරීම සහ යෙදීම.',
          },
          {
            en: 'Apply conservation of angular momentum to rotating isolated bodies.',
            si: 'භ්‍රමණය වන හුදකලා වස්තු සඳහා කෝණික ගම්‍යතා සංස්ථිතිය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Moment of a force and couple', si: 'බලයක ඝූර්ණය සහ බල යුග්මය' },
          { en: 'Moment of inertia (I) and rotational kinetic energy', si: 'අවස්ථිති ඝූර්ණය (I) සහ භ්‍රමණ චාලක ශක්තිය' },
          { en: 'Rotational equation of motion (τ = Iα)', si: 'භ්‍රමණ චලිත සමීකරණය (τ = Iα)' },
          { en: 'Angular momentum and its conservation', si: 'කෝණික ගම්‍යතාව සහ එහි සංස්ථිතිය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-2-10',
        slug: 'fluid-statics',
        unitSlug: 'mechanics',
        unitOrder: 2,
        lessonOrder: 10,
        syllabusRef: 'Competency 2.10',
        title: {
          en: 'Fluid Statics & Upthrust',
          si: 'තරල ස්ථිති විද්‍යාව සහ උඩුකුරු තෙරපුම',
        },
        summary: {
          en: 'Density, hydrostatic pressure (P = hρg), Pascal’s principle, Archimedes’ principle, and laws of flotation.',
          si: 'ඝනත්වය, ද්‍රවස්ථිතික පීඩනය (P = hρg), පැස්කල්ගේ මූලධර්මය, ආකිමිඩීස් මූලධර්මය සහ පාවීමේ නියම.',
        },
        learningObjectives: [
          {
            en: 'Calculate hydrostatic pressure in incompressible fluids at given depths.',
            si: 'අසම්පීඩ්‍ය ද්‍රව තුළ නිශ්චිත ගැඹුරකදී ද්‍රවස්ථිතික පීඩනය ගණනය කිරීම.',
          },
          {
            en: 'Apply Archimedes’ principle and conditions for floating equilibrium.',
            si: 'ආකිමිඩීස් මූලධර්මය සහ පාවෙන වස්තුවල සමතුලිතතා කොන්දේසි යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Pressure in static liquids (P = hρg + P_atm)', si: 'නිශ්චල ද්‍රවයක පීඩනය (P = hρg + P_atm)' },
          { en: 'Pascal’s principle and hydraulic multipliers', si: 'පැස්කල්ගේ මූලධර්මය සහ හයිඩ්‍රොලික් යන්ත්‍ර' },
          { en: 'Archimedes’ principle and upthrust derivation', si: 'ආකිමිඩීස් මූලධර්මය සහ උඩුකුරු තෙරපුම' },
          { en: 'Principle of flotation and hydrometers', si: 'පාවීමේ මූලධර්මය සහ ද්‍රවමාන' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 3: Oscillations and Waves (කම්පන සහ තරංග) - Syllabus Competency 3
  // =========================================================================
  {
    id: 'unit-3',
    slug: 'oscillations-and-waves',
    syllabusOrder: 3,
    competencyRange: 'Competency 3.1 – 3.7',
    title: {
      en: 'Oscillations and Waves',
      si: 'කම්පන සහ තරංග',
    },
    description: {
      en: 'Simple harmonic motion, mechanical waves, sound wave propagation, Doppler effect, and physical/geometrical optics.',
      si: 'සරල අනුවර්තී චලිතය, යාන්ත්‍රික තරංග, ධ්වනි තරංග සම්ප්‍රේෂණය, ඩොප්ලර් ආචරණය, සහ භෞතික හා ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව.',
    },
    lessons: [
      {
        id: 'lesson-3-1',
        slug: 'simple-harmonic-motion',
        unitSlug: 'oscillations-and-waves',
        unitOrder: 3,
        lessonOrder: 1,
        syllabusRef: 'Competency 3.1',
        title: {
          en: 'Simple Harmonic Motion (SHM)',
          si: 'සරල අනුවර්තී චලිතය (SHM)',
        },
        summary: {
          en: 'Kinematic equation d²x/dt² = -ω²x, displacement, velocity, acceleration, simple pendulum, helical springs, and energy in SHM.',
          si: 'චාලක සමීකරණය d²x/dt² = -ω²x, විස්ථාපනය, ප්‍රවේගය, ත්වරණය, සරල අවලම්බය, හෙලික්සීය දුනු සහ SHM හි ශක්තිය.',
        },
        learningObjectives: [
          {
            en: 'Define simple harmonic motion using the restoring acceleration condition a = -ω²x.',
            si: 'a = -ω²x ප්‍රත්‍යානයන ත්වරණ කොන්දේසිය ඇසුරින් සරල අනුවර්තී චලිතය අර්ථ දැක්වීම.',
          },
          {
            en: 'Calculate period of oscillation for a simple pendulum and spring-mass systems.',
            si: 'සරල අවලම්බයක් සහ දුනු-ස්කන්ධ පද්ධතිවල ආවර්ත කාලය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Definition and characteristic equation of SHM', si: 'SHM අර්ථ දැක්වීම සහ ලාක්ෂණික සමීකරණය' },
          { en: 'Relationships for displacement, velocity, and acceleration', si: 'විස්ථාපනය, ප්‍රවේගය සහ ත්වරණය අතර සම්බන්ධතා' },
          { en: 'Energy transformations in SHM', si: 'SHM හි ශක්ති පරිවර්තන' },
          { en: 'Simple pendulum and helical spring oscillation periods', si: 'සරල අවලම්බයේ සහ හෙලික්සීය දුනු පද්ධතියේ ආවර්ත කාල' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-3-2',
        slug: 'wave-motion-and-propagation',
        unitSlug: 'oscillations-and-waves',
        unitOrder: 3,
        lessonOrder: 2,
        syllabusRef: 'Competency 3.2',
        title: {
          en: 'Wave Motion & Superposition',
          si: 'තරංග චලිතය සහ සම්පාතනය',
        },
        summary: {
          en: 'Transverse and longitudinal waves, wave equation v = fλ, phase difference, principle of superposition, and standing waves on strings.',
          si: 'තීර්යක් සහ අන්වායාම තරංග, තරංග සමීකරණය v = fλ, කලා වෙනස, සම්පාතන මූලධර්මය සහ තන්තු මත ස්ථාවර තරංග.',
        },
        learningObjectives: [
          {
            en: 'Distinguish between transverse and longitudinal wave phenomena and apply v = fλ.',
            si: 'තීර්යක් සහ අන්වායාම තරංග සංසිද්ධි වෙන්කර හඳුනා ගැනීම සහ v = fλ යෙදීම.',
          },
          {
            en: 'Explain constructive and destructive superposition and node-antinode formation in standing waves.',
            si: 'නිර්මාණාත්මක හා විනාශකාරී සම්පාතනය සහ ස්ථාවර තරංගවල නිශ්පන්ද-ප්‍රස්පන්ද සෑදීම පැහැදිලි කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Progressive mechanical wave characteristics', si: 'ප්‍රගමන යාන්ත්‍රික තරංගවල ලක්ෂණ' },
          { en: 'Superposition principle of waves', si: 'තරංග සම්පාතන මූලධර්මය' },
          { en: 'Formation of stationary waves on stretched strings', si: 'ඇදි තන්තු මත ස්ථාවර තරංග නිර්මාණය වීම' },
          { en: 'Sonometer experiments and fundamental harmonics', si: 'සොනෝමීටර පරීක්ෂණ සහ මූලික උපරිතාන' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-3-3',
        slug: 'sound-waves-and-resonance',
        unitSlug: 'oscillations-and-waves',
        unitOrder: 3,
        lessonOrder: 3,
        syllabusRef: 'Competency 3.3',
        title: {
          en: 'Sound Waves, Resonance & Doppler Effect',
          si: 'ධ්වනි තරංග, අනුනාදය සහ ඩොප්ලර් ආචරණය',
        },
        summary: {
          en: 'Speed of sound in gases (Laplace correction), resonance tube experiment, end corrections, beats, and the Doppler effect for moving source and observer.',
          si: 'වායු තුළ ධ්වනි ප්‍රවේගය (ලාප්ලාස් සංශෝධනය), අනුනාද නළ පරීක්ෂණය, අන්ත ශෝධනය, ස්පන්ද, සහ ඩොප්ලර් ආචරණය.',
        },
        learningObjectives: [
          {
            en: 'Determine speed of sound in air using resonance tube with end correction.',
            si: 'අන්ත ශෝධනය සහිත අනුනාද නළය මගින් වාතයේ ධ්වනි ප්‍රවේගය නිර්ණය කිරීම.',
          },
          {
            en: 'Calculate observed frequency shifts using the Doppler effect formula.',
            si: 'ඩොප්ලර් ආචරණ සූත්‍රය භාවිතයෙන් නිරීක්ෂිත සංඛ්‍යාත වෙනස්වීම් ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Propagation speed of sound in gases', si: 'වායු තුළ ධ්වනි සම්ප්‍රේෂණ ප්‍රවේගය' },
          { en: 'Organ pipes: closed and open boundary resonance', si: 'නළ තුළ අනුනාදය: සංවෘත සහ විවෘත නළ' },
          { en: 'Beats phenomena and frequency tuning', si: 'ස්පන්ද සංසිද්ධිය සහ සංඛ්‍යාත සුසර කිරීම' },
          { en: 'Doppler effect for relative motion of source and observer', si: 'ප්‍රභවය සහ නිරීක්ෂකයා අතර සාපේක්ෂ චලිතයේදී ඩොප්ලර් ආචරණය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-3-4',
        slug: 'geometrical-optics-reflection-refraction',
        unitSlug: 'oscillations-and-waves',
        unitOrder: 3,
        lessonOrder: 4,
        syllabusRef: 'Competency 3.4',
        title: {
          en: 'Geometrical Optics: Reflection and Refraction',
          si: 'ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව: පරාවර්තනය සහ වර්තනය',
        },
        summary: {
          en: 'Snell’s law, refractive index, total internal reflection, critical angle, optical fibers, and refraction through prisms.',
          si: 'ස්නෙල්ගේ නියමය, වර්තනාංකය, පූර්ණ අභ්‍යන්තර පරාවර්තනය, අවධි කෝණය, ප්‍රකාශ තන්තු, සහ ප්‍රිස්ම හරහා වර්තනය.',
        },
        learningObjectives: [
          {
            en: 'Apply Snell’s law and calculate critical angle for total internal reflection.',
            si: 'ස්නෙල්ගේ නියමය යෙදීම සහ පූර්ණ අභ්‍යන්තර පරාවර්තනය සඳහා අවධි කෝණය ගණනය කිරීම.',
          },
          {
            en: 'Trace ray paths through prisms and relate minimum angle of deviation to refractive index.',
            si: 'ප්‍රිස්ම හරහා කිරණ මාර්ග ඇඳීම සහ අවම අපගමන කෝණය වර්තනාංකය සමඟ සම්බන්ධ කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Laws of refraction and absolute/relative refractive index', si: 'වර්තන නීති සහ නිරපේක්ෂ/සාපේක්ෂ වර්තනාංකය' },
          { en: 'Total internal reflection and critical angle condition', si: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය සහ අවධි කෝණ කොන්දේසිය' },
          { en: 'Refraction through triangular prisms and minimum deviation', si: 'ත්‍රිකෝණාකාර ප්‍රිස්ම හරහා වර්තනය සහ අවම අපගමනය' },
          { en: 'Real and apparent depth calculations', si: 'සත්‍ය සහ මවාපෙනෙන ගැඹුර ගණනය කිරීම්' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-3-5',
        slug: 'thin-lenses-and-optical-instruments',
        unitSlug: 'oscillations-and-waves',
        unitOrder: 3,
        lessonOrder: 5,
        syllabusRef: 'Competency 3.5',
        title: {
          en: 'Thin Lenses and Optical Instruments',
          si: 'තුනී කාච සහ ප්‍රකාශ උපකරණ',
        },
        summary: {
          en: 'Thin lens formula 1/v - 1/u = 1/f (Cartesian sign convention), ray tracing, astronomical telescope, and compound microscope.',
          si: 'තුනී කාච සූත්‍රය 1/v - 1/u = 1/f (කාටීසීය ලකුණු සම්මුතිය), කිරණ සටහන්, තාරකා විද්‍යා දුරේක්ෂය සහ සංයුක්ත අන්වීක්ෂය.',
        },
        learningObjectives: [
          {
            en: 'Solve image location and magnification using the thin lens formula with Cartesian sign conventions.',
            si: 'කාටීසීය ලකුණු සම්මුතිය සහිතව තුනී කාච සූත්‍රය මගින් ප්‍රතිබිම්භ පිහිටුම සහ විශාලනය සෙවීම.',
          },
          {
            en: 'Construct ray diagrams and calculate angular magnification for telescopes and microscopes.',
            si: 'දුරේක්ෂ සහ අන්වීක්ෂ සඳහා කිරණ සටහන් ඇඳීම සහ කෝණික විශාලනය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Convex and concave thin lens ray diagrams', si: 'උත්තල සහ අවතල තුනී කාච කිරණ සටහන්' },
          { en: 'Thin lens formula and linear magnification', si: 'තුනී කාච සූත්‍රය සහ රේඛීය විශාලනය' },
          { en: 'Compound microscope ray geometry and magnifying power', si: 'සංයුක්ත අන්වීක්ෂයේ කිරණ ජ්‍යාමිතිය සහ විශාලන බලය' },
          { en: 'Astronomical telescope in normal adjustment', si: 'සාමාන්‍ය සීරුමාරුවේ පවතින තාරකා විද්‍යා දුරේක්ෂය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 4: Thermal Physics (තාප භෞතික විද්‍යාව) - Syllabus Competency 4
  // =========================================================================
  {
    id: 'unit-4',
    slug: 'thermal-physics',
    syllabusOrder: 4,
    competencyRange: 'Competency 4.1 – 4.5',
    title: {
      en: 'Thermal Physics',
      si: 'තාප භෞතික විද්‍යාව',
    },
    description: {
      en: 'Thermometry, thermal expansion, calorimetry, ideal gas laws, kinetic theory of gases, thermodynamics, and heat transfer mechanisms.',
      si: 'උෂ්ණත්වමිතිය, තාප ප්‍රසාරණය, කැලරිමිතිය, පරිපූර්ණ වායු නියම, වායුවල චාලක වාදය, තාපගති විද්‍යාව සහ තාප සංක්‍රාමණ ක්‍රම.',
    },
    lessons: [
      {
        id: 'lesson-4-1',
        slug: 'thermometry-and-thermal-expansion',
        unitSlug: 'thermal-physics',
        unitOrder: 4,
        lessonOrder: 1,
        syllabusRef: 'Competency 4.1',
        title: {
          en: 'Thermometry and Thermal Expansion',
          si: 'උෂ්ණත්වමිතිය සහ තාප ප්‍රසාරණය',
        },
        summary: {
          en: 'Thermometric properties, Celsius and Kelvin temperature scales, linear, superficial, and cubical thermal expansion of solids and liquids.',
          si: 'උෂ්ණත්වමිතික ගුණ, සෙල්සියස් සහ කෙල්වින් උෂ්ණත්ව පරිමාණ, ඝන සහ ද්‍රවවල රේඛීය, වර්ගඵල සහ ඝනඵල ප්‍රසාරණය.',
        },
        learningObjectives: [
          {
            en: 'Construct temperature scales using linear thermometric physical properties.',
            si: 'රේඛීය උෂ්ණත්වමිතික භෞතික ගුණ ඇසුරින් උෂ්ණත්ව පරිමාණ ගොඩනැගීම.',
          },
          {
            en: 'Calculate linear, areal, and volumetric expansion of solids and liquids.',
            si: 'ඝන සහ ද්‍රවවල රේඛීය, වර්ගඵල සහ ඝනඵල ප්‍රසාරණය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Thermometric properties and scale calibration', si: 'උෂ්ණත්වමිතික ගුණ සහ පරිමාණ ක්‍රමාංකනය' },
          { en: 'Absolute thermodynamic temperature scale', si: 'නිරපේක්ෂ තාපගතික උෂ්ණත්ව පරිමාණය' },
          { en: 'Linear, areal, and volumetric expansion coefficients', si: 'රේඛීය, වර්ගඵල සහ ඝනඵල ප්‍රසාරණ සංගුණක' },
          { en: 'Apparent and real expansion of liquids', si: 'ද්‍රවවල මවාපෙනෙන සහ සත්‍ය ප්‍රසාරණය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-4-2',
        slug: 'calorimetry-and-phase-changes',
        unitSlug: 'thermal-physics',
        unitOrder: 4,
        lessonOrder: 2,
        syllabusRef: 'Competency 4.2',
        title: {
          en: 'Calorimetry and Latent Heat',
          si: 'කැලරිමිතිය සහ ගුප්ත තාපය',
        },
        summary: {
          en: 'Specific heat capacity (Q = mcΔθ), latent heat of fusion and vaporization, method of mixtures, and cooling curve corrections.',
          si: 'විශිෂ්ට තාප ධාරිතාව (Q = mcΔθ), විලයනයේ හා වාෂ්පීභවනයේ විශිෂ්ට ගුප්ත තාපය, මිශ්‍රණ ක්‍රමය සහ සිසිලන වක්‍ර ශෝධන.',
        },
        learningObjectives: [
          {
            en: 'Apply principle of conservation of heat energy to mixture calorimetry problems.',
            si: 'මිශ්‍රණ කැලරිමිතික ගැටලු සඳහා තාප ශක්ති සංස්ථිති මූලධර්මය යෙදීම.',
          },
          {
            en: 'Determine specific latent heat of fusion of ice and vaporization of steam experimentally.',
            si: 'අයිස්වල විලයන ගුප්ත තාපය සහ වාෂ්පීභවන ගුප්ත තාපය ප්‍රායෝගිකව නිර්ණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Heat capacity and specific heat capacity', si: 'තාප ධාරිතාව සහ විශිෂ්ට තාප ධාරිතාව' },
          { en: 'Specific latent heat of phase transformation', si: 'කලාප විපර්යාසයේ විශිෂ්ට ගුප්ත තාපය' },
          { en: 'Method of mixtures and radiation corrections', si: 'මිශ්‍රණ ක්‍රමය සහ විකිරණ ශෝධන' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-4-3',
        slug: 'ideal-gas-laws-and-kinetic-theory',
        unitSlug: 'thermal-physics',
        unitOrder: 4,
        lessonOrder: 3,
        syllabusRef: 'Competency 4.3',
        title: {
          en: 'Gas Laws and Kinetic Theory',
          si: 'වායු නියම සහ චාලක වාදය',
        },
        summary: {
          en: 'Boyle’s, Charles’s, and pressure laws, ideal gas equation PV = nRT, microscopic kinetic model derivation P = ⅓ρc_rms², and molecular kinetic energy.',
          si: 'බොයිල්, චාල්ස් සහ පීඩන නියම, පරිපූර්ණ වායු සමීකරණය PV = nRT, අන්වීක්ෂීය චාලක ආකෘතිය P = ⅓ρc_rms², සහ අණුක චාලක ශක්තිය.',
        },
        learningObjectives: [
          {
            en: 'Apply ideal gas equation PV = nRT to state transformations of gases.',
            si: 'වායුවල අවස්ථා විපර්යාස සඳහා පරිපූර්ණ වායු සමීකරණය PV = nRT යෙදීම.',
          },
          {
            en: 'Derive kinetic theory pressure formula P = ⅓ρc_rms² and relate temperature to mean kinetic energy.',
            si: 'වායුවල චාලක වාද පීඩන සූත්‍රය P = ⅓ρc_rms² ව්‍යුත්පන්න කර උෂ්ණත්වය මධ්‍යන්‍ය චාලක ශක්තියට සම්බන්ධ කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Experimental gas laws (Boyle, Charles, Pressure)', si: 'ප්‍රායෝගික වායු නියම (බොයිල්, චාල්ස්, පීඩන)' },
          { en: 'Equation of state of an ideal gas (PV = nRT)', si: 'පරිපූර්ණ වායුවක අවස්ථා සමීකරණය (PV = nRT)' },
          { en: 'Assumptions and pressure derivation of kinetic theory', si: 'චාලක වාදයේ උපකල්පන සහ පීඩන සමීකරණය ව්‍යුත්පන්න කිරීම' },
          { en: 'Root mean square speed and absolute temperature', si: 'මධ්‍යන්‍ය වර්ගමූල ප්‍රවේගය සහ නිරපේක්ෂ උෂ්ණත්වය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-4-4',
        slug: 'thermodynamics-first-law',
        unitSlug: 'thermal-physics',
        unitOrder: 4,
        lessonOrder: 4,
        syllabusRef: 'Competency 4.4',
        title: {
          en: 'First Law of Thermodynamics',
          si: 'තාපගති විද්‍යාවේ පළමු වන නියමය',
        },
        summary: {
          en: 'Work done by an expanding gas (W = ∫ P dV), internal energy, statement of the First Law (ΔQ = ΔU + ΔW), isothermal, adiabatic, isobaric, and isochoric processes.',
          si: 'ප්‍රසාරණය වන වායුවක් මගින් කෙරෙන කාර්යය (W = ∫ P dV), අභ්‍යන්තර ශක්තිය, පළමු නියමය (ΔQ = ΔU + ΔW), සමඋෂ්ණ, රෝධෝෂ්ණ, සමපීඩන සහ සමපරිමා ක්‍රියාවලි.',
        },
        learningObjectives: [
          {
            en: 'Apply the First Law of Thermodynamics ΔQ = ΔU + ΔW with correct sign conventions.',
            si: 'නිවැරදි සලකුණු සම්මුති සහිතව තාපගති විද්‍යාවේ පළමු නියමය ΔQ = ΔU + ΔW යෙදීම.',
          },
          {
            en: 'Analyze PV indicator diagrams to find work done and internal energy changes.',
            si: 'කාර්යය සහ අභ්‍යන්තර ශක්ති වෙනස්වීම් සෙවීමට PV දර්ශක සටහන් විශ්ලේෂණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Concept of internal energy and thermodynamic system', si: 'අභ්‍යන්තර ශක්තිය සහ තාපගතික පද්ධති' },
          { en: 'Work done during gas expansion on PV diagram', si: 'PV ප්‍රස්තාරයේ වායු ප්‍රසාරණයේදී සිදුවන කාර්යය' },
          { en: 'First Law of Thermodynamics formulation', si: 'තාපගති විද්‍යාවේ පළමු නියමය සූත්‍රගත කිරීම' },
          { en: 'Isothermal, adiabatic, isobaric, and isochoric cycles', si: 'සමඋෂ්ණ, රෝධෝෂ්ණ, සමපීඩන සහ සමපරිමා චක්‍ර' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
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
          en: 'Thermal conductivity (dQ/dt = -kA dT/dx), Searle’s bar method, blackbody radiation, Stefan’s law, and Prevost’s theory of heat exchange.',
          si: 'තාප සන්නායකතාව (dQ/dt = -kA dT/dx), සර්ල්ගේ දණ්ඩ ක්‍රමය, කෘෂ්ණ වස්තු විකිරණය, ස්ටෙෆාන්ගේ නියමය සහ ප්‍රෙවෝස්ට්ගේ තාප හුවමාරු වාදය.',
        },
        learningObjectives: [
          {
            en: 'Calculate rate of heat flow through composite thermal conductors in steady state.',
            si: 'ස්ථාවර තත්ත්වයේදී සංයුක්ත තාප සන්නායක හරහා තාප ගලායාමේ සීඝ්‍රතාව ගණනය කිරීම.',
          },
          {
            en: 'Apply Stefan-Boltzmann radiation law to emissive blackbody surfaces.',
            si: 'කෘෂ්ණ වස්තු විකිරණ පෘෂ්ඨ සඳහා ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Mechanism of thermal conduction and conductivity coefficient', si: 'තාප සන්නයන යාන්ත්‍රණය සහ සන්නායකතා සංගුණකය' },
          { en: 'Temperature gradient along insulated bars in steady state', si: 'ස්ථාවර තත්ත්වයේ පරිවරණය කළ දඬු ඔස්සේ උෂ්ණත්ව අනුක්‍රමණය' },
          { en: 'Convection currents in fluids', si: 'ද්‍රව සහ වායුවල සංවහන ධාරා' },
          { en: 'Stefan’s law of thermal radiation (E = σAT⁴)', si: 'තාප විකිරණය පිළිබඳ ස්ටෙෆාන්ගේ නියමය (E = σAT⁴)' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 5: Gravitational Field (ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර) - Syllabus Competency 5
  // =========================================================================
  {
    id: 'unit-5',
    slug: 'gravitational-field',
    syllabusOrder: 5,
    competencyRange: 'Competency 5.1 – 5.3',
    title: {
      en: 'Gravitational Field',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර',
    },
    description: {
      en: 'Newton’s universal law of gravitation, gravitational field strength, gravitational potential, orbital satellite motion, and escape velocity.',
      si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය, ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව, විභවය, කක්ෂීය චන්ද්‍රිකා චලිතය සහ මෝක්ෂ ප්‍රවේගය.',
    },
    lessons: [
      {
        id: 'lesson-5-1',
        slug: 'universal-gravitation-and-field-intensity',
        unitSlug: 'gravitational-field',
        unitOrder: 5,
        lessonOrder: 1,
        syllabusRef: 'Competency 5.1',
        title: {
          en: 'Universal Gravitation & Field Strength',
          si: 'සර්වත්‍ර ගුරුත්වාකර්ෂණය සහ ක්ෂේත්‍ර තීව්‍රතාව',
        },
        summary: {
          en: 'Inverse square law (F = GMm/r²), gravitational field intensity (g = GM/r²), and variation of acceleration due to gravity with altitude and depth.',
          si: 'ප්‍රතිලෝම වර්ග නියමය (F = GMm/r²), ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව (g = GM/r²), සහ උස හා ගැඹුර සමඟ ගුරුත්වජ ත්වරණයේ විචලනය.',
        },
        learningObjectives: [
          {
            en: 'Calculate gravitational attraction force between point masses using Newton’s law.',
            si: 'නිව්ටන්ගේ නියමය භාවිතයෙන් ලක්ෂ්‍යමය ස්කන්ධ අතර ගුරුත්වාකර්ෂණ ආකර්ෂණ බලය ගණනය කිරීම.',
          },
          {
            en: 'Determine gravitational field intensity and its variation above and below Earth’s surface.',
            si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව සහ පෘථිවි පෘෂ්ඨයෙන් ඉහළට හා පහළට එහි විචලනය නිර්ණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Newton’s universal law of gravitation', si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය' },
          { en: 'Gravitational field strength (g = F/m)', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව (g = F/m)' },
          { en: 'Variation of g with altitude above Earth', si: 'පෘථිවියට ඉහළින් උස සමඟ g හි විචලනය' },
          { en: 'Variation of g with depth below Earth surface', si: 'පෘථිවි පෘෂ්ඨයට යටින් ගැඹුර සමඟ g හි විචලනය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-5-2',
        slug: 'gravitational-potential-and-satellites',
        unitSlug: 'gravitational-field',
        unitOrder: 5,
        lessonOrder: 2,
        syllabusRef: 'Competency 5.2',
        title: {
          en: 'Gravitational Potential, Satellites & Escape Velocity',
          si: 'ගුරුත්වාකර්ෂණ විභවය, චන්ද්‍රිකා සහ මෝක්ෂ ප්‍රවේගය',
        },
        summary: {
          en: 'Gravitational potential (V = -GM/r), potential energy, escape velocity (v_e = √(2gR)), orbital speed (v = √(GM/r)), and geostationary orbits.',
          si: 'ගුරුත්වාකර්ෂණ විභවය (V = -GM/r), විභව ශක්තිය, මෝක්ෂ ප්‍රවේගය (v_e = √(2gR)), කක්ෂීය ප්‍රවේගය (v = √(GM/r)) සහ භූස්ථාවර කක්ෂ.',
        },
        learningObjectives: [
          {
            en: 'Calculate gravitational potential and work done in moving masses in a radial gravitational field.',
            si: 'අරීය ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක ස්කන්ධයක් ගෙනයාමේදී කෙරෙන කාර්යය සහ ගුරුත්වාකර්ෂණ විභවය ගණනය කිරීම.',
          },
          {
            en: 'Derive escape velocity and orbital speeds for geostationary satellites.',
            si: 'මෝක්ෂ ප්‍රවේගය සහ භූස්ථාවර චන්ද්‍රිකාවල කක්ෂීය ප්‍රවේගය ව්‍යුත්පන්න කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Gravitational potential at a point in space (V = -GM/r)', si: 'අවකාශයේ ලක්ෂ්‍යයක ගුරුත්වාකර්ෂණ විභවය (V = -GM/r)' },
          { en: 'Gravitational potential energy of two-mass system', si: 'ස්කන්ධ දෙකක පද්ධතියක ගුරුත්වාකර්ෂණ විභව ශක්තිය' },
          { en: 'Escape velocity from planetary surface', si: 'ග්‍රහලෝක පෘෂ්ඨයකින් මෝක්ෂ ප්‍රවේගය' },
          { en: 'Orbital velocity, period, and geostationary conditions', si: 'කක්ෂීය ප්‍රවේගය, ආවර්ත කාලය සහ භූස්ථාවර කක්ෂ කොන්දේසි' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
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
    lessons: [
      {
        id: 'lesson-6-1',
        slug: 'coulombs-law-and-electric-field',
        unitSlug: 'electrostatic-field',
        unitOrder: 6,
        lessonOrder: 1,
        syllabusRef: 'Competency 6.1',
        title: {
          en: 'Coulomb’s Law and Electric Field Strength',
          si: 'කූලෝම් නියමය සහ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව',
        },
        summary: {
          en: 'Electrostatic force between point charges, permittivity of free space, electric field intensity E = F/q, field line patterns, and point charge fields.',
          si: 'ලක්ෂ්‍යමය ආරෝපණ අතර ස්ථිති විද්‍යුත් බලය, නිදහස් අවකාශයේ පාරගම්‍යතාව, විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E = F/q, සහ ක්ෂේත්‍ර රේඛා රටා.',
        },
        learningObjectives: [
          {
            en: 'Calculate electrostatic attraction and repulsion using Coulomb’s inverse square law.',
            si: 'කූලෝම්ගේ ප්‍රතිලෝම වර්ග නියමය භාවිතයෙන් ස්ථිති විද්‍යුත් ආකර්ෂණ හා විකර්ෂණ බල ගණනය කිරීම.',
          },
          {
            en: 'Determine resultant electric field intensity for multiple point charges.',
            si: 'ලක්ෂ්‍ය ආරෝපණ කිහිපයක් නිසා ඇතිවන සම්ප්‍රයුක්ත විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව නිර්ණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Coulomb’s law in vacuum and dielectric media', si: 'රික්තකයේ සහ පාරවිද්‍යුත් මාධ්‍යවල කූලෝම් නියමය' },
          { en: 'Electric field strength definition (E = F/q)', si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව අර්ථ දැක්වීම (E = F/q)' },
          { en: 'Electric flux lines and field topology', si: 'විද්‍යුත් ස්‍රාව රේඛා සහ ක්ෂේත්‍ර රටා' },
          { en: 'Superposition of electric fields', si: 'විද්‍යුත් ක්ෂේත්‍රවල සම්පාතනය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-6-2',
        slug: 'electric-potential-and-equipotential-surfaces',
        unitSlug: 'electrostatic-field',
        unitOrder: 6,
        lessonOrder: 2,
        syllabusRef: 'Competency 6.2',
        title: {
          en: 'Electric Potential & Equipotential Surfaces',
          si: 'විද්‍යුත් විභවය සහ සමවිභව පෘෂ්ඨ',
        },
        summary: {
          en: 'Electric potential V = W/q, potential due to point charges V = Q/(4πε₀r), relationship E = -dV/dr, and equipotential properties.',
          si: 'විද්‍යුත් විභවය V = W/q, ලක්ෂ්‍ය ආරෝපණයක විභවය V = Q/(4πε₀r), E = -dV/dr සම්බන්ධතාව සහ සමවිභව පෘෂ්ඨවල ගුණ.',
        },
        learningObjectives: [
          {
            en: 'Calculate electric potential and work done moving charges between points in an electric field.',
            si: 'විද්‍යුත් ක්ෂේත්‍රයක ලක්ෂ්‍ය අතර ආරෝපණ චලනය කිරීමේදී කෙරෙන කාර්යය සහ විද්‍යුත් විභවය ගණනය කිරීම.',
          },
          {
            en: 'Map equipotential surfaces to electric field lines perpendicularly.',
            si: 'සමවිභව පෘෂ්ඨ විද්‍යුත් ක්ෂේත්‍ර රේඛාවලට ලම්බකව සිතියම්ගත කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Work done and electric potential definition', si: 'සිදුවන කාර්යය සහ විද්‍යුත් විභවය අර්ථ දැක්වීම' },
          { en: 'Potential due to a point charge and charge distributions', si: 'ලක්ෂ්‍ය ආරෝපණ සහ ආරෝපණ ව්‍යාප්ති නිසා ඇතිවන විභවය' },
          { en: 'Potential gradient and field strength relation (E = -dV/dr)', si: 'විභව අනුක්‍රමණය සහ ක්ෂේත්‍ර තීව්‍රතාව අතර සම්බන්ධය (E = -dV/dr)' },
          { en: 'Properties of equipotential lines and surfaces', si: 'සමවිභව රේඛා සහ පෘෂ්ඨවල ලක්ෂණ' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-6-3',
        slug: 'capacitance-and-dielectrics',
        unitSlug: 'electrostatic-field',
        unitOrder: 6,
        lessonOrder: 3,
        syllabusRef: 'Competency 6.3',
        title: {
          en: 'Capacitors and Dielectrics',
          si: 'ධාරිත්‍රක සහ පාරවිද්‍යුත් ද්‍රව්‍ය',
        },
        summary: {
          en: 'Capacitance C = Q/V, parallel plate capacitor C = εA/d, series and parallel combinations, energy stored in capacitors U = ½CV², and dielectric effects.',
          si: 'ධාරිතාව C = Q/V, සමාන්තර තහඩු ධාරිත්‍රකය C = εA/d, ශ්‍රේණිගත හා සමාන්තරගත සංයෝජන, ධාරිත්‍රකයක ගබඩා වන ශක්තිය U = ½CV², සහ පාරවිද්‍යුත් ආචරණ.',
        },
        learningObjectives: [
          {
            en: 'Derive parallel plate capacitance and determine equivalent capacitance in circuit combinations.',
            si: 'සමාන්තර තහඩු ධාරිතාව ව්‍යුත්පන්න කිරීම සහ පරිපථ සංයෝජනවල සමක ධාරිතාව සෙවීම.',
          },
          {
            en: 'Calculate electrostatic energy stored in charged capacitor networks.',
            si: 'ආරෝපිත ධාරිත්‍රක ජාල තුළ ගබඩා වී ඇති ස්ථිති විද්‍යුත් ශක්තිය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Capacitance concept and the Farad unit', si: 'ධාරිතා සංකල්පය සහ ෆැරඩ් ඒකකය' },
          { en: 'Parallel plate capacitor formula derivation', si: 'සමාන්තර තහඩු ධාරිත්‍රක සූත්‍රය ව්‍යුත්පන්න කිරීම' },
          { en: 'Capacitors in series and parallel networks', si: 'ශ්‍රේණිගත සහ සමාන්තරගත ධාරිත්‍රක ජාල' },
          { en: 'Energy stored in electrostatic fields (½CV²)', si: 'ස්ථිති විද්‍යුත් ක්ෂේත්‍රයේ ගබඩා වන ශක්තිය (½CV²)' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 7: Magnetic Field (චුම්බක ක්ෂේත්‍ර) - Syllabus Competency 7
  // =========================================================================
  {
    id: 'unit-7',
    slug: 'magnetic-field',
    syllabusOrder: 7,
    competencyRange: 'Competency 7.1 – 7.4',
    title: {
      en: 'Magnetic Field',
      si: 'චුම්බක ක්ෂේත්‍ර',
    },
    description: {
      en: 'Magnetic flux density, Biot-Savart and Ampere’s laws, Lorentz magnetic force, moving coils, electromagnetic induction, Faraday and Lenz laws, and transformers.',
      si: 'චුම්බක ස්‍රාව ඝනත්වය, බයෝ-සවාර් සහ ඇම්පියර් නියම, ලොරෙන්ට්ස් චුම්බක බලය, විද්‍යුත් චුම්බක ප්‍රේරණය, ෆැරඩේ සහ ලෙන්ස් නියම, සහ පරිණාමක.',
    },
    lessons: [
      {
        id: 'lesson-7-1',
        slug: 'magnetic-force-on-currents-and-charges',
        unitSlug: 'magnetic-field',
        unitOrder: 7,
        lessonOrder: 1,
        syllabusRef: 'Competency 7.1',
        title: {
          en: 'Magnetic Force on Conductors & Charges',
          si: 'ධාරා සහ ආරෝපණ මත චුම්බක බලය',
        },
        summary: {
          en: 'Magnetic flux density B, Lorentz force on a moving charge (F = Bqv sin θ), magnetic force on current-carrying conductors (F = BIl sin θ), and Fleming’s left-hand rule.',
          si: 'චුම්බක ස්‍රාව ඝනත්වය B, චලනය වන ආරෝපණයක් මත බලය (F = Bqv sin θ), ධාරාවක් ගලායන සන්නායකයක් මත බලය (F = BIl sin θ) සහ ෆ්ලෙමින්ගේ වමත් නීතිය.',
        },
        learningObjectives: [
          {
            en: 'Determine direction and magnitude of force on moving charges in magnetic fields.',
            si: 'චුම්බක ක්ෂේත්‍රයක චලනය වන ආරෝපණයක් මත ඇතිවන බලයේ විශාලත්වය සහ දිශාව නිර්ණය කිරීම.',
          },
          {
            en: 'Apply F = BIl sin θ to calculate electromagnetic forces on current-carrying wires.',
            si: 'ධාරාවක් ගෙන යන සන්නායක මත ඇතිවන චුම්බක බලය ගණනය කිරීමට F = BIl sin θ යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Concept of magnetic field and magnetic flux density (B)', si: 'චුම්බක ක්ෂේත්‍ර සංකල්පය සහ චුම්බක ස්‍රාව ඝනත්වය (B)' },
          { en: 'Lorentz force on charged particles (F = qv × B)', si: 'ආරෝපිත අංශු මත ලොරෙන්ට්ස් බලය (F = qv × B)' },
          { en: 'Force on current-carrying conductors and Fleming’s left-hand rule', si: 'ධාරාවක් ගෙන යන සන්නායක මත බලය සහ ෆ්ලෙමින්ගේ වමත් නීතිය' },
          { en: 'Torque on a rectangular current loop in a uniform field', si: 'ඒකාකාර ක්ෂේත්‍රයක සෘජුකෝණාස්‍රාකාර ධාරා පුඩුවක් මත ව්‍යවර්ථය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-7-2',
        slug: 'magnetic-fields-of-currents',
        unitSlug: 'magnetic-field',
        unitOrder: 7,
        lessonOrder: 2,
        syllabusRef: 'Competency 7.2',
        title: {
          en: 'Magnetic Fields Produced by Currents',
          si: 'ධාරාවන් මගින් ජනනය වන චුම්බක ක්ෂේත්‍ර',
        },
        summary: {
          en: 'Biot-Savart law, Ampere’s circuital law, magnetic field around straight long wires, circular coils, solenoids, and definition of the Ampere.',
          si: 'බයෝ-සවාර් නියමය, ඇම්පියර්ගේ පරිපථ නියමය, දිගු සෘජු සන්නායක, වෘත්තාකාර දඟර, සොලෙනොයිඩ වටා චුම්බක ක්ෂේත්‍රය සහ ඇම්පියරය අර්ථ දැක්වීම.',
        },
        learningObjectives: [
          {
            en: 'Calculate magnetic flux density produced by long straight conductors, circular coils, and solenoids.',
            si: 'දිගු සෘජු සන්නායක, වෘත්තාකාර දඟර සහ සොලෙනොයිඩ මගින් ඇතිවන චුම්බක ස්‍රාව ඝනත්වය ගණනය කිරීම.',
          },
          {
            en: 'State the magnetic definition of the SI base unit Ampere based on force between parallel conductors.',
            si: 'සමාන්තර සන්නායක අතර බලය මත පදනම්ව SI මූලික ඒකකයක් වන ඇම්පියරය අර්ථ දැක්වීම.',
          },
        ],
        topicOutline: [
          { en: 'Right-hand grip rule for conductors', si: 'සන්නායක සඳහා දකුණත් ග්‍රහණ නීතිය' },
          { en: 'Magnetic field of a straight current-carrying wire (B = μ₀I / 2πr)', si: 'දිගු සෘජු සන්නායකයක චුම්බක ක්ෂේත්‍රය (B = μ₀I / 2πr)' },
          { en: 'Magnetic field at center of a circular coil and long solenoid', si: 'වෘත්තාකාර දඟරයක කේන්ද්‍රයේ සහ සොලෙනොයිඩයක චුම්බක ක්ෂේත්‍රය' },
          { en: 'Force between two parallel current-carrying conductors', si: 'සමාන්තර ධාරා සන්නායක දෙකක් අතර බලය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-7-3',
        slug: 'electromagnetic-induction',
        unitSlug: 'magnetic-field',
        unitOrder: 7,
        lessonOrder: 3,
        syllabusRef: 'Competency 7.3',
        title: {
          en: 'Electromagnetic Induction & Transformers',
          si: 'විද්‍යුත් චුම්බක ප්‍රේරණය සහ පරිණාමක',
        },
        summary: {
          en: 'Magnetic flux Φ = B·A, Faraday’s law of electromagnetic induction (ε = -dΦ/dt), Lenz’s law, motional EMF (ε = Blv), self and mutual induction, and AC transformers.',
          si: 'චුම්බක ස්‍රාවය Φ = B·A, ෆැරඩේගේ විද්‍යුත් චුම්බක ප්‍රේරණ නියමය (ε = -dΦ/dt), ලෙන්ස්ගේ නියමය, චාලක වි.ගා.බ. (ε = Blv), ස්වයං හා අන්‍යෝන්‍ය ප්‍රේරණය සහ AC පරිණාමක.',
        },
        learningObjectives: [
          {
            en: 'Apply Faraday’s and Lenz’s laws to calculate induced electromotive force.',
            si: 'ප්‍රේරිත විද්‍යුත් ගාමක බලය ගණනය කිරීමට ෆැරඩේ සහ ලෙන්ස් නියම යෙදීම.',
          },
          {
            en: 'Analyze transformer voltage, current, and power ratios with efficiency consideration.',
            si: 'කාර්යක්ෂමතාව සැලකිල්ලට ගනිමින් පරිණාමකවල වෝල්ටීයතා, ධාරා සහ ක්ෂමතා අනුපාත විශ්ලේෂණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Magnetic flux linkage concept', si: 'චුම්බක ස්‍රාව බන්ධනය' },
          { en: 'Faraday’s and Lenz’s laws of induction', si: 'විද්‍යුත් චුම්බක ප්‍රේරණය පිළිබඳ ෆැරඩේ සහ ලෙන්ස් නියම' },
          { en: 'Motional electromotive force in moving conductors', si: 'චලනය වන සන්නායකවල චාලක විද්‍යුත් ගාමක බලය' },
          { en: 'Ideal and real transformer equations (V_p/V_s = N_p/N_s)', si: 'පරිපූර්ණ සහ ප්‍රායෝගික පරිණාමක සමීකරණ' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 8: Current Electricity (ධාරා විද්‍යුතය) - Syllabus Competency 8
  // =========================================================================
  {
    id: 'unit-8',
    slug: 'current-electricity',
    syllabusOrder: 8,
    competencyRange: 'Competency 8.1 – 8.5',
    title: {
      en: 'Current Electricity',
      si: 'ධාරා විද්‍යුතය',
    },
    description: {
      en: 'Electric current, drift velocity, Ohm’s law, resistivity, temperature coefficient of resistance, Kirchhoff’s circuit rules, potentiometer, and Wheatstone bridge.',
      si: 'විද්‍යුත් ධාරාව, ප්ලාවිත ප්‍රවේගය, ඕම් නියමය, ප්‍රතිරෝධකතාව, ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය, කර්චොෆ් නියම, විභවමානය සහ වීට්ස්ටන් සේතුව.',
    },
    lessons: [
      {
        id: 'lesson-8-1',
        slug: 'conduction-and-ohms-law',
        unitSlug: 'current-electricity',
        unitOrder: 8,
        lessonOrder: 1,
        syllabusRef: 'Competency 8.1',
        title: {
          en: 'Electrical Conduction and Ohm’s Law',
          si: 'විද්‍යුත් සන්නයනය සහ ඕම් නියමය',
        },
        summary: {
          en: 'Free electron model of conduction, drift velocity (I = nAvq), electric current, Ohm’s law (V = IR), resistivity (R = ρl/A), and temperature dependence of resistance.',
          si: 'නිදහස් ඉලෙක්ට්‍රෝන සන්නයන ආකෘතිය, ප්ලාවිත ප්‍රවේගය (I = nAvq), විද්‍යුත් ධාරාව, ඕම් නියමය (V = IR), ප්‍රතිරෝධකතාව (R = ρl/A) සහ ප්‍රතිරෝධයේ උෂ්ණත්ව පරායත්තතාව.',
        },
        learningObjectives: [
          {
            en: 'Relate macroscopic current to microscopic electron drift velocity.',
            si: 'සාර්ව විද්‍යුත් ධාරාව අන්වීක්ෂීය ඉලෙක්ට්‍රෝන ප්ලාවිත ප්‍රවේගයට සම්බන්ධ කිරීම.',
          },
          {
            en: 'Apply Ohm’s law and resistivity formula R = ρl/A to wire conductors.',
            si: 'සන්නායක කම්බි සඳහා ඕම් නියමය සහ ප්‍රතිරෝධකතා සූත්‍රය R = ρl/A යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Microscopic model of conduction and drift velocity', si: 'සන්නයනයේ අන්වීක්ෂීය ආකෘතිය සහ ප්ලාවිත ප්‍රවේගය' },
          { en: 'Ohm’s law and Ohmic vs Non-ohmic conductors', si: 'ඕම් නියමය සහ ඕමීය හා අනෝමීය සන්නායක' },
          { en: 'Resistivity and conductivity factors', si: 'ප්‍රතිරෝධකතාව සහ සන්නායකතා සාධක' },
          { en: 'Temperature coefficient of resistance (R_θ = R₀(1 + αθ))', si: 'ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය (R_θ = R₀(1 + αθ))' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-8-2',
        slug: 'kirchhoff-rules-and-dc-circuits',
        unitSlug: 'current-electricity',
        unitOrder: 8,
        lessonOrder: 2,
        syllabusRef: 'Competency 8.2',
        title: {
          en: 'Kirchhoff’s Laws and DC Circuits',
          si: 'කර්චොෆ්ගේ නීති සහ සරල ධාරා පරිපථ',
        },
        summary: {
          en: 'Internal resistance and EMF of cells (E = V + Ir), series and parallel combinations of resistors, Kirchhoff’s Junction Rule (ΣI = 0) and Loop Rule (ΣE = ΣIR).',
          si: 'කෝෂවල අභ්‍යන්තර ප්‍රතිරෝධය සහ වි.ගා.බ. (E = V + Ir), ප්‍රතිරෝධක ශ්‍රේණිගත හා සමාන්තරගත සංයෝජන, කර්චොෆ්ගේ සන්ධි නියමය (ΣI = 0) සහ ලූප් නියමය (ΣE = ΣIR).',
        },
        learningObjectives: [
          {
            en: 'Apply Kirchhoff’s junction and loop laws to solve multi-loop DC circuits.',
            si: 'බහු-ලූප සරල ධාරා පරිපථ විසඳීම සඳහා කර්චොෆ්ගේ සන්ධි සහ ලූප් නියම යෙදීම.',
          },
          {
            en: 'Determine terminal potential difference of real chemical cells under load.',
            si: 'භාරයක් යටතේ සැබෑ කෝෂවල අග්‍රස්ථ විභව අන්තරය නිර්ණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Electromotive force (EMF) and internal resistance of cells', si: 'කෝෂයක විද්‍යුත් ගාමක බලය (වි.ගා.බ.) සහ අභ්‍යන්තර ප්‍රතිරෝධය' },
          { en: 'Resistors in series and parallel networks', si: 'ශ්‍රේණිගත සහ සමාන්තරගත ප්‍රතිරෝධක ජාල' },
          { en: 'Kirchhoff’s first rule (charge conservation at junctions)', si: 'කර්චොෆ්ගේ පළමු නියමය (සන්ධිවල ආරෝපණ සංස්ථිතිය)' },
          { en: 'Kirchhoff’s second rule (energy conservation in loops)', si: 'කර්චොෆ්ගේ දෙවන නියමය (ලූප තුළ ශක්ති සංස්ථිතිය)' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-8-3',
        slug: 'measuring-instruments-potentiometer-bridge',
        unitSlug: 'current-electricity',
        unitOrder: 8,
        lessonOrder: 3,
        syllabusRef: 'Competency 8.3',
        title: {
          en: 'Wheatstone Bridge and Potentiometer',
          si: 'වීට්ස්ටන් සේතුව සහ විභවමානය',
        },
        summary: {
          en: 'Principle of balanced Wheatstone bridge (P/Q = R/S), meter bridge resistance measurements, principle of the potentiometer, comparing EMFs, and finding internal resistance.',
          si: 'සමතුලිත වීට්ස්ටන් සේතු මූලධර්මය (P/Q = R/S), මීටර් සේතුවෙන් ප්‍රතිරෝධ මැනීම, විභවමාන මූලධර්මය, වි.ගා.බ. සැසඳීම සහ අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම.',
        },
        learningObjectives: [
          {
            en: 'Apply the balanced Wheatstone bridge condition to determine unknown resistances.',
            si: 'නොදන්නා ප්‍රතිරෝධ සෙවීම සඳහා සමතුලිත වීට්ස්ටන් සේතු කොන්දේසිය යෙදීම.',
          },
          {
            en: 'Use the null-deflection potentiometer method to compare EMFs and measure internal cell resistance.',
            si: 'වි.ගා.බ. සැසඳීමට සහ අභ්‍යන්තර ප්‍රතිරෝධය මැනීමට ශූන්‍ය විලම්භන විභවමාන ක්‍රමය භාවිතා කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Wheatstone bridge balance condition derivation', si: 'වීට්ස්ටන් සේතු සමතුලිතතා කොන්දේසිය ව්‍යුත්පන්න කිරීම' },
          { en: 'Meter bridge practical determination of resistance', si: 'මීටර් සේතුව මගින් ප්‍රතිරෝධ ප්‍රායෝගිකව මැනීම' },
          { en: 'Potentiometer working principle and uniform potential gradient', si: 'විභවමානයේ ක්‍රියාකාරී මූලධර්මය සහ ඒකාකාර විභව අනුක්‍රමණය' },
          { en: 'Comparison of cell EMFs and cell internal resistance measurement', si: 'කෝෂවල වි.ගා.බ. සැසඳීම සහ අභ්‍යන්තර ප්‍රතිරෝධය මැනීම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
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
      en: 'Semiconductor physics, p-n junction diodes, rectification, bipolar junction transistors (BJT), operational amplifiers (op-amps), and logic gates.',
      si: 'අර්ධ සන්නායක භෞතික විද්‍යාව, p-n සන්ධි ඩයෝඩ, සෘජුකරණය, බයිපෝලර් සන්ධි ට්‍රාන්සිස්ටර (BJT), සංක්‍රියාත්මක වර්ධක (Op-amp) සහ තාර්කික ද්වාර.',
    },
    lessons: [
      {
        id: 'lesson-9-1',
        slug: 'semiconductors-and-diodes',
        unitSlug: 'electronics',
        unitOrder: 9,
        lessonOrder: 1,
        syllabusRef: 'Competency 9.1',
        title: {
          en: 'Semiconductors and Junction Diodes',
          si: 'අර්ධ සන්නායක සහ සන්ධි ඩයෝඩ',
        },
        summary: {
          en: 'Intrinsic and extrinsic semiconductors (p-type and n-type), p-n junction formation, forward and reverse bias characteristics, Zener diodes, and half/full-wave rectification.',
          si: 'සහජ සහ අසහජ අර්ධ සන්නායක (p සහ n වර්ග), p-n සන්ධිය, පෙර නැඹුරු හා පසු නැඹුරු ලාක්ෂණික, සීනර් ඩයෝඩය සහ අර්ධ/පූර්ණ තරංග සෘජුකරණය.',
        },
        learningObjectives: [
          {
            en: 'Explain carrier conduction in p-type and n-type doped semiconductors.',
            si: 'p සහ n වර්ගයේ මාත්‍රිත අර්ධ සන්නායකවල වාහක සන්නයනය පැහැදිලි කිරීම.',
          },
          {
            en: 'Analyze half-wave and full-wave bridge rectifier circuits with capacitor filters.',
            si: 'ධාරිත්‍රක පෙරහන් සහිත අර්ධ තරංග සහ පූර්ණ තරංග පාලම් සෘජුකාරක පරිපථ විශ්ලේෂණය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Band theory and semiconductor doping', si: 'ශක්ති පටි වාදය සහ අර්ධ සන්නායක මාත්‍රණය' },
          { en: 'p-n junction depletion layer and barrier potential', si: 'p-n සන්ධියේ ක්ෂය ස්ථරය සහ බාධක විභවය' },
          { en: 'Diode IV characteristics and Zener voltage regulation', si: 'ඩයෝඩ IV ලාක්ෂණික සහ සීනර් වෝල්ටීයතා නියාමනය' },
          { en: 'Half-wave, full-wave center-tapped, and bridge rectifiers', si: 'අර්ධ තරංග, පූර්ණ තරංග මධ්‍ය-තට්ටු සහ පාලම් සෘජුකාරක' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-9-2',
        slug: 'bipolar-junction-transistors',
        unitSlug: 'electronics',
        unitOrder: 9,
        lessonOrder: 2,
        syllabusRef: 'Competency 9.2',
        title: {
          en: 'Bipolar Junction Transistors (BJT)',
          si: 'බයිපෝලර් සන්ධි ට්‍රාන්සිස්ටර (BJT)',
        },
        summary: {
          en: 'Structure and operation of npn and pnp transistors, common emitter configuration, input/output characteristics, current gain (β = I_C/I_B), and transistor switching/amplification.',
          si: 'npn සහ pnp ට්‍රාන්සිස්ටරවල ව්‍යුහය හා ක්‍රියාකාරිත්වය, පොදු විමෝචක වින්‍යාසය, ආදාන/ප්‍රතිදාන ලාක්ෂණික, ධාරා ලාභය (β) සහ ස්විචයක්/වර්ධකයක් ලෙස ට්‍රාන්සිස්ටරය.',
        },
        learningObjectives: [
          {
            en: 'Identify cutoff, active, and saturation regions on common emitter transistor output characteristics.',
            si: 'පොදු විමෝචක ට්‍රාන්සිස්ටර ප්‍රතිදාන ලාක්ෂණිකවල කඩඉම්, සක්‍රිය සහ සංතෘප්ත කලාප හඳුනා ගැනීම.',
          },
          {
            en: 'Design basic transistor switching circuits and calculate base bias resistances.',
            si: 'මූලික ට්‍රාන්සිස්ටර ස්විච පරිපථ සැලසුම් කිරීම සහ පාදස්ථ නැඹුරු ප්‍රතිරෝධ ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'npn and pnp transistor junction action', si: 'npn සහ pnp ට්‍රාන්සිස්ටරවල සන්ධි ක්‍රියාකාරිත්වය' },
          { en: 'Common-emitter configuration characteristics', si: 'පොදු විමෝචක වින්‍යාසයේ ලාක්ෂණික' },
          { en: 'Current amplification factor (β = ΔI_C / ΔI_B)', si: 'ධාරා වර්ධන සාධකය (β = ΔI_C / ΔI_B)' },
          { en: 'Transistor as an electronic switch and voltage amplifier', si: 'ඉලෙක්ට්‍රොනික ස්විචයක් සහ වෝල්ටීයතා වර්ධකයක් ලෙස ට්‍රාන්සිස්ටරය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-9-3',
        slug: 'operational-amplifiers',
        unitSlug: 'electronics',
        unitOrder: 9,
        lessonOrder: 3,
        syllabusRef: 'Competency 9.3',
        title: {
          en: 'Operational Amplifiers (Op-Amps)',
          si: 'සංක්‍රියාත්මක වර්ධක (Op-Amps)',
        },
        summary: {
          en: 'Ideal op-amp characteristics (infinite input impedance, zero output impedance, infinite open-loop gain), virtual short concept, inverting amplifier, non-inverting amplifier, and comparators.',
          si: 'පරිපූර්ණ op-amp ලක්ෂණ (අනන්ත ආදාන ප්‍රතිබාධනය, ශූන්‍ය ප්‍රතිදාන ප්‍රතිබාධනය), අතථ්‍ය කෙටි පරිපථ සංකල්පය, ප්‍රතිලෝමක/අප්‍රතිලෝමක වර්ධක සහ සංසන්දක.',
        },
        learningObjectives: [
          {
            en: 'State ideal operational amplifier assumptions and apply the virtual earth concept.',
            si: 'පරිපූර්ණ සංක්‍රියාත්මක වර්ධක උපකල්පන ප්‍රකාශ කිරීම සහ අතථ්‍ය භූගත සංකල්පය යෙදීම.',
          },
          {
            en: 'Derive closed-loop voltage gain expressions for inverting and non-inverting op-amp amplifiers.',
            si: 'ප්‍රතිලෝමක සහ අප්‍රතිලෝමක op-amp වර්ධකවල සංවෘත ලූප වෝල්ටීයතා ලාභ ප්‍රකාශන ව්‍යුත්පන්න කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Golden rules of ideal operational amplifiers', si: 'පරිපූර්ණ සංක්‍රියාත්මක වර්ධකවල මූලික නීති' },
          { en: 'Inverting amplifier gain derivation (V_out/V_in = -R_f/R_in)', si: 'ප්‍රතිලෝමක වර්ධකයේ ලාභ සමීකරණය (V_out/V_in = -R_f/R_in)' },
          { en: 'Non-inverting amplifier configuration (1 + R_f/R_1)', si: 'අප්‍රතිලෝමක වර්ධක වින්‍යාසය (1 + R_f/R_1)' },
          { en: 'Op-amp voltage comparator and sensor threshold triggers', si: 'වෝල්ටීයතා සංසන්දකය සහ සංවේදක පරිපථ' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-9-4',
        slug: 'logic-gates-and-digital-circuits',
        unitSlug: 'electronics',
        unitOrder: 9,
        lessonOrder: 4,
        syllabusRef: 'Competency 9.4',
        title: {
          en: 'Logic Gates & Digital Combinational Circuits',
          si: 'තාර්කික ද්වාර සහ ඩිජිටල් පරිපථ',
        },
        summary: {
          en: 'Basic logic gates (AND, OR, NOT), universal gates (NAND, NOR), exclusive gates (XOR, XNOR), truth tables, Boolean algebra simplification, and De Morgan’s theorems.',
          si: 'මූලික තාර්කික ද්වාර (AND, OR, NOT), සර්වත්‍ර ද්වාර (NAND, NOR), අනන්‍ය ද්වාර (XOR, XNOR), සත්‍යතා වගු, බූලියානු වීජ ගණිතය සහ ඩිමෝර්ගන්ගේ ප්‍රමේය.',
        },
        learningObjectives: [
          {
            en: 'Construct truth tables and derive Boolean logic functions for multi-input combinational networks.',
            si: 'බහු ආදාන සංයෝජන පරිපථ සඳහා සත්‍යතා වගු ගොඩනැගීම සහ බූලියානු තාර්කික සමීකරණ ව්‍යුත්පන්න කිරීම.',
          },
          {
            en: 'Implement combinational logic expressions using universal NAND or NOR gates exclusively.',
            si: 'සර්වත්‍ර NAND හෝ NOR ද්වාර පමණක් භාවිතයෙන් තාර්කික ප්‍රකාශන ක්‍රියාත්මක කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Logic operations and truth tables (AND, OR, NOT)', si: 'තාර්කික ක්‍රියාකාරකම් සහ සත්‍යතා වගු (AND, OR, NOT)' },
          { en: 'Universal NAND and NOR gate implementations', si: 'සර්වත්‍ර NAND සහ NOR ද්වාර ක්‍රියාත්මක කිරීම්' },
          { en: 'Boolean identities and De Morgan’s algebraic theorems', si: 'බූලියානු අනන්‍යතා සහ ඩිමෝර්ගන්ගේ වීජීය ප්‍රමේය' },
          { en: 'Digital combinational control circuit design', si: 'ඩිජිටල් සංයෝජක පාලන පරිපථ සැලසුම් කිරීම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 10: Mechanical Properties of Matter (පදාර්ථයේ යාන්ත්‍රික ගුණ) - Syllabus Competency 10
  // =========================================================================
  {
    id: 'unit-10',
    slug: 'mechanical-properties-of-matter',
    syllabusOrder: 10,
    competencyRange: 'Competency 10.1 – 10.4',
    title: {
      en: 'Mechanical Properties of Matter',
      si: 'පදාර්ථයේ යාන්ත්‍රික ගුණ',
    },
    description: {
      en: 'Elasticity, Hooke’s law, Young’s modulus, surface tension, capillary action, viscosity, Poiseuille’s formula, and Bernoulli’s equation for fluids.',
      si: 'ප්‍රත්‍යාස්ථතාව, හුක්ගේ නියමය, යන්ග් මාපාංකය, පෘෂ්ඨික ආතතිය, කේශික ක්‍රියාව, දුස්ස්‍රාවිතාව, පුවාසෙයි සමීකරණය සහ බර්නූලි මූලධර්මය.',
    },
    lessons: [
      {
        id: 'lesson-10-1',
        slug: 'elasticity-and-youngs-modulus',
        unitSlug: 'mechanical-properties-of-matter',
        unitOrder: 10,
        lessonOrder: 1,
        syllabusRef: 'Competency 10.1',
        title: {
          en: 'Elasticity and Hooke’s Law',
          si: 'ප්‍රත්‍යාස්ථතාව සහ හුක්ගේ නියමය',
        },
        summary: {
          en: 'Stress, strain, Hooke’s law, elastic limit, Young’s modulus (E = σ/ε = Fl/Ae), energy stored in stretched wires (U = ½Fe), and Searles apparatus experiment.',
          si: 'ප්‍රත්‍යබල, වික්‍රියා, හුක්ගේ නියමය, ප්‍රත්‍යාස්ථ සීමාව, යන්ග් මාපාංකය (E = Fl/Ae), ඇදි කම්බියක ගබඩා වන ප්‍රත්‍යාස්ථ ශක්තිය (U = ½Fe) සහ සර්ල් උපකරණ පරීක්ෂණය.',
        },
        learningObjectives: [
          {
            en: 'Define tensile stress, tensile strain, and determine Young’s modulus from experimental data.',
            si: 'ආතන්ය ප්‍රත්‍යබලය, ආතන්ය වික්‍රියාව අර්ථ දැක්වීම සහ ප්‍රායෝගික දත්තවලින් යන්ග් මාපාංකය නිර්ණය කිරීම.',
          },
          {
            en: 'Calculate strain energy per unit volume stored in deformed elastic solids.',
            si: 'විකෘති වූ ප්‍රත්‍යාස්ථ ඝන ද්‍රව්‍යවල ඒකක පරිමාවක ගබඩා වූ වික්‍රියා ශක්තිය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Tensile stress and strain definitions', si: 'ආතන්ය ප්‍රත්‍යබලය සහ වික්‍රියාව අර්ථ දැක්වීම්' },
          { en: 'Hooke’s law and stress-strain curve for metals', si: 'හුක්ගේ නියමය සහ ලෝහ සඳහා ප්‍රත්‍යබල-වික්‍රියා වක්‍රය' },
          { en: 'Young’s modulus determination using Searle’s method', si: 'සර්ල්ගේ ක්‍රමයෙන් යන්ග් මාපාංකය නිර්ණය කිරීම' },
          { en: 'Elastic potential energy in stretched wires (½ × F × e)', si: 'ඇදි කම්බියක ප්‍රත්‍යාස්ථ විභව ශක්තිය (½ × F × e)' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-10-2',
        slug: 'surface-tension-and-capillarity',
        unitSlug: 'mechanical-properties-of-matter',
        unitOrder: 10,
        lessonOrder: 2,
        syllabusRef: 'Competency 10.2',
        title: {
          en: 'Surface Tension and Capillarity',
          si: 'පෘෂ්ඨික ආතතිය සහ කේශිකත්වය',
        },
        summary: {
          en: 'Intermolecular forces, surface energy, surface tension (γ = F/l = ΔW/ΔA), excess pressure across curved liquid surfaces (ΔP = 2γ/r), angle of contact, and capillary rise (h = 2γ cos θ / rρg).',
          si: 'අන්තර් අණුක බල, පෘෂ්ඨික ශක්තිය, පෘෂ්ඨික ආතතිය (γ), වක්‍ර ද්‍රව පෘෂ්ඨ හරහා අතිරික්ත පීඩනය (ΔP = 2γ/r), ස්පර්ශ කෝණය සහ කේශික ආරෝහණය.',
        },
        learningObjectives: [
          {
            en: 'Explain surface tension in terms of molecular cohesion and surface free energy.',
            si: 'අණුක සංසක්ති බල සහ පෘෂ්ඨික නිදහස් ශක්තිය ඇසුරින් පෘෂ්ඨික ආතතිය පැහැදිලි කිරීම.',
          },
          {
            en: 'Calculate capillary elevation and excess pressure inside liquid droplets and bubbles.',
            si: 'කේශික ආරෝහණය සහ ද්‍රව බිංදු හා බුබුළු තුළ අතිරික්ත පීඩනය ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Molecular origin of surface tension', si: 'පෘෂ්ඨික ආතතියේ අණුක සම්භවය' },
          { en: 'Surface energy and work done in expanding film area', si: 'පෘෂ්ඨික ශක්තිය සහ පෘෂ්ඨ වර්ගඵලය වැඩි කිරීමේදී සිදුවන කාර්යය' },
          { en: 'Excess pressure inside drops (2γ/r) and soap bubbles (4γ/r)', si: 'ද්‍රව බිංදු (2γ/r) සහ සබන් බුබුළු (4γ/r) තුළ අතිරික්ත පීඩනය' },
          { en: 'Angle of contact and capillary ascent formula', si: 'ස්පර්ශ කෝණය සහ කේශික ආරෝහණ සූත්‍රය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-10-3',
        slug: 'viscosity-and-fluid-dynamics',
        unitSlug: 'mechanical-properties-of-matter',
        unitOrder: 10,
        lessonOrder: 3,
        syllabusRef: 'Competency 10.3',
        title: {
          en: 'Viscosity and Fluid Dynamics',
          si: 'දුස්ස්‍රාවිතාව සහ තරල ගතිවිද්‍යාව',
        },
        summary: {
          en: 'Viscous drag, Newton’s law of viscosity (F = ηA dv/dx), Stokes’ law (F = 6πηrv), terminal velocity of a falling sphere, Poiseuille’s flow, continuity equation (A₁v₁ = A₂v₂), and Bernoulli’s principle.',
          si: 'දුස්ස්‍රාවී ප්‍රතිරෝධය, නිව්ටන්ගේ දුස්ස්‍රාවී නියමය, ස්ටෝක්ස් නියමය (F = 6πηrv), අන්ත ප්‍රවේගය, පුවාසෙයි සමීකරණය, අවිච්ඡේද්‍යතා සමීකරණය (A₁v₁ = A₂v₂) සහ බර්නූලි මූලධර්මය.',
        },
        learningObjectives: [
          {
            en: 'Apply Stokes’ law to determine the terminal velocity of spheres falling through viscous liquids.',
            si: 'දුස්ස්‍රාවී ද්‍රව තුළ පතිත වන ගෝලවල අන්ත ප්‍රවේගය නිර්ණය කිරීමට ස්ටෝක්ස් නියමය යෙදීම.',
          },
          {
            en: 'Apply Bernoulli’s principle and the equation of continuity to streamlined fluid flow.',
            si: 'සුනිශිත තරල ප්‍රවාහය සඳහා බර්නූලි මූලධර්මය සහ අවිච්ඡේද්‍යතා සමීකරණය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Newton’s viscosity coefficient definition', si: 'නිව්ටන්ගේ දුස්ස්‍රාවිතා සංගුණකය අර්ථ දැක්වීම' },
          { en: 'Stokes’ law and terminal velocity derivation', si: 'ස්ටෝක්ස් නියමය සහ අන්ත ප්‍රවේගය ව්‍යුත්පන්න කිරීම' },
          { en: 'Equation of continuity for incompressible streamline flow', si: 'අසම්පීඩ්‍ය සුනිශිත ප්‍රවාහය සඳහා අවිච්ඡේද්‍යතා සමීකරණය' },
          { en: 'Bernoulli’s theorem and venturi meter applications', si: 'බර්නූලි ප්‍රමේයය සහ වෙන්චූරිමාන යෙදීම්' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 11: Matter and Radiation (පදාර්ථය සහ විකිරණ) - Syllabus Competency 11
  // =========================================================================
  {
    id: 'unit-11',
    slug: 'matter-and-radiation',
    syllabusOrder: 11,
    competencyRange: 'Competency 11.1 – 11.4',
    title: {
      en: 'Matter and Radiation',
      si: 'පදාර්ථය සහ විකිරණ',
    },
    description: {
      en: 'Quantum nature of radiation, photoelectric effect, Einstein’s equation, line spectra, X-rays, wave-particle duality, and nuclear physics basics.',
      si: 'විකිරණයේ ක්වොන්ටම් ස්වභාවය, ප්‍රකාශ විද්‍යුත් ආචරණය, අයින්ස්ටයින් සමීකරණය, රේඛීය වර්ණාවලි, එක්ස්-කිරණ, තරංග-අංශු ද්වෛතය සහ න්‍යෂ්ටික භෞතික විද්‍යාවේ මූලික කරුණු.',
    },
    lessons: [
      {
        id: 'lesson-11-1',
        slug: 'photoelectric-effect-and-photons',
        unitSlug: 'matter-and-radiation',
        unitOrder: 11,
        lessonOrder: 1,
        syllabusRef: 'Competency 11.1',
        title: {
          en: 'Photoelectric Effect and the Photon',
          si: 'ප්‍රකාශ විද්‍යුත් ආචරණය සහ ෆෝටෝනය',
        },
        summary: {
          en: 'Failure of classical wave theory, Planck’s quantum hypothesis (E = hf), photoelectric emission characteristics, threshold frequency, stopping potential, and Einstein’s photoelectric equation (hf = Φ + ½mv_max²).',
          si: 'සම්භාව්‍ය තරංග වාදයේ අසමත් වීම, ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය (E = hf), ප්‍රකාශ විද්‍යුත් විමෝචනය, සීමාකාරී සංඛ්‍යාතය, නැවැත්වීමේ විභවය සහ අයින්ස්ටයින්ගේ සමීකරණය.',
        },
        learningObjectives: [
          {
            en: 'Explain why classical wave theory cannot explain the instantaneous emission and threshold frequency of photoelectrons.',
            si: 'ප්‍රකාශ ඉලෙක්ට්‍රෝන ක්ෂණිකව විමෝචනය වීම සහ සීමාකාරී සංඛ්‍යාතය සම්භාව්‍ය තරංග වාදයෙන් පැහැදිලි කළ නොහැක්කේ මන්දැයි පහදා දීම.',
          },
          {
            en: 'Apply Einstein’s photoelectric equation to calculate work function and stopping potential.',
            si: 'කාර්ය ශ්‍රිතය සහ නැවැත්වීමේ විභවය ගණනය කිරීමට අයින්ස්ටයින්ගේ ප්‍රකාශ විද්‍යුත් සමීකරණය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'Experimental facts of photoelectric emission', si: 'ප්‍රකාශ විද්‍යුත් විමෝචනයේ ප්‍රායෝගික කරුණු' },
          { en: 'Photon concept and photon energy relation (E = hf = hc/λ)', si: 'ෆෝටෝන සංකල්පය සහ ෆෝටෝන ශක්ති සම්බන්ධය (E = hf)' },
          { en: 'Work function, threshold frequency, and threshold wavelength', si: 'කාර්ය ශ්‍රිතය, සීමාකාරී සංඛ්‍යාතය සහ සීමාකාරී තරංග ආයාමය' },
          { en: 'Einstein’s equation and stopping potential graphs', si: 'අයින්ස්ටයින් සමීකරණය සහ නැවැත්වීමේ විභව ප්‍රස්තාර' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-11-2',
        slug: 'wave-particle-duality-and-xrays',
        unitSlug: 'matter-and-radiation',
        unitOrder: 11,
        lessonOrder: 2,
        syllabusRef: 'Competency 11.2',
        title: {
          en: 'Wave-Particle Duality and X-Rays',
          si: 'තරංග-අංශු ද්වෛතය සහ එක්ස්-කිරණ',
        },
        summary: {
          en: 'De Broglie wavelength of matter waves (λ = h/p), electron diffraction evidence, production of X-rays in Coolidge tubes, continuous and characteristic X-ray spectra, and minimum wavelength cutoff (λ_min = hc/eV).',
          si: 'ද බ්‍රොයි තරංග ආයාමය (λ = h/p), ඉලෙක්ට්‍රෝන විවර්තන සාක්ෂි, කූලිජ් නළයෙන් එක්ස්-කිරණ නිපදවීම, සන්තතික හා ලාක්ෂණික වර්ණාවලි සහ අවම තරංග ආයාම සීමාව (λ_min = hc/eV).',
        },
        learningObjectives: [
          {
            en: 'Calculate the de Broglie wavelength associated with moving particles of given momentum.',
            si: 'දෙන ලද ගම්‍යතාවක් සහිත චලනය වන අංශුවක ද බ්‍රොයි තරංග ආයාමය ගණනය කිරීම.',
          },
          {
            en: 'Apply energy conservation to determine the minimum wavelength cutoff λ_min in X-ray emission.',
            si: 'එක්ස්-කිරණ විමෝචනයේ අවම තරංග ආයාමය λ_min සෙවීම සඳහා ශක්ති සංස්ථිතිය යෙදීම.',
          },
        ],
        topicOutline: [
          { en: 'De Broglie hypothesis of matter waves (λ = h/mv)', si: 'ද්‍රව්‍ය තරංග පිළිබඳ ද බ්‍රොයි උපකල්පනය (λ = h/mv)' },
          { en: 'Davisson-Germer electron diffraction experiment', si: 'ඩැවිසන්-ජර්මර් ඉලෙක්ට්‍රෝන විවර්තන පරීක්ෂණය' },
          { en: 'X-ray generation mechanisms and Coolidge tube', si: 'එක්ස්-කිරණ ජනන යාන්ත්‍රණය සහ කූලිජ් නළය' },
          { en: 'Continuous Bremsstrahlung spectrum and Duane-Hunt cutoff', si: 'සන්තතික බ්‍රෙම්ස්ට්‍රාලුන්ග් වර්ණාවලිය සහ ඩුවාන්-හන්ට් අවම කඩඉම' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-11-3',
        slug: 'atomic-models-and-line-spectra',
        unitSlug: 'matter-and-radiation',
        unitOrder: 11,
        lessonOrder: 3,
        syllabusRef: 'Competency 11.3',
        title: {
          en: 'Atomic Models and Line Emission Spectra',
          si: 'පරමාණුක ආකෘති සහ රේඛීය විමෝචන වර්ණාවලි',
        },
        summary: {
          en: 'Rutherford nuclear model, Bohr’s postulates for hydrogen atom, quantization of angular momentum (mvr = nh/2π), energy levels of hydrogen (E_n = -13.6/n² eV), and spectral emission series (Lyman, Balmer, Paschen).',
          si: 'රදර්ෆර්ඩ් න්‍යෂ්ටික ආකෘතිය, හයිඩ්‍රජන් පරමාණුව සඳහා බෝර්ගේ උපකල්පන, කෝණික ගම්‍යතා ක්වොන්ටීකරණය, හයිඩ්‍රජන් ශක්ති මට්ටම් සහ වර්ණාවලි ශ්‍රේණි (ලයිමන්, බාමර්, පාෂන්).',
        },
        learningObjectives: [
          {
            en: 'State Bohr’s postulates and explain how discrete atomic energy levels generate line emission spectra.',
            si: 'බෝර්ගේ උපකල්පන ප්‍රකාශ කිරීම සහ විවික්ත පරමාණුක ශක්ති මට්ටම් මගින් රේඛීය වර්ණාවලි හටගන්නා අයුරු පැහැදිලි කිරීම.',
          },
          {
            en: 'Calculate photon wavelengths emitted in electronic transitions across hydrogen spectral series.',
            si: 'හයිඩ්‍රජන් වර්ණාවලි ශ්‍රේණිවල ඉලෙක්ට්‍රෝන සංක්‍රාන්තිවලදී විමෝචනය වන ෆෝටෝන තරංග ආයාම ගණනය කිරීම.',
          },
        ],
        topicOutline: [
          { en: 'Rutherford alpha particle scattering experiment', si: 'රදර්ෆර්ඩ්ගේ ඇල්ෆා අංශු ප්‍රකිරණ පරීක්ෂණය' },
          { en: 'Bohr’s quantized orbital model of hydrogen', si: 'හයිඩ්‍රජන් සඳහා බෝර්ගේ ක්වොන්ටීකෘත කක්ෂ ආකෘතිය' },
          { en: 'Energy level diagram of hydrogen atom', si: 'හයිඩ්‍රජන් පරමාණුවේ ශක්ති මට්ටම් සටහන' },
          { en: 'Spectral series transitions (Lyman, Balmer, Paschen, Brackett, Pfund)', si: 'වර්ණාවලි ශ්‍රේණි සංක්‍රාන්ති (ලයිමන්, බාමර්, පාෂන්, බ්‍රැකට්, ෆන්ඩ්)' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
      {
        id: 'lesson-11-4',
        slug: 'nuclear-physics-and-radioactivity',
        unitSlug: 'matter-and-radiation',
        unitOrder: 11,
        lessonOrder: 4,
        syllabusRef: 'Competency 11.4',
        title: {
          en: 'Radioactivity and Nuclear Reactions',
          si: 'විකිරණශීලතාව සහ න්‍යෂ්ටික ප්‍රතික්‍රියා',
        },
        summary: {
          en: 'Nuclear composition, isotopes, mass defect and binding energy (ΔE = Δmc²), law of radioactive decay (N = N₀e^(-λt)), half-life (T_½ = ln 2 / λ), decay series (α, β, γ emissions), and nuclear fission/fusion.',
          si: 'න්‍යෂ්ටික සංයුතිය, සමස්ථානික, ස්කන්ධ ඌනතාව සහ බන්ධන ශක්තිය (ΔE = Δmc²), විකිරණශීලී ක්ෂය නියමය (N = N₀e^(-λt)), අර්ධ ආයු කාලය (T_½ = ln 2 / λ), ක්ෂය විමෝචන සහ න්‍යෂ්ටික විඛණ්ඩනය/සංලයනය.',
        },
        learningObjectives: [
          {
            en: 'Apply mass-energy equivalence ΔE = Δmc² to calculate nuclear binding energy per nucleon.',
            si: 'නියුක්ලියෝනයකට බන්ධන ශක්තිය ගණනය කිරීමට ස්කන්ධ-ශක්ති තුල්‍යතාව ΔE = Δmc² යෙදීම.',
          },
          {
            en: 'Solve radioactive decay and remaining activity problems using exponential decay equations and half-life.',
            si: 'ඝාතීය ක්ෂය සමීකරණ සහ අර්ධ ආයු කාලය භාවිතයෙන් විකිරණශීලී ක්ෂයවීම් හා ඉතිරි ක්‍රියාකාරිත්වය සෙවීම.',
          },
        ],
        topicOutline: [
          { en: 'Nuclear constitution: atomic number Z and mass number A', si: 'න්‍යෂ්ටික සංයුතිය: පරමාණුක ක්‍රමාංකය Z සහ ස්කන්ධ ක්‍රමාංකය A' },
          { en: 'Mass defect and nuclear binding energy per nucleon curve', si: 'ස්කන්ධ ඌනතාව සහ නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය' },
          { en: 'Radioactive decay law, decay constant (λ), and half-life (T_½)', si: 'විකිරණශීලී ක්ෂය නියමය, ක්ෂය නියතය (λ) සහ අර්ධ ආයු කාලය (T_½)' },
          { en: 'Nuclear fission and stellar nuclear fusion processes', si: 'න්‍යෂ්ටික විඛණ්ඩනය සහ තාරකා තුළ න්‍යෂ්ටික සංලයනය' },
        ],
        status: 'outline',
        hasSimulation: false,
      },
    ],
  },
];
