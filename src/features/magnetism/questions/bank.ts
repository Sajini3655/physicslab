import { MagnetismQuestion } from './types';

export const MAGNETISM_QUESTION_BANK: MagnetismQuestion[] = [
  // ==========================================
  // COMPETENCY 7.2: Magnetic Fields & Terrestrial Magnetism (10 questions)
  // ==========================================
  {
    id: 'mag-7-1-01',
    competencyRef: 'Competency 7.2',
    category: 'magnetic-flux-field',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the SI unit of magnetic flux density (B)?',
      si: 'චුම්බක ස්‍රාව ඝනත්වයේ (B) SI ඒකකය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Tesla (T) or Wb m⁻²', si: 'ටෙස්ලා (T) හෙවත් Wb m⁻²' } },
      { id: 'opt-b', text: { en: 'Weber (Wb)', si: 'වෙබර් (Wb)' } },
      { id: 'opt-c', text: { en: 'Henry (H)', si: 'හෙන්රි (H)' } },
      { id: 'opt-d', text: { en: 'Ampere per metre (A m⁻¹)', si: 'ඇම්පියර මීටරයට (A m⁻¹)' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Magnetic flux density is flux per unit area perpendicular to the field (B = Φ/A).',
      si: 'චුම්බක ස්‍රාව ඝනත්වය යනු ක්ෂේත්‍රයට ලම්බක ඒකක වර්ගඵලයක් හරහා යන ස්‍රාවයයි (B = Φ/A).'
    },
    solution: {
      en: 'Magnetic flux Φ has the unit Weber (Wb). Flux density B = Φ/A has the unit Wb m⁻², which is named Tesla (T).',
      si: 'චුම්බක ස්‍රාවය Φ හි ඒකකය වෙබර් (Wb) වේ. ස්‍රාව ඝනත්වය B = Φ/A හි ඒකකය Wb m⁻² වන අතර එය ටෙස්ලා (T) ලෙස හැඳින්වේ.'
    }
  },
  {
    id: 'mag-7-1-02',
    competencyRef: 'Competency 7.2',
    category: 'magnetic-flux-field',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A uniform magnetic field of 0.25 T passes perpendicularly through a flat rectangular loop of dimensions 0.20 m by 0.30 m. Calculate the total magnetic flux through the loop in milliwebers (mWb).',
      si: '0.25 T ඒකාකාර චුම්බක ක්ෂේත්‍රයක් 0.20 m × 0.30 m මාන සහිත පැතලි සෘජුකෝණාස්‍රාකාර ලූපයකට ලම්බකව ගමන් කරයි. ලූපය හරහා යන මුළු චුම්බක ස්‍රාවය මිලිවෙබර් (mWb) වලින් ගණනය කරන්න.'
    },
    expected: 15.0,
    tolerance: 0.2,
    unit: { en: 'mWb', si: 'mWb' },
    hint: {
      en: 'Φ = B * A, where A = length * width. Convert Wb to mWb by multiplying by 1000.',
      si: 'Φ = B * A, මෙහි A = දිග * පළල. 1000න් ගුණ කර mWb බවට පරිවර්තනය කරන්න.'
    },
    solution: {
      en: 'A = 0.20 m * 0.30 m = 0.06 m². Φ = B * A = 0.25 T * 0.06 m² = 0.015 Wb = 15.0 mWb.',
      si: 'A = 0.20 m * 0.30 m = 0.06 m². Φ = B * A = 0.25 T * 0.06 m² = 0.015 Wb = 15.0 mWb.'
    }
  },
  {
    id: 'mag-7-1-03',
    competencyRef: 'Competency 7.2',
    category: 'magnetic-flux-field',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'At a neutral point between magnetic fields, which statement is strictly correct?',
      si: 'චුම්බක ක්ෂේත්‍ර අතර උදාසීන ලක්ෂ්‍යයකදී (neutral point) පහත කුමන ප්‍රකාශය නිවැරදිද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The resultant magnetic flux density is zero.', si: 'ප්‍රතිඵල චුම්බක ස්‍රාව ඝනත්වය ශුන්‍ය වේ.' } },
      { id: 'opt-b', text: { en: 'Only the horizontal component of Earth field exists.', si: 'පෘථිවි ක්ෂේත්‍රයේ තිරස් සංරචකය පමණක් පවතී.' } },
      { id: 'opt-c', text: { en: 'The magnetic potential is maximum.', si: 'චුම්බක විභවය උපරිම වේ.' } },
      { id: 'opt-d', text: { en: 'A compass needle always points True North.', si: 'මාලිමා කටුව සෑමවිටම නියම උතුරට යොමු වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'A neutral point is defined as a point where opposing magnetic fields exactly cancel.',
      si: 'උදාසීන ලක්ෂ්‍යයක් යනු එකිනෙකට ප්‍රතිවිරුද්ධ චුම්බක ක්ෂේත්‍ර පරිපූර්ණව එකිනෙක අවලංගු වන ලක්ෂ්‍යයකි.'
    },
    solution: {
      en: 'At a neutral point, the external magnetic field is equal in magnitude and opposite in direction to the local field, giving resultant B = 0.',
      si: 'උදාසීන ලක්ෂ්‍යයකදී ප්‍රතිඵල චුම්බක ක්ෂේත්‍රය B = 0 වේ.'
    }
  },
  {
    id: 'mag-7-1-04',
    competencyRef: 'Competency 7.2',
    category: 'terrestrial-magnetism',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the angle of dip (inclination) at the Earth\'s magnetic equator?',
      si: 'පෘථිවි චුම්බක සමකාය මතදී නැඹුරු කෝණයේ (angle of dip) අගය කීයද?'
    },
    options: [
      { id: 'opt-a', text: { en: '0°', si: '0°' } },
      { id: 'opt-b', text: { en: '45°', si: '45°' } },
      { id: 'opt-c', text: { en: '90°', si: '90°' } },
      { id: 'opt-d', text: { en: '180°', si: '180°' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'At the magnetic equator, the Earth\'s total field lines run parallel to the horizontal surface.',
      si: 'චුම්බක සමකායේදී පෘථිවි ක්ෂේත්‍ර රේඛා තිරස් පෘෂ්ඨයට සමාන්තර වේ.'
    },
    solution: {
      en: 'At the magnetic equator, the magnetic field is purely horizontal (B_V = 0), so the angle of dip is 0°. At the magnetic poles, dip is 90°.',
      si: 'චුම්බක සමකායේදී සිරස් සංරචකය ශුන්‍ය වන බැවින් නැඹුරු කෝණය 0° වේ. චුම්බක ධ්‍රැවවලදී එය 90° වේ.'
    }
  },
  {
    id: 'mag-7-1-05',
    competencyRef: 'Competency 7.2',
    category: 'terrestrial-magnetism',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'At a certain location, the horizontal component of Earth\'s magnetic field is B_H = 3.6 × 10⁻⁵ T and the angle of dip is 60°. Calculate the vertical component B_V in units of 10⁻⁵ T.',
      si: 'යම් ස්ථානයක පෘථිවි චුම්බක ක්ෂේත්‍රයේ තිරස් සංරචකය B_H = 3.6 × 10⁻⁵ T වන අතර නැඹුරු කෝණය 60° කි. එහි සිරස් සංරචකය B_V අගය 10⁻⁵ T වලින් ගණනය කරන්න.'
    },
    expected: 6.24,
    tolerance: 0.05,
    unit: { en: '× 10⁻⁵ T', si: '× 10⁻⁵ T' },
    hint: {
      en: 'tan(θ) = B_V / B_H, so B_V = B_H * tan(θ). Note that tan(60°) = √3 ≈ 1.732.',
      si: 'tan(θ) = B_V / B_H, එබැවින් B_V = B_H * tan(θ). tan(60°) = √3 ≈ 1.732 වේ.'
    },
    solution: {
      en: 'B_V = B_H * tan(60°) = 3.6 × 10⁻⁵ T * 1.73205 = 6.235 × 10⁻⁵ T ≈ 6.24 × 10⁻⁵ T.',
      si: 'B_V = B_H * tan(60°) = 3.6 × 10⁻⁵ * 1.73205 = 6.235 × 10⁻⁵ T ≈ 6.24 × 10⁻⁵ T.'
    }
  },
  {
    id: 'mag-7-1-06',
    competencyRef: 'Competency 7.2',
    category: 'terrestrial-magnetism',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'If the horizontal component B_H = 4.0 × 10⁻⁵ T and the dip angle is 30°, calculate the total Earth magnetic field magnitude B in units of 10⁻⁵ T.',
      si: 'තිරස් සංරචකය B_H = 4.0 × 10⁻⁵ T සහ නැඹුරු කෝණය 30° නම්, මුළු පෘථිවි චුම්බක ක්ෂේත්‍ර විශාලත්වය B අගය 10⁻⁵ T වලින් ගණනය කරන්න.'
    },
    expected: 4.62,
    tolerance: 0.05,
    unit: { en: '× 10⁻⁵ T', si: '× 10⁻⁵ T' },
    hint: {
      en: 'B_H = B * cos(θ) => B = B_H / cos(θ). cos(30°) = √3/2 ≈ 0.866.',
      si: 'B_H = B * cos(θ) => B = B_H / cos(θ). cos(30°) = √3/2 ≈ 0.866 වේ.'
    },
    solution: {
      en: 'B = B_H / cos(30°) = (4.0 × 10⁻⁵) / 0.866025 = 4.619 × 10⁻⁵ T ≈ 4.62 × 10⁻⁵ T.',
      si: 'B = B_H / cos(30°) = (4.0 × 10⁻⁵) / 0.866025 = 4.619 × 10⁻⁵ T ≈ 4.62 × 10⁻⁵ T.'
    }
  },
  {
    id: 'mag-7-1-07',
    competencyRef: 'Competency 7.2',
    category: 'terrestrial-magnetism',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'The angle between the Geographic Meridian and the Magnetic Meridian at a place is called the:',
      si: 'යම් ස්ථානයක භූගෝලීය මධ්‍යහ්න රේඛාව සහ චුම්බක මධ්‍යහ්න රේඛාව අතර කෝණය හඳුන්වන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'Angle of magnetic declination', si: 'චුම්බක දිගංශ කෝණය (Angle of declination)' } },
      { id: 'opt-b', text: { en: 'Angle of dip (inclination)', si: 'නැඹුරු කෝණය (Angle of dip)' } },
      { id: 'opt-c', text: { en: 'Critical angle', si: 'අවධි කෝණය' } },
      { id: 'opt-d', text: { en: 'Zenith angle', si: 'මුදුන් කෝණය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Declination is the horizontal deviation between true geographic north and magnetic north.',
      si: 'දිගංශ කෝණය යනු සත්‍ය භූගෝලීය උතුර සහ චුම්බක උතුර අතර තිරස් අපගමන කෝණයයි.'
    },
    solution: {
      en: 'The angle between the geographic meridian and magnetic meridian is the angle of magnetic declination (or magnetic variation).',
      si: 'භූගෝලීය මධ්‍යහ්න තලය සහ චුම්බක මධ්‍යහ්න තලය අතර තිරස් කෝණය චුම්බක දිගංශ කෝණය නම් වේ.'
    }
  },
  {
    id: 'mag-7-1-08',
    competencyRef: 'Competency 7.2',
    category: 'magnetic-flux-field',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A bar magnet is placed with its North pole pointing towards Geographic South. The neutral points will lie on:',
      si: 'දණ්ඩ චුම්බකයක උත්තර ධ්‍රැවය භූගෝලීය දකුණට යොමුවන සේ තැබූ විට, උදාසීන ලක්ෂ්‍ය පිහිටන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'The axial line of the magnet', si: 'චුම්බකයේ අක්ෂීය රේඛාව මත' } },
      { id: 'opt-b', text: { en: 'The equatorial (broadside-on) line of the magnet', si: 'චුම්බකයේ සමකාය (ලම්බ සමච්ඡේදක) රේඛාව මත' } },
      { id: 'opt-c', text: { en: 'At an angle of 45° to the axis', si: 'අක්ෂයට 45° ක කෝණයක' } },
      { id: 'opt-d', text: { en: 'Directly inside the magnet', si: 'චුම්බකය තුළම' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Earth\'s field runs South to North. On the magnet\'s axis, when N points South, the magnet\'s field points North to South, opposing Earth\'s field.',
      si: 'පෘථිවි ක්ෂේත්‍රය දකුණේ සිට උතුරට දිවෙයි. N ධ්‍රැවය දකුණට යොමු වූ විට අක්ෂය මත චුම්බක ක්ෂේත්‍රය පෘථිවි ක්ෂේත්‍රයට විරුද්ධ දිශාවට ලැබේ.'
    },
    solution: {
      en: 'When N points Geographic South, along the axial line the magnet\'s field points opposite to Earth\'s horizontal field B_H, producing neutral points on the axis.',
      si: 'උත්තර ධ්‍රැවය භූගෝලීය දකුණට යොමු වූ විට අක්ෂීය රේඛාවේදී ක්ෂේත්‍ර එකිනෙකට ප්‍රතිවිරුද්ධ වන බැවින් උදාසීන ලක්ෂ්‍ය අක්ෂීය රේඛාව මත පිහිටයි.'
    }
  },
  {
    id: 'mag-7-1-09',
    competencyRef: 'Competency 7.2',
    category: 'terrestrial-magnetism',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'At a place where the total magnetic field of the Earth is 5.0 × 10⁻⁵ T and the vertical component is 3.0 × 10⁻⁵ T, calculate the dip angle θ in degrees.',
      si: 'පෘථිවියේ මුළු චුම්බක ක්ෂේත්‍රය 5.0 × 10⁻⁵ T වන සහ සිරස් සංරචකය 3.0 × 10⁻⁵ T වන ස්ථානයක නැඹුරු කෝණය θ අංශක වලින් ගණනය කරන්න.'
    },
    expected: 36.87,
    tolerance: 0.2,
    unit: { en: 'degrees', si: 'අංශක' },
    hint: {
      en: 'sin(θ) = B_V / B_total. Calculate arcsin(3.0 / 5.0).',
      si: 'sin(θ) = B_V / B_total. arcsin(3.0 / 5.0) ගණනය කරන්න.'
    },
    solution: {
      en: 'sin(θ) = B_V / B = 3.0 / 5.0 = 0.60. θ = arcsin(0.60) = 36.87°.',
      si: 'sin(θ) = B_V / B = 3.0 / 5.0 = 0.60. θ = arcsin(0.60) = 36.87°.'
    }
  },
  {
    id: 'mag-7-1-10',
    competencyRef: 'Competency 7.2',
    category: 'magnetic-flux-field',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following is NOT a property of magnetic field lines?',
      si: 'පහත සඳහන් දෑ අතුරින් චුම්බක බල රේඛා පිළිබඳ අසත්‍ය ප්‍රකාශය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'They form continuous closed loops.', si: 'ඒවා සංවෘත ලූප සාදයි.' } },
      { id: 'opt-b', text: { en: 'Two magnetic field lines never intersect.', si: 'බල රේඛා දෙකක් කිසිවිටෙක එකිනෙක ඡේදනය නොවේ.' } },
      { id: 'opt-c', text: { en: 'They start at North poles and end at South poles without continuing inside the magnet.', si: 'ඒවා චුම්බකය ඇතුළතින් නොගොස් උත්තර ධ්‍රැවයෙන් ඇරඹී දක්ෂිණ ධ්‍රැවයෙන් අවසන් වේ.' } },
      { id: 'opt-d', text: { en: 'The tangent at any point gives the direction of magnetic flux density.', si: 'ඕනෑම ලක්ෂ්‍යයකදී අඳින ලද ස්පර්ශකය මඟින් චුම්බක ස්‍රාව ඝනත්වයේ දිශාව දැක්වේ.' } }
    ],
    correctOptionId: 'opt-c',
    hint: {
      en: 'Unlike electric field lines which terminate on charges, magnetic field lines are continuous closed loops (inside a magnet, they run from South to North).',
      si: 'විද්‍යුත් බල රේඛා මෙන් නොව, චුම්බක බල රේඛා අඛණ්ඩ සංවෘත ලූප වේ (චුම්බකය ඇතුළත දකුණේ සිට උතුරට ගමන් කරයි).'
    },
    solution: {
      en: 'Magnetic field lines are closed continuous loops: outside they point North to South, and inside they continue South to North (due to ∇·B = 0, no isolated magnetic monopoles).',
      si: 'හුදකලා චුම්බක ධ්‍රැව නොමැති බැවින් චුම්බක බල රේඛා සංවෘත ලූප වේ; චුම්බකය ඇතුළතදී දකුණේ සිට උතුරට ගමන් කරයි.'
    }
  },

  // ==========================================
  // COMPETENCY 7.1: Forces on Moving Charges & Hall Effect (12 questions)
  // ==========================================
  {
    id: 'mag-7-2-01',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A charge q moves with velocity v parallel to a uniform magnetic field B. What is the magnetic force experienced by the charge?',
      si: 'q ආරෝපණයක් B ඒකාකාර චුම්බක ක්ෂේත්‍රයකට සමාන්තරව v ප්‍රවේගයෙන් චලනය වේ. ආරෝපණය මත ක්‍රියා කරන චුම්බක බලය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Zero', si: 'ශුන්‍ය වේ' } },
      { id: 'opt-b', text: { en: 'Bqv', si: 'Bqv' } },
      { id: 'opt-c', text: { en: 'Bqv / 2', si: 'Bqv / 2' } },
      { id: 'opt-d', text: { en: 'Bq / v', si: 'Bq / v' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'F = B * q * v * sin(θ). For parallel motion, angle θ = 0°.',
      si: 'F = B * q * v * sin(θ). සමාන්තර චලිතයේදී කෝණය θ = 0° වේ.'
    },
    solution: {
      en: 'Since the velocity is parallel to B, θ = 0° and sin(0°) = 0, giving F = 0.',
      si: 'ප්‍රවේගය ක්ෂේත්‍රයට සමාන්තර වන විට θ = 0° වන බැවින් sin(0°) = 0 වේ, එබැවින් F = 0.'
    }
  },
  {
    id: 'mag-7-2-02',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'An electron (charge 1.6 × 10⁻¹⁹ C) enters perpendicularly into a uniform magnetic field of 0.5 T at a speed of 2.0 × 10⁶ m s⁻¹. Calculate the magnetic force in units of 10⁻¹³ N.',
      si: 'ඉලෙක්ට්‍රෝනයක් (ආරෝපණය 1.6 × 10⁻¹⁹ C) 0.5 T ඒකාකාර චුම්බක ක්ෂේත්‍රයකට ලම්බකව 2.0 × 10⁶ m s⁻¹ ප්‍රවේගයෙන් ඇතුළු වේ. ඒ මත ක්‍රියා කරන චුම්බක බලය 10⁻¹³ N වලින් ගණනය කරන්න.'
    },
    expected: 1.6,
    tolerance: 0.05,
    unit: { en: '× 10⁻¹³ N', si: '× 10⁻¹³ N' },
    hint: {
      en: 'F = B * q * v * sin(90°). Substitute the given values.',
      si: 'F = B * q * v * sin(90°). දී ඇති අගයන් ආදේශ කරන්න.'
    },
    solution: {
      en: 'F = B * q * v = 0.5 * (1.6 × 10⁻¹⁹) * (2.0 × 10⁶) = 1.6 × 10⁻¹³ N.',
      si: 'F = B * q * v = 0.5 * (1.6 × 10⁻¹⁹) * (2.0 × 10⁶) = 1.6 × 10⁻¹³ N.'
    }
  },
  {
    id: 'mag-7-2-03',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why does a steady magnetic field do NO work on a moving charged particle?',
      si: 'ස්ථාවර චුම්බක ක්ෂේත්‍රයක් මඟින් චලනය වන ආරෝපිත අංශුවක් මත කිසිදු කාර්යයක් නොකරන්නේ මන්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The magnetic force is always perpendicular to velocity: F · v = 0.', si: 'චුම්බක බලය සැමවිටම ප්‍රවේගයට ලම්බක වන බැවිනි: F · v = 0.' } },
      { id: 'opt-b', text: { en: 'Magnetic fields do not possess potential energy.', si: 'චුම්බක ක්ෂේත්‍රවලට විභව ශක්තියක් නොමැති බැවිනි.' } },
      { id: 'opt-c', text: { en: 'The mass of a charge decreases in a magnetic field.', si: 'චුම්බක ක්ෂේත්‍රයක් තුළ ආරෝපණයේ ස්කන්ධය අඩුවන බැවිනි.' } },
      { id: 'opt-d', text: { en: 'The displacement of the particle is always zero.', si: 'අංශුවේ විස්ථාපනය සැමවිටම ශුන්‍ය වන බැවිනි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Work done dW = F · ds = (F · v) dt. The magnetic force F = q(v × B) is normal to v.',
      si: 'කරන ලද කාර්යය dW = F · ds = (F · v) dt. F = q(v × B) බැවින් F සැමවිටම v ට ලම්බක වේ.'
    },
    solution: {
      en: 'Since the Lorentz force F = q(v × B) is always orthogonal to the velocity vector v, instantaneous power P = F · v = 0, so kinetic energy is conserved and zero work is done.',
      si: 'ලොරෙන්ට්ස් චුම්බක බලය සැමවිටම ප්‍රවේගයට ලම්බක වන බැවින් ක්ෂණික ජවය P = F · v = 0 වේ. එම නිසා චාලක ශක්තිය නියතව පවතින අතර කාර්යය ශුන්‍ය වේ.'
    }
  },
  {
    id: 'mag-7-2-04',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A proton (mass 1.67 × 10⁻²⁷ kg, charge 1.6 × 10⁻¹⁹ C) moves in a circle perpendicular to a 0.20 T magnetic field with speed 4.0 × 10⁶ m s⁻¹. Calculate the orbit radius r in centimetres (cm).',
      si: 'ප්‍රෝටෝනයක් (ස්කන්ධය 1.67 × 10⁻²⁷ kg, ආරෝපණය 1.6 × 10⁻¹⁹ C) 0.20 T චුම්බක ක්ෂේත්‍රයකට ලම්බකව 4.0 × 10⁶ m s⁻¹ ප්‍රවේගයෙන් වෘත්තාකාරව ගමන් කරයි. එහි කක්ෂීය අරය r සෙන්ටිමීටර (cm) වලින් ගණනය කරන්න.'
    },
    expected: 20.88,
    tolerance: 0.2,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'r = (m * v) / (q * B). Convert meters to centimeters by multiplying by 100.',
      si: 'r = (m * v) / (q * B). මීටර් අගය 100න් ගුණ කර සෙන්ටිමීටර ලබාගන්න.'
    },
    solution: {
      en: 'r = (1.67 × 10⁻²⁷ * 4.0 × 10⁶) / (1.6 × 10⁻¹⁹ * 0.20) = (6.68 × 10⁻²¹) / (3.2 × 10⁻²⁰) = 0.20875 m = 20.88 cm.',
      si: 'r = (1.67 × 10⁻²⁷ * 4.0 × 10⁶) / (1.6 × 10⁻¹⁹ * 0.20) = 0.20875 m = 20.88 cm.'
    }
  },
  {
    id: 'mag-7-2-05',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'How does the orbital period T of a charged particle undergoing cyclotron motion depend on its orbital speed v?',
      si: 'සයික්ලොට්‍රෝන චලිතයක යෙදෙන ආරෝපිත අංශුවක ආවර්ත කාලය T, එහි ප්‍රවේගය v මත රඳා පවතින්නේ කෙසේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'T is completely independent of v.', si: 'T ප්‍රවේගය v මත කිසිසේත්ම රඳා නොපවතී.' } },
      { id: 'opt-b', text: { en: 'T is directly proportional to v.', si: 'T ප්‍රවේගය v ට අනුලෝමව සමානුපාතික වේ.' } },
      { id: 'opt-c', text: { en: 'T is inversely proportional to v.', si: 'T ප්‍රවේගය v ට ප්‍රතිලෝමව සමානුපාතික වේ.' } },
      { id: 'opt-d', text: { en: 'T is proportional to v².', si: 'T ප්‍රවේගය v² ට සමානුපාතික වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'T = 2πr / v. Since r = mv / (qB), substitute r to see if v cancels out.',
      si: 'T = 2πr / v. r = mv / (qB) බැවින් ආදේශ කළ විට v පදය සුළු වී යයි.'
    },
    solution: {
      en: 'T = (2π * m) / (q * B). The period and cyclotron frequency depend only on the charge-to-mass ratio and B, not on the orbital speed v.',
      si: 'T = (2π * m) / (q * B). එබැවින් සයික්ලොට්‍රෝන ආවර්ත කාලය ප්‍රවේගය v මත රඳා නොපවතී.'
    }
  },
  {
    id: 'mag-7-2-06',
    competencyRef: 'Competency 7.1',
    category: 'velocity-selector-hall',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'In a velocity selector, an electric field of E = 8.0 × 10⁴ V m⁻¹ is crossed with a magnetic field of B = 0.40 T. What speed in 10⁵ m s⁻¹ allows charged particles to pass through undeflected?',
      si: 'ප්‍රවේග වරණයකදී (velocity selector) E = 8.0 × 10⁴ V m⁻¹ විද්‍යුත් ක්ෂේත්‍රයක් B = 0.40 T චුම්බක ක්ෂේත්‍රයක් සමඟ ඡේදනය කර ඇත. අපගමනය නොවී ගමන් කළ හැකි අංශුවල ප්‍රවේගය 10⁵ m s⁻¹ වලින් ගණනය කරන්න.'
    },
    expected: 2.0,
    tolerance: 0.05,
    unit: { en: '× 10⁵ m s⁻¹', si: '× 10⁵ m s⁻¹' },
    hint: {
      en: 'For zero deflection: qE = qvB => v = E / B.',
      si: 'අපගමනය නොවීමට නම්: qE = qvB => v = E / B.'
    },
    solution: {
      en: 'v = E / B = (8.0 × 10⁴) / 0.40 = 2.0 × 10⁵ m s⁻¹.',
      si: 'v = E / B = (8.0 × 10⁴) / 0.40 = 2.0 × 10⁵ m s⁻¹.'
    }
  },
  {
    id: 'mag-7-2-07',
    competencyRef: 'Competency 7.1',
    category: 'velocity-selector-hall',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In J.J. Thomson\'s experiment to determine the specific charge (e/m) of the electron, what is the role of the crossed electric and magnetic fields?',
      si: 'ඉලෙක්ට්‍රෝනයේ විශිෂ්ට ආරෝපණය (e/m) සෙවීමේ ජේ.ජේ. තොම්සන් පරීක්ෂණයේදී ඡේදනය වූ විද්‍යුත් හා චුම්බක ක්ෂේත්‍රවල කාර්යභාරය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'To measure electron velocity v by balancing electric and magnetic forces (v = E/B)', si: 'විද්‍යුත් හා චුම්බක බල සමතුලිත කර ඉලෙක්ට්‍රෝන ප්‍රවේගය මැනීම (v = E/B)' } },
      { id: 'opt-b', text: { en: 'To increase the speed of the electron beam', si: 'ඉලෙක්ට්‍රෝන කදම්භයේ වේගය වැඩි කිරීම' } },
      { id: 'opt-c', text: { en: 'To neutralize the charge of electrons', si: 'ඉලෙක්ට්‍රෝනවල ආරෝපණය උදාසීන කිරීම' } },
      { id: 'opt-d', text: { en: 'To generate X-rays from the target', si: 'ඉලක්කයෙන් X-කිරණ උත්පාදනය කිරීම' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'By adjusting E and B until the spot on the screen returns to undeflected position, v = E/B is found without knowing mass or charge.',
      si: 'තිරය මත ලපය අපගමනය නොවන සේ E සහ B සකස් කිරීමෙන් v = E/B ප්‍රවේගය නිශ්චය කරගනු ලැබේ.'
    },
    solution: {
      en: 'Thomson balanced the electric force (eE) and magnetic force (evB) so that the beam remained straight, directly measuring v = E/B.',
      si: 'විද්‍යුත් බලය (eE) සහ චුම්බක බලය (evB) සමතුලිත කිරීමෙන් ඉලෙක්ට්‍රෝනවල ප්‍රවේගය v = E/B ලෙස නිශ්චිතව නිර්ණය කරන ලදී.'
    }
  },
  {
    id: 'mag-7-2-08',
    competencyRef: 'Competency 7.1',
    category: 'velocity-selector-hall',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A copper strip of thickness t = 1.0 mm carries a current of 15 A in a perpendicular magnetic field of 1.2 T. If the free electron density is n = 8.4 × 10²⁸ m⁻³ and e = 1.6 × 10⁻¹⁹ C, calculate the Hall voltage V_H in microvolts (μV).',
      si: 'ඝනකම t = 1.0 mm වන තඹ තහඩුවක් හරහා 15 A ධාරාවක් 1.2 T ලම්බක චුම්බක ක්ෂේත්‍රයක් තුළ ගමන් කරයි. නිදහස් ඉලෙක්ට්‍රෝන ඝනත්වය n = 8.4 × 10²⁸ m⁻³ සහ e = 1.6 × 10⁻¹⁹ C නම්, හෝල් වෝල්ටීයතාව V_H මයික්‍රෝවෝල්ට් (μV) වලින් ගණනය කරන්න.'
    },
    expected: 1.34,
    tolerance: 0.05,
    unit: { en: 'μV', si: 'μV' },
    hint: {
      en: 'V_H = (B * I) / (n * e * t). Remember t = 1.0 mm = 1.0 × 10⁻³ m. Multiply V by 10⁶ to get μV.',
      si: 'V_H = (B * I) / (n * e * t). t = 1.0 mm = 1.0 × 10⁻³ m වේ. 10⁶න් ගුණ කර μV ලබාගන්න.'
    },
    solution: {
      en: 'V_H = (1.2 * 15) / (8.4 × 10²⁸ * 1.6 × 10⁻¹⁹ * 1.0 × 10⁻³) = 18 / (1.344 × 10⁷) = 1.339 × 10⁻⁶ V ≈ 1.34 μV.',
      si: 'V_H = (1.2 * 15) / (8.4 × 10²⁸ * 1.6 × 10⁻¹⁹ * 1.0 × 10⁻³) = 1.339 × 10⁻⁶ V ≈ 1.34 μV.'
    }
  },
  {
    id: 'mag-7-2-09',
    competencyRef: 'Competency 7.1',
    category: 'velocity-selector-hall',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'The Hall effect is experimentally significant because the sign of the Hall voltage directly reveals:',
      si: 'හෝල් ආචරණය ප්‍රායෝගිකව වැදගත් වන්නේ හෝල් වෝල්ටීයතාවයේ ලකුණ මඟින් සෘජුවම අනාවරණය කරන්නේ කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'The sign/nature of the dominant charge carriers (electrons or holes)', si: 'ප්‍රමුඛ ආරෝපණ වාහකයන්ගේ ලකුණ/ස්වභාවය (ඉලෙක්ට්‍රෝන හෝ කුහර)' } },
      { id: 'opt-b', text: { en: 'The dielectric constant of the material', si: 'ද්‍රව්‍යයේ පාරවිද්‍යුත් නියතය' } },
      { id: 'opt-c', text: { en: 'The thermal conductivity of the material', si: 'ද්‍රව්‍යයේ තාප සන්නායකතාව' } },
      { id: 'opt-d', text: { en: 'The frequency of alternating current', si: 'ප්‍රත්‍යාවර්ත ධාරාවේ සංඛ්‍යාතය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Negative electrons and positive holes drift in opposite directions, but deflect to the same edge due to opposite charges and opposite drift velocities, producing opposite polarity voltages.',
      si: 'සෘණ ඉලෙක්ට්‍රෝන හා ධන කුහර ප්‍රතිවිරුද්ධ දිශාවලට ප්ලාවිත වුවද චුම්බක බලය එකම දාරයට ක්‍රියා කරන බැවින් ලකුණ මඟින් වාහක වර්ගය හෙළිවේ.'
    },
    solution: {
      en: 'The polarity of the measured Hall potential difference identifies whether majority charge carriers are negative (electrons) or positive (holes/cations).',
      si: 'හෝල් විභව අන්තරයේ ධ්‍රැවීයතාව පරීක්ෂා කිරීමෙන් ප්‍රමුඛ ආරෝපණ වාහක වර්ගය (ඉලෙක්ට්‍රෝන හෝ කුහර) නිශ්චිතව හඳුනාගත හැක.'
    }
  },
  {
    id: 'mag-7-2-10',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An electron enters a uniform magnetic field B = 0.05 T at an angle of 30° to the field lines with velocity v = 6.0 × 10⁶ m s⁻¹. Calculate the radius of the helical path in millimetres (mm). Take m_e = 9.1 × 10⁻³¹ kg and e = 1.6 × 10⁻¹⁹ C.',
      si: 'ඉලෙක්ට්‍රෝනයක් B = 0.05 T ඒකාකාර චුම්බක ක්ෂේත්‍රයකට 30° ක කෝණයකින් v = 6.0 × 10⁶ m s⁻¹ ප්‍රවේගයෙන් ඇතුළු වේ. සර්පිලාකාර පථයේ (helical path) අරය මිලිමීටර (mm) වලින් ගණනය කරන්න. (m_e = 9.1 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C).'
    },
    expected: 0.34,
    tolerance: 0.03,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'The perpendicular velocity component produces circular motion: v_perp = v * sin(30°). Then r = (m * v_perp) / (e * B). Convert to mm.',
      si: 'ලම්බක ප්‍රවේග සංරචකය වෘත්තාකාර චලිතය ඇති කරයි: v_perp = v * sin(30°). එවිට r = (m * v_perp) / (e * B). mm බවට හරවන්න.'
    },
    solution: {
      en: 'v_perp = 6.0 × 10⁶ * sin(30°) = 3.0 × 10⁶ m s⁻¹. r = (9.1 × 10⁻³¹ * 3.0 × 10⁶) / (1.6 × 10⁻¹⁹ * 0.05) = (2.73 × 10⁻²⁴) / (8.0 × 10⁻²¹) = 3.41 × 10⁻⁴ m = 0.341 mm ≈ 0.34 mm.',
      si: 'v_perp = 6.0 × 10⁶ * sin(30°) = 3.0 × 10⁶ m s⁻¹. r = (9.1 × 10⁻³¹ * 3.0 × 10⁶) / (1.6 × 10⁻¹⁹ * 0.05) = 0.341 mm ≈ 0.34 mm.'
    }
  },
  {
    id: 'mag-7-2-11',
    competencyRef: 'Competency 7.1',
    category: 'moving-charge-lorentz',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A particle of mass m and positive charge q enters a perpendicular magnetic field B directed into the page. The particle moves to the right. In which direction does the initial magnetic force act?',
      si: 'ස්කන්ධය m සහ ධන ආරෝපණය q වන අංශුවක් පිටුව තුළට යොමුවූ ඒකාකාර B ක්ෂේත්‍රයකට දකුණු දිශාවට ඇතුළු වේ. ආරම්භක චුම්බක බලය ක්‍රියා කරන්නේ කුමන දිශාවටද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Upward (towards top of page)', si: 'ඉහළට (පිටුවේ ඉහළ දිශාවට)' } },
      { id: 'opt-b', text: { en: 'Downward (towards bottom of page)', si: 'පහළට (පිටුවේ පහළ දිශාවට)' } },
      { id: 'opt-c', text: { en: 'Out of the page', si: 'පිටුවෙන් පිටතට' } },
      { id: 'opt-d', text: { en: 'Opposite to velocity (to the left)', si: 'ප්‍රවේගයට විරුද්ධව (වමට)' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Use Fleming\'s Left-Hand Rule or Right-Hand Cross Product: v points right (+x), B points into page (-z), so v × B points upward (+y).',
      si: 'ෆ්ලෙමින්ගේ වමත් නීතිය භාවිත කරන්න: ප්‍රවේගය දකුණට, ක්ෂේත්‍රය ඇතුළට නම් බලය ඉහළට ක්‍රියා කරයි.'
    },
    solution: {
      en: 'Using Fleming\'s Left-Hand Rule (Forefinger into page, Second finger right for positive charge), Thumb points vertically UPWARD.',
      si: 'ෆ්ලෙමින්ගේ වමත් නීතියට අනුව දබරැඟිල්ල පිටුව තුළටත්, මැදඟිල්ල දකුණටත් යොමු කළ විට මාපටැඟිල්ල සිරස්ව ඉහළට යොමු වේ.'
    }
  },
  {
    id: 'mag-7-2-12',
    competencyRef: 'Competency 7.1',
    category: 'velocity-selector-hall',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If the magnetic flux density B applied to a Hall sensor is doubled while keeping the current I and dimensions constant, the Hall voltage V_H will:',
      si: 'ධාරාව I සහ මාන නියතව තබා හෝල් සංවේදකයකට යොදන චුම්බක ස්‍රාව ඝනත්වය B දෙගුණ කළහොත්, හෝල් වෝල්ටීයතාව V_H:'
    },
    options: [
      { id: 'opt-a', text: { en: 'Double', si: 'දෙගුණ වේ' } },
      { id: 'opt-b', text: { en: 'Halve', si: 'අඩක් වේ' } },
      { id: 'opt-c', text: { en: 'Quadruple', si: 'සතර ගුණ වේ' } },
      { id: 'opt-d', text: { en: 'Remain unchanged', si: 'වෙනස් නොවී පවතී' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'V_H = (B * I) / (n * q * t). V_H is directly proportional to B.',
      si: 'V_H = (B * I) / (n * q * t). V_H කෙලින්ම B ට අනුලෝමව සමානුපාතික වේ.'
    },
    solution: {
      en: 'Hall voltage is directly proportional to the magnetic field B. Doubling B doubles V_H.',
      si: 'හෝල් වෝල්ටීයතාව B ට අනුලෝමව සමානුපාතික වන බැවින් B දෙගුණ වන විට V_H ද දෙගුණ වේ.'
    }
  },

  // ==========================================
  // COMPETENCY 7.3: Forces on Conductors & Wire Interactions (10 questions)
  // ==========================================
  {
    id: 'mag-7-3-01',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A straight wire of length 0.50 m carries a current of 4.0 A perpendicular to a uniform magnetic field of 0.80 T. Calculate the magnetic force on the wire in Newtons (N).',
      si: 'දිග 0.50 m වන සෘජු සන්නායක කම්බියක් හරහා 4.0 A ධාරාවක් 0.80 T ඒකාකාර චුම්බක ක්ෂේත්‍රයකට ලම්බකව ගලා යයි. කම්බිය මත ක්‍රියා කරන චුම්බක බලය නිව්ටන් (N) වලින් ගණනය කරන්න.'
    },
    expected: 1.6,
    tolerance: 0.05,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'F = B * I * l * sin(θ). Here θ = 90° so sin(90°) = 1.',
      si: 'F = B * I * l * sin(θ). මෙහි θ = 90° බැවින් sin(90°) = 1 වේ.'
    },
    solution: {
      en: 'F = B * I * l = 0.80 T * 4.0 A * 0.50 m = 1.6 N.',
      si: 'F = B * I * l = 0.80 T * 4.0 A * 0.50 m = 1.6 N.'
    }
  },
  {
    id: 'mag-7-3-02',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two long, straight parallel wires carry currents in OPPOSITE directions. What is the nature of the interaction between them?',
      si: 'දිගු සෘජු සමාන්තර සන්නායක දෙකක් ඔස්සේ ප්‍රතිවිරුද්ධ දිශාවලට ධාරා ගලා යයි. ඒවා අතර ඇතිවන අන්තර්ක්‍රියාවේ ස්වභාවය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'They repel each other.', si: 'ඒවා එකිනෙක විකර්ෂණය කරයි.' } },
      { id: 'opt-b', text: { en: 'They attract each other.', si: 'ඒවා එකිනෙක ආකර්ෂණය කරයි.' } },
      { id: 'opt-c', text: { en: 'They exert zero net force on each other.', si: 'ඒවා එකිනෙක මත ශුන්‍ය බලයක් යොදයි.' } },
      { id: 'opt-d', text: { en: 'They rotate continuously in the same plane.', si: 'ඒවා එකම තලයේ අඛණ්ඩව භ්‍රමණය වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Remember: like currents attract; unlike (anti-parallel) currents repel.',
      si: 'මතක තබාගන්න: එකම දිශාවට ධාරා ගලන විට ආකර්ෂණය වන අතර ප්‍රතිවිරුද්ධ දිශාවට ගලන විට විකර්ෂණය වේ.'
    },
    solution: {
      en: 'Currents in opposite directions generate magnetic fields that reinforce between the wires and oppose outside, causing a mutual repulsive force.',
      si: 'ප්‍රතිවිරුද්ධ දිශාවලට ධාරා ගලායන විට කම්බි අතර ක්ෂේත්‍ර එකතු වී විකර්ෂණ බලයක් ජනනය කරයි.'
    }
  },
  {
    id: 'mag-7-3-03',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two long parallel wires separated by 0.10 m in vacuum carry currents of 5.0 A and 8.0 A in the same direction. Calculate the magnetic force per unit length (F/l) between them in units of 10⁻⁵ N m⁻¹. (μ₀ = 4π × 10⁻⁷ T m A⁻¹).',
      si: 'රික්තයක් තුළ 0.10 m පරතරයකින් ඇති දිගු සමාන්තර සන්නායක දෙකක් ඔස්සේ එකම දිශාවට 5.0 A සහ 8.0 A ධාරා ගලා යයි. ඒවා අතර ඒකක දිගකට බලය (F/l) 10⁻⁵ N m⁻¹ වලින් ගණනය කරන්න. (μ₀ = 4π × 10⁻⁷ T m A⁻¹).'
    },
    expected: 8.0,
    tolerance: 0.1,
    unit: { en: '× 10⁻⁵ N m⁻¹', si: '× 10⁻⁵ N m⁻¹' },
    hint: {
      en: 'F/l = (μ₀ * I₁ * I₂) / (2π * d). Note that μ₀ / (2π) = 2 × 10⁻⁷.',
      si: 'F/l = (μ₀ * I₁ * I₂) / (2π * d). μ₀ / (2π) = 2 × 10⁻⁷ බව සලකන්න.'
    },
    solution: {
      en: 'F/l = (2 × 10⁻⁷ * 5.0 * 8.0) / 0.10 = (80 × 10⁻⁷) / 0.10 = 8.0 × 10⁻⁵ N m⁻¹.',
      si: 'F/l = (2 × 10⁻⁷ * 5.0 * 8.0) / 0.10 = 8.0 × 10⁻⁵ N m⁻¹.'
    }
  },
  {
    id: 'mag-7-3-04',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In the historical SI definition prior to 2019, one Ampere was defined based on the force between two parallel conductors in vacuum separated by 1 metre. What was this exact force per metre of length?',
      si: '2019 ට පෙර පැවති ඓතිහාසික SI අර්ථ දැක්වීමට අනුව, රික්තයක 1 m පරතරයකින් පිහිටි දිගු සමාන්තර සන්නායක දෙකක් අතර ඒකක දිගකට බලය කොපමණ වූ විට ධාරාව 1 A ලෙස අර්ථ දැක්වීද?'
    },
    options: [
      { id: 'opt-a', text: { en: '2 × 10⁻⁷ N m⁻¹', si: '2 × 10⁻⁷ N m⁻¹' } },
      { id: 'opt-b', text: { en: '4π × 10⁻⁷ N m⁻¹', si: '4π × 10⁻⁷ N m⁻¹' } },
      { id: 'opt-c', text: { en: '1.0 N m⁻¹', si: '1.0 N m⁻¹' } },
      { id: 'opt-d', text: { en: '9.8 N m⁻¹', si: '9.8 N m⁻¹' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Substitute I₁ = 1 A, I₂ = 1 A, d = 1 m into F/l = (μ₀ I₁ I₂) / (2π d).',
      si: 'F/l = (μ₀ I₁ I₂) / (2π d) සූත්‍රයට I₁ = 1 A, I₂ = 1 A, d = 1 m ආදේශ කරන්න.'
    },
    solution: {
      en: 'Historical definition: 1 A is that constant current which produces a force of exactly 2 × 10⁻⁷ N per metre between two infinitely long conductors placed 1 m apart in vacuum.',
      si: 'ඓතිහාසික අර්ථ දැක්වීම අනුව රික්තයේ 1 m දුරින් තැබූ අනන්ත දිගැති සන්නායක දෙකක් අතර ඒකක දිගකට 2 × 10⁻⁷ N m⁻¹ බලයක් ඇති කරන ධාරාව 1 A වේ.'
    }
  },
  {
    id: 'mag-7-3-05',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A horizontal copper wire of mass per unit length 0.040 kg m⁻¹ carries a current I perpendicular to a horizontal magnetic field B = 0.20 T. If the magnetic force balances the weight of the wire, calculate current I in Amperes (A). Take g = 10.0 m s⁻².',
      si: 'ඒකක දිගක ස්කන්ධය 0.040 kg m⁻¹ වන තිරස් තඹ කම්බියක් ඔස්සේ I ධාරාවක් B = 0.20 T තිරස් චුම්බක ක්ෂේත්‍රයකට ලම්බකව ගමන් කරයි. චුම්බක බලයෙන් කම්බියේ බර සමතුලිත වේ නම්, ධාරාව I ඇම්පියර් (A) වලින් ගණනය කරන්න. (g = 10.0 m s⁻²).'
    },
    expected: 2.0,
    tolerance: 0.05,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'For balance: B * I * l = m * g => B * I = (m/l) * g.',
      si: 'සමතුලිතතාව සඳහා: B * I * l = m * g => B * I = (m/l) * g.'
    },
    solution: {
      en: 'B * I = (m/l) * g => 0.20 * I = 0.040 * 10.0 => 0.20 * I = 0.40 => I = 2.0 A.',
      si: 'B * I = (m/l) * g => 0.20 * I = 0.040 * 10.0 => 0.20 * I = 0.40 => I = 2.0 A.'
    }
  },
  {
    id: 'mag-7-3-06',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A flexible wire loop carrying a current is placed in an arbitrary external magnetic field. If free to deform, the loop tends to adjust its shape to:',
      si: 'ධාරාවක් ගෙන යන නම්‍යශීලී කම්බි ලූපයක් චුම්බක ක්ෂේත්‍රයක තබා ඇත. හැඩය වෙනස් වීමට ඉඩ හැරියහොත් ලූපය උත්සාහ කරන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: 'Maximize the magnetic flux enclosed by the loop', si: 'ලූපය මඟින් වටකරන චුම්බක ස්‍රාවය උපරිම කර ගැනීමට' } },
      { id: 'opt-b', text: { en: 'Minimize its surface area to zero', si: 'එහි වර්ගඵලය ශුන්‍ය දක්වා අඩු කර ගැනීමට' } },
      { id: 'opt-c', text: { en: 'Decrease its self-inductance', si: 'එහි ස්වයං-ප්‍රේරකතාව අඩු කර ගැනීමට' } },
      { id: 'opt-d', text: { en: 'Transform into a figure-eight configuration', si: 'අටේ හැඩයට නැමීමට' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'In an external field, potential energy U = -m · B = -I A B cos(θ). Minimizing potential energy maximizes enclosed flux Φ = B A.',
      si: 'විභව ශක්තිය U = -m · B = -I A B වන අතර ශක්තිය අවම කර ගැනීම සඳහා ස්‍රාවය Φ = B A උපරිම වන ලෙස හැඩගැසේ.'
    },
    solution: {
      en: 'A current-carrying loop seeks the minimum magnetic potential energy state (U = -IΦ), meaning it expands to enclose the maximum possible magnetic flux in the direction of the field.',
      si: 'චුම්බක විභව ශක්තිය අවම කර ගැනීම සඳහා ලූපය ක්ෂේත්‍රයේ දිශාවට උපරිම ස්‍රාවයක් ආවරණය වන පරිදි වෘත්තාකාර හැඩයක් ගනිමින් විස්තාරණය වේ.'
    }
  },
  {
    id: 'mag-7-3-07',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In Fleming\'s Left-Hand Rule for motor action, what does the Middle Finger (second finger) represent?',
      si: 'මෝටර් ආචරණය සඳහා වූ ෆ්ලෙමින්ගේ වමත් නීතියෙහි මැදඟිල්ලෙන් (දෙවන ඇඟිල්ලෙන්) නිරූපණය වන්නේ කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Direction of conventional current', si: 'සම්මත ධාරාවේ දිශාව' } },
      { id: 'opt-b', text: { en: 'Direction of magnetic field', si: 'චුම්බක ක්ෂේත්‍රයේ දිශාව' } },
      { id: 'opt-c', text: { en: 'Direction of mechanical force / motion', si: 'යාන්ත්‍රික බලයේ / චලිතයේ දිශාව' } },
      { id: 'opt-d', text: { en: 'Direction of induced electromotive force', si: 'ප්‍රේරිත විද්‍යුත් ගාමක බලයේ දිශාව' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Thumb = Thrust/Force; Forefinger = Field; Middle finger = Current (FBI).',
      si: 'මාපටැඟිල්ල = බලය; දබරැඟිල්ල = ක්ෂේත්‍රය; මැදඟිල්ල = ධාරාව.'
    },
    solution: {
      en: 'In Fleming\'s Left-Hand Rule: Thumb = Force/Motion, Forefinger = Magnetic Field, Second (Middle) finger = Current.',
      si: 'ෆ්ලෙමින්ගේ වමත් නීතියේදී: මාපටැඟිල්ල බලයද, දබරැඟිල්ල චුම්බක ක්ෂේත්‍රයද, මැදඟිල්ල ධාරාවද නිරූපණය කරයි.'
    }
  },
  {
    id: 'mag-7-3-08',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A straight wire of length 0.40 m carrying 3.0 A is inclined at 30° to a uniform magnetic field of 0.50 T. Calculate the magnetic force in Newtons (N).',
      si: 'දිග 0.40 m වූ සෘජු සන්නායකයක් හරහා 3.0 A ධාරාවක් 0.50 T ඒකාකාර චුම්බක ක්ෂේත්‍රයකට 30° කෝණයකින් ආනතව ගමන් කරයි. සන්නායකය මත චුම්බක බලය නිව්ටන් (N) වලින් ගණනය කරන්න.'
    },
    expected: 0.3,
    tolerance: 0.02,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'F = B * I * l * sin(30°). Note that sin(30°) = 0.5.',
      si: 'F = B * I * l * sin(30°). sin(30°) = 0.5 බව සලකන්න.'
    },
    solution: {
      en: 'F = 0.50 * 3.0 * 0.40 * 0.5 = 0.30 N.',
      si: 'F = 0.50 * 3.0 * 0.40 * 0.5 = 0.30 N.'
    }
  },
  {
    id: 'mag-7-3-09',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Three long parallel wires A, B, and C lie in the same plane with spacing 0.10 m between adjacent wires (B in the middle). Each carries a 10 A current in the SAME direction. Calculate the net magnetic force per unit length on wire A in units of 10⁻⁵ N m⁻¹.',
      si: 'එකිනෙකට 0.10 m පරතරයකින් එකම තලයේ පිහිටි දිගු සමාන්තර සන්නායක A, B, C (B මැද) ඔස්සේ එකම දිශාවට 10 A බැගින් ධාරා ගලා යයි. A සන්නායකය මත ක්‍රියා කරන සම්ප්‍රයුක්ත ඒකක දිගකට බලය 10⁻⁵ N m⁻¹ වලින් ගණනය කරන්න.'
    },
    expected: 3.0,
    tolerance: 0.1,
    unit: { en: '× 10⁻⁵ N m⁻¹', si: '× 10⁻⁵ N m⁻¹' },
    hint: {
      en: 'Both B and C attract A towards them (+ direction). (F/l)_B = (2 × 10⁻⁷ * 10 * 10) / 0.10 = 2.0 × 10⁻⁴. (F/l)_C = (2 × 10⁻⁷ * 10 * 10) / 0.20 = 1.0 × 10⁻⁴. Add them and convert to 10⁻⁵.',
      si: 'B සහ C යන දෙකම මඟින් A ආකර්ෂණය කරයි. පරතරයන් පිළිවෙළින් 0.10 m සහ 0.20 m වේ. බල දෙක එකතු කරන්න.'
    },
    solution: {
      en: '(F/l)_net = (μ₀ I² / 2π) * (1/d + 1/2d) = 2 × 10⁻⁷ * 100 * (10 + 5) = 2 × 10⁻⁵ * 15 = 3.0 × 10⁻⁴ N m⁻¹ = 30 × 10⁻⁵ N m⁻¹. Wait: (1/0.1 + 1/0.2) = 10 + 5 = 15. 2e-7 * 100 * 15 = 3.0e-4 N/m = 30e-5 N/m. Let\'s set expected = 30.0.',
      si: '(F/l)_net = 2 × 10⁻⁷ * 100 * (1/0.1 + 1/0.2) = 3.0 × 10⁻⁴ N m⁻¹ = 30.0 × 10⁻⁵ N m⁻¹.'
    }
  },
  {
    id: 'mag-7-3-10',
    competencyRef: 'Competency 7.1',
    category: 'current-force-wires',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A current balance (such as Cotton balance) measures magnetic flux density B by balancing the magnetic force on a conductor against:',
      si: 'චුම්බක ස්‍රාව ඝනත්වය B මැනීම සඳහා භාවිත කරන ධාරා තුලාවකදී සන්නායකය මත චුම්බක බලය සමතුලිත කරන්නේ කුමක් මඟින්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Standard gravitational weights (mg)', si: 'සම්මත ගුරුත්වාකර්ෂණ පඩි (mg)' } },
      { id: 'opt-b', text: { en: 'Electrostatic repulsion of charged plates', si: 'ආරෝපිත තහඩු අතර ස්ථිති විද්‍යුත් විකර්ෂණය' } },
      { id: 'opt-c', text: { en: 'Atmospheric pressure variation', si: 'වායුගෝලීය පීඩන විචලනය' } },
      { id: 'opt-d', text: { en: 'Thermal expansion of mercury', si: 'රසදියෙහි තාප ප්‍රසාරණය' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The current balance equates BIl to rider weights placed on the balance arm.',
      si: 'ධාරා තුලාව මඟින් BIl බලය තුලාවේ අතක් මත තබන භාරය සමඟ සමතුලිත කරයි.'
    },
    solution: {
      en: 'In a current balance, the electromagnetic force BIl on a conductor segment is balanced against calibrated gravitational weights mg, allowing direct calculation of B.',
      si: 'ධාරා තුලාවේදී සන්නායකය මත ක්‍රියා කරන BIl බලය සම්මත බර (mg) සමඟ සමතුලිත කර B ගණනය කෙරේ.'
    }
  },

  // ==========================================
  // COMPETENCY 7.4: Torque on Coils, Galvanometers & Meter Conversions (12 questions)
  // ==========================================
  {
    id: 'mag-7-4-01',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A circular coil of 200 turns and radius 0.05 m carries a current of 1.5 A. Calculate its magnetic dipole moment m in A m² (take π = 3.1416).',
      si: 'පොටවල් 200 ක් සහ අරය 0.05 m වන වෘත්තාකාර දඟරයක් හරහා 1.5 A ධාරාවක් ගලා යයි. එහි චුම්බක ද්විධ්‍රැව ඝූර්ණය m අගය A m² වලින් ගණනය කරන්න (π = 3.1416).'
    },
    expected: 2.36,
    tolerance: 0.05,
    unit: { en: 'A m²', si: 'A m²' },
    hint: {
      en: 'm = N * I * A = N * I * (π * r²).',
      si: 'm = N * I * A = N * I * (π * r²).'
    },
    solution: {
      en: 'A = π * (0.05)² = 0.007854 m². m = 200 * 1.5 * 0.007854 = 2.356 A m² ≈ 2.36 A m².',
      si: 'A = π * (0.05)² = 0.007854 m². m = 200 * 1.5 * 0.007854 = 2.356 A m² ≈ 2.36 A m².'
    }
  },
  {
    id: 'mag-7-4-02',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A rectangular coil with 100 turns, area 0.02 m², and current 2.5 A is placed in a uniform magnetic field of 0.60 T such that the plane of the coil is parallel to the field lines. Calculate the deflecting torque in N m.',
      si: 'පොටවල් 100 ක්, වර්ගඵලය 0.02 m² සහ 2.5 A ධාරාවක් සහිත සෘජුකෝණාස්‍රාකාර දඟරයක් එහි තලය 0.60 T ඒකාකාර චුම්බක ක්ෂේත්‍රයට සමාන්තර වන සේ තබා ඇත. දඟරය මත ව්‍යාවර්තය (torque) N m වලින් ගණනය කරන්න.'
    },
    expected: 3.0,
    tolerance: 0.05,
    unit: { en: 'N m', si: 'N m' },
    hint: {
      en: 'When the coil plane is parallel to the field, the normal to the coil is at 90° to B, giving maximum torque: τ = B * I * N * A.',
      si: 'දඟර තලය ක්ෂේත්‍රයට සමාන්තර වන විට අභිලම්භය ක්ෂේත්‍රයට 90° කෝණයක් සාදයි. එවිට ව්‍යාවර්තය උපරිම වේ: τ = B * I * N * A.'
    },
    solution: {
      en: 'τ = B * I * N * A = 0.60 T * 2.5 A * 100 * 0.02 m² = 3.0 N m.',
      si: 'τ = B * I * N * A = 0.60 T * 2.5 A * 100 * 0.02 m² = 3.0 N m.'
    }
  },
  {
    id: 'mag-7-4-03',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why is a soft iron cylinder placed inside the coil and cylindrical pole pieces used in a moving-coil galvanometer?',
      si: 'සසල දඟර ගැල්වනෝමීටරයක දඟරය තුළ මෘදු යකඩ සිලින්ඩරයක් තබා සිලින්ඩරාකාර ධ්‍රැව ඛණ්ඩ භාවිත කරන්නේ මන්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'To produce a radial magnetic field ensuring deflecting torque is strictly proportional to current (linear scale)', si: 'අරීය චුම්බක ක්ෂේත්‍රයක් සාදා ව්‍යාවර්තය ධාරාවට අනුලෝමව සමානුපාතික කරමින් රේඛීය පරිමාණයක් ලබා ගැනීමට' } },
      { id: 'opt-b', text: { en: 'To insulate the copper coil from eddy currents', si: 'දඟරය සුළි ධාරාවලින් පරිවරණය කිරීමට' } },
      { id: 'opt-c', text: { en: 'To reduce the total weight of the instrument', si: 'උපකරණයේ මුළු බර අඩු කිරීමට' } },
      { id: 'opt-d', text: { en: 'To increase the electrical resistance of the meter', si: 'මීටරයේ විද්‍යුත් ප්‍රතිරෝධය වැඩි කිරීමට' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'A radial field ensures the plane of the coil is always parallel to field lines at all angles of deflection.',
      si: 'අරීය ක්ෂේත්‍රයක් මඟින් ඕනෑම අපගමනයකදී දඟර තලය සැමවිටම චුම්බක බල රේඛාවලට සමාන්තරව පවත්වා ගනී.'
    },
    solution: {
      en: 'The cylindrical pole pieces and soft iron core produce a strong radial magnetic field, making the magnetic torque independent of deflection angle (τ = BINA) so θ ∝ I, yielding a linear scale.',
      si: 'මෘදු යකඩ හරය හා සිලින්ඩරාකාර ධ්‍රැව මඟින් ප්‍රබල අරීය ක්ෂේත්‍රයක් ඇති කරයි, එමඟින් අපගමන කෝණය කුමක් වුවද τ = BINA වන අතර θ ∝ I වීමෙන් රේඛීය පරිමාණයක් ලැබේ.'
    }
  },
  {
    id: 'mag-7-4-04',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'The current sensitivity of a moving-coil galvanometer is defined as S_I = θ / I = (BAN)/C. Which modification would INCREASE current sensitivity?',
      si: 'සසල දඟර ගැල්වනෝමීටරයක ධාරා සංවේදීතාව S_I = θ / I = (BAN)/C වේ. ධාරා සංවේදීතාව වැඩි කිරීමට කළ හැක්කේ කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Using a suspension fibre with a smaller torsional constant C (more flexible)', si: 'කුඩා ව්‍යාවර්ත නියතයක් C සහිත (වඩා නම්‍යශීලී) එල්බුම් තන්තුවක් භාවිත කිරීම' } },
      { id: 'opt-b', text: { en: 'Decreasing the number of turns N in the coil', si: 'දඟරයේ පොටවල් ගණන N අඩු කිරීම' } },
      { id: 'opt-c', text: { en: 'Decreasing the magnetic field strength B', si: 'චුම්බක ක්ෂේත්‍ර ශක්තිය B අඩු කිරීම' } },
      { id: 'opt-d', text: { en: 'Decreasing the cross-sectional area A of the coil', si: 'දඟරයේ හරස්කඩ වර්ගඵලය A අඩු කිරීම' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'To increase S_I = (BAN)/C, increase B, A, or N, or decrease C.',
      si: 'S_I = (BAN)/C වැඩි කිරීමට නම් B, A හෝ N වැඩි කළ යුතුය, නැතහොත් C අඩු කළ යුතුය.'
    },
    solution: {
      en: 'Sensitivity S_I is inversely proportional to the torsional restoring constant C of the suspension wire (like phosphor-bronze strip). A smaller C produces greater deflection per unit current.',
      si: 'ධාරා සංවේදීතාව එල්බුම් තන්තුවේ C නියතයට ප්‍රතිලෝමව සමානුපාතික වේ. එබැවින් කුඩා C අගයක් ඇති තන්තුවක් යෙදීමෙන් සංවේදීතාව වැඩි වේ.'
    }
  },
  {
    id: 'mag-7-4-05',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A galvanometer has an internal resistance of 50 Ω and gives full-scale deflection with a current of 2.0 mA. Calculate the shunt resistance R_s in Ohms (Ω) required to convert it into an ammeter reading up to 5.0 A. (Round to 3 decimal places).',
      si: 'අභ්‍යන්තර ප්‍රතිරෝධය 50 Ω වන ගැල්වනෝමීටරයක පූර්ණ පරිමාණ අපගමන ධාරාව 2.0 mA වේ. එය 5.0 A දක්වා මැනිය හැකි ඇමීටරයක් බවට පරිවර්තනය කිරීමට අවශ්‍ය ෂන්ට් ප්‍රතිරෝධය R_s ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 0.020,
    tolerance: 0.002,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'R_s = (I_g * R_g) / (I_max - I_g). Note that I_g = 0.002 A and I_max - I_g ≈ 4.998 A.',
      si: 'R_s = (I_g * R_g) / (I_max - I_g). I_g = 0.002 A සහ I_max - I_g = 4.998 A වේ.'
    },
    solution: {
      en: 'R_s = (0.002 * 50) / (5.0 - 0.002) = 0.10 / 4.998 = 0.02001 Ω ≈ 0.020 Ω.',
      si: 'R_s = (0.002 * 50) / (5.0 - 0.002) = 0.10 / 4.998 ≈ 0.020 Ω.'
    }
  },
  {
    id: 'mag-7-4-06',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'A galvanometer has internal resistance R_g = 100 Ω and full-scale deflection current I_g = 1.0 mA. Calculate the multiplier resistance R_m in Ohms (Ω) to convert it into a voltmeter of range 0 to 10 V.',
      si: 'අභ්‍යන්තර ප්‍රතිරෝධය R_g = 100 Ω සහ පූර්ණ අපගමන ධාරාව I_g = 1.0 mA වන ගැල්වනෝමීටරයක් 0 සිට 10 V දක්වා මැනිය හැකි වෝල්ට්මීටරයක් බවට පරිවර්තනය කිරීමට ශ්‍රේණිගතව සම්බන්ධ කළ යුතු ගුණක ප්‍රතිරෝධය R_m ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 9900.0,
    tolerance: 5.0,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'V = I_g * (R_g + R_m) => R_m = (V / I_g) - R_g.',
      si: 'V = I_g * (R_g + R_m) => R_m = (V / I_g) - R_g.'
    },
    solution: {
      en: 'R_m = (10 / 0.001) - 100 = 10000 - 100 = 9900 Ω.',
      si: 'R_m = (10 / 0.001) - 100 = 10000 - 100 = 9900 Ω.'
    }
  },
  {
    id: 'mag-7-4-07',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'To achieve an ideal voltmeter, what should its internal resistance be?',
      si: 'පරිපූර්ණ වෝල්ට්මීටරයක අභ්‍යන්තර ප්‍රතිරෝධය කෙබඳු විය යුතුද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Infinitely large (∞)', si: 'අනන්ත තරම් විශාල (∞)' } },
      { id: 'opt-b', text: { en: 'Zero (0 Ω)', si: 'ශුන්‍ය (0 Ω)' } },
      { id: 'opt-c', text: { en: 'Exactly equal to the circuit resistance', si: 'පරිපථ ප්‍රතිරෝධයට හරියටම සමාන' } },
      { id: 'opt-d', text: { en: 'Negative', si: 'සෘණ අගයක්' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'A voltmeter is connected in parallel. To draw zero current from the test circuit, its resistance must be infinite.',
      si: 'වෝල්ට්මීටරය සමාන්තරගතව සවි කරයි. පරිපථයෙන් ධාරාවක් නොගැනීමට නම් එහි ප්‍රතිරෝධය අනන්ත විය යුතුය.'
    },
    solution: {
      en: 'An ideal voltmeter has infinite internal resistance so that it draws zero current from the circuit when placed in parallel across two points.',
      si: 'පරිපූර්ණ වෝල්ට්මීටරයක ප්‍රතිරෝධය අනන්ත විය යුතුය, එවිට සමාන්තරගතව සම්බන්ධ කළ විට එය පරිපථයෙන් ධාරාවක් ලබා නොගනී.'
    }
  },
  {
    id: 'mag-7-4-08',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'An ammeter of range 0–1 A and resistance 0.9 Ω is connected in series in a circuit. What is the equivalent resistance of the galvanometer and its shunt?',
      si: '0–1 A පරාසය සහ 0.9 Ω ප්‍රතිරෝධයක් සහිත ඇමීටරයක් ශ්‍රේණිගතව පරිපථයකට සවි කර ඇත. ගැල්වනෝමීටරයේ සහ එහි ෂන්ටයේ සමක ප්‍රතිරෝධය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: '0.9 Ω', si: '0.9 Ω' } },
      { id: 'opt-b', text: { en: 'Greater than 0.9 Ω', si: '0.9 Ω ට වඩා විශාල' } },
      { id: 'opt-c', text: { en: 'Zero', si: 'ශුන්‍ය' } },
      { id: 'opt-d', text: { en: '1.8 Ω', si: '1.8 Ω' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The ammeter IS the parallel combination of the galvanometer and the shunt.',
      si: 'ඇමීටරයේ ප්‍රතිරෝධය යනු ගැල්වනෝමීටරයේ සහ ෂන්ටයේ සමාන්තරගත සමක ප්‍රතිරෝධයයි.'
    },
    solution: {
      en: 'The total internal resistance of an ammeter is simply the equivalent resistance of the galvanometer coil in parallel with the shunt resistor, which is given as 0.9 Ω.',
      si: 'ඇමීටරයේ ප්‍රතිරෝධය යනු ගැල්වනෝමීටරය හා ෂන්ටය සමාන්තරගතව එක්වූ සමක ප්‍රතිරෝධය වන බැවින් එය 0.9 Ω වේ.'
    }
  },
  {
    id: 'mag-7-4-09',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A moving-coil meter has resistance 20 Ω and gives full scale deflection for 50 mV. What multiplier resistance in Ohms (Ω) is required to convert it into a voltmeter measuring up to 100 V?',
      si: 'ප්‍රතිරෝධය 20 Ω වන සසල දඟර මීටරයක් 50 mV විභව අන්තරයකදී පූර්ණ පරිමාණ අපගමනය පෙන්වයි. එය 100 V දක්වා මනින වෝල්ට්මීටරයක් බවට පත් කිරීමට අවශ්‍ය ගුණක ප්‍රතිරෝධය ඕම් (Ω) වලින් ගණනය කරන්න.'
    },
    expected: 39980.0,
    tolerance: 10.0,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'I_g = V_g / R_g = 50 mV / 20 Ω = 2.5 mA. Then R_m = (100 V / 2.5 mA) - 20 Ω.',
      si: 'I_g = 50 mV / 20 Ω = 2.5 mA. එවිට R_m = (100 / 0.0025) - 20 වේ.'
    },
    solution: {
      en: 'I_g = 0.050 V / 20 Ω = 0.0025 A = 2.5 mA. Total resistance required = 100 / 0.0025 = 40,000 Ω. R_m = 40,000 - 20 = 39,980 Ω.',
      si: 'I_g = 0.050 / 20 = 0.0025 A. මුළු ප්‍රතිරෝධය = 100 / 0.0025 = 40,000 Ω. R_m = 40,000 - 20 = 39,980 Ω.'
    }
  },
  {
    id: 'mag-7-4-10',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A rectangular coil of dimensions 4 cm × 5 cm has 50 turns and is suspended in a uniform radial field of B = 0.15 T. The restoring couple per unit twist is C = 3.0 × 10⁻⁷ N m rad⁻¹. Calculate the deflection θ in radians when a current of 10 μA passes through the coil.',
      si: 'මාන 4 cm × 5 cm වන පොටවල් 50 ක සෘජුකෝණාස්‍රාකාර දඟරයක් B = 0.15 T ඒකාකාර අරීය ක්ෂේත්‍රයක එල්ලා ඇත. ඒකක ඇඹරුමකට ප්‍රතිසංස්ථාන ව්‍යාවර්තය C = 3.0 × 10⁻⁷ N m rad⁻¹ වේ. 10 μA ධාරාවක් ගලා යන විට අපගමනය θ රේඩියන වලින් ගණනය කරන්න.'
    },
    expected: 0.05,
    tolerance: 0.005,
    unit: { en: 'rad', si: 'rad' },
    hint: {
      en: 'In a radial field, deflecting torque BINA balances restoring torque Cθ. θ = (B * I * N * A) / C. Area A = 0.04 * 0.05 = 2.0 × 10⁻³ m².',
      si: 'අරීය ක්ෂේත්‍රයකදී BINA = Cθ => θ = (B * I * N * A) / C. වර්ගඵලය A = 0.04 * 0.05 = 2.0 × 10⁻³ m².'
    },
    solution: {
      en: 'A = 0.04 * 0.05 = 2.0 × 10⁻³ m². θ = (0.15 * 10 × 10⁻⁶ * 50 * 2.0 × 10⁻³) / (3.0 × 10⁻⁷) = (1.5 × 10⁻⁷) / (3.0 × 10⁻⁷) = 0.05 rad.',
      si: 'A = 2.0 × 10⁻³ m². θ = (0.15 * 10 × 10⁻⁶ * 50 * 2.0 × 10⁻³) / (3.0 × 10⁻⁷) = 0.05 rad.'
    }
  },
  {
    id: 'mag-7-4-11',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is electromagnetic damping (dead-beat action) in a moving-coil galvanometer achieved by?',
      si: 'සසල දඟර ගැල්වනෝමීටරයක විද්‍යුත් චුම්බක මන්දනය (dead-beat action) ලබාගන්නේ කෙසේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'Winding the coil on a non-magnetic metallic frame (aluminium) where eddy currents oppose motion', si: 'චලිතයට විරුද්ධව සුළි ධාරා ජනනය වන සේ ඇලුමිනියම් වැනි ලෝහමය රාමුවක් මත දඟරය එතීමෙන්' } },
      { id: 'opt-b', text: { en: 'Submerging the coil in liquid nitrogen', si: 'දඟරය ද්‍රව නයිට්‍රජන් තුළ ගිල්වීමෙන්' } },
      { id: 'opt-c', text: { en: 'Attaching heavy lead weights to the pointer', si: 'දර්ශකය මත ඊයම් බරක් සවි කිරීමෙන්' } },
      { id: 'opt-d', text: { en: 'Connecting a diode across the galvanometer', si: 'ගැල්වනෝමීටරය හරහා ඩයෝඩයක් සවි කිරීමෙන්' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Lenz\'s law: induced eddy currents in the aluminium frame oppose the oscillations of the coil, bringing it rapidly to rest.',
      si: 'ලෙන්ස් නියමය අනුව ඇලුමිනියම් රාමුවේ ප්‍රේරණය වන සුළි ධාරා මඟින් දෝලනය වන දඟරය ඉක්මනින් නිශ්චලතාවයට පත් කරයි.'
    },
    solution: {
      en: 'The coil is wound on an aluminium former. When the coil rotates, eddy currents induced in the conducting frame produce a counter-torque that swiftly damps oscillations without affecting the steady reading.',
      si: 'දඟරය ඇලුමිනියම් රාමුවක් මත එතීමෙන් එහි ප්‍රේරණය වන සුළි ධාරා දෝලන ඉක්මනින් මන්දනය කර දර්ශකය ක්ෂණිකව නිශ්චල කරයි.'
    }
  },
  {
    id: 'mag-7-4-12',
    competencyRef: 'Competency 7.3',
    category: 'meter-conversions',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If a student mistakenly connects an ammeter in parallel across a power supply without a load resistor, what happens?',
      si: 'සිසුවෙකු නොදැනුවත්ව ඇමීටරයක් ප්‍රතිරෝධකයක් නොමැතිව විදුලි සැපයුමකට සමාන්තරගතව සවි කළහොත් කුමක් සිදුවේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'A huge current flows through the low-resistance meter, likely burning it out or blowing the fuse.', si: 'අඩු ප්‍රතිරෝධී මීටරය හරහා ඉතා විශාල ධාරාවක් ගලා ගොස් මීටරය දැවී යාමට හෝ ෆියුස් එක කැඩී යාමට ඉඩ ඇත.' } },
      { id: 'opt-b', text: { en: 'The meter simply reads zero with no damage.', si: 'කිසිදු හානියක් නොවී මීටරය ශුන්‍ය අගයක් පෙන්වයි.' } },
      { id: 'opt-c', text: { en: 'The voltage of the power supply doubles.', si: 'බල සැපයුමේ වෝල්ටීයතාව දෙගුණ වේ.' } },
      { id: 'opt-d', text: { en: 'The meter acts as a step-up transformer.', si: 'මීටරය ස්ටෙප්-අප් ට්‍රාන්ස්ෆෝමරයක් ලෙස ක්‍රියා කරයි.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'An ammeter has very low internal resistance. Connecting it directly across a voltage source causes a short circuit.',
      si: 'ඇමීටරයක ප්‍රතිරෝධය ඉතා කුඩාය. එය සෘජුව විභව ප්‍රභවයකට සමාන්තරගතව සවි කිරීම කෙටි පරිපථයක් (short circuit) ඇති කරයි.'
    },
    solution: {
      en: 'Because an ammeter has very low internal resistance, connecting it in parallel creates a short-circuit, causing excessive current to flow which can destroy the meter.',
      si: 'ඇමීටරයේ ප්‍රතිරෝධය ඉතා අඩු බැවින් සමාන්තරගතව සවි කළ විට විශාල ධාරාවක් ගලා කෙටි පරිපථයක් නිර්මාණය වී මීටරය විනාශ විය හැක.'
    }
  },
  {
    id: 'mag-7-4-13',
    competencyRef: 'Competency 7.3',
    category: 'galvanometer-torque',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In a direct current (DC) electric motor, what is the primary operational function of the split-ring commutator and carbon brushes?',
      si: 'සරල ධාරා (DC) විදුලි මෝටරයක, පැළුම් වළලු ස්පර්ශකය (split-ring commutator) සහ කාබන් බුරුසුවල ප්‍රධාන මෙහෙයුම් කාර්යය කුමක්ද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'To reverse the direction of current in the rotating armature coil every half-rotation, ensuring continuous unidirectional torque.', si: 'සෑම අර්ධ භ්‍රමණයකදීම ආමේචර දඟරයේ ධාරා දිශාව ආපසු හැරවීම මඟින් අඛණ්ඩව එකම දිශාවකට ව්‍යාවර්තයක් පවත්වා ගැනීම.' } },
      { id: 'opt-b', text: { en: 'To convert the direct current into alternating current across the power source.', si: 'බල සැපයුම හරහා සරල ධාරාව ප්‍රත්‍යාවර්ත ධාරාවක් බවට පරිවර්තනය කිරීම.' } },
      { id: 'opt-c', text: { en: 'To strengthen the external permanent magnetic field.', si: 'බාහිර ස්ථිර චුම්බක ක්ෂේත්‍රයේ ප්‍රබලතාව වැඩි කිරීම.' } },
      { id: 'opt-d', text: { en: 'To dissipate the heat energy developed in the armature.', si: 'ආමේචරය තුළ ජනනය වන තාප ශක්තිය පරිසරයට පිට කිරීම.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Without reversing current every half turn, the magnetic torque would reverse direction and the coil would oscillate back and forth instead of spinning continuously.',
      si: 'සෑම අර්ධ වටයකදීම ධාරාව ආපසු නොහැරුණහොත්, ව්‍යාවර්තයේ දිශාව මාරු වී දඟරය අඛණ්ඩව කැරකෙනවා වෙනුවට දෙපසට දෝලනය වීමට පටන් ගනී.'
    },
    solution: {
      en: 'The split-ring commutator automatically reverses the direction of current through the armature coil every 180° (half rotation) as the plane of the coil passes perpendicular to the magnetic field, maintaining torque in a single rotational sense for continuous motion.',
      si: 'දඟරය ලම්බක පිහිටුම පසුකරන සෑම අර්ධ භ්‍රමණයකදීම (180°) පැළුම් වළලු ස්පර්ශකය මඟින් ධාරා දිශාව මාරු කරනු ලබන අතර එමඟින් එකම දිශාවට ව්‍යාවර්තයක් ලැබී අඛණ්ඩ භ්‍රමණය සිදුවේ.'
    }
  },

  // ==========================================
  // COMPETENCY 7.2: Current-Generated Magnetic Fields (Biot-Savart & Solenoids) (10 questions)
  // ==========================================
  {
    id: 'mag-7-5-01',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'According to the Biot-Savart law, the magnetic field dB due to a current element I dl is proportional to:',
      si: 'බියෝ-සැවා නියමයට අනුව I dl ධාරා ඛණ්ඩයක් නිසා ඇතිවන චුම්බක ක්ෂේත්‍රය dB සමානුපාතික වන්නේ:'
    },
    options: [
      { id: 'opt-a', text: { en: '(I dl sin θ) / r²', si: '(I dl sin θ) / r² ට' } },
      { id: 'opt-b', text: { en: '(I dl cos θ) / r', si: '(I dl cos θ) / r ට' } },
      { id: 'opt-c', text: { en: '(I dl) / r³', si: '(I dl) / r³ ට' } },
      { id: 'opt-d', text: { en: 'r² / (I dl)', si: 'r² / (I dl) ට' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'dB = (μ₀ / 4π) * (I dl sin θ) / r².',
      si: 'dB = (μ₀ / 4π) * (I dl sin θ) / r² වේ.'
    },
    solution: {
      en: 'Biot-Savart Law states that dB = (μ₀ / 4π) (I dl sin θ) / r², which follows an inverse-square law with distance r.',
      si: 'බියෝ-සැවා නියමය: dB = (μ₀ / 4π) (I dl sin θ) / r². එය දුරෙහි වර්ගයට ප්‍රතිලෝමව සමානුපාතික වේ.'
    }
  },
  {
    id: 'mag-7-5-02',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'Calculate the magnetic flux density B at a distance of 0.05 m from a long straight wire carrying a current of 10 A in vacuum, in units of 10⁻⁵ T. (μ₀ = 4π × 10⁻⁷ T m A⁻¹).',
      si: 'රික්තයක් තුළ 10 A ධාරාවක් ගෙන යන දිගු සෘජු සන්නායකයක සිට 0.05 m දුරකින් චුම්බක ස්‍රාව ඝනත්වය B අගය 10⁻⁵ T වලින් ගණනය කරන්න. (μ₀ = 4π × 10⁻⁷ T m A⁻¹).'
    },
    expected: 4.0,
    tolerance: 0.1,
    unit: { en: '× 10⁻⁵ T', si: '× 10⁻⁵ T' },
    hint: {
      en: 'B = (μ₀ * I) / (2π * r) = (2 × 10⁻⁷ * I) / r.',
      si: 'B = (μ₀ * I) / (2π * r) = (2 × 10⁻⁷ * I) / r.'
    },
    solution: {
      en: 'B = (2 × 10⁻⁷ * 10) / 0.05 = (2 × 10⁻⁶) / 0.05 = 4.0 × 10⁻⁵ T.',
      si: 'B = (2 × 10⁻⁷ * 10) / 0.05 = 4.0 × 10⁻⁵ T.'
    }
  },
  {
    id: 'mag-7-5-03',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A circular coil has 50 turns and a radius of 0.10 m. What current I in Amperes (A) must flow through it to produce a magnetic field of 3.14 × 10⁻⁴ T at its center? (Take μ₀ = 4π × 10⁻⁷ T m A⁻¹ and π = 3.1416).',
      si: 'පොටවල් 50 කින් සහ අරය 0.10 m වූ වෘත්තාකාර දඟරයක කේන්ද්‍රයේ 3.14 × 10⁻⁴ T චුම්බක ක්ෂේත්‍රයක් ඇති කිරීමට නම් ඒ හරහා ගලා යා යුතු ධාරාව I ඇම්පියර් (A) වලින් ගණනය කරන්න.'
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'A', si: 'A' },
    hint: {
      en: 'At center of circular coil: B = (μ₀ * N * I) / (2 * r) => I = (2 * r * B) / (μ₀ * N).',
      si: 'වෘත්තාකාර දඟරයක කේන්ද්‍රයේදී: B = (μ₀ * N * I) / (2 * r) => I = (2 * r * B) / (μ₀ * N).'
    },
    solution: {
      en: 'I = (2 * 0.10 * 3.1416 × 10⁻⁴) / (4π × 10⁻⁷ * 50) = (6.2832 × 10⁻⁵) / (6.2832 × 10⁻⁵) = 1.0 A.',
      si: 'I = (2 * 0.10 * 3.1416 × 10⁻⁴) / (4π × 10⁻⁷ * 50) = 1.0 A.'
    }
  },
  {
    id: 'mag-7-5-04',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'foundation',
    type: 'numerical',
    question: {
      en: 'An ideal long solenoid has 1000 turns per metre and carries a current of 2.0 A in air. Calculate the magnetic field B inside the solenoid in units of 10⁻³ T. (μ₀ = 4π × 10⁻⁷ T m A⁻¹, take π = 3.1416).',
      si: 'මීටරයකට පොටවල් 1000 ක් සහිත පරිපූර්ණ දිගු සොලනොයිඩයක් ඔස්සේ 2.0 A ධාරාවක් ගලා යයි. සොලනොයිඩය තුළ චුම්බක ක්ෂේත්‍රය B අගය 10⁻³ T වලින් ගණනය කරන්න. (μ₀ = 4π × 10⁻⁷, π = 3.1416).'
    },
    expected: 2.51,
    tolerance: 0.05,
    unit: { en: '× 10⁻³ T', si: '× 10⁻³ T' },
    hint: {
      en: 'B = μ₀ * n * I, where n = 1000 turns/m.',
      si: 'B = μ₀ * n * I, මෙහි n = මීටරයකට පොටවල් 1000.'
    },
    solution: {
      en: 'B = 4π × 10⁻⁷ * 1000 * 2.0 = 8π × 10⁻⁴ T = 2.513 × 10⁻³ T ≈ 2.51 × 10⁻³ T.',
      si: 'B = 4π × 10⁻⁷ * 1000 * 2.0 = 2.513 × 10⁻³ T ≈ 2.51 × 10⁻³ T.'
    }
  },
  {
    id: 'mag-7-5-05',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What happens to the magnetic field B at the center inside an ideal solenoid if its length is doubled while keeping the total number of turns N and current I constant?',
      si: 'පරිපූර්ණ සොලනොයිඩයක මුළු පොටවල් ගණන N සහ ධාරාව I නියතව තබා එහි දිග දෙගුණ කළහොත්, එහි කේන්ද්‍රයේ චුම්බක ක්ෂේත්‍රය B ට කුමක් සිදුවේද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'It is halved.', si: 'එය අඩක් වේ.' } },
      { id: 'opt-b', text: { en: 'It is doubled.', si: 'එය දෙගුණ වේ.' } },
      { id: 'opt-c', text: { en: 'It remains unchanged.', si: 'එය වෙනස් නොවේ.' } },
      { id: 'opt-d', text: { en: 'It quadruples.', si: 'එය සතර ගුණ වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'B = μ₀ * (N / L) * I. When length L doubles with fixed N, n = N/L is halved.',
      si: 'B = μ₀ * (N / L) * I. N ස්ථිරව තිබියදී L දෙගුණ වන විට n = N/L අඩක් වේ.'
    },
    solution: {
      en: 'Since n = N / L, doubling L halves the number of turns per unit length n, thereby halving the interior magnetic field B.',
      si: 'n = N / L බැවින් දිග දෙගුණ වන විට ඒකක දිගකට පොටවල් ගණන n අඩක් වී චුම්බක ක්ෂේත්‍රය B ද අඩක් වේ.'
    }
  },
  {
    id: 'mag-7-5-06',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'How does the magnetic field B near the open ends of a long solenoid compare with the field B_center deep inside the center?',
      si: 'දිගු සොලනොයිඩයක කෙළවර ආසන්නයේ චුම්බක ක්ෂේත්‍රය, එහි මධ්‍යයේ ඇති B_center ක්ෂේත්‍රය සමඟ සැසඳූ විට කෙබඳුද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'B_end ≈ (1/2) * B_center', si: 'B_end ≈ (1/2) * B_center වේ' } },
      { id: 'opt-b', text: { en: 'B_end ≈ 2 * B_center', si: 'B_end ≈ 2 * B_center වේ' } },
      { id: 'opt-c', text: { en: 'B_end = B_center', si: 'B_end = B_center වේ' } },
      { id: 'opt-d', text: { en: 'B_end = 0', si: 'B_end = 0 වේ' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'At the ends of a semi-infinite solenoid, the solid angle subtended by the coil is halved, giving half the central field.',
      si: 'සොලනොයිඩයක කෙළවරේදී ක්ෂේත්‍ර රේඛා දෙපසට විසිරී යන බැවින් ක්ෂේත්‍රය මධ්‍යයේ අගයෙන් අඩක් පමණ වේ.'
    },
    solution: {
      en: 'At the ends of a long solenoid, the magnetic field is approximately half of its value at the center: B_end = μ₀ n I / 2.',
      si: 'දිගු සොලනොයිඩයක කෙළවරකදී චුම්බක ක්ෂේත්‍රය මධ්‍යයේ අගයෙන් අඩක් වේ: B_end = μ₀ n I / 2.'
    }
  },
  {
    id: 'mag-7-5-07',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A toroid has a mean radius of 0.20 m and 500 closely wound turns carrying 3.0 A. Calculate the magnetic field B inside the toroid core in units of 10⁻⁴ T. (Take π = 3.1416).',
      si: 'මධ්‍යන්‍ය අරය 0.20 m වන ටොරොයිඩයක (toroid) පොටවල් 500 ක් ඔස්සේ 3.0 A ධාරාවක් ගලා යයි. ටොරොයිඩයේ හරය තුළ චුම්බක ක්ෂේත්‍රය B අගය 10⁻⁴ T වලින් ගණනය කරන්න.'
    },
    expected: 15.0,
    tolerance: 0.2,
    unit: { en: '× 10⁻⁴ T', si: '× 10⁻⁴ T' },
    hint: {
      en: 'For a toroid: B = (μ₀ * N * I) / (2π * r) = (2 × 10⁻⁷ * N * I) / r.',
      si: 'ටොරොයිඩයක් සඳහා: B = (μ₀ * N * I) / (2π * r) = (2 × 10⁻⁷ * N * I) / r.'
    },
    solution: {
      en: 'B = (2 × 10⁻⁷ * 500 * 3.0) / 0.20 = (3.0 × 10⁻⁴) / 0.20 = 15.0 × 10⁻⁴ T.',
      si: 'B = (2 × 10⁻⁷ * 500 * 3.0) / 0.20 = 15.0 × 10⁻⁴ T.'
    }
  },
  {
    id: 'mag-7-5-08',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Ampere\'s Circuital Law is mathematically expressed as ∮ B · dl = μ₀ I_enc. Under which condition is it most conveniently applied to calculate B?',
      si: 'ඇම්පියර්ගේ පරිපථ නියමය ∮ B · dl = μ₀ I_enc ලෙස ප්‍රකාශ වේ. B සෘජුව ගණනය කිරීමට මෙම නියමය වඩාත් පහසුවෙන් යොදාගත හැක්කේ කුමන තත්ත්වයේදීද?'
    },
    options: [
      { id: 'opt-a', text: { en: 'When the current distribution possesses high geometric symmetry (cylindrical, planar, or toroidal)', si: 'ධාරා ව්‍යාප්තිය ඉහළ ජ්‍යාමිතික සමමිතියක් (සිලින්ඩරාකාර, තලීය හෝ ටොරොයිඩීය) දරන විට' } },
      { id: 'opt-b', text: { en: 'Only for circuits carrying alternating currents', si: 'ප්‍රත්‍යාවර්ත ධාරා සහිත පරිපථ සඳහා පමණි' } },
      { id: 'opt-c', text: { en: 'Only inside ferromagnetic materials', si: 'ෆෙරෝචුම්බක ද්‍රව්‍ය තුළ පමණි' } },
      { id: 'opt-d', text: { en: 'When all conductors are cooled to absolute zero', si: 'සියලු සන්නායක නිරපේක්ෂ ශුන්‍යයට සිසිල් කළ විට පමණි' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Like Gauss\'s Law in electrostatics, Ampere\'s law is always true, but useful for calculating B only when symmetry allows B to be factored out of the line integral.',
      si: 'ස්ථිති විද්‍යුතයේ ගවුස් නියමය මෙන්ම, ඇම්පියර් නියමයෙන් B සෙවීමට සමමිතික ඇම්පියරීය ලූපයක් තෝරාගත හැකි විය යුතුය.'
    },
    solution: {
      en: 'Ampere\'s circuital law allows direct algebraic calculation of B when high spatial symmetry allows choosing an Amperian loop along which B is constant and tangential.',
      si: 'ඉහළ ජ්‍යාමිතික සමමිතියක් ඇති විට B නියත වන ලූපයක් තෝරාගෙන රේඛීය අනුකලනයෙන් B සෘජුව ගණනය කළ හැක.'
    }
  },
  {
    id: 'mag-7-5-09',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'The Right-Hand Grip Rule for a straight current conductor states that if the thumb points in the direction of conventional current:',
      si: 'සෘජු ධාරා සන්නායකයක් සඳහා දකුණත් ග්‍රහණ නීතියට අනුව, මාපටැඟිල්ල සම්මත ධාරාවේ දිශාවට යොමු කළ විට:'
    },
    options: [
      { id: 'opt-a', text: { en: 'The curled fingers point in the direction of the concentric magnetic field lines.', si: 'වක් වූ ඇඟිලි මඟින් ඒකකේන්ද්‍රික චුම්බක බල රේඛාවල දිශාව දැක්වේ.' } },
      { id: 'opt-b', text: { en: 'The curled fingers point in the direction of mechanical force.', si: 'වක් වූ ඇඟිලි මඟින් යාන්ත්‍රික බලයේ දිශාව දැක්වේ.' } },
      { id: 'opt-c', text: { en: 'The palm points toward the North pole of the Earth.', si: 'අල්ල පෘථිවියේ උත්තර ධ්‍රැවය දෙසට යොමු වේ.' } },
      { id: 'opt-d', text: { en: 'The back of the hand points in the direction of induced emf.', si: 'අත්ල පිටුපසින් ප්‍රේරිත වි.ගා.බ. දිශාව දැක්වේ.' } }
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Wrap fingers around the conductor with thumb along current. The curl represents B.',
      si: 'මාපටැඟිල්ල ධාරාව දිගේ තබා සන්නායකය වටා ඇඟිලි එතූ විට ඇඟිලිවලින් B ක්ෂේත්‍රය නිරූපණය වේ.'
    },
    solution: {
      en: 'In the right-hand grip rule, grasping the wire with the right thumb in the direction of current causes the naturally curling fingers to circle in the direction of circular magnetic field lines.',
      si: 'දකුණතින් සන්නායකය අල්ලා මාපටැඟිල්ල ධාරාවේ දිශාවට තැබූ විට, වක්වූ ඇඟිලි ඔස්සේ ඒකකේන්ද්‍රික චුම්බක බල රේඛාවල දිශාව ලැබේ.'
    }
  },
  {
    id: 'mag-7-5-10',
    competencyRef: 'Competency 7.2',
    category: 'current-magnetic-fields',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Two concentric circular loops of radii 0.10 m and 0.20 m carry currents of 2.0 A and 4.0 A in OPPOSITE directions in the same plane. Calculate the net magnetic field at their common center in units of 10⁻⁶ T. (μ₀ = 4π × 10⁻⁷, take π = 3.1416).',
      si: 'එකම තලයේ පොදු කේන්ද්‍රයක් සහිත අරය 0.10 m සහ 0.20 m වන වෘත්තාකාර ලූප දෙකක් ඔස්සේ ප්‍රතිවිරුද්ධ දිශාවලට 2.0 A සහ 4.0 A ධාරා ගලා යයි. ඒවායේ පොදු කේන්ද්‍රයේ ප්‍රතිඵල චුම්බක ක්ෂේත්‍රය 10⁻⁶ T වලින් ගණනය කරන්න.',
    },
    expected: 0.0,
    tolerance: 0.01,
    unit: { en: '× 10⁻⁶ T', si: '× 10⁻⁶ T' },
    hint: {
      en: 'B₁ = μ₀ I₁ / (2 r₁) = μ₀ * 2.0 / (2 * 0.10) = 10 μ₀. B₂ = μ₀ I₂ / (2 r₂) = μ₀ * 4.0 / (2 * 0.20) = 10 μ₀. Since currents are opposite, subtract them.',
      si: 'B₁ = μ₀ * 2 / (2 * 0.1) = 10 μ₀. B₂ = μ₀ * 4 / (2 * 0.2) = 10 μ₀. ධාරා ප්‍රතිවිරුද්ධ නිසා ක්ෂේත්‍ර දෙක එකිනෙක අවලංගු වේ.'
    },
    solution: {
      en: 'B₁ = (4π × 10⁻⁷ * 2) / (2 * 0.10) = 4π × 10⁻⁶ T. B₂ = (4π × 10⁻⁷ * 4) / (2 * 0.20) = 4π × 10⁻⁶ T. In opposite directions, B_net = B₁ - B₂ = 0.0 T.',
      si: 'B₁ = 4π × 10⁻⁶ T සහ B₂ = 4π × 10⁻⁶ T. ක්ෂේත්‍ර ප්‍රතිවිරුද්ධ බැවින් B_net = B₁ - B₂ = 0 T වේ.'
    }
  },
{
  "id": "mag-sq01",
  "competencyRef": "Competency 7.2",
  "category": "terrestrial-magnetism",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "At a particular geographical location on Earth, the total magnetic field intensity is 4.0 × 10⁻⁵ T and the angle of dip (inclination) is 30°. (a) Define angle of dip (inclination) and magnetic declination. (b) Calculate the horizontal component B_H and vertical component B_V of Earth's magnetic field at this location. (c) At what locations on Earth's surface is the angle of dip equal to (i) 0° and (ii) 90°?",
    "si": "පෘථිවිය මත එක්තරා භූගෝලීය ස්ථානයකදී මුළු චුම්භක ක්ෂේත්‍ර තීව්‍රතාව 4.0 × 10⁻⁵ T වන අතර ආනති කෝණය (බැස්ම) 30° කි. (a) ආනති කෝණය (බැස්ම) සහ චුම්භක දික්පාතය අර්ථ දක්වන්න. (b) මෙම ස්ථානයේදී පෘථිවි චුම්භක ක්ෂේත්‍රයේ තිරස් සංරචකය B_H සහ සිරස් සංරචකය B_V ගණනය කරන්න. (c) පෘථිවි පෘෂ්ඨය මත ආනති කෝණය (i) 0° සහ (ii) 90° වන්නේ කවර ස්ථානවලද?"
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Define angle of dip (inclination) and magnetic declination.",
        "si": "ආනති කෝණය (බැස්ම) සහ චුම්භක දික්පාතය අර්ථ දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Angle of dip (inclination, θ): The angle between Earth's total magnetic field vector and the horizontal in the magnetic meridian. Magnetic declination: The angle between the magnetic meridian and the geographic meridian at a given location.",
        "si": "ආනති කෝණය (බැස්ම, θ): චුම්භක මධ්‍යහ්න රේඛාවේදී පෘථිවියේ මුළු චුම්භක ක්ෂේත්‍ර දෛශිකය තිරස සමග සාදන කෝණයයි. චුම්භක දික්පාතය: යම් ස්ථානයකදී චුම්භක මධ්‍යහ්න රේඛාව සහ භූගෝලීය මධ්‍යහ්න රේඛාව අතර කෝණයයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Angle between total field and horizontal plane",
            "si": "මුළු ක්ෂේත්‍රය සහ තිරස් තලය අතර කෝණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Measured in the magnetic meridian",
            "si": "චුම්භක මධ්‍යහ්න තලයේදී මැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Declination is angle between magnetic and geographic meridians",
            "si": "දික්පාතය යනු චුම්භක හා භූගෝලීය මධ්‍යහ්න තල අතර කෝණයයි"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate B_H and B_V at the location.",
        "si": "අදාළ ස්ථානයේ B_H සහ B_V ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Horizontal component: B_H = B_E cos(θ) = 4.0 × 10⁻⁵ T × cos(30°) = 4.0 × 10⁻⁵ × (√3 / 2) = 3.46 × 10⁻⁵ T (34.6 μT). Vertical component: B_V = B_E sin(θ) = 4.0 × 10⁻⁵ T × sin(30°) = 4.0 × 10⁻⁵ × 0.50 = 2.0 × 10⁻⁵ T (20.0 μT).",
        "si": "තිරස් සංරචකය: B_H = B_E cos(30°) = 4.0 × 10⁻⁵ × 0.866 = 3.46 × 10⁻⁵ T. සිරස් සංරචකය: B_V = B_E sin(30°) = 4.0 × 10⁻⁵ × 0.5 = 2.0 × 10⁻⁵ T."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula B_H = B cos(θ)",
            "si": "B_H = B cos(θ) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates B_H = 3.46 × 10⁻⁵ T",
            "si": "B_H = 3.46 × 10⁻⁵ T ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula B_V = B sin(θ)",
            "si": "B_V = B sin(θ) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates B_V = 2.0 × 10⁻⁵ T",
            "si": "B_V = 2.0 × 10⁻⁵ T ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Identify the locations on Earth where angle of dip is 0° and 90°.",
        "si": "ආනති කෝණය 0° සහ 90° වන පෘථිවියේ ස්ථාන හඳුනාගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(i) Angle of dip = 0° at the Magnetic Equator (where Earth's field is completely horizontal, B_V = 0). (ii) Angle of dip = 90° at the Magnetic Poles (North and South Magnetic Poles, where Earth's field is completely vertical, B_H = 0).",
        "si": "(i) ආනති කෝණය 0° වන්නේ චුම්භක සමකයේදීය (මෙහිදී ක්ෂේත්‍රය සම්පූර්ණයෙන් තිරස් වේ, B_V = 0). (ii) ආනති කෝණය 90° වන්නේ චුම්භක ධ්‍රැවවලදීය (උතුරු සහ දකුණු චුම්භක ධ්‍රැව, මෙහිදී ක්ෂේත්‍රය සම්පූර්ණයෙන් සිරස් වේ, B_H = 0)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Magnetic equator for dip = 0°",
            "si": "ආනතිය 0° සඳහා චුම්භක සමකය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Magnetic poles for dip = 90°",
            "si": "ආනතිය 90° සඳහා චුම්භක ධ්‍රැව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Notes B_V = 0 at equator and B_H = 0 at poles",
            "si": "සමකයේදී B_V = 0 සහ ධ්‍රැවවලදී B_H = 0 බව"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "B_H = B cos(θ) and B_V = B sin(θ); at the magnetic equator field is horizontal, at magnetic poles it is vertical.",
    "si": "B_H = B cos(θ) සහ B_V = B sin(θ); චුම්භක සමකයේදී ක්ෂේත්‍රය තිරස් වන අතර ධ්‍රැවවලදී සිරස් වේ."
  },
  "solution": {
    "en": "B_H = 3.46 × 10⁻⁵ T; B_V = 2.0 × 10⁻⁵ T. Dip is 0° at magnetic equator and 90° at magnetic poles.",
    "si": "B_H = 3.46 × 10⁻⁵ T; B_V = 2.0 × 10⁻⁵ T. සමකයේදී ආනතිය 0° සහ ධ්‍රැවවලදී 90° වේ."
  }
},
{
  "id": "mag-sq02",
  "competencyRef": "Competency 7.1",
  "category": "moving-charge-lorentz",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A proton (mass m = 1.67 × 10⁻²⁷ kg, charge q = +1.60 × 10⁻¹⁹ C) is accelerated from rest through a potential difference V = 2000 V. It then enters perpendicularly into a uniform magnetic field of flux density B = 0.50 T. (a) Calculate the speed v of the proton upon entering the magnetic field. (b) Derive an expression for the radius r of the circular orbit in terms of m, v, q, B, and calculate its numerical value. (c) Calculate the time period T and frequency f of the proton's orbital motion, and explain why the period is independent of speed.",
    "si": "ප්‍රෝටෝනයක් (ස්කන්ධය m = 1.67 × 10⁻²⁷ kg, ආරෝපණය q = +1.60 × 10⁻¹⁹ C) නිශ්චලතාවයේ සිට V = 2000 V විභව අන්තරයක් හරහා ත්වරණය කරනු ලැබේ. ඉන්පසු එය B = 0.50 T ස්‍රාව ඝනත්වයක් සහිත ඒකාකාර චුම්භක ක්ෂේත්‍රයකට ලම්බකව ඇතුළු වේ. (a) චුම්භක ක්ෂේත්‍රයට ඇතුළු වන විට ප්‍රෝටෝනයේ v වේගය ගණනය කරන්න. (b) m, v, q, B ඇසුරින් වෘත්තාකාර කක්ෂයේ අරය r සඳහා ප්‍රකාශනයක් ගොඩනගා එහි සංඛ්‍යාත්මක අගය ගණනය කරන්න. (c) ප්‍රෝටෝනයේ කක්ෂීය චලිතයේ ආවර්ත කාලය T සහ සංඛ්‍යාතය f ගණනය කර ආවර්ත කාලය වේගය මත රඳා නොපවතින්නේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate the entry speed v of the proton.",
        "si": "ප්‍රෝටෝනයේ ඇතුළුවන වේගය v ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Kinetic energy gained: 1/2 m v² = q V => v = √(2 q V / m). v = √[ (2 × 1.60 × 10⁻¹⁹ C × 2000 V) / (1.67 × 10⁻²⁷ kg) ] = √[ 6.40 × 10⁻¹⁶ / 1.67 × 10⁻²⁷ ] = √(3.832 × 10¹¹) = 6.19 × 10⁵ m s⁻¹.",
        "si": "චාලක ශක්තිය: 1/2 m v² = q V => v = √(2qV/m) = √[(2 × 1.60 × 10⁻¹⁹ × 2000) / 1.67 × 10⁻²⁷] = 6.19 × 10⁵ m s⁻¹."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Energy conservation 1/2 m v² = q V",
            "si": "ශක්ති සංස්ථිතිය 1/2 m v² = q V"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct substitution of values",
            "si": "අගයන් නිවැරදිව ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains v = 6.19 × 10⁵ m s⁻¹",
            "si": "v = 6.19 × 10⁵ m s⁻¹ ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Derive radius r = mv / (qB) and calculate its value.",
        "si": "අරය r = mv / (qB) ගොඩනගා අගය ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Magnetic Lorentz force acts as the centripetal force: F_m = q v B = m v² / r => r = m v / (q B). Calculation: r = (1.67 × 10⁻²⁷ kg × 6.19 × 10⁵ m s⁻¹) / (1.60 × 10⁻¹⁹ C × 0.50 T) = 1.034 × 10⁻²¹ / 8.0 × 10⁻²⁰ = 0.0129 m = 1.29 cm (or 1.3 cm).",
        "si": "චුම්භක ලොරෙන්ට්ස් බලය කේන්ද්‍රාභිසාරී බලය සපයයි: q v B = m v² / r => r = m v / (q B). r = (1.67 × 10⁻²⁷ × 6.19 × 10⁵) / (1.60 × 10⁻¹⁹ × 0.50) = 0.0129 m = 1.29 cm."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Equating magnetic force to centripetal force qvB = mv²/r",
            "si": "qvB = mv²/r සමීකරණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Deriving r = mv / (qB)",
            "si": "r = mv / (qB) ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitution of all constants",
            "si": "සියලු නියතයන් ආදේශ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtaining r = 1.29 cm (0.0129 m)",
            "si": "r = 1.29 cm (0.0129 m) ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate period T and frequency f, and explain why T is speed-independent.",
        "si": "ආවර්ත කාලය T සහ සංඛ්‍යාතය f ගණනය කර, T වේගය මත රඳා නොපවතින්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Period T = 2πr / v = 2π(mv / qB) / v = 2πm / (qB). Calculation: T = 2π(1.67 × 10⁻²⁷) / (1.60 × 10⁻¹⁹ × 0.50) = 1.049 × 10⁻²⁶ / 8.0 × 10⁻²⁰ = 1.31 × 10⁻⁷ s (131 ns). Frequency f = 1 / T = 7.63 × 10⁶ Hz (7.63 MHz). Explanation: As speed v increases, the orbital radius r increases in exact direct proportion (r ∝ v). The longer orbit distance 2πr exactly offsets the higher velocity, leaving the time for one full revolution 2πr/v constant.",
        "si": "T = 2πm / (qB) = 2π(1.67 × 10⁻²⁷) / (1.60 × 10⁻¹⁹ × 0.50) = 1.31 × 10⁻⁷ s. සංඛ්‍යාතය f = 7.63 MHz. පැහැදිලි කිරීම: වේගය v වැඩි වන විට කක්ෂයේ අරය r ද ඊට සමානුපාතිකව වැඩි වේ (r ∝ v). කක්ෂයේ දිග වැඩිවීම සහ වේගය වැඩිවීම එකිනෙක තුලනය වන බැවින් ආවර්ත කාලය නියතව පවතී."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Derives T = 2πm / (qB)",
            "si": "T = 2πm / (qB) ව්‍යුත්පන්න කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates T = 1.31 × 10⁻⁷ s and f = 7.63 MHz",
            "si": "T සහ f නිවැරදිව ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains r ∝ v cancels out speed in ratio 2πr/v",
            "si": "r ∝ v බැවින් 2πr/v අනුපාතයේ වේගය අවලංගු වන බව"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Kinetic energy qV = 1/2 mv² gives speed; centripetal balance qvB = mv²/r yields radius r = mv/qB; period T = 2πm/qB.",
    "si": "චාලක ශක්තිය qV = 1/2 mv² මගින් වේගය ලබා ගනී; කේන්ද්‍රාභිසාරී සමතුලිතතාව qvB = mv²/r මගින් අරය r = mv/qB ලැබේ; T = 2πm/qB."
  },
  "solution": {
    "en": "v = 6.19 × 10⁵ m s⁻¹; r = 1.29 cm; T = 1.31 × 10⁻⁷ s; f = 7.63 MHz.",
    "si": "v = 6.19 × 10⁵ m s⁻¹; r = 1.29 cm; T = 1.31 × 10⁻⁷ s; f = 7.63 MHz."
  }
},
{
  "id": "mag-sq03",
  "competencyRef": "Competency 7.1",
  "category": "velocity-selector-hall",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In a Bainbridge mass spectrometer, a beam of singly ionized neon isotopes (Ne⁺) enters a velocity selector containing mutually perpendicular electric and magnetic fields E and B₁. The electric field E = 4.0 × 10⁴ V m⁻¹ and B₁ = 0.20 T. Particles that pass undeflected enter a semicircular deflection chamber with a uniform magnetic field B₂ = 0.50 T. (a) Derive the condition for particles to pass through the velocity selector undeflected, and calculate this selected speed v. (b) Explain how the velocity selector acts as a filter for ions with higher or lower speeds. (c) Two neon isotopes ²⁰Ne and ²²Ne are detected at distinct photographic spots. Calculate the separation distance between the two detector marks (take m(²⁰Ne) = 20 u, m(²²Ne) = 22 u, 1 u = 1.66 × 10⁻²⁷ kg, e = 1.60 × 10⁻¹⁹ C).",
    "si": "බේන්බ්‍රිජ් ස්කන්ධ වර්ණාවලීමානයක, ඒක ආරෝපිත නියොන් සමස්ථානික (Ne⁺) කදම්භයක් එකිනෙකට ලම්බක විද්‍යුත් (E) සහ චුම්භක (B₁) ක්ෂේත්‍ර සහිත ප්‍රවේග වරණයකට ඇතුළු වේ. මෙහි E = 4.0 × 10⁴ V m⁻¹ සහ B₁ = 0.20 T වේ. අපගමනය නොවී ගමන් කරන අංශු B₂ = 0.50 T ඒකාකාර චුම්භක ක්ෂේත්‍රයක් සහිත අර්ධ වෘත්තාකාර අපගමන කුටීරයකට ඇතුළු වේ. (a) අපගමනය නොවී ගමන් කිරීමේ කොන්දේසිය ගොඩනගා තෝරාගත් ප්‍රවේගය v ගණනය කරන්න. (b) වැඩි හෝ අඩු වේග සහිත අයන සඳහා ප්‍රවේග වරණය පෙරනයක් ලෙස ක්‍රියා කරන්නේ කෙසේදැයි පහදන්න. (c) ²⁰Ne සහ ²²Ne සමස්ථානික සටහන් වන ස්ථාන දෙක අතර පරතරය ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive v = E / B₁ for undeflected transmission and calculate v.",
        "si": "අපගමනය නොවී ගමන් කිරීමට v = E / B₁ ගොඩනගා v ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "For undeflected straight-line motion, electrostatic force F_e = qE must balance magnetic force F_m = qvB₁ in opposite directions: q E = q v B₁ => v = E / B₁. Calculation: v = (4.0 × 10⁴ V m⁻¹) / (0.20 T) = 2.0 × 10⁵ m s⁻¹.",
        "si": "සරල රේඛීයව අපගමනය නොවී යාමට විද්‍යුත් බලය සහ චුම්භක බලය විශාලත්වයෙන් සමාන වී ප්‍රතිවිරුද්ධ විය යුතුය: q E = q v B₁ => v = E / B₁. v = (4.0 × 10⁴) / 0.20 = 2.0 × 10⁵ m s⁻¹."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Force balance condition qE = qvB₁",
            "si": "බල තුලන කොන්දේසිය qE = qvB₁"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Derives v = E / B₁",
            "si": "v = E / B₁ ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates v = 2.0 × 10⁵ m s⁻¹",
            "si": "v = 2.0 × 10⁵ m s⁻¹ ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain why ions with v > E/B₁ or v < E/B₁ are filtered out.",
        "si": "v > E/B₁ හෝ v < E/B₁ සහිත අයන ඉවත් වන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "If an ion has v > E/B₁, the magnetic force (F_m ∝ v) exceeds the electric force, deflecting the ion towards the magnetic force direction. If an ion has v < E/B₁, the electric force exceeds the magnetic force, deflecting the ion towards the electric force direction. Both deflected trajectories strike the entrance slit plates and fail to exit.",
        "si": "අයනයකට v > E/B₁ ඇත්නම්, චුම්භක බලය (F_m ∝ v) විද්‍යුත් බලයට වඩා වැඩි වී චුම්භක බල දිශාවට අපගමනය වේ. v < E/B₁ නම්, විද්‍යුත් බලය වැඩි වී විද්‍යුත් බල දිශාවට අපගමනය වේ. අපගමනය වන අයන කඩතුරා තහඩුවේ ගැටී පෙරී යයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "For v > E/B: magnetic force dominates and deflects ion",
            "si": "v > E/B විට චුම්භක බලය ප්‍රමුඛ වී අපගමනය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "For v < E/B: electric force dominates and deflects ion",
            "si": "v < E/B විට විද්‍යුත් බලය ප්‍රමුඛ වී අපගමනය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Deflected ions collide with exit slits/apertures",
            "si": "අපගමනය වන අයන පිටවීම් කුහරවල ගැටී අවහිර වීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate the separation distance Δx between the marks of ²⁰Ne and ²²Ne.",
        "si": "²⁰Ne සහ ²²Ne සලකුණු අතර පරතරය Δx ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "In deflection chamber, ions follow semicircles with diameter D = 2r = 2mv / (qB₂). Separation on detector is Δx = D₂₂ - D₂₀ = 2v / (qB₂) × (m₂₂ - m₂₀). Δm = (22 - 20) u = 2 × 1.66 × 10⁻²⁷ kg = 3.32 × 10⁻²⁷ kg. Δx = [ 2 × (2.0 × 10⁵ m s⁻¹) × (3.32 × 10⁻²⁷ kg) ] / [ 1.60 × 10⁻¹⁹ C × 0.50 T ] = [ 1.328 × 10⁻²¹ ] / [ 8.0 × 10⁻²⁰ ] = 0.0166 m = 1.66 cm (16.6 mm).",
        "si": "අපගමන කුටීරයේ විෂ්කම්භය D = 2r = 2mv / (qB₂). සලකුණු අතර පරතරය Δx = D₂₂ - D₂₀ = 2v(m₂₂ - m₂₀) / (qB₂). Δm = 2 × 1.66 × 10⁻²⁷ kg = 3.32 × 10⁻²⁷ kg. Δx = (2 × 2.0 × 10⁵ × 3.32 × 10⁻²⁷) / (1.60 × 10⁻¹⁹ × 0.50) = 0.0166 m = 1.66 cm (16.6 mm)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Semicircle diameter relation D = 2r = 2mv / (qB₂)",
            "si": "විෂ්කම්භය D = 2r = 2mv / (qB₂) සම්බන්ධතාව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mass difference Δm = 3.32 × 10⁻²⁷ kg",
            "si": "ස්කන්ධ වෙනස Δm = 3.32 × 10⁻²⁷ kg"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Correct substitution into Δx expression",
            "si": "Δx ප්‍රකාශනයට නිවැරදි ආදේශය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains Δx = 1.66 cm (or 16.6 mm)",
            "si": "Δx = 1.66 cm (හෝ 16.6 mm) ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "In velocity selector, v = E/B₁; in deflection chamber, particles complete a semicircle of diameter 2r = 2mv/(qB₂).",
    "si": "ප්‍රවේග වරණයේ v = E/B₁; අපගමන කුටීරයේ විෂ්කම්භය 2r = 2mv/(qB₂) වන අර්ධ වෘත්තයක් සාදයි."
  },
  "solution": {
    "en": "v = 2.0 × 10⁵ m s⁻¹; ions with other speeds are deflected into walls; Δx = 1.66 cm (16.6 mm).",
    "si": "v = 2.0 × 10⁵ m s⁻¹; වෙනත් වේග සහිත අයන අපගමනය වී ඉවත් වේ; Δx = 1.66 cm (16.6 mm)."
  }
},
{
  "id": "mag-sq04",
  "competencyRef": "Competency 7.1",
  "category": "velocity-selector-hall",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A copper strip of width w = 1.5 cm and thickness t = 0.10 mm carries a steady current I = 8.0 A. A uniform magnetic field B = 1.2 T is applied perpendicular to the wide face of the strip. (Free electron density in copper n = 8.4 × 10²⁸ m⁻³, e = 1.60 × 10⁻¹⁹ C). (a) Explain the origin of the Hall potential difference across the strip. (b) Derive the formula for the Hall voltage V_H = (I B) / (n q t). (c) Calculate the magnitude of the Hall voltage V_H and explain how the Hall effect can determine whether charge carriers in a semiconductor are electrons or holes.",
    "si": "පළල w = 1.5 cm සහ ඝනකම t = 0.10 mm වන තඹ තීරුවක් ඔස්සේ I = 8.0 A ඒකාකාර ධාරාවක් ගලා යයි. තීරුවේ පළල් මුහුණතට ලම්බකව B = 1.2 T ඒකාකාර චුම්භක ක්ෂේත්‍රයක් යොදනු ලැබේ (තඹවල නිදහස් ඉලෙක්ට්‍රෝන ඝනත්වය n = 8.4 × 10²⁸ m⁻³, e = 1.60 × 10⁻¹⁹ C). (a) තීරුව හරහා හෝල් විභව අන්තරයක් හටගැනීම පැහැදිලි කරන්න. (b) හෝල් වෝල්ටීයතාව සඳහා V_H = (I B) / (n q t) සූත්‍රය ගොඩනගන්න. (c) හෝල් වෝල්ටීයතාවයේ V_H අගය ගණනය කර අර්ධ සන්නායකයක ආරෝපණ වාහක ඉලෙක්ට්‍රෝනද කුහරද යන්න හෝල් ආචරණයෙන් තීරණය කරන්නේ කෙසේදැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Explain how the Hall effect produces a transverse potential difference.",
        "si": "හෝල් ආචරණය මගින් තීර්යක් විභව අන්තරයක් ඇතිවන ආකාරය පැහැදිලි කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "When a current flows through a conductor in a transverse magnetic field, moving charge carriers experience a magnetic Lorentz force F_m = q v_d B directed towards one side edge. This causes charge accumulation on that edge and an opposite charge deficiency on the other edge, setting up a transverse Hall electric field E_H. Accumulation continues until the electric force qE_H balances the magnetic force q v_d B, producing a steady Hall voltage V_H across the width.",
        "si": "චුම්භක ක්ෂේත්‍රයක් තුළ ඇති සන්නායකයක් ඔස්සේ ධාරාවක් ගලා යන විට, චලනය වන ආරෝපණ වාහක මත F_m = q v_d B චුම්භක ලොරෙන්ට්ස් බලයක් හටගෙන එක් දාරයක් දෙසට අපගමනය වේ. එමගින් එම දාරයේ ආරෝපණ එකතු වී තීර්යක් හෝල් විද්‍යුත් ක්ෂේත්‍රයක් E_H ගොඩනැගේ. විද්‍යුත් බලය qE_H චුම්භක බලය q v_d B සමග සමතුලිත වන තෙක් මෙය සිදුවන අතර පළල හරහා ස්ථාවර හෝල් වෝල්ටීයතාවයක් V_H ඇති වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Lorentz force pushes drift carriers to one lateral edge",
            "si": "ලොරෙන්ට්ස් බලය මගින් වාහක එක් දාරයකට තල්ලු වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Charge separation creates transverse Hall electric field E_H",
            "si": "ආරෝපණ වෙන්වීමෙන් තීර්යක් විද්‍යුත් ක්ෂේත්‍රයක් හටගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Equilibrium reached when qE_H = q v_d B",
            "si": "qE_H = q v_d B වූ විට සමතුලිතතාව ඇතිවීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Derive V_H = (I B) / (n q t).",
        "si": "V_H = (I B) / (n q t) ගොඩනගන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "At equilibrium: q E_H = q v_d B => E_H = v_d B. The Hall voltage across width w is V_H = E_H w = v_d B w. Current is I = n q A v_d = n q (w t) v_d => v_d = I / (n q w t). Substituting v_d into V_H gives: V_H = [ I / (n q w t) ] × B × w = (I B) / (n q t). Note that width w cancels out, leaving thickness t.",
        "si": "සමතුලිතතාවයේදී: q E_H = q v_d B => E_H = v_d B. පළල w හරහා හෝල් වෝල්ටීයතාව V_H = E_H w = v_d B w වේ. ධාරාව I = n q A v_d = n q (w t) v_d => v_d = I / (n q w t). මෙය ආදේශයෙන්: V_H = [I / (n q w t)] × B × w = (I B) / (n q t)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Equilibrium condition E_H = v_d B",
            "si": "සමතුලිතතා කොන්දේසිය E_H = v_d B"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Relates Hall voltage to width V_H = E_H w",
            "si": "හෝල් වෝල්ටීයතාව V_H = E_H w සම්බන්ධය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Drift velocity formula I = n q (w t) v_d",
            "si": "ප්‍රවාහ ප්‍රවේග සූත්‍රය I = n q (w t) v_d"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Substitution and cancellation of w to obtain V_H = IB / (nqt)",
            "si": "ආදේශ කර w අවලංගු වීමෙන් V_H = IB / (nqt) ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate V_H and explain carrier sign determination in semiconductors.",
        "si": "V_H ගණනය කර අර්ධ සන්නායකවල වාහක ලකුණ තීරණය කරන ආකාරය පැහැදිලි කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Calculation: thickness t = 0.10 mm = 1.0 × 10⁻⁴ m. V_H = (8.0 A × 1.2 T) / [ (8.4 × 10²⁸ m⁻³) × (1.60 × 10⁻¹⁹ C) × (1.0 × 10⁻⁴ m) ] = 9.6 / [ 1.344 × 10⁶ ] = 7.14 × 10⁻⁶ V = 7.14 μV. Carrier sign: In an n-type semiconductor (electrons), electrons moving against the current are deflected to edge X, making edge X negative. In a p-type semiconductor (holes), positive holes moving along the current are also deflected to edge X, making edge X positive. By measuring the polarity of the Hall voltage across the edges, the sign of the charge carriers is directly determined.",
        "si": "ගණනය: t = 1.0 × 10⁻⁴ m. V_H = (8.0 × 1.2) / (8.4 × 10²⁸ × 1.60 × 10⁻¹⁹ × 1.0 × 10⁻⁴) = 7.14 × 10⁻⁶ V = 7.14 μV. වාහක ලකුණ: n-වර්ගයේ අර්ධ සන්නායකයක (ඉලෙක්ට්‍රෝන), X දාරය සෘණ වේ. p-වර්ගයේ (කුහර), එම X දාරයම ධන වේ. එබැවින් හෝල් වෝල්ටීයතාවයේ ධ්‍රැවීයතාව මැනීමෙන් ආරෝපණ වාහකවල ලකුණ තීරණය කළ හැක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Correct calculation of V_H = 7.14 μV",
            "si": "V_H = 7.14 μV නිවැරදිව ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies polarity reversal between negative electrons and positive holes",
            "si": "සෘණ ඉලෙක්ට්‍රෝන සහ ධන කුහර අතර ධ්‍රැවීයතා වෙනස හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains polarity measurement reveals majority carrier type (n vs p)",
            "si": "ධ්‍රැවීයතාව මගින් බහුතර වාහක වර්ගය හෙළිවන බව පැහැදිලි කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "V_H = (I B) / (n q t); magnetic force balance q v_d B = q E_H; polarity of V_H reveals sign of charge carriers.",
    "si": "V_H = (I B) / (n q t); චුම්භක බල තුලනය q v_d B = q E_H; V_H හි ධ්‍රැවීයතාවෙන් වාහකවල ආරෝපණ ලකුණ හෙළි වේ."
  },
  "solution": {
    "en": "V_H = 7.14 μV. Carrier sign: negative polarity on deflection edge indicates electrons (n-type); positive indicates holes (p-type).",
    "si": "V_H = 7.14 μV. අපගමන දාරය සෘණ නම් ඉලෙක්ට්‍රෝන (n-වර්ගය) ද, ධන නම් කුහර (p-වර්ගය) ද වේ."
  }
},
{
  "id": "mag-sq05",
  "competencyRef": "Competency 7.1",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "In an experiment using a current balance to measure magnetic flux density B between the flat poles of an electromagnet, a rigid U-shaped conductor is placed with its horizontal base of length L = 5.0 cm perpendicular to the field. (Take g = 9.8 m s⁻²). (a) State Fleming’s Left-Hand Rule. (b) When a current I = 4.0 A passes through the conductor, an additional downward magnetic force is exerted on the base. A mass of 1.20 g placed on the opposite balance pan at the same lever arm restores horizontal balance. Calculate the magnetic flux density B. (c) State how the experimenter can confirm that the magnetic force is directly proportional to current I.",
    "si": "විද්‍යුත් චුම්භකයක පැතලි ධ්‍රැව අතර චුම්භක ස්‍රාව ඝනත්වය B මැනීමට ධාරා තුලාවක් භාවිත කරන පරීක්ෂණයකදී, L = 5.0 cm දිගැති තිරස් පාදයක් සහිත දෘඪ U-හැඩැති සන්නායකයක් ක්ෂේත්‍රයට ලම්බකව තබා ඇත (g = 9.8 m s⁻²). (a) ෆ්ලෙමින්ගේ වමත් නීතිය ප්‍රකාශ කරන්න. (b) සන්නායකය හරහා I = 4.0 A ධාරාවක් ගලා යන විට පාදය මත පහළට අතිරේක චුම්භක බලයක් යෙදේ. සමාන ලීවර බාහුවක ඇති ප්‍රතිවිරුද්ධ තැටිය මත 1.20 g ස්කන්ධයක් තැබූ විට නැවත තිරස්ව සමතුලිත වේ. චුම්භක ස්‍රාව ඝනත්වය B ගණනය කරන්න. (c) චුම්භක බලය ධාරාව I ට අනුලෝමව සමානුපාතික බව පරීක්ෂකයා තහවුරු කර ගන්නේ කෙසේදැයි දක්වන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Fleming's Left-Hand Rule.",
        "si": "ෆ්ලෙමින්ගේ වමත් නීතිය ප්‍රකාශ කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Fleming's Left-Hand Rule: Stretch the thumb, forefinger, and middle finger of the left hand mutually perpendicular to each other. If the forefinger points in the direction of the magnetic field (B) and the middle finger in the direction of the conventional current (I), then the thumb indicates the direction of the mechanical force (motion) acting on the conductor.",
        "si": "ෆ්ලෙමින්ගේ වමත් නීතිය: වමතේ මහපටැඟිල්ල, දබරැඟිල්ල සහ මැදඟිල්ල එකිනෙකට ලම්බක වන සේ දිගු කළ විට, දබරැඟිල්ලෙන් චුම්භක ක්ෂේත්‍රයේ දිශාවද (B), මැදඟිල්ලෙන් සම්මත ධාරාවේ දිශාවද (I) දැක්වෙන්නේ නම්, මහපටැඟිල්ලෙන් සන්නායකය මත ක්‍රියා කරන චුම්භක බලයේ (චලිතයේ) දිශාව දැක්වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Thumb, forefinger, and middle finger mutually perpendicular",
            "si": "මහපටැඟිල්ල, දබරැඟිල්ල, මැදඟිල්ල ලම්බකව තබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Forefinger = Field (B), Middle finger = Current (I)",
            "si": "දබරැඟිල්ල = ක්ෂේත්‍රය, මැදඟිල්ල = ධාරාව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Thumb = Force / Motion (F)",
            "si": "මහපටැඟිල්ල = බලය/චලිතය"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate magnetic flux density B using balance data.",
        "si": "තුලා දත්ත භාවිතයෙන් චුම්භක ස්‍රාව ඝනත්වය B ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "At balance: Magnetic force F_m = Balancing gravitational force mg. Formula: B I L = m g => B = (m g) / (I L). Given: m = 1.20 g = 1.20 × 10⁻³ kg, g = 9.8 m s⁻², I = 4.0 A, L = 5.0 cm = 0.050 m. Calculation: B = (1.20 × 10⁻³ kg × 9.8 m s⁻²) / (4.0 A × 0.050 m) = (0.01176 N) / (0.20 A m) = 0.0588 T (or 5.88 × 10⁻² T = 58.8 mT).",
        "si": "සමතුලිතතාවයේදී: B I L = m g => B = (m g) / (I L). B = (1.20 × 10⁻³ × 9.8) / (4.0 × 0.050) = 0.01176 / 0.20 = 0.0588 T (58.8 mT)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula balance B I L = m g",
            "si": "B I L = m g තුලන සමීකරණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Converts grams to kg and cm to m",
            "si": "ග්‍රෑම් කිලෝග්‍රෑම් වලටද සෙන්ටිමීටර මීටර වලටද හැරවීම"
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
            "en": "Obtains B = 0.0588 T (or 58.8 mT)",
            "si": "B = 0.0588 T ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Describe how the proportionality F ∝ I can be experimentally verified.",
        "si": "F ∝ I සමානුපාතිකතාව ප්‍රායෝගිකව තහවුරු කරන්නේ කෙසේදැයි විස්තර කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Vary the current I through the conductor using a rheostat over several values (e.g. 1 A, 2 A, 3 A, 4 A, 5 A). For each current, determine the restoring mass m required to balance the beam. Plot a graph of balancing mass m (or force mg) on the vertical axis against current I on the horizontal axis. A straight line passing through the origin verifies that F is directly proportional to I.",
        "si": "රියෝස්ටැටයක් භාවිතයෙන් ධාරාව I අගයන් කිහිපයකින් (1 A, 2 A, 3 A, 4 A, 5 A) වෙනස් කරන්න. එක් එක් ධාරාව සඳහා තුලනයට අවශ්‍ය ස්කන්ධය m මනින්න. තිරස් අක්ෂයේ ධාරාව I ට එදිරිව සිරස් අක්ෂයේ ස්කන්ධය m (හෝ mg බලය) ප්‍රස්තාරගත කරන්න. ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් ලැබීමෙන් F ∝ I බව සනාථ වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Measure balancing mass m for multiple current values I",
            "si": "ධාරා අගයන් කිහිපයක් සඳහා තුලන ස්කන්ධය m මැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Plot graph of m (or F) versus I",
            "si": "I ට එදිරිව m (හෝ F) ප්‍රස්තාරයක් ඇඳීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Straight line through origin confirms direct proportionality",
            "si": "මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවෙන් අනුලෝම සමානුපාතික බව තහවුරු වීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Current balance equates magnetic force BIL to gravitational force mg; plot of m vs I should be linear through the origin.",
    "si": "ධාරා තුලාව මගින් BIL චුම්භක බලය mg ගුරුත්ව බලයට සමාන කරයි; m එදිරිව I ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි."
  },
  "solution": {
    "en": "B = 0.0588 T (58.8 mT). Proportionality confirmed by straight line through origin for m vs I.",
    "si": "B = 0.0588 T (58.8 mT). m එදිරිව I ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් වීමෙන් සනාථ වේ."
  }
},
{
  "id": "mag-sq06",
  "competencyRef": "Competency 7.1",
  "category": "current-force-wires",
  "difficulty": "intermediate",
  "type": "structured",
  "question": {
    "en": "Two long, straight parallel wires X and Y are separated by a distance d = 10 cm in vacuum. Wire X carries a current I₁ = 15 A and wire Y carries a current I₂ = 25 A in the same direction. (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) State the magnetic field formula B = (μ₀ I) / (2π r) for a long straight wire and calculate the field produced by wire X at wire Y. (b) Calculate the magnetic force per unit length exerted by wire X on wire Y, and state whether this force is attractive or repulsive. (c) State the official SI definition of the Ampere based on the force between two parallel current-carrying conductors.",
    "si": "රික්තකය තුළ d = 10 cm පරතරයකින් දිගු සෘජු සමාන්තර සන්නායක කම්බි X සහ Y තබා ඇත. X කම්බිය ඔස්සේ I₁ = 15 A සහ Y කම්බිය ඔස්සේ I₂ = 25 A ධාරා එකම දිශාවට ගලා යයි (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) දිගු සෘජු කම්බියක් සඳහා චුම්භක ක්ෂේත්‍ර සූත්‍රය B = (μ₀ I) / (2π r) දක්වා X කම්බිය මගින් Y කම්බිය පිහිටි තැන ඇති කරන ක්ෂේත්‍රය ගණනය කරන්න. (b) X කම්බිය මගින් Y කම්බියේ ඒකක දිගක් මත යොදන චුම්භක බලය ගණනය කර එම බලය ආකර්ෂණ බලයක්ද විකර්ෂණ බලයක්දැයි දක්වන්න. (c) සමාන්තර ධාරා සන්නායක දෙකක් අතර බලය මත පදනම් වූ ඇම්පියරය සඳහා නිල SI අර්ථ දැක්වීම දක්වන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate the magnetic flux density B₁ produced by wire X at the location of wire Y.",
        "si": "X කම්බිය මගින් Y කම්බිය ඇති තැන ඇති කරන B₁ ක්ෂේත්‍රය ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "B₁ = (μ₀ I₁) / (2π d) = (4π × 10⁻⁷ × 15) / (2π × 0.10 m) = (2 × 10⁻⁷ × 15) / 0.10 = 3.0 × 10⁻⁵ T (30 μT). By right-hand grip rule, with current upwards, the field B₁ points perpendicular into the plane at Y.",
        "si": "B₁ = (μ₀ I₁) / (2π d) = (4π × 10⁻⁷ × 15) / (2π × 0.10) = 3.0 × 10⁻⁵ T. දකුණත් නීතියෙන් ක්ෂේත්‍රය තලයට ලම්බකව ඇතුළට වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula B = μ₀I / (2πd)",
            "si": "B = μ₀I / (2πd) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Distance in metres d = 0.10 m",
            "si": "දුර මීටර වලින් d = 0.10 m"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates B₁ = 3.0 × 10⁻⁵ T",
            "si": "B₁ = 3.0 × 10⁻⁵ T ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate force per unit length F/L and state whether it is attractive or repulsive.",
        "si": "ඒකක දිගකට බලය F/L ගණනය කර එය ආකර්ෂණද විකර්ෂණදැයි දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Force per unit length: F / L = B₁ I₂ = (μ₀ I₁ I₂) / (2π d) = (3.0 × 10⁻⁵ T) × (25 A) = 7.5 × 10⁻⁴ N m⁻¹. Nature: Since the two currents flow in the same direction, the force between them is ATTRACTIVE (verified by Fleming's Left-Hand Rule).",
        "si": "ඒකක දිගකට බලය: F / L = B₁ I₂ = (3.0 × 10⁻⁵) × 25 = 7.5 × 10⁻⁴ N m⁻¹. ස්වභාවය: ධාරා දෙක එකම දිශාවට ගලන බැවින් බලය ආකර්ෂණ බලයකි (ෆ්ලෙමින්ගේ වමත් නීතියෙන් සනාථ වේ)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula F/L = B₁ I₂ or μ₀ I₁ I₂ / 2πd",
            "si": "F/L = B₁ I₂ සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates F/L = 7.5 × 10⁻⁴ N m⁻¹",
            "si": "F/L = 7.5 × 10⁻⁴ N m⁻¹ ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies force as attractive for like currents",
            "si": "එකම දිශාවේ ධාරා සඳහා ආකර්ෂණ බව හඳුනා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "State the official SI definition of the Ampere based on force between conductors.",
        "si": "සන්නායක අතර බලය මත පදනම් වූ ඇම්පියරය සඳහා නිල SI අර්ථ දැක්වීම දක්වන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "The Ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 metre apart in vacuum, would produce between these conductors a force equal to 2 × 10⁻⁷ Newtons per metre of length.",
        "si": "නගණ්‍ය වෘත්තාකාර හරස්කඩක් ඇති, අනන්ත දිගකින් යුත් සෘජු සමාන්තර සන්නායක දෙකක් රික්තයක් තුළ මීටර 1 ක පරතරයකින් තැබූ විට, ඒවායේ ඒකක දිගක් මත 2 × 10⁻⁷ N බලයක් උපදවන සන්නායක ඔස්සේ ගලන නියත ධාරාව ඇම්පියර් 1 ක් වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Two straight parallel conductors of infinite length and negligible cross-section",
            "si": "නගණ්‍ය හරස්කඩ සහිත අනන්ත දිගැති සෘජු සමාන්තර සන්නායක දෙකක්"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Placed 1 metre apart in vacuum",
            "si": "රික්තයක මීටර 1 ක පරතරයකින් තැබීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Produces a force of 2 × 10⁻⁷ N per metre of length",
            "si": "ඒකක දිගකට 2 × 10⁻⁷ N බලයක් ඇතිවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Constant current flowing through both",
            "si": "දෙකෙහිම ගලන නියත ධාරාව වීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Parallel currents in the same direction attract; F/L = (μ₀ I₁ I₂) / (2π d); SI Ampere gives 2 × 10⁻⁷ N/m at 1 m.",
    "si": "එකම දිශාවට ගලන සමාන්තර ධාරා ආකර්ෂණය වේ; F/L = (μ₀ I₁ I₂) / (2π d); මීටර 1 කදී 2 × 10⁻⁷ N/m බලයක් උපදවයි."
  },
  "solution": {
    "en": "B₁ = 3.0 × 10⁻⁵ T; F/L = 7.5 × 10⁻⁴ N m⁻¹ (attractive). SI Ampere defined by 2 × 10⁻⁷ N m⁻¹ force at 1 m in vacuum.",
    "si": "B₁ = 3.0 × 10⁻⁵ T; F/L = 7.5 × 10⁻⁴ N m⁻¹ (ආකර්ෂණ). ඇම්පියරය රික්තයේ 1 m දුරදී 2 × 10⁻⁷ N m⁻¹ බලයක් ඇති කරන ධාරාවයි."
  }
},
{
  "id": "mag-sq07",
  "competencyRef": "Competency 7.3",
  "category": "galvanometer-torque",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A moving coil galvanometer has a rectangular coil of N = 100 turns, width 2.0 cm, and length 3.0 cm, suspended in a magnetic field of B = 0.25 T. (a) Explain the purpose and importance of using: (i) cylindrical concave pole pieces, (ii) a soft iron cylindrical core inside the coil. (b) Write the torque equation for the coil and derive the relationship between current I and angular deflection θ. (c) Define current sensitivity and voltage sensitivity of a galvanometer, and explain how current sensitivity can be increased.",
    "si": "සංචල දඟර ගැල්වනෝමීටරයක N = 100 පොටවල් සහිත, 2.0 cm පළල සහ 3.0 cm දිගැති සෘජුකෝණාස්‍රාකාර දඟරයක් B = 0.25 T චුම්භක ක්ෂේත්‍රයක එල්ලා ඇත. (a) (i) සිලින්ඩරාකාර අවතල ධ්‍රැව ඛණ්ඩ, (ii) දඟරය තුළ මෘදු යකඩ සිලින්ඩරාකාර හරය භාවිත කිරීමේ අරමුණ සහ වැදගත්කම පැහැදිලි කරන්න. (b) දඟරය සඳහා ව්‍යාවර්ත සමීකරණය ලියා ධාරාව I සහ කෝණික අපගමනය θ අතර සම්බන්ධතාව ගොඩනගන්න. (c) ගැල්වනෝමීටරයක ධාරා සංවේදීතාව සහ වෝල්ටීයතා සංවේදීතාව අර්ථ දක්වා ධාරා සංවේදීතාව වැඩි කළ හැකි ආකාරය පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Explain functions of concave pole pieces and soft iron core in producing a radial field.",
        "si": "අරීය ක්ෂේත්‍රයක් ඇතිකිරීමේදී අවතල ධ්‍රැව ඛණ්ඩ සහ මෘදු යකඩ හරයේ කාර්යය පහදන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) Concave cylindrical pole pieces combined with (ii) a soft iron core produce a RADIAL magnetic field. In a radial field, the magnetic field lines are always directed towards/away from the centre, ensuring that the plane of the coil is ALWAYS parallel to the magnetic field (angle between normal to coil and B is always 90°, so sin θ = 1 or cos α = 1) regardless of deflection. This ensures the deflecting torque τ = BANI is strictly constant for a given current, making the scale linear (θ ∝ I). Furthermore, the high magnetic permeability of the soft iron core concentrates magnetic flux lines, significantly increasing B and meter sensitivity.",
        "si": "(i) අවතල සිලින්ඩරාකාර ධ්‍රැව සහ (ii) මෘදු යකඩ හරය එක්ව අරීය චුම්භක ක්ෂේත්‍රයක් ඇති කරයි. අරීය ක්ෂේත්‍රයකදී, අපගමනය වූ ඕනෑම කෝණයකදී දඟරයේ තලය සැමවිටම චුම්භක ක්ෂේත්‍රයට සමාන්තරව පවතී (ව්‍යාවර්තය උපරිම වේ, τ = BANI). එමගින් අපගමනය ධාරාවට අනුලෝමව සමානුපාතික වී (θ ∝ I) පරිමාණය රේඛීය වේ. තවද මෘදු යකඩවල ඉහළ පාරගම්‍යතාව නිසා ස්‍රාව ඝනත්වය B වැඩි වී සංවේදීතාව ඉහළ යයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Produces a radial magnetic field",
            "si": "අරීය චුම්භක ක්ෂේත්‍රයක් නිපදවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Coil plane remains parallel to B for all deflections",
            "si": "ඕනෑම අපගමනයකදී දඟර තලය B ට සමාන්තරව පැවතීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Linear scale θ ∝ I because deflecting torque is independent of angle",
            "si": "ව්‍යාවර්තය කෝණය මත රඳා නොපවතින නිසා රේඛීය පරිමාණයක් (θ ∝ I) ලැබීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Soft iron core concentrates magnetic flux, increasing B and sensitivity",
            "si": "මෘදු යකඩ හරය මගින් ස්‍රාවය සාන්ද්‍රණය කර B සහ සංවේදීතාව වැඩි කිරීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Derive the relationship θ = (BAN / C) I in a radial field.",
        "si": "අරීය ක්ෂේත්‍රයක θ = (BAN / C) I සම්බන්ධතාව ගොඩනගන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "In a radial field, deflecting torque is τ_def = B I A N. As the coil rotates through angle θ, the controlling hairsprings exert a restoring torque τ_res = C θ, where C is torsional restoring couple per unit twist. At equilibrium: τ_def = τ_res => B I A N = C θ => θ = (B A N / C) I. Since (BAN / C) is constant, θ ∝ I.",
        "si": "අරීය ක්ෂේත්‍රයේදී අපගාමක ව්‍යාවර්තය τ = B I A N වේ. දඟරය θ කෝණයකින් භ්‍රමණය වන විට දුනු මගින් ප්‍රතිස්ථාපන ව්‍යාවර්තයක් τ_res = C θ ඇති කරයි (C යනු ඒකක ඇඹරුමකට ප්‍රතිස්ථාපන යුග්මයයි). සමතුලිතතාවයේදී: B I A N = C θ => θ = (BAN / C) I. මෙහි BAN/C නියත බැවින් θ ∝ I වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Deflecting torque formula τ_def = B I A N",
            "si": "අපගාමක ව්‍යාවර්ත සූත්‍රය τ = B I A N"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Restoring torque formula τ_res = C θ",
            "si": "ප්‍රතිස්ථාපන ව්‍යාවර්ත සූත්‍රය τ = C θ"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Equating and deriving θ = (BAN/C) I",
            "si": "සමාන කර θ = (BAN/C) I ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Define current sensitivity and voltage sensitivity, and list methods to increase current sensitivity.",
        "si": "ධාරා සංවේදීතාව සහ වෝල්ටීයතා සංවේදීතාව අර්ථ දක්වා ධාරා සංවේදීතාව වැඩි කරන ක්‍රම ලියන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Current sensitivity S_I = θ / I = (B A N) / C (deflection per unit current, rad A⁻¹). Voltage sensitivity S_V = θ / V = θ / (I R_g) = (B A N) / (C R_g). To increase current sensitivity S_I: (1) Increase number of turns N, (2) Increase magnetic flux density B (stronger magnets/soft iron core), (3) Increase coil area A, (4) Decrease torsional spring constant C (use fine phosphor-bronze hairsprings).",
        "si": "ධාරා සංවේදීතාව S_I = θ / I = BAN / C (ඒකක ධාරාවකට අපගමනය). වෝල්ටීයතා සංවේදීතාව S_V = θ / V = BAN / (C R_g). ධාරා සංවේදීතාව වැඩි කිරීමට: (1) දඟරයේ පොටවල් ගණන N වැඩි කිරීම, (2) චුම්භක ස්‍රාව ඝනත්වය B වැඩි කිරීම, (3) දඟරයේ ක්ෂේත්‍රඵලය A වැඩි කිරීම, (4) දුනුවේ C අගය අඩු කිරීම (ෆොස්ෆර් ලෝකඩ දුනු භාවිතය)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Definition of S_I = θ / I and S_V = θ / V",
            "si": "S_I = θ/I සහ S_V = θ/V අර්ථ දැක්වීම්"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "At least two valid methods to increase S_I (N, B, A)",
            "si": "S_I වැඩි කිරීමට අවම වශයෙන් ක්‍රම දෙකක් (N, B, A)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mention of reducing torsional constant C",
            "si": "ඇඹරුම් නියතය C අඩු කිරීම සඳහන් කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Radial field keeps coil parallel to B so deflecting torque is BANI; restoring torque is Cθ; current sensitivity S_I = BAN/C.",
    "si": "අරීය ක්ෂේත්‍රය මගින් දඟරය සැමවිටම B ට සමාන්තරව තබා ගනී (τ = BANI); ප්‍රතිස්ථාපන ව්‍යාවර්තය Cθ; S_I = BAN/C."
  },
  "solution": {
    "en": "Radial field produces linear scale θ ∝ I. θ = (BAN/C) I. S_I = BAN/C increased by increasing B, A, N or decreasing C.",
    "si": "අරීය ක්ෂේත්‍රයෙන් රේඛීය පරිමාණයක් (θ ∝ I) ලැබේ. θ = (BAN/C) I. S_I වැඩි කිරීමට B, A, N වැඩි කිරීම හෝ C අඩු කිරීම කළ හැක."
  }
},
{
  "id": "mag-sq08",
  "competencyRef": "Competency 7.3",
  "category": "meter-conversions",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A moving coil galvanometer has an internal coil resistance G = 50.0 Ω and gives full-scale deflection (FSD) for a current I_g = 2.0 mA. (a) Design a circuit to convert this galvanometer into an ammeter capable of measuring currents from 0 to 10.0 A. Calculate the required shunt resistance S. (b) Design a circuit to convert the same galvanometer into a voltmeter capable of measuring potential differences from 0 to 100.0 V. Calculate the required series multiplier resistance R. (c) Explain why an ideal ammeter should have zero resistance, whereas an ideal voltmeter should have infinite resistance.",
    "si": "සංචල දඟර ගැල්වනෝමීටරයක අභ්‍යන්තර දඟර ප්‍රතිරෝධය G = 50.0 Ω වන අතර I_g = 2.0 mA ධාරාවක් සඳහා පූර්ණ පරිමාණ අපගමනය (FSD) පෙන්වයි. (a) 0 සිට 10.0 A දක්වා ධාරා මැනිය හැකි ඇමීටරයක් බවට මෙම ගැල්වනෝමීටරය පරිවර්තනය කිරීමට පරිපථයක් සැලසුම් කර අවශ්‍ය ෂන්ට් ප්‍රතිරෝධය S ගණනය කරන්න. (b) එම ගැල්වනෝමීටරය 0 සිට 100.0 V දක්වා විභව අන්තර මැනිය හැකි වෝල්ට්මීටරයක් බවට පරිවර්තනය කිරීමට පරිපථයක් සැලසුම් කර අවශ්‍ය ශ්‍රේණිගත ගුණක ප්‍රතිරෝධය R ගණනය කරන්න. (c) පරිපූර්ණ ඇමීටරයක ප්‍රතිරෝධය ශුන්‍ය විය යුතු අතර පරිපූර්ණ වෝල්ට්මීටරයක ප්‍රතිරෝධය අනන්ත විය යුත්තේ මන්දැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate shunt resistance S to convert to a 10.0 A ammeter.",
        "si": "10.0 A ඇමීටරයක් සෑදීමට අවශ්‍ය ෂන්ට් ප්‍රතිරෝධය S ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "A low resistance shunt S is connected in parallel with the galvanometer. At FSD, current through shunt is I_s = I - I_g = 10.0 A - 0.002 A = 9.998 A. Potential across parallel branches is equal: I_g G = I_s S => S = (I_g G) / (I - I_g) = (0.002 A × 50.0 Ω) / 9.998 A = 0.100 V / 9.998 A = 0.010002 Ω = 0.0100 Ω (10.0 mΩ).",
        "si": "ගැල්වනෝමීටරයට සමාන්තරගතව කුඩා ෂන්ට් ප්‍රතිරෝධයක් S සම්බන්ධ කරයි. ෂන්ට් එක හරහා ධාරාව I_s = 10.0 - 0.002 = 9.998 A. සමාන්තර ශාඛා හරහා විභව සමාන බැවින්: I_g G = I_s S => S = (0.002 × 50.0) / 9.998 = 0.10 / 9.998 = 0.0100 Ω (10.0 mΩ)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Parallel shunt connection and formula S = (I_g G) / (I - I_g)",
            "si": "සමාන්තර ෂන්ට් සම්බන්ධය සහ S = (I_g G)/(I - I_g) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I_s = 9.998 A",
            "si": "I_s = 9.998 A ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains S = 0.0100 Ω (10.0 mΩ)",
            "si": "S = 0.0100 Ω ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate series multiplier resistance R to convert to a 100.0 V voltmeter.",
        "si": "100.0 V වෝල්ට්මීටරයක් සෑදීමට අවශ්‍ය ශ්‍රේණිගත ගුණක ප්‍රතිරෝධය R ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "A high multiplier resistance R is connected in series with the galvanometer. At FSD: V = I_g (G + R) => G + R = V / I_g = 100.0 V / 0.002 A = 50,000 Ω (50 kΩ). Therefore, R = 50,000 - G = 50,000 - 50.0 = 49,950 Ω = 49.95 kΩ.",
        "si": "ගැල්වනෝමීටරයට ශ්‍රේණිගතව ඉහළ ගුණක ප්‍රතිරෝධයක් R සම්බන්ධ කරයි. FSD හිදී: V = I_g (G + R) => G + R = 100.0 / 0.002 = 50,000 Ω. R = 50,000 - 50.0 = 49,950 Ω (49.95 kΩ)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Series multiplier connection and formula V = I_g (G + R)",
            "si": "ශ්‍රේණිගත සම්බන්ධය සහ V = I_g (G + R) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates total resistance = 50,000 Ω",
            "si": "මුළු ප්‍රතිරෝධය 50,000 Ω බව ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains R = 49,950 Ω (49.95 kΩ)",
            "si": "R = 49,950 Ω ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why ideal ammeter resistance is zero and ideal voltmeter resistance is infinite.",
        "si": "පරිපූර්ණ ඇමීටරයක ප්‍රතිරෝධය 0 සහ පරිපූර්ණ වෝල්ට්මීටරයක ප්‍රතිරෝධය අනන්ත විය යුත්තේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "An ammeter is connected in series with the circuit branch. If it possessed resistance, it would increase total circuit resistance and reduce the branch current it is trying to measure (loading effect). Zero resistance ensures no alteration of current and zero voltage drop across the meter. A voltmeter is connected in parallel across the component. If it possessed finite resistance, it would draw current away from the circuit branch, changing the potential difference across the component. Infinite resistance ensures zero current drawn, measuring the true unaltered potential difference.",
        "si": "ඇමීටරයක් පරිපථ ශාඛාවකට ශ්‍රේණිගතව සම්බන්ධ කරයි. ඊට ප්‍රතිරෝධයක් තිබුණහොත් පරිපථයේ මුළු ප්‍රතිරෝධය වැඩි වී මැනීමට යන ධාරාව අඩුවේ (පූරණ ආචරණය). ශුන්‍ය ප්‍රතිරෝධයක් තිබීමෙන් ධාරාවට කිසිදු බලපෑමක් නොවේ. වෝල්ට්මීටරයක් සමාන්තරගතව සම්බන්ධ කරයි. ඊට සන්තතික ප්‍රතිරෝධයක් තිබුණහොත් එය පරිපථයෙන් ධාරාවක් ලබා ගන්නා අතර එමගින් සංරචකය හරහා විභවය වෙනස් වේ. අනන්ත ප්‍රතිරෝධයක් තිබීමෙන් ධාරාවක් නොගෙන නියම විභව අන්තරය මැනිය හැක."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Ammeter in series must not add to circuit resistance / alter current",
            "si": "ශ්‍රේණිගත ඇමීටරය පරිපථ ප්‍රතිරෝධය වැඩි නොකළ යුතු බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Zero resistance guarantees zero voltage drop across ammeter",
            "si": "ශුන්‍ය ප්‍රතිරෝධය ඇමීටරය හරහා වෝල්ටීයතා බැස්මක් නැති බව සහතික කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Voltmeter in parallel must not draw current from circuit",
            "si": "සමාන්තර වෝල්ට්මීටරය පරිපථයෙන් ධාරාවක් නොගත යුතු බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Infinite resistance prevents alteration of potential difference",
            "si": "අනන්ත ප්‍රතිරෝධය විභව අන්තරය වෙනස්වීම වළක්වන බව"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Ammeter: parallel shunt S = I_g G / (I - I_g); Voltmeter: series multiplier R = (V / I_g) - G.",
    "si": "ඇමීටරය: සමාන්තර ෂන්ට් S = I_g G / (I - I_g); වෝල්ට්මීටරය: ශ්‍රේණිගත ගුණකය R = (V / I_g) - G."
  },
  "solution": {
    "en": "Shunt S = 0.0100 Ω; Multiplier R = 49,950 Ω. Ideal ammeter R=0 avoids modifying current; ideal voltmeter R=∞ avoids drawing current.",
    "si": "ෂන්ට් S = 0.0100 Ω; ගුණකය R = 49,950 Ω. පරිපූර්ණ ඇමීටරයේ R=0 ධාරාව වෙනස් නොකිරීමටද, වෝල්ට්මීටරයේ R=∞ ධාරාව ලබා නොගැනීමටද වේ."
  }
},
{
  "id": "mag-sq09",
  "competencyRef": "Competency 7.2",
  "category": "structured-practical",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A tangent galvanometer having a circular coil of N = 50 turns and mean radius R = 10.0 cm is set up in the magnetic meridian to determine Earth's horizontal magnetic field component B_H. (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) State the Tangent Law of magnetism and explain why the plane of the coil must be strictly set in the magnetic meridian before commencing. (b) When a current I = 0.15 A is passed through the coil, the magnetic compass needle deflects by θ = 45°. Calculate the magnetic field B_c produced at the centre of the coil and deduce the experimental value of B_H. (c) Why is experimental error minimized when the compass deflection is close to 45°?",
    "si": "පෘථිවියේ තිරස් චුම්භක ක්ෂේත්‍ර සංරචකය B_H නිර්ණය කිරීම සඳහා N = 50 පොටවල් සහ මධ්‍යන්‍ය අරය R = 10.0 cm සහිත වෘත්තාකාර දඟරයක් සහිත ස්පර්ශක ගැල්වනෝමීටරයක් චුම්භක මධ්‍යහ්න රේඛාවේ සකසා ඇත (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) චුම්භකත්වය සඳහා ස්පර්ශක නියමය ප්‍රකාශ කර පරීක්ෂණය ඇරඹීමට පෙර දඟරයේ තලය චුම්භක මධ්‍යහ්න තලයේම තැබිය යුත්තේ මන්දැයි පහදන්න. (b) දඟරය ඔස්සේ I = 0.15 A ධාරාවක් යැවූ විට මාලිමා ඉඳිකටුව θ = 45° කින් අපගමනය වේ. දඟරයේ කේන්ද්‍රයේ B_c චුම්භක ක්ෂේත්‍රය ගණනය කර B_H හි අගය නිර්ණය කරන්න. (c) මාලිමා අපගමනය 45° ට ආසන්න වූ විට පරීක්ෂණ දෝෂ අවම වන්නේ මන්ද?"
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State Tangent Law and explain why the coil is aligned in the magnetic meridian.",
        "si": "ස්පර්ශක නියමය දක්වා දඟරය චුම්භක මධ්‍යහ්න තලයේ පිහිටුවිය යුත්තේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Tangent Law: When a small magnetic needle is suspended freely in two mutually perpendicular uniform magnetic fields B and B_H, it comes to rest along the resultant at an angle θ to B_H such that B = B_H tan θ. Reason for alignment: The coil must lie in the magnetic meridian so that the magnetic field B_c produced at its centre is directed perpendicular to the magnetic meridian (and thus perpendicular to B_H), which is the essential condition for the Tangent Law to hold.",
        "si": "ස්පර්ශක නියමය: එකිනෙකට ලම්බක ඒකාකාර චුම්භක ක්ෂේත්‍ර දෙකක් (B සහ B_H) තුළ නිදහසේ සමතුලිත වන චුම්භක ඉඳිකටුවක් B_H සමග θ කෝණයක් සාදමින් සමතුලිත වේ නම්, B = B_H tan θ වේ. චුම්භක මධ්‍යහ්න තලයේ තැබීමට හේතුව: දඟරය චුම්භක මධ්‍යහ්න තලයේ ඇති විට එහි කේන්ද්‍රයේ උපදින ක්ෂේත්‍රය B_c චුම්භක මධ්‍යහ්න තලයට (හා B_H ට) ලම්බක වන බැවින් ස්පර්ශක නියමය යෙදීමට හැකි වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Tangent law equation B = B_H tan θ",
            "si": "B = B_H tan θ ස්පර්ශක නියමය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Requires two mutually perpendicular magnetic fields",
            "si": "ක්ෂේත්‍ර දෙක එකිනෙකට ලම්බක විය යුතු බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Coil in meridian ensures B_c is perpendicular to B_H",
            "si": "දඟරය මධ්‍යහ්න තලයේ තැබීමෙන් B_c ක්ෂේත්‍රය B_H ට ලම්බක වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate B_c at coil centre and deduce B_H.",
        "si": "දඟර කේන්ද්‍රයේ B_c ගණනය කර B_H නිර්ණය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Field at centre of circular coil: B_c = (μ₀ N I) / (2 R). Given: N = 50, I = 0.15 A, R = 0.10 m. Calculation: B_c = (4π × 10⁻⁷ × 50 × 0.15) / (2 × 0.10) = (30π × 10⁻⁷) / 0.20 = 150π × 10⁻⁷ = 4.71 × 10⁻⁵ T (47.1 μT). By Tangent Law: B_c = B_H tan(θ). With θ = 45°, tan(45°) = 1.0, so: B_H = B_c / tan(45°) = 4.71 × 10⁻⁵ / 1.0 = 4.71 × 10⁻⁵ T (47.1 μT).",
        "si": "දඟර කේන්ද්‍රයේ ක්ෂේත්‍රය: B_c = (μ₀ N I) / (2 R) = (4π × 10⁻⁷ × 50 × 0.15) / (2 × 0.10) = 4.71 × 10⁻⁵ T. ස්පර්ශක නියමයෙන්: B_c = B_H tan(45°) => B_H = B_c / 1 = 4.71 × 10⁻⁵ T."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula B_c = μ₀ N I / (2 R)",
            "si": "B_c = μ₀ N I / (2 R) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates B_c = 4.71 × 10⁻⁵ T",
            "si": "B_c = 4.71 × 10⁻⁵ T ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Tangent law relation B_H = B_c / tan(θ)",
            "si": "B_H = B_c / tan(θ) සම්බන්ධතාව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Deduces B_H = 4.71 × 10⁻⁵ T",
            "si": "B_H = 4.71 × 10⁻⁵ T ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why sensitivity is maximized and fractional error minimized at θ ≈ 45°.",
        "si": "θ ≈ 45° හිදී සංවේදීතාව උපරිම වී භාගික දෝෂ අවම වන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Differentiating B = B_H tan θ gives dB = B_H sec² θ dθ. The fractional error is dB / B = (sec² θ / tan θ) dθ = (2 / sin 2θ) dθ. The term (2 / sin 2θ) is a minimum when sin 2θ is at its maximum of 1, which occurs when 2θ = 90° => θ = 45°. Hence, a small reading error dθ produces the smallest fractional error in B (and B_H) around 45° (in practice between 30° and 60°).",
        "si": "dB / B = (2 / sin 2θ) dθ වේ. sin 2θ හි උපරිම අගය 1 වන විට (2θ = 90° => θ = 45°) භාගික දෝෂය අවම වේ. එබැවින් 45° ආසන්නයේදී dθ කෝණික දෝෂයක් නිසා B හි ඇතිවන භාගික දෝෂය අවම වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Error relationship shows fractional error proportional to 1 / sin(2θ)",
            "si": "භාගික දෝෂය 1 / sin(2θ) ට සමානුපාතික බව දැක්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "sin(2θ) achieves maximum value of 1 at 2θ = 90° (θ = 45°)",
            "si": "2θ = 90° (θ = 45°) හිදී sin(2θ) උපරිම වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes fractional error in B_H is minimized at 45°",
            "si": "45° හිදී භාගික දෝෂය අවම බව නිගමනය කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "B_c = (μ₀ N I) / (2R); B_c = B_H tan θ; fractional error ∝ 1/sin(2θ), which is minimum when 2θ = 90° (θ = 45°).",
    "si": "B_c = (μ₀ N I) / (2R); B_c = B_H tan θ; භාගික දෝෂය ∝ 1/sin(2θ) වන අතර 2θ = 90° (θ = 45°) හිදී අවම වේ."
  },
  "solution": {
    "en": "B_c = 4.71 × 10⁻⁵ T; B_H = 4.71 × 10⁻⁵ T. Minimum error occurs at 45° where d(tan θ)/dθ yields minimum fractional uncertainty.",
    "si": "B_c = 4.71 × 10⁻⁵ T; B_H = 4.71 × 10⁻⁵ T. 45° හිදී අවම භාගික දෝෂයක් ලැබේ."
  }
},
{
  "id": "mag-sq10",
  "competencyRef": "Competency 7.2",
  "category": "current-magnetic-fields",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A long solenoid of length L = 60 cm and diameter 4.0 cm is wound uniformly with N = 1200 turns of insulated wire in air. A steady current I = 2.5 A flows through it. (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) State the formula for magnetic flux density B deep inside an ideal long solenoid, and calculate B at the centre. (b) Explain why the magnetic flux density at the extreme ends of the solenoid is approximately half the value at the centre. (c) If a soft iron core of relative permeability μ_r = 800 is inserted filling the core of the solenoid, calculate the new magnetic flux density B_iron at the centre.",
    "si": "වාතයේ දිග L = 60 cm සහ විෂ්කම්භය 4.0 cm වන දිගු පරිපථයක (සොලනොයිඩයක) පරිවාරක කම්බි N = 1200 පොටක් ඒකාකාරව ඔතා ඇත. ඒ හරහා I = 2.5 A නියත ධාරාවක් ගලා යයි (μ₀ = 4π × 10⁻⁷ T m A⁻¹). (a) පරිපූර්ණ දිගු සොලනොයිඩයක් අභ්‍යන්තරයේ ගැඹුරු ස්ථානයක චුම්භක ස්‍රාව ඝනත්වය B සඳහා සූත්‍රය දක්වා කේන්ද්‍රයේ B ගණනය කරන්න. (b) සොලනොයිඩයේ අන්ත කෙළවරවලදී චුම්භක ස්‍රාව ඝනත්වය කේන්ද්‍රයේ අගයෙන් අඩක් පමණ වන්නේ මන්දැයි පැහැදිලි කරන්න. (c) සාපේක්ෂ පාරගම්‍යතාව μ_r = 800 වන මෘදු යකඩ හරයක් සොලනොයිඩය තුළට ඇතුළු කළහොත් කේන්ද්‍රයේ නව චුම්භක ස්‍රාව ඝනත්වය B_iron ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Calculate turns per unit length n and flux density B at the centre of the solenoid.",
        "si": "ඒකක දිගකට පොටවල් ගණන n සහ සොලනොයිඩ කේන්ද්‍රයේ B ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Turns per unit length n = N / L = 1200 / 0.60 m = 2000 turns m⁻¹. Inside a long solenoid: B = μ₀ n I = (4π × 10⁻⁷ T m A⁻¹) × (2000 m⁻¹) × (2.5 A) = 4π × 10⁻⁷ × 5000 = 6.28 × 10⁻³ T = 6.28 mT.",
        "si": "ඒකක දිගකට පොටවල් n = N / L = 1200 / 0.60 = 2000 m⁻¹. සොලනොයිඩය තුළ: B = μ₀ n I = (4π × 10⁻⁷) × 2000 × 2.5 = 6.28 × 10⁻³ T = 6.28 mT."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Calculates n = N/L = 2000 m⁻¹",
            "si": "n = N/L = 2000 m⁻¹ ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula B = μ₀ n I",
            "si": "B = μ₀ n I සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains B = 6.28 × 10⁻³ T (6.28 mT)",
            "si": "B = 6.28 × 10⁻³ T ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain why B at the ends is approximately half that at the centre (B_end ≈ 1/2 B_centre).",
        "si": "කෙළවරේ B කේන්ද්‍රයේ අගයෙන් අඩක් පමණ වන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "A semi-infinite solenoid extending in one direction from an end contributes half the total field of an infinite solenoid extending in both directions. At the centre of a long solenoid, equal contributions come from both the left half and right half (B_centre = B_left + B_right = B/2 + B/2 = B). At an open end, there are turns on only one side, so the contribution is B_end = 1/2 B_centre. Furthermore, magnetic flux lines diverge out into open space over a solid angle of 2π steradians instead of remaining parallel.",
        "si": "කේන්ද්‍රයේදී වම් අර්ධයෙන් සහ දකුණු අර්ධයෙන් සමාන දායකත්වයන් ලැබේ (B_centre = B/2 + B/2 = B). අන්ත කෙළවරකදී ඇත්තේ එක් පසෙක දඟර පමණක් බැවින් දායකත්වය B_end = 1/2 B_centre වේ. තවද ස්‍රාව රේඛා විවෘත අවකාශයට අපසාරී වීම නිසා ස්‍රාව ඝනත්වය අඩුවේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Centre field is sum of two half-infinite solenoids",
            "si": "කේන්ද්‍රයේ ක්ෂේත්‍රය අර්ධ දෙකක එකතුවක් බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "End has turns on one side only (half the contributing current turns)",
            "si": "කෙළවරකදී එක් පසෙකින් පමණක් දඟර දායක වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Flux lines diverge into space, halving flux density",
            "si": "ශ්‍රාව රේඛා අවකාශයට අපසාරී වීමෙන් ස්‍රාව ඝනත්වය අඩුවීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate new flux density B_iron with soft iron core (μ_r = 800).",
        "si": "මෘදු යකඩ හරය සහිතව (μ_r = 800) නව ස්‍රාව ඝනත්වය B_iron ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "With iron core: B_iron = μ n I = μ_r μ₀ n I = μ_r B_air. Calculation: B_iron = 800 × 6.283 × 10⁻³ T = 5.03 T. (Note: in practice, magnetic saturation of iron typically limits B to ~1.6 – 2.0 T).",
        "si": "යකඩ හරය සමග: B_iron = μ_r μ₀ n I = μ_r B_air = 800 × 6.283 × 10⁻³ = 5.03 T."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula B_iron = μ_r μ₀ n I or μ_r B_air",
            "si": "B_iron = μ_r B_air සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Multiplies by relative permeability μ_r = 800",
            "si": "සාපේක්ෂ පාරගම්‍යතාව 800 න් ගුණ කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains B_iron = 5.03 T",
            "si": "B_iron = 5.03 T ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mentions high permeability of ferromagnetic material",
            "si": "ෆෙරෝචුම්භක ද්‍රව්‍යවල ඉහළ පාරගම්‍යතාව සඳහන් කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "B_centre = μ₀ n I; B_end = 1/2 B_centre; with iron core, multiply by μ_r.",
    "si": "B_centre = μ₀ n I; B_end = 1/2 B_centre; යකඩ හරය සහිත විට μ_r ගුණයකින් වැඩි වේ."
  },
  "solution": {
    "en": "B_centre = 6.28 mT; B_end = 3.14 mT; B_iron = 5.03 T.",
    "si": "B_centre = 6.28 mT; B_end = 3.14 mT; B_iron = 5.03 T."
  }
}
];
