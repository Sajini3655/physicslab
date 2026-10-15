import { LessonDefinition } from '@/shared/curriculum/types';

export const MAGNETISM_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 7.1: Magnetic Fields & Terrestrial Magnetism
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-1',
    slug: 'magnetic-fields-earth',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 1,
    syllabusRef: 'Competency 7.2',
    title: {
      en: 'Magnetic Fields & Terrestrial Magnetism',
      si: 'චුම්බක ක්ෂේත්‍ර සහ භෞමික චුම්බකත්වය',
    },
    summary: {
      en: 'Magnetic flux Φ and flux density B = Φ/A (Tesla), magnetic field line geometry, neutral points between interacting fields, and Earth’s magnetic field elements (declination, inclination/dip, horizontal and vertical components).',
      si: 'චුම්බක ස්‍රාවය Φ සහ ස්‍රාව ඝනත්වය B = Φ/A (ටෙස්ලා), චුම්බක බල රේඛා ජ්‍යාමිතිය, උදාසීන ලක්ෂ්‍ය සහ පෘථිවි චුම්බක ක්ෂේත්‍රයේ මූලද්‍රව්‍ය (දිගංශ කෝණය, නැඹුරු කෝණය, තිරස් හා සිරස් සංරචක).',
    },
    learningObjectives: [
      {
        en: 'Define magnetic flux Φ (Weber) and magnetic flux density B (Tesla), solving problems using Φ = B · A cos θ.',
        si: 'චුම්බක ස්‍රාවය Φ (වෙබර්) සහ ස්‍රාව ඝනත්වය B (ටෙස්ලා) අර්ථ දැක්වීම සහ Φ = B · A cos θ ඇසුරෙන් ගැටලු විසඳීම.',
      },
      {
        en: 'Map magnetic field lines, locate neutral points where the external and local magnetic fields cancel, and explain why field lines form continuous closed loops.',
        si: 'චුම්බක බල රේඛා සිතියම්ගත කිරීම, බාහිර හා දේශීය ක්ෂේත්‍ර එකිනෙක අවලංගු වන උදාසීන ලක්ෂ්‍ය නිර්ණය කිරීම සහ බල රේඛා සංවෘත ලූප සාදන ආකාරය පැහැදිලි කිරීම.',
      },
      {
        en: 'Define magnetic meridian, geographic meridian, angle of declination, and angle of dip θ, deriving relations B_H = B cos θ, B_V = B sin θ, and tan θ = B_V / B_H.',
        si: 'චුම්බක මධ්‍යහ්න රේඛාව, භූගෝලීය මධ්‍යහ්න රේඛාව, දිගංශ කෝණය සහ නැඹුරු කෝණය θ අර්ථ දක්වා B_H = B cos θ, B_V = B sin θ, සහ tan θ = B_V / B_H සම්බන්ධතා ව්‍යුත්පන්න කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of magnetic poles, field lines, and flux Φ (Weber)', si: 'චුම්බක ධ්‍රැව, බල රේඛා සහ ස්‍රාවය Φ පිළිබඳ සංකල්පය' },
      { en: 'Magnetic flux density B = Φ / A (Tesla, T = Wb m⁻²)', si: 'චුම්බක ස්‍රාව ඝනත්වය B = Φ / A (ටෙස්ලා)' },
      { en: 'Bar magnets and neutral points in Earth’s magnetic field', si: 'දණ්ඩ චුම්බක සහ පෘථිවි ක්ෂේත්‍රයේ උදාසීන ලක්ෂ්‍ය' },
      { en: 'Terrestrial magnetism: Geographic vs Magnetic Meridians', si: 'භෞමික චුම්බකත්වය: භූගෝලීය සහ චුම්බක මධ්‍යහ්න තල' },
      { en: 'Magnetic elements: Declination, Dip (inclination), and components B_H, B_V', si: 'චුම්බක මූලද්‍රව්‍ය: දිගංශ කෝණය, නැඹුරු කෝණය සහ B_H, B_V සංරචක' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A magnetic field is a region of space around a magnet, electric current, or moving charge where magnetic forces are exerted. The Earth behaves as a giant magnetic dipole tilted roughly 11° from its rotational axis, providing a crucial terrestrial reference field for navigation and scientific instrumentation.',
        si: 'චුම්බක ක්ෂේත්‍රයක් යනු චුම්බකයක්, විද්‍යුත් ධාරාවක් හෝ චලනය වන ආරෝපණයක් වටා චුම්බක බල ක්‍රියාත්මක වන අවකාශයයි. පෘථිවිය එහි භ්‍රමණ අක්ෂයේ සිට දළ වශයෙන් 11° ක් ආනත වූ දැවැන්ත චුම්බක ද්විධ්‍රැවයක් සේ හැසිරෙමින් නාවික කටයුතු සහ විද්‍යාත්මක උපකරණ සඳහා තීරණාත්මක සමුද්දේශ ක්ෂේත්‍රයක් සපයයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Magnetic Flux & Flux Density', si: 'චුම්බක ස්‍රාවය සහ ස්‍රාව ඝනත්වය' },
          description: {
            en: 'Magnetic flux Φ measures the total field passing through an area: Φ = B · A = B A cos θ. Flux density B represents flux per unit normal area: B = Φ / A.',
            si: 'චුම්බක ස්‍රාවය Φ යනු කිසියම් වර්ගඵලයක් හරහා යන මුළු ක්ෂේත්‍ර ප්‍රමාණයයි: Φ = B A cos θ. ස්‍රාව ඝනත්වය B යනු ලම්බක ඒකක වර්ගඵලයක ස්‍රාවයයි: B = Φ / A.',
          },
          formula: '\\Phi = B A \\cos\\theta \\quad \\Longleftrightarrow \\quad B = \\frac{\\Phi}{A}',
        },
        {
          title: { en: 'Earth’s Field Components & Dip Angle', si: 'පෘථිවි ක්ෂේත්‍ර සංරචක සහ නැඹුරු කෝණය' },
          description: {
            en: 'At any point on Earth, the total field B resolves into horizontal component B_H and vertical component B_V: B_H = B cos θ, B_V = B sin θ, tan θ = B_V / B_H.',
            si: 'පෘථිවිය මත ඕනෑම ස්ථානයක මුළු ක්ෂේත්‍රය B තිරස් B_H සහ සිරස් B_V සංරචක වලට විභේදනය වේ: B_H = B cos θ, B_V = B sin θ, tan θ = B_V / B_H.',
          },
          formula: 'B_H = B \\cos\\theta, \\quad B_V = B \\sin\\theta, \\quad \\tan\\theta = \\frac{B_V}{B_H}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A magnetic compass needle points towards True Geographic North.',
            si: 'චුම්බක මාලිමා කටුව සැමවිටම සත්‍ය භූගෝලීය උතුරට යොමු වේ.',
          },
          clarification: {
            en: 'The compass needle aligns with the local magnetic meridian, which deviates from true geographic north by the angle of magnetic declination. Furthermore, near the magnetic poles, vertical dip renders a horizontal compass useless.',
            si: 'මාලිමා කටුව පෙළගැසෙන්නේ දේශීය චුම්බක මධ්‍යහ්න රේඛාවට වන අතර එය දිගංශ කෝණයෙන් භූගෝලීය උතුරෙන් අපගමනය වේ. එසේම ධ්‍රැව ආසන්නයේදී සිරස් නැඹුරුව නිසා තිරස් මාලිමාව නිසි ලෙස ක්‍රියා නොකරයි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 7.2: Forces on Moving Charges & Hall Effect
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-2',
    slug: 'lorentz-force-hall-effect',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 2,
    syllabusRef: 'Competency 7.1',
    title: {
      en: 'Forces on Moving Charges & Hall Effect',
      si: 'චලනය වන ආරෝපණ මත බල සහ හෝල් ආචරණය',
    },
    summary: {
      en: 'Lorentz magnetic force F = q(v × B), circular and helical trajectories in uniform B-fields, cyclotron radius r = mv/(qB) and frequency, velocity selector v = E/B, J.J. Thomson’s e/m experiment, and the Hall effect V_H = BI/(nqt).',
      si: 'ලොරෙන්ට්ස් චුම්බක බලය F = q(v × B), ඒකාකාර B ක්ෂේත්‍ර තුළ වෘත්තාකාර හා සර්පිලාකාර පථ, සයික්ලොට්‍රෝන අරය r = mv/(qB), ප්‍රවේග වරණය v = E/B, ජේ.ජේ. තොම්සන්ගේ e/m පරීක්ෂණය සහ හෝල් ආචරණය V_H = BI/(nqt).',
    },
    learningObjectives: [
      {
        en: 'Calculate the magnetic deflecting force on moving charges using F = B q v sin θ, using Fleming’s Left-Hand Rule or vector cross-products.',
        si: 'F = B q v sin θ ඇසුරෙන් චලනය වන ආරෝපණ මත චුම්බක බලය ගණනය කිරීම සහ ෆ්ලෙමින්ගේ වමත් නීතියෙන් දිශාව නිර්ණය කිරීම.',
      },
      {
        en: 'Derive the radius r = mv/(qB) and period T = 2πm/(qB) for circular cyclotron motion, explaining why magnetic forces do zero mechanical work.',
        si: 'සයික්ලොට්‍රෝන චලිතය සඳහා අරය r = mv/(qB) සහ ආවර්ත කාලය T = 2πm/(qB) ව්‍යුත්පන්න කිරීම සහ චුම්බක බල මගින් ශුන්‍ය යාන්ත්‍රික කාර්යයක් කරන බව පැහැදිලි කිරීම.',
      },
      {
        en: 'Explain the principle of the velocity selector (v = E/B) and the Hall effect, deriving Hall voltage V_H = BI/(nqt) and identifying majority charge carriers.',
        si: 'ප්‍රවේග වරණයේ (v = E/B) සහ හෝල් ආචරණයේ මූලධර්මය පැහැදිලි කිරීම, හෝල් වෝල්ටීයතාව V_H = BI/(nqt) ව්‍යුත්පන්න කිරීම සහ බහුතර ආරෝපණ වාහක හඳුනාගැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Magnetic force on moving charge: F = q(v × B) and Fleming’s Left-Hand Rule', si: 'චලනය වන ආරෝපණ මත බලය සහ ෆ්ලෙමින්ගේ වමත් නීතිය' },
      { en: 'Proof that magnetic forces do no work (F ⊥ v ⇒ P = F · v = 0)', si: 'චුම්බක බල මගින් කාර්යයක් නොකරන බවට සාධනය' },
      { en: 'Circular motion in perpendicular B-fields: radius, period, and cyclotron frequency', si: 'ලම්බක B ක්ෂේත්‍රවල වෘත්තාකාර චලිතය: අරය, ආවර්ත කාලය සහ සංඛ්‍යාතය' },
      { en: 'Helical trajectories for oblique entry velocity components', si: 'ආනතව ඇතුළු වන අංශුවල සර්පිලාකාර පථ' },
      { en: 'Velocity selector (crossed E and B fields) and Thomson e/m measurement', si: 'ප්‍රවේග වරණය සහ තොම්සන් e/m මිනුම' },
      { en: 'Hall effect: derivation of V_H = BI / (nqt) and carrier sign determination', si: 'හෝල් ආචරණය: V_H = BI / (nqt) සූත්‍රය සහ වාහක ලකුණ තීරණය කිරීම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Stationary charges experience no force in a pure magnetic field. However, once in motion, a charged particle interacts with the magnetic flux, experiencing a perpendicular deflecting Lorentz force. This principle powers mass spectrometers, particle cyclotrons, auroras, and modern Hall sensors.',
        si: 'නිශ්චල ආරෝපණ මත චුම්බක ක්ෂේත්‍රයකින් බලයක් ඇති නොවේ. එහෙත් ආරෝපණයක් චලනය වන විට එයට ලම්බකව ලොරෙන්ට්ස් චුම්බක බලයක් හටගනී. මෙම මූලධර්මය ස්කන්ධ වර්ණාවලීමාන, අංශු ත්වරණ යන්ත්‍ර, ධ්‍රැවීය ප්‍රභා සහ නවීන හෝල් සංවේදක සඳහා පදනම් වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Lorentz Magnetic Force', si: 'ලොරෙන්ට්ස් චුම්බක බලය' },
          description: {
            en: 'The magnetic force acts perpendicular to both velocity and field: F = |q| v B sin θ. Because F is always perpendicular to velocity, instantaneous work done is zero.',
            si: 'චුම්බක බලය ප්‍රවේගයට මෙන්ම ක්ෂේත්‍රයටද ලම්බක වේ: F = |q| v B sin θ. F සැමවිටම ප්‍රවේගයට ලම්බක බැවින් සිදුකරන ක්ෂණික කාර්යය ශුන්‍ය වේ.',
          },
          formula: '\\vec{F} = q(\\vec{v} \\times \\vec{B}), \\quad F = |q| v B \\sin\\theta',
        },
        {
          title: { en: 'Cyclotron Orbit & Radius', si: 'සයික්ලොට්‍රෝන කක්ෂය සහ අරය' },
          description: {
            en: 'Centripetal force is provided entirely by the magnetic force: m v² / r = q v B => r = (m v) / (q B). The orbital period T = 2πm / (qB) is notably independent of speed.',
            si: 'කේන්ද්‍රාභිසාරී බලය සම්පූර්ණයෙන්ම චුම්බක බලයෙන් ලැබේ: m v² / r = q v B => r = (m v) / (q B). ආවර්ත කාලය T = 2πm / (qB) ප්‍රවේගය මත රඳා නොපවතී.',
          },
          formula: 'r = \\frac{m v}{q B}, \\quad T = \\frac{2\\pi m}{q B}',
        },
        {
          title: { en: 'Hall Voltage', si: 'හෝල් වෝල්ටීයතාව' },
          description: {
            en: 'In a current-carrying slab in a perpendicular field, magnetic deflection separates carriers until transverse electric force balances magnetic force: V_H = (B I) / (n q t).',
            si: 'ලම්බක ක්ෂේත්‍රයක තැබූ සන්නායකයක වාහක චුම්බක බලයෙන් එක් දාරයකට තල්ලු වී හරස් විභවයක් ඇති කරයි: V_H = (B I) / (n q t).',
          },
          formula: 'V_H = \\frac{B I}{n q t}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A magnetic field can accelerate a charged particle to increase its kinetic energy and speed.',
            si: 'චුම්බක ක්ෂේත්‍රයක් මගින් ආරෝපිත අංශුවක් ත්වරණය කර එහි චාලක ශක්තිය හා වේගය වැඩි කළ හැක.',
          },
          clarification: {
            en: 'A steady magnetic field can only alter the direction of velocity (centripetal acceleration), never its speed or magnitude. Because F ⊥ v, the work done is strictly zero.',
            si: 'ස්ථාවර චුම්බක ක්ෂේත්‍රයකට කළ හැක්කේ ප්‍රවේගයේ දිශාව වෙනස් කිරීම පමණි (කේන්ද්‍රාභිසාරී ත්වරණය). F ⊥ v බැවින් කාර්යය ශුන්‍ය වන අතර වේගය හෝ චාලක ශක්තිය වෙනස් කළ නොහැක.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 7.3: Forces on Conductors & Parallel Wires
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-3',
    slug: 'conductor-forces-ampere',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 3,
    syllabusRef: 'Competency 7.1',
    title: {
      en: 'Forces on Conductors & Parallel Wires',
      si: 'සන්නායක මත බල සහ සමාන්තර සන්නායක',
    },
    summary: {
      en: 'Magnetic force on current-carrying conductors F = BIl sin θ, mutual force between parallel current-carrying wires F/l = (μ₀ I₁ I₂)/(2πd), attraction and repulsion criteria, the SI definition of the Ampere, and current balances.',
      si: 'ධාරා ගෙන යන සන්නායක මත චුම්බක බලය F = BIl sin θ, සමාන්තර සන්නායක අතර අන්‍යෝන්‍ය බලය F/l = (μ₀ I₁ I₂)/(2πd), ආකර්ෂණ හා විකර්ෂණ නිර්ණායක, ඇම්පියරයේ SI අර්ථ දැක්වීම සහ ධාරා තුලා.',
    },
    learningObjectives: [
      {
        en: 'Calculate the mechanical force on a straight current-carrying conductor in a magnetic field: F = B I l sin θ.',
        si: 'චුම්බක ක්ෂේත්‍රයක තැබූ සෘජු ධාරා සන්නායකයක් මත යාන්ත්‍රික බලය F = B I l sin θ ඇසුරෙන් ගණනය කිරීම.',
      },
      {
        en: 'Explain why parallel currents in the same direction attract and opposite currents repel, deriving force per unit length: F/l = (μ₀ I₁ I₂) / (2π d).',
        si: 'එකම දිශාවට ගලන සමාන්තර ධාරා එකිනෙක ආකර්ෂණය වන අතර ප්‍රතිවිරුද්ධ ධාරා විකර්ෂණය වන්නේ මන්දැයි පැහැදිලි කර ඒකක දිගකට බලය F/l = (μ₀ I₁ I₂) / (2π d) ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'State the historical and modern SI definitions of the Ampere and explain the operation of a current balance.',
        si: 'ඇම්පියරය සඳහා ඓතිහාසික සහ නවීන SI අර්ථ දැක්වීම් ප්‍රකාශ කිරීම සහ ධාරා තුලාවක ක්‍රියාකාරීත්වය පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Derivation of F = BIl sin θ from single-carrier Lorentz forces', si: 'තනි වාහක ලොරෙන්ට්ස් බල ඇසුරෙන් F = BIl sin θ ව්‍යුත්පන්න කිරීම' },
      { en: 'Action-reaction forces between two long parallel conductors', si: 'දිගු සමාන්තර සන්නායක දෙකක් අතර ක්‍රියා-ප්‍රතික්‍රියා බල' },
      { en: 'Formula for force per unit length: F / l = (μ₀ I₁ I₂) / (2π d)', si: 'ඒකක දිගකට බලය සෙවීමේ සූත්‍රය: F / l = (μ₀ I₁ I₂) / (2π d)' },
      { en: 'Definition of the Ampere: historical 2 × 10⁻⁷ N m⁻¹ vs modern 2019 fixed elementary charge e', si: 'ඇම්පියරයේ අර්ථ දැක්වීම: ඓතිහාසික vs 2019 ස්ථාවර මූලික ආරෝපණ අර්ථ දැක්වීම' },
      { en: 'The current balance experiment (Cotton balance) for measuring B', si: 'B මැනීම සඳහා ධාරා තුලා පරීක්ෂණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Because an electric current is a macroscopic collective flow of mobile charges, placing a current-carrying wire in an external magnetic field causes each drifting charge to feel a microscopic Lorentz force. The sum of these microscopic forces manifests macroscopically as a powerful mechanical thrust on the wire.',
        si: 'විද්‍යුත් ධාරාවක් යනු චලනය වන ආරෝපණ සමූහයක් බැවින්, ධාරාවක් සහිත කම්බියක් බාහිර චුම්බක ක්ෂේත්‍රයක තැබූ විට එක් එක් ඉලෙක්ට්‍රෝනය මත ඇතිවන ක්ෂුද්‍ර ලොරෙන්ට්ස් බලවල එකතුව මුළු කම්බිය මතම ප්‍රබල යාන්ත්‍රික තෙරපුමක් ලෙස ප්‍රකට වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Force on a Conductor', si: 'සන්නායකයක් මත බලය' },
          description: {
            en: 'For a straight conductor of length l carrying current I in field B: F = B I l sin θ, directed via Fleming’s Left-Hand Rule.',
            si: 'B ක්ෂේත්‍රයක තැබූ I ධාරාවක් ගෙන යන l දිගැති සන්නායකයක් මත බලය: F = B I l sin θ, දිශාව ෆ්ලෙමින්ගේ වමත් නීතියෙන් ලැබේ.',
          },
          formula: 'F = B I l \\sin\\theta',
        },
        {
          title: { en: 'Mutual Force Between Parallel Wires', si: 'සමාන්තර කම්බි අතර අන්‍යෝන්‍ය බලය' },
          description: {
            en: 'Each wire creates a field B = (μ₀ I)/(2πd) at the other. Current in same direction produces attraction; opposite currents repel: F/l = (μ₀ I₁ I₂) / (2π d).',
            si: 'එක් කම්බියක් අනෙක පිහිටි තැන B = (μ₀ I)/(2πd) ක්ෂේත්‍රයක් ඇති කරයි. එකම දිශාවට ධාරා ආකර්ෂණය වේ; ප්‍රතිවිරුද්ධ ධාරා විකර්ෂණය වේ.',
          },
          formula: '\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Two parallel wires carrying currents in the same direction repel each other like two like electrostatic charges.',
            si: 'එකම දිශාවට ධාරා ගලා යන සමාන්තර කම්බි දෙකක් සජාතීය ස්ථිති විද්‍යුත් ආරෝපණ මෙන් එකිනෙක විකර්ෂණය කරයි.',
          },
          clarification: {
            en: 'Current-carrying wires are electrically neutral overall. The interaction is purely magnetic: like currents attract, unlike (antiparallel) currents repel.',
            si: 'ධාරා ගෙන යන කම්බි සමස්තයක් ලෙස විද්‍යුත් උදාසීන වේ. අන්තර්ක්‍රියාව තනිකරම චුම්බක වන අතර සමාන්තර ධාරා ආකර්ෂණය වන අතර ප්‍රති-සමාන්තර ධාරා විකර්ෂණය වේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 7.4: Torque on Coils & Galvanometers
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-4',
    slug: 'torque-moving-coil-galvanometer',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 4,
    syllabusRef: 'Competency 7.3',
    title: {
      en: 'Torque on Coils & Moving-Coil Galvanometer',
      si: 'දඟර මත ව්‍යාවර්තය සහ සසල දඟර ගැල්වනෝමීටරය',
    },
    summary: {
      en: 'Torque on rectangular current loops τ = BINA sin θ, magnetic dipole moment m = NIA, moving-coil galvanometer construction (radial field, soft iron core, hairsprings), current sensitivity S_I = (BAN)/C, ammeter shunt resistance, and voltmeter multiplier resistance.',
      si: 'සෘජුකෝණාස්‍රාකාර ධාරා ලූප මත ව්‍යාවර්තය τ = BINA sin θ, චුම්බක ද්විධ්‍රැව ඝූර්ණය m = NIA, සසල දඟර ගැල්වනෝමීටරයේ ව්‍යුහය (අරීය ක්ෂේත්‍රය, මෘදු යකඩ හරය), ධාරා සංවේදීතාව S_I = (BAN)/C, ඇමීටර් ෂන්ට් ප්‍රතිරෝධය සහ වෝල්ට්මීටර් ගුණක ප්‍රතිරෝධය.',
    },
    learningObjectives: [
      {
        en: 'Derive torque on a planar current coil τ = BINA sin θ and define magnetic dipole moment m = NIA.',
        si: 'තලීය ධාරා දඟරයක් මත ව්‍යාවර්තය τ = BINA sin θ ව්‍යුත්පන්න කර චුම්බක ද්විධ්‍රැව ඝූර්ණය m = NIA අර්ථ දැක්වීම.',
      },
      {
        en: 'Explain how concave pole pieces and a soft-iron cylindrical core create a radial magnetic field, ensuring θ = 90° so deflection is directly proportional to current (linear scale).',
        si: 'අවතල ධ්‍රැව ඛණ්ඩ සහ මෘදු යකඩ සිලින්ඩරය මගින් අරීය ක්ෂේත්‍රයක් සාදා θ = 90° පවත්වා ගැනීමෙන් අපගමනය ධාරාවට අනුලෝමව සමානුපාතික වන (රේඛීය පරිමාණය) ආකාරය පැහැදිලි කිරීම.',
      },
      {
        en: 'Calculate shunt resistor R_s = (I_g R_g)/(I - I_g) for ammeters and multiplier resistor R_m = (V/I_g) - R_g for voltmeters.',
        si: 'ඇමීටර් සඳහා ෂන්ට් ප්‍රතිරෝධය R_s = (I_g R_g)/(I - I_g) සහ වෝල්ට්මීටර් සඳහා ගුණක ප්‍රතිරෝධය R_m = (V/I_g) - R_g ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Couples and deflecting torque on rectangular current loops: τ = BINA sin θ', si: 'සෘජුකෝණාස්‍රාකාර දඟර මත ව්‍යාවර්තය: τ = BINA sin θ' },
      { en: 'Magnetic dipole moment m = NIA (A m²)', si: 'චුම්බක ද්විධ්‍රැව ඝූර්ණය m = NIA' },
      { en: 'Moving-coil galvanometer construction: phosphor-bronze suspension, soft iron core, radial field', si: 'සසල දඟර ගැල්වනෝමීටරයේ ව්‍යුහය සහ අරීය ක්ෂේත්‍රය' },
      { en: 'Equilibrium condition BANI = Cθ and current sensitivity S_I = (BAN)/C', si: 'සමතුලිතතා කොන්දේසිය BANI = Cθ සහ ධාරා සංවේදීතාව' },
      { en: 'Conversion to Ammeter: shunt calculation and effective resistance', si: 'ඇමීටරයක් බවට පරිවර්තනය: ෂන්ට් ගණනය සහ සමක ප්‍රතිරෝධය' },
      { en: 'Conversion to Voltmeter: multiplier calculation and loading effect', si: 'වෝල්ට්මීටරයක් බවට පරිවර්තනය: ගුණක ප්‍රතිරෝධය සහ භාර ආචරණය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'When a closed loop carrying current is placed inside a magnetic field, opposite sides experience equal and opposite parallel forces. These form a mechanical couple that turns the coil until the restoring torque of a suspension spring balances it. This principle forms the core of analog galvanometers, ammeters, voltmeters, and electric motors.',
        si: 'ධාරාවක් ගෙන යන සංවෘත ලූපයක් චුම්බක ක්ෂේත්‍රයක තැබූ විට, ප්‍රතිවිරුද්ධ පැති මත සමාන හා ප්‍රතිවිරුද්ධ බල යුග්මයක් ඇති වී දඟරය භ්‍රමණය වේ. දුනු මගින් ඇතිවන ප්‍රතිසංස්ථාන ව්‍යාවර්තය මගින් එය සමතුලිත වේ. ඇනලොග් ගැල්වනෝමීටර, ඇමීටර, වෝල්ට්මීටර සහ විදුලි මෝටර් ක්‍රියාත්මක වන්නේ මෙම මූලධර්මය මතය.',
      },
      keyConcepts: [
        {
          title: { en: 'Torque on a Coil', si: 'දඟරයක් මත ව්‍යාවර්තය' },
          description: {
            en: 'Deflecting torque: τ = B I N A sin θ, where θ is the angle between the normal to the coil and field B. Maximum torque occurs when the plane of the coil is parallel to field lines.',
            si: 'විලම්භක ව්‍යාවර්තය: τ = B I N A sin θ, මෙහි θ යනු දඟරයේ අභිලම්භය හා B අතර කෝණයයි. දඟර තලය ක්ෂේත්‍රයට සමාන්තර වන විට ව්‍යාවර්තය උපරිම වේ.',
          },
          formula: '\\tau = B I N A \\sin\\theta, \\quad m = N I A',
        },
        {
          title: { en: 'Ammeter Conversion (Shunt Resistor)', si: 'ඇමීටර බවට පරිවර්තනය (ෂන්ට් ප්‍රතිරෝධය)' },
          description: {
            en: 'A low-resistance shunt R_s is connected in parallel with the meter so majority current (I - I_g) bypasses the coil: R_s = (I_g R_g) / (I - I_g).',
            si: 'බහුතර ධාරාව (I - I_g) මීටරය මඟහැර යාමට කුඩා ෂන්ට් ප්‍රතිරෝධයක් R_s සමාන්තරගතව සම්බන්ධ කෙරේ: R_s = (I_g R_g) / (I - I_g).',
          },
          formula: 'R_s = \\frac{I_g R_g}{I - I_g}',
        },
        {
          title: { en: 'Voltmeter Conversion (Multiplier Resistor)', si: 'වෝල්ට්මීටර බවට පරිවර්තනය (ගුණක ප්‍රතිරෝධය)' },
          description: {
            en: 'A high resistance R_m is wired in series so that total voltage drop V = I_g (R_g + R_m): R_m = (V / I_g) - R_g.',
            si: 'මුළු වෝල්ටීයතා බැස්ම V = I_g (R_g + R_m) වන පරිදි විශාල ගුණක ප්‍රතිරෝධයක් R_m ශ්‍රේණිගතව සම්බන්ධ කෙරේ: R_m = (V / I_g) - R_g.',
          },
          formula: 'R_m = \\frac{V}{I_g} - R_g',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'An ammeter has very high resistance and should be connected in parallel.',
            si: 'ඇමීටරයක ප්‍රතිරෝධය ඉතා ඉහළ වන අතර එය සමාන්තරගතව සම්බන්ධ කළ යුතුය.',
          },
          clarification: {
            en: 'An ammeter must have near-zero resistance and must be connected in series with the load. Placing an ammeter in parallel creates a dangerous short circuit.',
            si: 'ඇමීටරයක ප්‍රතිරෝධය ශුන්‍යයට ආසන්න විය යුතු අතර එය භාරය සමඟ ශ්‍රේණිගතව සවි කළ යුතුය. සමාන්තරගතව සවි කළහොත් අධික ධාරාවක් ගලා කෙටි පරිපථයක් සාදයි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 7.5: Current-Generated Fields (Biot-Savart & Solenoids)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-5',
    slug: 'biot-savart-solenoids',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 5,
    syllabusRef: 'Competency 7.2',
    title: {
      en: 'Current-Generated Fields & Solenoids',
      si: 'ධාරා මඟින් ජනනය වන ක්ෂේත්‍ර සහ සොලනොයිඩ',
    },
    summary: {
      en: 'Biot-Savart law dB = (μ₀/4π)(I dl sin θ)/r², Ampere’s Circuital Law ∮ B · dl = μ₀ I_enc, magnetic field around long straight wires B = μ₀I/(2πr), circular coil centers B = μ₀NI/(2r), long solenoids B = μ₀nI, and toroids.',
      si: 'බියෝ-සැවා නියමය dB = (μ₀/4π)(I dl sin θ)/r², ඇම්පියර්ගේ පරිපථ නියමය ∮ B · dl = μ₀ I_enc, දිගු සෘජු සන්නායක B = μ₀I/(2πr), වෘත්තාකාර දඟර කේන්ද්‍රය B = μ₀NI/(2r), දිගු සොලනොයිඩ B = μ₀nI සහ ටොරොයිඩ.',
    },
    learningObjectives: [
      {
        en: 'State the Biot-Savart Law and apply it to determine magnetic field vectors produced by differential current elements.',
        si: 'බියෝ-සැවා නියමය ප්‍රකාශ කිරීම සහ ධාරා ඛණ්ඩ මගින් ඇතිවන චුම්බක ක්ෂේත්‍ර දෛශික නිර්ණයට එය යෙදීම.',
      },
      {
        en: 'Calculate magnetic fields for canonical geometries: straight wire B = (μ₀I)/(2πr), circular coil center B = (μ₀NI)/(2r), and solenoid interior B = μ₀nI.',
        si: 'සම්මත ජ්‍යාමිතීන් සඳහා ක්ෂේත්‍ර ගණනය කිරීම: සෘජු කම්බිය B = (μ₀I)/(2πr), වෘත්තාකාර දඟර කේන්ද්‍රය B = (μ₀NI)/(2r) සහ සොලනොයිඩය B = μ₀nI.',
      },
      {
        en: 'Apply Ampere’s Circuital Law ∮ B · dl = μ₀ I_enclosed to highly symmetric geometries including coaxial cables and toroids.',
        si: 'සමමිතික ජ්‍යාමිතීන් සඳහා ඇම්පියර්ගේ පරිපථ නියමය ∮ B · dl = μ₀ I_enclosed යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Biot-Savart Law: statement, vector form, and inverse-square property', si: 'බියෝ-සැවා නියමය: ප්‍රකාශය, දෛශික ස්වරූපය සහ ප්‍රතිලෝම වර්ග නීතිය' },
      { en: 'Right-hand grip rule for circular magnetic field lines around a straight current', si: 'සෘජු සන්නායකයක් වටා ඒකකේන්ද්‍රික ක්ෂේත්‍ර සඳහා දකුණත් ග්‍රහණ නීතිය' },
      { en: 'Magnetic field at the center of flat circular coils: B = (μ₀ N I) / (2 r)', si: 'පැතලි වෘත්තාකාර දඟරයක කේන්ද්‍රයේ චුම්බක ක්ෂේත්‍රය' },
      { en: 'Magnetic field inside an ideal long solenoid: B = μ₀ n I and end effects', si: 'පරිපූර්ණ දිගු සොලනොයිඩයක් තුළ ක්ෂේත්‍රය: B = μ₀ n I' },
      { en: 'Ampere’s Circuital Law and toroidal coils', si: 'ඇම්පියර්ගේ පරිපථ නියමය සහ ටොරොයිඩ දඟර' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Hans Christian Oersted discovered in 1820 that an electric current deflects a magnetic needle, demonstrating that electricity and magnetism are intimately linked. Biot, Savart, and Ampere formulated exact mathematical relationships quantifying the magnetic fields produced by any steady electric current configuration.',
        si: '1820 දී හාන්ස් ක්‍රිස්ටියන් ඕස්ටෙඩ් විසින් විද්‍යුත් ධාරාවක් මඟින් චුම්බක කටුවක් අපගමනය වන බව සොයා ගැනීමත් සමඟ විද්‍යුතය සහ චුම්බකත්වය එකිනෙක බැඳී ඇති බව තහවුරු විය. බියෝ, සැවා සහ ඇම්පියර් විසින් ඕනෑම ස්ථාවර ධාරා වින්‍යාසයකින් හටගන්නා චුම්බක ක්ෂේත්‍ර නිවැරදිව ගණනය කිරීමේ ගණිතමය නීති සම්පාදනය කළහ.',
      },
      keyConcepts: [
        {
          title: { en: 'Biot-Savart Law', si: 'බියෝ-සැවා නියමය' },
          description: {
            en: 'The elemental field dB from a current segment I dl at displacement r: dB = (μ₀ / 4π) (I dl sin θ) / r², where μ₀ = 4π × 10⁻⁷ T m A⁻¹.',
            si: 'I dl ධාරා ඛණ්ඩයක සිට r දුරකින් හටගන්නා ක්ෂේත්‍ර ඛණ්ඩය: dB = (μ₀ / 4π) (I dl sin θ) / r², මෙහි μ₀ = 4π × 10⁻⁷ T m A⁻¹ වේ.',
          },
          formula: 'dB = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin\\theta}{r^2}',
        },
        {
          title: { en: 'Long Straight Wire & Solenoid Fields', si: 'සෘජු කම්බිය සහ සොලනොයිඩ ක්ෂේත්‍ර' },
          description: {
            en: 'Straight wire at radius r: B = (μ₀ I) / (2π r). Inside a long solenoid with n turns per metre: B = μ₀ n I.',
            si: 'r දුරින් සෘජු කම්බියක ක්ෂේත්‍රය: B = (μ₀ I) / (2π r). මීටරයකට පොටවල් n ඇති සොලනොයිඩයක් තුළ: B = μ₀ n I.',
          },
          formula: 'B_{\\text{wire}} = \\frac{\\mu_0 I}{2\\pi r}, \\quad B_{\\text{solenoid}} = \\mu_0 n I',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'The magnetic field strength inside a solenoid depends on its diameter or cross-sectional area.',
            si: 'සොලනොයිඩයක් තුළ චුම්බක ක්ෂේත්‍රය එහි විෂ්කම්භය හෝ හරස්කඩ වර්ගඵලය මත රඳා පවතී.',
          },
          clarification: {
            en: 'For an ideal long solenoid, B = μ₀ n I is completely uniform across the entire cross-section and independent of diameter, provided the length is much greater than the diameter.',
            si: 'පරිපූර්ණ දිගු සොලනොයිඩයක් තුළ B = μ₀ n I ක්ෂේත්‍රය හරස්කඩ පුරා ඒකාකාර වන අතර විෂ්කම්භය මත රඳා නොපවතී (දිග විෂ්කම්භයට වඩා බෙහෙවින් වැඩි නම්).',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 7.6: Interactive Simulation Lab
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-6',
    slug: 'magnetic-field-simulation-lab',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 6,
    syllabusRef: 'Syllabus Laboratory Simulation',
    title: {
      en: 'Magnetic Field & Galvanometer Simulation Lab',
      si: 'චුම්බක ක්ෂේත්‍ර සහ ගැල්වනෝමීටර සමාකරණ විද්‍යාගාරය',
    },
    summary: {
      en: '60fps interactive laboratory featuring charged particle cyclotron trajectories (cyclotron radius, helical pitch, velocity filtering) and a virtual moving-coil galvanometer with radial field dynamics and live ammeter/voltmeter conversion calculators.',
      si: 'ආරෝපිත අංශුවල සයික්ලොට්‍රෝන චලිතය සහ අරීය ක්ෂේත්‍රයක් සහිත සසල දඟර ගැල්වනෝමීටරයක ක්‍රියාකාරීත්වය මෙන්ම ඇමීටර්/වෝල්ට්මීටර් පරිවර්තන ගණනය කරන අන්තර්ක්‍රියාකාරී සමාකරණ විද්‍යාගාරය.',
    },
    learningObjectives: [
      {
        en: 'Manipulate particle charge, speed, mass, and B-field to observe real-time cyclotron orbits and verify r = mv/(qB).',
        si: 'අංශු ආරෝපණය, වේගය, ස්කන්ධය හා ක්ෂේත්‍රය වෙනස් කර සයික්ලොට්‍රෝන කක්ෂ නිරීක්ෂණය කර r = mv/(qB) තහවුරු කිරීම.',
      },
      {
        en: 'Observe velocity filtering in crossed E and B fields, verifying condition v = E/B for straight passage.',
        si: 'ඡේදනය වූ E හා B ක්ෂේත්‍රවල ප්‍රවේග පෙරීම නිරීක්ෂණය කර සෘජුව ගමන් කිරීමට v = E/B කොන්දේසිය තහවුරු කිරීම.',
      },
      {
        en: 'Simulate needle deflection in a moving-coil galvanometer and calculate necessary shunt/multiplier values for real-world current and voltage ranges.',
        si: 'සසල දඟර ගැල්වනෝමීටරයේ කටුවේ අපගමනය සමාකරණය කර විවිධ පරාස සඳහා ෂන්ට් හා ගුණක ප්‍රතිරෝධ ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Interactive cyclotron radius and period telemetry', si: 'සයික්ලොට්‍රෝන අරය සහ ආවර්ත කාල මිනුම්' },
      { en: 'Crossed electric and magnetic velocity filter mode', si: 'ඡේදනය වූ ක්ෂේත්‍ර ප්‍රවේග පෙරහන් මාදිලිය' },
      { en: 'Galvanometer angular deflection simulator under radial B-field', si: 'අරීය ක්ෂේත්‍රයක ගැල්වනෝමීටර කෝණික අපගමන සමාකරණය' },
      { en: 'Ammeter shunt resistor and voltmeter multiplier circuit calculators', si: 'ඇමීටර් ෂන්ට් සහ වෝල්ට්මීටර් ගුණක ප්‍රතිරෝධ පරිපථ කැල්කියුලේටර' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'magnetic-field-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 7.7: Summative Unit Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-7-7',
    slug: 'magnetic-field-assessment',
    unitSlug: 'magnetic-field',
    unitOrder: 7,
    lessonOrder: 7,
    syllabusRef: 'Unit 7 Summative Assessment',
    title: {
      en: 'Unit 7 Comprehensive Assessment',
      si: 'ඒකක 7 සමස්ත ඇගයීම',
    },
    summary: {
      en: '20-question summative exam covering all 3 syllabus competencies (7.1 to 7.3) with automated grading, competency breakdown, and targeted revision links.',
      si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා විශ්ලේෂණය සහ ඉලක්කගත පුනරීක්ෂණ සබැඳි සහිත සියලු නිපුණතා 3 (7.1 සිට 7.3) ආවරණය කරන ප්‍රශ්න 20 ක සමාප්ති විභාගය.',
    },
    learningObjectives: [
      {
        en: 'Assess comprehensive student mastery of Unit 7 theory, numerical calculations, and instrument applications.',
        si: 'ඒකක 7 සිද්ධාන්ත, සංඛ්‍යාත්මක ගණනය කිරීම් සහ උපකරණ භාවිත පිළිබඳ ශිෂ්‍ය ප්‍රවීණතාව ඇගයීම.',
      },
    ],
    topicOutline: [
      { en: 'Competency 7.1: Magnetic Forces & Hall Effect', si: 'නිපුණතාව 7.1: චුම්බක බල සහ හෝල් ආචරණය' },
      { en: 'Competency 7.2: Fields Produced by Currents & Terrestrial Magnetism', si: 'නිපුණතාව 7.2: ධාරා මඟින් ජනනය වන ක්ෂේත්‍ර සහ භෞමික චුම්බකත්වය' },
      { en: 'Competency 7.3: Coil Torque, Galvanometers & DC Motors', si: 'නිපුණතාව 7.3: දඟර මත ව්‍යාවර්තය, ගැල්වනෝමීටර සහ DC මෝටර්' },
    ],
    status: 'ready',
    hasSimulation: false,
    simulationType: 'magnetism-assessment',
  },
];
