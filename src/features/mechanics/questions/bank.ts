import { MechanicsQuestion } from './types';

export const MECHANICS_QUESTION_BANK: MechanicsQuestion[] = [
  // =========================================================================
  // 1. KINEMATICS (Competency 2.1) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q01',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A car accelerates uniformly from rest to a velocity of 20 m s⁻¹ over a displacement of 50 m. What is its acceleration?',
      si: 'නිශ්චලතාවයේ සිට ඒකාකාර ත්වරණයෙන් ගමන් ආරම්භ කරන මෝටර් රථයක් 50 m විස්ථාපනයකදී 20 m s⁻¹ ප්‍රවේගයක් ලබා ගනී. එහි ත්වරණය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '2.0 m s⁻²', si: '2.0 m s⁻²' } },
      { id: 'B', text: { en: '4.0 m s⁻²', si: '4.0 m s⁻²' } },
      { id: 'C', text: { en: '8.0 m s⁻²', si: '8.0 m s⁻²' } },
      { id: 'D', text: { en: '10.0 m s⁻²', si: '10.0 m s⁻²' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Use the third kinematic equation: v² = u² + 2as where u = 0.',
      si: 'u = 0 වන විට තුන්වන චලිත සමීකරණය භාවිතා කරන්න: v² = u² + 2as.',
    },
    solution: {
      en: 'Using v² = u² + 2as:\n(20)² = 0² + 2 · a · 50\n400 = 100a ⇒ a = 4.0 m s⁻².',
      si: 'v² = u² + 2as සමීකරණයෙන්:\n(20)² = 0² + 2 · a · 50\n400 = 100a ⇒ a = 4.0 m s⁻².',
    },
  },
  {
    id: 'mech-q02',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A ball is projected vertically upwards with a velocity of 30 m s⁻¹. Taking g = 9.8 m s⁻², calculate the maximum height reached (in metres, to 1 decimal place).',
      si: 'බෝලයක් 30 m s⁻¹ ප්‍රවේගයකින් සිරස්ව ඉහළට විදිනු ලැබේ. g = 9.8 m s⁻² ලෙස ගෙන, එය ළඟා වන උපරිම උස මීටර් වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 45.9,
    tolerance: 0.3,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'At the maximum height, v = 0. Use v² = u² - 2gh.',
      si: 'උපරිම උසෙහිදී v = 0 වේ. v² = u² - 2gh භාවිතා කරන්න.',
    },
    solution: {
      en: 'At peak: v = 0 ⇒ 0 = u² - 2gh ⇒ h = u² / (2g) = (30)² / (2 · 9.8) = 900 / 19.6 ≈ 45.92 m.',
      si: 'උපරිම උසෙහිදී: v = 0 ⇒ 0 = u² - 2gh ⇒ h = u² / (2g) = (30)² / (2 · 9.8) = 900 / 19.6 ≈ 45.92 m.',
    },
  },
  {
    id: 'mech-q03',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What does the area under a velocity-time graph represent physically?',
      si: 'ප්‍රවේග-කාල ප්‍රස්ථාරයක වර්ගඵලයෙන් භෞතිකව නිරූපණය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Acceleration', si: 'ත්වරණය' } },
      { id: 'B', text: { en: 'Displacement', si: 'විස්ථාපනය' } },
      { id: 'C', text: { en: 'Rate of change of momentum', si: 'ගම්‍යතාව වෙනස්වීමේ සීඝ්‍රතාව' } },
      { id: 'D', text: { en: 'Instantaneous power', si: 'ක්ෂණික ක්ෂමතාව' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Consider the units of the product: (m s⁻¹) × (s) = m.',
      si: 'ඒකකවල ගුණිතය සලකන්න: (m s⁻¹) × (s) = m.',
    },
    solution: {
      en: 'The definite integral ∫ v dt equals displacement s. Hence the area under the v-t graph represents displacement.',
      si: '∫ v dt අනුකලනයෙන් විස්ථාපනය s ලැබේ. එබැවින් ප්‍රවේග-කාල ප්‍රස්ථාරයේ වර්ගඵලයෙන් විස්ථාපනය නිරූපණය වේ.',
    },
  },
  {
    id: 'mech-q04',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Train A travels East at 60 km h⁻¹ and Train B travels North at 80 km h⁻¹. What is the magnitude of the velocity of Train B relative to Train A?',
      si: 'A දුම්රිය 60 km h⁻¹ කින් නැගෙනහිරටද, B දුම්රිය 80 km h⁻¹ කින් උතුරටද ධාවනය වේ. A ට සාපේක්ෂව B හි ප්‍රවේගයේ විශාලත්වය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '20 km h⁻¹', si: '20 km h⁻¹' } },
      { id: 'B', text: { en: '100 km h⁻¹', si: '100 km h⁻¹' } },
      { id: 'C', text: { en: '140 km h⁻¹', si: '140 km h⁻¹' } },
      { id: 'D', text: { en: '70 km h⁻¹', si: '70 km h⁻¹' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Relative velocity v_{B|A} = v_B - v_A. Use vector subtraction for perpendicular components.',
      si: 'සාපේක්ෂ ප්‍රවේගය v_{B|A} = v_B - v_A. ලම්බක දෛශික අඩුකිරීමේ න්‍යාය යොදන්න.',
    },
    solution: {
      en: 'v_{B|A} = v_B - v_A = 80 ĵ - 60 î. Magnitude = √(80² + (-60)²) = √(6400 + 3600) = √10000 = 100 km h⁻¹.',
      si: 'v_{B|A} = v_B - v_A = 80 ĵ - 60 î. විශාලත්වය = √(80² + (-60)²) = √(6400 + 3600) = √10000 = 100 km h⁻¹.',
    },
  },
  {
    id: 'mech-q05',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A stone dropped from the top of a tower falls 25 m in its final second before hitting the ground. Taking g = 10 m s⁻², calculate the total height of the tower in metres.',
      si: 'කුළුණක් මුදුනේ සිට අතහරින ලද ගලක් බිම පතිත වීමට පෙර අවසන් තත්පරයේදී 25 m දුරක් වැටේ. g = 10 m s⁻² ලෙස ගෙන, කුළුණේ මුළු උස මීටර් වලින් ගණනය කරන්න.',
    },
    expected: 45.0,
    tolerance: 0.5,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'Distance in nth second: s_n = u + 0.5·g·(2n - 1) where u = 0.',
      si: 'n වන තත්පරයේ ගමන් කළ දුර: s_n = u + 0.5·g·(2n - 1) (u = 0).',
    },
    solution: {
      en: 's_n = 0 + 0.5 · 10 · (2n - 1) = 5(2n - 1) = 25 ⇒ 2n - 1 = 5 ⇒ n = 3 seconds. Total height H = 0.5 · g · n² = 0.5 · 10 · (3)² = 45 m.',
      si: 's_n = 0 + 0.5 · 10 · (2n - 1) = 5(2n - 1) = 25 ⇒ 2n - 1 = 5 ⇒ n = 3 තත්පර. මුළු උස H = 0.5 · g · n² = 0.5 · 10 · (3)² = 45 m.',
    },
  },
  {
    id: 'mech-q06',
    competencyRef: 'Competency 2.1',
    category: 'kinematics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A particle moves along a straight line such that its displacement is x = 2t³ - 6t² + 4 (in SI units). At what time t is the acceleration zero?',
      si: 'අංශුවක සරල රේඛීය විස්ථාපනය x = 2t³ - 6t² + 4 (SI ඒකක වලින්) වේ. ත්වරණය ශූන්‍ය වන කාලය t කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '0.5 s', si: '0.5 s' } },
      { id: 'B', text: { en: '1.0 s', si: '1.0 s' } },
      { id: 'C', text: { en: '1.5 s', si: '1.5 s' } },
      { id: 'D', text: { en: '2.0 s', si: '2.0 s' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Differentiate twice: v = dx/dt, a = dv/dt = d²x/dt².',
      si: 'දෙවරක් අවකලනය කරන්න: v = dx/dt, a = dv/dt = d²x/dt².',
    },
    solution: {
      en: 'v = dx/dt = 6t² - 12t. a = dv/dt = 12t - 12. Setting a = 0 gives 12t - 12 = 0 ⇒ t = 1.0 s.',
      si: 'v = dx/dt = 6t² - 12t. a = dv/dt = 12t - 12. a = 0 විට 12t - 12 = 0 ⇒ t = 1.0 s.',
    },
  },

  // =========================================================================
  // 2. PROJECTILE MOTION (Competency 2.1) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q07',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'At what angle of projection with the horizontal is the horizontal range of a projectile on level ground a maximum (neglecting air resistance)?',
      si: 'වායු ප්‍රතිරෝධය නොසලකා හරින විට, තිරස් තලයක් මත ප්‍රක්ෂේප්‍යයක තිරස් පරාසය උපරිම වන්නේ ප්‍රක්ෂේපණ කෝණය කොපමණ වූ විටද?',
    },
    options: [
      { id: 'A', text: { en: '30°', si: '30°' } },
      { id: 'B', text: { en: '45°', si: '45°' } },
      { id: 'C', text: { en: '60°', si: '60°' } },
      { id: 'D', text: { en: '90°', si: '90°' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Horizontal range R = (u² sin 2θ) / g. When is sin 2θ at its maximum value?',
      si: 'තිරස් පරාසය R = (u² sin 2θ) / g. sin 2θ උපරිම අගය ගන්නේ කවදාද?',
    },
    solution: {
      en: 'R = (u² sin 2θ) / g is maximized when sin 2θ = 1 ⇒ 2θ = 90° ⇒ θ = 45°.',
      si: 'R = (u² sin 2θ) / g උපරිම වන්නේ sin 2θ = 1 විටය ⇒ 2θ = 90° ⇒ θ = 45°.',
    },
  },
  {
    id: 'mech-q08',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A projectile is launched from ground level with speed 20 m s⁻¹ at an angle of 30° above the horizontal. Taking g = 9.8 m s⁻², calculate its time of flight in seconds (to 2 decimal places).',
      si: 'තිරසට 30° ක කෝණයකින් 20 m s⁻¹ ප්‍රවේගයෙන් බිම් මට්ටමේ සිට ප්‍රක්ෂේප්‍යයක් විදිනු ලැබේ. g = 9.8 m s⁻² ලෙස ගෙන, එහි චලන කාලය තත්පර වලින් ගණනය කරන්න (දශමස්ථාන 2කට).',
    },
    expected: 2.04,
    tolerance: 0.05,
    unit: { en: 's', si: 's' },
    hint: {
      en: 'Time of flight T = (2 u sin θ) / g.',
      si: 'චලන කාලය T = (2 u sin θ) / g.',
    },
    solution: {
      en: 'T = (2 · 20 · sin 30°) / 9.8 = (40 · 0.5) / 9.8 = 20 / 9.8 ≈ 2.04 s.',
      si: 'T = (2 · 20 · sin 30°) / 9.8 = (40 · 0.5) / 9.8 = 20 / 9.8 ≈ 2.04 s.',
    },
  },
  {
    id: 'mech-q09',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'For a projectile launched at an angle θ with speed u, what is its speed at the highest point of its trajectory?',
      si: 'u ප්‍රවේගයකින් තිරසට θ කෝණයකින් විදින ලද ප්‍රක්ෂේප්‍යයක උපරිම ලක්ෂ්‍යයේදී එහි වේගය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0', si: '0' } },
      { id: 'B', text: { en: 'u cos θ', si: 'u cos θ' } },
      { id: 'C', text: { en: 'u sin θ', si: 'u sin θ' } },
      { id: 'D', text: { en: 'u', si: 'u' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'At the apex, the vertical velocity is zero, but horizontal velocity is unchanged.',
      si: 'උපරිම ලක්ෂ්‍යයේදී සිරස් ප්‍රවේගය ශූන්‍ය වන නමුත් තිරස් ප්‍රවේගය වෙනස් නොවේ.',
    },
    solution: {
      en: 'At the highest point, v_y = 0. The horizontal velocity v_x = u cos θ remains constant because there is no horizontal acceleration. Thus total speed = u cos θ.',
      si: 'උපරිම ලක්ෂ්‍යයේදී v_y = 0 වේ. තිරස් ත්වරණයක් නොමැති බැවින් තිරස් ප්‍රවේගය v_x = u cos θ නියතව පවතී. එබැවින් වේගය = u cos θ.',
    },
  },
  {
    id: 'mech-q10',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A projectile launched at 50 m s⁻¹ achieves a horizontal range of 200 m on level ground. Taking g = 10 m s⁻², calculate the launch angle θ (in degrees, between 0° and 45°, to 1 decimal place).',
      si: '50 m s⁻¹ කින් විදින ලද ප්‍රක්ෂේප්‍යයක් මඟින් 200 m තිරස් පරාසයක් ආවරණය කරයි. g = 10 m s⁻² ලෙස ගෙන, ප්‍රක්ෂේපණ කෝණය θ අංශක වලින් ගණනය කරන්න (0° සහ 45° අතර, දශමස්ථාන 1කට).',
    },
    expected: 26.6,
    tolerance: 0.5,
    unit: { en: '°', si: '°' },
    hint: {
      en: 'R = (u² sin 2θ) / g ⇒ sin 2θ = (R · g) / u².',
      si: 'R = (u² sin 2θ) / g ⇒ sin 2θ = (R · g) / u².',
    },
    solution: {
      en: 'sin 2θ = (200 · 10) / (50)² = 2000 / 2500 = 0.8. 2θ = arcsin(0.8) ≈ 53.13° ⇒ θ ≈ 26.57° ≈ 26.6°.',
      si: 'sin 2θ = (200 · 10) / (50)² = 2000 / 2500 = 0.8. 2θ = arcsin(0.8) ≈ 53.13° ⇒ θ ≈ 26.57° ≈ 26.6°.',
    },
  },
  {
    id: 'mech-q11',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two projectiles are launched with the same initial speed u at complementary angles θ and (90° - θ). How do their horizontal ranges R₁ and R₂ compare?',
      si: 'එකම u ආරම්භක වේගයෙන් අනුපූරක කෝණ දෙකක් වන θ සහ (90° - θ) යටතේ ප්‍රක්ෂේප්‍ය දෙකක් විදිනු ලැබේ. ඒවායේ තිරස් පරාස R₁ සහ R₂ සසඳන්න.',
    },
    options: [
      { id: 'A', text: { en: 'R₁ > R₂', si: 'R₁ > R₂' } },
      { id: 'B', text: { en: 'R₁ < R₂', si: 'R₁ < R₂' } },
      { id: 'C', text: { en: 'R₁ = R₂', si: 'R₁ = R₂' } },
      { id: 'D', text: { en: 'R₁ + R₂ = 2u²/g', si: 'R₁ + R₂ = 2u²/g' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Notice that sin(2(90° - θ)) = sin(180° - 2θ) = sin(2θ).',
      si: 'sin(2(90° - θ)) = sin(180° - 2θ) = sin(2θ) බව සලකන්න.',
    },
    solution: {
      en: 'Because sin(2(90° - θ)) = sin(180° - 2θ) = sin 2θ, the formula R = (u² sin 2θ) / g yields identical horizontal ranges for complementary angles of projection.',
      si: 'sin(2(90° - θ)) = sin(180° - 2θ) = sin 2θ වන බැවින්, R = (u² sin 2θ) / g සමීකරණයට අනුව අනුපූරක කෝණ සඳහා තිරස් පරාස සමාන වේ (R₁ = R₂).',
    },
  },
  {
    id: 'mech-q12',
    competencyRef: 'Competency 2.1',
    category: 'projectiles',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An aircraft flying horizontally at 150 m s⁻¹ at an altitude of 490 m drops a package. Taking g = 9.8 m s⁻², what is the horizontal distance in metres traveled by the package before it strikes the ground?',
      si: '490 m උසකදී 150 m s⁻¹ තිරස් වේගයකින් පියාසර කරන ගුවන් යානයකින් පාර්සලයක් මුදා හරිනු ලැබේ. g = 9.8 m s⁻² ලෙස ගෙන, පාර්සලය පොළොවේ ගැටීමට පෙර ගමන් කරන තිරස් දුර මීටර් වලින් ගණනය කරන්න.',
    },
    expected: 1500,
    tolerance: 10,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'First calculate fall time from vertical motion: h = 0.5·g·t². Then horizontal distance x = u_x · t.',
      si: 'මුලින් සිරස් චලිතයෙන් වැටෙන කාලය සොයන්න: h = 0.5·g·t². ඉන්පසු තිරස් දුර x = u_x · t.',
    },
    solution: {
      en: 'Vertical fall: 490 = 0.5 · 9.8 · t² = 4.9 t² ⇒ t² = 100 ⇒ t = 10 s. Horizontal distance = 150 · 10 = 1500 m.',
      si: 'සිරස් වැටීම: 490 = 0.5 · 9.8 · t² = 4.9 t² ⇒ t² = 100 ⇒ t = 10 s. තිරස් දුර = 150 · 10 = 1500 m.',
    },
  },

  // =========================================================================
  // 3. NEWTON'S LAWS & MOMENTUM (Competency 2.3) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q13',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'According to Newton’s Third Law, when a horse pulls a cart forward, what is the reaction force to the force exerted by the horse on the cart?',
      si: 'නිව්ටන්ගේ තෙවන නියමයට අනුව, අශ්වයෙකු කරත්තය ඉදිරියට අදින විට, අශ්වයා විසින් කරත්තය මත යොදන බලයේ ප්‍රතික්‍රියා බලය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The forward friction force of the ground on the horse', si: 'පොළොව මඟින් අශ්වයා මත යොදන ඉදිරි ඝර්ෂණ බලය' } },
      { id: 'B', text: { en: 'The backward force exerted by the cart on the horse', si: 'කරත්තය මඟින් අශ්වයා මත යොදන පසුපස බලය' } },
      { id: 'C', text: { en: 'The gravitational force on the cart', si: 'කරත්තය මත ගුරුත්වාකර්ෂණ බලය' } },
      { id: 'D', text: { en: 'The rolling friction of the cart wheels', si: 'කරත්ත රෝදවල පෙරළුම් ඝර්ෂණය' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Action and reaction act on different bodies: if A exerts force on B, B exerts equal and opposite force on A.',
      si: 'ක්‍රියාව සහ ප්‍රතික්‍රියාව වෙනස් වස්තූන් දෙකක් මත ක්‍රියා කරයි: A වස්තුව B මත බලයක් යොදයි නම්, B වස්තුව A මත ප්‍රතිවිරුද්ධ බලයක් යොදයි.',
    },
    solution: {
      en: 'Action-reaction pairs act between the same two interacting objects. The reaction to "horse pulls cart" is "cart pulls horse" backward with equal magnitude.',
      si: 'ක්‍රියා-ප්‍රතික්‍රියා යුගල ක්‍රියාකරන්නේ අන්තර්ක්‍රියා කරන වස්තූන් දෙක අතරමය. "අශ්වයා කරත්තය ඇදීම" ට ප්‍රතික්‍රියාව වන්නේ "කරත්තය අශ්වයා පසුපසට ඇදීම" යි.',
    },
  },
  {
    id: 'mech-q14',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 0.15 kg cricket ball moving at 30 m s⁻¹ is caught and brought to rest in 0.05 seconds by a fielder. What is the average braking force exerted on the ball (in Newtons)?',
      si: '30 m s⁻¹ ප්‍රවේගයෙන් එන 0.15 kg ක්‍රිකට් පන්දුවක් පන්දු රකින්නෙකු විසින් තත්පර 0.05 කදී නවතා ගනී. පන්දුව මත යෙදූ සාමාන්‍ය වැළැක්වුම් බලය නිව්ටන් කීයද?',
    },
    expected: 90,
    tolerance: 1,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'Impulse J = F · Δt = Δp = m(v - u).',
      si: 'ආවේගය J = F · Δt = Δp = m(v - u).',
    },
    solution: {
      en: 'Δp = m(0 - u) = 0.15 · (-30) = -4.5 kg m s⁻¹. Force magnitude F = |Δp| / Δt = 4.5 / 0.05 = 90 N.',
      si: 'Δp = m(0 - u) = 0.15 · (-30) = -4.5 kg m s⁻¹. බලය F = |Δp| / Δt = 4.5 / 0.05 = 90 N.',
    },
  },
  {
    id: 'mech-q15',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In a completely inelastic collision between two isolated bodies in one dimension, which quantities are conserved?',
      si: 'හුදකලා වස්තූන් දෙකක් අතර එක් මානයක සිදුවන පූර්ණ අස්ථාපිත ගැටුමකදී සංස්ථිතික වන්නේ කුමන රාශීන් පමණක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Kinetic energy only', si: 'චාලක ශක්තිය පමණි' } },
      { id: 'B', text: { en: 'Total linear momentum only', si: 'මුළු රේඛීය ගම්‍යතාව පමණි' } },
      { id: 'C', text: { en: 'Both kinetic energy and linear momentum', si: 'චාලක ශක්තිය සහ රේඛීය ගම්‍යතාව දෙකම' } },
      { id: 'D', text: { en: 'Neither kinetic energy nor linear momentum', si: 'චාලක ශක්තිය හෝ රේඛීය ගම්‍යතාව දෙකම නොවේ' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Kinetic energy is dissipated as internal energy/heat/deformation in an inelastic collision.',
      si: 'අස්ථාපිත ගැටුමකදී චාලක ශක්තිය තාපය/විකෘති වීම් ලෙස හානි වේ.',
    },
    solution: {
      en: 'Linear momentum is strictly conserved in all collisions for an isolated system (net external force = 0). In an inelastic collision, kinetic energy is NOT conserved (some is converted to deformation and heat).',
      si: 'බාහිර බල නොමැති හුදකලා පද්ධතියක සියලු ගැටුම්වලදී රේඛීය ගම්‍යතාව සංස්ථිතික වේ. අස්ථාපිත ගැටුමකදී චාලක ශක්තිය සංස්ථිතික නොවේ.',
    },
  },
  {
    id: 'mech-q16',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 2 kg trolley moving at 6 m s⁻¹ collides head-on and coalesces (sticks together) with a stationary 4 kg trolley. Calculate the final common velocity in m s⁻¹.',
      si: '6 m s⁻¹ කින් චලනය වන 2 kg ට්‍රොලියක්, නිශ්චල 4 kg ට්‍රොලියක මුහුණට මුහුණ ගැටී එකට ඇලී ගමන් කරයි. ඒකාබද්ධ අවසාන ප්‍රවේගය m s⁻¹ වලින් ගණනය කරන්න.',
    },
    expected: 2.0,
    tolerance: 0.1,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'Conservation of linear momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v.',
      si: 'රේඛීය ගම්‍යතා සංස්ථිතිය: m₁u₁ + m₂u₂ = (m₁ + m₂)v.',
    },
    solution: {
      en: 'm₁u₁ + m₂u₂ = (m₁ + m₂)v ⇒ 2(6) + 4(0) = (2 + 4)v ⇒ 12 = 6v ⇒ v = 2.0 m s⁻¹.',
      si: 'm₁u₁ + m₂u₂ = (m₁ + m₂)v ⇒ 2(6) + 4(0) = (2 + 4)v ⇒ 12 = 6v ⇒ v = 2.0 m s⁻¹.',
    },
  },
  {
    id: 'mech-q17',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A man of mass 70 kg stands on a weighing scale inside a lift that accelerates downward at 2 m s⁻². Taking g = 10 m s⁻², what reading does the scale show in Newtons?',
      si: '70 kg ස්කන්ධයක් සහිත මිනිසෙකු 2 m s⁻² ක ත්වරණයෙන් පහළට ගමන් කරන විදුලි සෝපානයක් තුළ තුලාවක් මත සිටී. g = 10 m s⁻² විට, තුලාව පෙන්වන කියවීම නිව්ටන් කීයද?',
    },
    options: [
      { id: 'A', text: { en: '840 N', si: '840 N' } },
      { id: 'B', text: { en: '700 N', si: '700 N' } },
      { id: 'C', text: { en: '560 N', si: '560 N' } },
      { id: 'D', text: { en: '140 N', si: '140 N' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Equation of motion downwards: mg - R = ma ⇒ R = m(g - a).',
      si: 'පහළට චලිත සමීකරණය: mg - R = ma ⇒ R = m(g - a).',
    },
    solution: {
      en: 'R = m(g - a) = 70 · (10 - 2) = 70 · 8 = 560 N. The apparent weight decreases when accelerating downwards.',
      si: 'R = m(g - a) = 70 · (10 - 2) = 70 · 8 = 560 N. සෝපානය පහළට ත්වරණය වන විට දෘශ්‍ය බර අඩු වේ.',
    },
  },
  {
    id: 'mech-q18',
    competencyRef: 'Competency 2.3',
    category: 'newtons-laws-momentum',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A rocket of initial mass 1000 kg ejects fuel gases at a constant relative velocity of 2000 m s⁻¹. At what rate must fuel be burned (in kg s⁻¹) to give the rocket an initial upward acceleration of 10 m s⁻²? (Take g = 10 m s⁻²).',
      si: 'ආරම්භක ස්කන්ධය 1000 kg වූ රොකට්ටුවකින් 2000 m s⁻¹ සාපේක්ෂ ප්‍රවේගයෙන් වායු පිට කරයි. රොකට්ටුවට 10 m s⁻² ක ආරම්භක ඉහළ ත්වරණයක් ලබාදීමට ඉන්ධන දහනය කළ යුතු සීඝ්‍රතාව (kg s⁻¹ වලින්) ගණනය කරන්න (g = 10 m s⁻²).',
    },
    expected: 10.0,
    tolerance: 0.2,
    unit: { en: 'kg s⁻¹', si: 'kg s⁻¹' },
    hint: {
      en: 'Thrust T = u_rel · (dm/dt). Equation of motion: T - mg = ma ⇒ u_rel · (dm/dt) = m(g + a).',
      si: 'තෙරපුම T = u_rel · (dm/dt). චලිත සමීකරණය: T - mg = ma ⇒ u_rel · (dm/dt) = m(g + a).',
    },
    solution: {
      en: 'u_rel · (dm/dt) = m(g + a) ⇒ 2000 · (dm/dt) = 1000 · (10 + 10) = 20,000 ⇒ dm/dt = 20,000 / 2000 = 10 kg s⁻¹.',
      si: 'u_rel · (dm/dt) = m(g + a) ⇒ 2000 · (dm/dt) = 1000 · (10 + 10) = 20,000 ⇒ dm/dt = 20,000 / 2000 = 10 kg s⁻¹.',
    },
  },

  // =========================================================================
  // 4. EQUILIBRIUM OF FORCES & GRAVESANDE PRACTICAL (Competency 2.4) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q19',
    competencyRef: 'Competency 2.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Gravesande’s force board experiment to verify the Parallelogram Law, why is a small plane mirror strip placed under the threads when marking their directions on drawing paper?',
      si: 'බල සමාන්තරාස්‍ර නියමය සත්‍යාපනය කිරීමේ ග්‍රේව්සැන්ඩ් බල ලෑලි පරීක්ෂණයේදී, චිත්‍ර කඩදාසිය මත නූල්වල දිශාව ලකුණු කිරීමේදී නූලට යටින් කුඩා තල දර්පණ පටියක් තබන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'To illuminate the paper with reflected light', si: 'පරාවර්තනය වන ආලෝකයෙන් කඩදාසිය ආලෝකමත් කිරීමට' } },
      { id: 'B', text: { en: 'To eliminate parallax error by aligning the thread with its image', si: 'නූල සහ එහි ප්‍රතිබිම්භය සමපාත කර දෘෂ්ටි විලාස දෝෂය ඉවත් කිරීමට' } },
      { id: 'C', text: { en: 'To reduce friction between the thread and paper', si: 'නූල සහ කඩදාසිය අතර ඝර්ෂණය අවම කිරීමට' } },
      { id: 'D', text: { en: 'To prevent the paper from tearing', si: 'කඩදාසිය ඉරී යාම වැළැක්වීමට' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Parallax error occurs when viewing an object from an angle rather than perpendicularly.',
      si: 'නිරීක්ෂකයා ලම්බකව නොව ඇලව බලන විට දෘෂ්ටි විලාස දෝෂය හටගනී.',
    },
    solution: {
      en: 'By viewing so the thread covers its reflection in the mirror, the line of sight is guaranteed to be strictly normal to the board, completely eliminating parallax when pricking reference marks.',
      si: 'නූලෙන් එහි ප්‍රතිබිම්භය වැසෙන සේ බැලීමෙන්, දෘෂ්ටි රේඛාව ලෑල්ලට හරියටම ලම්බක වන බව තහවුරු වන අතර දෘෂ්ටි විලාස දෝෂය සම්පූර්ණයෙන්ම ඉවත් වේ.',
    },
  },
  {
    id: 'mech-q20',
    competencyRef: 'Competency 2.4',
    category: 'force-equilibrium',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Two forces of 30 N and 40 N act at right angles (90°) to each other on a particle. What is the magnitude of their resultant force?',
      si: 'අංශුවක් මත එකිනෙකට ලම්බකව (90°) 30 N සහ 40 N බල දෙකක් ක්‍රියා කරයි. ඒවායේ සම්ප්‍රයුක්ත බලයේ විශාලත්වය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '10 N', si: '10 N' } },
      { id: 'B', text: { en: '50 N', si: '50 N' } },
      { id: 'C', text: { en: '70 N', si: '70 N' } },
      { id: 'D', text: { en: '1200 N', si: '1200 N' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Resultant R = √(P² + Q² + 2PQ cos 90°) = √(P² + Q²).',
      si: 'සම්ප්‍රයුක්තය R = √(P² + Q² + 2PQ cos 90°) = √(P² + Q²).',
    },
    solution: {
      en: 'R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.',
      si: 'R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.',
    },
  },
  {
    id: 'mech-q21',
    competencyRef: 'Competency 2.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'On a Gravesande force board, forces P = 300 g wt and Q = 400 g wt act at an angle of 60°. Calculate the theoretical resultant diagonal force in g wt (to 1 decimal place).',
      si: 'ග්‍රේව්සැන්ඩ් බල ලෑල්ලක P = 300 g wt සහ Q = 400 g wt බල දෙකක් 60° කෝණයකින් ක්‍රියා කරයි. සමාන්තරාස්‍ර විකර්ණයෙන් ලැබෙන සෛද්ධාන්තික සම්ප්‍රයුක්තය g wt වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 608.3,
    tolerance: 1.0,
    unit: { en: 'g wt', si: 'g wt' },
    hint: {
      en: 'R = √(P² + Q² + 2PQ cos θ) where cos 60° = 0.5.',
      si: 'R = √(P² + Q² + 2PQ cos θ) (cos 60° = 0.5).',
    },
    solution: {
      en: 'R = √(300² + 400² + 2 · 300 · 400 · 0.5) = √(90,000 + 160,000 + 120,000) = √370,000 ≈ 608.28 g wt.',
      si: 'R = √(300² + 400² + 2 · 300 · 400 · 0.5) = √(90,000 + 160,000 + 120,000) = √370,000 ≈ 608.28 g wt.',
    },
  },
  {
    id: 'mech-q22',
    competencyRef: 'Competency 2.4',
    category: 'force-equilibrium',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Three coplanar forces in equilibrium act on a point. The angles opposite to forces F₁, F₂, and F₃ are 120°, 150°, and 90° respectively. What is the ratio F₁ : F₂ : F₃?',
      si: 'ලක්ෂ්‍යයක් මත තුල්‍යතාවයේ පවතින ඒකතල බල තුනක් ක්‍රියා කරයි. F₁, F₂, සහ F₃ බලවලට සම්මුඛ කෝණ පිළිවෙළින් 120°, 150°, සහ 90° වේ. F₁ : F₂ : F₃ අනුපාතය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '√3 : 1 : 2', si: '√3 : 1 : 2' } },
      { id: 'B', text: { en: '1 : √3 : 2', si: '1 : √3 : 2' } },
      { id: 'C', text: { en: '2 : 1 : √3', si: '2 : 1 : √3' } },
      { id: 'D', text: { en: '1 : 2 : √3', si: '1 : 2 : √3' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Apply Lami’s Theorem: F₁ / sin α = F₂ / sin β = F₃ / sin γ.',
      si: 'ලාමිගේ ප්‍රමේයය යොදන්න: F₁ / sin α = F₂ / sin β = F₃ / sin γ.',
    },
    solution: {
      en: 'By Lami’s Theorem: F₁ / sin 120° = F₂ / sin 150° = F₃ / sin 90°. Since sin 120° = √3/2, sin 150° = 1/2, sin 90° = 1, multiplying by 2 yields F₁ : F₂ : F₃ = √3 : 1 : 2.',
      si: 'ලාමිගේ ප්‍රමේයයෙන්: F₁ / sin 120° = F₂ / sin 150° = F₃ / sin 90°. sin 120° = √3/2, sin 150° = 1/2, sin 90° = 1 බැවින්, 2න් ගුණ කළ විට F₁ : F₂ : F₃ = √3 : 1 : 2 ලැබේ.',
    },
  },
  {
    id: 'mech-q23',
    competencyRef: 'Competency 2.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In the force board experiment, what practical precaution must be taken before marking the thread lines on the drawing paper?',
      si: 'බල ලෑලි පරීක්ෂණයේදී කඩදාසිය මත නූල්වල දිශාව ලකුණු කිරීමට පෙර ගත යුතු ප්‍රායෝගික පූර්වෝපාය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Heat the pulleys to expand the axle', si: 'කප්පි අක්ෂය ප්‍රසාරණය කිරීමට කප්පි රත් කිරීම' } },
      { id: 'B', text: { en: 'Gently tap the board to overcome pulley axle static friction', si: 'කප්පි අක්ෂයේ ස්ථිතික ඝර්ෂණය මැඩපැවැත්වීමට ලෑල්ලට මෘදුව තට්ටු කිරීම' } },
      { id: 'C', text: { en: 'Tie the central knot tightly to the board', si: 'මැද ගැටය ලෑල්ලට තදින් ගැටගැසීම' } },
      { id: 'D', text: { en: 'Submerge the weights in water', si: 'බර පඩි ජලයේ ගිල්වීම' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Small frictional forces at the pulley bearings can cause the central knot to settle in an offset non-equilibrium position.',
      si: 'කප්පි බෙයාරිංවල කුඩා ඝර්ෂණය නිසා ගැටය වැරදි තැනක නතර විය හැක.',
    },
    solution: {
      en: 'Gently tapping the board releases any static friction binding the strings over the pulley grooves, allowing the system to settle into its genuine minimum-potential equilibrium position.',
      si: 'ලෑල්ලට මෘදුව තට්ටු කිරීමෙන් කප්පි මත නූල් සිරවීම (ස්ථිතික ඝර්ෂණය) ඉවත් වී ගැටය නියම තුල්‍යතා පිහිටුමට පැමිණේ.',
    },
  },
  {
    id: 'mech-q24',
    competencyRef: 'Competency 2.4',
    category: 'force-equilibrium',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 10 kg mass is suspended by two light cords making angles of 30° and 60° with the horizontal ceiling. Taking g = 9.8 m s⁻², calculate the tension in the cord inclined at 60° (in Newtons, to 1 decimal place).',
      si: '10 kg ස්කන්ධයක් තිරස් වහලය සමඟ 30° සහ 60° කෝණ සාදන සැහැල්ලු නූල් දෙකකින් එල්ලා ඇත. g = 9.8 m s⁻² විට, 60° කෝණය සාදන නූලේ ආතතිය නිව්ටන් වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 84.9,
    tolerance: 0.5,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'The two cords are mutually perpendicular (30° + 60° = 90°). T₂ = W · sin 60° = W · cos 30°.',
      si: 'නූල් දෙක අතර කෝණය 90° කි. T₂ = W · sin 60° = W · cos 30°.',
    },
    solution: {
      en: 'Since the cord angle sum to 90°, the tensions are orthogonal. T_60 = W · sin 60° = (10 · 9.8) · (√3/2) = 98 · 0.8660 ≈ 84.87 N ≈ 84.9 N.',
      si: 'නූල් අතර කෝණය 90° වන බැවින් ආතතීන් ලම්බක වේ. T_60 = W · sin 60° = (10 · 9.8) · (√3/2) = 98 · 0.8660 ≈ 84.87 N ≈ 84.9 N.',
    },
  },

  // =========================================================================
  // 5. MOMENTS & METRE RULE PRACTICAL (Competency 2.2) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q25',
    competencyRef: 'Competency 2.2',
    category: 'structured-practical',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In the laboratory determination of the mass of a metre rule using the Principle of Moments, where does the weight of the uniform metre rule act?',
      si: 'ඝූර්ණ මූලධර්මය භාවිතයෙන් ඒකාකාර මීටර් රූලක ස්කන්ධය සෙවීමේ පරීක්ෂණයේදී, මීටර් රූලේ බර ක්‍රියාකරන්නේ කුමන ලක්ෂ්‍යයේද?',
    },
    options: [
      { id: 'A', text: { en: 'At the knife edge fulcrum regardless of its position', si: 'පිහි දාරය පිහිටි ඕනෑම ස්ථානයකදී පිහි දාරය මත' } },
      { id: 'B', text: { en: 'At the 0 cm mark', si: '0 cm සලකුණ මත' } },
      { id: 'C', text: { en: 'At its centre of gravity, which is at the 50 cm mark for a uniform rule', si: 'ඒකාකාර රූලක් සඳහා 50 cm සලකුණේ පිහිටි එහි ගුරුත්ව කේන්ද්‍රය මත' } },
      { id: 'D', text: { en: 'At the position where the known weight is suspended', si: 'දන්නා බර එල්ලා ඇති ස්ථානය මත' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'For a uniform body of symmetrical geometry, the centre of gravity coincides with its geometric midpoint.',
      si: 'සමමිතික ඒකාකාර දණ්ඩක ගුරුත්ව කේන්ද්‍රය එහි ජ්‍යාමිතික මධ්‍ය ලක්ෂ්‍යයේ පිහිටයි.',
    },
    solution: {
      en: 'The entire gravitational attraction on the metre rule can be considered to act at its centre of gravity G, located at the 50.0 cm mark for an ideal uniform rule.',
      si: 'ඒකාකාර මීටර් රූලක් මත මුළු ගුරුත්වාකර්ෂණ බලයම එහි ගුරුත්ව කේන්ද්‍රය G (50.0 cm සලකුණ) හරහා ක්‍රියා කරයි.',
    },
  },
  {
    id: 'mech-q26',
    competencyRef: 'Competency 2.2',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A uniform metre rule is balanced horizontally on a knife edge placed at the 40 cm mark when a mass of 60 g is suspended from the 10 cm mark. Calculate the mass of the metre rule in grams.',
      si: '10 cm සලකුණෙන් 60 g ස්කන්ධයක් එල්ලා ඇති විට, 40 cm සලකුණෙහි තැබූ පිහි දාරයක් මත ඒකාකාර මීටර් රූලක් තිරස්ව සමතුලිත වේ. මීටර් රූලේ ස්කන්ධය ග්‍රෑම් වලින් ගණනය කරන්න.',
    },
    expected: 180,
    tolerance: 1,
    unit: { en: 'g', si: 'g' },
    hint: {
      en: 'Take moments about the knife edge at 40 cm: Anti-clockwise moment = Clockwise moment. The rule weight acts at 50 cm.',
      si: '40 cm පිහි දාරය වටා ඝූර්ණ ගන්න: වාමාවර්ත ඝූර්ණය = දක්ෂිණාවර්ත ඝූර්ණය. රූලේ බර 50 cm හි ක්‍රියා කරයි.',
    },
    solution: {
      en: 'Moment arm of 60 g mass = 40 - 10 = 30 cm. Moment arm of rule mass M at 50 cm = 50 - 40 = 10 cm. 60 · 30 = M · 10 ⇒ 1800 = 10M ⇒ M = 180 g.',
      si: '60 g ස්කන්ධයේ ඝූර්ණ බාහුව = 40 - 10 = 30 cm. 50 cm හි රූලේ ස්කන්ධය M හි ඝූර්ණ බාහුව = 50 - 40 = 10 cm. 60 · 30 = M · 10 ⇒ 1800 = 10M ⇒ M = 180 g.',
    },
  },
  {
    id: 'mech-q27',
    competencyRef: 'Competency 2.2',
    category: 'moments-and-couples',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the two necessary and sufficient conditions for the complete static equilibrium of a rigid coplanar body?',
      si: 'දෘඪ ඒකතල වස්තුවක පූර්ණ ස්ථිතික තුල්‍යතාව සඳහා අවශ්‍ය හා ප්‍රමාණවත් කොන්දේසි දෙක කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'ΣF = 0 and Στ = 0 about any point', si: 'ඕනෑම ලක්ෂ්‍යයක් වටා ΣF = 0 සහ Στ = 0 වීම' } },
      { id: 'B', text: { en: 'Only ΣF_x = 0', si: 'ΣF_x = 0 පමණක් වීම' } },
      { id: 'C', text: { en: 'Linear velocity is constant and non-zero', si: 'රේඛීය ප්‍රවේගය නියත හා ශූන්‍ය නොවන අගයක් වීම' } },
      { id: 'D', text: { en: 'Angular acceleration is constant and non-zero', si: 'කෝණික ත්වරණය නියත හා ශූන්‍ය නොවන අගයක් වීම' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Equilibrium requires both translational and rotational equilibrium.',
      si: 'තුල්‍යතාවය සඳහා රේඛීය මෙන්ම භ්‍රමණ තුල්‍යතාවයද අත්‍යවශ්‍ය වේ.',
    },
    solution: {
      en: 'Static equilibrium requires: 1. Vector sum of forces is zero (ΣF = 0, no translation). 2. Algebraic sum of moments about any point is zero (Στ = 0, no rotation).',
      si: 'ස්ථිතික තුල්‍යතාවය සඳහා: 1. සම්ප්‍රයුක්ත බලය ශූන්‍ය විය යුතුය (ΣF = 0). 2. ඕනෑම ලක්ෂ්‍යයක් වටා ඝූර්ණවල වීජීය ඓක්‍යය ශූන්‍ය විය යුතුය (Στ = 0).',
    },
  },
  {
    id: 'mech-q28',
    competencyRef: 'Competency 2.2',
    category: 'moments-and-couples',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A couple consists of two parallel forces of magnitude 25 N each acting in opposite directions separated by a perpendicular distance of 0.4 m. What is the torque of the couple?',
      si: 'එකිනෙකට ප්‍රතිවිරුද්ධ දිශාවලට ක්‍රියාකරන 25 N විශාලත්වයෙන් යුත් සමාන්තර බල දෙකක් අතර ලම්බ දුර 0.4 m වේ. මෙම බල යුග්මයේ ව්‍යාවර්තය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '0 N m', si: '0 N m' } },
      { id: 'B', text: { en: '5 N m', si: '5 N m' } },
      { id: 'C', text: { en: '10 N m', si: '10 N m' } },
      { id: 'D', text: { en: '50 N m', si: '50 N m' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Torque of a couple = Force × perpendicular distance between their lines of action.',
      si: 'බල යුග්මයක ව්‍යාවර්තය = එක් බලයක විශාලත්වය × බල අතර ලම්බ දුර.',
    },
    solution: {
      en: 'Torque of couple τ = F · d = 25 N · 0.4 m = 10 N m. Note that a couple has no net translational force (ΣF = 0).',
      si: 'බල යුග්මයක ව්‍යාවර්තය τ = F · d = 25 N · 0.4 m = 10 N m. බල යුග්මයක සම්ප්‍රයුක්ත රේඛීය බලය ශූන්‍ය වේ.',
    },
  },
  {
    id: 'mech-q29',
    competencyRef: 'Competency 2.2',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In the metre rule experiment, an unknown mass m_x is suspended at the 90 cm mark. Known mass m_1 = 80 g is at the 15 cm mark, and the knife edge balances at the 45 cm mark. The rule mass is 120 g (acting at 50 cm). Calculate m_x in grams.',
      si: 'මීටර් රූල් පරීක්ෂණයේදී නොදන්නා ස්කන්ධයක් m_x 90 cm සලකුණෙහි එල්ලා ඇත. දන්නා ස්කන්ධය m_1 = 80 g 15 cm හි ඇති අතර පිහි දාරය 45 cm හි සමතුලිත වේ. රූලේ ස්කන්ධය 120 g (50 cm හි ක්‍රියා කරයි) නම් m_x ග්‍රෑම් වලින් ගණනය කරන්න.',
    },
    expected: 40.0,
    tolerance: 0.5,
    unit: { en: 'g', si: 'g' },
    hint: {
      en: 'Clockwise moments about fulcrum (45 cm) = Anti-clockwise moments. Watch the direction of the rule weight at 50 cm (clockwise!).',
      si: '45 cm පිහි දාරය වටා වාමාවර්ත = දක්ෂිණාවර්ත. 50 cm හි රූලේ බර දක්ෂිණාවර්තව ක්‍රියාකරයි.',
    },
    solution: {
      en: 'Anti-clockwise moment = 80 · (45 - 15) = 80 · 30 = 2400 g cm. Clockwise moments = 120 · (50 - 45) + m_x · (90 - 45) = 120 · 5 + 45 m_x = 600 + 45 m_x. Equating: 2400 = 600 + 45 m_x ⇒ 1800 = 45 m_x ⇒ m_x = 40.0 g.',
      si: 'වාමාවර්ත ඝූර්ණය = 80 · (45 - 15) = 80 · 30 = 2400 g cm. දක්ෂිණාවර්ත ඝූර්ණය = 120 · (50 - 45) + m_x · (90 - 45) = 600 + 45 m_x. 2400 = 600 + 45 m_x ⇒ 1800 = 45 m_x ⇒ m_x = 40.0 g.',
    },
  },
  {
    id: 'mech-q30',
    competencyRef: 'Competency 2.2',
    category: 'moments-and-couples',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A non-uniform rod AB of length 2 m rests horizontally on two supports at its ends A and B. If the support reaction at A is twice the support reaction at B, how far is the centre of gravity from end A?',
      si: '2 m දිග ඒකාකාර නොවන AB දණ්ඩක් A සහ B කෙළවරවල ආධාරක මත තිරස්ව විවේකීව පවතී. A හි ආධාරක ප්‍රතික්‍රියාව B හි ප්‍රතික්‍රියාව මෙන් දෙගුණයක් නම්, ගුරුත්ව කේන්ද්‍රය A කෙළවරේ සිට කොපමණ දුරකින් පිහිටයිද?',
    },
    options: [
      { id: 'A', text: { en: '0.50 m', si: '0.50 m' } },
      { id: 'B', text: { en: '0.67 m (2/3 m)', si: '0.67 m (2/3 m)' } },
      { id: 'C', text: { en: '1.00 m', si: '1.00 m' } },
      { id: 'D', text: { en: '1.33 m (4/3 m)', si: '1.33 m (4/3 m)' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Let R_B = R, R_A = 2R. Total weight W = 3R. Take moments about A: W · x = R_B · 2.',
      si: 'R_B = R, R_A = 2R නම්, මුළු බර W = 3R වේ. A වටා ඝූර්ණ ගන්න: W · x = R_B · 2.',
    },
    solution: {
      en: 'ΣF_y = 0 ⇒ R_A + R_B = W ⇒ 2R + R = W ⇒ W = 3R. Moments about A: W · x = R_B · L ⇒ 3R · x = R · 2 ⇒ x = 2/3 m ≈ 0.67 m from A.',
      si: 'ΣF_y = 0 ⇒ R_A + R_B = W ⇒ 3R = W. A වටා ඝූර්ණ ගත් විට: W · x = R_B · 2 ⇒ 3R · x = 2R ⇒ x = 2/3 m ≈ 0.67 m.',
    },
  },

  // =========================================================================
  // 6. WORK, ENERGY & POWER (Competency 2.5) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q31',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How much work is done by a force of 50 N acting at an angle of 60° to the displacement when an object moves 8 metres along a flat surface?',
      si: 'පැතලි පෘෂ්ඨයක් මත වස්තුවක් 8 m විස්ථාපනය වන විට, විස්ථාපනයට 60° ක කෝණයකින් ක්‍රියාකරන 50 N බලයක් මඟින් කෙරෙන කාර්යය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '100 J', si: '100 J' } },
      { id: 'B', text: { en: '200 J', si: '200 J' } },
      { id: 'C', text: { en: '346 J', si: '346 J' } },
      { id: 'D', text: { en: '400 J', si: '400 J' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Work W = F · s · cos θ.',
      si: 'කාර්යය W = F · s · cos θ.',
    },
    solution: {
      en: 'W = F · s · cos θ = 50 · 8 · cos 60° = 400 · 0.5 = 200 J.',
      si: 'W = F · s · cos θ = 50 · 8 · cos 60° = 400 · 0.5 = 200 J.',
    },
  },
  {
    id: 'mech-q32',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A pump lifts 1200 kg of water through a vertical height of 15 metres in 60 seconds. Taking g = 9.8 m s⁻², calculate the average useful power output of the pump in Watts.',
      si: 'පොම්පයක් මඟින් තත්පර 60 කදී ජලය 1200 kg ක් 15 m සිරස් උසකට ඔසවනු ලැබේ. g = 9.8 m s⁻² ලෙස ගෙන, පොම්පයේ සාමාන්‍ය ප්‍රයෝජනවත් ක්ෂමතාව වොට් වලින් ගණනය කරන්න.',
    },
    expected: 2940,
    tolerance: 10,
    unit: { en: 'W', si: 'W' },
    hint: {
      en: 'Power P = Work / time = (m · g · h) / t.',
      si: 'ක්ෂමතාව P = කාර්යය / කාලය = (m · g · h) / t.',
    },
    solution: {
      en: 'P = (m · g · h) / t = (1200 · 9.8 · 15) / 60 = 176,400 / 60 = 2940 W (2.94 kW).',
      si: 'P = (m · g · h) / t = (1200 · 9.8 · 15) / 60 = 176,400 / 60 = 2940 W (2.94 kW).',
    },
  },
  {
    id: 'mech-q33',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If the speed of a moving vehicle is tripled (multiplied by 3), by what factor does its kinetic energy increase?',
      si: 'චලනය වන වාහනයක වේගය තුන්ගුණයකින් (3 ගුණයකින්) වැඩි කළහොත්, එහි චාලක ශක්තිය වැඩි වන ගුණාකාරය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '3 times', si: '3 ගුණයකින්' } },
      { id: 'B', text: { en: '6 times', si: '6 ගුණයකින්' } },
      { id: 'C', text: { en: '9 times', si: '9 ගුණයකින්' } },
      { id: 'D', text: { en: '27 times', si: '27 ගුණයකින්' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Kinetic energy E_k = 0.5 · m · v².',
      si: 'චාලක ශක්තිය E_k = 0.5 · m · v².',
    },
    solution: {
      en: 'Because kinetic energy is proportional to v², increasing speed by 3 increases E_k by (3)² = 9 times.',
      si: 'චාලක ශක්තිය ප්‍රවේගයේ වර්ගයට (v²) සමානුපාතික බැවින්, වේගය 3 ගුණයක් කළ විට E_k (3)² = 9 ගුණයකින් වැඩි වේ.',
    },
  },
  {
    id: 'mech-q34',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A spring of force constant k = 800 N m⁻¹ is compressed by 0.15 m from its equilibrium length. Calculate the elastic potential energy stored in the spring in Joules (to 1 decimal place).',
      si: 'k = 800 N m⁻¹ දුනු නියතයක් සහිත දුන්නක් එහි තුල්‍යතා දිගෙහි සිට 0.15 m ප්‍රමාණයකින් සම්පීඩනය කර ඇත. දුන්නේ ගබඩා වී ඇති ප්‍රත්‍යාස්ථ විභව ශක්තිය ජූල් වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 9.0,
    tolerance: 0.1,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'Elastic potential energy E_p = 0.5 · k · x².',
      si: 'ප්‍රත්‍යාස්ථ විභව ශක්තිය E_p = 0.5 · k · x².',
    },
    solution: {
      en: 'E_p = 0.5 · k · x² = 0.5 · 800 · (0.15)² = 400 · 0.0225 = 9.0 J.',
      si: 'E_p = 0.5 · k · x² = 0.5 · 800 · (0.15)² = 400 · 0.0225 = 9.0 J.',
    },
  },
  {
    id: 'mech-q35',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'An engine delivers a constant power P to an automobile of mass m. Assuming no friction, how does the velocity v of the automobile depend on time t starting from rest?',
      si: 'එන්ජිමක් මඟින් m ස්කන්ධයක් සහිත රථයකට නියත ක්ෂමතාවක් P සපයයි. ඝර්ෂණයක් නැතැයි සලකා, නිශ්චලතාවයේ සිට ආරම්භ වන විට ප්‍රවේගය v කාලය t මත රඳා පවතින්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'v ∝ t', si: 'v ∝ t' } },
      { id: 'B', text: { en: 'v ∝ t²', si: 'v ∝ t²' } },
      { id: 'C', text: { en: 'v ∝ √t', si: 'v ∝ √t' } },
      { id: 'D', text: { en: 'v is constant', si: 'v නියත වේ' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Work done = P · t = ΔE_k = 0.5 · m · v².',
      si: 'කළ කාර්යය = P · t = ΔE_k = 0.5 · m · v².',
    },
    solution: {
      en: 'P · t = 0.5 · m · v² ⇒ v² = (2P/m) · t ⇒ v = √(2P/m) · √t ∝ √t.',
      si: 'P · t = 0.5 · m · v² ⇒ v² = (2P/m) · t ⇒ v = √(2P/m) · √t ∝ √t.',
    },
  },
  {
    id: 'mech-q36',
    competencyRef: 'Competency 2.5',
    category: 'work-energy-power',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 50 kg skier starts from rest at the top of a frictionless hill of vertical height 45 m. Taking g = 9.8 m s⁻², calculate the skier’s speed at the bottom in m s⁻¹ (to 1 decimal place).',
      si: '50 kg ස්කන්ධයක් සහිත හිම මත ලිස්සන්නෙකු 45 m සිරස් උසැති ඝර්ෂණ-විරහිත කන්දක් මුදුනේ සිට ලිස්සා එයි. g = 9.8 m s⁻² විට, කන්ද පාමුලදී ඔහුගේ වේගය m s⁻¹ වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 29.7,
    tolerance: 0.3,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'Conservation of mechanical energy: mgh = 0.5 · m · v² ⇒ v = √(2gh).',
      si: 'යාන්ත්‍රික ශක්ති සංස්ථිතිය: mgh = 0.5 · m · v² ⇒ v = √(2gh).',
    },
    solution: {
      en: 'v = √(2gh) = √(2 · 9.8 · 45) = √882 ≈ 29.698 m s⁻¹ ≈ 29.7 m s⁻¹.',
      si: 'v = √(2gh) = √(2 · 9.8 · 45) = √882 ≈ 29.698 m s⁻¹ ≈ 29.7 m s⁻¹.',
    },
  },

  // =========================================================================
  // 7. CIRCULAR MOTION (Competency 2.6) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q37',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A particle moves in a horizontal circle of radius r with constant speed v. What is the direction of its acceleration?',
      si: 'අංශුවක් r අරය සහිත තිරස් වෘත්තාකාර පථයක v නියත වේගයෙන් ගමන් කරයි. එහි ත්වරණයේ දිශාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Tangential to the circle in the direction of motion', si: 'චලිත දිශාවට වෘත්තයට ස්පර්ශකව' } },
      { id: 'B', text: { en: 'Radially inward towards the centre of the circle', si: 'වෘත්තයේ කේන්ද්‍රය දෙසට අරය ඔස්සේ ඇතුළට' } },
      { id: 'C', text: { en: 'Radially outward away from the centre', si: 'කේන්ද්‍රයෙන් ඉවතට අරය ඔස්සේ පිටතට' } },
      { id: 'D', text: { en: 'Zero because speed is constant', si: 'වේගය නියත බැවින් ශූන්‍ය වේ' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Centripetal acceleration arises because the velocity vector direction continuously changes toward the centre.',
      si: 'කේන්ද්‍රාභිසාරී ත්වරණය හටගන්නේ ප්‍රවේග දෛශිකයේ දිශාව නිරන්තරයෙන් කේන්ද්‍රය දෙසට හැරෙන බැවිනි.',
    },
    solution: {
      en: 'Uniform circular motion has centripetal acceleration a = v²/r directed radially inwards toward the circle’s center.',
      si: 'ඒකාකාර වෘත්ත චලිතයේදී a = v²/r කේන්ද්‍රාභිසාරී ත්වරණය සෑමවිටම කේන්ද්‍රය දෙසට අරය ඔස්සේ ඇතුළට යොමු වේ.',
    },
  },
  {
    id: 'mech-q38',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A car negotiates an unbanked circular curve of radius 50 m. If the coefficient of static friction between tyres and road is μ = 0.5, calculate the maximum safe speed without skidding in m s⁻¹ (take g = 9.8 m s⁻², to 1 decimal place).',
      si: 'මෝටර් රථයක් 50 m අරයක් සහිත බැංකුගත නොකළ වෘත්තාකාර වංගුවක් ගනී. ටයර් සහ මාර්ගය අතර ස්ථිතික ඝර්ෂණ සංගුණකය μ = 0.5 නම්, ලිස්සා නොයා ගමන් කළ හැකි උපරිම වේගය m s⁻¹ වලින් ගණනය කරන්න (g = 9.8 m s⁻², දශමස්ථාන 1කට).',
    },
    expected: 15.7,
    tolerance: 0.2,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'Centripetal force is provided entirely by friction: μ · m · g = (m · v²) / r ⇒ v_max = √(μ · g · r).',
      si: 'කේන්ද්‍රාභිසාරී බලය ඝර්ෂණයෙන් සැපයේ: μ · m · g = (m · v²) / r ⇒ v_max = √(μ · g · r).',
    },
    solution: {
      en: 'v_max = √(μ · g · r) = √(0.5 · 9.8 · 50) = √245 ≈ 15.65 m s⁻¹ ≈ 15.7 m s⁻¹.',
      si: 'v_max = √(μ · g · r) = √(0.5 · 9.8 · 50) = √245 ≈ 15.65 m s⁻¹ ≈ 15.7 m s⁻¹.',
    },
  },
  {
    id: 'mech-q39',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the required banking angle θ of a curved track of radius r for vehicles travelling at design speed v without relying on tyre friction?',
      si: 'ටයර්වල ඝර්ෂණය මත රඳා නොපවතින සේ v සැලසුම් වේගයෙන් ගමන් කරන වාහන සඳහා r අරයැති වක්‍ර මාර්ගයක අවශ්‍ය බැංකු කෝණය θ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'tan θ = v² / (rg)', si: 'tan θ = v² / (rg)' } },
      { id: 'B', text: { en: 'sin θ = v² / (rg)', si: 'sin θ = v² / (rg)' } },
      { id: 'C', text: { en: 'tan θ = rg / v²', si: 'tan θ = rg / v²' } },
      { id: 'D', text: { en: 'cos θ = v² / (rg)', si: 'cos θ = v² / (rg)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Normal reaction N resolves into: N sin θ = m v² / r and N cos θ = mg.',
      si: 'අභිලම්බ ප්‍රතික්‍රියාව N වියෝජනය කරන්න: N sin θ = m v² / r සහ N cos θ = mg.',
    },
    solution: {
      en: 'Dividing N sin θ = m v² / r by N cos θ = mg gives tan θ = v² / (rg).',
      si: 'N sin θ = m v² / r සමීකරණය N cos θ = mg න් බෙදූ විට tan θ = v² / (rg) ලැබේ.',
    },
  },
  {
    id: 'mech-q40',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A small stone tied to a string of length 0.8 m rotates in a vertical circle. Taking g = 9.8 m s⁻², calculate the minimum critical speed at the highest point for the string to stay taut (in m s⁻¹, to 2 decimal places).',
      si: '0.8 m දිග නූලක ගැටගැසූ කුඩා ගලක් සිරස් වෘත්තයක කරකවනු ලැබේ. g = 9.8 m s⁻² විට, නූල බුරුල් නොවී පැවතීමට ඉහළම ලක්ෂ්‍යයේ තිබිය යුතු අවම අවධි වේගය m s⁻¹ වලින් ගණනය කරන්න (දශමස්ථාන 2කට).',
    },
    expected: 2.80,
    tolerance: 0.05,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'At the top, string tension T ≥ 0 ⇒ mg = mv² / r ⇒ v_crit = √(rg).',
      si: 'ඉහළම ලක්ෂ්‍යයේදී ආතතිය T ≥ 0 ⇒ mg = mv² / r ⇒ v_crit = √(rg).',
    },
    solution: {
      en: 'At top: T + mg = mv²/r. For critical minimum, T = 0 ⇒ v = √(gr) = √(9.8 · 0.8) = √7.84 = 2.80 m s⁻¹.',
      si: 'ඉහළම ලක්ෂ්‍යයේදී: T + mg = mv²/r. අවම අවධි අගය සඳහා T = 0 ⇒ v = √(gr) = √(9.8 · 0.8) = √7.84 = 2.80 m s⁻¹.',
    },
  },
  {
    id: 'mech-q41',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In a conical pendulum of string length L making angle θ with the vertical, what is its period of revolution T?',
      si: 'නූලේ දිග L වූ, සිරස සමඟ θ කෝණයක් සාදන කේතු ලෝලකයක භ්‍රමණ ආවර්ත කාලය T කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '2π √(L / g)', si: '2π √(L / g)' } },
      { id: 'B', text: { en: '2π √((L cos θ) / g)', si: '2π √((L cos θ) / g)' } },
      { id: 'C', text: { en: '2π √((L sin θ) / g)', si: '2π √((L sin θ) / g)' } },
      { id: 'D', text: { en: '2π √(g / (L cos θ))', si: '2π √(g / (L cos θ))' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Radius r = L sin θ. T_string cos θ = mg, T_string sin θ = m ω² r.',
      si: 'අරය r = L sin θ. T cos θ = mg සහ T sin θ = m ω² r.',
    },
    solution: {
      en: 'ω² = g / (L cos θ). Period T = 2π / ω = 2π √((L cos θ) / g). Notice that as θ → 0, it reduces to a simple pendulum.',
      si: 'ω² = g / (L cos θ). ආවර්ත කාලය T = 2π / ω = 2π √((L cos θ) / g). θ → 0 විට මෙය සරල ලෝලකයට සමාන වේ.',
    },
  },
  {
    id: 'mech-q42',
    competencyRef: 'Competency 2.6',
    category: 'circular-motion',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A pilot executes a vertical loop of radius 400 m. If the pilot experiences apparent weightlessness at the apex, calculate the aeroplane’s speed in m s⁻¹ (taking g = 10 m s⁻²).',
      si: 'ගුවන් නියමුවෙකු 400 m අරයක් සහිත සිරස් වළල්ලක් සම්පූර්ණ කරයි. ඉහළම ලක්ෂ්‍යයේදී නියමුවාට දෘශ්‍ය බර රහිත බවක් දැනේ නම්, ගුවන් යානයේ වේගය m s⁻¹ වලින් ගණනය කරන්න (g = 10 m s⁻²).',
    },
    expected: 63.2,
    tolerance: 0.5,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'Apparent weightlessness means normal contact force N = 0 ⇒ mg = mv² / r ⇒ v = √(rg).',
      si: 'දෘශ්‍ය බර රහිත බව යනු අභිලම්බ බලය N = 0 වීමයි ⇒ mg = mv² / r ⇒ v = √(rg).',
    },
    solution: {
      en: 'At top: N + mg = mv²/r. When N = 0, v = √(rg) = √(400 · 10) = √4000 ≈ 63.25 m s⁻¹ ≈ 63.2 m s⁻¹.',
      si: 'ඉහළම ලක්ෂ්‍යයේදී: N + mg = mv²/r. N = 0 විට, v = √(rg) = √(400 · 10) = √4000 ≈ 63.25 m s⁻¹ ≈ 63.2 m s⁻¹.',
    },
  },

  // =========================================================================
  // 8. ROTATIONAL DYNAMICS (Competency 2.6) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q43',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the rotational analogue of mass in Newton’s second law for translational motion (F = ma)?',
      si: 'රේඛීය චලිතයේ නිව්ටන්ගේ දෙවන නියමයේ (F = ma) ස්කන්ධයට අනුරූප භ්‍රමණ රාශිය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Angular momentum', si: 'කෝණික ගම්‍යතාව' } },
      { id: 'B', text: { en: 'Torque', si: 'ව්‍යාවර්තය' } },
      { id: 'C', text: { en: 'Moment of inertia', si: 'අවස්ථිති ඝූර්ණය' } },
      { id: 'D', text: { en: 'Angular velocity', si: 'කෝණික ප්‍රවේගය' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Compare F = m a with the rotational equation τ = I α.',
      si: 'F = m a සමීකරණය භ්‍රමණ සමීකරණය වන τ = I α සමඟ සසඳන්න.',
    },
    solution: {
      en: 'In rotational dynamics, torque τ = I α. Here, moment of inertia I quantifies resistance to angular acceleration, just as mass m quantifies resistance to linear acceleration.',
      si: 'භ්‍රමණ ගතිවිද්‍යාවේදී τ = I α වේ. රේඛීය ත්වරණයට ප්‍රතිරෝධය ස්කන්ධය මඟින් මනින සේම, කෝණික ත්වරණයට ප්‍රතිරෝධය අවස්ථිති ඝූර්ණය (I) මඟින් මනිනු ලැබේ.',
    },
  },
  {
    id: 'mech-q44',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A constant torque of 24 N m is applied to a flywheel of moment of inertia 6.0 kg m². What angular acceleration (in rad s⁻²) does the flywheel experience?',
      si: 'අවස්ථිති ඝූර්ණය 6.0 kg m² වූ ජව රෝදයක් මත 24 N m ක නියත ව්‍යාවර්තයක් යොදනු ලැබේ. ජව රෝදය ලබන කෝණික ත්වරණය rad s⁻² වලින් ගණනය කරන්න.',
    },
    expected: 4.0,
    tolerance: 0.1,
    unit: { en: 'rad s⁻²', si: 'rad s⁻²' },
    hint: {
      en: 'Use the rotational Newton’s law: τ = I · α.',
      si: 'භ්‍රමණ නිව්ටන් නියමය භාවිතා කරන්න: τ = I · α.',
    },
    solution: {
      en: 'τ = I · α ⇒ α = τ / I = 24 / 6.0 = 4.0 rad s⁻².',
      si: 'τ = I · α ⇒ α = τ / I = 24 / 6.0 = 4.0 rad s⁻².',
    },
  },
  {
    id: 'mech-q45',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A spinning figure skater pulls their outstretched arms inward. Why does the skater’s rotational speed increase?',
      si: 'කරකැවෙන අයිස් ක්‍රීඩකයෙකු තම දිගු කළ දෑත් ශරීරයට ළං කරගනී. ඔහුගේ භ්‍රමණ වේගය වැඩි වන්නේ මන්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Friction between ice and skates decreases', si: 'අයිස් සහ සපත්තු අතර ඝර්ෂණය අඩුවීම නිසා' } },
      { id: 'B', text: { en: 'Conservation of angular momentum: moment of inertia decreases, so angular velocity increases', si: 'කෝණික ගම්‍යතා සංස්ථිතිය: අවස්ථිති ඝූර්ණය අඩුවන නිසා කෝණික ප්‍රවේගය වැඩි වේ' } },
      { id: 'C', text: { en: 'Total energy decreases', si: 'මුළු ශක්තිය අඩුවීම නිසා' } },
      { id: 'D', text: { en: 'An external gravitational torque accelerates rotation', si: 'බාහිර ගුරුත්ව ව්‍යාවර්තයක් මඟින් භ්‍රමණය ත්වරණය කිරීම නිසා' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'No external torque acts (Στ_ext = 0). Therefore angular momentum L = I ω is conserved.',
      si: 'බාහිර ව්‍යාවර්තයක් නැත (Στ_ext = 0). එබැවින් කෝණික ගම්‍යතාව L = I ω සංස්ථිතික වේ.',
    },
    solution: {
      en: 'With zero external torque, angular momentum L = I ω remains constant. Pulling arms inward distributes mass closer to the axis of rotation, decreasing I. To keep L constant, ω must increase.',
      si: 'බාහිර ව්‍යාවර්ත නොමැති විට කෝණික ගම්‍යතාව L = I ω නියතව පවතී. අත් ළං කරගත් විට අක්ෂයට ආසන්නව ස්කන්ධය කේන්ද්‍රගත වී I අඩු වේ. L නියතව තබා ගැනීමට ω වැඩි විය යුතුය.',
    },
  },
  {
    id: 'mech-q46',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A solid cylinder of mass 4 kg and radius 0.2 m has moment of inertia I = 0.5 m r². Calculate its rotational kinetic energy in Joules when spinning at 30 rad s⁻¹.',
      si: 'ස්කන්ධය 4 kg සහ අරය 0.2 m වූ ඝන සිලින්ඩරයක අවස්ථිති ඝූර්ණය I = 0.5 m r² වේ. එය 30 rad s⁻¹ කින් භ්‍රමණය වන විට එහි භ්‍රමණ චාලක ශක්තිය ජූල් වලින් ගණනය කරන්න.',
    },
    expected: 36.0,
    tolerance: 0.5,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'First calculate I = 0.5 · 4 · (0.2)². Then rotational KE = 0.5 · I · ω².',
      si: 'මුලින් I = 0.5 · 4 · (0.2)² සොයන්න. ඉන්පසු භ්‍රමණ චාලක ශක්තිය = 0.5 · I · ω².',
    },
    solution: {
      en: 'I = 0.5 · 4 · (0.04) = 0.08 kg m². Rotational KE = 0.5 · I · ω² = 0.5 · 0.08 · (30)² = 0.04 · 900 = 36.0 J.',
      si: 'I = 0.5 · 4 · (0.04) = 0.08 kg m². භ්‍රමණ චාලක ශක්තිය = 0.5 · I · ω² = 0.5 · 0.08 · (30)² = 0.04 · 900 = 36.0 J.',
    },
  },
  {
    id: 'mech-q47',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A solid cylinder and a thin hollow hoop of the same mass and outer radius roll down the same inclined plane from rest without slipping. Which reaches the bottom first?',
      si: 'එකම ස්කන්ධය සහ බාහිර අරය සහිත ඝන සිලින්ඩරයක් සහ තුනී කුහර වළල්ලක් ලිස්සා යාමෙන් තොරව එකම ආනත තලය දිගේ පෙරළෙයි. මුලින්ම පතුලට ළඟා වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The hollow hoop', si: 'කුහර වළල්ල' } },
      { id: 'B', text: { en: 'The solid cylinder', si: 'ඝන සිලින්ඩරය' } },
      { id: 'C', text: { en: 'Both reach the bottom at the same time', si: 'දෙකම එකම වේලාවක පතුලට ළඟා වේ' } },
      { id: 'D', text: { en: 'Depends on the angle of inclination', si: 'ආනති කෝණය මත රඳා පවතී' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Acceleration down incline a = (g sin θ) / (1 + I / (mr²)). A smaller I gives a larger linear acceleration.',
      si: 'පෙරළෙන වස්තුවක ත්වරණය a = (g sin θ) / (1 + I / (mr²)). කුඩා I අගයක් ඇති වස්තුවට වැඩි ත්වරණයක් ලැබේ.',
    },
    solution: {
      en: 'Solid cylinder has I = 0.5 mr² while hollow hoop has I = mr². The solid cylinder has a smaller fraction of energy stored in rotation, giving greater linear acceleration (a_cyl = 2/3 g sin θ vs a_hoop = 1/2 g sin θ), so it reaches the bottom first.',
      si: 'ඝන සිලින්ඩරයේ I = 0.5 mr² වන අතර කුහර වළල්ලේ I = mr² වේ. සිලින්ඩරයේ භ්‍රමණ ශක්තියට යන ප්‍රතිශතය අඩු බැවින් රේඛීය ත්වරණය වැඩිය (2/3 g sin θ > 1/2 g sin θ). එබැවින් ඝන සිලින්ඩරය මුලින්ම පතුලට ළඟා වේ.',
    },
  },
  {
    id: 'mech-q48',
    competencyRef: 'Competency 2.6',
    category: 'rotational-dynamics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A wheel accelerating from rest under constant angular acceleration turns through 50 radians in 5 seconds. What is its angular velocity at t = 5 s in rad s⁻¹?',
      si: 'නියත කෝණික ත්වරණයක් යටතේ නිශ්චලතාවයේ සිට ත්වරණය වන රෝදයක් තත්පර 5 කදී රේඩියන 50 ක් කැරකෙයි. t = 5 s හිදී එහි කෝණික ප්‍රවේගය rad s⁻¹ වලින් ගණනය කරන්න.',
    },
    expected: 20.0,
    tolerance: 0.2,
    unit: { en: 'rad s⁻¹', si: 'rad s⁻¹' },
    hint: {
      en: 'θ = ((ω₀ + ω) / 2) · t where ω₀ = 0.',
      si: 'ω₀ = 0 විට θ = ((ω₀ + ω) / 2) · t.',
    },
    solution: {
      en: 'θ = (ω / 2) · t ⇒ 50 = (ω / 2) · 5 ⇒ 50 = 2.5 ω ⇒ ω = 20 rad s⁻¹.',
      si: 'θ = (ω / 2) · t ⇒ 50 = (ω / 2) · 5 ⇒ 50 = 2.5 ω ⇒ ω = 20 rad s⁻¹.',
    },
  },

  // =========================================================================
  // 9. HYDROSTATICS, U-TUBE & HARE'S APPARATUS (Competency 2.9) - 8 Questions
  // =========================================================================
  {
    id: 'mech-q49',
    competencyRef: 'Competency 2.7',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In determining the relative density of an oil immiscible with water using a U-tube, how is the reference datum level established?',
      si: 'U-නළය භාවිතයෙන් ජලය සමඟ මිශ්‍ර නොවන තෙල්වල සාපේක්ෂ ඝනත්වය සෙවීමේදී, සමුද්දේශ මට්ටම (datum level) තෝරාගනු ලබන්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'At the bottom curve of the U-tube glass', si: 'U-නළයේ වීදුරු පතුලේ වක්‍රය මත' } },
      { id: 'B', text: { en: 'At the horizontal plane passing through the interface separating the two liquids', si: 'ද්‍රව දෙක වෙන්කරන අතුරුමුහුණත හරහා යන තිරස් තලයේ' } },
      { id: 'C', text: { en: 'At the top surface of the water column', si: 'ජල කඳේ ඉහළ මතුපිට මත' } },
      { id: 'D', text: { en: 'At the table surface supporting the stand', si: 'ආධාරකය තබා ඇති මේස පෘෂ්ඨය මත' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Hydrostatic pressure is equal across any continuous connected horizontal layer of the same liquid.',
      si: 'එකම ද්‍රවයක අඛණ්ඩව සම්බන්ධ වූ ඕනෑම තිරස් මට්ටමක ජලස්ථිතික පීඩනය සමාන වේ.',
    },
    solution: {
      en: 'The horizontal plane passing through the boundary interface between the two liquids is chosen as the datum. At this level, the hydrostatic pressure in both limbs is equal, giving h_oil · ρ_oil = h_water · ρ_water.',
      si: 'ද්‍රව දෙක අතර අතුරුමුහුණත හරහා යන තිරස් තලය සමුද්දේශ මට්ටම ලෙස ගනී. මෙම මට්ටමේදී බාහු දෙකෙහිම පීඩන සමාන වන බැවින් h_oil · ρ_oil = h_water · ρ_water සම්බන්ධතාව ලැබේ.',
    },
  },
  {
    id: 'mech-q50',
    competencyRef: 'Competency 2.7',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a U-tube experiment with water and kerosene, the height of the kerosene column above the interface is 25.0 cm, and the balancing water column height is 20.5 cm. Calculate the relative density of kerosene (to 3 decimal places).',
      si: 'ජලය සහ භූමිතෙල් සහිත U-නළ පරීක්ෂණයකදී, අතුරුමුහුණතේ සිට භූමිතෙල් කඳේ උස 25.0 cm වන අතර සමතුලිත ජල කඳේ උස 20.5 cm වේ. භූමිතෙල්වල සාපේක්ෂ ඝනත්වය ගණනය කරන්න (දශමස්ථාන 3කට).',
    },
    expected: 0.820,
    tolerance: 0.005,
    unit: { en: '', si: '' },
    hint: {
      en: 'Relative density d = h_water / h_liquid.',
      si: 'සාපේක්ෂ ඝනත්වය d = h_water / h_liquid.',
    },
    solution: {
      en: 'h_k · ρ_k = h_w · ρ_w ⇒ RD = ρ_k / ρ_w = h_w / h_k = 20.5 / 25.0 = 0.820.',
      si: 'h_k · ρ_k = h_w · ρ_w ⇒ සාපේක්ෂ ඝනත්වය = h_w / h_k = 20.5 / 25.0 = 0.820.',
    },
  },
  {
    id: 'mech-q51',
    competencyRef: 'Competency 2.7',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Hare’s apparatus, if water column height h_w is plotted on the vertical y-axis against liquid column height h_L on the horizontal x-axis, what does the gradient of the best-fit line represent?',
      si: 'හේයාර්ගේ උපකරණයේදී සිරස් y-අක්ෂයේ ජල කඳේ උස h_w ද තිරස් x-අක්ෂයේ ද්‍රව කඳේ උස h_L ද ප්‍රස්ථාරගත කළ විට, හොඳම ගැළපුම් සරල රේඛාවේ අනුක්‍රමණයෙන් නිරූපණය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Atmospheric pressure P₀', si: 'වායුගෝලීය පීඩනය P₀' } },
      { id: 'B', text: { en: 'Relative density of the liquid with respect to water (ρ_L / ρ_w)', si: 'ජලයට සාපේක්ෂව ද්‍රවයේ සාපේක්ෂ ඝනත්වය (ρ_L / ρ_w)' } },
      { id: 'C', text: { en: 'Reciprocal of relative density (ρ_w / ρ_L)', si: 'සාපේක්ෂ ඝනත්වයේ පරස්පරය (ρ_w / ρ_L)' } },
      { id: 'D', text: { en: 'Gravitational acceleration g', si: 'ගුරුත්වජ ත්වරණය g' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'In Hare’s apparatus: h_w · ρ_w = h_L · ρ_L ⇒ h_w = (ρ_L / ρ_w) · h_L.',
      si: 'හේයාර් උපකරණයේ: h_w · ρ_w = h_L · ρ_L ⇒ h_w = (ρ_L / ρ_w) · h_L.',
    },
    solution: {
      en: 'Comparing h_w = (ρ_L / ρ_w) · h_L with y = mx + c gives gradient m = ρ_L / ρ_w = Relative Density.',
      si: 'h_w = (ρ_L / ρ_w) · h_L සමීකරණය y = mx + c සමඟ සැසඳූ විට අනුක්‍රමණය m = ρ_L / ρ_w = සාපේක්ෂ ඝනත්වය ලැබේ.',
    },
  },
  {
    id: 'mech-q52',
    competencyRef: 'Competency 2.7',
    category: 'structured-practical',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In Hare’s apparatus, six pairs of readings yield a linear regression slope of h_w against h_L of 0.785. Given water density ρ_w = 1000 kg m⁻³, what is the absolute density of the liquid in kg m⁻³?',
      si: 'හේයාර් උපකරණයේදී කියවීම් යුගල 6ක් මඟින් h_L ට එදිරිව h_w සරල රේඛාවේ බෑවුම 0.785 ක් ලෙස ලැබේ. ජලයේ ඝනත්වය 1000 kg m⁻³ නම්, ද්‍රවයේ නිරපේක්ෂ ඝනත්වය kg m⁻³ වලින් ගණනය කරන්න.',
    },
    expected: 785.0,
    tolerance: 1.0,
    unit: { en: 'kg m⁻³', si: 'kg m⁻³' },
    hint: {
      en: 'ρ_liquid = slope × ρ_water.',
      si: 'ද්‍රව ඝනත්වය = බෑවුම × ජලයේ ඝනත්වය.',
    },
    solution: {
      en: 'Slope m = ρ_L / ρ_w = 0.785 ⇒ ρ_L = 0.785 · 1000 = 785.0 kg m⁻³.',
      si: 'බෑවුම m = ρ_L / ρ_w = 0.785 ⇒ ρ_L = 0.785 · 1000 = 785.0 kg m⁻³.',
    },
  },
  {
    id: 'mech-q53',
    competencyRef: 'Competency 2.7',
    category: 'hydrostatics-manometry',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the absolute hydrostatic pressure at a depth of 20 m in fresh water (ρ = 1000 kg m⁻³)? Take atmospheric pressure P₀ = 1.01 × 10⁵ Pa and g = 9.8 m s⁻².',
      si: 'පිරිසිදු ජලයේ (ρ = 1000 kg m⁻³) 20 m ගැඹුරකදී නිරපේක්ෂ ජලස්ථිතික පීඩනය කොපමණද? වායුගෝලීය පීඩනය P₀ = 1.01 × 10⁵ Pa සහ g = 9.8 m s⁻² වේ.',
    },
    options: [
      { id: 'A', text: { en: '1.96 × 10⁵ Pa', si: '1.96 × 10⁵ Pa' } },
      { id: 'B', text: { en: '2.97 × 10⁵ Pa', si: '2.97 × 10⁵ Pa' } },
      { id: 'C', text: { en: '3.01 × 10⁵ Pa', si: '3.01 × 10⁵ Pa' } },
      { id: 'D', text: { en: '0.95 × 10⁵ Pa', si: '0.95 × 10⁵ Pa' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Total pressure P = P₀ + h · ρ · g.',
      si: 'මුළු පීඩනය P = P₀ + h · ρ · g.',
    },
    solution: {
      en: 'P = P₀ + hρg = 101,000 + (20 · 1000 · 9.8) = 101,000 + 196,000 = 297,000 Pa = 2.97 × 10⁵ Pa.',
      si: 'P = P₀ + hρg = 101,000 + (20 · 1000 · 9.8) = 101,000 + 196,000 = 297,000 Pa = 2.97 × 10⁵ Pa.',
    },
  },
  {
    id: 'mech-q54',
    competencyRef: 'Competency 2.7',
    category: 'hydrostatics-manometry',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a hydraulic press, an input force of 50 N is applied to a small piston of cross-sectional area 4 cm². What load in Newtons can be supported by the large piston of area 120 cm² at the same horizontal level?',
      si: 'හයිඩ්‍රොලික් මුද්‍රණ යන්ත්‍රයක 4 cm² වර්ගඵලයක් සහිත කුඩා සිලින්ඩරය මත 50 N බලයක් යොදයි. එකම තිරස් මට්ටමේ පවතින 120 cm² වර්ගඵලයක් සහිත විශාල සිලින්ඩරය මඟින් දැරිය හැකි බර නිව්ටන් වලින් ගණනය කරන්න.',
    },
    expected: 1500,
    tolerance: 10,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'Pascal’s principle: Pressure is transmitted undiminished: F₁ / A₁ = F₂ / A₂.',
      si: 'පැස්කල්ගේ මූලධර්මය: පීඩනය එක හා සමානව සම්ප්‍රේෂණය වේ: F₁ / A₁ = F₂ / A₂.',
    },
    solution: {
      en: 'F₂ = F₁ · (A₂ / A₁) = 50 · (120 / 4) = 50 · 30 = 1500 N.',
      si: 'F₂ = F₁ · (A₂ / A₁) = 50 · (120 / 4) = 50 · 30 = 1500 N.',
    },
  },
  {
    id: 'mech-q55',
    competencyRef: 'Competency 2.7',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is Hare’s apparatus preferred over a U-tube when determining the relative density of a liquid miscible with water (such as ethanol)?',
      si: 'එතනෝල් වැනි ජලය සමඟ මිශ්‍ර වන ද්‍රවයක සාපේක්ෂ ඝනත්වය සෙවීමේදී U-නළයට වඩා හේයාර්ගේ උපකරණය සුදුසු වන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Because Hare’s apparatus uses taller tubes', si: 'හේයාර් උපකරණයේ උස නළ ඇති බැවින්' } },
      { id: 'B', text: { en: 'Because in Hare’s apparatus the two liquids remain in separate beakers and never come into contact or mix', si: 'හේයාර් උපකරණයේදී ද්‍රව දෙක වෙනම බීකර දෙකක පවතින බැවින් එකිනෙක මිශ්‍ර නොවන නිසා' } },
      { id: 'C', text: { en: 'Because atmospheric pressure cancels out only in Hare’s apparatus', si: 'වායුගෝලීය පීඩනය ඉවත් වන්නේ හේයාර් උපකරණයේදී පමණක් නිසා' } },
      { id: 'D', text: { en: 'Because capillary rise does not occur in Hare’s apparatus', si: 'හේයාර් උපකරණයේ කේශික උද්ගමනය සිදු නොවන නිසා' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'In a U-tube, miscible liquids would diffuse across the interface, destroying the boundary datum.',
      si: 'U-නළයකදී මිශ්‍රවන ද්‍රව අතුරුමුහුණත හරහා විසිරී ගොස් සමුද්දේශ මට්ටම නැතිවී යයි.',
    },
    solution: {
      en: 'In a U-tube, miscible liquids diffuse into one another and form a solution with no distinct interface. Hare’s apparatus keeps the liquids in two separate beakers, so miscible liquids never touch.',
      si: 'U-නළයකදී මිශ්‍රවන ද්‍රව එකිනෙක දියවී අතුරුමුහුණතක් නොපවතින පරිදි ද්‍රාවණයක් සාදයි. හේයාර් උපකරණයේදී ද්‍රව දෙක වෙනම බීකර දෙකක තබා ඇති බැවින් එකිනෙක ස්පර්ශ නොවේ.',
    },
  },
  {
    id: 'mech-q56',
    competencyRef: 'Competency 2.7',
    category: 'hydrostatics-manometry',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A solid cube of wood of edge 10 cm floats in water with 6 cm of its height submerged. Taking water density ρ_w = 1.0 g cm⁻³, calculate the density of the wood in g cm⁻³.',
      si: 'දාරයක දිග 10 cm වූ ඝන ලී කැටයක් එහි උසින් 6 cm ක් ගිලී ජලයේ පාවෙයි. ජලයේ ඝනත්වය 1.0 g cm⁻³ නම්, ලී කැටයේ ඝනත්වය g cm⁻³ වලින් ගණනය කරන්න.',
    },
    expected: 0.60,
    tolerance: 0.02,
    unit: { en: 'g cm⁻³', si: 'g cm⁻³' },
    hint: {
      en: 'By the law of flotation: Weight of floating body = Weight of liquid displaced.',
      si: 'පාවීමේ නියමයට අනුව: පාවෙන වස්තුවේ බර = විස්ථාපිත ද්‍රවයේ බර.',
    },
    solution: {
      en: 'V_total · ρ_wood · g = V_submerged · ρ_water · g ⇒ (A · H) · ρ_wood = (A · h) · ρ_water ⇒ ρ_wood = (h / H) · ρ_water = (6 / 10) · 1.0 = 0.60 g cm⁻³.',
      si: 'V_මුළු · ρ_ලී · g = V_ගිලුණු · ρ_ජලය · g ⇒ (A · H) · ρ_ලී = (A · h) · ρ_ජලය ⇒ ρ_ලී = (6 / 10) · 1.0 = 0.60 g cm⁻³.',
    },
  },

  // =========================================================================
  // 10. FLUID DYNAMICS (Competency 2.8) - 6 Questions
  // =========================================================================
  {
    id: 'mech-q57',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In an incompressible, steady streamline fluid flow through a horizontal pipe, water flows from a cross-section of area 4.0 cm² at 2.0 m s⁻¹ into a narrow constriction of area 1.0 cm². What is the flow speed in the constriction?',
      si: 'තිරස් නළයක් තුළින් ගලන අසම්පීඩ්‍ය, ස්ථායී ධාරාරේඛී ජල ප්‍රවාහයක් 4.0 cm² වර්ගඵලයක් සහිත කොටසකින් 2.0 m s⁻¹ වේගයෙන් 1.0 cm² වර්ගඵලයක් සහිත සිහින් කොටසකට ගලා යයි. සිහින් කොටස තුළ ජලයේ ප්‍රවාහ වේගය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.5 m s⁻¹', si: '0.5 m s⁻¹' } },
      { id: 'B', text: { en: '4.0 m s⁻¹', si: '4.0 m s⁻¹' } },
      { id: 'C', text: { en: '8.0 m s⁻¹', si: '8.0 m s⁻¹' } },
      { id: 'D', text: { en: '16.0 m s⁻¹', si: '16.0 m s⁻¹' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Use the equation of continuity: A₁ · v₁ = A₂ · v₂.',
      si: 'අවිච්ඡින්නතා සමීකරණය භාවිතා කරන්න: A₁ · v₁ = A₂ · v₂.',
    },
    solution: {
      en: 'By the equation of continuity: A₁ v₁ = A₂ v₂ ⇒ v₂ = (A₁ / A₂) · v₁ = (4.0 / 1.0) · 2.0 = 8.0 m s⁻¹.',
      si: 'අවිච්ඡින්නතා සමීකරණයෙන්: A₁ v₁ = A₂ v₂ ⇒ v₂ = (A₁ / A₂) · v₁ = (4.0 / 1.0) · 2.0 = 8.0 m s⁻¹.',
    },
  },
  {
    id: 'mech-q58',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Water of density 1000 kg m⁻³ flows horizontally through a pipe. At point 1, static pressure is 150 kPa and speed is 2.0 m s⁻¹. At point 2 in a constriction, speed increases to 6.0 m s⁻¹. Using Bernoulli’s equation, calculate the static pressure at point 2 in kPa.',
      si: '1000 kg m⁻³ ඝනත්වයෙන් යුත් ජලය තිරස් නළයක් ඔස්සේ ගලා යයි. 1 ලක්ෂ්‍යයේදී ස්ථිතික පීඩනය 150 kPa වන අතර වේගය 2.0 m s⁻¹ වේ. සිහින් වූ 2 ලක්ෂ්‍යයේදී වේගය 6.0 m s⁻¹ දක්වා වැඩි වේ. බර්නූලි සමීකරණය භාවිතයෙන් 2 ලක්ෂ්‍යයේ ස්ථිතික පීඩනය kPa වලින් ගණනය කරන්න.',
    },
    expected: 134.0,
    tolerance: 1.0,
    unit: { en: 'kPa', si: 'kPa' },
    hint: {
      en: 'P₁ + 0.5 ρ v₁² = P₂ + 0.5 ρ v₂² ⇒ P₂ = P₁ - 0.5 ρ (v₂² - v₁²).',
      si: 'P₁ + 0.5 ρ v₁² = P₂ + 0.5 ρ v₂² ⇒ P₂ = P₁ - 0.5 ρ (v₂² - v₁²).',
    },
    solution: {
      en: 'P₂ = P₁ - 0.5 · ρ · (v₂² - v₁²) = 150,000 - 0.5 · 1000 · (36 - 4) = 150,000 - 500 · 32 = 150,000 - 16,000 = 134,000 Pa = 134.0 kPa.',
      si: 'P₂ = P₁ - 0.5 · ρ · (v₂² - v₁²) = 150,000 - 0.5 · 1000 · (36 - 4) = 150,000 - 16,000 = 134,000 Pa = 134.0 kPa.',
    },
  },
  {
    id: 'mech-q59',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'According to Bernoulli’s principle for steady, non-viscous streamline flow, what happens to the static pressure along a horizontal streamline where the fluid velocity increases?',
      si: 'ස්ථායී, අදුස්ස්‍රාවී ධාරාරේඛී ප්‍රවාහයක් සඳහා වන බර්නූලි මූලධර්මයට අනුව, තරල ප්‍රවේගය වැඩි වන තිරස් ධාරාරේඛාවක් ඔස්සේ ස්ථිතික පීඩනයට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'A', text: { en: 'The static pressure decreases', si: 'ස්ථිතික පීඩනය අඩු වේ' } },
      { id: 'B', text: { en: 'The static pressure increases', si: 'ස්ථිතික පීඩනය වැඩි වේ' } },
      { id: 'C', text: { en: 'The total mechanical energy increases', si: 'මුළු යාන්ත්‍රික ශක්තිය වැඩි වේ' } },
      { id: 'D', text: { en: 'The fluid density decreases', si: 'තරලයේ ඝනත්වය අඩු වේ' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Along a horizontal streamline, P + ½ρv² = constant. If kinetic energy density increases, static pressure must fall.',
      si: 'තිරස් ධාරාරේඛාවක් ඔස්සේ P + ½ρv² = නියතයකි. ප්‍රවේගය වැඩි වන විට ස්ථිතික පීඩනය අඩු විය යුතුය.',
    },
    solution: {
      en: 'Bernoulli’s equation states that P + ½ρv² = constant for horizontal streamline flow. An increase in flow velocity increases dynamic pressure (½ρv²), which requires a corresponding drop in static pressure P.',
      si: 'තිරස් ප්‍රවාහයකදී P + ½ρv² = නියත වේ. ප්‍රවේගය වැඩි වන විට චාලක පීඩනය වැඩි වන බැවින් ස්ථිතික පීඩනය P අඩු වේ.',
    },
  },
  {
    id: 'mech-q60',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A large open water storage tank has a small drainage hole located 4.9 m below the water surface level. Taking g = 9.8 m s⁻², calculate the theoretical efflux velocity of water emerging from the hole in m s⁻¹ (to 1 decimal place).',
      si: 'විශාල විවෘත ජල ටැංකියක ජල මතුපිට මට්ටමේ සිට 4.9 m පහළින් කුඩා සිදුරක් ඇත. g = 9.8 m s⁻² ලෙස ගෙන, සිදුරෙන් පිටවන ජලයේ න්‍යායික ප්‍රවේගය m s⁻¹ වලින් ගණනය කරන්න (දශමස්ථාන 1කට).',
    },
    expected: 9.8,
    tolerance: 0.2,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'Apply Torricelli’s Law: v = √(2gh).',
      si: 'ටොරිසෙලිගේ නියමය යොදන්න: v = √(2gh).',
    },
    solution: {
      en: 'By Torricelli’s Theorem (from Bernoulli’s equation): v = √(2gh) = √(2 · 9.8 · 4.9) = √96.04 = 9.8 m s⁻¹.',
      si: 'ටොරිසෙලිගේ නියමයෙන්: v = √(2gh) = √(2 · 9.8 · 4.9) = √96.04 = 9.8 m s⁻¹.',
    },
  },
  {
    id: 'mech-q61',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why does an aeroplane wing (aerofoil) generate an upward dynamic aerodynamic lift force when moving forward through air?',
      si: 'ගුවන් යානා පියාපතක් (වායු තලය) වාතය තුළින් ඉදිරියට චලනය වන විට ඉහළට ගතික එසවුම් බලයක් ජනනය වන්නේ මන්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Air travels faster over the curved upper surface creating lower static pressure on top than below by Bernoulli’s principle', si: 'බර්නූලි මූලධර්මය අනුව වක්‍ර ඉහළ පෘෂ්ඨය මතින් වාතය වේගයෙන් ගමන් කරමින් පහළට වඩා ඉහළින් අඩු ස්ථිතික පීඩනයක් ඇති කිරීම නිසා' } },
      { id: 'B', text: { en: 'Air density is significantly higher directly on top of the wing', si: 'පියාපතට ඉහළින් වායු ඝනත්වය බෙහෙවින් වැඩි වීම නිසා' } },
      { id: 'C', text: { en: 'Atmospheric pressure pushes exclusively from below the wing', si: 'වායුගෝලීය පීඩනය පියාපතට පහළින් පමණක් ක්‍රියා කිරීම නිසා' } },
      { id: 'D', text: { en: 'Friction between air and the upper wing surface pulls it vertically', si: 'වාතය සහ ඉහළ පෘෂ්ඨය අතර ඝර්ෂණය මඟින් එය සිරස්ව ඇදීම නිසා' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'The curved camber makes streamlines crowd over the upper surface, raising speed and dropping pressure.',
      si: 'පියාපතේ උඩු පෘෂ්ඨයේ වක්‍රතාව නිසා වායු ධාරා තද වී වේගය වැඩි වේ; එමඟින් පීඩනය අඩු වේ.',
    },
    solution: {
      en: 'The aerofoil shape forces streamlines to crowd over the curved top surface, resulting in higher airflow velocity (v_top > v_bottom). By Bernoulli’s equation, P_top < P_bottom. The upward pressure difference (ΔP = P_bottom - P_top) multiplied by wing area generates the aerodynamic lift force.',
      si: 'පියාපත් හැඩය නිසා ඉහළ පෘෂ්ඨය මත වායු ප්‍රවේගය වැඩි වේ (v_ඉහළ > v_පහළ). බර්නූලි නියමයෙන් P_ඉහළ < P_පහළ වේ. මෙම පීඩන අන්තරය නිසා ඉහළට එසවුම් බලයක් ජනනය වේ.',
    },
  },
  {
    id: 'mech-q62',
    competencyRef: 'Competency 2.8',
    category: 'fluid-dynamics',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A horizontal Venturi meter is installed in a pipe of cross-sectional area A₁ = 20 cm² carrying water (ρ = 1000 kg m⁻³). At the constricted throat of area A₂ = 5.0 cm², the pressure drop measured by a differential manometer is ΔP = 3000 Pa. Calculate the flow velocity v₁ in the main pipe in m s⁻¹ (to 2 decimal places).',
      si: 'ජලය (ρ = 1000 kg m⁻³) ගෙන යන 20 cm² හරස්කඩ වර්ගඵලයක් සහිත නළයක තිරස් වෙන්චුරිමානයක් සවිකර ඇත. 5.0 cm² වර්ගඵලයක් ඇති එහි උගුරේදී මනිනු ලබන පීඩන බැස්ම ΔP = 3000 Pa වේ. ප්‍රධාන නළයේ ජලයේ ප්‍රවාහ ප්‍රවේගය v₁ m s⁻¹ වලින් ගණනය කරන්න (දශමස්ථාන 2කට).',
    },
    expected: 0.63,
    tolerance: 0.03,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'ΔP = 0.5 ρ (v₂² - v₁²). By continuity v₂ = (A₁/A₂) v₁ = 4 v₁ ⇒ ΔP = 0.5 · 1000 · (16 - 1) · v₁².',
      si: 'ΔP = 0.5 ρ (v₂² - v₁²). අවිච්ඡින්නතාවයෙන් v₂ = 4 v₁ වේ.',
    },
    solution: {
      en: 'By continuity: v₂ = (A₁ / A₂) v₁ = (20 / 5) v₁ = 4 v₁. By Bernoulli: ΔP = 0.5 · ρ · (v₂² - v₁²) = 0.5 · 1000 · (16 v₁² - v₁²) = 500 · 15 v₁² = 7500 v₁². Thus 3000 = 7500 v₁² ⇒ v₁² = 3000 / 7500 = 0.40 ⇒ v₁ = √0.40 ≈ 0.632 m s⁻¹ ≈ 0.63 m s⁻¹.',
      si: 'අවිච්ඡින්නතාවයෙන් v₂ = 4 v₁ වේ. බර්නූලි සමීකරණයෙන්: ΔP = 7500 v₁² ⇒ 3000 = 7500 v₁² ⇒ v₁² = 0.40 ⇒ v₁ ≈ 0.63 m s⁻¹.',
    },
  },
  {
    "id": "mech-sq01",
    "competencyRef": "Competency 2.1",
    "category": "kinematics",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A laboratory investigation determines the acceleration of free fall g using a 50 Hz ticker-timer attached to a falling weighted tape. The timer produces dots on paper tape at equal time intervals.",
      "si": "50 Hz ටිකර් ටයිමරයක් සහ නිදහසේ වැටෙන භාරයක් සහිත පටියක් භාවිතයෙන් ගුරුත්වාකර්ෂණ ත්වරණය g නිර්ණය කිරීමේ පරීක්ෂණයක් සිදුකරයි. ටයිමරය මඟින් සමාන කාලාන්තර වලදී කඩදාසි පටිය මත තිත් සටහන් කරයි."
    },
    "parts": [
      {
        "id": "mech-sq01-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the time interval T between two consecutive dots on the ticker tape.",
          "si": "ටිකර් පටිය මත අනුයාත තිත් දෙකක් අතර කාලාන්තරය T ගණනය කරන්න."
        },
        "allocatedMarks": 1,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates T = 1/f = 1/50 = 0.02 s with correct unit.",
              "si": "නිවැරදි ඒකකය සහිතව T = 1/f = 1/50 = 0.02 s ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "T = 1 / f = 1 / 50 Hz = 0.02 s.",
          "si": "T = 1 / f = 1 / 50 Hz = 0.02 s."
        }
      },
      {
        "id": "mech-sq01-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Explain why the distance between successive dot intervals increases down the tape, and state the relationship between the distance increment and acceleration g.",
          "si": "පටිය පහළට යත්ම අනුයාත තිත් අතර දුර වැඩි වන්නේ මන්දැයි පැහැදිලි කර, දුර වැඩිවීම සහ g ත්වරණය අතර සම්බන්ධය දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that speed increases continuously due to gravitational acceleration while time interval between dots remains constant (0.02 s).",
              "si": "තිත් අතර කාලය නියතව (0.02 s) පවතිද්දී ගුරුත්වාකර්ෂණ ත්වරණය නිසා ප්‍රවේගය අඛණ්ඩව වැඩිවන බව ප්‍රකාශ කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States relationship: difference between successive intervals Δs2 - Δs1 = g · T².",
              "si": "අනුයාත දුරවල් වල වෙනස Δs2 - Δs1 = g · T² බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Since the falling mass is accelerating uniformly under gravity, its downward velocity increases linearly with time. Because the time interval between dots is constant (T = 0.02 s), the distance traversed per interval s = uT + (1/2)gT² increases. The difference between successive interval lengths is Δs = g · T².",
          "si": "වැටෙන ස්කන්ධය ගුරුත්වය යටතේ ඒකාකාරව ත්වරණය වන බැවින්, එහි ප්‍රවේගය කාලය සමඟ රේඛීයව වැඩිවේ. තිත් අතර කාලාන්තරය නියත බැවින් (T = 0.02 s), එක් එක් කාලාන්තරයේදී ගමන් කරන දුර වැඩිවේ. අනුයාත දුරවල් දෙකක වෙනස Δs = g · T² වේ."
        }
      },
      {
        "id": "mech-sq01-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "The distance between the 1st dot and the 6th dot is 12.0 cm (5 intervals), and between the 6th dot and the 11th dot is 21.8 cm (5 intervals). Calculate the experimental value of the acceleration of free fall g.",
          "si": "1 වන තිත සහ 6 වන තිත අතර දුර (කාලාන්තර 5 ක්) 12.0 cm වන අතර, 6 වන තිත සහ 11 වන තිත අතර දුර (කාලාන්තර 5 ක්) 21.8 cm වේ. ගුරුත්වාකර්ෂණ ත්වරණය g හි පරීක්ෂණාත්මක අගය ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies total time for each 5-interval segment: t = 5 × 0.02 = 0.10 s.",
              "si": "එක් කොටසක් සඳහා කාලය t = 5 × 0.02 = 0.10 s ලෙස හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates average velocities of first and second sections: v1 = 0.120 / 0.10 = 1.20 m/s and v2 = 0.218 / 0.10 = 2.18 m/s.",
              "si": "පළමු සහ දෙවන කොටස්වල මධ්‍යන්‍ය ප්‍රවේග v1 = 1.20 m/s සහ v2 = 2.18 m/s ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies acceleration formula a = (v2 - v1) / t where time elapsed between midpoints is 0.10 s.",
              "si": "මධ්‍ය ලක්ෂ්‍ය අතර කාලය 0.10 s යොදා a = (v2 - v1) / t සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Obtains final g = 9.8 m s⁻² (accept 9.80 m s⁻²).",
              "si": "අවසාන අගය g = 9.8 m s⁻² ලෙස ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Time for 5 intervals: t = 5 × 0.02 s = 0.10 s.\nAverage velocity of first 5-interval span: v₁ = 0.120 m / 0.10 s = 1.20 m s⁻¹.\nAverage velocity of second 5-interval span: v₂ = 0.218 m / 0.10 s = 2.18 m s⁻¹.\nTime between the midpoints of these two intervals: Δt = 0.10 s.\nTherefore, g = (v₂ - v₁) / Δt = (2.18 - 1.20) / 0.10 = 0.98 / 0.10 = 9.80 m s⁻².",
          "si": "කාලාන්තර 5 ක කාලය: t = 5 × 0.02 s = 0.10 s.\nපළමු කොටසේ සාමාන්‍ය ප්‍රවේගය: v₁ = 0.120 m / 0.10 s = 1.20 m s⁻¹.\nදෙවන කොටසේ සාමාන්‍ය ප්‍රවේගය: v₂ = 0.218 m / 0.10 s = 2.18 m s⁻¹.\nමධ්‍ය ලක්ෂ්‍ය අතර කාලය: Δt = 0.10 s.\nඑබැවින් g = (v₂ - v₁) / Δt = (2.18 - 1.20) / 0.10 = 9.80 m s⁻²."
        }
      },
      {
        "id": "mech-sq01-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "State two practical precautions taken during this experiment to minimize systematic and random errors.",
          "si": "පද්ධතිගත සහ සසම්භාවී දෝෂ අවම කිරීම සඳහා මෙම පරීක්ෂණයේදී ගන්නා ප්‍රායෝගික පූර්වෝපායයන් දෙකක් සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States precaution 1: Ensure paper tape falls vertically without rubbing against the sides of the timer guide slots.",
              "si": "පූර්වෝපාය 1: පටිය ටයිමරයේ කවුළුවල ගැටෙමින් ඝර්ෂණය ඇති නොවන සේ සිරස්ව වැටීමට සැලැස්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States precaution 2: Discard initial crowded dots before the tape attains steady vertical motion and use a cushioned landing box.",
              "si": "පූර්වෝපාය 2: පටිය ආරම්භයේදී එකට ගොනු වී ඇති අපැහැදිලි තිත් මැනීමෙන් ඉවත් කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. Ensure the paper tape passes smoothly through the timer guides vertically without twisting or rubbing against guide edges to reduce frictional drag.\n2. Discard the initial faint or overlapping dots until the tape achieves smooth vertical fall, and measure distances using a calibrated rigid metre rule placed on edge.",
          "si": "1. ඝර්ෂණය අවම වන සේ කඩදාසි පටිය නොඇඹරී සිරස්ව චලනය වීමට සැලැස්වීම.\n2. වැටීම ආරම්භයේදී සටහන් වන අපැහැදිලි තිත් ගණනයෙන් බැහැර කිරීම සහ මීටර් රූල පැත්තකින් තබා නිවැරදිව මැනීම."
        }
      }
    ],
    "hint": {
      "en": "Use the difference in mean velocities between two equal time intervals of 5 dots: Δv = g · Δt.",
      "si": "සමාන කාලාන්තර දෙකක මධ්‍යන්‍ය ප්‍රවේග වෙනස භාවිතා කරන්න: Δv = g · Δt."
    },
    "solution": {
      "en": "Period T = 1/50 = 0.02 s. For each 5-tick segment (Δt = 0.10 s), v1 = 1.20 m/s and v2 = 2.18 m/s. Experimental acceleration g = (2.18 - 1.20)/0.10 = 9.80 m s⁻².",
      "si": "කාලාවර්තය T = 1/50 = 0.02 s. තිත් 5 ක කාලාන්තරයක් සඳහා (Δt = 0.10 s), v1 = 1.20 m/s හා v2 = 2.18 m/s වේ. ත්වරණය g = (2.18 - 1.20)/0.10 = 9.80 m s⁻²."
    }
  },
  {
    "id": "mech-sq02",
    "competencyRef": "Competency 2.1",
    "category": "projectiles",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A projectile is launched from a point on level ground with an initial velocity u = 25.0 m s⁻¹ at an elevation angle θ = 30.0° above the horizontal. Assume g = 9.80 m s⁻² and neglect air resistance.",
      "si": "තිරස් තලයක පිහිටි ලක්ෂ්‍යයකින් u = 25.0 m s⁻¹ ආරම්භක ප්‍රවේගයකින් තිරසට θ = 30.0° ක ආනතියකින් ප්‍රක්ෂේප්‍යයක් විදිනු ලැබේ. g = 9.80 m s⁻² ලෙස ගෙන වායු ප්‍රතිරෝධය නොසලකන්න."
    },
    "parts": [
      {
        "id": "mech-sq02-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the horizontal (u_x) and vertical (u_y) components of the initial velocity.",
          "si": "ආරම්භක ප්‍රවේගයේ තිරස් (u_x) සහ සිරස් (u_y) සංරචක ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates u_x = u cos(30°) = 25.0 × 0.8660 = 21.65 m s⁻¹.",
              "si": "u_x = u cos(30°) = 21.65 m s⁻¹ ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates u_y = u sin(30°) = 25.0 × 0.500 = 12.50 m s⁻¹.",
              "si": "u_y = u sin(30°) = 12.50 m s⁻¹ ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Horizontal component: u_x = 25.0 × cos(30.0°) = 25.0 × 0.8660 = 21.65 m s⁻¹.\nVertical component: u_y = 25.0 × sin(30.0°) = 25.0 × 0.500 = 12.50 m s⁻¹.",
          "si": "තිරස් සංරචකය: u_x = 25.0 × cos(30.0°) = 21.65 m s⁻¹.\nසිරස් සංරචකය: u_y = 25.0 × sin(30.0°) = 12.50 m s⁻¹."
        }
      },
      {
        "id": "mech-sq02-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the total time of flight T of the projectile until it lands on the horizontal ground.",
          "si": "ප්‍රක්ෂේප්‍යය නැවත තිරස් පොළොව මත පතිත වන තෙක් ගතවන සම්පූර්ණ උড্ডයන කාලය T ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies vertical motion equation s_y = u_y T - (1/2) g T² = 0 or v_y = u_y - g(T/2) = 0.",
              "si": "සිරස් චලිතය සඳහා s_y = u_y T - (1/2) g T² = 0 සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Finds T = 2 u_y / g = 2 × 12.50 / 9.80 = 2.55 s.",
              "si": "T = 2.55 s ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Using s_y = u_y T - (1/2) g T² with s_y = 0:\nT = 2 u_y / g = (2 × 12.50) / 9.80 = 25.0 / 9.80 = 2.55 s.",
          "si": "s_y = 0 යෙදීමෙන්, T = 2 u_y / g = (2 × 12.50) / 9.80 = 2.55 s."
        }
      },
      {
        "id": "mech-sq02-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the maximum height H achieved by the projectile above the horizontal launch plane.",
          "si": "ප්‍රක්ෂේප්‍යය ලබා ගන්නා උපරිම උස H ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States condition at apex: v_y = 0.",
              "si": "උපරිම උසේදී සිරස් ප්‍රවේගය v_y = 0 බව හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Uses v_y² = u_y² - 2gH => H = u_y² / (2g).",
              "si": "v_y² = u_y² - 2gH සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes H = (12.50)² / (2 × 9.80) = 156.25 / 19.60 = 7.97 m.",
              "si": "H = 7.97 m ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At maximum height, v_y = 0.\nUsing v_y² = u_y² - 2gH:\n0 = (12.50)² - 2(9.80)H => H = 156.25 / 19.60 = 7.97 m.",
          "si": "උපරිම උසේදී v_y = 0.\nv_y² = u_y² - 2gH මඟින්:\n0 = (12.50)² - 2(9.80)H => H = 156.25 / 19.60 = 7.97 m."
        }
      },
      {
        "id": "mech-sq02-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Calculate the horizontal range R of the projectile.",
          "si": "ප්‍රක්ෂේප්‍යයේ තිරස් පරාසය R ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies R = u_x × T.",
              "si": "R = u_x × T සමීකරණය හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes R = 21.65 × 2.551 = 55.2 m (or via u² sin(2θ)/g = 625 × 0.8660 / 9.80 = 55.2 m).",
              "si": "R = 55.2 m ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Horizontal range: R = u_x × T = 21.65 m s⁻¹ × 2.551 s = 55.2 m (or R = u² sin(2θ) / g = 25² sin(60°) / 9.80 = 55.2 m).",
          "si": "තිරස් පරාසය: R = u_x × T = 21.65 m s⁻¹ × 2.551 s = 55.2 m."
        }
      }
    ],
    "hint": {
      "en": "Resolve into independent horizontal and vertical motions: constant velocity horizontally and uniform gravitational acceleration vertically.",
      "si": "තිරස් සහ සිරස් චලිතයන් ස්වාධීනව සලකන්න: තිරස්ව නියත ප්‍රවේගය සහ සිරස්ව ඒකාකාර ගුරුත්වජ ත්වරණය."
    },
    "solution": {
      "en": "u_x = 21.65 m/s, u_y = 12.50 m/s. Time of flight T = 2.55 s. Maximum height H = 7.97 m. Horizontal range R = 55.2 m.",
      "si": "u_x = 21.65 m/s, u_y = 12.50 m/s. උද්ධයන කාලය T = 2.55 s. උපරිම උස H = 7.97 m. තිරස් පරාසය R = 55.2 m."
    }
  },
  {
    "id": "mech-sq03",
    "competencyRef": "Competency 2.3",
    "category": "newtons-laws-momentum",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A student investigates the conservation of linear momentum using two dynamics trolleys A and B on a friction-compensated runway. Trolley A of mass mA = 0.500 kg moves at initial velocity uA = 1.20 m s⁻¹ towards stationary trolley B of mass mB = 0.300 kg. On impact, Velcro pads cause them to stick together.",
      "si": "ඝර්ෂණය හිලවු කළ බෑවුම් පථයක් මත A සහ B ඩයිනමික්ස් ට්‍රොලි දෙකක් යොදාගෙන රේඛීය ගම්‍යතා සංස්ථිති මූලධර්මය පරික්ෂා කරයි. mA = 0.500 kg ස්කන්ධයක් ඇති A ට්‍රොලිය uA = 1.20 m s⁻¹ ආරම්භක ප්‍රවේගයකින් චලනය වී නිශ්චලව තිබූ mB = 0.300 kg ස්කන්ධයක් ඇති B ට්‍රොලියේ ගැටේ. ගැටීමෙන් පසු වෙල්ක්‍රෝ පටි මඟින් ඒවා එකිනෙක ඇලී එකට ගමන් කරයි."
    },
    "parts": [
      {
        "id": "mech-sq03-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Explain how the runway is adjusted to achieve friction compensation.",
          "si": "ධාවන පථයේ ඝර්ෂණය හිලවු කිරීම සිදුකරන ආකාරය පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that one end of the track is slightly elevated until the component of gravitational weight down the slope balances friction.",
              "si": "ගුරුත්වජ බරෙහි බෑවුම ඔස්සේ සංරචකය මඟින් ඝර්ෂණ බලය තුලනය වන සේ පථයේ එක් කෙළවරක් මදක් එසවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Describes test: a trolley given a gentle push moves down the track with constant velocity (dots on ticker tape are equidistant).",
              "si": "පරීක්ෂාව: ට්‍රොලියට කුඩා තල්ලුවක් දුන් විට එය ඒකාකාර ප්‍රවේගයෙන් ගමන් කළ යුතුය (තිත් අතර දුර සමාන වේ)."
            }
          }
        ],
        "modelAnswer": {
          "en": "One end of the runway is raised slightly until the component of gravity acting parallel to the incline (mg sinθ) exactly balances the opposing frictional forces. When adjusted correctly, a trolley given a light push continues moving down the track at constant velocity, confirmed by equally spaced dots on a ticker tape.",
          "si": "බෑවුම ඔස්සේ ක්‍රියාකරන ගුරුත්ව සංරචකය (mg sinθ) ඝර්ෂණ බලයට සමාන වන සේ පථයේ එක් කෙළවරක් එසවීම සිදුකරයි. එවිට ට්‍රොලියකට කුඩා තල්ලුවක් දුන් විට එය ඒකාකාර ප්‍රවේගයෙන් චලනය වේ (ටිකර් පටියේ තිත් අතර පරතරය නියතව පවතී)."
        }
      },
      {
        "id": "mech-sq03-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "State the principle of conservation of linear momentum.",
          "si": "රේඛීය ගම්‍යතා සංස්ථිති මූලධර්මය ප්‍රකාශ කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that the total linear momentum of an isolated system remains constant.",
              "si": "බාහිර අසමතුලිත බලයක් ක්‍රියා නොකරන සංවෘත පද්ධතියක මුළු රේඛීය ගම්‍යතාව නියතව පවතින බව ප්‍රකාශ කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Specifies the condition: in the absence of external resultant forces acting on the system.",
              "si": "කොන්දේසිය: පද්ධතිය මත බාහිර සම්ප්‍රයුක්ත බලයක් නොමැති විට."
            }
          }
        ],
        "modelAnswer": {
          "en": "The total linear momentum of an isolated system of interacting bodies remains constant in magnitude and direction, provided no external resultant force acts on the system.",
          "si": "පද්ධතියක් මත කිසිදු බාහිර අසමතුලිත බලයක් ක්‍රියා නොකරන්නේ නම්, එම පද්ධතියේ මුළු රේඛීය ගම්‍යතාව විශාලත්වයෙන් හා දිශාවෙන් නියතව පවතී."
        }
      },
      {
        "id": "mech-sq03-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the common velocity V of the coupled trolleys immediately after the collision.",
          "si": "ගැටීමෙන් පසු එකට බැඳුණු ට්‍රොලි දෙකෙහි පොදු ප්‍රවේගය V ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies conservation equation: mA uA + mB uB = (mA + mB) V.",
              "si": "mA uA + mB uB = (mA + mB) V සමීකරණය ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes numerical values: (0.500 × 1.20) + (0.300 × 0) = (0.500 + 0.300) V.",
              "si": "ආදේශ කිරීම: 0.600 = 0.800 V."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes V = 0.600 / 0.800 = 0.750 m s⁻¹.",
              "si": "V = 0.750 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Total initial momentum = mA uA + mB uB = (0.500 kg × 1.20 m s⁻¹) + 0 = 0.600 kg m s⁻¹.\nTotal final momentum = (mA + mB) V = (0.500 + 0.300) V = 0.800 V.\nBy conservation of momentum: 0.800 V = 0.600 => V = 0.750 m s⁻¹.",
          "si": "ආරම්භක මුළු ගම්‍යතාව = (0.500 × 1.20) + 0 = 0.600 kg m s⁻¹.\nඅවසාන මුළු ගම්‍යතාව = 0.800 V.\nගම්‍යතා සංස්ථිතියෙන්: 0.800 V = 0.600 => V = 0.750 m s⁻¹."
        }
      },
      {
        "id": "mech-sq03-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Calculate the kinetic energy lost during the collision and account for where this energy has gone.",
          "si": "ගැටීමේදී හානි වූ චාලක ශක්තිය ගණනය කර, මෙම ශක්තියට කුමක් සිදුවීදැයි පහදන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates initial kinetic energy: KE_i = (1/2)(0.500)(1.20)² = 0.360 J.",
              "si": "ආරම්භක චාලක ශක්තිය KE_i = 0.360 J ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates final kinetic energy: KE_f = (1/2)(0.800)(0.750)² = 0.225 J and loss = 0.135 J.",
              "si": "අවසාන චාලක ශක්තිය KE_f = 0.225 J සහ ශක්ති හානිය = 0.135 J ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that lost mechanical energy is converted into thermal energy, sound, and inelastic deformation of the Velcro pads.",
              "si": "හානි වූ ශක්තිය තාපය, ශබ්දය සහ පටිවල විරූපණය බවට පත්වන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Initial kinetic energy: KE_i = (1/2) mA uA² = 0.5 × 0.500 × (1.20)² = 0.360 J.\nFinal kinetic energy: KE_f = (1/2) (mA + mB) V² = 0.5 × 0.800 × (0.750)² = 0.225 J.\nKinetic energy lost = 0.360 - 0.225 = 0.135 J.\nThis kinetic energy is transformed into thermal energy (heat), acoustic energy (sound on impact), and mechanical work done in permanently interlocking the Velcro fibers.",
          "si": "ආරම්භක KE = 0.360 J.\nඅවසාන KE = 0.225 J.\nහානි වූ චාලක ශක්තිය = 0.135 J.\nමෙම ශක්තිය තාප ශක්තිය, ශබ්ද ශක්තිය සහ වෙල්ක්‍රෝ කෙඳි විරූපණය වීම සඳහා වැය වේ."
        }
      }
    ],
    "hint": {
      "en": "Total momentum before collision equals total momentum after collision. Kinetic energy is not conserved in completely inelastic collisions.",
      "si": "ගැටුමට පෙර මුළු ගම්‍යතාව ගැටුමට පසු මුළු ගම්‍යතාවට සමාන වේ. අප්‍රත්‍යාස්ථ ගැටුම්වලදී චාලක ශක්තිය සංස්ථිතික නොවේ."
    },
    "solution": {
      "en": "Initial momentum = 0.600 kg m/s. Common velocity V = 0.750 m/s. Kinetic energy lost = 0.360 J - 0.225 J = 0.135 J, dissipated as heat and sound.",
      "si": "ආරම්භක ගම්‍යතාව = 0.600 kg m/s. පොදු ප්‍රවේගය V = 0.750 m/s. හානි වූ චාලක ශක්තිය = 0.135 J, තාපය හා ශබ්දය බවට පත්වේ."
    }
  },
  {
    "id": "mech-sq04",
    "competencyRef": "Competency 2.4",
    "category": "force-equilibrium",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "In an experiment to verify the triangle of forces using a vertical force board, three coplanar forces P, Q, and R act on a small junction ring O via light cords and friction-free pulleys, keeping it in static equilibrium.",
      "si": "සිරස් බල ලෑල්ලක් භාවිතයෙන් බල ත්‍රිකෝණ නියමය සත්‍යාපනය කිරීමේ පරීක්ෂණයකදී, කුඩා O සන්ධි මුදුවක් මත P, Q සහ R තලීය බල තුනක් සැහැල්ලු තන්තු සහ ඝර්ෂණ රහිත කප්පි මඟින් ක්‍රියාකරමින් එය ස්ථිතික සමතුලිතතාවයේ තබයි."
    },
    "parts": [
      {
        "id": "mech-sq04-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State the conditions necessary for three coplanar non-parallel forces to keep a body in equilibrium.",
          "si": "සමාන්තර නොවන තලීය බල තුනක් මඟින් වස්තුවක් සමතුලිතව පැවතීමට අවශ්‍ය කොන්දේසි සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Condition 1: Lines of action of all three forces must intersect at a single common point (concurrent forces).",
              "si": "කොන්දේසිය 1: බල තුනෙහිම ක්‍රියාකාරී රේඛා එක් ලක්ෂ්‍යයකදී ඡේදනය විය යුතුය (සමගාමී විය යුතුය)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Condition 2: The vector sum of the three forces must be zero (represented in order by the three sides of a closed triangle).",
              "si": "කොන්දේසිය 2: බල තුනෙහි දෛශික එකතුව ශුන්‍ය විය යුතුය (සංවෘත ත්‍රිකෝණයක අනුපිළිවෙලින් ගත් පාද මඟින් නිරූපණය විය යුතුය)."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. The forces must be concurrent; their lines of action must meet at a single point so that there is no net turning moment.\n2. The vector resultant of the three forces must be zero, meaning the forces can be represented in magnitude and direction by the sides of a closed triangle taken in order.",
          "si": "1. බල තුනෙහි ක්‍රියාකාරී රේඛා එක් ලක්ෂ්‍යයකදී හමුවිය යුතුය (සමගාමී විය යුතුය).\n2. බලයන්ගේ දෛශික එකතුව ශුන්‍ය විය යුතුය, එනම් අනුපිළිවෙලින් ගත් සංවෘත ත්‍රිකෝණයක පාද මඟින් ඒවා නිරූපණය කළ හැකි විය යුතුය."
        }
      },
      {
        "id": "mech-sq04-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Describe how the directions of the strings are transferred onto the paper behind the strings without parallax error.",
          "si": "දෘෂ්ටි විලාස දෝෂයකින් තොරව තන්තු වල දිශාවන් පිටුපස ඇති කඩදාසිය මතට සටහන් කරගන්නා ආකාරය විස්තර කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Mentions using a plane mirror strip placed behind the thread.",
              "si": "තන්තුව පිටුපසින් තැබූ තල දර්පණ තීරුවක් භාවිතය සඳහන් කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States viewing until thread and its reflected image coincide, then marking two dots with a sharp pencil along each line.",
              "si": "තන්තුව සහ එහි ප්‍රතිබිම්බය සමපාත වන සේ බලා පැන්සලකින් ලක්ෂ්‍ය දෙක බැගින් සලකුණු කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "A plane mirror strip is held flat against the paper behind each string. The observer views the string with one eye and moves until the string exactly overlaps its reflected image in the mirror (eliminating parallax). Two sharp pencil dots are then marked directly on the paper beneath the thread along each branch.",
          "si": "කඩදාසියට පිටුපසින් තල දර්පණ තීරුවක් තබා, තන්තුව සහ එහි ප්‍රතිබිම්බය එකිනෙක සමපාත වන සේ බලමින් එක් එක් තන්තුව ඔස්සේ කඩදාසිය මත පැන්සලකින් ලක්ෂ්‍ය දෙක බැගින් සටහන් කර ගනී."
        }
      },
      {
        "id": "mech-sq04-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Explain how the drawn vector triangle confirms whether the experimental forces satisfy equilibrium.",
          "si": "ඇඳි දෛශික ත්‍රිකෝණය මඟින් පරීක්ෂණාත්මක බල සමතුලිතතාව තහවුරු කරන්නේ කෙසේදැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Draws sides parallel to the three strings with lengths proportional to the suspended weights (using a suitable scale).",
              "si": "සුදුසු පරිමාණයකට එල්ලා ඇති බරවලට අනුපාතිකව තන්තුවලට සමාන්තරව පාද ඇඳීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Confirms that if the three vectors form a closed triangle with arrows in cyclic order, equilibrium is verified within experimental uncertainty.",
              "si": "දෛශික තුන චක්‍රීය පිළිවෙලට ගත් සංවෘත ත්‍රිකෝණයක් සාදයි නම් සමතුලිතතාව තහවුරු වන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Vectors representing forces P, Q, and R are drawn sequentially parallel to the corresponding string directions, with vector lengths proportional to the magnitudes of suspended weights (using an appropriate scale like 1 cm = 0.5 N). If the third vector terminates precisely at the starting point of the first vector, forming a closed triangle with arrows in head-to-tail sequence, equilibrium is verified.",
          "si": "සුදුසු පරිමාණයක් යොදාගෙන බල තුනට අනුරූපව තන්තුවල දිශාවට සමාන්තරව දෛශික එකිනෙකට හිස-වලිග පිළිවෙලට අඳිනු ලැබේ. තුන්වන දෛශිකයේ අවසානය පළමු දෛශිකයේ ආරම්භක ලක්ෂ්‍යය සමඟ සමපාත වී සංවෘත ත්‍රිකෝණයක් සාදන්නේ නම් සමතුලිතතාව සනාථ වේ."
        }
      },
      {
        "id": "mech-sq04-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "In an experiment, two cords make an angle of 90° with each other and support masses m1 = 0.300 kg and m2 = 0.400 kg. Calculate the mass m3 required on the third cord to maintain equilibrium, taking g = 9.80 m s⁻².",
          "si": "පරීක්ෂණයකදී තන්තු දෙකක් එකිනෙකට 90° ක කෝණයක් සාදමින් m1 = 0.300 kg සහ m2 = 0.400 kg ස්කන්ධ දරා සිටී. සමතුලිතතාව පැවතීමට තුන්වන තන්තුවේ එල්ලිය යුතු m3 ස්කන්ධය ගණනය කරන්න (g = 9.80 m s⁻²)."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates weights W1 = 0.300 × 9.8 = 2.94 N and W2 = 0.400 × 9.8 = 3.92 N.",
              "si": "W1 = 2.94 N සහ W2 = 3.92 N බරවල් ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies Pythagoras since angle is 90°: W3 = √(W1² + W2²).",
              "si": "කෝණය 90° බැවින් පයිතගරස් ප්‍රමේයය යෙදීම: W3 = √(W1² + W2²)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes W3 = √(2.94² + 3.92²) = 4.90 N.",
              "si": "W3 = 4.90 N ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes mass m3 = W3 / g = 0.500 kg.",
              "si": "ස්කන්ධය m3 = 0.500 kg (හෝ 500 g) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Force F1 = m1 g = 0.300 × 9.80 = 2.94 N.\nForce F2 = m2 g = 0.400 × 9.80 = 3.92 N.\nSince F1 and F2 are perpendicular (90°):\nResultant F12 = √(F1² + F2²) = √(2.94² + 3.92²) = √(8.6436 + 15.3664) = √24.01 = 4.90 N.\nFor equilibrium, the third force F3 must equal F12 in magnitude: F3 = 4.90 N.\nMass m3 = F3 / g = 4.90 / 9.80 = 0.500 kg (500 g).",
          "si": "බල F1 = 2.94 N, F2 = 3.92 N.\nලම්බක බැවින් සම්ප්‍රයුක්තය F12 = √(2.94² + 3.92²) = 4.90 N.\nසමතුලිතතාව සඳහා F3 = 4.90 N විය යුතුය.\nඑබැවින් ස්කන්ධය m3 = 4.90 / 9.80 = 0.500 kg (500 g)."
        }
      }
    ],
    "hint": {
      "en": "The resultant of the two perpendicular forces must be equal and opposite to the tension in the third string: m3 = √(m1² + m2²).",
      "si": "ලම්බක බල දෙකෙහි සම්ප්‍රයුක්තය තුන්වන තන්තුවේ ආතතියට සමාන හා ප්‍රතිවිරුද්ධ විය යුතුය: m3 = √(m1² + m2²)."
    },
    "solution": {
      "en": "For concurrent equilibrium, forces must form a closed vector triangle. For perpendicular masses 0.300 kg and 0.400 kg, the balancing mass is m3 = √(0.300² + 0.400²) = 0.500 kg (4.90 N).",
      "si": "සමගාමී සමතුලිතතාව සඳහා බල දෛශික සංවෘත ත්‍රිකෝණයක් සෑදිය යුතුය. ලම්බක ස්කන්ධ සඳහා තුලනය කරන ස්කන්ධය m3 = √(0.300² + 0.400²) = 0.500 kg වේ."
    }
  },
  {
    "id": "mech-sq05",
    "competencyRef": "Competency 2.2",
    "category": "moments-and-couples",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A student uses the principle of moments to determine the mass M of an ordinary uniform metre rule. The rule is balanced horizontally on a knife edge placed at the 35.0 cm graduation mark by suspending a known mass m = 50.0 g at the 10.0 cm mark.",
      "si": "සාමාන්‍ය ඒකාකාර මීටර් රූලක ස්කන්ධය M සෙවීම සඳහා ශිෂ්‍යයෙක් ඝූර්ණ මූලධර්මය භාවිතා කරයි. 35.0 cm සලකුණ මත තැබූ දැලි පිහි දාරයක් මත මීටර් රූල තිරස්ව සමතුලිත කර ඇත්තේ 10.0 cm සලකුණෙහි m = 50.0 g ස්කන්ධයක් එල්ලීමෙනි."
    },
    "parts": [
      {
        "id": "mech-sq05-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State the principle of moments for a body in rotational equilibrium.",
          "si": "භ්‍රමණ සමතුලිතතාවයේ පවතින වස්තුවක් සඳහා ඝූර්ණ මූලධර්මය ප්‍රකාශ කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that for a body in rotational equilibrium, the sum of clockwise moments about any axis equals the sum of anticlockwise moments about the same axis.",
              "si": "භ්‍රමණ සමතුලිතතාවයේ පවතින වස්තුවක් මත ඕනෑම ලක්ෂ්‍යයක් වටා දක්ෂිණාවර්ත ඝූර්ණ එකතුව එම ලක්ෂ්‍යය වටාම වාමාවර්ත ඝූර්ණ එකතුවට සමාන වන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Mentions that moments must be taken about the identical pivot point/axis.",
              "si": "ඝූර්ණ ලබාගත යුත්තේ එකම අක්ෂය/ලක්ෂ්‍යය වටා බව සඳහන් කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For a body in rotational equilibrium, the algebraic sum of clockwise moments of all forces about any pivot axis is equal to the algebraic sum of anticlockwise moments about that same axis (i.e. resultant torque = 0).",
          "si": "භ්‍රමණ සමතුලිතතාවයේ පවතින වස්තුවක් මත යම් අක්ෂයක් වටා ක්‍රියාකරන දක්ෂිණාවර්ත ඝූර්ණවල එකතුව එම අක්ෂය වටාම ක්‍රියාකරන වාමාවර්ත ඝූර්ණවල එකතුවට සමාන වේ."
        }
      },
      {
        "id": "mech-sq05-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Assuming the centre of gravity of the uniform metre rule lies at the 50.0 cm graduation mark, calculate the mass M of the metre rule.",
          "si": "ඒකාකාර මීටර් රූලේ ගුරුත්ව කේන්ද්‍රය 50.0 cm සලකුණෙහි පිහිටන්නේ යැයි උපකල්පනය කර, මීටර් රූලේ M ස්කන්ධය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies distance of 50.0 g mass from pivot: d1 = 35.0 - 10.0 = 25.0 cm, and distance of rule weight from pivot: d2 = 50.0 - 35.0 = 15.0 cm.",
              "si": "ආධාරකයේ සිට දුරවල් හඳුනා ගැනීම: d1 = 25.0 cm සහ d2 = 15.0 cm."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Sets up moment equation: m × d1 = M × d2 => 50.0 × 25.0 = M × 15.0.",
              "si": "ඝූර්ණ සමීකරණය ලිවීම: 50.0 × 25.0 = M × 15.0."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates M = 1250 / 15.0 = 83.3 g (0.0833 kg).",
              "si": "M = 83.3 g (හෝ 0.0833 kg) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Pivot position = 35.0 cm mark.\nDistance from pivot to known mass m (10.0 cm mark): d₁ = 35.0 - 10.0 = 25.0 cm.\nDistance from pivot to centre of gravity of rule (50.0 cm mark): d₂ = 50.0 - 35.0 = 15.0 cm.\nTaking moments about the knife edge:\nAnticlockwise moment = m · g · d₁ = 50.0 × g × 25.0\nClockwise moment = M · g · d₂ = M × g × 15.0\nEquating moments: 50.0 × 25.0 = M × 15.0 => M = 1250 / 15.0 = 83.3 g.",
          "si": "ආධාරකය වටා ඝූර්ණ ගැනීමෙන්:\nවාමාවර්ත ඝූර්ණය = 50.0 × g × (35.0 - 10.0) = 50.0 × g × 25.0\nදක්ෂිණාවර්ත ඝූර්ණය = M × g × (50.0 - 35.0) = M × g × 15.0\n50.0 × 25.0 = 15.0 M => M = 83.3 g."
        }
      },
      {
        "id": "mech-sq05-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Explain why taking moments about the knife edge is the preferred choice of pivot.",
          "si": "දැලි පිහි දාරය වටා ඝූර්ණ ගැනීම වඩාත් යෝග්‍ය වන්නේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that the upward normal reaction force R of the knife edge acts directly through this pivot point.",
              "si": "ආධාරකයේ ඉහළට ක්‍රියාකරන සාමාන්‍ය ප්‍රතික්‍රියා බලය R එම ලක්ෂ්‍යය හරහාම ක්‍රියාත්මක වන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that its perpendicular distance is zero, eliminating R from the moment equation without requiring its measurement.",
              "si": "ලම්බක දුර ශුන්‍ය බැවින් R බලය ඝූර්ණ සමීකරණයෙන් ඉවත් වන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The upward contact reaction force R exerted by the knife edge passes directly through the pivot point, giving it a perpendicular distance of zero. Therefore, its moment is zero, allowing M to be solved directly without having to measure or calculate the unknown reaction force R.",
          "si": "දැලි පිහි දාරය මඟින් ඇතිකරන ප්‍රතික්‍රියා බලය ආධාරක ලක්ෂ්‍යය හරහා ක්‍රියාකරන බැවින් එහි ලම්බක දුර ශුන්‍ය වේ. එම නිසා එහි ඝූර්ණය ශුන්‍ය වී, එම නොදන්නා ප්‍රතික්‍රියා බලය මැනීමකින් තොරව M ගණනය කළ හැක."
        }
      },
      {
        "id": "mech-sq05-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "State two practical precautions to ensure high experimental accuracy in this balance experiment.",
          "si": "මෙම තුලන පරීක්ෂණයේදී ඉහළ නිරවද්‍යතාවයක් ලබා ගැනීම සඳහා ගත යුතු ප්‍රායෝගික පූර්වෝපායයන් දෙකක් සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Precaution 1: Keep the knife edge perpendicular to the length of the rule and ensure the rule is supported on its narrow edge.",
              "si": "පූර්වෝපාය 1: දැලි පිහි දාරය මීටර් රූලේ දිගට ලම්බකව තැබීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Precaution 2: Avoid air drafts by closing windows/fans and ensure the suspended mass loop is thin and hangs freely.",
              "si": "පූර්වෝපාය 2: සුළං ධාරා වලින් බාධා නොවන සේ විදුලි පංකා නිවා දැමීම සහ නූල් පුඩුව සිහින් වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. Ensure the knife edge is positioned strictly perpendicular to the longitudinal axis of the ruler and supported horizontally on its narrow edge to prevent lateral tilting.\n2. Shield the apparatus from air currents (turn off overhead fans) and use a thin thread loop so that the point of suspension corresponds exactly to the graduation mark.",
          "si": "1. දැලි පිහි දාරය මීටර් රූලට ලම්බකව තබා ගැනීම.\n2. සුළං ධාරා වළක්වා ගැනීමට විදුලි පංකා නිවා දැමීම සහ තුනී නූල් පුඩුවක් යොදා ගැනීම."
        }
      }
    ],
    "hint": {
      "en": "Clockwise moment about knife edge = Anticlockwise moment about knife edge: 50.0 × (35.0 - 10.0) = M × (50.0 - 35.0).",
      "si": "දැලි පිහි දාරය වටා වාමාවර්ත ඝූර්ණය = දක්ෂිණාවර්ත ඝූර්ණය: 50.0 × (35.0 - 10.0) = M × (50.0 - 35.0)."
    },
    "solution": {
      "en": "Clockwise moment of ruler weight = Anticlockwise moment of known mass: M × (50.0 - 35.0) = 50.0 × (35.0 - 10.0) => 15.0 M = 1250 => M = 83.3 g.",
      "si": "මීටර් රූලේ බරෙහි ඝූර්ණය = ස්කන්ධයේ ඝූර්ණය: M × 15.0 = 50.0 × 25.0 => M = 83.3 g."
    }
  },
  {
    "id": "mech-sq06",
    "competencyRef": "Competency 2.5",
    "category": "work-energy-power",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A small steel sphere of mass m = 0.050 kg is released from rest at height h above the lowest point on a smooth track that incorporates a vertical circular loop of radius r = 0.20 m. Neglect frictional dissipation and take g = 9.80 m s⁻².",
      "si": "සුමට පථයක් ඔස්සේ r = 0.20 m අරයක් සහිත සිරස් වෘත්තාකාර ලූපයක් ඇත. m = 0.050 kg ස්කන්ධයක් ඇති කුඩා වානේ ගෝලයක් පහළම ලක්ෂ්‍යයේ සිට h උසක සිට නිශ්චලතාවයෙන් මුදාහරිනු ලැබේ. ඝර්ෂණ හානි නොසලකා g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "mech-sq06-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Derive an expression for the minimum speed v_top required at the highest point of the loop for the sphere to maintain contact with the track.",
          "si": "ගෝලය පථය සමඟ ස්පර්ශය පවත්වා ගනිමින් ලූපයේ ඉහළම ලක්ෂ්‍යය පසුකිරීමට අවශ්‍ය අවම v_top ප්‍රවේගය සඳහා ප්‍රකාශනයක් ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies radial forces at top: normal force N and weight mg both acting downwards: N + mg = m v²/r.",
              "si": "ඉහළම ලක්ෂ්‍යයේදී කේන්ද්‍රාභිසාරී බල සමීකරණය ලිවීම: N + mg = m v²/r."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States boundary condition for losing contact: N = 0 at critical speed.",
              "si": "ස්පර්ශය ගිලිහීමේ අවම සීමාව N = 0 බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Concludes v_top = √(gr) and calculates √(9.80 × 0.20) = 1.40 m s⁻¹.",
              "si": "v_top = √(gr) ලබා ගෙන 1.40 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At the apex of the loop, gravity (mg) and the downward normal track reaction (N) provide the centripetal acceleration:\nN + mg = m v_top² / r.\nTo complete the loop without falling off, the sphere must maintain contact, meaning N ≥ 0.\nThe critical minimum speed occurs when N = 0:\nmg = m v_top² / r => v_top = √(gr) = √(9.80 × 0.20) = √1.96 = 1.40 m s⁻¹.",
          "si": "ලූපයේ ඉහළම ලක්ෂ්‍යයේදී: N + mg = m v_top² / r.\nස්පර්ශය නොබිඳී පැවතීමට N ≥ 0 විය යුතුය. අවම වේගයේදී N = 0 වේ:\nmg = m v_top² / r => v_top = √(gr) = √(9.80 × 0.20) = 1.40 m s⁻¹."
        }
      },
      {
        "id": "mech-sq06-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Applying the principle of conservation of mechanical energy, determine the minimum release height h_min above the lowest point.",
          "si": "යාන්ත්‍රික ශක්ති සංස්ථිති මූලධර්මය යොදමින්, පහළම ලක්ෂ්‍යයේ සිට තිබිය යුතු අවම මුදාහැරීමේ උස h_min නිර්ණය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Writes mechanical energy conservation: m g h = m g (2r) + (1/2) m v_top².",
              "si": "ශක්ති සංස්ථිති සමීකරණය ලිවීම: m g h = m g (2r) + (1/2) m v_top²."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes v_top² = gr: g h = 2 g r + (1/2) g r = (5/2) g r => h_min = 2.5 r.",
              "si": "v_top² = gr ආදේශ කර h_min = 2.5 r බව පෙන්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates h_min = 2.5 × 0.20 = 0.50 m.",
              "si": "h_min = 0.50 m ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Choosing the lowest point of the track as gravitational potential energy reference (PE = 0):\nInitial energy at release: E_initial = m g h (KE = 0).\nEnergy at the top of the loop (height = 2r): E_top = m g (2r) + (1/2) m v_top².\nBy conservation of mechanical energy:\nm g h_min = 2 m g r + (1/2) m (gr) = (5/2) m g r.\nTherefore: h_min = 2.5 r = 2.5 × 0.20 m = 0.50 m.",
          "si": "පහළම ලක්ෂ්‍යය විභව ශක්ති ශුන්‍ය මට්ටම ලෙස ගත් විට:\nආරම්භක ශක්තිය = m g h.\nඉහළම ලක්ෂ්‍යයේ ශක්තිය = m g (2r) + (1/2) m v_top².\nශක්ති සංස්ථිතියෙන්: m g h = 2 m g r + (1/2) m (gr) = 2.5 m g r.\nඑබැවින් h_min = 2.5 r = 2.5 × 0.20 m = 0.50 m."
        }
      },
      {
        "id": "mech-sq06-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the speed v_bot of the sphere at the bottom of the loop when released from height h_min = 0.50 m.",
          "si": "h_min = 0.50 m උසේ සිට මුදාහළ විට ලූපයේ පහළම ලක්ෂ්‍යයේදී ගෝලයේ v_bot ප්‍රවේගය ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Uses conservation between release and bottom: m g h = (1/2) m v_bot² => v_bot = √(2gh).",
              "si": "v_bot = √(2gh) සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes v_bot = √(2 × 9.80 × 0.50) = √9.80 = 3.13 m s⁻¹.",
              "si": "v_bot = 3.13 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "By conservation of energy from release to the bottom:\nm g h = (1/2) m v_bot²\nv_bot = √(2 g h) = √(2 × 9.80 × 0.50) = √9.80 = 3.13 m s⁻¹.",
          "si": "ශක්ති සංස්ථිතියෙන්: m g h = (1/2) m v_bot²\nv_bot = √(2 × 9.80 × 0.50) = 3.13 m s⁻¹."
        }
      },
      {
        "id": "mech-sq06-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Calculate the normal reaction force N_bot exerted by the track on the sphere at the bottom of the loop.",
          "si": "ලූපයේ පහළම ලක්ෂ්‍යයේදී පථය මඟින් ගෝලය මත ඇතිකරන සාමාන්‍ය ප්‍රතික්‍රියා බලය N_bot ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies radial equation at bottom: N_bot - mg = m v_bot² / r.",
              "si": "පහළම ලක්ෂ්‍යයේදී සමීකරණය: N_bot - mg = m v_bot² / r."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes values: N_bot = mg + m(5gr)/r = 6mg = 6 × 0.050 × 9.80 = 2.94 N.",
              "si": "N_bot = 6 mg = 6 × 0.050 × 9.80 = 2.94 N ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At the lowest point, the upward normal force opposes gravity to provide the centripetal force:\nN_bot - mg = m v_bot² / r\nN_bot = mg + m(2gh) / r = mg + m(5gr)/r = 6 mg.\nN_bot = 6 × (0.050 kg) × (9.80 m s⁻²) = 2.94 N.",
          "si": "පහළම ලක්ෂ්‍යයේදී: N_bot - mg = m v_bot² / r\nN_bot = mg + 5 mg = 6 mg = 6 × 0.050 × 9.80 = 2.94 N."
        }
      }
    ],
    "hint": {
      "en": "At the top N = 0 requires v_top = √(gr). Using energy conservation gives h_min = 2.5 r and normal force at bottom N_bot = 6 mg.",
      "si": "ඉහළදී N = 0 විට v_top = √(gr). ශක්ති සංස්ථිතියෙන් h_min = 2.5 r වන අතර පහළදී ප්‍රතික්‍රියාව N_bot = 6 mg වේ."
    },
    "solution": {
      "en": "Critical top speed v_top = 1.40 m/s. Minimum release height h_min = 2.5 r = 0.50 m. Bottom speed v_bot = 3.13 m/s. Bottom normal force N_bot = 6 mg = 2.94 N.",
      "si": "ඉහළ අවම වේගය v_top = 1.40 m/s. අවම උස h_min = 0.50 m. පහළ වේගය v_bot = 3.13 m/s. පහළ ප්‍රතික්‍රියාව N_bot = 2.94 N."
    }
  },
  {
    "id": "mech-sq07",
    "competencyRef": "Competency 2.6",
    "category": "circular-motion",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A conical pendulum consists of a small bob of mass m = 0.150 kg suspended from a fixed ceiling hook by a light inextensible string of length L = 0.800 m. The bob describes a horizontal circle at steady speed, with the string maintaining a constant angle θ = 30.0° to the vertical. Take g = 9.80 m s⁻².",
      "si": "සිරස් කේතු පැද්දුමක m = 0.150 kg ස්කන්ධයක් ඇති කුඩා ගෝලයක් L = 0.800 m දිගැති සැහැල්ලු අගනන්‍ය නූලකින් සිරසට θ = 30.0° කෝණයක් සාදමින් තිරස් තලයක ඒකාකාර වේගයකින් භ්‍රමණය වේ. g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "mech-sq07-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Identify the forces acting on the pendulum bob and state which force component provides the centripetal acceleration.",
          "si": "පැද්දුම් ගෝලය මත ක්‍රියාකරන බල හඳුනාගෙන, කේන්ද්‍රාභිසාරී ත්වරණය සපයන බල සංරචකය කුමක්දැයි දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies two forces: downward gravitational weight mg and tension T along the string.",
              "si": "බල දෙක හඳුනා ගැනීම: පහළට ක්‍රියාකරන mg බර සහ නූල දිගේ ක්‍රියාකරන T ආතතිය."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States that the horizontal component of tension T sinθ provides the centripetal acceleration towards the centre of the horizontal circle.",
              "si": "ආතතියේ තිරස් සංරචකය T sinθ මඟින් කේන්ද්‍රාභිසාරී ත්වරණය සපයන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The two forces acting on the bob are:\n1. Weight mg acting vertically downward.\n2. Tension T directed along the string towards the suspension point.\nThe horizontal component of string tension, T sinθ, is directed towards the centre of the horizontal circular path and provides the required centripetal force.",
          "si": "ගෝලය මත ක්‍රියාකරන බල දෙක:\n1. සිරස්ව පහළට ක්‍රියාකරන ගුරුත්වජ බර mg.\n2. ආධාරකය දෙසට නූල දිගේ ක්‍රියාකරන ආතතිය T.\nආතතියේ තිරස් සංරචකය T sinθ මඟින් වෘත්තයේ කේන්ද්‍රය දෙසට කේන්ද්‍රාභිසාරී බලය සපයයි."
        }
      },
      {
        "id": "mech-sq07-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Show that the tension in the string is T = mg / cosθ, and calculate its numerical value in newtons.",
          "si": "නූලේ ආතතිය T = mg / cosθ බව පෙන්වා, එහි අගය නිව්ටන් වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Sets up vertical equilibrium equation: T cosθ = mg.",
              "si": "සිරස් සමතුලිතතා සමීකරණය ලිවීම: T cosθ = mg."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Rearranges to T = mg / cosθ.",
              "si": "T = mg / cosθ බව පෙන්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates T = (0.150 × 9.80) / cos(30°) = 1.47 / 0.8660 = 1.70 N.",
              "si": "T = 1.70 N ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Since there is no vertical acceleration, vertical forces balance:\nT cosθ = mg => T = mg / cosθ.\nT = (0.150 kg × 9.80 m s⁻²) / cos(30.0°) = 1.470 / 0.8660 = 1.70 N.",
          "si": "සිරස් ත්වරණයක් නොමැති බැවින්:\nT cosθ = mg => T = mg / cosθ.\nT = (0.150 × 9.80) / cos(30.0°) = 1.470 / 0.8660 = 1.70 N."
        }
      },
      {
        "id": "mech-sq07-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Derive the formula for the period of revolution T_rev in terms of L, θ, and g, and calculate its value.",
          "si": "L, θ සහ g ඇසුරෙන් එක් සම්පූර්ණ වටයක් සඳහා ගතවන කාලාවර්තය T_rev සඳහා සූත්‍රය ගොඩනඟා, එහි අගය ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States horizontal circular equation: T sinθ = m ω² r where r = L sinθ.",
              "si": "තිරස් සමීකරණය: T sinθ = m ω² r සහ r = L sinθ හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes T: (mg / cosθ) sinθ = m ω² (L sinθ) => ω² = g / (L cosθ).",
              "si": "ආදේශයෙන් ω² = g / (L cosθ) ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Derives T_rev = 2π / ω = 2π √( (L cosθ) / g ).",
              "si": "T_rev = 2π √( (L cosθ) / g ) ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes T_rev = 2π √( (0.800 × cos 30°) / 9.80 ) = 2π √(0.6928 / 9.80) = 2π × 0.2659 = 1.67 s.",
              "si": "T_rev = 1.67 s ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Radius of circular path: r = L sinθ.\nHorizontal force: T sinθ = m ω² r = m ω² (L sinθ).\nSubstituting T = mg / cosθ:\n(mg / cosθ) sinθ = m ω² L sinθ => ω² = g / (L cosθ).\nAngular speed ω = √(g / (L cosθ)).\nPeriod of revolution T_rev = 2π / ω = 2π √( (L cosθ) / g ).\nCalculation:\nL cosθ = 0.800 × 0.8660 = 0.6928 m.\nT_rev = 2π √(0.6928 / 9.80) = 2π × 0.2659 = 1.67 s.",
          "si": "අරය r = L sinθ.\nතිරස් බලය: T sinθ = m ω² (L sinθ)\nT = mg / cosθ ආදේශයෙන්: ω² = g / (L cosθ)\nකාලාවර්තය T_rev = 2π / ω = 2π √( (L cosθ) / g )\nT_rev = 2π √( (0.800 × 0.8660) / 9.80 ) = 1.67 s."
        }
      },
      {
        "id": "mech-sq07-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "State how the period of revolution changes if the bob is replaced with one of mass 2m while maintaining the same string length L and angle θ.",
          "si": "නූලේ L දිග සහ θ කෝණය නොවෙනස්ව තබා ගෝලයේ ස්කන්ධය 2m කළහොත් කාලාවර්තයට කුමක් සිදුවේදැයි දක්වන්න."
        },
        "allocatedMarks": 1,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that the period of revolution remains unchanged because T_rev is independent of mass m.",
              "si": "T_rev සූත්‍රය ස්කන්ධයෙන් ස්වායක්ත වන බැවින් කාලාවර්තය වෙනස් නොවන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The period of revolution remains completely unchanged. As seen from the formula T_rev = 2π√((L cosθ)/g), the period is entirely independent of the bob mass m.",
          "si": "කාලාවර්තය වෙනස් නොවේ. T_rev සූත්‍රය ස්කන්ධය m මත රඳා නොපවතින බැවිනි."
        }
      }
    ],
    "hint": {
      "en": "Resolve tension into vertical component T cosθ = mg and horizontal centripetal component T sinθ = m ω² L sinθ.",
      "si": "ආතතිය සිරස් සංරචකය T cosθ = mg සහ තිරස් කේන්ද්‍රාභිසාරී සංරචකය T sinθ = m ω² L sinθ ලෙස විභේදනය කරන්න."
    },
    "solution": {
      "en": "Tension T = 1.70 N. Period T_rev = 2π√((L cosθ)/g) = 1.67 s. Period is independent of the bob mass.",
      "si": "ආතතිය T = 1.70 N. කාලාවර්තය T_rev = 1.67 s. කාලාවර්තය ස්කන්ධය මත රඳා නොපවතී."
    }
  },
  {
    "id": "mech-sq08",
    "competencyRef": "Competency 2.6",
    "category": "rotational-dynamics",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A solid uniform cylinder of mass M = 2.00 kg and radius R = 0.100 m (moment of inertia I = 0.5 M R²) rolls from rest down a rough plane inclined at α = 30.0° to the horizontal without slipping. Take g = 9.80 m s⁻².",
      "si": "M = 2.00 kg ස්කන්ධයක් සහ R = 0.100 m අරයක් ඇති ඒකාකාර ඝන සිලින්ඩරයක් (අවස්ථිති ඝූර්ණය I = 0.5 M R²), තිරසට α = 30.0° ක් ආනත රළු බෑවුම් තලයක් දිගේ ලිස්සා යාමකින් තොරව නිශ්චලතාවයේ සිට පෙරළෙයි. g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "mech-sq08-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State the kinematic condition relating linear acceleration a of the centre of mass and angular acceleration α_ang for pure rolling without slip.",
          "si": "ලිස්සා යාමකින් තොරව පිරිසිදු පෙරළීම සඳහා ස්කන්ධ කේන්ද්‍රයේ රේඛීය ත්වරණය a සහ කෝණික ත්වරණය α_ang අතර චාලක සම්බන්ධතාව දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States condition a = R · α_ang (or v = R · ω).",
              "si": "a = R · α_ang සූත්‍රය දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that the instantaneous point of contact between the cylinder and the incline has zero relative velocity.",
              "si": "සිලින්ඩරය සහ තලය ස්පර්ශ වන ලක්ෂ්‍යයේ ක්ෂණික සාපේක්ෂ ප්‍රවේගය ශුන්‍ය වන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The condition for pure rolling without slipping is a = R · α_ang (and v = R · ω), which ensures that the instantaneous point of contact between the perimeter of the cylinder and the inclined plane is at rest relative to the incline.",
          "si": "ලිස්සා යාමකින් තොරව පෙරළීම සඳහා a = R · α_ang (සහ v = R · ω) විය යුතුය. එමඟින් තලය සමඟ ස්පර්ශ වන ක්ෂණික ලක්ෂ්‍යයේ සාපේක්ෂ ප්‍රවේගය ශුන්‍ය වේ."
        }
      },
      {
        "id": "mech-sq08-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Derive an expression for the linear acceleration a down the incline, and calculate its numerical value.",
          "si": "බෑවුම ඔස්සේ රේඛීය ත්වරණය a සඳහා ප්‍රකාශනයක් ගොඩනඟා, එහි සංඛ්‍යාත්මක අගය ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Writes translational equation down the slope: M g sinα - f = M a.",
              "si": "බෑවුම ඔස්සේ රේඛීය චලිත සමීකරණය ලිවීම: M g sinα - f = M a."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Writes rotational equation about center of mass: f · R = I α_ang = (0.5 M R²)(a / R) => f = 0.5 M a.",
              "si": "භ්‍රමණ සමීකරණය ලිවීම: f · R = I α_ang => f = 0.5 M a."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Combines equations: M g sinα = M a + 0.5 M a = 1.5 M a => a = (2/3) g sinα.",
              "si": "සමීකරණ සම්බන්ධ කර a = (2/3) g sinα ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates a = (2/3) × 9.80 × sin(30°) = (2/3) × 9.80 × 0.5 = 3.27 m s⁻².",
              "si": "a = 3.27 m s⁻² ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Resolving forces along the incline:\n1. M g sinα - f = M a (translation)\nTorque about centre of mass:\n2. τ = f · R = I · α_ang = (1/2 M R²) (a / R) => f = 1/2 M a.\nSubstituting (2) into (1):\nM g sinα - 1/2 M a = M a => M g sinα = 3/2 M a.\nLinear acceleration a = (2/3) g sinα.\na = (2/3) × 9.80 × sin(30.0°) = (2/3) × 9.80 × 0.500 = 3.27 m s⁻².",
          "si": "බෑවුම ඔස්සේ: M g sinα - f = M a\nඝූර්ණය: f · R = I α_ang = (1/2 M R²) (a / R) => f = 1/2 M a\nආදේශයෙන්: M g sinα = (3/2) M a => a = (2/3) g sinα\na = (2/3) × 9.80 × sin(30.0°) = 3.27 m s⁻²."
        }
      },
      {
        "id": "mech-sq08-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the magnitude of the frictional force f acting on the rolling cylinder.",
          "si": "පෙරළෙන සිලින්ඩරය මත ක්‍රියාකරන ඝර්ෂණ බලයේ f විශාලත්වය ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Uses f = 0.5 M a (or f = (1/3) M g sinα).",
              "si": "f = 0.5 M a (හෝ f = (1/3) M g sinα) සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes f = 0.5 × 2.00 × 3.267 = 3.27 N.",
              "si": "f = 3.27 N ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Frictional force f = 1/2 M a = 0.5 × 2.00 kg × 3.267 m s⁻² = 3.27 N (or f = (1/3) M g sinα = (1/3) × 2.00 × 9.80 × 0.5 = 3.27 N).",
          "si": "ඝර්ෂණ බලය f = 1/2 M a = 0.5 × 2.00 × 3.267 = 3.27 N."
        }
      },
      {
        "id": "mech-sq08-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "If the cylinder rolls down a distance s = 3.00 m along the slope from rest, calculate its final linear velocity v at the bottom using energy principles.",
          "si": "සිලින්ඩරය නිශ්චලතාවයේ සිට බෑවුම ඔස්සේ s = 3.00 m දුරක් පෙරළී යයි නම්, ශක්ති මූලධර්ම භාවිතයෙන් පහළදී එහි අවසාන රේඛීය ප්‍රවේගය v ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Sets up total mechanical energy conservation: M g (s sinα) = (1/2) M v² + (1/2) I ω² = (3/4) M v².",
              "si": "මුළු ශක්ති සංස්ථිතිය ලිවීම: M g (s sinα) = (3/4) M v²."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves v = √( (4/3) g s sinα ) = √( (4/3) × 9.80 × 3.00 × 0.5 ) = √19.60 = 4.43 m s⁻¹.",
              "si": "v = 4.43 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Vertical drop h = s sinα = 3.00 × sin(30.0°) = 1.50 m.\nTotal kinetic energy in pure rolling:\nKE_total = (1/2) M v² + (1/2) I ω² = (1/2) M v² + (1/2)(1/2 M R²)(v/R)² = (3/4) M v².\nBy conservation of energy: M g h = (3/4) M v² => v = √( (4/3) g h ).\nv = √( (4/3) × 9.80 × 1.50 ) = √19.60 = 4.43 m s⁻¹.",
          "si": "සිරස් බැසීම h = 3.00 × sin(30°) = 1.50 m.\nපෙරළීමේ මුළු චාලක ශක්තිය = (1/2) M v² + (1/2) I ω² = (3/4) M v².\nශක්ති සංස්ථිතියෙන්: M g h = (3/4) M v² => v = √( (4/3) g h )\nv = √( (4/3) × 9.80 × 1.50 ) = 4.43 m s⁻¹."
        }
      }
    ],
    "hint": {
      "en": "Frictional torque τ = f R produces angular acceleration. Linear acceleration a = (2/3) g sinα and total rolling kinetic energy = (3/4) M v².",
      "si": "ඝර්ෂණ ඝූර්ණය මඟින් කෝණික ත්වරණය ලබාදේ. ත්වරණය a = (2/3) g sinα වන අතර පෙරළීමේ මුළු චාලක ශක්තිය = (3/4) M v² වේ."
    },
    "solution": {
      "en": "Linear acceleration a = 3.27 m/s². Friction f = 3.27 N. Final velocity after 3.0 m is v = 4.43 m/s.",
      "si": "රේඛීය ත්වරණය a = 3.27 m/s². ඝර්ෂණ බලය f = 3.27 N. මීටර් 3.0 කට පසු අවසාන ප්‍රවේගය v = 4.43 m/s."
    }
  },
  {
    "id": "mech-sq09",
    "competencyRef": "Competency 2.7",
    "category": "hydrostatics-manometry",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A student uses Hare’s apparatus to determine the density ρ_L of an unknown liquid by comparing its column height with that of distilled water (ρ_w = 1000 kg m⁻³). The apparatus consists of an inverted U-tube connected to an air pump via a pinch clip.",
      "si": "හේයාර්ගේ උපකරණය භාවිතයෙන් ආස්‍රැත ජලයේ (ρ_w = 1000 kg m⁻³) කඳක උස සමඟ සැසඳීමෙන් නොදන්නා ද්‍රවයක ρ_L ඝනත්වය සෙවීමට ශිෂ්‍යයෙක් පරීක්ෂණයක් සිදුකරයි. උපකරණය නළ ක්ලිපයක් සහිත ප්‍රතිලෝම U නළයකින් සමන්විත වේ."
    },
    "parts": [
      {
        "id": "mech-sq09-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Explain the working principle of Hare’s apparatus and derive the relationship between the column heights (h_w, h_L) and densities (ρ_w, ρ_L).",
          "si": "හේයාර්ගේ උපකරණයේ ක්‍රියාකාරී මූලධර්මය පැහැදිලි කර, ද්‍රව කඳන්වල උස (h_w, h_L) සහ ඝනත්ව (ρ_w, ρ_L) අතර සම්බන්ධය ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Explains that air is partially evacuated so air pressure P above both liquid columns inside the tube is equal and less than atmospheric pressure H.",
              "si": "වාතය ඉවත් කළ විට නළය තුළ ද්‍රව කඳන් දෙකට ඉහළින් පවතින පීඩනය P එක සමාන වන අතර එය වායුගෝල පීඩනයට H වඩා අඩු බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States pressure balance at liquid surface in each beaker: H = P + h_w ρ_w g and H = P + h_L ρ_L g.",
              "si": "බඳුන්වල මතුපිට පීඩන සමීකරණ ලිවීම: H = P + h_w ρ_w g සහ H = P + h_L ρ_L g."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Equates pressure differences: h_w ρ_w g = h_L ρ_L g => h_w / h_L = ρ_L / ρ_w.",
              "si": "සමීකරණ තුලනයෙන් h_w ρ_w = h_L ρ_L => h_w / h_L = ρ_L / ρ_w ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "When air is partially drawn out through the top clip, a reduced pressure P is established above both liquid columns inside the U-tube.\nAt the free surfaces of the liquids in the beakers, atmospheric pressure is H.\nFor the water column: H = P + h_w ρ_w g => H - P = h_w ρ_w g.\nFor the unknown liquid: H = P + h_L ρ_L g => H - P = h_L ρ_L g.\nEquating pressure differences:\nh_w ρ_w g = h_L ρ_L g => h_w ρ_w = h_L ρ_L or h_w = (ρ_L / ρ_w) h_L.",
          "si": "ක්ලිපය හරහා වාතය ඉවත් කළ විට නළය තුළ වායු පීඩනය P වායුගෝල පීඩනය H ට වඩා අඩු වේ.\nජල කඳ සඳහා: H - P = h_w ρ_w g\nනොදන්නා ද්‍රවය සඳහා: H - P = h_L ρ_L g\nසමීකරණ සමාන කිරීමෙන්: h_w ρ_w g = h_L ρ_L g => h_w ρ_w = h_L ρ_L."
        }
      },
      {
        "id": "mech-sq09-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "State why knowledge of atmospheric pressure H is not required when calculating the density of the liquid using this method.",
          "si": "මෙම ක්‍රමයෙන් ද්‍රවයේ ඝනත්වය ගණනය කිරීමේදී වායුගෝලීය පීඩනය H දැනගැනීම අවශ්‍ය නොවන්නේ මන්දැයි දක්වන්න."
        },
        "allocatedMarks": 1,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States that atmospheric pressure H acts equally on the open liquid surfaces of both beakers and cancels out when equating excess pressures.",
              "si": "වායුගෝල පීඩනය බඳුන් දෙකේම ද්‍රව පෘෂ්ඨ මත සමානව ක්‍රියාකරන බැවින් පීඩන වෙනස ගැනීමේදී එය කැපී යන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Atmospheric pressure H acts equally on the open liquid surfaces of both beakers, so the excess pressure supporting both liquid columns (H - P) is identical and cancels out in the ratio equation.",
          "si": "වායුගෝල පීඩනය බඳුන් දෙක මතම සමානව ක්‍රියාකරන බැවින් පීඩන අන්තරය ගැනීමේදී H පදය ඉවත්වේ."
        }
      },
      {
        "id": "mech-sq09-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "In an experiment, the height of the water column is h_w = 24.5 cm while the height of the unknown liquid column is h_L = 30.6 cm. Calculate the density of the unknown liquid ρ_L in kg m⁻³.",
          "si": "පරීක්ෂණයකදී ජල කඳෙහි උස h_w = 24.5 cm වන විට නොදන්නා ද්‍රව කඳෙහි උස h_L = 30.6 cm වේ. නොදන්නා ද්‍රවයේ ඝනත්වය ρ_L (kg m⁻³ වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies formula ρ_L = ρ_w (h_w / h_L).",
              "si": "ρ_L = ρ_w (h_w / h_L) සූත්‍රය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes values: ρ_L = 1000 × (24.5 / 30.6).",
              "si": "අගයන් ආදේශ කිරීම: ρ_L = 1000 × (24.5 / 30.6)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes ρ_L = 801 kg m⁻³ (accept 800 - 802 kg m⁻³).",
              "si": "ρ_L = 801 kg m⁻³ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Using h_w ρ_w = h_L ρ_L:\nρ_L = ρ_w × (h_w / h_L) = 1000 kg m⁻³ × (24.5 cm / 30.6 cm) = 800.7 kg m⁻³ ≈ 801 kg m⁻³.",
          "si": "h_w ρ_w = h_L ρ_L මඟින්:\nρ_L = 1000 × (24.5 / 30.6) = 801 kg m⁻³."
        }
      },
      {
        "id": "mech-sq09-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "State two practical precautions taken to minimize experimental error when taking height measurements in Hare’s apparatus.",
          "si": "හේයාර්ගේ උපකරණයේ උස මැනීමේදී දෝෂ අවම කර ගැනීමට ගන්නා ප්‍රායෝගික පූර්වෝපායයන් දෙකක් සඳහන් කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Precaution 1: Measure heights from the free liquid surface in the beaker to the bottom of the meniscus in the tube.",
              "si": "පූර්වෝපාය 1: බඳුනේ ද්‍රව මට්ටමේ සිට නළයේ චන්ද්‍රිකාවේ පහළම ලක්ෂ්‍යය දක්වා උස සිරස්ව මැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Precaution 2: Use pointer rods touching the liquid surface to read zero level without parallax.",
              "si": "පූර්වෝපාය 2: බඳුනේ මතුපිට මට්ටම නිවැරදිව හඳුනා ගැනීමට තුඩු සහිත දර්ශක භාවිතය."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Precaution 3: Ensure tubes are vertical and sufficiently wide to minimize capillary rise distortion.",
              "si": "පූර්වෝපාය 3: කේශික උද්ගමන බලපෑම අවම කිරීමට නළ සිරස්ව සහ ප්‍රමාණවත් තරම් පළල්ව තබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. Use a vertical pointer whose tip just touches the free surface of the liquid in each beaker as the zero-level reference to avoid parallax.\n2. Read the meniscus position in each limb with the eye at horizontal eye-level (bottom of concave meniscus for water).\n3. Ensure the tubes are of uniform bore and clean so that capillary effects are symmetrical or negligible.",
          "si": "1. බඳුනේ ද්‍රව මතුපිට ස්පර්ශ වන සේ දර්ශක තුඩක් තබා ශුන්‍ය මට්ටම ලකුණු කර ගැනීම.\n2. දෘෂ්ටි විලාස දෝෂය වැළැක්වීමට ඇස මට්ටමේ තබා චන්ද්‍රිකාවේ පතුල කියවීම.\n3. නළ සිරස්ව තැබීම සහ කේශික බලපෑම් අවම කිරීමට පිරිසිදු නළ භාවිතය."
        }
      }
    ],
    "hint": {
      "en": "The pressure difference (H - P) is identical for both limbs: h_w ρ_w g = h_L ρ_L g.",
      "si": "දෙපසම පීඩන අන්තරය (H - P) සමාන වේ: h_w ρ_w g = h_L ρ_L g."
    },
    "solution": {
      "en": "Hare’s equation: h_w ρ_w = h_L ρ_L. Given h_w = 24.5 cm, h_L = 30.6 cm, density of liquid ρ_L = 1000 × (24.5 / 30.6) = 801 kg m⁻³.",
      "si": "හේයාර් සමීකරණය: h_w ρ_w = h_L ρ_L. ද්‍රවයේ ඝනත්වය ρ_L = 1000 × (24.5 / 30.6) = 801 kg m⁻³."
    }
  },
  {
    "id": "mech-sq10",
    "competencyRef": "Competency 2.8",
    "category": "fluid-dynamics",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A horizontal Venturi meter is used to measure the flow rate of water (density ρ = 1000 kg m⁻³) flowing through a horizontal pipeline. The cross-sectional area of the wide main pipe is A₁ = 20.0 cm² and the area of the constricted throat is A₂ = 5.00 cm². Two vertical manometer tubes are tapped into the wide section and throat respectively. Take g = 9.80 m s⁻².",
      "si": "තිරස් නළ මාර්ගයක් ඔස්සේ ගලා යන ජලයේ (ඝනත්වය ρ = 1000 kg m⁻³) ප්‍රවාහ අනුපාතය මැනීම සඳහා තිරස් වෙන්චුරිමානයක් භාවිතා කරයි. ප්‍රධාන නළයේ හරස්කඩ වර්ගඵලය A₁ = 20.0 cm² වන අතර උගුරේ හරස්කඩ වර්ගඵලය A₂ = 5.00 cm² වේ. ප්‍රධාන නළයට සහ උගුරට සිරස් පීඩනමාන නළ දෙකක් සවිකර ඇත. g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "mech-sq10-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State Bernoulli’s principle for steady streamline flow of an ideal incompressible fluid, and state two assumptions required for the principle to hold.",
          "si": "අයිඩියල් අසම්පීඩ්‍ය තරලයක ස්ථායී ධාරාරේඛී ප්‍රවාහයක් සඳහා බර්නූලි මූලධර්මය ප්‍රකාශ කර, එම මූලධර්මය වලංගු වීමට අවශ්‍ය උපකල්පන දෙකක් සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States Bernoulli's principle: Along any streamline, the sum of static pressure energy, kinetic energy per unit volume, and potential energy per unit volume is constant (P + ½ρv² + ρgh = constant).",
              "si": "බර්නූලි මූලධර්මය: ධාරාරේඛාවක් ඔස්සේ ඒකක පරිමාවක ස්ථිතික පීඩන ශක්තිය, චාලක ශක්තිය සහ විභව ශක්තියෙහි එකතුව නියත වේ (P + ½ρv² + ρgh = නියතයකි)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States two assumptions: fluid is non-viscous (zero internal friction) and incompressible (constant density), or flow is steady/irrotational.",
              "si": "උපකල්පන දෙකක් දැක්වීම: තරලය අදුස්ස්‍රාවී වීම, අසම්පීඩ්‍ය වීම හෝ ප්‍රවාහය ස්ථායී/අභ්‍රමණ වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Bernoulli’s principle states that for the steady, streamline flow of an incompressible, non-viscous fluid, the total mechanical energy per unit volume remains constant along any streamline:\nP + ½ ρ v² + ρ g h = constant.\nKey assumptions:\n1. Non-viscous (frictionless) fluid flow (no dissipation of mechanical energy as heat).\n2. Incompressible fluid (density ρ remains constant regardless of pressure).\n3. Steady streamline (laminar) flow.",
          "si": "බර්නූලි මූලධර්මය: අසම්පීඩ්‍ය, අදුස්ස්‍රාවී තරලයක ස්ථායී ධාරාරේඛී ප්‍රවාහයකදී ඕනෑම ධාරාරේඛාවක් ඔස්සේ ඒකක පරිමාවක මුළු යාන්ත්‍රික ශක්තිය නියතව පවතී:\nP + ½ ρ v² + ρ g h = නියතයකි.\nඋපකල්පන:\n1. අදුස්ස්‍රාවී (ඝර්ෂණ රහිත) තරලයක් වීම.\n2. අසම්පීඩ්‍ය තරලයක් වීම (ඝනත්වය ρ නියත වීම).\n3. ස්ථායී ධාරාරේඛී ප්‍රවාහයක් වීම."
        }
      },
      {
        "id": "mech-sq10-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Using the continuity equation A₁ v₁ = A₂ v₂ and Bernoulli’s equation for a horizontal pipe, derive the expression for flow speed v₁ in the wide section in terms of A₁, A₂, ρ, and the pressure difference ΔP = P₁ - P₂.",
          "si": "අවිච්ඡින්නතා සමීකරණය A₁ v₁ = A₂ v₂ සහ තිරස් නළයක් සඳහා බර්නූලි සමීකරණය භාවිතයෙන්, A₁, A₂, ρ සහ පීඩන අන්තරය ΔP = P₁ - P₂ ඇසුරෙන් ප්‍රධාන නළයේ ප්‍රවාහ වේගය v₁ සඳහා ප්‍රකාශනය ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Expresses continuity relation: v₂ = (A₁ / A₂) · v₁.",
              "si": "අවිච්ඡින්නතා සම්බන්ධය: v₂ = (A₁ / A₂) · v₁ ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies Bernoulli to horizontal flow: P₁ + ½ ρ v₁² = P₂ + ½ ρ v₂² => ΔP = ½ ρ (v₂² - v₁²).",
              "si": "තිරස් ප්‍රවාහයට බර්නූලි සමීකරණය යෙදීම: ΔP = ½ ρ (v₂² - v₁²)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes v₂ and solves: v₁ = √[ (2 ΔP) / (ρ ((A₁/A₂)² - 1)) ].",
              "si": "ආදේශ කර v₁ = √[ (2 ΔP) / (ρ ((A₁/A₂)² - 1)) ] ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "By continuity of incompressible flow:\nA₁ v₁ = A₂ v₂ => v₂ = (A₁ / A₂) v₁.\nAlong a horizontal streamline (h₁ = h₂):\nP₁ + ½ ρ v₁² = P₂ + ½ ρ v₂²\nP₁ - P₂ = ΔP = ½ ρ (v₂² - v₁²).\nSubstitute v₂:\nΔP = ½ ρ [ ((A₁ / A₂)² - 1) v₁² ]\nv₁² = (2 ΔP) / [ ρ ((A₁ / A₂)² - 1) ]\nv₁ = √[ (2 ΔP) / (ρ ((A₁ / A₂)² - 1)) ].",
          "si": "අවිච්ඡින්නතාවයෙන්: v₂ = (A₁ / A₂) v₁.\nතිරස් නළයට බර්නූලි සමීකරණයෙන්:\nP₁ - P₂ = ΔP = ½ ρ (v₂² - v₁²)\nΔP = ½ ρ [ ((A₁ / A₂)² - 1) v₁² ]\nv₁ = √[ (2 ΔP) / (ρ ((A₁ / A₂)² - 1)) ]."
        }
      },
      {
        "id": "mech-sq10-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "The height difference between the water columns in the two vertical manometer tubes is measured as h = 15.0 cm. Calculate the pressure difference ΔP in Pa and the flow velocity v₁ in the main pipe in m s⁻¹.",
          "si": "සිරස් පීඩනමාන නළ දෙකෙහි ජල කඳන් අතර උස වෙනස h = 15.0 cm ලෙස මැනේ. පීඩන අන්තරය ΔP (Pa වලින්) සහ ප්‍රධාන නළයේ ප්‍රවාහ ප්‍රවේගය v₁ (m s⁻¹ වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates ΔP = h · ρ · g = 0.150 m × 1000 kg m⁻³ × 9.80 m s⁻² = 1470 Pa.",
              "si": "ΔP = h · ρ · g = 1470 Pa ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates area ratio: A₁/A₂ = 20.0 / 5.00 = 4.0, so (A₁/A₂)² - 1 = 16 - 1 = 15.",
              "si": "(A₁/A₂)² - 1 = 16 - 1 = 15 ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves v₁ = √[ (2 × 1470) / (1000 × 15) ] = √[ 2940 / 15000 ] = √0.196 = 0.443 m s⁻¹ (accept 0.44 m s⁻¹).",
              "si": "v₁ = √0.196 = 0.443 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. Pressure difference from manometer column heights:\nΔP = h · ρ · g = (0.150 m) × (1000 kg m⁻³) × (9.80 m s⁻²) = 1470 Pa.\n2. Area ratio:\nA₁ / A₂ = 20.0 cm² / 5.00 cm² = 4.00 => (A₁ / A₂)² = 16.0.\n3. Velocity v₁:\nv₁² = (2 × 1470 Pa) / [ 1000 kg m⁻³ × (16.0 - 1) ]\nv₁² = 2940 / 15000 = 0.196 m² s⁻²\nv₁ = √0.196 ≈ 0.443 m s⁻¹.",
          "si": "1. පීඩන අන්තරය: ΔP = h · ρ · g = 0.150 × 1000 × 9.80 = 1470 Pa.\n2. වර්ගඵල අනුපාතය: A₁ / A₂ = 4.0 => (A₁ / A₂)² - 1 = 15.\n3. ප්‍රවේගය: v₁² = 2940 / 15000 = 0.196 => v₁ = √0.196 = 0.443 m s⁻¹."
        }
      },
      {
        "id": "mech-sq10-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Explain why the cross-sectional area of the Venturi tube expands gradually rather than abruptly after the throat.",
          "si": "වෙන්චුරි නළයේ උගුරෙන් පසුව හරස්කඩ වර්ගඵලය ක්ෂණිකව නොව ක්‍රමයෙන් වැඩිවන සේ සකස් කර ඇත්තේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Explains that an abrupt expansion causes flow separation and turbulence (eddy formation).",
              "si": "ක්ෂණිකව විශාල වුවහොත් ප්‍රවාහය බිඳී සුළි සහ කැළඹිලි ඇතිවන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States that turbulence dissipates mechanical energy as heat due to internal viscous friction, violating the conservation of mechanical energy assumed in Bernoulli’s theorem.",
              "si": "කැළඹිලි නිසා යාන්ත්‍රික ශක්තිය තාපය ලෙස හානි වන බැවින් බර්නූලි මූලධර්මයේ නිරවද්‍යතාව නැතිවන බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "A gradual diffuser expansion (taper angle usually between 5° and 7°) prevents flow separation from the pipe walls and minimizes the formation of turbulent eddies and vortices. An abrupt expansion causes significant turbulent dissipation where kinetic energy is irreversibly converted into internal thermal energy by viscous shear, violating Bernoulli’s assumption of zero energy loss and causing substantial measurement error.",
          "si": "ක්‍රමයෙන් ප්‍රසාරණය වන කොටසක් (සාමාන්‍යයෙන් 5°-7° කෝණයකින්) මඟින් නළ බිත්තිවලින් ද්‍රව ධාරා වෙන්වීම වළක්වා කැළඹිලි හා සුළි ඇතිවීම අවම කරයි. ක්ෂණිකව ප්‍රසාරණය වුවහොත් විශාල කැළඹිලි හටගෙන දුස්ස්‍රාවී ඝර්ෂණය නිසා යාන්ත්‍රික ශක්තිය තාපය බවට හානි වේ. එමඟින් ශක්ති හානි නොසලකන බර්නූලි මූලධර්මය බිඳවැටී මිනුම් දෝෂ ඇතිවේ."
        }
      }
    ],
    "hint": {
      "en": "Apply continuity v₂ = (A₁/A₂) v₁ and horizontal Bernoulli equation: ΔP = ½ ρ (v₂² - v₁²). For the manometer: ΔP = h ρ g.",
      "si": "අවිච්ඡින්නතාව v₂ = (A₁/A₂) v₁ සහ තිරස් බර්නූලි සමීකරණය යොදන්න: ΔP = ½ ρ (v₂² - v₁²). පීඩනමානය සඳහා: ΔP = h ρ g."
    },
    "solution": {
      "en": "Pressure drop ΔP = h ρ g = 1470 Pa. By continuity and Bernoulli: v₁ = √[2ΔP / (ρ(16 - 1))] = √0.196 = 0.443 m s⁻¹. Gradual divergence prevents turbulent eddy formation and energy dissipation.",
      "si": "පීඩන බැස්ම ΔP = 1470 Pa. අවිච්ඡින්නතාව සහ බර්නූලි මඟින්: v₁ = √0.196 = 0.443 m s⁻¹. ක්‍රමයෙන් විශාල වීම මඟින් සුළි ඇතිවීම සහ ශක්ති හානිය වළක්වයි."
    }
  },
];
