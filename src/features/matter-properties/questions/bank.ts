import { MatterPropertiesQuestion } from './types';

export const MATTER_PROPERTIES_QUESTION_BANK: MatterPropertiesQuestion[] = [
  // ==========================================
  // Competency 10.1: Elasticity of Solids (1-18)
  // ==========================================
  {
    id: 'mat-10-1-01',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the SI unit of Young’s modulus of elasticity?',
      si: 'ප්‍රත්‍යාස්ථතාව පිළිබඳ යං මාපාංකයේ SI ඒකකය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'N m^-2 (Pascal, Pa)', si: 'N m^-2 (පැස්කල්, Pa)' } },
      { id: 'opt2', text: { en: 'N m^-1', si: 'N m^-1' } },
      { id: 'opt3', text: { en: 'J m^-2', si: 'J m^-2' } },
      { id: 'opt4', text: { en: 'Dimensionless', si: 'මාන රහිත වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Young’s modulus Y = stress / strain. Strain is dimensionless.',
      si: 'යං මාපාංකය Y = ප්‍රත්‍යබලය / වික්‍රියාව. වික්‍රියාව මාන රහිත වේ.',
    },
    solution: {
      en: 'Tensile stress has units of force per unit area (N m^-2 or Pa), while tensile strain is a dimensionless ratio. Hence Young’s modulus has the same unit as stress: Pa or N m^-2.',
      si: 'ප්‍රත්‍යබලයේ ඒකකය වර්ගඵලයකට බලය (N m^-2 හෙවත් Pa) වන අතර වික්‍රියාව මාන රහිත අනුපාතයකි. එබැවින් යං මාපාංකයේ ඒකකය N m^-2 හෙවත් Pa වේ.',
    },
  },
  {
    id: 'mat-10-1-02',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A steel wire of length 2.0 m and cross-sectional area 1.0e-6 m^2 is stretched by 1.0 mm by an applied tensile force. If Young’s modulus of steel is 2.0e11 Pa, calculate the applied tensile force F in Newtons (N).',
      si: 'දිග 2.0 m සහ හරස්කඩ වර්ගඵලය 1.0e-6 m^2 වූ වානේ කම්බියක් ඇදීමෙන් 1.0 mm කින් දිගු වේ. වානේවල යං මාපාංකය 2.0e11 Pa නම්, යෙදූ ආතන්‍ය බලය F (නිව්ටන්, N වලින්) ගණනය කරන්න.',
    },
    expected: 100.0,
    tolerance: 2.0,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'F = (Y * A * ΔL) / L = (2.0e11 * 1.0e-6 * 1.0e-3) / 2.0.',
      si: 'F = (Y * A * ΔL) / L = (2.0e11 * 1.0e-6 * 1.0e-3) / 2.0.',
    },
    solution: {
      en: 'F = (Y A ΔL) / L = (2.0 × 10^11 × 1.0 × 10^-6 × 1.0 × 10^-3) / 2.0 = 200 / 2.0 = 100.0 N.',
      si: 'F = (Y A ΔL) / L = (2.0 × 10^11 × 1.0 × 10^-6 × 1.0 × 10^-3) / 2.0 = 100.0 N වේ.',
    },
  },
  {
    id: 'mat-10-1-03',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why are two identical wires (reference wire and experimental wire) suspended side-by-side from the same rigid support in Searle’s apparatus?',
      si: 'සර්ල්ගේ උපකරණයේ එකම දෘඪ ආධාරකයකින් සර්වසම කම්බි දෙකක් (සම්භාවිත කම්බිය හා පරීක්ෂණ කම්බිය) එක ළඟ එල්ලා තබන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'To automatically compensate for thermal expansion and ceiling yield/sagging', si: 'උෂ්ණත්ව ප්‍රසාරණය සහ සිවිලිමේ නැමීම් ස්වයංක්‍රීයව හිලව් කිරීම සඳහා' } },
      { id: 'opt2', text: { en: 'To double the effective cross-sectional area of the wire', si: 'කම්බියේ ඵලදායී හරස්කඩ වර්ගඵලය දෙගුණ කර ගැනීමට' } },
      { id: 'opt3', text: { en: 'To allow two students to take readings simultaneously', si: 'සිසුන් දෙදෙනෙකුට එකවර පාඨාංක ගැනීමට ඉඩ සැලසීමට' } },
      { id: 'opt4', text: { en: 'To prevent the wire from oscillating as a pendulum', si: 'කම්බිය ලෝලකයක් සේ පැද්දීම වැළැක්වීම සඳහා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Both wires undergo identical thermal expansion when ambient temperature shifts and experience the same ceiling yield.',
      si: 'පරිසර උෂ්ණත්වය වෙනස් වන විට කම්බි දෙකම එක හා සමානව ප්‍රසාරණය වන අතර සිවිලිම නැමීමද දෙකටම සමාන වේ.',
    },
    solution: {
      en: 'Suspending identical reference and test wires side-by-side from the same support eliminates systematic errors caused by temperature fluctuations and structural sagging of the overhead ceiling support.',
      si: 'එකම ආධාරකයෙන් සමාන කම්බි දෙකක් එල්ලීමෙන් පරිසර උෂ්ණත්ව වෙනස්වීම් නිසා වන ප්‍රසාරණය සහ ආධාරකයේ නැමීමෙන් වන දෝෂ සම්පූර්ණයෙන්ම ඉවත් වේ.',
    },
  },
  {
    id: 'mat-10-1-04',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A metallic rod of Young’s modulus Y = 1.2e11 Pa is subjected to a tensile strain of 5.0e-4. Calculate the strain energy stored per unit volume (energy density) in J m^-3.',
      si: 'යං මාපාංකය Y = 1.2e11 Pa වූ ලෝහ දණ්ඩක් 5.0e-4 ක ආතන්‍ය වික්‍රියාවකට ලක් කෙරේ. එහි ඒකක පරිමාවක ගබඩා වන වික්‍රියා ශක්තිය (ශක්ති ඝනත්වය) J m^-3 වලින් ගණනය කරන්න.',
    },
    expected: 15000,
    tolerance: 300,
    unit: { en: 'J m^-3', si: 'J m^-3' },
    hint: {
      en: 'Energy density u = 0.5 * Y * ε^2 = 0.5 * 1.2e11 * (5.0e-4)^2.',
      si: 'ශක්ති ඝනත්වය u = 0.5 * Y * ε^2 = 0.5 * 1.2e11 * (5.0e-4)^2.',
    },
    solution: {
      en: 'u = 0.5 × Y × ε^2 = 0.5 × 1.2 × 10^11 × (2.5 × 10^-7) = 1.5 × 10^4 = 15,000 J m^-3.',
      si: 'u = 0.5 × 1.2 × 10^11 × (2.5 × 10^-7) = 15,000 J m^-3 වේ.',
    },
  },
  {
    id: 'mat-10-1-05',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'On a tensile stress-strain graph of a ductile metal, what does the area under the linear elastic portion represent?',
      si: 'තන්‍ය ලෝහයක ආතන්‍ය ප්‍රත්‍යබල-වික්‍රියා ප්‍රස්ථාරයක රේඛීය ප්‍රත්‍යාස්ථ කොටස යටතේ වර්ගඵලයෙන් නිරූපණය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Strain energy stored per unit volume (energy density)', si: 'ඒකක පරිමාවක ගබඩා වන වික්‍රියා ශක්තිය (ශක්ති ඝනත්වය)' } },
      { id: 'opt2', text: { en: 'Total Young’s modulus of the specimen', si: 'නියැදියේ මුළු යං මාපාංකය' } },
      { id: 'opt3', text: { en: 'Tensile breaking force', si: 'ආතන්‍ය බිඳුම් බලය' } },
      { id: 'opt4', text: { en: 'Total mass of the wire', si: 'කම්බියේ මුළු ස්කන්ධය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Area = 0.5 * stress * strain = (F/A) * (ΔL/L) * 0.5 = Work / Volume.',
      si: 'වර්ගඵලය = 0.5 * ප්‍රත්‍යබලය * වික්‍රියාව = කාර්යය / පරිමාව වේ.',
    },
    solution: {
      en: 'The area under the stress-strain curve equals ∫ σ dε = 0.5 σ ε, which is the strain energy stored per unit volume (resilience/energy density).',
      si: 'ප්‍රත්‍යබල-වික්‍රියා ප්‍රස්ථාරය යටතේ වර්ගඵලය 0.5 σ ε වන අතර එය ඒකක පරිමාවක ගබඩා වන ප්‍රත්‍යාස්ථ විභව ශක්තිය හෙවත් ශක්ති ඝනත්වයයි.',
    },
  },
  {
    id: 'mat-10-1-06',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two wires A and B are made of the same metal. Wire A has twice the length and half the diameter of wire B. If identical loads are applied, what is the ratio of extension ΔL_A / ΔL_B?',
      si: 'A සහ B කම්බි දෙකම එකම ලෝහයෙන් සාදා ඇත. A කම්බියේ දිග B මෙන් දෙගුණයක් වන අතර විෂ්කම්භය B ගෙන් අඩකි. සමාන බරක් එල්ලූ විට, දිගු වීම් අතර අනුපාතය ΔL_A / ΔL_B කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: '8', si: '8' } },
      { id: 'opt2', text: { en: '4', si: '4' } },
      { id: 'opt3', text: { en: '2', si: '2' } },
      { id: 'opt4', text: { en: '16', si: '16' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'ΔL = (4 F L) / (π d^2 Y) ∝ L / d^2. Here L_A = 2 L_B and d_A = 0.5 d_B.',
      si: 'ΔL ∝ L / d^2. මෙහි L_A = 2 L_B සහ d_A = 0.5 d_B වේ.',
    },
    solution: {
      en: 'ΔL ∝ L / d^2. Therefore, ΔL_A / ΔL_B = (L_A / L_B) / (d_A / d_B)^2 = 2 / (0.5)^2 = 2 / 0.25 = 8.',
      si: 'ΔL ∝ L / d^2 බැවින්, ΔL_A / ΔL_B = 2 / (1/2)^2 = 2 / (1/4) = 8 වේ.',
    },
  },
  {
    id: 'mat-10-1-07',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In a Searle’s apparatus experiment, a load of mass 4.0 kg produces an extension of 0.80 mm in a wire of length 3.0 m and diameter 0.50 mm. Calculate the experimental Young’s modulus Y in units of 10^11 Pa. (Take g = 9.8 m s^-2, pi = 3.1416).',
      si: 'සර්ල්ගේ උපකරණ පරීක්ෂණයකදී, දිග 3.0 m සහ විෂ්කම්භය 0.50 mm වූ කම්බියකට 4.0 kg ස්කන්ධයක් එල්ලූ විට 0.80 mm ක දිගු වීමක් ඇතිවේ. යං මාපාංකය Y (10^11 Pa ඒකක වලින්) ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 7.49,
    tolerance: 0.2,
    unit: { en: '10^11 Pa', si: '10^11 Pa' },
    hint: {
      en: 'F = 4.0 * 9.8 = 39.2 N. A = pi * (0.25e-3)^2 = 1.9635e-7 m^2. Y = (F * L) / (A * ΔL).',
      si: 'F = 39.2 N, A = 1.9635e-7 m^2. Y = (F * L) / (A * ΔL).',
    },
    solution: {
      en: 'F = 39.2 N. A = π (0.25 × 10^-3)^2 = 1.9635 × 10^-7 m^2. Y = (39.2 × 3.0) / (1.9635 × 10^-7 × 0.80 × 10^-3) = 117.6 / 1.5708 × 10^-10 = 7.4866 × 10^11 Pa ≈ 7.49 × 10^11 Pa.',
      si: 'F = 39.2 N, A = 1.9635 × 10^-7 m^2. Y = (39.2 × 3.0) / (1.9635 × 10^-7 × 0.80 × 10^-3) = 7.49 × 10^11 Pa වේ.',
    },
  },
  {
    id: 'mat-10-1-08',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the point on the stress-strain curve beyond which permanent (plastic) deformation occurs even when the load is completely removed?',
      si: 'බර සම්පූර්ණයෙන්ම ඉවත් කළද ස්ථිර (ප්ලාස්ටික්) විරූපණයක් ඉතිරි වන සීමාව හඳුන්වන ප්‍රත්‍යබල-වික්‍රියා ලක්ෂ්‍යය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Elastic limit', si: 'ප්‍රත්‍යාස්ථ සීමාව' } },
      { id: 'opt2', text: { en: 'Proportional limit', si: 'අනුපාතික සීමාව' } },
      { id: 'opt3', text: { en: 'Breaking stress', si: 'බිඳුම් ප්‍රත්‍යබලය' } },
      { id: 'opt4', text: { en: 'Young’s modulus point', si: 'යං මාපාංක ලක්ෂ්‍යය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Up to the elastic limit, the material returns to its original length when unloaded.',
      si: 'ප්‍රත්‍යාස්ථ සීමාව දක්වා බර ඉවත් කළ විට ද්‍රව්‍යය නැවත මුල් දිගටම පැමිණේ.',
    },
    solution: {
      en: 'The elastic limit marks the boundary of reversible elastic behavior; beyond it, plastic flow occurs, resulting in permanent residual strain.',
      si: 'ප්‍රත්‍යාස්ථ සීමාව යනු ද්‍රව්‍යය නැවත යථා තත්ත්වයට පත්විය හැකි උපරිම සීමාව වන අතර, ඉන් ඔබ්බට ස්ථිර ප්ලාස්ටික් විරූපණයක් ඇතිවේ.',
    },
  },

  // ==========================================
  // Competency 10.2: Viscosity of Fluids & Stokes' Law (19-36)
  // ==========================================
  {
    id: 'mat-10-2-01',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the SI unit of the coefficient of dynamic viscosity (η)?',
      si: 'ගතික දුස්ස්‍රාවිතා සංගුණකයේ (η) SI ඒකකය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Pa · s (or N s m^-2)', si: 'Pa · s (හෝ N s m^-2)' } },
      { id: 'opt2', text: { en: 'N m^-1', si: 'N m^-1' } },
      { id: 'opt3', text: { en: 'N m^-2', si: 'N m^-2' } },
      { id: 'opt4', text: { en: 'Poise (P)', si: 'පොයිස් (P)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'From Newton’s viscosity law: F = η A (dv/dx), so η = F / [A (dv/dx)].',
      si: 'නිව්ටන්ගේ දුස්ස්‍රාවිතා නියමයෙන්: η = F / [A (dv/dx)] වේ.',
    },
    solution: {
      en: 'η = F / [A (dv/dx)] has SI units of N / [m^2 (m s^-1 / m)] = N s m^-2 = Pa·s. Note: Poise is the CGS unit (1 Pa·s = 10 Poise).',
      si: 'η = N / [m^2 · s^-1] = N s m^-2 = Pa·s වේ. පොයිස් යනු CGS ඒකකයයි (1 Pa·s = 10 Poise).',
    },
  },
  {
    id: 'mat-10-2-02',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the viscous drag force F_d in Newtons acting on a spherical metal ball of radius 2.0 mm falling at 0.050 m s^-1 through a heavy oil of viscosity η = 0.80 Pa s. (Take pi = 3.1416).',
      si: 'දුස්ස්‍රාවිතාව η = 0.80 Pa s වූ තෙලක් තුළින් 0.050 m s^-1 ප්‍රවේගයෙන් වැටෙන අරය 2.0 mm වූ ලෝහ බෝලයක් මත ක්‍රියා කරන ස්ටෝක්ස් ඩ්‍රැග් බලය F_d නිව්ටන් වලින් ගණනය කරන්න.',
    },
    expected: 0.00151,
    tolerance: 0.0001,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'Stokes’ Law: F_d = 6 * pi * η * r * v = 6 * 3.1416 * 0.80 * 2.0e-3 * 0.050.',
      si: 'ස්ටෝක්ස් නියමය: F_d = 6 * pi * η * r * v.',
    },
    solution: {
      en: 'F_d = 6π η r v = 6 × 3.1416 × 0.80 × (2.0 × 10^-3) × 0.050 = 1.508 × 10^-3 N ≈ 0.00151 N.',
      si: 'F_d = 6π η r v = 6 × 3.1416 × 0.80 × 0.002 × 0.050 = 0.00151 N වේ.',
    },
  },
  {
    id: 'mat-10-2-03',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'How does the terminal velocity v_t of a sphere falling through a viscous fluid depend on its radius r?',
      si: 'දුස්ස්‍රාවී ද්‍රවයක් තුළින් වැටෙන ගෝලයක අන්ත ප්‍රවේගය v_t එහි අරය r මත රඳා පවතින්නේ කෙසේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Directly proportional to r^2 (v_t ∝ r^2)', si: 'r^2 ට අනුලෝමව සමානුපාතික වේ (v_t ∝ r^2)' } },
      { id: 'opt2', text: { en: 'Directly proportional to r (v_t ∝ r)', si: 'r ට අනුලෝමව සමානුපාතික වේ (v_t ∝ r)' } },
      { id: 'opt3', text: { en: 'Inversely proportional to r (v_t ∝ 1/r)', si: 'r ට ප්‍රතිලෝමව සමානුපාතික වේ (v_t ∝ 1/r)' } },
      { id: 'opt4', text: { en: 'Directly proportional to r^3 (v_t ∝ r^3)', si: 'r^3 ට අනුලෝමව සමානුපාතික වේ (v_t ∝ r^3)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Weight and buoyancy scale as r^3, while Stokes drag scales as r * v_t. Equating them gives v_t ∝ r^2.',
      si: 'බර හා උඩුකුරු තෙරපුම r^3 ටද, ඩ්‍රැග් බලය r * v_t ටද සමානුපාතික බැවින් v_t ∝ r^2 වේ.',
    },
    solution: {
      en: 'Equating effective weight to drag: (4/3)π r^3 (ρ - σ) g = 6πη r v_t ⇒ v_t = [2 r^2 (ρ - σ) g] / (9η). Hence v_t ∝ r^2.',
      si: 'සඵල බර = ඩ්‍රැග් බලය: (4/3)π r^3 (ρ - σ) g = 6πη r v_t වීමෙන් v_t = [2 r^2 (ρ - σ) g] / (9η) ලැබේ; එනම් v_t ∝ r^2 වේ.',
    },
  },
  {
    id: 'mat-10-2-04',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A steel sphere (density ρ = 7800 kg m^-3) of radius 1.5 mm falls with terminal velocity 0.040 m s^-1 in a liquid of density σ = 1200 kg m^-3. Calculate the coefficient of viscosity η of the liquid in Pa s. (Take g = 9.8 m s^-2).',
      si: 'ඝනත්වය ρ = 7800 kg m^-3 වූ අරය 1.5 mm වානේ ගෝලයක් ඝනත්වය σ = 1200 kg m^-3 වූ ද්‍රවයක් තුළ 0.040 m s^-1 අන්ත ප්‍රවේගයකින් වැටේ. ද්‍රවයේ දුස්ස්‍රාවිතා සංගුණකය η (Pa s වලින්) ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 0.808,
    tolerance: 0.04,
    unit: { en: 'Pa s', si: 'Pa s' },
    hint: {
      en: 'η = [2 * r^2 * (ρ - σ) * g] / [9 * v_t] = [2 * (1.5e-3)^2 * (6600) * 9.8] / [9 * 0.040].',
      si: 'η = [2 * r^2 * (ρ - σ) * g] / [9 * v_t].',
    },
    solution: {
      en: 'η = [2 × (2.25 × 10^-6) × 6600 × 9.8] / [9 × 0.040] = [0.29106] / [0.36] = 0.8085 Pa s ≈ 0.808 Pa s.',
      si: 'η = [2 × (1.5 × 10^-3)^2 × 6600 × 9.8] / [9 × 0.040] = 0.8085 Pa s වේ.',
    },
  },
  {
    id: 'mat-10-2-05',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Poiseuille’s formula for laminar volume flow rate Q = (π P r^4) / (8 η L), how does Q change if the radius r of the tube is doubled while pressure difference P and length L remain constant?',
      si: 'ලැමිනාර් පරිමාව ප්‍රවාහ අනුපාතය සඳහා වන පුවසෙයිල් සූත්‍රයේ Q = (π P r^4) / (8 η L), පීඩන අන්තරය P සහ දිග L නියතව තබා නලයේ අරය r දෙගුණ කළහොත් Q කෙසේ වෙනස් වේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Increases by a factor of 16', si: '16 ගුණයකින් වැඩි වේ' } },
      { id: 'opt2', text: { en: 'Increases by a factor of 4', si: '4 ගුණයකින් වැඩි වේ' } },
      { id: 'opt3', text: { en: 'Increases by a factor of 8', si: '8 ගුණයකින් වැඩි වේ' } },
      { id: 'opt4', text: { en: 'Doubles (factor of 2)', si: 'දෙගුණ වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Q is proportional to r^4. (2r)^4 = 16 r^4.',
      si: 'Q අනුලෝමව r^4 ට සමානුපාතික වේ. (2)^4 = 16 වේ.',
    },
    solution: {
      en: 'Because flow rate scales with the fourth power of radius (Q ∝ r^4), doubling the tube radius increases the flow rate by 2^4 = 16 times.',
      si: 'ප්‍රවාහ අනුපාතය අරයේ සිව්වන බලයට සමානුපාතික බැවින් (Q ∝ r^4), අරය දෙගුණ කළ විට ප්‍රවාහය 2^4 = 16 ගුණයකින් වැඩි වේ.',
    },
  },
  {
    id: 'mat-10-2-06',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What happens to the viscosity of liquids and gases as temperature increases?',
      si: 'උෂ්ණත්වය වැඩි වන විට ද්‍රව සහ වායුවල දුස්ස්‍රාවිතාවට පිළිවෙළින් කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Liquid viscosity decreases; gas viscosity increases', si: 'ද්‍රව දුස්ස්‍රාවිතාව අඩු වේ; වායු දුස්ස්‍රාවිතාව වැඩි වේ' } },
      { id: 'opt2', text: { en: 'Both liquid and gas viscosities decrease', si: 'ද්‍රව හා වායු දෙකෙහිම දුස්ස්‍රාවිතාව අඩු වේ' } },
      { id: 'opt3', text: { en: 'Both liquid and gas viscosities increase', si: 'ද්‍රව හා වායු දෙකෙහිම දුස්ස්‍රාවිතාව වැඩි වේ' } },
      { id: 'opt4', text: { en: 'Liquid viscosity increases; gas viscosity decreases', si: 'ද්‍රව දුස්ස්‍රාවිතාව වැඩි වේ; වායු දුස්ස්‍රාවිතාව අඩු වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'In liquids, cohesion weakens with heat. In gases, thermal molecular momentum exchange increases.',
      si: 'ද්‍රවවල සංසක්ති බල දුර්වල වන අතර වායුවල අණුක ඝට්ටන හා ගම්‍යතා හුවමාරුව වැඩි වේ.',
    },
    solution: {
      en: 'Heating weakens cohesive intermolecular attractions in liquids, lowering viscosity. In gases, higher thermal speed increases molecular collision frequency and momentum transport, increasing viscosity.',
      si: 'තාපය මඟින් ද්‍රවවල අන්තර් අණුක බල බිඳ දමමින් දුස්ස්‍රාවිතාව අඩු කරන අතර, වායුවල අණුක ඝට්ටන වේගවත් කරමින් දුස්ස්‍රාවිතාව වැඩි කරයි.',
    },
  },
  {
    id: 'mat-10-2-07',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why must the falling sphere in Stokes’ method be dropped along the central axis of a wide glass cylinder rather than near the container walls?',
      si: 'ස්ටෝක්ස් පරීක්ෂණයේදී ගෝලය බඳුනේ බිත්ති අසලින් නොව පුළුල් සිලින්ඩරයේ කේන්ද්‍රීය අක්ෂය ඔස්සේ දැමිය යුත්තේ මන්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'To avoid wall retardation effects since Stokes’ Law assumes an infinitely wide fluid medium', si: 'ස්ටෝක්ස් නියමය අනන්ත තරල මාධ්‍යයක් උපකල්පනය කරන බැවින් බිත්ති මඟින් වන මන්දන බලපෑම වැළැක්වීමට' } },
      { id: 'opt2', text: { en: 'To stop the sphere from scratching the glass', si: 'වීදුරු සිලින්ඩරය සීරීමට ලක්වීම වැළැක්වීමට' } },
      { id: 'opt3', text: { en: 'Because buoyant upthrust only acts along the center of the cylinder', si: 'උඩුකුරු තෙරපුම ක්‍රියා කරන්නේ සිලින්ඩර මධ්‍යයේ පමණක් වන නිසා' } },
      { id: 'opt4', text: { en: 'To make the sphere fall twice as fast', si: 'ගෝලය දෙගුණයක වේගයෙන් වැටීමට සැලැස්වීමට' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Stationary cylinder walls exert additional viscous shear resistance on a falling sphere.',
      si: 'නිශ්චල බිත්ති මඟින් ගෝලය මත අමතර දුස්ස්‍රාවී ප්‍රතිරෝධයක් ඇති කරයි.',
    },
    solution: {
      en: 'Stokes’ Law strictly applies to a sphere moving in an unbounded fluid. When close to walls, boundary effects increase drag and slow the sphere; dropping along the axis of a wide cylinder minimizes this wall effect.',
      si: 'ස්ටෝක්ස් නියමය අදාළ වන්නේ අනන්ත තරලයකටය. බිත්තිය අසලදී ඩ්‍රැග් බලය වැඩි වන බැවින් පුළුල් සිලින්ඩරයක මධ්‍යයෙන් දැමීමෙන් බිත්ති බලපෑම අවම කරගත හැක.',
    },
  },
  {
    id: 'mat-10-2-08',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Two identical spherical raindrops of radius r = 1.0 mm falling in air at terminal velocity coalesce into a single spherical droplet. If terminal velocity v_t ∝ r^2, what is the ratio of the new droplet’s terminal velocity to the initial droplet’s terminal velocity?',
      si: 'අරය r = 1.0 mm වූ සමාන වැහි බිංදු දෙකක් අන්ත ප්‍රවේගයෙන් වැටෙමින් තිබියදී එකට එකතු වී තනි විශාල ගෝලාකාර බිංදුවක් සාදයි. v_t ∝ r^2 නම්, නව බිංදුවේ අන්ත ප්‍රවේගය මුල් බිංදුවේ අන්ත ප්‍රවේගයට දක්වන අනුපාතය ගණනය කරන්න.',
    },
    expected: 1.587,
    tolerance: 0.05,
    unit: { en: '', si: '' },
    hint: {
      en: 'Volume doubles: (4/3)π R^3 = 2 * (4/3)π r^3 ⇒ R = 2^(1/3) r. Then v_new / v_old = (R/r)^2 = 2^(2/3) = 1.5874.',
      si: 'පරිමාව දෙගුණ වේ: R = 2^(1/3) r. එවිට v_new / v_old = (R/r)^2 = 2^(2/3) වේ.',
    },
    solution: {
      en: 'Combined volume: V = 2 v0 ⇒ R = 2^(1/3) r. Since v_t ∝ r^2, v_new / v_old = (R / r)^2 = (2^(1/3))^2 = 2^(2/3) ≈ 1.587.',
      si: 'එකතු වූ පසු අරය R = 2^(1/3) r වේ. v_t ∝ r^2 බැවින් නව අන්ත ප්‍රවේග අනුපාතය 2^(2/3) ≈ 1.587 වේ.',
    },
  },

  // ==========================================
  // Competency 10.3: Surface Tension & Capillary Action (37-54)
  // ==========================================
  {
    id: 'mat-10-3-01',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the dimensions of surface tension (γ)?',
      si: 'පෘෂ්ඨික ආතතියේ (γ) මාන මොනවාද?',
    },
    options: [
      { id: 'opt1', text: { en: 'M T^-2', si: 'M T^-2' } },
      { id: 'opt2', text: { en: 'M L T^-2', si: 'M L T^-2' } },
      { id: 'opt3', text: { en: 'M L^-1 T^-2', si: 'M L^-1 T^-2' } },
      { id: 'opt4', text: { en: 'M L^2 T^-2', si: 'M L^2 T^-2' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Surface tension γ = Force / Length = [M L T^-2] / [L].',
      si: 'පෘෂ්ඨික ආතතිය γ = බලය / දිග = [M L T^-2] / [L].',
    },
    solution: {
      en: 'γ = Force / Length = [M L T^-2] / [L] = [M T^-2]. Alternatively, Surface Energy / Area = [M L^2 T^-2] / [L^2] = [M T^-2].',
      si: 'γ = බලය / දිග = [M L T^-2] / [L] = [M T^-2] වේ.',
    },
  },
  {
    id: 'mat-10-3-02',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the excess pressure ΔP in Pascals (Pa) inside a spherical soap bubble of radius 2.0 cm formed in air, given the surface tension of soap solution is γ = 0.030 N m^-1.',
      si: 'වාතයේ සාදන ලද අරය 2.0 cm වූ ගෝලාකාර සබන් බුබුලක් තුළ අතිරික්ත පීඩනය ΔP පැස්කල් (Pa) වලින් ගණනය කරන්න. සබන් දියරයේ පෘෂ්ඨික ආතතිය γ = 0.030 N m^-1 වේ.',
    },
    expected: 6.0,
    tolerance: 0.1,
    unit: { en: 'Pa', si: 'Pa' },
    hint: {
      en: 'A hollow soap bubble has TWO liquid-air surfaces: ΔP = 4γ / R = (4 * 0.030) / 0.02.',
      si: 'සබන් බුබුලකට පෘෂ්ඨ දෙකක් ඇත: ΔP = 4γ / R.',
    },
    solution: {
      en: 'Because a soap bubble has two surfaces (inner and outer), ΔP = 4γ / R = (4 × 0.030) / (2.0 × 10^-2) = 0.12 / 0.02 = 6.0 Pa.',
      si: 'සබන් බුබුලක ඇතුළත හා පිටත පෘෂ්ඨ දෙකක් ඇති බැවින් ΔP = 4γ / R = (4 × 0.030) / 0.02 = 6.0 Pa වේ.',
    },
  },
  {
    id: 'mat-10-3-03',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A clean glass capillary tube of radius r = 0.30 mm is dipped vertically into pure water (surface tension γ = 0.0735 N m^-1, density ρ = 1000 kg m^-3, contact angle θ = 0°). Calculate the capillary rise h in centimeters (cm). (Take g = 9.8 m s^-2).',
      si: 'අරය r = 0.30 mm වූ පිරිසිදු කේශික නලයක් පිරිසිදු ජලයේ (පෘෂ්ඨික ආතතිය γ = 0.0735 N m^-1, ඝනත්වය 1000 kg m^-3, θ = 0°) සිරස්ව ගිල්වයි. කේශික උද්ගමනය h (සෙන්ටිමීටර, cm වලින්) ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 5.0,
    tolerance: 0.1,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'h = (2 * γ * cosθ) / (ρ * g * r) = (2 * 0.0735) / (1000 * 9.8 * 0.30e-3). Convert m to cm.',
      si: 'h = (2 * γ * cosθ) / (ρ * g * r). මීටර් අගය සෙන්ටිමීටර් බවට හරවන්න.',
    },
    solution: {
      en: 'h = (2 × 0.0735 × 1) / (1000 × 9.8 × 3.0 × 10^-4) = 0.147 / 2.94 = 0.050 m = 5.0 cm.',
      si: 'h = (2 × 0.0735) / (1000 × 9.8 × 0.0003) = 0.050 m = 5.0 cm වේ.',
    },
  },
  {
    id: 'mat-10-3-04',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What causes the meniscus of mercury in a glass capillary tube to be convex with a contact angle θ > 90° and exhibit capillary depression?',
      si: 'වීදුරු කේශික නලයක රසදිය මට්ටම උත්තල වී, ස්පර්ශ කෝණය θ > 90° වී, කේශික අවපාතයක් පෙන්වීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Cohesive forces between mercury atoms exceed adhesive forces between mercury and glass', si: 'රසදිය පරමාණු අතර සංසක්ති බල රසදිය හා වීදුරු අතර ආසක්ති බලවලට වඩා විශාල වීම' } },
      { id: 'opt2', text: { en: 'Mercury has zero density', si: 'රසදිය සතුව ශුන්‍ය ඝනත්වයක් පැවතීම' } },
      { id: 'opt3', text: { en: 'Atmospheric pressure pushes the mercury downward', si: 'වායුගෝලීය පීඩනය මඟින් රසදිය පහළට තල්ලු කිරීම' } },
      { id: 'opt4', text: { en: 'Adhesive forces between mercury and glass are infinite', si: 'රසදිය හා වීදුරු අතර ආසක්ති බල අනන්ත වීම' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'When cohesion > adhesion, the liquid minimizes contact with the solid wall.',
      si: 'සංසක්ති බල > ආසක්ති බල වන විට ද්‍රවය ඝනය සමඟ ස්පර්ශ වන පෘෂ්ඨය අවම කර ගනී.',
    },
    solution: {
      en: 'Because cohesive metallic attractions between mercury atoms are far stronger than adhesive forces between mercury and glass, mercury curves away from glass (θ ≈ 140°), depressing below the external level.',
      si: 'රසදිය අණු අතර සංසක්ති බල වීදුරු සමඟ ඇති ආසක්ති බලවලට වඩා බෙහෙවින් ප්‍රබල බැවින් ද්‍රවය වීදුරුව තෙත් නොකර උත්තල මතුපිටක් (θ ≈ 140°) සාදා අවපාත වේ.',
    },
  },
  {
    id: 'mat-10-3-05',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A thin microscope glass slide of length 8.0 cm is held vertically such that its bottom edge just touches water. If the slide thickness is negligible, what downward force in milliNewtons (mN) is exerted on the slide by surface tension? (Take γ = 0.0725 N m^-1).',
      si: 'දිග 8.0 cm වූ සිහින් අන්වීක්ෂ වීදුරු කදාවක පහළ දාරය ජලය මතුපිට ස්පර්ශ වන සේ සිරස්ව තබා ඇත. කදාවේ ඝනකම නොගිණිය හැකි නම්, පෘෂ්ඨික ආතතිය මඟින් කදාව මත පහළට යොදන බලය මිලි-නිව්ටන් (mN) වලින් ගණනය කරන්න. (γ = 0.0725 N m^-1).',
    },
    expected: 11.6,
    tolerance: 0.2,
    unit: { en: 'mN', si: 'mN' },
    hint: {
      en: 'Water wets BOTH sides of the slide: F = 2 * l * γ = 2 * 0.080 m * 0.0725 N/m.',
      si: 'කදාවේ දෙපැත්තම ජලයෙන් තෙත් වේ: F = 2 * l * γ.',
    },
    solution: {
      en: 'Since water forms a film along both the front and back faces of the slide: F = 2 l γ = 2 × 0.080 m × 0.0725 N m^-1 = 0.0116 N = 11.6 mN.',
      si: 'කදාවේ දෙපසම පෘෂ්ඨික ආතති පටල ක්‍රියා කරන බැවින්: F = 2 l γ = 2 × 0.080 × 0.0725 = 0.0116 N = 11.6 mN වේ.',
    },
  },
  {
    id: 'mat-10-3-06',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Calculate the work done W in microJoules (µJ) required to blow a soap bubble of radius 5.0 cm from a flat soap film, given surface tension of soap solution γ = 0.030 N m^-1. (Take pi = 3.1416).',
      si: 'පෘෂ්ඨික ආතතිය γ = 0.030 N m^-1 වූ සබන් දියරයකින් අරය 5.0 cm වූ ගෝලාකාර සබන් බුබුලක් පිඹීමට කළ යුතු කාර්යය W මයික්‍රෝජූල් (µJ) වලින් ගණනය කරන්න.',
    },
    expected: 1885,
    tolerance: 30,
    unit: { en: 'µJ', si: 'µJ' },
    hint: {
      en: 'A bubble has 2 surfaces, total area A = 2 * (4 * pi * R^2) = 8 * pi * R^2. Work W = γ * ΔA.',
      si: 'බුබුලකට පෘෂ්ඨ 2 ක් ඇත: මුළු වර්ගඵලය A = 8 π R^2. W = γ * ΔA.',
    },
    solution: {
      en: 'A soap bubble has inner and outer spherical surfaces: ΔA = 2 × 4π R^2 = 8π (0.05)^2 = 8 × 3.1416 × 0.0025 = 0.06283 m^2. W = γ ΔA = 0.030 × 0.06283 = 1.885 × 10^-3 J = 1885 µJ.',
      si: 'පෘෂ්ඨ දෙකේම වර්ගඵලය ΔA = 8π R^2 = 0.06283 m^2. W = γ ΔA = 0.030 × 0.06283 = 1885 µJ වේ.',
    },
  },
  {
    id: 'mat-10-3-07',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why do small raindrops and soap bubbles naturally adopt a spherical shape?',
      si: 'කුඩා වැහි බිංදු සහ සබන් බුබුලු ස්වභාවිකවම ගෝලාකාර හැඩයක් ගන්නේ මන්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'A sphere has the minimum surface area for a given volume, minimizing surface potential energy', si: 'දී ඇති පරිමාවකට අවම පෘෂ්ඨික වර්ගඵලය ඇත්තේ ගෝලයකට බැවින් පෘෂ්ඨික විභව ශක්තිය අවම වීම' } },
      { id: 'opt2', text: { en: 'Atmospheric pressure pushes equally in all directions', si: 'වායුගෝලීය පීඩනය සෑම දිශාවකටම සමානව තල්ලු කිරීම' } },
      { id: 'opt3', text: { en: 'Gravity pulls all liquid molecules toward the geometric center', si: 'ගුරුත්වය මඟින් සියලු අණු කේන්ද්‍රය දෙසට ඇදීම' } },
      { id: 'opt4', text: { en: 'Viscosity resists any other geometric shape', si: 'දුස්ස්‍රාවිතාව මඟින් වෙනත් හැඩයන් ප්‍රතික්ෂේප කිරීම' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Systems naturally seek states of minimum potential energy. Surface energy U = γ * Area.',
      si: 'පද්ධති අවම විභව ශක්තියක් කරා නැඹුරු වේ. පෘෂ්ඨික ශක්තිය U = γ * වර්ගඵලය.',
    },
    solution: {
      en: 'Surface tension drives a liquid volume to minimize its surface area. For a fixed volume, a sphere possesses the minimum possible surface area, thereby minimizing surface potential energy.',
      si: 'පෘෂ්ඨික ආතතිය මඟින් ද්‍රවයක වර්ගඵලය අවම කිරීමට බල කරයි. නියත පරිමාවකට අවම වර්ගඵලය ඇත්තේ ගෝලයකට බැවින් පෘෂ්ඨික ශක්තිය අවම වී ගෝලාකාර හැඩය ගනී.',
    },
  },
  {
    id: 'mat-10-3-08',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What happens to the surface tension of water when soap or detergent is added?',
      si: 'ජලයට සබන් හෝ ඩිටර්ජන්ට් එක් කළ විට එහි පෘෂ්ඨික ආතතියට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It decreases significantly', si: 'එය සැලකිය යුතු ලෙස අඩු වේ' } },
      { id: 'opt2', text: { en: 'It increases sharply', si: 'එය වේගයෙන් වැඩි වේ' } },
      { id: 'opt3', text: { en: 'It remains completely unchanged', si: 'එය කිසිසේත් වෙනස් නොවේ' } },
      { id: 'opt4', text: { en: 'It drops strictly to zero', si: 'එය ශුන්‍යය දක්වා පහත වැටේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Detergent surfactant molecules concentrate at the surface and weaken water-water hydrogen bonding.',
      si: 'ඩිටර්ජන්ට් අණු පෘෂ්ඨයේ රැඳෙමින් ජල අණු අතර හයිඩ්‍රජන් බන්ධන දුර්වල කරයි.',
    },
    solution: {
      en: 'Surfactants accumulate at the air-water interface and disrupt cohesive hydrogen bonds between water molecules, reducing surface tension from ~73 mN/m down to ~30 mN/m.',
      si: 'සර්ෆැක්ටන්ට් අණු ජල පෘෂ්ඨයේ රැස්වෙමින් ජල අණු අතර සංසක්ති බල බිඳ දමන බැවින් පෘෂ්ඨික ආතතිය 73 mN/m සිට 30 mN/m පමණ දක්වා අඩු වේ.',
    },
  },

  // Additional Competency 10.1 (09-17)
  {
    id: 'mat-10-1-09',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A steel wire stretches by 1.2 mm when supporting a load W. If two identical such wires are connected in parallel side-by-side to support the same load W, what is the new total extension in mm?',
      si: 'W භාරයක් එල්ලූ විට වානේ කම්බියක් 1.2 mm කින් දිගු වේ. එවැනි සර්වසම කම්බි දෙකක් සමාන්තරගතව එක ළඟ සවි කර එම W භාරයම එල්ලුවහොත් නව මුළු දිගු වීම mm වලින් කොපමණද?',
    },
    expected: 0.6,
    tolerance: 0.05,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'In parallel, each wire carries half the load: W/2, so extension is halved.',
      si: 'සමාන්තරගතව ඇති විට එක් කම්බියක් දරන්නේ භාරයෙන් අඩකි (W/2); එබැවින් දිගු වීම අඩුවේ.',
    },
    solution: {
      en: 'In parallel, effective area doubles (2A), so extension ΔL = FL / (2AY) = (1/2) ΔL0 = 1.2 / 2 = 0.60 mm.',
      si: 'සමාන්තරව සම්බන්ධ කළ විට ඵලදායී වර්ගඵලය දෙගුණ වන බැවින් දිගු වීම අඩක් (0.60 mm) බවට පත්වේ.',
    },
  },
  {
    id: 'mat-10-1-10',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A steel rod of cross-sectional area A = 4.0e-4 m^2 is clamped rigidly at both ends. Its temperature drops by ΔT = 30 K. If Young’s modulus Y = 2.0e11 Pa and linear expansivity α = 1.2e-5 K^-1, calculate the thermal tensile tension force developed in the rod in kiloNewtons (kN). (F = Y * A * α * ΔT).',
      si: 'හරස්කඩ වර්ගඵලය A = 4.0e-4 m^2 වූ වානේ දණ්ඩක දෙකෙළවර තදින් සවි කර ඇත. එහි උෂ්ණත්වය ΔT = 30 K කින් පහත වැටේ. Y = 2.0e11 Pa සහ රේඛීය ප්‍රසාරණතාව α = 1.2e-5 K^-1 නම්, දණ්ඩ තුළ හටගන්නා තාපජ ආතන්‍ය බලය කිලෝ-නිව්ටන් (kN) වලින් ගණනය කරන්න.',
    },
    expected: 28.8,
    tolerance: 0.5,
    unit: { en: 'kN', si: 'kN' },
    hint: {
      en: 'F = Y * A * α * ΔT = 2.0e11 * 4.0e-4 * 1.2e-5 * 30.',
      si: 'F = Y * A * α * ΔT.',
    },
    solution: {
      en: 'F = (2.0 × 10^11) × (4.0 × 10^-4) × (1.2 × 10^-5) × 30 = 8.0 × 10^7 × 3.6 × 10^-4 = 28,800 N = 28.8 kN.',
      si: 'F = 2.0e11 × 4.0e-4 × 1.2e-5 × 30 = 28,800 N = 28.8 kN වේ.',
    },
  },
  {
    id: 'mat-10-1-11',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How does the breaking stress of a uniform metal wire depend on its cross-sectional area and length?',
      si: 'ඒකාකාර ලෝහ කම්බියක බිඳුම් ප්‍රත්‍යබලය එහි හරස්කඩ වර්ගඵලය සහ දිග මත රඳා පවතින්නේ කෙසේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It is an intrinsic material property, independent of both length and area', si: 'එය ද්‍රව්‍යයේ සහජ ලක්ෂණයක් වන අතර දිග හා වර්ගඵලය මත රඳා නොපවතී' } },
      { id: 'opt2', text: { en: 'Directly proportional to cross-sectional area', si: 'හරස්කඩ වර්ගඵලයට අනුලෝමව සමානුපාතික වේ' } },
      { id: 'opt3', text: { en: 'Inversely proportional to length', si: 'දිගට ප්‍රතිලෝමව සමානුපාතික වේ' } },
      { id: 'opt4', text: { en: 'Directly proportional to length squared', si: 'දිගෙහි වර්ගයට අනුලෝමව සමානුපාතික වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Breaking force depends on area (F_break = σ_break * A), but breaking stress is a material constant.',
      si: 'බිඳුම් බලය වර්ගඵලය මත රඳා පැවතුණද, බිඳුම් ප්‍රත්‍යබලය ද්‍රව්‍යය මත පමණක් රඳා පවතින නියතයකි.',
    },
    solution: {
      en: 'Breaking stress is an intensive material property determined by chemical bond strength. Breaking force scales with area, but breaking stress σ = F/A remains constant for a given material.',
      si: 'බිඳුම් ප්‍රත්‍යබලය යනු ද්‍රව්‍යයේ බන්ධන ශක්තිය මත තීරණය වන නියතයක් වන අතර එය දිග හෝ වර්ගඵලය මත රඳා නොපවතී.',
    },
  },
  {
    id: 'mat-10-1-12',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A spring-like elastic wire has stiffness k = 20,000 N m^-1. Calculate the work done W in Joules required to stretch it from an initial extension of 2.0 mm to a final extension of 4.0 mm.',
      si: 'ප්‍රත්‍යාස්ථ කම්බියක දුනු නියතය k = 20,000 N m^-1 වේ. එය 2.0 mm ආරම්භක දිගු වීමේ සිට 4.0 mm අවසාන දිගු වීම දක්වා ඇදීමට කළ යුතු කාර්යය W (ජූල්, J වලින්) ගණනය කරන්න.',
    },
    expected: 0.12,
    tolerance: 0.01,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'W = 0.5 * k * (x2^2 - x1^2) = 0.5 * 20000 * [(0.004)^2 - (0.002)^2].',
      si: 'W = 0.5 * k * (x2^2 - x1^2).',
    },
    solution: {
      en: 'W = 0.5 × 20,000 × [(16 × 10^-6) - (4 × 10^-6)] = 10,000 × 12 × 10^-6 = 0.12 J.',
      si: 'W = 0.5 × 20,000 × (16e-6 - 4e-6) = 0.12 J වේ.',
    },
  },
  {
    id: 'mat-10-1-13',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What generally happens to Young’s modulus of a metal when its temperature is increased?',
      si: 'උෂ්ණත්වය වැඩි වන විට ලෝහයක යං මාපාංකයට සාමාන්‍යයෙන් කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It decreases because interatomic thermal vibrations weaken bond stiffness', si: 'අන්තර් පරමාණුක තාප කම්පන නිසා බන්ධන දෘඪතාව දුර්වල වී එය අඩු වේ' } },
      { id: 'opt2', text: { en: 'It increases significantly', si: 'එය සැලකිය යුතු ලෙස වැඩි වේ' } },
      { id: 'opt3', text: { en: 'It remains perfectly constant', si: 'එය නියතව පවතී' } },
      { id: 'opt4', text: { en: 'It oscillates sinusoidally', si: 'එය සයිනාකාරව දෝලනය වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Higher temperature increases average atomic separation and softens the crystal lattice.',
      si: 'උෂ්ණත්වය වැඩි වන විට පරමාණු අතර දුර වැඩි වී ස්ඵටික දැලිස ලිහිල් වේ.',
    },
    solution: {
      en: 'Thermal expansion increases the equilibrium interatomic distance, decreasing the curvature of the interatomic potential well and lowering Young’s modulus.',
      si: 'තාපය නිසා පරමාණු අතර පරතරය වැඩි වී ආකර්ෂණ බල ලිහිල් වන බැවින් යං මාපාංකය අඩුවේ.',
    },
  },
  {
    id: 'mat-10-1-14',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In an experiment, a graph of extension e (mm) against load mass M (kg) gives a straight line passing through the origin with gradient 0.25 mm kg^-1. If wire length L = 2.0 m and diameter d = 0.50 mm, calculate Young’s modulus Y in units of 10^11 Pa. (Take g = 9.8 m s^-2).',
      si: 'පරීක්ෂණයකදී බර M (kg) ට එදිරිව දිගු වීම e (mm) ප්‍රස්ථාරය 0.25 mm kg^-1 අනුක්‍රමණයක් සහිතව මූල ලක්ෂ්‍යය හරහා යයි. කම්බියේ දිග L = 2.0 m සහ විෂ්කම්භය d = 0.50 mm නම්, යං මාපාංකය Y (10^11 Pa වලින්) ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 3.99,
    tolerance: 0.2,
    unit: { en: '10^11 Pa', si: '10^11 Pa' },
    hint: {
      en: 'm = e/M = 0.25e-3 m/kg. A = pi * (0.25e-3)^2 = 1.9635e-7 m^2. Y = (g * L) / (A * m).',
      si: 'Y = (g * L) / (A * m).',
    },
    solution: {
      en: 'Y = (g L) / (A · slope) = (9.8 × 2.0) / (1.9635 × 10^-7 × 2.5 × 10^-4) = 19.6 / (4.9087 × 10^-11) = 3.993 × 10^11 Pa ≈ 3.99 × 10^11 Pa.',
      si: 'Y = (9.8 × 2.0) / (1.9635e-7 × 2.5e-4) = 3.99 × 10^11 Pa වේ.',
    },
  },
  {
    id: 'mat-10-1-15',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Searle’s apparatus, why should the micrometer screw always be rotated in the same direction when adjusting the spirit level to horizontal?',
      si: 'සර්ල්ගේ උපකරණයේ ආත්ම මට්ටම තිරස් කිරීමට සකසන විට මයික්‍රොමීටර ඉස්කුරුප්පුව සෑම විටම එකම දිශාවකට කරකැවිය යුත්තේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'To avoid backlash (lost motion) error in the screw threads', si: 'ඉස්කුරුප්පු පොටවල පශ්චාත්පාත (backlash) දෝෂය වළක්වා ගැනීමට' } },
      { id: 'opt2', text: { en: 'To prevent the spirit level from breaking', si: 'ආත්ම මට්ටම කැඩී යාම වැළැක්වීමට' } },
      { id: 'opt3', text: { en: 'To keep the wire at a constant temperature', si: 'කම්බිය නියත උෂ්ණත්වයක තබා ගැනීමට' } },
      { id: 'opt4', text: { en: 'To increase the wire’s elastic limit', si: 'කම්බියේ ප්‍රත්‍යාස්ථ සීමාව වැඩි කිරීමට' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Reversing a micrometer screw introduces mechanical clearance gaps known as backlash error.',
      si: 'ඉස්කුරුප්පුවක් ආපසු කරකැවීමේදී ඇතිවන යාන්ත්‍රික හිඩැස් පශ්චාත්පාත දෝෂය ලෙස හැඳින්වේ.',
    },
    solution: {
      en: 'Turning the screw in only one direction ensures mechanical contact between mating threads is always maintained, eliminating backlash error.',
      si: 'ඉස්කුරුප්පුව එකම දිශාවකට කරකැවීමෙන් පොටවල් අතර හිඩැස් නිසා ඇතිවන පශ්චාත්පාත දෝෂය මඟහරවා ගත හැකිය.',
    },
  },
  {
    id: 'mat-10-1-16',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A composite rod consists of a steel segment of length 1.0 m (Y1 = 2.0e11 Pa, A = 2.0e-4 m^2) joined end-to-end to a brass segment of length 1.0 m (Y2 = 1.0e11 Pa, same A). A tensile load F = 20 kN is applied. What is the total elongation ΔL in mm?',
      si: 'දිග 1.0 m වූ වානේ කොටසක් (Y1 = 2.0e11 Pa, A = 2.0e-4 m^2) සහ දිග 1.0 m වූ පිත්තල කොටසක් (Y2 = 1.0e11 Pa, එකම A) ශ්‍රේණිගතව බද්ධ කර ඇත. F = 20 kN ආතන්‍ය බලයක් යෙදූ විට මුළු දිගු වීම mm වලින් කොපමණද?',
    },
    expected: 1.5,
    tolerance: 0.1,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'Total extension = ΔL_steel + ΔL_brass = (F*L1)/(A*Y1) + (F*L2)/(A*Y2).',
      si: 'මුළු දිගු වීම = වානේ දිගු වීම + පිත්තල දිගු වීම.',
    },
    solution: {
      en: 'ΔL1 = (20000 × 1.0) / (2.0 × 10^-4 × 2.0 × 10^11) = 20000 / 4e7 = 0.50 mm. ΔL2 = (20000 × 1.0) / (2.0 × 10^-4 × 1.0 × 10^11) = 20000 / 2e7 = 1.00 mm. Total = 1.50 mm.',
      si: 'ΔL1 = 0.50 mm, ΔL2 = 1.00 mm. මුළු දිගු වීම = 1.50 mm වේ.',
    },
  },
  {
    id: 'mat-10-1-17',
    competencyRef: 'Competency 10.1',
    category: 'elasticity-solids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is vulcanized rubber considered an elastomer rather than an ordinary Hookean metal?',
      si: 'වල්කනයිස් කළ රබර් සාමාන්‍ය හුක් නීතිය පිළිපදින ලෝහයක් නොව ඉලාස්ටෝමරයක් (elastomer) ලෙස සලකන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'It can undergo massive reversible strains (> 500%) without obeying a constant linear Young’s modulus', si: 'නියත රේඛීය යං මාපාංකයක් නොපෙන්වා විශාල ප්‍රතිවර්ත්‍ය වික්‍රියා (> 500%) දරාගත හැකි නිසා' } },
      { id: 'opt2', text: { en: 'It possesses infinite electrical conductivity', si: 'එය සතුව අනන්ත විද්‍යුත් සන්නායකතාවක් ඇති නිසා' } },
      { id: 'opt3', text: { en: 'It breaks under the slightest applied load', si: 'සුළු බලයකින්ද එය බිඳී යන නිසා' } },
      { id: 'opt4', text: { en: 'Its volume expands to infinity under tension', si: 'ආතතිය යටතේ එහි පරිමාව අනන්තය දක්වා වැඩි වන නිසා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Rubber consists of coiled polymer chains that uncoil upon stretching and show significant hysteresis.',
      si: 'රබර් සෑදී ඇත්තේ ඇදීමේදී දිගහැරෙන බහුඅවයවික දාමවලින් වන අතර එය විශාල ප්‍රත්‍යාස්ථතාවක් පෙන්වයි.',
    },
    solution: {
      en: 'Elastomers like rubber can stretch several times their original length elastically, with uncoiling polymer chains producing a non-linear S-shaped stress-strain curve with elastic hysteresis.',
      si: 'රබර් වැනි ඉලාස්ටෝමරවලට මුල් දිග මෙන් කිහිප ගුණයක් ප්‍රත්‍යාස්ථව ඇදිය හැකි අතර ඒවා රේඛීය නොවූ S-හැඩැති ප්‍රත්‍යබල-වික්‍රියා වක්‍රයක් පෙන්වයි.',
    },
  },

  // Additional Competency 10.2 (09-17)
  {
    id: 'mat-10-2-09',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An air bubble of radius r = 1.0 mm rises vertically at steady terminal velocity through castor oil of density σ = 960 kg m^-3 and viscosity η = 0.98 Pa s. Neglecting air density (ρ_air ≈ 0), calculate the upward terminal speed in mm s^-1. (Take g = 9.8 m s^-2).',
      si: 'අරය r = 1.0 mm වූ වායු බුබුලක් ඝනත්වය σ = 960 kg m^-3 සහ දුස්ස්‍රාවිතාව η = 0.98 Pa s වූ එරණ්ඩ තෙල් තුළින් සිරස්ව ඉහළ නගී. වාතයේ ඝනත්වය නොසලකා, ඉහළ නගින අන්ත ප්‍රවේගය mm s^-1 වලින් ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 2.13,
    tolerance: 0.1,
    unit: { en: 'mm s^-1', si: 'mm s^-1' },
    hint: {
      en: 'v_t = [2 * r^2 * σ * g] / [9 * η] = [2 * 1e-6 * 960 * 9.8] / [9 * 0.98]. Convert m/s to mm/s.',
      si: 'v_t = [2 * r^2 * σ * g] / [9 * η]. මීටර්/තත්පර අගය මි.මී./තත්පර කරන්න.',
    },
    solution: {
      en: 'v_t = [2 × (1.0 × 10^-6) × 960 × 9.8] / [9 × 0.98] = [0.018816] / [8.82] = 0.002133 m s^-1 ≈ 2.13 mm s^-1.',
      si: 'v_t = [2 × 1e-6 × 960 × 9.8] / [9 × 0.98] = 0.00213 m/s = 2.13 mm/s වේ.',
    },
  },
  {
    id: 'mat-10-2-10',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What dimensionless parameter determines whether fluid flow in a pipe is smooth laminar (streamline) or chaotic turbulent?',
      si: 'නලයක් තුළ තරල ප්‍රවාහය ලැමිනාර් (ධාරාරේඛී) ද නැතහොත් කැළඹිලි සහිත (turbulent) ද යන්න තීරණය කරන මාන රහිත සංගුණකය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Reynolds number (Re)', si: 'රෙනෝල්ඩ්ස් අංකය (Re)' } },
      { id: 'opt2', text: { en: 'Young’s modulus', si: 'යං මාපාංකය' } },
      { id: 'opt3', text: { en: 'Poisson’s ratio', si: 'පුවාසොන් අනුපාතය' } },
      { id: 'opt4', text: { en: 'Refractive index', si: 'වර්තනාංකය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Re = (ρ v D) / η represents the ratio of inertial forces to viscous forces.',
      si: 'Re = (ρ v D) / η යනු අඩපණ බල සහ දුස්ස්‍රාවී බල අතර අනුපාතයයි.',
    },
    solution: {
      en: 'The Reynolds number Re = (ρ v D) / η characterizes flow regimes. In pipes, Re < 2000 is laminar, while Re > 3000 becomes fully turbulent.',
      si: 'රෙනෝල්ඩ්ස් අංකය Re මඟින් ප්‍රවාහ ස්වභාවය තීරණය කරයි. Re < 2000 ලැමිනාර් වන අතර Re > 3000 කැළඹිලි සහිත වේ.',
    },
  },
  {
    id: 'mat-10-2-11',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A horizontal plate of area 0.20 m^2 is pulled at a steady speed of 0.50 m s^-1 over a flat surface separated by a 1.0 mm thick film of lubricating oil (η = 0.40 Pa s). Calculate the required horizontal shearing force in Newtons (N).',
      si: 'වර්ගඵලය 0.20 m^2 වූ තිරස් තහඩුවක් 1.0 mm ඝනකම ලිහිසි තෙල් (η = 0.40 Pa s) පටලයක් මත 0.50 m s^-1 ඒකාකාර ප්‍රවේගයෙන් අදියි. අවශ්‍ය තිරස් බලය නිව්ටන් (N) වලින් ගණනය කරන්න.',
    },
    expected: 40.0,
    tolerance: 1.0,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'F = η * A * (v / d) = 0.40 * 0.20 * (0.50 / 0.001).',
      si: 'F = η * A * (v / d).',
    },
    solution: {
      en: 'F = η A (Δv / Δx) = 0.40 × 0.20 × (0.50 / 1.0 × 10^-3) = 0.080 × 500 = 40.0 N.',
      si: 'F = 0.40 × 0.20 × (0.50 / 0.001) = 40.0 N වේ.',
    },
  },
  {
    id: 'mat-10-2-12',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In the Stokes’ viscometer experiment, why is the first timing mark A positioned well below the top surface of the liquid?',
      si: 'ස්ටෝක්ස් දුස්ස්‍රාවීතාමාන පරීක්ෂණයේදී පළමු කාල සලකුණ A ද්‍රව මතුපිට සිට සැලකිය යුතු දුරක් පහළින් තබන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'To ensure the sphere has reached a steady terminal velocity before timing begins', si: 'කාලය මැනීම ඇරඹීමට පෙර ගෝලය නියත අන්ත ප්‍රවේගයට ළඟා වී ඇති බව තහවුරු කිරීමට' } },
      { id: 'opt2', text: { en: 'To prevent bubbles from entering the stopwatch', si: 'නැවතුම් ඔරලෝසුව තුළට බුබුලු යාම වැළැක්වීමට' } },
      { id: 'opt3', text: { en: 'Because buoyant upthrust only acts below mark A', si: 'උඩුකුරු තෙරපුම ක්‍රියා කරන්නේ A ලක්ෂ්‍යයට පහළින් පමණක් වන නිසා' } },
      { id: 'opt4', text: { en: 'To reduce the temperature of the liquid', si: 'ද්‍රවයේ උෂ්ණත්වය අඩු කිරීමට' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'A falling sphere accelerates initially before viscous drag matches effective weight.',
      si: 'ගෝලය වැටෙන ආරම්භක මොහොතේ ත්වරණය වන අතර අන්ත ප්‍රවේගයට පත්වීමට මඳ දුරක් අවශ්‍ය වේ.',
    },
    solution: {
      en: 'The sphere accelerates under gravity upon release; placing mark A 10–15 cm below the surface ensures terminal velocity is fully attained before measuring the transit time.',
      si: 'මුලදී ගෝලය ත්වරණය වන බැවින් නියත අන්ත ප්‍රවේගයට පත්වීම තහවුරු කර ගැනීමට A සලකුණ මතුපිට සිට 10-15 cm පහළින් තබයි.',
    },
  },
  {
    id: 'mat-10-2-13',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Water flows through a horizontal capillary tube at 5.0 cm^3 s^-1 under a pressure head of 20 cm. If the pressure head is increased to 60 cm while tube dimensions remain unchanged, what is the new laminar volume flow rate in cm^3 s^-1?',
      si: '20 cm පීඩන උසක් යටතේ තිරස් කේශික නලයක් තුළින් 5.0 cm^3 s^-1 අනුපාතයකින් ජලය ගලා යයි. නල මාන නොවෙනස්ව තබා පීඩන උස 60 cm දක්වා වැඩි කළහොත් නව පරිමා ප්‍රවාහ අනුපාතය cm^3 s^-1 වලින් කොපමණද?',
    },
    expected: 15.0,
    tolerance: 0.5,
    unit: { en: 'cm^3 s^-1', si: 'cm^3 s^-1' },
    hint: {
      en: 'According to Poiseuille’s Law, Q ∝ P. The pressure triples from 20 cm to 60 cm.',
      si: 'පුවසෙයිල් නියමයට අනුව Q ∝ P වේ. පීඩනය 3 ගුණයකින් වැඩි වේ.',
    },
    solution: {
      en: 'By Poiseuille’s Law: Q ∝ ΔP. Since pressure head increases from 20 to 60 cm (factor of 3), Q_new = 3 × 5.0 = 15.0 cm^3 s^-1.',
      si: 'Q ∝ ΔP බැවින් පීඩනය තෙගුණ වන විට ප්‍රවාහයද තෙගුණ වී 15.0 cm^3/s වේ.',
    },
  },
  {
    id: 'mat-10-2-14',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following satisfies the conditions required for Stokes’ Law (F_d = 6πηrv) to be valid?',
      si: 'ස්ටෝක්ස් නියමය (F_d = 6πηrv) වලංගු වීම සඳහා අවශ්‍ය කොන්දේසියක් වන්නේ පහත සඳහන් කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'The moving body is perfectly spherical, smooth, rigid, and moving slowly without turbulence', si: 'චලනය වන වස්තුව පරිපූර්ණ ගෝලාකාර, සිනිඳු, දෘඪ සහ කැළඹිලි රහිත මන්දගාමී චලිතයක පැවතීම' } },
      { id: 'opt2', text: { en: 'The fluid is non-viscous and compressible', si: 'තරලය දුස්ස්‍රාවී නොවන සම්පීඩ්‍ය එකක් වීම' } },
      { id: 'opt3', text: { en: 'The sphere is moving at the speed of sound', si: 'ගෝලය ශබ්දයේ ප්‍රවේගයෙන් චලනය වීම' } },
      { id: 'opt4', text: { en: 'The fluid container is narrower than the sphere', si: 'තරල බඳුන ගෝලයට වඩා සිහින් වීම' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Stokes derived his formula for smooth spheres at low Reynolds numbers (Re << 1) in infinite fluid.',
      si: 'ස්ටෝක්ස් සමීකරණය අදාළ වන්නේ අඩු වේගයකින් අනන්ත මාධ්‍යයක චලනය වන සුමට ගෝල සඳහාය.',
    },
    solution: {
      en: 'Stokes’ Law strictly requires a smooth, rigid spherical body moving at low velocity (creeping/laminar flow) through a homogeneous, infinite medium without slip or turbulence.',
      si: 'ස්ටෝක්ස් නියමය සඳහා ගෝලය සුමට දෘඪ එකක් විය යුතු අතර අඩු වේගයකින් (ලැමිනාර්) සීමාරහිත තරලයක චලනය විය යුතුය.',
    },
  },
  {
    id: 'mat-10-2-15',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A lead ball (density 11,300 kg m^-3) and an aluminum ball (density 2,700 kg m^-3) of identical radii fall in a viscous oil of density 900 kg m^-3. Calculate the ratio of the terminal velocity of the lead ball to that of the aluminum ball.',
      si: 'සමාන අරයන් සහිත ඊයම් බෝලයක් (ඝනත්වය 11,300 kg m^-3) සහ ඇලුමිනියම් බෝලයක් (ඝනත්වය 2,700 kg m^-3) ඝනත්වය 900 kg m^-3 වූ තෙලක් තුළ වැටේ. ඊයම් බෝලයේ අන්ත ප්‍රවේගය ඇලුමිනියම් බෝලයේ අන්ත ප්‍රවේගයට දක්වන අනුපාතය ගණනය කරන්න.',
    },
    expected: 5.78,
    tolerance: 0.1,
    unit: { en: '', si: '' },
    hint: {
      en: 'v_t ∝ (ρ - σ). Ratio = (11300 - 900) / (2700 - 900) = 10400 / 1800.',
      si: 'v_t ∝ (ρ - σ). අනුපාතය = (11300 - 900) / (2700 - 900).',
    },
    solution: {
      en: 'v_lead / v_aluminum = (ρ_lead - σ) / (ρ_al - σ) = (11300 - 900) / (2700 - 900) = 10400 / 1800 = 5.777... ≈ 5.78.',
      si: 'අනුපාතය = (11300 - 900) / (2700 - 900) = 10400 / 1800 = 5.78 වේ.',
    },
  },
  {
    id: 'mat-10-2-16',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is a "Newtonian fluid"?',
      si: '"නිව්ටෝනියානු තරලයක්" (Newtonian fluid) යනු කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'A fluid whose viscosity remains constant regardless of the rate of shear strain', si: 'කැපුම් වික්‍රියා අනුපාතිකය කුමක් වුවද දුස්ස්‍රාවිතාව නියතව පවතින තරලයක්' } },
      { id: 'opt2', text: { en: 'A fluid that obeys Newton’s law of universal gravitation', si: 'නිව්ටන්ගේ ගුරුත්වාකර්ෂණ නියමය පිළිපදින තරලයක්' } },
      { id: 'opt3', text: { en: 'A fluid whose viscosity increases infinitely when stirred', si: 'කැළඹූ විට දුස්ස්‍රාවිතාව අනන්තය දක්වා වැඩි වන තරලයක්' } },
      { id: 'opt4', text: { en: 'A fluid with zero density', si: 'ශුන්‍ය ඝනත්වයක් ඇති තරලයක්' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Water, alcohol, and air are Newtonian: shear stress is strictly proportional to velocity gradient.',
      si: 'ජලය හා වාතය නිව්ටෝනියානු වේ: ප්‍රත්‍යබලය ප්‍රවේග අනුක්‍රමණයට සෘජුව සමානුපාතික වේ.',
    },
    solution: {
      en: 'A Newtonian fluid possesses a constant dynamic viscosity coefficient η independent of shear rate, satisfying τ = η (dv/dy) linearly.',
      si: 'නිව්ටෝනියානු තරලයක ප්‍රත්‍යබලය ප්‍රවේග අනුක්‍රමණයට අනුලෝමව සමානුපාතික වන අතර එහි දුස්ස්‍රාවිතාව නියතව පවතී.',
    },
  },
  {
    id: 'mat-10-2-17',
    competencyRef: 'Competency 10.2',
    category: 'viscosity-fluids',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If the velocity of a sphere moving through a viscous fluid is doubled while maintaining laminar conditions, what happens to the Stokes drag force?',
      si: 'ලැමිනාර් තත්ව යටතේ දුස්ස්‍රාවී තරලයක් තුළ චලනය වන ගෝලයක ප්‍රවේගය දෙගුණ කළහොත්, ස්ටෝක්ස් ඩ්‍රැග් බලයට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It doubles (factor of 2)', si: 'දෙගුණ වේ' } },
      { id: 'opt2', text: { en: 'It quadruples (factor of 4)', si: 'හතර ගුණයක් වේ' } },
      { id: 'opt3', text: { en: 'It remains unchanged', si: 'නොවෙනස්ව පවතී' } },
      { id: 'opt4', text: { en: 'It halves', si: 'අඩක් වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Stokes’ Law: F_d = 6πηrv ∝ v.',
      si: 'ස්ටෝක්ස් නියමය: F_d ∝ v වේ.',
    },
    solution: {
      en: 'Stokes drag is directly proportional to velocity (F_d ∝ v). Therefore, doubling velocity doubles the drag force.',
      si: 'ස්ටෝක්ස් බලය ප්‍රවේගයට අනුලෝමව සමානුපාතික බැවින් ප්‍රවේගය දෙගුණ වූ විට බලයද දෙගුණ වේ.',
    },
  },

  // Additional Competency 10.3 (09-17)
  {
    id: 'mat-10-3-09',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A capillary tube is dipped vertically in water, producing a vertical rise h = 4.0 cm. If the tube is now tilted at an angle of 60° to the vertical, what is the length L of the water column in the inclined tube in cm? (L = h / cos(60°)).',
      si: 'කේශික නලයක් ජලයේ සිරස්ව ගිල්වූ විට h = 4.0 cm සිරස් උද්ගමනයක් ලැබේ. නලය සිරසට 60° ක කෝණයකින් ආනත කළහොත් ආනත නලය තුළ ජල කඳෙහි දිග L (cm වලින්) කොපමණද?',
    },
    expected: 8.0,
    tolerance: 0.2,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'The vertical height h remains constant. Length along tube L = h / cos(alpha) = 4.0 / cos(60°).',
      si: 'සිරස් උස h නියතව පවතින බැවින් නලය දිගේ දිග L = h / cos(60°) වේ.',
    },
    solution: {
      en: 'The vertical hydrostatic head h depends only on tube radius and surface tension. Along the inclined tube: L = h / cos(60°) = 4.0 / 0.5 = 8.0 cm.',
      si: 'සිරස් උස නියතව පවතින බැවින් ආනත නලය දිගේ දිග L = 4.0 / cos(60°) = 8.0 cm වේ.',
    },
  },
  {
    id: 'mat-10-3-10',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What happens if a capillary tube with a height shorter than the normal capillary rise h is dipped into water?',
      si: 'සාමාන්‍ය කේශික උස h ට වඩා කෙටි කේශික නලයක් ජලයේ ගිල්වුවහොත් කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Water rises to the top and the meniscus flattens (contact angle increases) without overflowing', si: 'ජලය නලයේ මුදුනටම නගින අතර උතුරා නොගොස් මෙනිස්කසය පැතලි වේ (ස්පර්ශ කෝණය වැඩි වේ)' } },
      { id: 'opt2', text: { en: 'Water continuously overflows from the top like a fountain', si: 'ජලය උල්පතක් සේ නොකඩවා මුදුනෙන් පිටතට උතුරා යයි' } },
      { id: 'opt3', text: { en: 'No water enters the tube at all', si: 'කිසිදු ජල ප්‍රමාණයක් නලය තුළට නොනගී' } },
      { id: 'opt4', text: { en: 'The tube shatters due to excess surface pressure', si: 'පීඩනය නිසා නලය පුපුරා යයි' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Perpetual motion fountains are impossible by energy conservation. Meniscus radius R adjusts so that h * R = constant.',
      si: 'ශක්ති සංස්ථිතිය අනුව නිකරුණේ උතුරා යා නොහැක. h * R = නියතයක් වන පරිදි මෙනිස්කසයේ අරය වෙනස් වේ.',
    },
    solution: {
      en: 'Water rises to the top edge and stops. The meniscus radius of curvature increases (flattens) to decrease upward pressure jump ΔP = 2γ/R, exactly balancing the reduced height without overflowing.',
      si: 'ජලය මුදුනටම පැමිණ නතර වේ. උතුරා නොයන අතර මෙනිස්කසයේ වක්‍රතා අරය වැඩි වී (පැතලි වී) අඩු උසට සරිලන සේ පීඩනය සමතුලිත වේ.',
    },
  },
  {
    id: 'mat-10-3-11',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Calculate the absolute pressure inside an air bubble of radius 0.50 mm located 20 cm below the surface of water (surface tension γ = 0.070 N m^-1, water density = 1000 kg m^-3, atmospheric pressure = 1.013e5 Pa). Give your answer in Pascals (Pa). (Take g = 9.8 m s^-2).',
      si: 'ජල මතුපිට සිට 20 cm ගැඹුරින් පිහිටි අරය 0.50 mm වූ වායු බුබුලක් තුළ නිරපේක්ෂ පීඩනය පැස්කල් (Pa) වලින් ගණනය කරන්න. (γ = 0.070 N m^-1, ρ = 1000 kg m^-3, P_atm = 1.013e5 Pa, g = 9.8 m s^-2).',
    },
    expected: 103540,
    tolerance: 50,
    unit: { en: 'Pa', si: 'Pa' },
    hint: {
      en: 'P_inside = P_atm + h * rho * g + 2γ / R. Note: An air bubble inside water has only ONE liquid-air boundary.',
      si: 'P_inside = P_atm + h * rho * g + 2γ / R. ජලය තුළ ඇති වායු බුබුලකට ඇත්තේ එක් පෘෂ්ඨයක් පමණි.',
    },
    solution: {
      en: 'Hydrostatic pressure P_ext = 101,300 + (0.20 × 1000 × 9.8) = 101,300 + 1960 = 103,260 Pa. Excess pressure ΔP = 2γ / R = (2 × 0.070) / (0.5 × 10^-3) = 280 Pa. Total P = 103,260 + 280 = 103,540 Pa.',
      si: 'බාහිර පීඩනය = 101,300 + 1960 = 103,260 Pa. අතිරික්ත පීඩනය = 280 Pa. මුළු පීඩනය = 103,540 Pa වේ.',
    },
  },
  {
    id: 'mat-10-3-12',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Jaeger’s method for measuring surface tension of a liquid, what measurement is recorded just as an air bubble detaches from the capillary orifice?',
      si: 'ද්‍රවයක පෘෂ්ඨික ආතතිය මැනීමේ ජේගර්ගේ ක්‍රමයේදී (Jaeger’s method) කේශික නල මුඛයෙන් බුබුලක් ගැලවී යන මොහොතේ වාර්තා කරගන්නේ කුමන පාඨාංකයද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Maximum pressure difference on the manometer', si: 'මානෝමීටරයේ උපරිම පීඩන අන්තරය' } },
      { id: 'opt2', text: { en: 'Minimum temperature of the liquid', si: 'ද්‍රවයේ අවම උෂ්ණත්වය' } },
      { id: 'opt3', text: { en: 'Color change of the soap indicator', si: 'දර්ශකයේ වර්ණ වෙනස' } },
      { id: 'opt4', text: { en: 'Speed of bubble transit to the surface', si: 'බුබුල මතුපිටට නගින ප්‍රවේගය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'The bubble radius is at its minimum (equal to the orifice radius r) when pressure reaches a maximum: ΔP_max = 2γ/r + h*rho*g.',
      si: 'පීඩනය උපරිම වන විට බුබුලේ අරය නල මුඛයේ අරයට r සමාන වේ.',
    },
    solution: {
      en: 'As the bubble grows, its radius of curvature decreases until it forms a hemisphere equal to the orifice radius r, where internal excess pressure peaks: ΔP_max = h_liq ρ g + 2γ/r.',
      si: 'බුබුල නල මුඛයේ අරයට r සමාන අර්ධ ගෝලයක් වන විට පීඩනය උපරිම වන බැවින් මානෝමීටරයේ උපරිම පීඩනය සටහන් කර ගනී.',
    },
  },
  {
    id: 'mat-10-3-13',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A thin wire ring of radius R = 3.0 cm rests horizontally on the surface of water (γ = 0.0725 N m^-1). What additional upward pull force in milliNewtons (mN) is needed to pull the ring clear of the water? (Take pi = 3.1416).',
      si: 'අරය R = 3.0 cm වූ සිහින් කම්බි වළල්ලක් තිරස්ව ජල පෘෂ්ඨය මත තබා ඇත (γ = 0.0725 N m^-1). වළල්ල ජලයෙන් මුදා ගැනීමට අවශ්‍ය අමතර ඉහළ ඇදුම් බලය මිලි-නිව්ටන් (mN) වලින් ගණනය කරන්න.',
    },
    expected: 27.3,
    tolerance: 0.5,
    unit: { en: 'mN', si: 'mN' },
    hint: {
      en: 'A ring has an inner and outer perimeter: total perimeter L = 2 * (2 * pi * R) = 4 * pi * R. Force F = 4 * pi * R * γ.',
      si: 'වළල්ලකට ඇතුළත හා පිටත පරිධි 2 ක් ඇත: මුළු පරිධිය = 4 π R.',
    },
    solution: {
      en: 'Total contact line = inner perimeter + outer perimeter = 2(2πR) = 4πR = 4 × 3.1416 × 0.030 m = 0.3770 m. Force F = L γ = 0.3770 × 0.0725 = 0.02733 N = 27.33 mN ≈ 27.3 mN.',
      si: 'මුළු පරිධිය = 4πR = 0.377 m. බලය F = 0.377 × 0.0725 = 27.3 mN වේ.',
    },
  },
  {
    id: 'mat-10-3-14',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How does dissolving common salt (NaCl, a highly soluble inorganic electrolyte) affect the surface tension of water?',
      si: 'ජලයේ සාමාන්‍ය ලුණු (NaCl) දිය කළ විට එහි පෘෂ්ඨික ආතතියට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It increases the surface tension of water', si: 'එය ජලයේ පෘෂ්ඨික ආතතිය වැඩි කරයි' } },
      { id: 'opt2', text: { en: 'It decreases the surface tension to zero', si: 'එය පෘෂ්ඨික ආතතිය ශුන්‍යය දක්වා අඩු කරයි' } },
      { id: 'opt3', text: { en: 'It has no effect whatsoever', si: 'එයින් කිසිදු බලපෑමක් සිදු නොවේ' } },
      { id: 'opt4', text: { en: 'It changes the sign of surface tension to negative', si: 'පෘෂ්ඨික ආතතිය සෘණ අගයක් බවට පත් කරයි' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Strong ion-dipole electrostatic attractions strengthen cohesive bonding within water.',
      si: 'ප්‍රබල අයන-ඩයිපෝල ආකර්ෂණ මඟින් ජල අණු අතර සංසක්ති බල ශක්තිමත් කරයි.',
    },
    solution: {
      en: 'Highly soluble inorganic salts exhibit negative surface adsorption; strong electrostatic ion-dipole interactions enhance cohesive bonding, slightly increasing surface tension.',
      si: 'අයනික ලවණ ජල අණු තදින් ආකර්ෂණය කර සංසක්ති බල වැඩි කරන බැවින් පෘෂ්ඨික ආතතිය මඳක් වැඩි වේ.',
    },
  },
  {
    id: 'mat-10-3-15',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: '1000 identical spherical micro-droplets of mercury (γ = 0.480 N m^-1), each of radius r = 1.0e-4 m, coalesce to form a single large spherical drop. Calculate the surface energy released in microJoules (µJ). (Take pi = 3.1416).',
      si: 'එකක අරය r = 1.0e-4 m වූ සමාන රසදිය ක්ෂුද්‍ර බිඳිති 1000 ක් (γ = 0.480 N m^-1) එකතු වී තනි විශාල ගෝලාකාර බිංදුවක් සාදයි. නිදහස් වන පෘෂ්ඨික ශක්තිය මයික්‍රෝජූල් (µJ) වලින් ගණනය කරන්න.',
    },
    expected: 54.3,
    tolerance: 1.0,
    unit: { en: 'µJ', si: 'µJ' },
    hint: {
      en: 'Big drop radius R = 10 * r. Initial total area A1 = 1000 * 4π r^2. Final area A2 = 4π R^2 = 100 * 4π r^2. ΔA = 900 * 4π r^2. Energy = γ * ΔA.',
      si: 'විශාල බිංදුවේ අරය R = 10 r. වර්ගඵල වෙනස ΔA = 900 * 4π r^2. නිදහස් වන ශක්තිය = γ * ΔA.',
    },
    solution: {
      en: 'Volume conservation: (4/3)π R^3 = 1000 (4/3)π r^3 ⇒ R = 10 r = 1.0 × 10^-3 m. Initial area = 1000 × 4π (10^-4)^2 = 4π × 10^-5 m^2. Final area = 4π (10^-3)^2 = 4π × 10^-6 m^2. ΔA = 4π × 10^-5 (1 - 0.1) = 3.6π × 10^-5 m^2. Released energy = 0.480 × (3.6 × 3.1416 × 10^-5) = 5.428 × 10^-5 J ≈ 54.3 µJ.',
      si: 'වර්ගඵල වෙනස ΔA = 3.6π × 10^-5 m^2. නිදහස් වන ශක්තිය = 0.480 × 3.6π × 10^-5 = 54.3 µJ වේ.',
    },
  },
  {
    id: 'mat-10-3-16',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which physical phenomenon enables water to rise through porous soil and microscopic xylem vessels in tall trees against gravity?',
      si: 'උස් ගස්වල සෛලම වාහිනී ඔස්සේ සහ පසෙහි සිදුරු ඔස්සේ ගුරුත්වයට එරෙහිව ජලය ඉහළ නැගීමට උපකාරී වන ප්‍රධාන භෞතික සංසිද්ධිය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Capillary action driven by surface tension and adhesion', si: 'පෘෂ්ඨික ආතතිය සහ ආසක්තිය මඟින් මෙහෙයවන කේශික ක්‍රියාව' } },
      { id: 'opt2', text: { en: 'Atmospheric electrostatic repulsion', si: 'වායුගෝලීය විද්‍යුත් ස්ථිතික විකර්ෂණය' } },
      { id: 'opt3', text: { en: 'Sublimation pressure', si: 'ඌර්ධවපාතන පීඩනය' } },
      { id: 'opt4', text: { en: 'Nuclear magnetic resonance', si: 'න්‍යෂ්ටික චුම්භක අනුනාදය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Strong adhesion between water and xylem cell walls combined with surface tension creates upward capillary force.',
      si: 'ජලය සහ සෛලම බිත්ති අතර ආසක්ති බල හා පෘෂ්ඨික ආතතිය එක්ව කේශික උද්ගමනය ඇති කරයි.',
    },
    solution: {
      en: 'Adhesion of water molecules to microscopic xylem cellulose walls combined with cohesive surface tension forces creates upward capillary pull, assisting transpirational sap ascent.',
      si: 'ජලය සහ සෛලම බිත්ති අතර ආසක්තිය මෙන්ම ජල අණු අතර සංසක්තිය (පෘෂ්ඨික ආතතිය) මඟින් කේශික උද්ගමනය ඇති කර ජලය ඉහළට ගෙන යයි.',
    },
  },
  {
    id: 'mat-10-3-17',
    competencyRef: 'Competency 10.3',
    category: 'surface-tension',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a laboratory experiment using the microscope slide method, a glass slide of length 7.5 cm requires a balancing mass of 1.11 g to detach from the surface of water. Calculate the derived surface tension of water in N m^-1. (Take g = 9.8 m s^-2).',
      si: 'අන්වීක්ෂ කදා ක්‍රමයේදී, දිග 7.5 cm වූ කදාවක් ජල පෘෂ්ඨයෙන් මුදා ගැනීමට 1.11 g ක තුලන ස්කන්ධයක් අවශ්‍ය වේ. ජලයේ පෘෂ්ඨික ආතතිය N m^-1 වලින් ගණනය කරන්න. (g = 9.8 m s^-2).',
    },
    expected: 0.0725,
    tolerance: 0.002,
    unit: { en: 'N m^-1', si: 'N m^-1' },
    hint: {
      en: 'γ = (m * g) / (2 * l) = (1.11e-3 * 9.8) / (2 * 0.075).',
      si: 'γ = (m * g) / (2 * l).',
    },
    solution: {
      en: 'γ = (m g) / (2 l) = (1.11 × 10^-3 kg × 9.8 m s^-2) / (2 × 0.075 m) = 0.010878 / 0.150 = 0.07252 N m^-1 ≈ 0.0725 N m^-1.',
      si: 'γ = (m g) / (2 l) = (0.00111 × 9.8) / (2 × 0.075) = 0.0725 N/m වේ.',
    },
  },
  // =========================================================================
  // STRUCTURED / MULTIPART PRACTICAL QUESTIONS (with detailed marking rubrics)
  // =========================================================================
  {
    id: 'mat-sq01',
    competencyRef: 'Competency 10.1',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'In an experiment to determine the Young modulus of a metal wire using Searle\'s apparatus, two identical long wires A (reference) and B (test) of length 2.50 m and nominal diameter 0.56 mm are suspended from a rigid ceiling.',
      si: 'සර්ල්ගේ උපකරණය භාවිතයෙන් ලෝහ කම්බියක යං මාපාංකය සෙවීමේ පරීක්ෂණයකදී, දිග 2.50 m සහ දළ විෂ්කම්භය 0.56 mm වූ සර්වසම දිගු කම්බි දෙකක් A (සන්දර්භ) සහ B (පරීක්ෂණ) දෘඪ වහලක සිට එල්ලා ඇත.',
    },
    hint: {
      en: 'Recall why two wires are suspended side by side, how micrometer/spirit level measures extension, and Young\'s modulus formula Y = (F L) / (A e).',
      si: 'කම්බි දෙකක් එක ළඟ එල්ලන්නේ ඇයිද, මට්ටම් බුබුල/මයික්‍රොමීටරයෙන් විස්තාරණය මනින්නේ කෙසේද සහ යං මාපාංක සමීකරණය Y = (F L) / (A e) සිහිපත් කරන්න.',
    },
    solution: {
      en: 'Identical suspension eliminates thermal expansion and ceiling sagging. Extension e is measured using the spherometer/spirit-level head. From graph of F vs e, gradient = YA/L, hence Y = gradient * L / A.',
      si: 'සර්වසම කම්බි දෙකක් භාවිතයෙන් තාප ප්‍රසාරණ දෝෂ සහ වහලයේ නැමීම් ඉවත් වේ. F එදිරිව e ප්‍රස්ථාරයේ අනුක්‍රමණය = YA/L බැවින් Y = අනුක්‍රමණය * L / A වේ.',
    },
    parts: [
      {
        id: 'mat-sq01-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State two distinct reasons for suspending a reference wire (dummy wire) alongside the test wire in Searle\'s apparatus.',
          si: 'සර්ල්ගේ උපකරණයේ පරීක්ෂණ කම්බියට සමගාමීව සන්දර්භ කම්බියක් (හුදු කම්බියක්) එල්ලීමට හේතු දෙකක් දක්වන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Compensating for ambient temperature changes / thermal expansion occurring during the experiment.',
              si: 'පරීක්ෂණය අතරතුර සිදුවන පරිසර උෂ්ණත්ව වෙනස්වීම් / තාප ප්‍රසාරණය සඳහා වන්දි ගෙවීම.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Eliminating errors due to yielding, sagging, or bending of the ceiling/support beam under heavy test loads.',
              si: 'බර යෙදීමේදී ආධාරකයේ හෝ වහලයේ සිදුවන නැමීම් හෝ ඇදීම් නිසා ඇතිවන දෝෂ ඉවත් කිරීම.',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Automatic compensation for thermal expansion of the wire; (2) Neutralizing any yielding or deflection of the main support.',
          si: '(1) කම්බියේ තාප ප්‍රසාරණය සඳහා ස්වයංක්‍රීයව වන්දි ලැබීම; (2) ආධාරකයේ ඇදීම් හෝ නැමීම් මිනුමට බලපෑම වැළැක්වීම.',
        },
      },
      {
        id: 'mat-sq01-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Explain how the extension of the test wire is accurately detected and measured using the spirit level and micrometer screw gauge.',
          si: 'මට්ටම් බුබුල සහ මයික්‍රොමීටර ස්කුරුප්පු ආමානය භාවිතයෙන් පරීක්ෂණ කම්බියේ විස්තාරණය නිවැරදිව අනාවරණය කර මනින ආකාරය පහදන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'When test wire extends, the spirit level tilts and the air bubble moves away from the central reference markings.',
              si: 'පරීක්ෂණ කම්බිය දික් වන විට මට්ටම් බුබුල ඇලවී වායු බුබුල මධ්‍ය ලකුණෙන් ඉවතට යයි.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Micrometer screw is rotated until bubble returns exactly between reference marks; reading difference gives extension e.',
              si: 'මයික්‍රොමීටර ස්කුරුප්පුව කරකවා බුබුල නැවත මධ්‍යයට ගෙන ඒමෙන් පාඨාංක වෙනසින් විස්තාරණය e ලබා ගනී.',
            },
          },
        ],
        modelAnswer: {
          en: 'Adding mass tilts the frame, displacing the spirit level bubble. Rotating the micrometer brings the bubble back to center. The advance of the micrometer gives extension e directly.',
          si: 'බර යෙදූ විට බුබුල විස්ථාපනය වේ. මයික්‍රොමීටරය කරකවා බුබුල යළි මධ්‍යයට ගැනීමෙන් විස්තාරණය සෘජුවම මැන ගත හැක.',
        },
      },
      {
        id: 'mat-sq01-p3',
        partLabel: '(c)',
        prompt: {
          en: 'In this experiment, load F (N) is plotted against extension e (m). If the gradient of the straight-line graph is 2.0 × 10^4 N m^-1 and wire diameter d = 0.56 mm (cross-sectional area A = 2.46 × 10^-7 m^2), calculate the Young modulus Y of the wire.',
          si: 'මෙම පරීක්ෂණයේදී භාරය F (N) එදිරිව විස්තාරණය e (m) ප්‍රස්ථාරගත කර ඇත. ප්‍රස්ථාරයේ අනුක්‍රමණය 2.0 × 10^4 N m^-1 නම් සහ කම්බියේ විෂ්කම්භය d = 0.56 mm (වර්ගඵලය A = 2.46 × 10^-7 m^2) නම්, කම්බියේ යං මාපාංකය Y ගණනය කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Correct formula relating gradient to Young modulus: gradient = (F/e) = (Y * A) / L.',
              si: 'අනුක්‍රමණය සහ යං මාපාංකය අතර සම්බන්ධය: අනුක්‍රමණය = (Y * A) / L.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: Y = (gradient * L) / A = (2.0 × 10^4 * 2.50) / (2.46 × 10^-7).',
              si: 'ආදේශය: Y = (2.0 × 10^4 * 2.50) / (2.46 × 10^-7).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Final answer: Y ≈ 2.03 × 10^11 N m^-2 (Pa) with correct units.',
              si: 'අවසාන පිළිතුර: Y ≈ 2.03 × 10^11 N m^-2 (Pa) නිවැරදි ඒකක සහිතව.',
            },
          },
        ],
        modelAnswer: {
          en: 'Y = (gradient * L) / A = (2.0 × 10^4 * 2.50) / (2.46 × 10^-7) = 2.03 × 10^11 N m^-2.',
          si: 'Y = (2.0 × 10^4 * 2.50) / (2.46 × 10^-7) = 2.03 × 10^11 N m^-2.',
        },
      },
    ],
  },
  {
    id: 'mat-sq02',
    competencyRef: 'Competency 10.1',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'A tensile testing apparatus records the complete stress-strain relationship for a structural steel wire until rupture.',
      si: 'ආතන්ය පරීක්ෂණ උපකරණයකින් ව්‍යුහාත්මක වානේ කම්බියක් කැඩී යන තෙක් එහි සම්පූර්ණ ප්‍රත්‍යබල-වික්‍රියා සම්බන්ධතාව වාර්තා කරයි.',
    },
    hint: {
      en: 'Identify proportional limit, elastic limit, yield point, ultimate tensile strength, breaking point, and strain energy density as area under curve.',
      si: 'අනුපාතික සීමාව, ප්‍රත්‍යාස්ථ සීමාව, උත්පාදක ලක්ෂ්‍යය, උපරිම ආතන්ය ප්‍රබලතාව, බිඳුම් ලක්ෂ්‍යය සහ වක්‍රය යට වර්ගඵලයෙන් වික්‍රියා ශක්ති ඝනත්වය හඳුනා ගන්න.',
    },
    solution: {
      en: 'Area under stress-strain graph represents work done per unit volume (strain energy density). Beyond yield point, plastic deformation occurs with permanent set.',
      si: 'ප්‍රත්‍යබල-වික්‍රියා ප්‍රස්ථාරය යට වර්ගඵලය ඒකක පරිමාවක වික්‍රියා ශක්තිය නිරූපණය කරයි. උත්පාදක ලක්ෂ්‍යයෙන් ඔබ්බට ප්ලාස්ටික් විරූපණය හටගනී.',
    },
    parts: [
      {
        id: 'mat-sq02-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Distinguish between the "proportional limit" and the "elastic limit" of a material.',
          si: 'ද්‍රව්‍යයක "අනුපාතික සීමාව" සහ "ප්‍රත්‍යාස්ථ සීමාව" අතර වෙනස පැහැදිලි කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Proportional limit is the maximum stress up to which Hooke\'s law strictly holds (stress is directly proportional to strain).',
              si: 'අනුපාතික සීමාව යනු හුක්ගේ නියමය දැඩිව වලංගු වන (ප්‍රත්‍යබලය වික්‍රියාවට සමානුපාතික වන) උපරිම ප්‍රත්‍යබලයයි.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Elastic limit is the maximum stress beyond which the material suffers permanent deformation (plastic deformation) upon unloading.',
              si: 'ප්‍රත්‍යාස්ථ සීමාව යනු භාරය ඉවත් කළ විට ද්‍රව්‍යය යළි මුල් තත්වයට පත්විය හැකි උපරිම ප්‍රත්‍යබලයයි (එයින් ඔබ්බට ස්ථිර විරූපණයක් ඇති වේ).',
            },
          },
        ],
        modelAnswer: {
          en: 'Up to the proportional limit, stress ∝ strain. Up to the elastic limit, the material returns to original dimensions without permanent deformation when stress is removed.',
          si: 'අනුපාතික සීමාව තෙක් ප්‍රත්‍යබලය වික්‍රියාවට අනුලෝමව සමානුපාතික වේ. ප්‍රත්‍යාස්ථ සීමාව තෙක් භාරය ඉවත් කළ විට ස්ථිර වික්‍රියාවකින් තොරව මුල් හැඩයට පත්වේ.',
        },
      },
      {
        id: 'mat-sq02-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Show that the elastic energy stored per unit volume of a stretched wire obeying Hooke\'s law is given by u = 1/2 * stress * strain.',
          si: 'හුක්ගේ නියමය පිළිපදින ඇදුණු කම්බියක ඒකක පරිමාවක ගබඩා වන ප්‍රත්‍යාස්ථ ශක්තිය u = 1/2 * ප්‍රත්‍යබලය * වික්‍රියාව මගින් ලැබෙන බව පෙන්වන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Work done stretching wire: W = 1/2 * F * e (average force * extension).',
              si: 'කම්බිය ඇදීමට කළ කාර්යය: W = 1/2 * F * e (මධ්‍යන්‍ය බලය * විස්තාරණය).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Dividing by volume (V = A * L): u = W / V = (1/2 * F * e) / (A * L).',
              si: 'පරිමාවෙන් (V = A * L) බෙදීම: u = W / V = (1/2 * F * e) / (A * L).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Regrouping: u = 1/2 * (F / A) * (e / L) = 1/2 * stress * strain = 1/2 * Y * (strain)^2.',
              si: 'නැවත සැකසීම: u = 1/2 * (F / A) * (e / L) = 1/2 * ප්‍රත්‍යබලය * වික්‍රියාව.',
            },
          },
        ],
        modelAnswer: {
          en: 'W = 1/2 * F * e. Energy per volume u = W / (A * L) = 1/2 * (F/A) * (e/L) = 1/2 * stress * strain.',
          si: 'W = 1/2 * F * e. ඒකක පරිමාවක ශක්තිය u = W / (A * L) = 1/2 * (F/A) * (e/L) = 1/2 * ප්‍රත්‍යබලය * වික්‍රියාව.',
        },
      },
      {
        id: 'mat-sq02-p3',
        partLabel: '(c)',
        prompt: {
          en: 'A copper wire of Young modulus 1.2 × 10^11 Pa and volume 4.0 × 10^-5 m^3 is stretched with a strain of 1.0 × 10^-3. Calculate the total strain energy stored in the wire.',
          si: 'යං මාපාංකය 1.2 × 10^11 Pa සහ පරිමාව 4.0 × 10^-5 m^3 වූ තඹ කම්බියක් 1.0 × 10^-3 ක වික්‍රියාවකට ලක් කෙරේ. කම්බියේ ගබඩා වන මුළු වික්‍රියා ශක්තිය ගණනය කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Calculation of energy density u = 1/2 * Y * (strain)^2 = 0.5 * 1.2 × 10^11 * (1.0 × 10^-3)^2 = 6.0 × 10^4 J m^-3.',
              si: 'ශක්ති ඝනත්වය u = 1/2 * Y * (වික්‍රියාව)^2 = 6.0 × 10^4 J m^-3.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Total energy U = u * Volume = 6.0 × 10^4 J m^-3 * 4.0 × 10^-5 m^3 = 2.4 J.',
              si: 'මුළු ශක්තිය U = u * පරිමාව = 6.0 × 10^4 * 4.0 × 10^-5 = 2.4 J.',
            },
          },
        ],
        modelAnswer: {
          en: 'U = 1/2 * Y * (strain)^2 * V = 0.5 * (1.2 × 10^11) * (10^-6) * (4.0 × 10^-5) = 2.4 J.',
          si: 'U = 1/2 * Y * (වික්‍රියාව)^2 * V = 0.5 * (1.2 × 10^11) * (10^-6) * (4.0 × 10^-5) = 2.4 J.',
        },
      },
    ],
  },
  {
    id: 'mat-sq03',
    competencyRef: 'Competency 10.2',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'In an experiment to determine the coefficient of viscosity of water using Poiseuille\'s capillary tube method, water flows steadily through a horizontal capillary tube of length L and internal radius r under a constant pressure head h.',
      si: 'පොයිසූයිල්ගේ කේෂික නළ ක්‍රමය මගින් ජලයේ දුස්ස්‍රාවිතා සංගුණකය සෙවීමේ පරීක්ෂණයකදී, දිග L සහ අභ්‍යන්තර අරය r වූ තිරස් කේෂික නළයක් තුළින් නියත පීඩන ශීර්ෂයක් h යටතේ ජලය ස්ථායීව ගලා යයි.',
    },
    hint: {
      en: 'Poiseuille formula: V/t = (π * P * r^4) / (8 * η * L). Note the r^4 dependence and why flow must be laminar and tube horizontal.',
      si: 'පොයිසූයිල් සමීකරණය: V/t = (π * P * r^4) / (8 * η * L). r^4 සම්බන්ධය සහ ප්‍රවාහය ලැමිනාර් විය යුත්තේ ඇයිද යන්න සිහිපත් කරන්න.',
    },
    solution: {
      en: 'Constant head tank maintains steady pressure P = h * ρ * g. Flow rate Q = V/t plotted against h yields straight line through origin with gradient = (π ρ g r^4) / (8 η L).',
      si: 'නියත ශීර්ෂ බඳුනකින් P = h * ρ * g පීඩනය පවත්වා ගනී. Q එදිරිව h ප්‍රස්ථාරයේ අනුක්‍රමණය = (π ρ g r^4) / (8 η L) වේ.',
    },
    parts: [
      {
        id: 'mat-sq03-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State three essential experimental conditions required for Poiseuille\'s equation to be valid.',
          si: 'පොයිසූයිල්ගේ සමීකරණය වලංගු වීම සඳහා සපුරාලිය යුතු අත්‍යවශ්‍ය පරීක්ෂණාත්මක කොන්දේසි තුනක් දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Liquid flow must be streamline / laminar (no eddies or turbulence; low velocity).',
              si: 'ද්‍රව ප්‍රවාහය ධාරාරේඛී / ලැමිනාර් විය යුතුය (සුළි රහිත, අඩු ප්‍රවේගයකින්).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Capillary tube must be horizontal so gravity does not accelerate the liquid along the tube.',
              si: 'කේෂික නළය තිරස් විය යුතුය (ගුරුත්වය දිගේ ත්වරණයක් ඇතිවීම වැළැක්වීමට).',
            },
          },
          {
            point: 1,
            description: {
              en: 'The layer of liquid in contact with the inner tube wall must be at rest (no slip condition) and tube bore must be uniform.',
              si: 'නළ බිත්තිය හා ස්පර්ශ වන ද්‍රව ස්ථරය නිශ්චලව තිබිය යුතුය (ලිස්සා යාමක් නොමැති වීම) සහ නළ විෂ්කම්භය ඒකාකාර විය යුතුය.',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Laminar/streamline flow; (2) Tube maintained horizontally; (3) Uniform bore with no-slip at tube wall.',
          si: '(1) ලැමිනාර් ප්‍රවාහය; (2) නළය තිරස්ව තැබීම; (3) බිත්තිය මත ලිස්සා යාමක් නොමැති වීම සහ ඒකාකාර සිලින්ඩරාකාර නළයක් වීම.',
        },
      },
      {
        id: 'mat-sq03-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Why is measuring the internal radius r of the capillary tube the greatest source of percentage error in this experiment, and what instrument is recommended to measure it?',
          si: 'මෙම පරීක්ෂණයේදී කේෂික නළයේ අභ්‍යන්තර අරය r මැනීම විශාලතම ප්‍රතිශත දෝෂයට හේතුවන්නේ ඇයි, සහ එය මැනීමට නිර්දේශිත උපකරණය කුමක්ද?',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Radius r is raised to the fourth power (r^4) in Poiseuille\'s formula, so any fractional error in r is multiplied fourfold (4 * Δr/r).',
              si: 'පොයිසූයිල් සමීකරණයේ අරය සිව්වන බලයට (r^4) නැංවෙන බැවින්, r හි භාගික දෝෂය සිව්ගුණයකින් වැඩිවේ.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Travelling microscope (or mercury thread weighing method).',
              si: 'චල අන්වීක්ෂය (හෝ රසදිය නූල් කිරුම් ක්‍රමය).',
            },
          },
        ],
        modelAnswer: {
          en: 'Because r appears as r^4, giving percentage error 4*(Δr/r). It is measured using a travelling microscope.',
          si: 'සමීකරණයේ r^4 ලෙස ඇති බැවින් ප්‍රතිශත දෝෂය 4*(Δr/r) වේ. එය මැනීමට චල අන්වීක්ෂය යොදා ගනී.',
        },
      },
      {
        id: 'mat-sq03-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Water of density 1000 kg m^-3 flows at volume rate 1.20 × 10^-6 m^3 s^-1 through a capillary of length 0.40 m and radius 0.80 mm under head h = 0.25 m. Calculate viscosity η of water. (g = 9.8 m s^-2).',
          si: 'ඝනත්වය 1000 kg m^-3 වූ ජලය දිග 0.40 m සහ අරය 0.80 mm වූ කේෂික නළයක් තුළින් h = 0.25 m ශීර්ෂයක් යටතේ 1.20 × 10^-6 m^3 s^-1 පරිමා ප්‍රවාහ සීඝ්‍රතාවයකින් ගලා යයි. ජලයේ දුස්ස්‍රාවිතාව η ගණනය කරන්න. (g = 9.8 m s^-2).',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Pressure P = h * ρ * g = 0.25 * 1000 * 9.8 = 2450 Pa.',
              si: 'පීඩනය P = h * ρ * g = 0.25 * 1000 * 9.8 = 2450 Pa.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Poiseuille formula: η = (π * P * r^4) / (8 * L * Q).',
              si: 'සමීකරණය: η = (π * P * r^4) / (8 * L * Q).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: r^4 = (8.0 × 10^-4)^4 = 4.096 × 10^-13 m^4. η = (π * 2450 * 4.096 × 10^-13) / (8 * 0.40 * 1.20 × 10^-6).',
              si: 'ආදේශය: r^4 = (8.0 × 10^-4)^4 = 4.096 × 10^-13 m^4. η = (π * 2450 * 4.096 × 10^-13) / (8 * 0.40 * 1.20 × 10^-6).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: η ≈ 8.21 × 10^-4 Pa s (N s m^-2).',
              si: 'ප්‍රතිඵලය: η ≈ 8.21 × 10^-4 Pa s (N s m^-2).',
            },
          },
        ],
        modelAnswer: {
          en: 'P = 0.25 * 1000 * 9.8 = 2450 Pa. η = (π * 2450 * (0.8e-3)^4) / (8 * 0.40 * 1.2e-6) = 8.21 × 10^-4 Pa s.',
          si: 'P = 2450 Pa. η = (π * 2450 * (0.8e-3)^4) / (8 * 0.40 * 1.2e-6) = 8.21 × 10^-4 Pa s වේ.',
        },
      },
    ],
  },
  {
    id: 'mat-sq04',
    competencyRef: 'Competency 10.2',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'A student uses Stokes\' law to determine the viscosity of castor oil (density 960 kg m^-3) by dropping small steel ball bearings into a tall glass cylinder containing the oil.',
      si: 'සිසුවෙකු උසැති වීදුරු සිලින්ඩරයක අඩංගු එඬරු තෙල් (ඝනත්වය 960 kg m^-3) තුළට කුඩා වානේ බෝල දැමීමෙන් ස්ටෝක්ස් නියමය භාවිතයෙන් එඬරු තෙල්වල දුස්ස්‍රාවිතාව සොයයි.',
    },
    hint: {
      en: 'At terminal velocity, weight = upthrust + viscous drag: 4/3 π r^3 ρ g = 4/3 π r^3 σ g + 6 π η r v_t. Terminal velocity v_t ∝ r^2.',
      si: 'අන්ත ප්‍රවේගයේදී බර = උඩුකුරු තෙරපුම + දුස්ස්‍රාවී බලය: mg = U + F_v. අන්ත ප්‍රවේගය v_t ∝ r^2 වේ.',
    },
    solution: {
      en: 'Terminal velocity is reached when net force is zero. Timing over marked vertical distance h gives v_t = h/t. Graph of v_t vs r^2 has gradient = 2(ρ - σ)g / (9η).',
      si: 'ශුද්ධ බලය ශූන්‍ය වන විට අන්ත ප්‍රවේගය ලබා ගනී. v_t එදිරිව r^2 ප්‍රස්ථාරයේ අනුක්‍රමණය = 2(ρ - σ)g / (9η) වේ.',
    },
    parts: [
      {
        id: 'mat-sq04-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Why must the timing of the falling ball only start after it has fallen a sufficient distance below the top liquid surface?',
          si: 'වැටෙන බෝලයේ කාලය මැනීම ආරම්භ කළ යුත්තේ එය ද්‍රව මතුපිට සිට ප්‍රමාණවත් දුරක් පහළට වැටුණු පසුව පමණක් වන්නේ ඇයි?',
        },
        allocatedMarks: 2,
        rubric: [
          {
            point: 2,
            description: {
              en: 'To ensure the ball has reached constant terminal velocity (acceleration has dropped to zero).',
              si: 'බෝලය නියත අන්ත ප්‍රවේගයට ළඟා වී ඇති බව (ත්වරණය ශූන්‍ය වී ඇති බව) තහවුරු කර ගැනීමට.',
            },
          },
        ],
        modelAnswer: {
          en: 'The ball initially accelerates; it must travel a certain entry distance until viscous force balances effective weight and terminal velocity is attained.',
          si: 'ආරම්භයේදී බෝලය ත්වරණය වේ; දුස්ස්‍රාවී බලය ඵලදායී බරට සමාන වී අන්ත ප්‍රවේගය ලැබීමට යම් දුරක් ගමන් කළ යුතුය.',
        },
      },
      {
        id: 'mat-sq04-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Derive the expression for terminal velocity v_t in terms of ball radius r, ball density ρ, liquid density σ, acceleration of gravity g, and liquid viscosity η.',
          si: 'බෝලයේ අරය r, බෝලයේ ඝනත්වය ρ, ද්‍රවයේ ඝනත්වය σ, ගුරුත්වජ ත්වරණය g සහ ද්‍රවයේ දුස්ස්‍රාවිතාව η ඇසුරෙන් අන්ත ප්‍රවේගය v_t සඳහා ප්‍රකාශනයක් ව්‍යුත්පන්න කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Condition for equilibrium at terminal velocity: W = U + F_v (Weight = Upthrust + Viscous drag).',
              si: 'අන්ත ප්‍රවේගයේ සමතුලිතතාව: W = U + F_v (බර = උඩුකුරු තෙරපුම + දුස්ස්‍රාවී බලය).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Substituting formulae: (4/3) π r^3 ρ g = (4/3) π r^3 σ g + 6 π η r v_t.',
              si: 'සමීකරණ ආදේශය: (4/3) π r^3 ρ g = (4/3) π r^3 σ g + 6 π η r v_t.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Rearranging: 6 π η r v_t = (4/3) π r^3 (ρ - σ) g => v_t = 2 r^2 (ρ - σ) g / (9 η).',
              si: 'සුළු කිරීම: v_t = 2 r^2 (ρ - σ) g / (9 η).',
            },
          },
        ],
        modelAnswer: {
          en: 'W = U + 6πηrv_t => (4/3)πr^3(ρ - σ)g = 6πηrv_t => v_t = [2 r^2 (ρ - σ) g] / (9 η).',
          si: 'W = U + 6πηrv_t => v_t = 2 r^2 (ρ - σ) g / (9 η).',
        },
      },
      {
        id: 'mat-sq04-p3',
        partLabel: '(c)',
        prompt: {
          en: 'A steel sphere of diameter 2.0 mm and density 7800 kg m^-3 falls through oil (density 960 kg m^-3, viscosity 0.65 Pa s). Calculate its terminal velocity. (g = 9.8 m s^-2).',
          si: 'විෂ්කම්භය 2.0 mm සහ ඝනත්වය 7800 kg m^-3 වූ වානේ ගෝලයක් තෙල් (ඝනත්වය 960 kg m^-3, දුස්ස්‍රාවිතාව 0.65 Pa s) තුළ වැටේ. එහි අන්ත ප්‍රවේගය ගණනය කරන්න. (g = 9.8 m s^-2).',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Radius r = 1.0 mm = 1.0 × 10^-3 m, r^2 = 1.0 × 10^-6 m^2.',
              si: 'අරය r = 1.0 × 10^-3 m, r^2 = 1.0 × 10^-6 m^2.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Density difference (ρ - σ) = 7800 - 960 = 6840 kg m^-3.',
              si: 'ඝනත්ව වෙනස = 7800 - 960 = 6840 kg m^-3.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: v_t = [2 * (10^-6) * 6840 * 9.8] / [9 * 0.65].',
              si: 'ආදේශය: v_t = [2 * (10^-6) * 6840 * 9.8] / [9 * 0.65].',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: v_t = 0.134 m s^-1 (13.4 cm s^-1).',
              si: 'ප්‍රතිඵලය: v_t = 0.134 m s^-1 (13.4 cm s^-1).',
            },
          },
        ],
        modelAnswer: {
          en: 'v_t = 2 * (1.0e-3)^2 * (7800 - 960) * 9.8 / (9 * 0.65) = 0.134 m s^-1.',
          si: 'v_t = 2 * (1.0e-3)^2 * 6840 * 9.8 / (9 * 0.65) = 0.134 m s^-1.',
        },
      },
    ],
  },
  {
    id: 'mat-sq05',
    competencyRef: 'Competency 10.3',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'In an experiment to determine the surface tension of water using the capillary rise method, clean glass capillary tubes of different internal radii are dipped vertically into a beaker of pure water.',
      si: 'කේෂික උද්ගමන ක්‍රමය මගින් ජලයේ පෘෂ්ඨික ආතතිය සෙවීමේ පරීක්ෂණයකදී, විවිධ අභ්‍යන්තර අරයන් සහිත පිරිසිදු වීදුරු කේෂික නළ පිරිසිදු ජලය සහිත බීකරයක සිරස්ව ගිල්වනු ලැබේ.',
    },
    hint: {
      en: 'Formula: γ = (h * r * ρ * g) / (2 * cos θ). For clean glass and water, contact angle θ ≈ 0, so cos θ = 1. Jurin\'s law: h * r = constant.',
      si: 'සමීකරණය: γ = (h * r * ρ * g) / (2 * cos θ). ජලය සහ පිරිසිදු වීදුරු සඳහා ස්පර්ශ කෝණය θ ≈ 0 බැවින් cos θ = 1 වේ. h * r = නියතයකි.',
    },
    solution: {
      en: 'Upward surface tension force 2πrγ cos θ balances weight of liquid column πr^2 h ρ g. Graph of h against 1/r gives a straight line passing through origin with gradient = 2γ / (ρ g).',
      si: 'ඉහළට ක්‍රියාකරන පෘෂ්ඨික ආතති බලය 2πrγ ජල කඳේ බර πr^2 h ρ g මගින් තුලනය වේ. h එදිරිව 1/r ප්‍රස්ථාරයේ අනුක්‍රමණය = 2γ / (ρ g) වේ.',
    },
    parts: [
      {
        id: 'mat-sq05-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State why the capillary tube and beaker must be thoroughly cleaned with dilute sodium hydroxide and rinsed with distilled water before performing the experiment.',
          si: 'පරීක්ෂණය කිරීමට පෙර කේෂික නළය සහ බීකරය තනුක සෝඩියම් හයිඩ්‍රොක්සයිඩ්වලින් සෝදා ආස්‍රැත ජලයෙන් සේදිය යුත්තේ ඇයි?',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Grease and oily impurities drastically reduce the surface tension of water.',
              si: 'තෙල් සහ ග්‍රීස් අපද්‍රව්‍ය මගින් ජලයේ පෘෂ්ඨික ආතතිය විශාල ලෙස අඩු කරයි.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Ensures the glass is completely wetted so that the contact angle θ is zero (cos θ = 1).',
              si: 'වීදුරුව සම්පූර්ණයෙන්ම තෙත් වන බව තහවුරු කර ස්පර්ශ කෝණය θ = 0 (cos θ = 1) බවට පත් කිරීම.',
            },
          },
        ],
        modelAnswer: {
          en: 'Any grease lowers surface tension and increases contact angle. Thorough cleaning ensures complete wetting (contact angle θ = 0).',
          si: 'තෙල් හෝ අපද්‍රව්‍ය නිසා පෘෂ්ඨික ආතතිය අඩු වන අතර ස්පර්ශ කෝණය වැඩිවේ. පිරිසිදු කිරීමෙන් වීදුරුව හොඳින් තෙත් වී θ = 0 වේ.',
        },
      },
      {
        id: 'mat-sq05-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Explain how the height h of the liquid column is accurately measured from the bottom of the meniscus to the free surface in the beaker using a travelling microscope and a reference pin.',
          si: 'චල අන්වීක්ෂය සහ සන්දර්භ ඉදිකටුවක් භාවිතයෙන් බීකරයේ නිදහස් පෘෂ්ඨයේ සිට මෙනිස්කසයේ පතුල දක්වා ජල කඳේ උස h නිවැරදිව මනින ආකාරය පහදන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'A sharp pointer / needle is attached to the outside of the tube with its tip just touching the water surface in the beaker.',
              si: 'තුඩ බීකරයේ ජල මතුපිට ස්පර්ශ වන සේ කේෂික නළයේ පිටතින් තියුණු ඉදිකටුවක් සවිකරනු ලැබේ.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Travelling microscope crosshairs are aligned with the bottom of the concave meniscus in the capillary tube (reading h1).',
              si: 'චල අන්වීක්ෂයේ හරස් කෙඳි කේෂික නළයේ අවතල මෙනිස්කසයේ පතුලට එල්ල කර පාඨාංකය (h1) ලබා ගනී.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Microscope is racked down to focus on the tip of the pointer (reading h2); then h = h1 - h2.',
              si: 'අන්වීක්ෂය පහත් කර ඉදිකටු තුඩට නාභිගත කර පාඨාංකය (h2) ගනී; උස h = h1 - h2 වේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'Pointer tip touches the water surface. Microscope reads bottom of meniscus (h1) and pointer tip (h2). Height h = h1 - h2.',
          si: 'ඉදිකටු තුඩ ජල පෘෂ්ඨය ස්පර්ශ කරයි. අන්වීක්ෂයෙන් මෙනිස්කස් පතුල (h1) සහ ඉදිකටු තුඩ (h2) කියවා h = h1 - h2 ලෙස ලබා ගනී.',
        },
      },
      {
        id: 'mat-sq05-p3',
        partLabel: '(c)',
        prompt: {
          en: 'In this experiment, water of density 1000 kg m^-3 rises to height 5.88 cm in a capillary tube of internal radius 0.25 mm. If contact angle θ = 0 and g = 9.8 m s^-2, calculate the surface tension of water including the meniscus correction.',
          si: 'මෙම පරීක්ෂණයේදී ඝනත්වය 1000 kg m^-3 වූ ජලය අභ්‍යන්තර අරය 0.25 mm වූ කේෂික නළයක 5.88 cm උසකට නගී. ස්පර්ශ කෝණය θ = 0 සහ g = 9.8 m s^-2 නම්, මෙනිස්කස් සංශෝධනයද සහිතව ජලයේ පෘෂ්ඨික ආතතිය ගණනය කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Effective height with meniscus correction h_eff = h + r/3 = 5.88 cm + (0.025 cm / 3) = 5.88 + 0.0083 = 5.8883 cm = 0.05888 m.',
              si: 'මෙනිස්කස් සංශෝධනය සහිත ඵලදායී උස h_eff = h + r/3 = 0.05888 m.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Surface tension formula: γ = (h_eff * r * ρ * g) / 2.',
              si: 'සමීකරණය: γ = (h_eff * r * ρ * g) / 2.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Calculation: γ = (0.05888 * 2.5 × 10^-4 * 1000 * 9.8) / 2 = 0.0721 N m^-1.',
              si: 'ගණනය: γ = (0.05888 * 2.5 × 10^-4 * 1000 * 9.8) / 2 = 0.0721 N m^-1.',
            },
          },
        ],
        modelAnswer: {
          en: 'h_eff = h + r/3 = 0.05888 m. γ = (0.05888 * 0.25e-3 * 1000 * 9.8) / 2 = 0.0721 N m^-1.',
          si: 'h_eff = h + r/3 = 0.05888 m. γ = (0.05888 * 0.25e-3 * 1000 * 9.8) / 2 = 0.0721 N m^-1.',
        },
      },
    ],
  },
  {
    id: 'mat-sq06',
    competencyRef: 'Competency 10.3',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'In Jaeger\'s method for measuring the surface tension of a liquid at different temperatures, air bubbles are slowly blown from the orifice of a vertical capillary tube dipped to a depth h in the liquid.',
      si: 'විවිධ උෂ්ණත්වවලදී ද්‍රවයක පෘෂ්ඨික ආතතිය මැනීමේ ජේගර්ගේ ක්‍රමයේදී, ද්‍රවය තුළ ගැඹුර h දක්වා ගිල්වන ලද සිරස් කේෂික නළයක විවරයෙන් වායු බුබුලු සෙමෙන් පිඹිනු ලැබේ.',
    },
    hint: {
      en: 'Maximum excess pressure inside hemispherical bubble of radius r at orifice is ΔP = 2γ/r. Total manometer pressure P = h_m ρ_m g = h ρ_l g + 2γ/r.',
      si: 'විවරයේ අරය r වූ අර්ධගෝලාකාර බුබුලක් තුළ උපරිම අතිරික්ත පීඩනය ΔP = 2γ/r වේ. මනෝමීටර පීඩනය = h ρ_l g + 2γ/r වේ.',
    },
    solution: {
      en: 'Bubble becomes hemispherical with minimum radius equal to tube radius r when pressure reaches maximum. From manometer head H and immersion depth h: H ρ_m g = h ρ_l g + 2γ/r.',
      si: 'පීඩනය උපරිම වන විට බුබුල නළයේ අරයට සමාන අවම අරයක් සහිත අර්ධගෝලයක් වේ. H ρ_m g = h ρ_l g + 2γ/r මගින් γ ලැබේ.',
    },
    parts: [
      {
        id: 'mat-sq06-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Why does the pressure inside the growing bubble reach a maximum when the bubble forms a hemisphere of radius equal to the radius of the capillary tube orifice?',
          si: 'වර්ධනය වන බුබුල කේෂික නළ විවරයේ අරයට සමාන අරයක් සහිත අර්ධගෝලයක් සෑදූ විට බුබුල තුළ පීඩනය උපරිම වන්නේ ඇයි?',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Excess pressure due to surface tension is ΔP = 2γ / R, where R is the radius of curvature.',
              si: 'පෘෂ්ඨික ආතතිය නිසා අතිරික්ත පීඩනය ΔP = 2γ / R වේ (R යනු වක්‍රතා අරයයි).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'As the bubble grows from a flat surface to a hemisphere, R decreases to a minimum value R = r (tube orifice radius), so ΔP is maximized. Beyond the hemisphere, R increases and the bubble bursts free.',
              si: 'පැතලි මතුපිට සිට අර්ධගෝලයක් දක්වා බුබුල වර්ධනය වීමේදී R අවම අගය R = r (නළ අරය) දක්වා අඩුවේ, එබැවින් ΔP උපරිම වේ. එයින් ඔබ්බට R වැඩි වී බුබුල ගැලවී යයි.',
            },
          },
        ],
        modelAnswer: {
          en: 'ΔP = 2γ/R. Radius of curvature R is at its minimum when the bubble is a hemisphere of radius r. Hence excess pressure is at its maximum.',
          si: 'ΔP = 2γ/R. බුබුල අර්ධගෝලයක් වන විට වක්‍රතා අරය R අවම වී r ට සමාන වේ, එබැවින් අතිරික්ත පීඩනය උපරිම වේ.',
        },
      },
      {
        id: 'mat-sq06-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Give two practical advantages of Jaeger\'s method compared to the capillary rise method.',
          si: 'කේෂික උද්ගමන ක්‍රමයට සාපේක්ෂව ජේගර්ගේ ක්‍රමයේ ප්‍රායෝගික වාසි දෙකක් දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Contact angle θ does not enter into the calculation (surface tension acts at dynamic liquid-air boundary).',
              si: 'ගණනය කිරීම සඳහා ස්පර්ශ කෝණය θ ඇතුළත් නොවීම.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Surface tension can be measured at various controlled temperatures using a heated water bath, and opaque or coloured liquids can be tested.',
              si: 'උෂ්ණත්වය වෙනස් කරමින් පරීක්ෂා කළ හැකි වීම සහ පාරාන්ධ ද්‍රව සඳහාද භාවිත කළ හැකි වීම.',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Independent of contact angle θ; (2) Easily allows variation of temperature in a water bath.',
          si: '(1) ස්පර්ශ කෝණය මත රඳා නොපැවතීම; (2) උෂ්ණත්වය වෙනස් කරමින් පරීක්ෂණ පහසුවෙන් කළ හැකි වීම.',
        },
      },
      {
        id: 'mat-sq06-p3',
        partLabel: '(c)',
        prompt: {
          en: 'In Jaeger\'s apparatus, the capillary tube of orifice radius 0.20 mm is dipped to depth 4.0 cm in liquid of density 800 kg m^-3. The manometer liquid (density 1000 kg m^-3) indicates maximum head difference H = 9.0 cm. Calculate the surface tension γ of the liquid. (g = 9.8 m s^-2).',
          si: 'ජේගර්ගේ උපකරණයේ, විවර අරය 0.20 mm වූ කේෂික නළය ඝනත්වය 800 kg m^-3 වූ ද්‍රවයක 4.0 cm ගැඹුරට ගිල්වා ඇත. මනෝමීටර ද්‍රවය (ඝනත්වය 1000 kg m^-3) උපරිම උස වෙනස H = 9.0 cm දක්වයි. ද්‍රවයේ පෘෂ්ඨික ආතතිය γ ගණනය කරන්න. (g = 9.8 m s^-2).',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Manometer pressure: P_m = H * ρ_m * g = 0.090 * 1000 * 9.8 = 882 Pa.',
              si: 'මනෝමීටර පීඩනය: P_m = 0.090 * 1000 * 9.8 = 882 Pa.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Liquid hydrostatic pressure: P_h = h * ρ_l * g = 0.040 * 800 * 9.8 = 313.6 Pa.',
              si: 'ද්‍රව පීඩනය: P_h = 0.040 * 800 * 9.8 = 313.6 Pa.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Excess pressure ΔP = P_m - P_h = 882 - 313.6 = 568.4 Pa.',
              si: 'අතිරික්ත පීඩනය ΔP = 882 - 313.6 = 568.4 Pa.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Surface tension: γ = (ΔP * r) / 2 = (568.4 * 0.20 × 10^-3) / 2 = 0.0568 N m^-1.',
              si: 'පෘෂ්ඨික ආතතිය: γ = (ΔP * r) / 2 = 0.0568 N m^-1.',
            },
          },
        ],
        modelAnswer: {
          en: 'ΔP = (0.09*1000*9.8) - (0.04*800*9.8) = 882 - 313.6 = 568.4 Pa. γ = (568.4 * 0.2e-3) / 2 = 0.0568 N m^-1.',
          si: 'ΔP = 882 - 313.6 = 568.4 Pa. γ = (568.4 * 0.2e-3) / 2 = 0.0568 N m^-1.',
        },
      },
    ],
  },
  {
    id: 'mat-sq07',
    competencyRef: 'Competency 10.3',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'structured',
    question: {
      en: 'A microscope glass slide of length 7.5 cm and negligible thickness is suspended horizontally from one arm of a sensitive beam balance so that its lower edge just touches the surface of water.',
      si: 'දිග 7.5 cm සහ නොසැලකිය හැකි ඝනකමකින් යුත් අන්වීක්ෂ වීදුරු කදාවක් සංවේදී තුලාවක එක් බාහුවකින් තිරස්ව එල්ලා එහි පහළ දාරය ජල පෘෂ්ඨය ස්පර්ශ වන සේ තබා ඇත.',
    },
    hint: {
      en: 'Two liquid films act on the two long faces of the slide: downward surface tension force F = 2 * l * γ.',
      si: 'කදාවේ දෙපස දිගු මුහුණත් දෙක මත පෘෂ්ඨික ආතති බල ක්‍රියා කරයි: F = 2 * l * γ.',
    },
    solution: {
      en: 'Water wets the glass slide (contact angle zero). When detaching, extra downward force is 2 l γ. Additional mass m in pan satisfies m g = 2 l γ.',
      si: 'කදාව මුදා හැරීමට යෙදිය යුතු අමතර බලය m g = 2 l γ වේ.',
    },
    parts: [
      {
        id: 'mat-sq07-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Explain why the factor "2" appears in the downward surface tension force equation F = 2 * l * γ on the microscope slide.',
          si: 'අන්වීක්ෂ කදාව මත පහළට ක්‍රියාකරන පෘෂ්ඨික ආතති බල සමීකරණයේ F = 2 * l * γ සාධකය "2" ඇතිවීමට හේතුව පහදන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'The slide has two long opposing vertical surfaces (front face and back face) in contact with the liquid.',
              si: 'කදාවේ ඉදිරිපස සහ පසුපස යන දිගු මුහුණත් දෙකම ද්‍රවය හා ස්පර්ශව පවතී.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Surface tension acts along both contact boundary lines, each of length l, giving total contact length 2l.',
              si: 'දිග l වූ මායිම් රේඛා දෙකක් ඔස්සේ පෘෂ්ඨික ආතතිය ක්‍රියා කරන බැවින් මුළු ස්පර්ශ දිග 2l වේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'The slide has two distinct liquid-air contact lines (one along the front face, one along the back face), each of length l.',
          si: 'කදාවේ ඉදිරිපස සහ පසුපස මුහුණත් දෙක ඔස්සේම දිග l බැගින් වූ ද්‍රව පටල දෙකක් ක්‍රියා කරයි.',
        },
      },
      {
        id: 'mat-sq07-p2',
        partLabel: '(b)',
        prompt: {
          en: 'If an additional balancing mass of 1.11 g in the counterweight pan is required to detach the slide from water, calculate the surface tension of water in N m^-1. (Take g = 9.8 m s^-2, length l = 7.5 cm).',
          si: 'කදාව ජලයෙන් මුදා ගැනීමට තුලා තැටියට 1.11 g ක අමතර ස්කන්ධයක් එක් කිරීමට අවශ්‍ය නම්, ජලයේ පෘෂ්ඨික ආතතිය N m^-1 වලින් ගණනය කරන්න. (g = 9.8 m s^-2, දිග l = 7.5 cm).',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Formula: m * g = 2 * l * γ => γ = (m * g) / (2 * l).',
              si: 'සමීකරණය: m * g = 2 * l * γ => γ = (m * g) / (2 * l).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Substitution: m = 1.11 × 10^-3 kg, l = 0.075 m, g = 9.8 m s^-2.',
              si: 'ආදේශය: m = 1.11 × 10^-3 kg, l = 0.075 m, g = 9.8 m s^-2.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: γ = (1.11 × 10^-3 * 9.8) / (2 * 0.075) = 0.0725 N m^-1.',
              si: 'ප්‍රතිඵලය: γ = 0.0725 N m^-1.',
            },
          },
        ],
        modelAnswer: {
          en: 'γ = (1.11 × 10^-3 * 9.8) / (2 * 0.075) = 0.010878 / 0.150 = 0.0725 N m^-1.',
          si: 'γ = (1.11 × 10^-3 * 9.8) / (2 * 0.075) = 0.0725 N m^-1.',
        },
      },
      {
        id: 'mat-sq07-p3',
        partLabel: '(c)',
        prompt: {
          en: 'State what adjustment must be made if the glass slide has a significant finite thickness t.',
          si: 'වීදුරු කදාව සැලකිය යුතු ඝනකමක් t සහිත එකක් නම් කළ යුතු ගැලපීම කුමක්දැයි දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 3,
            description: {
              en: 'The perimeter of contact becomes 2(l + t); hence the equation must be modified to m * g = 2(l + t) * γ.',
              si: 'ස්පර්ශ පරිමිතිය 2(l + t) බවට පත්වන බැවින් සමීකරණය m * g = 2(l + t) * γ ලෙස වෙනස් කළ යුතුය.',
            },
          },
        ],
        modelAnswer: {
          en: 'Total perimeter of contact is 2(l + t), so γ = (m * g) / [2(l + t)].',
          si: 'මුළු ස්පර්ශ පරිමිතිය 2(l + t) වන බැවින් γ = (m * g) / [2(l + t)] වේ.',
        },
      },
    ],
  },
  {
    id: 'mat-sq08',
    competencyRef: 'Competency 10.1',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'structured',
    question: {
      en: 'A vertical steel wire of length 3.0 m and cross-sectional area 2.0 mm^2 is fixed rigidly at its upper end. A mass of 10.0 kg is gently attached to its free lower end.',
      si: 'දිග 3.0 m සහ හරස්කඩ වර්ගඵලය 2.0 mm^2 වූ සිරස් වානේ කම්බියක් එහි ඉහළ කෙළවරින් දෘඪව සවිකර ඇත. එහි පහළ කෙළවරට 10.0 kg ක ස්කන්ධයක් සෙමෙන් එල්ලනු ලැබේ.',
    },
    hint: {
      en: 'Young modulus of steel = 2.0 × 10^11 Pa. Use Hooke\'s law e = (F L) / (A Y) and energy U = 1/2 F e.',
      si: 'වානේවල යං මාපාංකය = 2.0 × 10^11 Pa. e = (F L) / (A Y) සහ U = 1/2 F e භාවිත කරන්න.',
    },
    solution: {
      en: 'Weight F = m g = 98 N. Extension e = (98 * 3.0) / (2.0 × 10^-6 * 2.0 × 10^11) = 0.735 mm. Elastic strain energy U = 1/2 * 98 * 7.35 × 10^-4 = 0.036 J.',
      si: 'බර = 98 N. විස්තාරණය e = 0.735 mm. ප්‍රත්‍යාස්ථ වික්‍රියා ශක්තිය U = 0.036 J වේ.',
    },
    parts: [
      {
        id: 'mat-sq08-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Calculate the tensile stress and the resulting elongation (extension) of the wire. (Take Young modulus Y = 2.0 × 10^11 Pa, g = 9.8 m s^-2).',
          si: 'කම්බියේ ආතන්ය ප්‍රත්‍යබලය සහ විස්තාරණය ගණනය කරන්න. (යං මාපාංකය Y = 2.0 × 10^11 Pa, g = 9.8 m s^-2).',
        },
        allocatedMarks: 5,
        rubric: [
          {
            point: 2.5,
            description: {
              en: 'Tensile stress = F / A = (10.0 * 9.8) / (2.0 × 10^-6) = 4.90 × 10^7 N m^-2 (Pa).',
              si: 'ප්‍රත්‍යබලය = F / A = (10.0 * 9.8) / (2.0 × 10^-6) = 4.90 × 10^7 Pa.',
            },
          },
          {
            point: 2.5,
            description: {
              en: 'Extension e = (Stress * L) / Y = (4.90 × 10^7 * 3.0) / (2.0 × 10^11) = 7.35 × 10^-4 m (0.735 mm).',
              si: 'විස්තාරණය e = (ප්‍රත්‍යබලය * L) / Y = 7.35 × 10^-4 m (0.735 mm).',
            },
          },
        ],
        modelAnswer: {
          en: 'Stress = 98 / 2e-6 = 4.9 × 10^7 Pa. Extension e = (4.9e7 * 3.0) / (2.0e11) = 7.35 × 10^-4 m = 0.735 mm.',
          si: 'ප්‍රත්‍යබලය = 4.9 × 10^7 Pa. විස්තාරණය e = 7.35 × 10^-4 m (0.735 mm).',
        },
      },
      {
        id: 'mat-sq08-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Calculate the loss in gravitational potential energy of the hanging mass and the strain energy stored in the stretched wire. Explain why these two values are not equal.',
          si: 'එල්ලෙන ස්කන්ධයේ ගුරුත්වාකර්ෂණ විභව ශක්ති හානිය සහ කම්බියේ ගබඩා වන වික්‍රියා ශක්තිය ගණනය කරන්න. මෙම අගයන් දෙක සමාන නොවීමට හේතුව පහදන්න.',
        },
        allocatedMarks: 5,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Loss in GPE = m * g * e = 10.0 * 9.8 * 7.35 × 10^-4 = 0.0720 J.',
              si: 'ගුරුත්වාකර්ෂණ විභව ශක්ති හානිය = m * g * e = 0.0720 J.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Strain energy stored U = 1/2 * F * e = 0.5 * 98 * 7.35 × 10^-4 = 0.0360 J.',
              si: 'ගබඩා වන වික්‍රියා ශක්තිය U = 1/2 * F * e = 0.0360 J.',
            },
          },
          {
            point: 2,
            description: {
              en: 'The remaining 50% of the lost potential energy (0.0360 J) is converted into internal thermal energy (heat) dissipated during the stretching process.',
              si: 'අහිමි වූ විභව ශක්තියෙන් ඉතිරි 50% (0.0360 J) කම්බිය ඇදීමේදී අභ්‍යන්තර තාප ශක්තිය බවට පත්ව පරිසරයට හානි වේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'Loss in GPE = m g e = 0.072 J. Elastic energy U = 1/2 m g e = 0.036 J. Half the lost GPE is dissipated as heat in the wire.',
          si: 'විභව ශක්ති හානිය = 0.072 J. වික්‍රියා ශක්තිය = 0.036 J. අහිමි වූ විභව ශක්තියෙන් අඩක් තාපය ලෙස විමෝචනය වේ.',
        },
      },
    ],
  },
  {
    id: 'mat-sq09',
    competencyRef: 'Competency 10.2',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'structured',
    question: {
      en: 'A cylindrical pipe carries liquid of density ρ and viscosity η. Fluid dynamicists use the Reynolds number (Re) to predict the transition from laminar to turbulent flow.',
      si: 'සිලින්ඩරාකාර නළයකින් ඝනත්වය ρ සහ දුස්ස්‍රාවිතාව η වූ ද්‍රවයක් ගලා යයි. තරල ගතික විද්‍යාඥයින් ලැමිනාර් ප්‍රවාහයේ සිට කැළඹිලි ප්‍රවාහය දක්වා සංක්‍රාන්තිය පුරෝකථනය කිරීමට රෙනෝල්ඩ්ස් අංකය (Re) භාවිත කරයි.',
    },
    hint: {
      en: 'Reynolds number Re = (ρ * v * D) / η. In pipes, Re < 2000 is laminar; Re > 3000 is turbulent.',
      si: 'රෙනෝල්ඩ්ස් අංකය Re = (ρ * v * D) / η. නළ තුළ Re < 2000 නම් ලැමිනාර්; Re > 3000 නම් කැළඹිලි සහිතය.',
    },
    solution: {
      en: 'Re is a dimensionless quantity representing the ratio of inertial forces to viscous forces. Critical velocity is the maximum velocity for laminar flow.',
      si: 'Re යනු නිෂ්ක්‍රීය බල සහ දුස්ස්‍රාවී බල අතර අනුපාතය නිරූපණය කරන මාන රහිත රාශියකි. විවේචක ප්‍රවේගය යනු ලැමිනාර් ප්‍රවාහය පැවතිය හැකි උපරිම ප්‍රවේගයයි.',
    },
    parts: [
      {
        id: 'mat-sq09-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Define "streamline flow" and "turbulent flow", and state what physical ratio is represented by the Reynolds number.',
          si: '"ධාරාරේඛී ප්‍රවාහය" සහ "කැළඹිලි ප්‍රවාහය" අර්ථ දක්වා, රෙනෝල්ඩ්ස් අංකයෙන් නිරූපණය වන භෞතික අනුපාතය කුමක්දැයි දක්වන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Streamline (laminar) flow: every fluid particle passing a particular point follows the same steady trajectory as previous particles without mixing of layers.',
              si: 'ධාරාරේඛී ප්‍රවාහය: යම් ලක්ෂ්‍යයක් පසුකර යන සෑම තරල අංශුවක්ම ඊට පෙර අංශුව ගමන් කළ මාර්ගය ඔස්සේම ස්ථර මිශ්‍ර නොවී ගමන් කරයි.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Turbulent flow: fluid particles follow chaotic, irregular, unsteady paths with formation of eddies and vortices.',
              si: 'කැළඹිලි ප්‍රවාහය: අංශු අවුල් සහගත, අක්‍රමවත් ලෙස සුළි සාදමින් ගමන් කරයි.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Reynolds number represents the ratio of inertial forces to viscous shear forces.',
              si: 'රෙනෝල්ඩ්ස් අංකය මගින් නිෂ්ක්‍රීය බල සහ දුස්ස්‍රාවී බල අතර අනුපාතය නිරූපණය කරයි.',
            },
          },
        ],
        modelAnswer: {
          en: 'Streamline: parallel smooth fluid layers with constant velocity at each point. Turbulent: chaotic motion with eddies. Re = Inertial forces / Viscous forces.',
          si: 'ධාරාරේඛී: ස්ථර එකිනෙක ලිස්සා යන සුමට ප්‍රවාහයකි. කැළඹිලි: සුළි සහිත අවුල් සහගත ප්‍රවාහයකි. Re = නිෂ්ක්‍රීය බල / දුස්ස්‍රාවී බල.',
        },
      },
      {
        id: 'mat-sq09-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Water of density 1000 kg m^-3 and viscosity 1.0 × 10^-3 Pa s flows through a pipe of diameter 2.0 cm. If the critical Reynolds number for turbulent transition is 2000, calculate the critical velocity v_c.',
          si: 'ඝනත්වය 1000 kg m^-3 සහ දුස්ස්‍රාවිතාව 1.0 × 10^-3 Pa s වූ ජලය විෂ්කම්භය 2.0 cm වූ නළයක් තුළින් ගලා යයි. කැළඹිලි සංක්‍රාන්තිය සඳහා විවේචක රෙනෝල්ඩ්ස් අංකය 2000 නම්, විවේචක ප්‍රවේගය v_c ගණනය කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Formula: Re = (ρ * v * D) / η => v_c = (Re_c * η) / (ρ * D).',
              si: 'සමීකරණය: v_c = (Re_c * η) / (ρ * D).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Substitution: D = 0.020 m, ρ = 1000, η = 1.0 × 10^-3, Re_c = 2000.',
              si: 'ආදේශය: D = 0.020 m, ρ = 1000, η = 1.0 × 10^-3, Re_c = 2000.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: v_c = (2000 * 1.0 × 10^-3) / (1000 * 0.020) = 0.10 m s^-1 (10 cm s^-1).',
              si: 'ප්‍රතිඵලය: v_c = 0.10 m s^-1 (10 cm s^-1).',
            },
          },
        ],
        modelAnswer: {
          en: 'v_c = (2000 * 1.0e-3) / (1000 * 0.02) = 0.10 m s^-1.',
          si: 'v_c = (2000 * 1.0e-3) / (1000 * 0.02) = 0.10 m s^-1.',
        },
      },
    ],
  },
  {
    id: 'mat-sq10',
    competencyRef: 'Competency 10.3',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'structured',
    question: {
      en: 'Curved liquid surfaces develop excess pressure due to surface tension. Consider a spherical liquid droplet of radius R and a spherical soap bubble in air of radius R.',
      si: 'පෘෂ්ඨික ආතතිය නිසා වක්‍ර ද්‍රව පෘෂ්ඨ තුළ අතිරික්ත පීඩනයක් හටගනී. අරය R වූ ගෝලාකාර ද්‍රව බිඳක් සහ අරය R වූ වාතයේ පවතින සබන් බුබුලක් සලකන්න.',
    },
    hint: {
      en: 'Droplet has one liquid-air interface: ΔP = 2γ / R. Soap bubble has two liquid-air surfaces (inner and outer): ΔP = 4γ / R.',
      si: 'ද්‍රව බිඳකට ඇත්තේ එක් අතුරු මුහුණතකි: ΔP = 2γ / R. සබන් බුබුලකට අභ්‍යන්තර හා බාහිර ලෙස පෘෂ්ඨ දෙකක් ඇත: ΔP = 4γ / R.',
    },
    solution: {
      en: 'Using virtual work principle: work done against surface tension dW = γ dA. For droplet dA = 8πR dR, dW = ΔP * 4πR^2 dR => ΔP = 2γ/R. For soap bubble with 2 surfaces, ΔP = 4γ/R.',
      si: 'ද්‍රව බිඳකට ΔP = 2γ/R ද, පෘෂ්ඨ දෙකක් සහිත සබන් බුබුලකට ΔP = 4γ/R ද වේ.',
    },
    parts: [
      {
        id: 'mat-sq10-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Derive the expression for the excess pressure ΔP inside a spherical liquid droplet of radius R and surface tension γ using the principle of virtual work.',
          si: 'අතථ්‍ය කාර්ය මූලධර්මය භාවිතයෙන් අරය R සහ පෘෂ්ඨික ආතතිය γ වූ ගෝලාකාර ද්‍රව බිඳක් තුළ අතිරික්ත පීඩනය ΔP සඳහා ප්‍රකාශනයක් ව්‍යුත්පන්න කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Work done by excess pressure expanding droplet by dR: dW = Force * dR = (ΔP * 4πR^2) * dR.',
              si: 'dR ප්‍රමාණයකින් ප්‍රසාරණය වීමේදී අතිරික්ත පීඩනය කළ කාර්යය: dW = (ΔP * 4πR^2) * dR.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Increase in surface area dA = 4π(R + dR)^2 - 4πR^2 ≈ 8πR dR; increase in surface energy dU = γ * dA = 8πγR dR.',
              si: 'වර්ගඵල වැඩිවීම dA = 8πR dR; පෘෂ්ඨික ශක්ති වැඩිවීම dU = 8πγR dR.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Equating work to energy increase: (ΔP * 4πR^2) dR = 8πγR dR => ΔP = 2γ / R.',
              si: 'කාර්යය සහ ශක්තිය තුලනය කිරීමෙන්: ΔP = 2γ / R ලැබේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'dW = ΔP * 4πR^2 dR. Surface area change dA = 8πR dR. Energy change dU = γ * 8πR dR. Equating dW = dU gives ΔP = 2γ/R.',
          si: 'dW = ΔP * 4πR^2 dR. dA = 8πR dR. dU = 8πγR dR. dW = dU බැවින් ΔP = 2γ/R.',
        },
      },
      {
        id: 'mat-sq10-p2',
        partLabel: '(b)',
        prompt: {
          en: 'State why the excess pressure inside a hollow soap bubble in air is twice that inside a liquid droplet of the same radius.',
          si: 'එකම අරයක් සහිත ද්‍රව බිඳකට වඩා වාතයේ ඇති කුහර සබන් බුබුලක් තුළ අතිරික්ත පීඩනය දෙගුණයක් වීමට හේතුව දක්වන්න.',
        },
        allocatedMarks: 2,
        rubric: [
          {
            point: 2,
            description: {
              en: 'A soap bubble has two free liquid-air interfaces (an inner surface and an outer surface), each contributing 2γ/R, making total excess pressure ΔP = 4γ/R.',
              si: 'සබන් බුබුලකට අභ්‍යන්තර සහ බාහිර ලෙස නිදහස් ද්‍රව-වායු පෘෂ්ඨ දෙකක් ඇති අතර, ඒ සෑම එකක්ම 2γ/R බැගින් දායක වී මුළු අතිරික්ත පීඩනය 4γ/R වේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'A soap bubble has two liquid-air interfaces (inner and outer), requiring twice the work to expand, hence ΔP = 4γ/R.',
          si: 'සබන් බුබුලට අභ්‍යන්තර හා බාහිර ලෙස නිදහස් පෘෂ්ඨ 2ක් ඇති බැවින් අතිරික්ත පීඩනය දෙගුණයක් (4γ/R) වේ.',
        },
      },
      {
        id: 'mat-sq10-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Two soap bubbles of radii 2.0 cm and 4.0 cm in air are connected by a narrow tube with a closed tap. State which bubble will shrink when the tap is opened, and calculate the radius of curvature of the common film formed if they coalesce.',
          si: 'වාතයේ ඇති අරය 2.0 cm සහ 4.0 cm වූ සබන් බුබුලු දෙකක් වසා ඇති කරාමයක් සහිත සිහින් නළයකින් සම්බන්ධ කර ඇත. කරාමය විවෘත කළ විට හැකිලෙන්නේ කුමන බුබුලදැයි දක්වා, ඒවා එකිනෙක ස්පර්ශ වී සාදන පොදු පටලයේ වක්‍රතා අරය ගණනය කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Smaller bubble has higher excess pressure (ΔP ∝ 1/R), so air flows from smaller bubble to larger bubble; the smaller bubble shrinks and the larger bubble expands.',
              si: 'කුඩා බුබුල තුළ අතිරික්ත පීඩනය වැඩි බැවින් (ΔP ∝ 1/R) කුඩා බුබුල තවදුරටත් හැකිලී විශාල බුබුල තවත් විශාල වේ.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Radius of common interface r satisfies: 1/r = 1/R1 - 1/R2 = 1/2.0 - 1/4.0 = 1/4.0 cm^-1.',
              si: 'පොදු පටලයේ අරය r: 1/r = 1/R1 - 1/R2 = 1/2.0 - 1/4.0 = 1/4.0 cm^-1.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: r = 4.0 cm, convex towards the smaller bubble.',
              si: 'ප්‍රතිඵලය: r = 4.0 cm, කුඩා බුබුල දෙසට උත්තලව.',
            },
          },
        ],
        modelAnswer: {
          en: 'Smaller bubble (2 cm) has higher pressure, so it shrinks. Common interface curvature 1/r = 1/2 - 1/4 = 1/4 => r = 4.0 cm.',
          si: 'කුඩා බුබුලේ පීඩනය වැඩි බැවින් එය හැකිලේ. පොදු පටලයේ අරය 1/r = 1/2 - 1/4 = 1/4 => r = 4.0 cm වේ.',
        },
      },
    ],
  },
];
