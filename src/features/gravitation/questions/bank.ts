import { GravitationQuestion } from './types';

export const GRAVITATION_QUESTIONS: GravitationQuestion[] = [
  // ==========================================
  // Competency 5.1: Universal Gravitation & Field Intensity (14 Questions)
  // ==========================================
  {
    id: 'grav-5-1-01',
    competencyRef: 'Competency 5.1',
    category: 'universal-gravitation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the SI base units of the Universal Gravitational Constant G?',
      si: 'සර්වත්‍ර ගුරුත්වාකර්ෂණ නියතය G හි SI මූලික ඒකක කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'm³ kg⁻¹ s⁻²', si: 'm³ kg⁻¹ s⁻²' } },
      { id: 'b', text: { en: 'N m² kg⁻²', si: 'N m² kg⁻²' } },
      { id: 'c', text: { en: 'm² kg⁻¹ s⁻²', si: 'm² kg⁻¹ s⁻²' } },
      { id: 'd', text: { en: 'kg m s⁻²', si: 'kg m s⁻²' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'From F = G(m₁m₂)/r², G = F r² / (m₁m₂). Express N in SI base units (kg m s⁻²).',
      si: 'F = G(m₁m₂)/r² අනුව, G = F r² / (m₁m₂). N අගය SI මූලික ඒකකවලින් (kg m s⁻²) ලියන්න.',
    },
    solution: {
      en: 'G has derived units N m² kg⁻². Since 1 N = 1 kg m s⁻², the base units are (kg m s⁻²)(m²)(kg⁻²) = m³ kg⁻¹ s⁻².',
      si: 'G හි ව්‍යුත්පන්න ඒකකය N m² kg⁻² වේ. 1 N = 1 kg m s⁻² බැවින් මූලික ඒකක වන්නේ (kg m s⁻²)(m²)(kg⁻²) = m³ kg⁻¹ s⁻² වේ.',
    },
  },
  {
    id: 'grav-5-1-02',
    competencyRef: 'Competency 5.1',
    category: 'universal-gravitation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If the distance between two point masses is reduced to one-third of its original value, by what factor does the gravitational force between them change?',
      si: 'ලක්ෂ්‍යමය ස්කන්ධ දෙකක් අතර දුර මුල් අගයෙන් තුනෙන් එකක් දක්වා අඩු කළහොත්, ඒවා අතර ගුරුත්වාකර්ෂණ බලය කුමන ගුණයකින් වෙනස් වේද?',
    },
    options: [
      { id: 'a', text: { en: 'Decreases by a factor of 9', si: '9 ගුණයකින් අඩු වේ' } },
      { id: 'b', text: { en: 'Increases by a factor of 3', si: '3 ගුණයකින් වැඩි වේ' } },
      { id: 'c', text: { en: 'Increases by a factor of 9', si: '9 ගුණයකින් වැඩි වේ' } },
      { id: 'd', text: { en: 'Increases by a factor of 27', si: '27 ගුණයකින් වැඩි වේ' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'The gravitational force obeys an inverse-square law: F ∝ 1/r².',
      si: 'ගුරුත්වාකර්ෂණ බලය ප්‍රතිලෝම වර්ග නියමයට අනුකූල වේ: F ∝ 1/r².',
    },
    solution: {
      en: 'F ∝ 1/r². When r becomes r/3, F becomes 1/(r/3)² = 9/(r²) = 9F. The force increases by a factor of 9.',
      si: 'F ∝ 1/r² වේ. r අගය r/3 වන විට, නව බලය 1/(r/3)² = 9/(r²) = 9F වේ. බලය 9 ගුණයකින් වැඩි වේ.',
    },
  },
  {
    id: 'grav-5-1-03',
    competencyRef: 'Competency 5.1',
    category: 'universal-gravitation',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two identical lead spheres, each of mass 50.0 kg, have their centers separated by 0.50 m. Calculate the magnitude of the gravitational attraction between them in nN (nanoNewtons). Take G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: '50.0 kg බැගින් වූ සමාන ඊයම් ගෝල දෙකක කේන්ද්‍ර අතර පරතරය 0.50 m වේ. ඒවා අතර ගුරුත්වාකර්ෂණ ආකර්ෂණ බලයේ විශාලත්වය nN (නැනෝනිව්ටන්) වලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 667.4,
    tolerance: 3.0,
    unit: { en: 'nN', si: 'nN' },
    hint: {
      en: 'Use F = G m₁ m₂ / r². 1 nN = 10⁻⁹ N.',
      si: 'F = G m₁ m₂ / r² භාවිත කරන්න. 1 nN = 10⁻⁹ N වේ.',
    },
    solution: {
      en: 'F = (6.674 × 10⁻¹¹ × 50.0 × 50.0) / (0.50)² = (6.674 × 10⁻¹¹ × 2500) / 0.25 = 6.674 × 10⁻⁷ N = 667.4 nN.',
      si: 'F = (6.674 × 10⁻¹¹ × 50.0 × 50.0) / (0.50)² = (6.674 × 10⁻¹¹ × 2500) / 0.25 = 6.674 × 10⁻⁷ N = 667.4 nN වේ.',
    },
  },
  {
    id: 'grav-5-1-04',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How is the gravitational field strength (g) at a point in a gravitational field defined?',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක ලක්ෂ්‍යයක ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව (g) අර්ථ දක්වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'The work done in moving a unit mass from infinity to that point', si: 'අනන්තයේ සිට එම ලක්ෂ්‍යයට ඒකක ස්කන්ධයක් ගෙන ඒමට කළ යුතු කාර්යය' } },
      { id: 'b', text: { en: 'The gravitational force exerted on a unit point mass placed at that point', si: 'එම ලක්ෂ්‍යයේ තබන ලද ඒකක ලක්ෂ්‍යමය ස්කන්ධයක් මත ක්‍රියා කරන ගුරුත්වාකර්ෂණ බලය' } },
      { id: 'c', text: { en: 'The acceleration of an object of any mass in vacuum', si: 'රික්තයක ඕනෑම ස්කන්ධයකින් යුතු වස්තුවක ත්වරණය' } },
      { id: 'd', text: { en: 'The rate of change of momentum of a satellite at that point', si: 'එම ලක්ෂ්‍යයේදී චන්ද්‍රිකාවක ගම්‍යතා වෙනස්වීමේ සීඝ්‍රතාව' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Field strength is defined as force per unit mass: g = F/m.',
      si: 'ක්ෂේත්‍ර තීව්‍රතාව ඒකක ස්කන්ධයක් මත බලය ලෙස අර්ථ දැක්වේ: g = F/m.',
    },
    solution: {
      en: 'Gravitational field strength g at a point is defined as the gravitational force experienced per unit test mass placed at that point (g = F/m). Its SI unit is N kg⁻¹ or m s⁻².',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක ලක්ෂ්‍යයක ක්ෂේත්‍ර තීව්‍රතාව යනු එම ලක්ෂ්‍යයේ තබන ලද ඒකක පරීක්ෂා ස්කන්ධයක් මත ක්‍රියා කරන ගුරුත්වාකර්ෂණ බලයයි (g = F/m). එහි SI ඒකකය N kg⁻¹ හෙවත් m s⁻² වේ.',
    },
  },
  {
    id: 'grav-5-1-05',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'The radius of planet Mars is 3.39 × 10⁶ m and its mass is 6.42 × 10²³ kg. Calculate the gravitational acceleration at the surface of Mars in m s⁻². Take G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: 'අඟහරු ග්‍රහයාගේ අරය 3.39 × 10⁶ m වන අතර එහි ස්කන්ධය 6.42 × 10²³ kg වේ. අඟහරු පෘෂ්ඨය මත ගුරුත්වාකර්ෂණ ත්වරණය m s⁻² වලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 3.73,
    tolerance: 0.05,
    unit: { en: 'm s⁻²', si: 'm s⁻²' },
    hint: {
      en: 'Use g = GM/R².',
      si: 'g = GM/R² සමීකරණය භාවිත කරන්න.',
    },
    solution: {
      en: 'g = GM/R² = (6.674 × 10⁻¹¹ × 6.42 × 10²³) / (3.39 × 10⁶)² = 4.2847 × 10¹³ / 1.1492 × 10¹³ ≈ 3.73 m s⁻².',
      si: 'g = GM/R² = (6.674 × 10⁻¹¹ × 6.42 × 10²³) / (3.39 × 10⁶)² = 4.2847 × 10¹³ / 1.1492 × 10¹³ ≈ 3.73 m s⁻² වේ.',
    },
  },
  {
    id: 'grav-5-1-06',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'At what altitude h above the Earth’s surface (radius R) is the gravitational field strength equal to g₀/4, where g₀ is the field strength at the surface?',
      si: 'පෘථිවි පෘෂ්ඨයේ (අරය R) ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g₀ නම්, ක්ෂේත්‍ර තීව්‍රතාව g₀/4 වන උන්නතාංශය h පෘථිවි අරය ඇසුරෙන් කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'h = R/2', si: 'h = R/2' } },
      { id: 'b', text: { en: 'h = R', si: 'h = R' } },
      { id: 'c', text: { en: 'h = 2R', si: 'h = 2R' } },
      { id: 'd', text: { en: 'h = 4R', si: 'h = 4R' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'g_h = g₀ [R / (R + h)]². Set this equal to g₀/4.',
      si: 'g_h = g₀ [R / (R + h)]² වේ. මෙය g₀/4 ට සමාන කරන්න.',
    },
    solution: {
      en: 'g_h = g₀ [R / (R + h)]² = g₀ / 4 => R / (R + h) = 1/2 => R + h = 2R => h = R.',
      si: 'g_h = g₀ [R / (R + h)]² = g₀ / 4 => R / (R + h) = 1/2 => R + h = 2R => h = R වේ.',
    },
  },
  {
    id: 'grav-5-1-07',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Assuming the Earth is a uniform solid sphere of radius R, how does the gravitational field strength g vary at depth d below the surface?',
      si: 'පෘථිවිය R අරයක් සහිත ඒකාකාර ඝන ගෝලයක් ලෙස සලකමින්, පෘෂ්ඨයෙන් d ගැඹුරකදී ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g විචලනය වන ආකාරය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'g_d = g₀ (1 - d/R)', si: 'g_d = g₀ (1 - d/R)' } },
      { id: 'b', text: { en: 'g_d = g₀ / (1 - d/R)²', si: 'g_d = g₀ / (1 - d/R)²' } },
      { id: 'c', text: { en: 'g_d = g₀ (1 - 2d/R)', si: 'g_d = g₀ (1 - 2d/R)' } },
      { id: 'd', text: { en: 'g_d = g₀ (d/R)²', si: 'g_d = g₀ (d/R)²' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'At radius r = R - d inside a uniform sphere, only the enclosed mass M(r) ∝ r³ exerts net gravity: g(r) ∝ r.',
      si: 'ඒකාකාර ගෝලයක් තුළ r = R - d අරයකදී, අභ්‍යන්තර ස්කන්ධය M(r) ∝ r³ පමණක් ශුද්ධ ගුරුත්වය ඇති කරයි: g(r) ∝ r.',
    },
    solution: {
      en: 'Inside a uniform sphere, g(r) = g₀ (r/R). Since r = R - d, g_d = g₀ (R - d)/R = g₀ (1 - d/R). At the center (d = R), g = 0.',
      si: 'ඒකාකාර ගෝලයක් තුළ g(r) = g₀ (r/R) වේ. r = R - d බැවින්, g_d = g₀ (R - d)/R = g₀ (1 - d/R) වේ. කේන්ද්‍රයේදී (d = R), g = 0 වේ.',
    },
  },
  {
    id: 'grav-5-1-08',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is the measured value of gravitational acceleration g slightly greater at the poles than at the equator of the Earth?',
      si: 'පෘථිවියේ සමකයට වඩා ධ්‍රැවවලදී මනිනු ලබන ගුරුත්වාකර්ෂණ ත්වරණය g තරමක් වැඩි වීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The Earth rotates faster at the poles than at the equator', si: 'පෘථිවිය සමකයට වඩා ධ්‍රැවවලදී වේගයෙන් භ්‍රමණය වීම' } },
      { id: 'b', text: { en: 'The polar radius is smaller than the equatorial radius, and centrifugal effect due to rotation is zero at the poles', si: 'ධ්‍රැවීය අරය සමක අරයට වඩා කුඩා වීම සහ ධ්‍රැවවලදී භ්‍රමණය නිසා ඇතිවන කේන්ද්‍රාපසාරී ආචරණය ශුන්‍ය වීම' } },
      { id: 'c', text: { en: 'The atmosphere is denser at the poles', si: 'ධ්‍රැවවලදී වායුගෝලයේ ඝනත්වය වැඩි වීම' } },
      { id: 'd', text: { en: 'The Earth’s core is shifted towards the North Pole', si: 'පෘථිවි හරය උත්තර ධ්‍රැවය දෙසට විස්ථාපනය වී තිබීම' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Consider both the oblate spheroidal shape (R_pole < R_eq) and the centripetal acceleration requirement at the equator (ω²R).',
      si: 'පෘථිවියේ පැතලි ගෝලාකාර හැඩය (R_pole < R_eq) සහ සමකයේ කේන්ද්‍රාභිසාරී ත්වරණ අවශ්‍යතාව (ω²R) සලකන්න.',
    },
    solution: {
      en: 'Two factors make g_pole > g_eq: (1) Earth is an oblate spheroid, so polar radius is ~21 km smaller than equatorial radius, making GM/R² larger; (2) at the equator, a portion of gravity provides centripetal acceleration (apparent weight mg_app = mg - mω²R), while at poles ω²R cos²λ = 0.',
      si: 'සාධක දෙකක් නිසා g_pole > g_eq වේ: (1) පෘථිවිය අර්ධ ඉලිප්සාකාර හැඩයක් ගන්නා බැවින් ධ්‍රැවීය අරය සමක අරයට වඩා ~21 km කින් කුඩා වන නිසා GM/R² වැඩි වේ; (2) සමකයේදී භ්‍රමණය නිසා කේන්ද්‍රාපසාරී ආචරණයක් සහිතව g_app = g - ω²R වන අතර ධ්‍රැවවලදී ω²R cos²(90°) = 0 වේ.',
    },
  },
  {
    id: 'grav-5-1-09',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'The mass of the Earth is 81 times the mass of the Moon, and the distance between their centers is 3.84 × 10⁸ m. Find the distance from the center of the Earth to the neutral point between them (where the net gravitational field is zero) in units of 10⁸ m.',
      si: 'පෘථිවියේ ස්කන්ධය චන්ද්‍රයාගේ ස්කන්ධය මෙන් 81 ගුණයකි. ඒවායේ කේන්ද්‍ර අතර දුර 3.84 × 10⁸ m වේ. පෘථිවි කේන්ද්‍රයේ සිට ඒවා අතර ශුද්ධ ගුරුත්වාකර්ෂණ ක්ෂේත්‍රය ශුන්‍ය වන උදාසීන ලක්ෂ්‍යයට ඇති දුර 10⁸ m ඒකකවලින් ගණනය කරන්න.',
    },
    expected: 3.456,
    tolerance: 0.05,
    unit: { en: '× 10⁸ m', si: '× 10⁸ m' },
    hint: {
      en: 'At the neutral point, g_Earth = g_Moon => G M_E / x² = G M_M / (D - x)². Take square roots.',
      si: 'උදාසීන ලක්ෂ්‍යයේදී, g_Earth = g_Moon => G M_E / x² = G M_M / (D - x)². දෙපසම වර්ගමූලය ගන්න.',
    },
    solution: {
      en: 'G(81 M_M)/x² = G M_M / (D - x)² => 9/x = 1/(D - x) => 9(D - x) = x => 10x = 9D => x = 0.9 D. x = 0.9 × 3.84 × 10⁸ m = 3.456 × 10⁸ m.',
      si: 'G(81 M_M)/x² = G M_M / (D - x)² => 9/x = 1/(D - x) => 9(D - x) = x => 10x = 9D => x = 0.9 D වේ. x = 0.9 × 3.84 × 10⁸ m = 3.456 × 10⁸ m වේ.',
    },
  },
  {
    id: 'grav-5-1-10',
    competencyRef: 'Competency 5.1',
    category: 'universal-gravitation',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two point masses M and 4M are separated by a distance d. Where should a third mass m be placed along the line connecting them so that the net gravitational force on m is zero?',
      si: 'M සහ 4M ලක්ෂ්‍යමය ස්කන්ධ දෙකක් අතර දුර d වේ. ඒවා යා කරන රේඛාව මත තුන්වන ස්කන්ධයක් m තැබූ විට ඒ මත ශුද්ධ ගුරුත්වාකර්ෂණ බලය ශුන්‍ය වන්නේ M සිට කුමන දුරකදීද?',
    },
    options: [
      { id: 'a', text: { en: 'd/5 from M', si: 'M සිට d/5 දුරකින්' } },
      { id: 'b', text: { en: 'd/3 from M', si: 'M සිට d/3 දුරකින්' } },
      { id: 'c', text: { en: 'd/2 from M', si: 'M සිට d/2 දුරකින්' } },
      { id: 'd', text: { en: '2d/3 from M', si: 'M සිට 2d/3 දුරකින්' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'GMm/x² = G(4M)m/(d - x)². Take square roots: 1/x = 2/(d - x).',
      si: 'GMm/x² = G(4M)m/(d - x)². වර්ගමූලය ගන්න: 1/x = 2/(d - x).',
    },
    solution: {
      en: 'Equating forces: GMm/x² = 4GMm/(d - x)² => 1/x = 2/(d - x) => d - x = 2x => 3x = d => x = d/3 from M.',
      si: 'බල සමාන කළ විට: GMm/x² = 4GMm/(d - x)² => 1/x = 2/(d - x) => d - x = 2x => 3x = d => x = d/3 (M සිට).',
    },
  },
  {
    id: 'grav-5-1-11',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If the radius of the Earth were to shrink by 1% while its mass remained strictly constant, how would the acceleration due to gravity at the surface change?',
      si: 'පෘථිවියේ ස්කන්ධය නියතව පවතිද්දී එහි අරය 1% කින් හැකිළුණේ නම්, පෘෂ්ඨය මත ගුරුත්වාකර්ෂණ ත්වරණය කෙලෙස වෙනස් වේද?',
    },
    options: [
      { id: 'a', text: { en: 'Increases by approximately 2%', si: 'දළ වශයෙන් 2% කින් වැඩි වේ' } },
      { id: 'b', text: { en: 'Decreases by approximately 2%', si: 'දළ වශයෙන් 2% කින් අඩු වේ' } },
      { id: 'c', text: { en: 'Increases by approximately 1%', si: 'දළ වශයෙන් 1% කින් වැඩි වේ' } },
      { id: 'd', text: { en: 'Remains unchanged', si: 'වෙනස් නොවී පවතී' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'g = GM/R². Using fractional differentiation, Δg/g ≈ -2(ΔR/R).',
      si: 'g = GM/R². භාගික අවකලනයෙන්, Δg/g ≈ -2(ΔR/R).',
    },
    solution: {
      en: 'Since g = GM R⁻², for small changes Δg/g ≈ -2(ΔR/R). If ΔR/R = -1%, then Δg/g ≈ -2(-1%) = +2%. Gravity increases by ~2%.',
      si: 'g = GM R⁻² බැවින්, කුඩා වෙනස්වීම් සඳහා Δg/g ≈ -2(ΔR/R) වේ. ΔR/R = -1% නම්, Δg/g ≈ -2(-1%) = +2% වේ. ගුරුත්වය ~2% කින් වැඩි වේ.',
    },
  },
  {
    id: 'grav-5-1-12',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'At what altitude above the Earth’s surface in kilometers is the gravitational acceleration reduced by 10% from its surface value of 9.80 m s⁻²? Take Earth radius R = 6400 km.',
      si: 'පෘථිවි පෘෂ්ඨයේ ගුරුත්වාකර්ෂණ ත්වරණය 9.80 m s⁻² අගයේ සිට 10% කින් අඩු වන උන්නතාංශය කිලෝමීටර (km) වලින් කවරේද? පෘථිවි අරය R = 6400 km ලෙස ගන්න.',
    },
    expected: 346,
    tolerance: 10,
    unit: { en: 'km', si: 'km' },
    hint: {
      en: 'g_h = 0.90 g₀ => [R / (R + h)]² = 0.90 => R / (R + h) = √0.90 ≈ 0.9487.',
      si: 'g_h = 0.90 g₀ => [R / (R + h)]² = 0.90 => R / (R + h) = √0.90 ≈ 0.9487.',
    },
    solution: {
      en: 'g_h / g₀ = [R / (R + h)]² = 0.90 => R + h = R / √0.90 = 6400 / 0.94868 = 6746.2 km => h = 6746.2 - 6400 ≈ 346 km.',
      si: 'g_h / g₀ = [R / (R + h)]² = 0.90 => R + h = R / √0.90 = 6400 / 0.94868 = 6746.2 km => h = 6746.2 - 6400 ≈ 346 km.',
    },
  },
  {
    id: 'grav-5-1-13',
    competencyRef: 'Competency 5.1',
    category: 'universal-gravitation',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Three identical particles, each of mass m, are situated at the vertices of an equilateral triangle of side length a. What is the magnitude of the net gravitational force experienced by each particle?',
      si: 'එක සමාන m ස්කන්ධ සහිත ලක්ෂ්‍යමය අංශු තුනක් පාදයක දිග a වූ සමපාද ත්‍රිකෝණයක ශීර්ෂ මත පිහිටා ඇත. එක් අංශුවක් මත ක්‍රියා කරන ශුද්ධ ගුරුත්වාකර්ෂණ බලයේ විශාලත්වය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'G m² / a²', si: 'G m² / a²' } },
      { id: 'b', text: { en: '√3 G m² / a²', si: '√3 G m² / a²' } },
      { id: 'c', text: { en: '2 G m² / a²', si: '2 G m² / a²' } },
      { id: 'd', text: { en: '3 G m² / a²', si: '3 G m² / a²' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Each of the other two particles exerts a force F = Gm²/a² at an angle of 60° to each other. Resultant of two equal vectors at 60° is 2F cos(30°) = √3 F.',
      si: 'අනෙක් අංශු දෙක මගින් F = Gm²/a² බැගින් වූ බල දෙකක් එකිනෙකට 60° කෝණයකින් යොදයි. 60° කෝණයකින් ක්‍රියා කරන සමාන දෛශික දෙකක සම්ප්‍රයුක්තය 2F cos(30°) = √3 F වේ.',
    },
    solution: {
      en: 'Each force is F = Gm²/a². The angle between them is 60°. The resultant R = √(F² + F² + 2F² cos 60°) = √(3F²) = √3 F = √3 Gm²/a².',
      si: 'එක් එක් බලය F = Gm²/a² වේ. ඒවා අතර කෝණය 60° කි. සම්ප්‍රයුක්තය R = √(F² + F² + 2F² cos 60°) = √(3F²) = √3 F = √3 Gm²/a² වේ.',
    },
  },
  {
    id: 'grav-5-1-14',
    competencyRef: 'Competency 5.1',
    category: 'field-intensity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the value of the gravitational field intensity at the exact geometric center of a hollow uniform spherical shell of mass M and radius R?',
      si: 'M ස්කන්ධය සහ R අරය සහිත ඒකාකාර කුහර ගෝලීය කබොලක හරියටම ජ්‍යාමිතික කේන්ද්‍රයේදී ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'GM / R²', si: 'GM / R²' } },
      { id: 'b', text: { en: 'GM / (2R²)', si: 'GM / (2R²)' } },
      { id: 'c', text: { en: 'Zero', si: 'ශුන්‍යයකි' } },
      { id: 'd', text: { en: 'Infinite', si: 'අනන්තයකි' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Inside a hollow spherical shell, gravitational forces from diametrically opposite parts cancel each other completely everywhere inside.',
      si: 'කුහර ගෝලීය කබොලක් තුළ ඕනෑම ලක්ෂ්‍යයකදී සම්මුඛ කොටස්වලින් ඇතිවන ගුරුත්වාකර්ෂණ බල එකිනෙක පරිපූර්ණව අවලංගු වේ.',
    },
    solution: {
      en: 'According to Newton’s Shell Theorem, the gravitational field strength everywhere inside a hollow spherical shell is zero, including at the center.',
      si: 'නිව්ටන්ගේ කවච ප්‍රමේයයට (Shell Theorem) අනුව, ඒකාකාර කුහර ගෝලීය කබොලක් තුළ ඕනෑම තැනක (කේන්ද්‍රයද ඇතුළුව) ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව ශුන්‍ය වේ.',
    },
  },

  // ==========================================
  // Competency 5.2: Gravitational Potential & Energy (12 Questions)
  // ==========================================
  {
    id: 'grav-5-2-01',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why is gravitational potential at any finite distance from an isolated mass defined to be negative (taking V = 0 at infinity)?',
      si: 'හුදකලා ස්කන්ධයක සිට පරිමිත දුරකදී ගුරුත්වාකර්ෂණ විභවය ඍණ අගයක් ලෙස අර්ථ දක්වන්නේ ඇයි (අනන්තයේදී V = 0 ලෙස ගනිමින්)?',
    },
    options: [
      { id: 'a', text: { en: 'Gravity is repulsive at long distances', si: 'දුරස්ථ දුරවලදී ගුරුත්වය විකර්ෂණයක් වන නිසා' } },
      { id: 'b', text: { en: 'Attractive gravitational force does work on a mass moving from infinity, so an external agent must apply a restraining force opposite to displacement', si: 'අනන්තයේ සිට ස්කන්ධයක් ගෙන ඒමේදී ආකර්ෂණ ගුරුත්වාකර්ෂණ බලය මගින් කාර්යය කරන බැවින්, බාහිර නියෝජිතයා විස්ථාපනයට ප්‍රතිවිරුද්ධව වැළැක්වීමේ බලයක් යෙදිය යුතු නිසා' } },
      { id: 'c', text: { en: 'Mass is a negative quantity in relativity', si: 'සාපේක්ෂතාවාදයේදී ස්කන්ධය ඍණ රාශියක් වන නිසා' } },
      { id: 'd', text: { en: 'The field strength decreases as distance increases', si: 'දුර වැඩිවන විට ක්ෂේත්‍ර තීව්‍රතාව අඩු වන නිසා' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Work done by an external agent against the field to bring a unit mass from infinity is negative because the field attracts it inwards.',
      si: 'ක්ෂේත්‍රය මගින් ඇතුළට ආකර්ෂණය කරන බැවින් ඒකක ස්කන්ධයක් අනන්තයේ සිට ගෙන ඒමට බාහිර බලය මගින් කෙරෙන කාර්යය ඍණ වේ.',
    },
    solution: {
      en: 'Gravitational force is always attractive. As a mass moves from infinity towards M, the gravitational field does positive work, meaning an external agent must do negative work to bring it without acceleration. Hence V = -GM/r is negative.',
      si: 'ගුරුත්වාකර්ෂණ බලය සැමවිටම ආකර්ෂණීය වේ. ස්කන්ධයක් අනන්තයේ සිට M දෙසට චලනය වීමේදී ක්ෂේත්‍රය මගින් ධන කාර්යයක් කරන බැවින්, ත්වරණයකින් තොරව එය ගෙන ඒමට බාහිර බලය ඍණ කාර්යයක් කරයි. එබැවින් V = -GM/r ඍණ අගයක් ගනී.',
    },
  },
  {
    id: 'grav-5-2-02',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the gravitational potential at the surface of the Earth in units of 10⁷ J kg⁻¹ (as a positive magnitude). Take Earth mass M = 5.972 × 10²⁴ kg, radius R = 6.371 × 10⁶ m, and G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: 'පෘථිවි පෘෂ්ඨය මත ගුරුත්වාකර්ෂණ විභවයේ විශාලත්වය (ධන අගයක් ලෙස) 10⁷ J kg⁻¹ ඒකකවලින් ගණනය කරන්න. පෘථිවි ස්කන්ධය M = 5.972 × 10²⁴ kg, අරය R = 6.371 × 10⁶ m, සහ G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 6.25,
    tolerance: 0.1,
    unit: { en: '× 10⁷ J kg⁻¹', si: '× 10⁷ J kg⁻¹' },
    hint: {
      en: '|V| = GM/R. Compute the numerical magnitude.',
      si: '|V| = GM/R. සංඛ්‍යාත්මක විශාලත්වය ගණනය කරන්න.',
    },
    solution: {
      en: '|V| = GM/R = (6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.371 × 10⁶) = 3.9857 × 10¹⁴ / 6.371 × 10⁶ = 6.256 × 10⁷ J kg⁻¹.',
      si: '|V| = GM/R = (6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.371 × 10⁶) = 3.9857 × 10¹⁴ / 6.371 × 10⁶ = 6.256 × 10⁷ J kg⁻¹ වේ.',
    },
  },
  {
    id: 'grav-5-2-03',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the relationship between gravitational field intensity g and gravitational potential V at a distance r from a point mass?',
      si: 'ලක්ෂ්‍යමය ස්කන්ධයක සිට r දුරකදී ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව g සහ ගුරුත්වාකර්ෂණ විභවය V අතර සම්බන්ධය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'g = dV/dr', si: 'g = dV/dr' } },
      { id: 'b', text: { en: 'g = - dV/dr', si: 'g = - dV/dr' } },
      { id: 'c', text: { en: 'g = - ∫ V dr', si: 'g = - ∫ V dr' } },
      { id: 'd', text: { en: 'g = V / r²', si: 'g = V / r²' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Field points in the direction of steepest potential decrease: g = -dV/dr.',
      si: 'ක්ෂේත්‍රය යොමුවන්නේ විභවය වඩාත්ම සීඝ්‍රයෙන් අඩුවන දිශාවටයි: g = -dV/dr.',
    },
    solution: {
      en: 'The gravitational field strength is the negative gradient of the gravitational potential: g = -dV/dr. Since V = -GM/r, -d/dr(-GM/r) = -GM/r² (radially inward).',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව යනු ගුරුත්වාකර්ෂණ විභවයේ ඍණ අනුක්‍රමණයයි: g = -dV/dr. V = -GM/r බැවින්, -d/dr(-GM/r) = -GM/r² (අරීයව ඇතුළට) වේ.',
    },
  },
  {
    id: 'grav-5-2-04',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following statements about equipotential surfaces in a gravitational field is FALSE?',
      si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක සමවිභව පෘෂ්ඨ පිළිබඳ පහත ප්‍රකාශන අතුරින් අසත්‍ය වන්නේ කවරක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'Gravitational field lines are always perpendicular to equipotential surfaces', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර රේඛා සැමවිටම සමවිභව පෘෂ්ඨවලට ලම්බක වේ' } },
      { id: 'b', text: { en: 'No work is done by gravity when moving a mass along an equipotential surface', si: 'සමවිභව පෘෂ්ඨයක් ඔස්සේ ස්කන්ධයක් ගෙනයාමේදී ගුරුත්වය මගින් කාර්යයක් සිදු නොවේ' } },
      { id: 'c', text: { en: 'Two different equipotential surfaces can intersect at a neutral point', si: 'විවිධ සමවිභව පෘෂ්ඨ දෙකක් උදාසීන ලක්ෂ්‍යයකදී එකිනෙක ඡේදනය විය හැක' } },
      { id: 'd', text: { en: 'For an isolated spherical mass, equipotential surfaces are concentric spheres', si: 'හුදකලා ගෝලීය ස්කන්ධයක් සඳහා සමවිභව පෘෂ්ඨ ඒකකේන්ද්‍රික ගෝල වේ' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Can two surfaces of different constant potential values ever intersect?',
      si: 'විවිධ නියත විභව අගයන් සහිත පෘෂ්ඨ දෙකක් කිසිවිටෙක එකිනෙක ඡේදනය විය හැකිද?',
    },
    solution: {
      en: 'Equipotential surfaces can NEVER intersect, because if they did, the intersection line would have two different potential values simultaneously, which is impossible.',
      si: 'සමවිභව පෘෂ්ඨ කිසිවිටෙකත් එකිනෙක ඡේදනය නොවේ. එසේ වුවහොත් ඡේදන රේඛාව මත එකවර වෙනස් විභව අගයන් දෙකක් පැවතිය යුතු වන අතර එය භෞතිකව විය නොහැක.',
    },
  },
  {
    id: 'grav-5-2-05',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A mass m is lifted from the surface of Earth (mass M, radius R) to an altitude h = R above the surface. What is the increase in its gravitational potential energy?',
      si: 'ස්කන්ධය m වූ වස්තුවක් පෘථිවි (ස්කන්ධය M, අරය R) පෘෂ්ඨයේ සිට h = R උන්නතාංශයකට ඔසවනු ලැබේ. එහි ගුරුත්වාකර්ෂණ විභව ශක්තියේ වැඩිවීම කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'mgR', si: 'mgR' } },
      { id: 'b', text: { en: '1/2 mgR', si: '1/2 mgR' } },
      { id: 'c', text: { en: '2 mgR', si: '2 mgR' } },
      { id: 'd', text: { en: '1/4 mgR', si: '1/4 mgR' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'ΔU = U_final - U_initial = -GMm/(2R) - (-GMm/R) = GMm/(2R). Recall g = GM/R².',
      si: 'ΔU = U_final - U_initial = -GMm/(2R) - (-GMm/R) = GMm/(2R). g = GM/R² බව සිහිපත් කරන්න.',
    },
    solution: {
      en: 'ΔU = -GMm/(2R) - (-GMm/R) = GMm / (2R). Since GM = gR², ΔU = (gR²)m / (2R) = 1/2 mgR.',
      si: 'ΔU = -GMm/(2R) - (-GMm/R) = GMm / (2R) වේ. GM = gR² බැවින්, ΔU = (gR²)m / (2R) = 1/2 mgR වේ.',
    },
  },
  {
    id: 'grav-5-2-06',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 500 kg satellite is moved from an initial orbital radius of 7.0 × 10⁶ m to a higher orbit of radius 1.4 × 10⁷ m around the Earth (M = 5.972 × 10²⁴ kg). Calculate the change in gravitational potential energy in gigajoules (GJ). Take G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: '500 kg චන්ද්‍රිකාවක් පෘථිවිය (M = 5.972 × 10²⁴ kg) වටා 7.0 × 10⁶ m ආරම්භක කක්ෂීය අරයක සිට 1.4 × 10⁷ m උසස් කක්ෂයකට ගෙන යනු ලැබේ. ගුරුත්වාකර්ෂණ විභව ශක්තියේ වෙනස ගිගාජූල් (GJ) වලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 14.23,
    tolerance: 0.3,
    unit: { en: 'GJ', si: 'GJ' },
    hint: {
      en: 'ΔU = GMm (1/r₁ - 1/r₂). 1 GJ = 10⁹ J.',
      si: 'ΔU = GMm (1/r₁ - 1/r₂). 1 GJ = 10⁹ J වේ.',
    },
    solution: {
      en: 'GMm = 6.674 × 10⁻¹¹ × 5.972 × 10²⁴ × 500 = 1.993 × 10¹⁷ N m² kg. ΔU = 1.993 × 10¹⁷ × (1/(7.0 × 10⁶) - 1/(1.4 × 10⁷)) = 1.993 × 10¹⁷ × (1.4286 × 10⁻⁷ - 0.7143 × 10⁻⁷) = 1.993 × 10¹⁷ × 7.143 × 10⁻⁸ ≈ 1.423 × 10¹⁰ J = 14.23 GJ.',
      si: 'GMm = 6.674 × 10⁻¹¹ × 5.972 × 10²⁴ × 500 = 1.993 × 10¹⁷ N m² kg. ΔU = 1.993 × 10¹⁷ × (1/7.0×10⁶ - 1/1.4×10⁷) = 1.993 × 10¹⁷ × (0.7143 × 10⁻⁷) = 1.423 × 10¹⁰ J = 14.23 GJ වේ.',
    },
  },
  {
    id: 'grav-5-2-07',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two masses m and 2m are held at distance 2a apart. What is the gravitational potential at the midpoint between them?',
      si: 'm සහ 2m ස්කන්ධ දෙකක් එකිනෙකින් 2a දුරකින් රඳවා ඇත. ඒවා අතර මධ්‍ය ලක්ෂ්‍යයේදී ගුරුත්වාකර්ෂණ විභවය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: '- GM / a', si: '- GM / a' } },
      { id: 'b', text: { en: '- 3Gm / a', si: '- 3Gm / a' } },
      { id: 'c', text: { en: '- 2Gm / a', si: '- 2Gm / a' } },
      { id: 'd', text: { en: 'Zero', si: 'ශුන්‍යයකි' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Gravitational potential is a scalar: V_total = V₁ + V₂. The midpoint is at distance a from each mass.',
      si: 'ගුරුත්වාකර්ෂණ විභවය අදිශයකි: V_total = V₁ + V₂. මධ්‍ය ලක්ෂ්‍යය එක් එක් ස්කන්ධයේ සිට a දුරකින් පිහිටයි.',
    },
    solution: {
      en: 'V = -Gm/a + (-G(2m)/a) = -3Gm/a. Since potential is a scalar, potentials add algebraically.',
      si: 'V = -Gm/a + (-G(2m)/a) = -3Gm/a වේ. විභවය අදිශ රාශියක් බැවින් වීජීයව එකතු වේ.',
    },
  },
  {
    id: 'grav-5-2-08',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How much work is required to bring a 10 kg mass from infinity to a point where the gravitational potential is -40 MJ kg⁻¹?',
      si: 'ගුරුත්වාකර්ෂණ විභවය -40 MJ kg⁻¹ වූ ලක්ෂ්‍යයකට අනන්තයේ සිට 10 kg ස්කන්ධයක් ගෙන ඒම සඳහා බාහිර බලයකින් කළ යුතු කාර්යය කොපමණද?',
    },
    options: [
      { id: 'a', text: { en: '+400 MJ', si: '+400 MJ' } },
      { id: 'b', text: { en: '-400 MJ', si: '-400 MJ' } },
      { id: 'c', text: { en: '+4 MJ', si: '+4 MJ' } },
      { id: 'd', text: { en: '-4 MJ', si: '-4 MJ' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'W_ext = m (V_final - V_initial) = m (V - 0).',
      si: 'W_ext = m (V_final - V_initial) = m (V - 0).',
    },
    solution: {
      en: 'W_ext = m ΔV = 10 kg × (-40 × 10⁶ J kg⁻¹ - 0) = -400 × 10⁶ J = -400 MJ. The negative sign indicates work is done by the field, not by the external agent.',
      si: 'W_ext = m ΔV = 10 kg × (-40 × 10⁶ J kg⁻¹ - 0) = -400 × 10⁶ J = -400 MJ වේ. ඍණ ලකුණින් පෙන්නුම් කරන්නේ කාර්යය කරනු ලබන්නේ ක්ෂේත්‍රය මගින් බවයි.',
    },
  },
  {
    id: 'grav-5-2-09',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A body is released from rest at a height h above Earth’s surface. Neglecting air resistance, what is its speed v upon reaching the surface (Earth radius R, surface gravity g)?',
      si: 'පෘථිවි පෘෂ්ඨයට ඉහළින් h උසකදී නිශ්චලතාවයේ සිට වස්තුවක් නිදහස් කරනු ලැබේ. වායු ප්‍රතිරෝධය නොසලකා, පෘෂ්ඨය මතට ළඟා වන විට එහි ප්‍රවේගය v කවරේද (පෘථිවි අරය R, පෘෂ්ඨික ගුරුත්වය g)?',
    },
    options: [
      { id: 'a', text: { en: 'v = √(2gh)', si: 'v = √(2gh)' } },
      { id: 'b', text: { en: 'v = √[2gh / (1 + h/R)]', si: 'v = √[2gh / (1 + h/R)]' } },
      { id: 'c', text: { en: 'v = √[2gh (1 + h/R)]', si: 'v = √[2gh (1 + h/R)]' } },
      { id: 'd', text: { en: 'v = √(gR)', si: 'v = √(gR)' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Conservation of mechanical energy: 1/2 m v² = U_initial - U_final = GMm(1/R - 1/(R+h)). Substitute GM = gR².',
      si: 'යාන්ත්‍රික ශක්ති සංස්ථිතියෙන්: 1/2 m v² = GMm(1/R - 1/(R+h)). GM = gR² ආදේශ කරන්න.',
    },
    solution: {
      en: '1/2 m v² = GMm [ (R + h - R) / (R(R + h)) ] = GMm h / [R²(1 + h/R)]. Since GM/R² = g, 1/2 v² = gh / (1 + h/R) => v = √[2gh / (1 + h/R)].',
      si: '1/2 m v² = GMm [ h / (R(R + h)) ] = (GM/R²) · mgh / (1 + h/R) = mgh / (1 + h/R) => v = √[2gh / (1 + h/R)] වේ.',
    },
  },
  {
    id: 'grav-5-2-10',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A projectile is fired vertically upward from Earth’s surface with initial speed 4.0 km s⁻¹. To what maximum altitude in kilometers will it rise? Take Earth radius R = 6400 km and g = 9.80 m s⁻².',
      si: 'පෘථිවි පෘෂ්ඨයේ සිට 4.0 km s⁻¹ ආරම්භක ප්‍රවේගයකින් සිරස්ව ඉහළට ප්‍රක්ෂිප්තයක් විදිනු ලැබේ. එය ළඟා වන උපරිම උන්නතාංශය කිලෝමීටර (km) වලින් කවරේද? පෘථිවි අරය R = 6400 km සහ g = 9.80 m s⁻² ලෙස ගන්න.',
    },
    expected: 935,
    tolerance: 30,
    unit: { en: 'km', si: 'km' },
    hint: {
      en: 'v² = 2gh / (1 + h/R) => v²(1 + h/R) = 2gh => h = v² / (2g - v²/R).',
      si: 'v² = 2gh / (1 + h/R) => v²(1 + h/R) = 2gh => h = v² / (2g - v²/R).',
    },
    solution: {
      en: 'v = 4000 m/s. v² = 1.6 × 10⁷ m² s⁻². 2g = 19.6 m s⁻². v²/R = 1.6 × 10⁷ / 6.4 × 10⁶ = 2.5 m s⁻². h = 1.6 × 10⁷ / (19.6 - 2.5) = 1.6 × 10⁷ / 17.1 ≈ 935,670 m ≈ 936 km.',
      si: 'v = 4000 m/s. v² = 1.6 × 10⁷ m² s⁻². 2g = 19.6 m s⁻². v²/R = 1.6 × 10⁷ / 6.4 × 10⁶ = 2.5 m s⁻². h = 1.6 × 10⁷ / (19.6 - 2.5) = 1.6 × 10⁷ / 17.1 ≈ 936 km වේ.',
    },
  },
  {
    id: 'grav-5-2-11',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the shape of equipotential lines in a uniform gravitational field (such as near the Earth’s surface over a small laboratory region)?',
      si: 'ඒකාකාර ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක (විද්‍යාගාරයක් තුළ පෘථිවි පෘෂ්ඨය ආසන්නයේ වැනි) සමවිභව රේඛා/පෘෂ්ඨවල හැඩය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Concentric circles', si: 'ඒකකේන්ද්‍රික වෘත්ත' } },
      { id: 'b', text: { en: 'Equally spaced horizontal parallel planes', si: 'සමාන පරතරයකින් යුත් තිරස් සමාන්තර තල' } },
      { id: 'c', text: { en: 'Vertical lines parallel to field lines', si: 'ක්ෂේත්‍ර රේඛාවලට සමාන්තර සිරස් රේඛා' } },
      { id: 'd', text: { en: 'Parabolic curves', si: 'පරවළයික වක්‍ර' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'In a uniform field directed downward, V = gz. Planes of constant z are horizontal planes.',
      si: 'පහළට යොමුවූ ඒකාකාර ක්ෂේත්‍රයක, V = gz වේ. නියත z තල තිරස් තල වේ.',
    },
    solution: {
      en: 'In a uniform gravitational field where field lines are parallel vertical lines, equipotential surfaces are perpendicular to the field, forming equally spaced horizontal flat surfaces.',
      si: 'ක්ෂේත්‍ර රේඛා සිරස් සමාන්තර රේඛා වන ඒකාකාර ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක, සමවිභව පෘෂ්ඨ ක්ෂේත්‍රයට ලම්බක වන බැවින් ඒවා සමාන පරතරයකින් යුතු තිරස් තල වේ.',
    },
  },
  {
    id: 'grav-5-2-12',
    competencyRef: 'Competency 5.2',
    category: 'gravitational-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Four identical particles of mass m are situated at the four corners of a square of side L. What is the total gravitational potential energy of this system?',
      si: 'L පාදයක් සහිත සමචතුරස්‍රයක කොන් හතර මත m බැගින් වූ එක සමාන අංශු හතරක් පිහිටා ඇත. මෙම පද්ධතියේ මුළු ගුරුත්වාකර්ෂණ විභව ශක්තිය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: '- 4 Gm² / L', si: '- 4 Gm² / L' } },
      { id: 'b', text: { en: '- (4 + √2) Gm² / L', si: '- (4 + √2) Gm² / L' } },
      { id: 'c', text: { en: '- (4 + 1/√2) Gm² / L', si: '- (4 + 1/√2) Gm² / L' } },
      { id: 'd', text: { en: '- 6 Gm² / L', si: '- 6 Gm² / L' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Count all pairs: 4 pairs along sides of length L, and 2 pairs along diagonals of length √2 L.',
      si: 'සියලු යුගල ගණන් කරන්න: L දිගැති පාද ඔස්සේ යුගල 4ක් සහ √2 L දිගැති විකර්ණ ඔස්සේ යුගල 2ක් ඇත.',
    },
    solution: {
      en: 'Total pairs = 4C2 = 6 pairs. 4 pairs have distance L (energy -4Gm²/L) and 2 pairs have distance √2 L (energy -2Gm²/(√2 L) = -√2 Gm²/L). Total U = - (4 + √2) Gm²/L.',
      si: 'මුළු යුගල සංඛ්‍යාව 4C2 = 6 කි. දුර L වූ යුගල 4ක් (-4Gm²/L) සහ දුර √2 L වූ විකර්ණ යුගල 2ක් (-2Gm²/(√2 L) = -√2 Gm²/L) ඇත. මුළු U = - (4 + √2) Gm²/L වේ.',
    },
  },

  // ==========================================
  // Competency 5.3: Orbital Mechanics & Satellite Motion (14 Questions)
  // ==========================================
  {
    id: 'grav-5-3-01',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What provides the necessary centripetal force to keep a satellite in a circular orbit around a planet?',
      si: 'ග්‍රහලෝකයක් වටා වෘත්තාකාර කක්ෂයක චන්ද්‍රිකාවක් රඳවා තබා ගැනීමට අවශ්‍ය කේන්ද්‍රාභිසාරී බලය සපයනු ලබන්නේ කුමක් මගින්ද?',
    },
    options: [
      { id: 'a', text: { en: 'Atmospheric pressure', si: 'වායුගෝලීය පීඩනය' } },
      { id: 'b', text: { en: 'The gravitational attraction between the planet and the satellite', si: 'ග්‍රහලෝකය සහ චන්ද්‍රිකාව අතර ගුරුත්වාකර්ෂණ ආකර්ෂණය' } },
      { id: 'c', text: { en: 'Solar radiation pressure', si: 'සූර්ය විකිරණ පීඩනය' } },
      { id: 'd', text: { en: 'Centrifugal reaction force', si: 'කේන්ද්‍රාපසාරී ප්‍රතික්‍රියා බලය' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'F_c = m v² / r is provided by Newton’s gravitational force F_g = GMm/r².',
      si: 'F_c = m v² / r සපයනු ලබන්නේ නිව්ටන්ගේ ගුරුත්වාකර්ෂණ බලය F_g = GMm/r² මගිනි.',
    },
    solution: {
      en: 'The gravitational attraction F = GMm/r² acts toward the center of the planet and supplies the centripetal force m v²/r required to sustain uniform circular motion.',
      si: 'ග්‍රහලෝකයේ කේන්ද්‍රය දෙසට ක්‍රියා කරන ගුරුත්වාකර්ෂණ ආකර්ෂණ බලය F = GMm/r² මගින් ඒකාකාර වෘත්ත චලිතය පවත්වා ගැනීමට අවශ්‍ය කේන්ද්‍රාභිසාරී බලය m v²/r සපයයි.',
    },
  },
  {
    id: 'grav-5-3-02',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the orbital speed in km s⁻¹ of the International Space Station (ISS) orbiting at an altitude of 400 km above Earth’s surface. Take Earth radius R = 6.371 × 10⁶ m, mass M = 5.972 × 10²⁴ kg, and G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: 'පෘථිවි පෘෂ්ඨයට 400 km ඉහළින් කක්ෂගත ජාත්‍යන්තර අභ්‍යවකාශ මධ්‍යස්ථානයේ (ISS) කක්ෂීය ප්‍රවේගය km s⁻¹ වලින් ගණනය කරන්න. පෘථිවි අරය R = 6.371 × 10⁶ m, ස්කන්ධය M = 5.972 × 10²⁴ kg, සහ G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 7.67,
    tolerance: 0.1,
    unit: { en: 'km s⁻¹', si: 'km s⁻¹' },
    hint: {
      en: 'r = R + h = 6.771 × 10⁶ m. v = √(GM/r). Convert to km/s.',
      si: 'r = R + h = 6.771 × 10⁶ m. v = √(GM/r). km/s බවට හරවන්න.',
    },
    solution: {
      en: 'r = 6.371 × 10⁶ + 400 × 10³ = 6.771 × 10⁶ m. v = √[(6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.771 × 10⁶)] = √(3.9857 × 10¹⁴ / 6.771 × 10⁶) = √(5.8865 × 10⁷) ≈ 7672 m/s = 7.67 km s⁻¹.',
      si: 'r = 6.771 × 10⁶ m. v = √[(6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.771 × 10⁶)] = √(5.8865 × 10⁷) ≈ 7672 m/s = 7.67 km s⁻¹ වේ.',
    },
  },
  {
    id: 'grav-5-3-03',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Satellite A orbits at radius r with period T. Satellite B orbits around the same planet at radius 4r. What is the orbital period of satellite B?',
      si: 'චන්ද්‍රිකා A, r අරයක් සහිත කක්ෂයක T ආවර්ත කාලයකින් භ්‍රමණය වේ. එම ග්‍රහලෝකය වටාම 4r අරයක් සහිත කක්ෂයක භ්‍රමණය වන B චන්ද්‍රිකාවේ ආවර්ත කාලය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: '2T', si: '2T' } },
      { id: 'b', text: { en: '4T', si: '4T' } },
      { id: 'c', text: { en: '8T', si: '8T' } },
      { id: 'd', text: { en: '16T', si: '16T' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Kepler’s Third Law states T² ∝ r³. (T_B / T_A) = (r_B / r_A)^(3/2).',
      si: 'කෙප්ලර්ගේ තුන්වන නියමයට අනුව T² ∝ r³ වේ. (T_B / T_A) = (r_B / r_A)^(3/2).',
    },
    solution: {
      en: 'T² ∝ r³ => T_B / T_A = (4r / r)^(3/2) = 4^(3/2) = (√4)³ = 2³ = 8. Thus T_B = 8T.',
      si: 'T² ∝ r³ => T_B / T_A = (4r / r)^(3/2) = 4^(3/2) = (√4)³ = 2³ = 8. එබැවින් T_B = 8T වේ.',
    },
  },
  {
    id: 'grav-5-3-04',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'For a satellite of mass m in a circular orbit of radius r around a planet of mass M, what is its total mechanical energy E in terms of its kinetic energy K?',
      si: 'M ස්කන්ධයක් සහිත ග්‍රහලෝකයක් වටා r අරැති වෘත්තාකාර කක්ෂයක ගමන් කරන m ස්කන්ධැති චන්ද්‍රිකාවක චාලක ශක්තිය K නම්, එහි මුළු යාන්ත්‍රික ශක්තිය E කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'E = + K', si: 'E = + K' } },
      { id: 'b', text: { en: 'E = - K', si: 'E = - K' } },
      { id: 'c', text: { en: 'E = - 2K', si: 'E = - 2K' } },
      { id: 'd', text: { en: 'E = + 2K', si: 'E = + 2K' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'K = GMm/(2r), U = -GMm/r. Add K + U.',
      si: 'K = GMm/(2r), U = -GMm/r. K + U එකතු කරන්න.',
    },
    solution: {
      en: 'K = GMm/(2r) and U = -GMm/r = -2K. Total mechanical energy E = K + U = K - 2K = -K = -GMm/(2r).',
      si: 'K = GMm/(2r) සහ U = -GMm/r = -2K වේ. මුළු යාන්ත්‍රික ශක්තිය E = K + U = K - 2K = -K = -GMm/(2r) වේ.',
    },
  },
  {
    id: 'grav-5-3-05',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What happens to the speed and orbital radius of a low Earth orbit satellite when it encounters slight atmospheric drag over time?',
      si: 'පහළ පෘථිවි කක්ෂයක ඇති චන්ද්‍රිකාවක් කාලයත් සමග සුළු වායුගෝලීය ඝර්ෂණයකට ලක්වන විට එහි ප්‍රවේගයට සහ කක්ෂීය අරයට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'a', text: { en: 'Radius decreases and speed decreases', si: 'අරය අඩු වන අතර ප්‍රවේගයද අඩු වේ' } },
      { id: 'b', text: { en: 'Radius increases and speed increases', si: 'අරය වැඩි වන අතර ප්‍රවේගය වැඩි වේ' } },
      { id: 'c', text: { en: 'Radius decreases and speed increases', si: 'අරය අඩු වන අතර ප්‍රවේගය වැඩි වේ' } },
      { id: 'd', text: { en: 'Radius remains unchanged but speed decreases', si: 'අරය නොවෙනස්ව පවතින නමුත් ප්‍රවේගය අඩු වේ' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Drag removes total energy (E becomes more negative => r decreases). Since v = √(GM/r), a smaller r means a higher orbital speed!',
      si: 'ඝර්ෂණය මුළු ශක්තිය ඉවත් කරයි (E වඩාත් ඍණ වේ => r අඩු වේ). v = √(GM/r) බැවින් කුඩා r යනු වැඩි කක්ෂීය ප්‍රවේගයකි!',
    },
    solution: {
      en: 'Atmospheric drag causes a loss of total mechanical energy (E = -GMm/2r decreases, so r decreases). In the lower orbit, the potential energy loss is twice the kinetic energy gain, so the orbital speed v = √(GM/r) actually increases (orbital paradox).',
      si: 'වායුගෝලීය ඝර්ෂණය නිසා මුළු යාන්ත්‍රික ශක්තිය ක්ෂය වේ (E = -GMm/2r වඩාත් ඍණ වන බැවින් r අඩු වේ). පහළ කක්ෂයේදී විභව ශක්ති හානියෙන් අඩක් චාලක ශක්තිය බවට පත්වන බැවින්, v = √(GM/r) අනුව චන්ද්‍රිකාවේ ප්‍රවේගය සත්‍ය වශයෙන්ම වැඩි වේ.',
    },
  },
  {
    id: 'grav-5-3-06',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 1200 kg satellite orbits the Earth at an orbital radius of 8.0 × 10⁶ m. What is its binding energy in gigajoules (GJ)? Take GM_Earth = 3.986 × 10¹⁴ N m² kg⁻¹.',
      si: '1200 kg චන්ද්‍රිකාවක් 8.0 × 10⁶ m කක්ෂීය අරයකින් පෘථිවිය වටා භ්‍රමණය වේ. එහි බැඳීම් ශක්තිය (binding energy) ගිගාජූල් (GJ) වලින් කොපමණද? GM_Earth = 3.986 × 10¹⁴ N m² kg⁻¹ ලෙස ගන්න.',
    },
    expected: 29.9,
    tolerance: 0.5,
    unit: { en: 'GJ', si: 'GJ' },
    hint: {
      en: 'Binding energy is the energy required to remove the satellite to infinity: B.E. = -E = GMm / (2r).',
      si: 'බැඳීම් ශක්තිය යනු චන්ද්‍රිකාව අනන්තයට ගෙන යාමට අවශ්‍ය ශක්තියයි: B.E. = -E = GMm / (2r).',
    },
    solution: {
      en: 'B.E. = GMm / (2r) = (3.986 × 10¹⁴ × 1200) / (2 × 8.0 × 10⁶) = 4.7832 × 10¹⁷ / 1.6 × 10⁷ = 2.9895 × 10¹⁰ J ≈ 29.9 GJ.',
      si: 'B.E. = GMm / (2r) = (3.986 × 10¹⁴ × 1200) / (2 × 8.0 × 10⁶) = 4.7832 × 10¹⁷ / 1.6 × 10⁷ = 2.9895 × 10¹⁰ J ≈ 29.9 GJ වේ.',
    },
  },
  {
    id: 'grav-5-3-07',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Two satellites of masses m₁ and m₂ (m₁ = 2m₂) orbit the Earth in the same circular orbit of radius r. Which statement correctly compares their orbital speeds and periods?',
      si: 'm₁ සහ m₂ (m₁ = 2m₂) ස්කන්ධ සහිත චන්ද්‍රිකා දෙකක් පෘථිවිය වටා එකම r අරැති වෘත්තාකාර කක්ෂයක ගමන් කරයි. ඒවායේ කක්ෂීය ප්‍රවේග සහ ආවර්ත කාල නිවැරදිව සසඳන ප්‍රකාශනය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Satellite 1 has twice the speed of satellite 2', si: 'චන්ද්‍රිකා 1 හි ප්‍රවේගය චන්ද්‍රිකා 2 මෙන් දෙගුණයකි' } },
      { id: 'b', text: { en: 'Satellite 1 has half the period of satellite 2', si: 'චන්ද්‍රිකා 1 හි ආවර්ත කාලය චන්ද්‍රිකා 2 න් අඩකි' } },
      { id: 'c', text: { en: 'Both satellites have identical orbital speed and identical period', si: 'චන්ද්‍රිකා දෙකටම එකම කක්ෂීය ප්‍රවේගය සහ එකම ආවර්ත කාලය ඇත' } },
      { id: 'd', text: { en: 'Satellite 1 has √2 times the speed of satellite 2', si: 'චන්ද්‍රිකා 1 හි ප්‍රවේගය චන්ද්‍රිකා 2 මෙන් √2 ගුණයකි' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Orbital speed v = √(GM/r) and period T = 2π√(r³/GM) are independent of the satellite’s mass m.',
      si: 'කක්ෂීය ප්‍රවේගය v = √(GM/r) සහ ආවර්ත කාලය T = 2π√(r³/GM) චන්ද්‍රිකාවේ m ස්කන්ධය මත රඳා නොපවතී.',
    },
    solution: {
      en: 'Both orbital speed v = √(GM/r) and orbital period T = 2π√(r³/GM) depend only on the central body’s mass M and orbital radius r, and are completely independent of the satellite mass.',
      si: 'කක්ෂීය ප්‍රවේගය v = √(GM/r) සහ ආවර්ත කාලය T = 2π√(r³/GM) රඳා පවතින්නේ කේන්ද්‍රීය වස්තුවේ ස්කන්ධය M සහ කක්ෂීය අරය r මත පමණක් වන අතර, චන්ද්‍රිකාවේ ස්කන්ධය මත කිසිසේත් රඳා නොපවතී.',
    },
  },
  {
    id: 'grav-5-3-08',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'The Moon orbits the Earth at an average distance of 3.84 × 10⁸ m with an orbital period of 27.3 days (2.36 × 10⁶ s). Using this data, calculate the mass of the Earth in units of 10²⁴ kg. Take G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: 'චන්ද්‍රයා 3.84 × 10⁸ m සාමාන්‍ය දුරකින් දින 27.3 ක (2.36 × 10⁶ s) ආවර්ත කාලයකින් පෘථිවිය වටා පරිභ්‍රමණය වේ. මෙම දත්ත ඇසුරෙන් පෘථිවියේ ස්කන්ධය 10²⁴ kg ඒකකවලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 6.02,
    tolerance: 0.2,
    unit: { en: '× 10²⁴ kg', si: '× 10²⁴ kg' },
    hint: {
      en: 'Use Kepler’s Third Law: M = 4π² r³ / (G T²).',
      si: 'කෙප්ලර්ගේ තුන්වන නියමය භාවිත කරන්න: M = 4π² r³ / (G T²).',
    },
    solution: {
      en: 'M = 4π² r³ / (G T²) = [4 × 9.8696 × (3.84 × 10⁸)³] / [6.674 × 10⁻¹¹ × (2.36 × 10⁶)²] = [39.478 × 5.6623 × 10²⁵] / [6.674 × 10⁻¹¹ × 5.5696 × 10¹²] = 2.2354 × 10²⁷ / 3.717 × 10² ≈ 6.014 × 10²⁴ kg.',
      si: 'M = 4π² r³ / (G T²) = [4 × π² × (3.84 × 10⁸)³] / [6.674 × 10⁻¹¹ × (2.36 × 10⁶)²] ≈ 6.01 × 10²⁴ kg.',
    },
  },
  {
    id: 'grav-5-3-09',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'An astronaut inside an orbiting spacecraft experiences "weightlessness" primarily because:',
      si: 'කක්ෂගත අභ්‍යවකාශ යානයක් තුළ සිටින ගගනගාමියෙකු "භාර රහිත බව" අත්විඳීමට මූලික හේතුව කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'There is zero gravitational force acting on the astronaut in space', si: 'අභ්‍යවකාශයේදී ගගනගාමියා මත කිසිදු ගුරුත්වාකර්ෂණ බලයක් ක්‍රියා නොකිරීම' } },
      { id: 'b', text: { en: 'Both the astronaut and the spacecraft are in continuous free fall toward the Earth with the same acceleration', si: 'ගගනගාමියා සහ අභ්‍යවකාශ යානය යන දෙකම එකම ත්වරණයෙන් පෘථිවිය දෙසට නොකඩවා නිදහස් වැටීමේ යෙදීම' } },
      { id: 'c', text: { en: 'Centrifugal force cancels gravitational force completely in an inertial frame', si: 'අවස්ථිතික රාමුවකදී කේන්ද්‍රාපසාරී බලය මගින් ගුරුත්වාකර්ෂණ බලය සම්පූර්ණයෙන්ම අවලංගු වීම' } },
      { id: 'd', text: { en: 'The air inside the spacecraft has zero density', si: 'අභ්‍යවකාශ යානය තුළ වාතයේ ඝනත්වය ශුන්‍ය වීම' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Gravity at ISS altitude is still ~90% of surface gravity. Apparent weight is zero because reaction force R = 0 in free fall.',
      si: 'ISS උන්නතාංශයේදීද ගුරුත්වය පෘෂ්ඨික අගයෙන් ~90% කි. පෙනෙන බර ශුන්‍ය වන්නේ නිදහස් වැටීමේදී ප්‍රතික්‍රියා බලය R = 0 වන බැවිනි.',
    },
    solution: {
      en: 'Gravitational attraction is NOT zero (at 400 km it is still ~8.8 m s⁻²). The astronaut and the spacecraft have the same gravitational acceleration toward Earth, so there is no normal reaction force between them (R = 0, apparent weightlessness).',
      si: 'ගුරුත්වාකර්ෂණ බලය ශුන්‍ය නොවේ (400 km හිදීද එය ~8.8 m s⁻² පමණ වේ). ගගනගාමියා සහ යානය යන දෙකම පෘථිවිය දෙසට එකම ත්වරණයෙන් නිදහසේ වැටෙන බැවින් යානයේ බිත්තියෙන් අභ්‍යවකාශගාමියා මත අභිලම්භ ප්‍රතික්‍රියාවක් (R = 0) ඇති නොවේ.',
    },
  },
  {
    id: 'grav-5-3-10',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If a satellite in circular orbit of radius r has kinetic energy K and gravitational potential energy U, what is the ratio K / U?',
      si: 'r අරැති වෘත්තාකාර කක්ෂයක ඇති චන්ද්‍රිකාවක චාලක ශක්තිය K සහ ගුරුත්වාකර්ෂණ විභව ශක්තිය U නම්, K / U අනුපාතය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: '- 1/2', si: '- 1/2' } },
      { id: 'b', text: { en: '+ 1/2', si: '+ 1/2' } },
      { id: 'c', text: { en: '- 1', si: '- 1' } },
      { id: 'd', text: { en: '- 2', si: '- 2' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'K = + GMm/(2r) and U = - GMm/r.',
      si: 'K = + GMm/(2r) සහ U = - GMm/r වේ.',
    },
    solution: {
      en: 'K = GMm/(2r) and U = -GMm/r. Thus K / U = [GMm/(2r)] / [-GMm/r] = - 1/2.',
      si: 'K = GMm/(2r) සහ U = -GMm/r බැවින් K / U = [GMm/(2r)] / [-GMm/r] = - 1/2 වේ.',
    },
  },
  {
    id: 'grav-5-3-11',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 200 kg satellite orbits Earth in a circular orbit at an altitude of 1000 km. How much additional energy in gigajoules (GJ) must be supplied to move it into a higher circular orbit of altitude 2000 km? Take Earth radius R = 6400 km, GM = 4.0 × 10¹⁴ N m² kg⁻¹.',
      si: '200 kg චන්ද්‍රිකාවක් පෘථිවිය වටා 1000 km උන්නතාංශයක වෘත්තාකාර කක්ෂයක ගමන් කරයි. එය 2000 km උන්නතාංශයක ඉහළ වෘත්තාකාර කක්ෂයකට මාරු කිරීම සඳහා සැපයිය යුතු අමතර ශක්තිය ගිගාජූල් (GJ) වලින් කවරේද? පෘථිවි අරය R = 6400 km, GM = 4.0 × 10¹⁴ N m² kg⁻¹ ලෙස ගන්න.',
    },
    expected: 0.64,
    tolerance: 0.05,
    unit: { en: 'GJ', si: 'GJ' },
    hint: {
      en: 'ΔE = E₂ - E₁ = -GMm/(2r₂) - (-GMm/(2r₁)) = (GMm/2) (1/r₁ - 1/r₂). Note r₁ = 7400 km, r₂ = 8400 km.',
      si: 'ΔE = E₂ - E₁ = (GMm/2) (1/r₁ - 1/r₂). r₁ = 7400 km, r₂ = 8400 km බව සලකන්න.',
    },
    solution: {
      en: 'r₁ = 7.4 × 10⁶ m, r₂ = 8.4 × 10⁶ m. GMm/2 = 4.0 × 10¹⁴ × 200 / 2 = 4.0 × 10¹⁶ J m. ΔE = 4.0 × 10¹⁶ × (1/(7.4 × 10⁶) - 1/(8.4 × 10⁶)) = 4.0 × 10¹⁶ × (1.3514 × 10⁻⁷ - 1.1905 × 10⁻⁷) = 4.0 × 10¹⁶ × 1.609 × 10⁻⁸ ≈ 6.44 × 10⁸ J = 0.644 GJ.',
      si: 'r₁ = 7.4 × 10⁶ m, r₂ = 8.4 × 10⁶ m. GMm/2 = 4.0 × 10¹⁶ J m. ΔE = 4.0 × 10¹⁶ × (1/7.4×10⁶ - 1/8.4×10⁶) = 4.0 × 10¹⁶ × 1.609 × 10⁻⁸ ≈ 0.644 GJ වේ.',
    },
  },
  {
    id: 'grav-5-3-12',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the period of revolution of a satellite orbiting just grazing the surface of a spherical planet of uniform density ρ?',
      si: 'ඒකාකාර ඝනත්වය ρ වූ ගෝලීය ග්‍රහලෝකයක පෘෂ්ඨය ස්පර්ශ වන තරම් ආසන්නයෙන් භ්‍රමණය වන චන්ද්‍රිකාවක ආවර්ත කාලය ප්‍රකාශ වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'T = √(3π / Gρ)', si: 'T = √(3π / Gρ)' } },
      { id: 'b', text: { en: 'T = √(4π² / Gρ)', si: 'T = √(4π² / Gρ)' } },
      { id: 'c', text: { en: 'T = √(Gρ / 3π)', si: 'T = √(Gρ / 3π)' } },
      { id: 'd', text: { en: 'T = 2π √(R / Gρ)', si: 'T = 2π √(R / Gρ)' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'T = 2π√(R³/GM). Substitute M = (4/3)πR³ρ.',
      si: 'T = 2π√(R³/GM). M = (4/3)πR³ρ ආදේශ කරන්න.',
    },
    solution: {
      en: 'T = 2π√(R³ / [G (4/3)π R³ ρ]) = 2π√[3 / (4π G ρ)] = √(4π² × 3 / (4π G ρ)) = √(3π / Gρ). It depends solely on planetary density ρ!',
      si: 'T = 2π√(R³ / [G (4/3)π R³ ρ]) = 2π√[3 / (4π G ρ)] = √(3π / Gρ) වේ. මෙය ග්‍රහලෝකයේ ඝනත්වය ρ මත පමණක් රඳා පවතී!',
    },
  },
  {
    id: 'grav-5-3-13',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'According to Kepler’s Second Law (Law of Equal Areas), a line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time. This law is a direct consequence of the conservation of which quantity?',
      si: 'කෙප්ලර්ගේ දෙවන නියමයට (සමාන වර්ගඵල නියමය) අනුව, ග්‍රහලෝකය සහ සූර්යයා යා කරන රේඛාව සමාන කාල ප්‍රාන්තර තුළ සමාන වර්ගඵල පසුකරයි. මෙම නියමය සෘජුවම සංස්ථිතිය මත පදනම් වන්නේ කුමන රාශියේද?',
    },
    options: [
      { id: 'a', text: { en: 'Linear momentum', si: 'රේඛීය ගම්‍යතාව' } },
      { id: 'b', text: { en: 'Angular momentum', si: 'කෝණික ගම්‍යතාව' } },
      { id: 'c', text: { en: 'Kinetic energy', si: 'චාලක ශක්තිය' } },
      { id: 'd', text: { en: 'Total mechanical energy only', si: 'මුළු යාන්ත්‍රික ශක්තිය පමණි' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Gravitational force is a central force: torque τ = r × F = 0. Therefore dL/dt = 0.',
      si: 'ගුරුත්වාකර්ෂණ බලය කේන්ද්‍රික බලයකි: ව්‍යාවර්ථය τ = r × F = 0 වේ. එබැවින් dL/dt = 0.',
    },
    solution: {
      en: 'Because gravity acts along the radius vector pointing towards the Sun, the net torque on the planet about the Sun is zero (τ = r × F = 0). Thus angular momentum L = m r² dθ/dt is constant, which implies dA/dt = L / (2m) = constant.',
      si: 'ගුරුත්වාකර්ෂණ බලය සූර්යයා දෙසට අරීයව ක්‍රියා කරන බැවින් සූර්යයා වටා ග්‍රහලෝකය මත ශුද්ධ ව්‍යාවර්ථය ශුන්‍ය වේ (τ = r × F = 0). එබැවින් කෝණික ගම්‍යතාව L සංස්ථිතික වන අතර, dA/dt = L/(2m) = නියතයක් වේ.',
    },
  },
  {
    id: 'grav-5-3-14',
    competencyRef: 'Competency 5.2',
    category: 'orbital-mechanics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If the orbital radius of a satellite is doubled, how do its orbital speed v and period T change?',
      si: 'චන්ද්‍රිකාවක කක්ෂීය අරය දෙගුණ කළහොත්, එහි කක්ෂීය ප්‍රවේගය v සහ ආවර්ත කාලය T වෙනස් වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'v is halved, T is doubled', si: 'v අඩක් වේ, T දෙගුණ වේ' } },
      { id: 'b', text: { en: 'v becomes v/√2, T becomes 2√2 T', si: 'v අගය v/√2 වේ, T අගය 2√2 T වේ' } },
      { id: 'c', text: { en: 'v becomes √2 v, T becomes T/√2', si: 'v අගය √2 v වේ, T අගය T/√2 වේ' } },
      { id: 'd', text: { en: 'v becomes v/4, T becomes 4T', si: 'v අගය v/4 වේ, T අගය 4T වේ' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'v ∝ 1/√r and T ∝ r^(3/2).',
      si: 'v ∝ 1/√r සහ T ∝ r^(3/2) වේ.',
    },
    solution: {
      en: 'v = √(GM/r), so doubling r gives v_new = v/√2. T = 2π√(r³/GM), so doubling r gives T_new = 2^(3/2) T = 2√2 T ≈ 2.83 T.',
      si: 'v = √(GM/r) බැවින් r දෙගුණ වන විට v_new = v/√2 වේ. T = 2π√(r³/GM) බැවින් T_new = 2^(3/2) T = 2√2 T වේ.',
    },
  },

  // ==========================================
  // Competency 5.4: Geostationary Satellites & Escape Velocity (12 Questions)
  // ==========================================
  {
    id: 'grav-5-4-01',
    competencyRef: 'Competency 5.2',
    category: 'geostationary-satellites',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following conditions is NOT required for a satellite to be in a geostationary orbit?',
      si: 'චන්ද්‍රිකාවක් භූ-ස්ථාවර කක්ෂයක පැවතීම සඳහා අනිවාර්ය නොවන කොන්දේසිය කවරක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The orbit must lie directly in the Earth’s equatorial plane', si: 'කක්ෂය පෘථිවියේ සමක තලය මතම පිහිටිය යුතුය' } },
      { id: 'b', text: { en: 'The direction of revolution must be West to East', si: 'පරිභ්‍රමණ දිශාව බටහිර සිට නැගෙනහිරට විය යුතුය' } },
      { id: 'c', text: { en: 'The orbital period must be exactly 24 hours (1 sidereal day)', si: 'කක්ෂීය ආවර්ත කාලය හරියටම පැය 24ක් (තාරකා දින 1ක්) විය යුතුය' } },
      { id: 'd', text: { en: 'The satellite must have a mass of at least 1000 kg', si: 'චන්ද්‍රිකාවේ ස්කන්ධය අවම වශයෙන් 1000 kg විය යුතුය' } },
    ],
    correctOptionId: 'd',
    hint: {
      en: 'Does orbital mechanics depend on satellite mass?',
      si: 'කක්ෂීය චලිතය චන්ද්‍රිකාවේ ස්කන්ධය මත රඳා පවතීද?',
    },
    solution: {
      en: 'The satellite’s mass is completely irrelevant to its orbit. A geostationary satellite must orbit in the equatorial plane from west to east with a period of 24 hours (altitude ~35,800 km).',
      si: 'චන්ද්‍රිකාවේ ස්කන්ධය එහි කක්ෂයට කිසිසේත් බලනොපායි. භූ-ස්ථාවර කක්ෂයක පැවතීමට එය සමක තලයේ බටහිර සිට නැගෙනහිරට පැය 24 ක ආවර්ත කාලයකින් (උන්නතාංශය ~35,800 km) ගමන් කළ යුතුය.',
    },
  },
  {
    id: 'grav-5-4-02',
    competencyRef: 'Competency 5.2',
    category: 'geostationary-satellites',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the orbital radius of a geostationary satellite around the Earth in units of 10⁷ m. Take G = 6.674 × 10⁻¹¹ N m² kg⁻², Earth mass M = 5.972 × 10²⁴ kg, and period T = 86,400 s (24 h).',
      si: 'පෘථිවිය වටා භූ-ස්ථාවර චන්ද්‍රිකාවක කක්ෂීය අරය 10⁷ m ඒකකවලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻², පෘථිවි ස්කන්ධය M = 5.972 × 10²⁴ kg, සහ ආවර්ත කාලය T = 86,400 s ලෙස ගන්න.',
    },
    expected: 4.22,
    tolerance: 0.05,
    unit: { en: '× 10⁷ m', si: '× 10⁷ m' },
    hint: {
      en: 'r = [ (G M T²) / (4π²) ]^(1/3).',
      si: 'r = [ (G M T²) / (4π²) ]^(1/3).',
    },
    solution: {
      en: 'r³ = (6.674 × 10⁻¹¹ × 5.972 × 10²⁴ × 86400²) / (4π²) = (3.9857 × 10¹⁴ × 7.465 × 10⁹) / 39.478 = 2.9753 × 10²⁴ / 39.478 = 7.5366 × 10²² m³. Taking cube root: r ≈ 4.224 × 10⁷ m = 42,240 km.',
      si: 'r³ = (G M T²) / (4π²) = 7.5366 × 10²² m³ වේ. ඝනමූලය ගත් විට: r ≈ 4.224 × 10⁷ m = 42,240 km.',
    },
  },
  {
    id: 'grav-5-4-03',
    competencyRef: 'Competency 5.2',
    category: 'geostationary-satellites',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why CANNOT a satellite remain permanently stationary above the North Pole (or any non-equatorial latitude)?',
      si: 'චන්ද්‍රිකාවකට උත්තර ධ්‍රැවයට (හෝ සමක නොවන වෙනත් ඕනෑම අක්ෂාංශයකට) ඉහළින් ස්ථාවරව පැවතිය නොහැක්කේ මන්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The Earth’s magnetic field deflects it away', si: 'පෘථිවි චුම්භක ක්ෂේත්‍රය මගින් එය ඉවතට අපගමනය කරන නිසා' } },
      { id: 'b', text: { en: 'The center of any circular orbit around Earth must coincide with the center of mass of the Earth', si: 'පෘථිවිය වටා ඕනෑම වෘත්තාකාර කක්ෂයක කේන්ද්‍රය පෘථිවියේ ස්කන්ධ කේන්ද්‍රය සමග සමපාත විය යුතු නිසා' } },
      { id: 'c', text: { en: 'The orbital period over the poles is always zero', si: 'ධ්‍රැවවලදී කක්ෂීය ආවර්ත කාලය සැමවිටම ශුන්‍ය වන නිසා' } },
      { id: 'd', text: { en: 'Solar panels receive no sunlight at the poles', si: 'ධ්‍රැවවලදී සූර්ය කෝෂවලට සූර්යාලෝකය නොලැබෙන නිසා' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Gravitational attraction always points towards the center of Earth. Centripetal force must lie in the plane of the orbit.',
      si: 'ගුරුත්වාකර්ෂණ ආකර්ෂණය සැමවිටම පෘථිවි කේන්ද්‍රය දෙසට යොමුවේ. කේන්ද්‍රාභිසාරී බලය කක්ෂයේ තලය තුළ පිහිටිය යුතුය.',
    },
    solution: {
      en: 'The gravitational force acts toward the Earth’s center. Therefore, the center of every stable orbit must be the Earth’s center. An orbit above a latitude line would require a force toward that latitude’s axis, which gravity cannot provide.',
      si: 'ගුරුත්වාකර්ෂණ බලය ක්‍රියා කරන්නේ පෘථිවි කේන්ද්‍රය දෙසටයි. එබැවින් ඕනෑම ස්ථායී කක්ෂයක කේන්ද්‍රය පෘථිවි කේන්ද්‍රය විය යුතුය. ධ්‍රැවයට ඉහළින් වූ තලයක කක්ෂගත වුවහොත් කේන්ද්‍රය පෘථිවි කේන්ද්‍රය නොවන බැවින් ගුරුත්වය මගින් අවශ්‍ය කේන්ද්‍රාභිසාරී බලය සැපයිය නොහැක.',
    },
  },
  {
    id: 'grav-5-4-04',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the theoretical definition of escape velocity from the surface of a celestial body?',
      si: 'ආකාශ වස්තුවක පෘෂ්ඨයෙන් නිදහස් ප්‍රවේගය (escape velocity) පිළිබඳ න්‍යායික අර්ථ දැක්වීම කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The maximum speed a rocket can reach in the atmosphere', si: 'වායුගෝලය තුළ රොකට්ටුවකට ළඟා විය හැකි උපරිම ප්‍රවේගය' } },
      { id: 'b', text: { en: 'The minimum initial projection speed required for a projectile to escape the gravitational field and reach infinity with zero kinetic energy', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයෙන් මිදී අනන්තයට ශුන්‍ය චාලක ශක්තියකින් යුතුව ළඟා වීම සඳහා ප්‍රක්ෂිප්තයකට දිය යුතු අවම ආරම්භක ප්‍රක්ෂේපණ ප්‍රවේගය' } },
      { id: 'c', text: { en: 'The speed required to complete one circular orbit around the body', si: 'වස්තුව වටා එක් වෘත්තාකාර කක්ෂයක් සම්පූර්ණ කිරීමට අවශ්‍ය ප්‍රවේගය' } },
      { id: 'd', text: { en: 'The speed of light in vacuum', si: 'රික්තයේ ආලෝකයේ ප්‍රවේගය' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Total mechanical energy at launch must be at least zero: E = 1/2 m v_e² - GMm/R = 0.',
      si: 'විදීමේදී මුළු යාන්ත්‍රික ශක්තිය අවම වශයෙන් ශුන්‍ය විය යුතුය: E = 1/2 m v_e² - GMm/R = 0.',
    },
    solution: {
      en: 'Escape velocity is the minimum speed with which an unpropelled body must be projected from the surface to escape the gravitational attraction, reaching infinity with zero residual kinetic energy: 1/2 m v_e² = GMm/R => v_e = √(2GM/R).',
      si: 'නිදහස් ප්‍රවේගය යනු ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයෙන් මිදී අනන්තයේදී ශුන්‍ය අවශේෂ චාලක ශක්තියකින් පැවතීමට වස්තුවකට පෘෂ්ඨයේදී දිය යුතු අවම ප්‍රවේගයයි: 1/2 m v_e² = GMm/R => v_e = √(2GM/R).',
    },
  },
  {
    id: 'grav-5-4-05',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the escape velocity from the surface of Earth in km s⁻¹. Take surface gravity g = 9.80 m s⁻² and Earth radius R = 6.371 × 10⁶ m.',
      si: 'පෘථිවි පෘෂ්ඨයෙන් නිදහස් ප්‍රවේගය km s⁻¹ වලින් ගණනය කරන්න. පෘෂ්ඨික ගුරුත්වය g = 9.80 m s⁻² සහ පෘථිවි අරය R = 6.371 × 10⁶ m ලෙස ගන්න.',
    },
    expected: 11.18,
    tolerance: 0.1,
    unit: { en: 'km s⁻¹', si: 'km s⁻¹' },
    hint: {
      en: 'v_e = √(2gR). Convert m/s to km/s.',
      si: 'v_e = √(2gR). m/s අගය km/s බවට හරවන්න.',
    },
    solution: {
      en: 'v_e = √(2 × 9.80 × 6.371 × 10⁶) = √(1.2487 × 10⁸) ≈ 11,174 m/s ≈ 11.18 km s⁻¹.',
      si: 'v_e = √(2 × 9.80 × 6.371 × 10⁶) = √(1.2487 × 10⁸) ≈ 11,174 m/s ≈ 11.18 km s⁻¹ වේ.',
    },
  },
  {
    id: 'grav-5-4-06',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the relationship between the escape velocity v_e from a planet’s surface and the orbital speed v₀ of a satellite orbiting just above the surface?',
      si: 'ග්‍රහලෝක පෘෂ්ඨයෙන් නිදහස් ප්‍රවේගය v_e සහ පෘෂ්ඨය ආසන්නයෙන් කක්ෂගත චන්ද්‍රිකාවක කක්ෂීය ප්‍රවේගය v₀ අතර සම්බන්ධය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'v_e = v₀', si: 'v_e = v₀' } },
      { id: 'b', text: { en: 'v_e = √2 v₀', si: 'v_e = √2 v₀' } },
      { id: 'c', text: { en: 'v_e = 2 v₀', si: 'v_e = 2 v₀' } },
      { id: 'd', text: { en: 'v_e = v₀ / √2', si: 'v_e = v₀ / √2' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'v_e = √(2GM/R) and v₀ = √(GM/R).',
      si: 'v_e = √(2GM/R) සහ v₀ = √(GM/R) වේ.',
    },
    solution: {
      en: 'v_e = √(2GM/R) = √2 × √(GM/R) = √2 v₀ ≈ 1.414 v₀. A 41.4% increase in speed allows a circular orbit satellite to escape.',
      si: 'v_e = √(2GM/R) = √2 × √(GM/R) = √2 v₀ ≈ 1.414 v₀ වේ. කක්ෂීය ප්‍රවේගය 41.4% කින් වැඩි කළ විට චන්ද්‍රිකාව ගුරුත්වයෙන් මිදී පලා යයි.',
    },
  },
  {
    id: 'grav-5-4-07',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'The escape velocity from Earth does NOT depend on which of the following?',
      si: 'පෘථිවියෙන් නිදහස් ප්‍රවේගය පහත සඳහන් කවරක් මත රඳා නොපවතීද?',
    },
    options: [
      { id: 'a', text: { en: 'The mass of the Earth', si: 'පෘථිවියේ ස්කන්ධය' } },
      { id: 'b', text: { en: 'The radius of the Earth', si: 'පෘථිවියේ අරය' } },
      { id: 'c', text: { en: 'The mass of the projected projectile', si: 'ප්‍රක්ෂේපණය කරන ප්‍රක්ෂිප්තයේ ස්කන්ධය' } },
      { id: 'd', text: { en: 'The Universal Gravitational Constant G', si: 'සර්වත්‍ර ගුරුත්වාකර්ෂණ නියතය G' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'v_e = √(2GM/R). Does the mass m of the projectile appear?',
      si: 'v_e = √(2GM/R). ප්‍රක්ෂිප්තයේ m ස්කන්ධය මෙහි තිබේද?',
    },
    solution: {
      en: 'v_e = √(2GM/R). The escape velocity depends only on G, the mass of the planet M, and the radius R. It is independent of the mass of the projectile and the angle of launch (neglecting atmospheric friction).',
      si: 'v_e = √(2GM/R) වේ. නිදහස් ප්‍රවේගය රඳා පවතින්නේ G, ග්‍රහලෝකයේ ස්කන්ධය M සහ අරය R මත පමණි. එය ප්‍රක්ෂිප්තයේ ස්කන්ධය හෝ විදින කෝණය මත රඳා නොපවතී.',
    },
  },
  {
    id: 'grav-5-4-08',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'The Moon has mass 7.342 × 10²² kg and radius 1.737 × 10⁶ m. Calculate the escape velocity from the surface of the Moon in km s⁻¹. Take G = 6.674 × 10⁻¹¹ N m² kg⁻².',
      si: 'චන්ද්‍රයාගේ ස්කන්ධය 7.342 × 10²² kg වන අතර අරය 1.737 × 10⁶ m වේ. චන්ද්‍ර පෘෂ්ඨයෙන් නිදහස් ප්‍රවේගය km s⁻¹ වලින් ගණනය කරන්න. G = 6.674 × 10⁻¹¹ N m² kg⁻² ලෙස ගන්න.',
    },
    expected: 2.38,
    tolerance: 0.05,
    unit: { en: 'km s⁻¹', si: 'km s⁻¹' },
    hint: {
      en: 'v_e = √(2GM/R).',
      si: 'v_e = √(2GM/R).',
    },
    solution: {
      en: 'v_e = √[(2 × 6.674 × 10⁻¹¹ × 7.342 × 10²²) / (1.737 × 10⁶)] = √(9.7997 × 10¹² / 1.737 × 10⁶) = √(5.6417 × 10⁶) ≈ 2375 m/s ≈ 2.38 km s⁻¹.',
      si: 'v_e = √[(2 × 6.674 × 10⁻¹¹ × 7.342 × 10²²) / (1.737 × 10⁶)] = √(5.6417 × 10⁶) ≈ 2375 m/s ≈ 2.38 km s⁻¹ වේ.',
    },
  },
  {
    id: 'grav-5-4-09',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why does the Moon have no substantial atmosphere, whereas Earth retains an extensive atmosphere?',
      si: 'පෘථිවිය පුළුල් වායුගෝලයක් රඳවා ගන්නා අතර, චන්ද්‍රයාට සැලකිය යුතු වායුගෝලයක් නොමැති වීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The Moon has no gravitational field whatsoever', si: 'චන්ද්‍රයාට කිසිදු ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක් නොමැති වීම' } },
      { id: 'b', text: { en: 'The root-mean-square speed of gas molecules at daytime lunar temperatures exceeds the escape velocity of the Moon', si: 'චන්ද්‍රයාගේ දහවල් උෂ්ණත්වයේදී වායු අණුවල මූල මධ්‍යන්‍ය වර්ග ප්‍රවේගය චන්ද්‍රයාගේ නිදහස් ප්‍රවේගය ඉක්මවා යාම' } },
      { id: 'c', text: { en: 'The Moon is too close to the Sun', si: 'චන්ද්‍රයා සූර්යයාට බෙහෙවින් ආසන්න වීම' } },
      { id: 'd', text: { en: 'The Moon’s surface is completely covered in dust', si: 'චන්ද්‍ර පෘෂ්ඨය සම්පූර්ණයෙන්ම දූවිල්ලෙන් වැසී තිබීම' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Compare thermal rms speed c_rms = √(3kT/m) with escape velocity v_e ≈ 2.38 km/s.',
      si: 'තාපජ වර්ග මූල මධ්‍යන්‍ය ප්‍රවේගය c_rms = √(3kT/m) අගය නිදහස් ප්‍රවේගය v_e ≈ 2.38 km/s සමග සසඳන්න.',
    },
    solution: {
      en: 'The escape velocity of the Moon is only ~2.38 km/s. At lunar daytime temperatures (~400 K), the rms thermal speeds of light gases like hydrogen, helium, and even nitrogen/oxygen exceed or approach this value over time, so gas molecules escaped into space.',
      si: 'චන්ද්‍රයාගේ නිදහස් ප්‍රවේගය ~2.38 km/s පමණි. දහවල් උෂ්ණත්වය (~400 K) හමුවේ වායු අණුවල තාපජ චාලක ප්‍රවේගයන් මෙම නිදහස් ප්‍රවේගයට වඩා වැඩි වන බැවින් වායු අණු අභ්‍යවකාශයට පලා ගොස් ඇත.',
    },
  },
  {
    id: 'grav-5-4-10',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A projectile is launched from Earth’s surface with speed v = 2 v_e, where v_e is the escape velocity. What will be its residual speed at infinity in units of v_e?',
      si: 'නිදහස් ප්‍රවේගය v_e වන පෘථිවි පෘෂ්ඨයේ සිට v = 2 v_e ප්‍රවේගයකින් ප්‍රක්ෂිප්තයක් විදිනු ලැබේ. අනන්තයේදී එහි අවශේෂ ප්‍රවේගය v_e හි කවර ගුණයක් වේද?',
    },
    expected: 1.732,
    tolerance: 0.05,
    unit: { en: 'v_e', si: 'v_e' },
    hint: {
      en: 'Conservation of energy: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² => v_∞ = √(v² - v_e²).',
      si: 'ශක්ති සංස්ථිතියෙන්: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² => v_∞ = √(v² - v_e²).',
    },
    solution: {
      en: 'Initial total energy = 1/2 m v² - GMm/R = 1/2 m v² - 1/2 m v_e² = 1/2 m (4 v_e² - v_e²) = 1/2 m (3 v_e²). At infinity U = 0, so 1/2 m v_∞² = 3/2 m v_e² => v_∞ = √3 v_e ≈ 1.732 v_e.',
      si: 'ආරම්භක මුළු ශක්තිය = 1/2 m v² - 1/2 m v_e² = 1/2 m (4 v_e² - v_e²) = 1/2 m (3 v_e²). අනන්තයේදී 1/2 m v_∞² = 3/2 m v_e² => v_∞ = √3 v_e ≈ 1.732 v_e වේ.',
    },
  },
  {
    id: 'grav-5-4-11',
    competencyRef: 'Competency 5.2',
    category: 'geostationary-satellites',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the primary advantage of a Polar Orbiting Satellite over a Geostationary Satellite for Earth observation and weather forecasting?',
      si: 'පෘථිවි නිරීක්ෂණ සහ කාලගුණ අනාවැකි සඳහා භූ-ස්ථාවර චන්ද්‍රිකාවකට වඩා ධ්‍රැවීය කක්ෂීය චන්ද්‍රිකාවක ඇති ප්‍රධාන වාසිය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'It stays stationary over a single country 24 hours a day', si: 'එය දවසේ පැය 24 පුරාම එකම රටකට ඉහළින් ස්ථාවරව පවතී' } },
      { id: 'b', text: { en: 'Its low altitude provides much higher photographic resolution and it scans the entire globe (including polar regions) as the Earth rotates beneath it', si: 'එහි අඩු උන්නතාංශය නිසා වඩා ඉහළ ඡායාරූප විභේදනයක් ලැබෙන අතර පෘථිවිය භ්‍රමණය වන විට මුළු ගෝලයම (ධ්‍රැව ප්‍රදේශ ඇතුළුව) ආවරණය කරයි' } },
      { id: 'c', text: { en: 'It requires zero rocket propulsion to reach orbit', si: 'එය කක්ෂයට යැවීම සඳහා රොකට් තෙරපුමක් අවශ්‍ය නොවේ' } },
      { id: 'd', text: { en: 'It has an infinite operational lifetime', si: 'එහි ක්‍රියාකාරී ආයු කාලය අනන්තයකි' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Polar satellites fly at 600-800 km altitude, passing over both poles while Earth rotates eastward beneath.',
      si: 'ධ්‍රැවීය චන්ද්‍රිකා 600-800 km වැනි අඩු උසකින් ගමන් කරමින් පෘථිවිය භ්‍රමණය වන විට සම්පූර්ණ පෘෂ්ඨයම නිරීක්ෂණය කරයි.',
    },
    solution: {
      en: 'Polar orbiters operate at low altitude (~600–1000 km) giving high resolution. Because their orbital plane is fixed while Earth rotates underneath, they scan every point on Earth twice a day, including polar latitudes invisible to geostationary satellites.',
      si: 'ධ්‍රැවීය චන්ද්‍රිකා 600–1000 km වැනි අඩු උන්නතාංශයක ගමන් කරන බැවින් ඉහළ විභේදනයක් සපයයි. පෘථිවිය ඒවා යටින් භ්‍රමණය වන බැවින් භූ-ස්ථාවර චන්ද්‍රිකාවලට නොපෙනෙන ධ්‍රැව ප්‍රදේශ ඇතුළු මුළු පෘථිවියම නිරීක්ෂණය කළ හැක.',
    },
  },
  {
    id: 'grav-5-4-12',
    competencyRef: 'Competency 5.2',
    category: 'escape-velocity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If a planet has twice the radius of Earth and four times the mass of Earth, what is the escape velocity from this planet compared to Earth’s escape velocity v_e?',
      si: 'පෘථිවිය මෙන් දෙගුණයක අරයක් සහ හතර ගුණයක ස්කන්ධයක් ඇති ග්‍රහලෝකයකින් නිදහස් ප්‍රවේගය, පෘථිවියේ නිදහස් ප්‍රවේගය v_e සමග සැසඳූ විට කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'v_e', si: 'v_e' } },
      { id: 'b', text: { en: '√2 v_e', si: '√2 v_e' } },
      { id: 'c', text: { en: '2 v_e', si: '2 v_e' } },
      { id: 'd', text: { en: '4 v_e', si: '4 v_e' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'v_e = √(2GM/R). Calculate the factor √(M_ratio / R_ratio).',
      si: 'v_e = √(2GM/R). √(M_ratio / R_ratio) ගුණාකාරය ගණනය කරන්න.',
    },
    solution: {
      en: 'v_p = √[2G(4M)/(2R)] = √[2 × (2GM/R)] = √2 × √(2GM/R) = √2 v_e.',
      si: 'v_p = √[2G(4M)/(2R)] = √[2 × (2GM/R)] = √2 × √(2GM/R) = √2 v_e වේ.',
    },
  },
  {
    "id": "grav-sq01",
    "competencyRef": "Competency 5.1",
    "category": "universal-gravitation",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "In a Cavendish-type torsion balance experiment to determine the universal gravitational constant G, two small lead spheres each of mass m = 0.500 kg are mounted at the ends of a light horizontal boom of length L = 0.800 m suspended at its centre by a thin quartz torsion fibre. Two large lead spheres each of mass M = 150.0 kg are placed at distance d = 0.200 m from the small spheres, deflecting the boom.",
      "si": "සර්වත්‍ර ගුරුත්වාකර්ෂණ නියතය G නිර්ණය කිරීමේ කැවෙන්ඩිෂ් ආරෝපක සමතුලිත පරීක්ෂණයකදී, දිග L = 0.800 m වන සැහැල්ලු තිරස් දණ්ඩක කෙළවරවල m = 0.500 kg කුඩා ඊයම් ගෝල දෙකක් සවිකර ඇත. එය මධ්‍යයෙන් ක්වාට්ස් තන්තුවකින් එල්ලා ඇත. කුඩා ගෝල වල සිට d = 0.200 m දුරින් M = 150.0 kg විශාල ඊයම් ගෝල දෙකක් තැබූ විට දණ්ඩ අපගමනය වේ."
    },
    "parts": [
      {
        "id": "grav-sq01-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State Newton’s law of universal gravitation and write the mathematical formula defining the attractive force between two point masses.",
          "si": "නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය ප්‍රකාශ කර, ලක්ෂ්‍ය ස්කන්ධ දෙකක් අතර ආකර්ෂණ බලය සඳහා ගණිතමය සූත්‍රය ලියන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States law: Every particle attracts every other particle with a force directly proportional to product of masses and inversely proportional to square of distance between them.",
              "si": "නියමය: ඕනෑම අංශු දෙකක් අතර ආකර්ෂණ බලය ස්කන්ධවල ගුණිතයට අනුලෝමවද ඒවා අතර දුරෙහි වර්ගයට ප්‍රතිලෝමවද සමානුපාතික වන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Writes formula F = G · (m₁ · m₂) / r² along the line joining the centres.",
              "si": "F = G (m₁ m₂) / r² සූත්‍රය ලිවීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Newton’s law of universal gravitation states that every particle of matter in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres:\nF = G · (m₁ · m₂) / r²\nwhere G is the universal gravitational constant.",
          "si": "විශ්වයේ ඕනෑම අංශු දෙකක් අතර ක්‍රියාකරන ආකර්ෂණ බලය ඒවායේ ස්කන්ධයන්ගේ ගුණිතයට අනුලෝමවද, ඒවා අතර දුරෙහි වර්ගයට ප්‍රතිලෝමවද සමානුපාතික වේ: F = G (m₁ m₂) / r²."
        }
      },
      {
        "id": "grav-sq01-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the magnitude of the gravitational attraction force F between one large sphere and the adjacent small sphere, taking G = 6.67 × 10⁻¹¹ N m² kg⁻².",
          "si": "G = 6.67 × 10⁻¹¹ N m² kg⁻² ලෙස ගෙන, එක් විශාල ගෝලයක් සහ ඊට යාබද කුඩා ගෝලය අතර ගුරුත්වාකර්ෂණ ආකර්ෂණ බලයේ F විශාලත්වය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Substitutes into formula: F = (6.67 × 10⁻¹¹ × 150.0 × 0.500) / (0.200)²",
              "si": "අගයන් ආදේශ කිරීම: F = (6.67 × 10⁻¹¹ × 150.0 × 0.500) / (0.0400)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes numerator: 5.0025 × 10⁻⁹ N m².",
              "si": "හරය සහ ලවය සුළු කිරීම: 5.0025 × 10⁻⁹ / 0.0400."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Obtains F = 1.25 × 10⁻⁷ N.",
              "si": "F = 1.25 × 10⁻⁷ N (හෝ 1.251 × 10⁻⁷ N) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "F = G · (M · m) / d²\nF = (6.674 × 10⁻¹¹ N m² kg⁻² × 150.0 kg × 0.500 kg) / (0.200 m)²\nF = (5.0055 × 10⁻⁹) / 0.0400 = 1.251 × 10⁻⁷ N ≈ 1.25 × 10⁻⁷ N.",
          "si": "F = G M m / d² = (6.67 × 10⁻¹¹ × 150 × 0.5) / (0.200)² = 1.25 × 10⁻⁷ N."
        }
      },
      {
        "id": "grav-sq01-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the total deflecting gravitational torque τ acting on the boom.",
          "si": "දණ්ඩ මත ක්‍රියාකරන මුළු අපගමන ගුරුත්වාකර්ෂණ ව්‍යාවර්තය τ ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies couple torque: τ = F · L where L = 0.800 m.",
              "si": "බල යුග්මයේ ව්‍යාවර්තය τ = F · L හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes τ = 1.251 × 10⁻⁷ × 0.800 = 1.00 × 10⁻⁷ N m.",
              "si": "τ = 1.00 × 10⁻⁷ N m ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Since both ends experience equal and opposite gravitational forces forming a force couple:\nτ = F · L = (1.251 × 10⁻⁷ N) × 0.800 m = 1.00 × 10⁻⁷ N m.",
          "si": "දෙකෙළවරම බල යුග්මයක් සෑදෙන බැවින්: τ = F · L = 1.251 × 10⁻⁷ × 0.800 = 1.00 × 10⁻⁷ N m."
        }
      },
      {
        "id": "grav-sq01-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Explain why an optical lever (mirror and scale) is essential to detect the equilibrium deflection angle in this experiment.",
          "si": "මෙම පරීක්ෂණයේදී සමතුලිත අපගමන කෝණය මැනීම සඳහා ප්‍රකාශ ලීවරයක් (දර්පණයක් සහ පරිමාණයක්) අත්‍යවශ්‍ය වන්නේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Notes that gravitational forces (~10⁻⁷ N) produce an extremely small angular twist θ in the torsion fibre.",
              "si": "ගුරුත්වාකර්ෂණ බල ඉතා කුඩා බැවින් (10⁻⁷ N පමණ) තන්තුවේ ඇතිවන අපගමන කෝණය ඉතා කුඩා බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that a reflected light beam deflects through 2θ and magnifies deflection over a long path distance D without mechanical friction.",
              "si": "දර්පණයකින් පරාවර්තිත කිරණය 2θ කෝණයකින් අපගමනය වී දිගු දුරක් D ඔස්සේ යාන්ත්‍රික ඝර්ෂණයකින් තොරව විශාල විස්ථාපනයක් ලබාදෙන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Because the gravitational force is tiny (~10⁻⁷ N), the resulting equilibrium twist angle θ of the suspension fibre is minute (typically a fraction of a milliradian). A small mirror attached to the boom reflects a light beam onto a distant scale; when the mirror rotates by θ, the reflected beam deflects by 2θ, converting an unreadable tiny rotation into a readily measurable linear spot deflection s = 2θ · D without introducing mechanical friction.",
          "si": "ගුරුත්වාකර්ෂණ බලය ඉතා කුඩා බැවින් දණ්ඩේ කෝණික හැරීම ඉතාම කුඩා වේ. දණ්ඩට සවිකර ඇති දර්පණය θ කෝණයකින් හැරුණු විට පරාවර්තිත කිරණය 2θ කෝණයකින් හැරී දුරින් ඇති පරිමාණය මත විශාල රේඛීය විස්ථාපනයක් (s = 2θ D) පෙන්වයි."
        }
      }
    ],
    "hint": {
      "en": "F = G M m / d². Torque of the couple τ = F · L. Optical lever magnifies angular rotation by 2θ.",
      "si": "F = G M m / d². ව්‍යාවර්තය τ = F · L. ප්‍රකාශ ලීවරය 2θ කෝණයකින් විශාලනය කරයි."
    },
    "solution": {
      "en": "Gravitational force F = 1.25 × 10⁻⁷ N. Deflecting torque τ = 1.00 × 10⁻⁷ N m. Optical lever provides massive frictionless angular magnification.",
      "si": "ආකර්ෂණ බලය F = 1.25 × 10⁻⁷ N. ව්‍යාවර්තය τ = 1.00 × 10⁻⁷ N m. ප්‍රකාශ ලීවරය ඝර්ෂණයකින් තොරව කෝණය විශාලනය කරයි."
    }
  },
  {
    "id": "grav-sq02",
    "competencyRef": "Competency 5.1",
    "category": "universal-gravitation",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "The Earth has mass M_E = 5.98 × 10²⁴ kg and the Moon has mass M_M = 7.36 × 10²² kg. The mean distance between their centres is D = 3.84 × 10⁸ m. A spacecraft of mass m = 1200 kg is on a direct flight trajectory between Earth and Moon.",
      "si": "පෘථිවියේ ස්කන්ධය M_E = 5.98 × 10²⁴ kg වන අතර චන්ද්‍රයාගේ ස්කන්ධය M_M = 7.36 × 10²² kg වේ. ඒවායේ කේන්ද්‍ර අතර මධ්‍යන්‍ය දුර D = 3.84 × 10⁸ m වේ. ස්කන්ධය m = 1200 kg වන අභ්‍යවකාශ යානයක් පෘථිවිය සහ චන්ද්‍රයා අතර ගමන් කරයි."
    },
    "parts": [
      {
        "id": "grav-sq02-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Define the gravitational neutral point (Lagrange point L₁) between Earth and Moon.",
          "si": "පෘථිවිය සහ චන්ද්‍රයා අතර උදාසීන ගුරුත්ව ලක්ෂ්‍යය (නියුට්‍රල් ලක්ෂ්‍යය) අර්ථ දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Defines it as the point along the line connecting their centres where the gravitational attractions of Earth and Moon are equal in magnitude and opposite in direction.",
              "si": "කේන්ද්‍ර යාකරන රේඛාව මත පෘථිවියේ සහ චන්ද්‍රයාගේ ගුරුත්වාකර්ෂණ බල විශාලත්වයෙන් සමාන වී දිශාවෙන් ප්‍රතිවිරුද්ධ වන ලක්ෂ්‍යය ලෙස අර්ථ දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Notes that the net resultant gravitational field intensity g_net = 0 at this point.",
              "si": "මෙම ලක්ෂ්‍යයේදී සම්ප්‍රයුක්ත ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව ශුන්‍ය වන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The gravitational neutral point is the location along the line joining the centres of the Earth and the Moon where the gravitational attraction exerted by the Earth on any mass is equal in magnitude and opposite in direction to the gravitational attraction exerted by the Moon, resulting in a net gravitational field intensity of zero (g_net = 0).",
          "si": "පෘථිවිය සහ චන්ද්‍රයාගේ කේන්ද්‍ර යාකරන රේඛාව මත, පෘථිවිය මඟින් ඇතිකරන ගුරුත්වාකර්ෂණ බලය සහ චන්ද්‍රයා මඟින් ඇතිකරන බලය විශාලත්වයෙන් සමාන හා දිශාවෙන් ප්‍රතිවිරුද්ධ වී සම්ප්‍රයුක්ත ගුරුත්ව ක්ෂේත්‍ර තීව්‍රතාව ශුන්‍ය වන ලක්ෂ්‍යයයි."
        }
      },
      {
        "id": "grav-sq02-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the distance r from the centre of the Earth to this neutral point.",
          "si": "පෘථිවි කේන්ද්‍රයේ සිට මෙම උදාසීන ලක්ෂ්‍යයට ඇති දුර r ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Sets up balance of field intensities: G M_E / r² = G M_M / (D - r)²",
              "si": "ක්ෂේත්‍ර තීව්‍රතා තුලනය: G M_E / r² = G M_M / (D - r)² ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Takes square roots: r / (D - r) = √(M_E / M_M).",
              "si": "වර්ගමූලය ගැනීම: r / (D - r) = √(M_E / M_M)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates ratio: √(5.98 × 10²⁴ / 7.36 × 10²²) = √81.25 = 9.014.",
              "si": "අනුපාතය ගණනය කිරීම: √(81.25) = 9.014."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves r: r = [9.014 / 10.014] × 3.84 × 10⁸ m = 3.46 × 10⁸ m.",
              "si": "r = 3.46 × 10⁸ m (හෝ 3.45 - 3.46 × 10⁸ m) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At the neutral point:\nG · M_E / r² = G · M_M / (D - r)²\nTaking square root of both sides:\n√(M_E) / r = √(M_M) / (D - r) => r / (D - r) = √(M_E / M_M)\n√(5.98 × 10²⁴ / 7.36 × 10²²) = √81.25 = 9.014\nr = 9.014 (D - r) => 10.014 r = 9.014 D\nr = (9.014 / 10.014) × 3.84 × 10⁸ m = 0.9001 × 3.84 × 10⁸ m = 3.46 × 10⁸ m.",
          "si": "උදාසීන ලක්ෂ්‍යයේදී: G M_E / r² = G M_M / (D - r)²\nr / (D - r) = √(M_E / M_M) = √(5.98 × 10²⁴ / 7.36 × 10²²) = 9.014\n10.014 r = 9.014 D => r = (9.014 / 10.014) × 3.84 × 10⁸ = 3.46 × 10⁸ m."
        }
      }
    ],
    "hint": {
      "en": "Equal gravitational fields: G M_E / r² = G M_M / (D - r)². Take square roots on both sides to solve for r.",
      "si": "ක්ෂේත්‍ර තීව්‍රතා සමාන කරන්න: G M_E / r² = G M_M / (D - r)². දෙපසම වර්ගමූලය ගෙන r සොයන්න."
    },
    "solution": {
      "en": "At the neutral point g_net = 0. Distance from Earth centre r = 3.46 × 10⁸ m (approx 90% of Earth-Moon distance).",
      "si": "උදාසීන ලක්ෂ්‍යයේදී g_net = 0. පෘථිවි කේන්ද්‍රයේ සිට දුර r = 3.46 × 10⁸ m."
    }
  },
  {
    "id": "grav-sq03",
    "competencyRef": "Competency 5.2",
    "category": "field-intensity",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "The gravitational acceleration at the surface of the Earth is g₀ = 9.81 m s⁻² and the mean radius of the Earth is R = 6.37 × 10⁶ m.",
      "si": "පෘථිවි පෘෂ්ඨය මත ගුරුත්වාකර්ෂණ ත්වරණය g₀ = 9.81 m s⁻² වන අතර පෘථිවියේ මධ්‍යන්‍ය අරය R = 6.37 × 10⁶ m වේ."
    },
    "parts": [
      {
        "id": "grav-sq03-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Derive the formula for gravitational acceleration g_h at an altitude h above the Earth’s surface in terms of g₀, R, and h.",
          "si": "පෘථිවි පෘෂ්ඨයේ සිට h උසකදී ගුරුත්වජ ත්වරණය g_h සඳහා g₀, R සහ h ඇසුරෙන් සූත්‍රය ගොඩනඟන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States g₀ = GM / R² and g_h = GM / (R + h)²",
              "si": "g₀ = GM / R² සහ g_h = GM / (R + h)² ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Divides equations to deduce g_h = g₀ [R / (R + h)]².",
              "si": "සමීකරණ බෙදීමෙන් g_h = g₀ [R / (R + h)]² ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At the Earth’s surface: g₀ = G · M / R².\nAt altitude h above the surface, distance from Earth centre is r = R + h:\ng_h = G · M / (R + h)².\nDividing the two equations:\ng_h / g₀ = R² / (R + h)² => g_h = g₀ × [R / (R + h)]².",
          "si": "පෘෂ්ඨයේදී: g₀ = G M / R².\nh උසකදී: g_h = G M / (R + h)².\nසමීකරණ බෙදීමෙන්: g_h = g₀ [R / (R + h)]²."
        }
      },
      {
        "id": "grav-sq03-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the value of g_h at the orbital altitude of the International Space Station (h = 400 km).",
          "si": "ජාත්‍යන්තර අභ්‍යවකාශ මධ්‍යස්ථානය කක්ෂගතව පවතින උසෙහිදී (h = 400 km) g_h අගය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Converts units: h = 4.00 × 10⁵ m, R + h = 6.37 × 10⁶ + 0.40 × 10⁶ = 6.77 × 10⁶ m.",
              "si": "R + h = 6.77 × 10⁶ m ලෙස ඒකක පරිවර්තනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies formula: g_h = 9.81 × (6.37 / 6.77)²",
              "si": "g_h = 9.81 × (6.37 / 6.77)² ආදේශ කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes g_h = 9.81 × (0.9409)² = 9.81 × 0.8853 = 8.68 m s⁻².",
              "si": "g_h = 8.68 m s⁻² ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "R = 6370 km, h = 400 km => R + h = 6770 km.\ng_h = g₀ × [R / (R + h)]² = 9.81 m s⁻² × (6370 / 6770)² = 9.81 × (0.940916)² = 9.81 × 0.8853 = 8.68 m s⁻².",
          "si": "R + h = 6770 km.\ng_h = 9.81 × (6370 / 6770)² = 9.81 × 0.8853 = 8.68 m s⁻²."
        }
      },
      {
        "id": "grav-sq03-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Explain why astronauts inside the ISS feel \"weightless\" even though g_h at their altitude is nearly 89% of its surface value.",
          "si": "එම උසෙහිදී g_h අගය පෘෂ්ඨයේ අගයෙන් 89% ක් පමණ වුවද, අභ්‍යවකාශගාමීන්ට \"බර රහිත බවක්\" දැනෙන්නේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that both the spacecraft and the astronauts are in a continuous state of free fall towards Earth under gravity.",
              "si": "අභ්‍යවකාශ යානය සහ ගගනගාමීන් දෙපිරිසම පෘථිවිය දෙසට නිදහසේ වැටීමේ තත්ත්වයක පසුවන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that because both accelerate at identical acceleration g_h, the contact normal reaction force between astronaut and spaceship floor is zero (apparent weight = 0).",
              "si": "දෙදෙනාම එකම g_h ත්වරණයෙන් වැටෙන බැවින් යානයේ බිම මඟින් ගගනගාමියා මත ඇතිකරන සාමාන්‍ය ප්‍රතික්‍රියා බලය ශුන්‍ය වන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Weightlessness is not the absence of gravity, but the absence of normal reaction force (support force). Both the space station and the astronauts are in continuous free-fall around the Earth with the identical centripetal acceleration a = g_h. Because they accelerate at the exact same rate, there is zero contact normal reaction force between the astronaut and the floor/walls (apparent weight N = m(g_h - a) = 0).",
          "si": "බර රහිත බව යනු ගුරුත්වය නොමැති වීම නොව, ප්‍රතික්‍රියා බලය ශුන්‍ය වීමයි. අභ්‍යවකාශ මධ්‍යස්ථානය සහ ගගනගාමීන් දෙපිරිසම එකම g_h ත්වරණයෙන් පෘථිවිය වටා නිදහසේ වැටෙමින් පවතී. එමනිසා ඔවුන් අතර කිසිදු සාමාන්‍ය ප්‍රතික්‍රියා බලයක් ඇති නොවේ (දෘශ්‍ය බර = 0)."
        }
      }
    ],
    "hint": {
      "en": "g_h = g₀ (R / (R + h))². Free fall implies apparent weight = 0 because normal contact reaction is zero.",
      "si": "g_h = g₀ (R / (R + h))². නිදහසේ වැටීමේදී ප්‍රතික්‍රියා බලය ශුන්‍ය වන බැවින් දෘශ්‍ය බර ශුන්‍ය වේ."
    },
    "solution": {
      "en": "g_h = g₀ [R / (R + h)]². At 400 km, g_h = 8.68 m s⁻². Astronauts experience weightlessness because they and the station are in perpetual free fall (normal force = 0).",
      "si": "g_h = g₀ [R / (R + h)]². 400 km දී g_h = 8.68 m s⁻². නිදහසේ වැටෙන බැවින් ප්‍රතික්‍රියා බලය ශුන්‍ය වී බර රහිත බව දැනේ."
    }
  },
  {
    "id": "grav-sq04",
    "competencyRef": "Competency 5.2",
    "category": "field-intensity",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "Assuming the Earth is a uniform solid sphere of constant density ρ, total mass M, and radius R = 6.40 × 10⁶ m with surface gravitational acceleration g₀ = 9.80 m s⁻².",
      "si": "පෘථිවිය නියත ඝනත්වය ρ, මුළු ස්කන්ධය M සහ අරය R = 6.40 × 10⁶ m වන ඒකාකාර ඝන ගෝලයක් ලෙසද, පෘෂ්ඨයේ ගුරුත්වජ ත්වරණය g₀ = 9.80 m s⁻² ලෙසද සලකන්න."
    },
    "parts": [
      {
        "id": "grav-sq04-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Using Gauss’s law for gravitation or shell theorem, derive the formula for the gravitational acceleration g_r at distance r from the centre inside the Earth (r ≤ R).",
          "si": "ගුරුත්වාකර්ෂණය සඳහා ගවුස් නියමය හෝ කවච ප්‍රමේයය යොදාගනිමින්, පෘථිවිය තුළ කේන්ද්‍රයේ සිට r දුරකදී (r ≤ R) ගුරුත්වජ ත්වරණය g_r සඳහා සූත්‍රය ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States shell theorem: External spherical shell of radius > r exerts zero net gravitational force on an interior point.",
              "si": "කවච ප්‍රමේයය: r ට වඩා වැඩි අරයක් ඇති බාහිර ගෝලීය කවචය මඟින් අභ්‍යන්තර ලක්ෂ්‍යයක් මත ශුද්ධ බලයක් ඇති නොකරයි."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Expresses enclosed mass: M(r) = (4/3) π r³ ρ = M · (r³ / R³).",
              "si": "අභ්‍යන්තර ස්කන්ධය M(r) = M (r³ / R³) ලෙස දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes g_r = G M(r) / r² = G (M r³ / R³) / r² = (GM / R²) · (r / R) = g₀ (r / R).",
              "si": "g_r = g₀ (r / R) බව පෙන්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "By Newton’s spherical shell theorem, the spherical shell of Earth matter outside radius r exerts zero net gravitational force at radius r.\nThe mass enclosed within radius r is:\nM(r) = (4/3) π r³ · ρ = M · (r / R)³.\nThe gravitational field intensity inside is therefore:\ng_r = G · M(r) / r² = G · [M (r³ / R³)] / r² = (G · M / R²) · (r / R) = g₀ · (r / R).\nAlternatively, in terms of depth d = R - r: g_d = g₀ (1 - d / R).",
          "si": "කවච ප්‍රමේයය අනුව r ට පිටතින් ඇති කවචය මඟින් බලයක් නැත.\nr අරය තුළ ස්කන්ධය M(r) = M (r / R)³.\nඑබැවින් g_r = G M(r) / r² = (G M / R²) (r / R) = g₀ (r / R).\nගැඹුර d ඇසුරෙන්: g_d = g₀ (1 - d / R)."
        }
      },
      {
        "id": "grav-sq04-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the gravitational acceleration g_d at a depth of d = 1600 km below the Earth’s surface.",
          "si": "පෘථිවි පෘෂ්ඨයේ සිට d = 1600 km ගැඹුරකදී ගුරුත්වජ ත්වරණය g_d ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies g_d = g₀ (1 - d / R) with d = 1.60 × 10⁶ m and R = 6.40 × 10⁶ m.",
              "si": "g_d = g₀ (1 - d / R) සූත්‍රය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates g_d = 9.80 × (1 - 1600 / 6400) = 9.80 × (1 - 0.25) = 9.80 × 0.75 = 7.35 m s⁻².",
              "si": "g_d = 7.35 m s⁻² ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Depth d = 1600 km, radius R = 6400 km => d / R = 1600 / 6400 = 0.25.\ng_d = g₀ × (1 - d / R) = 9.80 m s⁻² × (1 - 0.25) = 9.80 × 0.75 = 7.35 m s⁻².",
          "si": "d / R = 1600 / 6400 = 0.25.\ng_d = 9.80 × (1 - 0.25) = 7.35 m s⁻²."
        }
      },
      {
        "id": "grav-sq04-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "A hypothetical frictionless tunnel is drilled straight through the centre of the Earth from pole to pole. Show that an object dropped into the tunnel executes Simple Harmonic Motion (SHM) and calculate its period of oscillation T in minutes.",
          "si": "පෘථිවි කේන්ද්‍රය හරහා ධ්‍රැවයේ සිට අනෙක් ධ්‍රැවය දක්වා විදින ලද ඝර්ෂණ රහිත උමගකට අතහරින ලද වස්තුවක් සරල අනුවර්තී චලිතයක යෙදෙන බව පෙන්වා, එහි දෝලන කාලාවර්තය T මිනිත්තු වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Shows restoring force towards centre: F = -m g_r = -m (g₀ / R) r => acceleration a = -(g₀ / R) r.",
              "si": "කේන්ද්‍රය දෙසට ප්‍රත්‍යාවර්තක බලය F = -m (g₀ / R) r => ත්වරණය a = -(g₀ / R) r බව පෙන්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Identifies SHM equation a = -ω² r with ω = √(g₀ / R).",
              "si": "a = -ω² r සරල අනුවර්තී සමීකරණය සහ ω = √(g₀ / R) හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates period T = 2π √(R / g₀) = 2π √(6.40 × 10⁶ / 9.80) = 2π √(653061) = 2π × 808.1 = 5077 s.",
              "si": "T = 5077 s ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Converts to minutes: T = 5077 / 60 = 84.6 minutes (accept 84.4 - 84.8 min).",
              "si": "T = 84.6 මිනිත්තු ලෙස ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At displacement r from the centre, the restoring gravitational force directed towards the centre is:\nF = -m · g_r = -m · (g₀ / R) · r.\nAcceleration: a = F / m = -(g₀ / R) · r.\nThis satisfies the definitive condition for SHM: a = -ω² · r, with angular frequency ω = √(g₀ / R).\nPeriod of oscillation:\nT = 2π / ω = 2π √(R / g₀) = 2π √(6.40 × 10⁶ m / 9.80 m s⁻²) = 2π √(6.5306 × 10⁵) = 2π × 808.12 s = 5077.6 s.\nIn minutes: T = 5077.6 / 60 = 84.6 minutes.",
          "si": "ත්වරණය a = -(g₀ / R) r වන අතර එය a = -ω² r ආකාරයේ සරල අනුවර්තී චලිතයකි.\nකාලාවර්තය T = 2π √(R / g₀) = 2π √(6.40 × 10⁶ / 9.80) = 5078 s = 84.6 මිනිත්තු."
        }
      }
    ],
    "hint": {
      "en": "Inside Earth g_r = g₀ (r / R). Restoring acceleration a = -(g₀ / R) r gives SHM with period T = 2π√(R / g₀).",
      "si": "පෘථිවිය තුළ g_r = g₀ (r / R). ප්‍රත්‍යාවර්තක ත්වරණයෙන් සරල අනුවර්තී චලිතය ලැබේ: T = 2π√(R / g₀)."
    },
    "solution": {
      "en": "Inside Earth g_r = g₀ (r/R). At depth 1600 km, g_d = 7.35 m s⁻². Oscillation period through Earth tunnel T = 2π√(R/g₀) = 84.6 minutes.",
      "si": "පෘථිවිය තුළ g_r = g₀ (r/R). 1600 km ගැඹුරේදී g_d = 7.35 m s⁻². උමගේ දෝලන කාලාවර්තය T = 84.6 මිනිත්තු."
    }
  },
  {
    "id": "grav-sq05",
    "competencyRef": "Competency 5.2",
    "category": "gravitational-potential",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "The Earth has mass M = 5.98 × 10²⁴ kg and radius R = 6.37 × 10⁶ m. Gravitational constant G = 6.67 × 10⁻¹¹ N m² kg⁻².",
      "si": "පෘථිවියේ ස්කන්ධය M = 5.98 × 10²⁴ kg සහ අරය R = 6.37 × 10⁶ m වේ. G = 6.67 × 10⁻¹¹ N m² kg⁻² වේ."
    },
    "parts": [
      {
        "id": "grav-sq05-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Define gravitational potential V at a point in a gravitational field and explain why gravitational potential is defined to be negative everywhere.",
          "si": "ගුරුත්වාකර්ෂණ ක්ෂේත්‍රයක ලක්ෂ්‍යයක ගුරුත්ව විභවය V අර්ථ දක්වා, ගුරුත්ව විභවය සෑම තැනකදීම සෘණ අගයක් ගන්නේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Defines V: Work done per unit mass by an external agent in bringing a test mass from infinity to that point without acceleration.",
              "si": "විභවය: ත්වරණයකින් තොරව අනන්තයේ සිට අදාළ ලක්ෂ්‍යයට ඒකක ස්කන්ධයක් ගෙන ඒමට බාහිර බලයක් මඟින් කළ යුතු කාර්යය ලෙස අර්ථ දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States reference convention: Potential is taken as zero at infinity (V_∞ = 0).",
              "si": "අනන්තයේදී විභවය ශුන්‍ය (V_∞ = 0) ලෙස සම්මත කර ඇති බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains negative sign: Because gravity is attractive, the field does positive work pulling mass in, so external agent does negative work (V < 0).",
              "si": "ගුරුත්වය ආකර්ෂණ බලයක් බැවින් ක්ෂේත්‍රය මඟින් ධන කාර්යයක් කරන අතර බාහිර බලය සෘණ කාර්යයක් කරන බැවින් විභවය සෘණ වන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Gravitational potential V at a point is the work done per unit mass by an external force in bringing a small test mass from infinity to that point without acceleration:\nV = W_ext / m.\nIt is always negative because:\n1. Gravitational potential is chosen to be zero at an infinite distance (V = 0 at r = ∞).\n2. Because gravitational forces are purely attractive, the attractive field itself pulls the mass inwards (doing positive work), meaning an external agent must apply an opposing retarding force, doing negative work as the mass approaches from infinity.",
          "si": "අනන්තයේ සිට අදාළ ලක්ෂ්‍යය දක්වා ඒකක ස්කන්ධයක් ත්වරණයකින් තොරව ගෙන ඒමට බාහිර බලයක් මඟින් කළ යුතු කාර්යය ගුරුත්ව විභවයයි.\nඅනන්තයේදී විභවය ශුන්‍ය ලෙස ගනී. ගුරුත්වය ආකර්ෂණ බලයක් බැවින් ස්කන්ධයක් ළඟට එනවිට ක්ෂේත්‍රය මඟින් කාර්යය කරයි. එමනිසා බාහිර බලයට සෘණ කාර්යයක් කිරීමට සිදුවන බැවින් විභවය සැමවිටම සෘණ වේ."
        }
      },
      {
        "id": "grav-sq05-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the gravitational potential V_s at the surface of the Earth in J kg⁻¹ (or MJ kg⁻¹).",
          "si": "පෘථිවි පෘෂ්ඨය මත ගුරුත්ව විභවය V_s (J kg⁻¹ වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies V_s = -G M / R.",
              "si": "V_s = -G M / R සූත්‍රය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes V_s = -(6.67 × 10⁻¹¹ × 5.98 × 10²⁴) / (6.37 × 10⁶) = -3.989 × 10¹⁴ / 6.37 × 10⁶ = -6.26 × 10⁷ J kg⁻¹ (-62.6 MJ kg⁻¹).",
              "si": "V_s = -6.26 × 10⁷ J kg⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "V_s = -G · M / R = -(6.67 × 10⁻¹¹ N m² kg⁻² × 5.98 × 10²⁴ kg) / (6.37 × 10⁶ m)\nV_s = -(3.98866 × 10¹⁴) / (6.37 × 10⁶) = -6.26 × 10⁷ J kg⁻¹ (-62.6 MJ kg⁻¹).",
          "si": "V_s = -G M / R = -(6.67 × 10⁻¹¹ × 5.98 × 10²⁴) / (6.37 × 10⁶) = -6.26 × 10⁷ J kg⁻¹."
        }
      },
      {
        "id": "grav-sq05-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the minimum work required to lift a satellite of mass m = 500 kg from the Earth’s surface to an altitude h = R above the surface.",
          "si": "ස්කන්ධය m = 500 kg වන චන්ද්‍රිකාවක් පෘථිවි පෘෂ්ඨයේ සිට h = R උසකට එසවීම සඳහා අවශ්‍ය අවම කාර්යය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies final radial distance r_f = 2R and potential V_f = -GM / (2R) = 0.5 V_s.",
              "si": "අවසාන දුර r_f = 2R සහ විභවය V_f = 0.5 V_s හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States work formula W = m · ΔV = m (V_f - V_s) = m (GM / 2R).",
              "si": "කාර්යය W = m (V_f - V_s) = 0.5 m GM / R ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes W = 500 kg × 0.5 × (6.26 × 10⁷ J kg⁻¹) = 1.57 × 10¹⁰ J (15.7 GJ).",
              "si": "W = 1.57 × 10¹⁰ J ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Initial potential at surface (r = R): V_i = -GM / R = -6.26 × 10⁷ J kg⁻¹.\nFinal potential at altitude h = R (r = 2R): V_f = -GM / (2R) = -3.13 × 10⁷ J kg⁻¹.\nPotential difference: ΔV = V_f - V_i = (-3.13 × 10⁷) - (-6.26 × 10⁷) = +3.13 × 10⁷ J kg⁻¹.\nWork required: W = m · ΔV = 500 kg × 3.13 × 10⁷ J kg⁻¹ = 1.565 × 10¹⁰ J ≈ 1.57 × 10¹⁰ J (15.7 GJ).",
          "si": "ආරම්භක විභවය V_i = -6.26 × 10⁷ J kg⁻¹.\nඅවසාන විභවය (2R හිදී) V_f = -3.13 × 10⁷ J kg⁻¹.\nවිභව වෙනස ΔV = 3.13 × 10⁷ J kg⁻¹.\nඅවශ්‍ය කාර්යය W = m ΔV = 500 × 3.13 × 10⁷ = 1.57 × 10¹⁰ J."
        }
      }
    ],
    "hint": {
      "en": "V = -GM/r. Work done W = m (V_final - V_initial). At height h = R, orbital distance is 2R.",
      "si": "V = -GM/r. කාර්යය W = m (V_final - V_initial). h = R උසේදී දුර 2R වේ."
    },
    "solution": {
      "en": "Surface potential V_s = -6.26 × 10⁷ J kg⁻¹. At r = 2R, V = -3.13 × 10⁷ J kg⁻¹. Work required = 1.57 × 10¹⁰ J.",
      "si": "පෘෂ්ඨීය විභවය V_s = -6.26 × 10⁷ J kg⁻¹. 2R දුරේදී V = -3.13 × 10⁷ J kg⁻¹. අවශ්‍ය කාර්යය = 1.57 × 10¹⁰ J."
    }
  },
  {
    "id": "grav-sq06",
    "competencyRef": "Competency 5.2",
    "category": "gravitational-potential",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A research sounding rocket is fired vertically upwards from the surface of the Earth with launch speed u = 4.00 km s⁻¹ (4000 m s⁻¹). The radius of the Earth is R = 6.40 × 10⁶ m and surface gravitational acceleration is g₀ = 9.80 m s⁻². Neglect atmospheric air resistance.",
      "si": "පර්යේෂණ රොකට්ටුවක් පෘථිවි පෘෂ්ඨයේ සිට සිරස්ව ඉහළට u = 4.00 km s⁻¹ (4000 m s⁻¹) ආරම්භක වේගයකින් විදිනු ලැබේ. පෘථිවි අරය R = 6.40 × 10⁶ m සහ g₀ = 9.80 m s⁻² වේ. වායු ප්‍රතිරෝධය නොසලකන්න."
    },
    "parts": [
      {
        "id": "grav-sq06-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Explain why the elementary formula for potential energy ΔU = m g₀ h cannot be used to find the maximum height reached by this rocket.",
          "si": "මෙම රොකට්ටුව ළඟාවන උපරිම උස සෙවීම සඳහා සරල ΔU = m g₀ h සූත්‍රය භාවිතා කළ නොහැක්කේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Explains that ΔU = m g₀ h assumes a uniform gravitational field where g is constant.",
              "si": "ΔU = m g₀ h වලංගු වන්නේ g නියතව පවතින ඒකාකාර ක්ෂේත්‍රයක් සඳහා පමණක් බව පැහැදිලි කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States that for high velocities (4 km/s), the rocket ascends to altitudes where g decreases significantly according to inverse-square law.",
              "si": "4 km/s වැනි ඉහළ ප්‍රවේග වලදී රොකට්ටුව විශාල උසකට යන බැවින් ප්‍රතිලෝම වර්ග නියමය අනුව g අගය සැලකිය යුතු ලෙස අඩුවන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The formula ΔU = m g₀ h is an approximation derived under the assumption that the gravitational field intensity g is constant. A launch speed of 4.00 km s⁻¹ propels the projectile hundreds of kilometres into space, where g decreases substantially according to the inverse-square law g_r = GM / r². Therefore, the exact gravitational potential energy function U(r) = -GMm / r must be employed.",
          "si": "ΔU = m g₀ h වලංගු වන්නේ g නියත වන පෘෂ්ඨය ආසන්න කුඩා උසවල් සඳහා පමණි. 4.00 km s⁻¹ වේගයකින් විදින විට රොකට්ටුව විශාල උසකට යන අතර එහිදී g සැලකිය යුතු ලෙස අඩුවේ. එබැවින් නිවැරදි විභව ශක්ති සූත්‍රය U(r) = -GMm / r භාවිතා කළ යුතුය."
        }
      },
      {
        "id": "grav-sq06-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Using conservation of mechanical energy, derive an expression for the maximum altitude h_max reached by the rocket above the Earth’s surface in terms of u, g₀, and R.",
          "si": "යාන්ත්‍රික ශක්ති සංස්ථිති මූලධර්මය යොදා, u, g₀ සහ R ඇසුරෙන් රොකට්ටුව ළඟාවන උපරිම උස h_max සඳහා ප්‍රකාශනයක් ගොඩනඟන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Writes energy conservation: (1/2) m u² - G M m / R = 0 - G M m / (R + h_max).",
              "si": "ශක්ති සංස්ථිතිය ලිවීම: (1/2) m u² - G M m / R = - G M m / (R + h_max)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes G M = g₀ R²: (1/2) u² - g₀ R = -g₀ R² / (R + h_max).",
              "si": "G M = g₀ R² ආදේශ කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Rearranges: g₀ R² / (R + h_max) = g₀ R - (1/2) u².",
              "si": "ප්‍රකාශනය සරල කිරීම: 1 / (R + h_max) = (1 / R) - u² / (2 g₀ R²)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves h_max = (u² R) / (2 g₀ R - u²).",
              "si": "h_max = (u² R) / (2 g₀ R - u²) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At the surface (r = R): E_initial = (1/2) m u² - G M m / R.\nAt maximum altitude (r = R + h_max), speed is zero: E_top = -G M m / (R + h_max).\nBy conservation of mechanical energy:\n(1/2) m u² - G M m / R = -G M m / (R + h_max)\nDividing by m and substituting GM = g₀ R²:\n(1/2) u² - g₀ R = -g₀ R² / (R + h_max)\ng₀ R² / (R + h_max) = g₀ R - (1/2) u²\n(R + h_max) / R = g₀ R / (g₀ R - u² / 2) = 2 g₀ R / (2 g₀ R - u²)\n1 + h_max / R = 2 g₀ R / (2 g₀ R - u²) => h_max = (u² · R) / (2 g₀ R - u²).",
          "si": "ශක්ති සංස්ථිතියෙන්: (1/2) m u² - GMm / R = -GMm / (R + h_max)\nGM = g₀ R² ආදේශයෙන්:\n(1/2) u² = g₀ R² [1/R - 1/(R + h_max)] = g₀ R² [h_max / (R(R + h_max))]\nu² / 2 = g₀ R h_max / (R + h_max)\nh_max = (u² R) / (2 g₀ R - u²)."
        }
      },
      {
        "id": "grav-sq06-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the numerical value of h_max in kilometres (km).",
          "si": "h_max හි සංඛ්‍යාත්මක අගය කිලෝමීටර් (km) වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates 2 g₀ R = 2 × 9.80 × 6.40 × 10⁶ = 1.2544 × 10⁸ m² s⁻² and u² = 1.60 × 10⁷ m² s⁻².",
              "si": "2 g₀ R = 1.2544 × 10⁸ සහ u² = 1.60 × 10⁷ ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes h_max = (1.60 × 10⁷ × 6.40 × 10⁶) / (1.2544 × 10⁸ - 1.60 × 10⁷) = 1.024 × 10¹⁴ / 1.0944 × 10⁸ = 9.36 × 10⁵ m = 936 km.",
              "si": "h_max = 936 km ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "u = 4000 m s⁻¹ => u² = 1.60 × 10⁷ m² s⁻².\n2 g₀ R = 2 × 9.80 m s⁻² × 6.40 × 10⁶ m = 1.2544 × 10⁸ m² s⁻².\nDenominator: 2 g₀ R - u² = 1.2544 × 10⁸ - 0.1600 × 10⁸ = 1.0944 × 10⁸ m² s⁻².\nh_max = (1.60 × 10⁷ × 6.40 × 10⁶) / (1.0944 × 10⁸) = 1.024 × 10¹⁴ / 1.0944 × 10⁸ = 9.357 × 10⁵ m = 936 km.",
          "si": "h_max = (1.60 × 10⁷ × 6.40 × 10⁶) / (1.2544 × 10⁸ - 1.60 × 10⁷) = 936 km."
        }
      }
    ],
    "hint": {
      "en": "Apply conservation of energy: (1/2) m u² - GMm/R = -GMm/(R + h). Use GM = g₀ R².",
      "si": "ශක්ති සංස්ථිතිය යොදන්න: (1/2) m u² - GMm/R = -GMm/(R + h). GM = g₀ R² ආදේශ කරන්න."
    },
    "solution": {
      "en": "Constant-g approximation fails at high altitudes. Formula: h_max = (u² R)/(2g₀R - u²). Maximum altitude h_max = 936 km.",
      "si": "විශාල උසකදී g නියත නොවේ. h_max = (u² R)/(2g₀R - u²). උපරිම උස h_max = 936 km."
    }
  },
  {
    "id": "grav-sq07",
    "competencyRef": "Competency 5.2",
    "category": "orbital-mechanics",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A communications satellite of mass m = 800 kg travels in a stable circular orbit around the Earth at radius r from the centre of the Earth. The Earth has mass M = 5.98 × 10²⁴ kg and G = 6.67 × 10⁻¹¹ N m² kg⁻².",
      "si": "ස්කන්ධය m = 800 kg වන සන්නිවේදන චන්ද්‍රිකාවක් පෘථිවි කේන්ද්‍රයේ සිට r අරයක් සහිත ස්ථායී වෘත්තාකාර කක්ෂයක ගමන් කරයි. පෘථිවියේ ස්කන්ධය M = 5.98 × 10²⁴ kg සහ G = 6.67 × 10⁻¹¹ N m² kg⁻² වේ."
    },
    "parts": [
      {
        "id": "grav-sq07-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Derive the formula for the orbital speed v of a satellite in a circular orbit of radius r.",
          "si": "r අරයකින් යුත් වෘත්තාකාර කක්ෂයක චන්ද්‍රිකාවක කක්ෂීය වේගය v සඳහා සූත්‍රය ගොඩනඟන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Equates gravitational force to centripetal force: G M m / r² = m v² / r.",
              "si": "ගුරුත්වාකර්ෂණ බලය කේන්ද්‍රාභිසාරී බලයට සමාන කිරීම: G M m / r² = m v² / r."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves v = √(GM / r).",
              "si": "v = √(GM / r) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The gravitational force of attraction provides the necessary centripetal force for circular orbit:\nF_grav = F_centripetal\nG · M · m / r² = m · v² / r\nDividing by m and multiplying by r:\nv² = G · M / r => v = √(G · M / r).",
          "si": "ගුරුත්වාකර්ෂණ බලය මඟින් කේන්ද්‍රාභිසාරී බලය සපයයි:\nG M m / r² = m v² / r => v = √(G M / r)."
        }
      },
      {
        "id": "grav-sq07-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Derive Kepler’s Third Law for circular orbits, showing that T² / r³ = 4π² / (GM).",
          "si": "වෘත්තාකාර කක්ෂ සඳහා කෙප්ලර්ගේ තුන්වන නියමය ගොඩනඟමින්, T² / r³ = 4π² / (GM) බව පෙන්වන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Relates orbital speed to period: v = 2π r / T.",
              "si": "කක්ෂීය වේගය හා කාලාවර්තය අතර සම්බන්ධය ලිවීම: v = 2π r / T."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes into orbital speed equation: (2π r / T)² = GM / r => 4π² r² / T² = GM / r.",
              "si": "ආදේශ කිරීම: 4π² r² / T² = GM / r."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Rearranges to T² = (4π² / GM) r³ => T² / r³ = 4π² / (GM).",
              "si": "T² / r³ = 4π² / (GM) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The orbital period T is the time to complete one circular revolution of circumference 2π r:\nT = 2π r / v => v = 2π r / T.\nSubstituting into v² = GM / r:\n(2π r / T)² = G · M / r\n4π² r² / T² = G · M / r\nRearranging gives Kepler’s Third Law:\nT² = (4π² / (G · M)) · r³  or  T² / r³ = 4π² / (G · M) = constant.",
          "si": "v = 2π r / T.\n(2π r / T)² = G M / r\n4π² r² / T² = G M / r => T² = (4π² / GM) r³."
        }
      },
      {
        "id": "grav-sq07-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the orbital period T of a satellite orbiting at an altitude of h = 630 km above the Earth’s surface (r = 7.00 × 10⁶ m).",
          "si": "පෘථිවි පෘෂ්ඨයේ සිට h = 630 km උසකින් (r = 7.00 × 10⁶ m) කක්ෂගත චන්ද්‍රිකාවක කක්ෂීය කාලාවර්තය T ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates GM = 6.67 × 10⁻¹¹ × 5.98 × 10²⁴ = 3.989 × 10¹⁴ m³ s⁻².",
              "si": "GM = 3.989 × 10¹⁴ m³ s⁻² ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes into Kepler formula: T² = [4π² / (3.989 × 10¹⁴)] × (7.00 × 10⁶)³.",
              "si": "T² සූත්‍රයේ ආදේශ කිරීම: T² = (4π² / 3.989 × 10¹⁴) × (3.43 × 10²⁰)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes T = √(3.395 × 10⁷) = 5827 s ≈ 97.1 minutes.",
              "si": "T = 5827 s (හෝ 97.1 මිනිත්තු) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "G · M = (6.67 × 10⁻¹¹ N m² kg⁻²) × (5.98 × 10²⁴ kg) = 3.989 × 10¹⁴ m³ s⁻².\nr³ = (7.00 × 10⁶ m)³ = 3.43 × 10²⁰ m³.\nT² = (4π² / (3.989 × 10¹⁴)) × (3.43 × 10²⁰) = 9.897 × 10⁻¹⁴ × 3.43 × 10²⁰ = 3.395 × 10⁷ s².\nT = √(3.395 × 10⁷) = 5827 s = 97.1 minutes (1 hour 37 minutes).",
          "si": "T² = (4π² / GM) r³\nT² = (4π² / 3.989 × 10¹⁴) × (7.00 × 10⁶)³ = 3.395 × 10⁷ s².\nT = 5827 s = 97.1 මිනිත්තු."
        }
      }
    ],
    "hint": {
      "en": "Orbital speed v = √(GM/r). Kepler’s law T² = (4π²/GM) r³.",
      "si": "කක්ෂීය වේගය v = √(GM/r). කෙප්ලර් නියමය T² = (4π²/GM) r³."
    },
    "solution": {
      "en": "v = √(GM/r). Kepler’s Third Law T² = (4π²/GM) r³. For r = 7.00 × 10⁶ m, period T = 5827 s (97.1 min).",
      "si": "v = √(GM/r). කෙප්ලර් නියමය T² = (4π²/GM) r³. T = 5827 s (97.1 මිනිත්තු)."
    }
  },
  {
    "id": "grav-sq08",
    "competencyRef": "Competency 5.2",
    "category": "geostationary-satellites",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A geostationary satellite orbits the Earth such that it appears stationary relative to an observer on the ground, serving continuous telecommunication links. GM_Earth = 3.99 × 10¹⁴ m³ s⁻² and Earth radius R = 6.37 × 10⁶ m.",
      "si": "පෘථිවියේ නිරීක්ෂකයෙකුට සාපේක්ෂව නිශ්චලව පෙනෙන පරිදි භූස්ථාවර චන්ද්‍රිකාවක් පෘථිවිය වටා කක්ෂගතව පවතී. GM = 3.99 × 10¹⁴ m³ s⁻² සහ පෘථිවි අරය R = 6.37 × 10⁶ m වේ."
    },
    "parts": [
      {
        "id": "grav-sq08-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State three essential orbital conditions required for a satellite to be in a geostationary orbit.",
          "si": "චන්ද්‍රිකාවක් භූස්ථාවර කක්ෂයක පැවතීමට අවශ්‍ය අත්‍යවශ්‍ය කොන්දේසි තුනක් සඳහන් කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Condition 1: Orbital period must equal Earth’s sidereal rotational period: T = 24 hours (86,400 s / 86,164 s).",
              "si": "කොන්දේසිය 1: කක්ෂීය කාලාවර්තය පෘථිවියේ භ්‍රමණ කාලාවර්තයට (පැය 24) සමාන විය යුතුය."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Condition 2: Direction of orbital revolution must be from West to East (same sense as Earth rotation).",
              "si": "කොන්දේසිය 2: භ්‍රමණ දිශාව පෘථිවියේ භ්‍රමණ දිශාව ඔස්සේම (බටහිර සිට නැගෙනහිරට) විය යුතුය."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Condition 3: The orbit must lie in the Earth’s equatorial plane (inclination angle = 0°).",
              "si": "කොන්දේසිය 3: කක්ෂය පෘථිවියේ සමක තලයේ පිහිටිය යුතුය (ආනතිය 0° විය යුතුය)."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. The orbital period T must equal the Earth’s period of rotation about its axis (T = 24 hours ≈ 8.64 × 10⁴ s).\n2. The orbit must lie directly in the Earth’s equatorial plane (zero inclination to the equator).\n3. The satellite must rotate in the same direction as the Earth (from West to East).",
          "si": "1. කාලාවර්තය පෘථිවියේ භ්‍රමණ කාලයට (පැය 24) සමාන විය යුතුය.\n2. කක්ෂය පෘථිවියේ සමක තලයේ පිහිටිය යුතුය.\n3. භ්‍රමණ දිශාව බටහිර සිට නැගෙනහිරට විය යුතුය."
        }
      },
      {
        "id": "grav-sq08-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the orbital radius r_geo and the altitude h_geo of a geostationary satellite above the Earth’s surface in kilometres (km), taking T = 8.64 × 10⁴ s.",
          "si": "T = 8.64 × 10⁴ s ලෙස ගෙන, භූස්ථාවර චන්ද්‍රිකාවක කක්ෂීය අරය r_geo සහ පෘෂ්ඨයේ සිට උස h_geo කිලෝමීටර් (km) වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies Kepler’s Third Law: r³ = (GM · T²) / (4π²).",
              "si": "කෙප්ලර් නියමය r³ = (GM T²) / (4π²) යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes values: r³ = (3.99 × 10¹⁴ × (8.64 × 10⁴)²) / (4π²) = (3.99 × 10¹⁴ × 7.465 × 10⁹) / 39.478 = 7.545 × 10²² m³.",
              "si": "අගයන් ආදේශ කර r³ = 7.545 × 10²² m³ ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes r_geo = (7.545 × 10²²)^(1/3) = 4.23 × 10⁷ m = 42,300 km.",
              "si": "r_geo = 42,300 km (හෝ 42,200 - 42,400 km) ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes altitude h_geo = r - R = 42,300 - 6,370 = 35,930 km ≈ 36,000 km.",
              "si": "උස h_geo = 42,300 - 6,370 = 35,930 km (3.6 × 10⁴ km) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "From Kepler’s Third Law:\nr³ = (G · M · T²) / (4π²)\nr³ = [3.99 × 10¹⁴ m³ s⁻² × (8.64 × 10⁴ s)²] / (4π²) = (3.99 × 10¹⁴ × 7.465 × 10⁹) / 39.4784 = 7.545 × 10²² m³.\nr_geo = (7.545 × 10²²)^(1/3) = 4.226 × 10⁷ m ≈ 4.23 × 10⁴ km (42,300 km).\nAltitude above the surface:\nh_geo = r_geo - R = 42,260 km - 6370 km = 35,890 km ≈ 36,000 km.",
          "si": "r³ = (GM T²) / (4π²) = 7.545 × 10²² m³.\nr_geo = 4.23 × 10⁷ m = 42,300 km.\nපෘෂ්ඨයේ සිට උස h_geo = 42,300 - 6,370 = 35,930 km (36,000 km පමණ)."
        }
      }
    ],
    "hint": {
      "en": "Period T = 24 h = 86400 s. Use Kepler’s law r³ = (GM T²)/(4π²). Altitude h = r - R.",
      "si": "කාලාවර්තය T = පැය 24 = 86400 s. r³ = (GM T²)/(4π²). උස h = r - R."
    },
    "solution": {
      "en": "Geostationary conditions: equatorial plane, West to East, T = 24 h. Orbital radius r = 42,300 km. Altitude h ≈ 36,000 km.",
      "si": "කොන්දේසි: සමක තලය, බටහිර සිට නැගෙනහිරට, T = පැය 24. කක්ෂීය අරය r = 42,300 km. උස h ≈ 36,000 km."
    }
  },
  {
    "id": "grav-sq09",
    "competencyRef": "Competency 5.2",
    "category": "escape-velocity",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "The escape velocity is the minimum projection speed required for an unpowered projectile launched from the surface of an astronomical body to escape completely from its gravitational field to infinity. For Earth: M_E = 5.98 × 10²⁴ kg, R_E = 6.37 × 10⁶ m. For the Moon: M_M = 7.36 × 10²² kg, R_M = 1.74 × 10⁶ m. G = 6.67 × 10⁻¹¹ N m² kg⁻².",
      "si": "ගැලවුම් ප්‍රවේගය යනු ග්‍රහලෝකයක පෘෂ්ඨයේ සිට විදින ලද වස්තුවකට එහි ගුරුත්ව ක්ෂේත්‍රයෙන් සම්පූර්ණයෙන්ම මිදී අනන්තය කරා යාමට අවශ්‍ය අවම ප්‍රවේගයයි. පෘථිවිය: M_E = 5.98 × 10²⁴ kg, R_E = 6.37 × 10⁶ m. චන්ද්‍රයා: M_M = 7.36 × 10²² kg, R_M = 1.74 × 10⁶ m. G = 6.67 × 10⁻¹¹ N m² kg⁻²."
    },
    "parts": [
      {
        "id": "grav-sq09-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Using conservation of energy, derive the expression for the escape velocity v_e from the surface of a spherical planet of mass M and radius R.",
          "si": "ශක්ති සංස්ථිති මූලධර්මය ඇසුරෙන් M ස්කන්ධය සහ R අරය සහිත ග්‍රහලෝක පෘෂ්ඨයෙන් ගැලවුම් ප්‍රවේගය v_e සඳහා සූත්‍රය ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States total energy at launch: E_surface = (1/2) m v_e² - G M m / R.",
              "si": "පෘෂ්ඨයේදී මුළු ශක්තිය: E_surface = (1/2) m v_e² - G M m / R ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States condition at infinity for minimum escape velocity: E_infinity ≥ 0 (v_∞ = 0, U_∞ = 0).",
              "si": "අනන්තයේදී අවම ගැලවුම් කොන්දේසිය E_infinity = 0 බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Equates (1/2) m v_e² = G M m / R => v_e = √(2GM / R) = √(2 g₀ R).",
              "si": "v_e = √(2GM / R) (හෝ √(2 g₀ R)) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Total mechanical energy of mass m at surface launch:\nE_surface = (1/2) m v_e² - G · M · m / R.\nTo escape to infinity, the particle must reach infinity with non-negative kinetic energy (minimum requirement: speed approaches 0 at r = ∞):\nE_infinity = KE_∞ + PE_∞ = 0 + 0 = 0.\nBy conservation of mechanical energy:\n(1/2) m v_e² - G · M · m / R = 0 => (1/2) v_e² = G · M / R\nv_e = √(2 G · M / R) = √(2 g₀ R).",
          "si": "පෘෂ්ඨයේදී මුළු ශක්තිය: E = (1/2) m v_e² - GMm / R.\nඅනන්තයේදී මුළු ශක්තිය ශුන්‍ය වේ.\n(1/2) m v_e² - GMm / R = 0 => v_e = √(2GM / R) = √(2 g₀ R)."
        }
      },
      {
        "id": "grav-sq09-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the escape velocity from the surface of the Earth (v_e,Earth) and from the surface of the Moon (v_e,Moon) in km s⁻¹.",
          "si": "පෘථිවි පෘෂ්ඨයෙන් ගැලවුම් ප්‍රවේගය (v_e,Earth) සහ චන්ද්‍ර පෘෂ්ඨයෙන් ගැලවුම් ප්‍රවේගය (v_e,Moon) km s⁻¹ වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates Earth escape speed: v_e,Earth = √(2 × 6.67 × 10⁻¹¹ × 5.98 × 10²⁴ / 6.37 × 10⁶) = √1.252 × 10⁸ = 1.119 × 10⁴ m s⁻¹ = 11.2 km s⁻¹.",
              "si": "පෘථිවි ගැලවුම් ප්‍රවේගය = 11.2 km s⁻¹ ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates Moon escape speed: v_e,Moon = √(2 × 6.67 × 10⁻¹¹ × 7.36 × 10²² / 1.74 × 10⁶) = √5.642 × 10⁶ = 2.375 × 10³ m s⁻¹ = 2.38 km s⁻¹.",
              "si": "චන්ද්‍ර ගැලවුම් ප්‍රවේගය = 2.38 km s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For Earth:\nv_e,Earth = √(2 × 6.67 × 10⁻¹¹ × 5.98 × 10²⁴ / 6.37 × 10⁶) = √(1.252 × 10⁸) = 11,189 m s⁻¹ ≈ 11.2 km s⁻¹.\nFor the Moon:\nv_e,Moon = √(2 × 6.67 × 10⁻¹¹ × 7.36 × 10²² / 1.74 × 10⁶) = √(5.642 × 10⁶) = 2375 m s⁻¹ ≈ 2.38 km s⁻¹.",
          "si": "පෘථිවියට: v_e = √(2 × 6.67 × 10⁻¹¹ × 5.98 × 10²⁴ / 6.37 × 10⁶) = 11.2 km s⁻¹.\nචන්ද්‍රයාට: v_e = √(2 × 6.67 × 10⁻¹¹ × 7.36 × 10²² / 1.74 × 10⁶) = 2.38 km s⁻¹."
        }
      },
      {
        "id": "grav-sq09-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Explain why the Moon possesses no atmosphere, whereas the Earth retains a dense nitrogen/oxygen atmosphere.",
          "si": "පෘථිවිය වටා ඝන නයිට්‍රජන්/ඔක්සිජන් වායුගෝලයක් රඳා පවතිද්දී, චන්ද්‍රයා මත වායුගෝලයක් නොමැත්තේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Compares thermal RMS molecular speed of atmospheric gases (~0.5 - 2 km/s at solar temperatures) with escape velocities.",
              "si": "වායු අණුවල තාපජ වර්ග මධ්‍යන්‍ය මූල වේගය ගැලවුම් ප්‍රවේගය සමඟ සැසඳීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that on the Moon, escape speed (2.38 km/s) is comparable to molecular thermal speeds, so gas molecules escaped into space; on Earth, escape speed (11.2 km/s) far exceeds thermal speeds.",
              "si": "චන්ද්‍රයාගේ ගැලවුම් ප්‍රවේගය (2.38 km/s) අඩු බැවින් වායු අණු පහසුවෙන් ගැලවී ගිය බවත්, පෘථිවියේ ගැලවුම් ප්‍රවේගය (11.2 km/s) අණුක වේගයට වඩා බෙහෙවින් වැඩි බැවින් වායු රඳවා ගන්නා බවත් පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Due to solar heating, the thermal root-mean-square speeds of common gas molecules (H₂, O₂, N₂) reach 0.5 to 2.0 km s⁻¹. On the Moon, the low escape velocity (2.38 km s⁻¹) is comparable to molecular thermal speeds; energetic molecules in the Maxwellian distribution easily exceeded escape velocity and leaked away over geological time. On Earth, the escape velocity (11.2 km s⁻¹) is roughly 6 to 10 times higher than the thermal speeds of O₂ and N₂, ensuring long-term gravitational retention.",
          "si": "සූර්ය තාපය නිසා වායු අණුවල මධ්‍යන්‍ය වේගය 0.5 - 2 km s⁻¹ පමණ වේ. චන්ද්‍රයාගේ ගැලවුම් ප්‍රවේගය (2.38 km s⁻¹) ඉතා අඩු බැවින් කාලයත් සමඟ වායු අණු අභ්‍යවකාශයට ගැලවී ගොස් ඇත. පෘථිවියේ ගැලවුම් ප්‍රවේගය (11.2 km s⁻¹) අණුක වේගයට වඩා බෙහෙවින් විශාල බැවින් වායුගෝලය රඳවා ගනී."
        }
      }
    ],
    "hint": {
      "en": "v_e = √(2GM/R). Compare escape velocity with thermal speeds of gas molecules.",
      "si": "v_e = √(2GM/R). ගැලවුම් ප්‍රවේගය වායු අණුවල තාපජ වේගය සමඟ සසඳන්න."
    },
    "solution": {
      "en": "Escape velocity v_e = √(2GM/R). Earth v_e = 11.2 km s⁻¹, Moon v_e = 2.38 km s⁻¹. Moon cannot retain atmosphere because its escape speed is too low.",
      "si": "ගැලවුම් ප්‍රවේගය: පෘථිවිය = 11.2 km s⁻¹, චන්ද්‍රයා = 2.38 km s⁻¹. චන්ද්‍රයාගේ ගැලවුම් ප්‍රවේගය අඩු බැවින් වායුගෝලය රඳවා ගත නොහැක."
    }
  },
  {
    "id": "grav-sq10",
    "competencyRef": "Competency 5.2",
    "category": "orbital-mechanics",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A satellite of mass m = 1500 kg orbits in a circular path of radius r = 8.00 × 10⁶ m around the Earth (M = 5.98 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²).",
      "si": "ස්කන්ධය m = 1500 kg වන චන්ද්‍රිකාවක් පෘථිවිය (M = 5.98 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²) වටා r = 8.00 × 10⁶ m අරයක් ඇති වෘත්තාකාර කක්ෂයක ගමන් කරයි."
    },
    "parts": [
      {
        "id": "grav-sq10-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Write expressions for the kinetic energy K, gravitational potential energy U, and total mechanical energy E of the orbiting satellite in terms of G, M, m, and r.",
          "si": "G, M, m සහ r ඇසුරෙන් කක්ෂගත චන්ද්‍රිකාවේ චාලක ශක්තිය K, ගුරුත්ව විභව ශක්තිය U සහ මුළු යාන්ත්‍රික ශක්තිය E සඳහා ප්‍රකාශන ලියන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States kinetic energy: K = (1/2) m v² = + (1/2) G M m / r.",
              "si": "චාලක ශක්තිය: K = +(1/2) G M m / r ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States potential energy: U = - G M m / r.",
              "si": "විභව ශක්තිය: U = - G M m / r ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States total mechanical energy: E = K + U = - (1/2) G M m / r (showing E = -K = U/2).",
              "si": "මුළු ශක්තිය: E = K + U = -(1/2) G M m / r ලිවීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For a satellite in circular orbit:\nKinetic energy: K = (1/2) m v² = (1/2) m (GM / r) = +GMm / (2r).\nPotential energy: U = -GMm / r.\nTotal mechanical energy: E = K + U = GMm / (2r) - GMm / r = -GMm / (2r).\nNotice that E = -K = U / 2.",
          "si": "චාලක ශක්තිය: K = +GMm / (2r).\nවිභව ශක්තිය: U = -GMm / r.\nමුළු ශක්තිය: E = K + U = -GMm / (2r) (එනම් E = -K = U/2)."
        }
      },
      {
        "id": "grav-sq10-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the numerical values of kinetic energy K, potential energy U, and total energy E in gigajoules (GJ) for this satellite.",
          "si": "මෙම චන්ද්‍රිකාව සඳහා K, U සහ E හි සංඛ්‍යාත්මක අගයන් ගිගාජූල් (GJ) වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates GMm / r = (6.67 × 10⁻¹¹ × 5.98 × 10²⁴ × 1500) / 8.00 × 10⁶ = 5.983 × 10¹⁷ / 8.00 × 10⁶ = 7.479 × 10¹⁰ J = 74.8 GJ.",
              "si": "GMm / r = 74.8 GJ ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes potential energy: U = -74.8 GJ.",
              "si": "විභව ශක්තිය U = -74.8 GJ ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes kinetic energy K = +37.4 GJ and total energy E = -37.4 GJ.",
              "si": "K = +37.4 GJ සහ E = -37.4 GJ ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "GMm / r = (6.67 × 10⁻¹¹ × 5.98 × 10²⁴ × 1500) / (8.00 × 10⁶) = 7.4787 × 10¹⁰ J = 74.79 GJ.\nPotential energy: U = -74.79 GJ ≈ -74.8 GJ.\nKinetic energy: K = +37.39 GJ ≈ +37.4 GJ.\nTotal mechanical energy: E = -37.39 GJ ≈ -37.4 GJ.",
          "si": "GMm / r = 74.8 GJ.\nවිභව ශක්තිය U = -74.8 GJ.\nචාලක ශක්තිය K = +37.4 GJ.\nමුළු ශක්තිය E = -37.4 GJ."
        }
      },
      {
        "id": "grav-sq10-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "A tenuous upper atmosphere exerts a gentle frictional drag force on the satellite. Explain what happens to the satellite’s orbital radius r, speed v, and total energy E as a result of this drag.",
          "si": "ඉහළ වායුගෝලය මඟින් චන්ද්‍රිකාව මත සුළු ඝර්ෂණ ප්‍රතිරෝධයක් ඇති කරයි. මෙම ඝර්ෂණය නිසා චන්ද්‍රිකාවේ කක්ෂීය අරය r, වේගය v සහ මුළු ශක්තිය E ට කුමක් සිදුවේදැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States total mechanical energy E decreases (becomes more negative) due to dissipative work done against drag.",
              "si": "ඝර්ෂණය නිසා යාන්ත්‍රික ශක්තිය තාපය බවට පත්වෙමින් මුළු ශක්තිය E අඩුවන බව (වඩා සෘණ වන බව) දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that as E decreases, orbital radius r decreases (decays inwards) and speed v = √(GM/r) paradoxically increases.",
              "si": "E අඩුවන විට කක්ෂීය අරය r අඩුවන බවත්, v = √(GM/r) බැවින් කක්ෂීය වේගය v වැඩිවන බවත් පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Frictional drag dissipates mechanical energy into heat, causing total mechanical energy E = -GMm/(2r) to decrease (become more negative).\nAs a consequence:\n1. Orbital radius r decreases: the satellite spirals inward into a lower orbit.\n2. Paradoxically, the orbital speed v = √(GM / r) increases as the satellite falls deeper into the gravitational potential well, converting lost gravitational potential energy into kinetic energy faster than energy is dissipated by drag.",
          "si": "ඝර්ෂණය නිසා මුළු යාන්ත්‍රික ශක්තිය E අඩුවේ (වඩාත් සෘණ වේ).\nඑමනිසා:\n1. කක්ෂීය අරය r අඩුවේ (චන්ද්‍රිකාව පහළ කක්ෂයකට ඇද වැටේ).\n2. අරය අඩුවන විට v = √(GM/r) බැවින් කක්ෂීය වේගය v වැඩිවේ. විභව ශක්තිය අඩුවන සීඝ්‍රතාව ඝර්ෂණ හානියට වඩා වැඩි බැවින් චාලක ශක්තිය වැඩිවේ."
        }
      }
    ],
    "hint": {
      "en": "K = GMm/(2r), U = -GMm/r, E = -GMm/(2r). Atmospheric drag decreases total energy, lowering r and increasing speed v.",
      "si": "K = GMm/(2r), U = -GMm/r, E = -GMm/(2r). වායු ප්‍රතිරෝධය නිසා මුළු ශක්තිය හා අරය අඩුවන අතර වේගය වැඩිවේ."
    },
    "solution": {
      "en": "K = +37.4 GJ, U = -74.8 GJ, E = -37.4 GJ. Atmospheric drag causes orbit to decay (r decreases), total energy decreases, but orbital speed v increases.",
      "si": "K = +37.4 GJ, U = -74.8 GJ, E = -37.4 GJ. වායු ප්‍රතිරෝධය නිසා අරය අඩුවී කක්ෂීය වේගය වැඩිවේ."
    }
  },
];
