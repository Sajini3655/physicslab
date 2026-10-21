import { WavesQuestion } from './types';

export const WAVES_QUESTION_BANK: WavesQuestion[] = [
  // ==========================================================================
  // COMPETENCY 3.1: SIMPLE HARMONIC MOTION (SHM)
  // ==========================================================================
  {
    id: 'waves-3.1-01',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A particle executes simple harmonic motion with amplitude A. At what displacement from the equilibrium mean position is its kinetic energy equal to its potential energy?',
      si: 'A විස්තාරයෙන් සරල අනුවර්තී චලිතයේ යෙදෙන අංශුවක චාලක ශක්තිය එහි විභව ශක්තියට සමාන වන විස්ථාපනය මධ්‍යස්ථ පිහිටුමේ සිට කොපමණ වේද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'x = A / 2', si: 'x = A / 2' } },
      { id: 'opt-b', text: { en: 'x = A / √2', si: 'x = A / √2' } },
      { id: 'opt-c', text: { en: 'x = A / 4', si: 'x = A / 4' } },
      { id: 'opt-d', text: { en: 'x = A / 3', si: 'x = A / 3' } },
    ],
    correctOptionId: 'opt-b',
    hint: {
      en: 'Recall that KE = 1/2 m ω² (A² - x²) and PE = 1/2 m ω² x². Equate them.',
      si: 'KE = 1/2 m ω² (A² - x²) සහ PE = 1/2 m ω² x² සලකා සමාන කරන්න.',
    },
    solution: {
      en: 'When KE = PE: (A² - x²) = x²  ⟹  2x² = A²  ⟹  x = A / √2 ≈ 0.707 A.',
      si: 'KE = PE වූ විට: (A² - x²) = x²  ⟹  2x² = A²  ⟹  x = A / √2.',
    },
  },
  {
    id: 'waves-3.1-02',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A simple pendulum of length 0.993 m executes small oscillations. Taking g = 9.80 m/s², calculate the periodic time T of the pendulum.',
      si: 'දිග 0.993 m වූ සරල පැද්දුමක් කුඩා කෝණික විස්ථාපන සහිතව දෝලනය වේ. g = 9.80 m/s² ලෙස ගෙන පැද්දුමේ ආවර්ත කාලය T ගණනය කරන්න.',
    },
    expected: 2.0,
    tolerance: 0.05,
    unit: { en: 's', si: 's' },
    hint: {
      en: 'Use the simple pendulum period formula: T = 2π √(L / g).',
      si: 'සරල පැද්දුමේ ආවර්ත කාල සූත්‍රය: T = 2π √(L / g) භාවිතා කරන්න.',
    },
    solution: {
      en: 'T = 2π √(0.993 / 9.80) = 2 · 3.1416 · √(0.1013) = 2 · 3.1416 · 0.3183 = 2.00 s (Seconds pendulum).',
      si: 'T = 2π √(0.993 / 9.80) = 2.00 s (තත්පර පැද්දුම).',
    },
  },
  {
    id: 'waves-3.1-03',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A body of mass 0.50 kg is attached to a light helical spring of force constant k = 200 N/m. Calculate the frequency of oscillation in Hz.',
      si: 'ස්කන්ධය 0.50 kg වූ වස්තුවක් k = 200 N/m දුනු නියතයක් සහිත සැහැල්ලු හෙලික්සීය දුන්නකට සම්බන්ධ කර ඇත. දෝලන සංඛ්‍යාතය Hz වලින් ගණනය කරන්න.',
    },
    expected: 3.18,
    tolerance: 0.05,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Angular frequency ω = √(k / m) and f = ω / (2π) = (1 / 2π) √(k / m).',
      si: 'කෝණික සංඛ්‍යාතය ω = √(k / m) සහ f = (1 / 2π) √(k / m) වේ.',
    },
    solution: {
      en: 'ω = √(200 / 0.50) = √400 = 20 rad/s. Frequency f = 20 / (2π) = 3.183 Hz.',
      si: 'ω = √(200 / 0.5) = 20 rad/s. f = 20 / (2π) = 3.18 Hz.',
    },
  },
  {
    id: 'waves-3.1-04',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following graphs correctly represents the variation of restoring acceleration a with displacement x in Simple Harmonic Motion?',
      si: 'සරල අනුවර්තී චලිතයකදී ප්‍රත්‍යාවර්තක ත්වරණය a සහ විස්ථාපනය x අතර විචලනය නිවැරදිව දක්වන්නේ කුමන ප්‍රස්තාරයද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'A straight line passing through the origin with negative slope (a = -ω² x)', si: 'සෘණ බෑවුමක් සහිත මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් (a = -ω² x)' } },
      { id: 'opt-b', text: { en: 'A parabola passing through the origin', si: 'මූල ලක්ෂ්‍යය හරහා යන පරාවලයක්' } },
      { id: 'opt-c', text: { en: 'A circle centered at the origin', si: 'මූල ලක්ෂ්‍යය කේන්ද්‍ර කරගත් වෘත්තයක්' } },
      { id: 'opt-d', text: { en: 'A horizontal straight line independent of x', si: 'x මත රඳා නොපවතින තිරස් සරල රේඛාවක්' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The defining equation of SHM is a = -ω² x.',
      si: 'සරල අනුවර්තී චලිතයේ අර්ථ දැක්වීම a = -ω² x වේ.',
    },
    solution: {
      en: 'In SHM, acceleration is directly proportional to displacement and directed towards the mean position: a = -ω² x. This is a straight line through the origin with negative gradient -ω².',
      si: 'a = -ω² x වන බැවින් එය -ω² සෘණ බෑවුමක් සහිත මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි.',
    },
  },
  {
    id: 'waves-3.1-05',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A particle performs SHM of amplitude 0.10 m and period 1.57 s (take ω = 4.0 rad/s). Calculate its maximum speed in m/s.',
      si: 'අංශුවක් 0.10 m විස්තාරයකින් සහ 1.57 s ආවර්ත කාලයකින් (ω = 4.0 rad/s) සරල අනුවර්තී චලිතයේ යෙදේ. එහි උපරිම ප්‍රවේගය m/s වලින් ගණනය කරන්න.',
    },
    expected: 0.40,
    tolerance: 0.02,
    unit: { en: 'm/s', si: 'm/s' },
    hint: {
      en: 'Maximum speed occurs at the mean position: v_max = ω · A.',
      si: 'මධ්‍යස්ථ ලක්ෂ්‍යයේදී උපරිම ප්‍රවේගය v_max = ω · A වේ.',
    },
    solution: {
      en: 'v_max = ω · A = 4.0 rad/s · 0.10 m = 0.40 m/s.',
      si: 'v_max = ω · A = 4.0 · 0.10 = 0.40 m/s.',
    },
  },
  {
    id: 'waves-3.1-06',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When a simple pendulum is taken from sea level to the top of a high mountain, its periodic time:',
      si: 'සරල පැද්දුමක් මුහුදු මට්ටමේ සිට උස් කන්දක් මුදුනට ගෙන ගිය විට එහි ආවර්ත කාලය:',
    },
    options: [
      { id: 'opt-a', text: { en: 'Increases, because g decreases with altitude', si: 'වැඩි වේ, උස වැඩිවත්ම g අඩුවන බැවිනි' } },
      { id: 'opt-b', text: { en: 'Decreases, because g decreases with altitude', si: 'අඩු වේ, උස වැඩිවත්ම g අඩුවන බැවිනි' } },
      { id: 'opt-c', text: { en: 'Remains unchanged', si: 'වෙනස් නොවී පවතී' } },
      { id: 'opt-d', text: { en: 'Becomes zero', si: 'ශුන්‍ය වේ' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'T = 2π √(L / g). Consider how acceleration due to gravity changes with altitude.',
      si: 'T = 2π √(L / g). උස සමග ගුරුත්වජ ත්වරණය g අඩුවන ආකාරය සලකන්න.',
    },
    solution: {
      en: 'Since T ∝ 1/√g and g decreases with altitude, the denominator decreases, making T larger (the pendulum runs slow).',
      si: 'T ∝ 1/√g වන අතර උස වැඩිවන විට g අඩු වන බැවින් T වැඩි වේ (පැද්දුම ප්‍රමාද වේ).',
    },
  },
  {
    id: 'waves-3.1-07',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A 0.20 kg mass oscillates with SHM of amplitude 0.05 m and frequency 5.0 Hz. Calculate its total mechanical energy in Joules.',
      si: '0.20 kg ස්කන්ධයක් 0.05 m විස්තාරයකින් සහ 5.0 Hz සංඛ්‍යාතයකින් SHM හි යෙදේ. එහි මුළු යාන්ත්‍රික ශක්තිය ජූල් (J) වලින් ගණනය කරන්න.',
    },
    expected: 0.247,
    tolerance: 0.02,
    unit: { en: 'J', si: 'J' },
    hint: {
      en: 'Total energy E = 1/2 m ω² A² where ω = 2π f = 10π ≈ 31.4 rad/s.',
      si: 'මුළු ශක්තිය E = 1/2 m ω² A². ω = 2π f = 31.4 rad/s.',
    },
    solution: {
      en: 'ω = 2π · 5.0 = 31.416 rad/s. E = 0.5 · 0.20 · (31.416)² · (0.05)² = 0.1 · 986.96 · 0.0025 = 0.2467 J ≈ 0.247 J.',
      si: 'E = 1/2 · 0.20 · (10π)² · (0.05)² = 0.247 J.',
    },
  },
  {
    id: 'waves-3.1-08',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In SHM with amplitude A = 0.10 m, at what displacement x (in m) is the particle velocity exactly half of its maximum velocity v_max?',
      si: 'A = 0.10 m විස්තාරයෙන් යුතු SHM එකකදී අංශුවේ ප්‍රවේගය එහි උපරිම ප්‍රවේගයෙන් අඩක් (v_max / 2) වන විස්ථාපනය x (m වලින්) ගණනය කරන්න.',
    },
    expected: 0.0866,
    tolerance: 0.005,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'v = ω √(A² - x²). If v = v_max / 2 = ωA / 2, then √(A² - x²) = A / 2.',
      si: 'v = ω √(A² - x²). v = ωA/2 නම් A² - x² = A² / 4 ⟹ x² = 3/4 A².',
    },
    solution: {
      en: 'x² = 3/4 A²  ⟹  x = (√3 / 2) A = 0.8660 · 0.10 m = 0.0866 m.',
      si: 'x = (√3 / 2) A = 0.866 · 0.10 = 0.0866 m.',
    },
  },
  {
    id: 'waves-3.1-09',
    competencyRef: 'Competency 3.1',
    category: 'shm-oscillations',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In simple harmonic motion, the phase difference between velocity and acceleration is:',
      si: 'සරල අනුවර්තී චලිතයකදී ප්‍රවේගය සහ ත්වරණය අතර කලා වෙනස කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'π / 2 radians (90°)', si: 'π / 2 රේඩියන (90°)' } },
      { id: 'opt-b', text: { en: 'π radians (180°)', si: 'π රේඩියන (180°)' } },
      { id: 'opt-c', text: { en: '0 radians (in phase)', si: '0 රේඩියන (එකම කලාවේ)' } },
      { id: 'opt-d', text: { en: '2π radians (360°)', si: '2π රේඩියන (360°)' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Displacement is x = A sin(ωt), velocity is v = Aω cos(ωt), acceleration is a = -Aω² sin(ωt).',
      si: 'විස්ථාපනය sin(ωt) නම්, ප්‍රවේගය cos(ωt) (π/2 ඉදිරියෙන්) වන අතර ත්වරණය -sin(ωt) (තවත් π/2 ඉදිරියෙන්) වේ.',
    },
    solution: {
      en: 'Acceleration leads velocity by π/2 radians (90°), and leads displacement by π radians (180°).',
      si: 'ත්වරණය ප්‍රවේගයට වඩා π/2 කින් (90° කින්) කලාවෙන් ඉදිරියෙන් පවතී.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.2: WAVE PROPERTIES & BEATS
  // ==========================================================================
  {
    id: 'waves-3.2-01',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following properties is exhibited exclusively by transverse waves and NEVER by longitudinal sound waves?',
      si: 'තීර්යක් තරංග මගින් පමණක් පෙන්වන, අන්වායාම ධ්වනි තරංග මගින් කිසිසේත්ම නොපෙන්වන ගුණාංගය කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'Polarization', si: 'ධ්‍රැවීභවනය' } },
      { id: 'opt-b', text: { en: 'Diffraction', si: 'විවර්තනය' } },
      { id: 'opt-c', text: { en: 'Interference', si: 'ව්‍යතිකරණය' } },
      { id: 'opt-d', text: { en: 'Refraction', si: 'වර්තනය' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Polarization requires vibrations perpendicular to the propagation axis.',
      si: 'ධ්‍රැවීභවනය සිදුවීමට කම්පන ප්‍රචාරණ දිශාවට ලම්බක විය යුතුය.',
    },
    solution: {
      en: 'Polarization restricts transverse vibrations to a single plane. Longitudinal waves oscillate parallel to propagation and cannot be polarized.',
      si: 'ධ්‍රැවීභවනය සිදුවන්නේ තීර්යක් තරංගවල පමණි; අන්වායාම තරංග ධ්‍රැවීභවනය කළ නොහැක.',
    },
  },
  {
    id: 'waves-3.2-02',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A progressive wave of frequency 500 Hz travels at 350 m/s. Calculate the phase difference in radians between two points on the wave separated by 0.14 m along the direction of propagation.',
      si: '500 Hz සංඛ්‍යාතයක් සහ 350 m/s ප්‍රවේගයක් ඇති ප්‍රගමන තරංගයක ප්‍රචාරණ දිශාව ඔස්සේ 0.14 m පරතරයකින් පිහිටි ලක්ෂ්‍ය දෙකක් අතර කලා වෙනස රේඩියන වලින් ගණනය කරන්න.',
    },
    expected: 1.26,
    tolerance: 0.05,
    unit: { en: 'rad', si: 'rad' },
    hint: {
      en: 'Wavelength λ = v / f. Phase difference Δϕ = (2π / λ) · Δx.',
      si: 'තරංග ආයාමය λ = v / f. කලා වෙනස Δϕ = (2π / λ) · Δx.',
    },
    solution: {
      en: 'λ = 350 / 500 = 0.70 m. Δϕ = (2π / 0.70) · 0.14 = 2π · 0.20 = 0.40π ≈ 1.257 rad.',
      si: 'λ = 350 / 500 = 0.70 m. Δϕ = (2π / 0.70) · 0.14 = 0.40π = 1.26 rad.',
    },
  },
  {
    id: 'waves-3.2-03',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two tuning forks of frequencies 440 Hz and 444 Hz are sounded together. How many beats are heard per second?',
      si: '440 Hz සහ 444 Hz සංඛ්‍යාත සහිත සුසර දෙබල දෙකක් එකවර නාද කරනු ලැබේ. තත්පරයකට ඇසෙන ස්පන්ද ගණන (Beats) කීයද?',
    },
    expected: 4.0,
    tolerance: 0.1,
    unit: { en: 'beats/s', si: 'beats/s' },
    hint: {
      en: 'Beat frequency is the absolute frequency difference: f_beat = |f₁ - f₂|.',
      si: 'ස්පන්ද සංඛ්‍යාතය යනු සංඛ්‍යාතවල නිරපේක්ෂ අන්තරයයි: f_beat = |f₁ - f₂|.',
    },
    solution: {
      en: 'f_beat = |444 - 440| = 4 beats per second.',
      si: 'f_beat = |444 - 440| = 4 beats/s.',
    },
  },
  {
    id: 'waves-3.2-04',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A tuning fork of unknown frequency f produces 5 beats per second with a 256 Hz fork. When a small amount of wax is attached to the prongs of the unknown fork, the beat frequency decreases to 2 beats per second. What was the original frequency f?',
      si: 'නොදන්නා සංඛ්‍යාතය f වූ සුසර දෙබලක් 256 Hz දෙබලක් සමග තත්පරයට ස්පන්ද 5 ක් ඇති කරයි. නොදන්නා දෙබලේ අග්‍රවල ඉටි ස්වල්පයක් තැවරූ විට ස්පන්ද සංඛ්‍යාතය 2 දක්වා අඩු වේ. නොදන්නා දෙබලේ මුල් සංඛ්‍යාතය f කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: '261 Hz', si: '261 Hz' } },
      { id: 'opt-b', text: { en: '251 Hz', si: '251 Hz' } },
      { id: 'opt-c', text: { en: '258 Hz', si: '258 Hz' } },
      { id: 'opt-d', text: { en: '263 Hz', si: '263 Hz' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Waxing increases mass, which always decreases the fork frequency. If f - 256 = 5 (f = 261), lowering f decreases the gap toward 256.',
      si: 'ඉටි තැවරූ විට දෙබලේ ස්කන්ධය වැඩි වී සංඛ්‍යාතය අඩු වේ. මුල් අගය 261 නම් එය අඩුවීමෙන් 256 සමග පරතරය 5 සිට 2 දක්වා අඩු වේ.',
    },
    solution: {
      en: 'Possible values: 256 + 5 = 261 Hz or 256 - 5 = 251 Hz. Adding wax lowers frequency: if f was 261, it drops towards 258, decreasing beat frequency to 2. If it was 251, dropping would increase the beat count. Hence f = 261 Hz.',
      si: 'මුල් අගයන්: 261 Hz හෝ 251 Hz විය හැක. ඉටි දැමූ විට සංඛ්‍යාතය අඩු වේ. 261 අඩුවන විට 256 සමග වෙනස අඩු වේ. එබැවින් නිවැරදි අගය 261 Hz වේ.',
    },
  },
  {
    id: 'waves-3.2-05',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A harmonic wave is described by y = 0.04 sin(100π t - 2π x) where x and y are in metres and t is in seconds. Calculate the wave propagation velocity in m/s.',
      si: 'y = 0.04 sin(100π t - 2π x) සමීකරණයෙන් ප්‍රකාශ වන තරංගයක (x, y මීටර් වලින් සහ t තත්පර වලින්) ප්‍රචාරණ ප්‍රවේගය m/s වලින් ගණනය කරන්න.',
    },
    expected: 50.0,
    tolerance: 0.5,
    unit: { en: 'm/s', si: 'm/s' },
    hint: {
      en: 'Compare with standard wave form y = A sin(ωt - kx). Wave speed v = ω / k.',
      si: 'y = A sin(ωt - kx) සමග සසඳන්න. තරංග ප්‍රවේගය v = ω / k වේ.',
    },
    solution: {
      en: 'ω = 100π rad/s, k = 2π m⁻¹. v = ω / k = (100π) / (2π) = 50.0 m/s.',
      si: 'v = ω / k = 100π / 2π = 50 m/s.',
    },
  },
  {
    id: 'waves-3.2-06',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'When a wave passes from a rarer medium into a denser medium and refracts:',
      si: 'තරංගයක් විරල මාධ්‍යයක සිට ඝන මාධ්‍යයකට ඇතුළු වී වර්තනය වන විට:',
    },
    options: [
      { id: 'opt-a', text: { en: 'Frequency remains constant, while wavelength and velocity decrease', si: 'සංඛ්‍යාතය නියතව පවතින අතර තරංග ආයාමය සහ ප්‍රවේගය අඩු වේ' } },
      { id: 'opt-b', text: { en: 'Wavelength remains constant, while frequency increases', si: 'තරංග ආයාමය නියතව පවතින අතර සංඛ්‍යාතය වැඩි වේ' } },
      { id: 'opt-c', text: { en: 'Velocity remains constant, while frequency decreases', si: 'ප්‍රවේගය නියතව පවතින අතර සංඛ්‍යාතය අඩු වේ' } },
      { id: 'opt-d', text: { en: 'Frequency, wavelength, and velocity all decrease', si: 'සංඛ්‍යාතය, තරංග ආයාමය සහ ප්‍රවේගය යන සියල්ල අඩු වේ' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Frequency is determined solely by the vibrating source and never changes across media.',
      si: 'සංඛ්‍යාතය තීරණය වන්නේ ප්‍රභවය මගින් පමණි; එය මාධ්‍යයෙන් මාධ්‍යයට වෙනස් නොවේ.',
    },
    solution: {
      en: 'Frequency f remains unchanged because it depends on the driving source. In the denser medium, speed v decreases, so wavelength λ = v / f decreases proportionally.',
      si: 'f නියතයි. ඝන මාධ්‍යයේදී ප්‍රවේගය v අඩුවන නිසා λ = v / f ද අඩු වේ.',
    },
  },
  {
    id: 'waves-3.2-07',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'Two coherent sound sources emit waves in phase. At a detection point, the path difference between the two waves is 0.85 m. If the speed of sound is 340 m/s, what is the lowest non-zero sound frequency in Hz at which completely destructive interference occurs?',
      si: 'එකම කලාවේ ඇති සුසංයුක්ත ධ්වනි ප්‍රභව දෙකකින් නිකුත් වන තරංග ලක්ෂ්‍යයකට ළඟා වන විට මාර්ග වෙනස 0.85 m වේ. ධ්වනි ප්‍රවේගය 340 m/s නම් සම්පූර්ණ විනාශකාරී ව්‍යතිකරණය සිදුවන අවම ශුන්‍ය නොවන සංඛ්‍යාතය Hz වලින් ගණනය කරන්න.',
    },
    expected: 200.0,
    tolerance: 2.0,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Destructive interference occurs when path difference Δx = (n + 1/2) λ. For lowest frequency, n = 0, so Δx = λ / 2.',
      si: 'විනාශකාරී ව්‍යතිකරණය සඳහා අවම මාර්ග වෙනස Δx = λ / 2 වේ. λ = 2 · Δx.',
    },
    solution: {
      en: 'Δx = λ / 2  ⟹  λ = 2 · 0.85 = 1.70 m. f = v / λ = 340 / 1.70 = 200 Hz.',
      si: 'λ = 2 · 0.85 = 1.70 m. f = 340 / 1.70 = 200 Hz.',
    },
  },
  {
    id: 'waves-3.2-08',
    competencyRef: 'Competency 3.2',
    category: 'wave-properties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Two waves y₁ = 4 sin(ωt) and y₂ = 3 cos(ωt) superpose at a point. What is the amplitude of the resultant wave?',
      si: 'y₁ = 4 sin(ωt) සහ y₂ = 3 cos(ωt) තරංග දෙකක් ලක්ෂ්‍යයකදී අධිස්ථාපනය වේ. සම්ප්‍රයුක්ත තරංගයේ විස්තාරය කොපමණද?',
    },
    options: [
      { id: 'opt-a', text: { en: '5 units', si: 'ඒකක 5' } },
      { id: 'opt-b', text: { en: '7 units', si: 'ඒකක 7' } },
      { id: 'opt-c', text: { en: '1 unit', si: 'ඒකක 1' } },
      { id: 'opt-d', text: { en: '12 units', si: 'ඒකක 12' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Notice that cos(ωt) = sin(ωt + π/2), so the phase difference is 90°. Resultant A = √(A₁² + A₂²).',
      si: 'sin සහ cos අතර කලා වෙනස 90° කි. A = √(4² + 3²).',
    },
    solution: {
      en: 'Because sin and cos are out of phase by 90°, the vector phasor addition gives A = √(4² + 3²) = √25 = 5 units.',
      si: 'කලා වෙනස 90° බැවින් A = √(4² + 3²) = 5 ඒකක.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.3: SOUND WAVES, INTENSITY & DOPPLER EFFECT
  // ==========================================================================
  {
    id: 'waves-3.3-01',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'The speed of sound in air at 0°C is 331 m/s. Calculate the speed of sound at 27°C (take T in Kelvin = 27 + 273 = 300 K).',
      si: '0°C හිදී වාතයේ ධ්වනි ප්‍රවේගය 331 m/s වේ. 27°C (300 K) හිදී වාතයේ ධ්වනි ප්‍රවේගය m/s වලින් ගණනය කරන්න.',
    },
    expected: 347.0,
    tolerance: 2.0,
    unit: { en: 'm/s', si: 'm/s' },
    hint: {
      en: 'Speed of sound in an ideal gas satisfies v ∝ √T: v = v₀ · √(T / 273.15).',
      si: 'වායුවක ධ්වනි ප්‍රවේගය v ∝ √T වේ: v = v₀ · √(300 / 273.15).',
    },
    solution: {
      en: 'v = 331 · √(300 / 273.15) = 331 · √1.0983 = 331 · 1.048 = 346.9 m/s ≈ 347 m/s.',
      si: 'v = 331 · √(300 / 273.15) = 347 m/s.',
    },
  },
  {
    id: 'waves-3.3-02',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A sound wave has an intensity of 1.0 × 10⁻⁴ W/m². Taking the reference threshold of hearing I₀ = 1.0 × 10⁻¹² W/m², calculate the sound intensity level in decibels (dB).',
      si: 'ධ්වනි තරංගයක තීව්‍රතාව 1.0 × 10⁻⁴ W/m² වේ. ශ්‍රව්‍යතා දේහලී තීව්‍රතාව I₀ = 1.0 × 10⁻¹² W/m² ලෙස ගෙන ධ්වනි තීව්‍රතා මට්ටම ඩෙසිබල් (dB) වලින් ගණනය කරන්න.',
    },
    expected: 80.0,
    tolerance: 0.5,
    unit: { en: 'dB', si: 'dB' },
    hint: {
      en: 'Sound intensity level β = 10 · log₁₀(I / I₀).',
      si: 'ධ්වනි තීව්‍රතා මට්ටම β = 10 · log₁₀(I / I₀).',
    },
    solution: {
      en: 'β = 10 · log₁₀(10⁻⁴ / 10⁻¹²) = 10 · log₁₀(10⁸) = 10 · 8 = 80 dB.',
      si: 'β = 10 · log₁₀(10⁸) = 80 dB.',
    },
  },
  {
    id: 'waves-3.3-03',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A train siren emits sound at frequency 600 Hz while approaching a stationary observer at a speed of 30 m/s. Taking the speed of sound in air as 330 m/s, calculate the frequency heard by the observer.',
      si: 'දුම්රිය නළාවක් 600 Hz සංඛ්‍යාතයකින් නාද කරමින් නිශ්චල නිරීක්ෂකයෙකු දෙසට 30 m/s වේගයෙන් ළඟා වේ. වාතයේ ධ්වනි ප්‍රවේගය 330 m/s ලෙස ගෙන නිරීක්ෂකයාට ඇසෙන සංඛ්‍යාතය Hz වලින් ගණනය කරන්න.',
    },
    expected: 660.0,
    tolerance: 2.0,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Source moving towards stationary observer: f\' = f · [v / (v - v_s)].',
      si: 'ප්‍රභවය නිශ්චල නිරීක්ෂකයා දෙසට චලනය වන විට: f\' = f · [v / (v - v_s)].',
    },
    solution: {
      en: 'f\' = 600 · [330 / (330 - 30)] = 600 · (330 / 300) = 600 · 1.10 = 660 Hz.',
      si: 'f\' = 600 · [330 / (330 - 30)] = 660 Hz.',
    },
  },
  {
    id: 'waves-3.3-04',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'An observer moves away from a stationary siren at speed u while the siren emits sound of wavelength λ and frequency f. What are the speed of sound relative to the observer and the observed wavelength?',
      si: 'සංඛ්‍යාතය f සහ තරංග ආයාමය λ වූ ශබ්දයක් නිකුත් කරන නිශ්චල නලා ප්‍රභවයකින් නිරීක්ෂකයෙකු u වේගයෙන් ඈතට යයි. නිරීක්ෂකයාට සාපේක්ෂව ධ්වනි ප්‍රවේගය සහ නිරීක්ෂිත තරංග ආයාමය පිළිවෙළින් කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'Relative speed = (v - u), Wavelength = λ (unchanged)', si: 'සාපේක්ෂ ප්‍රවේගය = (v - u), තරංග ආයාමය = λ (වෙනස් නොවේ)' } },
      { id: 'opt-b', text: { en: 'Relative speed = v, Wavelength = λ (v - u) / v', si: 'සාපේක්ෂ ප්‍රවේගය = v, තරංග ආයාමය = λ (v - u) / v' } },
      { id: 'opt-c', text: { en: 'Relative speed = (v + u), Wavelength = λ', si: 'සාපේක්ෂ ප්‍රවේගය = (v + u), තරංග ආයාමය = λ' } },
      { id: 'opt-d', text: { en: 'Relative speed = (v - u), Wavelength = λ (v / (v - u))', si: 'සාපේක්ෂ ප්‍රවේගය = (v - u), තරංග ආයාමය = λ (v / (v - u))' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Wavelength in the medium only changes when the source is moving. Motion of the observer changes only the relative speed of intercepting wave fronts.',
      si: 'මාධ්‍යයේ තරංග ආයාමය වෙනස් වන්නේ ප්‍රභවය චලනය වන විට පමණි. නිරීක්ෂකයාගේ චලනය බලපාන්නේ සාපේක්ෂ ප්‍රවේගයට පමණි.',
    },
    solution: {
      en: 'Because the sound source is stationary in the medium, the wavelength λ = v / f remains unchanged. The observer moving away intercepts wave crests at relative speed (v - u).',
      si: 'ප්‍රභවය නිශ්චල බැවින් මාධ්‍යයේ λ වෙනස් නොවේ. නිරීක්ෂකයා ඈතට යන බැවින් සාපේක්ෂ ප්‍රවේගය (v - u) වේ.',
    },
  },
  {
    id: 'waves-3.3-05',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'If the acoustic power of a speaker increases such that the sound intensity level increases by 20 dB, by what factor has the sound intensity increased?',
      si: 'ශබ්ද විකාශන යන්ත්‍රයක ධ්වනි තීව්‍රතා මට්ටම 20 dB කින් වැඩි වුවහොත්, එහි ධ්වනි තීව්‍රතාව වැඩි වී ඇති සාධකය (ගුණය) කීයද?',
    },
    expected: 100.0,
    tolerance: 0.5,
    unit: { en: '', si: '' },
    hint: {
      en: 'Δβ = 10 · log₁₀(I₂ / I₁). If Δβ = 20, then log₁₀(I₂ / I₁) = 2.',
      si: 'Δβ = 10 log₁₀(I₂ / I₁). 20 = 10 log₁₀(I₂ / I₁) ⟹ I₂ / I₁ = 10².',
    },
    solution: {
      en: 'Δβ = 20 dB  ⟹  log₁₀(I₂ / I₁) = 20 / 10 = 2  ⟹  I₂ / I₁ = 10² = 100.',
      si: 'I₂ / I₁ = 10² = 100 ගුණයකි.',
    },
  },
  {
    id: 'waves-3.3-06',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'The human ear is most sensitive to sound frequencies approximately in the range of:',
      si: 'මිනිස් කන වඩාත්ම සංවේදී වන ධ්වනි සංඛ්‍යාත පරාසය දළ වශයෙන්:',
    },
    options: [
      { id: 'opt-a', text: { en: '2,000 Hz to 4,000 Hz', si: '2,000 Hz සිට 4,000 Hz දක්වා' } },
      { id: 'opt-b', text: { en: '20 Hz to 100 Hz', si: '20 Hz සිට 100 Hz දක්වා' } },
      { id: 'opt-c', text: { en: '15,000 Hz to 20,000 Hz', si: '15,000 Hz සිට 20,000 Hz දක්වා' } },
      { id: 'opt-d', text: { en: 'Above 25,000 Hz', si: '25,000 Hz ට ඉහළින්' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Acoustic resonance of the human auditory canal occurs near 3 kHz.',
      si: 'කන් කුහරයේ අනුනාදය 3 kHz ආසන්නයේ සිදුවේ.',
    },
    solution: {
      en: 'Due to resonance in the external ear auditory canal, human hearing has its lowest threshold of audibility (highest sensitivity) between 2 kHz and 4 kHz.',
      si: 'බාහිර කන් කුහරයේ අනුනාදය නිසා 2 kHz - 4 kHz පරාසයේදී සංවේදීතාව උපරිම වේ.',
    },
  },
  {
    id: 'waves-3.3-07',
    competencyRef: 'Competency 3.3',
    category: 'sound-doppler',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A stationary whistle emits a sound of 1000 Hz. An observer drives directly towards the whistle at 20 m/s and then continues past it moving away at 20 m/s. Taking the speed of sound as 340 m/s, calculate the change in frequency (Δf in Hz) perceived by the observer between approaching and receding.',
      si: '1000 Hz සංඛ්‍යාතයක් ඇති නිශ්චල විසිල් එකක් දෙසට මෝටර් රථයකින් 20 m/s වේගයෙන් ළඟා වී එය පසුකර 20 m/s වේගයෙන් ඈතට යයි. ධ්වනි ප්‍රවේගය 340 m/s නම් ළඟාවීමේදී සහ ඈත්වීමේදී නිරීක්ෂකයාට ඇසෙන සංඛ්‍යාත අතර වෙනස Δf (Hz) ගණනය කරන්න.',
    },
    expected: 117.6,
    tolerance: 1.5,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Approaching: f_app = f(v + u)/v. Receding: f_rec = f(v - u)/v. Δf = 2 · f · u / v.',
      si: 'ළඟාවීමේදී: f(v + u)/v. ඈත්වීමේදී: f(v - u)/v. වෙනස Δf = 2 f u / v.',
    },
    solution: {
      en: 'Δf = 2 · 1000 · (20 / 340) = 40000 / 340 = 117.65 Hz ≈ 117.6 Hz.',
      si: 'Δf = 2 · 1000 · 20 / 340 = 117.6 Hz.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.4: STATIONARY WAVES, STRINGS & PIPES
  // ==========================================================================
  {
    id: 'waves-3.4-01',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-strings',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A stretched steel wire of length 0.50 m and mass per unit length 2.0 × 10⁻³ kg/m is under a tension of 80 N. Calculate the fundamental frequency of transverse vibration in Hz.',
      si: 'දිග 0.50 m සහ ඒකක දිගක ස්කන්ධය 2.0 × 10⁻³ kg/m වූ වානේ තන්තුවක් 80 N ආතතියක් යටතේ පවතී. එහි මූලික තීර්යක් කම්පන සංඛ්‍යාතය Hz වලින් ගණනය කරන්න.',
    },
    expected: 200.0,
    tolerance: 2.0,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Fundamental frequency of a stretched string: f = (1 / 2L) · √(T / μ).',
      si: 'ආතත තන්තුවේ මූලික සංඛ්‍යාතය: f = (1 / 2L) · √(T / μ).',
    },
    solution: {
      en: 'Wave speed v = √(T / μ) = √(80 / 0.002) = √40000 = 200 m/s. Fundamental f = v / (2L) = 200 / (2 · 0.50) = 200 Hz.',
      si: 'v = √(80 / 0.002) = 200 m/s. f = 200 / (2 · 0.50) = 200 Hz.',
    },
  },
  {
    id: 'waves-3.4-02',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-pipes',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'An organ pipe open at both ends has length 0.85 m. Taking the speed of sound as 340 m/s and neglecting end corrections, calculate the fundamental frequency in Hz.',
      si: 'දෙකෙළවර විවෘත නළයක දිග 0.85 m වේ. ධ්වනි ප්‍රවේගය 340 m/s ලෙස ගෙන අන්ත ශෝධනය නොසලකා එහි මූලික සංඛ්‍යාතය Hz වලින් ගණනය කරන්න.',
    },
    expected: 200.0,
    tolerance: 2.0,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Open pipe fundamental has antinodes at both ends: λ = 2L, f = v / (2L).',
      si: 'දෙකෙළවර විවෘත නළයක මූලික සංඛ්‍යාතය: f = v / (2L).',
    },
    solution: {
      en: 'f = v / (2L) = 340 / (2 · 0.85) = 340 / 1.70 = 200 Hz.',
      si: 'f = 340 / (2 · 0.85) = 200 Hz.',
    },
  },
  {
    id: 'waves-3.4-03',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-pipes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A closed organ pipe (closed at one end, open at the other) produces:',
      si: 'එක් කෙළවරක් වැසුණු නළයක (Closed pipe) ඇතිවිය හැක්කේ:',
    },
    options: [
      { id: 'opt-a', text: { en: 'Only odd harmonics (f, 3f, 5f, ...)', si: 'ඔත්තේ උපරිටු පමණි (f, 3f, 5f, ...)' } },
      { id: 'opt-b', text: { en: 'All integer harmonics (f, 2f, 3f, ...)', si: 'සියලු නිඛිල උපරිටු (f, 2f, 3f, ...)' } },
      { id: 'opt-c', text: { en: 'Only even harmonics (2f, 4f, 6f, ...)', si: 'ඉරට්ටේ උපරිටු පමණි (2f, 4f, 6f, ...)' } },
      { id: 'opt-d', text: { en: 'No harmonics at all', si: 'උපරිටු කිසිවක් ඇති නොවේ' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The closed end must be a displacement node and the open end an antinode: L = (2n - 1) λ / 4.',
      si: 'වැසුණු කෙළවර නිශ්පන්දයක් සහ විවෘත කෙළවර ප්‍රස්පන්දයක් විය යුතුය: L = (2n - 1) λ / 4.',
    },
    solution: {
      en: 'A closed pipe supports resonant modes with odd quarter wavelengths, giving frequencies f, 3f, 5f, ... only odd harmonics.',
      si: 'එක් කෙළවරක් වැසුණු නළයක හටගන්නේ ඔත්තේ උපරිටු (f, 3f, 5f, ...) පමණි.',
    },
  },
  {
    id: 'waves-3.4-04',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-strings',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A sonometer wire vibrates with fundamental frequency 300 Hz. If the tension is increased by a factor of 4 while keeping the length constant, what is the new fundamental frequency in Hz?',
      si: 'තන්තුමාන තන්තුවක මූලික සංඛ්‍යාතය 300 Hz වේ. දිග වෙනස් නොකර ආතතිය 4 ගුණයකින් වැඩි කළහොත් නව මූලික සංඛ්‍යාතය Hz වලින් කොපමණද?',
    },
    expected: 600.0,
    tolerance: 2.0,
    unit: { en: 'Hz', si: 'Hz' },
    hint: {
      en: 'Law of tension: f ∝ √T. If T increases by 4, f increases by √4 = 2.',
      si: 'ආතතිය පිළිබඳ නියමය: f ∝ √T. T 4 ගුණයකින් වැඩි කළ විට f √4 = 2 ගුණයකින් වැඩි වේ.',
    },
    solution: {
      en: 'f₂ = f₁ · √(T₂ / T₁) = 300 · √4 = 300 · 2 = 600 Hz.',
      si: 'f₂ = 300 · √4 = 600 Hz.',
    },
  },
  {
    id: 'waves-3.4-05',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-pipes',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A tube of internal diameter 4.0 cm resonates in its fundamental mode with a tuning fork of 340 Hz. Taking the end correction e = 0.3 · d and speed of sound 340 m/s, calculate the required resonant water column length l₁ in cm.',
      si: 'අභ්‍යන්තර විෂ්කම්භය 4.0 cm වූ නළයක් 340 Hz සුසර දෙබලක් සමග මූලික ප්‍රකාරයෙන් අනුනාද වේ. අන්ත ශෝධනය e = 0.3 · d සහ ධ්වනි ප්‍රවේගය 340 m/s ලෙස ගෙන අවශ්‍ය අනුනාද දිග l₁ (cm) වලින් ගණනය කරන්න.',
    },
    expected: 23.8,
    tolerance: 0.2,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'λ = v / f = 340 / 340 = 1.0 m = 100 cm. Fundamental: l₁ + e = λ / 4. e = 0.3 · 4.0 = 1.2 cm.',
      si: 'λ = 100 cm. l₁ + e = 25 cm. e = 1.2 cm.',
    },
    solution: {
      en: 'λ / 4 = 100 / 4 = 25.0 cm. e = 0.3 · 4.0 = 1.2 cm. l₁ = 25.0 - 1.2 = 23.8 cm.',
      si: 'l₁ = 25.0 - 1.2 = 23.8 cm.',
    },
  },
  {
    id: 'waves-3.4-06',
    competencyRef: 'Competency 3.4',
    category: 'stationary-waves-strings',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In a standing wave on a string, which of the following statements about two particles situated between two adjacent nodes is TRUE?',
      si: 'තන්තුවක ස්ථාවර තරංගයක යාබද නිශ්පන්ද දෙකක් අතර පිහිටි අංශු දෙකක් සම්බන්ධයෙන් පහත ප්‍රකාශනවලින් සත්‍ය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'They oscillate in phase with different amplitudes', si: 'ඒවා විවිධ විස්තාරවලින් එකම කලාවේ දෝලනය වේ' } },
      { id: 'opt-b', text: { en: 'They oscillate in antiphase (180° out of phase)', si: 'ඒවා ප්‍රතිවිරුද්ධ කලාවල (180° කලා වෙනසකින්) දෝලනය වේ' } },
      { id: 'opt-c', text: { en: 'They oscillate with identical amplitudes and phases', si: 'ඒවා එකම විස්තාරයකින් හා එකම කලාවකින් දෝලනය වේ' } },
      { id: 'opt-d', text: { en: 'They have a continuous phase lag along the string', si: 'ඒවා තන්තුව දිගේ අඛණ්ඩ කලා ප්‍රමාදයකින් යුක්ත වේ' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'All points in a single loop reach their maximum displacements simultaneously (in phase), but amplitude varies as 2A sin(kx).',
      si: 'එක් පුඩුවක් තුළ සියලු අංශු එකවර උපරිම විස්ථාපනයට ළඟා වේ (එකම කලාව), නමුත් විස්තාරය පිහිටුම අනුව වෙනස් වේ.',
    },
    solution: {
      en: 'Between two consecutive nodes (within one loop), all particles vibrate in phase, but their amplitudes vary smoothly from zero at the nodes to 2A at the central antinode.',
      si: 'යාබද නිශ්පන්ද දෙකක් අතර සියලුම අංශු එකම කලාවේ දෝලනය වන නමුත් විස්තාරයන් වෙනස් වේ.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.5: GEOMETRICAL OPTICS & PRISMS
  // ==========================================================================
  {
    id: 'waves-3.5-01',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Light passes from water (refractive index n₁ = 4/3 ≈ 1.333) into air (n₂ = 1.0). Calculate the critical angle for total internal reflection in degrees.',
      si: 'වතුරේ සිට (වර්තනාංකය n₁ = 4/3 ≈ 1.333) වාතයට (n₂ = 1.0) ආලෝකය ගමන් කරයි. පූර්ණ අභ්‍යන්තර පරාවර්තනය සඳහා අවධි කෝණය අංශක වලින් ගණනය කරන්න.',
    },
    expected: 48.6,
    tolerance: 0.5,
    unit: { en: '°', si: '°' },
    hint: {
      en: 'Critical angle condition: sin(c) = n_air / n_water = 1 / (4/3) = 0.75.',
      si: 'අවධි කෝණ සූත්‍රය: sin(c) = 1 / (4/3) = 3/4 = 0.75.',
    },
    solution: {
      en: 'sin(c) = 1 / 1.333 = 0.75  ⟹  c = arcsin(0.75) = 48.59° ≈ 48.6°.',
      si: 'sin(c) = 3/4  ⟹  c = 48.6°.',
    },
  },
  {
    id: 'waves-3.5-02',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An equilateral glass prism has apex angle A = 60.0°. When measured on a spectrometer, its angle of minimum deviation is Dm = 37.2°. Calculate the refractive index of the glass.',
      si: 'සමපාද වීදුරු ප්‍රිස්මයක ප්‍රිස්ම කෝණය A = 60.0° වේ. වර්ණාවලීමානයෙන් මනින ලද අවම අපගමන කෝණය Dm = 37.2° වේ. වීදුරුවේ වර්තනාංකය n ගණනය කරන්න.',
    },
    expected: 1.50,
    tolerance: 0.02,
    unit: { en: '', si: '' },
    hint: {
      en: 'Prism formula: n = sin((A + Dm) / 2) / sin(A / 2). Here (A + Dm)/2 = 97.2/2 = 48.6° and A/2 = 30°.',
      si: 'ප්‍රිස්ම සූත්‍රය: n = sin((A + Dm) / 2) / sin(A / 2). (60 + 37.2)/2 = 48.6°.',
    },
    solution: {
      en: 'n = sin(48.6°) / sin(30°) = 0.7501 / 0.5000 = 1.5002 ≈ 1.50.',
      si: 'n = sin(48.6°) / sin(30°) = 0.7501 / 0.5 = 1.50.',
    },
  },
  {
    id: 'waves-3.5-03',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'When a ray of light undergoes minimum deviation inside an equilateral prism, which of the following statements is strictly TRUE?',
      si: 'සමපාද ප්‍රිස්මයක් තුළින් ආලෝක කිරණයක් අවම අපගමනයට ලක්වන විට පහත ප්‍රකාශනවලින් සත්‍ය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'The refracted ray inside the prism travels parallel to the base of the prism', si: 'ප්‍රිස්මය තුළ වර්තිත කිරණය ප්‍රිස්මයේ පාදයට සමාන්තරව ගමන් කරයි' } },
      { id: 'opt-b', text: { en: 'The angle of incidence is 90°', si: 'පතන කෝණය 90° කි' } },
      { id: 'opt-c', text: { en: 'The angle of emergence is zero', si: 'නිර්ගමන කෝණය ශුන්‍ය වේ' } },
      { id: 'opt-d', text: { en: 'Total internal reflection occurs at the first face', si: 'පළමු මුහුණතේදී පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවේ' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'At minimum deviation, the ray passes symmetrically through the equilateral prism.',
      si: 'අවම අපගමනයේදී කිරණය ප්‍රිස්මය තුළින් සමමිතිකව ගමන් කරයි.',
    },
    solution: {
      en: 'At minimum deviation, i₁ = i₂ and r₁ = r₂ = A/2. By symmetry in an isosceles or equilateral prism, the refracted ray is parallel to the base.',
      si: 'අවම අපගමනයේදී සමමිතිය නිසා ප්‍රිස්මය තුළ කිරණය පාදයට සමාන්තර වේ.',
    },
  },
  {
    id: 'waves-3.5-04',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A swimming pool filled with water (n = 1.33) appears to have a depth of 2.25 m when viewed from directly above. Calculate the true physical depth of the pool in metres.',
      si: 'වතුර පිරවූ (n = 1.33) පිහිනුම් තටාකයක් ඉහළ සිට සිරස්ව බලන විට එහි ඝනකම (දෘශ්‍ය ගැඹුර) 2.25 m ලෙස පෙනේ. තටාකයේ සත්‍ය ගැඹුර මීටර වලින් ගණනය කරන්න.',
    },
    expected: 3.0,
    tolerance: 0.1,
    unit: { en: 'm', si: 'm' },
    hint: {
      en: 'Refractive index n = Real Depth / Apparent Depth.',
      si: 'වර්තනාංකය n = සත්‍ය ගැඹුර / දෘශ්‍ය ගැඹුර.',
    },
    solution: {
      en: 'Real Depth = n · Apparent Depth = 1.333 · 2.25 = 3.00 m.',
      si: 'සත්‍ය ගැඹුර = 1.333 · 2.25 = 3.0 m.',
    },
  },
  {
    id: 'waves-3.5-05',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A step-index optical fibre has a core of refractive index n_core = 1.50 and a cladding of n_clad = 1.40. Calculate the numerical aperture (NA) of the fibre.',
      si: 'පියවර-දර්ශක ප්‍රකාශ තන්තුවක හරයේ (Core) වර්තනාංකය 1.50 වන අතර ආවරණයේ (Cladding) 1.40 වේ. ප්‍රකාශ තන්තුවේ සංඛ්‍යාත්මක විවරය (Numerical Aperture - NA) ගණනය කරන්න.',
    },
    expected: 0.539,
    tolerance: 0.02,
    unit: { en: '', si: '' },
    hint: {
      en: 'Numerical aperture NA = √(n_core² - n_clad²).',
      si: 'NA = √(n_core² - n_clad²).',
    },
    solution: {
      en: 'NA = √(1.50² - 1.40²) = √(2.25 - 1.96) = √0.290 = 0.5385 ≈ 0.539.',
      si: 'NA = √(2.25 - 1.96) = √0.29 = 0.539.',
    },
  },
  {
    id: 'waves-3.5-06',
    competencyRef: 'Competency 3.5',
    category: 'geometrical-optics-prisms',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which optical phenomenon is the foundational operational principle of fiber optic signal transmission?',
      si: 'ප්‍රකාශ තන්තු මගින් සංඥා සම්ප්‍රේෂණය කිරීමේ මූලික භෞතික ක්‍රියාකාරී මූලධර්මය වන්නේ:',
    },
    options: [
      { id: 'opt-a', text: { en: 'Total internal reflection', si: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය' } },
      { id: 'opt-b', text: { en: 'Optical polarization', si: 'ප්‍රකාශ ධ්‍රැවීභවනය' } },
      { id: 'opt-c', text: { en: 'Diffraction', si: 'විවර්තනය' } },
      { id: 'opt-d', text: { en: 'Dispersion', si: 'විසිරණය' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Light stays guided within the higher-index core by reflecting off the cladding boundary.',
      si: 'හරය තුළ ආලෝකය රඳවා ගන්නේ ආවරණ අතුරුමුහුණතේ පූර්ණ අභ්‍යන්තර පරාවර්තනය මගිනි.',
    },
    solution: {
      en: 'Optical fibres rely on successive total internal reflections at the core-cladding interface (where n_core > n_cladding) to guide light over long distances with minimal loss.',
      si: 'ප්‍රකාශ තන්තු ක්‍රියා කරන්නේ පූර්ණ අභ්‍යන්තර පරාවර්තනය (TIR) මතය.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.6: THIN LENSES & OPTICAL INSTRUMENTS
  // ==========================================================================
  {
    id: 'waves-3.6-01',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a displacement method experiment with a convex lens, the distance between the illuminated object and screen is D = 90.0 cm. Two sharp images are formed when the lens is displaced by d = 30.0 cm. Calculate the focal length of the lens in cm.',
      si: 'උත්තල කාචයක් සහිත විස්ථාපන ක්‍රම පරීක්ෂණයකදී, ආලෝකමත් වස්තුව සහ තිරය අතර දුර D = 90.0 cm වේ. කාචය d = 30.0 cm කින් විස්ථාපනය කළ විට තියුණු ප්‍රතිබිම්බ දෙකක් ලැබේ. කාචයේ නාභීය දුර f (cm) වලින් ගණනය කරන්න.',
    },
    expected: 20.0,
    tolerance: 0.2,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'Use the displacement method formula: f = (D² - d²) / (4D).',
      si: 'විස්ථාපන ක්‍රම සූත්‍රය: f = (D² - d²) / (4D) භාවිතා කරන්න.',
    },
    solution: {
      en: 'f = (90² - 30²) / (4 · 90) = (8100 - 900) / 360 = 7200 / 360 = 20.0 cm.',
      si: 'f = (8100 - 900) / 360 = 7200 / 360 = 20.0 cm.',
    },
  },
  {
    id: 'waves-3.6-02',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'An astronomical telescope in normal adjustment (image at infinity) has an objective of focal length 100 cm and an eyepiece of focal length 5.0 cm. Calculate its angular magnifying power.',
      si: 'සාමාන්‍ය සීරුමාරුවේ (ප්‍රතිබිම්බය අනන්තයේ) පවතින තාරකා විද්‍යා දුරේක්ෂයක අවනෙතේ නාභීය දුර 100 cm වන අතර උපනෙතේ නාභීය දුර 5.0 cm වේ. එහි කෝණික විශාලනය ගණනය කරන්න.',
    },
    expected: 20.0,
    tolerance: 0.2,
    unit: { en: '', si: '' },
    hint: {
      en: 'For an astronomical telescope in normal adjustment, magnification M = f_objective / f_eyepiece.',
      si: 'සාමාන්‍ය සීරුමාරුවේදී තාරකා දුරේක්ෂයේ විශාලනය M = f_o / f_e වේ.',
    },
    solution: {
      en: 'M = f_o / f_e = 100 / 5.0 = 20.',
      si: 'M = f_o / f_e = 100 / 5.0 = 20.',
    },
  },
  {
    id: 'waves-3.6-03',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A thin convex lens of focal length +20 cm is placed in contact with a thin concave lens of focal length -30 cm. What is the power of the combination in dioptres (D)?',
      si: '+20 cm නාභීය දුරක් ඇති උත්තල කාචයක් සහ -30 cm නාභීය දුරක් ඇති අවතල කාචයක් එකිනෙක ස්පර්ශව තබා ඇත. සංයෝජනයේ බලය ඩයොප්ටර් (D) වලින් කොපමණද?',
    },
    options: [
      { id: 'opt-a', text: { en: '+1.67 D', si: '+1.67 D' } },
      { id: 'opt-b', text: { en: '+5.00 D', si: '+5.00 D' } },
      { id: 'opt-c', text: { en: '-1.67 D', si: '-1.67 D' } },
      { id: 'opt-d', text: { en: '+0.017 D', si: '+0.017 D' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Power P = 1 / f(m). P_total = P₁ + P₂ = (1 / 0.20) + (1 / -0.30) = 5.0 - 3.33 D.',
      si: 'බලය P = 1 / f(m). P = P₁ + P₂ = (1 / 0.20) + (-1 / 0.30) = 5 - 3.33 D.',
    },
    solution: {
      en: 'P₁ = 1 / 0.20 = +5.0 D. P₂ = 1 / -0.30 = -3.33 D. Total power P = +5.0 - 3.33 = +1.67 D (converging).',
      si: 'P = 5.0 - 3.33 = +1.67 D (අභිසාරී).',
    },
  },
  {
    id: 'waves-3.6-04',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A simple magnifying glass has focal length 5.0 cm. A person with near point D = 25 cm views an object with the image formed at the near point. Calculate the angular magnification (M = 1 + D/f).',
      si: 'සරල විශාලක කාචයක නාභීය දුර 5.0 cm වේ. සවිස්තර දෘෂ්ටියේ අවම දුර D = 25 cm ඇති පුද්ගලයෙකු ප්‍රතිබිම්බය D හිදී සාදමින් බලයි. එහි කෝණික විශාලනය ගණනය කරන්න.',
    },
    expected: 6.0,
    tolerance: 0.1,
    unit: { en: '', si: '' },
    hint: {
      en: 'Image at near point: M = 1 + (D / f) = 1 + (25 / 5).',
      si: 'ප්‍රතිබිම්බය D හිදී සාදන විට විශාලනය: M = 1 + D/f.',
    },
    solution: {
      en: 'M = 1 + (25 / 5) = 1 + 5 = 6.0.',
      si: 'M = 1 + 5 = 6.0.',
    },
  },
  {
    id: 'waves-3.6-05',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In a compound microscope, the focal length of the objective is 1.0 cm and the eyepiece is 5.0 cm. An object is placed 1.2 cm in front of the objective. Taking near point D = 25 cm (eyepiece adjusted for image at near point), calculate the total magnifying power of the microscope.',
      si: 'සංයුක්ත අන්වීක්ෂයක අවනෙතේ නාභීය දුර 1.0 cm සහ උපනෙතේ නාභීය දුර 5.0 cm වේ. අවනෙත ඉදිරියෙන් 1.2 cm දුරින් වස්තුවක් තබා ඇත. සවිස්තර දෘෂ්ටි දුර D = 25 cm නම් (උපනෙත D සඳහා සකසා ඇත), අන්වීක්ෂයේ මුළු විශාලන බලය ගණනය කරන්න.',
    },
    expected: 30.0,
    tolerance: 0.5,
    unit: { en: '', si: '' },
    hint: {
      en: 'For objective: 1/v - 1/u = 1/f  ⟹  1/v - 1/(-1.2) = 1/1.0  ⟹  v = 6.0 cm. Linear mag m_obj = v/u = 6/1.2 = 5. M_eye = 1 + D/f_e = 1 + 25/5 = 6. Total M = m_obj · M_eye.',
      si: 'අවනෙත සඳහා v = 6.0 cm, m_o = 6.0/1.2 = 5. උපනෙත සඳහා M_e = 1 + 25/5 = 6. මුළු M = 5 · 6 = 30.',
    },
    solution: {
      en: 'm_obj = 5.0. M_eye = 6.0. Total magnification M = 5.0 · 6.0 = 30.0.',
      si: 'මුළු විශාලනය M = 5 · 6 = 30.',
    },
  },
  {
    id: 'waves-3.6-06',
    competencyRef: 'Competency 3.6',
    category: 'thin-lenses-instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'The chromatic aberration in a lens is caused by:',
      si: 'කාචයක වර්ණ විපථනය (Chromatic aberration) ඇතිවීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'Dispersion: the refractive index of the glass varies with the wavelength of light', si: 'විසිරණය: වීදුරුවේ වර්තනාංකය ආලෝකයේ තරංග ආයාමය අනුව වෙනස් වීම' } },
      { id: 'opt-b', text: { en: 'The spherical curvature of the lens faces', si: 'කාච මුහුණත්වල ගෝලීය හැඩය' } },
      { id: 'opt-c', text: { en: 'Reflection of light from the lens surfaces', si: 'කාච පෘෂ්ඨවලින් ආලෝකය පරාවර්තනය වීම' } },
      { id: 'opt-d', text: { en: 'Absorption of ultraviolet light by the glass', si: 'වීදුරුව මගින් පාරජම්බුල ආලෝකය අවශෝෂණය කර ගැනීම' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Blue light bends more than red light because n_blue > n_red.',
      si: 'n_blue > n_red බැවින් නිල් ආලෝකය රතු ආලෝකයට වඩා වැඩි නැමීමකට ලක්වේ.',
    },
    solution: {
      en: 'Chromatic aberration arises because glass has different refractive indices for different wavelengths (dispersion), causing blue light to focus closer to the lens than red light.',
      si: 'විසිරණය නිසා විවිධ තරංග ආයාම සඳහා වර්තනාංකය වෙනස් වී විවිධ නාභි ඇතිවීම වර්ණ විපථනයයි.',
    },
  },

  // ==========================================================================
  // COMPETENCY 3.7: PHYSICAL OPTICS (INTERFERENCE, DIFFRACTION & POLARIZATION)
  // ==========================================================================
  {
    id: 'waves-3.7-01',
    competencyRef: 'Competency 3.7',
    category: 'wave-optics-interference',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a Young’s double-slit experiment, the slits are separated by d = 0.50 mm and the screen is placed at D = 1.50 m. If light of wavelength λ = 600 nm is used, calculate the fringe width β in millimetres (mm).',
      si: 'යංගේ ද්වි-කඩතු පරීක්ෂණයේදී කඩතු පරතරය d = 0.50 mm වන අතර තිරය D = 1.50 m දුරින් තබා ඇත. ආලෝකයේ තරංග ආයාමය λ = 600 nm නම්, ප්‍රවාර පළල β මිලිමීටර (mm) වලින් ගණනය කරන්න.',
    },
    expected: 1.80,
    tolerance: 0.05,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'Young\'s fringe width formula: β = (λ · D) / d. Ensure all values are in SI metres first.',
      si: 'යංගේ ප්‍රවාර පළල සූත්‍රය: β = (λ · D) / d.',
    },
    solution: {
      en: 'β = (600 × 10⁻⁹ · 1.50) / (0.50 × 10⁻³) = 9.0 × 10⁻⁷ / 5.0 × 10⁻⁴ = 1.80 × 10⁻³ m = 1.80 mm.',
      si: 'β = (600 × 10⁻⁹ · 1.50) / (0.50 × 10⁻³) = 1.80 mm.',
    },
  },
  {
    id: 'waves-3.7-02',
    competencyRef: 'Competency 3.7',
    category: 'diffraction-polarization',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A plane diffraction grating has 500 lines per mm. Light of wavelength 500 nm falls normally on it. Calculate the angle of diffraction θ for the first-order principal maximum (n = 1) in degrees.',
      si: 'තල විවර්තන දැලිසක මිලිමීටරයකට රේඛා 500 ක් ඇත. 500 nm තරංග ආයාමයක් ඇති ආලෝකය ඒ මත ලම්බව පතිත වේ. පළමු ගණයේ ප්‍රධාන උපරිමය (n = 1) සඳහා විවර්තන කෝණය θ අංශක වලින් ගණනය කරන්න.',
    },
    expected: 14.5,
    tolerance: 0.3,
    unit: { en: '°', si: '°' },
    hint: {
      en: 'Grating spacing d = 1 / (500 × 10³ lines/m) = 2.0 × 10⁻⁶ m. Use d · sin θ = n · λ.',
      si: 'දැලිස් නියතය d = 1 / (500000 m⁻¹) = 2.0 × 10⁻⁶ m. d · sin θ = n · λ භාවිතා කරන්න.',
    },
    solution: {
      en: 'sin θ = (1 · 500 × 10⁻⁹) / (2.0 × 10⁻⁶) = 0.250. θ = arcsin(0.250) = 14.48° ≈ 14.5°.',
      si: 'sin θ = (500 × 10⁻⁹) / (2.0 × 10⁻⁶) = 0.250. θ = 14.5°.',
    },
  },
  {
    id: 'waves-3.7-03',
    competencyRef: 'Competency 3.7',
    category: 'diffraction-polarization',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'According to Brewster’s Law, when unpolarized light is reflected from a glass surface at the polarizing angle ip, what is the angle between the reflected ray and the refracted ray?',
      si: 'බෲස්ටර් නියමයට අනුව, ධ්‍රැවණ කෝණයේදී (ip) වීදුරු පෘෂ්ඨයකින් පරාවර්තනය වන කිරණය සහ වර්තිත කිරණය අතර කෝණය කොපමණද?',
    },
    options: [
      { id: 'opt-a', text: { en: '90° (perpendicular)', si: '90° (ලම්බකයි)' } },
      { id: 'opt-b', text: { en: '180° (collinear)', si: '180° (ඒක රේඛීයයි)' } },
      { id: 'opt-c', text: { en: '45°', si: '45°' } },
      { id: 'opt-d', text: { en: '0°', si: '0°' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'At Brewster\'s angle, tan(i_p) = n. Using Snell\'s law sin(i_p)/sin(r) = n gives sin(r) = cos(i_p), so i_p + r = 90°.',
      si: 'බෲස්ටර් කෝණයේදී ip + r = 90° වන බැවින් පරාවර්තිත සහ වර්තිත කිරණ අතර කෝණය 180° - 90° = 90° වේ.',
    },
    solution: {
      en: 'At the polarizing angle, i_p + r = 90°. Since angle of reflection equals angle of incidence, the angle between reflected ray and refracted ray is exactly 180° - (i_p + r) = 90°.',
      si: 'පරාවර්තිත කිරණය සහ වර්තිත කිරණය එකිනෙකට ලම්බක (90°) වේ.',
    },
  },
  {
    id: 'waves-3.7-04',
    competencyRef: 'Competency 3.7',
    category: 'diffraction-polarization',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A glass plate has a refractive index n = 1.732 (approx √3). Calculate its Brewster polarizing angle i_p in degrees.',
      si: 'වීදුරු තහඩුවක වර්තනාංකය n = 1.732 (√3) වේ. එහි බෲස්ටර් ධ්‍රැවණ කෝණය i_p අංශක වලින් ගණනය කරන්න.',
    },
    expected: 60.0,
    tolerance: 0.5,
    unit: { en: '°', si: '°' },
    hint: {
      en: 'Brewster\'s law: tan(i_p) = n.',
      si: 'බෲස්ටර් නියමය: tan(i_p) = n.',
    },
    solution: {
      en: 'tan(i_p) = 1.732 = √3  ⟹  i_p = arctan(√3) = 60.0°.',
      si: 'tan(i_p) = √3  ⟹  i_p = 60°.',
    },
  },
  {
    id: 'waves-3.7-05',
    competencyRef: 'Competency 3.7',
    category: 'wave-optics-interference',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In Young’s experiment, if the entire apparatus is immersed in water of refractive index 4/3, by what factor does the fringe width change? (Give the ratio β_water / β_air to 2 decimal places).',
      si: 'යංගේ උපකරණය සම්පූර්ණයෙන්ම වර්තනාංකය 4/3 වූ ජලයේ ගිල්වූ විට ප්‍රවාර පළල වෙනස් වන අනුපාතය (β_ජලය / β_වාතය) දශම 2 කට ගණනය කරන්න.',
    },
    expected: 0.75,
    tolerance: 0.02,
    unit: { en: '', si: '' },
    hint: {
      en: 'In medium of index n, λ_med = λ / n. Since β ∝ λ, β_med = β / n = β / (4/3) = 0.75 β.',
      si: 'ජලයේදී λ_w = λ / (4/3) වේ. එබැවින් β_w / β = 3/4 = 0.75.',
    },
    solution: {
      en: 'β_water / β_air = λ_water / λ_air = 1 / n = 1 / 1.333 = 0.75.',
      si: 'β_ජලය / β_වාතය = 1 / (4/3) = 0.75.',
    },
  },
  {
    id: 'waves-3.7-06',
    competencyRef: 'Competency 3.7',
    category: 'diffraction-polarization',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A transmission grating has 400 lines/mm. For light of wavelength 600 nm at normal incidence, what is the maximum order number (n_max) of diffraction that can physically be observed?',
      si: 'තල විවර්තන දැලිසක 400 lines/mm ඇත. ලම්බ පතනය වන 600 nm ආලෝකය සඳහා භෞතිකව නිරීක්ෂණය කළ හැකි උපරිම විවර්තන ගණනය (n_max) කොපමණද?',
    },
    expected: 4.0,
    tolerance: 0.1,
    unit: { en: '', si: '' },
    hint: {
      en: 'Condition: sin θ ≤ 1. n ≤ d / λ. d = 1 / 400000 = 2.5 × 10⁻⁶ m.',
      si: 'sin θ ≤ 1 විය යුතුය. n ≤ d / λ. d = 2.5 × 10⁻⁶ m.',
    },
    solution: {
      en: 'd = 1 / (400 × 10³) = 2.50 × 10⁻⁶ m. n_max = d / λ = (2.50 × 10⁻⁶) / (600 × 10⁻⁹) = 4.167. The largest integer is 4.',
      si: 'n_max = 2.5 × 10⁻⁶ / 600 × 10⁻⁹ = 4.167 ⟹ උපරිම පූර්ණ සංඛ්‍යාව 4 වේ.',
    },
  },

  // ==========================================================================
  // STRUCTURED PRACTICAL QUESTIONS (COVERING 5 OFFICIAL LAB EXPERIMENTS)
  // ==========================================================================
  {
    id: 'waves-prac-01',
    competencyRef: 'Competency 3.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.1 Sonometer] In a sonometer experiment, a vibrating 256 Hz fork resonates with a string of length 38.0 cm under a tension of 3.0 kg load (T = 3.0 × 9.8 = 29.4 N). Calculate the linear mass density μ of the wire in kg/m (to 4 decimal places).',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.1 තන්තුමානය] තන්තුමාන පරීක්ෂණයකදී 256 Hz සුසර දෙබලක්, 3.0 kg භාරයකින් (T = 29.4 N) ආතතිය ලබාදුන් 38.0 cm දිගැති තන්තුවක් සමග අනුනාද වේ. තන්තුවේ ඒකක දිගක ස්කන්ධය μ (kg/m වලින්) ගණනය කරන්න.',
    },
    expected: 0.00077,
    tolerance: 0.0001,
    unit: { en: 'kg/m', si: 'kg/m' },
    hint: {
      en: 'f = (1 / 2L) · √(T / μ)  ⟹  μ = T / (4 · f² · L²). Note L = 0.38 m.',
      si: 'f = (1 / 2L) · √(T / μ)  ⟹  μ = T / (4 · f² · L²). L = 0.38 m ලෙස ගන්න.',
    },
    solution: {
      en: 'μ = 29.4 / (4 · 256² · 0.38²) = 29.4 / (4 · 65536 · 0.1444) = 29.4 / 37853 = 0.000777 kg/m ≈ 0.00078 kg/m.',
      si: 'μ = 29.4 / (4 · 256² · 0.38²) = 0.00078 kg/m.',
    },
  },
  {
    id: 'waves-prac-02',
    competencyRef: 'Competency 3.4',
    category: 'structured-practical',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: '[Practical 3.1 Sonometer] In the sonometer experiment, why is a small paper rider placed precisely at the midpoint between the two knife-edge bridges rather than near one of the bridges?',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.1 තන්තුමානය] තන්තුමාන පරීක්ෂණයේදී කුඩා කඩදාසි අසරුවා පාලම් අසල නොතබා හරියටම පාලම් දෙක අතර මධ්‍යයේ තබන්නේ මන්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'In the fundamental vibration mode, the antinode of maximum amplitude forms at the center', si: 'මූලික කම්පන ප්‍රකාරයේදී උපරිම විස්තාරයක් සහිත ප්‍රස්පන්දය හටගන්නේ මධ්‍යයේ බැවිනි' } },
      { id: 'opt-b', text: { en: 'The tension in the wire is greatest at the center', si: 'තන්තුවේ ආතතිය මධ්‍යයේදී උපරිම වන බැවිනි' } },
      { id: 'opt-c', text: { en: 'A displacement node is formed at the midpoint', si: 'මධ්‍යයේ විස්ථාපන නිශ්පන්දයක් හටගන්නා බැවිනි' } },
      { id: 'opt-d', text: { en: 'To keep the wire straight against gravity', si: 'ගුරුත්වය නිසා තන්තුව නැමීම වැළැක්වීමට' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'The paper rider flutters and is thrown off when subjected to maximum vibration amplitude.',
      si: 'අසරුවා විසිවී යන්නේ උපරිම විස්තාරයක් ඇති තැනක තැබූ විටය.',
    },
    solution: {
      en: 'In the fundamental mode (n = 1), nodes exist at the two knife edges and an antinode with maximum displacement amplitude forms at the midpoint, throwing off the paper rider.',
      si: 'මූලික ප්‍රකාරයේදී පාලම් මත නිශ්පන්ද ද මධ්‍යයේ ප්‍රස්පන්දය ද හටගනී. උපරිම විස්තාරය නිසා අසරුවා විසිවේ.',
    },
  },
  {
    id: 'waves-prac-03',
    competencyRef: 'Competency 3.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.2 Resonance Tube] A 512 Hz tuning fork produces first resonance at l₁ = 15.5 cm and second resonance at l₂ = 48.9 cm in a resonance tube. Calculate the speed of sound in m/s.',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.2 අනුනාද නළය] 512 Hz සුසර දෙබලක් මගින් අනුනාද නළයක පළමු අනුනාදය l₁ = 15.5 cm හිදී ද දෙවන අනුනාදය l₂ = 48.9 cm හිදී ද ලැබේ. වාතයේ ධ්වනි ප්‍රවේගය m/s වලින් ගණනය කරන්න.',
    },
    expected: 342.0,
    tolerance: 3.0,
    unit: { en: 'm/s', si: 'm/s' },
    hint: {
      en: 'Use the difference formula: v = 2 · f · (l₂ - l₁). Remember to convert cm to metres.',
      si: 'v = 2 · f · (l₂ - l₁) සූත්‍රය භාවිතා කරන්න. cm මීටර් බවට හරවන්න.',
    },
    solution: {
      en: 'l₂ - l₁ = 48.9 - 15.5 = 33.4 cm = 0.334 m. v = 2 · 512 · 0.334 = 342.0 m/s.',
      si: 'l₂ - l₁ = 33.4 cm = 0.334 m. v = 2 · 512 · 0.334 = 342.0 m/s.',
    },
  },
  {
    id: 'waves-prac-04',
    competencyRef: 'Competency 3.4',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.2 Resonance Tube] For the resonance tube data above (l₁ = 15.5 cm, l₂ = 48.9 cm), calculate the end correction e of the tube in cm.',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.2 අනුනාද නළය] ඉහත අනුනාද නළ දත්ත සඳහා (l₁ = 15.5 cm, l₂ = 48.9 cm), නළයේ අන්ත ශෝධනය e සෙන්ටිමීටර වලින් ගණනය කරන්න.',
    },
    expected: 1.20,
    tolerance: 0.1,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'End correction is given by: e = (l₂ - 3 · l₁) / 2.',
      si: 'අන්ත ශෝධන සූත්‍රය: e = (l₂ - 3 · l₁) / 2.',
    },
    solution: {
      en: 'e = (48.9 - 3 · 15.5) / 2 = (48.9 - 46.5) / 2 = 2.4 / 2 = 1.20 cm.',
      si: 'e = (48.9 - 3 · 15.5) / 2 = 2.4 / 2 = 1.20 cm.',
    },
  },
  {
    id: 'waves-prac-05',
    competencyRef: 'Competency 3.5',
    category: 'structured-practical',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: '[Practical 3.3 Spectrometer Prism] In adjusting a spectrometer for parallel light using Schuster’s method:',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.3 වර්ණාවලීමානය] ෂූස්ටර් ක්‍රමයෙන් වර්ණාවලීමානය සමාන්තර ආලෝකයට සීරුමාරු කිරීමේදී:',
    },
    options: [
      { id: 'opt-a', text: { en: 'The telescope is adjusted at minimum deviation and the collimator at maximum deviation', si: 'දුරේක්ෂය අවම අපගමනයේදී ද සමාන්තරකාරකය විශාල අපගමනයේදී ද සීරුමාරු කරයි' } },
      { id: 'opt-b', text: { en: 'A distant building window is viewed directly without the prism', si: 'ප්‍රිස්මය නොමැතිව ඈත ගොඩනැගිල්ලක ජනේලයක් දෙස සෘජුව බලයි' } },
      { id: 'opt-c', text: { en: 'The slit is widened to maximum aperture', si: 'සිදුර උපරිම පළලට විවෘත කරයි' } },
      { id: 'opt-d', text: { en: 'The spirit level is placed on the telescope barrel', si: 'මට්ටම් නලය දුරේක්ෂ බටය මත තබයි' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Schuster\'s method iteratively focuses telescope at minimum deviation and collimator away from minimum deviation.',
      si: 'ෂූස්ටර් ක්‍රමයේදී දුරේක්ෂය අවම අපගමන පිහිටුමේදී ද සමාන්තරකාරකය අවම අපගමනයෙන් ඔබ්බෙහිදී ද සීරුමාරු කෙරේ.',
    },
    solution: {
      en: 'In Schuster\'s method, the prism is turned to minimum deviation where the telescope is focused, then turned away to a larger angle where the collimator is focused, converging on parallel rays.',
      si: 'ෂූස්ටර් ක්‍රමයේදී දුරේක්ෂය අවම අපගමනයේදී ද සමාන්තරකාරකය විශාල කෝණික අපගමනයේදී ද නාභිගත කර සමාන්තර කිරණ ලබාගනී.',
    },
  },
  {
    id: 'waves-prac-06',
    competencyRef: 'Competency 3.7',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.4 Diffraction Grating] In a spectrometer experiment with a 300 lines/mm grating, the first order spectrum for the green line gives left reading θ_L = 170.52° and right reading θ_R = 189.48°. Calculate the wavelength of green light in nm.',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.4 විවර්තන දැලිස] 300 lines/mm දැලිසක් සහිත වර්ණාවලීමාන පරීක්ෂණයකදී, කොළ පැහැති රේඛාවේ පළමු ගණයේ වර්ණාවලිය සඳහා වම් පාඨාංකය 170.52° සහ දකුණු පාඨාංකය 189.48° වේ. කොළ ආලෝකයේ තරංග ආයාමය nm වලින් ගණනය කරන්න.',
    },
    expected: 546.0,
    tolerance: 2.0,
    unit: { en: 'nm', si: 'nm' },
    hint: {
      en: '2θ = |189.48 - 170.52| = 18.96° ⟹ θ = 9.48°. d = 1 / (300 × 10³ m⁻¹). λ = d · sin θ.',
      si: '2θ = 18.96° ⟹ θ = 9.48°. d = 1 / 300000 m. λ = d · sin(9.48°).',
    },
    solution: {
      en: 'θ = 9.48°. sin(9.48°) = 0.1647. d = 3.333 × 10⁻⁶ m. λ = 3.333 × 10⁻⁶ · 0.1647 = 5.46 × 10⁻⁷ m = 546 nm (Mercury green line).',
      si: 'θ = 9.48°. λ = (3.333 × 10⁻⁶) · sin(9.48°) = 546 nm.',
    },
  },
  {
    id: 'waves-prac-07',
    competencyRef: 'Competency 3.6',
    category: 'structured-practical',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: '[Practical 3.5 Lens Displacement] What is the major physical advantage of the displacement method over the standard object-image distance (u, v) method for determining focal length?',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.5 කාච විස්ථාපනය] නාභීය දුර සෙවීමේ සම්මත (u, v) ක්‍රමයට වඩා විස්ථාපන ක්‍රමයේ ඇති ප්‍රධාන භෞතික වාසිය කුමක්ද?',
    },
    options: [
      { id: 'opt-a', text: { en: 'It eliminates the zero-index error of the lens upright because only the displacement d = |x₂ - x₁| between two positions is measured', si: 'පිහිටුම් දෙක අතර වෙනස d = |x₂ - x₁| පමණක් මනින බැවින් කාච රඳවනයේ ශුන්‍ය දෝෂය සම්පූර්ණයෙන්ම මැකී යාම' } },
      { id: 'opt-b', text: { en: 'It works even when the distance D is less than 2f', si: 'D දුර 2f ට වඩා අඩු වූ විටද ක්‍රියාත්මක වීම' } },
      { id: 'opt-c', text: { en: 'It does not require a screen or light source', si: 'තිරයක් හෝ ආලෝක ප්‍රභවයක් අවශ්‍ය නොවීම' } },
      { id: 'opt-d', text: { en: 'It can only be used with concave lenses', si: 'අවතල කාච සඳහා පමණක් භාවිතා කළ හැකි වීම' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Measuring difference of two readings on the same bench eliminates bench-origin zero errors.',
      si: 'එකම පරිමාණයේ පිහිටුම් දෙකක අන්තරය ගැනීමෙන් ශුන්‍ය දෝෂ මැකී යයි.',
    },
    solution: {
      en: 'Because only the difference between two lens positions d = |x₂ - x₁| and the bench distance D are measured, any bench index error of the lens upright cancels out completely.',
      si: 'කාච පිහිටුම් දෙක අතර වෙනස d පමණක් මනින බැවින් කාච රඳවනයේ ශුන්‍ය දෝෂය මුළුමනින්ම ඉවත් වේ.',
    },
  },
  {
    id: 'waves-prac-08',
    competencyRef: 'Competency 3.6',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.5 Lens Displacement] In the conjugate foci displacement method, the image height in position 1 is I₁ = 4.0 cm and in position 2 is I₂ = 1.0 cm. Calculate the true physical height of the object (O in cm).',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.5 කාච විස්ථාපනය] අනුබද්ධ නාභි විස්ථාපන ක්‍රමයේදී පළමු පිහිටුමේ ප්‍රතිබිම්බ උස I₁ = 4.0 cm වන අතර දෙවන පිහිටුමේදී I₂ = 1.0 cm වේ. වස්තුවේ සත්‍ය භෞතික උස O (cm වලින්) ගණනය කරන්න.',
    },
    expected: 2.0,
    tolerance: 0.1,
    unit: { en: 'cm', si: 'cm' },
    hint: {
      en: 'Conjugate image relationship: O = √(I₁ · I₂).',
      si: 'අනුබද්ධ ප්‍රතිබිම්බ සූත්‍රය: O = √(I₁ · I₂).',
    },
    solution: {
      en: 'O = √(4.0 · 1.0) = √4.0 = 2.0 cm.',
      si: 'O = √(4.0 · 1.0) = 2.0 cm.',
    },
  },
  {
    id: 'waves-prac-09',
    competencyRef: 'Competency 3.5',
    category: 'structured-practical',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: '[Practical 3.3 Spectrometer Prism] In measuring the angle A of a prism, reflections from Face 1 and Face 2 yield vernier readings θ₁ = 145.20° and θ₂ = 265.20°. Calculate the angle of the prism A in degrees.',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.3 වර්ණාවලීමානය] ප්‍රිස්ම කෝණය A මැනීමේදී මුහුණත් 1 සහ 2 මගින් පරාවර්තිත පාඨාංක θ₁ = 145.20° සහ θ₂ = 265.20° වේ. ප්‍රිස්ම කෝණය A අංශක වලින් ගණනය කරන්න.',
    },
    expected: 60.0,
    tolerance: 0.2,
    unit: { en: '°', si: '°' },
    hint: {
      en: 'The angular separation between reflections is 2A = |θ₂ - θ₁|. A = 2A / 2.',
      si: '2A = |θ₂ - θ₁|. A = |265.20 - 145.20| / 2.',
    },
    solution: {
      en: '2A = 265.20 - 145.20 = 120.0°  ⟹  A = 120.0 / 2 = 60.0°.',
      si: '2A = 120°  ⟹  A = 60.0°.',
    },
  },
  {
    id: 'waves-prac-10',
    competencyRef: 'Competency 3.7',
    category: 'structured-practical',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: '[Practical 3.4 Diffraction Grating] Why are spectrometer readings taken for BOTH symmetrical orders (left and right of normal incidence) in grating experiments?',
      si: '[ප්‍රායෝගික පරීක්ෂණය 3.4 විවර්තන දැලිස] දැලිස් පරීක්ෂණයේදී ලම්බ පතනයෙන් දෙපසම (වම සහ දකුණ) සමමිතික පාඨාංක දෙකම ලබාගන්නේ ඇයි?',
    },
    options: [
      { id: 'opt-a', text: { en: 'To eliminate spectrometer circular scale zero-index and eccentricity errors: 2θ = |θ_R - θ_L|', si: 'වර්ණාවලීමාන වෘත්තාකාර පරිමාණයේ ශුන්‍ය දෝෂ සහ විකේන්ද්‍රිකතා දෝෂ මුළුමනින්ම ඉවත් කිරීමට (2θ = |θ_R - θ_L|)' } },
      { id: 'opt-b', text: { en: 'Because the left and right orders have different wavelengths', si: 'වම් සහ දකුණු පැතිවල විවිධ තරංග ආයාම ඇති බැවින්' } },
      { id: 'opt-c', text: { en: 'To double the intensity of light', si: 'ආලෝකයේ තීව්‍රතාව දෙගුණ කර ගැනීමට' } },
      { id: 'opt-d', text: { en: 'Because light only diffracts in one direction at a time', si: 'වරකට එක් පැත්තකට පමණක් විවර්තනය වන බැවින්' } },
    ],
    correctOptionId: 'opt-a',
    hint: {
      en: 'Subtracting symmetric left and right angles cancels out any unknown zero offset.',
      si: 'සමමිතික පාඨාංක දෙකක අන්තරය 2θ ගැනීමෙන් ශුන්‍ය පිහිටුමේ දෝෂ ඉවත් වේ.',
    },
    solution: {
      en: 'Taking symmetrical angular readings θ_R and θ_L gives 2θ = |θ_R - θ_L|, eliminating any uncertainty or offset in identifying the exact normal incidence zero position.',
      si: '2θ = |θ_R - θ_L| මගින් ශුන්‍ය පාඨාංකයේ දෝෂ සම්පූර්ණයෙන්ම ඉවත් කර නිවැරදි කෝණය ලැබේ.',
    },
  },
  {
    "id": "wave-sq01",
    "competencyRef": "Competency 3.1",
    "category": "shm-oscillations",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A student conducts an experiment using a simple pendulum to determine the local acceleration of free fall g. The pendulum consists of a small heavy spherical lead bob suspended by a light inextensible cotton thread from a rigid clamp holding two wooden split cork blocks.",
      "si": "සරල පැද්දුමක් භාවිතයෙන් දේශීය ගුරුත්වාකර්ෂණ ත්වරණය g නිර්ණය කිරීමට ශිෂ්‍යයෙක් පරීක්ෂණයක් සිදුකරයි. පැද්දුම ලී කැබලි දෙකක් අතර තද කර ඇති තන්තුවකින් එල්ලා ඇති කුඩා ඝන ඊයම් ගෝලයකින් සමන්විත වේ."
    },
    "parts": [
      {
        "id": "wave-sq01-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Define the effective length L of a simple pendulum and describe how it is measured accurately using a vernier caliper and a metre rule.",
          "si": "සරල පැද්දුමක සඵල දිග L අර්ථ දක්වා, වර්නියර් කැලිපරයක් සහ මීටර් රූලක් භාවිතයෙන් එය නිවැරදිව මැනගන්නා ආකාරය විස්තර කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Defines L as distance from the lower suspension edge of the split cork to the centre of gravity of the spherical bob: L = l + r (or l + d/2).",
              "si": "L යනු එල්ලුම් ලක්ෂ්‍යයේ සිට ගෝලයේ ගුරුත්ව කේන්ද්‍රය දක්වා දුර L = l + r ලෙස අර්ථ දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Describes measuring bob diameter d using vernier calipers (r = d/2) and thread length l using a metre rule held vertically.",
              "si": "වර්නියර් කැලිපරයෙන් ගෝලයේ විෂ්කම්භය d මැන අරය (r = d/2) ලබාගෙන, මීටර් රූලෙන් නූලේ දිග l මැන එකතු කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The effective length L of a simple pendulum is the distance from the point of suspension (bottom edge of the split cork) to the centre of gravity of the bob: L = l + r, where l is the suspension thread length and r is the radius of the bob.\nThe diameter d of the bob is measured with a vernier calliper (r = d/2), and the thread length l from the cork edge to the top of the bob is measured with a vertical metre rule.",
          "si": "සඵල දිග L යනු එල්ලුම් ලක්ෂ්‍යයේ සිට ගෝලයේ ගුරුත්ව කේන්ද්‍රය දක්වා දුරයි (L = l + r).\nවර්නියර් කැලිපරයෙන් ගෝලයේ විෂ්කම්භය d මැන අරය r ලබාගනී. නූලේ දිග l සිරස් මීටර් රූලකින් මැන L = l + r ලෙස ලබාගනී."
        }
      },
      {
        "id": "wave-sq01-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "State why the angular displacement amplitude θ must be kept small (θ < 10° or sinθ ≈ θ in radians).",
          "si": "කෝණික විස්ථාපන විස්තාරය θ කුඩාවට (θ < 10°) තබාගත යුත්තේ මන්දැයි දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States restoring force is F = -mg sinθ.",
              "si": "ප්‍රත්‍යාවර්තක බලය F = -mg sinθ බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that SHM requires restoring force proportional to displacement (sinθ ≈ θ), which holds true only for small angles.",
              "si": "සරල අනුවර්තී චලිතය සඳහා sinθ ≈ θ විය යුතු අතර එය වලංගු වන්නේ කුඩා කෝණ සඳහා පමණක් බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The restoring force acting on the bob is F = -mg sinθ. For the motion to be strictly simple harmonic, the restoring force must be directly proportional to linear displacement x (i.e. F ∝ -x). This requires the small-angle approximation sinθ ≈ θ (in radians), which is valid within ~1% only when θ < 10°.",
          "si": "ප්‍රත්‍යාවර්තක බලය F = -mg sinθ වේ. සරල අනුවර්තී චලිතයක් වීමට නම් විස්ථාපනයට අනුලෝමව සමානුපාතික විය යුතුය (F ∝ -x). ඒ සඳහා sinθ ≈ θ විය යුතු අතර, එය නිවැරදි වන්නේ θ < 10° කුඩා කෝණ සඳහා පමණි."
        }
      },
      {
        "id": "wave-sq01-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "A student measures the time for 20 oscillations for various lengths L and plots a graph of T² (y-axis) against L (x-axis). The line passes through the origin with a gradient of 4.024 s² m⁻¹. Calculate the experimental value of g.",
          "si": "විවිධ L දිගවල් සඳහා දෝලන 20 ක කාලය මැන T² (y-අක්ෂය) එදිරිව L (x-අක්ෂය) ප්‍රස්තාරයක් අඳින ලදී. එය මූල ලක්ෂ්‍යය හරහා යන අතර එහි අනුක්‍රමණය 4.024 s² m⁻¹ වේ. g හි අගය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Derives T² = (4π² / g) L from T = 2π√(L/g).",
              "si": "T = 2π√(L/g) මඟින් T² = (4π² / g) L ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Equates gradient m = 4π² / g.",
              "si": "අනුක්‍රමණය m = 4π² / g බව හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates g = 4π² / 4.024 = 39.478 / 4.024 = 9.81 m s⁻².",
              "si": "g = 9.81 m s⁻² ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "From the simple pendulum period formula: T = 2π √(L/g) => T² = (4π² / g) L.\nComparing with y = mx:\nGradient m = 4π² / g => g = 4π² / m.\nWith gradient m = 4.024 s² m⁻¹:\ng = 4π² / 4.024 = 39.4784 / 4.024 = 9.81 m s⁻².",
          "si": "T = 2π √(L/g) => T² = (4π² / g) L.\nප්‍රස්තාරයේ අනුක්‍රමණය m = 4π² / g => g = 4π² / m.\ng = 4π² / 4.024 = 9.81 m s⁻²."
        }
      },
      {
        "id": "wave-sq01-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Explain why measuring the time for 20 oscillations instead of a single oscillation significantly reduces experimental error.",
          "si": "තනි දෝලනයක කාලය වෙනුවට දෝලන 20 ක කාලය මැනීමෙන් පරීක්ෂණ දෝෂය විශාල වශයෙන් අඩුවන්නේ මන්දැයි පැහැදිලි කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States human reaction time error in starting/stopping stopwatch (approx ±0.2 s) is divided by 20.",
              "si": "ආරම්භ කිරීමේ සහ නැවැත්වීමේ මානව ප්‍රතික්‍රියා කාල දෝෂය (±0.2 s පමණ) 20 න් බෙදී යන බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that percentage/fractional timing uncertainty is reduced by a factor of 20.",
              "si": "කාලය මැනීමේ ප්‍රතිශත අවිනිශ්චිතතාව 20 ගුණයකින් අඩුවන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Human reaction time in manually starting and stopping a stopwatch introduces an uncertainty of approximately Δt ≈ ±0.2 s. By measuring 20 oscillations (total time t₂₀ = 20T), this reaction uncertainty is distributed over 20 cycles, reducing the fractional uncertainty in the periodic time T = t₂₀ / 20 by a factor of 20 (ΔT = Δt / 20 ≈ ±0.01 s).",
          "si": "නැවතුම් ඔරලෝසුව ක්‍රියාත්මක කිරීමේදී හා නැවැත්වීමේදී මානව ප්‍රතික්‍රියා කාල දෝෂය ±0.2 s පමණ වේ. දෝලන 20 ක කාලය මැනීමෙන් එම දෝෂය දෝලන 20 අතර බෙදී ගොස් කාලාවර්තයේ දෝෂය 20 ගුණයකින් (±0.01 s දක්වා) අඩු වේ."
        }
      }
    ],
    "hint": {
      "en": "T = 2π√(L/g) => T² = (4π²/g)L. The gradient of T² vs L equals 4π²/g.",
      "si": "T = 2π√(L/g) => T² = (4π²/g)L. T² එදිරිව L ප්‍රස්තාරයේ අනුක්‍රමණය 4π²/g වේ."
    },
    "solution": {
      "en": "Effective length L = l + r. g = 4π²/gradient = 4π²/4.024 = 9.81 m s⁻². Timing 20 oscillations divides reaction time error by 20.",
      "si": "සඵල දිග L = l + r. ගුරුත්වජ ත්වරණය g = 4π²/4.024 = 9.81 m s⁻². දෝලන 20 ක් මැනීමෙන් දෝෂය 20 න් බෙදීයයි."
    }
  },
  {
    "id": "wave-sq02",
    "competencyRef": "Competency 3.1",
    "category": "shm-oscillations",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A helical spring hung vertically from a rigid support extends by e = 9.80 cm when a mass m = 0.200 kg is attached to its lower end in static equilibrium. The mass is then pulled down a further 2.0 cm and released into vertical simple harmonic oscillations. Take g = 9.80 m s⁻².",
      "si": "සිරස් හෙලිකල් දුන්නක පහළ කෙළවරට m = 0.200 kg ස්කන්ධයක් එල්ලා ස්ථිතික සමතුලිතතාවයට පත්කළ විට එය e = 9.80 cm කින් ඇදේ. ඉන්පසු ස්කන්ධය පහළට තවත් 2.0 cm ඇද මුදාහළ විට සිරස් සරල අනුවර්තී දෝලනයට ලක්වේ. g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "wave-sq02-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the spring constant k of the helical spring in N m⁻¹.",
          "si": "හෙලිකල් දුන්නේ දුනු නියතය k (N m⁻¹ වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States Hooke’s law at static equilibrium: mg = k · e.",
              "si": "ස්ථිතික සමතුලිතතාවයේදී mg = k · e යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates k = (0.200 × 9.80) / 0.0980 = 1.96 / 0.0980 = 20.0 N m⁻¹.",
              "si": "k = 20.0 N m⁻¹ ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At static equilibrium, the downward gravitational force equals the upward restoring tension:\nmg = k · e => k = mg / e.\nk = (0.200 kg × 9.80 m s⁻²) / 0.0980 m = 1.960 N / 0.0980 m = 20.0 N m⁻¹.",
          "si": "ස්ථිතික සමතුලිතතාවයේදී: mg = k · e => k = mg / e.\nk = (0.200 × 9.80) / 0.0980 = 20.0 N m⁻¹."
        }
      },
      {
        "id": "wave-sq02-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Calculate the period T of the vertical oscillations.",
          "si": "සිරස් දෝලනවල කාලාවර්තය T ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States period formula T = 2π √(m/k) or T = 2π √(e/g).",
              "si": "කාලාවර්ත සූත්‍රය T = 2π √(m/k) හෝ T = 2π √(e/g) ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes values: T = 2π √(0.200 / 20.0) = 2π √(0.010) = 2π × 0.100.",
              "si": "අගයන් ආදේශ කිරීම: T = 2π × 0.100."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes T = 0.628 s.",
              "si": "T = 0.628 s ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Using the mass-spring oscillation period formula:\nT = 2π √(m / k) = 2π √(0.200 kg / 20.0 N m⁻¹) = 2π √(0.010 s²) = 2π × 0.100 s = 0.628 s\n(Alternately: T = 2π √(e / g) = 2π √(0.0980 / 9.80) = 2π √(0.010) = 0.628 s).",
          "si": "T = 2π √(m / k) = 2π √(0.200 / 20.0) = 2π × 0.100 = 0.628 s."
        }
      },
      {
        "id": "wave-sq02-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the maximum speed v_max of the mass during its oscillations.",
          "si": "දෝලනයේදී ස්කන්ධයේ උපරිම වේගය v_max ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies amplitude x₀ = 2.0 cm = 0.020 m and angular frequency ω = √(k/m) = 10.0 rad s⁻¹.",
              "si": "විස්තාරය x₀ = 0.020 m සහ ω = 10.0 rad s⁻¹ හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies v_max = ω · x₀.",
              "si": "v_max = ω · x₀ සූත්‍රය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes v_max = 10.0 × 0.020 = 0.200 m s⁻¹.",
              "si": "v_max = 0.200 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Angular frequency ω = √(k / m) = √(20.0 / 0.200) = √100 = 10.0 rad s⁻¹.\nAmplitude x₀ = 2.0 cm = 0.020 m.\nMaximum velocity occurs at the equilibrium position:\nv_max = ω · x₀ = 10.0 rad s⁻¹ × 0.020 m = 0.200 m s⁻¹.",
          "si": "කෝණික සංඛ්‍යාතය ω = √(k / m) = 10.0 rad s⁻¹.\nවිස්තාරය x₀ = 0.020 m.\nඋපරිම ප්‍රවේගය v_max = ω x₀ = 10.0 × 0.020 = 0.200 m s⁻¹."
        }
      },
      {
        "id": "wave-sq02-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "State where in the oscillation path the acceleration of the mass is maximum and calculate its magnitude.",
          "si": "දෝලන පථයේ කවර ස්ථානයකදී ත්වරණය උපරිම වේදැයි දක්වා, එහි විශාලත්වය ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States maximum acceleration occurs at the extreme turning points (highest and lowest positions).",
              "si": "ත්වරණය උපරිම වන්නේ අන්ත ලක්ෂ්‍යවලදී (ඉහළම හා පහළම පිහිටීම්වලදී) බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates a_max = ω² x₀ = (10.0)² × 0.020 = 2.00 m s⁻².",
              "si": "a_max = ω² x₀ = 2.00 m s⁻² ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The acceleration is maximum at the extreme positions (the top and bottom turning points of the oscillation) where displacement x = ±x₀.\nMagnitude: a_max = ω² · x₀ = (10.0 rad s⁻¹)² × 0.020 m = 100 × 0.020 = 2.00 m s⁻².",
          "si": "විස්ථාපනය උපරිම වන අන්ත ලක්ෂ්‍යවලදී (ඉහළම සහ පහළම පිහිටුම්) ත්වරණය උපරිම වේ.\nවිශාලත්වය: a_max = ω² x₀ = (10.0)² × 0.020 = 2.00 m s⁻²."
        }
      }
    ],
    "hint": {
      "en": "Hooke’s law gives k = mg/e. Period T = 2π√(m/k). Maximum speed is v_max = ω x₀ and maximum acceleration is a_max = ω² x₀.",
      "si": "හුක් නියමයෙන් k = mg/e. කාලාවර්තය T = 2π√(m/k). උපරිම වේගය v_max = ω x₀ සහ උපරිම ත්වරණය a_max = ω² x₀ වේ."
    },
    "solution": {
      "en": "k = 20.0 N/m. Period T = 0.628 s. Maximum speed v_max = 0.200 m/s. Maximum acceleration a_max = 2.00 m/s² at the extremes.",
      "si": "k = 20.0 N/m. කාලාවර්තය T = 0.628 s. උපරිම වේගය v_max = 0.200 m/s. අන්ත ලක්ෂ්‍ය වලදී උපරිම ත්වරණය a_max = 2.00 m/s²."
    }
  },
  {
    "id": "wave-sq03",
    "competencyRef": "Competency 3.4",
    "category": "sound-doppler",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A resonance tube of internal diameter D = 4.0 cm is used to determine the speed of sound v in air using a 512 Hz tuning fork. The first and second resonance lengths of the air column are measured as l₁ = 15.2 cm and l₂ = 48.4 cm respectively.",
      "si": "අභ්‍යන්තර විෂ්කම්භය D = 4.0 cm වන අනුනාද නළයක් 512 Hz සරසුලක් සමඟ යොදා වාතයේ ධ්වනි ප්‍රවේගය v සෙවීමට පරීක්ෂණයක් සිදුකරයි. පළමු හා දෙවන අනුනාද වායු කඳ දිග පිළිවෙලින් l₁ = 15.2 cm සහ l₂ = 48.4 cm වේ."
    },
    "parts": [
      {
        "id": "wave-sq03-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Explain what is meant by end correction c of an open tube and state its theoretical relation to tube radius r.",
          "si": "විවෘත නළයක අග්‍ර ශෝධනය c යනු කුමක්දැයි පැහැදිලි කර, නළයේ අරය r සමඟ එහි න්‍යායික සම්බන්ධය දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Explains that the antinode at the open end forms a small distance c slightly outside the physical boundary of the tube.",
              "si": "විවෘත කෙළවරේ විස්පන්දය නළ කෙළවරින් මදක් පිටතින් c දුරකින් පිහිටන බව පැහැදිලි කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States theoretical formula: c ≈ 0.6 r (or 0.3 D).",
              "si": "න්‍යායික සූත්‍රය c ≈ 0.6 r (හෝ 0.3 D) දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Because vibrating air molecules just beyond the open mouth of the tube also participate in the acoustic standing wave, the displacement antinode is formed at a small distance c outside the physical end of the tube. Theoretically for a circular tube, c ≈ 0.6 r (where r is internal radius) or c ≈ 0.3 D.",
          "si": "නළයේ විවෘත මුවවිටින් මදක් ඔබ්බෙහි ඇති වායු අණුද කම්පනයට සහභාගී වන බැවින්, විස්පන්දය නළ කෙළවරින් මදක් පිටතින් c දුරකින් පිහිටයි. න්‍යායිකව c ≈ 0.6 r (හෝ c ≈ 0.3 D) වේ."
        }
      },
      {
        "id": "wave-sq03-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Write equations for the first (l₁) and second (l₂) resonance conditions in terms of wavelength λ and end correction c.",
          "si": "තරංග ආයාමය λ සහ අග්‍ර ශෝධනය c ඇසුරෙන් පළමු (l₁) සහ දෙවන (l₂) අනුනාද කොන්දේසි සඳහා සමීකරණ ලියන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Writes l₁ + c = λ / 4.",
              "si": "l₁ + c = λ / 4 ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Writes l₂ + c = 3λ / 4.",
              "si": "l₂ + c = 3λ / 4 ලිවීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "First resonance (fundamental mode, node at water surface and antinode at mouth):\nl₁ + c = λ / 4\nSecond resonance (first overtone / 3rd harmonic):\nl₂ + c = 3λ / 4.",
          "si": "පළමු අනුනාදය: l₁ + c = λ / 4\nදෙවන අනුනාදය: l₂ + c = 3λ / 4."
        }
      },
      {
        "id": "wave-sq03-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the wavelength λ of the sound wave and the experimental speed of sound v in air.",
          "si": "ධ්වනි තරංගයේ තරංග ආයාමය λ සහ වාතයේ ධ්වනි ප්‍රවේගය v ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Subtracts equations: (l₂ - l₁) = λ / 2 => λ = 2(l₂ - l₁).",
              "si": "(l₂ - l₁) = λ / 2 => λ = 2(l₂ - l₁) ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates λ = 2 × (48.4 - 15.2) = 2 × 33.2 cm = 66.4 cm = 0.664 m.",
              "si": "λ = 0.664 m (66.4 cm) ලෙස ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates v = f · λ = 512 × 0.664 = 340.0 m s⁻¹.",
              "si": "v = f · λ = 512 × 0.664 = 340.0 m s⁻¹ ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Subtracting the first resonance equation from the second:\n(l₂ + c) - (l₁ + c) = (3λ / 4) - (λ / 4) => l₂ - l₁ = λ / 2\nλ = 2 (l₂ - l₁) = 2 (48.4 cm - 15.2 cm) = 2 × 33.2 cm = 66.4 cm = 0.664 m.\nSpeed of sound in air:\nv = f · λ = 512 s⁻¹ × 0.664 m = 340.0 m s⁻¹.",
          "si": "සමීකරණ අඩු කිරීමෙන්: l₂ - l₁ = λ / 2\nλ = 2 (48.4 - 15.2) = 66.4 cm = 0.664 m.\nධ්වනි ප්‍රවේගය: v = f · λ = 512 × 0.664 = 340.0 m s⁻¹."
        }
      },
      {
        "id": "wave-sq03-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Calculate the experimental end correction c and compare it with the theoretical value based on the tube diameter.",
          "si": "පරීක්ෂණාත්මක අග්‍ර ශෝධනය c ගණනය කර, නළයේ විෂ්කම්භය මත පදනම් වූ න්‍යායික අගය සමඟ එය සසඳන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates experimental c = (λ / 4) - l₁ = (66.4 / 4) - 15.2 = 16.6 - 15.2 = 1.40 cm.",
              "si": "පරීක්ෂණාත්මක c = (66.4 / 4) - 15.2 = 1.40 cm ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates theoretical c_theo = 0.6 r = 0.6 × 2.0 cm = 1.20 cm (or 0.3 D = 1.20 cm).",
              "si": "න්‍යායික c_theo = 0.6 × 2.0 = 1.20 cm ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Comments that experimental c (1.40 cm) agrees well with theoretical c (1.20 cm) within reasonable lab experimental margin.",
              "si": "පරීක්ෂණාත්මක අගය න්‍යායික අගය හා හොඳින් එකඟ වන බව සඳහන් කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Experimental end correction:\nc = (λ / 4) - l₁ = (66.4 cm / 4) - 15.2 cm = 16.6 cm - 15.2 cm = 1.40 cm (or 0.014 m).\nTheoretical end correction:\nRadius r = D / 2 = 4.0 cm / 2 = 2.0 cm.\nc_theo = 0.6 r = 0.6 × 2.0 cm = 1.20 cm.\nThe experimental value (1.40 cm) is very close to the theoretical prediction (1.20 cm), with the slight difference attributable to the finite thickness of the glass tube wall and meniscus curvature.",
          "si": "පරීක්ෂණාත්මක අග්‍ර ශෝධනය: c = (66.4 / 4) - 15.2 = 1.40 cm.\nන්‍යායික අගය: c_theo = 0.6 r = 0.6 × 2.0 cm = 1.20 cm.\nපරීක්ෂණාත්මක අගය න්‍යායික අගයට ඉතා ආසන්න වන අතර වීදුරු බිත්තියේ ඝනකම නිසා සුළු වෙනසක් ඇතිවිය හැක."
        }
      }
    ],
    "hint": {
      "en": "Subtracting resonance lengths eliminates end correction: l₂ - l₁ = λ/2. Speed v = f λ.",
      "si": "අනුනාද දිගවල් අඩු කිරීමෙන් අග්‍ර ශෝධනය ඉවත්වේ: l₂ - l₁ = λ/2. ප්‍රවේගය v = f λ."
    },
    "solution": {
      "en": "Wavelength λ = 2(l₂ - l₁) = 0.664 m. Speed of sound v = 340.0 m/s. Experimental end correction c = 1.40 cm, close to theoretical 0.6r = 1.20 cm.",
      "si": "තරංග ආයාමය λ = 0.664 m. ධ්වනි ප්‍රවේගය v = 340.0 m/s. අග්‍ර ශෝධනය c = 1.40 cm වන අතර න්‍යායික අගය 1.20 cm වේ."
    }
  },
  {
    "id": "wave-sq04",
    "competencyRef": "Competency 3.5",
    "category": "stationary-waves-strings",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A sonometer wire of linear mass density m = 1.25 × 10⁻³ kg m⁻¹ is stretched over two movable bridges separated by a vibrating length L by suspending a load mass M from one end passing over a frictionless pulley. Take g = 9.80 m s⁻².",
      "si": "රේඛීය ස්කන්ධ ඝනත්වය m = 1.25 × 10⁻³ kg m⁻¹ වන සොනෝමීටර කම්බියක්, ඝර්ෂණ රහිත කප්පියක් මතින් යන M ස්කන්ධයක් මඟින් ආතතියට ලක්කර ಚල්‍ය පාලම් දෙකක් අතර L කම්පන දිගකට සකසා ඇත. g = 9.80 m s⁻² ලෙස ගන්න."
    },
    "parts": [
      {
        "id": "wave-sq04-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State the formula for the fundamental frequency f of a stretched string vibrating between two fixed bridges in terms of length L, tension T, and linear density m.",
          "si": "කම්බියේ දිග L, ආතතිය T සහ රේඛීය ඝනත්වය m ඇසුරෙන් කම්බියේ මූලික සංඛ්‍යාතය f සඳහා සූත්‍රය දක්වන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States fundamental wave condition: L = λ / 2 => λ = 2L.",
              "si": "මූලික ප්‍රකාරය සඳහා λ = 2L බව දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Combines with wave speed v = √(T/m) to give f = (1 / 2L) √(T / m).",
              "si": "f = (1 / 2L) √(T / m) සූත්‍රය ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "In the fundamental vibrating mode, nodes form at the two bridges and an antinode at the centre: L = λ / 2 => λ = 2L.\nThe transverse wave speed in the string is v = √(T / m).\nTherefore, the fundamental frequency is: f = v / λ = (1 / 2L) √(T / m).",
          "si": "මූලික ප්‍රකාරයේදී: L = λ / 2 => λ = 2L.\nකම්බියේ තීර්යක් තරංග ප්‍රවේගය v = √(T / m).\nඑබැවින් මූලික සංඛ්‍යාතය f = (1 / 2L) √(T / m)."
        }
      },
      {
        "id": "wave-sq04-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "When a suspended mass M = 4.00 kg is used, the wire vibrates in unison with a 256 Hz tuning fork in its fundamental mode. Calculate the vibrating length L of the wire.",
          "si": "එල්ලා ඇති ස්කන්ධය M = 4.00 kg වන විට කම්බිය 256 Hz සරසුලක් සමඟ මූලික ප්‍රකාරයෙන් සමපාත වේ. කම්බියේ කම්පන දිග L ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates tension T = M g = 4.00 × 9.80 = 39.2 N.",
              "si": "ආතතිය T = 4.00 × 9.80 = 39.2 N ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates wave speed v = √(39.2 / 1.25 × 10⁻³) = √31360 = 177.09 m s⁻¹.",
              "si": "ප්‍රවේගය v = √31360 = 177.09 m s⁻¹ ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Solves L = v / (2f) = 177.09 / (2 × 256) = 177.09 / 512 = 0.346 m = 34.6 cm.",
              "si": "L = 0.346 m (34.6 cm) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Tension T = M · g = 4.00 kg × 9.80 m s⁻² = 39.2 N.\nWave velocity v = √(T / m) = √(39.2 N / (1.25 × 10⁻³ kg m⁻¹)) = √31360 = 177.09 m s⁻¹.\nFrom f = v / (2L) => L = v / (2f) = 177.09 m s⁻¹ / (2 × 256 s⁻¹) = 177.09 / 512 = 0.346 m (34.6 cm).",
          "si": "ආතතිය T = 4.00 × 9.80 = 39.2 N.\nප්‍රවේගය v = √(39.2 / 1.25 × 10⁻³) = 177.09 m s⁻¹.\nL = v / (2f) = 177.09 / (2 × 256) = 0.346 m (34.6 cm)."
        }
      },
      {
        "id": "wave-sq04-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Describe how resonance between the tuning fork and the sonometer wire is detected experimentally using a small paper rider.",
          "si": "කුඩා කඩදාසි අසරුවක් භාවිතයෙන් සරසුල සහ සොනෝමීටර කම්බිය අතර අනුනාදය හඳුනාගන්නා ආකාරය විස්තර කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Places a light inverted V-shaped paper rider at the midpoint of the vibrating length L.",
              "si": "කම්පන දිගේ L මධ්‍ය ලක්ෂ්‍යය මත සැහැල්ලු කඩදාසි අසරුවක් (ප්‍රතිලෝම V හැඩැති) තැබීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Explains that at resonance, maximum amplitude vibration (antinode) occurs at the midpoint, violently throwing off the paper rider.",
              "si": "අනුනාදයේදී මධ්‍යයේ විස්තාරය උපරිම වන බැවින් (විස්පන්දයක් සෑදෙන බැවින්) කඩදාසි අසරුව විසිවී යන බව පැහැදිලි කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "A small inverted V-shaped piece of light paper (paper rider) is placed at the exact midpoint between the two bridges. The stem of the vibrating tuning fork is pressed firmly against the wooden soundboard. When the bridge separation is tuned to resonance, large-amplitude stationary oscillations establish an antinode at the midpoint, causing the paper rider to vibrate violently and be thrown off the wire.",
          "si": "පාලම් දෙක අතර හරියටම මැද ලක්ෂ්‍යය මත කුඩා කඩදාසි අසරුවක් තබනු ලැබේ. කම්පනය වන සරසුලේ බඳ සොනෝමීටර පෙට්ටිය මත තද කළ විට, අනුනාදය ඇතිවූ විට මැද විස්පන්දයක් සෑදී විශාල විස්තාරයෙන් කම්පනය වීම නිසා කඩදාසි අසරුව වහා විසිවී යයි."
        }
      },
      {
        "id": "wave-sq04-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "If the vibrating length L is halved while keeping tension T and mass density m constant, calculate the new fundamental frequency f'.",
          "si": "ආතතිය T සහ රේඛීය ඝනත්වය m නියතව තබා කම්පන දිග L අඩක් කළහොත් නව මූලික සංඛ්‍යාතය f' ගණනය කරන්න."
        },
        "allocatedMarks": 1,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies f ∝ 1/L to deduce f' = 2f = 2 × 256 = 512 Hz.",
              "si": "f ∝ 1/L බැවින් f' = 2 × 256 = 512 Hz ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Since f ∝ 1/L for constant tension and linear density:\nf' = f × (L / L') = 256 Hz × (L / 0.5L) = 256 × 2 = 512 Hz (one octave higher).",
          "si": "f ∝ 1/L බැවින්: f' = 2 × 256 = 512 Hz."
        }
      }
    ],
    "hint": {
      "en": "Fundamental frequency f = (1/2L)√(T/m). Paper rider is thrown off at the antinode during resonance.",
      "si": "මූලික සංඛ්‍යාතය f = (1/2L)√(T/m). අනුනාදයේදී විස්පන්දය මත ඇති කඩදාසි අසරුව විසිවී යයි."
    },
    "solution": {
      "en": "T = 39.2 N. Wave speed v = 177.09 m/s. Vibrating length L = 0.346 m (34.6 cm). Halving length doubles frequency to 512 Hz.",
      "si": "T = 39.2 N. ප්‍රවේගය v = 177.09 m/s. කම්පන දිග L = 34.6 cm. දිග අඩක් කළ විට සංඛ්‍යාතය 512 Hz දක්වා දෙගුණ වේ."
    }
  },
  {
    "id": "wave-sq05",
    "competencyRef": "Competency 3.6",
    "category": "sound-doppler",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A locomotive moving at steady speed u_s = 20.0 m s⁻¹ sounds its whistle at frequency f₀ = 600 Hz while approaching a steep vertical rock cliff. The speed of sound in still air is v = 340.0 m s⁻¹.",
      "si": "u_s = 20.0 m s⁻¹ ඒකාකාර වේගයකින් සිරස් බෑවුම් පර්වතයක් දෙසට ධාවනය වන දුම්රියක් f₀ = 600 Hz සංඛ්‍යාතයකින් නලා ශබ්ද නිකුත් කරයි. නිශ්චල වාතයේ ධ්වනි ප්‍රවේගය v = 340.0 m s⁻¹ වේ."
    },
    "parts": [
      {
        "id": "wave-sq05-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the frequency f_cliff of the sound waves as received by a stationary observer standing at the foot of the cliff.",
          "si": "පර්වතය පාමුල සිටින නිශ්චල නිරීක්ෂකයෙකුට ඇසෙන ධ්වනි තරංගවල f_cliff සංඛ්‍යාතය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States Doppler formula for source moving towards stationary observer: f' = f₀ [v / (v - u_s)].",
              "si": "නිශ්චල නිරීක්ෂකයෙකු දෙසට ප්‍රභවය චලනය වීමේ ඩොප්ලර් සූත්‍රය දැක්වීම: f' = f₀ [v / (v - u_s)]."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Substitutes values: f_cliff = 600 × [340 / (340 - 20)].",
              "si": "අගයන් ආදේශ කිරීම: f_cliff = 600 × (340 / 320)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes f_cliff = 600 × 1.0625 = 637.5 Hz.",
              "si": "f_cliff = 637.5 Hz ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For a moving source approaching a stationary observer at the cliff:\nf_cliff = f₀ × (v / (v - u_s))\nf_cliff = 600 Hz × (340.0 / (340.0 - 20.0)) = 600 × (340 / 320) = 637.5 Hz.",
          "si": "නිශ්චල නිරීක්ෂකයා දෙසට ප්‍රභවය එන විට:\nf_cliff = f₀ [v / (v - u_s)] = 600 × (340 / 320) = 637.5 Hz."
        }
      },
      {
        "id": "wave-sq05-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "The sound waves reflect off the vertical cliff. Calculate the frequency f_driver heard by the locomotive driver from the reflected echo.",
          "si": "ධ්වනි තරංග පර්වතයෙන් පරාවර්තනය වේ. එම පරාවර්තිත ප්‍රතිරාවයෙන් දුම්රිය රියදුරුට ඇසෙන f_driver සංඛ්‍යාතය ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Recognizes that the cliff acts as a stationary source emitting frequency f_cliff = 637.5 Hz.",
              "si": "පර්වතය f_cliff = 637.5 Hz සංඛ්‍යාතයක් නිකුත් කරන නිශ්චල ප්‍රභවයක් ලෙස ක්‍රියාකරන බව හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies Doppler formula for observer moving towards stationary source: f'' = f_cliff [(v + u_o) / v] where u_o = 20.0 m s⁻¹.",
              "si": "නිශ්චල ප්‍රභවය දෙසට නිරීක්ෂකයා චලනය වීමේ සූත්‍රය යෙදීම: f'' = f_cliff [(v + u_o) / v]."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes f_driver = 637.5 × [(340 + 20) / 340] = 637.5 × (360 / 340) = 675.0 Hz.",
              "si": "f_driver = 675.0 Hz ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The cliff reflects waves at frequency f_cliff = 637.5 Hz, acting as a stationary source. The train driver is an observer moving towards this stationary source with speed u_o = 20.0 m s⁻¹:\nf_driver = f_cliff × ((v + u_o) / v) = 637.5 Hz × ((340.0 + 20.0) / 340.0) = 637.5 × (360.0 / 340.0) = 675.0 Hz\n(Alternatively: f_driver = f₀ × ((v + u_s) / (v - u_s)) = 600 × (360 / 320) = 675.0 Hz).",
          "si": "පර්වතය 637.5 Hz සංඛ්‍යාතයක් සහිත නිශ්චල ප්‍රභවයක් ලෙස සලකා, ඒ දෙසට u_o = 20.0 m s⁻¹ වේගයෙන් යන රියදුරුට:\nf_driver = f_cliff [(v + u_o) / v] = 637.5 × (360 / 340) = 675.0 Hz."
        }
      },
      {
        "id": "wave-sq05-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the beat frequency f_beat detected by the locomotive driver due to the superposition of the direct whistle sound and the reflected echo.",
          "si": "නලාවේ සෘජු ශබ්දය සහ පරාවර්තිත ප්‍රතිරාවය අනුපතනය වීමෙන් රියදුරුට ඇසෙන ස්පන්ද සංඛ්‍යාතය f_beat ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies beat frequency as difference between the two received frequencies: f_beat = |f_driver - f₀|.",
              "si": "ස්පන්ද සංඛ්‍යාතය සංඛ්‍යාත දෙකෙහි වෙනස ලෙස හඳුනා ගැනීම: f_beat = |f_driver - f₀|."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes f_beat = 675.0 - 600.0 = 75.0 Hz.",
              "si": "f_beat = 75.0 Hz ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Beat frequency is the absolute difference between the frequencies of the two interfering acoustic waves heard by the driver:\nf_beat = |f_driver - f₀| = 675.0 Hz - 600.0 Hz = 75.0 Hz.",
          "si": "ස්පන්ද සංඛ්‍යාතය සංඛ්‍යාත දෙකෙහි වෙනස වේ:\nf_beat = 675.0 - 600.0 = 75.0 Hz."
        }
      }
    ],
    "hint": {
      "en": "First calculate frequency hitting the cliff using source-moving formula, then use moving-observer formula for the reflected wave.",
      "si": "පළමුව ප්‍රභවය චලනය වීමේ සූත්‍රයෙන් පර්වතයට ලැබෙන සංඛ්‍යාතයද, ඉන්පසු නිරීක්ෂකයා චලනය වීමේ සූත්‍රයෙන් රියදුරුට ඇසෙන සංඛ්‍යාතයද සොයන්න."
    },
    "solution": {
      "en": "Frequency at cliff f_cliff = 637.5 Hz. Frequency of echo heard by driver f_driver = 675.0 Hz. Beat frequency = 75.0 Hz.",
      "si": "පර්වතයට ලැබෙන සංඛ්‍යාතය = 637.5 Hz. රියදුරුට ඇසෙන ප්‍රතිරාවය = 675.0 Hz. ස්පන්ද සංඛ්‍යාතය = 75.0 Hz."
    }
  },
  {
    "id": "wave-sq06",
    "competencyRef": "Competency 3.7",
    "category": "diffraction-polarization",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "In an experiment using a diffraction grating and a spectrometer to measure the wavelength of yellow light emitted by a sodium discharge lamp, a transmission grating ruled with N = 500 lines per mm is illuminated normally with parallel light.",
      "si": "සෝඩියම් පහනකින් නිකුත් වන කහ ආලෝකයේ තරංග ආයාමය මැනීම සඳහා විවර්තන දැලියක් සහ වර්ණාවලීමානයක් භාවිතා කරයි. මිලිමීටරයකට රේඛා N = 500 ක් ඇති සම්ප්‍රේෂණ දැලියක් මතට සමාන්තර ආලෝකය අභිලම්භව පතනය වේ."
    },
    "parts": [
      {
        "id": "wave-sq06-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the grating element (grating spacing d) in metres.",
          "si": "දැලි ඒකකය (දැලි පරතරය d) මීටර් වලින් ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States relation d = 1 / N.",
              "si": "d = 1 / N සූත්‍රය ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates d = 1 mm / 500 = 10⁻³ m / 500 = 2.00 × 10⁻⁶ m.",
              "si": "d = 2.00 × 10⁻⁶ m ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Grating element d is the distance between consecutive slit centres:\nd = 1 / N = 1 mm / 500 = 1.0 × 10⁻³ m / 500 = 2.00 × 10⁻⁶ m (2.00 μm).",
          "si": "දැලි පරතරය d = 1 / N = 10⁻³ m / 500 = 2.00 × 10⁻⁶ m."
        }
      },
      {
        "id": "wave-sq06-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "The first-order (n = 1) spectral line is observed at diffraction angles of θ_left = 17.15° and θ_right = 17.17° on either side of the central maximum. Calculate the mean diffraction angle θ and determine the wavelength λ of the yellow light in nanometres (nm).",
          "si": "මධ්‍ය ප්‍රධාන උපරිමයේ දෙපසින් පළමු පෙළ (n = 1) වර්ණාවලි රේඛාව θ_left = 17.15° සහ θ_right = 17.17° විවර්තන කෝණ වලදී නිරීක්ෂණය වේ. මධ්‍යන්‍ය විවර්තන කෝණය θ සහ කහ ආලෝකයේ තරංග ආයාමය λ (nm වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Calculates mean angle θ = (17.15° + 17.17°) / 2 = 17.16°.",
              "si": "මධ්‍යන්‍ය කෝණය θ = 17.16° ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States grating formula d sinθ = n λ.",
              "si": "දැලි සමීකරණය d sinθ = n λ ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes sin(17.16°) = 0.2950.",
              "si": "sin(17.16°) = 0.2950 ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates λ = (2.00 × 10⁻⁶ × 0.2950) / 1 = 5.90 × 10⁻⁷ m = 590 nm.",
              "si": "λ = 590 nm (5.90 × 10⁻⁷ m) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Mean diffraction angle: θ = (17.15° + 17.17°) / 2 = 17.16°.\nUsing the diffraction grating equation: d sinθ = n λ\nFor n = 1:\nλ = d sin(17.16°) = (2.00 × 10⁻⁶ m) × 0.29503 = 5.901 × 10⁻⁷ m = 590 nm.",
          "si": "මධ්‍යන්‍ය කෝණය θ = 17.16°.\nd sinθ = n λ මඟින් (n = 1):\nλ = 2.00 × 10⁻⁶ × sin(17.16°) = 5.90 × 10⁻⁷ m = 590 nm."
        }
      },
      {
        "id": "wave-sq06-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Determine the highest diffraction order n_max that can theoretically be observed with this grating and wavelength.",
          "si": "මෙම දැලිය සහ තරංග ආයාමය සමඟ න්‍යායිකව නිරීක්ෂණය කළ හැකි උපරිම විවර්තන පෙළ n_max නිර්ණය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Sets maximum physical angle sinθ ≤ 1 => n ≤ d / λ.",
              "si": "උපරිම කෝණය sinθ ≤ 1 බැවින් n ≤ d / λ යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates n_max = floor(2.00 × 10⁻⁶ / 5.90 × 10⁻⁷) = floor(3.39) = 3.",
              "si": "n_max = 3 ලෙස නිවැරදිව ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Since the maximum possible diffraction angle is θ = 90° (sin 90° = 1):\nn_max ≤ d / λ = 2.00 × 10⁻⁶ m / 5.90 × 10⁻⁷ m = 3.39.\nSince the order n must be an integer, the highest observable order is n_max = 3.",
          "si": "උපරිම කෝණය θ = 90° බැවින්: n_max ≤ d / λ = 2.00 × 10⁻⁶ / 5.90 × 10⁻⁷ = 3.39.\nපෙළ පූර්ණ සංඛ්‍යාවක් විය යුතු බැවින් උපරිම පෙළ n_max = 3 වේ."
        }
      }
    ],
    "hint": {
      "en": "Grating spacing d = 1/N. Apply grating equation d sinθ = nλ. The maximum order corresponds to sinθ ≤ 1.",
      "si": "දැලි පරතරය d = 1/N. දැලි සමීකරණය d sinθ = nλ යොදන්න. උපරිම පෙළ සඳහා sinθ ≤ 1 වේ."
    },
    "solution": {
      "en": "d = 2.00 × 10⁻⁶ m. Mean angle θ = 17.16°. Wavelength λ = 590 nm. Maximum order n_max = 3.",
      "si": "දැලි පරතරය d = 2.00 × 10⁻⁶ m. මධ්‍යන්‍ය කෝණය θ = 17.16°. තරංග ආයාමය λ = 590 nm. උපරිම පෙළ n_max = 3."
    }
  },
  {
    "id": "wave-sq07",
    "competencyRef": "Competency 3.8",
    "category": "electromagnetic-spectrum",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "Electromagnetic waves propagate through a vacuum at the speed of light c = 3.00 × 10⁸ m s⁻¹. They consist of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation.",
      "si": "විද්‍යුත් චුම්භක තරංග රික්තයක් තුළින් c = 3.00 × 10⁸ m s⁻¹ ආලෝකයේ ප්‍රවේගයෙන් ප්‍රචාරණය වේ. ඒවා එකිනෙකට හා ප්‍රචාරණ දිශාවට ලම්බකව දෝලනය වන විද්‍යුත් සහ චුම්භක ක්ෂේත්‍ර වලින් සමන්විත වේ."
    },
    "parts": [
      {
        "id": "wave-sq07-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State three universal properties shared by all electromagnetic waves in a vacuum.",
          "si": "රික්තයක් තුළ සියලුම විද්‍යුත් චුම්භක තරංග සතු පොදු ලක්ෂණ තුනක් සඳහන් කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Property 1: All propagate through vacuum at identical speed c = 3.00 × 10⁸ m s⁻¹.",
              "si": "ලක්ෂණය 1: සියල්ල රික්තය තුළ c = 3.00 × 10⁸ m s⁻¹ එකම ප්‍රවේගයෙන් ගමන් කරයි."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Property 2: They are transverse waves (electric and magnetic field vectors oscillate perpendicular to direction of energy transport).",
              "si": "ලක්ෂණය 2: ඒවා තීර්යක් තරංග වේ (විද්‍යුත් හා චුම්භක ක්ෂේත්‍ර ප්‍රචාරණ දිශාවට ලම්බකව දෝලනය වේ)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Property 3: They exhibit reflection, refraction, interference, diffraction, and can be plane-polarized.",
              "si": "ලක්ෂණය 3: ඒවා පරාවර්තනය, වර්තනය, නිරෝධනය, විවර්තනය සහ ධ්‍රැවීකරණය පෙන්වයි."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. All travel through a vacuum at the same universal speed c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ without requiring any material medium.\n2. They are transverse waves capable of being plane-polarized, with mutual perpendicularity between E-field, B-field, and wave vector k.\n3. They transport energy and momentum, exerting radiation pressure on surfaces upon which they fall.",
          "si": "1. මාධ්‍යයක් අවශ්‍ය නොවී සියල්ල රික්තය තුළ c ≈ 3.00 × 10⁸ m s⁻¹ ප්‍රවේගයෙන් ගමන් කරයි.\n2. ඒවා තීර්යක් තරංග වන අතර ධ්‍රැවීකරණය කළ හැක (E සහ B ක්ෂේත්‍ර එකිනෙකට ලම්බක වේ).\n3. ඒවා ශක්තිය හා ගම්‍යතාව සම්ප්‍රේෂණය කරන අතර විකිරණ පීඩනයක් ඇති කරයි."
        }
      },
      {
        "id": "wave-sq07-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Arrange the following electromagnetic bands in order of increasing frequency (lowest to highest): X-rays, Microwaves, Infrared, Ultraviolet, Radio waves.",
          "si": "පහත විද්‍යුත් චුම්භක කලාප සංඛ්‍යාතය වැඩිවන පිළිවෙලට (අඩුම සිට වැඩිම දක්වා) පෙළගස්වන්න: එක්ස්-කිරණ, ක්ෂුද්‍ර තරංග, අධෝරක්ත, පාරජම්බුල, රේඩියෝ තරංග."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Puts Radio waves and Microwaves first: Radio waves < Microwaves < Infrared.",
              "si": "රේඩියෝ තරංග < ක්ෂුද්‍ර තරංග < අධෝරක්ත ලෙස පෙළගැස්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Completes order correctly: Radio waves < Microwaves < Infrared < Ultraviolet < X-rays.",
              "si": "අවසාන පිළිවෙල නිවැරදිව දැක්වීම: රේඩියෝ < ක්ෂුද්‍ර < අධෝරක්ත < පාරජම්බුල < එක්ස්-කිරණ."
            }
          }
        ],
        "modelAnswer": {
          "en": "In order of increasing frequency:\nRadio waves < Microwaves < Infrared < Ultraviolet < X-rays.",
          "si": "සංඛ්‍යාතය වැඩිවන පිළිවෙලට:\nරේඩියෝ තරංග < ක්ෂුද්‍ර තරංග < අධෝරක්ත < පාරජම්බුල < එක්ස්-කිරණ."
        }
      },
      {
        "id": "wave-sq07-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "An FM radio station transmits at a frequency of 102.5 MHz. Calculate the wavelength of these radio waves in a vacuum.",
          "si": "FM ගුවන්විදුලි මධ්‍යස්ථානයක් 102.5 MHz සංඛ්‍යාතයකින් විකාශනය කරයි. රික්තය තුළ මෙම රේඩියෝ තරංගවල තරංග ආයාමය ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Applies c = f · λ => λ = c / f.",
              "si": "c = f · λ => λ = c / f යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates λ = (3.00 × 10⁸ m s⁻¹) / (102.5 × 10⁶ s⁻¹) = 2.93 m.",
              "si": "λ = 2.93 m ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Using the wave relation c = f · λ:\nλ = c / f = (3.00 × 10⁸ m s⁻¹) / (102.5 × 10⁶ s⁻¹) = 2.927 m ≈ 2.93 m.",
          "si": "c = f · λ මඟින්:\nλ = c / f = (3.00 × 10⁸) / (102.5 × 10⁶) = 2.93 m."
        }
      }
    ],
    "hint": {
      "en": "Wave equation c = f λ applies to all EM waves in vacuum. Frequency increases as wavelength decreases.",
      "si": "රික්තය තුළ සියලුම විද්‍යුත් චුම්භක තරංග සඳහා c = f λ යෙදේ. තරංග ආයාමය අඩුවන විට සංඛ්‍යාතය වැඩිවේ."
    },
    "solution": {
      "en": "EM waves are transverse, travel at c, and can be polarized. Order: Radio < Micro < IR < UV < X-ray. Wavelength of 102.5 MHz wave is 2.93 m.",
      "si": "විද්‍යුත් චුම්භක තරංග තීර්යක් වේ, c ප්‍රවේගයෙන් ගමන් කරයි. පිළිවෙල: රේඩියෝ < ක්ෂුද්‍ර < අධෝරක්ත < පාරජම්බුල < එක්ස්-කිරණ. 102.5 MHz තරංග ආයාමය = 2.93 m."
    }
  },
  {
    "id": "wave-sq08",
    "competencyRef": "Competency 3.9",
    "category": "geometrical-optics-prisms",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A glass prism has an equilateral triangular cross-section with refracting angle A = 60.0°. When a ray of monochromatic light passes symmetrically through the prism, it suffers a minimum angle of deviation D_m = 38.6°.",
      "si": "වීදුරු ප්‍රිස්මයක හරස්කඩ සමපාද ත්‍රිකෝණාකාර වන අතර එහි වර්තන කෝණය A = 60.0° වේ. ඒකවර්ණ ආලෝක කිරණයක් ප්‍රිස්මය තුළින් සමමිතිකව ගමන් කරන විට අවම අපගමන කෝණය D_m = 38.6° ක් වේ."
    },
    "parts": [
      {
        "id": "wave-sq08-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "State the two conditions that hold true when a light ray undergoes minimum deviation through a triangular prism.",
          "si": "ත්‍රිකෝණාකාර ප්‍රිස්මයක් තුළින් ආලෝක කිරණයක් අවම අපගමනයට ලක්වන විට සත්‍ය වන කොන්දේසි දෙක සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Condition 1: Angle of incidence equals angle of emergence (i = e).",
              "si": "කොන්දේසිය 1: පතන කෝණය නිර්ගමන කෝණයට සමාන වේ (i = e)."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Condition 2: The refracted ray inside the prism travels parallel to the base (r₁ = r₂ = A/2).",
              "si": "කොන්දේසිය 2: ප්‍රිස්මය තුළ වර්තිත කිරණය පාදයට සමාන්තරව ගමන් කරයි (r₁ = r₂ = A/2)."
            }
          }
        ],
        "modelAnswer": {
          "en": "1. The angle of incidence at the first face is equal to the angle of emergence from the second face (i = e).\n2. The internal angles of refraction at the two faces are equal (r₁ = r₂ = A / 2), meaning the ray passes symmetrically and travels parallel to the prism base for an equilateral or isosceles prism.",
          "si": "1. පළමු මුහුණතේ පතන කෝණය දෙවන මුහුණතෙන් නිර්ගමන කෝණයට සමාන වේ (i = e).\n2. ප්‍රිස්මය තුළ වර්තන කෝණ සමාන වේ (r₁ = r₂ = A / 2), එනම් කිරණය පාදයට සමාන්තරව සමමිතිකව ගමන් කරයි."
        }
      },
      {
        "id": "wave-sq08-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Derive the prism formula relating refractive index n, refracting angle A, and minimum deviation D_m.",
          "si": "වර්තනාංකය n, වර්තන කෝණය A සහ අවම අපගමනය D_m අතර ප්‍රිස්ම සූත්‍රය ගොඩනඟන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Shows r = A / 2 since r₁ = r₂ and r₁ + r₂ = A.",
              "si": "r₁ + r₂ = A සහ r₁ = r₂ බැවින් r = A / 2 බව පෙන්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Shows i = (A + D_m) / 2 from deviation equation D = i + e - A with i = e.",
              "si": "D_m = 2i - A මඟින් i = (A + D_m) / 2 බව පෙන්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies Snell’s law: n = sin(i) / sin(r) = sin((A + D_m)/2) / sin(A/2).",
              "si": "ස්නෙල් නියමය යොදා n = sin((A + D_m)/2) / sin(A/2) ලබා ගැනීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "At minimum deviation: i = e and r₁ = r₂ = r.\nSince r₁ + r₂ = A => 2r = A => r = A / 2.\nTotal deviation D_m = (i - r₁) + (e - r₂) = i + e - (r₁ + r₂) = 2i - A.\nTherefore: i = (A + D_m) / 2.\nBy Snell’s law at the first air-glass interface (n_air = 1):\nn = sin(i) / sin(r) = sin( (A + D_m) / 2 ) / sin( A / 2 ).",
          "si": "අවම අපගමනයේදී: i = e සහ r₁ = r₂ = r.\nr₁ + r₂ = A => r = A / 2.\nD_m = 2i - A => i = (A + D_m) / 2.\nස්නෙල් නියමයෙන්: n = sin(i) / sin(r) = sin((A + D_m)/2) / sin(A/2)."
        }
      },
      {
        "id": "wave-sq08-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the refractive index n of the glass prism for this light.",
          "si": "මෙම ආලෝකය සඳහා වීදුරු ප්‍රිස්මයේ වර්තනාංකය n ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Substitutes A = 60.0° and D_m = 38.6°: i = 49.3° and r = 30.0°.",
              "si": "i = (60.0 + 38.6)/2 = 49.3° සහ r = 30.0° ආදේශ කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates n = sin(49.3°) / sin(30.0°) = 0.7581 / 0.5000 = 1.516 ≈ 1.52.",
              "si": "n = 1.516 (හෝ 1.52) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Numerator angle: (A + D_m) / 2 = (60.0° + 38.6°) / 2 = 98.6° / 2 = 49.3°.\nDenominator angle: A / 2 = 60.0° / 2 = 30.0°.\nn = sin(49.3°) / sin(30.0°) = 0.75813 / 0.5000 = 1.516 ≈ 1.52.",
          "si": "i = (60.0° + 38.6°) / 2 = 49.3°.\nr = 30.0°.\nn = sin(49.3°) / sin(30.0°) = 0.7581 / 0.5000 = 1.52."
        }
      },
      {
        "id": "wave-sq08-d",
        "partLabel": "(d)",
        "prompt": {
          "en": "Calculate the critical angle c for a glass-air interface using n = 1.516.",
          "si": "n = 1.516 යොදාගෙන වීදුරු-වායු අතුරුමුහුණත සඳහා අවධි කෝණය c ගණනය කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States sin(c) = 1 / n.",
              "si": "sin(c) = 1 / n සූත්‍රය ලිවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates sin(c) = 1 / 1.516 = 0.6596 => c = sin⁻¹(0.6596) = 41.3°.",
              "si": "c = 41.3° ලෙස නිවැරදිව ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "Critical angle c is given by:\nsin(c) = 1 / n = 1 / 1.516 = 0.6596\nc = sin⁻¹(0.6596) = 41.27° ≈ 41.3°.",
          "si": "අවධි කෝණය: sin(c) = 1 / n = 1 / 1.516 = 0.6596 => c = 41.3°."
        }
      }
    ],
    "hint": {
      "en": "Prism formula n = sin((A + D_m)/2) / sin(A/2). Critical angle sin(c) = 1/n.",
      "si": "ප්‍රිස්ම සූත්‍රය n = sin((A + D_m)/2) / sin(A/2). අවධි කෝණය sin(c) = 1/n."
    },
    "solution": {
      "en": "At minimum deviation i = 49.3°, r = 30.0°. Refractive index n = 1.516. Critical angle c = 41.3°.",
      "si": "අවම අපගමනයේදී i = 49.3°, r = 30.0°. වර්තනාංකය n = 1.516. අවධි කෝණය c = 41.3°."
    }
  },
  {
    "id": "wave-sq09",
    "competencyRef": "Competency 3.10",
    "category": "human-eye-vision",
    "difficulty": "intermediate",
    "type": "structured",
    "question": {
      "en": "A person with a visual defect cannot focus clearly on objects situated further than 80.0 cm from their eyes. The standard least distance of distinct vision (near point) for a normal eye is D = 25.0 cm.",
      "si": "ඇසේ දෘෂ්ටි දෝෂයක් ඇති පුද්ගලයෙකුට ඇසේ සිට 80.0 cm ට වඩා දුරින් පිහිටි වස්තූන් පැහැදිලිව නාභිගත කරගත නොහැක. සාමාන්‍ය ඇසක පැහැදිලි දෘෂ්ටියේ අවම දුර (ආසන්න ලක්ෂ්‍යය) D = 25.0 cm වේ."
    },
    "parts": [
      {
        "id": "wave-sq09-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Identify this vision defect and state two anatomical or optical causes responsible for it.",
          "si": "මෙම දෘෂ්ටි දෝෂය හඳුනාගෙන, ඒ සඳහා බලපාන ව්‍යුහාත්මක හෝ ප්‍රකාශ හේතු දෙකක් සඳහන් කරන්න."
        },
        "allocatedMarks": 2,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies defect as short-sightedness or myopia.",
              "si": "දෝෂය මයෝපියාව හෝ දුර නොපෙනීම (කෙටි දෘෂ්ටිකතාව) ලෙස හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States two causes: 1. Eyeball is elongated (too long from front to back), 2. Cornea/eye lens has excessive converging power (focal length too short).",
              "si": "හේතු දෙක: 1. අක්ෂි ගෝලය දිගින් වැඩිවීම, 2. අක්ෂි කාචයේ අභිසාරී බලය වැඩිවීම (නාභීය දුර අඩුවීම)."
            }
          }
        ],
        "modelAnswer": {
          "en": "The defect is myopia (short-sightedness).\nTwo physiological/optical causes:\n1. The eyeball is elongated along its optical axis, so the retina is located too far behind the lens.\n2. The refractive power of the cornea and crystalline lens is excessively high (too curved / focal length too short), causing parallel rays from distant objects to converge in front of the retina.",
          "si": "දෝෂය: මයෝපියාව (කෙටි දෘෂ්ටිකතාව).\nහේතු:\n1. අක්ෂි ගෝලය දිගින් වැඩිවීම.\n2. අක්ෂි කාචයේ වක්‍රතාව වැඩිවීම නිසා අභිසාරී බලය වැඩිවීම (නාභීය දුර අඩුවීම) හේතුවෙන් ප්‍රතිබිම්බය දෘෂ්ටිවිතානයට ඉදිරියෙන් සෑදීම."
        }
      },
      {
        "id": "wave-sq09-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "State the type of corrective lens required to restore normal distant vision.",
          "si": "සාමාන්‍ය දුර දෘෂ්ටිය ලබා ගැනීම සඳහා අවශ්‍ය නිවැරදි කිරීමේ කාච වර්ගය දක්වන්න."
        },
        "allocatedMarks": 1,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Specifies concave lens or diverging lens.",
              "si": "අපසාරී කාචයක් (අවතල කාචයක්) බව දැක්වීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "A concave (diverging) spectacle lens is required.",
          "si": "අවතල (අපසාරී) කාචයක් අවශ්‍ය වේ."
        }
      },
      {
        "id": "wave-sq09-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the focal length f and optical power P (in dioptres, D) of the spectacle lens required so that this person can see distant stars clearly.",
          "si": "මෙම පුද්ගලයාට ඈත තරු පැහැදිලිව දැකීම සඳහා අවශ්‍ය උපැස් කාචයේ නාභීය දුර f සහ ප්‍රකාශ බලය P (ඩයොප්ටර්, D වලින්) ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Sets object at infinity (u = -∞) and image at far point (v = -80.0 cm = -0.80 m).",
              "si": "වස්තු දුර u = -∞ සහ ප්‍රතිබිම්බ දුර v = -0.80 m ලෙස හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies thin lens equation: 1/f = 1/v - 1/u => 1/f = -1/0.80 - 0 => f = -0.80 m (-80.0 cm).",
              "si": "කාච සමීකරණය යොදා f = -0.80 m ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates power P = 1 / f = 1 / (-0.80) = -1.25 D.",
              "si": "බලය P = 1 / (-0.80) = -1.25 D ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "To view very distant objects (u = -∞), the diverging lens must form a virtual image of the object at the person’s uncorrected far point (v = -80.0 cm = -0.80 m):\n1 / f = 1 / v - 1 / u = 1 / (-0.80 m) - 1 / (-∞) = -1.25 m⁻¹ - 0\nf = -0.80 m (-80.0 cm).\nOptical power P = 1 / f(in metres) = 1 / (-0.80 m) = -1.25 D (dioptres).",
          "si": "අනන්තයේ ඇති වස්තුවක (u = -∞) අතාත්වික ප්‍රතිබිම්බය දුර ලක්ෂ්‍යයේ (v = -0.80 m) සෑදිය යුතුය:\n1 / f = 1 / v - 1 / u = -1 / 0.80 - 0 => f = -0.80 m.\nකාචයේ බලය P = 1 / f = -1.25 D (ඩයොප්ටර්)."
        }
      }
    ],
    "hint": {
      "en": "In myopia, the far point is at a finite distance. The corrective diverging lens must form an image of an object at infinity at the far point: f = -d_far.",
      "si": "මයෝපියාවේදී දුර ලක්ෂ්‍යය සීමිත දුරක පිහිටයි. අපසාරී කාචය මඟින් අනන්තයේ වස්තුවක ප්‍රතිබිම්බය දුර ලක්ෂ්‍යයේ සෑදිය යුතුය: f = -d_far."
    },
    "solution": {
      "en": "Defect: Myopia. Corrective lens: Concave (diverging). Focal length f = -80.0 cm (-0.80 m). Optical power P = -1.25 D.",
      "si": "දෝෂය: මයෝපියාව. කාචය: අවතල. නාභීය දුර f = -80.0 cm. ප්‍රකාශ බලය P = -1.25 D."
    }
  },
  {
    "id": "wave-sq10",
    "competencyRef": "Competency 3.11",
    "category": "thin-lenses-instruments",
    "difficulty": "advanced",
    "type": "structured",
    "question": {
      "en": "A compound microscope consists of an objective lens of focal length f_o = 1.00 cm and an eyepiece lens of focal length f_e = 5.00 cm separated by a barrel distance of L = 20.0 cm. The instrument is adjusted such that the final image is formed at the standard near point D = 25.0 cm from the eyepiece.",
      "si": "සංයුක්ත අන්වීක්ෂයක f_o = 1.00 cm නාභීය දුරක් සහිත අවනෙතක් සහ f_e = 5.00 cm නාභීය දුරක් සහිත උපනෙතක් ඇත. ඒවා අතර පරතරය L = 20.0 cm වේ. අවසාන ප්‍රතිබිම්බය උපනෙතේ සිට D = 25.0 cm ආසන්න ලක්ෂ්‍යයේ සෑදෙන සේ අන්වීක්ෂය සීරුමාරු කර ඇත."
    },
    "parts": [
      {
        "id": "wave-sq010-a",
        "partLabel": "(a)",
        "prompt": {
          "en": "Calculate the image distance v_e and object distance u_e for the eyepiece lens.",
          "si": "උපනෙත් කාචය සඳහා ප්‍රතිබිම්බ දුර v_e සහ වස්තු දුර u_e ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Identifies virtual image formed at near point: v_e = -25.0 cm.",
              "si": "අතාත්වික ප්‍රතිබිම්බය ආසන්න ලක්ෂ්‍යයේ සෑදෙන බැවින් v_e = -25.0 cm හඳුනා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Applies lens formula 1/f_e = 1/v_e - 1/u_e with f_e = +5.00 cm.",
              "si": "1/f_e = 1/v_e - 1/u_e සමීකරණය යෙදීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates 1/u_e = 1/v_e - 1/f_e = -1/25 - 1/5 = -6/25 => u_e = -4.17 cm (distance = 4.17 cm in front of eyepiece).",
              "si": "u_e = -4.17 cm (දුර 4.17 cm) ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For the eyepiece, the final image is virtual at the near point: v_e = -25.0 cm.\nUsing the lens equation for the eyepiece:\n1 / f_e = 1 / v_e - 1 / u_e => 1 / u_e = 1 / v_e - 1 / f_e\n1 / u_e = -1 / 25.0 - 1 / 5.00 = -1 / 25.0 - 5 / 25.0 = -6 / 25.0 cm⁻¹\nu_e = -25.0 / 6 = -4.17 cm.\nThus, the intermediate real image is located 4.17 cm in front of the eyepiece.",
          "si": "අවසාන ප්‍රතිබිම්බය අතාත්වික බැවින් v_e = -25.0 cm.\n1 / u_e = 1 / v_e - 1 / f_e = -1 / 25 - 1 / 5 = -6 / 25 cm⁻¹.\nu_e = -4.17 cm. එනම් අතරමැදි ප්‍රතිබිම්බය උපනෙතට 4.17 cm ඉදිරියෙන් පිහිටයි."
        }
      },
      {
        "id": "wave-sq10-b",
        "partLabel": "(b)",
        "prompt": {
          "en": "Determine the image distance v_o for the objective lens and calculate its linear magnification m_o.",
          "si": "අවනෙත සඳහා ප්‍රතිබිම්බ දුර v_o නිර්ණය කර, එහි රේඛීය විශාලනය m_o ගණනය කරන්න."
        },
        "allocatedMarks": 3,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "Uses tube length L = v_o + |u_e| => v_o = 20.0 - 4.167 = 15.83 cm.",
              "si": "නළ දිග L = v_o + |u_e| මඟින් v_o = 15.83 cm ලබා ගැනීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Uses objective lens equation 1/u_o = 1/v_o - 1/f_o = 1/15.83 - 1/1.00 => u_o = -1.067 cm.",
              "si": "1/u_o = 1/15.83 - 1/1.00 මඟින් u_o = -1.067 cm සෙවීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates linear magnification m_o = |v_o / u_o| = 15.83 / 1.067 = 14.83.",
              "si": "m_o = |v_o / u_o| = 14.83 ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "The intermediate image lies between objective and eyepiece:\nv_o = L - |u_e| = 20.0 cm - 4.17 cm = 15.83 cm.\nFor the objective lens (f_o = 1.00 cm):\n1 / u_o = 1 / v_o - 1 / f_o = 1 / 15.83 - 1 / 1.00 = 0.06316 - 1.000 = -0.9368 cm⁻¹\nu_o = -1.067 cm.\nLinear magnification of objective: m_o = |v_o / u_o| = 15.83 / 1.067 = 14.83.",
          "si": "v_o = L - |u_e| = 20.0 - 4.17 = 15.83 cm.\n1 / u_o = 1 / 15.83 - 1 / 1.00 => u_o = -1.067 cm.\nඅවනෙතේ විශාලනය: m_o = 15.83 / 1.067 = 14.83."
        }
      },
      {
        "id": "wave-sq10-c",
        "partLabel": "(c)",
        "prompt": {
          "en": "Calculate the angular magnification m_e of the eyepiece and the total magnifying power M of the compound microscope.",
          "si": "උපනෙතේ කෝණික විශාලනය m_e සහ සංයුක්ත අන්වීක්ෂයේ මුළු විශාලන බලය M ගණනය කරන්න."
        },
        "allocatedMarks": 4,
        "rubric": [
          {
            "point": 1,
            "description": {
              "en": "States eyepiece angular magnification formula when image is at near point: m_e = 1 + D / f_e.",
              "si": "ආසන්න ලක්ෂ්‍යයේ ප්‍රතිබිම්බය සෑදෙන විට උපනෙතේ සූත්‍රය m_e = 1 + D / f_e දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Calculates m_e = 1 + (25.0 / 5.00) = 1 + 5.0 = 6.00.",
              "si": "m_e = 1 + 5.0 = 6.00 ගණනය කිරීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "States total magnification formula: M = m_o × m_e.",
              "si": "මුළු විශාලන සූත්‍රය M = m_o × m_e දැක්වීම."
            }
          },
          {
            "point": 1,
            "description": {
              "en": "Computes M = 14.83 × 6.00 = 89.0 (accept 88.8 - 89.2).",
              "si": "M = 89.0 ලෙස ගණනය කිරීම."
            }
          }
        ],
        "modelAnswer": {
          "en": "For an eyepiece forming a virtual image at the least distance of distinct vision D = 25.0 cm:\nm_e = 1 + D / f_e = 1 + 25.0 cm / 5.00 cm = 1 + 5 = 6.00.\nTotal magnifying power of the compound microscope:\nM = m_o × m_e = 14.83 × 6.00 = 89.0 (or ~89×).",
          "si": "ප්‍රතිබිම්බය ආසන්න ලක්ෂ්‍යයේදී: m_e = 1 + D / f_e = 1 + 25 / 5 = 6.00.\nමුළු විශාලන බලය: M = m_o × m_e = 14.83 × 6.00 = 89.0."
        }
      }
    ],
    "hint": {
      "en": "Intermediate image is formed at distance u_e in front of eyepiece. Total magnification M = m_o × m_e where m_e = 1 + D/f_e.",
      "si": "අතරමැදි ප්‍රතිබිම්බය උපනෙතට u_e දුරකින් සෑදේ. මුළු විශාලනය M = m_o × m_e වන අතර m_e = 1 + D/f_e වේ."
    },
    "solution": {
      "en": "Eyepiece object distance u_e = 4.17 cm. Objective image distance v_o = 15.83 cm, magnification m_o = 14.83. Eyepiece magnification m_e = 6.00. Total magnification M = 89.0×.",
      "si": "උපනෙත් වස්තු දුර u_e = 4.17 cm. අවනෙත් ප්‍රතිබිම්බ දුර v_o = 15.83 cm, විශාලනය m_o = 14.83. උපනෙත් විශාලනය m_e = 6.00. මුළු විශාලනය M = 89.0×."
    }
  },
  {
    "id": "wave-q59",
    "competencyRef": "Competency 3.8",
    "category": "electromagnetic-spectrum",
    "difficulty": "foundation",
    "type": "mcq",
    "question": {
      "en": "Which component of the electromagnetic spectrum is most widely utilized in satellite transmissions and terrestrial microwave relay links due to its ability to pass through the ionosphere without being reflected?",
      "si": "අයනගෝලයෙන් පරාවර්තනය නොවී එය විනිවිද යාමේ හැකියාව නිසා චන්ද්‍රිකා සන්නිවේදනය සහ ක්ෂුද්‍ර තරංග සම්ප්‍රේෂණය සඳහා බහුලවම භාවිතා වන විද්‍යුත් චුම්භක තරංග කලාපය කුමක්ද?"
    },
    "options": [
      {
        "id": "A",
        "text": {
          "en": "Microwaves",
          "si": "ක්ෂුද්‍ර තරංග"
        }
      },
      {
        "id": "B",
        "text": {
          "en": "Long radio waves",
          "si": "දිගු රේඩියෝ තරංග"
        }
      },
      {
        "id": "C",
        "text": {
          "en": "Infrared radiation",
          "si": "අධෝරක්ත විකිරණ"
        }
      },
      {
        "id": "D",
        "text": {
          "en": "Ultraviolet rays",
          "si": "පාරජම්බුල කිරණ"
        }
      }
    ],
    "correctOptionId": "A",
    "hint": {
      "en": "High frequency microwaves (GHz range) penetrate the atmosphere without ionospheric reflection.",
      "si": "අයනගෝලයෙන් පරාවර්තනය නොවී වායුගෝලය විනිවිද යාමට ගිගාහර්ට්ස් පරාසයේ ක්ෂුද්‍ර තරංග වලට හැකියාව ඇත."
    },
    "solution": {
      "en": "Microwaves have short wavelengths (frequencies 1 GHz to 300 GHz) that penetrate the ionosphere directly to communications satellites.",
      "si": "ක්ෂුද්‍ර තරංග කෙටි තරංග ආයාම වලින් යුක්ත වන අතර අයනගෝලය විනිවිද යමින් චන්ද්‍රිකා සන්නිවේදනයට යොදා ගැනේ."
    }
  },
  {
    "id": "wave-q60",
    "competencyRef": "Competency 3.8",
    "category": "electromagnetic-spectrum",
    "difficulty": "intermediate",
    "type": "numerical",
    "question": {
      "en": "An infrared thermal camera detects radiation of frequency f = 3.0 × 10¹³ Hz. Taking the speed of light c = 3.0 × 10⁸ m s⁻¹, calculate the wavelength of this radiation in micrometres (μm).",
      "si": "තාප කැමරාවක් මඟින් f = 3.0 × 10¹³ Hz සංඛ්‍යාතයකින් යුත් අධෝරක්ත විකිරණ අනාවරණය කරයි. ආලෝකයේ ප්‍රවේගය c = 3.0 × 10⁸ m s⁻¹ විට, මෙම විකිරණයේ තරංග ආයාමය මයික්‍රෝමීටර් (μm) වලින් ගණනය කරන්න."
    },
    "expected": 10,
    "tolerance": 0.2,
    "unit": {
      "en": "μm",
      "si": "μm"
    },
    "hint": {
      "en": "Apply c = f · λ => λ = c / f, then convert metres to μm (1 μm = 10⁻⁶ m).",
      "si": "c = f · λ => λ = c / f යොදා මීටර් අගය මයික්‍රෝමීටර් (10⁻⁶ m) බවට පරිවර්තනය කරන්න."
    },
    "solution": {
      "en": "λ = c / f = (3.0 × 10⁸) / (3.0 × 10¹³) = 1.0 × 10⁻⁵ m = 10.0 μm.",
      "si": "λ = c / f = (3.0 × 10⁸) / (3.0 × 10¹³) = 1.0 × 10⁻⁵ m = 10.0 μm."
    }
  },
  {
    "id": "wave-q61",
    "competencyRef": "Competency 3.9",
    "category": "geometrical-optics-prisms",
    "difficulty": "foundation",
    "type": "mcq",
    "question": {
      "en": "Under which of the following conditions does total internal reflection occur at the boundary between two optical media?",
      "si": "ප්‍රකාශ මාධ්‍ය දෙකක් අතර අතුරුමුහුණතේදී පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවන්නේ පහත සඳහන් කවර කොන්දේසියක් යටතේද?"
    },
    "options": [
      {
        "id": "A",
        "text": {
          "en": "Light travels from a denser to a rarer medium with angle of incidence greater than the critical angle.",
          "si": "ඝන මාධ්‍යයක සිට විරල මාධ්‍යයකට ගමන් කරන ආලෝකයේ පතන කෝණය අවධි කෝණයට වඩා වැඩි වන විට."
        }
      },
      {
        "id": "B",
        "text": {
          "en": "Light travels from a rarer to a denser medium at any angle of incidence.",
          "si": "විරල මාධ්‍යයක සිට ඝන මාධ්‍යයකට ඕනෑම පතන කෝණයකින් ආලෝකය ගමන් කරන විට."
        }
      },
      {
        "id": "C",
        "text": {
          "en": "Light travels perpendicular to the boundary in either direction.",
          "si": "මාධ්‍ය දෙක අතර අභිලම්භව ආලෝකය ගමන් කරන විට."
        }
      },
      {
        "id": "D",
        "text": {
          "en": "Angle of incidence equals zero in a vacuum.",
          "si": "රික්තයක් තුළදී පතන කෝණය ශුන්‍ය වන විට."
        }
      }
    ],
    "correctOptionId": "A",
    "hint": {
      "en": "The two necessary conditions are: light travels from optically denser to rarer, and incidence angle i > critical angle c.",
      "si": "අවශ්‍ය කොන්දේසි දෙක: ආලෝකය ඝන මාධ්‍යයක සිට විරල මාධ්‍යයකට ගමන් කළ යුතුය, සහ පතන කෝණය i > අවධි කෝණය c විය යුතුය."
    },
    "solution": {
      "en": "Total internal reflection requires the light ray to originate in the denser medium and strike the boundary at an angle exceeding the critical angle: i > c.",
      "si": "පූර්ණ අභ්‍යන්තර පරාවර්තනය සඳහා කිරණය ඝන මාධ්‍යයේ සිට විරල මාධ්‍යයට යා යුතු අතර පතන කෝණය අවධි කෝණයට වඩා විශාල විය යුතුය."
    }
  },
  {
    "id": "wave-q62",
    "competencyRef": "Competency 3.9",
    "category": "geometrical-optics-prisms",
    "difficulty": "intermediate",
    "type": "numerical",
    "question": {
      "en": "A ray of light traveling inside water of refractive index n = 1.333 strikes a water-air boundary. Calculate the critical angle in degrees (to one decimal place).",
      "si": "වර්තනාංකය n = 1.333 වන ජලය තුළින් ගමන් කරන ආලෝක කිරණයක් ජලය-වායු අතුරුමුහුණත මත පතනය වේ. අවධි කෝණය අංශක වලින් (දශමස්ථාන එකකට) ගණනය කරන්න."
    },
    "expected": 48.6,
    "tolerance": 0.3,
    "unit": {
      "en": "°",
      "si": "°"
    },
    "hint": {
      "en": "Apply sin(c) = 1 / n => c = arcsin(1 / 1.333).",
      "si": "sin(c) = 1 / n => c = arcsin(1 / 1.333) යොදන්න."
    },
    "solution": {
      "en": "sin(c) = 1 / 1.333 = 0.7502 => c = arcsin(0.7502) = 48.6° (accept 48.5° - 48.8°).",
      "si": "sin(c) = 1 / 1.333 = 0.7502 => c = 48.6°."
    }
  },
  {
    "id": "wave-q63",
    "competencyRef": "Competency 3.10",
    "category": "human-eye-vision",
    "difficulty": "intermediate",
    "type": "mcq",
    "question": {
      "en": "In hypermetropia (long-sightedness), near objects appear blurred because the focused image of a near object falls:",
      "si": "හයිපර්මෙට්‍රෝපියාවේදී (දුර දෘෂ්ටිකතාව) ආසන්න වස්තූන් බොඳවී පෙනෙන්නේ එම වස්තූන්ගේ නාභිගත ප්‍රතිබිම්බය:"
    },
    "options": [
      {
        "id": "A",
        "text": {
          "en": "Behind the retina, and it is corrected by a converging (convex) lens.",
          "si": "දෘෂ්ටිවිතානයට පිටුපසින් සෑදෙන බැවිනි, එය අභිසාරී (උත්තල) කාචයකින් නිවැරදි කරයි."
        }
      },
      {
        "id": "B",
        "text": {
          "en": "In front of the retina, and it is corrected by a diverging (concave) lens.",
          "si": "දෘෂ්ටිවිතානයට ඉදිරියෙන් සෑදෙන බැවිනි, එය අපසාරී (අවතල) කාචයකින් නිවැරදි කරයි."
        }
      },
      {
        "id": "C",
        "text": {
          "en": "Directly on the blind spot of the retina.",
          "si": "දෘෂ්ටිවිතානයේ අන්ධ ලක්ෂ්‍යය මත සෑදෙන බැවිනි."
        }
      },
      {
        "id": "D",
        "text": {
          "en": "Inside the cornea due to irregular curvature.",
          "si": "අක්‍රමවත් වක්‍රතාව නිසා කණිනිකාව තුළ සෑදෙන බැවිනි."
        }
      }
    ],
    "correctOptionId": "A",
    "hint": {
      "en": "The eye has insufficient converging power, so rays meet behind the retina. A convex lens provides additional convergence.",
      "si": "ඇසේ අභිසාරී බලය ප්‍රමාණවත් නොවන බැවින් කිරණ හමුවන්නේ දෘෂ්ටිවිතානයට පිටුපසිනි. උත්තල කාචයක් අතිරේක අභිසාරීතාව සපයයි."
    },
    "solution": {
      "en": "In hypermetropia, rays from close objects converge behind the retina. A converging (convex) lens is prescribed to converge light before entering the eye.",
      "si": "හයිපර්මෙට්‍රෝපියාවේදී ආසන්න වස්තූන්ගේ කිරණ දෘෂ්ටිවිතානයට පිටුපසින් නාභිගත වේ. මෙය නිවැරදි කිරීමට උත්තල කාචයක් යොදා ගනී."
    }
  },
  {
    "id": "wave-q64",
    "competencyRef": "Competency 3.11",
    "category": "thin-lenses-instruments",
    "difficulty": "intermediate",
    "type": "numerical",
    "question": {
      "en": "An astronomical telescope in normal adjustment consists of an objective lens of focal length f_o = 120 cm and an eyepiece lens of focal length f_e = 6.0 cm. Calculate the angular magnification (magnifying power) M of the telescope.",
      "si": "සාමාන්‍ය සීරුමාරුවේ පවතින තාරකා විද්‍යාත්මක දුරදක්නයක අවනෙතෙහි නාභීය දුර f_o = 120 cm වන අතර උපනෙතෙහි නාභීය දුර f_e = 6.0 cm වේ. දුරදක්නයේ කෝණික විශාලනය (විශාලන බලය) M ගණනය කරන්න."
    },
    "expected": 20,
    "tolerance": 0.1,
    "hint": {
      "en": "In normal adjustment (final image at infinity), the angular magnification is given by M = f_o / f_e.",
      "si": "සාමාන්‍ය සීරුමාරුවේදී (අවසාන ප්‍රතිබිම්බය අනන්තයේදී) කෝණික විශාලනය M = f_o / f_e වේ."
    },
    "solution": {
      "en": "M = f_o / f_e = 120 cm / 6.0 cm = 20.0.",
      "si": "M = f_o / f_e = 120 cm / 6.0 cm = 20.0."
    }
  },
];
