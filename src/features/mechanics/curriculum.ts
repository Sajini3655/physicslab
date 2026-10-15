import { LessonDefinition } from '@/shared/curriculum/types';

export const MECHANICS_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 2.1: Vectors and Scalars
  // -------------------------------------------------------------------------
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
        en: 'Categorize physical quantities as vectors or scalars based on magnitude, direction, and vector transformation laws.',
        si: 'විශාලත්වය, දිශාව සහ දෛශික එකතු කිරීමේ නීති මත පදනම්ව භෞතික රාශි අදිශ හෝ දෛශික ලෙස වර්ගීකරණය කිරීම.',
      },
      {
        en: 'Resolve vectors along mutually perpendicular axes to determine resultant vectors analytically.',
        si: 'සම්ප්‍රයුක්තය සෙවීම සඳහා දෛශික ලම්බක අක්ෂ ඔස්සේ විභේදනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Scalars versus vectors definition and distinction', si: 'අදිශ හා දෛශික අර්ථ දැක්වීම් සහ වෙනස' },
      { en: 'Vector addition and subtraction laws (Triangle and Parallelogram)', si: 'දෛශික එකතු කිරීමේ සහ අඩු කිරීමේ නීති (ත්‍රිකෝණ සහ සමාන්තරාස්‍ර)' },
      { en: 'Resolution of vectors into rectangular components', si: 'දෛශික සෘජුකෝණී සංරචකවලට විභේදනය' },
      { en: 'Resultant of coplanar concurrent vectors', si: 'තලීය සමගාමී දෛශිකවල සම්ප්‍රයුක්තය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'vector-canvas',
    content: {
      introduction: {
        en: 'Vectors and Scalars form the mathematical cornerstone of classical mechanics. Forces, velocities, displacements, and momenta possess essential spatial directions that must be combined using vector geometry rather than ordinary scalar arithmetic.',
        si: 'දෛශික සහ අදිශ සම්භාව්‍ය යාන්ත්‍ර විද්‍යාවේ ගණිතමය පදනම වේ. බල, ප්‍රවේග, විස්ථාපන සහ ගම්‍යතා සඳහා නිශ්චිත දිශාවන් ඇති බැවින් සාමාන්‍ය අංක ගණිතයට වඩා දෛශික ජ්‍යාමිතිය මඟින් ඒවා එකතු කළ යුතුය.',
      },
      keyConcepts: [
        {
          title: { en: 'Rectangular Resolution', si: 'සෘජුකෝණී විභේදනය' },
          description: {
            en: 'Any vector A inclined at angle θ to the horizontal resolves into perpendicular components: A_x = A cos θ and A_y = A sin θ. The original vector magnitude is restored by Pythagoras: A = √(A_x² + A_y²).',
            si: 'තිරස සමඟ θ කෝණයක් සාදන ඕනෑම දෛශිකයක් ලම්බක සංරචක දෙකකට විභේදනය වේ: A_x = A cos θ සහ A_y = A sin θ. විශාලත්වය: A = √(A_x² + A_y²).',
          },
          formula: 'A_x = A cos θ, A_y = A sin θ',
        },
        {
          title: { en: 'Parallelogram Law of Addition', si: 'දෛශික සමාන්තරාස්‍ර නියමය' },
          description: {
            en: 'The resultant of two forces P and Q acting at angle θ is given by the diagonal of the parallelogram: R = √(P² + Q² + 2PQ cos θ).',
            si: 'θ කෝණයකින් ක්‍රියාකරන P සහ Q බල දෙකක සම්ප්‍රයුක්තය සමාන්තරාස්‍රයේ විකර්ණයෙන් ලැබේ: R = √(P² + Q² + 2PQ cos θ).',
          },
          formula: 'R = √(P² + Q² + 2PQ cos θ)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Assuming electric current is a vector because it has a direction along a wire.',
            si: 'කම්බියක් ඔස්සේ දිශාවක් ඇති බැවින් විද්‍යුත් ධාරාව දෛශිකයක් යැයි සිතීම.',
          },
          clarification: {
            en: 'Electric current does not obey the parallelogram law of vector addition; currents at a junction combine algebraically (I = I₁ + I₂), so current is a scalar.',
            si: 'විද්‍යුත් ධාරාව දෛශික සමාන්තරාස්‍ර නියමය පිළිපදින්නේ නැත. සන්ධියකදී ධාරා එකතු වන්නේ වීජීයව බැවින් ධාරාව අදිශයකි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-1-1',
          question: {
            en: 'Two forces of 30 N and 40 N act at right angles (90°) to each other. Calculate their resultant magnitude in Newtons.',
            si: 'එකිනෙකට ලම්බකව (90°) ක්‍රියාකරන 30 N සහ 40 N බල දෙකක සම්ප්‍රයුක්තයේ විශාලත්වය නිව්ටන් වලින් ගණනය කරන්න.',
          },
          hint: {
            en: 'Because cos 90° = 0, R = √(30² + 40²).',
            si: 'cos 90° = 0 බැවින්, R = √(30² + 40²).',
          },
          answer: {
            en: 'R = √(900 + 1600) = √2500 = 50 N.',
            si: 'R = √(900 + 1600) = √2500 = 50 N.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.2: Rectilinear Motion: Uniform Velocity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-2',
    slug: 'rectilinear-motion-uniform-velocity',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 2,
    syllabusRef: 'Competency 2.1',
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
          title: { en: 'Displacement vs Distance', si: 'විස්ථාපනය සහ දුර' },
          description: {
            en: 'Distance is a scalar reflecting total path length, while displacement (s) is a signed vector measuring net change in position from start to destination.',
            si: 'දුර යනු ගමන් කළ මුළු මාර්ග දිග දක්වන අදිශයකි. විස්ථාපනය (s) යනු ආරම්භයේ සිට ගමනාන්තය දක්වා සිදුවූ ශුද්ධ පිහිටුම් වෙනස දක්වන ලකුණු සහිත දෛශිකයකි.',
          },
          formula: 's = x_final - x_initial',
        },
        {
          title: { en: 'Uniform Velocity Equation', si: 'ඒකාකාර ප්‍රවේග සමීකරණය' },
          description: {
            en: 'When velocity is invariant over duration t, acceleration is zero: s = u × t.',
            si: 'ප්‍රවේගය නියතව පවතින විට ත්වරණය ශූන්‍ය වේ: s = u × t.',
          },
          formula: 's = u × t',
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
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-2-1',
          question: {
            en: 'A car moves along a straight road towards the East at a constant velocity of 20 m/s for 15 seconds. Calculate its displacement.',
            si: 'මෝටර් රථයක් නැගෙනහිර දෙසට 20 m/s නියත ප්‍රවේගයකින් තත්පර 15 ක් ගමන් කරයි. එහි විස්ථාපනය ගණනය කරන්න.',
          },
          hint: {
            en: 'Use s = u × t.',
            si: 's = u × t සූත්‍රය යොදන්න.',
          },
          answer: {
            en: 's = 20 × 15 = 300 m towards East.',
            si: 's = 20 × 15 = 300 m නැගෙනහිර දෙසට.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.3: Uniformly Accelerated Motion
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-3',
    slug: 'uniformly-accelerated-motion',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 3,
    syllabusRef: 'Competency 2.1',
    title: {
      en: 'Uniformly Accelerated Motion',
      si: 'ඒකාකාර ත්වරිත චලිතය',
    },
    summary: {
      en: 'Equations of linear motion under constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t, and free vertical fall under gravity.',
      si: 'නියත ත්වරණය යටතේ සරල රේඛීය චලිත සමීකරණ: v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t, සහ ගුරුත්වය යටතේ සිරස් වැටීම.',
    },
    learningObjectives: [
      {
        en: 'Derive and apply the four kinematic equations for constant acceleration with directional sign discipline.',
        si: 'නියත ත්වරණය සඳහා චාලක සමීකරණ හතර ව්‍යුත්පන්න කර සලකුණු සම්මුතියට අනුව නිවැරදිව යෙදීම.',
      },
      {
        en: 'Analyze vertical motion under gravity and calculate apex height, apex time, and impact velocity.',
        si: 'ගුරුත්වය යටතේ සිරස් චලිතය විශ්ලේෂණය කර උපරිම උස, ඒ සඳහා කාලය සහ ගැටුම් ප්‍රවේගය ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Definition of acceleration as a = dv/dt', si: 'ත්වරණය අර්ථ දැක්වීම a = dv/dt' },
      { en: 'Derivations of the four kinematic equations', si: 'චාලක සමීකරණ හතර ව්‍යුත්පන්න කිරීම' },
      { en: 'Vertical motion under gravity (g = 9.8 m s⁻²)', si: 'ගුරුත්වය යටතේ සිරස් චලිතය (g = 9.8 m s⁻²)' },
      { en: 'Graphical analysis: velocity-time area and slope', si: 'ප්‍රවේග-කාල ප්‍රස්තාරික විශ්ලේෂණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'When a body experiences a constant net force, it undergoes uniform acceleration. Its velocity changes at a steady rate, governed by four canonical kinematic equations.',
        si: 'වස්තුවක් මත නියත ශුද්ධ බලයක් ක්‍රියාකරන විට එය ඒකාකාර ත්වරණයකට ලක්වේ. එහි ප්‍රවේගය ඒකාකාර සීඝ්‍රතාවයකින් වෙනස් වන අතර මූලික චාලක සමීකරණ හතරකින් පාලනය වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'The Four Kinematic Equations', si: 'මූලික චාලක සමීකරණ හතර' },
          description: {
            en: '1. v = u + at\n2. s = ut + ½at²\n3. v² = u² + 2as\n4. s = ½(u + v)t',
            si: '1. v = u + at\n2. s = ut + ½at²\n3. v² = u² + 2as\n4. s = ½(u + v)t',
          },
          formula: 'v = u + at, s = ut + ½at², v² = u² + 2as',
        },
        {
          title: { en: 'Vertical Motion Under Gravity', si: 'ගුරුත්වය යටතේ සිරස් චලිතය' },
          description: {
            en: 'Taking upward direction as positive: a = -g. At the peak apex of flight, instantaneous vertical velocity v = 0.',
            si: 'ඉහළ දිශාව ධන ලෙස ගතහොත් a = -g වේ. උපරිම උසෙහිදී ක්ෂණික ප්‍රවේගය v = 0 වේ.',
          },
          formula: 'v² = u² - 2gh (at apex: h_max = u² / 2g)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing acceleration is zero at the highest point of a vertical throw.',
            si: 'සිරස්ව විසි කළ වස්තුවක ඉහළම ලක්ෂ්‍යයේදී ත්වරණය ශූන්‍ය යැයි සිතීම.',
          },
          clarification: {
            en: 'At the apex, velocity is instantaneously zero (v = 0), but gravitational acceleration remains continuous and downward (a = -g). If acceleration were zero, the ball would remain suspended in mid-air!',
            si: 'ඉහළම ලක්ෂ්‍යයේදී ක්ෂණික ප්‍රවේගය ශූන්‍ය වුවද (v = 0), ගුරුත්වජ ත්වරණය අඛණ්ඩව පහළට ක්‍රියා කරයි (a = -g). ත්වරණය ශූන්‍ය වූවා නම් බෝලය අහසේ නතර වී පැවතිය යුතුය!',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-3-1',
          question: {
            en: 'A ball thrown vertically upwards with 20 m s⁻¹ reaches its maximum height. Taking g = 10 m s⁻², calculate the height in metres.',
            si: '20 m s⁻¹ කින් සිරස්ව ඉහළට විසි කළ බෝලයක් ළඟා වන උපරිම උස g = 10 m s⁻² විට ගණනය කරන්න.',
          },
          hint: {
            en: 'At apex, v = 0. Use v² = u² - 2gh.',
            si: 'උපරිම උසෙහිදී v = 0. v² = u² - 2gh යොදන්න.',
          },
          answer: {
            en: 'h = u² / (2g) = 400 / 20 = 20 m.',
            si: 'h = u² / (2g) = 400 / 20 = 20 m.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.4: Projectile Motion in Two Dimensions
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-4',
    slug: 'projectiles',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 4,
    syllabusRef: 'Competency 2.1',
    title: {
      en: 'Projectile Motion in Two Dimensions',
      si: 'ද්විමාන ප්‍රක්ෂේප්‍ය චලිතය',
    },
    summary: {
      en: 'Independence of orthogonal motions, parabolic trajectory equation, time of flight, maximum apex height, and horizontal range on level ground.',
      si: 'ලම්බක චලිතවල ස්වාධීනතාව, පරාවලයික පථ සමීකරණය, චලන කාලය, උපරිම උස, සහ තිරස් පරාසය.',
    },
    learningObjectives: [
      {
        en: 'Decompose 2D projectile motion into orthogonal independent horizontal and vertical components.',
        si: 'ද්විමාන ප්‍රක්ෂේප්‍ය චලිතය එකිනෙකට ලම්බක ස්වාධීන තිරස් හා සිරස් සංරචකවලට වියෝජනය කිරීම.',
      },
      {
        en: 'Calculate time of flight T, apex height H, and horizontal range R analytically and simulate them dynamically.',
        si: 'චලන කාලය T, උපරිම උස H, සහ තිරස් පරාසය R ගණනය කර පරිගණක අනුකරණය මඟින් නිරීක්ෂණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Principle of physical independence of perpendicular motions', si: 'ලම්බක චලිතවල භෞතික ස්වාධීනතා මූලධර්මය' },
      { en: 'Horizontal motion: constant velocity x = u cos θ · t', si: 'තිරස් චලිතය: නියත ප්‍රවේගය x = u cos θ · t' },
      { en: 'Vertical motion: accelerated motion y = u sin θ · t - ½gt²', si: 'සිරස් චලිතය: ත්වරිත චලිතය y = u sin θ · t - ½gt²' },
      { en: 'Parabolic trajectory and optimum 45° range condition', si: 'පරාවලයික පථය සහ උපරිම පරාසය සඳහා 45° කෝණ කොන්දේසිය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'projectiles-simulation',
    content: {
      introduction: {
        en: 'A projectile is any object propelled into free flight subjected only to gravity and initial velocity. Its path is a symmetric parabola formed by the combination of constant horizontal velocity and constant downward vertical acceleration.',
        si: 'ප්‍රක්ෂේප්‍යයක් යනු ගුරුත්වය සහ ආරම්භක ප්‍රවේගය පමණක් යටතේ නිදහසේ චලනය වන වස්තුවකි. නියත තිරස් ප්‍රවේගය සහ නියත සිරස් ත්වරණය එක්වීමෙන් එහි ගමන් මඟ සමමිතික පරාවලයක් බවට පත්වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Independence of Orthogonal Motions', si: 'ලම්බක චලිතවල ස්වාධීනතාව' },
          description: {
            en: 'Horizontal motion proceeds with zero acceleration: a_x = 0 ⇒ v_x = u cos θ (constant). Vertical motion proceeds under gravity: a_y = -g ⇒ v_y = u sin θ - gt.',
            si: 'තිරස් චලිතය ශූන්‍ය ත්වරණයෙන් සිදුවේ (v_x = u cos θ නියතයි). සිරස් චලිතය ගුරුත්වය යටතේ සිදුවේ (v_y = u sin θ - gt).',
          },
          formula: 'v_x = u cos θ, v_y = u sin θ - gt',
        },
        {
          title: { en: 'Trajectory Formulas (Level Ground)', si: 'පථ සමීකරණ (තිරස් තලයකදී)' },
          description: {
            en: '• Time of flight: T = (2u sin θ) / g\n• Maximum height: H = (u² sin² θ) / (2g)\n• Horizontal range: R = (u² sin 2θ) / g (Max at θ = 45°)',
            si: '• චලන කාලය: T = (2u sin θ) / g\n• උපරිම උස: H = (u² sin² θ) / (2g)\n• තිරස් පරාසය: R = (u² sin 2θ) / g (θ = 45° දී උපරිම වේ)',
          },
          formula: 'R = (u² sin 2θ) / g, H = (u² sin² θ) / (2g)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thinking a bullet fired horizontally and one dropped from the same height hit the ground at different times.',
            si: 'එකම උසක සිට තිරස්ව විදින ලද උණ්ඩයක් සහ අතහරින ලද උණ්ඩයක් බිම පතිත වීමට ගතවන කාලය වෙනස් යැයි සිතීම.',
          },
          clarification: {
            en: 'Both bullets have identical initial vertical velocity (u_y = 0) and identical vertical acceleration (a_y = -g). Because vertical motion is completely independent of horizontal motion, both strike the ground simultaneously.',
            si: 'උණ්ඩ දෙකෙහිම ආරම්භක සිරස් ප්‍රවේගය ශූන්‍ය වන අතර සිරස් ත්වරණය සමාන වේ. සිරස් චලිතය තිරස් චලිතයෙන් ස්වාධීන බැවින් දෙකම එකම මොහොතේ පොළොවට පතිත වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-4-1',
          question: {
            en: 'A projectile is launched at 20 m s⁻¹ at an angle of 30° to the horizontal. Taking g = 10 m s⁻², calculate the horizontal range in metres.',
            si: 'තිරසට 30° ක කෝණයකින් 20 m s⁻¹ ප්‍රවේගයෙන් ප්‍රක්ෂේප්‍යයක් විදිනු ලැබේ. g = 10 m s⁻² විට, තිරස් පරාසය මීටර් වලින් ගණනය කරන්න.',
          },
          hint: {
            en: 'Use R = (u² sin 2θ) / g with 2θ = 60°.',
            si: 'R = (u² sin 2θ) / g (2θ = 60°) යොදන්න.',
          },
          answer: {
            en: 'R = (400 · sin 60°) / 10 = 40 · (√3 / 2) ≈ 34.64 m.',
            si: 'R = (400 · sin 60°) / 10 = 40 · (√3 / 2) ≈ 34.64 m.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.5: Newton's Laws of Motion & Friction
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-5',
    slug: 'newton-laws-of-motion',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 5,
    syllabusRef: 'Competency 2.3',
    title: {
      en: 'Newton’s Laws of Motion & Friction',
      si: 'නිව්ටන්ගේ චලිත නියම සහ ඝර්ෂණය',
    },
    summary: {
      en: 'Inertia and inertial reference frames, rate of change of momentum (F = dp/dt = ma), action-reaction pairs, connected particles, and static/dynamic friction.',
      si: 'අවස්ථිතිය සහ අවස්ථිතික රාමු, ගම්‍යතාව වෙනස්වීමේ සීඝ්‍රතාව (F = dp/dt = ma), ක්‍රියා-ප්‍රතික්‍රියා යුගල, ඈඳූ අංශු, සහ ස්ථිතික/ගතික ඝර්ෂණය.',
    },
    learningObjectives: [
      {
        en: 'Formulate free-body force diagrams for single and connected masses on horizontal and inclined planes.',
        si: 'තිරස් හා ආනත තල මත තනි සහ ඈඳූ වස්තූන් සඳහා නිදහස් වස්තු රූප සටහන් නිර්මාණය කිරීම.',
      },
      {
        en: 'Apply laws of static and kinetic friction: F_limiting = μ_s R and F_kinetic = μ_k R.',
        si: 'සීමාකාරී සහ ගතික ඝර්ෂණ නීති යෙදීම: F_සීමාකාරී = μ_s R සහ F_ගතික = μ_k R.',
      },
    ],
    topicOutline: [
      { en: 'Newton’s First Law and inertial frames of reference', si: 'නිව්ටන්ගේ පළමු නියමය සහ අවස්ථිතික සමුද්දේශ රාමු' },
      { en: 'Newton’s Second Law: F = dp/dt = ma', si: 'නිව්ටන්ගේ දෙවන නියමය: F = dp/dt = ma' },
      { en: 'Newton’s Third Law: action-reaction pairs between distinct bodies', si: 'නිව්ටන්ගේ තෙවන නියමය: වෙනස් වස්තූන් දෙකක් අතර ක්‍රියා-ප්‍රතික්‍රියා යුගල' },
      { en: 'Friction: static coefficient μ_s and kinetic coefficient μ_k', si: 'ඝර්ෂණය: ස්ථිතික සංගුණකය μ_s සහ ගතික සංගුණකය μ_k' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Sir Isaac Newton formulated the three foundational laws governing classical dynamics, linking applied forces to changes in momentum and establishing the universal reciprocity of physical interactions.',
        si: 'ශ්‍රීමත් අයිසැක් නිව්ටන් සම්භාව්‍ය ගතිවිද්‍යාවේ මූලික නියම තුන ඉදිරිපත් කරමින්, යොදන බලය ගම්‍යතා වෙනස සමඟ සම්බන්ධ කළ අතර භෞතික අන්තර්ක්‍රියාවල විශ්වීය අන්‍යෝන්‍යභාවය තහවුරු කළේය.',
      },
      keyConcepts: [
        {
          title: { en: 'Newton’s Second Law (F = ma)', si: 'නිව්ටන්ගේ දෙවන නියමය' },
          description: {
            en: 'The net unbalanced external force equals the time rate of change of linear momentum: F_net = dp/dt = d(mv)/dt. For constant mass m: F_net = ma.',
            si: 'ශුද්ධ බාහිර බලය රේඛීය ගම්‍යතාව වෙනස්වීමේ සීඝ්‍රතාවට සමාන වේ: F_net = dp/dt = ma.',
          },
          formula: 'F_net = ma',
        },
        {
          title: { en: 'Laws of Solid Friction', si: 'ඝන ඝර්ෂණ නීති' },
          description: {
            en: '1. Limiting friction F_max is proportional to normal reaction: F_max = μ_s R.\n2. Kinetic friction F_k = μ_k R opposes relative motion and is generally less than limiting friction (μ_k < μ_s).',
            si: '1. සීමාකාරී ඝර්ෂණය අභිලම්බ ප්‍රතික්‍රියාවට සමානුපාතික වේ: F_max = μ_s R.\n2. ගතික ඝර්ෂණය F_k = μ_k R සාපේක්ෂ චලිතයට විරුද්ධ වන අතර සාමාන්‍යයෙන් සීමාකාරී ඝර්ෂණයට වඩා අඩුය (μ_k < μ_s).',
          },
          formula: 'F_max = μ_s R, F_k = μ_k R',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thinking action and reaction forces cancel each other out on the same body.',
            si: 'ක්‍රියා සහ ප්‍රතික්‍රියා බල එකම වස්තුවක් මත ක්‍රියාකර එකිනෙක අවලංගු වේ යැයි සිතීම.',
          },
          clarification: {
            en: 'Action and reaction forces ALWAYS act on TWO DIFFERENT BODIES (Body A on Body B, and Body B on Body A). They never cancel on a single isolated body.',
            si: 'ක්‍රියා සහ ප්‍රතික්‍රියා බල සැමවිටම ක්‍රියාකරන්නේ වෙනස් වස්තූන් දෙකක් මතය (A වස්තුව B මත, B වස්තුව A මත). එමනිසා ඒවා එකම වස්තුව මත අවලංගු නොවේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-5-1',
          question: {
            en: 'A 5 kg block on a rough horizontal table has static friction coefficient μ_s = 0.4. What minimum horizontal force in Newtons is required to start motion? (g = 9.8 m s⁻²).',
            si: 'රළු තිරස් මේසයක් මත ඇති 5 kg කුට්ටියක ස්ථිතික ඝර්ෂණ සංගුණකය μ_s = 0.4 වේ. චලනය ආරම්භ කිරීමට අවශ්‍ය අවම තිරස් බලය නිව්ටන් කීයද? (g = 9.8 m s⁻²).',
          },
          hint: {
            en: 'F_req = F_limiting = μ_s · mg.',
            si: 'F = μ_s · mg යොදන්න.',
          },
          answer: {
            en: 'F = 0.4 · (5 · 9.8) = 0.4 · 49 = 19.6 N.',
            si: 'F = 0.4 · (5 · 9.8) = 0.4 · 49 = 19.6 N.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.6: Equilibrium of Coplanar Forces
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-6',
    slug: 'equilibrium-of-forces',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 6,
    syllabusRef: 'Competency 2.4',
    title: {
      en: 'Equilibrium of Coplanar Forces',
      si: 'ඒකතල බලවල තුල්‍යතාව',
    },
    summary: {
      en: 'Translational equilibrium (ΣF = 0), Triangle of Forces, Polygon of Forces, Lami’s Theorem, and verification using Gravesande’s force board.',
      si: 'රේඛීය තුල්‍යතාව (ΣF = 0), බල ත්‍රිකෝණ නියමය, බල බහුඅස්‍ර නියමය, ලාමිගේ ප්‍රමේයය, සහ ග්‍රේව්සැන්ඩ් බල ලෑල්ල භාවිතයෙන් සත්‍යාපනය.',
    },
    learningObjectives: [
      {
        en: 'Apply equilibrium conditions (ΣF_x = 0, ΣF_y = 0) and Lami’s Theorem to systems of concurrent coplanar forces.',
        si: 'සමගාමී ඒකතල බල පද්ධති සඳහා තුල්‍යතා කොන්දේසි (ΣF_x = 0, ΣF_y = 0) සහ ලාමිගේ ප්‍රමේයය යෙදීම.',
      },
      {
        en: 'Understand the experimental protocol and parallax elimination techniques on Gravesande’s force board.',
        si: 'ග්‍රේව්සැන්ඩ් බල ලෑලි පරීක්ෂණයේ ක්‍රමවේදය සහ දෘෂ්ටි විලාස දෝෂ වැළැක්වීමේ ක්‍රම අවබෝධ කර ගැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Condition of translational equilibrium ΣF = 0', si: 'රේඛීය තුල්‍යතා කොන්දේසිය ΣF = 0' },
      { en: 'Triangle of Forces: closure of tip-to-tail vector polygon', si: 'බල ත්‍රිකෝණ නියමය: දෛශික බහුඅස්‍රය වැසීම' },
      { en: 'Lami’s Theorem for three coplanar concurrent forces', si: 'ඒකතල සමගාමී බල 3ක් සඳහා ලාමිගේ ප්‍රමේයය' },
      { en: 'Gravesande’s force board experimental procedure and error sources', si: 'ග්‍රේව්සැන්ඩ් බල ලෑලි පරීක්ෂණ ක්‍රමවේදය සහ දෝෂ ප්‍රභව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A particle is in static equilibrium when the resultant vector sum of all external forces acting upon it is zero. For three concurrent forces, the vector sum closes into a planar triangle, leading directly to the Triangle Law and Lami’s Theorem.',
        si: 'අංශුවක් මත ක්‍රියාකරන සියලු බාහිර බලවල සම්ප්‍රයුක්ත දෛශික එකතුව ශූන්‍ය වන විට එය ස්ථිතික තුල්‍යතාවයේ පවතී. සමගාමී බල 3ක් සඳහා මෙම දෛශික සංවෘත ත්‍රිකෝණයක් සාදයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Lami’s Theorem', si: 'ලාමිගේ ප්‍රමේයය' },
          description: {
            en: 'If three coplanar concurrent forces act on a body in equilibrium, each force magnitude is proportional to the sine of the angle between the other two forces: P / sin α = Q / sin β = R / sin γ.',
            si: 'තුල්‍යතාවයේ පවතින ඒකතල සමගාමී බල 3ක් සඳහා, එක් එක් බලයේ විශාලත්වය අනෙක් බල දෙක අතර කෝණයේ සයිනයට සමානුපාතික වේ: P / sin α = Q / sin β = R / sin γ.',
          },
          formula: 'P / sin α = Q / sin β = R / sin γ',
        },
        {
          title: { en: 'Gravesande’s Force Board Verification', si: 'ග්‍රේව්සැන්ඩ් බල ලෑල්ල' },
          description: {
            en: 'Forces P and Q suspended over frictionless pulleys balance counterweight R at knot O: resultant F_diag = √(P² + Q² + 2PQ cos θ) ≈ R.',
            si: 'කප්පි හරහා එල්ලා ඇති P සහ Q බල මඟින් මැද ගැටයේ ඇති R බර සමතුලිත කරයි: F_diag = √(P² + Q² + 2PQ cos θ) ≈ R.',
          },
          formula: 'F_diag = √(P² + Q² + 2PQ cos θ) = R',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Assuming three forces of magnitudes 10 N, 20 N, and 35 N can maintain static equilibrium.',
            si: '10 N, 20 N, සහ 35 N විශාලත්ව ඇති බල තුනකට තුල්‍යතාවයක් පවත්වාගත හැකි යැයි සිතීම.',
          },
          clarification: {
            en: 'By the triangle inequality, the sum of any two forces must be strictly greater than or equal to the third force (10 + 20 = 30 < 35). Thus they cannot form a closed triangle and cannot be in equilibrium.',
            si: 'ත්‍රිකෝණ අසමානතාවයට අනුව ඕනෑම බල දෙකක එකතුව තෙවන බලයට වඩා විශාල හෝ සමාන විය යුතුය (10 + 20 = 30 < 35). එබැවින් ඒවාට සංවෘත ත්‍රිකෝණයක් සෑදිය නොහැක.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-6-1',
          question: {
            en: 'On Gravesande’s force board, P = 300 g wt and Q = 400 g wt act at 90°. What balancing counterweight R in g wt is required?',
            si: 'ග්‍රේව්සැන්ඩ් බල ලෑල්ලක P = 300 g wt සහ Q = 400 g wt 90° කෝණයකින් ක්‍රියා කරයි. අවශ්‍ය සමතුලිත බර R කොපමණද?',
          },
          hint: {
            en: 'R = √(300² + 400²).',
            si: 'R = √(300² + 400²).',
          },
          answer: {
            en: 'R = √(90,000 + 160,000) = √250,000 = 500 g wt.',
            si: 'R = √(90,000 + 160,000) = √250,000 = 500 g wt.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.7: Moments, Couples & Metre Rule
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-7',
    slug: 'moments-and-couples',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 7,
    syllabusRef: 'Competency 2.2',
    title: {
      en: 'Moments, Couples & Metre Rule',
      si: 'ඝූර්ණ, බල යුග්ම සහ මීටර් රූල',
    },
    summary: {
      en: 'Principle of Moments, torque of a couple, centre of gravity, equilibrium of rigid bodies, and determining mass of a metre rule on a knife-edge.',
      si: 'ඝූර්ණ මූලධර්මය, බල යුග්මයක ව්‍යාවර්තය, ගුරුත්ව කේන්ද්‍රය, දෘඪ වස්තුවල තුල්‍යතාව, සහ පිහි දාරයක් මත මීටර් රූලක ස්කන්ධය සෙවීම.',
    },
    learningObjectives: [
      {
        en: 'State and apply the Principle of Moments to rigid levers, beams, and knife-edge balances.',
        si: 'දෘඪ ලීවර, බාල්ක සහ පිහි දාර තුලා සඳහා ඝූර්ණ මූලධර්මය ප්‍රකාශ කිරීම සහ යෙදීම.',
      },
      {
        en: 'Determine the mass and centre of gravity of a metre rule experimentally using unknown and known counterweights.',
        si: 'දන්නා සහ නොදන්නා බර භාවිතයෙන් මීටර් රූලක ස්කන්ධය සහ ගුරුත්ව කේන්ද්‍රය පරීක්ෂණාත්මකව නිර්ණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Moment of a force: τ = F × perpendicular distance d', si: 'බලයක ඝූර්ණය: τ = F × ලම්බ දුර d' },
      { en: 'Torque of a couple: τ = F × arm distance', si: 'බල යුග්මයක ව්‍යාවර්තය: τ = F × බාහු දුර' },
      { en: 'Principle of Moments: Στ_clockwise = Στ_anticlockwise', si: 'ඝූර්ණ මූලධර්මය: දක්ෂිණාවර්ත ඝූර්ණ = වාමාවර්ත ඝූර්ණ' },
      { en: 'Laboratory practical: determination of metre rule mass', si: 'ප්‍රායෝගික පරීක්ෂණය: මීටර් රූලේ ස්කන්ධය සෙවීම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'For an extended rigid body to remain in equilibrium, not only must linear forces sum to zero, but the rotational turning effects (moments) about any axis must also completely cancel out.',
        si: 'දෘඪ වස්තුවක් තුල්‍යතාවයේ පැවතීමට නම් රේඛීය බල පමණක් නොව, ඕනෑම අක්ෂයක් වටා භ්‍රමණ ඝූර්ණවල වීජීය ඓක්‍යයද ශූන්‍ය විය යුතුය.',
      },
      keyConcepts: [
        {
          title: { en: 'Principle of Moments', si: 'ඝූර්ණ මූලධර්මය' },
          description: {
            en: 'In rotational equilibrium, the sum of clockwise moments about any pivot equals the sum of anti-clockwise moments about that same pivot: Στ = 0.',
            si: 'භ්‍රමණ තුල්‍යතාවයේදී ඕනෑම ලක්ෂ්‍යයක් වටා දක්ෂිණාවර්ත ඝූර්ණවල එකතුව වාමාවර්ත ඝූර්ණවල එකතුවට සමාන වේ: Στ = 0.',
          },
          formula: 'Στ_clockwise = Στ_anticlockwise',
        },
        {
          title: { en: 'Metre Rule Mass Determination', si: 'මීටර් රූලේ ස්කන්ධය සෙවීම' },
          description: {
            en: 'Balancing a uniform metre rule off-center on a fulcrum at x_f with mass m_1 at x_1: m_1 · (x_f - x_1) = M_rule · (x_G - x_f) where x_G ≈ 50.0 cm.',
            si: '50 cm හි ගුරුත්ව කේන්ද්‍රය පිහිටි ඒකාකාර රූලක් x_f හි පිහි දාරයක x_1 හි m_1 ස්කන්ධයක් මඟින් සමතුලිත කළ විට: m_1 · (x_f - x_1) = M · (50 - x_f).',
          },
          formula: 'M_rule = m_1 · (x_f - x_1) / (x_G - x_f)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Forgetting that the weight of the metre rule itself exerts a moment when the fulcrum is not at 50 cm.',
            si: 'පිහි දාරය 50 cm හි නොමැති විට මීටර් රූලේ බර මඟින්ද ඝූර්ණයක් ඇති කරන බව අමතක කිරීම.',
          },
          clarification: {
            en: 'Whenever the fulcrum is displaced from the 50 cm mark, the rule’s own mass creates a significant restoring moment that must be included in the moment balance equation.',
            si: 'පිහි දාරය 50 cm සලකුණෙන් ඉවතට ගත් විට, රූලේම බර මඟින් ඝූර්ණයක් ඇති කරන බැවින් එය සමතුලිත සමීකරණයට ඇතුළත් කළ යුතුය.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-7-1',
          question: {
            en: 'A uniform metre rule balances at 40 cm when a 60 g mass is at 10 cm. Find the mass of the metre rule in grams.',
            si: '10 cm හි 60 g ස්කන්ධයක් එල්ලා ඇති විට ඒකාකාර මීටර් රූලක් 40 cm හි සමතුලිත වේ. රූලේ ස්කන්ධය ග්‍රෑම් වලින් සොයන්න.',
          },
          hint: {
            en: 'Rule weight acts at 50 cm: 60 · (40 - 10) = M · (50 - 40).',
            si: 'රූලේ බර 50 cm හි ක්‍රියා කරයි: 60 · 30 = M · 10.',
          },
          answer: {
            en: '1800 = 10 M ⇒ M = 180 g.',
            si: '1800 = 10 M ⇒ M = 180 g.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.8: Work, Energy, and Power
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-8',
    slug: 'work-energy-and-power',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 8,
    syllabusRef: 'Competency 2.5',
    title: {
      en: 'Work, Energy, and Power',
      si: 'කාර්යය, ශක්තිය සහ ක්ෂමතාව',
    },
    summary: {
      en: 'Work done by constant forces (W = F · s cos θ), work-energy theorem, gravitational and elastic potential energies, mechanical energy conservation, and power.',
      si: 'නියත බල මඟින් කෙරෙන කාර්යය (W = F · s cos θ), කාර්ය-ශක්ති ප්‍රමේයය, ගුරුත්වජ හා ප්‍රත්‍යාස්ථ විභව ශක්තීන්, යාන්ත්‍රික ශක්ති සංස්ථිතිය, සහ ක්ෂමතාව.',
    },
    learningObjectives: [
      {
        en: 'Calculate work done by forces inclined to displacement and understand zero-work scenarios.',
        si: 'විස්ථාපනයට ආනත බල මඟින් කෙරෙන කාර්යය ගණනය කිරීම සහ කාර්යය ශූන්‍ය වන අවස්ථා හඳුනා ගැනීම.',
      },
      {
        en: 'Apply conservation of mechanical energy (E_k + E_p = constant) to conservative gravitational and elastic systems.',
        si: 'සංස්ථිතික පද්ධති සඳහා යාන්ත්‍රික ශක්ති සංස්ථිතිය යෙදීම (E_k + E_p = නියතයකි).',
      },
    ],
    topicOutline: [
      { en: 'Work definition W = F · s · cos θ', si: 'කාර්යය අර්ථ දැක්වීම W = F · s · cos θ' },
      { en: 'Work-Energy Theorem: W_net = ΔE_k', si: 'කාර්ය-ශක්ති ප්‍රමේයය: W_net = ΔE_k' },
      { en: 'Gravitational potential energy (mgh) and elastic potential energy (½kx²)', si: 'ගුරුත්වජ විභව ශක්තිය (mgh) සහ ප්‍රත්‍යාස්ථ විභව ශක්තිය (½kx²)' },
      { en: 'Power as rate of work P = dW/dt = F · v', si: 'ක්ෂමතාව P = dW/dt = F · v' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Energy is the capacity to do mechanical work. Work quantifies energy transferred by a force acting over a displacement. In the absence of non-conservative dissipative forces like friction, total mechanical energy is conserved.',
        si: 'ශක්තිය යනු කාර්යය කිරීමේ හැකියාවයි. විස්ථාපනයක් ඔස්සේ ක්‍රියාකරන බලයක් මඟින් ශක්තිය සම්ප්‍රේෂණය කිරීම කාර්යය මඟින් මනිනු ලැබේ. ඝර්ෂණය වැනි හානිදායක බල නොමැති විට මුළු යාන්ත්‍රික ශක්තිය සංස්ථිතික වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Work-Energy Theorem', si: 'කාර්ය-ශක්ති ප්‍රමේයය' },
          description: {
            en: 'The net work done on an object by all forces equals the change in its kinetic energy: W_net = ΔE_k = ½m v² - ½m u².',
            si: 'වස්තුවක් මත කෙරෙන ශුද්ධ කාර්යය එහි චාලක ශක්ති වෙනසට සමාන වේ: W_net = ΔE_k = ½m v² - ½m u².',
          },
          formula: 'W_net = ½m v² - ½m u²',
        },
        {
          title: { en: 'Mechanical Power', si: 'යාන්ත්‍රික ක්ෂමතාව' },
          description: {
            en: 'Power is the time rate at which work is performed: P = W / t. When force F produces velocity v: P = F · v.',
            si: 'ක්ෂමතාව යනු කාර්යය කිරීමේ සීඝ්‍රතාවයි: P = W / t = F · v.',
          },
          formula: 'P = F · v',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing centripetal force does work on a particle in uniform circular motion.',
            si: 'ඒකාකාර වෘත්ත චලිතයේදී කේන්ද්‍රාභිසාරී බලය මඟින් කාර්යයක් කෙරේ යැයි සිතීම.',
          },
          clarification: {
            en: 'Centripetal force is always strictly perpendicular to instantaneous displacement (θ = 90°). Since cos 90° = 0, work done by centripetal force is IDENTICALLY ZERO.',
            si: 'කේන්ද්‍රාභිසාරී බලය සැමවිටම ක්ෂණික විස්ථාපනයට ලම්බක වේ (θ = 90°). cos 90° = 0 වන බැවින් කේන්ද්‍රාභිසාරී බලයෙන් කෙරෙන කාර්යය හරියටම ශූන්‍ය වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-8-1',
          question: {
            en: 'A crane lifts a 500 kg mass through a vertical height of 10 m in 5 seconds. Taking g = 9.8 m s⁻², calculate the useful power in Watts.',
            si: 'දොඹකරයක් මඟින් තත්පර 5 කදී 500 kg ස්කන්ධයක් 10 m උසකට ඔසවයි. g = 9.8 m s⁻² විට, ප්‍රයෝජනවත් ක්ෂමතාව වොට් වලින් සොයන්න.',
          },
          hint: {
            en: 'P = mgh / t.',
            si: 'P = mgh / t යොදන්න.',
          },
          answer: {
            en: 'P = (500 · 9.8 · 10) / 5 = 49,000 / 5 = 9800 W (9.8 kW).',
            si: 'P = (500 · 9.8 · 10) / 5 = 49,000 / 5 = 9800 W (9.8 kW).',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.9: Uniform Circular Motion
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-9',
    slug: 'circular-motion',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 9,
    syllabusRef: 'Competency 2.6',
    title: {
      en: 'Uniform Circular Motion',
      si: 'ඒකාකාර වෘත්ත චලිතය',
    },
    summary: {
      en: 'Angular kinematics (θ, ω), centripetal acceleration (a = v²/r = ω²r), centripetal force, banked roads, conical pendulum, and vertical circular motion.',
      si: 'කෝණික චාලක විද්‍යාව (θ, ω), කේන්ද්‍රාභිසාරී ත්වරණය (a = v²/r = ω²r), කේන්ද්‍රාභිසාරී බලය, බැංකුගත මාර්ග, කේතු ලෝලකය, සහ සිරස් වෘත්ත චලිතය.',
    },
    learningObjectives: [
      {
        en: 'Relate linear velocity to angular velocity (v = rω) and centripetal acceleration (a = v²/r).',
        si: 'රේඛීය ප්‍රවේගය කෝණික ප්‍රවේගය හා කේන්ද්‍රාභිසාරී ත්වරණය සමඟ සම්බන්ධ කිරීම (v = rω, a = v²/r).',
      },
      {
        en: 'Analyze banking angle conditions on curved roads (tan θ = v² / rg) and critical speed in a vertical loop.',
        si: 'බැංකුගත මාර්ග සඳහා කෝණ කොන්දේසි (tan θ = v² / rg) සහ සිරස් වෘත්තයක අවධි වේගය විශ්ලේෂණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Angular displacement θ and angular speed ω = dθ/dt', si: 'කෝණික විස්ථාපනය θ සහ කෝණික ප්‍රවේගය ω' },
      { en: 'Centripetal acceleration derivation a_c = v²/r = ω²r', si: 'කේන්ද්‍රාභිසාරී ත්වරණය ව්‍යුත්පන්න කිරීම' },
      { en: 'Banked roadway design for friction-free curving: tan θ = v²/rg', si: 'බැංකුගත මාර්ග නිර්මාණය: tan θ = v²/rg' },
      { en: 'Motion in a vertical circle: critical apex speed v_min = √(gr)', si: 'සිරස් වෘත්ත චලිතය: අවම අවධි වේගය v_min = √(gr)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'An object moving along a circular path of radius r at constant speed v experiences continuous inward directional change. This centripetal acceleration requires a real net inward centripetal force to sustain rotation.',
        si: 'r අරයැති වෘත්තාකාර පථයක v නියත වේගයෙන් ගමන් කරන වස්තුවක ප්‍රවේග දිශාව නිරන්තරයෙන් කේන්ද්‍රය දෙසට හැරේ. මෙම කේන්ද්‍රාභිසාරී ත්වරණය පවත්වා ගැනීමට කේන්ද්‍රය දෙසට ශුද්ධ කේන්ද්‍රාභිසාරී බලයක් අවශ්‍ය වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Centripetal Acceleration & Force', si: 'කේන්ද්‍රාභිසාරී ත්වරණය සහ බලය' },
          description: {
            en: 'Acceleration is directed towards the circle center: a_c = v² / r = ω² r. Centripetal force: F_c = m v² / r = m ω² r.',
            si: 'ත්වරණය කේන්ද්‍රය දෙසට යොමු වේ: a_c = v² / r = ω² r. කේන්ද්‍රාභිසාරී බලය: F_c = m v² / r = m ω² r.',
          },
          formula: 'F_c = m v² / r = m ω² r',
        },
        {
          title: { en: 'Banking of Curved Roads', si: 'මාර්ග බැංකුගත කිරීම' },
          description: {
            en: 'To prevent vehicles skidding without relying on tire friction, roads are banked at angle θ: tan θ = v² / (rg).',
            si: 'ටයර් ඝර්ෂණය මත රඳා නොපවතින සේ වාහන ලිස්සා යාම වැළැක්වීමට මාර්ග θ කෝණයකින් බැංකුගත කෙරේ: tan θ = v² / (rg).',
          },
          formula: 'tan θ = v² / (rg)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Treating "centrifugal force" as a real physical force acting on an object in an inertial frame.',
            si: 'අවස්ථිතික රාමුවක් තුළ "කේන්ද්‍රාපසාරී බලය" සැබෑ භෞතික බලයක් ලෙස සැලකීම.',
          },
          clarification: {
            en: 'In an inertial frame of reference, only the inward centripetal force exists. Centrifugal force is a fictitious pseudo-force that arises only in the rotating non-inertial reference frame.',
            si: 'අවස්ථිතික සමුද්දේශ රාමුවක ඇත්තේ කේන්ද්‍රය දෙසට යොමුවූ කේන්ද්‍රාභිසාරී බලය පමණි. කේන්ද්‍රාපසාරී බලය යනු භ්‍රමණය වන රාමුවකදී පමණක් සලකනු ලබන ව්‍යාජ බලයකි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-9-1',
          question: {
            en: 'A stone tied to a string of length 0.9 m rotates in a vertical circle. Taking g = 10 m s⁻², what is the critical minimum speed in m s⁻¹ at the highest point?',
            si: '0.9 m දිග නූලක ගැටගැසූ ගලක් සිරස් වෘත්තයක කරකවයි. g = 10 m s⁻² විට, ඉහළම ලක්ෂ්‍යයේ අවම අවධි වේගය m s⁻¹ වලින් සොයන්න.',
          },
          hint: {
            en: 'v_crit = √(rg).',
            si: 'v_crit = √(rg) යොදන්න.',
          },
          answer: {
            en: 'v = √(0.9 · 10) = √9 = 3.0 m s⁻¹.',
            si: 'v = √(0.9 · 10) = √9 = 3.0 m s⁻¹.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.10: Rotational Dynamics & Moment of Inertia
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-10',
    slug: 'rotational-dynamics',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 10,
    syllabusRef: 'Competency 2.6',
    title: {
      en: 'Rotational Dynamics & Moment of Inertia',
      si: 'භ්‍රමණ ගතිවිද්‍යාව සහ අවස්ථිති ඝූර්ණය',
    },
    summary: {
      en: 'Torque (τ), moment of inertia (I), rotational Newton’s law (τ = Iα), angular momentum conservation (L = Iω), and rolling kinetic energy.',
      si: 'ව්‍යාවර්තය (τ), අවස්ථිති ඝූර්ණය (I), භ්‍රමණ නිව්ටන් නියමය (τ = Iα), කෝණික ගම්‍යතා සංස්ථිතිය (L = Iω), සහ පෙරළුම් චාලක ශක්තිය.',
    },
    learningObjectives: [
      {
        en: 'State and apply the rotational analogue of Newton’s second law: τ = I α.',
        si: 'නිව්ටන්ගේ දෙවන නියමයේ භ්‍රමණ සමරූපය යෙදීම: τ = I α.',
      },
      {
        en: 'Apply conservation of angular momentum to isolated rotating systems (e.g. spinning figure skater, collapsing star).',
        si: 'භ්‍රමණය වන හුදකලා පද්ධති සඳහා කෝණික ගම්‍යතා සංස්ථිතිය යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of torque τ = r × F and angular acceleration α', si: 'ව්‍යාවර්තය τ = r × F සහ කෝණික ත්වරණය α' },
      { en: 'Moment of inertia I = Σ m_i r_i² of continuous and discrete bodies', si: 'දෘඪ වස්තුවල අවස්ථිති ඝූර්ණය I = Σ m_i r_i²' },
      { en: 'Rotational kinetic energy E_rot = ½ I ω²', si: 'භ්‍රමණ චාලක ශක්තිය E_rot = ½ I ω²' },
      { en: 'Conservation of angular momentum L = I ω', si: 'කෝණික ගම්‍යතා සංස්ථිතිය L = I ω' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Rotational dynamics parallels translational mechanics: torque replaces force, moment of inertia replaces mass, angular velocity replaces linear velocity, and angular momentum replaces linear momentum.',
        si: 'භ්‍රමණ ගතිවිද්‍යාව රේඛීය යාන්ත්‍ර විද්‍යාවට සමාන්තර වේ: බලය වෙනුවට ව්‍යාවර්තයද, ස්කන්ධය වෙනුවට අවස්ථිති ඝූර්ණයද, රේඛීය ප්‍රවේගය වෙනුවට කෝණික ප්‍රවේගයද, රේඛීය ගම්‍යතාව වෙනුවට කෝණික ගම්‍යතාවද ආදේශ වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Rotational Newton’s Law', si: 'භ්‍රමණ නිව්ටන් නියමය' },
          description: {
            en: 'Applied torque causes angular acceleration: τ = I · α, where I is moment of inertia.',
            si: 'යොදන ලද ව්‍යාවර්තය මඟින් කෝණික ත්වරණයක් ඇති කරයි: τ = I · α.',
          },
          formula: 'τ = I · α',
        },
        {
          title: { en: 'Conservation of Angular Momentum', si: 'කෝණික ගම්‍යතා සංස්ථිතිය' },
          description: {
            en: 'When net external torque is zero (Στ_ext = 0), total angular momentum remains constant: I₁ ω₁ = I₂ ω₂.',
            si: 'බාහිර ව්‍යාවර්තය ශූන්‍ය වන විට මුළු කෝණික ගම්‍යතාව නියතව පවතී: I₁ ω₁ = I₂ ω₂.',
          },
          formula: 'L = I · ω = \text{constant}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing moment of inertia depends only on total mass.',
            si: 'අවස්ථිති ඝූර්ණය මුළු ස්කන්ධය මත පමණක් රඳා පවතී යැයි සිතීම.',
          },
          clarification: {
            en: 'Moment of inertia depends heavily on HOW mass is distributed relative to the axis of rotation (I ∝ m r²). A hollow cylinder has twice the moment of inertia of a solid cylinder of the same mass and radius.',
            si: 'අවස්ථිති ඝූර්ණය භ්‍රමණ අක්ෂයට සාපේක්ෂව ස්කන්ධය විසිරී ඇති ආකාරය මත තදින් රඳා පවතී (I ∝ m r²). එකම ස්කන්ධය හා අරය ඇති කුහර සිලින්ඩරයක අවස්ථිති ඝූර්ණය ඝන සිලින්ඩරය මෙන් දෙගුණයකි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-10-1',
          question: {
            en: 'A constant torque of 20 N m is applied to a flywheel of moment of inertia 5.0 kg m². What angular acceleration in rad s⁻² does it produce?',
            si: 'අවස්ථිති ඝූර්ණය 5.0 kg m² වූ ජව රෝදයක් මත 20 N m ක ව්‍යාවර්තයක් යොදයි. එය ලබන කෝණික ත්වරණය rad s⁻² වලින් ගණනය කරන්න.',
          },
          hint: {
            en: 'α = τ / I.',
            si: 'α = τ / I යොදන්න.',
          },
          answer: {
            en: 'α = 20 / 5.0 = 4.0 rad s⁻².',
            si: 'α = 20 / 5.0 = 4.0 rad s⁻².',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.11: Fluid Statics, U-Tubes & Hydrometry
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-11',
    slug: 'fluid-statics',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 11,
    syllabusRef: 'Competency 2.7 & 2.8',
    title: {
      en: 'Fluid Statics, U-Tubes & Hydrometry',
      si: 'තරල ස්ථිති විද්‍යාව, U-නළ සහ ආරාවලි',
    },
    summary: {
      en: 'Hydrostatic pressure (P = hρg), Pascal’s principle, Archimedes’ upthrust, law of flotation, U-tube manometers, Hare’s apparatus, and loaded test tube hydrometers.',
      si: 'ජලස්ථිතික පීඩනය (P = hρg), පැස්කල්ගේ මූලධර්මය, ආකිමිඩීස්ගේ උඩුකුරු තෙරපුම, පාවීමේ නියමය, U-නළ, හේයාර් උපකරණය, සහ පරීක්ෂණ නළ ආරාවලි.',
    },
    learningObjectives: [
      {
        en: 'Calculate hydrostatic head pressure and understand the hydrostatic paradox.',
        si: 'ජලස්ථිතික පීඩන ශීර්ෂය ගණනය කිරීම සහ ජලස්ථිතික විරෝධාභාසය තේරුම් ගැනීම.',
      },
      {
        en: 'Apply equilibrium conditions to U-tube immiscible manometers and Hare’s apparatus slope analysis.',
        si: 'U-නළ මනෝමීටර සහ හේයාර්ගේ උපකරණයේ ප්‍රස්ථාරික බෑවුම මඟින් සාපේක්ෂ ඝනත්වය සෙවීම.',
      },
    ],
    topicOutline: [
      { en: 'Hydrostatic pressure P = h · ρ · g and atmospheric pressure P₀', si: 'ජලස්ථිතික පීඩනය P = h · ρ · g සහ වායුගෝලීය පීඩනය P₀' },
      { en: 'Pascal’s Principle: hydraulic lift multiplication F₁/A₁ = F₂/A₂', si: 'පැස්කල්ගේ මූලධර්මය: හයිඩ්‍රොලික් යන්ත්‍ර F₁/A₁ = F₂/A₂' },
      { en: 'Archimedes’ principle and upthrust U = V_disp · ρ_fluid · g', si: 'ආකිමිඩීස් මූලධර්මය සහ උඩුකුරු තෙරපුම' },
      { en: 'Law of flotation and hydrometer calibration', si: 'පාවීමේ නියමය සහ ආරාවලි පරිමාණනය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Fluid statics governs fluids at rest. The weight of fluid columns exerts pressure uniformly in all directions at a given depth. Immersed objects experience an upward buoyant upthrust equal to the weight of fluid displaced.',
        si: 'තරල ස්ථිති විද්‍යාව නිශ්චල තරල ආශ්‍රිත හැසිරීම් අධ්‍යයනය කරයි. ගැඹුර සමඟ පීඩනය වැඩි වන අතර ද්‍රවයක ගිල්වූ වස්තුවක් මත විස්ථාපිත ද්‍රවයේ බරට සමාන උඩුකුරු තෙරපුමක් ක්‍රියා කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Hydrostatic Pressure & Datum Line', si: 'ජලස්ථිතික පීඩනය සහ සමුද්දේශ මට්ටම' },
          description: {
            en: 'Pressure at depth h in liquid of density ρ is P = P₀ + hρg. In a U-tube, equal pressure across a horizontal plane through the lower interface gives h₁ ρ₁ = h₂ ρ₂.',
            si: 'h ගැඹුරකදී පීඩනය P = P₀ + hρg වේ. U-නළයක අතුරුමුහුණත හරහා යන තිරස් සමුද්දේශ මට්ටමේදී පීඩන සමානතාවයෙන් h₁ ρ₁ = h₂ ρ₂ ලැබේ.',
          },
          formula: 'P = P₀ + hρg, h₁ ρ₁ = h₂ ρ₂',
        },
        {
          title: { en: 'Law of Flotation', si: 'පාවීමේ නියමය' },
          description: {
            en: 'A freely floating body displaces its own weight of fluid: M_body · g = (A · h) · ρ_liquid · g ⇒ M = (A · ρ) · h.',
            si: 'නිදහසේ පාවෙන වස්තුවක් තම බරට සමාන ද්‍රව බරක් විස්ථාපනය කරයි: M = (A · ρ) · h.',
          },
          formula: 'M = (A · ρ_L) · h',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing pressure at the bottom of a container depends on the total volume or shape of the container.',
            si: 'බඳුනක පතුලේ පීඩනය බඳුනේ මුළු පරිමාව හෝ හැඩය මත රඳා පවතී යැයි සිතීම.',
          },
          clarification: {
            en: 'Hydrostatic pressure depends solely on vertical liquid depth h, liquid density ρ, and gravity g (P = hρg). Container shape or total volume is completely irrelevant (the Hydrostatic Paradox).',
            si: 'ජලස්ථිතික පීඩනය රඳා පවතින්නේ සිරස් ගැඹුර h, ඝනත්වය ρ සහ ගුරුත්වය g මත පමණි (ජලස්ථිතික විරෝධාභාසය). බඳුනේ හැඩය හෝ මුළු පරිමාව බලනොපායි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-mech-2-11-1',
          question: {
            en: 'In a U-tube, an oil column of height 20 cm is balanced by a 16 cm column of water. What is the relative density of the oil?',
            si: 'U-නළයක 20 cm තෙල් කඳක් 16 cm ජල කඳක් මඟින් සමතුලිත වේ. තෙල්වල සාපේක්ෂ ඝනත්වය කොපමණද?',
          },
          hint: {
            en: 'RD = h_w / h_oil.',
            si: 'සාපේක්ෂ ඝනත්වය = h_w / h_oil.',
          },
          answer: {
            en: 'RD = 16 / 20 = 0.80.',
            si: 'සාපේක්ෂ ඝනත්වය = 16 / 20 = 0.80.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.12: Practical Laboratory Investigations (Hub)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-12',
    slug: 'practical-investigations',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 12,
    syllabusRef: 'NIE Practical Handbook (Practicals 2.1 – 2.5)',
    title: {
      en: 'Practical Laboratory Investigations',
      si: 'ප්‍රායෝගික රසායනාගාර පරීක්ෂණ',
    },
    summary: {
      en: 'Interactive virtual laboratory covering all 5 official NIE A/L Physics syllabus practicals for Unit 2: (1) Force Parallelogram & Triangle, (2) Principle of Moments & Metre Rule, (3) U-Tube Immiscible Liquids, (4) Hare’s Apparatus & Slope, (5) Loaded Test Tube Flotation.',
      si: 'ජාතික අධ්‍යාපන ආයතන (NIE) ඒකක 2 සඳහා නියමිත නිල ප්‍රායෝගික පරීක්ෂණ 5: (1) බල සමාන්තරාස්‍රය සහ ත්‍රිකෝණය, (2) ඝූර්ණ මූලධර්මය සහ මීටර් රූල, (3) U-නළය (මිශ්‍ර නොවන ද්‍රව), (4) හේයාර් උපකරණය සහ බෑවුම, (5) පරීක්ෂණ නළය (පාවීමේ නියමය).',
    },
    learningObjectives: [
      {
        en: 'Execute virtual laboratory trials, tabulate experimental readings, and evaluate systematic uncertainties.',
        si: 'ප්‍රායෝගික පරීක්ෂණ අත්හදා බැලීම් සිදු කිරීම, නිරීක්ෂණ සටහන් කිරීම සහ ක්‍රමානුකූල අවිනිශ්චිතතා ඇගයීම.',
      },
      {
        en: 'Perform least-squares linear slope analysis in Hare’s apparatus and loaded hydrometer flotation experiments.',
        si: 'හේයාර් උපකරණය සහ පාවෙන පරීක්ෂණ නළ පරීක්ෂණ සඳහා ප්‍රස්ථාරික බෑවුම් විශ්ලේෂණය යෙදීම.',
      },
      {
        en: 'Generate printable laboratory record sheets with percentage discrepancy calculations.',
        si: 'ප්‍රතිශත වෙනස ගණනය කර මුද්‍රණය කළ හැකි රසායනාගාර වාර්තා සටහන් සකස් කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Practical 1: Verification of Force Parallelogram & Triangle Laws on Gravesande board', si: 'ප්‍රායෝගික පරීක්ෂණය 1: ග්‍රේව්සැන්ඩ් ලෑල්ලේ බල සමාන්තරාස්‍ර සහ ත්‍රිකෝණ නීති සත්‍යාපනය' },
      { en: 'Practical 2: Principle of Moments & determination of Metre Rule mass', si: 'ප්‍රායෝගික පරීක්ෂණය 2: ඝූර්ණ මූලධර්මය සහ මීටර් රූලේ ස්කන්ධය සෙවීම' },
      { en: 'Practical 3: U-Tube determination of Relative Density of an immiscible liquid', si: 'ප්‍රායෝගික පරීක්ෂණය 3: U-නළය භාවිතයෙන් මිශ්‍ර නොවන ද්‍රවයක සාපේක්ෂ ඝනත්වය සෙවීම' },
      { en: 'Practical 4: Hare’s Apparatus determination of Relative Density via linear graph slope', si: 'ප්‍රායෝගික පරීක්ෂණය 4: හේයාර් උපකරණය සහ ප්‍රස්ථාරික බෑවුමෙන් සාපේක්ෂ ඝනත්වය සෙවීම' },
      { en: 'Practical 5: Principle of Flotation & Loaded Test Tube Hydrometer', si: 'ප්‍රායෝගික පරීක්ෂණය 5: පාවීමේ නියමය සහ බර යෙදූ පරීක්ෂණ නළ ආරාවලිය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'mechanics-practicals',
    content: {
      introduction: {
        en: 'Laboratory practical work is essential for mastering physics. This interactive laboratory provides hands-on simulated environments for all 5 official NIE Grade 12 Mechanics practicals, complete with dynamic schematics, interactive data entry tables, linear regression plots, and printable records.',
        si: 'භෞතික විද්‍යාව ප්‍රගුණ කිරීමට ප්‍රායෝගික පරීක්ෂණ අත්‍යවශ්‍ය වේ. මෙම අන්තර්ක්‍රියාකාරී පරිසරය තුළ නිල NIE 12 ශ්‍රේණියේ යාන්ත්‍ර විද්‍යාව පරීක්ෂණ 5 සඳහාම උපකරණ සටහන්, දත්ත සටහන්, ප්‍රස්ථාරික ප්‍රතිගාමන සහ මුද්‍රණය කළ හැකි වාර්තා ඇතුළත් වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Practical 1: Gravesande Board', si: 'පරීක්ෂණය 1: ග්‍රේව්සැන්ඩ් බල ලෑල්ල' },
          description: {
            en: 'Verify F_diag = √(P² + Q² + 2PQ cos θ) ≈ R. Eliminate pulley axle friction by gentle tapping; eliminate parallax using a plane mirror strip.',
            si: 'F_diag = √(P² + Q² + 2PQ cos θ) ≈ R සත්‍යාපනය. ලෑල්ලට මෘදුව තට්ටු කර ඝර්ෂණය අවම කරන්න; දර්පණ පටියකින් දෘෂ්ටි විලාස දෝෂය ඉවත් කරන්න.',
          },
        },
        {
          title: { en: 'Practical 2: Principle of Moments', si: 'පරීක්ෂණය 2: ඝූර්ණ මූලධර්මය' },
          description: {
            en: 'Balance metre rule on knife edge. m_1 · (x_f - x_1) = M_rule · (50 - x_f). Verify across multiple fulcrum positions.',
            si: 'පිහි දාරය මත මීටර් රූල තුලනය කරන්න. m_1 · (x_f - x_1) = M · (50 - x_f) මඟින් ස්කන්ධය ලබාගන්න.',
          },
        },
        {
          title: { en: 'Practical 3: U-Tube Immiscible Liquids', si: 'පරීක්ෂණය 3: U-නළය' },
          description: {
            en: 'Hydrostatic pressure balance at horizontal datum plane through the interface: h_L · ρ_L = h_w · ρ_w ⇒ RD = h_w / h_L.',
            si: 'අතුරුමුහුණතේ සමුද්දේශ මට්ටමේදී ජලස්ථිතික පීඩන සමානතාව: h_L · ρ_L = h_w · ρ_w ⇒ සාපේක්ෂ ඝනත්වය = h_w / h_L.',
          },
        },
        {
          title: { en: 'Practical 4: Hare’s Apparatus', si: 'පරීක්ෂණය 4: හේයාර්ගේ උපකරණය' },
          description: {
            en: 'Plot water height h_w vs liquid height h_L: straight line through origin with slope m = ρ_L / ρ_w. Liquids remain isolated in separate beakers.',
            si: 'h_L ට එදිරිව h_w ප්‍රස්ථාරගත කරන්න: මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවේ බෑවුම m = ρ_L / ρ_w වේ. ද්‍රව එකිනෙක මිශ්‍ර නොවේ.',
          },
        },
        {
          title: { en: 'Practical 5: Loaded Test Tube Hydrometer', si: 'පරීක්ෂණය 5: පරීක්ෂණ නළ ආරාවලිය' },
          description: {
            en: 'Total mass M vs immersion depth h: M = (A · ρ) · h. Slope m = A · ρ. External area A = π(d/2)².',
            si: 'මුළු ස්කන්ධය M ට එදිරිව ගැඹුර h: M = (A · ρ) · h. බෑවුම m = A · ρ. බාහිර වර්ගඵලය A = π(d/2)².',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 2.13: Unit 2 Comprehensive Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-2-13',
    slug: 'unit-assessment',
    unitSlug: 'mechanics',
    unitOrder: 2,
    lessonOrder: 13,
    syllabusRef: 'Competencies 2.1 – 2.8',
    title: {
      en: 'Unit 2 Comprehensive Assessment',
      si: 'ඒකක 2 පුළුල් ඇගයීම් පරීක්ෂණය',
    },
    summary: {
      en: 'Summative 20-question randomized evaluation testing all 8 mechanics competencies (2.1 to 2.8) with instant grading, physical explanations, and targeted lesson recap links.',
      si: 'විෂය නිර්දේශයේ නිපුණතා 8 ම (2.1 සිට 2.8) ආවරණය වන ප්‍රශ්න 20 කින් යුත් සාරාංශ ඇගයීම, ක්ෂණික ලකුණු ලබාදීම, විද්‍යාත්මක පැහැදිලි කිරීම් සහ පාඩම් සමාලෝචන සබැඳි.',
    },
    learningObjectives: [
      {
        en: 'Synthesize concepts across all 8 mechanics competencies under exam-style conditions.',
        si: 'යාන්ත්‍ර විද්‍යාව ඒකකයේ සියලු නිපුණතා 8 ඒකාබද්ධ කර විභාග මට්ටමේ ගැටලු විසඳීම.',
      },
      {
        en: 'Assess individual mastery across each competency to identify areas requiring targeted revision.',
        si: 'තමන්ගේ ප්‍රගතිය නිපුණතා මට්ටමින් ස්වයං ඇගයීම කර සංශෝධන අවශ්‍ය ක්ෂේත්‍ර හඳුනා ගැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Competency 2.1: Kinematics & Linear Graphs', si: 'නිපුණතාව 2.1: චාලිතය සහ රේඛීය ප්‍රස්ථාර' },
      { en: 'Competency 2.2: 2D Projectile Motion', si: 'නිපුණතාව 2.2: 2D ප්‍රක්ෂේප්‍ය චලනය' },
      { en: 'Competency 2.3: Dynamics & Momentum', si: 'නිපුණතාව 2.3: ගතිවිද්‍යාව සහ ගම්‍යතාව' },
      { en: 'Competency 2.4: Equilibrium of Coplanar Forces (Force Board)', si: 'නිපුණතාව 2.4: ඒකතල බල තුල්‍යතාව (බල ලෑල්ල)' },
      { en: 'Competency 2.5: Moments, Couples & Metre Rule', si: 'නිපුණතාව 2.5: ඝූර්ණ, බල යුග්ම සහ මීටර් රූල' },
      { en: 'Competency 2.6: Work, Energy & Power', si: 'නිපුණතාව 2.6: කාර්යය, ශක්තිය සහ ක්ෂමතාව' },
      { en: 'Competency 2.7: Circular Motion & Hydrostatics (U-Tube, Hare’s Apparatus)', si: 'නිපුණතාව 2.7: වෘත්ත චලිතය සහ ජලස්ථිතික විද්‍යාව (U-නළය, හේයාර් උපකරණය)' },
      { en: 'Competency 2.8: Rotational Dynamics & Flotation (Hydrometer)', si: 'නිපුණතාව 2.8: භ්‍රමණ ගතිවිද්‍යාව සහ පාවීමේ නියමය (ආරාවලිය)' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'mechanics-assessment',
  },
];
