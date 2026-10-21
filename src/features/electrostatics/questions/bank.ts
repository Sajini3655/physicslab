import { ElectrostaticsQuestion } from './types';

export const ELECTROSTATICS_QUESTIONS: ElectrostaticsQuestion[] = [
  // =========================================================================
  // Competency 6.1: Coulomb's Law & Electric Field Intensity (13 Questions)
  // =========================================================================
  {
    id: 'elec-6-1-01',
    competencyRef: 'Competency 6.1',
    category: 'coulomb-law',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the SI units of the permittivity of free space ε₀?',
      si: 'රික්තයේ පාරගම්‍යතාව ε₀ හි SI ඒකක කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'C² N⁻¹ m⁻² (or F m⁻¹)', si: 'C² N⁻¹ m⁻² (හෝ F m⁻¹)' } },
      { id: 'b', text: { en: 'N m² C⁻²', si: 'N m² C⁻²' } },
      { id: 'c', text: { en: 'C m N⁻¹', si: 'C m N⁻¹' } },
      { id: 'd', text: { en: 'N C⁻¹ m²', si: 'N C⁻¹ m²' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'From Coulomb’s law: F = (1 / 4πε₀) (q₁q₂ / r²), solve for ε₀.',
      si: 'කූලෝම් නියමයෙන්: F = (1 / 4πε₀) (q₁q₂ / r²), ε₀ උක්ත කරන්න.',
    },
    solution: {
      en: 'ε₀ = q₁ q₂ / (4π F r²). Units: C² / (N m²) = C² N⁻¹ m⁻². In capacitance units C = ε₀ A / d, ε₀ = C d / A = F · m / m² = F m⁻¹.',
      si: 'ε₀ = q₁ q₂ / (4π F r²). ඒකක: C² / (N m²) = C² N⁻¹ m⁻². ධාරිතාව ඇසුරෙන්: C = ε₀ A / d => ε₀ = F m⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-1-02',
    competencyRef: 'Competency 6.1',
    category: 'coulomb-law',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Two point charges placed in vacuum attract each other with force F. When placed at the same distance in a liquid medium of relative permittivity εᵣ = 5.0, what is the new electrostatic force?',
      si: 'රික්තයක තබා ඇති ලක්ෂ්‍යමය ආරෝපණ දෙකක් අතර ආකර්ෂණ බලය F වේ. සාපේක්ෂ පාරගම්‍යතාව εᵣ = 5.0 වූ ද්‍රව මාධ්‍යයක එම දුරින්ම තැබූ විට නව ස්ථිති විද්‍යුත් බලය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: '5 F', si: '5 F' } },
      { id: 'b', text: { en: 'F / 5', si: 'F / 5' } },
      { id: 'c', text: { en: '25 F', si: '25 F' } },
      { id: 'd', text: { en: 'F / 25', si: 'F / 25' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'F_medium = F_vacuum / εᵣ.',
      si: 'F_medium = F_vacuum / εᵣ.',
    },
    solution: {
      en: 'In a dielectric medium, Coulomb’s force is reduced by the factor εᵣ: F_med = F_vac / εᵣ = F / 5.',
      si: 'පාරවිද්‍යුත් මාධ්‍යයකදී කූලෝම් බලය εᵣ ගුණයකින් අඩු වේ: F_med = F_vac / εᵣ = F / 5 වේ.',
    },
  },
  {
    id: 'elec-6-1-03',
    competencyRef: 'Competency 6.1',
    category: 'coulomb-law',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the electrostatic repulsive force in Newtons between two point charges of +2.0 μC and +5.0 μC separated by 30.0 cm in vacuum. Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².',
      si: 'රික්තයේ 30.0 cm පරතරයකින් පිහිටි +2.0 μC සහ +5.0 μC ලක්ෂ්‍යමය ආරෝපණ දෙකක් අතර ස්ථිති විද්‍යුත් විකර්ෂණ බලය නිව්ටන් වලින් ගණනය කරන්න. 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻² ලෙස ගන්න.',
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'F = k |q₁ q₂| / r². Convert μC to C (10⁻⁶) and cm to m (0.30 m).',
      si: 'F = k |q₁ q₂| / r². μC අගය C (10⁻⁶) සහ cm අගය m (0.30 m) බවට හරවන්න.',
    },
    solution: {
      en: 'F = (8.99 × 10⁹ × 2.0 × 10⁻⁶ × 5.0 × 10⁻⁶) / (0.30)² = (8.99 × 10⁻² × 10) / 0.09 = 0.0899 / 0.09 ≈ 1.00 N.',
      si: 'F = (8.99 × 10⁹ × 2.0 × 10⁻⁶ × 5.0 × 10⁻⁶) / (0.30)² = 0.0899 / 0.09 ≈ 1.00 N වේ.',
    },
  },
  {
    id: 'elec-6-1-04',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How is the electric field intensity E at a point in an electric field formally defined?',
      si: 'විද්‍යුත් ක්ෂේත්‍රයක ලක්ෂ්‍යයක විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E විධිමත්ව අර්ථ දක්වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'The work done in bringing a unit positive charge from infinity to that point', si: 'අනන්තයේ සිට එම ලක්ෂ්‍යයට ඒකක ධන ආරෝපණයක් ගෙන ඒමේදී කළ යුතු කාර්යය' } },
      { id: 'b', text: { en: 'The electrostatic force experienced per unit positive test charge placed at that point', si: 'එම ලක්ෂ්‍යයේ තබන ලද ඒකක ධන පරීක්ෂා ආරෝපණයක් මත ක්‍රියා කරන ස්ථිති විද්‍යුත් බලය' } },
      { id: 'c', text: { en: 'The total charge enclosed by a Gaussian surface around that point', si: 'එම ලක්ෂ්‍යය වටා වූ ගවුසීය පෘෂ්ඨයක් තුළ ඇති මුළු ආරෝපණය' } },
      { id: 'd', text: { en: 'The potential energy of an electron at that point', si: 'එම ලක්ෂ්‍යයේදී ඉලෙක්ට්‍රෝනයක විභව ශක්තිය' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Electric field strength is force per unit charge: E = F / q₀.',
      si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව යනු ඒකක ආරෝපණයක් මත බලයයි: E = F / q₀.',
    },
    solution: {
      en: 'Electric field strength E at a point is defined as the force experienced per unit positive test charge placed at that point (E = F/q₀). It is a vector pointing in the direction of the force on a positive test charge.',
      si: 'විද්‍යුත් ක්ෂේත්‍රයක ලක්ෂ්‍යයක ක්ෂේත්‍ර තීව්‍රතාව E යනු එම ලක්ෂ්‍යයේ තබන ලද ඒකක ධන පරීක්ෂා ආරෝපණයක් මත ක්‍රියා කරන බලයයි (E = F/q₀). එය දෛශික රාශියකි.',
    },
  },
  {
    id: 'elec-6-1-05',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the magnitude of the electric field in kN C⁻¹ (or kV m⁻¹) at a distance of 50 cm from a point charge of +4.0 μC in vacuum. Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².',
      si: 'රික්තයේ +4.0 μC ලක්ෂ්‍යමය ආරෝපණයක සිට 50 cm දුරකදී විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව kN C⁻¹ (හෝ kV m⁻¹) වලින් ගණනය කරන්න. 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻² ලෙස ගන්න.',
    },
    expected: 143.8,
    tolerance: 3.0,
    unit: { en: 'kN C⁻¹', si: 'kN C⁻¹' },
    hint: {
      en: 'E = k Q / r². 50 cm = 0.50 m. 1 kN C⁻¹ = 10³ N C⁻¹.',
      si: 'E = k Q / r². 50 cm = 0.50 m. 1 kN C⁻¹ = 10³ N C⁻¹ වේ.',
    },
    solution: {
      en: 'E = (8.99 × 10⁹ × 4.0 × 10⁻⁶) / (0.50)² = (35.96 × 10³) / 0.25 = 143.84 × 10³ N C⁻¹ = 143.8 kN C⁻¹.',
      si: 'E = (8.99 × 10⁹ × 4.0 × 10⁻⁶) / (0.50)² = 35,960 / 0.25 = 143,840 N C⁻¹ = 143.8 kN C⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-1-06',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which statement regarding electric field lines is INCORRECT?',
      si: 'විද්‍යුත් ක්ෂේත්‍ර රේඛා පිළිබඳ පහත ප්‍රකාශන අතුරින් වැරදි ප්‍රකාශය කවරක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'They originate from positive charges and terminate on negative charges', si: 'ඒවා ධන ආරෝපණ වලින් ආරම්භ වී ඍණ ආරෝපණ වලින් අවසන් වේ' } },
      { id: 'b', text: { en: 'The tangent to a field line at any point indicates the direction of electric field at that point', si: 'ඕනෑම ලක්ෂ්‍යයකදී ක්ෂේත්‍ර රේඛාවට අඳින ලද ස්පර්ශකය මගින් එම ලක්ෂ්‍යයේ ක්ෂේත්‍ර දිශාව දැක්වේ' } },
      { id: 'c', text: { en: 'Field lines can cross each other where the electric field is exceptionally strong', si: 'විද්‍යුත් ක්ෂේත්‍රය අතිශයින් ප්‍රබල වන තැන්වලදී ක්ෂේත්‍ර රේඛා එකිනෙක ඡේදනය විය හැක' } },
      { id: 'd', text: { en: 'Field lines are always normal to the surface of a charged conductor in electrostatic equilibrium', si: 'ස්ථිති විද්‍යුත් සමතුලිතතාවයේ පවතින සන්නායක පෘෂ්ඨයකට ක්ෂේත්‍ර රේඛා සැමවිටම අභිලම්භ වේ' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'If field lines crossed, what would that imply about the direction of the field at the intersection?',
      si: 'ක්ෂේත්‍ර රේඛා ඡේදනය වුවහොත් ඡේදන ලක්ෂ්‍යයේ ක්ෂේත්‍ර දිශාව පිළිබඳ කුමක් ඇඟවේද?',
    },
    solution: {
      en: 'Field lines can NEVER cross each other, because if they did, the electric field would have two different directions at the point of intersection, which is physically impossible.',
      si: 'විද්‍යුත් ක්ෂේත්‍ර රේඛා කිසිවිටෙකත් එකිනෙක ඡේදනය නොවේ. එසේ වුවහොත් ඡේදන ලක්ෂ්‍යයේදී ක්ෂේත්‍රයට දිශාවන් දෙකක් පැවතිය යුතු වන අතර එය භෞතිකව නොහැකිය.',
    },
  },
  {
    id: 'elec-6-1-07',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two point charges +Q and +4Q are separated by distance d in air. At what distance from +Q along the line joining them is the net electric field zero (neutral point)?',
      si: 'වාතයේ d දුරකින් +Q සහ +4Q ලක්ෂ්‍යමය ආරෝපණ දෙකක් පිහිටා ඇත. ඒවා යා කරන රේඛාව මත +Q සිට කුමන දුරකදී ශුද්ධ විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය (උදාසීන ලක්ෂ්‍යය) වේද?',
    },
    options: [
      { id: 'a', text: { en: 'd / 5', si: 'd / 5' } },
      { id: 'b', text: { en: 'd / 3', si: 'd / 3' } },
      { id: 'c', text: { en: 'd / 2', si: 'd / 2' } },
      { id: 'd', text: { en: '2d / 3', si: '2d / 3' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'k Q / x² = k (4Q) / (d - x)². Take square root.',
      si: 'k Q / x² = k (4Q) / (d - x)². දෙපසම වර්ගමූලය ගන්න.',
    },
    solution: {
      en: 'E₁ = E₂ => kQ/x² = 4kQ/(d - x)² => 1/x = 2/(d - x) => d - x = 2x => 3x = d => x = d/3 from +Q.',
      si: 'E₁ = E₂ => kQ/x² = 4kQ/(d - x)² => 1/x = 2/(d - x) => d - x = 2x => 3x = d => x = d/3 (+Q සිට).',
    },
  },
  {
    id: 'elec-6-1-08',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An oil droplet of mass 3.2 × 10⁻¹⁴ kg carrying 5 elementary electron charges is suspended motionless between two horizontal parallel plates separated by 1.0 cm. Calculate the potential difference in Volts applied between the plates. Take g = 9.8 m s⁻² and e = 1.60 × 10⁻¹⁹ C.',
      si: 'ඉලෙක්ට්‍රෝන ආරෝපණ 5ක් දරන 3.2 × 10⁻¹⁴ kg ස්කන්ධැති තෙල් බිඳක් 1.0 cm පරතරයකින් යුත් තිරස් සමාන්තර තහඩු දෙකක් අතර නිශ්චලව පාවෙමින් පවතී. තහඩු අතර යොදා ඇති විභව අන්තරය වෝල්ට් වලින් ගණනය කරන්න. g = 9.8 m s⁻² සහ e = 1.60 × 10⁻¹⁹ C ලෙස ගන්න.',
    },
    expected: 3920,
    tolerance: 50,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Equate upward electric force to downward gravity: q E = m g. Note E = V / d and q = 5 e.',
      si: 'ඉහළට විද්‍යුත් බලය = පහළට ගුරුත්වය: q E = m g. E = V / d සහ q = 5 e බව සලකන්න.',
    },
    solution: {
      en: 'q = 5 × 1.60 × 10⁻¹⁹ = 8.0 × 10⁻¹⁹ C. Weight mg = 3.2 × 10⁻¹⁴ × 9.8 = 3.136 × 10⁻¹³ N. E = mg / q = 3.136 × 10⁻¹³ / 8.0 × 10⁻¹⁹ = 3.92 × 10⁵ V/m. V = E d = 3.92 × 10⁵ × 0.01 = 3920 V.',
      si: 'q = 8.0 × 10⁻¹⁹ C. mg = 3.136 × 10⁻¹³ N. E = mg / q = 3.92 × 10⁵ V/m. V = E d = 3.92 × 10⁵ × 0.01 = 3920 V.',
    },
  },
  {
    id: 'elec-6-1-09',
    competencyRef: 'Competency 6.1',
    category: 'coulomb-law',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two identical conducting spheres carry charges +Q and -3Q. They are brought into contact and then separated back to their original distance. What is the ratio of the magnitude of the new force to the initial force?',
      si: 'එක සමාන සන්නායක ගෝල දෙකක් +Q සහ -3Q ආරෝපණ දරයි. ඒවා එකිනෙක ස්පර්ශ කර නැවත මුල් දුරටම ගෙන යනු ලැබේ. නව බලයේ විශාලත්වය මුල් බලයේ විශාලත්වයට දරන අනුපාතය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: '1 / 3', si: '1 / 3' } },
      { id: 'b', text: { en: '1 / 6', si: '1 / 6' } },
      { id: 'c', text: { en: '2 / 3', si: '2 / 3' } },
      { id: 'd', text: { en: '4 / 3', si: '4 / 3' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Initial product is |(+Q)(-3Q)| = 3Q². On contact, total charge (+Q - 3Q = -2Q) divides equally (-Q each). New product is |-Q × -Q| = Q².',
      si: 'මුල් ගුණිතය |(+Q)(-3Q)| = 3Q². ස්පර්ශයේදී මුළු ආරෝපණය (-2Q) සමානව බෙදී යයි (එකකට -Q බැගින්). නව ගුණිතය Q² වේ.',
    },
    solution: {
      en: 'F_initial ∝ |Q × (-3Q)| = 3Q². After contact, charge on each sphere is (+Q - 3Q)/2 = -Q. F_new ∝ |-Q × (-Q)| = Q². Ratio F_new / F_initial = Q² / (3Q²) = 1/3.',
      si: 'F_initial ∝ 3Q². ස්පර්ශයෙන් පසු එක් එක් ගෝලයේ ආරෝපණය -Q වේ. F_new ∝ Q² වේ. අනුපාතය = Q² / (3Q²) = 1/3 වේ.',
    },
  },
  {
    id: 'elec-6-1-10',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'An electron (charge -e, mass m_e) enters a uniform horizontal electric field E directed vertically downwards. What is the magnitude and direction of the electron’s acceleration?',
      si: 'ඉලෙක්ට්‍රෝනයක් (ආරෝපණය -e, ස්කන්ධය m_e) සිරස්ව පහළට යොමු වූ ඒකාකාර විද්‍යුත් ක්ෂේත්‍රයකට තිරස්ව ඇතුළු වේ. ඉලෙක්ට්‍රෝනයේ ත්වරණයේ විශාලත්වය සහ දිශාව කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'eE / m_e vertically downwards', si: 'eE / m_e සිරස්ව පහළට' } },
      { id: 'b', text: { en: 'eE / m_e vertically upwards', si: 'eE / m_e සිරස්ව ඉහළට' } },
      { id: 'c', text: { en: 'Zero acceleration', si: 'ශුන්‍ය ත්වරණයකි' } },
      { id: 'd', text: { en: 'm_e E / e vertically upwards', si: 'm_e E / e සිරස්ව ඉහළට' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Force F = qE = (-e)E. A negative charge experiences force in the direction OPPOSITE to the electric field.',
      si: 'බලය F = qE = (-e)E. ඍණ ආරෝපණයක් මත බලය ක්‍රියා කරන්නේ විද්‍යුත් ක්ෂේත්‍රයට ප්‍රතිවිරුද්ධ දිශාවටයි.',
    },
    solution: {
      en: 'Electric field points downwards. Since electron has negative charge (-e), the electrostatic force F = -eE is directed upwards. From Newton’s second law, a = F / m_e = eE / m_e vertically upwards.',
      si: 'විද්‍යුත් ක්ෂේත්‍රය පහළට යොමුව ඇත. ඉලෙක්ට්‍රෝනය සෘණ ආරෝපිත බැවින් විද්‍යුත් බලය ඉහළට ක්‍රියා කරයි. a = eE / m_e සිරස්ව ඉහළට වේ.',
    },
  },
  {
    id: 'elec-6-1-11',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'An electric dipole consists of two opposite charges of magnitude 2.0 μC separated by 5.0 mm. Calculate the magnitude of the electric dipole moment p in nC m (nanoCoulomb metres).',
      si: 'විද්‍යුත් ද්විධ්‍රැවයක් 5.0 mm පරතරයකින් යුත් 2.0 μC විශාලත්වැති විරුද්ධ ආරෝපණ දෙකකින් සමන්විත වේ. විද්‍යුත් ද්විධ්‍රැව ඝූර්ණය p හි විශාලත්වය nC m (නැනෝකූලෝම් මීටර) වලින් ගණනය කරන්න.',
    },
    expected: 10.0,
    tolerance: 0.2,
    unit: { en: 'nC m', si: 'nC m' },
    hint: {
      en: 'p = q × 2a, where 2a is the separation. 1 nC m = 10⁻⁹ C m.',
      si: 'p = q × 2a (2a යනු පරතරයයි). 1 nC m = 10⁻⁹ C m.',
    },
    solution: {
      en: 'p = q d = 2.0 × 10⁻⁶ C × 5.0 × 10⁻³ m = 10.0 × 10⁻⁹ C m = 10.0 nC m.',
      si: 'p = q d = 2.0 × 10⁻⁶ C × 5.0 × 10⁻³ m = 10.0 × 10⁻⁹ C m = 10.0 nC m වේ.',
    },
  },
  {
    id: 'elec-6-1-12',
    competencyRef: 'Competency 6.1',
    category: 'coulomb-law',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What fundamental principle explains why the total electric charge in an isolated physical system never changes over time?',
      si: 'හුදකලා භෞතික පද්ධතියක මුළු විද්‍යුත් ආරෝපණය කාලයත් සමග කිසිවිටෙක වෙනස් නොවන බව පැහැදිලි කරන මූලික නියමය කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'Principle of Conservation of Electric Charge', si: 'විද්‍යුත් ආරෝපණ සංස්ථිතියේ නියමය' } },
      { id: 'b', text: { en: 'Quantization of mass', si: 'ස්කන්ධයේ ක්වොන්ටීකරණය' } },
      { id: 'c', text: { en: 'Coulomb’s Inverse Square Law', si: 'කූලෝම්ගේ ප්‍රතිලෝම වර්ග නියමය' } },
      { id: 'd', text: { en: 'Faraday’s Law of Induction', si: 'ෆැරඩේගේ ප්‍රේරණ නියමය' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Charges can neither be created nor destroyed, only transferred.',
      si: 'ආරෝපණ මැවීමට හෝ විනාශ කිරීමට නොහැකි අතර හුවමාරු කළ හැක්කේ පමණි.',
    },
    solution: {
      en: 'The Law of Conservation of Electric Charge states that the algebraic sum of electric charges in an isolated system remains strictly constant for all physical and chemical processes.',
      si: 'විද්‍යුත් ආරෝපණ සංස්ථිති නියමයට අනුව හුදකලා පද්ධතියක පවතින විද්‍යුත් ආරෝපණවල වීජීය ඓක්‍යය සැමවිටම නියතව පවතී.',
    },
  },
  {
    id: 'elec-6-1-13',
    competencyRef: 'Competency 6.1',
    category: 'electric-field',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'How does the electric field intensity E at distance r from the center of an electric dipole along its axial line vary with distance r (for r >> separation 2a)?',
      si: 'විද්‍යුත් ද්විධ්‍රැවයක (පරතරය 2a) අක්ෂීය රේඛාව ඔස්සේ කේන්ද්‍රයේ සිට r දුරකදී (r >> 2a සඳහා) විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E දුර r සමග විචලනය වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'E ∝ 1 / r', si: 'E ∝ 1 / r' } },
      { id: 'b', text: { en: 'E ∝ 1 / r²', si: 'E ∝ 1 / r²' } },
      { id: 'c', text: { en: 'E ∝ 1 / r³', si: 'E ∝ 1 / r³' } },
      { id: 'd', text: { en: 'E ∝ 1 / r⁴', si: 'E ∝ 1 / r⁴' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Unlike an isolated monopole (1/r²), the dipole field drops off faster because opposite charges cancel out at long distances.',
      si: 'හුදකලා ආරෝපණයකට (1/r²) වඩා වේගයෙන් ද්විධ්‍රැවයක ක්ෂේත්‍රය අඩු වේ.',
    },
    solution: {
      en: 'On the axial line of an electric dipole, E = (1 / 4πε₀) (2p / r³). Thus E falls off inversely as the cube of the distance (E ∝ 1/r³).',
      si: 'විද්‍යුත් ද්විධ්‍රැවයක අක්ෂීය ලක්ෂ්‍යයකදී E = (1 / 4πε₀) (2p / r³) වේ. එනම් ක්ෂේත්‍රය දුරෙහි ඝනයට ප්‍රතිලෝමව සමානුපාතික වේ (E ∝ 1/r³).',
    },
  },

  // =========================================================================
  // Competency 6.2: Electric Potential & Potential Energy (13 Questions)
  // =========================================================================
  {
    id: 'elec-6-2-01',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How is the electric potential V at a point in an electrostatic field defined?',
      si: 'ස්ථිති විද්‍යුත් ක්ෂේත්‍රයක ලක්ෂ්‍යයක විද්‍යුත් විභවය V අර්ථ දක්වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'The force acting on a unit positive charge placed at that point', si: 'එම ලක්ෂ්‍යයේ තබන ලද ඒකක ධන ආරෝපණයක් මත ක්‍රියා කරන බලය' } },
      { id: 'b', text: { en: 'The work done by an external agent in moving a unit positive charge from infinity to that point without acceleration', si: 'අනන්තයේ සිට ත්වරණයකින් තොරව ඒකක ධන ආරෝපණයක් එම ලක්ෂ්‍යයට ගෙන ඒමේදී බාහිර බලයකින් කළ යුතු කාර්යය' } },
      { id: 'c', text: { en: 'The rate of flow of charge through a unit surface at that point', si: 'එම ලක්ෂ්‍යයේ ඒකක පෘෂ්ඨයක් හරහා ආරෝපණ ගලා යාමේ සීඝ්‍රතාව' } },
      { id: 'd', text: { en: 'The square of electric field intensity at that point', si: 'එම ලක්ෂ්‍යයේ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාවයේ වර්ගය' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Potential is work done per unit positive charge from reference point at infinity: V = W / q₀.',
      si: 'විභවය යනු අනන්තයේ සිට ඒකක ධන ආරෝපණයක් ගෙන ඒමට කළ යුතු කාර්යයයි: V = W / q₀.',
    },
    solution: {
      en: 'Electric potential V at a point is the work done per unit positive charge in bringing a test charge from infinity to that point against electrostatic forces: V = W/q₀. SI unit is Volt (V) or J C⁻¹.',
      si: 'විද්‍යුත් විභවය යනු ඒකක ධන පරීක්ෂා ආරෝපණයක් අනන්තයේ සිට එම ලක්ෂ්‍යයට ගෙන ඒමේදී කළ යුතු කාර්යයයි (V = W/q₀). SI ඒකකය වෝල්ට් (V) හෙවත් J C⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-2-02',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the electric potential in kiloVolts (kV) at a distance of 30.0 cm from a point charge of +6.0 μC in vacuum. Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².',
      si: 'රික්තයේ +6.0 μC ලක්ෂ්‍යමය ආරෝපණයක සිට 30.0 cm දුරකදී විද්‍යුත් විභවය කිලෝවෝල්ට් (kV) වලින් ගණනය කරන්න. 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻² ලෙස ගන්න.',
    },
    expected: 179.8,
    tolerance: 3.0,
    unit: { en: 'kV', si: 'kV' },
    hint: {
      en: 'V = k Q / r. 30.0 cm = 0.30 m. 1 kV = 10³ V.',
      si: 'V = k Q / r. 30.0 cm = 0.30 m. 1 kV = 10³ V.',
    },
    solution: {
      en: 'V = (8.99 × 10⁹ × 6.0 × 10⁻⁶) / 0.30 = (53.94 × 10³) / 0.30 = 179.8 × 10³ V = 179.8 kV.',
      si: 'V = (8.99 × 10⁹ × 6.0 × 10⁻⁶) / 0.30 = 179.8 × 10³ V = 179.8 kV වේ.',
    },
  },
  {
    id: 'elec-6-2-03',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the mathematical relationship between electric field strength E and electric potential V in a one-dimensional field?',
      si: 'එක්-මාන ක්ෂේත්‍රයක විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E සහ විද්‍යුත් විභවය V අතර ගණිතමය සම්බන්ධතාව කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'E = dV / dx', si: 'E = dV / dx' } },
      { id: 'b', text: { en: 'E = - dV / dx', si: 'E = - dV / dx' } },
      { id: 'c', text: { en: 'E = ∫ V dx', si: 'E = ∫ V dx' } },
      { id: 'd', text: { en: 'E = - ∫ V dx', si: 'E = - ∫ V dx' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Electric field points in the direction of greatest decrease in electric potential: E = -dV/dx.',
      si: 'විද්‍යුත් ක්ෂේත්‍රය යොමුවන්නේ විභවය වඩාත්ම සීඝ්‍රයෙන් අඩුවන දිශාවටයි: E = -dV/dx.',
    },
    solution: {
      en: 'Electric field is the negative potential gradient: E = -dV/dx. The negative sign signifies that electric field points in the direction of decreasing potential.',
      si: 'විද්‍යුත් ක්ෂේත්‍රය යනු විභවයේ ඍණ අනුක්‍රමණයයි: E = -dV/dx. ඍණ ලකුණින් ක්ෂේත්‍රය විභවය අඩුවන දිශාවට යොමුවන බව පෙන්නුම් කරයි.',
    },
  },
  {
    id: 'elec-6-2-04',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How much work is done by the electric field when moving a test charge q along an equipotential surface?',
      si: 'සමවිභව පෘෂ්ඨයක් ඔස්සේ q පරීක්ෂා ආරෝපණයක් ගෙනයාමේදී විද්‍යුත් ක්ෂේත්‍රය මගින් කෙරෙන කාර්යය කොපමණද?',
    },
    options: [
      { id: 'a', text: { en: 'Zero', si: 'ශුන්‍යයකි' } },
      { id: 'b', text: { en: 'q V', si: 'q V' } },
      { id: 'c', text: { en: 'q / V', si: 'q / V' } },
      { id: 'd', text: { en: '1/2 q V²', si: '1/2 q V²' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'W = q (V_B - V_A). On an equipotential surface, V_B = V_A.',
      si: 'W = q (V_B - V_A). සමවිභව පෘෂ්ඨයක V_B = V_A වේ.',
    },
    solution: {
      en: 'Since every point on an equipotential surface has the identical potential, ΔV = 0. Therefore W = q ΔV = 0. Also, the electric field is perpendicular to the surface at all points.',
      si: 'සමවිභව පෘෂ්ඨයක සියලු ලක්ෂ්‍යවල විභවය සමාන බැවින් ΔV = 0 වේ. එබැවින් W = q ΔV = 0 වේ. තවද ක්ෂේත්‍රය පෘෂ්ඨයට ලම්බකව පවතී.',
    },
  },
  {
    id: 'elec-6-2-05',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'An alpha particle (charge q = +2e = 3.20 × 10⁻¹⁹ C) is accelerated from rest through a potential difference of 50.0 kV. Calculate its final kinetic energy in femtojoules (fJ, 10⁻¹⁵ J).',
      si: 'ඇල්ෆා අංශුවක් (ආරෝපණය q = +2e = 3.20 × 10⁻¹⁹ C) නිශ්චලතාවයේ සිට 50.0 kV විභව අන්තරයක් හරහා ත්වරණය කරනු ලැබේ. එහි අවසාන චාලක ශක්තිය ෆෙම්ටෝජූල් (fJ, 10⁻¹⁵ J) වලින් ගණනය කරන්න.',
    },
    expected: 16.0,
    tolerance: 0.3,
    unit: { en: 'fJ', si: 'fJ' },
    hint: {
      en: 'K = q ΔV. 50 kV = 50,000 V. 1 fJ = 10⁻¹⁵ J.',
      si: 'K = q ΔV. 50 kV = 50,000 V. 1 fJ = 10⁻¹⁵ J.',
    },
    solution: {
      en: 'K = q ΔV = 3.20 × 10⁻¹⁹ C × 50,000 V = 1.60 × 10⁻¹⁴ J = 16.0 × 10⁻¹⁵ J = 16.0 fJ (or 100 keV).',
      si: 'K = q ΔV = 3.20 × 10⁻¹⁹ C × 50,000 V = 1.60 × 10⁻¹⁴ J = 16.0 fJ වේ.',
    },
  },
  {
    id: 'elec-6-2-06',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two equal and opposite charges +q and -q are placed at distance 2d apart. What are the electric field E and electric potential V at the exact midpoint between them?',
      si: '+q සහ -q වූ සමාන හා විරුද්ධ ආරෝපණ දෙකක් එකිනෙකින් 2d දුරකින් පිහිටා ඇත. ඒවා අතර මධ්‍ය ලක්ෂ්‍යයේදී විද්‍යුත් ක්ෂේත්‍රය E සහ විද්‍යුත් විභවය V කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'E = 0 and V = 0', si: 'E = 0 සහ V = 0' } },
      { id: 'b', text: { en: 'E ≠ 0 and V = 0', si: 'E ≠ 0 සහ V = 0' } },
      { id: 'c', text: { en: 'E = 0 and V ≠ 0', si: 'E = 0 සහ V ≠ 0' } },
      { id: 'd', text: { en: 'E ≠ 0 and V ≠ 0', si: 'E ≠ 0 සහ V ≠ 0' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Electric field vectors from both charges point towards -q (they add up). Scalar potentials V = +kq/d and -kq/d add algebraically to zero.',
      si: 'ක්ෂේත්‍ර දෛශික දෙකම -q දෙසට යොමුවන බැවින් එකතු වේ. අදිශ විභව දෙක වීජීයව එකතු වී ශුන්‍ය වේ.',
    },
    solution: {
      en: 'Field from +q points toward -q; field from -q also points toward -q. Thus E_net = 2kq/d² ≠ 0. Potential is scalar: V_net = kq/d + (-kq/d) = 0. Therefore E ≠ 0 and V = 0.',
      si: '+q සහ -q දෙකෙන්ම ක්ෂේත්‍ර -q දෙසට එකතු වන බැවින් E ≠ 0 වේ. අදිශ විභව: V = kq/d + (-kq/d) = 0 වේ.',
    },
  },
  {
    id: 'elec-6-2-07',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Three identical point charges of +3.0 μC are located at the vertices of an equilateral triangle of side length 20.0 cm in vacuum. Calculate the total electrostatic potential energy of this system in Joules. Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².',
      si: 'රික්තයේ 20.0 cm පාදයක් සහිත සමපාද ත්‍රිකෝණයක ශීර්ෂ මත +3.0 μC බැගින් වූ එක සමාන ලක්ෂ්‍යමය ආරෝපණ තුනක් පිහිටා ඇත. මෙම පද්ධතියේ මුළු ස්ථිති විද්‍යුත් විභව ශක්තිය ජූල් වලින් ගණනය කරන්න. 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻² ලෙස ගන්න.',
    },
    expected: 1.21,
    tolerance: 0.05,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'Total U is the sum over all 3 pairs: U = 3 × (k q² / a).',
      si: 'මුළු U යනු යුගල 3 හි ශක්තීන්ගේ එකතුවයි: U = 3 × (k q² / a).',
    },
    solution: {
      en: 'Number of pairs = 3C2 = 3. Each pair has energy k q² / a = (8.99 × 10⁹ × (3.0 × 10⁻⁶)²) / 0.20 = (8.99 × 10⁹ × 9.0 × 10⁻¹²) / 0.20 = 0.08091 / 0.20 = 0.40455 J. Total U = 3 × 0.40455 ≈ 1.214 J.',
      si: 'යුගල ගණන = 3. එක් යුගලයක ශක්තිය = k q² / a = 0.4046 J. මුළු U = 3 × 0.4046 ≈ 1.21 J වේ.',
    },
  },
  {
    id: 'elec-6-2-08',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why is the electric field exceptionally intense near sharp points or spikes on a charged conductor (action of points)?',
      si: 'ආරෝපිත සන්නායකයක උල් තුඩු හෝ උල් දාර ආසන්නයේ විද්‍යුත් ක්ෂේත්‍රය අතිශයින් ප්‍රබල වීමට (තුඩු ක්‍රියාව) හේතුව කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'Sharp points have a very small radius of curvature, leading to extremely high surface charge density (σ ∝ 1/r)', si: 'උල් තුඩුවල වක්‍රතා අරය ඉතා කුඩා බැවින් පෘෂ්ඨික ආරෝපණ ඝනත්වය අතිශයින් ඉහළ අගයක් ගැනීම (σ ∝ 1/r)' } },
      { id: 'b', text: { en: 'Electric potential is much higher at sharp points than on flat surfaces of the conductor', si: 'සන්නායකයේ පැතලි පෘෂ්ඨවලට වඩා උල් තුඩුවල විද්‍යුත් විභවය බෙහෙවින් වැඩි වීම' } },
      { id: 'c', text: { en: 'Points attract magnetic flux lines from the atmosphere', si: 'උල් තුඩු වායුගෝලයේ චුම්භක රේඛා ආකර්ෂණය කර ගැනීම' } },
      { id: 'd', text: { en: 'Electrons move faster inside pointed metal tips', si: 'උල් ලෝහ තුඩු තුළ ඉලෙක්ට්‍රෝන වේගයෙන් ගමන් කිරීම' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'A conductor is equipotential (V = constant). Since V ∝ σ r, σ ∝ 1/r. As r -> 0, σ and E = σ/ε₀ become huge.',
      si: 'සන්නායකයක් සමවිභවීය වේ (V = නියතයි). V ∝ σ r බැවින් σ ∝ 1/r වේ. r කුඩා වන විට σ සහ E විශාල වේ.',
    },
    solution: {
      en: 'On a charged conductor in electrostatic equilibrium, potential V is uniform everywhere. Modeling sharp tips as small spheres connected to the conductor, V = k q/r = k (4πr²σ)/r = 4πk σ r = constant. Thus σ ∝ 1/r. Small radius of curvature produces immense surface charge density and localized electric field E = σ/ε₀.',
      si: 'සමතුලිත සන්නායකයක විභවය सर्वत्र එක සමාන වේ. V = නියත බැවින් σ ∝ 1/r වේ. උල් තුඩුවල r ඉතා කුඩා බැවින් ආරෝපණ ඝනත්වය σ සහ ක්ෂේත්‍රය E = σ/ε₀ අතිශයින් ඉහළ ගොස් වාතය අයනීකරණය වේ (කොරෝනා විසර්ජනය).',
    },
  },
  {
    id: 'elec-6-2-09',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the operational purpose of installing sharp pointed metal rods on lightning conductors (arresters) atop tall buildings?',
      si: 'උස් ගොඩනැගිලි මත අකුණු සන්නායකවල උල් ලෝහ තුඩු සවිකිරීමේ ක්‍රියාකාරී අරමුණ කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'To attract lightning strikes from as far away as possible to test building grounding', si: 'ගොඩනැගිල්ලේ භූගතය පරීක්ෂා කිරීමට හැකි තරම් ඈතින් අකුණු ආකර්ෂණය කර ගැනීම' } },
      { id: 'b', text: { en: 'To produce continuous silent corona discharge that sprays opposite ions toward charged thunderclouds, neutralizing them and safely conducting any unavoidable strike to ground', si: 'ආරෝපිත වලාකුළු උදාසීන කිරීම සඳහා ප්‍රතිවිරුද්ධ අයන නිහඬ කොරෝනා විසර්ජනයෙන් මුදාහැරීම සහ නොවැළැක්විය හැකි අකුණක් ආරක්ෂිතව පොළොවට ගෙන යාම' } },
      { id: 'c', text: { en: 'To insulate the building completely from the ionosphere', si: 'ගොඩනැගිල්ල අයනගෝලයෙන් සම්පූර්ණයෙන්ම පරිවරණය කිරීම' } },
      { id: 'd', text: { en: 'To reflect atmospheric electromagnetic waves', si: 'වායුගෝලීය විද්‍යුත් චුම්භක තරංග පරාවර්තනය කිරීම' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Action of points causes air breakdown, spraying charges to neutralize overhead clouds before a catastrophic spark occurs.',
      si: 'තුඩු ක්‍රියාවෙන් වාතය අයනීකරණය වී වලාකුළෙහි ආරෝපණ උදාසීන කෙරෙන අතර අකුණක් ඇති වුවහොත් අඩු ප්‍රතිරෝධී මාර්ගයකින් භූගත කරයි.',
    },
    solution: {
      en: 'A lightning rod uses action of points to ionize surrounding air. The induced opposite charges escape from the points as an electric wind, partially neutralizing the cloud charge. If lightning still strikes, the heavy copper tape safely conducts current to ground without damaging the structure.',
      si: 'අකුණු සන්නායකයේ උල් තුඩු මගින් වාතය අයනීකරණය කර ආරෝපණ වලාකුළ දෙසට යවා එය අර්ධ වශයෙන් උදාසීන කරයි. අකුණක් ගැසුවද ඝන තඹ පටිය මගින් ධාරාව ගොඩනැගිල්ලට හානියක් නොවන සේ ආරක්ෂිතව පොළොවට රැගෙන යයි.',
    },
  },
  {
    id: 'elec-6-2-10',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a uniform electric field, the potential decreases from 240 V to 120 V over a distance of 4.0 cm along the field lines. What is the electric field strength in kV m⁻¹?',
      si: 'ඒකාකාර විද්‍යුත් ක්ෂේත්‍රයක ක්ෂේත්‍ර රේඛා ඔස්සේ 4.0 cm දුරකදී විභවය 240 V සිට 120 V දක්වා අඩු වේ. විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව kV m⁻¹ වලින් කොපමණද?',
    },
    expected: 3.0,
    tolerance: 0.1,
    unit: { en: 'kV m⁻¹', si: 'kV m⁻¹' },
    hint: {
      en: 'E = - ΔV / Δx = (V₁ - V₂) / d. Convert cm to m.',
      si: 'E = - ΔV / Δx = (V₁ - V₂) / d. cm අගය m බවට හරවන්න.',
    },
    solution: {
      en: 'E = (240 - 120) V / 0.04 m = 120 / 0.04 = 3000 V/m = 3.0 kV m⁻¹.',
      si: 'E = 120 V / 0.04 m = 3000 V/m = 3.0 kV m⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-2-11',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the shapes of equipotential surfaces surrounding an isolated point charge in vacuum?',
      si: 'රික්තයේ හුදකලා ලක්ෂ්‍යමය ආරෝපණයක් වටා සමවිභව පෘෂ්ඨවල හැඩය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Concentric spheres centered on the charge', si: 'ආරෝපණය කේන්ද්‍රය වූ ඒකකේන්ද්‍රික ගෝල' } },
      { id: 'b', text: { en: 'Parallel flat planes', si: 'සමාන්තර පැතලි තල' } },
      { id: 'c', text: { en: 'Coaxial cylinders', si: 'සමඅක්ෂීය සිලින්ඩර' } },
      { id: 'd', text: { en: 'Paraboloids of revolution', si: 'පරිභ්‍රමණ පරවළයජ' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'V = kQ/r. Constant V means constant distance r in three dimensions.',
      si: 'V = kQ/r. නියත V යනු ත්‍රිමාන අවකාශයේ නියත දුර r වේ.',
    },
    solution: {
      en: 'Since V = kQ/r depends purely on radial distance r from the point charge, surfaces of constant potential are spheres centered on the charge (concentric spherical surfaces).',
      si: 'V = kQ/r සූත්‍රය අනුව නියත විභවයක් පවතින්නේ ආරෝපණයේ සිට සමාන දුරින් පිහිටි ලක්ෂ්‍යවල බැවින් සමවිභව පෘෂ්ඨ ඒකකේන්ද්‍රික ගෝල වේ.',
    },
  },
  {
    id: 'elec-6-2-12',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If an uncharged hollow metal box is placed in an external electrostatic field, what is the electric field inside the hollow cavity?',
      si: 'බාහිර ස්ථිති විද්‍යුත් ක්ෂේත්‍රයක් තුළ ආරෝපණය නොකළ කුහර ලෝහ පෙට්ටියක් තැබූ විට, එහි අභ්‍යන්තර කුහරය තුළ විද්‍යුත් ක්ෂේත්‍රය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Stronger than the external field', si: 'බාහිර ක්ෂේත්‍රයට වඩා ප්‍රබලයි' } },
      { id: 'b', text: { en: 'Identical to the external field', si: 'බාහිර ක්ෂේත්‍රයට සමානයි' } },
      { id: 'c', text: { en: 'Strictly zero everywhere inside', si: 'අභ්‍යන්තරය තුළ सर्वत्र ශුන්‍යයකි' } },
      { id: 'd', text: { en: 'Uniform and non-zero', si: 'ඒකාකාරී සහ ශුන්‍ය නොවන අගයකි' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'Free electrons in the metal redistribute until the internal field is completely cancelled (electrostatic shielding / Faraday cage).',
      si: 'ලෝහයේ නිදහස් ඉලෙක්ට්‍රෝන ප්‍රතිසංවිධානය වී අභ්‍යන්තර ක්ෂේත්‍රය මුළුමනින්ම අවලංගු කරයි (විද්‍යුත් ස්ථිතික ආවරණය).',
    },
    solution: {
      en: 'Free electrons redistribute on the outer surface of the metal conductor until the net electric field inside the metal and within any enclosed empty cavity is strictly zero. This is known as electrostatic shielding (Faraday cage effect).',
      si: 'සන්නායකයේ පිටත පෘෂ්ඨය මත නිදහස් ඉලෙක්ට්‍රෝන ප්‍රතිසංවිධානය වීම නිසා ලෝහය තුළ සහ ඒ තුළ ඇති කුහරය තුළ ශුද්ධ විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය වේ. මෙය විද්‍යුත් ස්ථිතික ආවරණය (ෆැරඩේ කූඩුව) නම් වේ.',
    },
  },
  {
    id: 'elec-6-2-13',
    competencyRef: 'Competency 6.2',
    category: 'electric-potential',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Two conducting spheres of radii R₁ and R₂ (R₁ > R₂) are connected by a thin conducting wire and charged. Which statement correctly compares their potentials and electric fields at their surfaces?',
      si: 'R₁ සහ R₂ (R₁ > R₂) අරයන් සහිත සන්නායක ගෝල දෙකක් සිහින් සන්නායක කම්බියකින් සම්බන්ධ කර ආරෝපණය කරනු ලැබේ. ඒවායේ පෘෂ්ඨ මත විභවයන් සහ ක්ෂේත්‍ර තීව්‍රතාවන් නිවැරදිව සසඳන ප්‍රකාශනය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'V₁ = V₂ and E₁ < E₂', si: 'V₁ = V₂ සහ E₁ < E₂' } },
      { id: 'b', text: { en: 'V₁ > V₂ and E₁ = E₂', si: 'V₁ > V₂ සහ E₁ = E₂' } },
      { id: 'c', text: { en: 'V₁ = V₂ and E₁ > E₂', si: 'V₁ = V₂ සහ E₁ > E₂' } },
      { id: 'd', text: { en: 'V₁ < V₂ and E₁ < E₂', si: 'V₁ < V₂ සහ E₁ < E₂' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Connected conductors reach equal potential: V₁ = V₂. Since E = V / R, smaller radius has stronger field.',
      si: 'සම්බන්ධ කළ සන්නායක සමාන විභවයකට පැමිණේ: V₁ = V₂. E = V / R බැවින් කුඩා අරයක් සහිත ගෝලයේ ක්ෂේත්‍රය වැඩිය.',
    },
    solution: {
      en: 'Because they are connected by a conductor, charge flows until their potentials equalize: V₁ = V₂. At the surface of a conducting sphere, E = V/R. Since R₁ > R₂, E₁ = V/R₁ < V/R₂ = E₂. The smaller sphere has a stronger surface electric field.',
      si: 'කම්බියකින් සම්බන්ධ කර ඇති බැවින් විභව සමාන වන තෙක් ආරෝපණ ගලා යයි: V₁ = V₂. E = V / R බැවින් සහ R₁ > R₂ බැවින්, E₁ < E₂ වේ. කුඩා ගෝලයේ පෘෂ්ඨික ක්ෂේත්‍රය වැඩිය.',
    },
  },

  // =========================================================================
  // Competency 6.3: Gauss's Law & Conductor Electrostatics (13 Questions)
  // =========================================================================
  {
    id: 'elec-6-3-01',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the statement of Gauss’s Law for electrostatics in vacuum?',
      si: 'රික්තයේ විද්‍යුත් ස්ථිතිකය සඳහා ගවුස්ගේ නියමය ප්‍රකාශ වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'Total electric flux through any closed surface equals Q_enclosed / ε₀', si: 'ඕනෑම සංවෘත පෘෂ්ඨයක් හරහා මුළු විද්‍යුත් ස්‍රාවය Q_enclosed / ε₀ ට සමාන වේ' } },
      { id: 'b', text: { en: 'Electric field inside any conductor equals Q_enclosed', si: 'ඕනෑම සන්නායකයක් තුළ විද්‍යුත් ක්ෂේත්‍රය Q_enclosed ට සමාන වේ' } },
      { id: 'c', text: { en: 'Total charge on a conductor is proportional to its area', si: 'සන්නායකයක මුළු ආරෝපණය එහි වර්ගඵලයට සමානුපාතික වේ' } },
      { id: 'd', text: { en: 'Electric force equals charge times potential', si: 'විද්‍යුත් බලය ආරෝපණය සහ විභවයේ ගුණිතයට සමාන වේ' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Φ = ∮ E · dA = Q_enclosed / ε₀.',
      si: 'Φ = ∮ E · dA = Q_enclosed / ε₀.',
    },
    solution: {
      en: 'Gauss’s Law states that the net outward electric flux through any hypothetical closed surface (Gaussian surface) is directly proportional to the total net charge enclosed within that surface: Φ = ∮ E · dA = Q_enclosed / ε₀.',
      si: 'ගවුස්ගේ නියමයට අනුව ඕනෑම සංවෘත පෘෂ්ඨයක් හරහා ගමන් කරන මුළු විද්‍යුත් ස්‍රාවය එම පෘෂ්ඨය තුළ ඇති ශුද්ධ ආරෝපණය ε₀ න් බෙදූ විට ලැබෙන අගයට සමාන වේ: Φ = Q_enclosed / ε₀.',
    },
  },
  {
    id: 'elec-6-3-02',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A point charge of +8.854 nC is placed at the center of a cubical Gaussian surface of side 10 cm. Calculate the total electric flux emerging through the entire cube in N m² C⁻¹ (or V m). Take ε₀ = 8.854 × 10⁻¹² F m⁻¹.',
      si: '+8.854 nC ලක්ෂ්‍යමය ආරෝපණයක් 10 cm පාදයක් සහිත ඝනකාකාර ගවුසීය පෘෂ්ඨයක කේන්ද්‍රයේ තබා ඇත. සම්පූර්ණ ඝනකය හරහා පිටවන මුළු විද්‍යුත් ස්‍රාවය N m² C⁻¹ (හෝ V m) වලින් ගණනය කරන්න. ε₀ = 8.854 × 10⁻¹² F m⁻¹ ලෙස ගන්න.',
    },
    expected: 1000,
    tolerance: 10,
    unit: { en: 'N m² C⁻¹', si: 'N m² C⁻¹' },
    hint: {
      en: 'From Gauss’s law, Φ = Q_enclosed / ε₀. The cube shape and side length do not affect the total flux.',
      si: 'ගවුස් නියමයෙන්, Φ = Q_enclosed / ε₀. ඝනකයේ ප්‍රමාණය මුළු ස්‍රාවයට බලනොපායි.',
    },
    solution: {
      en: 'Φ = Q_enclosed / ε₀ = (8.854 × 10⁻⁹ C) / (8.854 × 10⁻¹² C² N⁻¹ m⁻²) = 1000 N m² C⁻¹ (or 1000 V m).',
      si: 'Φ = Q / ε₀ = 8.854 × 10⁻⁹ / 8.854 × 10⁻¹² = 1000 N m² C⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-3-03',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the electric flux through one single face of a cube if a point charge Q is placed at the exact geometric center of the cube?',
      si: 'ඝනකයක ජ්‍යාමිතික කේන්ද්‍රයේ Q ලක්ෂ්‍යමය ආරෝපණයක් තැබූ විට, ඝනකයේ එක් මුහුණතක් හරහා පිටවන විද්‍යුත් ස්‍රාවය කොපමණද?',
    },
    options: [
      { id: 'a', text: { en: 'Q / ε₀', si: 'Q / ε₀' } },
      { id: 'b', text: { en: 'Q / (4ε₀)', si: 'Q / (4ε₀)' } },
      { id: 'c', text: { en: 'Q / (6ε₀)', si: 'Q / (6ε₀)' } },
      { id: 'd', text: { en: 'Q / (8ε₀)', si: 'Q / (8ε₀)' } },
    ],
    correctOptionId: 'c',
    hint: {
      en: 'A cube has 6 symmetric faces. Total flux is Q/ε₀.',
      si: 'ඝනකයක සමමිතික මුහුණත් 6ක් ඇත. මුළු ස්‍රාවය Q/ε₀ වේ.',
    },
    solution: {
      en: 'By symmetry, the total flux Φ_total = Q/ε₀ is divided equally among all 6 faces of the cube. Therefore, flux through one face = Q / (6ε₀).',
      si: 'සමමිතිය අනුව මුළු ස්‍රාවය Q/ε₀ මුහුණත් 6 හරහා සමානව බෙදී යන බැවින් එක් මුහුණතක් හරහා ස්‍රාවය = Q / (6ε₀) වේ.',
    },
  },
  {
    id: 'elec-6-3-04',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Where does excess charge reside on a solid or hollow conducting body in electrostatic equilibrium?',
      si: 'ස්ථිති විද්‍යුත් සමතුලිතතාවයේ පවතින ඝන හෝ කුහර සන්නායකයක අතිරික්ත ආරෝපණ රඳා පවතින්නේ කොහේද?',
    },
    options: [
      { id: 'a', text: { en: 'Exclusively on the outer surface of the conductor', si: 'සන්නායකයේ පිටත පෘෂ්ඨය මත පමණි' } },
      { id: 'b', text: { en: 'Evenly distributed throughout the interior volume', si: 'අභ්‍යන්තර පරිමාව පුරා ඒකාකාරව විසිරී පවතී' } },
      { id: 'c', text: { en: 'Concentrated exclusively at the center of mass', si: 'ස්කන්ධ කේන්ද්‍රයේ පමණක් කේන්ද්‍රගතව පවතී' } },
      { id: 'd', text: { en: 'On the inner cavity surface only', si: 'ඇතුළත කුහර පෘෂ්ඨය මත පමණි' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Inside a conductor E = 0. By Gauss’s law, any internal Gaussian surface encloses zero net charge.',
      si: 'සන්නායකයක් තුළ E = 0 බැවින් ගවුස් නියමයට අනුව අභ්‍යන්තරයේ ශුද්ධ ආරෝපණ පැවතිය නොහැක.',
    },
    solution: {
      en: 'Because like charges repel and free electrons move freely, all excess charge migrates to the outer boundary. Constructing a Gaussian surface just inside the outer surface yields ∮ E·dA = 0 since E = 0 inside, proving Q_enclosed = 0 inside the body.',
      si: 'සජාතීය ආරෝපණ එකිනෙක විකර්ෂණය කරන බැවින් සහ ඉලෙක්ට්‍රෝන නිදහසේ චලනය වන බැවින් සියලු අතිරික්ත ආරෝපණ පිටත පෘෂ්ඨයට සංක්‍රමණය වේ. අභ්‍යන්තරයේ E = 0 බැවින් ආරෝපණ පවතින්නේ පිටත පෘෂ්ඨයේ පමණි.',
    },
  },
  {
    id: 'elec-6-3-05',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A solid conducting sphere of radius 10.0 cm holds a net charge of +5.0 μC in vacuum. What is the electric field strength in kN C⁻¹ at a distance of 5.0 cm from the center of the sphere?',
      si: '10.0 cm අරයක් සහිත ඝන සන්නායක ගෝලයක් රික්තයේ +5.0 μC ශුද්ධ ආරෝපණයක් දරයි. ගෝලයේ කේන්ද්‍රයේ සිට 5.0 cm දුරකදී විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව kN C⁻¹ වලින් කොපමණද?',
    },
    expected: 0.0,
    tolerance: 0.01,
    unit: { en: 'kN C⁻¹', si: 'kN C⁻¹' },
    hint: {
      en: 'Is the point (r = 5 cm) inside or outside the conducting sphere (R = 10 cm)?',
      si: 'ලක්ෂ්‍යය (r = 5 cm) සන්නායක ගෝලයට (R = 10 cm) ඇතුළතද පිටතද පිහිටන්නේ?',
    },
    solution: {
      en: 'Since r = 5.0 cm < R = 10.0 cm, the point lies inside the solid conducting sphere. In electrostatic equilibrium, the electric field anywhere inside a conductor is strictly zero (E = 0).',
      si: 'r = 5.0 cm < R = 10.0 cm බැවින් එම ලක්ෂ්‍යය සන්නායක ගෝලය තුළ පිහිටයි. ස්ථිති විද්‍යුත් සමතුලිතතාවයේදී සන්නායකයක් තුළ ඕනෑම තැනක විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය වේ (E = 0).',
    },
  },
  {
    id: 'elec-6-3-06',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the electric field strength E just outside the surface of a charged conductor of surface charge density σ in vacuum?',
      si: 'පෘෂ්ඨික ආරෝපණ ඝනත්වය σ වූ ආරෝපිත සන්නායකයක පෘෂ්ඨයට തൊළින්ම පිටතින් රික්තයේ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'E = σ / ε₀', si: 'E = σ / ε₀' } },
      { id: 'b', text: { en: 'E = σ / (2ε₀)', si: 'E = σ / (2ε₀)' } },
      { id: 'c', text: { en: 'E = 2σ / ε₀', si: 'E = 2σ / ε₀' } },
      { id: 'd', text: { en: 'E = 0', si: 'E = 0' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Use a small pillbox Gaussian surface with one face inside the conductor (where E = 0) and one face just outside.',
      si: 'එක් පැත්තක් සන්නායකය තුළ (E = 0) සහ අනෙක් පැත්ත පිටතින් පිහිටි කුඩා පෙති-හැඩැති ගවුසීය පෘෂ්ඨයක් සලකන්න.',
    },
    solution: {
      en: 'Constructing a small cylindrical Gaussian pillbox: flux emerges only through the outer cap of area ΔA (since E = 0 inside the conductor and parallel to sides). Thus E ΔA = (σ ΔA) / ε₀ => E = σ / ε₀.',
      si: 'සන්නායකය තුළ E = 0 වන බැවින් සිලින්ඩරාකාර ගවුසීය පෘෂ්ඨයේ පිටත මුහුණතෙන් පමණක් ස්‍රාවය පිටවේ: E ΔA = (σ ΔA) / ε₀ => E = σ / ε₀ වේ.',
    },
  },
  {
    id: 'elec-6-3-07',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the electric field strength near an infinite thin non-conducting plane sheet with uniform surface charge density σ in vacuum?',
      si: 'රික්තයේ ඒකාකාර පෘෂ්ඨික ආරෝපණ ඝනත්වය σ වූ අනන්ත තුනී අසන්නායක තල පත්‍රයක් ආසන්නයේ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'E = σ / ε₀', si: 'E = σ / ε₀' } },
      { id: 'b', text: { en: 'E = σ / (2ε₀)', si: 'E = σ / (2ε₀)' } },
      { id: 'c', text: { en: 'E = 2σ / ε₀', si: 'E = 2σ / ε₀' } },
      { id: 'd', text: { en: 'E = σ / (4ε₀)', si: 'E = σ / (4ε₀)' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Flux emerges symmetrically from BOTH sides of the thin sheet: 2 E ΔA = σ ΔA / ε₀.',
      si: 'තුනී පත්‍රයේ දෙපැත්තෙන්ම සමමිතිකව ස්‍රාවය පිටවේ: 2 E ΔA = σ ΔA / ε₀.',
    },
    solution: {
      en: 'For a thin sheet of charge, flux leaves both the front and back caps of a Gaussian cylinder: Φ = E ΔA + E ΔA = 2E ΔA. By Gauss’s Law: 2E ΔA = (σ ΔA) / ε₀ => E = σ / (2ε₀).',
      si: 'තුනී ආරෝපිත පත්‍රයක දෙපසින්ම ස්‍රාවය පිටවන බැවින්: 2 E ΔA = (σ ΔA) / ε₀ => E = σ / (2ε₀) වේ.',
    },
  },
  {
    id: 'elec-6-3-08',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A sphere of radius 15.0 cm carries a charge of +3.0 μC in vacuum. What is the electric potential in kV at the exact center of this sphere?',
      si: '15.0 cm අරයක් සහිත සන්නායක ගෝලයක් රික්තයේ +3.0 μC ආරෝපණයක් දරයි. මෙම ගෝලයේ හරියටම කේන්ද්‍රයේ විද්‍යුත් විභවය kV වලින් කොපමණද? Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².',
    },
    expected: 179.8,
    tolerance: 3.0,
    unit: { en: 'kV', si: 'kV' },
    hint: {
      en: 'Electric potential inside a conducting sphere is constant and equals the potential at its surface: V_center = V_surface = kQ/R.',
      si: 'සන්නායක ගෝලයක් තුළ විභවය නියත වන අතර පෘෂ්ඨයේ විභවයට සමාන වේ: V_center = V_surface = kQ/R.',
    },
    solution: {
      en: 'Since E = -dV/dr = 0 inside a conductor, the potential V is constant throughout the sphere and equals its surface value: V_center = kQ/R = (8.99 × 10⁹ × 3.0 × 10⁻⁶) / 0.15 = 26.97 × 10³ / 0.15 = 179.8 kV.',
      si: 'සන්නායකය තුළ E = 0 බැවින් විභවය නියතව පෘෂ්ඨික අගයට සමාන වේ: V = kQ/R = 179.8 kV වේ.',
    },
  },
  {
    id: 'elec-6-3-09',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'During a severe thunderstorm, why is being inside an enclosed metal automobile one of the safest places against a lightning strike?',
      si: 'දැඩි අකුණු කුණාටුවකදී සම්පූර්ණයෙන්ම ලෝහයෙන් වැසුණු මෝටර් රථයක් තුළ සිටීම ආරක්ෂිතම ස්ථානයක් වන්නේ මන්ද?',
    },
    options: [
      { id: 'a', text: { en: 'The rubber tires completely insulate the car from electrical ground', si: 'රබර් ටයර් මගින් මෝටර් රථය පොළොවෙන් සම්පූර්ණයෙන්ම පරිවරණය කරන නිසා' } },
      { id: 'b', text: { en: 'The conductive metal chassis acts as a Faraday cage, channeling current safely around the exterior to ground with zero electric field inside', si: 'සන්නායක ලෝහ බඳ ෆැරඩේ කූඩුවක් ලෙස ක්‍රියා කරමින් විද්‍යුත් ධාරාව බාහිර පෘෂ්ඨය ඔස්සේ පොළොවට යවන අතර ඇතුළත ක්ෂේත්‍රය ශුන්‍ය කරන නිසා' } },
      { id: 'c', text: { en: 'The car engine generates a repulsive magnetic shield', si: 'මෝටර් රථයේ එන්ජිම මගින් විකර්ෂණ චුම්භක ආවරණයක් ජනනය කරන නිසා' } },
      { id: 'd', text: { en: 'Metal repels static electricity into the sky', si: 'ලෝහ මගින් ස්ථිති විද්‍යුතය අහස දෙසට විකර්ෂණය කරන නිසා' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Is it the rubber tires or the metal body providing shielding?',
      si: 'ආරක්ෂාව සපයන්නේ රබර් ටයර් ද නැතහොත් ලෝහ බඳ ද?',
    },
    solution: {
      en: 'The metal body functions as a Faraday cage. When struck by lightning, the massive electrical current flows along the exterior metallic shell into the ground, maintaining zero electric field inside the vehicle cabin.',
      si: 'මෝටර් රථයේ ලෝහ බඳ ෆැරඩේ කූඩුවක් ලෙස ක්‍රියා කරයි. අකුණු ධාරාව පිටත ලෝහ බඳ ඔස්සේ පොළොවට ගමන් කරන අතර රථය තුළ විද්‍යුත් ක්ෂේත්‍රය ශුන්‍යව පවතී.',
    },
  },
  {
    id: 'elec-6-3-10',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A point charge +q is placed inside the spherical cavity of an uncharged neutral conducting shell. What are the induced charges on the inner and outer surfaces of the shell?',
      si: 'ආරෝපණය නොකළ උදාසීන සන්නායක කබොලක ගෝලීය කුහරය තුළ +q ලක්ෂ්‍යමය ආරෝපණයක් තබා ඇත. කබොලේ ඇතුළත සහ පිටත පෘෂ්ඨ මත ප්‍රේරණය වන ආරෝපණ පිළිවෙළින් කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Inner: -q, Outer: +q', si: 'ඇතුළත: -q, පිටත: +q' } },
      { id: 'b', text: { en: 'Inner: +q, Outer: -q', si: 'ඇතුළත: +q, පිටත: -q' } },
      { id: 'c', text: { en: 'Inner: -q, Outer: 0', si: 'ඇතුළත: -q, පිටත: 0' } },
      { id: 'd', text: { en: 'Inner: 0, Outer: +q', si: 'ඇතුළත: 0, පිටත: +q' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'A Gaussian surface within the conducting shell material must enclose net zero charge. Since the shell was neutral, charge conservation applies.',
      si: 'සන්නායක ද්‍රව්‍යය තුළ ගවුසීය පෘෂ්ඨයක් තුළ ශුද්ධ ආරෝපණය ශුන්‍ය විය යුතුය. කබොල උදාසීන බැවින් ආරෝපණ සංස්ථිතික වේ.',
    },
    solution: {
      en: 'A Gaussian surface drawn entirely within the metal of the shell must have E = 0, so Q_enclosed = 0. Thus the inner surface must acquire -q. Since the shell is electrically neutral overall, by charge conservation the outer surface must acquire +q.',
      si: 'සන්නායක ද්‍රව්‍යය තුළ E = 0 බැවින් කුහරයේ අභ්‍යන්තර බිත්තිය මත -q ප්‍රේරණය වේ. මුළු කබොල උදාසීන බැවින් ආරෝපණ සංස්ථිතිය අනුව පිටත පෘෂ්ඨය මත +q ප්‍රේරණය වේ.',
    },
  },
  {
    id: 'elec-6-3-11',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Two large flat conducting plates with equal and opposite surface charge densities ±σ are placed parallel to each other separated by 2.0 mm. The electric field between them is measured to be 50.0 kV m⁻¹. Calculate the surface charge density σ in nC m⁻². Take ε₀ = 8.854 × 10⁻¹² F m⁻¹.',
      si: 'සමාන හා විරුද්ධ පෘෂ්ඨික ආරෝපණ ඝනත්වයන් ±σ සහිත විශාල පැතලි සන්නායක තහඩු දෙකක් 2.0 mm පරතරයකින් සමාන්තරව තබා ඇත. ඒවා අතර විද්‍යුත් ක්ෂේත්‍රය 50.0 kV m⁻¹ ලෙස මනිනු ලැබේ. පෘෂ්ඨික ආරෝපණ ඝනත්වය σ nC m⁻² වලින් ගණනය කරන්න. ε₀ = 8.854 × 10⁻¹² F m⁻¹ ලෙස ගන්න.',
    },
    expected: 442.7,
    tolerance: 5.0,
    unit: { en: 'nC m⁻²', si: 'nC m⁻²' },
    hint: {
      en: 'Between oppositely charged plates: E = σ / ε₀ => σ = ε₀ E.',
      si: 'විරුද්ධව ආරෝපිත තහඩු අතර: E = σ / ε₀ => σ = ε₀ E.',
    },
    solution: {
      en: 'E = σ / ε₀ => σ = ε₀ E = 8.854 × 10⁻¹² F m⁻¹ × 50,000 V m⁻¹ = 4.427 × 10⁻⁷ C m⁻² = 442.7 nC m⁻².',
      si: 'σ = ε₀ E = 8.854 × 10⁻¹² × 50,000 = 4.427 × 10⁻⁷ C m⁻² = 442.7 nC m⁻² වේ.',
    },
  },
  {
    id: 'elec-6-3-12',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the electric field outside the region between two large oppositely charged parallel conducting plates (with charges +σ and -σ)?',
      si: 'විශාල විරුද්ධව ආරෝපිත සමාන්තර සන්නායක තහඩු දෙකකට (+σ සහ -σ) පිටත ප්‍රදේශයේ විද්‍යුත් ක්ෂේත්‍රය කවරේද?',
    },
    options: [
      { id: 'a', text: { en: 'Zero (fields from both plates cancel)', si: 'ශුන්‍යයකි (තහඩු දෙකේ ක්ෂේත්‍ර එකිනෙක අවලංගු වේ)' } },
      { id: 'b', text: { en: 'σ / ε₀', si: 'σ / ε₀' } },
      { id: 'c', text: { en: '2σ / ε₀', si: '2σ / ε₀' } },
      { id: 'd', text: { en: 'σ / (2ε₀)', si: 'σ / (2ε₀)' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'E+ = σ/(2ε₀) directed away from positive plate; E- = σ/(2ε₀) directed toward negative plate.',
      si: 'ධන තහඩුවේ ක්ෂේත්‍රය ඉවතටද ඍණ තහඩුවේ ක්ෂේත්‍රය ඒ දෙසටද ක්‍රියා කර පිටතදී අවලංගු වේ.',
    },
    solution: {
      en: 'In the regions outside both plates, the electric field from the positive plate points outward while the field from the negative plate points inward with equal magnitude σ/(2ε₀). They cancel out completely, yielding E_outside = 0.',
      si: 'තහඩු දෙකට පිටතින්, ධන තහඩුවේ ක්ෂේත්‍රය (ඉවතට) සහ ඍණ තහඩුවේ ක්ෂේත්‍රය (ඇතුළට) සමාන විශාලත්වයෙන් (σ/(2ε₀)) යුතුව ප්‍රතිවිරුද්ධ දිශාවලට ක්‍රියා කරන බැවින් එකිනෙක අවලංගු වී ශුන්‍ය වේ.',
    },
  },
  {
    id: 'elec-6-3-13',
    competencyRef: 'Competency 6.3',
    category: 'gauss-law-conductors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If the net electric flux through a closed surface is zero, which of the following statements MUST be true?',
      si: 'සංවෘත පෘෂ්ඨයක් හරහා ශුද්ධ විද්‍යුත් ස්‍රාවය ශුන්‍ය නම්, පහත සඳහන් ප්‍රකාශන අතුරින් අනිවාර්යයෙන්ම සත්‍ය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'There are no charges anywhere inside the surface', si: 'පෘෂ්ඨය තුළ කිසිදු ආරෝපණයක් නොපවතී' } },
      { id: 'b', text: { en: 'The net charge enclosed by the surface is zero', si: 'පෘෂ්ඨය තුළ ඇති ශුද්ධ ආරෝපණය ශුන්‍ය වේ' } },
      { id: 'c', text: { en: 'The electric field is zero at every point on the surface', si: 'පෘෂ්ඨය මත සෑම ලක්ෂ්‍යයකදීම විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය වේ' } },
      { id: 'd', text: { en: 'The surface must be spherical', si: 'පෘෂ්ඨය අනිවාර්යයෙන්ම ගෝලාකාර විය යුතුය' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Φ = Q_enclosed / ε₀ = 0 implies Q_enclosed = 0. Equal positive and negative charges may exist inside.',
      si: 'Φ = Q_enclosed / ε₀ = 0 යනු Q_enclosed = 0 බවයි. සමාන ධන හා ඍණ ආරෝපණ පැවතිය හැක.',
    },
    solution: {
      en: 'By Gauss’s Law, Φ = Q_net_enclosed / ε₀. If Φ = 0, the algebraic sum of all charges enclosed inside the surface must be zero. (This does not mean charges are absent; an electric dipole inside encloses net zero charge).',
      si: 'ගවුස් නියමයට අනුව Φ = Q_enclosed / ε₀ වේ. Φ = 0 නම් පෘෂ්ඨය තුළ ඇති ආරෝපණවල වීජීය ඓක්‍යය (ශුද්ධ ආරෝපණය) ශුන්‍ය විය යුතුය (උදා: ද්විධ්‍රැවයක් පැවතිය හැක).',
    },
  },

  // =========================================================================
  // Competency 6.4: Capacitance, Dielectrics & Circuits (13 Questions)
  // =========================================================================
  {
    id: 'elec-6-4-01',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How is the electrical capacitance C of any conductor or capacitor defined?',
      si: 'ඕනෑම සන්නායකයක හෝ ධාරිත්‍රකයක විද්‍යුත් ධාරිතාව C අර්ථ දක්වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'The ratio of charge Q stored to the resulting potential difference V (C = Q / V)', si: 'ගබඩා කළ ආරෝපණය Q සහ ඇතිවන විභව අන්තරය V අතර අනුපාතය (C = Q / V)' } },
      { id: 'b', text: { en: 'The product of charge and voltage (C = Q · V)', si: 'ආරෝපණය සහ වෝල්ටීයතාවයේ ගුණිතය (C = Q · V)' } },
      { id: 'c', text: { en: 'The maximum current it can sustain in a circuit', si: 'පරිපථයකදී එයට දරාගත හැකි උපරිම ධාරාව' } },
      { id: 'd', text: { en: 'The energy stored per unit electric field', si: 'ඒකක විද්‍යුත් ක්ෂේත්‍රයකට ගබඩා වන ශක්තිය' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Capacitance is the charge required per unit rise in potential: C = Q/V.',
      si: 'ධාරිතාව යනු ඒකක විභව වැඩිවීමකට අවශ්‍ය ආරෝපණයයි: C = Q/V.',
    },
    solution: {
      en: 'Capacitance C is defined as the ratio of magnitude of charge Q on either conductor to the potential difference V between them: C = Q/V. SI unit is the Farad (F) = C V⁻¹.',
      si: 'ධාරිතාව C යනු ධාරිත්‍රකයක තහඩුවක් මත ආරෝපණය Q සහ තහඩු අතර විභව අන්තරය V අතර අනුපාතයයි: C = Q/V. SI ඒකකය ෆැරඩ් (F) හෙවත් C V⁻¹ වේ.',
    },
  },
  {
    id: 'elec-6-4-02',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A parallel-plate capacitor with air between the plates has plate area 200 cm² and plate separation 1.0 mm. Calculate its capacitance in picofarads (pF). Take ε₀ = 8.854 × 10⁻¹² F m⁻¹.',
      si: 'තහඩු අතර වාතය සහිත සමාන්තර තහඩු ධාරිත්‍රකයක තහඩු වර්ගඵලය 200 cm² සහ තහඩු අතර පරතරය 1.0 mm වේ. එහි ධාරිතාව පිකෝෆැරඩ් (pF) වලින් ගණනය කරන්න. ε₀ = 8.854 × 10⁻¹² F m⁻¹ ලෙස ගන්න.',
    },
    expected: 177.1,
    tolerance: 3.0,
    unit: { en: 'pF', si: 'pF' },
    hint: {
      en: 'C = ε₀ A / d. A = 200 × 10⁻⁴ m² = 0.02 m², d = 1.0 × 10⁻³ m. 1 pF = 10⁻¹² F.',
      si: 'C = ε₀ A / d. A = 0.02 m², d = 1.0 × 10⁻³ m. 1 pF = 10⁻¹² F.',
    },
    solution: {
      en: 'C = (8.854 × 10⁻¹² × 0.02) / 0.001 = 1.7708 × 10⁻¹⁰ F = 177.08 pF ≈ 177.1 pF.',
      si: 'C = (8.854 × 10⁻¹² × 0.02) / 0.001 = 1.771 × 10⁻¹⁰ F = 177.1 pF වේ.',
    },
  },
  {
    id: 'elec-6-4-03',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A parallel plate capacitor is charged by a battery and then DISCONNECTED from the battery. A slab of dielectric material (εᵣ = 4.0) is subsequently inserted between the plates. How do the stored charge Q, capacitance C, and potential difference V change?',
      si: 'සමාන්තර තහඩු ධාරිත්‍රකයක් බැටරියකින් ආරෝපණය කර පසුව බැටරියෙන් විසන්ධි කරනු ලැබේ. ඉන්පසු තහඩු අතරට පාරවිද්‍යුත් කුට්ටියක් (εᵣ = 4.0) ඇතුළු කරනු ලැබේ. ගබඩා වූ ආරෝපණය Q, ධාරිතාව C සහ විභව අන්තරය V වෙනස් වන්නේ කෙසේද?',
    },
    options: [
      { id: 'a', text: { en: 'Q remains constant, C increases by 4×, V decreases to V/4', si: 'Q නියතව පවතී, C 4 ගුණයකින් වැඩි වේ, V අගය V/4 දක්වා අඩු වේ' } },
      { id: 'b', text: { en: 'Q increases by 4×, C increases by 4×, V remains constant', si: 'Q 4 ගුණයකින් වැඩි වේ, C 4 ගුණයකින් වැඩි වේ, V නියතව පවතී' } },
      { id: 'c', text: { en: 'Q decreases to Q/4, C increases by 4×, V remains constant', si: 'Q අගය Q/4 දක්වා අඩු වේ, C 4 ගුණයකින් වැඩි වේ, V නියතව පවතී' } },
      { id: 'd', text: { en: 'Q remains constant, C decreases to C/4, V increases by 4×', si: 'Q නියතව පවතී, C අගය C/4 දක්වා අඩු වේ, V 4 ගුණයකින් වැඩි වේ' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Disconnected battery means charge Q is trapped (constant). C = εᵣ C₀. Then V = Q / C.',
      si: 'බැටරිය විසන්ධි කර ඇති බැවින් ආරෝපණය Q නියතයි. C = εᵣ C₀. ඉන්පසු V = Q / C.',
    },
    solution: {
      en: 'Because the battery is disconnected, charge has no path to flow, so Q = constant. The dielectric increases capacitance C = εᵣ C₀ = 4C₀. From V = Q/C = Q/(4C₀) = V₀/4, the potential difference drops to one-fourth.',
      si: 'බැටරිය විසන්ධි කර ඇති බැවින් ආරෝපණය සංස්ථිතිකයි (Q නියතයි). පාරවිද්‍යුතය නිසා ධාරිතාව 4 ගුණයකින් වැඩි වේ (C = 4C₀). V = Q/C බැවින් විභව අන්තරය V/4 දක්වා අඩු වේ.',
    },
  },
  {
    id: 'elec-6-4-04',
    competencyRef: 'Competency 6.4',
    category: 'capacitor-energy',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following expressions does NOT represent the electrostatic energy U stored in a charged capacitor?',
      si: 'ආරෝපිත ධාරිත්‍රකයක ගබඩා වූ ස්ථිති විද්‍යුත් ශක්තිය U නිවැරදිව ප්‍රකාශ නොකරන සමීකරණය කවරක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'U = 1/2 C V²', si: 'U = 1/2 C V²' } },
      { id: 'b', text: { en: 'U = Q² / (2C)', si: 'U = Q² / (2C)' } },
      { id: 'c', text: { en: 'U = 1/2 Q V', si: 'U = 1/2 Q V' } },
      { id: 'd', text: { en: 'U = 1/2 Q / V²', si: 'U = 1/2 Q / V²' } },
    ],
    correctOptionId: 'd',
    hint: {
      en: 'Using Q = CV, substitute into U = 1/2 Q V to get the valid forms.',
      si: 'Q = CV ආදේශ කර වලංගු ආකෘති පරීක්ෂා කරන්න.',
    },
    solution: {
      en: 'Work done charging a capacitor is U = ∫ V dq = ∫ (q/C) dq = Q²/(2C) = 1/2 CV² = 1/2 QV. The expression 1/2 Q / V² is dimensionally incorrect.',
      si: 'ධාරිත්‍රකයක ගබඩා ශක්තිය U = 1/2 CV² = Q²/(2C) = 1/2 QV වේ. 1/2 Q / V² මාන වශයෙන් වැරදිය.',
    },
  },
  {
    id: 'elec-6-4-05',
    competencyRef: 'Competency 6.4',
    category: 'capacitor-energy',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 50.0 μF capacitor is charged to a potential difference of 200 V. Calculate the energy stored in the capacitor in Joules.',
      si: '50.0 μF ධාරිත්‍රකයක් 200 V විභව අන්තරයකට ආරෝපණය කරනු ලැබේ. ධාරිත්‍රකයේ ගබඩා වන ශක්තිය ජූල් වලින් ගණනය කරන්න.',
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'U = 1/2 C V². 50 μF = 50 × 10⁻⁶ F.',
      si: 'U = 1/2 C V². 50 μF = 50 × 10⁻⁶ F.',
    },
    solution: {
      en: 'U = 1/2 C V² = 0.5 × (50.0 × 10⁻⁶ F) × (200 V)² = 25.0 × 10⁻⁶ × 40,000 = 1.0 J.',
      si: 'U = 1/2 C V² = 0.5 × (50.0 × 10⁻⁶) × (200)² = 1.0 J වේ.',
    },
  },
  {
    id: 'elec-6-4-06',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Three capacitors of capacitances 6.0 μF, 3.0 μF, and 2.0 μF are connected in series across a battery. Calculate the equivalent capacitance of this series combination in microfarads (μF).',
      si: '6.0 μF, 3.0 μF, සහ 2.0 μF ධාරිතාවන් සහිත ධාරිත්‍රක තුනක් බැටරියක් හරහා ශ්‍රේණිගතව සම්බන්ධ කර ඇත. මෙම ශ්‍රේණිගත සංයෝජනයේ සමක ධාරිතාව මයික්‍රොෆැරඩ් (μF) වලින් ගණනය කරන්න.',
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'μF', si: 'μF' },
    hint: {
      en: '1 / C_s = 1/C₁ + 1/C₂ + 1/C₃ = 1/6 + 1/3 + 1/2.',
      si: '1 / C_s = 1/C₁ + 1/C₂ + 1/C₃ = 1/6 + 1/3 + 1/2.',
    },
    solution: {
      en: '1/C_s = 1/6 + 1/3 + 1/2 = (1 + 2 + 3) / 6 = 6 / 6 = 1.0 μF⁻¹ => C_s = 1.0 μF.',
      si: '1/C_s = 1/6 + 2/6 + 3/6 = 6/6 = 1 => C_s = 1.0 μF වේ.',
    },
  },
  {
    id: 'elec-6-4-07',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two capacitors of 4.0 μF and 6.0 μF are connected in parallel across a 50 V DC supply. Calculate the total charge supplied by the battery in microCoulombs (μC).',
      si: '4.0 μF සහ 6.0 μF ධාරිත්‍රක දෙකක් 50 V DC සැපයුමක් හරහා සමාන්තරගතව සම්බන්ධ කර ඇත. බැටරිය මගින් සපයන මුළු ආරෝපණය මයික්‍රොකූලෝම් (μC) වලින් ගණනය කරන්න.',
    },
    expected: 500,
    tolerance: 10,
    unit: { en: 'μC', si: 'μC' },
    hint: {
      en: 'C_p = C₁ + C₂. Total Q = C_p × V.',
      si: 'C_p = C₁ + C₂. මුළු Q = C_p × V.',
    },
    solution: {
      en: 'C_p = 4.0 μF + 6.0 μF = 10.0 μF. Total Q = C_p × V = 10.0 μF × 50 V = 500 μC.',
      si: 'C_p = 4.0 + 6.0 = 10.0 μF. Q = C_p × V = 10.0 μF × 50 V = 500 μC වේ.',
    },
  },
  {
    id: 'elec-6-4-08',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 10.0 μF capacitor charged to 100 V is connected in parallel with an uncharged 40.0 μF capacitor. What is the common potential difference in Volts across the capacitors after connection?',
      si: '100 V ට ආරෝපණය කළ 10.0 μF ධාරිත්‍රකයක් ආරෝපණය නොකළ 40.0 μF ධාරිත්‍රකයක් සමග සමාන්තරගතව සම්බන්ධ කරනු ලැබේ. සම්බන්ධ කිරීමෙන් පසු ධාරිත්‍රක හරහා පොදු විභව අන්තරය වෝල්ට් වලින් කොපමණද?',
    },
    expected: 20.0,
    tolerance: 0.5,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Conservation of charge: Q_total = C₁ V₁. Common voltage V_common = Q_total / (C₁ + C₂).',
      si: 'ආරෝපණ සංස්ථිතියෙන්: Q_total = C₁ V₁. පොදු වෝල්ටීයතාව V_common = Q_total / (C₁ + C₂).',
    },
    solution: {
      en: 'Initial charge Q = C₁ V₁ = 10.0 μF × 100 V = 1000 μC. Total capacitance in parallel C_total = 10.0 + 40.0 = 50.0 μF. V_common = Q / C_total = 1000 μC / 50.0 μF = 20.0 V.',
      si: 'ආරම්භක Q = 10.0 × 100 = 1000 μC. මුළු ධාරිතාව = 50.0 μF. V_common = 1000 / 50.0 = 20.0 V වේ.',
    },
  },
  {
    id: 'elec-6-4-09',
    competencyRef: 'Competency 6.4',
    category: 'capacitor-energy',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In the previous question, a 10 μF capacitor charged to 100 V (U_initial = 0.05 J) was connected in parallel with an uncharged 40 μF capacitor (final common V = 20 V). What happened to the mechanical/electrical energy of the system?',
      si: 'පෙර ප්‍රශ්නයේදී 100 V ට ආරෝපිත 10 μF ධාරිත්‍රකය (U_initial = 0.05 J) ආරෝපණය නොවූ 40 μF ධාරිත්‍රකයකට සම්බන්ධ කළ විට (V_final = 20 V), පද්ධතියේ ශක්තියට කුමක් සිදුවීද?',
    },
    options: [
      { id: 'a', text: { en: 'Energy remains exactly conserved at 0.05 J', si: 'ශක්තිය 0.05 J ලෙස සම්පූර්ණයෙන්ම සංස්ථිතික වේ' } },
      { id: 'b', text: { en: '0.04 J is lost as heat in the connecting wires and electromagnetic radiation during charge redistribution', si: 'ආරෝපණ ප්‍රතිසංවිධානයේදී සම්බන්ධක කම්බිවල තාපය සහ විද්‍යුත් චුම්භක විකිරණ ලෙස 0.04 J ක් හානි වේ' } },
      { id: 'c', text: { en: 'Total energy increases by 0.05 J due to mutual induction', si: 'අන්‍යෝන්‍ය ප්‍රේරණය නිසා මුළු ශක්තිය 0.05 J කින් වැඩි වේ' } },
      { id: 'd', text: { en: 'All 0.05 J is converted to chemical energy', si: 'මුළු 0.05 J ම රසායනික ශක්තිය බවට පත්වේ' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Calculate U_final = 1/2 C_total V_common² = 1/2 (50 μF)(20 V)² = 0.01 J. Compare with 0.05 J.',
      si: 'U_final = 1/2 (50 μF)(20 V)² = 0.01 J ගණනය කර 0.05 J සමග සසඳන්න.',
    },
    solution: {
      en: 'U_initial = 1/2 × 10e-6 × 100² = 0.05 J. U_final = 1/2 × 50e-6 × 20² = 0.01 J. Loss of energy = 0.05 - 0.01 = 0.04 J (80% lost). Energy is dissipated as Joule heating and RF electromagnetic radiation as transient currents surge between the plates.',
      si: 'U_initial = 0.05 J. U_final = 0.01 J. හානි වූ ශක්තිය = 0.04 J (80%). තහඩු අතර ධාරාව ගලා යාමේදී කම්බිවල තාපය සහ විද්‍යුත් චුම්භක විකිරණ ලෙස මෙම ශක්තිය හානි වේ.',
    },
  },
  {
    id: 'elec-6-4-10',
    competencyRef: 'Competency 6.4',
    category: 'capacitor-energy',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Calculate the electrostatic energy density in Joules per cubic metre (J m⁻³) stored in an electric field of magnitude 2.0 × 10⁶ V m⁻¹ in vacuum. Take ε₀ = 8.854 × 10⁻¹² F m⁻¹.',
      si: 'රික්තයේ 2.0 × 10⁶ V m⁻¹ විශාලත්වැති විද්‍යුත් ක්ෂේත්‍රයක ගබඩා වූ ස්ථිති විද්‍යුත් ශක්ති ඝනත්වය ඝන මීටරයකට ජූල් (J m⁻³) වලින් ගණනය කරන්න. ε₀ = 8.854 × 10⁻¹² F m⁻¹ ලෙස ගන්න.',
    },
    expected: 17.71,
    tolerance: 0.3,
    unit: { en: 'J m⁻³', si: 'J m⁻³' },
    hint: {
      en: 'u = 1/2 ε₀ E².',
      si: 'u = 1/2 ε₀ E².',
    },
    solution: {
      en: 'u = 1/2 ε₀ E² = 0.5 × (8.854 × 10⁻¹²) × (2.0 × 10⁶)² = 0.5 × 8.854 × 10⁻¹² × 4.0 × 10¹² = 17.708 J m⁻³.',
      si: 'u = 1/2 ε₀ E² = 0.5 × (8.854 × 10⁻¹²) × (4.0 × 10¹²) = 17.71 J m⁻³ වේ.',
    },
  },
  {
    id: 'elec-6-4-11',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What causes the dielectric constant (relative permittivity εᵣ) of an insulating material to be greater than 1?',
      si: 'පරිවාරක ද්‍රව්‍යයක පාරවිද්‍යුත් නියතය (සාපේක්ෂ පාරගම්‍යතාව εᵣ) 1 ට වඩා වැඩි වීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'a', text: { en: 'Electric polarization of atoms/molecules induces internal bound charges that create an opposing electric field, reducing net E and increasing C', si: 'පරමාණු/අණුවල විද්‍යුත් ධ්‍රැවීකරණය නිසා ඇතිවන ප්‍රතිවිරුද්ධ අභ්‍යන්තර ක්ෂේත්‍රය මගින් ශුද්ධ E අඩු කර ධාරිතාව C වැඩි කිරීම' } },
      { id: 'b', text: { en: 'Dielectric materials conduct electric current at high speed', si: 'පාරවිද්‍යුත් ද්‍රව්‍ය අධික වේගයෙන් විද්‍යුත් ධාරාව සන්නයනය කිරීම' } },
      { id: 'c', text: { en: 'Dielectrics create free electrons out of nothing', si: 'පාරවිද්‍යුත මගින් නිදහස් ඉලෙක්ට්‍රෝන අලුතින් ජනනය කිරීම' } },
      { id: 'd', text: { en: 'Dielectrics generate heat that expands the capacitor plates', si: 'පාරවිද්‍යුත මගින් තාපය නිපදවා තහඩු ප්‍රසාරණය කිරීම' } },
    ],
    correctOptionId: 'a',
    hint: {
      en: 'Under an applied field, bound charges align (dielectric polarization), creating E_induced opposite to E_applied.',
      si: 'යෙදූ ක්ෂේත්‍රය හමුවේ අණුක ධ්‍රැවීකරණය වී යෙදූ ක්ෂේත්‍රයට විරුද්ධව ප්‍රේරිත ක්ෂේත්‍රයක් ඇතිවේ.',
    },
    solution: {
      en: 'In an external electric field, charges in the dielectric shift slightly (molecular polarization), producing surface bound charges. This creates an internal induced field E_ind opposing the applied field E₀, reducing the net field to E = E₀/εᵣ. For a given charge Q, voltage V drops, so C = Q/V increases by factor εᵣ.',
      si: 'බාහිර ක්ෂේත්‍රයක් හමුවේ පාරවිද්‍යුතයේ අණු ධ්‍රැවීකරණය වී ප්‍රතිවිරුද්ධ ප්‍රේරිත ක්ෂේත්‍රයක් ඇති කරයි. එමගින් ශුද්ධ ක්ෂේත්‍රය E = E₀/εᵣ දක්වා අඩු වී විභවය අඩුවන බැවින් ධාරිතාව C = Q/V εᵣ ගුණයකින් වැඩි වේ.',
    },
  },
  {
    id: 'elec-6-4-12',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A parallel plate capacitor is kept connected to a battery of constant voltage V. If the plate separation d is halved, what happens to the stored energy U?',
      si: 'සමාන්තර තහඩු ධාරිත්‍රකයක් නියත වෝල්ටීයතාව V වූ බැටරියකට සම්බන්ධ කර තබා ඇත. තහඩු අතර පරතරය d අඩක් කළහොත්, ගබඩා වූ ශක්තිය U ට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'a', text: { en: 'Stored energy is halved (U / 2)', si: 'ගබඩා ශක්තිය අඩක් වේ (U / 2)' } },
      { id: 'b', text: { en: 'Stored energy doubles (2 U)', si: 'ගබඩා ශක්තිය දෙගුණ වේ (2 U)' } },
      { id: 'c', text: { en: 'Stored energy quadruples (4 U)', si: 'ගබඩා ශක්තිය හතර ගුණ වේ (4 U)' } },
      { id: 'd', text: { en: 'Stored energy remains unchanged', si: 'ගබඩා ශක්තිය නොවෙනස්ව පවතී' } },
    ],
    correctOptionId: 'b',
    hint: {
      en: 'Since battery is connected, V is constant: U = 1/2 C V². C = ε₀ A / d.',
      si: 'බැටරිය සම්බන්ධ බැවින් V නියතයි: U = 1/2 C V². C = ε₀ A / d.',
    },
    solution: {
      en: 'With battery connected, V = constant. C = ε₀ A / d; halving d doubles capacitance (C_new = 2C). Since U = 1/2 C V², doubling C doubles the stored energy (U_new = 2U). The battery delivers the extra energy.',
      si: 'බැටරිය සම්බන්ධව ඇති බැවින් V නියතයි. d අඩක් වන විට ධාරිතාව C දෙගුණ වේ. U = 1/2 C V² බැවින් ගබඩා ශක්තිය දෙගුණ වේ (2 U). අමතර ශක්තිය සපයනු ලබන්නේ බැටරිය මගිනි.',
    },
  },
  {
    id: 'elec-6-4-13',
    competencyRef: 'Competency 6.4',
    category: 'capacitance-dielectrics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Calculate the radius in meters of an isolated spherical conductor in vacuum required to have a capacitance of exactly 1.0 Farad. Take 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻¹.',
      si: 'රික්තයේ හරියටම 1.0 ෆැරඩ් ධාරිතාවක් ලබා ගැනීම සඳහා හුදකලා ගෝලීය සන්නායකයක තිබිය යුතු අරය මීටර වලින් ගණනය කරන්න. 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻¹ ලෙස ගන්න.',
    },
    expected: 8.99e9,
    tolerance: 1e8,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'For isolated sphere, C = 4πε₀ R => R = C / (4πε₀) = C × k.',
      si: 'හුදකලා ගෝලයකට C = 4πε₀ R => R = C × k.',
    },
    solution: {
      en: 'C = 4πε₀ R => R = C / (4πε₀) = 1.0 F × 8.99 × 10⁹ N m² C⁻² = 8.99 × 10⁹ m. (This is ~1400 times Earth’s radius, showing why 1 Farad is an extraordinarily huge unit of capacitance for an isolated body!)',
      si: 'R = C × k = 1.0 × 8.99 × 10⁹ = 8.99 × 10⁹ m වේ. (මෙය පෘථිවි අරය මෙන් ~1400 ගුණයක් වන අතර හුදකලා ගෝලයකට 1 F යනු අතිවිශාල ධාරිතාවක් බව පෙන්වයි!)',
    },
  },
  {
  "id": "elec-sq01",
  "competencyRef": "Competency 6.1",
  "category": "coulomb-law",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A system comprises two point charges +4 μC and +9 μC held fixed in air with a separation of 50 cm. (a) State Coulomb’s Law for electrostatics in mathematical form, defining all symbols and constants. (b) Determine the position along the line connecting the charges where the resultant electric field intensity is zero. (c) Explain why the electric potential at this neutral point is not zero.",
    "si": "වාතය තුළ 50 cm පරතරයකින් සවි කර ඇති +4 μC සහ +9 μC ලක්ෂ්‍යමය ආරෝපණ දෙකකින් සමන්විත පද්ධතියක් සලකන්න. (a) සියලු සංකේත සහ නියතයන් අර්ථ දක්වමින් ස්ථිති විද්‍යාව සඳහා කූලෝම් නියමය ගණිතමය ආකාරයෙන් ප්‍රකාශ කරන්න. (b) ආරෝපණ දෙක යා කරන රේඛාව දිගේ සම්ප්‍රයුක්ත විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව ශුන්‍ය වන ලක්ෂ්‍යයේ පිහිටීම නිර්ණය කරන්න. (c) මෙම උදාසීන ලක්ෂ්‍යයේදී විද්‍යුත් විභවය ශුන්‍ය නොවන්නේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Coulomb's Law and write its formula defining symbols.",
        "si": "කූලෝම් නියමය ප්‍රකාශ කර සංකේත අර්ථ දක්වමින් සූත්‍රය ලියන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Coulomb's Law: The electrostatic force between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. Formula: F = (1 / 4πε₀) * (|q₁q₂| / r²), where ε₀ is permittivity of free space (8.85 × 10⁻¹² F m⁻¹).",
        "si": "කූලෝම් නියමය: නිශ්චල ලක්ෂ්‍ය ආරෝපණ දෙකක් අතර ක්‍රියා කරන විද්‍යුත් ස්ථිතික බලය ආරෝපණවල විශාලත්වයන්ගේ ගුණිතයට අනුලෝමවත්, ඒවා අතර දුරෙහි වර්ගයට ප්‍රතිලෝමවත් සමානුපාතික වේ. F = (1 / 4πε₀) * (|q₁q₂| / r²), මෙහි ε₀ යනු නිදහස් අවකාශයේ පාරවේද්‍යතාවයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Direct proportionality to product of charges",
            "si": "ආරෝපණ ගුණිතයට අනුලෝම සමානුපාතික බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Inverse proportionality to square of separation",
            "si": "දුරෙහි වර්ගයට ප්‍රතිලෝම සමානුපාතික බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct equation with ε₀ defined",
            "si": "ε₀ අර්ථ දක්වමින් නිවැරදි සූත්‍රය"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the position of the neutral point from the +4 μC charge.",
        "si": "+4 μC ආරෝපණයේ සිට උදාසීන ලක්ෂ්‍යයේ දුර ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Let neutral point be at distance x from +4 μC charge. Distance from +9 μC charge is (0.50 - x). At neutral point: E₁ = E₂ => (1/4πε₀)(4 × 10⁻⁶ / x²) = (1/4πε₀)(9 × 10⁻⁶ / (0.50 - x)²). Taking square root: 2 / x = 3 / (0.50 - x) => 3x = 1.0 - 2x => 5x = 1.0 => x = 0.20 m = 20 cm.",
        "si": "+4 μC සිට දුර x නම්, +9 μC සිට දුර (0.50 - x) වේ. E₁ = E₂ => (4/x²) = (9/(0.50-x)²). දෙපසම වර්ගමූලය ගැනීමෙන්: 2/x = 3/(0.50-x) => 3x = 1.0 - 2x => 5x = 1.0 => x = 0.20 m = 20 cm."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Equating field magnitudes E₁ = E₂",
            "si": "ක්ෂේත්‍ර විශාලත්ව සමාන කිරීම E₁ = E₂"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct substitution of charges and distances",
            "si": "ආරෝපණ සහ දුර නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Simplifying square root expression correctly",
            "si": "වර්ගමූලය ගෙන සරල කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtaining x = 0.20 m (or 20 cm)",
            "si": "x = 0.20 m හෝ 20 cm ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why the electric potential at this neutral point is not zero.",
        "si": "මෙම උදාසීන ලක්ෂ්‍යයේදී විද්‍යුත් විභවය ශුන්‍ය නොවන්නේ මන්දැයි පැහැදිලි කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Electric field is a vector quantity, so fields from two positive charges point in opposite directions and cancel out to zero. Electric potential is a scalar quantity; potentials from both positive charges are positive (V = V₁ + V₂ > 0). Since both terms are positive scalars, their algebraic sum cannot be zero.",
        "si": "විද්‍යුත් ක්ෂේත්‍රය දෛශික රාශියක් බැවින් ධන ආරෝපණ දෙක මගින් ඇතිවන ක්ෂේත්‍ර ප්‍රතිවිරුද්ධ දිශාවලට ක්‍රියා කර එකිනෙක අවලංගු වී ශුන්‍ය වේ. විද්‍යුත් විභවය අදිශ රාශියක් වන අතර ධන ආරෝපණ දෙකෙහිම විභවයන් ධන අගයන් වේ (V = V₁ + V₂ > 0). ධන අදිශයන්ගේ වීජීය එකතුව ශුන්‍ය විය නොහැක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies E as vector and V as scalar",
            "si": "E දෛශිකයක් සහ V අදිශයක් බව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "States scalar addition of positive potentials",
            "si": "ධන විභවයන්ගේ අදිශ එකතුවක් බව දැක්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes algebraic sum V₁ + V₂ must remain positive",
            "si": "වීජීය එකතුව ධන අගයක් ගන්නා බව නිගමනය කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Field intensities cancel as opposing vectors; potentials add algebraically as positive scalars.",
    "si": "ප්‍රතිවිරුද්ධ දෛශික ලෙස ක්ෂේත්‍ර අවලංගු වේ; ධන අදිශ ලෙස විභව වීජීයව එකතු වේ."
  },
  "solution": {
    "en": "Neutral point is 20 cm from +4 μC charge. Potential V = (9×10⁹)(4×10⁻⁶/0.2 + 9×10⁻⁶/0.3) = 1.8×10⁵ + 2.7×10⁵ = 4.5×10⁵ V > 0.",
    "si": "උදාසීන ලක්ෂ්‍යය +4 μC සිට 20 cm වේ. විභවය V = 4.5×10⁵ V > 0 වේ."
  }
},
{
  "id": "elec-sq02",
  "competencyRef": "Competency 6.1",
  "category": "electric-field",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In a Millikan-type apparatus, two horizontal parallel plates are separated by 1.2 cm in air. An oil droplet of mass 4.8 × 10⁻¹⁵ kg carrying a negative charge q remains stationary when a potential difference of 720 V is applied between the plates. (Take g = 10 m s⁻²). (a) State which plate (upper or lower) must be connected to the positive terminal and explain why. (b) Calculate the electric field intensity between the plates. (c) Calculate the magnitude of the charge q on the droplet and the number of excess electrons it carries.",
    "si": "මිලිකන් ආකාරයේ උපකරණයක තිරස් සමාන්තර තහඩු දෙකක් වාතයේ 1.2 cm පරතරයකින් තබා ඇත. තහඩු අතර 720 V විභව අන්තරයක් යෙදූ විට q සෘණ ආරෝපණයක් දරන 4.8 × 10⁻¹⁵ kg ස්කන්ධයක් සහිත තෙල් බිංදුවක් නිශ්චලව පවතී (g = 10 m s⁻²). (a) ඉහළ හෝ පහළ තහඩුවෙන් ධන අග්‍රයට සම්බන්ධ කළ යුත්තේ කුමක්දැයි දක්වා හේතුව පහදන්න. (b) තහඩු අතර විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව ගණනය කරන්න. (c) තෙල් බිංදුවේ ඇති q ආරෝපණයේ විශාලත්වය සහ එහි ඇති අතිරික්ත ඉලෙක්ට්‍රෝන සංඛ්‍යාව ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Identify the positive plate and justify your answer based on force balance.",
        "si": "ධන තහඩුව හඳුනාගෙන බල සමතුලිතතාවය මත පදනම්ව ඔබේ පිළිතුර සාධාරණීකරණය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "The upper plate must be positive. The gravitational force mg acts vertically downwards on the droplet. For equilibrium, the electrostatic force qE must act vertically upwards. Since the droplet has a negative charge, an upward electric force requires an upward electric field, meaning field lines point upwards from a positive lower or negative upper? Wait: F = qE. Negative charge experiences force OPPOSITE to field. So field must point DOWNWARDS (from upper plate to lower plate), meaning upper plate is positive and lower plate is negative.",
        "si": "ඉහළ තහඩුව ධන විය යුතුය. ගුරුත්වාකර්ෂණ බලය (mg) සිරස්ව පහළට ක්‍රියා කරයි. සමතුලිතතාවය සඳහා විද්‍යුත් ස්ථිතික බලය (qE) සිරස්ව ඉහළට ක්‍රියා කළ යුතුය. සෘණ ආරෝපණයක් මත බලය ක්ෂේත්‍ර දිශාවට ප්‍රතිවිරුද්ධ බැවින් ක්ෂේත්‍රය පහළට තිබිය යුතුය. එබැවින් ඉහළ තහඩුව ධන අග්‍රයට සම්බන්ධ කළ යුතුය."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies upper plate as positive",
            "si": "ඉහළ තහඩුව ධන ලෙස හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies upward electric force balancing downward weight",
            "si": "පහළට බර සමතුලිත කිරීමට ඉහළට විද්‍යුත් බලය අවශ්‍ය බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains negative charge experiences force opposite to field",
            "si": "සෘණ ආරෝපණය මත බලය ක්ෂේත්‍රයට ප්‍රතිවිරුද්ධ බව දැක්වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the uniform electric field strength E between the plates.",
        "si": "තහඩු අතර ඒකාකාර විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "For uniform field between parallel plates: E = V / d = 720 V / (1.2 × 10⁻² m) = 60,000 V m⁻¹ = 6.0 × 10⁴ V m⁻¹ (or N C⁻¹).",
        "si": "සමාන්තර තහඩු අතර ඒකාකාර ක්ෂේත්‍රය සඳහා: E = V / d = 720 V / (1.2 × 10⁻² m) = 6.0 × 10⁴ V m⁻¹."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula E = V / d",
            "si": "E = V / d සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Conversion of 1.2 cm to 1.2 × 10⁻² m",
            "si": "1.2 cm මීටර බවට හැරවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains 6.0 × 10⁴ V m⁻¹ with correct unit",
            "si": "නිවැරදි ඒකකය සහිතව 6.0 × 10⁴ V m⁻¹ ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate the droplet charge q and number of excess electrons n (e = 1.6 × 10⁻¹⁹ C).",
        "si": "තෙල් බිංදුවේ ආරෝපණය q සහ අතිරික්ත ඉලෙක්ට්‍රෝන සංඛ්‍යාව n ගණනය කරන්න (e = 1.6 × 10⁻¹⁹ C)."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "At equilibrium: qE = mg => q = mg / E = (4.8 × 10⁻¹⁵ kg × 10 m s⁻²) / (6.0 × 10⁴ V m⁻¹) = 4.8 × 10⁻¹⁴ / 6.0 × 10⁴ = 8.0 × 10⁻¹⁹ C. Number of electrons n = q / e = (8.0 × 10⁻¹⁹ C) / (1.6 × 10⁻¹⁹ C) = 5 electrons.",
        "si": "සමතුලිතතාවයේදී: qE = mg => q = mg / E = (4.8 × 10⁻¹⁵ × 10) / (6.0 × 10⁴) = 8.0 × 10⁻¹⁹ C. ඉලෙක්ට්‍රෝන ගණන n = q / e = 8.0 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 5."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Equilibrium equation qE = mg",
            "si": "qE = mg සමතුලිතතා සමීකරණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates q = 8.0 × 10⁻¹⁹ C",
            "si": "q = 8.0 × 10⁻¹⁹ C ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Quantization formula n = q / e",
            "si": "n = q / e ක්වොන්ටීකරණ සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains exactly 5 electrons",
            "si": "ඉලෙක්ට්‍රෝන 5 ක් බව ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Balance downward weight mg with upward electric force qE; remember E = V/d.",
    "si": "පහළට බර mg ඉහළට විද්‍යුත් බලය qE සමග සමතුලිත කරන්න; E = V/d මතක තබා ගන්න."
  },
  "solution": {
    "en": "Upper plate is positive. E = 720 / 0.012 = 6.0 × 10⁴ V m⁻¹. q = mg/E = 8.0 × 10⁻¹⁹ C. n = 5.",
    "si": "ඉහළ තහඩුව ධන වේ. E = 6.0 × 10⁴ V m⁻¹. q = 8.0 × 10⁻¹⁹ C. n = 5."
  }
},
{
  "id": "elec-sq03",
  "competencyRef": "Competency 6.2",
  "category": "electric-potential",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "An isolated metal sphere of radius R = 10 cm in air is given a positive charge Q = +3.0 μC. (Take 1 / 4πε₀ = 9.0 × 10⁹ N m² C⁻²). (a) Define electric potential at a point in an electric field. (b) Calculate the electric potential at: (i) the surface of the sphere, (ii) a distance of 30 cm from the centre of the sphere, (iii) the centre of the sphere. (c) Sketch graphs showing the variation of electric field intensity E and electric potential V with distance r from the centre (0 ≤ r ≤ 3R).",
    "si": "වාතයේ ඇති R = 10 cm අරය සහිත හුදකලා ලෝහ ගෝලයකට Q = +3.0 μC ධන ආරෝපණයක් ලබා දී ඇත (1 / 4πε₀ = 9.0 × 10⁹ N m² C⁻²). (a) විද්‍යුත් ක්ෂේත්‍රයක ලක්ෂ්‍යයක විද්‍යුත් විභවය අර්ථ දක්වන්න. (b) (i) ගෝලයේ පෘෂ්ඨය මත, (ii) ගෝලයේ කේන්ද්‍රයේ සිට 30 cm දුරකින්, (iii) ගෝලයේ කේන්ද්‍රයේදී විද්‍යුත් විභවය ගණනය කරන්න. (c) කේන්ද්‍රයේ සිට r දුර සමග (0 ≤ r ≤ 3R) විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E සහ විද්‍යුත් විභවය V විචලනය වන ආකාරය දැක්වෙන ප්‍රස්තාර අඳින්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Define electric potential at a point.",
        "si": "ලක්ෂ්‍යයක විද්‍යුත් විභවය අර්ථ දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Electric potential at a point is the work done per unit positive charge in bringing a small test charge from infinity to that point against the electrostatic forces without acceleration.",
        "si": "විද්‍යුත් ක්ෂේත්‍රයක යම් ලක්ෂ්‍යයක විද්‍යුත් විභවය යනු, අනන්තයේ සිට එම ලක්ෂ්‍යය වෙත ත්වරණයකින් තොරව ඒකක ධන ආරෝපණයක් ගෙන ඒමේදී විද්‍යුත් ස්ථිතික බලවලට එරෙහිව කරනු ලබන කාර්යයයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Work done per unit positive charge",
            "si": "ඒකක ධන ආරෝපණයක් මත කෙරෙන කාර්යය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Bringing charge from infinity to that point",
            "si": "අනන්තයේ සිට අදාළ ලක්ෂ්‍යයට ගෙන ඒම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Against electrostatic forces / without acceleration",
            "si": "විද්‍යුත් ස්ථිතික බලවලට එරෙහිව / ත්වරණයකින් තොරව"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the potential at surface, at r = 30 cm, and at the centre.",
        "si": "පෘෂ්ඨය මත, r = 30 cm දුරින් සහ කේන්ද්‍රයේදී විභවය ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) At surface: V_s = (1/4πε₀)(Q/R) = (9.0 × 10⁹)(3.0 × 10⁻⁶ / 0.10) = 2.7 × 10⁵ V (270 kV). (ii) At r = 30 cm = 0.30 m: V = (9.0 × 10⁹)(3.0 × 10⁻⁶ / 0.30) = 9.0 × 10⁴ V (90 kV). (iii) At centre: The interior of a conductor is an equipotential region equal to surface potential, so V_centre = V_s = 2.7 × 10⁵ V.",
        "si": "(i) පෘෂ්ඨය මත: V_s = (9.0 × 10⁹)(3.0 × 10⁻⁶ / 0.10) = 2.7 × 10⁵ V. (ii) r = 0.30 m හිදී: V = (9.0 × 10⁹)(3.0 × 10⁻⁶ / 0.30) = 9.0 × 10⁴ V. (iii) කේන්ද්‍රයේදී: සන්නායකයක් අභ්‍යන්තරය සමවිභව ප්‍රදේශයක් වන බැවින් පෘෂ්ඨයේ විභවයට සමාන වේ, V_centre = 2.7 × 10⁵ V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Surface potential V_s = 2.7 × 10⁵ V",
            "si": "පෘෂ්ඨ විභවය 2.7 × 10⁵ V"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Potential at 30 cm V = 9.0 × 10⁴ V",
            "si": "30 cm දුරදී විභවය 9.0 × 10⁴ V"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Recognizes interior is equipotential with surface",
            "si": "අභ්‍යන්තරය පෘෂ්ඨයට සමවිභව බව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Centre potential = 2.7 × 10⁵ V",
            "si": "කේන්ද්‍ර විභවය 2.7 × 10⁵ V ලෙස ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Describe features of the E-r and V-r graphs from r = 0 to 3R.",
        "si": "r = 0 සිට 3R දක්වා E-r සහ V-r ප්‍රස්තාරවල ලක්ෂණ විස්තර කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "For E-r: Inside sphere (0 ≤ r < R), E = 0. At r = R, E jumps to maximum (E_max = Q/4πε₀R²). For r > R, E decays inversely with r² (E ∝ 1/r²). For V-r: Inside sphere (0 ≤ r ≤ R), V is constant at V_surface. For r > R, V decreases inversely with r (V ∝ 1/r) approaching 0 at infinity.",
        "si": "E-r සඳහා: ගෝලය තුළ (0 ≤ r < R), E = 0 වේ. r = R හිදී උපරිම අගයට ක්ෂණිකව පනී. r > R සඳහා E ∝ 1/r² ලෙස ක්ෂය වේ. V-r සඳහා: ගෝලය තුළ (0 ≤ r ≤ R), V පෘෂ්ඨ විභවයේ නියතව පවතී. r > R සඳහා V ∝ 1/r ලෙස අඩුවේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "E = 0 inside, peak at R, 1/r² outside",
            "si": "ඇතුළත E = 0, R හිදී උපරිම, පිටත 1/r²"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V = constant inside equal to surface potential",
            "si": "ඇතුළත V නියතව පෘෂ්ඨ අගයට සමාන වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V decays as 1/r outside",
            "si": "පිටතදී V ∝ 1/r ලෙස අඩුවීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Electric field inside a charged conductor is zero; electric potential inside is uniform and equal to surface potential.",
    "si": "ආරෝපිත සන්නායකයක් තුළ විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය වේ; අභ්‍යන්තර විභවය ඒකාකාරී වන අතර පෘෂ්ඨ විභවයට සමාන වේ."
  },
  "solution": {
    "en": "V_s = 2.7 × 10⁵ V; V(30cm) = 9.0 × 10⁴ V; V_centre = 2.7 × 10⁵ V.",
    "si": "V_s = 2.7 × 10⁵ V; V(30cm) = 9.0 × 10⁴ V; V_centre = 2.7 × 10⁵ V."
  }
},
{
  "id": "elec-sq04",
  "competencyRef": "Competency 6.2",
  "category": "gauss-law-conductors",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "Two thin concentric spherical conducting shells A and B have radii R₁ = 5 cm and R₂ = 15 cm respectively. Shell A carries charge +Q = +6.0 nC and shell B carries charge -Q = -6.0 nC. (Take 1 / 4πε₀ = 9.0 × 10⁹ N m² C⁻²). (a) State Gauss's Law for electrostatics in words. (b) Use spherical Gaussian surfaces to find the electric field intensity in the three regions: (i) r < R₁, (ii) R₁ < r < R₂, (iii) r > R₂. (c) Calculate the potential difference (V_A - V_B) between the two shells.",
    "si": "A සහ B තුනී ඒකකේන්ද්‍රික ගෝලාකාර සන්නායක කවච දෙකක අරයන් පිළිවෙළින් R₁ = 5 cm සහ R₂ = 15 cm වේ. A කවචය +Q = +6.0 nC ආරෝපණයක්ද, B කවචය -Q = -6.0 nC ආරෝපණයක්ද දරයි (1 / 4πε₀ = 9.0 × 10⁹ N m² C⁻²). (a) ස්ථිති විද්‍යාව සඳහා ගවුස් නියමය වචනයෙන් ප්‍රකාශ කරන්න. (b) ගෝලාකාර ගවුසීය පෘෂ්ඨ භාවිතයෙන් කලාප තුනෙහි විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව සොයන්න: (i) r < R₁, (ii) R₁ < r < R₂, (iii) r > R₂. (c) කවච දෙක අතර විභව අන්තරය (V_A - V_B) ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Gauss's Law for electrostatics.",
        "si": "ස්ථිති විද්‍යාව සඳහා ගවුස් නියමය ප්‍රකාශ කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Gauss's Law states that the total electric flux Φ_E through any closed surface is equal to 1/ε₀ times the total net electric charge enclosed by that surface: ∮ E · dA = Q_enclosed / ε₀.",
        "si": "ගවුස් නියමය: ඕනෑම සංවෘත පෘෂ්ඨයක් තුළින් පිටවන මුළු විද්‍යුත් ස්‍රාවය Φ_E, එම පෘෂ්ඨය තුළ පරිවෘත ශුද්ධ විද්‍යුත් ආරෝපණය මෙන් 1/ε₀ ගුණයකට සමාන වේ: ∮ E · dA = Q_enclosed / ε₀."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Total electric flux through a closed surface",
            "si": "සංවෘත පෘෂ්ඨයක් හරහා මුළු විද්‍යුත් ස්‍රාවය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Proportional to net enclosed charge",
            "si": "පරිවෘත ශුද්ධ ආරෝපණයට සමානුපාතික බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Constant factor of 1/ε₀",
            "si": "1/ε₀ ගුණාකාරය දැක්වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Find E in regions (i) r < R₁, (ii) R₁ < r < R₂, and (iii) r > R₂.",
        "si": "(i) r < R₁, (ii) R₁ < r < R₂, සහ (iii) r > R₂ කලාපවල E සොයන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) r < R₁: Enclosed charge Q_enc = 0, so E = 0. (ii) R₁ < r < R₂: Enclosed charge Q_enc = +Q, by symmetry ∮ E dA = E(4πr²) = Q / ε₀ => E = Q / (4πε₀r²), radially outwards. (iii) r > R₂: Enclosed charge Q_enc = +Q + (-Q) = 0, so E = 0.",
        "si": "(i) r < R₁: පරිවෘත ආරෝපණය 0 බැවින් E = 0. (ii) R₁ < r < R₂: පරිවෘත ආරෝපණය +Q වේ. සමමිතිකතාවයෙන් E(4πr²) = Q / ε₀ => E = Q / (4πε₀r²), අරීයව පිටතට. (iii) r > R₂: පරිවෘත මුළු ආරෝපණය +Q + (-Q) = 0 බැවින් E = 0."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "E = 0 for r < R₁ with reason Q_enc = 0",
            "si": "Q_enc = 0 බැවින් r < R₁ හි E = 0"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "E = Q / (4πε₀r²) for R₁ < r < R₂",
            "si": "R₁ < r < R₂ හි E = Q / (4πε₀r²)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "E = 0 for r > R₂ with reason net Q_enc = 0",
            "si": "ශුද්ධ ආරෝපණය 0 බැවින් r > R₂ හි E = 0"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "States radial direction of field",
            "si": "ක්ෂේත්‍රයේ අරීය දිශාව ප්‍රකාශ කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate the potential difference (V_A - V_B).",
        "si": "කවච දෙක අතර විභව අන්තරය (V_A - V_B) ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "V_A - V_B = (Q / 4πε₀) * (1/R₁ - 1/R₂) = (9.0 × 10⁹ × 6.0 × 10⁻⁹) * (1/0.05 - 1/0.15) = 54 * (20 - 6.667) = 54 * 13.333 = 720 V.",
        "si": "V_A - V_B = (Q / 4πε₀) * (1/R₁ - 1/R₂) = (9.0 × 10⁹ × 6.0 × 10⁻⁹) * (1/0.05 - 1/0.15) = 54 * (20 - 6.67) = 720 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula V_A - V_B = (Q/4πε₀)(1/R₁ - 1/R₂)",
            "si": "V_A - V_B = (Q/4πε₀)(1/R₁ - 1/R₂) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct substitution of radii in metres",
            "si": "මීටරවලින් අරයන් නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains 720 V",
            "si": "720 V ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Outside both concentric shells, net charge is zero, so field is zero. Potential difference depends on the field between them.",
    "si": "කවච දෙකටම පිටතින් ශුද්ධ ආරෝපණය ශුන්‍ය බැවින් ක්ෂේත්‍රය ශුන්‍ය වේ. විභව අන්තරය රඳා පවතින්නේ ඒවා අතර ක්ෂේත්‍රය මතයි."
  },
  "solution": {
    "en": "E = 0 for r < 5cm and r > 15cm. E = Q/(4πε₀r²) between. V_A - V_B = 54 × (20 - 6.67) = 720 V.",
    "si": "r < 5cm සහ r > 15cm හිදී E = 0. අතරතුර E = Q/(4πε₀r²). V_A - V_B = 720 V."
  }
},
{
  "id": "elec-sq05",
  "competencyRef": "Competency 6.3",
  "category": "gauss-law-conductors",
  "difficulty": "intermediate",
  "type": "structured",
  "question": {
    "en": "In electrostatics, the distribution of charge on conductors has important practical applications. (a) State how surface charge density σ varies with the curvature of a conductor’s surface. (b) Explain the phenomenon of \"action of points\" (corona discharge) and give two practical applications. (c) Explain why a passenger inside an all-metal automobile remains safe if the car is struck by lightning.",
    "si": "ස්ථිති විද්‍යාවේදී, සන්නායක මත ආරෝපණ ව්‍යාප්තිය වැදගත් ප්‍රායෝගික යෙදීම් සහිත වේ. (a) සන්නායකයක පෘෂ්ඨයේ වක්‍රතාව සමග පෘෂ්ඨික ආරෝපණ ඝනත්වය σ විචලනය වන ආකාරය දක්වන්න. (b) \"තුඩුවල ක්‍රියාව\" (කොරෝනා විසර්ජනය) පැහැදිලි කර එහි ප්‍රායෝගික යෙදීම් දෙකක් දක්වන්න. (c) අකුණු සැරයක් වැදුණද සම්පූර්ණ ලෝහමය මෝටර් රථයක් තුළ සිටින මගියෙකු ආරක්ෂිතව සිටින්නේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State the relationship between surface charge density and surface curvature.",
        "si": "පෘෂ්ඨික ආරෝපණ ඝනත්වය සහ පෘෂ්ඨයේ වක්‍රතාව අතර සම්බන්ධය දක්වන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "Surface charge density σ is directly proportional to the curvature of the surface (σ ∝ 1/r, where r is radius of curvature). Charge accumulates most densely at sharp points or regions of high curvature.",
        "si": "පෘෂ්ඨික ආරෝපණ ඝනත්වය σ පෘෂ්ඨයේ වක්‍රතාවයට අනුලෝමව සමානුපාතික වේ (σ ∝ 1/r, r යනු වක්‍රතා අරයයි). තියුණු තුඩු හෝ වැඩි වක්‍රතාවක් ඇති ස්ථානවල ආරෝපණ වැඩි ඝනත්වයකින් එක්රැස් වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Proportional to curvature (inversely to radius of curvature)",
            "si": "වක්‍රතාවට සමානුපාතික (වක්‍රතා අරයට ප්‍රතිලෝම) බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Highest charge density at sharp points",
            "si": "තියුණු තුඩුවල උපරිම ආරෝපණ ඝනත්වයක් ඇති බව"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain action of points and state two practical applications.",
        "si": "තුඩුවල ක්‍රියාව පැහැදිලි කර ප්‍රායෝගික යෙදීම් දෙකක් දක්වන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Action of points: At very sharp points, extremely high surface charge density creates an intense electric field in the surrounding air. This field ionizes air molecules (dielectric breakdown). Ions of the same sign as the point are repelled away forming an \"electric wind\", while opposite ions neutralize the charge on the point, discharging the conductor. Applications: (1) Lightning conductors (rods), (2) Van de Graaff generator spray combs, (3) Electrostatic precipitators.",
        "si": "තුඩුවල ක්‍රියාව: තියුණු තුඩුවල ඉතා ඉහළ ආරෝපණ ඝනත්වය හේතුවෙන් අවට වාතයේ ප්‍රබල විද්‍යුත් ක්ෂේත්‍රයක් හටගනී. එමගින් වායු අණු අයනීකරණය වේ. තුඩුවේ ආරෝපණයට සමාන ආරෝපණ සහිත අයන විකර්ෂණය වී \"විද්‍යුත් සුළඟක්\" ඇති කරන අතර ප්‍රතිවිරුද්ධ අයන තුඩුව වෙත ආකර්ෂණය වී එය විසර්ජනය කරයි. යෙදීම්: (1) අකුණු සන්නායක, (2) වැන් ඩි ග්‍රාෆ් උත්පාදකයේ ආරෝපණ පනා, (3) ස්ථිති විද්‍යුත් දුම් අවක්ෂේපක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Intense field at sharp point ionizes surrounding air",
            "si": "තියුණු තුඩුව අසල ප්‍රබල ක්ෂේත්‍රය වාතය අයනීකරණය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Repulsion of like ions creates electric wind and neutralizes conductor",
            "si": "සමාන අයන විකර්ෂණයෙන් විද්‍යුත් සුළඟ ඇතිවීම හා සන්නායකය විසර්ජනය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "First valid application stated",
            "si": "පළමු නිවැරදි යෙදීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Second valid application stated",
            "si": "දෙවන නිවැරදි යෙදීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why passengers inside a metal car are protected from lightning (Faraday cage effect).",
        "si": "ලෝහමය මෝටර් රථයක් තුළ සිටින මගීන් අකුණු සැරයෙන් ආරක්ෂා වන්නේ මන්දැයි පැහැදිලි කරන්න (ෆැරඩේ කූඩු ආචරණය)."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "The metal body of the automobile acts as a Faraday cage (electrostatic shield). When struck by lightning, excess charge remains entirely on the outer surface of the conducting body. Inside a closed conductor, the electric field is zero (E = 0) and the entire interior is at a uniform potential. Therefore, no current passes through the occupant, and no potential difference exists across their body.",
        "si": "මෝටර් රථයේ ලෝහමය බඳ ෆැරඩේ කූඩුවක් (ස්ථිති විද්‍යුත් ආවරණයක්) ලෙස ක්‍රියා කරයි. අකුණු සැර වැදුණු විට, අතිරික්ත ආරෝපණ සන්නායක බඳෙහි පිටත පෘෂ්ඨය මත පමණක් පවතී. සංවෘත සන්නායකයක් අභ්‍යන්තරයේ විද්‍යුත් ක්ෂේත්‍රය ශුන්‍ය වේ (E = 0) සහ මුළු අභ්‍යන්තරයම ඒකාකාර විභවයක පවතී. එබැවින් මගියා හරහා ධාරාවක් නොගලන අතර ශරීරය හරහා විභව අන්තරයක් ඇති නොවේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies car body as a Faraday cage / electrostatic shield",
            "si": "මෝටර් රථ බඳ ෆැරඩේ කූඩුවක්/ආවරණයක් ලෙස හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Charge resides entirely on the outer surface",
            "si": "ආරෝපණ පිටත පෘෂ්ඨය මත පමණක් රැඳෙන බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Electric field inside a hollow conductor is zero (E = 0)",
            "si": "බස්නා සන්නායකයක් තුළ E = 0 බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Interior is equipotential, so no current flows through occupant",
            "si": "අභ්‍යන්තරය සමවිභව බැවින් මගියා හරහා ධාරාවක් නොගැලීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Consider charge density variation with radius of curvature, ionization of air at points, and electrostatic shielding inside hollow conductors.",
    "si": "වක්‍රතා අරය සමග ආරෝපණ ඝනත්වය, තුඩුවලදී වාතය අයනීකරණය වීම, සහ බස්නා සන්නායක තුළ ස්ථිති විද්‍යුත් ආවරණය සලකන්න."
  },
  "solution": {
    "en": "σ ∝ 1/r. Action of points ionizes air creating electric wind (used in lightning rods). Metal car acts as Faraday cage: charge stays outside, interior E = 0.",
    "si": "σ ∝ 1/r. තුඩුවල ක්‍රියාවෙන් වාතය අයනීකරණය වේ. ලෝහ බඳ ෆැරඩේ කූඩුවක් වන අතර ඇතුළත E = 0 වේ."
  }
},
{
  "id": "elec-sq06",
  "competencyRef": "Competency 6.4",
  "category": "capacitance-dielectrics",
  "difficulty": "intermediate",
  "type": "structured",
  "question": {
    "en": "A parallel plate capacitor consists of two square metal plates of side length 20 cm separated by a distance d = 2.0 mm in vacuum. (ε₀ = 8.85 × 10⁻¹² F m⁻¹). The capacitor is connected to a 100 V DC power supply until fully charged. (a) Calculate the capacitance C₀ and the charge Q₀ on the capacitor. (b) While remaining connected to the 100 V supply, a dielectric slab of dielectric constant k = 4.0 is inserted filling the space between plates. Determine the new capacitance C, charge Q, and stored energy U. (c) Explain why the battery must supply additional energy when the dielectric slab is inserted.",
    "si": "රික්තකයක තබා ඇති 2.0 mm පරතරයක් සහිත 20 cm පැත්තක් ඇති සමචතුරස්‍රාකාර ලෝහ තහඩු දෙකකින් සමාන්තර තහඩු ධාරිත්‍රකයක් සමන්විත වේ (ε₀ = 8.85 × 10⁻¹² F m⁻¹). ධාරිත්‍රකය සම්පූර්ණයෙන්ම ආරෝපණය වන තෙක් 100 V සරල ධාරා සැපයුමකට සම්බන්ධ කර ඇත. (a) ධාරිත්‍රකයේ ධාරිතාව C₀ සහ ආරෝපණය Q₀ ගණනය කරන්න. (b) 100 V සැපයුමට සම්බන්ධ කර තිබියදීම, තහඩු අතර පරතරය සම්පූර්ණයෙන් පිරවෙන සේ k = 4.0 පාරවේද්‍යතා නියතයක් සහිත පාරවිද්‍යුත් කුට්ටියක් ඇතුළු කරනු ලැබේ. නව ධාරිතාව C, ආරෝපණය Q, සහ ගබඩා වූ ශක්තිය U නිර්ණය කරන්න. (c) පාරවිද්‍යුත් කුට්ටිය ඇතුළු කිරීමේදී බැටරිය මගින් අතිරේක ශක්තියක් සැපයිය යුත්තේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate C₀ and Q₀ in vacuum.",
        "si": "රික්තකය තුළ C₀ සහ Q₀ ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Area A = 0.20 m × 0.20 m = 0.04 m². Separation d = 2.0 × 10⁻³ m. C₀ = ε₀A / d = (8.85 × 10⁻¹² × 0.04) / (2.0 × 10⁻³) = 1.77 × 10⁻¹⁰ F = 177 pF. Charge Q₀ = C₀V = 1.77 × 10⁻¹⁰ F × 100 V = 1.77 × 10⁻⁸ C = 17.7 nC.",
        "si": "ක්ෂේත්‍රඵලය A = 0.20 × 0.20 = 0.04 m². d = 2.0 × 10⁻³ m. C₀ = ε₀A / d = (8.85 × 10⁻¹² × 0.04) / (2.0 × 10⁻³) = 1.77 × 10⁻¹⁰ F = 177 pF. ආරෝපණය Q₀ = C₀V = 1.77 × 10⁻¹⁰ × 100 = 1.77 × 10⁻⁸ C = 17.7 nC."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Area calculation A = 0.04 m²",
            "si": "ක්ෂේත්‍රඵලය A = 0.04 m²"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "C₀ = 1.77 × 10⁻¹⁰ F (or 177 pF)",
            "si": "C₀ = 1.77 × 10⁻¹⁰ F"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q₀ = 1.77 × 10⁻⁸ C (or 17.7 nC)",
            "si": "Q₀ = 1.77 × 10⁻⁸ C"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate new C, Q, and stored energy U with dielectric inserted.",
        "si": "පාරවිද්‍යුතය ඇතුළු කළ විට නව C, Q, සහ ගබඩා වූ ශක්තිය U ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "With battery connected, V remains constant at 100 V. New capacitance C = k C₀ = 4.0 × 1.77 × 10⁻¹⁰ = 7.08 × 10⁻¹⁰ F (708 pF). New charge Q = C V = 7.08 × 10⁻¹⁰ × 100 = 7.08 × 10⁻⁸ C (70.8 nC). Stored energy U = 1/2 C V² = 0.5 × (7.08 × 10⁻¹⁰ F) × (100 V)² = 3.54 × 10⁻⁶ J = 3.54 μJ.",
        "si": "බැටරිය සම්බන්ධ කර ඇති බැවින් V = 100 V නියතව පවතී. නව ධාරිතාව C = k C₀ = 4.0 × 1.77 × 10⁻¹⁰ = 7.08 × 10⁻¹⁰ F. නව ආරෝපණය Q = C V = 7.08 × 10⁻⁸ C. ගබඩා වූ ශක්තිය U = 1/2 C V² = 0.5 × 7.08 × 10⁻¹⁰ × 10000 = 3.54 × 10⁻⁶ J."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Notes V remains constant at 100 V",
            "si": "V = 100 V නියතව පවතින බව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "C = k C₀ = 7.08 × 10⁻¹⁰ F",
            "si": "C = 7.08 × 10⁻¹⁰ F ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q = 7.08 × 10⁻⁸ C",
            "si": "Q = 7.08 × 10⁻⁸ C ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "U = 3.54 × 10⁻⁶ J (3.54 μJ)",
            "si": "U = 3.54 × 10⁻⁶ J ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why the battery supplies energy and account for the energy balance.",
        "si": "බැටරිය ශක්තිය සපයන්නේ මන්දැයි පැහැදිලි කර ශක්ති තුලනය දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Because C increases by factor k while V is fixed, the capacitor draws extra charge ΔQ = (k - 1)Q₀ = 5.31 × 10⁻⁸ C from the battery. The battery delivers energy W = ΔQ × V = 5.31 × 10⁻⁶ J. Half of this supplied energy (ΔU = 1/2 ΔQ V = 2.655 μJ) goes into electrostatic field storage, while the other half is converted into mechanical work done pulling the dielectric slab into the plates (or dissipated as heat/resistance).",
        "si": "V නියතව තිබියදී C වැඩි වන බැවින් ධාරිත්‍රකය බැටරියෙන් අතිරේක ΔQ = 5.31 × 10⁻⁸ C ආරෝපණයක් ලබා ගනී. බැටරිය මගින් සැපයූ ශක්තිය W = ΔQ × V = 5.31 × 10⁻⁶ J වේ. මෙයින් අඩක් (ΔU = 2.655 μJ) ධාරිත්‍රකයේ විද්‍යුත් ක්ෂේත්‍රයේ ගබඩා වන අතර ඉතිරි අඩ පාරවිද්‍යුත් කුට්ටිය තහඩු අතරට ඇද ගැනීමේ යාන්ත්‍රික කාර්යය සඳහා වැය වේ (හෝ ප්‍රතිරෝධයේ තාපය ලෙස හානි වේ)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Battery transfers extra charge ΔQ at potential V",
            "si": "බැටරිය V විභවයේදී අතිරේක ආරෝපණයක් ΔQ සැපයීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Energy supplied by battery is ΔW = ΔQ × V",
            "si": "බැටරිය සැපයූ ශක්තිය ΔW = ΔQ × V වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Half goes into capacitor field, half into mechanical work/heat",
            "si": "අඩක් ධාරිත්‍රක ක්ෂේත්‍රයටද, අඩක් යාන්ත්‍රික කාර්යය/තාපයටද වැයවීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "When connected to a battery, voltage V is constant; inserting dielectric multiplies C and Q by k.",
    "si": "බැටරියට සම්බන්ධව ඇති විට V නියත වේ; පාරවිද්‍යුතයක් ඇතුළු කළ විට C සහ Q අගයන් k ගුණයකින් වැඩි වේ."
  },
  "solution": {
    "en": "C₀ = 1.77 × 10⁻¹⁰ F; Q₀ = 1.77 × 10⁻⁸ C. C = 7.08 × 10⁻¹⁰ F; Q = 7.08 × 10⁻⁸ C; U = 3.54 μJ.",
    "si": "C₀ = 1.77 × 10⁻¹⁰ F; Q₀ = 1.77 × 10⁻⁸ C. C = 7.08 × 10⁻¹⁰ F; Q = 7.08 × 10⁻⁸ C; U = 3.54 μJ."
  }
},
{
  "id": "elec-sq07",
  "competencyRef": "Competency 6.4",
  "category": "capacitor-energy",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A 6.0 μF capacitor is charged to a potential difference of 200 V using a power supply and then disconnected. It is subsequently connected in parallel with an uncharged 3.0 μF capacitor. (a) Derive an expression for the electrostatic energy stored in a capacitor of capacitance C carrying charge Q at potential difference V. (b) Calculate the common potential difference V_c across the two capacitors after connection. (c) Calculate the initial total stored energy U_i, final total stored energy U_f, and explain what happened to the lost energy.",
    "si": "6.0 μF ධාරිත්‍රකයක් බල සැපයුමක් භාවිතයෙන් 200 V විභව අන්තරයකට ආරෝපණය කර විසන්ධි කරනු ලැබේ. අනතුරුව එය ආරෝපණය නොකළ 3.0 μF ධාරිත්‍රකයකට සමාන්තරගතව සම්බන්ධ කරනු ලැබේ. (a) V විභව අන්තරයකදී Q ආරෝපණයක් දරන C ධාරිතාවයකින් යුත් ධාරිත්‍රකයක ගබඩා වන ස්ථිති විද්‍යුත් ශක්තිය සඳහා ප්‍රකාශනයක් ගොඩනගන්න. (b) සම්බන්ධ කිරීමෙන් පසු ධාරිත්‍රක දෙක හරහා පොදු විභව අන්තරය V_c ගණනය කරන්න. (c) ආරම්භක මුළු ශක්තිය U_i, අවසාන මුළු ශක්තිය U_f ගණනය කර අහිමි වූ ශක්තියට කුමක් සිදුවූයේ දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive the formula U = 1/2 Q V = 1/2 C V² for energy stored in a capacitor.",
        "si": "ධාරිත්‍රකයක ගබඩා වන ශක්තිය සඳහා U = 1/2 Q V = 1/2 C V² සූත්‍රය ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Consider a capacitor carrying charge q at potential difference v = q / C. To add an infinitesimal charge dq, the work done is dW = v dq = (q / C) dq. Total work done to charge from 0 to Q: W = ∫₀^Q (q / C) dq = [q² / (2C)]₀^Q = Q² / (2C). Substituting Q = CV gives W = 1/2 C V² = 1/2 Q V. This work is stored as electrostatic potential energy U.",
        "si": "v = q / C විභවයේදී q ආරෝපණයක් දරන ධාරිත්‍රකයකට කුඩා dq ආරෝපණයක් එක් කිරීමට කළ යුතු කාර්යය dW = v dq = (q/C) dq වේ. 0 සිට Q දක්වා ආරෝපණය කිරීමට මුළු කාර්යය W = ∫₀^Q (q/C) dq = Q² / (2C) වේ. Q = CV ආදේශයෙන් W = 1/2 C V² = 1/2 Q V ලැබේ. මෙය විද්‍යුත් ස්ථිතික විභව ශක්තිය U ලෙස ගබඩා වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Infinitesimal work expression dW = v dq = (q/C) dq",
            "si": "කුඩා කාර්යය dW = v dq = (q/C) dq ප්‍රකාශනය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Integration from 0 to Q",
            "si": "0 සිට Q දක්වා අනුකලනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains U = 1/2 Q² / C = 1/2 C V²",
            "si": "U = 1/2 Q² / C = 1/2 C V² ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the common potential difference V_c.",
        "si": "පොදු විභව අන්තරය V_c ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Initial charge Q = C₁ V₁ = 6.0 μF × 200 V = 1200 μC. By conservation of charge, when connected in parallel to C₂ = 3.0 μF, total charge remains 1200 μC. Equivalent capacitance C_total = C₁ + C₂ = 6.0 + 3.0 = 9.0 μF. Common potential V_c = Q_total / C_total = 1200 μC / 9.0 μF = 133.3 V (400 / 3 V).",
        "si": "ආරම්භක ආරෝපණය Q = C₁ V₁ = 6.0 μF × 200 V = 1200 μC. ආරෝපණ සංස්ථිතිය අනුව මුළු ආරෝපණය නියතය. සමාන්තරගත සමක ධාරිතාව C_total = 6.0 + 3.0 = 9.0 μF. පොදු විභවය V_c = Q_total / C_total = 1200 / 9.0 = 133.3 V (400/3 V)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Initial charge Q = 1200 μC",
            "si": "ආරම්භක ආරෝපණය Q = 1200 μC"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Parallel equivalent C_eq = 9.0 μF",
            "si": "සමාන්තර සමක ධාරිතාව 9.0 μF"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V_c = 133.3 V (or 400/3 V)",
            "si": "V_c = 133.3 V ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate initial and final energies and account for the energy difference.",
        "si": "ආරම්භක සහ අවසාන ශක්තීන් ගණනය කර ශක්ති වෙනස පැහැදිලි කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Initial energy U_i = 1/2 C₁ V₁² = 0.5 × (6.0 × 10⁻⁶ F) × (200 V)² = 0.12 J (120 mJ). Final energy U_f = 1/2 C_total V_c² = 0.5 × (9.0 × 10⁻⁶ F) × (400/3 V)² = 0.5 × 9.0 × 10⁻⁶ × (160000 / 9) = 0.08 J (80 mJ). Energy lost ΔU = U_i - U_f = 0.12 - 0.08 = 0.04 J (40 mJ). The lost energy is dissipated as Joule heat in the connecting wires during charge redistribution and radiated away as electromagnetic waves.",
        "si": "ආරම්භක ශක්තිය U_i = 1/2 C₁ V₁² = 0.5 × 6.0 × 10⁻⁶ × 40000 = 0.12 J. අවසාන ශක්තිය U_f = 1/2 C_total V_c² = 0.5 × 9.0 × 10⁻⁶ × (400/3)² = 0.08 J. අහිමි වූ ශක්තිය ΔU = 0.12 - 0.08 = 0.04 J (40 mJ). මෙම ශක්තිය ආරෝපණ යළි බෙදීයාමේදී සම්බන්ධක කම්බිවල ජූල් තාපය ලෙසද, විද්‍යුත් චුම්භක තරංග ලෙස විකිරණය වීමෙන්ද හානි වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "U_i = 0.12 J",
            "si": "U_i = 0.12 J ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "U_f = 0.08 J",
            "si": "U_f = 0.08 J ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates energy lost = 0.04 J",
            "si": "අහිමි වූ ශක්තිය 0.04 J ලෙස ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains loss as heat in wires and EM radiation",
            "si": "කම්බිවල තාපය සහ විද්‍යුත් චුම්භක විකිරණය ලෙස පැහැදිලි කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Charge is strictly conserved (Q = C_eq × V_c), but electrostatic energy decreases because current flowing during connection produces heat.",
    "si": "ආරෝපණය නියතව පවතී (Q = C_eq × V_c), නමුත් කම්බි ඔස්සේ ධාරාව ගලායාමේදී තාපය ජනනය වන නිසා ස්ථිති විද්‍යුත් ශක්තිය අඩුවේ."
  },
  "solution": {
    "en": "V_c = 133.3 V; U_i = 0.12 J; U_f = 0.08 J; Lost energy = 0.04 J as heat/radiation.",
    "si": "V_c = 133.3 V; U_i = 0.12 J; U_f = 0.08 J; හානි වූ ශක්තිය = 0.04 J තාපය/විකිරණය ලෙස."
  }
},
{
  "id": "elec-sq08",
  "competencyRef": "Competency 6.4",
  "category": "capacitance-dielectrics",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "Three capacitors C₁ = 2.0 μF, C₂ = 3.0 μF, and C₃ = 6.0 μF are connected in a bridge network across a 12 V battery with C₁ in series with C₂, and C₃ connected in parallel across the pair. (a) Draw the equivalent circuit diagram and calculate the total equivalent capacitance of the network. (b) Calculate the total charge supplied by the 12 V battery and the charge on each individual capacitor. (c) If a 4th capacitor C₄ = 6.0 μF is connected in series with the entire combination, find the new total capacitance.",
    "si": "C₁ = 2.0 μF, C₂ = 3.0 μF, සහ C₃ = 6.0 μF ධාරිත්‍රක තුනක් 12 V බැටරියක් හරහා සම්බන්ධ කර ඇත. මෙහි C₁ සහ C₂ ශ්‍රේණිගතව ඇති අතර එම යුගලයට සමාන්තරගතව C₃ සම්බන්ධ කර ඇත. (a) සමක පරිපථ සටහන ඇඳ ජාලයේ මුළු සමක ධාරිතාව ගණනය කරන්න. (b) 12 V බැටරිය මගින් සපයන මුළු ආරෝපණය සහ එක් එක් ධාරිත්‍රකය මත ඇති ආරෝපණය ගණනය කරන්න. (c) සම්පූර්ණ සංයෝජනයට ශ්‍රේණිගතව C₄ = 6.0 μF සිව්වන ධාරිත්‍රකයක් සම්බන්ධ කළහොත් නව මුළු ධාරිතාව සොයන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate the equivalent capacitance of C₁ and C₂ in series, and then with C₃ in parallel.",
        "si": "C₁ සහ C₂ ශ්‍රේණිගත සමකය සහ ඉන්පසු C₃ සමාන්තරගත කළ විට සමක ධාරිතාව ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "For C₁ and C₂ in series: 1/C₁₂ = 1/C₁ + 1/C₂ = 1/2 + 1/3 = 5/6 => C₁₂ = 6/5 = 1.2 μF. C₃ is in parallel with C₁₂: C_eq = C₁₂ + C₃ = 1.2 μF + 6.0 μF = 7.2 μF.",
        "si": "ශ්‍රේණිගත C₁ සහ C₂ සඳහා: 1/C₁₂ = 1/2 + 1/3 = 5/6 => C₁₂ = 1.2 μF. C₃ සමාන්තරගතව ඇති බැවින්: C_eq = 1.2 + 6.0 = 7.2 μF."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Series formula for C₁ and C₂",
            "si": "C₁ සහ C₂ සඳහා ශ්‍රේණිගත සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "C₁₂ = 1.2 μF",
            "si": "C₁₂ = 1.2 μF ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "C_eq = 7.2 μF",
            "si": "C_eq = 7.2 μF ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate total charge from 12 V battery and charge on each capacitor.",
        "si": "12 V බැටරියෙන් සපයන මුළු ආරෝපණය සහ එක් එක් ධාරිත්‍රකයේ ආරෝපණය ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Total charge Q_total = C_eq × V = 7.2 μF × 12 V = 86.4 μC. For C₃: connected directly across 12 V, so Q₃ = C₃ × V = 6.0 μF × 12 V = 72.0 μC. For series branch (C₁ and C₂): connected across 12 V, so Q₁ = Q₂ = C₁₂ × V = 1.2 μF × 12 V = 14.4 μC. (Check: Q₁₂ + Q₃ = 14.4 + 72.0 = 86.4 μC).",
        "si": "මුළු ආරෝපණය Q_total = C_eq × V = 7.2 μF × 12 V = 86.4 μC. C₃ සඳහා: 12 V හරහා සෘජුව ඇති බැවින් Q₃ = 6.0 × 12 = 72.0 μC. ශ්‍රේණිගත ශාඛාව සඳහා: Q₁ = Q₂ = C₁₂ × V = 1.2 × 12 = 14.4 μC."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Total charge Q_total = 86.4 μC",
            "si": "මුළු ආරෝපණය 86.4 μC"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q₃ = 72.0 μC",
            "si": "Q₃ = 72.0 μC ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q₁ = Q₂ (series identical charge property)",
            "si": "ශ්‍රේණිගත බැවින් Q₁ = Q₂ වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q₁ = Q₂ = 14.4 μC",
            "si": "Q₁ = Q₂ = 14.4 μC ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate new total capacitance when C₄ = 6.0 μF is connected in series with combination.",
        "si": "සංයෝජනයට ශ්‍රේණිගතව C₄ = 6.0 μF සම්බන්ධ කළ විට නව මුළු ධාරිතාව ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "1/C_new = 1/C_eq + 1/C₄ = 1/7.2 + 1/6.0 = (10/72) + (12/72) = 22 / 72 μF⁻¹. C_new = 72 / 22 = 3.27 μF (or 36/11 μF).",
        "si": "1/C_new = 1/7.2 + 1/6.0 = (10 + 12)/72 = 22/72 μF⁻¹. C_new = 72 / 22 = 3.27 μF (36/11 μF)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Series formula with C_eq and C₄",
            "si": "C_eq සහ C₄ සඳහා ශ්‍රේණිගත සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct fraction simplification",
            "si": "භාග නිවැරදිව සුළු කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains 3.27 μF (or 36/11 μF)",
            "si": "3.27 μF ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Break down the network into parallel and series sub-blocks; series capacitors have identical charge.",
    "si": "ජාලය ශ්‍රේණිගත සහ සමාන්තර කොටස්වලට වෙන් කරන්න; ශ්‍රේණිගත ධාරිත්‍රක මත ආරෝපණය එකම වේ."
  },
  "solution": {
    "en": "C_eq = 7.2 μF; Q_total = 86.4 μC; Q₃ = 72 μC; Q₁ = Q₂ = 14.4 μC; C_new = 3.27 μF.",
    "si": "C_eq = 7.2 μF; Q_total = 86.4 μC; Q₃ = 72 μC; Q₁ = Q₂ = 14.4 μC; C_new = 3.27 μF."
  }
},
{
  "id": "elec-sq09",
  "competencyRef": "Competency 6.4",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "An experiment is conducted to study the charging of a capacitor C through a resistor R = 100 kΩ using a 12 V DC source and a data logger/stopwatch with voltmeter. (a) Define the time constant τ of an RC circuit and calculate its theoretical value if C = 500 μF. (b) Write the equation for the voltage V(t) across the capacitor during charging and calculate the voltage at t = τ and t = 3τ. (c) Describe how the value of C can be determined experimentally from the voltage-time charging curve.",
    "si": "12 V සරල ධාරා ප්‍රභවයක් සහ වෝල්ට්මීටරයක් සහිත ස්ටොප්වොච්/දත්ත සටහන්කරුවෙකු භාවිතයෙන් R = 100 kΩ ප්‍රතිරෝධකයක් හරහා C ධාරිත්‍රකයක් ආරෝපණය වීම අධ්‍යයනය කිරීමට පරීක්ෂණයක් සිදු කරයි. (a) RC පරිපථයක කාල නියතය τ අර්ථ දක්වා C = 500 μF නම් එහි සෛද්ධාන්තික අගය ගණනය කරන්න. (b) ආරෝපණය වීමේදී ධාරිත්‍රකය හරහා වෝල්ටීයතාව V(t) සඳහා සමීකරණය ලියා t = τ සහ t = 3τ හිදී වෝල්ටීයතාව ගණනය කරන්න. (c) වෝල්ටීයතා-කාල ආරෝපණ වක්‍රයෙන් C හි අගය ප්‍රායෝගිකව නිර්ණය කරන ආකාරය විස්තර කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Define time constant τ and calculate τ = RC for R = 100 kΩ and C = 500 μF.",
        "si": "කාල නියතය τ අර්ථ දක්වා R = 100 kΩ සහ C = 500 μF සඳහා τ = RC ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "The time constant τ of an RC charging circuit is the time required for the capacitor voltage (or charge) to rise to approximately 63.2% (1 - 1/e) of its final steady-state value. Formula: τ = R × C. Calculation: τ = (100 × 10³ Ω) × (500 × 10⁻⁶ F) = 50 s.",
        "si": "RC ආරෝපණ පරිපථයක කාල නියතය τ යනු ධාරිත්‍රකයේ වෝල්ටීයතාව (හෝ ආරෝපණය) එහි අවසාන උපරිම අගයෙන් 63.2% (1 - 1/e) දක්වා ළඟා වීමට ගතවන කාලයයි. τ = RC = (100 × 10³ Ω) × (500 × 10⁻⁶ F) = 50 s."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Definition: time to reach 63.2% of maximum voltage",
            "si": "උපරිම වෝල්ටීයතාවයෙන් 63.2% දක්වා ළඟාවීමට ගතවන කාලය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula τ = RC",
            "si": "τ = RC සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains τ = 50 s",
            "si": "τ = 50 s ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "State V(t) equation and calculate V at t = τ and t = 3τ (V₀ = 12 V).",
        "si": "V(t) සමීකරණය ලියා t = τ සහ t = 3τ හිදී V ගණනය කරන්න (V₀ = 12 V)."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Equation: V(t) = V₀ (1 - e^(-t / RC)). At t = τ: V(τ) = 12 × (1 - e⁻¹) = 12 × (1 - 0.368) = 12 × 0.632 = 7.58 V. At t = 3τ: V(3τ) = 12 × (1 - e⁻³) = 12 × (1 - 0.050) = 12 × 0.950 = 11.40 V.",
        "si": "සමීකරණය: V(t) = V₀ (1 - e^(-t/RC)). t = τ හිදී: V = 12 × (1 - 0.368) = 7.58 V. t = 3τ හිදී: V = 12 × (1 - e⁻³) = 12 × (1 - 0.050) = 11.40 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Correct formula V(t) = V₀ (1 - e^(-t/RC))",
            "si": "V(t) = V₀ (1 - e^(-t/RC)) සමීකරණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V(τ) = 7.58 V (or 7.6 V)",
            "si": "V(τ) = 7.58 V"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V(3τ) = 11.4 V",
            "si": "V(3τ) = 11.4 V"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Describe how C is found experimentally from the curve or a linear graph.",
        "si": "වක්‍රයෙන් හෝ රේඛීය ප්‍රස්තාරයකින් C ප්‍රායෝගිකව සොයා ගන්නා ආකාරය විස්තර කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Method 1 (Direct from curve): From the recorded V-t curve, locate the time t_half when V = V₀ / 2 = 6.0 V. Since t_half = τ ln(2) = 0.693 RC, calculate C = t_half / (0.693 R). Method 2 (Linear graph): Rearrange V = V₀(1 - e^(-t/τ)) to ln((V₀ - V) / V₀) = -t / (RC). Plotting ln(V₀ - V) versus t yields a straight line with slope m = -1 / (RC). Measure the slope m, then calculate capacitance C = -1 / (m × R).",
        "si": "ක්‍රමය 1: V-t වක්‍රයෙන් V = V₀/2 = 6.0 V වන t_half කාලය මැනීම. t_half = 0.693 RC බැවින් C = t_half / (0.693 R) වේ. ක්‍රමය 2: ln(V₀ - V) එදිරිව t ප්‍රස්තාරයක් ඇඳීම. එහි අනුක්‍රමණය m = -1/(RC) වේ. අනුක්‍රමණයෙන් C = -1/(m × R) ගණනය කළ හැක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Linear form ln(V₀ - V) vs t or half-voltage time method",
            "si": "ln(V₀ - V) එදිරිව t රේඛීය ආකාරය හෝ අඩ-වෝල්ටීයතා ක්‍රමය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Relates slope m to -1/(RC)",
            "si": "අනුක්‍රමණය m = -1/(RC) බව දැක්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula to calculate C from slope: C = -1/(m R)",
            "si": "C = -1/(m R) මගින් C සෙවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mentions using known resistor value R",
            "si": "දන්නා ප්‍රතිරෝධක අගය R භාවිතය සඳහන් කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "In charging, capacitor voltage rises exponentially: V = V₀(1 - e^(-t/τ)); linearization gives ln(V₀ - V) = ln(V₀) - t/RC.",
    "si": "ආරෝපණයේදී වෝල්ටීයතාව ඝාතීයව ඉහළ යයි: V = V₀(1 - e^(-t/τ)); රේඛීයකරණයෙන් ln(V₀ - V) = ln(V₀) - t/RC ලැබේ."
  },
  "solution": {
    "en": "τ = 50 s; V(τ) = 7.58 V; V(3τ) = 11.4 V; C found from slope m = -1/(RC) => C = -1/(m R).",
    "si": "τ = 50 s; V(τ) = 7.58 V; V(3τ) = 11.4 V; C සෙවීම: අනුක්‍රමණය m = -1/(RC) => C = -1/(m R)."
  }
},
{
  "id": "elec-sq10",
  "competencyRef": "Competency 6.4",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In an experiment to investigate the factors affecting the capacitance of a parallel plate capacitor, a vibrating reed switch operating at frequency f = 50 Hz is used to charge the capacitor to potential difference V = 100 V and discharge it repeatedly through a sensitive microammeter. (a) Explain how the average discharge current I_avg is related to capacitance C, frequency f, and voltage V. (b) In an experiment investigating the effect of plate separation d, plate area was kept at A = 0.05 m² in air. The following data were obtained: for d = 2.0 mm, I_avg = 1.10 μA; for d = 5.0 mm, I_avg = 0.44 μA. Verify whether I_avg is inversely proportional to d. (c) State three precautions necessary to ensure accurate results in this experiment.",
    "si": "සමාන්තර තහඩු ධාරිත්‍රකයක ධාරිතාව කෙරෙහි බලපාන සාධක විමර්ශනය කිරීමේ පරීක්ෂණයකදී, f = 50 Hz සංඛ්‍යාතයකින් ක්‍රියාත්මක වන කම්පන බට ස්විචයක් භාවිතයෙන් ධාරිත්‍රකය V = 100 V විභව අන්තරයකට ආරෝපණය කර සංවේදී ක්ෂුද්‍ර ඇමීටරයක් හරහා නැවත නැවත විසර්ජනය කරනු ලැබේ. (a) සාමාන්‍ය විසර්ජන ධාරාව I_avg, ධාරිතාව C, සංඛ්‍යාතය f, සහ වෝල්ටීයතාව V සමග සම්බන්ධ වන ආකාරය පැහැදිලි කරන්න. (b) තහඩු පරතරය d හි බලපෑම විමර්ශනය කිරීමේදී වාතය තුළ තහඩු ක්ෂේත්‍රඵලය A = 0.05 m² ලෙස නියතව තබා ගන්නා ලදී. පහත දත්ත ලැබිණි: d = 2.0 mm සඳහා I_avg = 1.10 μA; d = 5.0 mm සඳහා I_avg = 0.44 μA. I_avg යනු d ට ප්‍රතිලෝමව සමානුපාතික දැයි සත්‍යාපනය කරන්න. (c) මෙම පරීක්ෂණයේදී නිවැරදි ප්‍රතිඵල ලබා ගැනීමට අවශ්‍ය පූර්වාරක්ෂාවන් තුනක් දක්වන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive the relationship I_avg = f C V for the reed switch method.",
        "si": "කම්පන බට ස්විච ක්‍රමය සඳහා I_avg = f C V සම්බන්ධතාව ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "In each cycle, charge stored is Q = C V. The capacitor is charged and completely discharged f times per second. Total charge passed through the microammeter per second is ΔQ / Δt = f × Q = f C V. Therefore, the average steady current read by the meter is I_avg = f C V.",
        "si": "එක් එක් චක්‍රයකදී ගබඩා වන ආරෝපණය Q = CV වේ. ධාරිත්‍රකය තත්පරයකට f වාරයක් ආරෝපණය වී සම්පූර්ණයෙන්ම විසර්ජනය වේ. තත්පරයකට ඇමීටරය හරහා ගමන් කරන මුළු ආරෝපණය ΔQ / Δt = f × Q = f C V වේ. එබැවින් සාමාන්‍ය ධාරාව I_avg = f C V වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Charge per cycle Q = CV",
            "si": "චක්‍රයකට ආරෝපණය Q = CV"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Number of discharges per second = f",
            "si": "තත්පරයකට විසර්ජන වාර ගණන = f"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes I_avg = f C V",
            "si": "I_avg = f C V බව නිගමනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Verify whether I_avg is inversely proportional to separation d.",
        "si": "I_avg තහඩු පරතරය d ට ප්‍රතිලෝමව සමානුපාතික දැයි සත්‍යාපනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "If I_avg ∝ 1/d, then the product (I_avg × d) should be constant. For d₁ = 2.0 mm = 2.0 × 10⁻³ m: I₁ × d₁ = 1.10 μA × 2.0 mm = 2.20 μA mm. For d₂ = 5.0 mm = 5.0 × 10⁻³ m: I₂ × d₂ = 0.44 μA × 5.0 mm = 2.20 μA mm. Since the products I₁d₁ = I₂d₂ = 2.20 μA mm are exactly equal, I_avg is confirmed to be inversely proportional to separation d (and since C ∝ I_avg, C ∝ 1/d).",
        "si": "I_avg ∝ 1/d නම්, (I_avg × d) ගුණිතය නියත විය යුතුය. d₁ = 2.0 mm සඳහා: 1.10 μA × 2.0 mm = 2.20 μA mm. d₂ = 5.0 mm සඳහා: 0.44 μA × 5.0 mm = 2.20 μA mm. ගුණිතයන් එකිනෙකට සමාන බැවින් (2.20 μA mm), I_avg යනු d ට ප්‍රතිලෝමව සමානුපාතික බව සනාථ වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Tests constancy of product I × d",
            "si": "I × d ගුණිතයේ නියතතාව පරීක්ෂා කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I₁d₁ = 2.20 μA mm",
            "si": "I₁d₁ = 2.20 μA mm ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I₂d₂ = 2.20 μA mm",
            "si": "I₂d₂ = 2.20 μA mm ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes inverse proportionality holds",
            "si": "ප්‍රතිලෝම සමානුපාතික බව තහවුරු කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "State three precautions for accurate results in this practical.",
        "si": "මෙම ප්‍රායෝගික පරීක්ෂණයේදී නිවැරදි ප්‍රතිඵල සඳහා අවශ්‍ය පූර්වාරක්ෂාවන් තුනක් දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(1) Ensure plates are strictly parallel to maintain a uniform electric field and separation throughout the area. (2) Keep connecting leads short and shielded to minimize stray (parasitic) capacitance. (3) Ensure the experiment is performed in a dry environment to prevent surface leakage current across insulating supports.",
        "si": "(1) ප්‍රදේශය පුරා ඒකාකාර ක්ෂේත්‍රයක් සහ පරතරයක් පවත්වා ගැනීමට තහඩු පරිපූර්ණව සමාන්තරව තැබීම. (2) අයාල ධාරිතාව අවම කිරීමට සම්බන්ධක කම්බි කෙටිව හා ආවරණය කර තබා ගැනීම. (3) පරිවාරක ආධාරක හරහා කාන්දු ධාරා වැළැක්වීමට වියළි පරිසරයක පරීක්ෂණය සිදු කිරීම."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Plates maintained strictly parallel",
            "si": "තහඩු දැඩි ලෙස සමාන්තරව තබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Minimizing stray capacitance / short leads",
            "si": "අයාල ධාරිතා අවම කිරීම / කෙටි කම්බි භාවිතය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Dry atmosphere / avoiding surface leakage currents",
            "si": "වියළි පරිසරය / පෘෂ්ඨික කාන්දු ධාරා වැළැක්වීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Reed switch discharges capacitor f times per second: I_avg = f Q = f C V; verify whether I × d is constant.",
    "si": "කම්පන බට ස්විචය තත්පරයකට f වාරයක් විසර්ජනය කරයි: I_avg = f Q = f C V; I × d නියත දැයි පරීක්ෂා කරන්න."
  },
  "solution": {
    "en": "I_avg = f C V. I₁d₁ = 2.20 = I₂d₂, verifying I ∝ 1/d. Precautions: parallel plates, avoid stray capacitance, prevent leakage.",
    "si": "I_avg = f C V. I₁d₁ = I₂d₂ = 2.20 බැවින් I ∝ 1/d සත්‍යාපනය වේ."
  }
}
];
