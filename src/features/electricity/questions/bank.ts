import { ElectricityQuestion } from './types';

export const ELECTRICITY_QUESTION_BANK: ElectricityQuestion[] = [
  // ==========================================
  // COMPETENCY 8.1: Electric Current & Drift Velocity (8 questions)
  // ==========================================
  {
    id: 'cur-8-1-01',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the charge carriers responsible for electrical conduction in metallic conductors, electrolytes, and semiconductors respectively?',
      si: 'ලෝහමය සන්නායක, විද්‍යුත් විච්ඡේද්‍ය සහ අර්ධ සන්නායක තුළ විද්‍යුත් සන්නයනයට දායක වන ආරෝපණ වාහක පිළිවෙළින් මොනවාද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Free electrons; positive and negative ions; electrons and holes', si: 'නිදහස් ඉලෙක්ට්‍රෝන; ධන හා ඍණ අයන; ඉලෙක්ට්‍රෝන හා කුහර' } },
      { id: 'opt-b', text: { en: 'Protons; electrons; photons', si: 'ප්‍රෝටෝන; ඉලෙක්ට්‍රෝන; ෆෝටෝන' } },
      { id: 'opt-c', text: { en: 'Free electrons; neutrons; holes only', si: 'නිදහස් ඉලෙක්ට්‍රෝන; නියුට්‍රෝන; කුහර පමණි' } },
      { id: 'opt-d', text: { en: 'Positive ions; free electrons; alpha particles', si: 'ධන අයන; නිදහස් ඉලෙක්ට්‍රෝන; ඇල්ෆා අංශු' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Metals conduct via free valence electrons, electrolytes via ionic dissociation, and semiconductors via both electrons in conduction band and holes in valence band.',
      si: 'ලෝහවල නිදහස් ඉලෙක්ට්‍රෝනද, විද්‍යුත් විච්ඡේද්‍යවල අයනද, අර්ධ සන්නායකවල ඉලෙක්ට්‍රෝන හා කුහරද සන්නයනය සිදු කරයි.'
    },
    solution: {
      en: 'In metals, conduction is by free electrons; in electrolytes, by mobile cations and anions; in semiconductors, by conduction electrons and valence holes.',
      si: 'ලෝහ තුළ නිදහස් ඉලෙක්ට්‍රෝනද, විද්‍යුත් විච්ඡේද්‍ය තුළ ධන හා ඍණ අයනද, අර්ධ සන්නායක තුළ සන්නයන ඉලෙක්ට්‍රෝන හා සංයුජතා කුහරද ආරෝපණ වාහක වේ.'
    }
  },
  {
    id: 'cur-8-1-02',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A copper wire of cross-sectional area 1.0 × 10⁻⁶ m² carries a steady current of 3.4 A. If the free electron density in copper is n = 8.5 × 10²⁸ m⁻³ and e = 1.6 × 10⁻¹⁹ C, calculate the electron drift velocity v_d in units of 10⁻⁴ m s⁻¹.',
      si: 'හරස්කඩ වර්ගඵලය 1.0 × 10⁻⁶ m² වන තඹ කම්බියක් ඔස්සේ 3.4 A ස්ථාවර ධාරාවක් ගලා යයි. තඹවල නිදහස් ඉලෙක්ට්‍රෝන ඝනත්වය n = 8.5 × 10²⁸ m⁻³ සහ e = 1.6 × 10⁻¹⁹ C නම්, ඉලෙක්ට්‍රෝනවල ප්ලාවිත ප්‍රවේගය v_d අගය 10⁻⁴ m s⁻¹ වලින් ගණනය කරන්න.'
    },
    expected: 2.5,
    tolerance: 0.1,
    unit: { en: '× 10⁻⁴ m s⁻¹', si: '× 10⁻⁴ m s⁻¹' },
    hint: {
      en: 'I = n * A * v_d * e  =>  v_d = I / (n * A * e).',
      si: 'I = n * A * v_d * e  =>  v_d = I / (n * A * e).'
    },
    solution: {
      en: 'v_d = 3.4 / (8.5 × 10²⁸ * 1.0 × 10⁻⁶ * 1.6 × 10⁻¹⁹) = 3.4 / (1.36 × 10⁴) = 2.5 × 10⁻⁴ m s⁻¹.',
      si: 'v_d = 3.4 / (8.5 × 10²⁸ * 1.0 × 10⁻⁶ * 1.6 × 10⁻¹⁹) = 2.5 × 10⁻⁴ m s⁻¹.'
    }
  },
  {
    id: 'cur-8-1-03',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Although the drift velocity of electrons in household copper wiring is typically less than 1 mm s⁻¹, a light bulb lights up virtually instantly when the switch is closed. Why?',
      si: 'ගෘහස්ථ තඹ රැහැන් තුළ ඉලෙක්ට්‍රෝනවල ප්ලාවිත ප්‍රවේගය සාමාන්‍යයෙන් 1 mm s⁻¹ ටත් වඩා අඩු වුවද, ස්විචය දැමූ සැණින් විදුලි බුබුල ක්ෂණිකව දැල්වෙන්නේ මන්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The electric field propagates through the circuit near the speed of light, initiating drift motion of electrons already throughout the wire simultaneously.', si: 'විද්‍යුත් ක්ෂේත්‍රය ආලෝකයේ වේගයට ආසන්නව පරිපථය පුරා පැතිර ගොස් කම්බිය පුරා දැනටමත් ඇති සියලු ඉලෙක්ට්‍රෝන එකවර චලනය කරවන බැවිනි.' } },
      { id: 'opt-b', text: { en: 'Electrons travel at relativistic speed in vacuum.', si: 'ඉලෙක්ට්‍රෝන රික්තයේ සාපේක්ෂතාවාදී වේගයෙන් ගමන් කරන බැවිනි.' } },
      { id: 'opt-c', text: { en: 'The battery pumps all electrons instantly from the positive terminal.', si: 'ධන අග්‍රයෙන් සියලු ඉලෙක්ට්‍රෝන ක්ෂණිකව පොම්ප කරන බැවිනි.' } },
      { id: 'opt-d', text: { en: 'The wire has zero resistance at room temperature.', si: 'කාමර උෂ්ණත්වයේදී කම්බියේ ප්‍රතිරෝධය ශුන්‍ය වන බැවිනි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Distinguish between the slow physical drift speed of individual electrons and the near-light-speed propagation of the electromagnetic field signal.',
      si: 'තනි ඉලෙක්ට්‍රෝනයක මන්දගාමී ප්ලාවිත වේගය සහ ක්ෂේත්‍ර සංඥාව පැතිරෙන ආලෝකයේ වේගය අතර වෙනස සලකන්න.'
    },
    solution: {
      en: 'Closing the switch establishes an electric field along the entire circuit at nearly the speed of light (c), causing free electrons throughout the whole wire to begin drifting concurrently.',
      si: 'ස්විචය දැමූ විට ආලෝකයේ වේගයට ආසන්න වේගයකින් පරිපථය පුරා විද්‍යුත් ක්ෂේත්‍රය ස්ථාපිත වන අතර කම්බිය පුරා ඇති සියලු ඉලෙක්ට්‍රෝන එකවර ප්ලාවිතය අරඹයි.'
    }
  },
  {
    id: 'cur-8-1-04',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A cylindrical wire has diameter 2.0 mm and carries a current of 6.28 A. Calculate the current density J in units of 10⁶ A m⁻². (Take π = 3.1416).',
      si: 'විෂ්කම්භය 2.0 mm වන සිලින්ඩරාකාර කම්බියක් ඔස්සේ 6.28 A ධාරාවක් ගලා යයි. ධාරා ඝනත්වය J අගය 10⁶ A m⁻² වලින් ගණනය කරන්න. (π = 3.1416).'
    },
    expected: 2.0,
    tolerance: 0.1,
    unit: { en: '× 10⁶ A m⁻²', si: '× 10⁶ A m⁻²' },
    hint: {
      en: 'Radius r = 1.0 mm = 1.0 × 10⁻³ m. Area A = π * r². J = I / A.',
      si: 'අරය r = 1.0 × 10⁻³ m. වර්ගඵලය A = π * r². J = I / A.'
    },
    solution: {
      en: 'A = π * (1.0 × 10⁻³)² = 3.1416 × 10⁻⁶ m². J = 6.28 / (3.1416 × 10⁻⁶) = 2.0 × 10⁶ A m⁻².',
      si: 'A = 3.1416 × 10⁻⁶ m². J = 6.28 / (3.1416 × 10⁻⁶) = 2.0 × 10⁶ A m⁻².'
    }
  },
  {
    id: 'cur-8-1-05',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A wire of non-uniform cross-section has steady current flowing through it. As the cross-sectional area decreases along the wire, which quantity increases?',
      si: 'අසමාන හරස්කඩක් සහිත කම්බියක් ඔස්සේ ස්ථාවර ධාරාවක් ගලා යයි. කම්බියේ හරස්කඩ වර්ගඵලය අඩුවන විට වැඩි වන්නේ පහත කුමන රාශියද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Electron drift velocity v_d and electric field E', si: 'ඉලෙක්ට්‍රෝන ප්ලාවිත ප්‍රවේගය v_d සහ විද්‍යුත් ක්ෂේත්‍රය E' } },
      { id: 'opt-b', text: { en: 'Total electric current I', si: 'මුළු විද්‍යුත් ධාරාව I' } },
      { id: 'opt-c', text: { en: 'Free electron density n', si: 'නිදහස් ඉලෙක්ට්‍රෝන ඝනත්වය n' } },
      { id: 'opt-d', text: { en: 'Elementary charge e', si: 'මූලික ආරෝපණය e' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Current I is constant everywhere. Since I = n A v_d e, when area A decreases, v_d must increase.',
      si: 'ධාරාව I නියතය. I = n A v_d e බැවින් A අඩුවන විට v_d වැඩි විය යුතුය.'
    },
    solution: {
      en: 'By continuity, steady current I is identical everywhere. Where area A is smaller, current density J = I/A and drift velocity v_d = J/(ne) increase, requiring a larger local electric field E = J/σ.',
      si: 'ස්ථාවර ධාරාවක් සඳහා I සෑම තැනම සමානය. වර්ගඵලය A අඩුවන විට J = I/A සහ v_d = J/(ne) වැඩි වන අතර ඒ සඳහා විශාල ක්ෂේත්‍රයක් E ද අවශ්‍ය වේ.'
    }
  },
  {
    id: 'cur-8-1-06',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the SI unit of current density J?',
      si: 'ධාරා ඝනත්වයේ (J) SI ඒකකය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Ampere per square metre (A m⁻²)', si: 'වර්ග මීටරයට ඇම්පියර (A m⁻²)' } },
      { id: 'opt-b', text: { en: 'Ampere per metre (A m⁻¹)', si: 'මීටරයට ඇම්පියර (A m⁻¹)' } },
      { id: 'opt-c', text: { en: 'Coulomb per second (C s⁻¹)', si: 'තත්පරයට කූලෝම් (C s⁻¹)' } },
      { id: 'opt-d', text: { en: 'Volt per metre (V m⁻¹)', si: 'මීටරයට වෝල්ට් (V m⁻¹)' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Current density is defined as current per unit normal cross-sectional area: J = I / A.',
      si: 'ධාරා ඝනත්වය යනු ඒකක ලම්බක හරස්කඩ වර්ගඵලයක ධාරාවයි: J = I / A.'
    },
    solution: {
      en: 'J = I / A, so the SI unit is Amperes divided by square metres: A m⁻².',
      si: 'J = I / A බැවින් ඒකකය ඇම්පියර බෙදීම වර්ග මීටර හෙවත් A m⁻² වේ.'
    }
  },
  {
    id: 'cur-8-1-07',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In an electrolyte, 2.0 × 10¹⁸ divalent positive ions (charge +2e) move to the cathode and 4.0 × 10¹⁸ monovalent negative ions (charge -e) move to the anode in 4.0 seconds. Calculate the net electric current in Amperes (A). Take e = 1.6 × 10⁻¹⁹ C.',
      si: 'විද්‍යුත් විච්ඡේද්‍යයක් තුළ තත්පර 4.0 කදී සංයුජතාව 2 වූ ධන අයන 2.0 × 10¹⁸ ක් කැතෝඩය දෙසටද, ඒක සංයුජ ඍණ අයන 4.0 × 10¹⁸ ක් ඇනෝඩය දෙසටද ගමන් කරයි. මුළු විද්‍යුත් ධාරාව ඇම්පියර් (A) වලින් ගණනය කරන්න. (e = 1.6 × 10⁻¹⁹ C).'
    },
    expected: 0.32,
    tolerance: 0.02,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'Positive charges moving right and negative charges moving left both constitute current to the right. Add total charge magnitude: Q_total = (2 * 2e + 4 * e) * 10¹⁸ = 8e * 10¹⁸. Current I = Q / t.',
      si: 'ධන අයන දකුණට යාම සහ ඍණ අයන වමට යාම යන දෙකෙන්ම එකම දිශාවට ධාරාවක් ලැබේ. මුළු ආරෝපණය එකතු කර කාලයෙන් බෙදන්න.'
    },
    solution: {
      en: 'Total charge Q = (2.0 × 10¹⁸ * 2 * 1.6 × 10⁻¹⁹) + (4.0 × 10¹⁸ * 1 * 1.6 × 10⁻¹⁹) = 0.64 C + 0.64 C = 1.28 C. Current I = 1.28 C / 4.0 s = 0.32 A.',
      si: 'Q = (2.0 × 10¹⁸ * 2 * 1.6 × 10⁻¹⁹) + (4.0 × 10¹⁸ * 1 * 1.6 × 10⁻¹⁹) = 1.28 C. I = 1.28 / 4.0 = 0.32 A.'
    }
  },
  {
    id: 'cur-8-1-08',
    competencyRef: 'Competency 8.1',
    category: 'current-drift-velocity',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Between collisions in a metallic lattice, the motion of a conduction electron in an applied electric field consists of:',
      si: 'ලෝහමය දැලිසක් තුළ යෙදූ විද්‍යුත් ක්ෂේත්‍රයක් යටතේ සන්නයන ඉලෙක්ට්‍රෝනයක් ගැටුම් දෙකක් අතර දක්වන චලිතය සමන්විත වන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'High-speed thermal random motion superimposed with a tiny directional drift opposite to the electric field', si: 'විද්‍යුත් ක්ෂේත්‍රයට ප්‍රතිවිරුද්ධ දිශාවට ඇතිවන කුඩා ප්ලාවිතයක් සමඟ මිශ්‍ර වූ අධික වේගී තාප අහඹු චලිතයකිනි' } },
      { id: 'opt-b', text: { en: 'Uniform straight-line motion at the speed of light', si: 'ආලෝකයේ වේගයෙන් සිදුවන ඒකාකාර සරල රේඛීය චලිතයකිනි' } },
      { id: 'opt-c', text: { en: 'Stationary vibration in fixed equilibrium positions', si: 'ස්ථාවර සමතුලිත පිහිටුම්වල නිශ්චලව කම්පනය වීමෙනි' } },
      { id: 'opt-d', text: { en: 'Pure circular motion around the nucleus', si: 'න්‍යෂ්ටිය වටා තනිකරම වෘත්තාකාර චලිතයකිනි' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Thermal velocities are ~ 10⁵ - 10⁶ m/s in random directions; the drift velocity under practical electric fields is tiny (~ 10⁻⁴ m/s).',
      si: 'තාප අහඹු ප්‍රවේගය ~ 10⁵ m/s තරම් විශාල වුවද විද්‍යුත් ක්ෂේත්‍රයෙන් ලැබෙන ප්ලාවිත වේගය ඉතා කුඩාය (~ 10⁻⁴ m/s).'
    },
    solution: {
      en: 'Electrons possess rapid random thermal velocities (~10⁵ m/s). An electric field applies a force F = -eE, superimposing a minute net drift velocity (~10⁻⁴ m/s) opposite to E.',
      si: 'ඉලෙක්ට්‍රෝනවලට විශාල තාප අහඹු වේගයක් ඇති අතර විද්‍යුත් ක්ෂේත්‍රය මඟින් ක්ෂේත්‍රයට විරුද්ධ දිශාවට ඉතා කුඩා ශුද්ධ ප්ලාවිත වේගයක් ආරෝපණය කෙරේ.'
    }
  },

  // ==========================================
  // COMPETENCY 8.1 (Part 2): Resistance, Resistivity & Temperature Dependence (8 questions)
  // ==========================================
  {
    id: 'cur-8-2-01',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A uniform nichrome wire of length 2.0 m and cross-sectional area 0.50 × 10⁻⁶ m² has a resistivity of 1.1 × 10⁻⁶ Ω m. Calculate the resistance of the wire in Ohms (Ω).',
      si: 'දිග 2.0 m සහ හරස්කඩ වර්ගඵලය 0.50 × 10⁻⁶ m² වන ඒකාකාර නික්‍රෝම් කම්බියක ප්‍රතිරෝධකතාව 1.1 × 10⁻⁶ Ω m වේ. කම්බියේ ප්‍රතිරෝධය ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 4.4,
    tolerance: 0.1,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'R = (ρ * l) / A. Substitute ρ, l, and A directly.',
      si: 'R = (ρ * l) / A. අගයන් කෙලින්ම ආදේශ කරන්න.'
    },
    solution: {
      en: 'R = (1.1 × 10⁻⁶ * 2.0) / (0.50 × 10⁻⁶) = 2.2 / 0.50 = 4.4 Ω.',
      si: 'R = (1.1 × 10⁻⁶ * 2.0) / (0.50 × 10⁻⁶) = 4.4 Ω.'
    }
  },
  {
    id: 'cur-8-2-02',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A cylindrical wire of resistance R is stretched uniformly so that its length doubles (l\' = 2l) while maintaining constant total volume. What is its new resistance R\'?',
      si: 'ප්‍රතිරෝධය R වන සිලින්ඩරාකාර කම්බියක් පරිමාව නියතව තබාගනිමින් එහි දිග දෙගුණ වන සේ (l\' = 2l) ඒකාකාරව අදිනු ලැබේ. එහි නව ප්‍රතිරෝධය R\' කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: '4R', si: '4R' } },
      { id: 'opt-b', text: { en: '2R', si: '2R' } },
      { id: 'opt-c', text: { en: 'R / 2', si: 'R / 2' } },
      { id: 'opt-d', text: { en: 'R / 4', si: 'R / 4' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Volume V = A * l is constant. If length doubles, cross-sectional area halves (A\' = A/2). Then R\' = ρ(2l)/(A/2) = 4 * (ρl/A).',
      si: 'පරිමාව නියත බැවින් දිග දෙගුණ වන විට හරස්කඩ වර්ගඵලය අඩක් වේ. එවිට R ∝ l/A බැවින් ප්‍රතිරෝධය 4 ගුණයක් වේ.'
    },
    solution: {
      en: 'Since volume is conserved, doubling length halves cross-sectional area: R\' = ρ (2l) / (A/2) = 4 (ρl/A) = 4R.',
      si: 'පරිමාව නියත බැවින් දිග දෙගුණ වන විට වර්ගඵලය අඩක් වී නව ප්‍රතිරෝධය 4R බවට පත්වේ.'
    }
  },
  {
    id: 'cur-8-2-03',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A platinum resistance thermometer has a resistance of 50.0 Ω at 0°C. If the temperature coefficient of resistance of platinum is α = 3.92 × 10⁻³ °C⁻¹, calculate its resistance at 100°C in Ohms (Ω).',
      si: 'ප්ලැටිනම් ප්‍රතිරෝධ උෂ්ණත්වමානයක 0°C හිදී ප්‍රතිරෝධය 50.0 Ω කි. ප්ලැටිනම්වල ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය α = 3.92 × 10⁻³ °C⁻¹ නම්, 100°C හිදී එහි ප්‍රතිරෝධය ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 69.6,
    tolerance: 0.2,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'R_θ = R₀ * (1 + α * Δθ). Here Δθ = 100 - 0 = 100°C.',
      si: 'R_θ = R₀ * (1 + α * Δθ). මෙහි Δθ = 100°C.'
    },
    solution: {
      en: 'R_100 = 50.0 * (1 + 3.92 × 10⁻³ * 100) = 50.0 * (1 + 0.392) = 50.0 * 1.392 = 69.6 Ω.',
      si: 'R_100 = 50.0 * (1 + 0.392) = 69.6 Ω.'
    }
  },
  {
    id: 'cur-8-2-04',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How does the electrical resistance of pure semiconductors (e.g. silicon, germanium) and negative temperature coefficient (NTC) thermistors vary with temperature?',
      si: 'පිරිසිදු අර්ධ සන්නායක (සිලිකන්, ජර්මේනියම්) සහ NTC තර්මිස්ටර්වල විද්‍යුත් ප්‍රතිරෝධය උෂ්ණත්වය සමඟ විචලනය වන්නේ කෙසේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Resistance decreases exponentially with increasing temperature (negative α).', si: 'උෂ්ණත්වය වැඩිවත්ම ප්‍රතිරෝධය ඝාතීයව අඩුවේ (සෘණ α).' } },
      { id: 'opt-b', text: { en: 'Resistance increases linearly with temperature like metals.', si: 'ලෝහ මෙන් උෂ්ණත්වය සමඟ රේඛීයව වැඩිවේ.' } },
      { id: 'opt-c', text: { en: 'Resistance remains strictly constant at all temperatures.', si: 'සියලු උෂ්ණත්වවලදී නියතව පවතී.' } },
      { id: 'opt-d', text: { en: 'Resistance drops abruptly to zero above 50°C.', si: '50°C ට වැඩි වූ විට ක්ෂණිකව ශුන්‍ය වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Thermal agitation breaks covalent bonds in semiconductors, rapidly creating free electron-hole pairs that overpower lattice scattering.',
      si: 'තාපය නිසා සහසංයුජ බන්ධන බිඳී නිදහස් වාහක (ඉලෙක්ට්‍රෝන හා කුහර) බහුලව ජනනය වන බැවින් ප්‍රතිරෝධය සීඝ්‍රයෙන් අඩුවේ.'
    },
    solution: {
      en: 'Unlike metals whose resistance rises with temperature due to increased lattice vibration, semiconductors exhibit a negative temperature coefficient because thermal energy exponentially increases mobile carrier density.',
      si: 'ලෝහවල උෂ්ණත්වය සමඟ ප්‍රතිරෝධය වැඩි වුවද, අර්ධ සන්නායකවල තාපය මඟින් වාහක ඝනත්වය සීඝ්‍රයෙන් වැඩි කරන බැවින් ප්‍රතිරෝධය අඩුවේ.'
    }
  },
  {
    id: 'cur-8-2-05',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which of the following components exhibits an S-shaped or non-linear V-I characteristic and does NOT obey Ohm’s Law?',
      si: 'පහත සඳහන් උපාංග අතුරින් රේඛීය නොවන V-I ලාක්ෂණිකයක් දක්වන, එනම් ඕම්ගේ නියමය නොපිළිපදින උපාංගය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Semiconductor p-n junction diode and filament incandescent lamp', si: 'අර්ධ සන්නායක p-n සන්ධි ඩයෝඩය සහ තාපදීප්ත සූත්‍රිකා බල්බය' } },
      { id: 'opt-b', text: { en: 'Constantan wire resistor at constant room temperature', si: 'නියත කාමර උෂ්ණත්වයේ ඇති කොන්ස්ටන්ටන් කම්බි ප්‍රතිරෝධකය' } },
      { id: 'opt-c', text: { en: 'Manganin standard resistor', si: 'මැන්ගනින් සම්මත ප්‍රතිරෝධකය' } },
      { id: 'opt-d', text: { en: 'Copper connecting lead of negligible resistance', si: 'නගණ්‍ය ප්‍රතිරෝධයක් ඇති තඹ සම්බන්ධක කම්බිය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Ohmic conductors show a straight line V-I graph passing through origin at constant temperature. Diodes and filament lamps are non-ohmic.',
      si: 'ඕමීය සන්නායකවල V-I ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි. ඩයෝඩ සහ සූත්‍රිකා බල්බ ඕමීය නොවේ.'
    },
    solution: {
      en: 'Semiconductor diodes (exponential forward conduction, threshold voltage) and filament lamps (resistance increases drastically as temperature rises) are non-ohmic devices.',
      si: 'p-n සන්ධි ඩයෝඩ සහ සූත්‍රිකා ලාම්පු ඕමීය නොවන උපාංග වේ; ඒවායේ V-I ප්‍රස්තාරය සරල රේඛාවක් නොවේ.'
    }
  },
  {
    id: 'cur-8-2-06',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Under standard 4-band carbon resistor color code, what resistance is represented by Yellow, Violet, Orange, Gold?',
      si: 'සම්මත වළලු 4 ක කාබන් ප්‍රතිරෝධක වර්ණ කේතය අනුව, කහ, දම්, තැඹිලි, රන්වන් වර්ණවලින් නිරූපණය වන ප්‍රතිරෝධය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: '47 kΩ ± 5%', si: '47 kΩ ± 5%' } },
      { id: 'opt-b', text: { en: '4.7 kΩ ± 10%', si: '4.7 kΩ ± 10%' } },
      { id: 'opt-c', text: { en: '470 kΩ ± 5%', si: '470 kΩ ± 5%' } },
      { id: 'opt-d', text: { en: '27 kΩ ± 1%', si: '27 kΩ ± 1%' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Yellow = 4, Violet = 7, Orange = multiplier 10³ (1000), Gold = ± 5% tolerance.',
      si: 'කහ = 4, දම් = 7, තැඹිලි = 10³ ගුණකය, රන්වන් = ± 5% සහනශීලතාව.'
    },
    solution: {
      en: 'First digit: Yellow (4). Second digit: Violet (7). Multiplier: Orange (10³). Tolerance: Gold (±5%). Value = 47 × 10³ Ω = 47 kΩ ± 5%.',
      si: 'කහ (4), දම් (7), තැඹිලි (10³), රන්වන් (±5%). අගය = 47 kΩ ± 5%.'
    }
  },
  {
    id: 'cur-8-2-07',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A coil has a resistance of 10.0 Ω at 20°C and 12.0 Ω at 70°C. Calculate its temperature coefficient of resistance α at 0°C in units of 10⁻³ °C⁻¹.',
      si: 'දඟරයක ප්‍රතිරෝධය 20°C හිදී 10.0 Ω වන අතර 70°C හිදී 12.0 Ω වේ. 0°C හිදී එහි ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය α අගය 10⁻³ °C⁻¹ වලින් ගණනය කරන්න.'
    },
    expected: 4.35,
    tolerance: 0.1,
    unit: { en: '× 10⁻³ °C⁻¹', si: '× 10⁻³ °C⁻¹' },
    hint: {
      en: 'R_70 - R_20 = R_0 * α * (70 - 20) = 2.0 Ω => R_0 * α = 2.0 / 50 = 0.04. R_20 = R_0 + R_0 * α * 20 = R_0 + 0.04 * 20 = R_0 + 0.8 = 10.0 => R_0 = 9.2 Ω. α = 0.04 / 9.2.',
      si: 'R_70 - R_20 = R_0 * α * 50 = 2.0. R_0 * α = 0.04. R_20 = R_0 + 20(R_0 α) => R_0 = 10 - 0.8 = 9.2 Ω. α = 0.04 / 9.2.'
    },
    solution: {
      en: 'R_0 * α = (12.0 - 10.0) / (70 - 20) = 2.0 / 50 = 0.04 Ω/°C. R_0 = R_20 - 20 * (R_0 * α) = 10.0 - 20 * 0.04 = 9.2 Ω. α = 0.04 / 9.2 = 4.348 × 10⁻³ °C⁻¹ ≈ 4.35 × 10⁻³ °C⁻¹.',
      si: 'R_0 * α = 0.04. R_0 = 9.2 Ω. α = 0.04 / 9.2 = 4.35 × 10⁻³ °C⁻¹.'
    }
  },
  {
    id: 'cur-8-2-08',
    competencyRef: 'Competency 8.1',
    category: 'resistance-temperature',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Electrical conductivity σ is related to resistivity ρ by:',
      si: 'විද්‍යුත් සන්නායකතාව σ සහ ප්‍රතිරෝධකතාව ρ අතර සම්බන්ධය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'σ = 1 / ρ (unit: Ω⁻¹ m⁻¹ or S m⁻¹)', si: 'σ = 1 / ρ (ඒකකය: Ω⁻¹ m⁻¹ හෙවත් S m⁻¹)' } },
      { id: 'opt-b', text: { en: 'σ = ρ²', si: 'σ = ρ²' } },
      { id: 'opt-c', text: { en: 'σ = ρ / A', si: 'σ = ρ / A' } },
      { id: 'opt-d', text: { en: 'σ = ρ * l', si: 'σ = ρ * l' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Conductivity is the reciprocal of electrical resistivity.',
      si: 'සන්නායකතාව යනු ප්‍රතිරෝධකතාවයේ පරස්පරයයි.'
    },
    solution: {
      en: 'Electrical conductivity σ is the reciprocal of resistivity: σ = 1/ρ. Its SI unit is Siemens per metre (S m⁻¹ or Ω⁻¹ m⁻¹).',
      si: 'විද්‍යුත් සන්නායකතාව යනු ප්‍රතිරෝධකතාවයේ ප්‍රතිලෝමය වේ (σ = 1/ρ).'
    }
  },
  // ==========================================
  // COMPETENCY 8.2: DC Energy & Power (4 new questions + 2 mapped from 8.3)
  // ==========================================
  {
    id: 'cur-8-2-09',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'An electric heater element of resistance 20.0 Ω is connected across a 240 V DC supply for 10 minutes. Calculate the total thermal energy generated in megaJoules (MJ).',
      si: 'ප්‍රතිරෝධය 20.0 Ω වන විදුලි හීටරයක් 240 V DC සැපයුමකට සම්බන්ධ කර විනාඩි 10 ක් ක්‍රියාත්මක කෙරේ. ජනනය වන මුළු තාප ශක්තිය මෙගාජූල් (MJ) වලින් ගණනය කරන්න.'
    },
    expected: 1.73,
    tolerance: 0.05,
    unit: { en: 'MJ', si: 'MJ' },
    hint: {
      en: 'Power P = V² / R. Energy E = P * t, where t = 10 * 60 s = 600 s. Convert to MJ (10⁶ J).',
      si: 'P = V² / R. ශක්තිය E = P * t (t = 10 * 60 s). MJ (10⁶ J) බවට පරිවර්තනය කරන්න.'
    },
    solution: {
      en: 'P = (240)² / 20 = 57600 / 20 = 2880 W. E = 2880 W * 600 s = 1.728 × 10⁶ J ≈ 1.73 MJ.',
      si: 'P = (240)² / 20 = 2880 W. E = 2880 * 600 = 1.728 × 10⁶ J = 1.73 MJ.'
    }
  },
  {
    id: 'cur-8-2-10',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two light bulbs rated 60 W, 120 V and 100 W, 120 V are connected in SERIES across a 120 V DC supply. Which bulb glows brighter and why?',
      si: '120 V හිදී 60 W සහ 100 W ලෙස ශ්‍රේණිගත කර ඇති විදුලි බුබුළු දෙකක් 120 V DC සැපයුමකට ශ්‍රේණිගතව සම්බන්ධ කර ඇත. වඩාත් දීප්තිමත්ව දැල්වෙන්නේ කුමන බුබුළද, ඒ මන්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The 60 W bulb, because its filament has higher resistance (R = V²/P) and dissipates more power with identical series current (P = I²R).', si: '60 W බුබුළ, මන්ද එහි සූත්‍රිකාවේ ප්‍රතිරෝධය වැඩි බැවින් (R = V²/P) සමාන ශ්‍රේණිගත ධාරාවකදී වැඩි ක්ෂමතාවක් විසුරුවයි (P = I²R).' } },
      { id: 'opt-b', text: { en: 'The 100 W bulb, because its rated power is higher.', si: '100 W බුබුළ, මන්ද එහි නාමික ක්ෂමතාව ඉහළ බැවිනි.' } },
      { id: 'opt-c', text: { en: 'Both bulbs glow with equal brightness.', si: 'බුබුළු දෙකම එක හා සමාන දීප්තියෙන් දැල්වෙයි.' } },
      { id: 'opt-d', text: { en: 'Neither bulb lights up because current cannot flow.', si: 'ධාරාව ගලා යා නොහැකි බැවින් බුබුළු දෙකම නොදැල්වෙයි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Resistance R = V_rated² / P_rated. In series, both bulbs carry identical current I, so P_actual = I² * R.',
      si: 'R = V²/P. ශ්‍රේණිගතව ඇති විට ධාරාව සමාන බැවින් P = I²R අනුව වැඩි ප්‍රතිරෝධයක් ඇති බල්බයේ දීප්තිය වැඩිය.'
    },
    solution: {
      en: 'R_60 = 120² / 60 = 240 Ω, while R_100 = 120² / 100 = 144 Ω. In series, same current I flows through both: P_actual = I² R. Since R_60 > R_100, the 60 W bulb dissipates more power and glows brighter.',
      si: 'R_60 = 240 Ω සහ R_100 = 144 Ω වේ. ශ්‍රේණිගත පරිපථයේ P = I²R බැවින් ප්‍රතිරෝධය වැඩි 60 W බුබුළ වඩා දීප්තිමත්ව දැල්වෙයි.'
    }
  },
  {
    id: 'cur-8-2-11',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 2.5 kW electric water pump operates for 4 hours daily. How many electrical units (kilowatt-hours, kWh) are consumed over a 30-day month?',
      si: '2.5 kW විදුලි ජල පොම්පයක් දිනකට පැය 4 බැගින් ක්‍රියාත්මක වේ. දින 30 ක මාසයක් තුළ වැයවන විදුලි ඒකක (කිලෝවොට්-පැය, kWh) සංඛ්‍යාව කොපමණද?'
    },
    expected: 300.0,
    tolerance: 1.0,
    unit: { en: 'kWh', si: 'kWh' },
    hint: {
      en: 'Daily energy = Power (kW) * hours. Monthly energy = Daily energy * 30.',
      si: 'දිනක ශක්තිය = ක්ෂමතාව (kW) * පැය. මාසික ශක්තිය = දිනක ශක්තිය * 30.'
    },
    solution: {
      en: 'Energy per day = 2.5 kW * 4 h = 10 kWh. Energy for 30 days = 10 kWh/day * 30 days = 300 kWh (units).',
      si: 'දිනක පරිභෝජනය = 2.5 kW * 4 h = 10 kWh. දින 30 සඳහා = 10 * 30 = 300 kWh.'
    }
  },
  {
    id: 'cur-8-2-12',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A DC electric motor of internal armature resistance 2.0 Ω is operated from a 100 V DC line. When running at full load, it draws a current of 10.0 A. Calculate the electrical efficiency of the motor in percent (%).',
      si: 'ආමේචර ප්‍රතිරෝධය 2.0 Ω වන සරල ධාරා මෝටරයක් 100 V DC සැපයුමකින් ක්‍රියාත්මක වේ. පූර්ණ භාරයේදී එය 10.0 A ධාරාවක් ලබා ගනී. මෝටරයේ විද්‍යුත් කාර්යක්ෂමතාව ප්‍රතිශතයක් (%) ලෙස ගණනය කරන්න.'
    },
    expected: 80.0,
    tolerance: 0.5,
    unit: { en: '%', si: '%' },
    hint: {
      en: 'Electrical power input P_in = V * I. Armature copper heat loss P_loss = I² * R. Mechanical power developed P_mech = P_in - P_loss = E_back * I. Efficiency = (P_mech / P_in) * 100%.',
      si: 'ආදාන ක්ෂමතාව P_in = V * I = 1000 W. තාප හානිය = I²R = 10² * 2 = 200 W. ප්‍රයෝජනවත් යාන්ත්‍රික ක්ෂමතාව = 800 W. කාර්යක්ෂමතාව = (800 / 1000) * 100% = 80%.'
    },
    solution: {
      en: 'P_in = 100 V * 10.0 A = 1000 W. Internal resistive heating loss = I² * R = (10.0 A)² * 2.0 Ω = 200 W. Useful mechanical power output = 1000 W - 200 W = 800 W. Efficiency η = (800 / 1000) * 100% = 80.0%.',
      si: 'P_in = 100 * 10 = 1000 W. තාප හානිය = 10² * 2 = 200 W. යාන්ත්‍රික ප්‍රතිදානය = 800 W. කාර්යක්ෂමතාව η = (800/1000) * 100% = 80.0%.'
    }
  },
  {
    id: 'cur-8-2-13',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two electric heating elements with resistances R₁ = 20.0 Ω and R₂ = 40.0 Ω are connected in parallel across a 240 V DC supply. What is the total rate of electrical heat generation (total power dissipation) of both elements combined, in Watts (W)?',
      si: 'ප්‍රතිරෝධ R₁ = 20.0 Ω සහ R₂ = 40.0 Ω වන විදුලි තාපන මූලද්‍රව්‍ය දෙකක් 240 V DC සැපයුමකට සමාන්තරගතව සම්බන්ධ කර ඇත. මූලද්‍රව්‍ය දෙකෙහිම මුළු තාප ජනන සීඝ්‍රතාව (මුළු විද්‍යුත් ක්ෂමතාව) වොට් (W) වලින් ගණනය කරන්න.'
    },
    expected: 4320.0,
    tolerance: 10.0,
    unit: { en: 'W', si: 'W' },
    hint: {
      en: 'In parallel, each element has full voltage V = 240 V. Total power P_total = V²/R₁ + V²/R₂.',
      si: 'සමාන්තරගතව ඇති විට දෙකටම සම්පූර්ණ වෝල්ටීයතාව V = 240 V ලැබේ. මුළු ක්ෂමතාව P_total = V²/R₁ + V²/R₂.'
    },
    solution: {
      en: 'P₁ = (240)² / 20.0 = 57600 / 20 = 2880 W. P₂ = (240)² / 40.0 = 57600 / 40 = 1440 W. Total power P_total = 2880 W + 1440 W = 4320 W.',
      si: 'P₁ = 57600 / 20 = 2880 W. P₂ = 57600 / 40 = 1440 W. මුළු ක්ෂමතාව = 2880 + 1440 = 4320 W.'
    }
  },

  // ==========================================
  // COMPETENCY 8.3: EMF, Internal Resistance & Power (8 questions)
  // ==========================================
  {
    id: 'cur-8-3-01',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A battery of EMF 12.0 V and internal resistance 0.50 Ω is connected to an external load resistor of 5.5 Ω. Calculate the terminal potential difference V of the battery in Volts (V).',
      si: 'වි.ගා.බ. 12.0 V සහ අභ්‍යන්තර ප්‍රතිරෝධය 0.50 Ω වන බැටරියක් 5.5 Ω බාහිර භාර ප්‍රතිරෝධකයකට සම්බන්ධ කර ඇත. බැටරියේ අග්‍රස්ථ විභව අන්තරය V වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 11.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Total circuit resistance R_total = R + r. Current I = E / R_total. Terminal voltage V = E - I*r = I*R.',
      si: 'මුළු ප්‍රතිරෝධය = R + r. ධාරාව I = E / (R + r). අග්‍රස්ථ විභව අන්තරය V = I * R.'
    },
    solution: {
      en: 'I = 12.0 / (5.5 + 0.50) = 12.0 / 6.0 = 2.0 A. V = E - I*r = 12.0 - 2.0 * 0.50 = 11.0 V.',
      si: 'I = 12.0 / 6.0 = 2.0 A. V = 12.0 - (2.0 * 0.50) = 11.0 V.'
    }
  },
  {
    id: 'cur-8-3-02',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When a rechargeable accumulator battery of EMF E and internal resistance r is being RECHARGED with current I from an external charger, what is the terminal potential difference V across the battery terminals?',
      si: 'වි.ගා.බ. E සහ අභ්‍යන්තර ප්‍රතිරෝධය r වන ආරෝපණය කළ හැකි බැටරියක් බාහිර ආරෝපකයකින් I ධාරාවක් මඟින් නැවත ආරෝපණය වන විට, එහි අග්‍ර අතර අග්‍රස්ථ විභව අන්තරය V වන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'V = E + Ir', si: 'V = E + Ir' } },
      { id: 'opt-b', text: { en: 'V = E - Ir', si: 'V = E - Ir' } },
      { id: 'opt-c', text: { en: 'V = E', si: 'V = E' } },
      { id: 'opt-d', text: { en: 'V = Ir - E', si: 'V = Ir - E' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'During charging, current is forced into the positive terminal against the battery\'s internal EMF, requiring an applied terminal voltage greater than E.',
      si: 'ආරෝපණය කිරීමේදී ධාරාව ධන අග්‍රය තුළට බලයෙන් යවන බැවින් යොදන අග්‍රස්ථ විභවය E ට වඩා වැඩි විය යුතුය (V = E + Ir).'
    },
    solution: {
      en: 'During recharging, current enters the positive terminal against the cell\'s EMF. By Kirchhoff\'s voltage law: V = E + Ir.',
      si: 'නැවත ආරෝපණය කිරීමේදී ධාරාව ධන අග්‍රයට ඇතුළු වන බැවින් අග්‍රස්ථ විභව අන්තරය V = E + Ir වේ.'
    }
  },
  {
    id: 'cur-8-3-03',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A dry cell delivers a current of 1.0 A when connected to a 2.5 Ω resistor, and 0.50 A when connected to a 5.5 Ω resistor. Calculate the internal resistance r of the cell in Ohms (Ω).',
      si: 'වියළි කෝෂයක් 2.5 Ω ප්‍රතිරෝධකයකට සම්බන්ධ කළ විට 1.0 A ධාරාවක්ද, 5.5 Ω ප්‍රතිරෝධකයකට සම්බන්ධ කළ විට 0.50 A ධාරාවක්ද ලබාදෙයි. කෝෂයේ අභ්‍යන්තර ප්‍රතිරෝධය r ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 0.5,
    tolerance: 0.05,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'E = I₁ (R₁ + r) = I₂ (R₂ + r). 1.0 * (2.5 + r) = 0.50 * (5.5 + r). Solve for r.',
      si: 'E = 1.0 * (2.5 + r) සහ E = 0.50 * (5.5 + r). සමීකරණ දෙක සමාන කර r සොයන්න.'
    },
    solution: {
      en: '1.0 * (2.5 + r) = 0.50 * (5.5 + r) => 2.5 + r = 2.75 + 0.5r => 0.5r = 0.25 => r = 0.50 Ω.',
      si: '2.5 + r = 2.75 + 0.5r => 0.5r = 0.25 => r = 0.50 Ω.'
    }
  },
  {
    id: 'cur-8-3-04',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'According to the Maximum Power Transfer Theorem, maximum electrical power is dissipated in a variable load resistor R connected to a real source of EMF E and internal resistance r when:',
      si: 'උපරිම ක්ෂමතා හුවමාරු ප්‍රමේයයට අනුව, වි.ගා.බ. E සහ අභ්‍යන්තර ප්‍රතිරෝධය r වන ප්‍රභවයකට සම්බන්ධ විචල්‍ය භාර ප්‍රතිරෝධකය R තුළ උපරිම ක්ෂමතාවක් විසිරෙන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'R = r', si: 'R = r වන විට' } },
      { id: 'opt-b', text: { en: 'R = 0', si: 'R = 0 වන විට' } },
      { id: 'opt-c', text: { en: 'R = ∞', si: 'R = ∞ වන විට' } },
      { id: 'opt-d', text: { en: 'R = 2r', si: 'R = 2r වන විට' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'P = I² R = (E / (R + r))² R. Maximizing with respect to R (dP/dR = 0) gives R = r.',
      si: 'P = E² R / (R + r)². R විෂයෙන් අවකලනය කර ශුන්‍ය කළ විට R = r ලැබේ.'
    },
    solution: {
      en: 'Maximum power transfer occurs when the load resistance equals the internal resistance of the source (R = r). Under this condition, P_max = E² / (4r).',
      si: 'භාර ප්‍රතිරෝධය ප්‍රභවයේ අභ්‍යන්තර ප්‍රතිරෝධයට සමාන වන විට (R = r) උපරිම ක්ෂමතාවක් හුවමාරු වන අතර P_max = E² / (4r) වේ.'
    }
  },
  {
    id: 'cur-8-3-05',
    competencyRef: 'Competency 8.2',
    category: 'dc-energy-power',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A battery of EMF 24 V and internal resistance 3.0 Ω is connected across an external load resistor adjusted to receive maximum possible power. Calculate this maximum power P_max in Watts (W).',
      si: 'වි.ගා.බ. 24 V සහ අභ්‍යන්තර ප්‍රතිරෝධය 3.0 Ω වන බැටරියක් උපරිම ක්ෂමතාවක් ලැබෙන සේ සකස් කළ බාහිර භාරයකට සම්බන්ධ කර ඇත. එම උපරිම ක්ෂමතාව P_max වොට් (W) වලින් ගණනය කරන්න.'
    },
    expected: 48.0,
    tolerance: 0.5,
    unit: { en: 'W', si: 'W' },
    hint: {
      en: 'P_max = E² / (4 * r). Substitute E = 24 V and r = 3.0 Ω.',
      si: 'P_max = E² / (4 * r). E = 24 V සහ r = 3.0 Ω ආදේශ කරන්න.'
    },
    solution: {
      en: 'P_max = (24)² / (4 * 3.0) = 576 / 12 = 48.0 W.',
      si: 'P_max = (24)² / (4 * 3.0) = 576 / 12 = 48.0 W.'
    }
  },
  {
    id: 'cur-8-3-06',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In an experiment plotting terminal voltage V against current I for a cell (V = E - Ir), what do the intercept on the vertical V-axis and the magnitude of the slope represent?',
      si: 'කෝෂයක් සඳහා අග්‍රස්ථ වෝල්ටීයතාව V ට එදිරිව ධාරාව I ප්‍රස්තාරගත කළ විට (V = E - Ir), සිරස් V-අක්ෂයේ අන්තඃඛණ්ඩයෙන් සහ බෑවුමේ විශාලත්වයෙන් නිරූපණය වන්නේ පිළිවෙළින්:'
    },
    options: [
      { id: 'opt-a', text: { en: 'Vertical intercept = EMF E; slope magnitude = internal resistance r', si: 'සිරස් අන්තඃඛණ්ඩය = වි.ගා.බ. E; බෑවුමේ විශාලත්වය = අභ්‍යන්තර ප්‍රතිරෝධය r' } },
      { id: 'opt-b', text: { en: 'Vertical intercept = internal resistance r; slope magnitude = EMF E', si: 'සිරස් අන්තඃඛණ්ඩය = අභ්‍යන්තර ප්‍රතිරෝධය r; බෑවුමේ විශාලත්වය = වි.ගා.බ. E' } },
      { id: 'opt-c', text: { en: 'Vertical intercept = short-circuit current; slope magnitude = power', si: 'සිරස් අන්තඃඛණ්ඩය = කෙටි පරිපථ ධාරාව; බෑවුමේ විශාලත්වය = ක්ෂමතාව' } },
      { id: 'opt-d', text: { en: 'Vertical intercept = zero; slope magnitude = resistivity', si: 'සිරස් අන්තඃඛණ්ඩය = ශුන්‍ය; බෑවුමේ විශාලත්වය = ප්‍රතිරෝධකතාව' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Comparing V = -r * I + E to y = mx + c gives y-intercept c = E and slope m = -r.',
      si: 'V = -r * I + E සමීකරණය y = mx + c සමඟ සැසඳූ විට අන්තඃඛණ්ඩය E වන අතර බෑවුම -r වේ.'
    },
    solution: {
      en: 'Writing V = E - Ir in standard linear form y = mx + c shows that the vertical intercept (I = 0) is the open-circuit EMF E, and the gradient is -r, meaning the magnitude of the slope is internal resistance r.',
      si: 'V = -rI + E බැවින් සිරස් අන්තඃඛණ්ඩයෙන් වි.ගා.බ. E ද, ප්‍රස්තාරයේ බෑවුමේ විශාලත්වයෙන් අභ්‍යන්තර ප්‍රතිරෝධය r ද ලැබේ.'
    }
  },
  {
    id: 'cur-8-3-07',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A battery of EMF 10 V and internal resistance 1.0 Ω is short-circuited by a wire of negligible resistance. What is the short-circuit current in Amperes (A)?',
      si: 'වි.ගා.බ. 10 V සහ අභ්‍යන්තර ප්‍රතිරෝධය 1.0 Ω වන බැටරියක් නගණ්‍ය ප්‍රතිරෝධී කම්බියකින් කෙටි පරිපථ කර ඇත. එවිට ගලන කෙටි පරිපථ ධාරාව ඇම්පියර් (A) වලින් ගණනය කරන්න.'
    },
    expected: 10.0,
    tolerance: 0.1,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'For short circuit, external R = 0. I_sc = E / r.',
      si: 'කෙටි පරිපථයකදී බාහිර R = 0 වේ. I_sc = E / r.'
    },
    solution: {
      en: 'I_sc = E / r = 10 V / 1.0 Ω = 10.0 A.',
      si: 'I_sc = 10 / 1.0 = 10.0 A.'
    }
  },
  {
    id: 'cur-8-3-08',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the fundamental difference between Electromotive Force (EMF) and Potential Difference (PD)?',
      si: 'විද්‍යුත් ගාමක බලය (වි.ගා.බ.) සහ විභව අන්තරය (වි.අ.) අතර මූලික වෙනස කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'EMF is energy converted from non-electrical to electrical per unit charge; PD is electrical energy converted into other forms per unit charge.', si: 'වි.ගා.බ. යනු ඒකක ආරෝපණයකට විද්‍යුත් නොවන ශක්තිය විද්‍යුත් ශක්තිය බවට පත්වන ප්‍රමාණයයි; විභව අන්තරය යනු ඒකක ආරෝපණයකින් විද්‍යුත් ශක්තිය වෙනත් ශක්ති බවට පත්වන ප්‍රමාණයයි.' } },
      { id: 'opt-b', text: { en: 'EMF is measured in Newtons while PD is measured in Volts.', si: 'වි.ගා.බ. නිව්ටන් වලින්ද වි.අ. වෝල්ට් වලින්ද මනිනු ලැබේ.' } },
      { id: 'opt-c', text: { en: 'EMF only exists when current flows, whereas PD exists without current.', si: 'වි.ගා.බ. පවතින්නේ ධාරාව ගලන විට පමණි, වි.අ. ධාරාව නොමැති විට පවතී.' } },
      { id: 'opt-d', text: { en: 'There is no physical difference; they are identical concepts.', si: 'භෞතික වෙනසක් නැත; ඒවා සම්පූර්ණයෙන්ම එකම සංකල්ප වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'EMF generates electrical energy (chemical, mechanical → electrical); PD consumes or drops electrical energy (electrical → heat, light).',
      si: 'වි.ගා.බ. යනු ප්‍රභවයක් තුළින් විද්‍යුත් ශක්තිය උත්පාදනයයි; විභව අන්තරය යනු ප්‍රතිරෝධක ආදිය තුළ විද්‍යුත් ශක්තිය වැයවීමයි.'
    },
    solution: {
      en: 'EMF describes energy conversion from other forms (chemical, solar, mechanical) to electrical energy per unit charge inside a source. Potential difference describes electrical energy dissipated into other forms per unit charge across circuit elements.',
      si: 'වි.ගා.බ. මඟින් විද්‍යුත් නොවන ශක්තිය විද්‍යුත් ශක්තිය බවට හැරවීමත්, විභව අන්තරය මඟින් විද්‍යුත් ශක්තිය වෙනත් ශක්තීන්ට පත්වීමත් නිරූපණය වේ.'
    }
  },
  {
    id: 'cur-8-3-09',
    competencyRef: 'Competency 8.3',
    category: 'emf-internal-resistance',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A high-resistance voltmeter reads 6.00 V across the terminals of a cell on open circuit. When a load resistor R = 5.00 Ω is connected across the cell, the voltmeter reading drops to 5.00 V. Calculate the internal resistance r of the cell in Ohms (Ω).',
      si: 'විවෘත පරිපථයක ඇති කෝෂයක අග්‍ර අතර විභව අන්තරය ඉහළ ප්‍රතිරෝධී වෝල්ට්මීටරයකින් මැනීමේදී 6.00 V ලෙස කියවෙයි. කෝෂය හරහා R = 5.00 Ω බාහිර ප්‍රතිරෝධකයක් සම්බන්ධ කළ විට පාඨාංකය 5.00 V දක්වා පහත වැටේ. කෝෂයේ අභ්‍යන්තර ප්‍රතිරෝධය r ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'Open circuit voltage is the EMF E = 6.00 V. With load R, V = 5.00 V. Internal resistance r = R * (E - V) / V.',
      si: 'විවෘත පරිපථ වෝල්ටීයතාව වි.ගා.බ. E = 6.00 V වේ. භාරය සහිතව V = 5.00 V වේ. r = R * (E - V) / V.'
    },
    solution: {
      en: 'Current I = V / R = 5.00 V / 5.00 Ω = 1.00 A. Lost volts v = E - V = 6.00 V - 5.00 V = 1.00 V. Internal resistance r = v / I = 1.00 V / 1.00 A = 1.00 Ω.',
      si: 'ධාරාව I = V / R = 5.00 / 5.00 = 1.00 A. අභ්‍යන්තර වෝල්ටීයතා බැස්ම v = 6.00 - 5.00 = 1.00 V. අභ්‍යන්තර ප්‍රතිරෝධය r = 1.00 / 1.00 = 1.00 Ω.'
    }
  },

  // ==========================================
  // COMPETENCY 8.4: Kirchhoff's Laws & Networks (8 questions)
  // ==========================================
  {
    id: 'cur-8-4-01',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Kirchhoff’s First Law (Current Law / Junction Rule, ΣI = 0) and Second Law (Voltage Law / Loop Rule, ΣE = ΣIR) are direct consequences of which two fundamental conservation laws?',
      si: 'කර්චොෆ්ගේ පළමු නියමය (සන්ධි නීතිය, ΣI = 0) සහ දෙවන නියමය (ලූප නීතිය, ΣE = ΣIR) පදනම් වී ඇත්තේ පිළිවෙළින් කුමන මූලික සංස්ථිති නියම මතද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Conservation of electric charge and conservation of energy', si: 'විද්‍යුත් ආරෝපණ සංස්ථිතිය සහ ශක්ති සංස්ථිතිය' } },
      { id: 'opt-b', text: { en: 'Conservation of momentum and conservation of mass', si: 'ගම්‍යතා සංස්ථිතිය සහ ස්කන්ධ සංස්ථිතිය' } },
      { id: 'opt-c', text: { en: 'Conservation of energy and conservation of charge', si: 'ශක්ති සංස්ථිතිය සහ ආරෝපණ සංස්ථිතිය' } },
      { id: 'opt-d', text: { en: 'Conservation of angular momentum and mass-energy equivalence', si: 'කෝණික ගම්‍යතා සංස්ථිතිය සහ ස්කන්ධ-ශක්ති තුල්‍යතාව' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Charge cannot accumulate at a junction (current in = current out). Around a closed loop, net change in electrostatic potential energy is zero.',
      si: 'සන්ධියක ආරෝපණ ගොඩගැසිය නොහැක (ආරෝපණ සංස්ථිතිය). සංවෘත ලූපයක විභව වෙනස්කම්වල එකතුව ශුන්‍ය වේ (ශක්ති සංස්ථිතිය).'
    },
    solution: {
      en: 'Kirchhoff’s Current Law (KCL) is based on the conservation of electric charge. Kirchhoff’s Voltage Law (KVL) is based on the conservation of energy in a conservative electric field.',
      si: 'කර්චොෆ්ගේ ධාරා නියමය විද්‍යුත් ආරෝපණ සංස්ථිතිය මතද, වෝල්ටීයතා නියමය ශක්ති සංස්ථිතිය මතද පදනම් වේ.'
    }
  },
  {
    id: 'cur-8-4-02',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Three resistors of 6.0 Ω, 12.0 Ω, and 4.0 Ω are connected in parallel. Calculate their equivalent resistance R_eq in Ohms (Ω).',
      si: '6.0 Ω, 12.0 Ω සහ 4.0 Ω ප්‍රතිරෝධක තුනක් සමාන්තරගතව සම්බන්ධ කර ඇත. ඒවායේ සමක ප්‍රතිරෝධය R_eq ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 2.0,
    tolerance: 0.05,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: '1 / R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3) / 12 = 6 / 12.',
      si: '1 / R_eq = 1/6 + 1/12 + 1/4 = 6/12 = 1/2.'
    },
    solution: {
      en: '1 / R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3) / 12 = 6 / 12 = 0.50 Ω⁻¹. R_eq = 2.0 Ω.',
      si: '1 / R_eq = 6/12 => R_eq = 2.0 Ω.'
    }
  },
  {
    id: 'cur-8-4-03',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'At a circuit junction, currents of 5.0 A and 3.0 A flow into the junction through two leads, while a current of 2.0 A and an unknown current I_x flow out through two other leads. Calculate current I_x in Amperes (A).',
      si: 'පරිපථ සන්ධියකට රැහැන් දෙකක් ඔස්සේ 5.0 A සහ 3.0 A ධාරා ඇතුළු වන අතර, තවත් රැහැන් දෙකක් ඔස්සේ 2.0 A සහ නොදන්නා ධාරාවක් I_x ඉවතට ගලා යයි. I_x ධාරාව ඇම්පියර් (A) වලින් ගණනය කරන්න.'
    },
    expected: 6.0,
    tolerance: 0.1,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'ΣI_in = ΣI_out => 5.0 + 3.0 = 2.0 + I_x.',
      si: 'ΣI_ඇතුළු = ΣI_පිටවන => 5.0 + 3.0 = 2.0 + I_x.'
    },
    solution: {
      en: '5.0 + 3.0 = 2.0 + I_x => 8.0 = 2.0 + I_x => I_x = 6.0 A.',
      si: '8.0 = 2.0 + I_x => I_x = 6.0 A.'
    }
  },
  {
    id: 'cur-8-4-04',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Twelve identical resistors, each of resistance r = 6.0 Ω, form the edges of a cube. Calculate the equivalent resistance in Ohms (Ω) between diagonally opposite corners of the cube.',
      si: 'එකිනෙකෙහි ප්‍රතිරෝධය r = 6.0 Ω වන සමාන ප්‍රතිරෝධක දොළහකින් ඝනකයක දාර සාදා ඇත. ඝනකයේ විකර්ණව ප්‍රතිවිරුද්ධ කොන් දෙක අතර සමක ප්‍රතිරෝධය ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 5.0,
    tolerance: 0.1,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'By symmetry, equivalent resistance across body diagonal is R_eq = (5/6) * r. Substitute r = 6.0 Ω.',
      si: 'සමමිතියට අනුව ඝනකයක දේහ විකර්ණ අන්ත අතර සමක ප්‍රතිරෝධය R_eq = (5/6) * r වේ.'
    },
    solution: {
      en: 'For a resistor cube across opposite body corners: R_eq = (5/6) r = (5/6) * 6.0 Ω = 5.0 Ω.',
      si: 'R_eq = (5/6) r = (5/6) * 6.0 = 5.0 Ω.'
    }
  },
  {
    id: 'cur-8-4-05',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'When two identical resistors of resistance R are connected first in series and then in parallel, what is the ratio of the series equivalent resistance to the parallel equivalent resistance (R_series / R_parallel)?',
      si: 'R ප්‍රතිරෝධය සහිත සමාන ප්‍රතිරෝධක දෙකක් පළමුව ශ්‍රේණිගතවද පසුව සමාන්තරගතවද සම්බන්ධ කළ විට, ශ්‍රේණිගත සමක ප්‍රතිරෝධය හා සමාන්තරගත සමක ප්‍රතිරෝධය අතර අනුපාතය (R_ශ්‍රේණි / R_සමාන්තර) කීයද?'
    },
    options: [
      { id: 'opt-a', text: { en: '4 : 1', si: '4 : 1' } },
      { id: 'opt-b', text: { en: '2 : 1', si: '2 : 1' } },
      { id: 'opt-c', text: { en: '1 : 4', si: '1 : 4' } },
      { id: 'opt-d', text: { en: '1 : 1', si: '1 : 1' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'R_series = R + R = 2R. R_parallel = R / 2. Ratio = 2R / (R/2) = 4.',
      si: 'R_ශ්‍රේණි = 2R. R_සමාන්තර = R/2. අනුපාතය = 2R / (R/2) = 4.'
    },
    solution: {
      en: 'R_series = 2R, R_parallel = R / 2. R_series / R_parallel = 2R / (R / 2) = 4.',
      si: 'R_ශ්‍රේණි = 2R, R_සමාන්තර = R/2. අනුපාතය = 4 : 1.'
    }
  },
  {
    id: 'cur-8-4-06',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A closed single loop circuit contains two opposing batteries of EMF 18 V and 6 V with internal resistances 1.0 Ω and 2.0 Ω, connected in series with an external resistor of 9.0 Ω. Calculate the current in the circuit in Amperes (A).',
      si: 'වි.ගා.බ. 18 V සහ 6 V වන එකිනෙකට ප්‍රතිවිරුද්ධ දිශාවලට බැටරි දෙකක් (අභ්‍යන්තර ප්‍රතිරෝධ පිළිවෙළින් 1.0 Ω සහ 2.0 Ω) 9.0 Ω බාහිර ප්‍රතිරෝධකයක් සමඟ ශ්‍රේණිගතව තනි ලූප පරිපථයක ඇත. පරිපථයේ ගලන ධාරාව ඇම්පියර් (A) වලින් ගණනය කරන්න.'
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'Net EMF = 18 - 6 = 12 V. Total resistance = 1.0 + 2.0 + 9.0 = 12.0 Ω. Current I = Net EMF / Total R.',
      si: 'ශුද්ධ වි.ගා.බ. = 18 - 6 = 12 V. මුළු ප්‍රතිරෝධය = 12.0 Ω. I = 12 / 12 = 1.0 A.'
    },
    solution: {
      en: 'ΣE = 18 - 6 = 12 V. ΣR = 1.0 + 2.0 + 9.0 = 12.0 Ω. By KVL: I = 12 V / 12 Ω = 1.0 A.',
      si: 'I = (18 - 6) / (1.0 + 2.0 + 9.0) = 12 / 12 = 1.0 A.'
    }
  },
  {
    id: 'cur-8-4-07',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In applying Kirchhoff’s loop rule (ΣE = ΣIR) clockwise around a mesh, if one traverses a resistor in the SAME direction as the assumed branch current, the potential change across that resistor is:',
      si: 'කර්චොෆ්ගේ ලූප නීතිය (ΣE = ΣIR) යෙදීමේදී, අනුමාන කළ ශාඛා ධාරාවේ දිශාවටම ප්‍රතිරෝධකයක් හරහා ගමන් කරන විට, එම ප්‍රතිරෝධකය හරහා විභව වෙනස:',
    },
    options: [
      { id: 'opt-a', text: { en: 'Negative (-IR), representing a potential drop', si: 'සෘණ (-IR) වේ, එනම් විභව බැස්මකි' } },
      { id: 'opt-b', text: { en: 'Positive (+IR), representing a potential rise', si: 'ධන (+IR) වේ, එනම් විභව නැග්මකි' } },
      { id: 'opt-c', text: { en: 'Zero', si: 'ශුන්‍ය වේ' } },
      { id: 'opt-d', text: { en: 'Indeterminate without knowing frequency', si: 'සංඛ්‍යාතය නොදැන කිව නොහැක' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Current flows from higher potential to lower potential. Moving with the current represents going downhill in potential.',
      si: 'ධාරාව ගලන්නේ ඉහළ විභවයේ සිට පහළ විභවයටයි. ධාරාවේ දිශාවට යනවිට විභවය අඩුවේ (-IR).'
    },
    solution: {
      en: 'Because current flows from higher to lower electric potential through passive resistors, moving along the direction of current constitutes a potential drop: ΔV = -IR.',
      si: 'ප්‍රතිරෝධකයක් ඔස්සේ ධාරාව ගලන දිශාවට ගමන් කිරීමේදී විභවය අඩුවන බැවින් එය විභව බැස්මක් (-IR) වේ.'
    }
  },
  {
    id: 'cur-8-4-08',
    competencyRef: 'Competency 8.4',
    category: 'kirchhoff-laws-networks',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A Wheatstone bridge circuit has ratio arms P = 10 Ω, Q = 20 Ω, and a variable arm R = 30 Ω. What value of unknown resistance S in Ohms (Ω) achieves a null deflection on the galvanometer?',
      si: 'විට්ස්ටන් සේතු පරිපථයක අනුපාත බාහු P = 10 Ω, Q = 20 Ω සහ විචල්‍ය බාහුව R = 30 Ω වේ. ගැල්වනෝමීටරයේ ශුන්‍ය අපගමනයක් ලබාගැනීමට අවශ්‍ය නොදන්නා ප්‍රතිරෝධය S ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 60.0,
    tolerance: 0.5,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'Balance condition: P / Q = R / S => S = (Q * R) / P.',
      si: 'සමතුලිතතා කොන්දේසිය: P / Q = R / S => S = (Q * R) / P.'
    },
    solution: {
      en: 'S = (Q * R) / P = (20 * 30) / 10 = 600 / 10 = 60.0 Ω.',
      si: 'S = (20 * 30) / 10 = 60.0 Ω.'
    }
  },

  // ==========================================
  // COMPETENCY 8.5: Potentiometer & Bridge Measurement Circuits (10 questions)
  // ==========================================
  {
    id: 'cur-8-5-01',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why is a potentiometer fundamentally superior to an ordinary moving-coil voltmeter when measuring the true open-circuit EMF of a chemical cell?',
      si: 'රසායනික කෝෂයක සැබෑ විවෘත පරිපථ වි.ගා.බ. මැනීමේදී සාමාන්‍ය සසල දඟර වෝල්ට්මීටරයකට වඩා විභවමානයක් මූලික වශයෙන්ම උසස් වන්නේ ඇයි?'
    },
    options: [
      { id: 'opt-a', text: { en: 'At null balance, it draws zero current from the test cell, measuring the true EMF with no internal voltage drop (Ir = 0).', si: 'ශුන්‍ය සමතුලිතතාවයේදී එය පරීක්ෂා කෝෂයෙන් කිසිදු ධාරාවක් නොගන්නා බැවින් අභ්‍යන්තර විභව බැස්මක් (Ir = 0) රහිතව සැබෑ වි.ගා.බ. මනින බැවිනි.' } },
      { id: 'opt-b', text: { en: 'It uses digital microprocessors.', si: 'එය ඩිජිටල් ක්ෂුද්‍ර සකසන භාවිත කරන බැවිනි.' } },
      { id: 'opt-c', text: { en: 'It can only operate on alternating currents.', si: 'එය ප්‍රත්‍යාවර්ත ධාරාවලින් පමණක් ක්‍රියා කරන බැවිනි.' } },
      { id: 'opt-d', text: { en: 'Its resistance is exactly 0 Ω.', si: 'එහි ප්‍රතිරෝධය හරියටම 0 Ω වන බැවිනි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'An ordinary voltmeter must draw a current to deflect its pointer, which causes an internal drop Ir so it measures terminal voltage V = E - Ir rather than true EMF.',
      si: 'සාමාන්‍ය වෝල්ට්මීටරයක් ක්‍රියා කිරීමට ධාරාවක් ගන්නා බැවින් එය මනින්නේ V = E - Ir මිස සැබෑ E නොවේ. විභවමානය ධාරාවක් නොගනී.'
    },
    solution: {
      en: 'At the null point, zero current flows through the galvanometer branch, eliminating any potential drop across the cell\'s internal resistance. Thus, the potentiometer functions as an ideal voltmeter of effectively infinite input resistance.',
      si: 'ශුන්‍ය සමතුලිත ලක්ෂ්‍යයේදී කෝෂය හරහා ධාරාවක් නොගලන බැවින් අභ්‍යන්තර ප්‍රතිරෝධය මත විභව බැස්මක් ඇති නොවන අතර සැබෑ වි.ගා.බ. නිරවද්‍යව ලැබේ.'
    }
  },
  {
    id: 'cur-8-5-02',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a potentiometer experiment, cell 1 of known EMF 1.50 V balances at length l_1 = 60.0 cm. An unknown cell 2 balances at length l_2 = 80.0 cm on the same uniform wire. Calculate the EMF of cell 2 in Volts (V).',
      si: 'විභවමාන පරීක්ෂණයකදී වි.ගා.බ. 1.50 V වන සම්මත කෝෂය 1 සමතුලිත වන දිග l_1 = 60.0 cm වේ. එම ඒකාකාර කම්බිය මතම නොදන්නා කෝෂය 2 සමතුලිත වන්නේ l_2 = 80.0 cm දිගකදීය. කෝෂය 2 හි වි.ගා.බ. වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 2.0,
    tolerance: 0.05,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'E₁ / E₂ = l₁ / l₂ => E₂ = E₁ * (l₂ / l₁).',
      si: 'E₁ / E₂ = l₁ / l₂ => E₂ = E₁ * (l₂ / l₁).'
    },
    solution: {
      en: 'E₂ = 1.50 * (80.0 / 60.0) = 1.50 * (4/3) = 2.0 V.',
      si: 'E₂ = 1.50 * (80.0 / 60.0) = 2.0 V.'
    }
  },
  {
    id: 'cur-8-5-03',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'To determine the internal resistance r of a cell using a potentiometer, the open-circuit balance length is found to be l_0 = 75.0 cm. When a shunt resistor R = 10.0 Ω is connected across the cell, the balance length becomes l = 60.0 cm. Calculate the internal resistance r in Ohms (Ω).',
      si: 'විභවමානයකින් කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය r සෙවීමේදී විවෘත පරිපථ සමතුලිත දිග l_0 = 75.0 cm වේ. කෝෂය හරහා R = 10.0 Ω ෂන්ට් ප්‍රතිරෝධකයක් සම්බන්ධ කළ විට සමතුලිත දිග l = 60.0 cm වේ. කෝෂයේ අභ්‍යන්තර ප්‍රතිරෝධය r ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 2.5,
    tolerance: 0.1,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'r = R * ((l_0 - l) / l). Substitute l_0 = 75, l = 60, R = 10.',
      si: 'r = R * ((l_0 - l) / l). අගයන් ආදේශ කරන්න.'
    },
    solution: {
      en: 'r = 10.0 * ((75.0 - 60.0) / 60.0) = 10.0 * (15.0 / 60.0) = 10.0 * 0.25 = 2.5 Ω.',
      si: 'r = 10.0 * (15.0 / 60.0) = 2.5 Ω.'
    }
  },
  {
    id: 'cur-8-5-04',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which condition is absolutely ESSENTIAL for obtaining a valid balance point on a potentiometer wire?',
      si: 'විභවමාන කම්බිය මත වලංගු සමතුලිත ලක්ෂ්‍යයක් ලබාගැනීම සඳහා අනිවාර්යයෙන්ම සපුරාලිය යුතු කොන්දේසිය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The EMF of the driver cell must be strictly greater than the EMF of the test cell, and their positive terminals must be connected to the same common terminal A.', si: 'ධාවක කෝෂයේ වි.ගා.බ. පරීක්ෂා කෝෂයේ වි.ගා.බ. ට වඩා විශාල විය යුතු අතර ඒවායේ ධන අග්‍ර පොදු A අග්‍රයට සම්බන්ධ විය යුතුය.' } },
      { id: 'opt-b', text: { en: 'The test cell EMF must exceed the driver cell EMF.', si: 'පරීක්ෂා කෝෂයේ වි.ගා.බ. ධාවක කෝෂයට වඩා වැඩි විය යුතුය.' } },
      { id: 'opt-c', text: { en: 'The potentiometer wire must be made of pure copper.', si: 'විභවමාන කම්බිය පිරිසිදු තඹවලින් සෑදිය යුතුය.' } },
      { id: 'opt-d', text: { en: 'The jockey must be soldered permanently to the wire.', si: 'සර්පණ විදිනය කම්බියට ස්ථිරව පෑස්සිය යුතුය.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'If driver EMF is smaller than test EMF, the potential drop across the wire can never match the test cell, so galvanometer deflection remains unidirectional.',
      si: 'ධාවක වි.ගා.බ. කුඩා නම් හෝ ධ්‍රැවීයතා වැරදි නම් කම්බිය මත විභව බැස්ම කෝෂයේ විභවයට සමාන විය නොහැක.'
    },
    solution: {
      en: 'For null deflection, the potential difference across the wire must be capable of opposing the test cell EMF (E_driver > E_test) with like poles connected to the zero-end A.',
      si: 'ශුන්‍ය සමතුලිතතාවයක් ලබා ගැනීමට නම් ධාවක වි.ගා.බ. පරීක්ෂා වි.ගා.බ. ට වඩා විශාල විය යුතු අතර සමාන ධ්‍රැව ආරම්භක A ලක්ෂ්‍යයට සම්බන්ධ කළ යුතුය.'
    }
  },
  {
    id: 'cur-8-5-05',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 1.0 m potentiometer wire has a resistance of 5.0 Ω and is connected in series with a 15.0 Ω rheostat and an accumulator of EMF 4.0 V (internal resistance negligible). Calculate the potential gradient k along the wire in Volts per metre (V m⁻¹).',
      si: 'දිග 1.0 m වන විභවමාන කම්බියක ප්‍රතිරෝධය 5.0 Ω වන අතර එය 15.0 Ω රියෝස්ටැටයක් සහ 4.0 V වි.ගා.බ. සහිත බැටරියක් සමඟ ශ්‍රේණිගතව සවි කර ඇත. කම්බිය දිගේ විභව අනුක්‍රමණය k අගය V m⁻¹ වලින් ගණනය කරන්න.'
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'V m⁻¹', si: 'V m⁻¹' },
    hint: {
      en: 'Total circuit resistance R = 5.0 + 15.0 = 20.0 Ω. Current I = 4.0 / 20.0 = 0.20 A. Voltage across wire V_wire = I * R_wire = 0.20 * 5.0 = 1.0 V. Gradient k = V_wire / 1.0 m.',
      si: 'මුළු ප්‍රතිරෝධය = 20 Ω. ධාරාව I = 0.20 A. කම්බිය හරහා වෝල්ටීයතාව = 0.20 * 5.0 = 1.0 V. අනුක්‍රමණය = 1.0 V / 1.0 m.'
    },
    solution: {
      en: 'I = 4.0 / (5.0 + 15.0) = 4.0 / 20.0 = 0.20 A. V_wire = 0.20 A * 5.0 Ω = 1.0 V. Potential gradient k = 1.0 V / 1.0 m = 1.0 V m⁻¹.',
      si: 'I = 0.20 A. V_wire = 1.0 V. විභව අනුක්‍රමණය k = 1.0 V m⁻¹.'
    }
  },
  {
    id: 'cur-8-5-06',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a meter bridge experiment, balance is obtained at length l = 40.0 cm from the left end. The standard resistance in the right gap is S = 15.0 Ω. Calculate the unknown resistance R in the left gap in Ohms (Ω).',
      si: 'මීටර් සේතු පරීක්ෂණයකදී වම් කෙළවරේ සිට l = 40.0 cm දුරකදී සමතුලිතතාවය ලැබේ. දකුණු හිදැසේ ඇති සම්මත ප්‍රතිරෝධය S = 15.0 Ω නම්, වම් හිදැසේ ඇති නොදන්නා ප්‍රතිරෝධය R ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 10.0,
    tolerance: 0.1,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'R / S = l / (100 - l) => R = S * (l / (100 - l)). Here l = 40.0, so 100 - l = 60.0.',
      si: 'R / S = l / (100 - l) => R = 15.0 * (40 / 60).'
    },
    solution: {
      en: 'R = 15.0 * (40.0 / 60.0) = 15.0 * (2/3) = 10.0 Ω.',
      si: 'R = 15.0 * (40.0 / 60.0) = 10.0 Ω.'
    }
  },
  {
    id: 'cur-8-5-07',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is a meter bridge most accurate when the balance point is adjusted close to the center of the wire (around 50 cm)?',
      si: 'මීටර් සේතුවක සමතුලිත ලක්ෂ්‍යය කම්බියේ මධ්‍යය ආසන්නයේ (50 cm අවට) පිහිටන පරිදි සකස් කළ විට වඩාත් නිරවද්‍ය වන්නේ ඇයි?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The percentage error in measuring balance length Δl/l and end-resistance errors are minimized when the ratio arms are approximately equal.', si: 'අනුපාත බාහු දළ වශයෙන් සමාන වන විට සමතුලිත දිග මැනීමේ ප්‍රතිශත දෝෂය Δl/l සහ අන්ත දෝෂ අවම වන බැවිනි.' } },
      { id: 'opt-b', text: { en: 'The wire has zero resistance at 50 cm.', si: '50 cm හිදී කම්බියේ ප්‍රතිරෝධය ශුන්‍ය වන බැවිනි.' } },
      { id: 'opt-c', text: { en: 'Galvanometer sensitivity drops to zero.', si: 'ගැල්වනෝමීටරයේ සංවේදීතාව ශුන්‍ය වන බැවිනි.' } },
      { id: 'opt-d', text: { en: 'The battery current is maximum at the midpoint.', si: 'මධ්‍ය ලක්ෂ්‍යයේදී බැටරි ධාරාව උපරිම වන බැවිනි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Fractional error in R is dR/R = dl/l + dl/(100-l). This function reaches a minimum at l = 50 cm.',
      si: 'dR/R භාගික දෝෂය l = 50 cm හිදී අවම අගයක් ගනී.'
    },
    solution: {
      en: 'The fractional uncertainty in resistance determination dR/R = dl/l + dl/(100-l) has a mathematical minimum at l = 50 cm. End-strip contact resistances also exert symmetrical, minimal effect near the center.',
      si: 'l = 50 cm හිදී දිග මැනීමේ ප්‍රතිශත දෝෂය අවම වන අතර අන්ත ප්‍රතිරෝධ දෝෂයන්ගේ බලපෑමද අවම වේ.'
    }
  },
  {
    id: 'cur-8-5-08',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A potential divider circuit consists of a 12 V DC source connected across two series resistors R_1 = 300 Ω and R_2 = 600 Ω. What is the output voltage V_out across R_2 in Volts (V)?',
      si: '12 V DC ප්‍රභවයක් ශ්‍රේණිගත R_1 = 300 Ω සහ R_2 = 600 Ω ප්‍රතිරෝධක දෙකක් හරහා සවි කර විභව බෙදුම් පරිපථයක් සාදා ඇත. R_2 හරහා ප්‍රතිදාන වෝල්ටීයතාව V_out වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 8.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_out = V_in * (R_2 / (R_1 + R_2)).',
      si: 'V_out = 12 * (600 / (300 + 600)).'
    },
    solution: {
      en: 'V_out = 12 * (600 / 900) = 12 * (2/3) = 8.0 V.',
      si: 'V_out = 12 * (600 / 900) = 8.0 V.'
    }
  },
  {
    id: 'cur-8-5-09',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In a potentiometer circuit, what happens to the balance length l if the rheostat in the driver circuit is INCREASED?',
      si: 'විභවමාන පරිපථයක ධාවක පරිපථයේ ඇති රියෝස්ටැටයේ ප්‍රතිරෝධය වැඩි කළහොත්, සමතුලිත දිග l ට කුමක් සිදුවේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Balance length increases (potentiometer becomes more sensitive)', si: 'සමතුලිත දිග වැඩි වේ (විභවමානය වඩාත් සංවේදී වේ)' } },
      { id: 'opt-b', text: { en: 'Balance length decreases', si: 'සමතුලිත දිග අඩු වේ' } },
      { id: 'opt-c', text: { en: 'Balance length remains strictly unchanged', si: 'සමතුලිත දිග නොවෙනස්ව පවතී' } },
      { id: 'opt-d', text: { en: 'The balance point immediately shifts off the wire to infinity', si: 'සමතුලිත ලක්ෂ්‍යය ක්ෂණිකව අනන්තයට යයි' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Increasing rheostat decreases driver current I_d and lowers potential gradient k. Since l = E_test / k, smaller k requires a larger balance length l.',
      si: 'රියෝස්ටැටය වැඩි කළ විට ධාරාව අඩුවී විභව අනුක්‍රමණය k අඩුවේ. l = E / k බැවින් l වැඩිවේ.'
    },
    solution: {
      en: 'Increasing driver resistance reduces driver current, decreasing potential gradient k (V/m). Since balance length l = E_test / k, a smaller gradient requires a longer wire length to balance the same EMF, increasing instrument sensitivity.',
      si: 'රියෝස්ටැටය වැඩි වන විට ධාරාව හා විභව අනුක්‍රමණය k අඩුවේ. l = E / k බැවින් සමතුලිත දිග l වැඩිවේ (සංවේදීතාව වැඩිවේ).'
    }
  },
  {
    id: 'cur-8-5-10',
    competencyRef: 'Competency 8.5',
    category: 'potentiometer-bridge',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A uniform potentiometer wire AB has length 100 cm. A thermoelectric couple gives an EMF of 4.0 mV. To measure this with a balance length of 80.0 cm, what potential gradient k in microvolts per centimetre (μV cm⁻¹) must be set on the wire?',
      si: 'ඒකාකාර විභවමාන කම්බියක් AB හි දිග 100 cm වේ. තාප විද්‍යුත් යුග්මයකින් 4.0 mV වි.ගා.බ. ක් ලැබේ. එය 80.0 cm සමතුලිත දිගකින් මැනීමට නම් කම්බිය මත සකස් කළ යුතු විභව අනුක්‍රමණය k සෙන්ටිමීටරයට මයික්‍රෝවෝල්ට් (μV cm⁻¹) වලින් ගණනය කරන්න.'
    },
    expected: 50.0,
    tolerance: 0.5,
    unit: { en: 'μV cm⁻¹', si: 'μV cm⁻¹' },
    hint: {
      en: 'k = E / l = 4.0 mV / 80.0 cm = 4000 μV / 80.0 cm.',
      si: 'k = 4.0 mV / 80.0 cm = 4000 μV / 80.0 cm.'
    },
    solution: {
      en: 'k = E / l = (4.0 × 10⁻³ V) / 80.0 cm = (4000 μV) / 80.0 cm = 50.0 μV cm⁻¹.',
      si: 'k = 4000 μV / 80.0 cm = 50.0 μV cm⁻¹.'
    }
  },

  // ==========================================
  // COMPETENCY 8.6: Electromagnetic Induction & Motional EMF (8 questions)
  // ==========================================
  {
    id: 'cur-8-6-01',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Lenz’s law of electromagnetic induction states that the direction of any induced electromotive force or current is such that it:',
      si: 'විද්‍යුත් චුම්බක ප්‍රේරණය පිළිබඳ ලෙන්ස් නියමයට අනුව, ප්‍රේරිත වි.ගා.බ. හෝ ධාරාවේ දිශාව වන්නේ එය:'
    },
    options: [
      { id: 'opt-a', text: { en: 'Always opposes the change in magnetic flux that produced it', si: 'එය ඇති කිරීමට හේතු වූ චුම්බක ස්‍රාව වෙනස්වීමට සැමවිටම විරුද්ධ වන පරිදිය' } },
      { id: 'opt-b', text: { en: 'Always reinforces and increases the changing magnetic flux', si: 'චුම්බක ස්‍රාව වෙනස්වීම තවදුරටත් වැඩි කරන පරිදිය' } },
      { id: 'opt-c', text: { en: 'Points strictly parallel to the magnetic field at all times', si: 'සැමවිටම චුම්බක ක්ෂේත්‍රයට සමාන්තර වන පරිදිය' } },
      { id: 'opt-d', text: { en: 'Always flows in a clockwise direction regardless of flux change', si: 'ස්‍රාව වෙනස කුමක් වුවත් සෑමවිටම දක්ෂිණාවර්තවය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Lenz\'s law is the electromagnetic statement of conservation of energy (indicated by the negative sign in ε = -dΦ/dt).',
      si: 'ලෙන්ස් නියමය යනු ශක්ති සංස්ථිතියේ විද්‍යුත් චුම්බක ප්‍රකාශනයයි (ε = -dΦ/dt හි සෘණ ලකුණ).'
    },
    solution: {
      en: 'Lenz\'s law states that an induced current always flows in a direction such that its magnetic field opposes the original magnetic flux change that created it, preserving conservation of energy.',
      si: 'ලෙන්ස් නියමය අනුව ප්‍රේරිත ධාරාවේ දිශාව සැමවිටම එය ඇතිවීමට හේතු වූ ස්‍රාව වෙනස්වීමට විරුද්ධ වේ.'
    }
  },
  {
    id: 'cur-8-6-02',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A horizontal copper rod of length 0.50 m moves horizontally at speed 12.0 m s⁻¹ perpendicular to a uniform vertical magnetic field of B = 0.40 T. Calculate the motional EMF induced across the rod in Volts (V).',
      si: 'දිග 0.50 m වන තිරස් තඹ දණ්ඩක් B = 0.40 T ඒකාකාර සිරස් චුම්බක ක්ෂේත්‍රයකට ලම්බකව 12.0 m s⁻¹ ප්‍රවේගයෙන් තිරස්ව චලනය වේ. දණ්ඩ දෙකෙළවර ප්‍රේරණය වන චාලක වි.ගා.බ. වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 2.4,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Motional EMF E = B * l * v.',
      si: 'චාලක වි.ගා.බ. E = B * l * v.'
    },
    solution: {
      en: 'E = B * l * v = 0.40 T * 0.50 m * 12.0 m s⁻¹ = 2.4 V.',
      si: 'E = 0.40 * 0.50 * 12.0 = 2.4 V.'
    }
  },
  {
    id: 'cur-8-6-03',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A coil of 200 turns has a cross-sectional area of 0.050 m². The magnetic flux density perpendicular to the coil increases uniformly from 0.10 T to 0.60 T in 0.25 s. Calculate the magnitude of the induced EMF in Volts (V).',
      si: 'පොටවල් 200 කින් සහ වර්ගඵලය 0.050 m² වූ දඟරයකට ලම්බක චුම්බක ස්‍රාව ඝනත්වය තත්පර 0.25 කදී 0.10 T සිට 0.60 T දක්වා ඒකාකාරව වැඩිවේ. ප්‍රේරණය වන වි.ගා.බ. හි විශාලත්වය වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 20.0,
    tolerance: 0.5,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'ΔΦ = A * ΔB = 0.050 * (0.60 - 0.10) = 0.025 Wb. Induced EMF E = N * (ΔΦ / Δt).',
      si: 'ΔΦ = A * ΔB = 0.050 * 0.50 = 0.025 Wb. E = N * (ΔΦ / Δt).'
    },
    solution: {
      en: 'ΔΦ = 0.050 * 0.50 = 0.025 Wb. E = 200 * (0.025 / 0.25) = 200 * 0.10 = 20.0 V.',
      si: 'ΔΦ = 0.025 Wb. E = 200 * (0.025 / 0.25) = 20.0 V.'
    }
  },
  {
    id: 'cur-8-6-04',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Eddy currents induced in solid metallic cores of electric motors and transformers are undesirable primarily because they cause:',
      si: 'විදුලි මෝටර් සහ පරිණාමකවල ඝන ලෝහමය හර තුළ ප්‍රේරණය වන සුළි ධාරා අයහපත් වන්නේ මූලික වශයෙන්ම ඒවා මඟින් කුමක් සිදුවන නිසාද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Joule heating energy losses (I²R) and excessive temperature rise in the core', si: 'ජූල් තාපන ශක්ති හානි (I²R) සහ හරයේ උෂ්ණත්වය අධික ලෙස ඉහළ යාම' } },
      { id: 'opt-b', text: { en: 'Radioactive emission from the metal atoms', si: 'ලෝහ පරමාණුවලින් විකිරණශීලී විමෝචනය' } },
      { id: 'opt-c', text: { en: 'Destruction of the core\'s gravitational mass', si: 'හරයේ ගුරුත්වාකර්ෂණ ස්කන්ධය විනාශ වීම' } },
      { id: 'opt-d', text: { en: 'Direct current converting permanently into static charge', si: 'සරල ධාරාව ස්ථිති ආරෝපණයක් බවට ස්ථිරව පත්වීම' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Eddy currents circulate within bulk metal, dissipating electrical energy as unwanted heat (P = I²R). Laminating the core reduces them.',
      si: 'සුළි ධාරා මඟින් ජූල් තාපය ලෙස ශක්තිය නාස්ති වේ (I²R). සිහින් තහඩු මඟින් හරය තැනීමෙන් මෙය අවම කරයි.'
    },
    solution: {
      en: 'Eddy currents circulate through the continuous cross-section of metallic cores, producing unwanted I²R resistive heating that wastes power and can overheat electrical machinery.',
      si: 'සුළි ධාරා නිසා I²R තාප හානි සිදුවී ශක්තිය නාස්ති වන අතර යන්ත්‍ර රත්වේ.'
    }
  },
  {
    id: 'cur-8-6-05',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why are transformer cores constructed from thin laminated iron sheets insulated from each other by varnish, rather than a solid block of iron?',
      si: 'පරිණාමක හරය තනි ඝන යකඩ කුට්ටියකින් නොසාදා වාර්නිෂ් වලින් පරිවරණය කරන ලද සිහින් ලැමිෙන්ට් තහඩුවලින් සකසන්නේ මන්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'To interrupt continuous circulation paths for eddy currents, greatly reducing eddy current power losses', si: 'සුළි ධාරාවල සංවෘත ගමන් මාර්ග කඩාකප්පල් කර සුළි ධාරා ක්ෂමතා හානිය බෙහෙවින් අඩු කිරීමට' } },
      { id: 'opt-b', text: { en: 'To increase the speed of light in iron', si: 'යකඩ තුළ ආලෝකයේ වේගය වැඩි කිරීමට' } },
      { id: 'opt-c', text: { en: 'To eliminate secondary voltage completely', si: 'ද්විතීයික වෝල්ටීයතාව සම්පූර්ණයෙන්ම නැති කිරීමට' } },
      { id: 'opt-d', text: { en: 'To lower the melting point of iron', si: 'යකඩවල ද්‍රවාංකය පහළ දැමීමට' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Laminations parallel to magnetic flux break the conductive loops normal to the flux, increasing effective resistance to eddy current loops.',
      si: 'ලැමිනේෂන් මඟින් ස්‍රාවයට ලම්බකව ඇති සන්නායක ලූප අවහිර කර ප්‍රතිරෝධය වැඩි කරයි.'
    },
    solution: {
      en: 'Laminating the core into thin sheets separated by insulating varnish restricts eddy currents to narrow individual loops, reducing overall eddy-current dissipation proportional to the square of sheet thickness (P_eddy ∝ t²).',
      si: 'වාර්නිෂ් මඟින් පරිවරණය කළ තහඩු භාවිත කිරීමෙන් සුළි ධාරා ලූප කුඩා වී සමස්ත සුළි ධාරා ක්ෂමතා හානිය අවම වේ.'
    }
  },
  {
    id: 'cur-8-6-06',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A bar magnet is dropped vertically through a copper ring fixed horizontally. What is the acceleration of the magnet as it falls through the ring?',
      si: 'තිරස්ව සවිකළ තඹ වළල්ලක් තුළින් දණ්ඩ චුම්බකයක් සිරස්ව පහළට වැටීමට සලස්වයි. වළල්ල තුළින් වැටෙන විට චුම්බකයේ ත්වරණය කෙබඳුද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Less than acceleration due to gravity g (a < g)', si: 'ගුරුත්වාකර්ෂණ ත්වරණය g ට වඩා අඩුය (a < g)' } },
      { id: 'opt-b', text: { en: 'Exactly equal to g (a = g)', si: 'හරියටම g ට සමානය (a = g)' } },
      { id: 'opt-c', text: { en: 'Greater than g (a > g)', si: 'g ට වඩා වැඩිය (a > g)' } },
      { id: 'opt-d', text: { en: 'Zero (a = 0) at all instants', si: 'සෑම මොහොතකම ශුන්‍ය වේ' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'By Lenz\'s law, induced currents in the copper ring repel the approaching pole and attract the receding pole, exerting an upward magnetic retarding force.',
      si: 'ලෙන්ස් නියමය අනුව වළල්ලේ ප්‍රේරණය වන ධාරාව මඟින් පහළට වැටෙන චුම්බකය මත ඉහළට තිරිංග බලයක් ඇති කරයි.'
    },
    solution: {
      en: 'By Lenz\'s law, the induced current in the copper ring produces a magnetic field that opposes the motion of the magnet (upward magnetic retarding force F_m). Therefore, net downward force F_net = mg - F_m < mg, so acceleration a < g.',
      si: 'ලෙන්ස් නියමය අනුව වළල්ල තුළ ප්‍රේරිත ධාරාව මඟින් චුම්බකයේ චලිතයට විරුද්ධව ඉහළට බලයක් යොදයි. එබැවින් ත්වරණය a < g වේ.'
    }
  },
  {
    id: 'cur-8-6-07',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An aircraft with a wingspan of 30.0 m flies horizontally at 250 m s⁻¹ where the vertical component of Earth’s magnetic field is B_V = 4.0 × 10⁻⁵ T. Calculate the potential difference induced between the wingtips in Volts (V).',
      si: 'තටු පරතරය 30.0 m වන ගුවන් යානයක් පෘථිවි චුම්බක ක්ෂේත්‍රයේ සිරස් සංරචකය B_V = 4.0 × 10⁻⁵ T වන ප්‍රදේශයක තිරස්ව 250 m s⁻¹ ප්‍රවේගයෙන් පියාසර කරයි. තටු අග්‍ර අතර ප්‍රේරණය වන විභව අන්තරය වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 0.3,
    tolerance: 0.02,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Motional EMF between wingtips cuts vertical magnetic flux: E = B_V * l * v.',
      si: 'තටු දෙකෙළවර අතර චාලක වි.ගා.බ. = B_V * l * v.'
    },
    solution: {
      en: 'E = B_V * l * v = (4.0 × 10⁻⁵ T) * (30.0 m) * (250 m s⁻¹) = 0.30 V.',
      si: 'E = 4.0 × 10⁻⁵ * 30.0 * 250 = 0.30 V.'
    }
  },
  {
    id: 'cur-8-6-08',
    competencyRef: 'Competency 8.6',
    category: 'electromagnetic-induction',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the physical quantity defined as magnetic flux linkage λ?',
      si: 'චුම්බක ස්‍රාව බන්ධනය λ ලෙස අර්ථ දක්වන භෞතික රාශිය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The product of total turns N and the magnetic flux Φ passing through each turn: λ = NΦ (unit: Weber-turns or Wb)', si: 'දඟරයේ මුළු පොටවල් ගණන N සහ එක් එක් පොටක් හරහා යන චුම්බක ස්‍රාවය Φ හි ගුණිතය: λ = NΦ (ඒකකය: වෙබර්)' } },
      { id: 'opt-b', text: { en: 'The ratio of magnetic flux to coil resistance: Φ / R', si: 'චුම්බක ස්‍රාවය දඟර ප්‍රතිරෝධයෙන් බෙදූ අගය' } },
      { id: 'opt-c', text: { en: 'The time rate of change of current: dI / dt', si: 'ධාරාව වෙනස්වීමේ සීඝ්‍රතාව' } },
      { id: 'opt-d', text: { en: 'The force per unit current length: BIl', si: 'ඒකක ධාරා දිගකට බලය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Flux linkage represents total magnetic flux linked with all N turns of a coil.',
      si: 'ස්‍රාව බන්ධනය යනු පොටවල් N සංඛ්‍යාවක් හා සම්බන්ධිත මුළු ස්‍රාවයයි (λ = NΦ).'
    },
    solution: {
      en: 'Magnetic flux linkage λ = NΦ represents the aggregate magnetic flux threading through an N-turn coil, measured in Webers (Wb).',
      si: 'චුම්බක ස්‍රාව බන්ධනය λ = NΦ වන අතර එහි ඒකකය වෙබර් (Wb) වේ.'
    }
  },

  // ==========================================
  // COMPETENCY 8.7: Alternating Current (AC) & Transformers (8 questions)
  // ==========================================
  {
    id: 'cur-8-7-01',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'The standard Sri Lankan domestic mains electricity supply is 230 V (RMS) at 50 Hz. Calculate the peak sinusoidal voltage V_0 in Volts (V). (Take √2 ≈ 1.414).',
      si: 'ශ්‍රී ලංකාවේ සම්මත ගෘහස්ථ ප්‍රධාන විදුලි සැපයුම 50 Hz හිදී 230 V (RMS) වේ. එහි උපරිම (peak) සයිනාකාර වෝල්ටීයතාව V_0 වෝල්ට් (V) වලින් ගණනය කරන්න. (√2 ≈ 1.414).'
    },
    expected: 325.2,
    tolerance: 1.0,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_0 = V_rms * √2 = 230 * 1.4142.',
      si: 'V_0 = V_rms * √2 = 230 * 1.4142.'
    },
    solution: {
      en: 'V_0 = 230 * √2 = 230 * 1.41421 = 325.27 V ≈ 325.2 V.',
      si: 'V_0 = 230 * 1.4142 = 325.2 V.'
    }
  },
  {
    id: 'cur-8-7-02',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'The Root-Mean-Square (RMS) value of an alternating current is defined as:',
      si: 'ප්‍රත්‍යාවර්ත ධාරාවක වර්ග මධ්‍යන්‍ය මූල (RMS) අගය අර්ථ දැක්වෙන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'The steady direct current that produces the same average heating power in a given resistor as the alternating current', si: 'දී ඇති ප්‍රතිරෝධකයක් තුළ ප්‍රත්‍යාවර්ත ධාරාව නිපදවන සාමාන්‍ය තාපන ක්ෂමතාවයට සමාන තාපන ක්ෂමතාවයක් ඇති කරන ස්ථාවර සරල ධාරා අගයයි' } },
      { id: 'opt-b', text: { en: 'The mathematical arithmetic average of current over one complete cycle', si: 'එක් සම්පූර්ණ චක්‍රයක් පුරා ධාරාවේ ගණිතමය අංකගණිත සාමාන්‍යයයි' } },
      { id: 'opt-c', text: { en: 'The absolute maximum instantaneous value attained by the wave', si: 'තරංගය ලඟා වන උපරිම ක්ෂණික අගයයි' } },
      { id: 'opt-d', text: { en: 'The current that discharges a capacitor in one period', si: 'එක් ආවර්ත කාලයකදී ධාරිත්‍රකයක් විසර්ජනය කරන ධාරාවයි' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The arithmetic average over a full cycle of AC is zero. RMS is defined through Joule heating: P = I_rms² R.',
      si: 'පූර්ණ චක්‍රයක සාමාන්‍යය ශුන්‍ය වේ. RMS අගය අර්ථ දැක්වෙන්නේ සමාන ජූල් තාපන ක්ෂමතාවයක් ලබාදෙන DC අගය ලෙසිනි.'
    },
    solution: {
      en: 'The RMS value of an alternating current is that value of steady direct current which dissipates heat at the same average rate in a given resistor: P_avg = I_rms² R.',
      si: 'දී ඇති ප්‍රතිරෝධකයක AC ධාරාව මඟින් තාපය ජනනය කරන සාමාන්‍ය සීඝ්‍රතාවයට සමාන සීඝ්‍රතාවයකින් තාපය ජනනය කරන DC ධාරාවේ අගය RMS අගයයි.'
    }
  },
  {
    id: 'cur-8-7-03',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'An ideal step-down transformer has 1200 turns in the primary winding and 60 turns in the secondary winding. If the primary is connected to a 240 V AC supply, calculate the secondary output voltage in Volts (V).',
      si: 'පරිපූර්ණ ස්ටෙප්-ඩවුන් පරිණාමකයක ප්‍රාථමිකයේ පොටවල් 1200 ක් සහ ද්විතීයිකයේ පොටවල් 60 ක් ඇත. ප්‍රාථමිකය 240 V AC සැපයුමකට සම්බන්ධ කළහොත්, ද්විතීයික ප්‍රතිදාන වෝල්ටීයතාව වෝල්ට් (V) වලින් ගණනය කරන්න.'
    },
    expected: 12.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_s / V_p = N_s / N_p => V_s = V_p * (N_s / N_p).',
      si: 'V_s = 240 * (60 / 1200).'
    },
    solution: {
      en: 'V_s = 240 * (60 / 1200) = 240 * (1 / 20) = 12.0 V.',
      si: 'V_s = 240 * (60 / 1200) = 12.0 V.'
    }
  },
  {
    id: 'cur-8-7-04',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A transformer operates with an input of 230 V and 0.50 A. The secondary delivers 11.5 V and 8.0 A to an electric heater. Calculate the efficiency of the transformer as a percentage (%).',
      si: 'පරිණාමකයක් 230 V සහ 0.50 A ආදානයක් සහිතව ක්‍රියා කරයි. ද්විතීයිකය මඟින් 11.5 V සහ 8.0 A විදුලි හීටරයකට ලබා දෙයි. පරිණාමකයේ කාර්යක්ෂමතාව ප්‍රතිශතයක් (%) ලෙස ගණනය කරන්න.'
    },
    expected: 80.0,
    tolerance: 0.5,
    unit: { en: '%', si: '%' },
    hint: {
      en: 'P_in = V_p * I_p = 230 * 0.50 = 115 W. P_out = V_s * I_s = 11.5 * 8.0 = 92 W. Efficiency η = (P_out / P_in) * 100%.',
      si: 'P_ආදාන = 230 * 0.50 = 115 W. P_ප්‍රතිදාන = 11.5 * 8.0 = 92 W. කාර්යක්ෂමතාව = (92 / 115) * 100%.'
    },
    solution: {
      en: 'P_in = 230 * 0.50 = 115 W. P_out = 11.5 * 8.0 = 92.0 W. Efficiency η = (92.0 / 115.0) * 100% = 80.0%.',
      si: 'P_in = 115 W. P_out = 92 W. η = (92 / 115) * 100 = 80.0%.'
    }
  },
  {
    id: 'cur-8-7-05',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Electrical power is transmitted over long distances from generating stations to cities at very high voltages (e.g. 132 kV or 220 kV) primarily because:',
      si: 'විදුලි ජනන මධ්‍යස්ථානවල සිට නගර වෙත දිගු දුරක් විදුලි බලය සම්ප්‍රේෂණය කරන්නේ ඉතා ඉහළ වෝල්ටීයතාවලින් (132 kV හෝ 220 kV) මූලික වශයෙන්ම කුමන හේතුව නිසාද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Higher voltage reduces transmission current for a given power (I = P/V), drastically lowering Joule heating losses in the cables (P_loss = I²R).', si: 'ඉහළ වෝල්ටීයතාව මඟින් සම්ප්‍රේෂණ ධාරාව අඩු කරන බැවින් (I = P/V), රැහැන්වල ජූල් තාපන හානිය (P_loss = I²R) බෙහෙවින් අවම වන නිසාය.' } },
      { id: 'opt-b', text: { en: 'High voltage makes electricity travel faster than the speed of light.', si: 'ඉහළ වෝල්ටීයතාව නිසා ආලෝකයේ වේගයට වඩා වේගයෙන් විදුලිය ගමන් කරන බැවිනි.' } },
      { id: 'opt-c', text: { en: 'Thinner air insulation is needed at high voltage.', si: 'ඉහළ වෝල්ටීයතාවයේදී අඩු වායු පරිවරණයක් අවශ්‍ය වන බැවිනි.' } },
      { id: 'opt-d', text: { en: 'High voltage converts AC into DC automatically.', si: 'ඉහළ වෝල්ටීයතාව මඟින් AC ස්වයංක්‍රීයව DC බවට පත්වන බැවිනි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Power transmitted is P = VI. For fixed P, increasing V by a factor of k reduces I by k, which reduces I²R power loss by k²!',
      si: 'P = VI. V අගය k ගුණයකින් වැඩි කළ විට ධාරාව I අගය k ගුණයකින් අඩුවේ, එවිට I²R හානිය k² ගුණයකින් අඩුවේ!'
    },
    solution: {
      en: 'For transmitting fixed power P, transmission current is I = P/V. Stepping up voltage by factor k reduces current by 1/k, thereby reducing line resistive dissipation P_loss = I²R by a factor of 1/k².',
      si: 'P = VI බැවින් වෝල්ටීයතාව වැඩි කළ විට ධාරාව අඩු වී රැහැන්වල I²R තාප හානිය විශාල ලෙස අඩුවේ.'
    }
  },
  {
    id: 'cur-8-7-06',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why CANNOT a static transformer operate on steady direct current (DC)?',
      si: 'ස්ථිතික පරිණාමකයකට ස්ථාවර සරල ධාරාවකින් (DC) ක්‍රියා කළ නොහැක්කේ ඇයි?'
    },
    options: [
      { id: 'opt-a', text: { en: 'A steady DC produces a static magnetic flux (dΦ/dt = 0), so no induced EMF is created in the secondary coil by Faraday’s law.', si: 'ස්ථාවර DC මඟින් ඇති කරන්නේ ස්ථිතික චුම්බක ස්‍රාවයක් (dΦ/dt = 0) බැවින් ෆැරඩේ නියමයට අනුව ද්විතීයිකයේ කිසිදු වි.ගා.බ. ක් ප්‍රේරණය නොවන නිසාය.' } },
      { id: 'opt-b', text: { en: 'DC currents repel iron core molecules.', si: 'DC ධාරා මඟින් යකඩ අණු විකර්ෂණය කරන නිසාය.' } },
      { id: 'opt-c', text: { en: 'DC voltage is always zero in copper.', si: 'තඹ තුළ DC වෝල්ටීයතාව සැමවිටම ශුන්‍ය වන නිසාය.' } },
      { id: 'opt-d', text: { en: 'Transformers only have resistors and no inductors.', si: 'පරිණාමකවල ප්‍රේරක නොමැති නිසාය.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Electromagnetic induction requires a changing magnetic flux (dΦ/dt ≠ 0). A steady DC creates a constant field.',
      si: 'විද්‍යුත් චුම්බක ප්‍රේරණය සඳහා ස්‍රාව වෙනසක් (dΦ/dt ≠ 0) අවශ්‍ය වේ. ස්ථාවර DC මඟින් ස්‍රාව වෙනසක් ඇති නොවේ.'
    },
    solution: {
      en: 'By Faraday’s law, secondary EMF is proportional to the time rate of change of magnetic flux (ε = -N dΦ/dt). A steady DC produces a constant, unvarying magnetic flux so dΦ/dt = 0 and secondary induced EMF is zero (furthermore, lack of back-EMF causes primary winding to overheat).',
      si: 'ද්විතීයිකයේ වි.ගා.බ. ප්‍රේරණය වීමට ස්‍රාවය වෙනස් විය යුතුය (dΦ/dt). ස්ථාවර DC මඟින් ස්‍රාව වෙනසක් ඇති නොවන බැවින් ප්‍රේරණයක් සිදු නොවේ.'
    }
  },
  {
    id: 'cur-8-7-07',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In an ideal step-up transformer, the primary coil has 200 turns and secondary has 1000 turns. If the secondary delivers 2.0 A to a resistive load, what is the current in the primary coil in Amperes (A)?',
      si: 'පරිපූර්ණ ස්ටෙප්-අප් පරිණාමකයක ප්‍රාථමිකයේ පොටවල් 200 ක් සහ ද්විතීයිකයේ පොටවල් 1000 ක් ඇත. ද්විතීයිකය මඟින් 2.0 A ධාරාවක් භාරයකට සපයයි නම්, ප්‍රාථමික දඟරයේ ගලන ධාරාව ඇම්පියර් (A) වලින් ගණනය කරන්න.'
    },
    expected: 10.0,
    tolerance: 0.2,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'For an ideal transformer, V_p * I_p = V_s * I_s  =>  I_p / I_s = N_s / N_p.',
      si: 'I_p / I_s = N_s / N_p => I_p = 2.0 * (1000 / 200).'
    },
    solution: {
      en: 'I_p = I_s * (N_s / N_p) = 2.0 * (1000 / 200) = 2.0 * 5 = 10.0 A.',
      si: 'I_p = 2.0 * (1000 / 200) = 10.0 A.'
    }
  },
  {
    id: 'cur-8-7-08',
    competencyRef: 'Competency 8.6',
    category: 'ac-transformers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which of the following is NOT one of the main physical sources of power loss in practical electrical transformers?',
      si: 'ප්‍රායෝගික විද්‍යුත් පරිණාමක තුළ සිදුවන ප්‍රධාන ක්ෂමතා හානි ප්‍රභවයක් නොවන්නේ පහත සඳහන් දෑ අතුරින් කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Nuclear fusion of core protons into helium', si: 'හරයේ ප්‍රෝටෝන හීලියම් බවට න්‍යෂ්ටික විලයනය වීම' } },
      { id: 'opt-b', text: { en: 'Joule heating in primary and secondary copper windings (copper loss, I²R)', si: 'ප්‍රාථමික හා ද්විතීයික තඹ දඟරවල ජූල් තාපනය (තඹ හානි, I²R)' } },
      { id: 'opt-c', text: { en: 'Eddy current heating inside the iron core', si: 'යකඩ හරය තුළ සුළි ධාරා තාපනය' } },
      { id: 'opt-d', text: { en: 'Hysteresis energy loss from continuous cyclic magnetic reversal of the iron core', si: 'යකඩ හරයේ අඛණ්ඩ චක්‍රීය චුම්බක ප්‍රතිවර්තනය නිසා වන හිස්ටරෙසිස් ශක්ති හානිය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The four real transformer losses are: copper loss (I²R), eddy current loss, hysteresis loss, and magnetic flux leakage.',
      si: 'සැබෑ පරිණාමක හානි හතරකි: තඹ හානි, සුළි ධාරා හානි, හිස්ටරෙසිස් හානි සහ ස්‍රාව කාන්දු.'
    },
    solution: {
      en: 'Nuclear fusion does not occur in transformers. Real transformer losses consist of copper resistive losses (I²R), core eddy currents, magnetic hysteresis cycles, and stray flux leakage.',
      si: 'පරිණාමකවල න්‍යෂ්ටික ප්‍රතික්‍රියා සිදු නොවේ. සැබෑ හානි වන්නේ තඹ හානි (I²R), සුළි ධාරා හානි, හිස්ටරෙසිස් හානි සහ ස්‍රාව කාන්දුවයි.'
    }
  },
{
  "id": "cur-sq01",
  "competencyRef": "Competency 8.1",
  "category": "current-drift-velocity",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A cylindrical copper wire has cross-sectional area A = 1.0 × 10⁻⁶ m² (1.0 mm²) and carries a steady current I = 3.2 A. The conduction electron density in copper is n = 8.5 × 10²⁸ m⁻³ and elementary charge e = 1.60 × 10⁻¹⁹ C. (a) Derive the relationship I = n A e v_d between current and electron drift velocity. (b) Calculate the drift speed v_d of the electrons in this wire. (c) Explain why an electric lamp turns on virtually instantaneously when a switch is closed, despite the extremely small drift speed of electrons.",
    "si": "හරස්කඩ වර්ගඵලය A = 1.0 × 10⁻⁶ m² (1.0 mm²) වන සිලින්ඩරාකාර තඹ කම්බියක් ඔස්සේ I = 3.2 A ඒකාකාර ධාරාවක් ගලා යයි. තඹවල සන්නායක ඉලෙක්ට්‍රෝන ඝනත්වය n = 8.5 × 10²⁸ m⁻³ වන අතර මූලික ආරෝපණය e = 1.60 × 10⁻¹⁹ C වේ. (a) ධාරාව සහ ඉලෙක්ට්‍රෝන ප්‍රවාහ ප්‍රවේගය අතර I = n A e v_d සම්බන්ධතාව ගොඩනගන්න. (b) මෙම කම්බියේ ඉලෙක්ට්‍රෝනවල ප්‍රවාහ වේගය v_d ගණනය කරන්න. (c) ඉලෙක්ට්‍රෝනවල ප්‍රවාහ වේගය අතිශයින් කුඩා වුවද, ස්විචය දැමූ සැනින් විදුලි බුබුලක් ක්ෂණිකව දැල්වෙන්නේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive the equation I = n A e v_d.",
        "si": "I = n A e v_d සමීකරණය ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Consider a length L of conductor of cross-sectional area A. Volume V = A L. Total number of free electrons in this volume is N = n A L. Total charge is Q = N e = n A L e. The time taken for all these electrons to drift across length L at speed v_d is t = L / v_d. Therefore, current I = Q / t = (n A L e) / (L / v_d) = n A e v_d.",
        "si": "හරස්කඩ වර්ගඵලය A වන සන්නායකයක L දිගක් සලකන්න. පරිමාව V = A L. මෙම පරිමාවේ ඇති මුළු නිදහස් ඉලෙක්ට්‍රෝන ගණන N = n A L වේ. මුළු ආරෝපණය Q = n A L e වේ. v_d ප්‍රවාහ වේගයෙන් L දිගක් පසුකිරීමට ගතවන කාලය t = L / v_d වේ. එබැවින් ධාරාව I = Q / t = (n A L e) / (L / v_d) = n A e v_d."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Expresses volume AL and total charge Q = n A L e",
            "si": "පරිමාව AL සහ මුළු ආරෝපණය Q = n A L e ප්‍රකාශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Time to cross length t = L / v_d",
            "si": "දිග පසුකිරීමට ගතවන කාලය t = L / v_d"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Current I = Q/t yielding I = n A e v_d",
            "si": "I = Q/t මගින් I = n A e v_d ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the numerical drift speed v_d in m s⁻¹.",
        "si": "ප්‍රවාහ වේගය v_d හි සංඛ්‍යාත්මක අගය m s⁻¹ වලින් ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "v_d = I / (n A e) = 3.2 A / [ (8.5 × 10²⁸ m⁻³) × (1.0 × 10⁻⁶ m²) × (1.60 × 10⁻¹⁹ C) ] = 3.2 / [ 1.36 × 10⁴ ] = 2.35 × 10⁻⁴ m s⁻¹ = 0.235 mm s⁻¹.",
        "si": "v_d = I / (n A e) = 3.2 / (8.5 × 10²⁸ × 1.0 × 10⁻⁶ × 1.60 × 10⁻¹⁹) = 3.2 / 1.36 × 10⁴ = 2.35 × 10⁻⁴ m s⁻¹ (0.235 mm s⁻¹)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Rearranges formula v_d = I / (n A e)",
            "si": "v_d = I / (n A e) ලෙස සූත්‍රය සකස් කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct substitution of parameters",
            "si": "පරාමිතීන් නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains v_d = 2.35 × 10⁻⁴ m s⁻¹ (or 0.235 mm s⁻¹)",
            "si": "v_d = 2.35 × 10⁻⁴ m s⁻¹ ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why the bulb illuminates almost instantaneously.",
        "si": "බල්බය ක්ෂණිකව දැල්වෙන්නේ මන්දැයි පැහැදිලි කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "When the switch is closed, an electric field is established almost instantaneously throughout the entire circuit, propagating along the conductors at nearly the speed of light (~3 × 10⁸ m s⁻¹). Conduction electrons already present everywhere in the filament immediately experience this field and begin to drift simultaneously. The lighting of the lamp does not depend on electrons travelling all the way from the switch/source to the bulb.",
        "si": "ස්විචය දැමූ විට, ආලෝකයේ වේගයට (~3 × 10⁸ m s⁻¹) ආසන්න වේගයකින් සම්පූර්ණ පරිපථය පුරා ක්ෂණිකව විද්‍යුත් ක්ෂේත්‍රයක් ස්ථාපිත වේ. සූත්‍රිකාවේ ඒ වන විටත් පවතින ඉලෙක්ට්‍රෝන වහාම මෙම ක්ෂේත්‍රය හඳුනාගෙන එකවර ප්‍රවාහය වීමට පටන් ගනී. බල්බය දැල්වීමට ස්විචයේ සිට ඉලෙක්ට්‍රෝන බල්බය දක්වා ගමන් කිරීම අවශ්‍ය නොවේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Electric field propagates at nearly the speed of light",
            "si": "විද්‍යුත් ක්ෂේත්‍රය ආලෝකයේ වේගයෙන් සම්ප්‍රේෂණය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Electrons are already present throughout all circuit components",
            "si": "සියලුම සන්නායක කොටස් තුළ දැනටමත් ඉලෙක්ට්‍රෝන පැවතීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "All electrons begin drifting simultaneously across the circuit",
            "si": "පරිපථය පුරා සියලු ඉලෙක්ට්‍රෝන එකවර චලනය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Lamp does not await transit of individual electrons from battery",
            "si": "බැටරියේ සිට ඉලෙක්ට්‍රෝන පැමිණෙන තෙක් බලා සිටීමට අවශ්‍ය නොවීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Current is related to drift velocity by I = n A e v_d; the electric signal propagates at the speed of light, initiating simultaneous drift everywhere.",
    "si": "ධාරාව ප්‍රවාහ ප්‍රවේගයට I = n A e v_d මගින් සම්බන්ධ වේ; විද්‍යුත් සංඥාව ආලෝකයේ වේගයෙන් ගමන් කර සෑම තැනකම එකවර චලිතය අරඹයි."
  },
  "solution": {
    "en": "I = n A e v_d. v_d = 2.35 × 10⁻⁴ m s⁻¹ (0.235 mm s⁻¹). Electric field propagates at ~3 × 10⁸ m s⁻¹, setting electrons into motion simultaneously everywhere.",
    "si": "I = n A e v_d. v_d = 2.35 × 10⁻⁴ m s⁻¹. විද්‍යුත් ක්ෂේත්‍රය ආලෝකයේ වේගයෙන් සම්ප්‍රේෂණය වන බැවින් සියලු ඉලෙක්ට්‍රෝන එකවර චලිතය අරඹයි."
  }
},
{
  "id": "cur-sq02",
  "competencyRef": "Competency 8.1",
  "category": "resistance-temperature",
  "difficulty": "intermediate",
  "type": "structured",
  "question": {
    "en": "A platinum resistance thermometer coil has a resistance R₀ = 100.0 Ω at 0 °C. When immersed in a boiling liquid, its resistance increases to R = 138.5 Ω. The temperature coefficient of resistance of platinum is α = 3.92 × 10⁻³ °C⁻¹. (a) Define the temperature coefficient of resistance α. (b) Calculate the temperature θ of the boiling liquid. (c) Explain the microscopic reason why the resistance of metallic conductors increases with temperature, whereas the resistance of intrinsic semiconductors decreases.",
    "si": "ප්ලැටිනම් ප්‍රතිරෝධ උෂ්ණත්වමානයක 0 °C හිදී ප්‍රතිරෝධය R₀ = 100.0 Ω වේ. එය තාපාංකයේ පවතින ද්‍රවයක ගිල්වූ විට එහි ප්‍රතිරෝධය R = 138.5 Ω දක්වා වැඩි වේ. ප්ලැටිනම්වල ප්‍රතිරෝධ උෂ්ණත්ව සංගුණකය α = 3.92 × 10⁻³ °C⁻¹ වේ. (a) ප්‍රතිරෝධ උෂ්ණත්ව සංගුණකය α අර්ථ දක්වන්න. (b) තාපාංකයේ ඇති ද්‍රවයේ උෂ්ණත්වය θ ගණනය කරන්න. (c) උෂ්ණත්වය වැඩි වන විට ලෝහමය සන්නායකවල ප්‍රතිරෝධය වැඩි වන අතර සහජ අර්ධ සන්නායකවල ප්‍රතිරෝධය අඩු වන්නේ මන්දැයි අන්වීක්ෂීය මට්ටමින් පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Define temperature coefficient of resistance α.",
        "si": "ප්‍රතිරෝධ උෂ්ණත්ව සංගුණකය α අර්ථ දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "The temperature coefficient of resistance α is defined as the fractional increase in resistance per degree rise in temperature relative to its resistance at 0 °C: α = (R_θ - R₀) / (R₀ θ). Its SI unit is °C⁻¹ (or K⁻¹).",
        "si": "ප්‍රතිරෝධ උෂ්ණත්ව සංගුණකය α යනු, 0 °C හිදී ප්‍රතිරෝධයට සාපේක්ෂව උෂ්ණත්වය සෙල්සියස් අංශකයකින් (හෝ කෙල්විනයකින්) වැඩිවීමේදී ප්‍රතිරෝධයේ සිදුවන භාගික වැඩිවීමයි: α = (R_θ - R₀) / (R₀ θ). ඒකකය °C⁻¹ (හෝ K⁻¹) වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Increase in resistance per unit temperature rise",
            "si": "ඒකක උෂ්ණත්ව වැඩිවීමකට ප්‍රතිරෝධයේ වැඩිවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Per unit resistance at 0 °C",
            "si": "0 °C හි ප්‍රතිරෝධය ඒකකයකට"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct formula and unit °C⁻¹",
            "si": "නිවැරදි සූත්‍රය සහ °C⁻¹ ඒකකය"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate the liquid temperature θ.",
        "si": "ද්‍රවයේ උෂ්ණත්වය θ ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Formula: R_θ = R₀ (1 + α θ) => θ = (R_θ - R₀) / (R₀ α). Calculation: θ = (138.5 Ω - 100.0 Ω) / (100.0 Ω × 3.92 × 10⁻³ °C⁻¹) = 38.5 / 0.392 = 98.2 °C.",
        "si": "R_θ = R₀ (1 + α θ) => θ = (R_θ - R₀) / (R₀ α) = (138.5 - 100.0) / (100.0 × 3.92 × 10⁻³) = 38.5 / 0.392 = 98.2 °C."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula θ = (R_θ - R₀) / (R₀ α)",
            "si": "θ = (R_θ - R₀) / (R₀ α) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitution of given values",
            "si": "අගයන් නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains θ = 98.2 °C",
            "si": "θ = 98.2 °C ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain contrasting temperature effects in metals versus intrinsic semiconductors.",
        "si": "ලෝහ සහ අර්ධ සන්නායකවල ප්‍රතිවිරුද්ධ උෂ්ණත්ව චර්යාවන් පැහැදිලි කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "In metals, the free electron density n is constant. As temperature rises, lattice positive ions vibrate with greater amplitude, increasing the collision frequency of conduction electrons (decreasing relaxation time τ). Hence resistivity ρ = m / (n e² τ) increases, so resistance increases (positive α). In semiconductors, increasing temperature thermal energy excites electrons across the band gap from the valence band to conduction band, causing an exponential increase in charge carrier density n. This massive increase in n overwhelmingly dominates any decrease in collision time, causing overall resistivity to decrease sharply (negative α).",
        "si": "ලෝහවල නිදහස් ඉලෙක්ට්‍රෝන ඝනත්වය n නියතය. උෂ්ණත්වය වැඩි වන විට දැලිස් අයන වැඩි විස්තාරයකින් කම්පනය වී ඉලෙක්ට්‍රෝන ගැටුම් සංඛ්‍යාතය වැඩි කරයි (විශ්‍රාන්ති කාලය τ අඩුවේ). එබැවින් ප්‍රතිරෝධකතාව ρ = m / (n e² τ) වැඩි වී ප්‍රතිරෝධය වැඩි වේ (ධන α). අර්ධ සන්නායකවල උෂ්ණත්වය වැඩි වන විට තාප ශක්තියෙන් සහසංයුජ බන්ධන බිඳී සන්නායක පටියට ඉලෙක්ට්‍රෝන පැනීමෙන් ආරෝපණ වාහක ඝනත්වය n ඝාතීයව ඉහළ යයි. n හි අතිමහත් වැඩිවීම නිසා සමස්ත ප්‍රතිරෝධය තියුනු ලෙස අඩුවේ (සෘණ α)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Metals: constant n, increased lattice vibrations increase collisions / reduce τ",
            "si": "ලෝහ: n නියතය, දැලිස් කම්පන වැඩිවීමෙන් ගැටුම් වැඩිවේ / τ අඩුවේ"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes resistance increases in metals (positive α)",
            "si": "ලෝහවල ප්‍රතිරෝධය වැඩිවන බව නිගමනය (ධන α)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Semiconductors: thermal breaking of bonds creates electron-hole pairs",
            "si": "අර්ධ සන්නායක: බන්ධන බිඳී ඉලෙක්ට්‍රෝන-කුහර යුගල ජනනය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Exponential rise in n dominates, dramatically lowering resistance (negative α)",
            "si": "වාහක ඝනත්වය n සීඝ්‍රයෙන් වැඩිවීමෙන් ප්‍රතිරෝධය අඩුවීම (සෘණ α)"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "R_θ = R₀(1 + αθ); metals have positive α (more scattering), while semiconductors have negative α (more free carriers).",
    "si": "R_θ = R₀(1 + αθ); ලෝහවලට ධන α (ගැටුම් වැඩිවීම) ඇති අතර අර්ධ සන්නායකවලට සෘණ α (වාහක වැඩිවීම) ඇත."
  },
  "solution": {
    "en": "θ = 98.2 °C. Metals: lattice scattering dominates (R increases). Semiconductors: carrier generation dominates (R decreases).",
    "si": "θ = 98.2 °C. ලෝහවල ගැටුම් වැඩිවීමෙන් R වැඩි වේ; අර්ධ සන්නායකවල වාහක ජනනයෙන් R අඩුවේ."
  }
},
{
  "id": "cur-sq03",
  "competencyRef": "Competency 8.3",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In an experiment to determine the electromotive force (E) and internal resistance (r) of a dry cell, a student connects the cell across a variable load resistor R in series with an ammeter, and places a voltmeter across the terminals of the cell. (a) Distinguish clearly between the electromotive force (E.M.F.) of a source and its terminal potential difference (V). (b) Derive the linear equation relating terminal potential difference V and load current I. (c) In the experiment, the following pairs of (I, V) were obtained: (0.20 A, 1.40 V) and (0.80 A, 1.10 V). Calculate: (i) the internal resistance r of the cell, (ii) the E.M.F. E of the cell, (iii) the short-circuit current of the cell.",
    "si": "වියළි කෝෂයක විද්‍යුත් ගාමක බලය (E) සහ අභ්‍යන්තර ප්‍රතිරෝධය (r) නිර්ණය කිරීමේ පරීක්ෂණයකදී, ශිෂ්‍යයෙකු ඇමීටරයක් සමග ශ්‍රේණිගතව විචල්‍ය ප්‍රතිරෝධකයක් (R) කෝෂයට සම්බන්ධ කර, කෝෂයේ අග්‍ර හරහා වෝල්ට්මීටරයක් සවි කරයි. (a) ප්‍රභවයක විද්‍යුත් ගාමක බලය (වි.ගා.බ.) සහ අග්‍රස්ථ විභව අන්තරය (V) අතර පැහැදිලි වෙනස දක්වන්න. (b) අග්‍රස්ථ විභව අන්තරය V සහ ධාරාව I අතර රේඛීය සමීකරණය ගොඩනගන්න. (c) පරීක්ෂණයේදී පහත (I, V) යුගල ලැබිණි: (0.20 A, 1.40 V) සහ (0.80 A, 1.10 V). (i) කෝෂයේ අභ්‍යන්තර ප්‍රතිරෝධය r, (ii) කෝෂයේ වි.ගා.බ. E, (iii) ලඝුපරිපථ ධාරාව ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Distinguish between E.M.F. and terminal potential difference.",
        "si": "වි.ගා.බ. සහ අග්‍රස්ථ විභව අන්තරය අතර වෙනස දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Electromotive force (E.M.F., E): The total energy converted from non-electrical forms (e.g. chemical) into electrical energy per unit charge driving charge around the complete closed circuit. Terminal potential difference (V): The electrical energy converted into other forms per unit charge across the external circuit terminals when current is being drawn.",
        "si": "විද්‍යුත් ගාමක බලය (E): සම්පූර්ණ සංවෘත පරිපථය වටා ඒකක ආරෝපණයක් ගෙනයාමේදී වෙනත් ශක්ති විශේෂයකින් (රසායනික) විද්‍යුත් ශක්තිය බවට පරිවර්තනය වන මුළු ශක්තියයි. අග්‍රස්ථ විභව අන්තරය (V): ධාරාවක් ලබා ගන්නා අවස්ථාවක බාහිර පරිපථයේ අග්‍ර අතර ඒකක ආරෝපණයකින් වෙනත් ශක්ති බවට පත්වන ශක්තියයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "E.M.F. is total energy converted into electrical per unit charge around full circuit",
            "si": "වි.ගා.බ. යනු සම්පූර්ණ පරිපථය සඳහා ඒකක ආරෝපණයකට විද්‍යුත් ශක්තියට පත්වන ශක්තියයි"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Terminal PD is energy transferred across external circuit per unit charge",
            "si": "අග්‍රස්ථ විභවය යනු බාහිර පරිපථයේ ඒකක ආරෝපණයකින් වැයවන ශක්තියයි"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "States V < E when delivering current due to internal drop Ir",
            "si": "ධාරාව ලබා දෙන විට Ir අභ්‍යන්තර බැස්ම නිසා V < E බව"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Derive linear equation V = E - I r.",
        "si": "V = E - I r රේඛීය සමීකරණය ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "In a complete circuit with external load R and internal resistance r: E = I R + I r. Since terminal potential difference across external load is V = I R, substituting gives: E = V + I r => V = -r I + E. This is of linear form y = mx + c where vertical intercept is E and slope is -r.",
        "si": "බාහිර R සහ අභ්‍යන්තර r සහිත පරිපථයක: E = I R + I r. බාහිර අග්‍ර හරහා විභවය V = I R බැවින්: E = V + I r => V = -r I + E. මෙය y = mx + c ආකාරයේ රේඛීය සමීකරණයක් වන අතර අන්තඃඛණ්ඩය E ද අනුක්‍රමණය -r ද වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Total energy equation E = IR + Ir",
            "si": "මුළු ශක්ති සමීකරණය E = IR + Ir"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitutes V = IR to get V = E - Ir",
            "si": "V = IR ආදේශ කර V = E - Ir ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies slope as -r and intercept as E",
            "si": "අනුක්‍රමණය -r සහ අන්තඃඛණ්ඩය E බව හඳුනා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate internal resistance r, E.M.F. E, and short-circuit current.",
        "si": "අභ්‍යන්තර ප්‍රතිරෝධය r, වි.ගා.බ. E, සහ ලඝුපරිපථ ධාරාව ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) Slope m = (V₂ - V₁) / (I₂ - I₁) = (1.10 - 1.40) / (0.80 - 0.20) = -0.30 / 0.60 = -0.50 V A⁻¹. Since slope = -r, internal resistance r = 0.50 Ω. (ii) E = V + I r = 1.40 V + (0.20 A × 0.50 Ω) = 1.40 + 0.10 = 1.50 V. (Check with point 2: 1.10 + 0.80 × 0.50 = 1.50 V). (iii) Short-circuit current (when R = 0, so V = 0): I_sc = E / r = 1.50 V / 0.50 Ω = 3.0 A.",
        "si": "(i) අනුක්‍රමණය = (1.10 - 1.40) / (0.80 - 0.20) = -0.30 / 0.60 = -0.50. අනුක්‍රමණය = -r බැවින් r = 0.50 Ω. (ii) E = V + Ir = 1.40 + (0.20 × 0.50) = 1.50 V. (iii) ලඝුපරිපථ ධාරාව: I_sc = E / r = 1.50 / 0.50 = 3.0 A."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Calculates slope to find internal resistance r = 0.50 Ω",
            "si": "අනුක්‍රමණයෙන් r = 0.50 Ω ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates E.M.F. E = 1.50 V",
            "si": "වි.ගා.බ. E = 1.50 V ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Short-circuit formula I_sc = E / r",
            "si": "ලඝුපරිපථ සූත්‍රය I_sc = E / r"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains I_sc = 3.0 A",
            "si": "I_sc = 3.0 A ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "V = E - Ir is linear: slope is -r and y-intercept is E; short-circuit current occurs when R = 0, giving I = E/r.",
    "si": "V = E - Ir රේඛීය වේ: අනුක්‍රමණය -r වන අතර අන්තඃඛණ්ඩය E වේ; ලඝුපරිපථයේදී R = 0 බැවින් I = E/r."
  },
  "solution": {
    "en": "r = 0.50 Ω; E = 1.50 V; I_sc = 3.0 A. V-I graph has vertical intercept E and negative slope -r.",
    "si": "r = 0.50 Ω; E = 1.50 V; I_sc = 3.0 A. V-I ප්‍රස්තාරයේ අන්තඃඛණ්ඩය E වන අතර අනුක්‍රමණය -r වේ."
  }
},
{
  "id": "cur-sq04",
  "competencyRef": "Competency 8.2",
  "category": "dc-energy-power",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A DC voltage source of constant E.M.F. E = 12.0 V and internal resistance r = 3.0 Ω is connected across an external variable resistor of resistance R. (a) Express the power P delivered to the external resistor in terms of E, r, and R. (b) Prove mathematically that the power delivered to the external resistor is a maximum when R = r (Maximum Power Transfer Theorem), and calculate this maximum power P_max. (c) Calculate the electrical efficiency η of the power transfer when: (i) R = r, (ii) R = 3r, and explain why maximum power transfer does not correspond to maximum efficiency.",
    "si": "නියත වි.ගා.බ. E = 12.0 V සහ අභ්‍යන්තර ප්‍රතිරෝධය r = 3.0 Ω සහිත සරල ධාරා ප්‍රභවයක් R ප්‍රතිරෝධයක් සහිත බාහිර විචල්‍ය ප්‍රතිරෝධකයක් හරහා සම්බන්ධ කර ඇත. (a) E, r, සහ R ඇසුරින් බාහිර ප්‍රතිරෝධකයට සැපයෙන ක්ෂමතාව P ප්‍රකාශ කරන්න. (b) R = r වන විට බාහිර ප්‍රතිරෝධකයට සැපයෙන ක්ෂමතාව උපරිම වන බව (උපරිම ක්ෂමතා සම්ප්‍රේෂණ ප්‍රමේයය) ගණිතමය වශයෙන් ඔප්පු කර එම උපරිම ක්ෂමතාව P_max ගණනය කරන්න. (c) (i) R = r සහ (ii) R = 3r වන විට ක්ෂමතා සම්ප්‍රේෂණයේ විද්‍යුත් කාර්යක්ෂමතාව η ගණනය කර, උපරිම ක්ෂමතා සම්ප්‍රේෂණය උපරිම කාර්යක්ෂමතාවයට අනුරූප නොවන්නේ මන්දැයි පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Write the expression for power P in the external resistor R.",
        "si": "බාහිර ප්‍රතිරෝධකයේ ක්ෂමතාව P සඳහා ප්‍රකාශනය ලියන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "Circuit current is I = E / (R + r). Power dissipated in external load resistor R is P = I² R = [ E / (R + r) ]² × R = (E² R) / (R + r)².",
        "si": "පරිපථ ධාරාව I = E / (R + r). බාහිර R මත වැයවන ක්ෂමතාව P = I² R = (E² R) / (R + r)²."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Current expression I = E / (R + r)",
            "si": "ධාරා ප්‍රකාශනය I = E / (R + r)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains P = (E² R) / (R + r)²",
            "si": "P = (E² R) / (R + r)² ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Prove P is maximum when R = r and calculate P_max.",
        "si": "R = r විට P උපරිම වන බව ඔප්පු කර P_max ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "To find maximum power, differentiate P with respect to R: dP/dR = E² [ (R + r)²(1) - R(2)(R + r) ] / (R + r)⁴ = E² (R + r - 2R) / (R + r)³ = E² (r - R) / (R + r)³. Setting dP/dR = 0 gives r - R = 0 => R = r. Calculation: P_max = (E² r) / (2r)² = E² / (4r) = (12.0 V)² / (4 × 3.0 Ω) = 144 / 12 = 12.0 W.",
        "si": "dP/dR = E² (r - R) / (R + r)³. dP/dR = 0 කිරීමෙන්: r - R = 0 => R = r. උපරිම ක්ෂමතාව P_max = E² / (4r) = 12² / (4 × 3) = 144 / 12 = 12.0 W."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Differentiates P with respect to R using quotient/product rule",
            "si": "R විෂයෙන් P අවකලනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Sets derivative to zero to prove R = r",
            "si": "අවකලනය ශුන්‍ය කර R = r ඔප්පු කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Maximum power formula P_max = E² / (4r)",
            "si": "P_max = E² / (4r) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates P_max = 12.0 W",
            "si": "P_max = 12.0 W ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate efficiency for R = r and R = 3r, and explain difference between max power and max efficiency.",
        "si": "R = r සහ R = 3r සඳහා කාර්යක්ෂමතාව ගණනය කර උපරිම ක්ෂමතාව හා කාර්යක්ෂමතාව අතර වෙනස පහදන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Efficiency η = (Useful output power / Total generated power) × 100% = (I² R) / (I² (R + r)) = R / (R + r). (i) When R = r: η = r / (r + r) = 1/2 = 50%. (ii) When R = 3r: η = 3r / (3r + r) = 3/4 = 75%. Explanation: Maximum power transfer aims to extract the greatest possible wattage into the load regardless of losses (half the energy is wasted as heat inside internal resistance r). Maximum efficiency requires R >> r so that almost all generated energy goes to the load and negligible heat is lost inside the source.",
        "si": "කාර්යක්ෂමතාව η = I²R / I²(R+r) = R / (R+r). (i) R = r විට: η = 1/2 = 50%. (ii) R = 3r විට: η = 3/4 = 75%. පැහැදිලි කිරීම: උපරිම ක්ෂමතා සම්ප්‍රේෂණයේදී ඉලක්කය වන්නේ අලාභ නොසලකා උපරිම වොට් ගණනක් බාහිරට ලබා ගැනීමයි (50% ක් අභ්‍යන්තරයේ අපතේ යයි). උපරිම කාර්යක්ෂමතාවයක් සඳහා R >> r විය යුතු අතර එවිට අභ්‍යන්තර හානිය අවම වී සියල්ල බාහිරට ලැබේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Efficiency formula η = R / (R + r)",
            "si": "කාර්යක්ෂමතා සූත්‍රය η = R / (R + r)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates 50% for R = r and 75% for R = 3r",
            "si": "R = r සඳහා 50% සහ R = 3r සඳහා 75% ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains 50% of energy is wasted internally at maximum power transfer",
            "si": "උපරිම ක්ෂමතාවේදී 50% ක් අභ්‍යන්තරව අපතේ යන බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "High efficiency requires large R >> r",
            "si": "ඉහළ කාර්යක්ෂමතාවට R >> r අවශ්‍ය බව"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "P = E²R / (R + r)²; dP/dR = 0 yields R = r; at maximum power transfer, efficiency is exactly 50%.",
    "si": "P = E²R / (R + r)²; dP/dR = 0 මගින් R = r ලැබේ; උපරිම ක්ෂමතා සම්ප්‍රේෂණයේදී කාර්යක්ෂමතාව 50% කි."
  },
  "solution": {
    "en": "P_max = E² / (4r) = 12.0 W at R = 3.0 Ω. Efficiency at R = r is 50%; at R = 3r it is 75%. Max power occurs at R = r, but max efficiency approaches 100% as R >> r.",
    "si": "P_max = 12.0 W (R = 3.0 Ω හිදී). R = r හිදී කාර්යක්ෂමතාව 50% කි; R = 3r හිදී 75% කි. කාර්යක්ෂමතාව R >> r විට 100% ට ආසන්න වේ."
  }
},
{
  "id": "cur-sq05",
  "competencyRef": "Competency 8.4",
  "category": "kirchhoff-laws-networks",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "Consider a two-loop electrical circuit: Branch 1 contains a battery E₁ = 18 V and series resistor R₁ = 6.0 Ω. Branch 2 contains a battery E₂ = 12 V and series resistor R₂ = 3.0 Ω. Both branches are connected in parallel across a central load resistor R₃ = 4.0 Ω. (Both batteries have negligible internal resistance). (a) State Kirchhoff’s First Law (junction rule) and Kirchhoff’s Second Law (loop rule), stating the physical conservation principle underlying each. (b) Formulate the Kirchhoff equations for the two independent loops. (c) Solve the equations to find the magnitude and direction of the current in each of the three resistors.",
    "si": "ලූප දෙකකින් යුත් විද්‍යුත් පරිපථයක් සලකන්න: ශාඛාව 1 හි E₁ = 18 V බැටරියක් සහ R₁ = 6.0 Ω ශ්‍රේණිගත ප්‍රතිරෝධකයක් ඇත. ශාඛාව 2 හි E₂ = 12 V බැටරියක් සහ R₂ = 3.0 Ω ප්‍රතිරෝධකයක් ඇත. මෙම ශාඛා දෙකම R₃ = 4.0 Ω මධ්‍යම බර ප්‍රතිරෝධකයකට සමාන්තරගතව සම්බන්ධ කර ඇත (බැටරිවල අභ්‍යන්තර ප්‍රතිරෝධ නගණ්‍යයි). (a) කර්චොෆ්ගේ පළමු නියමය (සන්ධි නීතිය) සහ දෙවන නියමය (ලූප නීතිය) ඒ එක් එක් නීතිය පදනම් වන භෞතික සංස්ථිති මූලධර්මය දක්වමින් ප්‍රකාශ කරන්න. (b) ස්වාධීන ලූප දෙක සඳහා කර්චොෆ් සමීකරණ ගොඩනගන්න. (c) සමීකරණ විසඳා ප්‍රතිරෝධක තුනෙහිම ගලන ධාරාවන්ගේ විශාලත්වය සහ දිශාව සොයන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Kirchhoff's Laws and their conservation principles.",
        "si": "කර්චොෆ් නියමයන් සහ ඒවායේ සංස්ථිති මූලධර්ම ප්‍රකාශ කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Kirchhoff's First Law (Current / Junction Rule): The algebraic sum of currents entering any electrical junction is zero (Σ I = 0). It is a consequence of the Conservation of Electric Charge. Kirchhoff's Second Law (Voltage / Loop Rule): The algebraic sum of changes in potential around any closed circuit loop is zero, or the sum of E.M.F.s equals the sum of potential drops: Σ E = Σ (I R). It is a consequence of the Conservation of Energy.",
        "si": "කර්චොෆ්ගේ පළමු නියමය (සන්ධි නීතිය): පරිපථයක ඕනෑම සන්ධියකට ඇතුළු වන ධාරාවන්ගේ වීජීය එකතුව ශුන්‍ය වේ (Σ I = 0). මෙය විද්‍යුත් ආරෝපණ සංස්ථිති නියමයේ ප්‍රතිඵලයකි. කර්චොෆ්ගේ දෙවන නියමය (ලූප නීතිය): ඕනෑම සංවෘත ලූපයක් වටා විභව වෙනස්වීම්වල වීජීය එකතුව ශුන්‍ය වේ (Σ E = Σ IR). මෙය ශක්ති සංස්ථිති නියමයේ ප්‍රතිඵලයකි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Junction rule Σ I = 0 based on Conservation of Charge",
            "si": "සන්ධි නීතිය Σ I = 0 ආරෝපණ සංස්ථිතිය මත පදනම් බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Loop rule Σ E = Σ IR based on Conservation of Energy",
            "si": "ලූප නීතිය Σ E = Σ IR ශක්ති සංස්ථිතිය මත පදනම් බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Accurate formal statements for both laws",
            "si": "නියම දෙකම සඳහා නිවැරදි ප්‍රකාශන"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Formulate the system of equations for the circuit loops.",
        "si": "පරිපථ ලූප සඳහා සමීකරණ පද්ධතිය ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Let I₁ be current from E₁ through R₁, I₂ be current from E₂ through R₂, and I₃ = I₁ + I₂ through R₃ (downwards). Loop 1 (containing E₁, R₁, R₃): E₁ = I₁ R₁ + (I₁ + I₂) R₃ => 18 = 6 I₁ + 4 (I₁ + I₂) => 10 I₁ + 4 I₂ = 18 => 5 I₁ + 2 I₂ = 9 (Equation 1). Loop 2 (containing E₂, R₂, R₃): E₂ = I₂ R₂ + (I₁ + I₂) R₃ => 12 = 3 I₂ + 4 (I₁ + I₂) => 4 I₁ + 7 I₂ = 12 (Equation 2).",
        "si": "I₁ යනු R₁ හරහා ධාරාවද, I₂ යනු R₂ හරහා ධාරාවද, I₃ = I₁ + I₂ යනු R₃ හරහා ධාරාවද යැයි ගනිමු. ලූපය 1: 18 = 6 I₁ + 4 (I₁ + I₂) => 10 I₁ + 4 I₂ = 18 => 5 I₁ + 2 I₂ = 9. ලූපය 2: 12 = 3 I₂ + 4 (I₁ + I₂) => 4 I₁ + 7 I₂ = 12."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Junction condition I₃ = I₁ + I₂",
            "si": "සන්ධි කොන්දේසිය I₃ = I₁ + I₂"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Loop 1 equation: 10 I₁ + 4 I₂ = 18 (or 5 I₁ + 2 I₂ = 9)",
            "si": "ලූප 1 සමීකරණය: 5 I₁ + 2 I₂ = 9"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Loop 2 equation: 4 I₁ + 7 I₂ = 12",
            "si": "ලූප 2 සමීකරණය: 4 I₁ + 7 I₂ = 12"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Solve for currents I₁, I₂, and I₃.",
        "si": "I₁, I₂, සහ I₃ ධාරාවන් විසඳන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "From Eq 1: I₂ = (9 - 5 I₁) / 2. Substitute into Eq 2: 4 I₁ + 7 [ (9 - 5 I₁) / 2 ] = 12 => 8 I₁ + 63 - 35 I₁ = 24 => -27 I₁ = 24 - 63 = -39 => I₁ = 39 / 27 = 13 / 9 A ≈ 1.444 A. Then I₂ = [ 9 - 5(13/9) ] / 2 = [ (81 - 65) / 9 ] / 2 = (16 / 9) / 2 = 8 / 9 A ≈ 0.889 A. Current through R₃: I₃ = I₁ + I₂ = 13/9 + 8/9 = 21 / 9 A = 7 / 3 A ≈ 2.333 A. All currents flow in their assumed forward directions.",
        "si": "Eq 1 න්: I₂ = (9 - 5 I₁) / 2. Eq 2 ට ආදේශයෙන්: 8 I₁ + 63 - 35 I₁ = 24 => 27 I₁ = 39 => I₁ = 13/9 A = 1.44 A. I₂ = 8/9 A = 0.89 A. I₃ = I₁ + I₂ = 21/9 A = 7/3 A = 2.33 A."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Elimination method applied correctly",
            "si": "විසඳීමේ ක්‍රමය නිවැරදිව යෙදීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I₁ = 13/9 A (1.44 A)",
            "si": "I₁ = 13/9 A (1.44 A) ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I₂ = 8/9 A (0.89 A)",
            "si": "I₂ = 8/9 A (0.89 A) ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I₃ = 7/3 A (2.33 A)",
            "si": "I₃ = 7/3 A (2.33 A) ගණනය කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Apply junction rule I₃ = I₁ + I₂; write loop equations Σ E = Σ IR for each mesh; solve simultaneous linear equations.",
    "si": "I₃ = I₁ + I₂ සන්ධි නීතිය යොදන්න; එක් එක් ලූපයට Σ E = Σ IR ලියන්න; සමගාමී සමීකරණ විසඳන්න."
  },
  "solution": {
    "en": "I₁ = 1.44 A (13/9 A); I₂ = 0.89 A (8/9 A); I₃ = 2.33 A (7/3 A). All currents flow in assumed forward directions.",
    "si": "I₁ = 1.44 A; I₂ = 0.89 A; I₃ = 2.33 A. සියලු ධාරා උපකල්පිත ඉදිරි දිශාවට ගලා යයි."
  }
},
{
  "id": "cur-sq06",
  "competencyRef": "Competency 8.5",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In a metre bridge experiment to measure the resistance of an unknown coil X, a standard resistance box R = 12.0 Ω is placed in the left gap and coil X is placed in the right gap. (a) State the balance condition for a Wheatstone bridge. (b) When balanced, the balance point on the 100 cm bridge wire is obtained at l = 40.0 cm from the zero end. Calculate the resistance of coil X. (c) Explain: (i) why the balance point should ideally be chosen near the centre of the wire (around 50 cm), and (ii) what \"end errors\" are and how they are eliminated experimentally.",
    "si": "නොදන්නා X දඟරයක ප්‍රතිරෝධය මැනීම සඳහා මීටර් පාලම් පරීක්ෂණයකදී, වම් හිඩැස තුළ සම්මත ප්‍රතිරෝධ පෙට්ටියක් R = 12.0 Ω ද දකුණු හිඩැස තුළ X දඟරයද තබා ඇත. (a) වීට්ස්ටන් පාලමක තුලන කොන්දේසිය දක්වන්න. (b) තුලිත වූ විට 100 cm පාලම් කම්බිය මත ශුන්‍ය අන්තයේ සිට l = 40.0 cm හිදී තුලන ලක්ෂ්‍යය ලැබේ. X දඟරයේ ප්‍රතිරෝධය ගණනය කරන්න. (c) (i) තුලන ලක්ෂ්‍යය කම්බියේ මධ්‍යය ආසන්නයේ (50 cm පමණ) ලබාගත යුත්තේ මන්දැයි සහ (ii) \"අන්ත දෝෂ\" යනු මොනවාදැයි හා ඒවා ප්‍රායෝගිකව ඉවත් කරන්නේ කෙසේදැයි පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State the Wheatstone bridge balance condition.",
        "si": "වීට්ස්ටන් පාලමේ තුලන කොන්දේසිය දක්වන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "For a Wheatstone bridge consisting of resistors P, Q, R, and S, balance is achieved when the galvanometer detects zero current (no potential difference across the galvanometer branch): P / Q = R / S.",
        "si": "P, Q, R, සහ S ප්‍රතිරෝධක සහිත වීට්ස්ටන් පාලමක ගැල්වනෝමීටරය හරහා ධාරාව ශුන්‍ය වන විට (විභව අන්තරයක් නැති විට) තුලිතතාවය ඇතිවේ: P / Q = R / S."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Zero current in galvanometer condition",
            "si": "ගැල්වනෝමීටරයේ ධාරාව ශුන්‍ය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Ratio of arm resistances P / Q = R / S",
            "si": "ශාඛා ප්‍රතිරෝධ අනුපාතය P / Q = R / S"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate unknown resistance X.",
        "si": "නොදන්නා ප්‍රතිරෝධය X ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Since resistance of a uniform wire is proportional to length: R / X = l / (100 - l) => X = R × (100 - l) / l. Given: R = 12.0 Ω, l = 40.0 cm, (100 - l) = 60.0 cm. Calculation: X = 12.0 Ω × (60.0 / 40.0) = 12.0 × 1.50 = 18.0 Ω.",
        "si": "ඒකාකාර කම්බියක ප්‍රතිරෝධය දිගට සමානුපාතික බැවින්: R / X = l / (100 - l) => X = R (100 - l) / l. X = 12.0 × (60.0 / 40.0) = 12.0 × 1.50 = 18.0 Ω."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Metre bridge formula R / X = l / (100 - l)",
            "si": "මීටර් පාලම් සූත්‍රය R / X = l / (100 - l)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitution of l = 40.0 cm and R = 12.0 Ω",
            "si": "l = 40.0 cm සහ R = 12.0 Ω ආදේශය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains X = 18.0 Ω",
            "si": "X = 18.0 Ω ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why balance near 50 cm is preferred and how end errors are eliminated.",
        "si": "50 cm ආසන්නයේ තුලනය වඩා සුදුසු වීමට හේතුව සහ අන්ත දෝෂ ඉවත් කරන ආකාරය පහදන්න."
      },
      "allocatedMarks": 5,
      "modelAnswer": {
        "en": "(i) Fractional error in X is dX / X = dl / l + dl / (100 - l) = [ 100 / (l(100 - l)) ] dl. The denominator l(100 - l) is a maximum when l = 50 cm, minimizing the percentage error in X due to scale reading uncertainty dl. (ii) End errors arise from the non-negligible contact resistance where the wire is soldered to the thick copper strips, and because the zero mark of the meter ruler may not align exactly with the ends of the wire. End errors are eliminated by interchanging the positions of resistor R and unknown coil X in the two gaps, repeating the measurement to obtain a new balance length l', and calculating the mean value of X.",
        "si": "(i) dX/X = dl / [l(100 - l)] බැවින් l = 50 cm හිදී හරය උපරිම වී භාගික දෝෂය අවම වේ. (ii) අන්ත දෝෂ හටගන්නේ ඝන තඹ තහඩුවලට කම්බිය පෑස්සූ ස්ථානවල ඇති ස්පර්ශ ප්‍රතිරෝධය සහ පරිමාණයේ ශුන්‍ය සලකුණ කම්බි කෙළවර සමග හරියටම නොගැලපීම නිසාය. හිඩැස් දෙකෙහි ඇති R සහ X මාරු කර නැවත පාඨාංක ගෙන සාමාන්‍යය ගැනීමෙන් අන්ත දෝෂ ඉවත් කරගත හැක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Product l(100 - l) is maximum at 50 cm, minimizing fractional error",
            "si": "l(100 - l) 50 cm හි උපරිම වී භාගික දෝෂය අවම වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "End error origin: solder contact resistance at copper strips",
            "si": "අන්ත දෝෂවල මූලය: පෑස්සුම් ස්පර්ශ ප්‍රතිරෝධය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "End error origin: misalignment between scale zero and wire ends",
            "si": "පරිමාණ ශුන්‍යය කම්බි කෙළවර සමග නොගැලපීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Interchanging R and X in the gaps eliminates end errors",
            "si": "R සහ X මාරු කර නැවත මැනීමෙන් අන්ත දෝෂ ඉවත් වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Taking the mean value of the two determinations",
            "si": "අගයන් දෙකෙහි සාමාන්‍යය ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "X = R(100 - l) / l; balance near 50 cm maximizes bridge sensitivity; interchanging resistors in gaps eliminates end errors.",
    "si": "X = R(100 - l) / l; 50 cm ආසන්නයේදී සංවේදීතාව උපරිම වේ; හිඩැස්වල ප්‍රතිරෝධ මාරු කිරීමෙන් අන්ත දෝෂ ඉවත් වේ."
  },
  "solution": {
    "en": "X = 18.0 Ω. Balance near 50 cm minimizes dl / [l(100-l)]. End errors eliminated by interchanging R and X in gaps and averaging.",
    "si": "X = 18.0 Ω. 50 cm ආසන්නයේ දෝෂ අවම වේ. R සහ X මාරු කර මැනීමෙන් අන්ත දෝෂ ඉවත් වේ."
  }
},
{
  "id": "cur-sq07",
  "competencyRef": "Competency 8.5",
  "category": "potentiometer-bridge",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A slide-wire potentiometer of length 100 cm is used to determine the internal resistance r of a dry cell of EMF E. With the cell on open circuit, the balance length is l₁ = 75.0 cm. When a shunt resistor R = 10.0 Ω is connected across the cell terminals, the balance length drops to l₂ = 60.0 cm. (a) Derive the relationship r = R (l₁ - l₂) / l₂ for the internal resistance. (b) Calculate the internal resistance r of the cell. (c) In an extended investigation, a student records balance lengths l₂ for various values of shunt resistance R. Explain what straight-line graph the student should plot to determine both E and r, specifying the gradient and intercepts.",
    "si": "වි.ගා.බ. E වන වියළි කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය r නිර්ණය කිරීම සඳහා 100 cm දිගැති විභවමානයක් භාවිත කරයි. කෝෂය විවෘත පරිපථයක ඇති විට තුලන දිග l₁ = 75.0 cm වේ. කෝෂ අග්‍ර හරහා R = 10.0 Ω ෂන්ට් ප්‍රතිරෝධකයක් සම්බන්ධ කළ විට තුලන දිග l₂ = 60.0 cm දක්වා අඩුවේ. (a) අභ්‍යන්තර ප්‍රතිරෝධය සඳහා r = R (l₁ - l₂) / l₂ සම්බන්ධතාව ගොඩනගන්න. (b) කෝෂයේ අභ්‍යන්තර ප්‍රතිරෝධය r ගණනය කරන්න. (c) පුළුල් පරීක්ෂණයකදී ශිෂ්‍යයෙකු විවිධ R අගයන් සඳහා l₂ තුලන දිගවල් සටහන් කර ගනී. E සහ r නිර්ණය කිරීමට ඇඳිය යුතු සරල රේඛීය ප්‍රස්තාරය, එහි අනුක්‍රමණය සහ අන්තඃඛණ්ඩ දක්වන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive r = R (l₁ - l₂) / l₂.",
        "si": "r = R (l₁ - l₂) / l₂ ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Let k be the potential gradient along the potentiometer wire (V cm⁻¹). On open circuit, no current flows through the cell, so terminal PD equals EMF: E = k l₁. When shunted by resistor R, cell delivers current I = E / (R + r), and terminal PD is V = I R = k l₂. Taking the ratio: E / V = l₁ / l₂. Since E / V = (I(R + r)) / (I R) = (R + r) / R = 1 + r / R, we have: 1 + r / R = l₁ / l₂ => r / R = (l₁ - l₂) / l₂ => r = R (l₁ - l₂) / l₂.",
        "si": "විභවමාන කම්බියේ විභව අනුක්‍රමණය k යැයි ගනිමු. විවෘත පරිපථයේදී: E = k l₁. R ප්‍රතිරෝධකය සම්බන්ධ කළ විට අග්‍රස්ථ විභවය: V = k l₂. අනුපාතය: E / V = l₁ / l₂. තවද E / V = (R + r) / R = 1 + r / R බැවින්: 1 + r / R = l₁ / l₂ => r = R (l₁ - l₂) / l₂."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies E = k l₁ on open circuit",
            "si": "විවෘත පරිපථයේ E = k l₁ හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies V = k l₂ on closed circuit with load R",
            "si": "R සහිතව V = k l₂ හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitutes E/V = (R + r)/R to derive r = R(l₁ - l₂)/l₂",
            "si": "E/V = (R + r)/R ආදේශ කර r = R(l₁ - l₂)/l₂ ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate internal resistance r using the given data.",
        "si": "දත්ත භාවිතයෙන් අභ්‍යන්තර ප්‍රතිරෝධය r ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "r = R (l₁ - l₂) / l₂ = 10.0 Ω × (75.0 cm - 60.0 cm) / 60.0 cm = 10.0 × (15.0 / 60.0) = 10.0 × 0.25 = 2.50 Ω.",
        "si": "r = R (l₁ - l₂) / l₂ = 10.0 × (75.0 - 60.0) / 60.0 = 10.0 × (15.0 / 60.0) = 2.50 Ω."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Substitution of l₁ = 75, l₂ = 60, R = 10",
            "si": "අගයන් නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates fraction (15 / 60) = 0.25",
            "si": "භාගය 0.25 ලෙස සුළු කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains r = 2.50 Ω",
            "si": "r = 2.50 Ω ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Describe linear graph of 1/l₂ vs 1/R to find r and l₁.",
        "si": "r සහ l₁ සෙවීමට 1/l₂ එදිරිව 1/R රේඛීය ප්‍රස්තාරය විස්තර කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Rearranging l₁ / l₂ = 1 + r / R gives: 1 / l₂ = (r / l₁) × (1 / R) + (1 / l₁). Plot 1 / l₂ on the vertical axis against 1 / R on the horizontal axis. A straight line is obtained where: (1) Vertical intercept c = 1 / l₁ (yielding open-circuit length l₁ = 1 / c), (2) Gradient m = r / l₁, from which internal resistance is calculated as r = gradient / intercept = m / c.",
        "si": "l₁ / l₂ = 1 + r / R ප්‍රතිසංවිධානයෙන්: 1 / l₂ = (r / l₁) (1 / R) + (1 / l₁). සිරස් අක්ෂයේ 1 / l₂ ට එදිරිව තිරස් අක්ෂයේ 1 / R ප්‍රස්තාරයක් අඳින්න. ලැබෙන සරල රේඛාවේ: (1) සිරස් අන්තඃඛණ්ඩය c = 1 / l₁ (එයින් l₁ = 1 / c ලැබේ), (2) අනුක්‍රමණය m = r / l₁ බැවින් r = අනුක්‍රමණය / අන්තඃඛණ්ඩය = m / c මගින් අභ්‍යන්තර ප්‍රතිරෝධය ලැබේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Linear form 1/l₂ = (r/l₁)(1/R) + 1/l₁",
            "si": "රේඛීය ආකාරය 1/l₂ = (r/l₁)(1/R) + 1/l₁"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Vertical intercept equals 1/l₁",
            "si": "සිරස් අන්තඃඛණ්ඩය 1/l₁ ට සමාන වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Gradient equals r/l₁",
            "si": "අනුක්‍රමණය r/l₁ ට සමාන වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates r as gradient / intercept (m / c)",
            "si": "r = m / c මගින් ගණනය කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "r = R(l₁ - l₂)/l₂; linear form 1/l₂ = (r/l₁)(1/R) + (1/l₁) yields r = gradient / intercept.",
    "si": "r = R(l₁ - l₂)/l₂; 1/l₂ = (r/l₁)(1/R) + (1/l₁) මගින් r = අනුක්‍රමණය / අන්තඃඛණ්ඩය ලැබේ."
  },
  "solution": {
    "en": "r = 2.50 Ω. Plot 1/l₂ vs 1/R: y-intercept = 1/l₁, slope = r/l₁, giving r = slope / intercept.",
    "si": "r = 2.50 Ω. 1/l₂ එදිරිව 1/R ප්‍රස්තාරයේ අන්තඃඛණ්ඩය = 1/l₁, අනුක්‍රමණය = r/l₁, r = අනුක්‍රමණය / අන්තඃඛණ්ඩය."
  }
},
{
  "id": "cur-sq08",
  "competencyRef": "Competency 8.5",
  "category": "potentiometer-bridge",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A potentiometer circuit is used to compare the EMFs of two cells, a Daniel cell (E₁) and a Leclanché cell (E₂). (a) State the fundamental advantage of a potentiometer over an ordinary moving-coil voltmeter for measuring EMF. (b) When the cells are connected to the potentiometer in turn, the balance lengths obtained are l₁ = 54.0 cm for the Daniel cell and l₂ = 72.0 cm for the Leclanché cell. Calculate the ratio E₂ / E₁, and given E₁ = 1.08 V, determine E₂. (c) State the effects on the balance length l₁ if: (i) the driver battery EMF is decreased, (ii) a resistor is added in series with the driver battery, (iii) a protective high resistor is added in series with the galvanometer.",
    "si": "ඩැනියල් කෝෂයක (E₁) සහ ලෙක්ලැන්ෂේ කෝෂයක (E₂) වි.ගා.බ. සංසන්දනය කිරීමට විභවමාන පරිපථයක් භාවිත කරයි. (a) වි.ගා.බ. මැනීමේදී සාමාන්‍ය වෝල්ට්මීටරයකට වඩා විභවමානයක ඇති මූලික වාසිය දක්වන්න. (b) කෝෂ වරකට එක බැගින් සම්බන්ධ කළ විට ඩැනියල් කෝෂයට l₁ = 54.0 cm ද ලෙක්ලැන්ෂේ කෝෂයට l₂ = 72.0 cm ද තුලන දිගවල් ලැබේ. E₂ / E₁ අනුපාතය ගණනය කර E₁ = 1.08 V නම් E₂ නිර්ණය කරන්න. (c) පහත අවස්ථාවලදී l₁ තුලන දිගට සිදුවන බලපෑම දක්වන්න: (i) ධාවක බැටරියේ වි.ගා.බ. අඩු කළ විට, (ii) ධාවක බැටරියට ශ්‍රේණිගතව ප්‍රතිරෝධකයක් එක් කළ විට, (iii) ගැල්වනෝමීටරයට ශ්‍රේණිගතව ආරක්ෂක ඉහළ ප්‍රතිරෝධකයක් එක් කළ විට."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State why potentiometer measures true EMF without loading error.",
        "si": "පූරණ දෝෂවලින් තොරව නියම වි.ගා.බ. මැනීමට විභවමානයට හැකි වන්නේ මන්දැයි දක්වන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "At the balance point (null deflection), no current is drawn from the test cell (I = 0). Therefore, there is zero internal voltage drop (Ir = 0), and the potentiometer measures the true open-circuit electromotive force without any loading error. In contrast, an ordinary voltmeter draws current, measuring terminal PD V = E - Ir instead of true E.",
        "si": "තුලන ලක්ෂ්‍යයේදී (ශුන්‍ය අපගමනය) පරීක්ෂා කරන කෝෂයෙන් කිසිදු ධාරාවක් ලබා නොගනී (I = 0). එබැවින් අභ්‍යන්තර වෝල්ටීයතා බැස්මක් නැති අතර (Ir = 0), පූරණ දෝෂවලින් තොරව සැබෑ විවෘත පරිපථ වි.ගා.බ. මනිනු ලබයි. සාමාන්‍ය වෝල්ට්මීටරයක් ධාරාවක් ගන්නා බැවින් සැබෑ E වෙනුවට V = E - Ir මනියි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Null deflection means zero current drawn from the test cell",
            "si": "ශුන්‍ය අපගමනයේදී කෝෂයෙන් ධාරාවක් නොගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Zero internal drop Ir measures true open-circuit EMF",
            "si": "Ir = 0 බැවින් සැබෑ වි.ගා.බ. මැනිය හැකි වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate E₂ / E₁ and numerical value of E₂.",
        "si": "E₂ / E₁ අනුපාතය සහ E₂ හි සංඛ්‍යාත්මක අගය ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Since E ∝ l along a uniform wire carrying constant driver current: E₂ / E₁ = l₂ / l₁ = 72.0 cm / 54.0 cm = 4 / 3 ≈ 1.333. Value of E₂ = (4 / 3) × E₁ = (4 / 3) × 1.08 V = 4 × 0.36 V = 1.44 V.",
        "si": "E ∝ l බැවින්: E₂ / E₁ = l₂ / l₁ = 72.0 / 54.0 = 4 / 3 = 1.33. E₂ = (4/3) × 1.08 V = 1.44 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula E₂ / E₁ = l₂ / l₁",
            "si": "E₂ / E₁ = l₂ / l₁ සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates ratio = 4/3 (or 1.33)",
            "si": "අනුපාතය 4/3 ලෙස ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitutes E₁ = 1.08 V",
            "si": "E₁ = 1.08 V ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains E₂ = 1.44 V",
            "si": "E₂ = 1.44 V ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "State the effect on balance length l₁ for cases (i), (ii), and (iii).",
        "si": "(i), (ii), සහ (iii) අවස්ථාවල l₁ තුලන දිගට වන බලපෑම දක්වන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) Driver EMF decreased: Driver current I_d and potential gradient k = I_d ρ decrease. Since l₁ = E₁ / k, balance length l₁ INCREASES (if driver EMF falls below E₁, no balance point can be found). (ii) Series resistor added in driver circuit: Increases driver circuit resistance, decreasing driver current and potential gradient k. Therefore, balance length l₁ INCREASES (potentiometer sensitivity increases). (iii) Protective high resistor in galvanometer circuit: At null point, current is zero, so no potential drop occurs across this resistor. Hence, balance length l₁ REMAINS UNCHANGED (only meter sensitivity during balancing is reduced).",
        "si": "(i) ධාවක වි.ගා.බ. අඩු කළ විට: විභව අනුක්‍රමණය k අඩුවේ. l₁ = E₁ / k බැවින් තුලන දිග l₁ වැඩි වේ. (ii) ධාවක පරිපථයට ශ්‍රේණිගත ප්‍රතිරෝධකයක් එක් කළ විට: k අඩු වන බැවින් තුලන දිග l₁ වැඩි වේ (සංවේදීතාව වැඩිවේ). (iii) ගැල්වනෝමීටරයට ශ්‍රේණිගත ඉහළ ප්‍රතිරෝධකයක් එක් කළ විට: තුලන ලක්ෂ්‍යයේදී ධාරාව 0 බැවින් තුලන දිග l₁ වෙනස් නොවේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "(i) Balance length increases because potential gradient decreases",
            "si": "විභව අනුක්‍රමණය අඩුවන නිසා තුලන දිග වැඩිවේ"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "(ii) Balance length increases (sensitivity increases)",
            "si": "තුලන දිග වැඩිවේ (සංවේදීතාව වැඩිවේ)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "(iii) Balance length remains unchanged",
            "si": "තුලන දිග වෙනස් නොවේ"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Reason for (iii): zero current at null point produces zero IR drop",
            "si": "ශුන්‍ය ලක්ෂ්‍යයේදී ධාරාව 0 බැවින් වෝල්ටීයතා බැස්මක් නැති බව"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "E₂ / E₁ = l₂ / l₁; decreasing potential gradient k increases balance length; resistor in galvanometer branch does not change null position.",
    "si": "E₂ / E₁ = l₂ / l₁; විභව අනුක්‍රමණය k අඩු වන විට තුලන දිග වැඩිවේ; ගැල්වනෝමීටර ශාඛාවේ ප්‍රතිරෝධයෙන් තුලන ලක්ෂ්‍යය වෙනස් නොවේ."
  },
  "solution": {
    "en": "E₂ / E₁ = 4/3; E₂ = 1.44 V. (i) l₁ increases; (ii) l₁ increases; (iii) l₁ unchanged.",
    "si": "E₂ / E₁ = 4/3; E₂ = 1.44 V. (i) l₁ වැඩිවේ; (ii) l₁ වැඩිවේ; (iii) l₁ වෙනස් නොවේ."
  }
},
{
  "id": "cur-sq09",
  "competencyRef": "Competency 8.6",
  "category": "electromagnetic-induction",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A straight metal rod of length L = 0.40 m and resistance R_rod = 0.50 Ω slides at constant velocity v = 5.0 m s⁻¹ towards the right on two frictionless horizontal parallel conducting rails. The rails are connected across an external resistor R = 2.0 Ω in a region with a uniform vertical downward magnetic field B = 0.80 T. (Rail resistance is negligible). (a) State Faraday's Law of Electromagnetic Induction and Lenz's Law. (b) Calculate the induced electromotive force e across the moving rod and determine the direction of induced current (clockwise or counterclockwise viewed from above). (c) Calculate: (i) the induced current I, (ii) the external mechanical force F_ext required to maintain constant speed v, (iii) verify that the mechanical power supplied equals the total rate of electrical heat dissipation.",
    "si": "L = 0.40 m දිගැති සහ R_rod = 0.50 Ω ප්‍රතිරෝධයක් සහිත සෘජු ලෝහ දණ්ඩක් ඝර්ෂණ රහිත තිරස් සමාන්තර සන්නායක රේල් පීලි දෙකක් මත v = 5.0 m s⁻¹ නියත ප්‍රවේගයෙන් දකුණට ලිස්සා යයි. රේල් පීලි දෙක බාහිර R = 2.0 Ω ප්‍රතිරෝධකයක් හරහා සම්බන්ධ කර ඇති අතර සිරස්ව පහළට B = 0.80 T ඒකාකාර චුම්භක ක්ෂේත්‍රයක් පවතී (පීලිවල ප්‍රතිරෝධය නගණ්‍යයි). (a) විද්‍යුත් චුම්භක ප්‍රේරණය සඳහා ෆැරඩේ නියමය සහ ලෙන්ස් නියමය ප්‍රකාශ කරන්න. (b) චලනය වන දණ්ඩ හරහා ප්‍රේරිත වි.ගා.බ. e ගණනය කර ප්‍රේරිත ධාරාවේ දිශාව තීරණය කරන්න. (c) (i) ප්‍රේරිත ධාරාව I, (ii) නියත ප්‍රවේගය පවත්වා ගැනීමට අවශ්‍ය බාහිර යාන්ත්‍රික බලය F_ext ගණනය කර, (iii) සපයන යාන්ත්‍රික ක්ෂමතාව මුළු විද්‍යුත් තාප හානි සීඝ්‍රතාවට සමාන බව සත්‍යාපනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Faraday's Law and Lenz's Law.",
        "si": "ෆැරඩේ නියමය සහ ලෙන්ස් නියමය ප්‍රකාශ කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Faraday's Law of Electromagnetic Induction: The magnitude of the induced electromotive force in a circuit is directly proportional to the time rate of change of magnetic flux linkage through the circuit: e = -dΦ/dt. Lenz's Law: The direction of the induced current is always such that its magnetic effects oppose the change in magnetic flux that produces it.",
        "si": "ෆැරඩේගේ විද්‍යුත් චුම්භක ප්‍රේරණ නියමය: පරිපථයක ප්‍රේරණය වන විද්‍යුත් ගාමක බලයේ විශාලත්වය පරිපථය හා බැඳි චුම්භක ස්‍රාවය වෙනස්වීමේ කාල සීඝ්‍රතාවට අනුලෝමව සමානුපාතික වේ: e = -dΦ/dt. ලෙන්ස්ගේ නියමය: ප්‍රේරිත ධාරාවේ දිශාව සැමවිටම එය ඇතිවීමට හේතු වූ චුම්භක ස්‍රාව වෙනස්වීමට විරුද්ධ වන දිශාවට පවතී."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Faraday's Law: induced EMF proportional to rate of change of magnetic flux",
            "si": "ෆැරඩේ නියමය: වි.ගා.බ. ස්‍රාවය වෙනස්වීමේ සීඝ්‍රතාවට සමානුපාතික බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Lenz's Law: induced current direction opposes the change in flux",
            "si": "ලෙන්ස් නියමය: ප්‍රේරිත ධාරාව ස්‍රාව වෙනසට විරුද්ධ වන බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Equation e = -dΦ/dt with negative sign indicating Lenz's Law",
            "si": "e = -dΦ/dt සමීකරණය ලෙන්ස් නීතිය සෘණ ලකුණෙන් දැක්වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate induced EMF e = B L v and find direction of current.",
        "si": "ප්‍රේරිත වි.ගා.බ. e = B L v ගණනය කර ධාරාවේ දිශාව සොයන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Formula for motional EMF: e = B L v. Given: B = 0.80 T, L = 0.40 m, v = 5.0 m s⁻¹. Calculation: e = 0.80 T × 0.40 m × 5.0 m s⁻¹ = 1.60 V. Direction: As the rod moves right, the enclosed loop area increases, so magnetic flux directed downwards increases. By Lenz's Law, the induced current must produce an upward magnetic field to oppose this increase. By the right-hand grip rule, an upward field requires a COUNTERCLOCKWISE current viewed from above (current flows upwards through the rod from the bottom rail to the top rail).",
        "si": "e = B L v = 0.80 × 0.40 × 5.0 = 1.60 V. දිශාව: දණ්ඩ දකුණට යන විට පහළට ඇති ස්‍රාවය වැඩි වේ. ලෙන්ස් නියමය අනුව එයට විරුද්ධව ඉහළට ක්ෂේත්‍රයක් ඇති කළ යුතුය. දකුණත් නීතියෙන් ඉහළින් බලන විට වාමාවර්තව (දණ්ඩ ඔස්සේ පහළ රේලයේ සිට ඉහළ රේලය දෙසට) ධාරාව ගලා යයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula e = B L v",
            "si": "e = B L v සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates e = 1.60 V",
            "si": "e = 1.60 V ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Counterclockwise current justified by Lenz's Law",
            "si": "ලෙන්ස් නියමයෙන් වාමාවර්ත ධාරාව තහවුරු කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate I, required force F_ext, and verify mechanical power equals electrical dissipation.",
        "si": "I, F_ext ගණනය කර යාන්ත්‍රික ක්ෂමතාව විද්‍යුත් තාප හානියට සමාන බව සනාථ කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) Total circuit resistance R_total = R + R_rod = 2.0 + 0.50 = 2.50 Ω. Current I = e / R_total = 1.60 V / 2.50 Ω = 0.64 A. (ii) By Fleming's Left-Hand Rule, magnetic retarding force on rod is directed to the left: F_m = B I L = 0.80 T × 0.64 A × 0.40 m = 0.2048 N ≈ 0.205 N. To maintain constant velocity, applied external force F_ext = F_m = 0.2048 N to the right. (iii) Mechanical power supplied: P_mech = F_ext × v = 0.2048 N × 5.0 m s⁻¹ = 1.024 W. Electrical power dissipated as heat: P_elec = I² R_total = (0.64 A)² × 2.50 Ω = 0.4096 × 2.50 = 1.024 W. Since P_mech = P_elec = 1.024 W, energy conservation is verified.",
        "si": "(i) මුළු ප්‍රතිරෝධය = 2.0 + 0.50 = 2.50 Ω. ධාරාව I = 1.60 / 2.50 = 0.64 A. (ii) වමට ක්‍රියා කරන චුම්භක බලය F_m = B I L = 0.80 × 0.64 × 0.40 = 0.2048 N. නියත ප්‍රවේගයට අවශ්‍ය බාහිර බලය F_ext = 0.2048 N දකුණට. (iii) යාන්ත්‍රික ක්ෂමතාව = F × v = 0.2048 × 5.0 = 1.024 W. විද්‍යුත් තාප ක්ෂමතාව = I² R_total = (0.64)² × 2.50 = 1.024 W. P_mech = P_elec = 1.024 W බැවින් ශක්ති සංස්ථිතිය සනාථ වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Total circuit resistance R_total = 2.50 Ω and I = 0.64 A",
            "si": "R_total = 2.50 Ω සහ I = 0.64 A"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Magnetic force F = BIL = 0.205 N",
            "si": "චුම්භක බලය F = BIL = 0.205 N"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mechanical power P_mech = F v = 1.024 W",
            "si": "යාන්ත්‍රික ක්ෂමතාව P_mech = F v = 1.024 W"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Electrical power P_elec = I² R = 1.024 W verifying equivalence",
            "si": "විද්‍යුත් ක්ෂමතාව P_elec = 1.024 W සමාන බව සත්‍යාපනය"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Motional EMF e = BLv; retarding force F = BIL; mechanical power P = Fv equals Joule heating P = I²R_total.",
    "si": "චලිත වි.ගා.බ. e = BLv; වාරක බලය F = BIL; යාන්ත්‍රික ක්ෂමතාව P = Fv ජූල් තාපය P = I²R_total ට සමාන වේ."
  },
  "solution": {
    "en": "e = 1.60 V (counterclockwise). I = 0.64 A; F_ext = 0.205 N. P_mech = P_elec = 1.024 W, verifying conservation of energy.",
    "si": "e = 1.60 V (වාමාවර්ත). I = 0.64 A; F_ext = 0.205 N. P_mech = P_elec = 1.024 W ශක්ති සංස්ථිතිය සනාථ කරයි."
  }
},
{
  "id": "cur-sq10",
  "competencyRef": "Competency 8.6",
  "category": "ac-transformers",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A step-down transformer is designed to operate a 12 V, 60 W halogen lamp from a 240 V AC mains supply. The primary coil has N_p = 1200 turns and the transformer operates with an efficiency of 80%. (a) State the relationship between turns ratio and voltage ratio for an ideal transformer, and calculate the required number of secondary turns N_s. (b) Calculate the secondary current I_s, the primary electrical power input P_in, and the primary current I_p. (c) List four major sources of power loss in practical transformers and state the engineering method employed to minimize each.",
    "si": "240 V ප්‍රත්‍යාවර්ත ප්‍රධාන සැපයුමකින් 12 V, 60 W හැලජන් ලාම්පුවක් ක්‍රියාත්මක කිරීමට බැස්සුම් ට්‍රාන්ස්ෆෝමරයක් නිර්මාණය කර ඇත. ප්‍රාථමික දඟරයේ N_p = 1200 පොටවල් ඇති අතර ට්‍රාන්ස්ෆෝමරයේ කාර්යක්ෂමතාව 80% කි. (a) පරිපූර්ණ ට්‍රාන්ස්ෆෝමරයක පොට අනුපාතය සහ වෝල්ටීයතා අනුපාතය අතර සම්බන්ධය දක්වා ද්විතීයික දඟරයේ අවශ්‍ය පොට සංඛ්‍යාව N_s ගණනය කරන්න. (b) ද්විතීයික ධාරාව I_s, ප්‍රාථමිකයට සැපයිය යුතු විද්‍යුත් ක්ෂමතාව P_in, සහ ප්‍රාථමික ධාරාව I_p ගණනය කරන්න. (c) ප්‍රායෝගික ට්‍රාන්ස්ෆෝමරවල ප්‍රධාන ක්ෂමතා හානි 4 ක් දක්වා ඒ එක් එක් හානිය අවම කිරීමට යොදන ඉංජිනේරුමය ක්‍රම ලියන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate secondary turns N_s using transformer voltage ratio.",
        "si": "ට්‍රාන්ස්ෆෝමර් වෝල්ටීයතා අනුපාතය භාවිතයෙන් N_s ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Ideal transformer equation: V_s / V_p = N_s / N_p => N_s = N_p × (V_s / V_p). Given: N_p = 1200, V_p = 240 V, V_s = 12 V. Calculation: N_s = 1200 × (12 / 240) = 1200 × (1 / 20) = 60 turns.",
        "si": "V_s / V_p = N_s / N_p => N_s = N_p × (V_s / V_p). N_s = 1200 × (12 / 240) = 1200 / 20 = 60."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula V_s / V_p = N_s / N_p",
            "si": "V_s / V_p = N_s / N_p සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitution of voltages 12 V and 240 V",
            "si": "වෝල්ටීයතා නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains N_s = 60 turns",
            "si": "N_s = 60 ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate I_s, input power P_in, and primary current I_p at 80% efficiency.",
        "si": "80% කාර්යක්ෂමතාවයේදී I_s, P_in, සහ I_p ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(i) Secondary output power P_out = 60 W. Secondary current I_s = P_out / V_s = 60 W / 12 V = 5.0 A. (ii) Efficiency η = P_out / P_in => P_in = P_out / η = 60 W / 0.80 = 75 W. (iii) Input power P_in = V_p I_p (assuming unity power factor) => I_p = P_in / V_p = 75 W / 240 V = 0.3125 A ≈ 0.31 A.",
        "si": "(i) ද්විතීයික ධාරාව I_s = P_out / V_s = 60 / 12 = 5.0 A. (ii) ආදාන ක්ෂමතාව P_in = P_out / 0.80 = 60 / 0.80 = 75 W. (iii) ප්‍රාථමික ධාරාව I_p = P_in / V_p = 75 / 240 = 0.3125 A (0.31 A)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Secondary current I_s = 5.0 A",
            "si": "ද්විතීයික ධාරාව I_s = 5.0 A"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Input power P_in = 75 W using efficiency formula",
            "si": "ආදාන ක්ෂමතාව P_in = 75 W"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Primary current I_p = 0.3125 A",
            "si": "ප්‍රාථමික ධාරාව I_p = 0.3125 A"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "List 4 transformer power loss sources and their mitigation methods.",
        "si": "ට්‍රාන්ස්ෆෝමර් ක්ෂමතා හානි 4 ක් සහ ඒවා අවම කරන ක්‍රම දක්වන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(1) Eddy Current Loss: Alternating flux induces circulating currents in the iron core producing Joule heating. Minimized by using a laminated core insulated with lacquer. (2) Hysteresis Loss: Energy dissipated in repeatedly magnetizing and demagnetizing the core during each AC cycle. Minimized by using soft magnetic material with low retentivity and coercive force, such as soft iron or silicon steel. (3) Copper (Joule) Loss: Heating in the resistance of the primary and secondary windings (I²R). Minimized by using thick, low-resistance copper wire, especially for the high-current secondary winding. (4) Flux Leakage: Not all flux produced by the primary links with the secondary coil. Minimized by winding the primary and secondary coils directly on top of each other on a closed core.",
        "si": "(1) සුළි ධාරා හානිය: හරය තුළ ප්‍රේරණය වන සුළි ධාරාවලින් තාපය ජනනය වීම. අවම කිරීමට වාර්නිෂ් ආලේපිත ලැමිණේටඩ් (තට්ටු සහිත) හරයක් භාවිතය. (2) හිස්ටරීසිස් හානිය: චුම්භකනය හා විසංචුම්භකනය වීමේදී වැයවන ශක්තිය. සිලිකන් වානේ හෝ මෘදු යකඩ වැනි අඩු හිස්ටරීසිස් ලූපාකාර ද්‍රව්‍ය භාවිතයෙන් අවම කිරීම. (3) තඹ (ජූල්) හානිය: දඟරවල ප්‍රතිරෝධයේ (I²R) තාප හානිය. විශේෂයෙන් අධි ධාරා ගලන දඟරයට ඝනකම් තඹ කම්බි භාවිතයෙන් අවම කිරීම. (4) ස්‍රාව කාන්දුව: ප්‍රාථමිකයේ ස්‍රාවය සම්පූර්ණයෙන් ද්විතීයිකය සමග නොබැඳීම. සංවෘත හරයක් මත දඟර එකිනෙක මත එතීමෙන් අවම කිරීම."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Eddy current loss minimized by laminated core",
            "si": "සුළි ධාරා හානිය ලැමිණේටඩ් හරයෙන් අවම කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Hysteresis loss minimized by soft iron / silicon steel",
            "si": "හිස්ටරීසිස් හානිය සිලිකන් වානේ/මෘදු යකඩින් අවම කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Copper loss (I²R) minimized by thick copper windings",
            "si": "තඹ හානිය ඝනකම් කම්බිවලින් අවම කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Flux leakage minimized by core geometry / winding on top of each other",
            "si": "ස්‍රාව කාන්දුව දඟර එකිනෙක මත එතීමෙන් අවම කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "V_s / V_p = N_s / N_p; efficiency η = P_out / P_in; 4 losses: eddy currents (laminations), hysteresis (silicon steel), copper loss (thick wire), flux leakage (closed core).",
    "si": "V_s / V_p = N_s / N_p; η = P_out / P_in; හානි 4: සුළි ධාරා (ලැමිනේෂන්), හිස්ටරීසිස් (සිලිකන් වානේ), තඹ හානි (ඝන කම්බි), ස්‍රාව කාන්දුව (සංවෘත හරය)."
  },
  "solution": {
    "en": "N_s = 60 turns; I_s = 5.0 A; P_in = 75 W; I_p = 0.3125 A. Losses: eddy currents (laminated core), hysteresis (soft iron), copper loss (thick wire), flux leakage (concentric windings).",
    "si": "N_s = 60; I_s = 5.0 A; P_in = 75 W; I_p = 0.3125 A. හානි: සුළි ධාරා, හිස්ටරීසිස්, තඹ හානි, ස්‍රාව කාන්දුව."
  }
}
];
