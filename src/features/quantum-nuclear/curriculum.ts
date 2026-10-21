import { LessonDefinition } from '@/shared/curriculum/types';

export const QUANTUM_NUCLEAR_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 11.1: Black-Body Radiation & Quantum Nature of Radiation
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-1',
    slug: 'blackbody-radiation-and-quantum-theory',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 1,
    syllabusRef: 'Competency 11.1',
    title: {
      en: 'Black-Body Radiation and Quantum Theory',
      si: 'කෘෂ්ණ වස්තු විකිරණය සහ ක්වොන්ටම් වාදය',
    },
    summary: {
      en: 'Black-body radiation curves, Wien’s displacement law λ_max T = b, Stefan-Boltzmann law E = σT⁴, classical failure (ultraviolet catastrophe), and Planck’s quantum hypothesis E = nhf.',
      si: 'කෘෂ්ණ වස්තු විකිරණ වක්‍ර, වීන්ගේ විස්ථාපන නියමය λ_max T = b, ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය E = σT⁴, සම්භාව්‍ය භෞතික විද්‍යාවේ බිඳවැටීම (පාරජම්බුල විනාශය) සහ ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය E = nhf.',
    },
    learningObjectives: [
      {
        en: 'Explain the spectral distribution of black-body radiation and apply Wien’s displacement law and the Stefan-Boltzmann law.',
        si: 'කෘෂ්ණ වස්තු විකිරණයේ වර්ණාවලි පැතිරීම පැහැදිලි කර වීන්ගේ විස්ථාපන නියමය සහ ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය යෙදීම.',
      },
      {
        en: 'Describe how Planck’s quantization hypothesis resolved the ultraviolet catastrophe and initiated modern quantum physics.',
        si: 'ප්ලෑන්ක්ගේ ක්වොන්ටීකරණ උපකල්පනය මගින් පාරජම්බුල විනාශය විසඳා නූතන ක්වොන්ටම් භෞතික විද්‍යාව ඇරඹි ආකාරය විස්තර කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of a perfect black body and experimental cavity radiator', si: 'පරිපූර්ණ කෘෂ්ණ වස්තුව සහ කුහර විකිරකය' },
      { en: 'Spectral energy distribution curves at different temperatures', si: 'විවිධ උෂ්ණත්වවලදී ශක්ති ව්‍යාප්ති වක්‍ර' },
      { en: 'Wien’s displacement law: λ_max T = constant (2.898 × 10⁻³ m K)', si: 'වීන්ගේ විස්ථාපන නියමය: λ_max T = නියතයකි' },
      { en: 'Stefan-Boltzmann law: total emissive power E = σ T⁴', si: 'ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය: E = σ T⁴' },
      { en: 'Rayleigh-Jeans law failure and the Ultraviolet Catastrophe', si: 'රේලී-ජීන්ස් නියමයේ අසාර්ථකත්වය සහ පාරජම්බුල විනාශය' },
      { en: 'Max Planck’s quantum hypothesis: discrete energy packets E = hf', si: 'ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය: විවික්ත ශක්ති පැකට් E = hf' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A black body absorbs all incident electromagnetic radiation regardless of frequency or angle of incidence. The spectral distribution of its emitted radiation at thermodynamic temperature T could not be explained by 19th-century classical electromagnetism, compelling Max Planck in 1900 to introduce energy quantization.',
        si: 'කෘෂ්ණ වස්තුවක් යනු තමන් මත පතිත වන සියලුම විද්‍යුත් චුම්භක විකිරණ සම්පූර්ණයෙන්ම අවශෝෂණය කරන පද්ධතියකි. මෙහි විමෝචන වර්ණාවලිය පැහැදිලි කිරීමට සම්භාව්‍ය භෞතික විද්‍යාව අපොහොසත් වූ අතර, 1900 දී මැක්ස් ප්ලෑන්ක් විසින් ක්වොන්ටම් සංකල්පය හඳුන්වා දෙන ලදී.',
      },
      keyConcepts: [
        {
          title: { en: 'Wien’s Displacement Law', si: 'වීන්ගේ විස්ථාපන නියමය' },
          description: {
            en: 'The wavelength of peak emissive power λ_max is inversely proportional to absolute thermodynamic temperature T: λ_max T = b, where Wien constant b ≈ 2.898 × 10⁻³ m K.',
            si: 'උපරිම විමෝචන තීව්‍රතාවට අනුරූප තරංග ආයාමය λ_max නිරපේක්ෂ උෂ්ණත්වයට T ප්‍රතිලෝමව සමානුපාතික වේ: λ_max T = b.',
          },
          formula: '\\lambda_{\\max} T = b = 2.898 \\times 10^{-3} \\text{ m K}',
        },
        {
          title: { en: 'Stefan-Boltzmann Law', si: 'ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය' },
          description: {
            en: 'The total energy radiated per unit surface area per second across all wavelengths is proportional to the fourth power of absolute temperature: E = σ T⁴, where σ = 5.670 × 10⁻⁸ W m⁻² K⁻⁴.',
            si: 'කෘෂ්ණ වස්තුවක ඒකක වර්ගඵලයකින් තත්පරයකදී විමෝචනය වන මුළු විකිරණ ශක්තිය නිරපේක්ෂ උෂ්ණත්වයේ හතරවන බලයට අනුලෝමව සමානුපාතික වේ: E = σ T⁴.',
          },
          formula: 'E = \\sigma T^4',
        },
        {
          title: { en: 'Planck’s Quantum Hypothesis', si: 'ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය' },
          description: {
            en: 'Atomic oscillators in cavity walls can only absorb or radiate thermal energy in discrete bundles (quanta): E = n h f, where n = 1, 2, 3... and h = 6.626 × 10⁻³⁴ J s.',
            si: 'පදාර්ථය විකිරණ අවශෝෂණය හෝ විමෝචනය කරන්නේ විවික්ත ශක්ති පැකට් හෙවත් ක්වොන්ටා ලෙස පමණි: E = n h f.',
          },
          formula: 'E = n h f = \\frac{n h c}{\\lambda}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'As a black body gets hotter, its peak radiation wavelength shifts toward longer wavelengths (red).',
            si: 'වස්තුවක උෂ්ණත්වය වැඩි වන විට උපරිම විමෝචන තරංග ආයාමය වැඩිවේ.',
          },
          clarification: {
            en: 'By Wien’s law λ_max = b/T, higher temperatures shift peak emission to SHORTER wavelengths (blue/UV). This is why a heating iron glows red, then orange, then bright white.',
            si: 'වීන්ගේ නියමයට අනුව උෂ්ණත්වය වැඩි වන විට λ_max කෙටි තරංග ආයාම (නිල්/පාරජම්බුල) දෙසට විස්ථාපනය වේ. එබැවින් රත්වන යකඩයක් පළමුව රතු පැහැයෙන්ද පසුව සුදු පැහැයෙන්ද බබළයි.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.2: Photoelectric Effect & Photons
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-2',
    slug: 'photoelectric-effect-and-photons',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 2,
    syllabusRef: 'Competency 11.2',
    title: {
      en: 'Photoelectric Effect and the Photon',
      si: 'ප්‍රකාශ විද්‍යුත් ආචරණය සහ ෆෝටෝනය',
    },
    summary: {
      en: 'Master Planck’s quantum hypothesis E = hf, the failure of classical wave theory, Einstein’s photoelectric equation hf = Φ + ½mv_max², threshold frequency f₀, work function Φ, stopping potential V_s, and photocurrent-voltage characteristics.',
      si: 'ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය E = hf, සම්භාව්‍ය තරංග වාදයේ අසමත් වීම, අයින්ස්ටයින්ගේ ප්‍රකාශ විද්‍යුත් සමීකරණය hf = Φ + ½mv_max², සීමාකාරී සංඛ්‍යාතය f₀, කාර්ය ශ්‍රිතය Φ, නැවැත්වීමේ විභවය V_s සහ ප්‍රකාශ ධාරා-විභව ලක්ෂණ ප්‍රගුණ කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Explain why classical wave theory fails to explain threshold frequency, instantaneous emission, and intensity independence of electron kinetic energy.',
        si: 'සීමාකාරී සංඛ්‍යාතය, ක්ෂණික විමෝචනය සහ ඉලෙක්ට්‍රෝන චාලක ශක්තිය ආලෝක තීව්‍රතාව මත රඳා නොපැවතීම සම්භාව්‍ය තරංග වාදයෙන් පැහැදිලි කළ නොහැක්කේ මන්දැයි පහදා දීම.',
      },
      {
        en: 'Apply Einstein’s photoelectric equation hf = Φ + eV_s to calculate photon energies, work functions, and stopping potentials.',
        si: 'ෆෝටෝන ශක්තීන්, කාර්ය ශ්‍රිත සහ නැවැත්වීමේ විභව ගණනය කිරීමට අයින්ස්ටයින්ගේ ප්‍රකාශ විද්‍යුත් සමීකරණය hf = Φ + eV_s යෙදීම.',
      },
      {
        en: 'Interpret stopping potential vs frequency graphs (gradient h/e, x-intercept f₀) and photocurrent vs collector voltage curves.',
        si: 'නැවැත්වීමේ විභවය එදිරිව සංඛ්‍යාත ප්‍රස්ථාර (අනුක්‍රමණය h/e, x-අන්තඃඛණ්ඩය f₀) සහ ප්‍රකාශ ධාරාව එදිරිව විභව වක්‍ර අර්ථ නිරූපණය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Experimental observations of photoelectric emission', si: 'ප්‍රකාශ විද්‍යුත් විමෝචනයේ පර්යේෂණාත්මක නිරීක්ෂණ' },
      { en: 'Limitations of classical electromagnetic wave theory', si: 'සම්භාව්‍ය විද්‍යුත් චුම්භක තරංග වාදයේ සීමාකාරීතා' },
      { en: 'Photon concept: energy E = hf and momentum p = h/λ', si: 'ෆෝටෝන සංකල්පය: ශක්තිය E = hf සහ ගම්‍යතාව p = h/λ' },
      { en: 'Work function Φ, threshold frequency f₀, and threshold wavelength λ₀', si: 'කාර්ය ශ්‍රිතය Φ, සීමාකාරී සංඛ්‍යාතය f₀ සහ සීමාකාරී තරංග ආයාමය λ₀' },
      { en: 'Einstein’s equation: hf = Φ + K_max = hf₀ + eV_s', si: 'අයින්ස්ටයින් සමීකරණය: hf = Φ + K_max = hf₀ + eV_s' },
      { en: 'Stopping potential (V_s) vs frequency graph: gradient h/e', si: 'නැවැත්වීමේ විභවය (V_s) එදිරිව සංඛ්‍යාත ප්‍රස්ථාරය: අනුක්‍රමණය h/e' },
      { en: 'Interactive Photoelectric Lab: wavelength, intensity & stopping potential', si: 'අන්තර්ක්‍රියාකාරී ප්‍රකාශ විද්‍යුත් විද්‍යාගාරය: තරංග ආයාමය, තීව්‍රතාව සහ නැවැත්වීමේ විභවය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'quantum-nuclear-simulation',
    content: {
      introduction: {
        en: 'When electromagnetic radiation illuminates a clean metal surface, electrons can be instantaneously ejected. Heinrich Hertz discovered this phenomenon in 1887, but classical wave physics predicted that electrons would require hours to accumulate enough energy, and that their kinetic energy should increase with light intensity. In 1905, Albert Einstein resolved this crisis by proposing that light behaves as localized packets of energy called photons.',
        si: 'විද්‍යුත් චුම්භක විකිරණ පිරිසිදු ලෝහ පෘෂ්ඨයක් මත පතිත වූ විට ඉලෙක්ට්‍රෝන ක්ෂණිකව විමෝචනය විය හැක. 1887 දී හෙන්රිච් හර්ට්ස් මෙය නිරීක්ෂණය කළද, සම්භාව්‍ය තරංග වාදයට අනුව ඉලෙක්ට්‍රෝන ශක්තිය රැස්කර ගැනීමට පැය ගණනක් ගතවිය යුතු බවත්, චාලක ශක්තිය ආලෝක තීව්‍රතාව මත රඳා පැවතිය යුතු බවත් කියැවිණි. 1905 දී ඇල්බට් අයින්ස්ටයින් ආලෝකය ෆෝටෝන නම් ශක්ති පැකට් ලෙස හැසිරෙන බව පෙන්වා දෙමින් මෙය විසඳීය.',
      },
      keyConcepts: [
        {
          title: { en: 'Photon Energy & Momentum', si: 'ෆෝටෝන ශක්තිය සහ ගම්‍යතාව' },
          description: {
            en: 'Each photon carries a quantized discrete energy E = hf = hc/λ, and momentum p = h/λ = E/c, where h = 6.626 × 10⁻³⁴ J s and c = 3.0 × 10⁸ m/s.',
            si: 'සෑම ෆෝටෝනයකටම ක්වොන්ටීකෘත විවික්ත ශක්තියක් E = hf = hc/λ සහ ගම්‍යතාවක් p = h/λ = E/c හිමිවේ.',
          },
          formula: 'E = h f = \\frac{h c}{\\lambda}, \\quad p = \\frac{h}{\\lambda} = \\frac{E}{c}',
        },
        {
          title: { en: 'Work Function & Threshold Frequency', si: 'කාර්ය ශ්‍රිතය සහ සීමාකාරී සංඛ්‍යාතය' },
          description: {
            en: 'The work function Φ is the minimum energy required to liberate an electron from the metal surface: Φ = h f₀ = hc / λ₀. If the incident photon frequency f < f₀, no electrons can be emitted regardless of intensity.',
            si: 'කාර්ය ශ්‍රිතය Φ යනු ලෝහ පෘෂ්ඨයෙන් ඉලෙක්ට්‍රෝනයක් මුදාගැනීමට අවශ්‍ය අවම ශක්තියයි: Φ = h f₀ = hc / λ₀. පතිත සංඛ්‍යාතය f < f₀ නම් තීව්‍රතාව කොතෙක් වැඩි වුවද ඉලෙක්ට්‍රෝන විමෝචනය නොවේ.',
          },
          formula: '\\Phi = h f_0 = \\frac{h c}{\\lambda_0}',
        },
        {
          title: { en: 'Einstein’s Photoelectric Equation', si: 'අයින්ස්ටයින්ගේ ප්‍රකාශ විද්‍යුත් සමීකරණය' },
          description: {
            en: 'By conservation of energy in a single 1-to-1 photon-electron interaction: hf = Φ + K_max = Φ + ½ m_e v_max² = Φ + e V_s. The stopping potential is V_s = (h/e) f - (Φ/e).',
            si: 'ශක්ති සංස්ථිතිය අනුව තනි ෆෝටෝනයක් හා තනි ඉලෙක්ට්‍රෝනයක් අතර: hf = Φ + K_max = Φ + ½ m_e v_max² = Φ + e V_s වේ. නැවැත්වීමේ විභවය V_s = (h/e)f - (Φ/e) වේ.',
          },
          formula: 'h f = \\Phi + e V_s \\implies V_s = \\left(\\frac{h}{e}\\right) f - \\frac{\\Phi}{e}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Increasing light intensity increases the maximum kinetic energy of emitted photoelectrons.',
            si: 'ආලෝක තීව්‍රතාව වැඩි කළ විට විමෝචිත ඉලෙක්ට්‍රෝනවල උපරිම චාලක ශක්තිය වැඩි වේ.',
          },
          clarification: {
            en: 'Intensity only determines the rate of photons arriving per second (and hence saturation photocurrent). Maximum kinetic energy depends strictly on the individual photon frequency f and the metal work function Φ.',
            si: 'තීව්‍රතාවෙන් තීරණය වන්නේ තත්පරයකට පැමිණෙන ෆෝටෝන සංඛ්‍යාව (සන්තෘප්ත ධාරාව) පමණි. උපරිම චාලක ශක්තිය රඳා පවතින්නේ තනි ෆෝටෝන සංඛ්‍යාතය f සහ කාර්ය ශ්‍රිතය Φ මත පමණි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.3: Wave-Particle Duality and X-Rays
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-3',
    slug: 'wave-particle-duality-and-xrays',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 3,
    syllabusRef: 'Competency 11.3',
    title: {
      en: 'Wave-Particle Duality and X-Rays',
      si: 'තරංග-අංශු ද්වෛතය සහ එක්ස්-කිරණ',
    },
    summary: {
      en: 'Explore de Broglie matter waves (λ = h/p = h/√(2mqV)), electron diffraction evidence, Coolidge tube generation of X-rays, continuous Bremsstrahlung spectrum with Duane-Hunt cutoff (λ_min = hc/eV), and characteristic X-ray emission lines.',
      si: 'ද බ්‍රොයි ද්‍රව්‍ය තරංග (λ = h/p = h/√(2mqV)), ඉලෙක්ට්‍රෝන විවර්තන සාක්ෂි, කූලිජ් නළයෙන් එක්ස්-කිරණ නිපදවීම, ඩුවාන්-හන්ට් අවම කඩඉම (λ_min = hc/eV) සහිත සන්තතික එක්ස්-කිරණ සහ ලාක්ෂණික විමෝචන රේඛා ගවේෂණය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Calculate de Broglie wavelengths for moving particles and accelerated electrons: λ = h / √(2 m_e e V).',
        si: 'චලනය වන අංශු සහ ත්වරිත ඉලෙක්ට්‍රෝන සඳහා ද බ්‍රොයි තරංග ආයාමය ගණනය කිරීම: λ = h / √(2 m_e e V).',
      },
      {
        en: 'Explain electron diffraction and how the Davisson-Germer experiment proved the wave nature of electrons.',
        si: 'ඉලෙක්ට්‍රෝන විවර්තනය සහ ඩැවිසන්-ජර්මර් පරීක්ෂණය මගින් ඉලෙක්ට්‍රෝනවල තරංග ස්වභාවය සනාථ වූ ආකාරය පැහැදිලි කිරීම.',
      },
      {
        en: 'Derive the Duane-Hunt cutoff equation λ_min = hc / (eV) and explain continuous vs characteristic X-ray spectra.',
        si: 'ඩුවාන්-හන්ට් අවම කඩඉම් සමීකරණය λ_min = hc / (eV) ව්‍යුත්පන්න කිරීම සහ සන්තතික එදිරිව ලාක්ෂණික එක්ස්-කිරණ වර්ණාවලි පහදා දීම.',
      },
    ],
    topicOutline: [
      { en: 'De Broglie hypothesis: matter waves λ = h / p', si: 'ද බ්‍රොයි උපකල්පනය: ද්‍රව්‍ය තරංග λ = h / p' },
      { en: 'Electron wavelength accelerated through potential V: λ ≈ 1.227 / √V nm', si: 'විභවය V හරහා ත්වරණය කළ ඉලෙක්ට්‍රෝන තරංග ආයාමය: λ ≈ 1.227 / √V nm' },
      { en: 'Experimental verification: Davisson-Germer and thin crystal diffraction rings', si: 'පර්යේෂණාත්මක සනාථනය: ඩැවිසන්-ජර්මර් සහ ස්ඵටික විවර්තන වළලු' },
      { en: 'Electron microscope principles and enhanced resolving power', si: 'ඉලෙක්ට්‍රෝන අන්වීක්ෂ මූලධර්මය සහ වැඩිදියුණු කළ විභේදන බලය' },
      { en: 'Coolidge tube operation and high-voltage electron bombardment', si: 'කූලිජ් නළයේ ක්‍රියාකාරිත්වය සහ අධි-විභව ඉලෙක්ට්‍රෝන ගැටුම' },
      { en: 'Continuous Bremsstrahlung X-rays and Duane-Hunt limit: λ_min = hc / (eV)', si: 'සන්තතික එක්ස්-කිරණ සහ ඩුවාන්-හන්ට් සීමාව: λ_min = hc / (eV)' },
      { en: 'Characteristic X-rays (K_α, K_β transitions) and target atomic signatures', si: 'ලාක්ෂණික එක්ස්-කිරණ (K_α, K_β සංක්‍රාන්ති) සහ ඉලක්ක ලෝහයේ පරමාණුක හැඳුනුම්පත්' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'In 1924, Louis de Broglie reasoned by symmetry that if radiation possesses particle attributes (photons), matter particles must possess wave characteristics. The wavelength associated with any moving mass m with velocity v is λ = h / (mv). In electron microscopes, electron waves have wavelengths 100,000 times shorter than visible light, permitting atomic-resolution imaging. In X-ray tubes, the inverse process converts fast electron kinetic energy into high-energy penetrating electromagnetic photons.',
        si: '1924 දී ලුවී ද බ්‍රොයි සමමිතිය ඇසුරින් නිගමනය කළේ විකිරණයට අංශු ගුණ (ෆෝටෝන) ඇත්නම්, පදාර්ථ අංශුවලටද තරංග ගුණ තිබිය යුතු බවයි. v ප්‍රවේගයෙන් චලනය වන m ස්කන්ධයක තරංග ආයාමය λ = h / (mv) වේ. ඉලෙක්ට්‍රෝන අන්වීක්ෂවලදී ඉලෙක්ට්‍රෝන තරංග ආයාමය දෘශ්‍ය ආලෝකයට වඩා ලක්ෂ ගුණයකින් කුඩා වන බැවින් පරමාණුක විභේදනයක් ලබාදේ. එක්ස්-කිරණ නළවලදී වේගවත් ඉලෙක්ට්‍රෝනවල චාලක ශක්තිය විනිවිද යන එක්ස්-කිරණ ෆෝටෝන බවට පත්වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'De Broglie Matter Waves', si: 'ද බ්‍රොයි ද්‍රව්‍ය තරංග' },
          description: {
            en: 'For non-relativistic particles: kinetic energy K = p² / (2m) ⟹ p = √(2mK). For an electron accelerated through potential V: p = √(2 m_e e V), yielding λ = h / √(2 m_e e V) ≈ 1.227 / √V nm.',
            si: 'K = p² / (2m) බැවින් p = √(2mK) වේ. V විභවයකින් ත්වරණය කළ ඉලෙක්ට්‍රෝනයක් සඳහා: λ = h / √(2 m_e e V) ≈ 1.227 / √V nm වේ.',
          },
          formula: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2 m_e e V}} \\approx \\frac{1.227}{\\sqrt{V}}\\text{ nm}',
        },
        {
          title: { en: 'Continuous X-Rays & Duane-Hunt Limit', si: 'සන්තතික එක්ස්-කිරණ සහ ඩුවාන්-හන්ට් සීමාව' },
          description: {
            en: 'When high-speed electrons are decelerated in the target Coulomb field (Bremsstrahlung), photon energy cannot exceed the electron’s maximum kinetic energy: E_max = hc / λ_min = eV_a ⟹ λ_min = hc / (e V_a).',
            si: 'ඉලෙක්ට්‍රෝන ඉලක්කයේ ගැටී මන්දනය වන විට විමෝචනය වන උපරිම ෆෝටෝන ශක්තිය ඉලෙක්ට්‍රෝනයේ චාලක ශක්තියට සමාන වේ: E_max = hc / λ_min = eV_a ⟹ λ_min = hc / (e V_a).',
          },
          formula: '\\lambda_{\\min} = \\frac{h c}{e V_a}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Increasing the X-ray tube filament current increases the penetrating hardness of X-rays.',
            si: 'එක්ස්-කිරණ නළයේ සූත්‍රිකා ධාරාව වැඩි කිරීමෙන් කිරණවල විනිවිදීමේ හැකියාව (දෘඪතාව) වැඩි වේ.',
          },
          clarification: {
            en: 'Filament current solely increases electron emission rate, increasing X-ray intensity (photons/second). Penetrating hardness and cutoff wavelength λ_min depend exclusively on the accelerating high voltage V_a.',
            si: 'සූත්‍රිකා ධාරාවෙන් වැඩි වන්නේ ඉලෙක්ට්‍රෝන විමෝචන සීඝ්‍රතාව හා එක්ස්-කිරණ තීව්‍රතාව පමණි. විනිවිදීමේ හැකියාව හා λ_min තීරණය වන්නේ ත්වරණ අධි විභවය V_a මත පමණි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.4: Atomic Models and Line Spectra
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-4',
    slug: 'atomic-models-and-line-spectra',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 4,
    syllabusRef: 'Competency 11.4',
    title: {
      en: 'Atomic Models and Line Emission Spectra',
      si: 'පරමාණුක ආකෘති සහ රේඛීය විමෝචන වර්ණාවලි',
    },
    summary: {
      en: 'Study Rutherford’s nuclear model, Bohr’s postulates for hydrogen, angular momentum quantization mvr = nh/(2π), energy levels E_n = -13.6/n² eV, Rydberg formula 1/λ = R_H (1/n₁² - 1/n₂²), and spectral series (Lyman, Balmer, Paschen).',
      si: 'රදර්ෆර්ඩ්ගේ න්‍යෂ්ටික ආකෘතිය, බෝර්ගේ උපකල්පන, කෝණික ගම්‍යතා ක්වොන්ටීකරණය mvr = nh/(2π), හයිඩ්‍රජන් ශක්ති මට්ටම් E_n = -13.6/n² eV, රිඩ්බර්ග් සූත්‍රය සහ වර්ණාවලි ශ්‍රේණි (ලයිමන්, බාමර්, පාෂන්) අධ්‍යයනය කරන්න.',
    },
    learningObjectives: [
      {
        en: 'State Bohr’s postulates and explain how quantized stationary orbits overcome classical radiative collapse.',
        si: 'බෝර්ගේ උපකල්පන ප්‍රකාශ කිරීම සහ ක්වොන්ටීකෘත ස්ථායී කක්ෂ මගින් සම්භාව්‍ය විකිරණ බිඳවැටීම වළක්වන අයුරු පැහැදිලි කිරීම.',
      },
      {
        en: 'Calculate hydrogen energy levels E_n = -13.6 / n² eV, excitation energies, and ionization energy (13.6 eV).',
        si: 'හයිඩ්‍රජන් ශක්ති මට්ටම් E_n = -13.6 / n² eV, උද්දීපන ශක්තීන් සහ අයනීකරණ ශක්තිය (13.6 eV) ගණනය කිරීම.',
      },
      {
        en: 'Apply the Rydberg equation to determine transition wavelengths across Lyman, Balmer, and Paschen series.',
        si: 'ලයිමන්, බාමර් සහ පාෂන් ශ්‍රේණිවල සංක්‍රාන්ති තරංග ආයාම ගණනය කිරීමට රිඩ්බර්ග් සමීකරණය යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Rutherford alpha scattering experiment and nuclear atom model', si: 'රදර්ෆර්ඩ්ගේ ඇල්ෆා ප්‍රකිරණ පරීක්ෂණය සහ න්‍යෂ්ටික පරමාණුක ආකෘතිය' },
      { en: 'Bohr’s stationary non-radiating orbit postulate', si: 'බෝර්ගේ විකිරණ නොවන ස්ථායී කක්ෂ උපකල්පනය' },
      { en: 'Orbital angular momentum quantization: L = mvr = nh / (2π)', si: 'කක්ෂීය කෝණික ගම්‍යතා ක්වොන්ටීකරණය: L = mvr = nh / (2π)' },
      { en: 'Energy levels of hydrogen atom: E_n = -13.6 / n² eV', si: 'හයිඩ්‍රජන් පරමාණුවේ ශක්ති මට්ටම්: E_n = -13.6 / n² eV' },
      { en: 'Line emission and absorption: ΔE = E_upper - E_lower = hf = hc/λ', si: 'රේඛීය විමෝචනය සහ අවශෝෂණය: ΔE = hf = hc/λ' },
      { en: 'Rydberg formula and spectral series: Lyman (UV), Balmer (Visible), Paschen (IR)', si: 'රිඩ්බර්ග් සූත්‍රය සහ වර්ණාවලි ශ්‍රේණි: ලයිමන්, බාමර්, පාෂන්' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Classical physics predicted that an orbiting electron should continually accelerate, radiate away its energy as electromagnetic waves, and spiral into the nucleus within 10⁻¹¹ seconds. Furthermore, atoms emit discrete, sharp line spectra rather than continuous rainbows. In 1913, Niels Bohr resolved this paradox by quantizing electron orbits in the hydrogen atom.',
        si: 'සම්භාව්‍ය භෞතික විද්‍යාවට අනුව න්‍යෂ්ටිය වටා ත්වරණය වන ඉලෙක්ට්‍රෝනයක් අඛණ්ඩව විද්‍යුත් චුම්භක තරංග විමෝචනය කරමින් තත්පර 10⁻¹¹ ක් ඇතුළත න්‍යෂ්ටියට කඩා වැටිය යුතුය. තවද පරමාණු සන්තතික වර්ණාවලි වෙනුවට විවික්ත රේඛීය වර්ණාවලි විමෝචනය කරයි. 1913 දී නීල්ස් බෝර් ඉලෙක්ට්‍රෝන කක්ෂ ක්වොන්ටීකරණය කරමින් මෙම ගැටලුව නිරාකරණය කළේය.',
      },
      keyConcepts: [
        {
          title: { en: 'Bohr Angular Momentum Quantization', si: 'බෝර්ගේ කෝණික ගම්‍යතා ක්වොන්ටීකරණය' },
          description: {
            en: 'Electrons orbit stably without radiating only when orbital angular momentum is an integral multiple of h / (2π): L = m_e v r = n h / (2π), n = 1, 2, 3...',
            si: 'ඉලෙක්ට්‍රෝන විකිරණයකින් තොරව ස්ථායීව භ්‍රමණය වන්නේ කෝණික ගම්‍යතාව h / (2π) හි පූර්ණ සංඛ්‍යා ගුණිතයක් වන විට පමණි: L = mvr = nh / (2π).',
          },
          formula: 'L = m_e v r = \\frac{n h}{2\\pi}, \\quad n = 1, 2, 3\\dots',
        },
        {
          title: { en: 'Hydrogen Energy Levels & Rydberg Formula', si: 'හයිඩ්‍රජන් ශක්ති මට්ටම් සහ රිඩ්බර්ග් සූත්‍රය' },
          description: {
            en: 'Energy of level n is E_n = -13.6 / n² eV. Photon emission during transitions yields 1/λ = R_H (1/n₁² - 1/n₂²), where R_H = 1.097 × 10⁷ m⁻¹.',
            si: 'n මට්ටමේ ශක්තිය E_n = -13.6 / n² eV වේ. මට්ටම් අතර සංක්‍රාන්තියේදී විමෝචන තරංග ආයාමය: 1/λ = R_H (1/n₁² - 1/n₂²).',
          },
          formula: '\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'All spectral lines of hydrogen lie in the visible light spectrum.',
            si: 'හයිඩ්‍රජන්හි සියලුම වර්ණාවලි රේඛා දෘශ්‍ය ආලෝක කලාපයේ පවතී.',
          },
          clarification: {
            en: 'Only the Balmer series (transitions ending at n=2) lies in the visible spectrum. Lyman series (n=1) is ultraviolet; Paschen (n=3), Brackett (n=4), and Pfund (n=5) lie entirely in infrared.',
            si: 'දෘශ්‍ය කලාපයේ පවතින්නේ n=2 මට්ටමට වැටෙන බාමර් ශ්‍රේණිය පමණි. ලයිමන් ශ්‍රේණිය පාරජම්බුල වන අතර, පාෂන්, බ්‍රැකට් සහ ෆන්ඩ් ශ්‍රේණි අධෝරක්ත කලාපයේ පවතී.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.5: Nuclear Physics and Radioactivity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-5',
    slug: 'nuclear-physics-and-radioactivity',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 5,
    syllabusRef: 'Competency 11.5',
    title: {
      en: 'Radioactivity and Nuclear Reactions',
      si: 'විකිරණශීලතාව සහ න්‍යෂ්ටික ප්‍රතික්‍රියා',
    },
    summary: {
      en: 'Master nuclear composition (A, Z, N), nuclear radius R = R₀ A^(1/3), constant nuclear density, mass defect Δm, binding energy per nucleon curve, radioactive decay law N = N₀ e^(-λt), half-life T_½ = ln 2 / λ, activity A = λN, and fission/fusion energy release.',
      si: 'න්‍යෂ්ටික සංයුතිය (A, Z, N), න්‍යෂ්ටික අරය R = R₀ A^(1/3), නියත න්‍යෂ්ටික ඝනත්වය, ස්කන්ධ ඌනතාව Δm, නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය, විකිරණශීලී ක්ෂය නියමය N = N₀ e^(-λt), අර්ධ ආයු කාලය T_½ = ln 2 / λ, ක්‍රියාකාරිත්වය A = λN සහ විඛණ්ඩන/සංලයන ශක්ති මුදාහැරීම ප්‍රගුණ කරන්න.',
    },
    learningObjectives: [
      {
        en: 'Calculate nuclear radius and explain why nuclear density is approximately constant across all stable nuclei (~2.3 × 10¹⁷ kg/m³).',
        si: 'න්‍යෂ්ටික අරය ගණනය කිරීම සහ සියලු ස්ථායී න්‍යෂ්ටිවල ඝනත්වය ආසන්න වශයෙන් නියත වන්නේ මන්දැයි පැහැදිලි කිරීම (~2.3 × 10¹⁷ kg/m³).',
      },
      {
        en: 'Determine mass defect Δm and calculate nuclear binding energy per nucleon using Einstein’s equivalence ΔE = Δm c² (1 u = 931.5 MeV).',
        si: 'ස්කන්ධ ඌනතාව Δm සෙවීම සහ ΔE = Δm c² (1 u = 931.5 MeV) ඇසුරින් නියුක්ලියෝනයකට බන්ධන ශක්තිය ගණනය කිරීම.',
      },
      {
        en: 'Solve radioactive decay, remaining count N(t), half-life T_½, and activity problems using exponential decay equations.',
        si: 'ඝාතීය ක්ෂය සමීකරණ භාවිතයෙන් විකිරණශීලී ක්ෂයවීම්, ඉතිරි න්‍යෂ්ටි සංඛ්‍යාව N(t), අර්ධ ආයු කාලය T_½ සහ ක්‍රියාකාරිත්ව ගැටලු විසඳීම.',
      },
    ],
    topicOutline: [
      { en: 'Nuclear composition: atomic number Z, neutron number N, mass number A', si: 'න්‍යෂ්ටික සංයුතිය: Z, N, සහ ස්කන්ධ ක්‍රමාංකය A' },
      { en: 'Nuclear radius R = R₀ A^(1/3) and constant nuclear matter density', si: 'න්‍යෂ්ටික අරය R = R₀ A^(1/3) සහ නියත න්‍යෂ්ටික ඝනත්වය' },
      { en: 'Strong nuclear force characteristics (short range, charge independent, attractive)', si: 'ප්‍රබල න්‍යෂ්ටික බලයේ ලක්ෂණ (කෙටි පරාසය, ආරෝපණයෙන් ස්වායත්ත)' },
      { en: 'Mass defect Δm and nuclear binding energy: BE = Δm c² (1 u = 931.5 MeV)', si: 'ස්කන්ධ ඌනතාව Δm සහ බන්ධන ශක්තිය: BE = Δm c² (1 u = 931.5 MeV)' },
      { en: 'Binding energy per nucleon curve: peak at Iron-56 and stability analysis', si: 'නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය: යකඩ-56 මුදුන සහ ස්ථායිතා විශ්ලේෂණය' },
      { en: 'Radioactive decay law: N(t) = N₀ e^(-λt) and Activity A = λN', si: 'විකිරණශීලී ක්ෂය නියමය: N(t) = N₀ e^(-λt) සහ ක්‍රියාකාරිත්වය A = λN' },
      { en: 'Half-life relation: T_½ = ln 2 / λ ≈ 0.693 / λ', si: 'අර්ධ ආයු කාල සම්බන්ධතාව: T_½ = ln 2 / λ ≈ 0.693 / λ' },
      { en: 'Alpha, beta, and gamma radiation properties and penetration hazards', si: 'ඇල්ෆා, බීටා, ගැමා විකිරණ ගුණාංග සහ විනිවිදීමේ උපද්‍රව' },
      { en: 'Nuclear fission in reactors and nuclear fusion in the Sun', si: 'ප්‍රතික්‍රියාකාරකවල න්‍යෂ්ටික විඛණ්ඩනය සහ සූර්යයා තුළ න්‍යෂ්ටික සංලයනය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The atomic nucleus is held together against intense proton-proton electrostatic repulsion by the short-range, charge-independent strong nuclear force. When nucleons bind into a nucleus, the total mass is strictly less than the sum of the individual free nucleon masses. This difference, known as the mass defect, represents binding energy through Einstein’s relation ΔE = Δm c². Unstable nuclei undergo spontaneous radioactive decay to achieve greater nuclear stability.',
        si: 'ප්‍රෝටෝන අතර පවතින ප්‍රබල විද්‍යුත් විකර්ෂණය අභිබවා න්‍යෂ්ටිය එකට බැඳ තබන්නේ කෙටි පරාසයක ක්‍රියාකරන ප්‍රබල න්‍යෂ්ටික බලයයි. නියුක්ලියෝන එකතු වී න්‍යෂ්ටියක් සෑදීමේදී එහි මුළු ස්කන්ධය නිදහස් නියුක්ලියෝනවල ස්කන්ධයන්ගේ එකතුවට වඩා අඩුවේ. මෙම ස්කන්ධ ඌනතාව අයින්ස්ටයින්ගේ ΔE = Δm c² සූත්‍රය අනුව බන්ධන ශක්තිය බවට පත්වී ඇත. අස්ථායී න්‍යෂ්ටි ස්ථායිතාව ලබාගැනීමට ස්වයංසිද්ධව විකිරණශීලී ක්ෂයවීම්වලට ලක්වේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Mass Defect & Binding Energy', si: 'ස්කන්ධ ඌනතාව සහ බන්ධන ශක්තිය' },
          description: {
            en: 'Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus. Binding Energy BE = Δm (in u) × 931.5 MeV. The BE/A curve peaks near Fe-56 (~8.8 MeV/nucleon).',
            si: 'ස්කන්ධ ඌනතාව Δm = [Z m_p + (A - Z) m_n] - M_nucleus වේ. බන්ධන ශක්තිය BE = Δm × 931.5 MeV. නියුක්ලියෝනයකට බන්ධන ශක්තිය Fe-56 හිදී උපරිම වේ (~8.8 MeV/nucleon).',
          },
          formula: '\\Delta m = [Z m_p + (A - Z) m_n] - M_{\\text{nucleus}}, \\quad BE = \\Delta m \\cdot c^2',
        },
        {
          title: { en: 'Radioactive Decay Law & Half-Life', si: 'විකිරණශීලී ක්ෂය නියමය සහ අර්ධ ආයු කාලය' },
          description: {
            en: 'Activity is A = -dN/dt = λN. Number of remaining nuclei follows exponential decay: N(t) = N₀ e^(-λt). Half-life is T_½ = ln(2) / λ ≈ 0.693 / λ.',
            si: 'ක්‍රියාකාරිත්වය A = λN. ඉතිරි න්‍යෂ්ටි සංඛ්‍යාව: N(t) = N₀ e^(-λt). අර්ධ ආයු කාලය T_½ = ln(2) / λ ≈ 0.693 / λ වේ.',
          },
          formula: 'N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Half-life decreases as a radioactive sample gets older and decays.',
            si: 'විකිරණශීලී සාම්පලයක් පරණ වී ක්ෂය වන විට එහි අර්ධ ආයු කාලය අඩු වේ.',
          },
          clarification: {
            en: 'Half-life T_½ is an intrinsic, time-invariant property of the specific nuclear isotope that is completely independent of the age, mass, temperature, pressure, or chemical combination of the sample.',
            si: 'අර්ධ ආයු කාලය T_½ යනු සමස්ථානිකයේ සහජ නියතයකි. එය සාම්පලයේ වයස, ප්‍රමාණය, උෂ්ණත්වය, පීඩනය හෝ රසායනික සංයෝජනය මත කිසිසේත් වෙනස් නොවේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.6: Nuclear Energy, Mass Defect and Binding Energy
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-6',
    slug: 'nuclear-energy-fission-and-fusion',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 6,
    syllabusRef: 'Competency 11.6',
    title: {
      en: 'Nuclear Energy: Mass Defect, Binding Energy, Fission and Fusion',
      si: 'න්‍යෂ්ටික ශක්තිය: ස්කන්ධ ඌනතාව, බන්ධන ශක්තිය, විඛණ්ඩනය සහ විලයනය',
    },
    summary: {
      en: 'Einstein’s mass-energy equivalence E = mc², atomic mass unit u, mass defect Δm, binding energy per nucleon curve, nuclear stability, nuclear fission chain reactions, and thermonuclear fusion.',
      si: 'අයින්ස්ටයින්ගේ ස්කන්ධ-ශක්ති තුල්‍යතාව E = mc², පරමාණුක ස්කන්ධ ඒකකය u, ස්කන්ධ ඌනතාව Δm, නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය, න්‍යෂ්ටික ස්ථායිතාව, න්‍යෂ්ටික විඛණ්ඩනය සහ තාප න්‍යෂ්ටික විලයනය.',
    },
    learningObjectives: [
      {
        en: 'Calculate nuclear mass defect Δm and binding energy E_b in MeV for various nuclides.',
        si: 'විවිධ නියුක්ලයිඩ සඳහා ස්කන්ධ ඌනතාව Δm සහ බන්ධන ශක්තිය E_b (MeV වලින්) ගණනය කිරීම.',
      },
      {
        en: 'Analyze the binding energy per nucleon curve to explain why fission releases energy for heavy nuclei and fusion releases energy for light nuclei.',
        si: 'බර න්‍යෂ්ටිවලින් විඛණ්ඩනයේදී සහ සැහැල්ලු න්‍යෂ්ටිවලින් විලයනයේදී ශක්තිය මුදාහැරෙන්නේ මන්දැයි බන්ධන ශක්ති වක්‍රය ඇසුරින් පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Atomic mass unit u = 1.6605 × 10⁻²⁷ kg and energy equivalent 1 u = 931.5 MeV', si: 'පරමාණුක ස්කන්ධ ඒකකය u සහ 1 u = 931.5 MeV ශක්ති තුල්‍යතාව' },
      { en: 'Nuclear mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus', si: 'ස්කන්ධ ඌනතාව Δm = [Z m_p + (A - Z) m_n] - M_nucleus' },
      { en: 'Binding energy E_b = Δm c² and binding energy per nucleon (E_b / A)', si: 'බන්ධන ශක්තිය E_b = Δm c² සහ නියුක්ලියෝනයකට බන්ධන ශක්තිය' },
      { en: 'The E_b / A curve: peak at Iron-56 (8.8 MeV/nucleon), stability peak', si: 'E_b / A වක්‍රය: යකඩ-56 හි උපරිමය (8.8 MeV/nucleon)' },
      { en: 'Induced nuclear fission of Uranium-235: chain reactions and moderator function', si: 'යුරේනියම්-235 හි ප්‍රේරිත විඛණ්ඩනය සහ දාම ප්‍රතික්‍රියා' },
      { en: 'Nuclear fusion: stellar proton-proton chain and tokamak plasma conditions', si: 'න්‍යෂ්ටික විලයනය: තාරකා තුළ ප්‍රෝටෝන-ප්‍රෝටෝන දාමය සහ ප්ලාස්මා තත්ත්ව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'The mass of an assembled atomic nucleus is always strictly less than the total mass of its individual constituent free protons and neutrons. This missing mass—the mass defect Δm—is released as binding energy when the nucleus forms according to Einstein’s E = mc².',
        si: 'සෑදුණු න්‍යෂ්ටියක ස්කන්ධය සැමවිටම එහි නිදහස් නියුක්ලියෝනවල ස්කන්ධ එකතුවට වඩා අඩුය. මෙම වෙනස ස්කන්ධ ඌනතාව වන අතර එය E = mc² අනුව බන්ධන ශක්තිය ලෙස මුදාහැරේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Mass Defect & Binding Energy', si: 'ස්කන්ධ ඌනතාව සහ බන්ධන ශක්තිය' },
          description: {
            en: 'For a nucleus with atomic number Z and mass number A: Δm = [Z m_p + (A - Z) m_n] - M_nucleus. Total binding energy is E_b = Δm c² = Δm (in u) × 931.5 MeV.',
            si: 'ස්කන්ධ ඌනතාව: Δm = [Z m_p + (A - Z) m_n] - M_nucleus. මුළු බන්ධන ශක්තිය E_b = Δm (u වලින්) × 931.5 MeV වේ.',
          },
          formula: '\\Delta m = Z m_p + (A - Z)m_n - M_{\\text{nucleus}}, \\quad E_b = \\Delta m \\cdot c^2',
        },
        {
          title: { en: 'Binding Energy per Nucleon Curve', si: 'නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය' },
          description: {
            en: 'Plot of E_b/A versus mass number A rises steeply from hydrogen, peaks near ⁵⁶Fe at ≈ 8.8 MeV/nucleon, and gradually decreases for heavy elements to ≈ 7.6 MeV/nucleon for Uranium. Fission of heavy nuclei and fusion of light nuclei both move toward the stable ⁵⁶Fe peak, releasing massive kinetic energy.',
            si: 'E_b/A වක්‍රය හයිඩ්‍රජන් සිට ඉහළ ගොස් ⁵⁶Fe හිදී 8.8 MeV/nucleon උපරිමයකට පැමිණ යුරේනියම් දෙසට 7.6 MeV/nucleon දක්වා ක්‍රමයෙන් බසී. විඛණ්ඩනය හා විලයනය යන දෙකේදීම වඩා ස්ථායි ⁵⁶Fe දෙසට ගමන් කරමින් ශක්තිය මුදාහරී.',
          },
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A nucleus has more mass than its separated constituent protons and neutrons.',
            si: 'වෙන් වූ නියුක්ලියෝනවල ස්කන්ධයට වඩා න්‍යෂ්ටියේ ස්කන්ධය වැඩිය.',
          },
          clarification: {
            en: 'A bound nucleus is in a lower potential energy state than separated nucleons; by E = mc², the nucleus is strictly LIGHTER by the mass defect Δm = E_b / c².',
            si: 'බැඳුණු න්‍යෂ්ටියක ශක්තිය අඩු බැවින් E = mc² අනුව න්‍යෂ්ටියේ ස්කන්ධය සැමවිටම අඩුය.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.7: Fundamental Particles and Interactions (The Standard Model)
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-7',
    slug: 'fundamental-particles-and-interactions',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 7,
    syllabusRef: 'Competency 11.7',
    title: {
      en: 'Fundamental Particles and Interactions',
      si: 'මූලික අංශු සහ මූලික අන්තර්ක්‍රියා',
    },
    summary: {
      en: 'The Standard Model of particle physics: Quarks (u, d, c, s, t, b), fractional charges, Leptons (e, μ, τ and neutrinos), Gauge Bosons (photon, gluon, W/Z), Hadrons (Baryons and Mesons), and the four fundamental forces of nature.',
      si: 'අංශු භෞතික විද්‍යාවේ සම්මත ආකෘතිය: ක්වාක් (u, d, c, s, t, b), භාගික ආරෝපණ, ලෙප්ටෝන (e, μ, τ සහ නියුට්‍රිනෝ), ගේජ් බෝසෝන (ෆෝටෝන, ග්ලූඕන, W/Z), හැඩ්‍රෝන (බේරියෝන සහ මේසෝන) සහ ස්වභාවධර්මයේ මූලික බල හතර.',
    },
    learningObjectives: [
      {
        en: 'Classify subatomic particles into quarks, leptons, hadrons (baryons and mesons), and gauge bosons under the Standard Model.',
        si: 'සම්මත ආකෘතිය යටතේ උපපරමාණුක අංශු ක්වාක්, ලෙප්ටෝන, හැඩ්‍රෝන (බේරියෝන සහ මේසෝන) සහ ගේජ් බෝසෝන ලෙස වර්ගීකරණය කිරීම.',
      },
      {
        en: 'Determine quark composition of protons (uud) and neutrons (udd) and compare relative strengths and ranges of the four fundamental interactions.',
        si: 'ප්‍රෝටෝන (uud) සහ නියුට්‍රෝන (udd) වල ක්වාක් සංයුතිය තීරණය කිරීම සහ මූලික අන්තර්ක්‍රියා හතරේ සාපේක්ෂ ප්‍රබලතා හා පරාස සංසන්දනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Structure of matter: atoms → nuclei → nucleons → elementary quarks', si: 'පදාර්ථයේ ව්‍යුහය: පරමාණු → න්‍යෂ්ටි → නියුක්ලියෝන → මූලික ක්වාක්' },
      { en: 'The Six Quark flavors: Up (+2/3e), Down (-1/3e), Charm (+2/3e), Strange (-1/3e), Top (+2/3e), Bottom (-1/3e)', si: 'ක්වාක් ප්‍රභේද 6 සහ ඒවායේ භාගික ආරෝපණ' },
      { en: 'Hadrons: Baryons (qqq: proton = uud, neutron = udd) and Mesons (q q̄: pions)', si: 'හැඩ්‍රෝන: බේරියෝන (qqq) සහ මේසෝන (q q̄)' },
      { en: 'Leptons (do not feel strong force): electron, muon, tau, and corresponding neutrinos', si: 'ලෙප්ටෝන: ඉලෙක්ට්‍රෝනය, මියුඕනය, ටාවෝනය සහ නියුට්‍රිනෝ' },
      { en: 'Four fundamental interactions: Strong (gluon), Electromagnetic (photon), Weak (W±, Z⁰), Gravitational (graviton)', si: 'මූලික අන්තර්ක්‍රියා හතර: ප්‍රබල, විද්‍යුත් චුම්භක, දුබල, ගුරුත්වාකර්ෂණ' },
      { en: 'Conservation laws: charge, baryon number, and lepton number in nuclear decays', si: 'න්‍යෂ්ටික ක්ෂයවීම්වල සංස්ථිති නියම: ආරෝපණය, බේරියෝන අංකය, ලෙප්ටෝන අංකය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'All observable matter in the Universe is assembled from twelve fundamental spin-1/2 fermions (six quarks and six leptons), interacting through gauge bosons representing the four fundamental physical forces.',
        si: 'විශ්වයේ ඇති සියලුම නිරීක්ෂණය කළ හැකි පදාර්ථය මූලික ෆර්මියෝන 12 කින් (ක්වාක් 6 ක් සහ ලෙප්ටෝන 6 ක්) සැකසී ඇති අතර, ඒවා මූලික බල 4 නියෝජනය කරන බෝසෝන මගින් අන්තර්ක්‍රියා කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Quarks & Nucleon Composition', si: 'ක්වාක් සහ නියුක්ලියෝන සංයුතිය' },
          description: {
            en: 'Quarks possess fractional electric charges: Up (u) = +2/3 e, Down (d) = -1/3 e. A proton is a baryon formed from (u + u + d): net charge = 2/3 + 2/3 - 1/3 = +1 e. A neutron is formed from (u + d + d): net charge = 2/3 - 1/3 - 1/3 = 0.',
            si: 'ක්වාක් සතුව භාගික ආරෝපණ ඇත: Up (u) = +2/3 e, Down (d) = -1/3 e. ප්‍රෝටෝනයක් (uud) සැකසේ: ආරෝපණය = +1 e. නියුට්‍රෝනයක් (udd) සැකසේ: ආරෝපණය = 0.',
          },
          formula: 'p = (uud) \\implies +1 e, \\quad n = (udd) \\implies 0 e',
        },
        {
          title: { en: 'The Four Fundamental Forces', si: 'මූලික බල හතර' },
          description: {
            en: '1. Strong Nuclear Force (relative strength 1, range ≈ 10⁻¹⁵ m, mediated by gluons).\n2. Electromagnetic Force (relative strength 10⁻², range infinite, mediated by photons).\n3. Weak Nuclear Force (relative strength 10⁻⁶, range ≈ 10⁻¹⁸ m, mediated by W±, Z⁰ bosons; causes beta decay).\n4. Gravitational Force (relative strength 10⁻³⁹, range infinite, mediated by graviton).',
            si: '1. ප්‍රබල න්‍යෂ්ටික බලය (සාපේක්ෂ ප්‍රබලතාව 1, පරාසය 10⁻¹⁵ m, ග්ලූඕන මගින්).\n2. විද්‍යුත් චුම්භක බලය (ප්‍රබලතාව 10⁻², පරාසය අනන්තය, ෆෝටෝන මගින්).\n3. දුබල න්‍යෂ්ටික බලය (ප්‍රබලතාව 10⁻⁶, පරාසය 10⁻¹⁸ m, බීටා ක්ෂයවීම්).\n4. ගුරුත්වාකර්ෂණ බලය (ප්‍රබලතාව 10⁻³淮, පරාසය අනන්තය).',
          },
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Electrons are composed of quarks just like protons and neutrons.',
            si: 'ප්‍රෝටෝන හා නියුට්‍රෝන මෙන්ම ඉලෙක්ට්‍රෝනද ක්වාක්වලින් සෑදී ඇත.',
          },
          clarification: {
            en: 'Electrons are fundamental LEPTONS with zero substructure. They do not experience the strong nuclear force and are NOT made of quarks.',
            si: 'ඉලෙක්ට්‍රෝනය යනු මූලික ලෙප්ටෝනයකි. එය ක්වාක්වලින් සෑදී නැති අතර ප්‍රබල න්‍යෂ්ටික බලයට යටත් නොවේ.',
          },
        },
      ],
      practiceQuestions: [],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 11.8: Unit 11 Summative Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-11-8',
    slug: 'matter-and-radiation-assessment',
    unitSlug: 'matter-and-radiation',
    unitOrder: 11,
    lessonOrder: 8,
    syllabusRef: 'Competencies 11.1–11.7',
    title: {
      en: 'Unit 11 Summative Assessment: Matter & Radiation',
      si: 'ඒකක 11 සමාප්ති ඇගයීම: පදාර්ථය සහ විකිරණ',
    },
    summary: {
      en: 'Comprehensive 20-question examination testing all 7 competencies in Unit 11 (Black-body radiation, photoelectric effect, de Broglie matter waves, X-rays, radioactive decay, nuclear energy, and Standard Model fundamental particles) with instant competency diagnostic feedback.',
      si: 'කෘෂ්ණ වස්තු විකිරණය, ප්‍රකාශ විද්‍යුත් ආචරණය, ද බ්‍රොයි තරංග, එක්ස්-කිරණ, විකිරණශීලී ක්ෂය, න්‍යෂ්ටික ශක්තිය සහ සම්මත ආකෘතියේ මූලික අංශු යන නිපුණතා 7 ම ආවරණය වන ප්‍රශ්න 20 කින් යුත් පරිපූර්ණ විභාගය.',
    },
    learningObjectives: [
      {
        en: 'Synthesize quantum, atomic, nuclear, and particle physics concepts under timed examination conditions.',
        si: 'නියමිත කාලසීමාවක් තුළ ක්වොන්ටම්, පරමාණුක, න්‍යෂ්ටික සහ අංශු භෞතික විද්‍යා සංකල්ප සංශ්ලේෂණය කිරීම.',
      },
      {
        en: 'Identify personal competency strengths and areas requiring revision across syllabus topics 11.1 to 11.7.',
        si: '11.1 සිට 11.7 දක්වා විෂය නිර්දේශයේ තම ශක්තීන් සහ පුනරීක්ෂණය කළ යුතු ක්ෂේත්‍ර හඳුනා ගැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Summative questions covering Competencies 11.1 - 11.7', si: '11.1 - 11.7 නිපුණතා ආවරණය වන ප්‍රශ්න' },
      { en: 'Structured essay questions with point-by-point marking rubrics', si: 'පියවරෙන් පියවර ලකුණු ක්‍රමවේද සහිත ව්‍යුහගත රචනා ප්‍රශ්න' },
      { en: 'Instant diagnostic competency mastery scoring', si: 'ක්ෂණික නිපුණතා ප්‍රගුණතා ලකුණු විශ්ලේෂණය' },
      { en: 'Step-by-step physical solution walkthroughs', si: 'පියවරෙන් පියවර භෞතික විවරණ හා විසඳුම්' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'quantum-nuclear-assessment',
    content: {
      introduction: {
        en: 'This summative assessment evaluates your complete mastery of Unit 11 (Matter and Radiation). You will answer 20 questions representing standard Sri Lankan G.C.E. A/L exam patterns with an automated diagnostic report at the end.',
        si: 'මෙම සමාප්ති ඇගයීම මගින් පදාර්ථය සහ විකිරණ (11 වන ඒකකය) පිළිබඳ ඔබේ සමස්ත ප්‍රවීණතාව මනිනු ලැබේ. ශ්‍රී ලංකා උසස් පෙළ විභාග ආකෘතියට අනුකූලව සකස් කළ ප්‍රශ්න 20 කට පිළිතුරු ලබාදී අවසානයේ සවිස්තර වාර්තාවක් ලබාගන්න.',
      },
      keyConcepts: [
        {
          title: { en: 'Examination Strategy', si: 'විභාග උපක්‍රම' },
          description: {
            en: 'Ensure all units are converted to standard SI (Joules, meters, seconds, kg) before using formulas, and convert back to eV or nm where requested.',
            si: 'සූත්‍ර යෙදීමට පෙර සියලු ඒකක සම්මත SI (ජූල්, මීටර්, තත්පර, kg) වලට හරවාගෙන අවශ්‍ය තැන්වලදී eV හෝ nm බවට පත්කරන්න.',
          },
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Leaving questions blank avoids penalties in A/L Physics assessments.',
            si: 'ප්‍රශ්නවලට පිළිතුරු නොදී හිස්ව තැබීමෙන් ලකුණු අඩුවීම වළක්වා ගත හැක.',
          },
          clarification: {
            en: 'In Sri Lankan A/L examinations, there is no negative marking for incorrect attempts. Always provide your most reasoned response.',
            si: 'ශ්‍රී ලංකා උසස් පෙළ විභාගයේදී ඍණ ලකුණු ලබාදීමක් නොමැත. එබැවින් හැකි සෑම ප්‍රශ්නයකටම ඔබගේ උපරිම උත්සාහය යොදන්න.',
          },
        },
      ],
    },
  },
];
