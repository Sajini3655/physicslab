import { LessonDefinition } from '@/shared/curriculum/types';

export const ELECTROSTATICS_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 6.1: Coulomb's Law and Electric Field Intensity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-1',
    slug: 'coulombs-law-and-electric-field',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 1,
    syllabusRef: 'Competency 6.1',
    title: {
      en: 'Coulomb’s Law and Electric Field Intensity',
      si: 'කූලෝම් නියමය සහ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව',
    },
    summary: {
      en: 'Quantization and conservation of electric charge, Coulomb’s Law in vacuum and dielectric media, permittivity, electric field strength E = F/q = Q/(4πεr²), electric dipoles, and field line properties.',
      si: 'විද්‍යුත් ආරෝපණයේ ක්වොන්ටීකරණය සහ සංස්ථිතිය, රික්තයේ හා පාරවිද්‍යුත් මාධ්‍යවල කූලෝම් නියමය, පාරගම්‍යතාව, විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E = F/q = Q/(4πεr²), විද්‍යුත් ද්විධ්‍රැව සහ ක්ෂේත්‍ර රේඛාවල ගුණාංග.',
    },
    learningObjectives: [
      {
        en: 'State Coulomb’s Law (F = (1/4πε₀εᵣ) (q₁q₂/r²)) and calculate electrostatic forces between multiple point charges in vacuum and dielectric media.',
        si: 'කූලෝම් නියමය ප්‍රකාශ කිරීම සහ රික්තයේ හා පාරවිද්‍යුත් මාධ්‍යවල ලක්ෂ්‍යමය ආරෝපණ අතර ස්ථිති විද්‍යුත් බල ගණනය කිරීම.',
      },
      {
        en: 'Define electric field intensity E = F/q₀ and determine the resultant field due to systems of point charges and electric dipoles using vector addition.',
        si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව E = F/q₀ අර්ථ දැක්වීම සහ දෛශික එකතු කිරීම ඇසුරෙන් ලක්ෂ්‍යමය ආරෝපණ හා විද්‍යුත් ද්විධ්‍රැව මගින් ඇතිවන සම්ප්‍රයුක්ත ක්ෂේත්‍රය නිර්ණය කිරීම.',
      },
      {
        en: 'Sketch and interpret electric field line patterns for isolated point charges, dipoles, and pairs of like charges, stating physical boundary rules.',
        si: 'හුදකලා ආරෝපණ, ද්විධ්‍රැව සහ සජාතීය ආරෝපණ යුගල සඳහා විද්‍යුත් ක්ෂේත්‍ර රේඛා රටා ඇඳීම හා අර්ථ නිරූපණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Charge quantization (q = ne) and charge conservation principles', si: 'ආරෝපණ ක්වොන්ටීකරණය (q = ne) සහ සංස්ථිති මූලධර්ම' },
      { en: 'Coulomb’s Inverse Square Law and permittivity of media (ε = ε₀ εᵣ)', si: 'කූලෝම්ගේ ප්‍රතිලෝම වර්ග නියමය සහ මාධ්‍යවල පාරගම්‍යතාව' },
      { en: 'Electric field intensity definition: E = F / q₀ (N C⁻¹ or V m⁻¹)', si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව අර්ථ දැක්වීම' },
      { en: 'Superposition principle for electric fields and neutral points', si: 'විද්‍යුත් ක්ෂේත්‍ර සඳහා සම්පාත මූලධර්මය සහ උදාසීන ලක්ෂ්‍ය' },
      { en: 'Electric dipoles, dipole moment (p = 2aq), and axial vs equatorial fields', si: 'විද්‍යුත් ද්විධ්‍රැව, ද්විධ්‍රැව ඝූර්ණය සහ ක්ෂේත්‍ර' },
      { en: 'Properties and rules of electric field lines', si: 'විද්‍යුත් ක්ෂේත්‍ර රේඛාවල ගුණාංග සහ නීති' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electrostatics studies electric charges at rest. Two fundamental principles govern all electrostatic interactions: charge conservation (total charge in an isolated system remains strictly constant) and Coulomb’s inverse-square law, which quantifies the mutual forces between stationary charges.',
        si: 'ස්ථිති විද්‍යුතය යනු නිශ්චල විද්‍යුත් ආරෝපණ පිළිබඳ හැදෑරීමයි. සියලු ස්ථිති විද්‍යුත් අන්තර්ක්‍රියා මූලික නියම දෙකක් මගින් පාලනය වේ: ආරෝපණ සංස්ථිතිය සහ නිශ්චල ආරෝපණ අතර අන්‍යෝන්‍ය බලය ගණනය කරන කූලෝම්ගේ ප්‍රතිලෝම වර්ග නියමය.',
      },
      keyConcepts: [
        {
          title: { en: 'Coulomb’s Law', si: 'කූලෝම් නියමය' },
          description: {
            en: 'Mutual force between two point charges: F = (1 / 4πε) (|q₁ q₂| / r²), where 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻² in vacuum.',
            si: 'ලක්ෂ්‍යමය ආරෝපණ දෙකක් අතර අන්‍යෝන්‍ය බලය: F = (1 / 4πε) (|q₁ q₂| / r²). රික්තයේදී 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻² වේ.',
          },
          formula: 'F = \\frac{1}{4\\pi \\varepsilon_0 \\varepsilon_r} \\frac{|q_1 q_2|}{r^2}',
        },
        {
          title: { en: 'Electric Field Intensity', si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව' },
          description: {
            en: 'The electrostatic force per unit positive test charge: E = F / q₀ = (1 / 4πε) (Q / r²). Radially outward from positive charge, inward toward negative charge.',
            si: 'ඒකක ධන පරීක්ෂා ආරෝපණයක් මත ක්‍රියා කරන ස්ථිති විද්‍යුත් බලය: E = F / q₀ = (1 / 4πε) (Q / r²). ධන ආරෝපණයකින් ඉවතටත් ඍණ ආරෝපණය දෙසටත් යොමුවේ.',
          },
          formula: 'E = \\frac{1}{4\\pi \\varepsilon_0 \\varepsilon_r} \\frac{Q}{r^2}',
        },
        {
          title: { en: 'Relative Permittivity (Dielectric Constant)', si: 'සාපේක්ෂ පාරගම්‍යතාව (පාරවිද්‍යුත් නියතය)' },
          description: {
            en: 'The ratio of force in vacuum to force in a medium: εᵣ = F_vacuum / F_medium = ε / ε₀. For air/vacuum εᵣ ≈ 1; for water εᵣ ≈ 80.',
            si: 'රික්තයේ බලය මාධ්‍යයක බලයට දරන අනුපාතය: εᵣ = F_vacuum / F_medium = ε / ε₀. වාතයේදී εᵣ ≈ 1 වන අතර ජලයේදී εᵣ ≈ 80 වේ.',
          },
          formula: '\\varepsilon_r = \\frac{\\varepsilon}{\\varepsilon_0} = \\frac{F_{\\text{vacuum}}}{F_{\\text{medium}}}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Electric field lines represent actual physical trajectories that a released charged particle will always follow.',
            si: 'විද්‍යුත් ක්ෂේත්‍ර රේඛා යනු නිදහස් කළ ආරෝපිත අංශුවක් සැමවිටම ගමන් කරන සැබෑ භෞතික ගමන් මගයි.',
          },
          clarification: {
            en: 'Field lines only indicate the direction of the electrostatic force at each instantaneous point (acceleration direction). Because a moving particle possesses inertia, its actual velocity trajectory generally diverges from curved field lines.',
            si: 'ක්ෂේත්‍ර රේඛාවලින් පෙන්වන්නේ එම ක්ෂණයේදී ආරෝපණය මත බලය (ත්වරණයේ දිශාව) පමණි. අංශුවේ අවස්ථිතිය නිසා ප්‍රවේග දෛශිකය වක්‍ර ක්ෂේත්‍ර රේඛා ඔස්සේම නොගොස් අපගමනය වේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 6.2: Electric Potential and Equipotential Surfaces
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-2',
    slug: 'electric-potential-and-equipotential-surfaces',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 2,
    syllabusRef: 'Competency 6.2',
    title: {
      en: 'Electric Potential and Equipotential Surfaces',
      si: 'විද්‍යුත් විභවය සහ සමවිභව පෘෂ්ඨ',
    },
    summary: {
      en: 'Definition of electric potential V, potential energy U = qV, potential difference ΔV, work done W = qΔV, relationship E = -dV/dr, equipotential surfaces, action of points, and lightning arresters.',
      si: 'විද්‍යුත් විභවය V හි අර්ථ දැක්වීම, විභව ශක්තිය U = qV, විභව අන්තරය ΔV, කෙරෙන කාර්යය W = qΔV, E = -dV/dr සම්බන්ධය, සමවිභව පෘෂ්ඨ, තුඩු ක්‍රියාව සහ අකුණු සන්නායක.',
    },
    learningObjectives: [
      {
        en: 'Define electric potential V at a point as external work done per unit positive charge from infinity, and calculate V = (1/4πε) (Q/r).',
        si: 'විද්‍යුත් විභවය V යනු අනන්තයේ සිට ඒකක ධන ආරෝපණයක් ගෙන ඒමේදී කෙරෙන කාර්යය ලෙස අර්ථ දැක්වීම සහ V = (1/4πε) (Q/r) ගණනය කිරීම.',
      },
      {
        en: 'Relate electric field and potential gradient via E = -dV/dr and use it to solve potential differences in uniform and radial fields.',
        si: 'E = -dV/dr මගින් විද්‍යුත් ක්ෂේත්‍රය සහ විභව අනුක්‍රමණය සම්බන්ධ කිරීම සහ ඒකාකාර හා අරීය ක්ෂේත්‍රවල විභව අන්තර ගණනය කිරීම.',
      },
      {
        en: 'Explain properties of equipotential surfaces, the physical mechanism behind the action of points (corona discharge), and the protective action of lightning conductors.',
        si: 'සමවිභව පෘෂ්ඨවල ගුණාංග, තුඩු ක්‍රියාවේ (කොරෝනා විසර්ජනය) භෞතික යාන්ත්‍රණය සහ අකුණු සන්නායකයක ආරක්ෂිත ක්‍රියාවලිය පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Work done in moving charges and conservative nature of electrostatic field', si: 'ආරෝපණ විස්ථාපනයේදී කෙරෙන කාර්යය සහ ක්ෂේත්‍රයේ සංස්ථිතික ස්වභාවය' },
      { en: 'Electric potential V = Q / (4πε₀ r) with zero reference at infinity', si: 'අනන්තයේ ශුන්‍ය සමුද්දේශය සහිත විද්‍යුත් විභවය' },
      { en: 'Electric potential energy of charge systems: U = (1/4πε) (q₁q₂/r)', si: 'ආරෝපණ පද්ධතිවල විද්‍යුත් විභව ශක්තිය' },
      { en: 'Potential gradient relationship: E = -dV/dr', si: 'විභව අනුක්‍රමණ සම්බන්ධය: E = -dV/dr' },
      { en: 'Equipotential surfaces: properties, perpendicularity to field lines, zero work', si: 'සමවිභව පෘෂ්ඨ: ගුණාංග, ලම්බකතාව සහ ශුන්‍ය කාර්යය' },
      { en: 'Surface charge density on curved conductors (σ ∝ 1/r) and action of points', si: 'වක්‍ර සන්නායක මත ආරෝපණ ඝනත්වය (σ ∝ 1/r) සහ තුඩු ක්‍රියාව' },
      { en: 'Lightning conductor construction, ionization discharge, and safe grounding', si: 'අකුණු සන්නායක ක්‍රියාකාරිත්වය සහ ආරක්ෂිත භූගත කිරීම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electric potential is the scalar analog to electric field, representing the electrical potential energy per unit charge. Because the electrostatic force is conservative, the work done moving a charge between two points is entirely independent of the trajectory taken.',
        si: 'විද්‍යුත් විභවය යනු විද්‍යුත් ක්ෂේත්‍රයේ අදිශ නිරූපණයයි, එය ඒකක ආරෝපණයක විභව ශක්තිය දක්වයි. ස්ථිති විද්‍යුත් බලය සංස්ථිතික වන බැවින් ලක්ෂ්‍ය දෙකක් අතර ආරෝපණයක් ගෙනයාමේදී කෙරෙන කාර්යය ගමන් මග මත රඳා නොපවතී.',
      },
      keyConcepts: [
        {
          title: { en: 'Electric Potential', si: 'විද්‍යුත් විභවය' },
          description: {
            en: 'Scalar potential at distance r from point charge Q: V = (1 / 4πε) (Q / r). Positive for positive charges; negative for negative charges.',
            si: 'ලක්ෂ්‍යමය ආරෝපණයක සිට r දුරකදී අදිශ විභවය: V = (1 / 4πε) (Q / r). ධන ආරෝපණ සඳහා ධන වන අතර ඍණ ආරෝපණ සඳහා ඍණ වේ.',
          },
          formula: 'V = \\frac{1}{4\\pi \\varepsilon_0 \\varepsilon_r} \\frac{Q}{r}',
        },
        {
          title: { en: 'Potential Gradient', si: 'විභව අනුක්‍රමණය' },
          description: {
            en: 'Electric field strength equals the negative derivative of potential with respect to distance: E = -dV/dr. In a uniform field, E = V / d.',
            si: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව විභවයේ ඍණ දුර අවකලනයට සමාන වේ: E = -dV/dr. ඒකාකාර ක්ෂේත්‍රයකදී, E = V / d වේ.',
          },
          formula: 'E = -\\frac{dV}{dr} \\implies E = \\frac{V}{d} \\text{ (uniform field)}',
        },
        {
          title: { en: 'Action of Points (Corona Discharge)', si: 'තුඩු ක්‍රියාව (කොරෝනා විසර්ජනය)' },
          description: {
            en: 'On any charged conductor, potential V is uniform, which forces surface charge density σ ∝ 1/r. At sharp points with tiny radius r, σ and E = σ/ε become intense enough to ionize surrounding air molecules.',
            si: 'සන්නායකයක විභවය V නියත බැවින් පෘෂ්ඨික ආරෝපණ ඝනත්වය σ ∝ 1/r වේ. කුඩා අරයක් r සහිත උල් තුඩුවල ආරෝපණ ඝනත්වය සහ ක්ෂේත්‍රය E = σ/ε වාතය අයනීකරණය කිරීමට තරම් ප්‍රබල වේ.',
          },
          formula: '\\sigma \\propto \\frac{1}{r}, \\quad E = \\frac{\\sigma}{\\varepsilon_0}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'If the electric potential V at a point in space is zero, the electric field E at that point must also be zero.',
            si: 'අවකාශයේ ලක්ෂ්‍යයක විද්‍යුත් විභවය V ශුන්‍ය නම්, එම ලක්ෂ්‍යයේ විද්‍යුත් ක්ෂේත්‍රය E ද අනිවාර්යයෙන්ම ශුන්‍ය විය යුතුය.',
          },
          clarification: {
            en: 'Potential V is a scalar sum, whereas electric field E is a vector sum. At the midpoint between equal and opposite charges (+q and -q), V = +kq/d - kq/d = 0, but both field vectors point in the same direction, producing a strong non-zero electric field (E = 2kq/d² ≠ 0).',
            si: 'විභවය අදිශ ඓක්‍යයක් වන අතර ක්ෂේත්‍රය දෛශික ඓක්‍යයකි. විද්‍යුත් ද්විධ්‍රැවයක (+q සහ -q) මධ්‍ය ලක්ෂ්‍යයේදී විභවය V = 0 වන නමුත් ක්ෂේත්‍ර දෛශික එකතු වී ප්‍රබල ශුන්‍ය නොවන ක්ෂේත්‍රයක් (E ≠ 0) ඇති කරයි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 6.3: Gauss's Law and Conductor Electrostatics
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-3',
    slug: 'gauss-law-and-conductors',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 3,
    syllabusRef: 'Competency 6.3',
    title: {
      en: 'Gauss’s Law and Conductor Electrostatics',
      si: 'ගවුස් නියමය සහ සන්නායකවල ස්ථිති විද්‍යුතය',
    },
    summary: {
      en: 'Electric flux Φ = ∮ E · dA, statement of Gauss’s Law, fields of spherical conductors, infinite sheets, and parallel plates, behavior of conductors in equilibrium, and electrostatic shielding (Faraday cage).',
      si: 'විද්‍යුත් ස්‍රාවය Φ = ∮ E · dA, ගවුස් නියමය ප්‍රකාශ කිරීම, ගෝලීය සන්නායක, අනන්ත තල පත්‍ර සහ සමාන්තර තහඩුවල ක්ෂේත්‍ර, සමතුලිත සන්නායකවල හැසිරීම සහ විද්‍යුත් ස්ථිතික ආවරණය.',
    },
    learningObjectives: [
      {
        en: 'State Gauss’s Law (Φ = ∮ E · dA = Q_enclosed / ε₀) and apply symmetric Gaussian surfaces to determine electric fields of spherical, planar, and plate charge distributions.',
        si: 'ගවුස් නියමය (Φ = ∮ E · dA = Q_enclosed / ε₀) ප්‍රකාශ කිරීම සහ ගෝලීය, තල හා තහඩු ආරෝපණ ව්‍යාප්තිවල ක්ෂේත්‍ර නිර්ණය කිරීමට සමමිතික ගවුසීය පෘෂ්ඨ යෙදීම.',
      },
      {
        en: 'Explain why the electrostatic field inside a conductor is zero, why excess charge resides exclusively on the outer surface, and why the field just outside is normal (E = σ/ε₀).',
        si: 'සන්නායකයක් තුළ ක්ෂේත්‍රය ශුන්‍ය වන්නේ ඇයිද, අතිරික්ත ආරෝපණ පිටත පෘෂ්ඨයේ පමණක් රඳන්නේ ඇයිද සහ පිටතින් ක්ෂේත්‍රය පෘෂ්ඨයට ලම්බක (E = σ/ε₀) වන්නේ ඇයිද යන්න පැහැදිලි කිරීම.',
      },
      {
        en: 'Analyze the physical mechanism of electrostatic shielding (Faraday cage) and its applications in sensitive laboratory instrumentation and lightning protection.',
        si: 'විද්‍යුත් ස්ථිතික ආවරණයේ (ෆැරඩේ කූඩුව) භෞතික යාන්ත්‍රණය සහ සංවේදී විද්‍යාගාර උපකරණ හා අකුණු ආරක්ෂාව සඳහා එහි යෙදීම් විශ්ලේෂණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of electric flux: Φ = E · A = E A cos θ', si: 'විද්‍යුත් ස්‍රාවය පිළිබඳ සංකල්පය' },
      { en: 'Gauss’s Theorem statement: Φ_net = ∮ E · dA = Q_enclosed / ε₀', si: 'ගවුස් ප්‍රමේයය ප්‍රකාශ කිරීම' },
      { en: 'Electric field of charged spherical conductor: inside (E = 0) and outside (E = kQ/r²)', si: 'ආරෝපිත ගෝලීය සන්නායකයක අභ්‍යන්තර හා බාහිර ක්ෂේත්‍රය' },
      { en: 'Electric field near infinite non-conducting sheet: E = σ / (2ε₀)', si: 'අනන්ත අසන්නායක පත්‍රයක් ආසන්නයේ ක්ෂේත්‍රය' },
      { en: 'Field between oppositely charged parallel conducting plates: E = σ / ε₀', si: 'විරුද්ධව ආරෝපිත සමාන්තර තහඩු අතර ක්ෂේත්‍රය' },
      { en: 'Electrostatic equilibrium conditions in conductors: internal E = 0, equipotential volume', si: 'සන්නායකවල ස්ථිති විද්‍යුත් සමතුලිත කොන්දේසි' },
      { en: 'Electrostatic shielding (Faraday cage) and cavity screening', si: 'විද්‍යුත් ස්ථිතික ආවරණය සහ ෆැරඩේ කූඩුව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Gauss’s Law provides a powerful, elegant alternative to Coulomb’s law for calculating electric fields in systems with spatial symmetry (spherical, cylindrical, or planar). It relates the net electric flux leaving any closed surface to the total enclosed charge.',
        si: 'අවකාශීය සමමිතියක් (ගෝලීය, සිලින්ඩරාකාර හෝ තල) සහිත පද්ධතිවල විද්‍යුත් ක්ෂේත්‍ර ගණනය කිරීම සඳහා ගවුස් නියමය කූලෝම් නියමයට වඩා බලවත් විකල්පයක් සපයයි. එය සංවෘත පෘෂ්ඨයක් හරහා පිටවන ශුද්ධ ස්‍රාවය ඇතුළත ඇති මුළු ආරෝපණයට සම්බන්ධ කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Gauss’s Law', si: 'ගවුස් නියමය' },
          description: {
            en: 'Total outward electric flux through any closed Gaussian surface equals the net enclosed charge divided by ε₀: Φ = ∮ E · dA = Q_enclosed / ε₀.',
            si: 'ඕනෑම සංවෘත ගවුසීය පෘෂ්ඨයක් හරහා මුළු විද්‍යුත් ස්‍රාවය එහි අභ්‍යන්තර ආරෝපණය ε₀ න් බෙදූ අගයට සමාන වේ: Φ = Q_enclosed / ε₀.',
          },
          formula: '\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}',
        },
        {
          title: { en: 'Field of a Conducting Sphere', si: 'සන්නායක ගෝලයක ක්ෂේත්‍රය' },
          description: {
            en: 'For a solid or hollow conducting sphere of radius R: Inside (r < R), E = 0; On surface and outside (r ≥ R), E = (1/4πε₀) (Q / r²).',
            si: 'R අරැති සන්නායක ගෝලයකට: ඇතුළතදී (r < R), E = 0; පෘෂ්ඨය මත හා පිටතදී (r ≥ R), E = (1/4πε₀) (Q / r²) වේ.',
          },
          formula: 'E(r) = \\begin{cases} 0 & r < R \\\\ \\frac{Q}{4\\pi\\varepsilon_0 r^2} & r \\ge R \\end{cases}',
        },
        {
          title: { en: 'Electrostatic Shielding', si: 'විද්‍යුත් ස්ථිතික ආවරණය' },
          description: {
            en: 'Because mobile electrons in a metal cancel out any internal fields, the interior cavity of any closed conductor remains completely free from external electrostatic fields regardless of external charges.',
            si: 'ලෝහයක නිදහස් ඉලෙක්ට්‍රෝන මගින් අභ්‍යන්තර ක්ෂේත්‍ර අවලංගු කරන බැවින්, බාහිරව ඇති ආරෝපණ කුමක් වුවද සංවෘත සන්නායකයක අභ්‍යන්තර කුහරය බාහිර ක්ෂේත්‍රවලින් සම්පූර්ණයෙන්ම ආරක්ෂා වේ.',
          },
          formula: 'E_{\\text{cavity}} = 0',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Rubber car tires protect occupants from lightning by insulating the vehicle from the ground.',
            si: 'රබර් ටයර් මගින් මෝටර් රථය පොළොවෙන් පරිවරණය කර අකුණු අනතුරින් මගීන් ආරක්ෂා කරයි.',
          },
          clarification: {
            en: 'Lightning jumps across thousands of meters of air; a few centimeters of rubber cannot stop it. Protection is provided entirely by the conductive steel or aluminum bodywork acting as a Faraday cage, diverting current safely around the outside to ground.',
            si: 'වාතයේ කිලෝමීටර ගණනක් තරණය කරන අකුණකට සෙන්ටිමීටර කිහිපයක රබර් ටයරයකින් බාධා කළ නොහැක. සැබෑ ආරක්ෂාව සපයන්නේ ෆැරඩේ කූඩුවක් ලෙස ක්‍රියා කරමින් ධාරාව පිටත ලෝහ බඳ ඔස්සේ පොළොවට රැගෙන යන ලෝහ ශරීරය මගිනි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 6.4: Capacitors, Dielectrics and Electrostatic Energy
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-4',
    slug: 'capacitance-dielectrics-and-energy',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 4,
    syllabusRef: 'Competency 6.4',
    title: {
      en: 'Capacitors, Dielectrics and Electrostatic Energy',
      si: 'ධාරිත්‍රක, පාරවිද්‍යුත සහ ස්ථිති විද්‍යුත් ශක්තිය',
    },
    summary: {
      en: 'Capacitance C = Q/V, parallel-plate capacitor formula C = ε₀εᵣA/d, series and parallel combinations, stored energy U = 1/2 CV² = Q²/2C = 1/2 QV, energy density u = 1/2 εE², and dielectric polarization.',
      si: 'ධාරිතාව C = Q/V, සමාන්තර තහඩු ධාරිත්‍රක සූත්‍රය C = ε₀εᵣA/d, ශ්‍රේණිගත හා සමාන්තරගත සංයෝජන, ගබඩා ශක්තිය U = 1/2 CV² = Q²/2C = 1/2 QV, ශක්ති ඝනත්වය u = 1/2 εE², සහ පාරවිද්‍යුත් ධ්‍රැවීකරණය.',
    },
    learningObjectives: [
      {
        en: 'Derive parallel-plate capacitance C = ε₀εᵣA/d and analyze how altering area A, separation d, and dielectric constant εᵣ affects C, Q, V, and E under connected vs disconnected battery states.',
        si: 'සමාන්තර තහඩු ධාරිතාව C = ε₀εᵣA/d ව්‍යුත්පන්න කිරීම සහ බැටරිය සම්බන්ධ හා විසන්ධි අවස්ථාවල A, d සහ εᵣ වෙනස් කළ විට C, Q, V හා E විචලනය වන ආකාරය විශ්ලේෂණය කිරීම.',
      },
      {
        en: 'Calculate equivalent capacitance for series (1/C_s = Σ 1/C_i) and parallel (C_p = Σ C_i) networks and solve multi-capacitor circuit problems.',
        si: 'ශ්‍රේණිගත (1/C_s = Σ 1/C_i) සහ සමාන්තරගත (C_p = Σ C_i) ජාල සඳහා සමක ධාරිතාව ගණනය කිරීම සහ බහු-ධාරිත්‍රක පරිපථ ගැටලු විසඳීම.',
      },
      {
        en: 'Derive stored electrostatic energy (U = 1/2 CV² = Q²/2C = 1/2 QV) and electrostatic energy density (u = 1/2 εE²), explaining energy dissipation during capacitor charge sharing.',
        si: 'ගබඩා ස්ථිති විද්‍යුත් ශක්තිය (U = 1/2 CV² = Q²/2C = 1/2 QV) සහ ශක්ති ඝනත්වය (u = 1/2 εE²) ව්‍යුත්පන්න කිරීම සහ ධාරිත්‍රක අතර ආරෝපණ බෙදී යාමේදී ශක්ති හානිය පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept and definition of capacitance: C = Q / V (Farads)', si: 'ධාරිතාව පිළිබඳ සංකල්පය සහ අර්ථ දැක්වීම' },
      { en: 'Parallel plate capacitor derivation: C = ε₀ εᵣ A / d', si: 'සමාන්තර තහඩු ධාරිත්‍රක සූත්‍රය ව්‍යුත්පන්න කිරීම' },
      { en: 'Dielectric polarization, bound surface charges, and dielectric strength', si: 'පාරවිද්‍යුත් ධ්‍රැවීකරණය සහ පාරවිද්‍යුත් ශක්තිය' },
      { en: 'Effects of dielectric insertion: battery connected (V const) vs disconnected (Q const)', si: 'පාරවිද්‍යුතයක් ඇතුළු කිරීමේ බලපෑම: බැටරිය සම්බන්ධ හා විසන්ධි අවස්ථා' },
      { en: 'Series capacitor combinations: charge is identical, voltages divide', si: 'ශ්‍රේණිගත සංයෝජන: ආරෝපණය සමාන වේ' },
      { en: 'Parallel capacitor combinations: voltage is identical, charges add', si: 'සමාන්තරගත සංයෝජන: වෝල්ටීයතාව සමාන වේ' },
      { en: 'Derivation of stored electrostatic energy: U = 1/2 CV² = Q² / (2C)', si: 'ගබඩා ස්ථිති විද්‍යුත් ශක්තිය ව්‍යුත්පන්නය' },
      { en: 'Electrostatic field energy density: u = 1/2 ε₀ εᵣ E²', si: 'විද්‍යුත් ක්ෂේත්‍රයේ ශක්ති ඝනත්වය' },
      { en: 'Energy loss during charge sharing between connected capacitors', si: 'ධාරිත්‍රක සම්බන්ධ කිරීමේදී සිදුවන ශක්ති හානිය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A capacitor is a device designed to store electrostatic potential energy in the electric field between two opposing conductors. By inserting insulating dielectrics, capacitance can be increased substantially while preventing electrical breakdown.',
        si: 'ධාරිත්‍රකයක් යනු සන්නායක තහඩු දෙකක් අතර විද්‍යුත් ක්ෂේත්‍රය තුළ ස්ථිති විද්‍යුත් විභව ශක්තිය ගබඩා කිරීමට නිර්මාණය කරන ලද උපකරණයකි. පරිවාරක පාරවිද්‍යුතයක් ඇතුළු කිරීමෙන් විද්‍යුත් විසර්ජනය වළක්වමින් ධාරිතාව විශාල ලෙස වැඩි කළ හැක.',
      },
      keyConcepts: [
        {
          title: { en: 'Parallel Plate Capacitance', si: 'සමාන්තර තහඩු ධාරිතාව' },
          description: {
            en: 'Capacitance of two parallel plates of area A separated by distance d with dielectric εᵣ: C = ε₀ εᵣ A / d.',
            si: 'පරතරය d සහ වර්ගඵලය A වූ තහඩු දෙකක ධාරිතාව: C = ε₀ εᵣ A / d වේ.',
          },
          formula: 'C = \\frac{\\varepsilon_0 \\varepsilon_r A}{d}',
        },
        {
          title: { en: 'Capacitor Combinations', si: 'ධාරිත්‍රක සංයෝජන' },
          description: {
            en: 'Series: 1/C_s = 1/C₁ + 1/C₂ + ... (all store same charge Q). Parallel: C_p = C₁ + C₂ + ... (all experience same voltage V).',
            si: 'ශ්‍රේණිගතව: 1/C_s = 1/C₁ + 1/C₂ + ... (එකම ආරෝපණය Q). සමාන්තරගතව: C_p = C₁ + C₂ + ... (එකම වෝල්ටීයතාව V).',
          },
          formula: '\\frac{1}{C_s} = \\sum \\frac{1}{C_i}, \\quad C_p = \\sum C_i',
        },
        {
          title: { en: 'Stored Electrostatic Energy', si: 'ගබඩා ස්ථිති විද්‍යුත් ශක්තිය' },
          description: {
            en: 'Total work done establishing the electric field: U = 1/2 CV² = Q² / (2C) = 1/2 QV. The energy resides in the field with density u = 1/2 ε E².',
            si: 'ක්ෂේත්‍රය ගොඩනැගීමට කළ මුළු කාර්යය: U = 1/2 CV² = Q² / (2C) = 1/2 QV. ශක්ති ඝනත්වය u = 1/2 ε E² වේ.',
          },
          formula: 'U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V, \\quad u = \\frac{1}{2} \\varepsilon E^2',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'When a dielectric slab is inserted into a charged capacitor, its stored energy always decreases.',
            si: 'ආරෝපිත ධාරිත්‍රකයකට පාරවිද්‍යුතයක් ඇතුළු කළ විට එහි ගබඩා ශක්තිය සැමවිටම අඩු වේ.',
          },
          clarification: {
            en: 'It depends on whether the battery remains connected! If disconnected (Q = const), U = Q²/(2C) decreases as C increases (the dielectric is pulled in by electrostatic forces, doing mechanical work). But if the battery is CONNECTED (V = const), U = 1/2 CV² INCREASES as C increases because the battery draws additional charge from its terminals.',
            si: 'එය බැටරිය සම්බන්ධද නැද්ද යන්න මත රඳා පවතී! බැටරිය විසන්ධි නම් (Q නියතයි), U = Q²/(2C) අනුව C වැඩිවන විට ශක්තිය අඩු වේ. නමුත් බැටරිය සම්බන්ධ නම් (V නියතයි), U = 1/2 CV² අනුව C වැඩිවන විට ශක්තිය වැඩිවේ!',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 6.5: Interactive Simulation Lab - Electrostatics & Capacitors
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-5',
    slug: 'electrostatics-simulation-lab',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 5,
    syllabusRef: 'Interactive Laboratory',
    title: {
      en: 'Electrostatics & Capacitor Simulation Lab',
      si: 'ස්ථිති විද්‍යුත් හා ධාරිත්‍රක අන්තර්ක්‍රියාකාරී විද්‍යාගාරය',
    },
    summary: {
      en: 'Interactive 60fps dual-mode simulation: Parallel-plate capacitor lab with dielectric insertion, connected vs disconnected battery states, live energy density telemetry, and 2D electric field line & equipotential probe mapping.',
      si: 'ද්වි-මාදිලි අන්තර්ක්‍රියාකාරී සිමියුලේෂනය: පාරවිද්‍යුත ඇතුළු කිරීම, බැටරිය සම්බන්ධ හා විසන්ධි අවස්ථා, සජීවී ශක්ති ඝනත්ව දත්ත, සහ 2D විද්‍යුත් ක්ෂේත්‍ර රේඛා හා සමවිභව පෘෂ්ඨ ගවේෂණය.',
    },
    learningObjectives: [
      {
        en: 'Interactively explore how changing plate area, separation, and dielectric permittivity influences capacitance, electric field, and stored charge.',
        si: 'තහඩු වර්ගඵලය, පරතරය සහ පාරවිද්‍යුතය වෙනස් කිරීම ධාරිතාව, විද්‍යුත් ක්ෂේත්‍රය සහ ගබඩා ආරෝපණය කෙරෙහි බලපාන ආකාරය අන්තර්ක්‍රියාකාරීව ගවේෂණය කිරීම.',
      },
      {
        en: 'Verify the contrast in energy dynamics between battery connected (constant V) and battery disconnected (constant Q) operations.',
        si: 'බැටරිය සම්බන්ධ (නියත V) සහ බැටරිය විසන්ධි (නියත Q) ක්‍රියාකාරිත්වයන් අතර ශක්ති ගතිකත්වයේ වෙනස ප්‍රත්‍යක්ෂ කිරීම.',
      },
      {
        en: 'Map vector electric field directions and equipotential surfaces around multiple interacting positive and negative point charges using a live probe.',
        si: 'සජීවී පරීක්ෂකයක් මගින් අන්තර්ක්‍රියා කරන ධන හා ඍණ ලක්ෂ්‍යමය ආරෝපණ වටා විද්‍යුත් ක්ෂේත්‍ර දෛශික හා සමවිභව පෘෂ්ඨ සිතියම්ගත කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Parallel plate capacitor geometry and real-time capacitance calculations', si: 'සමාන්තර තහඩු ධාරිත්‍රක ජ්‍යාමිතිය සහ ධාරිතා ගණනය කිරීම' },
      { en: 'Dielectric slab insertion physics (paper, mica, ceramic)', si: 'පාරවිද්‍යුත් කුට්ටි ඇතුළු කිරීමේ භෞතික විද්‍යාව' },
      { en: 'Constant voltage vs constant charge circuit states', si: 'නියත වෝල්ටීයතා හා නියත ආරෝපණ පරිපථ අවස්ථා' },
      { en: 'Electric field vector grid and interactive test probe telemetry', si: 'විද්‍යුත් ක්ෂේත්‍ර දෛශික ජාලය සහ සජීවී පරීක්ෂක දත්ත' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electrostatics-simulation',
  },

  // -------------------------------------------------------------------------
  // Lesson 6.6: Unit Assessment - Electrostatic Field
  // -------------------------------------------------------------------------
  {
    id: 'lesson-6-6',
    slug: 'electrostatics-unit-assessment',
    unitSlug: 'electrostatic-field',
    unitOrder: 6,
    lessonOrder: 6,
    syllabusRef: 'Summative Assessment',
    title: {
      en: 'Unit 6 Summative Assessment: Electrostatic Field',
      si: 'ඒකක 6 සමාප්ති ඇගයීම: ස්ථිති විද්‍යුත් ක්ෂේත්‍ර',
    },
    summary: {
      en: 'Comprehensive 16-question exam covering all competencies (6.1–6.4): Coulomb’s law, field intensity, potential, Gauss’s theorem, conductors, and capacitance with automated scoring and competency breakdown.',
      si: 'සියලුම නිපුණතා (6.1–6.4) ආවරණය වන ප්‍රශ්න 16 කින් සමන්විත පූර්ණ ඇගයීම: ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා විශ්ලේෂණය සහ පියවරෙන් පියවර විසඳුම් සහිතයි.',
    },
    learningObjectives: [
      {
        en: 'Assess mastery across all 4 syllabus competencies for Electrostatic Field under exam conditions.',
        si: 'විභාග කොන්දේසි යටතේ ස්ථිති විද්‍යුත් ක්ෂේත්‍ර විෂය නිර්දේශයේ සියලුම නිපුණතා 4 හි ප්‍රවීණතාව ඇගයීම.',
      },
      {
        en: 'Identify individual competency weaknesses and receive targeted lesson revision links.',
        si: 'දුර්වල නිපුණතා හඳුනාගෙන ඒ සඳහා නිර්දේශිත ඉලක්කගත පාඩම් වෙත යොමු වීම.',
      },
    ],
    topicOutline: [
      { en: 'Competency 6.1: Coulomb’s Law & Electric Field Intensity', si: 'නිපුණතාව 6.1: කූලෝම් නියමය සහ විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව' },
      { en: 'Competency 6.2: Electric Potential & Equipotential Surfaces', si: 'නිපුණතාව 6.2: විද්‍යුත් විභවය සහ සමවිභව පෘෂ්ඨ' },
      { en: 'Competency 6.3: Gauss’s Law & Conductor Electrostatics', si: 'නිපුණතාව 6.3: ගවුස් නියමය සහ සන්නායකවල ස්ථිති විද්‍යුතය' },
      { en: 'Competency 6.4: Capacitors, Dielectrics & Energy', si: 'නිපුණතාව 6.4: ධාරිත්‍රක, පාරවිද්‍යුත සහ ශක්තිය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electrostatics-assessment',
  },
];
