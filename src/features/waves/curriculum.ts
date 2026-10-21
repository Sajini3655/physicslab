import { LessonDefinition } from '@/shared/curriculum/types';

export const WAVES_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 3.1: Simple Harmonic Motion (SHM)
  // -------------------------------------------------------------------------
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
      en: 'Kinematic equation a = -ω²x, displacement, velocity, acceleration phase relationships, simple pendulum, helical springs, and conservation of mechanical energy.',
      si: 'චාලක සමීකරණය a = -ω²x, විස්ථාපනය, ප්‍රවේගය, ත්වරණය අතර කලා සම්බන්ධතා, සරල පැද්දුම, හෙලික්සීය දුනු සහ යාන්ත්‍රික ශක්ති සංස්ථිතිය.',
    },
    learningObjectives: [
      {
        en: 'Define simple harmonic motion using the restoring acceleration condition a = -ω²x.',
        si: 'a = -ω²x ප්‍රත්‍යානයන ත්වරණ කොන්දේසිය ඇසුරින් සරල අනුවර්තී චලිතය අර්ථ දැක්වීම.',
      },
      {
        en: 'Calculate periodic time, maximum speed, and energy transformations for pendulums and oscillating springs.',
        si: 'පැද්දුම් සහ දෝලනය වන දුනු පද්ධතිවල ආවර්ත කාලය, උපරිම ප්‍රවේගය සහ ශක්ති පරිවර්තන ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Definition and characteristic equation of SHM (a = -ω²x)', si: 'SHM අර්ථ දැක්වීම සහ ලාක්ෂණික සමීකරණය (a = -ω²x)' },
      { en: 'Kinematic relationships: x(t), v(t), and a(t) phasor diagrams', si: 'චාලක සම්බන්ධතා: x(t), v(t), සහ a(t) කලා සටහන්' },
      { en: 'Total mechanical energy in SHM: kinetic and potential interchange', si: 'SHM හි මුළු යාන්ත්‍රික ශක්තිය: චාලක හා විභව ශක්ති හුවමාරුව' },
      { en: 'Simple pendulum and loaded helical spring period derivations', si: 'සරල පැද්දුම සහ හෙලික්සීය දුන්නෙහි ආවර්ත කාල සමීකරණ' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Simple Harmonic Motion (SHM) is the fundamental oscillatory model in physics. Any system experiencing a linear restoring force proportional to displacement executes SHM, forming the theoretical basis of mechanical vibrations, acoustic resonators, and electromagnetic wave transmitters.',
        si: 'සරල අනුවර්තී චලිතය (SHM) භෞතික විද්‍යාවේ මූලික දෝලන ආකෘතියයි. විස්ථාපනයට සමානුපාතික රේඛීය ප්‍රත්‍යානයන බලයක් ක්‍රියාකරන ඕනෑම පද්ධතියක් SHM හි යෙදෙන අතර, එය යාන්ත්‍රික කම්පන, ධ්වනි අනුනාදක සහ විද්‍යුත් චුම්භක තරංගවල පදනම වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Defining Equation of SHM', si: 'SHM අර්ථ දක්වන සමීකරණය' },
          description: {
            en: 'An oscillation is simple harmonic if its acceleration is directly proportional to displacement from equilibrium and always directed towards equilibrium: a = -ω² x.',
            si: 'අංශුවක ත්වරණය සමතුලිත පිහිටුමේ සිට විස්ථාපනයට අනුලෝමව සමානුපාතික වන අතර නිරන්තරයෙන් සමතුලිත පිහිටුම දෙසට යොමුව පවතී නම් එය සරල අනුවර්තී වේ: a = -ω² x.',
          },
          formula: 'a = -ω² x',
        },
        {
          title: { en: 'Energy Conservation in SHM', si: 'SHM හි ශක්ති සංස්ථිතිය' },
          description: {
            en: 'Total mechanical energy is constant: E = KE + PE = 1/2 m ω² (A² - x²) + 1/2 m ω² x² = 1/2 m ω² A².',
            si: 'මුළු යාන්ත්‍රික ශක්තිය නියතයකි: E = KE + PE = 1/2 m ω² A².',
          },
          formula: 'E = 1/2 m ω² A²',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing velocity and acceleration are maximum at the same instant.',
            si: 'ප්‍රවේගය සහ ත්වරණය එකම මොහොතේ උපරිම වෙතැයි සිතීම.',
          },
          clarification: {
            en: 'Velocity is maximum at the mean equilibrium position (x = 0), where acceleration is zero. Acceleration is maximum at extreme displacements (x = ±A), where velocity is instantaneously zero.',
            si: 'ප්‍රවේගය උපරිම වන්නේ මධ්‍යස්ථ ලක්ෂ්‍යයේදී (x = 0) වන අතර එහිදී ත්වරණය ශුන්‍ය වේ. ත්වරණය උපරිම වන්නේ අන්ත ලක්ෂ්‍යවලදී (x = ±A) වන අතර එහිදී ප්‍රවේගය ශුන්‍ය වේ.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-1-1',
          question: {
            en: 'A particle executes SHM with period 2.0 s and amplitude 0.05 m. Calculate its maximum acceleration in m/s².',
            si: 'ආවර්ත කාලය 2.0 s සහ විස්තාරය 0.05 m වූ අංශුවක් SHM හි යෙදේ. එහි උපරිම ත්වරණය m/s² වලින් ගණනය කරන්න.',
          },
          options: [
            { id: 'A', text: { en: '0.493 m/s²', si: '0.493 m/s²' } },
            { id: 'B', text: { en: '0.157 m/s²', si: '0.157 m/s²' } },
            { id: 'C', text: { en: '1.25 m/s²', si: '1.25 m/s²' } },
            { id: 'D', text: { en: '0.050 m/s²', si: '0.050 m/s²' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'ω = 2π / T = π rad/s. Maximum acceleration a_max = ω² · A.',
            si: 'ω = 2π / T = π rad/s. උපරිම ත්වරණය a_max = ω² · A.',
          },
          answer: {
            en: 'ω = 2π / 2.0 = π rad/s. a_max = π² · 0.05 = 9.8696 · 0.05 = 0.493 m/s².',
            si: 'a_max = π² · 0.05 = 0.493 m/s².',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.2: Wave Motion & Superposition (Interactive Simulation)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-2',
    slug: 'wave-motion-and-propagation',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 2,
    syllabusRef: 'Competency 3.2',
    title: {
      en: 'Wave Motion, Superposition & Stationary Waves',
      si: 'තරංග චලිතය, අධිස්ථාපනය සහ ස්ථාවර තරංග',
    },
    summary: {
      en: 'Progressive mechanical waves, wave speed formula v = fλ, phase differences, principle of superposition, standing waves formation with nodes and antinodes, and acoustic beats.',
      si: 'ප්‍රගමන යාන්ත්‍රික තරංග, v = fλ සූත්‍රය, කලා වෙනස, අධිස්ථාපන මූලධර්මය, නිශ්පන්ද-ප්‍රස්පන්ද සහිත ස්ථාවර තරංග සහ ස්පන්ද (Beats).',
    },
    learningObjectives: [
      {
        en: 'Distinguish between progressive energy-transferring waves and standing stationary waves.',
        si: 'ශක්තිය ගෙනයන ප්‍රගමන තරංග සහ ස්ථාවර තරංග අතර වෙනස හඳුනා ගැනීම.',
      },
      {
        en: 'Apply the principle of superposition to demonstrate standing wave formation and beat frequencies.',
        si: 'අධිස්ථාපන මූලධර්මය යොදා ස්ථාවර තරංග සහ ස්පන්ද සංඛ්‍යාත විශ්ලේෂණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Transverse versus longitudinal progressive waves', si: 'තීර්යක් සහ අන්වායාම ප්‍රගමන තරංග' },
      { en: 'Wave equation y = A sin(kx - ωt) and phase relationships', si: 'තරංග සමීකරණය y = A sin(kx - ωt) සහ කලා සම්බන්ධතා' },
      { en: 'Superposition of two opposing waves: stationary waves', si: 'ප්‍රතිවිරුද්ධ තරංග දෙකක අධිස්ථාපනයෙන් ස්ථාවර තරංග සෑදීම' },
      { en: 'Nodes, antinodes, and beat frequency f_beat = |f₁ - f₂|', si: 'නිශ්පන්ද, ප්‍රස්පන්ද සහ ස්පන්ද සංඛ්‍යාතය f_beat = |f₁ - f₂|' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'wave-superposition',
    content: {
      introduction: {
        en: 'When two progressive waves of equal frequency and amplitude travel in opposite directions through a medium, their linear superposition produces a stationary (standing) wave. Energy does not travel along the medium; instead, energy oscillates between kinetic and potential forms confined within stationary nodes.',
        si: 'සමාන විස්තාර සහ සංඛ්‍යාත සහිත ප්‍රගමන තරංග දෙකක් ප්‍රතිවිරුද්ධ දිශාවලට ගමන් කරන විට ඒවා අධිස්ථාපනය වී ස්ථාවර තරංගයක් සාදයි. මෙහිදී ශක්තිය ප්‍රචාරණය නොවන අතර නිශ්පන්ද අතර ශක්තිය දෝලනය වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Principle of Superposition', si: 'අධිස්ථාපන මූලධර්මය' },
          description: {
            en: 'When two or more waves overlap, the resultant displacement at any point is the vector sum of individual displacements: y = y₁ + y₂.',
            si: 'තරංග දෙකක් හෝ වැඩි ගණනක් එකිනෙක මතින් ගමන් කරන විට යම් ලක්ෂ්‍යයක සම්ප්‍රයුක්ත විස්ථාපනය යනු තනි තනි තරංග මගින් ඇතිකරන විස්ථාපනවල දෛශික එකතුවයි: y = y₁ + y₂.',
          },
          formula: 'y(x, t) = y₁(x, t) + y₂(x, t)',
        },
        {
          title: { en: 'Standing Wave Equation', si: 'ස්ථාවර තරංග සමීකරණය' },
          description: {
            en: 'Superposing y₁ = A sin(kx - ωt) and y₂ = A sin(kx + ωt) yields y = [2A sin(kx)] cos(ωt). Amplitude is modulated spatially by sin(kx), forming nodes where sin(kx) = 0.',
            si: 'y₁ = A sin(kx - ωt) සහ y₂ = A sin(kx + ωt) එකතු කළ විට y = [2A sin(kx)] cos(ωt) ලැබේ. sin(kx) = 0 වන තැන්වල නිශ්පන්ද හටගනී.',
          },
          formula: 'y = 2A sin(kx) cos(ωt)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thinking that particles at nodes are vibrating slowly.',
            si: 'නිශ්පන්දවල ඇති අංශු සෙමෙන් කම්පනය වන බව සිතීම.',
          },
          clarification: {
            en: 'In an ideal standing wave, particles at true displacement nodes are permanently at rest with zero displacement and zero velocity at all times.',
            si: 'ස්ථාවර තරංගයක නිශ්පන්දවල ඇති අංශු කිසිවිටෙකත් චලනය නොවන අතර සදාකාලිකවම නිශ්චලව පවතී.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-2-1',
          question: {
            en: 'In a standing wave on a string, the distance between two consecutive nodes is 25 cm. What is the wavelength of the waves?',
            si: 'තන්තුවක ස්ථාවර තරංගයක යාබද නිශ්පන්ද දෙකක් අතර පරතරය 25 cm වේ. තරංගවල තරංග ආයාමය කොපමණද?',
          },
          options: [
            { id: 'A', text: { en: '50 cm', si: '50 cm' } },
            { id: 'B', text: { en: '25 cm', si: '25 cm' } },
            { id: 'C', text: { en: '12.5 cm', si: '12.5 cm' } },
            { id: 'D', text: { en: '100 cm', si: '100 cm' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'Distance between adjacent nodes is equal to half a wavelength: λ / 2.',
            si: 'යාබද නිශ්පන්ද දෙකක් අතර දුර තරංග ආයාමයෙන් අඩක් (λ / 2) වේ.',
          },
          answer: {
            en: 'λ / 2 = 25 cm  ⟹  λ = 50 cm.',
            si: 'λ = 2 · 25 = 50 cm.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.3: Sound Waves, Resonance & Doppler Effect
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-3',
    slug: 'sound-waves-and-resonance',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 3,
    syllabusRef: 'Competency 3.3',
    title: {
      en: 'Sound Waves, Intensity & Doppler Effect',
      si: 'ධ්වනි තරංග, තීව්‍රතාව සහ ඩොප්ලර් ආචරණය',
    },
    summary: {
      en: 'Speed of sound in gases, temperature dependence v ∝ √T, sound intensity and decibels, human ear response, and the Doppler frequency shift for moving sources and observers.',
      si: 'වායු තුළ ධ්වනි ප්‍රවේගය, උෂ්ණත්වය මත රඳා පැවැත්ම v ∝ √T, ධ්වනි තීව්‍රතාව සහ ඩෙසිබල් (dB), මිනිස් කනෙහි සංවේදීතාව සහ ඩොප්ලර් ආචරණය.',
    },
    learningObjectives: [
      {
        en: 'Calculate speed of sound across varying temperatures and compute decibel levels.',
        si: 'විවිධ උෂ්ණත්වවලදී ධ්වනි ප්‍රවේගය සහ ඩෙසිබල් තීව්‍රතා මට්ටම් ගණනය කිරීම.',
      },
      {
        en: 'Determine apparent frequencies when a sound source or observer moves relative to the medium.',
        si: 'ප්‍රභවය හෝ නිරීක්ෂකයා මාධ්‍යයට සාපේක්ෂව චලනය වන විට ඇසෙන සංඛ්‍යාතය ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Newton-Laplace formula for sound speed in gases (v = √(γRT / M))', si: 'වායුවල ධ්වනි ප්‍රවේගය සඳහා නිව්ටන්-ලාප්ලාස් සූත්‍රය (v = √(γRT / M))' },
      { en: 'Sound intensity level in decibels β = 10 log₁₀(I / I₀)', si: 'ඩෙසිබල් මට්ටම β = 10 log₁₀(I / I₀)' },
      { en: 'Doppler frequency equation for moving source and moving observer', si: 'චලනය වන ප්‍රභව සහ නිරීක්ෂක සඳහා ඩොප්ලර් සංඛ්‍යාත සමීකරණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Sound travels as a longitudinal mechanical pressure wave. Its propagation speed depends on the adiabatic bulk elasticity and density of the medium. Relative motion between the source and listener produces the Doppler frequency shift, fundamental to radar speed detection and astrophysics.',
        si: 'ධ්වනිය අන්වායාම පීඩන තරංගයක් ලෙස ගමන් කරයි. එහි ප්‍රවේගය මාධ්‍යයේ ප්‍රත්‍යාස්ථතාව සහ ඝනත්වය මත රඳා පවතී. ප්‍රභවය සහ නිරීක්ෂකයා අතර සාපේක්ෂ චලිතයේදී ඩොප්ලර් ආචරණය හටගනී.',
      },
      keyConcepts: [
        {
          title: { en: 'Doppler Shift Formula', si: 'ඩොප්ලර් ආචරණ සූත්‍රය' },
          description: {
            en: 'Observed frequency f\' = f · [(v ± v_o) / (v ∓ v_s)], where upper signs correspond to approaching motion.',
            si: 'නිරීක්ෂිත සංඛ්‍යාතය f\' = f · [(v ± v_o) / (v ∓ v_s)], මෙහි ඉහළ ලකුණු ළඟාවීම නියෝජනය කරයි.',
          },
          formula: "f' = f · (v ± v_o) / (v ∓ v_s)",
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing the speed of sound increases when a moving car accelerates toward you.',
            si: 'චලනය වන මෝටර් රථයක් ඔබ දෙසට වේගයෙන් එන විට ධ්වනි ප්‍රවේගය වැඩි වෙතැයි සිතීම.',
          },
          clarification: {
            en: 'The speed of sound in air is determined exclusively by the properties of the air (temperature, humidity, molar mass), NOT by the motion of the emitting source.',
            si: 'වාතයේ ධ්වනි ප්‍රවේගය තීරණය වන්නේ වාතයේ ලක්ෂණ (උෂ්ණත්වය ආදිය) මත පමණි; එය ප්‍රභවයේ චලිතය මත රඳා නොපවතී.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-3-1',
          question: {
            en: 'A source of 500 Hz moves at 34 m/s towards a stationary observer. If the speed of sound is 340 m/s, what frequency is heard?',
            si: '500 Hz ප්‍රභවයක් නිශ්චල නිරීක්ෂකයෙකු දෙසට 34 m/s වේගයෙන් චලනය වේ. ධ්වනි ප්‍රවේගය 340 m/s නම් ඇසෙන සංඛ්‍යාතය කුමක්ද?',
          },
          options: [
            { id: 'A', text: { en: '556 Hz', si: '556 Hz' } },
            { id: 'B', text: { en: '450 Hz', si: '450 Hz' } },
            { id: 'C', text: { en: '500 Hz', si: '500 Hz' } },
            { id: 'D', text: { en: '600 Hz', si: '600 Hz' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: "f' = f · [v / (v - v_s)].",
            si: "f' = f · [v / (v - v_s)].",
          },
          answer: {
            en: "f' = 500 · [340 / (340 - 34)] = 500 · (340 / 306) = 555.6 Hz ≈ 556 Hz.",
            si: "f' = 500 · (340 / 306) = 556 Hz.",
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.4: Stationary Waves in Strings & Pipes
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-4',
    slug: 'stationary-waves-strings-pipes',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 4,
    syllabusRef: 'Competency 3.4',
    title: {
      en: 'Stationary Waves: Strings and Organ Pipes',
      si: 'ස්ථාවර තරංග: තන්තු සහ නළ තුළ කම්පන',
    },
    summary: {
      en: 'Transverse standing waves on stretched strings, Mersenne’s laws of sonometer, longitudinal standing waves in closed and open air columns, harmonics, and end corrections.',
      si: 'ආතත තන්තුවල තීර්යක් ස්ථාවර තරංග, තන්තුමාන නියම, සංවෘත හා විවෘත නළ තුළ අන්වායාම ස්ථාවර තරංග, උපරිටු සහ අන්ත ශෝධනය.',
    },
    learningObjectives: [
      {
        en: 'Derive fundamental and harmonic frequencies for stretched strings, closed pipes, and open pipes.',
        si: 'ආතත තන්තු, සංවෘත නළ සහ විවෘත නළවල මූලික හා උපරිටු සංඛ්‍යාත ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Apply end corrections to explain resonance tube acoustic physics.',
        si: 'අනුනාද නළ පරීක්ෂණයේදී අන්ත ශෝධනය යොදා ගණනය කිරීම් සිදුකිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Vibrations of stretched strings (f = (1/2L) √(T/μ))', si: 'ආතත තන්තුවල කම්පන (f = (1/2L) √(T/μ))' },
      { en: 'Closed organ pipe: odd harmonics f, 3f, 5f...', si: 'සංවෘත නළය: ඔත්තේ උපරිටු f, 3f, 5f...' },
      { en: 'Open organ pipe: all harmonics f, 2f, 3f, 4f...', si: 'විවෘත නළය: සියලු උපරිටු f, 2f, 3f, 4f...' },
      { en: 'Acoustic end correction at tube open ends (e ≈ 0.3 d)', si: 'විවෘත කෙළවරේ අන්ත ශෝධනය (e ≈ 0.3 d)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Musical acoustics depends on boundary conditions. A fixed end reflects waves with a 180° phase inversion creating a displacement node, while an open end allows unrestricted oscillation creating an antinode. These boundary constraints select discrete resonant frequencies called harmonics.',
        si: 'සංගීත භාණ්ඩ ක්‍රියා කරන්නේ සීමාකාරී කොන්දේසි මතයි. සවි කළ කෙළවරකදී නිශ්පන්දයක් ද, විවෘත කෙළවරකදී ප්‍රස්පන්දයක් ද සෑදේ. මෙමගින් නියත සංඛ්‍යාත සහිත උපරිටු තෝරා ගනු ලැබේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Stretched String Fundamental', si: 'ආතත තන්තුවේ මූලික සංඛ්‍යාතය' },
          description: {
            en: 'For string of length L, tension T, and linear density μ: f = (1 / 2L) √(T / μ).',
            si: 'L දිග, T ආතතිය සහ μ ඒකක දිගක ස්කන්ධය සහිත තන්තුවක: f = (1 / 2L) √(T / μ).',
          },
          formula: 'f = (1 / 2L) · √(T / μ)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Assuming a closed organ pipe can produce even harmonics (like 2f or 4f).',
            si: 'සංවෘත නළයක ඉරට්ටේ උපරිටු (2f හෝ 4f) ඇතිවිය හැකි යැයි සිතීම.',
          },
          clarification: {
            en: 'Because a closed pipe requires a node at the closed base and an antinode at the open top, it can only support odd quarter-wavelength modes (λ/4, 3λ/4, 5λ/4), yielding only odd harmonics: f, 3f, 5f...',
            si: 'සංවෘත කෙළවර නිශ්පන්දයක් ද විවෘත කෙළවර ප්‍රස්පන්දයක් ද විය යුතු බැවින් එහි හටගන්නේ ඔත්තේ උපරිටු (f, 3f, 5f...) පමණි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-4-1',
          question: {
            en: 'A closed pipe and an open pipe have the same length. What is the ratio of their fundamental frequencies (f_closed / f_open)?',
            si: 'සංවෘත නළයක සහ විවෘත නළයක දිග සමාන වේ. ඒවායේ මූලික සංඛ්‍යාතවල අනුපාතය (f_සංවෘත / f_විවෘත) කුමක්ද?',
          },
          options: [
            { id: 'A', text: { en: '1 : 2', si: '1 : 2' } },
            { id: 'B', text: { en: '2 : 1', si: '2 : 1' } },
            { id: 'C', text: { en: '1 : 4', si: '1 : 4' } },
            { id: 'D', text: { en: '1 : 1', si: '1 : 1' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'f_closed = v / 4L and f_open = v / 2L.',
            si: 'f_සංවෘත = v / 4L සහ f_විවෘත = v / 2L.',
          },
          answer: {
            en: 'f_closed / f_open = (v / 4L) / (v / 2L) = 2 / 4 = 1 / 2.',
            si: 'f_සංවෘත / f_විවෘත = 1/2.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.5: Geometrical Optics & Prisms
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-5',
    slug: 'geometrical-optics-reflection-refraction',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 5,
    syllabusRef: 'Competency 3.5',
    title: {
      en: 'Geometrical Optics: Refraction, TIR & Prisms',
      si: 'ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව: වර්තනය, TIR සහ ප්‍රිස්ම',
    },
    summary: {
      en: 'Snell’s law of refraction, total internal reflection, critical angle, optical fibers, real and apparent depth, refraction through prisms, and the angle of minimum deviation.',
      si: 'ස්නෙල්ගේ නියමය, පූර්ණ අභ්‍යන්තර පරාවර්තනය, අවධි කෝණය, ප්‍රකාශ තන්තු, සත්‍ය හා දෘශ්‍ය ගැඹුර, ප්‍රිස්ම හරහා වර්තනය සහ අවම අපගමන කෝණය.',
    },
    learningObjectives: [
      {
        en: 'Apply Snell’s law to calculate critical angles and solve total internal reflection boundary problems.',
        si: 'ස්නෙල්ගේ නියමය මගින් අවධි කෝණය සෙවීම සහ පූර්ණ අභ්‍යන්තර පරාවර්තන ගැටලු විසඳීම.',
      },
      {
        en: 'Determine prism refractive index from the angle of minimum deviation: n = sin((A + Dm)/2) / sin(A/2).',
        si: 'අවම අපගමන කෝණය ඇසුරින් ප්‍රිස්මයේ වර්තනාංකය සෙවීම: n = sin((A + Dm)/2) / sin(A/2).',
      },
    ],
    topicOutline: [
      { en: 'Snell’s law: n₁ sin θ₁ = n₂ sin θ₂ and refractive index', si: 'ස්නෙල්ගේ නියමය: n₁ sin θ₁ = n₂ sin θ₂ සහ වර්තනාංකය' },
      { en: 'Total internal reflection, critical angle sin c = 1/n, and fiber optics', si: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය, අවධි කෝණය sin c = 1/n, සහ ප්‍රකාශ තන්තු' },
      { en: 'Prism refraction and minimum deviation formula', si: 'ප්‍රිස්ම වර්තනය සහ අවම අපගමන සූත්‍රය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Geometrical optics treats light propagation using rays perpendicular to wave fronts. When light passes across a boundary between media of different optical densities, it bends according to Snell’s law. At angles beyond the critical angle in an optically denser medium, total internal reflection traps the light completely.',
        si: 'ජ්‍යාමිතික ප්‍රකාශ විද්‍යාවේදී ආලෝකය කිරණ ලෙස සලකනු ලැබේ. විවිධ ප්‍රකාශ ඝනත්වයන් සහිත මාධ්‍ය දෙකක් අතර අතුරුමුහුණතේදී ආලෝකය වර්තනය වේ. අවධි කෝණයට වඩා වැඩි පතන කෝණවලදී පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Prism Refractive Index Formula', si: 'ප්‍රිස්මයේ වර්තනාංක සූත්‍රය' },
          description: {
            en: 'At the symmetric minimum deviation condition: n = sin((A + Dm) / 2) / sin(A / 2).',
            si: 'අවම අපගමන කොන්දේසියේදී: n = sin((A + Dm) / 2) / sin(A / 2).',
          },
          formula: 'n = sin((A + D_m)/2) / sin(A/2)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thinking total internal reflection can happen when light goes from air into water.',
            si: 'ආලෝකය වාතයේ සිට ජලයට යනවිට පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවිය හැකි යැයි සිතීම.',
          },
          clarification: {
            en: 'Total internal reflection requires light to travel from an optically denser medium towards a rarer medium (n₁ > n₂) at an angle greater than the critical angle.',
            si: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවන්නේ ආලෝකය ඝන මාධ්‍යයක සිට විරල මාධ්‍යයකට (n₁ > n₂) ගමන් කරන විට පමණි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-5-1',
          question: {
            en: 'If the critical angle for a glass-air interface is 42°, what is the refractive index of the glass?',
            si: 'වීදුරු-වායු අතුරුමුහුණතක අවධි කෝණය 42° නම් වීදුරුවේ වර්තනාංකය කොපමණද? (sin 42° = 0.669)',
          },
          options: [
            { id: 'A', text: { en: '1.49', si: '1.49' } },
            { id: 'B', text: { en: '1.33', si: '1.33' } },
            { id: 'C', text: { en: '1.67', si: '1.67' } },
            { id: 'D', text: { en: '1.55', si: '1.55' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'sin c = 1 / n  ⟹  n = 1 / sin c.',
            si: 'n = 1 / sin c.',
          },
          answer: {
            en: 'n = 1 / sin(42°) = 1 / 0.669 = 1.494 ≈ 1.49.',
            si: 'n = 1 / 0.669 = 1.49.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.6: Thin Lenses & Optical Instruments
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-6',
    slug: 'thin-lenses-and-optical-instruments',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 6,
    syllabusRef: 'Competency 3.6',
    title: {
      en: 'Thin Lenses and Optical Instruments',
      si: 'තුනී කාච සහ ප්‍රකාශ උපකරණ',
    },
    summary: {
      en: 'Thin lens formula 1/v - 1/u = 1/f with Cartesian sign convention, displacement method f = (D² - d²)/(4D), combinations of lenses, compound microscope, and astronomical telescope.',
      si: 'කාටීසීය ලකුණු සම්මුතිය සහිත තුනී කාච සූත්‍රය 1/v - 1/u = 1/f, විස්ථාපන ක්‍රමය f = (D² - d²)/(4D), කාච සංයෝජන, සංයුක්ත අන්වීක්ෂය සහ තාරකා විද්‍යා දුරේක්ෂය.',
    },
    learningObjectives: [
      {
        en: 'Solve image location, nature, and magnification using the thin lens formula and Cartesian signs.',
        si: 'තුනී කාච සූත්‍රය මගින් ප්‍රතිබිම්බ පිහිටුම, ස්වභාවය සහ විශාලනය සෙවීම.',
      },
      {
        en: 'Explain optical bench conjugate foci displacement method and calculate magnifying power of microscopes and telescopes.',
        si: 'ප්‍රකාශ බංකු විස්ථාපන ක්‍රමය පැහැදිලි කිරීම සහ අන්වීක්ෂ හා දුරේක්ෂවල විශාලන බලය ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Thin lens equation and real/virtual image formation', si: 'තුනී කාච සමීකරණය සහ තාත්වික/අතාත්වික ප්‍රතිබිම්බ' },
      { en: 'Displacement method: f = (D² - d²) / 4D', si: 'විස්ථාපන ක්‍රමය: f = (D² - d²) / 4D' },
      { en: 'Compound microscope ray geometry and magnification', si: 'සංයුක්ත අන්වීක්ෂයේ කිරණ සටහන් සහ විශාලනය' },
      { en: 'Astronomical telescope in normal adjustment (M = f_o / f_e)', si: 'සාමාන්‍ය සීරුමාරුවේ තාරකා දුරේක්ෂය (M = f_o / f_e)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Refraction through curved transparent surfaces allows converging and diverging wavefront manipulation. Understanding thin lenses enables the design of correcting eyeglasses, high-magnification compound microscopes for cellular biology, and astronomical telescopes for astrophysics.',
        si: 'වක්‍ර පෘෂ්ඨ හරහා වර්තනය වීමෙන් ආලෝක කිරණ අභිසාරී හෝ අපසාරී කළ හැක. තුනී කාච පිළිබඳ අවබෝධය ඇස් කණ්ණාඩි, සංයුක්ත අන්වීක්ෂ සහ තාරකා දුරේක්ෂ නිර්මාණය කිරීමට මඟ පාදයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Displacement Method Formula', si: 'විස්ථාපන ක්‍රම සූත්‍රය' },
          description: {
            en: 'For screen distance D > 4f and lens displacement d: f = (D² - d²) / (4D). This method eliminates lens upright zero-index error completely.',
            si: 'තිර දුර D > 4f සහ කාච විස්ථාපනය d වූ විට: f = (D² - d²) / (4D). මෙහිදී කාච රඳවනයේ ශුන්‍ය දෝෂය සම්පූර්ණයෙන්ම මැකී යයි.',
          },
          formula: 'f = (D² - d²) / (4D)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Believing a convex lens always forms an inverted real image.',
            si: 'උත්තල කාචයකින් සෑම විටම යටිකුරු තාත්වික ප්‍රතිබිම්බයක්ම සෑදේ යැයි සිතීම.',
          },
          clarification: {
            en: 'When an object is placed within the focal length (u < f), a convex lens acts as a magnifying glass, producing an upright, enlarged, virtual image behind the lens.',
            si: 'වස්තුව නාභිය තුළ (u < f) තැබූ විට උත්තල කාචය විශාලකයක් ලෙස ක්‍රියා කරමින් උඩුකුරු, විශාලිත, අතාත්වික ප්‍රතිබිම්බයක් සාදයි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-6-1',
          question: {
            en: 'An astronomical telescope has an objective lens of focal length 120 cm and an eyepiece of focal length 6.0 cm in normal adjustment. What is its angular magnification?',
            si: 'සාමාන්‍ය සීරුමාරුවේ ඇති තාරකා දුරේක්ෂයක අවනෙතේ නාභීය දුර 120 cm සහ උපනෙතේ නාභීය දුර 6.0 cm වේ. එහි කෝණික විශාලනය කොපමණද?',
          },
          options: [
            { id: 'A', text: { en: '20', si: '20' } },
            { id: 'B', text: { en: '720', si: '720' } },
            { id: 'C', text: { en: '114', si: '114' } },
            { id: 'D', text: { en: '126', si: '126' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'Magnification in normal adjustment is M = f_o / f_e.',
            si: 'සාමාන්‍ය සීරුමාරුවේදී M = f_o / f_e.',
          },
          answer: {
            en: 'M = 120 / 6.0 = 20.',
            si: 'M = 120 / 6.0 = 20.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.7: Physical Optics (Interference, Diffraction & Polarization)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-7',
    slug: 'physical-optics-wave-theory',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 7,
    syllabusRef: 'Competency 3.7',
    title: {
      en: 'Physical Optics: Interference, Diffraction & Polarization',
      si: 'භෞතික ප්‍රකාශ විද්‍යාව: ව්‍යතිකරණය, විවර්තනය සහ ධ්‍රැවීභවනය',
    },
    summary: {
      en: 'Huygens’ wave theory, wavefronts, Young’s double-slit experiment, fringe width β = λD/d, diffraction grating d sin θ = nλ, Brewster’s law, and wave polarization.',
      si: 'හයිගන්ස්ගේ තරංග වාදය, තරංග මුහුණත්, යංගේ ද්වි-කඩතු පරීක්ෂණය, ප්‍රවාර පළල β = λD/d, විවර්තන දැලිස d sin θ = nλ, බෲස්ටර් නියමය සහ ධ්‍රැවීභවනය.',
    },
    learningObjectives: [
      {
        en: 'Explain constructive and destructive optical interference and apply Young’s fringe equation.',
        si: 'නිර්මාණාත්මක හා විනාශකාරී ව්‍යතිකරණය පැහැදිලි කිරීම සහ යංගේ ප්‍රවාර සමීකරණය යෙදීම.',
      },
      {
        en: 'Calculate spectral wavelengths using transmission diffraction gratings and explain Brewster polarizing angle.',
        si: 'විවර්තන දැලිස් මගින් තරංග ආයාම සෙවීම සහ බෲස්ටර් ධ්‍රැවණ කෝණය පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Huygens’ wave theory and secondary wavelets', si: 'හයිගන්ස්ගේ තරංග වාදය සහ ද්විතීයික තරංගිකා' },
      { en: 'Young’s double slit experiment: β = (λ · D) / d', si: 'යංගේ ද්වි-කඩතු පරීක්ෂණය: β = (λ · D) / d' },
      { en: 'Diffraction grating principal maxima: d · sin θ = n · λ', si: 'විවර්තන දැලිසේ ප්‍රධාන උපරිම: d · sin θ = n · λ' },
      { en: 'Polarization by reflection: Brewster’s law tan(i_p) = n', si: 'පරාවර්තනයෙන් ධ්‍රැවීභවනය: බෲස්ටර් නියමය tan(i_p) = n' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Physical optics demonstrates the wave nature of light. Interference and diffraction occur when light encounters apertures of dimensions comparable to its wavelength, while polarization establishes that light is an electromagnetic transverse wave oscillating perpendicularly to its propagation path.',
        si: 'භෞතික ප්‍රකාශ විද්‍යාව ආලෝකයේ තරංගමය ස්වභාවය ඔප්පු කරයි. ආලෝකයේ තරංග ආයාමයට සමාන සිදුරු හමුවේ ව්‍යතිකරණය සහ විවර්තනය සිදුවන අතර, ධ්‍රැවීභවනය මගින් ආලෝකය තීර්යක් තරංගයක් බව තහවුරු වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Young’s Fringe Width Formula', si: 'යංගේ ප්‍රවාර පළල සූත්‍රය' },
          description: {
            en: 'Separation between adjacent bright or dark fringes: β = (λ · D) / d.',
            si: 'යාබද දීප්ත හෝ අඳුරු ප්‍රවාර දෙකක් අතර පරතරය: β = (λ · D) / d.',
          },
          formula: 'β = (λ · D) / d',
        },
        {
          title: { en: 'Diffraction Grating Equation', si: 'විවර්තන දැලිස් සමීකරණය' },
          description: {
            en: 'Condition for nth order principal maximum: d · sin θ = n · λ, where d = 1/N is grating element spacing.',
            si: 'n වන ගණයේ ප්‍රධාන උපරිමය සඳහා කොන්දේසිය: d · sin θ = n · λ.',
          },
          formula: 'd · sin θ = n · λ',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Thinking sound waves can be polarized with Polaroid sheets.',
            si: 'පොලරොයිඩ් තහඩු මගින් ධ්වනි තරංග ද ධ්‍රැවීභවනය කළ හැකි යැයි සිතීම.',
          },
          clarification: {
            en: 'Sound in air is a longitudinal compression wave oscillating parallel to propagation. Only transverse waves (such as electromagnetic light waves) can be polarized.',
            si: 'වාතයේ ධ්වනි තරංග අන්වායාම බැවින් ඒවා ධ්‍රැවීභවනය කළ නොහැක. ධ්‍රැවීභවනය කළ හැක්කේ ආලෝකය වැනි තීර්යක් තරංග පමණි.',
          },
        },
      ],
      practiceQuestions: [
        {
          id: 'pq-waves-3-7-1',
          question: {
            en: 'In Young’s experiment with λ = 500 nm, slit separation d = 1.0 mm and screen distance D = 2.0 m, calculate the fringe width β in mm.',
            si: 'λ = 500 nm, කඩතු පරතරය d = 1.0 mm සහ තිර දුර D = 2.0 m වූ යංගේ පරීක්ෂණයේදී ප්‍රවාර පළල β (mm වලින්) ගණනය කරන්න.',
          },
          options: [
            { id: 'A', text: { en: '1.0 mm', si: '1.0 mm' } },
            { id: 'B', text: { en: '0.50 mm', si: '0.50 mm' } },
            { id: 'C', text: { en: '2.0 mm', si: '2.0 mm' } },
            { id: 'D', text: { en: '0.25 mm', si: '0.25 mm' } },
          ],
          correctOptionId: 'A',
          hint: {
            en: 'β = (λ · D) / d. (500 × 10⁻⁹ · 2.0) / (1.0 × 10⁻³).',
            si: 'β = (λ · D) / d.',
          },
          answer: {
            en: 'β = (500 × 10⁻⁹ · 2.0) / (1.0 × 10⁻³) = 1.0 × 10⁻³ m = 1.0 mm.',
            si: 'β = 1.0 mm.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.8: Unit 3 Laboratory Practicals Hub
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-8',
    slug: 'waves-practicals',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 8,
    syllabusRef: 'Competency 3.1 - 3.7',
    title: {
      en: 'Laboratory Practicals Hub: Oscillations & Waves',
      si: 'ප්‍රායෝගික පරීක්ෂණ මධ්‍යස්ථානය: දෝලන සහ තරංග',
    },
    summary: {
      en: 'Interactive virtual laboratory investigations covering all 5 official NIE A/L Physics syllabus practicals: Sonometer laws, Resonance Tube speed of sound, Spectrometer Prism refraction, Transmission Diffraction Grating wavelength, and Convex Lens displacement method.',
      si: 'නිල NIE උසස් පෙළ විෂය නිර්දේශයේ ප්‍රායෝගික පරීක්ෂණ 5 ම ආවරණය වන අන්තර්ක්‍රියාකාරී පරිසරය: තන්තුමාන නියම, අනුනාද නළය, ප්‍රිස්ම වර්තනය, විවර්තන දැලිස, සහ කාච විස්ථාපන ක්‍රමය.',
    },
    learningObjectives: [
      {
        en: 'Perform tabular observations, calculate physical constants with uncertainty propagation, and inspect schematic setups across all 5 syllabus practicals.',
        si: 'ප්‍රායෝගික පරීක්ෂණ 5 සඳහාම නිරීක්ෂණ සටහන් සම්පූර්ණ කිරීම, භෞතික නියතයන් ගණනය කිරීම සහ උපකරණ සැකැස්ම අධ්‍යයනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Practical 3.1: Laws of Transverse Vibrations of Stretched Wire (Sonometer)', si: 'ප්‍රායෝගික 3.1: තන්තුමානය මගින් තීර්යක් කම්පන නියම සත්‍යාපනය' },
      { en: 'Practical 3.2: Velocity of Sound in Air by Resonance Tube Apparatus', si: 'ප්‍රායෝගික 3.2: අනුනාද නළය මගින් වාතයේ ධ්වනි ප්‍රවේගය සෙවීම' },
      { en: 'Practical 3.3: Refractive Index of Glass Prism Using Spectrometer', si: 'ප්‍රායෝගික 3.3: වර්ණාවලීමානය මගින් ප්‍රිස්මයක වර්තනාංකය සෙවීම' },
      { en: 'Practical 3.4: Wavelength of Light by Transmission Diffraction Grating', si: 'ප්‍රායෝගික 3.4: විවර්තන දැලිස මගින් ආලෝකයේ තරංග ආයාමය සෙවීම' },
      { en: 'Practical 3.5: Focal Length of Convex Lens by Displacement Method', si: 'ප්‍රායෝගික 3.5: විස්ථාපන ක්‍රමයෙන් උත්තල කාචයේ නාභීය දුර සෙවීම' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'waves-practicals',
    content: {
      introduction: {
        en: 'Laboratory investigation is central to A/L Physics mastery. This practicals hub integrates real-time analytical calculations, verified sample datasets, schematic ray and acoustic diagrams, and downloadable laboratory record sheets for all five Unit 3 prescribed experiments.',
        si: 'උසස් පෙළ භෞතික විද්‍යාවේ ප්‍රායෝගික පරීක්ෂණ අත්‍යවශ්‍ය අංගයකි. මෙම මධ්‍යස්ථානය ඒකක 3 හි නියමිත පරීක්ෂණ පහ සඳහාම තත්‍ය කාලීන ගණනය කිරීම්, ආදර්ශ දත්ත, කිරණ සටහන් සහ මුද්‍රණය කළ හැකි වාර්තා ලබා දෙයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Syllabus Practical Coverage', si: 'විෂය නිර්දේශ ප්‍රායෝගික ආවරණය' },
          description: {
            en: '1. Sonometer (f ∝ 1/L and f ∝ √T)\n2. Resonance Tube (v = 2f(l₂ - l₁), end correction e)\n3. Spectrometer Prism (A, Dm, n = sin((A+Dm)/2)/sin(A/2))\n4. Diffraction Grating (d sin θ = nλ)\n5. Lens Displacement (f = (D² - d²)/4D)',
            si: '1. තන්තුමානය (f ∝ 1/L සහ f ∝ √T)\n2. අනුනාද නළය (v = 2f(l₂ - l₁), අන්ත ශෝධනය e)\n3. ප්‍රිස්ම වර්තනය (A, Dm, n = sin((A+Dm)/2)/sin(A/2))\n4. විවර්තන දැලිස (d sin θ = nλ)\n5. කාච විස්ථාපනය (f = (D² - d²)/4D)',
          },
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Assuming end correction e can be ignored in resonance tube velocity determination.',
            si: 'අනුනාද නළයේ ප්‍රවේගය සෙවීමේදී අන්ත ශෝධනය e නොසලකා හැරිය හැකි යැයි සිතීම.',
          },
          clarification: {
            en: 'Because the antinode forms slightly outside the tube mouth by e ≈ 0.3 · d, calculating speed from a single resonance l₁ introduces up to 10% error. Subtracting two resonances (l₂ - l₁ = λ/2) cancels out e completely.',
            si: 'ප්‍රස්පන්දය නළ මුවවිටින් මඳක් පිටතට හටගන්නා බැවින් තනි දිගකින් ගණනය කිරීමේදී 10% දක්වා දෝෂ ඇතිවිය හැක. අනුනාද දිග දෙකක් අඩු කිරීමෙන් (l₂ - l₁) අන්ත ශෝධනය සම්පූර්ණයෙන්ම ඉවත් වේ.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.8: Electromagnetic Waves & Spectrum
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-8',
    slug: 'electromagnetic-waves-and-spectrum',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 8,
    syllabusRef: 'Competency 3.8',
    title: {
      en: 'Electromagnetic Waves and Spectrum',
      si: 'විද්‍යුත් චුම්භක තරංග සහ වර්ණාවලිය',
    },
    summary: {
      en: 'Nature of electromagnetic waves, transverse electric and magnetic fields, speed in vacuum c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s, electromagnetic spectrum classification, and practical applications.',
      si: 'විද්‍යුත් චුම්භක තරංගවල ස්වභාවය, තීර්යක් විද්‍යුත් හා චුම්භක ක්ෂේත්‍ර, රික්තයේ ප්‍රවේගය c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s, විද්‍යුත් චුම්භක වර්ණාවලි වර්ගීකරණය සහ ප්‍රායෝගික යෙදවුම්.',
    },
    learningObjectives: [
      {
        en: 'Describe the transverse electromagnetic wave model and the perpendicular oscillations of electric and magnetic fields.',
        si: 'තීර්යක් විද්‍යුත් චුම්භක තරංග ආකෘතිය සහ ලම්බක විද්‍යුත් හා චුම්භක ක්ෂේත්‍ර දෝලනය විස්තර කිරීම.',
      },
      {
        en: 'Identify the regions of the electromagnetic spectrum in order of frequency and wavelength with practical applications and hazards.',
        si: 'සංඛ්‍යාතය සහ තරංග ආයාම අනුපිළිවෙලින් විද්‍යුත් චුම්භක වර්ණාවලියේ කලාප, ඒවායේ යෙදවුම් සහ උපද්‍රව හඳුනා ගැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Generation and propagation of electromagnetic waves', si: 'විද්‍යුත් චුම්භක තරංග ජනනය සහ සම්ප්‍රේෂණය' },
      { en: 'Speed of light c = 3.0 × 10⁸ m s⁻¹ and wave equation c = fλ', si: 'ආලෝක ප්‍රවේගය c = 3.0 × 10⁸ m s⁻¹ සහ c = fλ තරංග සමීකරණය' },
      { en: 'Electromagnetic spectrum: Radio, Microwaves, Infrared, Visible, Ultraviolet, X-rays, Gamma rays', si: 'විද්‍යුත් චුම්භක වර්ණාවලිය: රේඩියෝ, ක්ෂුද්‍ර තරංග, අධෝරක්ත, දෘශ්‍ය, පාරජම්බුල, එක්ස්-කිරණ, ගැමා කිරණ' },
      { en: 'Atmospheric transmission windows and greenhouse effect', si: 'වායුගෝලීය සම්ප්‍රේෂණ කවුළු සහ හරිතාගාර ආචරණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electromagnetic waves are self-propagating transverse oscillations of mutual electric and magnetic fields in space, requiring no material medium and traveling in vacuum at the universal speed c = 3.0 × 10⁸ m s⁻¹.',
        si: 'විද්‍යුත් චුම්භක තරංග යනු කිසිදු ද්‍රව්‍යමය මාධ්‍යයකින් තොරව රික්තය තුළ c = 3.0 × 10⁸ m s⁻¹ විශ්ව ප්‍රවේගයෙන් ගමන් කරන ලම්බක විද්‍යුත් සහ චුම්භක ක්ෂේත්‍රවල තීර්යක් දෝලන වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Speed of Electromagnetic Radiation', si: 'විද්‍යුත් චුම්භක විකිරණයේ ප්‍රවේගය' },
          description: {
            en: 'In vacuum, c = 1 / √(μ₀ ε₀) = 2.998 × 10⁸ m s⁻¹. For all regions of the spectrum: c = f λ.',
            si: 'රික්තයේදී c = 1 / √(μ₀ ε₀) = 2.998 × 10⁸ m s⁻¹. වර්ණාවලියේ සෑම කලාපයකටම: c = f λ සත්‍ය වේ.',
          },
          formula: 'c = f \\lambda = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}',
        },
        {
          title: { en: 'The Complete EM Spectrum', si: 'සම්පූර්ණ විද්‍යුත් චුම්භක වර්ණාවලිය' },
          description: {
            en: 'Arranged by increasing frequency (decreasing wavelength): Radio waves (> 1 m) → Microwaves (1 mm – 1 m) → Infrared (700 nm – 1 mm) → Visible light (400 nm – 700 nm) → Ultraviolet (10 nm – 400 nm) → X-rays (0.01 nm – 10 nm) → Gamma rays (< 0.01 nm).',
            si: 'වැඩිවන සංඛ්‍යාතය අනුව: රේඩියෝ තරංග → ක්ෂුද්‍ර තරංග → අධෝරක්ත → දෘශ්‍ය ආලෝකය → පාරජම්බුල → එක්ස්-කිරණ → ගැමා කිරණ.',
          },
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Gamma rays travel faster than radio waves in vacuum because they have much higher frequency.',
            si: 'ගැමා කිරණවල සංඛ්‍යාතය වැඩි බැවින් රික්තයේදී රේඩියෝ තරංගවලට වඩා වැඩි වේගයකින් ගමන් කරයි.',
          },
          clarification: {
            en: 'All electromagnetic waves travel at the exact same invariant speed c = 3.0 × 10⁸ m s⁻¹ in vacuum. Their higher frequency corresponds to a proportionally shorter wavelength (λ = c/f), not higher speed.',
            si: 'රික්තයේදී සියලුම විද්‍යුත් චුම්භක තරංග එකම c ප්‍රවේගයෙන් ගමන් කරයි. වැඩි සංඛ්‍යාතයක් යනු කෙටි තරංග ආයාමයක් මිස වැඩි ප්‍රවේගයක් නොවේ.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.9: Refraction of Light, Lenses and Prisms
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-9',
    slug: 'refraction-lenses-and-prisms',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 9,
    syllabusRef: 'Competency 3.9',
    title: {
      en: 'Refraction of Light, Lenses and Prisms',
      si: 'ආලෝක වර්තනය, කාච සහ ප්‍රිස්ම',
    },
    summary: {
      en: 'Snell’s law of refraction n₁ sin θ₁ = n₂ sin θ₂, critical angle and total internal reflection, real and apparent depth, minimum deviation in triangular prisms, thin lenses, and lens formula 1/v - 1/u = 1/f.',
      si: 'ස්නෙල්ගේ වර්තන නියමය n₁ sin θ₁ = n₂ sin θ₂, අවධි කෝණය සහ පූර්ණ අභ්‍යන්තර පරාවර්තනය, සත්‍ය හා දෘශ්‍ය ගැඹුර, ප්‍රිස්මවල අවම අපගමනය, තුනී කාච සහ කාච සමීකරණය 1/v - 1/u = 1/f.',
    },
    learningObjectives: [
      {
        en: 'Apply Snell’s law to calculate angles of refraction, critical angles, and lateral displacement across plane boundaries.',
        si: 'තල සීමා හරහා වර්තන කෝණ, අවධි කෝණ සහ පාර්ශ්වික විස්ථාපනය ගණනය කිරීමට ස්නෙල් නියමය යෙදීම.',
      },
      {
        en: 'Derive and solve problems involving prism minimum deviation n = sin((A + Dm)/2) / sin(A/2) and thin lens formulas.',
        si: 'ප්‍රිස්ම අවම අපගමන සමීකරණය සහ තුනී කාච සමීකරණය ඇසුරින් ගැටලු විසඳීම.',
      },
    ],
    topicOutline: [
      { en: 'Laws of refraction and absolute refractive index n = c/v', si: 'වර්තන නියම සහ නිරපේක්ෂ වර්තනාංකය n = c/v' },
      { en: 'Critical angle C: sin C = 1/n and total internal reflection', si: 'අවධි කෝණය C: sin C = 1/n සහ පූර්ණ අභ්‍යන්තර පරාවර්තනය' },
      { en: 'Real and apparent depth: apparent depth = real depth / n', si: 'සත්‍ය හා දෘශ්‍ය ගැඹුර: දෘශ්‍ය ගැඹුර = සත්‍ය ගැඹුර / n' },
      { en: 'Prism deviation angle d = i₁ + i₂ - A and minimum deviation Dm', si: 'ප්‍රිස්ම අපගමන කෝණය d = i₁ + i₂ - A සහ අවම අපගමනය Dm' },
      { en: 'Thin lens formula: 1/v - 1/u = 1/f (Cartesian sign convention)', si: 'තුනී කාච සමීකරණය: 1/v - 1/u = 1/f' },
      { en: 'Linear magnification m = v/u and lens power P = 1/f (Dioptres)', si: 'රේඛීය විශාලනය m = v/u සහ කාච බලය P = 1/f (ඩයොප්ටර්)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Refraction is the change in the direction of propagation of a light ray when crossing the interface between two optical media of different wave speeds, governing prisms, lenses, and optical fibres.',
        si: 'වර්තනය යනු විවිධ ආලෝක ප්‍රවේග සහිත මාධ්‍ය දෙකක් අතර සීමාව හරහා ආලෝක කිරණයක් ගමන් කිරීමේදී එහි ප්‍රචාරණ දිශාව වෙනස් වීමයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Snell’s Law & Critical Angle', si: 'ස්නෙල් නියමය සහ අවධි කෝණය' },
          description: {
            en: 'For light entering medium 2 from medium 1: n₁ sin θ₁ = n₂ sin θ₂. When passing from dense to rare medium, total internal reflection occurs if incident angle θ₁ > C, where sin C = n₂/n₁.',
            si: 'මාධ්‍ය 1 සිට 2 ට: n₁ sin θ₁ = n₂ sin θ₂. ඝන මාධ්‍යයේ සිට විරල මාධ්‍යයට යාමේදී පතන කෝණය θ₁ > C වන විට පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවේ: sin C = n₂/n₁.',
          },
          formula: 'n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2, \\quad \\sin C = \\frac{1}{n}',
        },
        {
          title: { en: 'Prism Minimum Deviation Formula', si: 'ප්‍රිස්මයේ අවම අපගමන සමීකරණය' },
          description: {
            en: 'At minimum deviation Dm, the ray passes symmetrically through the prism (i₁ = i₂ and r₁ = r₂ = A/2). Refractive index is n = sin((A + Dm)/2) / sin(A/2).',
            si: 'අවම අපගමනය Dm හිදී කිරණය ප්‍රිස්මය තුළින් සමමිතිකව ගමන් කරයි (i₁ = i₂ සහ r₁ = r₂ = A/2). වර්තනාංකය n = sin((A + Dm)/2) / sin(A/2) වේ.',
          },
          formula: 'n = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Total internal reflection can occur when light travels from air into glass.',
            si: 'වාතයේ සිට වීදුරුවලට ආලෝකය ගමන් කිරීමේදී පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවිය හැක.',
          },
          clarification: {
            en: 'Total internal reflection is physically possible ONLY when light travels from an optically denser medium toward an optically rarer medium (n₁ > n₂).',
            si: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය සිදුවිය හැක්කේ ආලෝකය ප්‍රකාශ ඝනත්වයෙන් වැඩි මාධ්‍යයක සිට අඩු මාධ්‍යයකට ගමන් කිරීමේදී පමණි.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.10: The Optical System of the Eye & Vision Defects
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-10',
    slug: 'human-eye-and-vision-defects',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 10,
    syllabusRef: 'Competency 3.10',
    title: {
      en: 'The Human Eye and Vision Defects',
      si: 'මිනිස් ඇස සහ දෘෂ්ටි දෝෂ',
    },
    summary: {
      en: 'Optical mechanism of the human eye, accommodation power, near point D = 25 cm, far point infinity, common vision defects (Myopia, Hypermetropia, Presbyopia, Astigmatism) and their corrective lenses.',
      si: 'මිනිස් ඇසේ ප්‍රකාශ යාන්ත්‍රණය, සමිබ්බේදන බලය, ආසන්න ලක්ෂ්‍යය D = 25 cm, දුර ලක්ෂ්‍යය අනන්තය, ප්‍රධාන දෘෂ්ටි දෝෂ (මයෝපියාව, හයිපර්මෙට්‍රෝපියාව, ප්‍රෙස්බයෝපියාව, ඇස්ටිග්මැටිස්මය) සහ නිවැරදි කිරීමේ කාච.',
    },
    learningObjectives: [
      {
        en: 'Explain how the ciliary muscles alter lens curvature to maintain sharp retina focus during optical accommodation.',
        si: 'දෘෂ්ටි සමිබ්බේදනයේදී දෘෂ්ටිවිතානය මත පැහැදිලි ප්‍රතිබිම්බයක් තබා ගැනීමට සිලියරි පේශි කාචයේ වක්‍රතාව වෙනස් කරන ආකාරය පැහැදිලි කිරීම.',
      },
      {
        en: 'Diagnose Myopia and Hypermetropia with ray diagrams and calculate the required focal length and dioptre power of corrective lenses.',
        si: 'කිරණ සටහන් ඇසුරින් මයෝපියාව සහ හයිපර්මෙට්‍රෝපියාව හඳුනාගෙන නිවැරදි කිරීමේ කාචවල නාභීය දුර හා ඩයොප්ටර් බලය ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Structure of the human eye: cornea, crystalline lens, retina', si: 'මිනිස් ඇසේ ව්‍යුහය: කනීනිකාව, ස්ඵටික කාචය, දෘෂ්ටිවිතානය' },
      { en: 'Accommodation, least distance of distinct vision D = 25 cm', si: 'සමිබ්බේදනය, පැහැදිලි දෘෂ්ටියේ අවම දුර D = 25 cm' },
      { en: 'Myopia (short sight): distant images in front of retina, concave lens correction', si: 'මයෝපියාව (හ්‍රස්ව දෘෂ්ටිකත්වය): ප්‍රතිබිම්බය දෘෂ්ටිවිතානයට ඉදිරියෙන්, අවතල කාච පිළියම' },
      { en: 'Hypermetropia (long sight): near images behind retina, convex lens correction', si: 'හයිපර්මෙට්‍රෝපියාව (දීර්ඝ දෘෂ්ටිකත්වය): ප්‍රතිබිම්බය දෘෂ්ටිවිතානයට පිටුපසින්, උත්තල කාච පිළියම' },
      { en: 'Presbyopia (loss of lens elasticity) and Astigmatism (corneal asphericity)', si: 'ප්‍රෙස්බයෝපියාව සහ ඇස්ටිග්මැටිස්මය (සිලින්ඩරාකාර කාච පිළියම)' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The human eye acts as an adjustable-focal-length camera where the cornea and crystalline lens form a real, inverted image on the light-sensitive retina. Vision defects occur when the unaccommodated focal length or eyeball dimensions mismatch.',
        si: 'මිනිස් ඇස යනු විචල්‍ය නාභීය දුරක් සහිත කැමරාවකට සමාන ප්‍රකාශ පද්ධතියකි. අක්ෂි ගෝලයේ දිග හෝ කාචයේ නාභීය දුරෙහි විෂමතා නිසා දෘෂ්ටි දෝෂ හටගනී.',
      },
      keyConcepts: [
        {
          title: { en: 'Myopia (Short Sight) Correction', si: 'මයෝපියාව නිවැරදි කිරීම' },
          description: {
            en: 'In a myopic eye, rays from infinity converge in front of the retina. A diverging (concave) lens with focal length f = -d_far forms a virtual image of infinity at the eye’s defective far point.',
            si: 'මයෝපියාවේදී අනන්තයේ සිට එන කිරණ දෘෂ්ටිවිතානයට ඉදිරියෙන් නාභිගත වේ. f = -d_far නාභීය දුර සහිත අවතල කාචයකින් අනන්තයේ ඇති වස්තුවේ අතාත්වික ප්‍රතිබිම්බය දුර ලක්ෂ්‍යය මත සාදයි.',
          },
          formula: 'f_{\\text{concave}} = -d_{\\text{far}}, \\quad P = \\frac{1}{f}',
        },
        {
          title: { en: 'Hypermetropia (Long Sight) Correction', si: 'හයිපර්මෙට්‍රෝපියාව නිවැරදි කිරීම' },
          description: {
            en: 'In hypermetropia, rays from near point (25 cm) converge behind the retina. A converging (convex) lens forms a virtual image of an object at 25 cm at the eye’s defective near point d_near: 1/f = 1/0.25 - 1/d_near.',
            si: 'හයිපර්මෙට්‍රෝපියාවේදී ආසන්න වස්තුවල කිරණ දෘෂ්ටිවිතානයට පිටුපසින් නාභිගත වේ. උත්තල කාචයකින් 25 cm ඇති වස්තුවේ අතාත්වික ප්‍රතිබිම්බය දෝෂ සහිත ආසන්න ලක්ෂ්‍යය මත සාදයි: 1/f = 1/0.25 - 1/d_near.',
          },
          formula: '\\frac{1}{f_{\\text{convex}}} = \\frac{1}{0.25} - \\frac{1}{d_{\\text{near}}}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Presbyopia and hypermetropia are identical conditions because both make near vision blurry.',
            si: 'ප්‍රෙස්බයෝපියාව සහ හයිපර්මෙට්‍රෝපියාව එකම තත්ත්වයකි.',
          },
          clarification: {
            en: 'Hypermetropia is caused by an eyeball that is too short or cornea that is too flat from birth. Presbyopia is an age-related gradual loss of elasticity in the crystalline lens itself, reducing accommodation range.',
            si: 'හයිපර්මෙට්‍රෝපියාව හටගන්නේ අක්ෂි ගෝලය කෙටි වීමෙනි. ප්‍රෙස්බයෝපියාව යනු වයස්ගත වීමත් සමඟ ඇසේ ස්ඵටික කාචයේ ප්‍රත්‍යාස්ථතාව අඩුවීම නිසා සමිබ්බේදනය දුර්වල වීමයි.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.11: Optical Instruments (Microscopes & Telescopes)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-11',
    slug: 'optical-instruments-microscopes-telescopes',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 11,
    syllabusRef: 'Competency 3.11',
    title: {
      en: 'Optical Instruments: Microscopes and Telescopes',
      si: 'ප්‍රකාශ උපකරණ: අන්වීක්ෂ සහ දුරදක්න',
    },
    summary: {
      en: 'Angular magnification M = θ/θ₀, simple microscope (magnifying glass), compound microscope in normal and near-point adjustment, astronomical telescope, tube length, and resolving power considerations.',
      si: 'කෝණික විශාලනය M = θ/θ₀, සරල අන්වීක්ෂය (විශාලක වීදුරුව), සාමාන්‍ය හා ආසන්න ලක්ෂ්‍ය සීරුමාරුවේ සංයුක්ත අන්වීක්ෂය, තාරකා විද්‍යාත්මක දුරදක්නය, නළ දිග සහ විභේදන බලය.',
    },
    learningObjectives: [
      {
        en: 'Derive angular magnification formulas for simple and compound microscopes in both near-point adjustment and normal adjustment.',
        si: 'සරල සහ සංයුක්ත අන්වීක්ෂ සඳහා ආසන්න ලක්ෂ්‍ය සහ සාමාන්‍ය සීරුමාරු යටතේ කෝණික විශාලන සමීකරණ ගොඩනැගීම.',
      },
      {
        en: 'Calculate magnifying power M = f_o / f_e and separation L = f_o + f_e for astronomical telescopes in normal adjustment.',
        si: 'සාමාන්‍ය සීරුමාරුවේ තාරකා විද්‍යා දුරදක්න සඳහා කෝණික විශාලනය M = f_o / f_e සහ නළ දිග L = f_o + f_e ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Visual angle and angular magnification M = θ / θ₀', si: 'දෘෂ්ටි කෝණය සහ කෝණික විශාලනය M = θ / θ₀' },
      { en: 'Simple microscope: M = 1 + D/f (near point) and M = D/f (infinity)', si: 'සරල අන්වීක්ෂය: M = 1 + D/f (ආසන්න ලක්ෂ්‍යය) සහ M = D/f (අනන්තය)' },
      { en: 'Compound microscope: objective and eyepiece lenses, ray diagram', si: 'සංයුක්ත අන්වීක්ෂය: අවනෙත සහ උපනෙත, කිරණ සටහන' },
      { en: 'Compound microscope magnification: M = m_o × M_e = -(v_o / u_o)(1 + D / f_e)', si: 'සංයුක්ත අන්වීක්ෂයේ විශාලනය: M = m_o × M_e' },
      { en: 'Astronomical telescope in normal adjustment: M = f_o / f_e and tube length L = f_o + f_e', si: 'සාමාන්‍ය සීරුමාරුවේ තාරකා දුරදක්නය: M = f_o / f_e සහ නළ දිග L = f_o + f_e' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Optical instruments combine multiple lenses to increase the visual angle subtended by distant or minute objects at the eye, producing apparent magnification without physical approach.',
        si: 'ප්‍රකාශ උපකරණ මගින් දුරස්ථ හෝ අතිශය කුඩා වස්තූන් මගින් ඇසේ සාදන දෘෂ්ටි කෝණය වැඩි කර විශාලිත ප්‍රතිබිම්බයක් ලබා දෙයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Compound Microscope Magnification', si: 'සංයුක්ත අන්වීක්ෂයේ විශාලනය' },
          description: {
            en: 'The objective forms a real, magnified intermediate image inside the eyepiece focal length. Total angular magnification for final image at near point D is M = -(v_o / u_o)(1 + D / f_e). In normal adjustment (final image at infinity), M = -(L / f_o)(D / f_e).',
            si: 'අවනෙත මගින් උපනෙතේ නාභිය තුළ තාත්වික විශාලිත මධ්‍යස්ථ ප්‍රතිබිම්බයක් සාදයි. ආසන්න ලක්ෂ්‍යයේ අවසාන ප්‍රතිබිම්බය සඳහා M = -(v_o / u_o)(1 + D / f_e) වේ.',
          },
          formula: 'M = m_o \\times M_e = -\\left(\\frac{v_o}{u_o}\\right)\\left(1 + \\frac{D}{f_e}\\right)',
        },
        {
          title: { en: 'Astronomical Telescope Normal Adjustment', si: 'සාමාන්‍ය සීරුමාරුවේ තාරකා දුරදක්නය' },
          description: {
            en: 'Objective (f_o, large aperture) forms a real intermediate image at its second focal point, which coincides with the first focal point of the eyepiece (f_e). The final image is at infinity: M = f_o / f_e, and separation distance L = f_o + f_e.',
            si: 'විශාල නාභීය දුරක් f_o සහිත අවනෙත සාදන ප්‍රතිබිම්බය මත උපනෙතේ නාභිය සමපාත වේ. අවසාන ප්‍රතිබිම්බය අනන්තයේදී: M = f_o / f_e සහ නළ දිග L = f_o + f_e වේ.',
          },
          formula: 'M = \\frac{f_o}{f_e}, \\quad L = f_o + f_e',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'In an astronomical telescope, the eyepiece should have a larger focal length than the objective to produce higher magnification.',
            si: 'වැඩි විශාලනයක් සඳහා තාරකා දුරදක්නයේ උපනෙතෙහි නාභීය දුර අවනෙතට වඩා විශාල විය යුතුය.',
          },
          clarification: {
            en: 'Magnification is M = f_o / f_e. To achieve maximum magnification, the objective must have a large focal length (f_o) and the eyepiece must have a small focal length (f_e).',
            si: 'විශාලනය M = f_o / f_e වේ. උපරිම විශාලනයක් ලබා ගැනීමට අවනෙතෙහි නාභීය දුර (f_o) විශාල විය යුතු අතර උපනෙතෙහි නාභීය දුර (f_e) කුඩා විය යුතුය.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 3.12: Unit 3 Summative Assessment & Competency Evaluation
  // -------------------------------------------------------------------------
  {
    id: 'lesson-3-12',
    slug: 'waves-assessment',
    unitSlug: 'oscillations-and-waves',
    unitOrder: 3,
    lessonOrder: 12,
    syllabusRef: 'Competency 3.1 - 3.11',
    title: {
      en: 'Unit 3 Comprehensive Assessment: Oscillations & Waves',
      si: 'ඒකක 3 සමස්ත ඇගයීම: දෝලන සහ තරංග',
    },
    summary: {
      en: 'Official summative evaluation assessing student mastery across all 11 syllabus competencies (3.1 to 3.11) and practical procedures with automated grading, competency breakdown, and targeted revision.',
      si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා විශ්ලේෂණය සහ ඉලක්කගත පුනරීක්ෂණ සහිතව විෂය නිර්දේශ නිපුණතා 11 (3.1 සිට 3.11) ම ආවරණය වන නිල සමාප්ති ඇගයීම.',
    },
    learningObjectives: [
      {
        en: 'Assess comprehensive theoretical and practical knowledge across Unit 3 Oscillations & Waves under simulated exam conditions.',
        si: 'විභාග මට්ටමේ තත්ත්වයන් යටතේ ඒකක 3 දෝලන සහ තරංග පිළිබඳ සෛද්ධාන්තික සහ ප්‍රායෝගික දැනුම ඇගයීම.',
      },
    ],
    topicOutline: [
      { en: 'Summative questions across Competencies 3.1 to 3.11', si: 'නිපුණතා 3.1 සිට 3.11 දක්වා ප්‍රශ්න' },
      { en: 'Structured essay questions with self-marking rubrics', si: 'ස්වයං ලකුණු ක්‍රමවේද සහිත ව්‍යුහගත රචනා ප්‍රශ්න' },
      { en: 'Individual competency scoring and targeted revision recommendations', si: 'තනි තනි නිපුණතා ලකුණු සහ ඉලක්කගත පුනරීක්ෂණ නිර්දේශ' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'waves-assessment',
    content: {
      introduction: {
        en: 'This comprehensive assessment evaluates your mastery across all competencies of Unit 3: Oscillations and Waves (3.1 to 3.11). You will be graded on conceptual understanding, numerical derivation, and practical experimental reasoning.',
        si: 'මෙම සමස්ත ඇගයීම මගින් ඒකක 3: දෝලන සහ තරංග විෂය නිර්දේශයේ සියලු නිපුණතා (3.1 සිට 3.11) පිළිබඳ ඔබේ දැනුම පරීක්ෂා කෙරේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Summative Examination Strategy', si: 'සමාප්ති විභාග උපායමාර්ගය' },
          description: {
            en: '1. Read each question carefully and check the units requested.\n2. In numerical calculations, verify decimal precision and standard SI prefixes.\n3. Review your competency report to focus on weaker areas.',
            si: '1. ප්‍රශ්නය හොඳින් කියවා ඉල්ලා ඇති ඒකක පරීක්ෂා කරන්න.\n2. සංඛ්‍යාත්මක ගණනය කිරීම්වලදී SI ඒකක සහ දශම නිරවද්‍යතාව තහවුරු කරන්න.\n3. දුර්වල නිපුණතා සඳහා ලබාදෙන නිර්දේශිත පාඩම් නැවත අධ්‍යයනය කරන්න.',
          },
        },
      ],
      commonMisconceptions: [],
      practiceQuestions: [],
    },
  },
];
