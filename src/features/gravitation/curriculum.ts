import { LessonDefinition } from '@/shared/curriculum/types';

export const GRAVITATION_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 5.1: Universal Gravitation and Field Intensity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-1',
    slug: 'universal-gravitation-and-field-intensity',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 1,
    syllabusRef: 'Competency 5.1',
    title: {
      en: 'Universal Gravitation and Field Intensity',
      si: 'සර්වත්‍ර ගුරුත්වාකර්ෂණය සහ ක්ෂේත්‍ර තීව්‍රතාව',
    },
    summary: {
      en: 'Newton’s Law of Universal Gravitation, Cavendish experiment, gravitational field intensity g, variations with altitude h, depth d, and Earth rotation, and neutral points between masses.',
      si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය, කැවෙන්ඩිෂ් පරීක්ෂණය, ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g, උන්නතාංශය h, ගැඹුර d සහ පෘථිවි භ්‍රමණය අනුව සිදුවන විචලන, සහ ස්කන්ධ අතර උදාසීන ලක්ෂ්‍ය.',
    },
    learningObjectives: [
      {
        en: 'State and apply Newton’s Universal Law of Gravitation (F = G m₁m₂ / r²) to point masses and spherical celestial bodies.',
        si: 'ලක්ෂ්‍යමය ස්කන්ධ සහ ගෝලීය ආකාශ වස්තු සඳහා නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය (F = G m₁m₂ / r²) ප්‍රකාශ කිරීම සහ යෙදීම.',
      },
      {
        en: 'Define gravitational field strength g = F/m and deduce its variations above the surface (g_h), beneath the surface (g_d), and across latitudes.',
        si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g = F/m අර්ථ දැක්වීම සහ පෘෂ්ඨයෙන් ඉහළ (g_h), පෘෂ්ඨයෙන් පහළ (g_d) සහ අක්ෂාංශ ඔස්සේ එහි විචලනය ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Determine the location of neutral points between two celestial bodies (such as Earth and Moon) where net gravitational field strength vanishes.',
        si: 'ශුද්ධ ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව ශුන්‍ය වන ආකාශ වස්තු දෙකක් (පෘථිවිය සහ චන්ද්‍රයා වැනි) අතර උදාසීන ලක්ෂ්‍යයේ පිහිටීම ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Newton’s Law of Universal Gravitation and the inverse-square law', si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය සහ ප්‍රතිලෝම වර්ග නියමය' },
      { en: 'Measurement of G and Newton’s Shell Theorem for spherical masses', si: 'G මැනීම සහ ගෝලීය ස්කන්ධ සඳහා නිව්ටන්ගේ කවච ප්‍රමේයය' },
      { en: 'Gravitational field strength g = GM/r² and surface value g₀ ≈ 9.8 m s⁻²', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g = GM/r² සහ පෘෂ්ඨික අගය g₀ ≈ 9.8 m s⁻²' },
      { en: 'Variation of g with altitude: g_h = g₀ [R / (R + h)]²', si: 'උන්නතාංශය සමග g හි විචලනය: g_h = g₀ [R / (R + h)]²' },
      { en: 'Variation of g with depth: g_d = g₀ (1 - d/R)', si: 'ගැඹුර සමග g හි විචලනය: g_d = g₀ (1 - d/R)' },
      { en: 'Effects of Earth’s oblate shape and diurnal rotation on effective g', si: 'පෘථිවියේ ඉලිප්සාකාර හැඩය සහ දෛනික භ්‍රමණය ඵලදායී g කෙරෙහි බලපාන ආකාරය' },
      { en: 'Neutral point calculation between two masses', si: 'ස්කන්ධ දෙකක් අතර උදාසීන ලක්ෂ්‍ය ගණනය කිරීම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Gravitation is the universal attractive force acting between all matter in the universe. Isaac Newton formulated that every mass attracts every other mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.',
        si: 'ගුරුත්වාකර්ෂණය යනු විශ්වයේ සියලු පදාර්ථ අතර ක්‍රියාත්මක වන සර්වත්‍ර ආකර්ෂණ බලයයි. අයිසැක් නිව්ටන් විසින් පෙන්වා දුන්නේ ඕනෑම ස්කන්ධ දෙකක් අතර ආකර්ෂණ බලය ඒවායේ ස්කන්ධයන්ගේ ගුණිතයට සමානුපාතික වන අතර කේන්ද්‍ර අතර දුරෙහි වර්ගයට ප්‍රතිලෝමව සමානුපාතික වන බවයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Newton’s Universal Law of Gravitation', si: 'නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය' },
          description: {
            en: 'The mutual attractive force F between two point masses m₁ and m₂ separated by center-to-center distance r is F = G (m₁ m₂) / r², where G = 6.674 × 10⁻¹¹ N m² kg⁻².',
            si: 'කේන්ද්‍ර අතර දුර r වූ m₁ සහ m₂ ලක්ෂ්‍යමය ස්කන්ධ දෙකක් අතර අන්‍යෝන්‍ය ආකර්ෂණ බලය F = G (m₁ m₂) / r² වේ. මෙහි G = 6.674 × 10⁻¹¹ N m² kg⁻² වේ.',
          },
          formula: 'F = G \\frac{m_1 m_2}{r^2}',
        },
        {
          title: { en: 'Gravitational Field Strength (Intensity)', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව' },
          description: {
            en: 'The force experienced per unit mass placed at a point in the field: g = F/m = GM/r² (radially inward towards center of mass).',
            si: 'ක්ෂේත්‍රයේ ලක්ෂ්‍යයක තබන ලද ඒකක ස්කන්ධයක් මත ක්‍රියා කරන ගුරුත්වාකර්ෂණ බලය: g = F/m = GM/r² (අරීයව ස්කන්ධ කේන්ද්‍රය දෙසට).',
          },
          formula: 'g = \\frac{GM}{r^2}',
        },
        {
          title: { en: 'Variation with Altitude and Depth', si: 'උන්නතාංශය සහ ගැඹුර සමග විචලනය' },
          description: {
            en: 'Above surface: g_h = g₀ [R / (R + h)]². Inside uniform sphere at depth d: g_d = g₀ (1 - d/R). At Earth’s center, g = 0.',
            si: 'පෘෂ්ඨයට ඉහළින්: g_h = g₀ [R / (R + h)]². ඒකාකාර ගෝලයක් තුළ d ගැඹුරකදී: g_d = g₀ (1 - d/R). පෘථිවි කේන්ද්‍රයේදී g = 0 වේ.',
          },
          formula: 'g_h = g_0 \\left(\\frac{R}{R+h}\\right)^2, \\quad g_d = g_0 \\left(1 - \\frac{d}{R}\\right)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Gravitational acceleration g is a fundamental constant that never changes anywhere on Earth.',
            si: 'ගුරුත්වාකර්ෂණ ත්වරණය g යනු පෘථිවියේ කොතැනකවත් වෙනස් නොවන මූලික නියතයකි.',
          },
          clarification: {
            en: 'g varies with altitude (decreases with height), depth (decreases linearly towards zero at the center), latitude (greater at poles than equator due to rotation and oblate shape), and local geology.',
            si: 'g උන්නතාංශය සමග (උස වැඩිවන විට අඩු වේ), ගැඹුර සමග (කේන්ද්‍රය දෙසට රේඛීයව අඩු වී ශුන්‍ය වේ), සහ අක්ෂාංශ සමග (භ්‍රමණය සහ ඉලිප්සාකාර හැඩය නිසා සමකයට වඩා ධ්‍රැවවල වැඩිය) විචලනය වේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 5.2: Gravitational Potential and Potential Energy
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-2',
    slug: 'gravitational-potential-and-energy',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 2,
    syllabusRef: 'Competency 5.1',
    title: {
      en: 'Gravitational Potential and Potential Energy',
      si: 'ගුරුත්වාකර්ෂණ විභවය සහ විභව ශක්තිය',
    },
    summary: {
      en: 'Definition of gravitational potential V, negative potential sign convention, potential energy U = -GMm/r, work done in gravitational field, equipotential surfaces, and potential gradients.',
      si: 'ගුරුත්වාකර්ෂණ විභවය V හි අර්ථ දැක්වීම, ඍණ විභව ලකුණු සම්මුතිය, විභව ශක්තිය U = -GMm/r, ක්ෂේත්‍රය තුළ කෙරෙන කාර්යය, සමවිභව පෘෂ්ඨ සහ විභව අනුක්‍රමණය.',
    },
    learningObjectives: [
      {
        en: 'Define gravitational potential V at a point as the external work done per unit mass in bringing a test mass from infinity to that point without acceleration.',
        si: 'ගුරුත්වාකර්ෂණ විභවය V යනු අනන්තයේ සිට ත්වරණයකින් තොරව ඒකක ස්කන්ධයක් එම ලක්ෂ්‍යයට ගෙන ඒමේදී බාහිර බලය මගින් කෙරෙන කාර්යය ලෙස අර්ථ දැක්වීම.',
      },
      {
        en: 'Deduce and apply V = -GM/r and U = -GMm/r, explaining why gravitational potential is intrinsically negative relative to infinity.',
        si: 'V = -GM/r සහ U = -GMm/r ව්‍යුත්පන්න කර යෙදීම සහ අනන්තයට සාපේක්ෂව ගුරුත්වාකර්ෂණ විභවය සහජයෙන්ම ඍණ වන්නේ මන්දැයි පැහැදිලි කිරීම.',
      },
      {
        en: 'Calculate work done moving masses between points in gravitational fields (W = m ΔV) and describe properties of equipotential surfaces.',
        si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක ලක්ෂ්‍ය අතර ස්කන්ධ විස්ථාපනයේදී කෙරෙන කාර්යය (W = m ΔV) ගණනය කිරීම සහ සමවිභව පෘෂ්ඨවල ගුණාංග විස්තර කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Work done by gravitational force and conservative field nature', si: 'ගුරුත්වාකර්ෂණ බලය මගින් කෙරෙන කාර්යය සහ සංස්ථිතික ක්ෂේත්‍ර ස්වභාවය' },
      { en: 'Gravitational potential V = -GM/r with zero reference at infinity', si: 'අනන්තයේ ශුන්‍ය සමුද්දේශය සහිත ගුරුත්වාකර්ෂණ විභවය V = -GM/r' },
      { en: 'Gravitational potential energy of two-mass system U = -GMm/r', si: 'ද්වි-ස්කන්ධ පද්ධතියක ගුරුත්වාකර්ෂණ විභව ශක්තිය U = -GMm/r' },
      { en: 'Relationship between field intensity and potential gradient: g = -dV/dr', si: 'ක්ෂේත්‍ර තීව්‍රතාව සහ විභව අනුක්‍රමණය අතර සම්බන්ධය: g = -dV/dr' },
      { en: 'Equipotential surfaces: concentric spheres, perpendicularity to field lines', si: 'සමවිභව පෘෂ්ඨ: ඒකකේන්ද්‍රික ගෝල, ක්ෂේත්‍ර රේඛාවලට ලම්බකතාව' },
      { en: 'Work done moving a mass along and across equipotential surfaces', si: 'සමවිභව පෘෂ්ඨ ඔස්සේ සහ ඒවා හරහා ස්කන්ධයක් ගෙනයාමේදී කෙරෙන කාර්යය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Because gravity is a conservative force, a potential energy and scalar potential can be associated with every point in space. Since gravity is always attractive, bringing a mass from infinity requires negative work by an external agent, making gravitational potential everywhere negative.',
        si: 'ගුරුත්වය සංස්ථිතික බලයක් බැවින් අවකාශයේ සෑම ලක්ෂ්‍යයකටම අදිශ විභවයක් සහ විභව ශක්තියක් සම්බන්ධ කළ හැක. ගුරුත්වය සැමවිටම ආකර්ෂණීය වන බැවින් අනන්තයේ සිට ස්කන්ධයක් ගෙන ඒමට බාහිර බලය ඍණ කාර්යයක් කළ යුතු අතර, එබැවින් ගුරුත්වාකර්ෂණ විභවය සැමවිටම ඍණ අගයක් ගනී.',
      },
      keyConcepts: [
        {
          title: { en: 'Gravitational Potential', si: 'ගුරුත්වාකර්ෂණ විභවය' },
          description: {
            en: 'Scalar potential at distance r from spherical mass M: V = -GM/r. SI unit is J kg⁻¹.',
            si: 'M ගෝලීය ස්කන්ධයක සිට r දුරකදී අදිශ විභවය: V = -GM/r. SI ඒකකය J kg⁻¹ වේ.',
          },
          formula: 'V = -\\frac{GM}{r}',
        },
        {
          title: { en: 'Gravitational Potential Energy', si: 'ගුරුත්වාකර්ෂණ විභව ශක්තිය' },
          description: {
            en: 'Total interaction energy of two masses separated by r: U = -GMm/r. Near surface: ΔU ≈ mgh.',
            si: 'r දුරකින් පිහිටි ස්කන්ධ දෙකක අන්තර්ක්‍රියා ශක්තිය: U = -GMm/r. පෘෂ්ඨය ආසන්නයේදී: ΔU ≈ mgh.',
          },
          formula: 'U = -\\frac{GMm}{r}',
        },
        {
          title: { en: 'Field Intensity as Potential Gradient', si: 'විභව අනුක්‍රමණය ලෙස ක්ෂේත්‍ර තීව්‍රතාව' },
          description: {
            en: 'Gravitational field strength equals the negative spatial derivative of potential: g = -dV/dr.',
            si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව විභවයේ ඍණ අවකාශීය අවකලනයට සමාන වේ: g = -dV/dr.',
          },
          formula: 'g = -\\frac{dV}{dr}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Gravitational potential energy is always given by U = mgh at any distance from Earth.',
            si: 'පෘථිවියේ සිට ඕනෑම දුරකදී ගුරුත්වාකර්ෂණ විභව ශක්තිය සැමවිටම U = mgh මගින් ලැබේ.',
          },
          clarification: {
            en: 'U = mgh is a linear approximation valid ONLY when height h is negligible compared to Earth’s radius R (h << R). For large distances, the exact formula U = -GMm/r must be used.',
            si: 'U = mgh යනු පෘථිවි අරය R ට සාපේක්ෂව h උස ඉතා කුඩා වන විට (h << R) පමණක් වලංගු වන ආසන්න කිරීමකි. විශාල දුරවල් සඳහා නියම සූත්‍රය වන U = -GMm/r භාවිත කළ යුතුය.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 5.3: Orbital Mechanics and Satellites
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-3',
    slug: 'orbital-mechanics-and-satellites',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 3,
    syllabusRef: 'Competency 5.2',
    title: {
      en: 'Orbital Mechanics and Satellites',
      si: 'කක්ෂීය යාන්ත්‍ර විද්‍යාව සහ චන්ද්‍රිකා',
    },
    summary: {
      en: 'Circular satellite motion, centripetal balance, orbital speed v = √(GM/r), period T = 2π√(r³/GM), Kepler’s Third Law, kinetic energy, potential energy, total mechanical energy, and binding energy.',
      si: 'වෘත්තාකාර චන්ද්‍රිකා චලිතය, කේන්ද්‍රාභිසාරී සමතුලිතතාව, කක්ෂීය ප්‍රවේගය v = √(GM/r), ආවර්ත කාලය T = 2π√(r³/GM), කෙප්ලර්ගේ තුන්වන නියමය, චාලක ශක්තිය, විභව ශක්තිය, මුළු ශක්තිය සහ බැඳීම් ශක්තිය.',
    },
    learningObjectives: [
      {
        en: 'Derive expressions for orbital speed v = √(GM/r) and orbital period T = 2π√(r³/GM) for satellites in circular orbits.',
        si: 'වෘත්තාකාර කක්ෂවල චන්ද්‍රිකා සඳහා කක්ෂීය ප්‍රවේගය v = √(GM/r) සහ ආවර්ත කාලය T = 2π√(r³/GM) ප්‍රකාශන ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Verify Kepler’s Third Law (T² ∝ r³) and use it to solve orbital ratios and calculate central planetary masses.',
        si: 'කෙප්ලර්ගේ තුන්වන නියමය (T² ∝ r³) තහවුරු කිරීම සහ කක්ෂීය අනුපාත විසඳීමට හා ග්‍රහලෝක ස්කන්ධ ගණනය කිරීමට එය යෙදීම.',
      },
      {
        en: 'Calculate kinetic energy (K = GMm/2r), potential energy (U = -GMm/r), total mechanical energy (E = -GMm/2r = -K), and binding energy.',
        si: 'චාලක ශක්තිය (K = GMm/2r), විභව ශක්තිය (U = -GMm/r), මුළු යාන්ත්‍රික ශක්තිය (E = -GMm/2r = -K), සහ බැඳීම් ශක්තිය ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Mechanics of circular orbits: gravitational force as centripetal force', si: 'වෘත්තාකාර කක්ෂවල යාන්ත්‍ර විද්‍යාව: කේන්ද්‍රාභිසාරී බලය ලෙස ගුරුත්වාකර්ෂණය' },
      { en: 'Orbital velocity derivation: v = √(GM/r)', si: 'කක්ෂීය ප්‍රවේගය ව්‍යුත්පන්නය: v = √(GM/r)' },
      { en: 'Orbital period and Kepler’s Third Law: T² = (4π² / GM) r³', si: 'කක්ෂීය ආවර්ත කාලය සහ කෙප්ලර්ගේ තෙවන නියමය' },
      { en: 'Kinetic, potential, and total energy relationships: E = -K = U/2', si: 'චාලක, විභව සහ මුළු ශක්ති අතර සම්බන්ධතා: E = -K = U/2' },
      { en: 'Satellite binding energy and orbital decay due to atmospheric friction', si: 'චන්ද්‍රිකා බැඳීම් ශක්තිය සහ වායුගෝලීය ඝර්ෂණය නිසා සිදුවන කක්ෂීය ක්ෂයවීම' },
      { en: 'Apparent weightlessness in orbit and free fall dynamics', si: 'කක්ෂය තුළ පෙනෙන භාර රහිත බව සහ නිදහස් වැටීමේ ගති විද්‍යාව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'When a projectile is launched horizontally at high speed above the atmosphere, its curved trajectory matches the curvature of the Earth, placing it into continuous free fall around the planet—an orbit. The gravitational pull continuously redirects its velocity vector without altering its speed in a circular orbit.',
        si: 'වායුගෝලයට ඉහළින් තිරස්ව අධික වේගයකින් ප්‍රක්ෂිප්තයක් විදින විට, එහි වක්‍ර ගමන් මග පෘථිවියේ වක්‍රතාවට සමාන වී එය පෘථිවිය වටා අඛණ්ඩ නිදහස් වැටීමකට—කක්ෂයකට—පත් වේ. වෘත්තාකාර කක්ෂයකදී ගුරුත්වාකර්ෂණ බලය වේගය වෙනස් නොකර ප්‍රවේග දෛශිකයේ දිශාව අඛණ්ඩව වෙනස් කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Orbital Speed', si: 'කක්ෂීය ප්‍රවේගය' },
          description: {
            en: 'Equating gravitational attraction to centripetal force: GMm/r² = m v²/r => v = √(GM/r). Speed is independent of satellite mass.',
            si: 'ගුරුත්වාකර්ෂණ බලය කේන්ද්‍රාභිසාරී බලයට සමාන කිරීමෙන්: GMm/r² = m v²/r => v = √(GM/r). ප්‍රවේගය චන්ද්‍රිකාවේ ස්කන්ධය මත රඳා නොපවතී.',
          },
          formula: 'v = \\sqrt{\\frac{GM}{r}}',
        },
        {
          title: { en: 'Orbital Period & Kepler’s Third Law', si: 'කක්ෂීය ආවර්ත කාලය සහ කෙප්ලර්ගේ තුන්වන නියමය' },
          description: {
            en: 'Time for one complete revolution: T = 2πr / v = 2π√(r³ / GM). Thus T² ∝ r³.',
            si: 'එක් සම්පූර්ණ පරිභ්‍රමණයකට ගතවන කාලය: T = 2πr / v = 2π√(r³ / GM). එබැවින් T² ∝ r³ වේ.',
          },
          formula: 'T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3',
        },
        {
          title: { en: 'Satellite Energy Relations', si: 'චන්ද්‍රිකා ශක්ති සම්බන්ධතා' },
          description: {
            en: 'Kinetic energy K = GMm/(2r). Potential energy U = -GMm/r. Total mechanical energy E = K + U = -GMm/(2r) = -K = U/2. Binding energy B.E. = -E = GMm/(2r).',
            si: 'චාලක ශක්තිය K = GMm/(2r). විභව ශක්තිය U = -GMm/r. මුළු ශක්තිය E = K + U = -GMm/(2r) = -K = U/2. බැඳීම් ශක්තිය = GMm/(2r).',
          },
          formula: 'E = -K = \\frac{1}{2}U = -\\frac{GMm}{2r}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Astronauts float in the ISS because there is zero gravity in space.',
            si: 'අභ්‍යවකාශයේ ගුරුත්වය ශුන්‍ය බැවින් ගගනගාමීන් ISS තුළ පාවෙමින් සිටිති.',
          },
          clarification: {
            en: 'At the ISS altitude (~400 km), gravitational acceleration is still ~8.8 m s⁻² (about 90% of surface gravity). Astronauts float because both they and the spacecraft are in continuous free fall toward Earth at the exact same acceleration (apparent weightlessness).',
            si: 'ISS උන්නතාංශයේදී (~400 km) ගුරුත්වාකර්ෂණ ත්වරණය තවමත් ~8.8 m s⁻² වේ (පෘෂ්ඨික අගයෙන් 90% ක් පමණ). ඔවුන් සහ යානය යන දෙකම එකම ත්වරණයෙන් පෘථිවිය දෙසට නිදහසේ වැටෙන බැවින් පෙනෙන බර ශුන්‍ය වේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 5.4: Geostationary Satellites and Escape Velocity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-4',
    slug: 'geostationary-satellites-and-escape-velocity',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 4,
    syllabusRef: 'Competency 5.2',
    title: {
      en: 'Geostationary Satellites and Escape Velocity',
      si: 'භූ-ස්ථාවර චන්ද්‍රිකා සහ නිදහස් ප්‍රවේගය',
    },
    summary: {
      en: 'Characteristics of geostationary orbits (equatorial plane, period 24 h, altitude 35,800 km), polar orbiting satellites, derivation of escape velocity v_e = √(2GM/R) = √(2gR), and molecular atmospheric retention.',
      si: 'භූ-ස්ථාවර කක්ෂවල ලක්ෂණ (සමක තලය, පැය 24 ආවර්ත කාලය, උන්නතාංශය 35,800 km), ධ්‍රැවීය කක්ෂීය චන්ද්‍රිකා, නිදහස් ප්‍රවේගය ව්‍යුත්පන්නය v_e = √(2GM/R) = √(2gR), සහ වායුගෝල රඳවා ගැනීමේ යාන්ත්‍රණය.',
    },
    learningObjectives: [
      {
        en: 'Explain why geostationary satellites must orbit in the equatorial plane with an orbital period of exactly 24 hours, and calculate their orbital radius (~4.22 × 10⁷ m) and altitude (~3.59 × 10⁷ m).',
        si: 'භූ-ස්ථාවර චන්ද්‍රිකා පැය 24 ක ආවර්ත කාලයකින් සමක තලයේම පරිභ්‍රමණය විය යුත්තේ මන්දැයි පැහැදිලි කිරීම සහ කක්ෂීය අරය (~4.22 × 10⁷ m) හා උන්නතාංශය (~3.59 × 10⁷ m) ගණනය කිරීම.',
      },
      {
        en: 'Compare the functions, orbits, and coverage of geostationary telecommunication satellites with low Earth polar-orbiting satellites.',
        si: 'භූ-ස්ථාවර සන්නිවේදන චන්ද්‍රිකා සහ පහළ පෘථිවි ධ්‍රැවීය චන්ද්‍රිකාවල කාර්යයන්, කක්ෂ සහ ආවරණය සැසඳීම.',
      },
      {
        en: 'Derive escape velocity v_e = √(2GM/R) = √(2gR) from energy conservation and explain why celestial bodies like the Moon lack atmospheres.',
        si: 'ශක්ති සංස්ථිතියෙන් නිදහස් ප්‍රවේගය v_e = √(2GM/R) = √(2gR) ව්‍යුත්පන්න කිරීම සහ චන්ද්‍රයා වැනි ආකාශ වස්තුවල වායුගෝල නොමැති වීමට හේතුව පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Conditions for a geostationary orbit: equatorial plane, West to East, T = 24 h', si: 'භූ-ස්ථාවර කක්ෂයක කොන්දේසි: සමක තලය, බටහිර සිට නැගෙනහිරට, T = පැය 24' },
      { en: 'Calculation of geostationary radius r_geo ≈ 42,240 km and altitude h_geo ≈ 35,870 km', si: 'භූ-ස්ථාවර අරය සහ උන්නතාංශය ගණනය කිරීම' },
      { en: 'Polar orbiting satellites: altitude 600–1000 km, sun-synchronous observation', si: 'ධ්‍රැවීය කක්ෂීය චන්ද්‍රිකා: උස 600–1000 km, ගෝලීය නිරීක්ෂණ' },
      { en: 'Derivation of escape velocity: 1/2 m v_e² = GMm/R => v_e = √(2gR)', si: 'නිදහස් ප්‍රවේගය ව්‍යුත්පන්නය: v_e = √(2gR)' },
      { en: 'Comparison of Earth (11.2 km/s) and Moon (2.38 km/s) escape speeds', si: 'පෘථිවි (11.2 km/s) සහ චන්ද්‍ර (2.38 km/s) නිදහස් ප්‍රවේග සැසඳීම' },
      { en: 'Kinetic theory criteria for planetary atmospheric retention', si: 'ග්‍රහලෝක වායුගෝල රඳවා ගැනීමේ චාලක වාද නිර්ණායක' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A geostationary satellite completes one orbit in the exact time the Earth rotates once on its axis (24 hours), appearing completely stationary to observers on the ground. Escape velocity represents the opposite extreme: the minimum projection speed required to completely break free from a gravitational well.',
        si: 'භූ-ස්ථාවර චන්ද්‍රිකාවක් පෘථිවිය තම අක්ෂය වටා එක් භ්‍රමණයක් සම්පූර්ණ කරන කාලය තුළම (පැය 24) එක් කක්ෂයක් සම්පූර්ණ කරන බැවින් භූමියේ නිරීක්ෂකයෙකුට නිශ්චලව පෙනේ. නිදහස් ප්‍රවේගය යනු ගුරුත්වාකර්ෂණ විභව ළිඳෙන් සම්පූර්ණයෙන්ම මිදී යාමට අවශ්‍ය අවම ප්‍රක්ෂේපණ ප්‍රවේගයයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Geostationary Orbital Radius', si: 'භූ-ස්ථාවර කක්ෂීය අරය' },
          description: {
            en: 'For T = 86,400 s: r = [ (G M T²) / (4π²) ]^(1/3) ≈ 4.224 × 10⁷ m (42,240 km). Altitude above equator: h = r - R ≈ 35,870 km.',
            si: 'T = 86,400 s සඳහා: r = [ (G M T²) / (4π²) ]^(1/3) ≈ 4.224 × 10⁷ m. සමකයට ඉහළින් උස: h = r - R ≈ 35,870 km.',
          },
          formula: 'r_{\\text{geo}} = \\left(\\frac{GM T^2}{4\\pi^2}\\right)^{1/3} \\approx 42{,}240 \\text{ km}',
        },
        {
          title: { en: 'Escape Velocity', si: 'නිදහස් ප්‍රවේගය' },
          description: {
            en: 'Minimum surface speed to reach infinity: 1/2 m v_e² - GMm/R = 0 => v_e = √(2GM/R) = √(2gR). For Earth, v_e ≈ 11.2 km s⁻¹.',
            si: 'අනන්තයට ළඟා වීමට අවශ්‍ය අවම පෘෂ්ඨික ප්‍රවේගය: v_e = √(2GM/R) = √(2gR). පෘථිවිය සඳහා v_e ≈ 11.2 km s⁻¹ වේ.',
          },
          formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
        },
        {
          title: { en: 'Atmospheric Retention', si: 'වායුගෝල රඳවා ගැනීම' },
          description: {
            en: 'A celestial body retains an atmosphere if the thermal root-mean-square speed of gas molecules c_rms = √(3kT/m) is less than approximately one-sixth of escape velocity (c_rms < v_e / 6).',
            si: 'වායු අණුවල තාපජ වර්ග මධ්‍යන්‍ය මූල ප්‍රවේගය c_rms = √(3kT/m) අගය නිදහස් ප්‍රවේගයෙන් හයෙන් පංගුවකට වඩා අඩු නම් (c_rms < v_e / 6) ග්‍රහලෝකයකට වායුගෝලයක් රඳවා ගත හැක.',
          },
          formula: 'c_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m_{\\text{mol}}}} < \\frac{v_e}{6}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A geostationary satellite can be positioned directly above Sri Lanka, London, or Tokyo at any desired latitude.',
            si: 'භූ-ස්ථාවර චන්ද්‍රිකාවක් ශ්‍රී ලංකාව, ලන්ඩනය හෝ ටෝකියෝවට ඉහළින් කැමති ඕනෑම අක්ෂාංශයක ස්ථානගත කළ හැක.',
          },
          clarification: {
            en: 'Every circular orbit around Earth must have the Earth’s center of mass at its center. Only the equatorial plane (0° latitude) allows the orbital plane to coincide with Earth’s rotational plane and remain stationary over a fixed longitude.',
            si: 'පෘථිවිය වටා ඕනෑම වෘත්තාකාර කක්ෂයක කේන්ද්‍රය පෘථිවි ස්කන්ධ කේන්ද්‍රය සමග සමපාත විය යුතුය. පෘථිවි භ්‍රමණ තලය සමග සමපාත විය හැක්කේ සමක තලයට (0° අක්ෂාංශය) පමණි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 5.5: Interactive Simulation Lab - Orbital Mechanics
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-5',
    slug: 'orbital-mechanics-simulation-lab',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 5,
    syllabusRef: 'Interactive Laboratory',
    title: {
      en: 'Orbital Mechanics & Escape Velocity Simulation Lab',
      si: 'කක්ෂීය යාන්ත්‍ර විද්‍යාව සහ නිදහස් ප්‍රවේග අන්තර්ක්‍රියාකාරී විද්‍යාගාරය',
    },
    summary: {
      en: 'Interactive 60fps canvas simulation: Real-time orbital propagation, LEO/MEO/GEO altitude presets, orbital velocity, period, Kepler’s law verification, escape velocity trajectory, and energy telemetry.',
      si: 'තථ්‍ය-කාලීන කක්ෂීය ප්‍රචාරණය, LEO/MEO/GEO උන්නතාංශ සැකසුම්, කක්ෂීය ප්‍රවේගය, ආවර්ත කාලය, කෙප්ලර් නියමය තහවුරු කිරීම, නිදහස් ප්‍රවේග ගමන් මග සහ ශක්ති දත්ත නිරීක්ෂණය කරන අන්තර්ක්‍රියාකාරී සිමියුලේෂනය.',
    },
    learningObjectives: [
      {
        en: 'Interactively explore how orbital speed and period change with altitude from Low Earth Orbit (ISS) up to Geostationary Orbit.',
        si: 'පහළ පෘථිවි කක්ෂයේ සිට භූ-ස්ථාවර කක්ෂය දක්වා උන්නතාංශය අනුව කක්ෂීය ප්‍රවේගය සහ ආවර්ත කාලය වෙනස් වන ආකාරය අන්තර්ක්‍රියාකාරීව ගවේෂණය කිරීම.',
      },
      {
        en: 'Observe the transition from circular orbit to elliptical orbit and parabolic escape trajectory when launch velocity reaches v_e.',
        si: 'ප්‍රක්ෂේපණ ප්‍රවේගය v_e කරා ළඟා වන විට වෘත්තාකාර කක්ෂයක සිට ඉලිප්සාකාර කක්ෂයකට සහ පරවළයික මිදීමේ ගමන් මගකට සිදුවන සංක්‍රාන්තිය නිරීක්ෂණය කිරීම.',
      },
      {
        en: 'Inspect live telemetry of kinetic, potential, and total mechanical energy balance across varying orbital radii.',
        si: 'විවිධ කක්ෂීය අරයන් ඔස්සේ චාලක, විභව සහ මුළු යාන්ත්‍රික ශක්ති සමතුලිතතාව පිළිබඳ සජීවී දත්ත පරීක්ෂා කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Low Earth Orbit (LEO) dynamics and ISS orbital parameters', si: 'පහළ පෘථිවි කක්ෂීය ගති විද්‍යාව' },
      { en: 'Medium Earth Orbit (MEO) navigation satellite constellations', si: 'මධ්‍යම පෘථිවි කක්ෂීය සංචලන චන්ද්‍රිකා' },
      { en: 'Geostationary Orbit (GEO) equilibrium and 24-hour synchronization', si: 'භූ-ස්ථාවර කක්ෂීය සමතුලිතතාව සහ පැය 24 සමමුහුර්තකරණය' },
      { en: 'Escape Velocity simulation and hyperbolic trajectory transition', si: 'නිදහස් ප්‍රවේග සිමියුලේෂනය සහ අධිපරවළයික ගමන් මග' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'orbital-mechanics-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 5.6: Unit Assessment - Gravitational Field
  // -------------------------------------------------------------------------
  {
    id: 'lesson-5-6',
    slug: 'gravitation-unit-assessment',
    unitSlug: 'gravitational-field',
    unitOrder: 5,
    lessonOrder: 6,
    syllabusRef: 'Summative Assessment',
    title: {
      en: 'Unit 5 Summative Assessment: Gravitational Field',
      si: 'ඒකක 5 සමාප්ති ඇගයීම: ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර',
    },
    summary: {
      en: 'Comprehensive 16-question exam covering all competencies (5.1–5.4): Universal gravitation, field intensity, potential, orbital mechanics, geostationary satellites, and escape velocity with automated grading.',
      si: 'සියලුම නිපුණතා (5.1–5.4) ආවරණය වන ප්‍රශ්න 16 කින් සමන්විත පූර්ණ ඇගයීම: ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා විශ්ලේෂණය සහ පියවරෙන් පියවර විසඳුම් සහිතයි.',
    },
    learningObjectives: [
      {
        en: 'Assess mastery across all 4 syllabus competencies for Gravitational Field under timed conditions.',
        si: 'නියමිත කාල සීමාවක් යටතේ ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර විෂය නිර්දේශයේ සියලුම නිපුණතා 4 හි ප්‍රවීණතාව ඇගයීම.',
      },
      {
        en: 'Identify individual competency weaknesses and receive targeted lesson revision links.',
        si: 'දුර්වල නිපුණතා හඳුනාගෙන ඒ සඳහා නිර්දේශිත ඉලක්කගත පාඩම් වෙත යොමු වීම.',
      },
    ],
    topicOutline: [
      { en: 'Competency 5.1: Universal Gravitation and Field Intensity', si: 'නිපුණතාව 5.1: සර්වත්‍ර ගුරුත්වාකර්ෂණය සහ ක්ෂේත්‍ර තීව්‍රතාව' },
      { en: 'Competency 5.2: Gravitational Potential and Energy', si: 'නිපුණතාව 5.2: ගුරුත්වාකර්ෂණ විභවය සහ ශක්තිය' },
      { en: 'Competency 5.3: Orbital Mechanics and Satellites', si: 'නිපුණතාව 5.3: කක්ෂීය යාන්ත්‍ර විද්‍යාව සහ චන්ද්‍රිකා' },
      { en: 'Competency 5.4: Geostationary Satellites and Escape Velocity', si: 'නිපුණතාව 5.4: භූ-ස්ථාවර චන්ද්‍රිකා සහ නිදහස් ප්‍රවේගය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'gravitation-assessment',
  },
];
