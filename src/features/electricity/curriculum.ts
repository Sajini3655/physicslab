import { LessonDefinition } from '@/shared/curriculum/types';

export const ELECTRICITY_LESSONS: LessonDefinition[] = [
  // -------------------------------------------------------------------------
  // Lesson 8.1: Electric Current & Drift Velocity
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-1',
    slug: 'electric-current-drift-velocity',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 1,
    syllabusRef: 'Competency 8.1',
    title: {
      en: 'Electric Current & Drift Velocity',
      si: 'විද්‍යුත් ධාරාව සහ ප්ලාවිත ප්‍රවේගය',
    },
    summary: {
      en: 'Electric current definition I = ΔQ/Δt, mobile charge carriers across metals, semiconductors, and electrolytes, microscopic drift velocity derivation I = nAv_de, and current density J = I/A.',
      si: 'විද්‍යුත් ධාරාව අර්ථ දැක්වීම I = ΔQ/Δt, ලෝහ, අර්ධ සන්නායක හා විද්‍යුත් විච්ඡේද්‍ය තුළ ආරෝපණ වාහක, ක්ෂුද්‍ර ප්ලාවිත ප්‍රවේග සමීකරණය I = nAv_de සහ ධාරා ඝනත්වය J = I/A.',
    },
    learningObjectives: [
      {
        en: 'Define electric current and state the SI unit (Ampere), distinguishing conventional current from electronic flow.',
        si: 'විද්‍යුත් ධාරාව සහ එහි SI ඒකකය (ඇම්පියරය) අර්ථ දැක්වීම සහ සම්මත ධාරාව හා ඉලෙක්ට්‍රෝන ප්‍රවාහය අතර වෙනස හඳුනාගැනීම.',
      },
      {
        en: 'Derive the microscopic current relation I = n A v_d e and calculate electron drift velocities in metallic conductors.',
        si: 'I = n A v_d e ක්ෂුද්‍ර ධාරා සමීකරණය ව්‍යුත්පන්න කිරීම සහ ලෝහමය සන්නායක තුළ ඉලෙක්ට්‍රෝන ප්ලාවිත ප්‍රවේගය ගණනය කිරීම.',
      },
      {
        en: 'Define current density J = I/A and explain how an applied electric field establishes collective drift motion across thermal agitation.',
        si: 'ධාරා ඝනත්වය J = I/A අර්ථ දැක්වීම සහ තාප අහඹු චලිතය මධ්‍යයේ විද්‍යුත් ක්ෂේත්‍රයක් මඟින් සාමූහික ප්ලාවිතයක් ඇතිකරන ආකාරය පැහැදිලි කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Electric charge flow and macroscopic current definition (I = dq/dt)', si: 'විද්‍යුත් ආරෝපණ ප්‍රවාහය සහ සාර්ව ධාරාව අර්ථ දැක්වීම' },
      { en: 'Charge carriers in metallic conductors, electrolytes, and semiconductors', si: 'ලෝහ, විද්‍යුත් විච්ඡේද්‍ය සහ අර්ධ සන්නායක තුළ ආරෝපණ වාහක' },
      { en: 'Free electron model and thermal velocities (~ 10⁵ m s⁻¹)', si: 'නිදහස් ඉලෙක්ට්‍රෝන ආකෘතිය සහ තාප ප්‍රවේග' },
      { en: 'Derivation of drift velocity equation: I = n A v_d e', si: 'ප්ලාවිත ප්‍රවේග සමීකරණය ව්‍යුත්පන්න කිරීම: I = n A v_d e' },
      { en: 'Current density vector J = I / A and local Ohm’s law J = σE', si: 'ධාරා ඝනත්ව දෛශිකය J = I / A සහ ප්‍රාදේශීය ඕම් නියමය J = σE' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electric current represents the organized, net transfer of electrical charge through a defined cross-sectional surface. Although individual conduction electrons engage in chaotic, high-speed thermal collisions at hundreds of kilometres per second, an electric field superimposes a steady, collective drift at fractions of a millimetre per second.',
        si: 'විද්‍යුත් ධාරාවක් යනු යම් හරස්කඩක් හරහා සිදුවන විද්‍යුත් ආරෝපණවල සංවිධානාත්මක ශුද්ධ ප්‍රවාහයයි. තනි සන්නයන ඉලෙක්ට්‍රෝන තත්පරයට කිලෝමීටර සිය ගණනක වේගයෙන් තාප අහඹු ගැටුම්වල යෙදුණද, විද්‍යුත් ක්ෂේත්‍රයක් මඟින් තත්පරයට මිලිමීටරයෙන් කොටසක් තරම් මන්දගාමී සාමූහික ප්ලාවිතයක් ඇති කරයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Microscopic Current Equation', si: 'ක්ෂුද්‍ර ධාරා සමීකරණය' },
          description: {
            en: 'For mobile carrier density n, cross-section area A, carrier charge e, and drift speed v_d: I = n A v_d e.',
            si: 'වාහක ඝනත්වය n, හරස්කඩ වර්ගඵලය A, ආරෝපණය e සහ ප්ලාවිත ප්‍රවේගය v_d සඳහා: I = n A v_d e වේ.',
          },
          formula: 'I = n A v_d e \\quad \\Longleftrightarrow \\quad v_d = \\frac{I}{n A e}',
        },
        {
          title: { en: 'Current Density', si: 'ධාරා ඝනත්වය' },
          description: {
            en: 'Current per unit normal area: J = I / A = n e v_d (unit: A m⁻²). At the microscopic level, J = σ E, where σ is electrical conductivity.',
            si: 'ලම්බක ඒකක වර්ගඵලයක ධාරාව: J = I / A = n e v_d (A m⁻²). ක්ෂුද්‍ර මට්ටමේදී J = σ E වේ (σ යනු සන්නායකතාවයි).',
          },
          formula: 'J = \\frac{I}{A} = n e v_d = \\sigma E',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Electrons race through circuit wires at the speed of light.',
            si: 'ඉලෙක්ට්‍රෝන කම්බි ඔස්සේ ආලෝකයේ වේගයෙන් දිවයයි.',
          },
          clarification: {
            en: 'Individual electrons drift very slowly (~ 10⁻⁴ m s⁻¹). It is the electric field disturbance (electromagnetic wave signal) that travels at near light speed (~ 3 × 10⁸ m s⁻¹), compelling all pre-existing electrons to drift simultaneously.',
            si: 'තනි ඉලෙක්ට්‍රෝන ඉතා සෙමින් ප්ලාවිත වේ (~ 10⁻⁴ m s⁻¹). කම්බිය පුරා ඇති ඉලෙක්ට්‍රෝන එකවර චලනය කරවන විද්‍යුත් ක්ෂේත්‍ර සංඥාව පමණක් ආලෝකයේ වේගයෙන් ගමන් කරයි.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.2: Resistance, Resistivity & Temperature Dependence
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-2',
    slug: 'resistance-resistivity-temperature',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 2,
    syllabusRef: 'Competency 8.1',
    title: {
      en: 'Resistance, Resistivity & Temperature',
      si: 'ප්‍රතිරෝධය, ප්‍රතිරෝධකතාව සහ උෂ්ණත්වය',
    },
    summary: {
      en: 'Ohm’s law V = IR, resistance geometry R = ρl/A, electrical conductivity σ = 1/ρ, temperature coefficient of resistance R_θ = R₀(1 + αΔθ), ohmic vs non-ohmic components, and resistor color coding.',
      si: 'ඕම්ගේ නියමය V = IR, ප්‍රතිරෝධ ජ්‍යාමිතිය R = ρl/A, සන්නායකතාව σ = 1/ρ, ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය R_θ = R₀(1 + αΔθ), ඕමීය සහ ඕමීය නොවන උපාංග, සහ ප්‍රතිරෝධක වර්ණ කේතය.',
    },
    learningObjectives: [
      {
        en: 'State Ohm’s law, identifying physical conditions (constant temperature) required for its strict validity.',
        si: 'ඕම්ගේ නියමය ප්‍රකාශ කිරීම සහ එය වලංගු වීමට අවශ්‍ය භෞතික කොන්දේසි (නියත උෂ්ණත්වය) හඳුනාගැනීම.',
      },
      {
        en: 'Calculate resistance from resistivity and dimensions: R = ρl/A, and analyze uniform stretching of wires at constant volume.',
        si: 'R = ρl/A ඇසුරෙන් ප්‍රතිරෝධය ගණනය කිරීම සහ පරිමාව නියතව කම්බි ඇදීමේදී ප්‍රතිරෝධ විචලනය විශ්ලේෂණය කිරීම.',
      },
      {
        en: 'Explain how temperature affects resistivity in metals (positive α) and semiconductors (negative α), solving R_θ = R₀(1 + αΔθ).',
        si: 'ලෝහ (ධන α) සහ අර්ධ සන්නායක (සෘණ α) වල ප්‍රතිරෝධය මත උෂ්ණත්වයේ බලපෑම පැහැදිලි කර R_θ = R₀(1 + αΔθ) ගැටලු විසඳීම.',
      },
    ],
    topicOutline: [
      { en: 'Ohm’s Law: physical statement and linear V-I relationship', si: 'ඕම්ගේ නියමය: ප්‍රකාශය සහ රේඛීය V-I සම්බන්ධය' },
      { en: 'Factors governing resistance: length, cross-sectional area, material resistivity', si: 'ප්‍රතිරෝධය කෙරෙහි බලපාන සාධක: දිග, වර්ගඵලය සහ ප්‍රතිරෝධකතාව' },
      { en: 'Formula: R = ρl / A and volume-conserving dimensional stretching', si: 'R = ρl / A සූත්‍රය සහ පරිමාව සංරක්ෂිතව දිගු කිරීම' },
      { en: 'Temperature coefficient of resistance (α) and platinum resistance thermometer', si: 'ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය (α) සහ ප්ලැටිනම් උෂ්ණත්වමානය' },
      { en: 'Non-ohmic conductors: filament lamps, thermistors, diodes, and electrolytes', si: 'ඕමීය නොවන සන්නායක: සූත්‍රිකා බල්බ, තර්මිස්ටර්, ඩයෝඩ සහ විච්ඡේද්‍ය' },
      { en: '4-band carbon resistor color code reading and standard tolerances', si: 'වළලු 4 ක කාබන් ප්‍රතිරෝධක වර්ණ කේතය කියවීම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electrical resistance quantifies a material\'s opposition to charge flow under an electric potential gradient. In metallic conductors at constant temperature, the current is strictly proportional to applied potential difference (Ohm\'s Law). When temperature rises, thermal lattice vibrations increase collision frequency, elevating metallic resistance while lowering semiconductor resistance.',
        si: 'විද්‍යුත් ප්‍රතිරෝධය මඟින් විභව අන්තරයක් යටතේ ආරෝපණ ගලායාමට ඇතිවන බාධාව මනිනු ලැබේ. නියත උෂ්ණත්වයේ පවතින ලෝහමය සන්නායකවල ධාරාව යෙදූ විභව අන්තරයට අනුලෝමව සමානුපාතික වේ (ඕම් නියමය). උෂ්ණත්වය වැඩිවත්ම දැලිස් කම්පන වැඩිවීම නිසා ලෝහවල ප්‍රතිරෝධය වැඩිවන අතර අර්ධ සන්නායකවල ප්‍රතිරෝධය අඩුවේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Resistivity and Dimensions', si: 'ප්‍රතිරෝධකතාව සහ මාන' },
          description: {
            en: 'Resistance R is proportional to length l and inversely proportional to area A: R = (ρ l) / A. Material resistivity ρ has SI unit Ω m.',
            si: 'ප්‍රතිරෝධය R දිග l ට අනුලෝමවද වර්ගඵලය A ට ප්‍රතිලෝමවද සමානුපාතික වේ: R = (ρ l) / A. ප්‍රතිරෝධකතාවයේ ඒකකය Ω m වේ.',
          },
          formula: 'R = \\frac{\\rho l}{A} \\quad \\Longleftrightarrow \\quad \\rho = \\frac{R A}{l}',
        },
        {
          title: { en: 'Temperature Coefficient of Resistance', si: 'ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය' },
          description: {
            en: 'Fractional change in resistance per unit temperature rise: α = (R_θ - R₀) / (R₀ Δθ). For pure metals α > 0; for semiconductors α < 0.',
            si: 'ඒකක උෂ්ණත්ව නැග්මකදී ප්‍රතිරෝධයේ සිදුවන භාගික වෙනස: α = (R_θ - R₀) / (R₀ Δθ). ලෝහ සඳහා α > 0 වන අතර අර්ධ සන්නායක සඳහා α < 0 වේ.',
          },
          formula: 'R_\\theta = R_0 (1 + \\alpha \\Delta\\theta)',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Ohm’s Law V = IR is a universal law of nature that applies to all electrical components.',
            si: 'V = IR ඕම් නියමය සියලු විද්‍යුත් උපාංග සඳහා යෙදිය හැකි සාර්වත්‍ර නීතියකි.',
          },
          clarification: {
            en: 'Ohm’s law is strictly an empirical relationship obeyed only by ohmic conductors at constant temperature. Diodes, thermistors, gas discharge tubes, and hot filament lamps violate Ohm’s law.',
            si: 'ඕම් නියමය නියත උෂ්ණත්වයේ ඇති ලෝහමය සන්නායක සඳහා පමණක් වලංගු වන අනුභූතික නීතියකි. ඩයෝඩ, තර්මිස්ටර් සහ රත් වූ සූත්‍රිකා බල්බ ඕම් නියමය නොපිළිපදී.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.3: EMF, Internal Resistance & Power
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-3',
    slug: 'emf-internal-resistance',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 3,
    syllabusRef: 'Competency 8.2 & 8.3',
    title: {
      en: 'EMF, Internal Resistance & Power',
      si: 'වි.ගා.බ., අභ්‍යන්තර ප්‍රතිරෝධය සහ ක්ෂමතාව',
    },
    summary: {
      en: 'Electromotive force (EMF) E = W/Q, internal resistance r, terminal potential difference V = E - Ir (discharge) and V = E + Ir (charging), V-I graphical determination of E and r, electrical power dissipation P = VI, and the Maximum Power Transfer Theorem.',
      si: 'විද්‍යුත් ගාමක බලය (වි.ගා.බ.) E = W/Q, අභ්‍යන්තර ප්‍රතිරෝධය r, අග්‍රස්ථ විභව අන්තරය V = E - Ir (විසර්ජනය) සහ V = E + Ir (ආරෝපණය), V-I ප්‍රස්තාරයෙන් E සහ r සෙවීම, විද්‍යුත් ක්ෂමතාව P = VI සහ උපරිම ක්ෂමතා හුවමාරු ප්‍රමේයය.',
    },
    learningObjectives: [
      {
        en: 'Distinguish between source Electromotive Force (EMF) and terminal Potential Difference (PD).',
        si: 'ප්‍රභවයක විද්‍යුත් ගාමක බලය (වි.ගා.බ.) සහ අග්‍රස්ථ විභව අන්තරය (වි.අ.) අතර වෙනස පැහැදිලි කිරීම.',
      },
      {
        en: 'Analyze terminal voltage behavior during discharge (V = E - Ir) and battery recharging (V = E + Ir).',
        si: 'විසර්ජනය (V = E - Ir) සහ නැවත ආරෝපණය (V = E + Ir) අතරතුර අග්‍රස්ථ විභව අන්තරයේ හැසිරීම විශ්ලේෂණය කිරීම.',
      },
      {
        en: 'State and prove the Maximum Power Transfer Theorem (R_load = r => P_max = E²/(4r)).',
        si: 'උපරිම ක්ෂමතා හුවමාරු ප්‍රමේයය (R_භාරය = r => P_max = E²/(4r)) ප්‍රකාශ කර සාධනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of Electromotive Force (EMF) as work done per unit charge (E = W / Q)', si: 'ඒකක ආරෝපණයකට කරන කාර්යය ලෙස වි.ගා.බ. සංකල්පය' },
      { en: 'Internal resistance r of chemical cells and accumulators', si: 'රසායනික කෝෂ සහ බැටරිවල අභ්‍යන්තර ප්‍රතිරෝධය r' },
      { en: 'Terminal potential difference equations: discharging (V = E - Ir) vs charging (V = E + Ir)', si: 'අග්‍රස්ථ විභව අන්තර සමීකරණ: විසර්ජනය vs ආරෝපණය' },
      { en: 'Experimental V vs I characteristic line: y-intercept = E, gradient = -r', si: 'V ට එදිරිව I ලාක්ෂණික ප්‍රස්තාරය: අන්තඃඛණ්ඩය = E, බෑවුම = -r' },
      { en: 'Short-circuit current (I_sc = E / r) and open-circuit voltage', si: 'කෙටි පරිපථ ධාරාව (I_sc = E / r) සහ විවෘත පරිපථ වෝල්ටීයතාව' },
      { en: 'Maximum Power Transfer Theorem derivation and condition R = r', si: 'උපරිම ක්ෂමතා හුවමාරු ප්‍රමේයය සහ R = r කොන්දේසිය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'A battery or electrical source maintains a potential difference by driving charges from lower to higher potential through chemical, mechanical, or solar work. The total work performed per unit charge is the source EMF. Real sources possess an intrinsic internal resistance r, causing the terminal voltage to sag under load.',
        si: 'බැටරියක් හෝ විද්‍යුත් ප්‍රභවයක් රසායනික හෝ වෙනත් ශක්තියක් මඟින් ආරෝපණ පහළ විභවයේ සිට ඉහළ විභවයකට ගෙන යාමෙන් විභව අන්තරයක් පවත්වා ගනී. ඒකක ආරෝපණයකට කරන කාර්යය වි.ගා.බ. වේ. ප්‍රායෝගික ප්‍රභවවල අභ්‍යන්තර ප්‍රතිරෝධයක් r පවතින බැවින් ධාරාවක් ගන්නා විට අග්‍රස්ථ විභවය අඩුවේ.',
      },
      keyConcepts: [
        {
          title: { en: 'Terminal Potential Difference', si: 'අග්‍රස්ථ විභව අන්තරය' },
          description: {
            en: 'When delivering current I to an external load: V = E - I r. When being recharged by an external charger: V = E + I r.',
            si: 'බාහිර භාරයකට ධාරාව I සපයන විට: V = E - I r. බාහිරින් ආරෝපණය වන විට: V = E + I r.',
          },
          formula: 'V = E - I r \\quad (\\text{discharge}), \\quad V = E + I r \\quad (\\text{recharge})',
        },
        {
          title: { en: 'Maximum Power Transfer Theorem', si: 'උපරිම ක්ෂමතා හුවමාරු ප්‍රමේයය' },
          description: {
            en: 'Maximum power is delivered to external load R when R equals the source internal resistance r. The maximum power is P_max = E² / (4r).',
            si: 'බාහිර භාර ප්‍රතිරෝධය R ප්‍රභවයේ අභ්‍යන්තර ප්‍රතිරෝධය r ට සමාන වන විට උපරිම ක්ෂමතාවක් හුවමාරු වේ: P_max = E² / (4r).',
          },
          formula: 'P_{\\max} = \\frac{E^2}{4r} \\quad \\text{when} \\quad R_{\\text{load}} = r',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'The terminal potential difference of a cell is always equal to its rated EMF.',
            si: 'කෝෂයක අග්‍රස්ථ විභව අන්තරය සැමවිටම එහි සඳහන් වි.ගා.බ. ට සමාන වේ.',
          },
          clarification: {
            en: 'Terminal voltage V only equals EMF E when the circuit is open (zero current, Ir = 0). As soon as current flows, the internal voltage drop Ir reduces V below E.',
            si: 'අග්‍රස්ථ වෝල්ටීයතාව වි.ගා.බ. ට සමාන වන්නේ පරිපථය විවෘතව ඇතිවිට (I = 0) පමණි. ධාරාව ගලනවිට Ir අභ්‍යන්තර බැස්ම නිසා V අගය E ට වඩා අඩුවේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.4: Kirchhoff's Laws & Networks
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-4',
    slug: 'kirchhoff-laws-networks',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 4,
    syllabusRef: 'Competency 8.4',
    title: {
      en: 'Kirchhoff’s Laws & Networks',
      si: 'කර්චොෆ්ගේ නීති සහ පරිපථ ජාල',
    },
    summary: {
      en: 'Equivalent series and parallel resistance formulas, Kirchhoff’s First Law (Current Law / Junction Rule, ΣI = 0), Kirchhoff’s Second Law (Voltage Law / Loop Rule, ΣE = ΣIR), and systematic mesh analysis of multi-loop DC networks.',
      si: 'ශ්‍රේණිගත සහ සමාන්තරගත සමක ප්‍රතිරෝධ සූත්‍ර, කර්චොෆ්ගේ පළමු නියමය (ධාරා නියමය, ΣI = 0), කර්චොෆ්ගේ දෙවන නියමය (වෝල්ටීයතා නියමය, ΣE = ΣIR) සහ බහු ලූප DC ජාල ක්‍රමානුකූලව විසඳීම.',
    },
    learningObjectives: [
      {
        en: 'Derive equivalent resistances for series (R = ΣR_i) and parallel (1/R = Σ(1/R_i)) resistor combinations.',
        si: 'ශ්‍රේණිගත (R = ΣR_i) සහ සමාන්තරගත (1/R = Σ(1/R_i)) ප්‍රතිරෝධක සංයෝජන සඳහා සමක ප්‍රතිරෝධ සූත්‍ර ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'State Kirchhoff’s Current Law (KCL) and explain its relationship to conservation of electric charge.',
        si: 'කර්චොෆ්ගේ ධාරා නියමය (KCL) ප්‍රකාශ කර එය විද්‍යුත් ආරෝපණ සංස්ථිතියට සම්බන්ධ වන ආකාරය පැහැදිලි කිරීම.',
      },
      {
        en: 'Apply Kirchhoff’s Voltage Law (KVL) to multi-source, multi-mesh DC circuit networks using consistent sign conventions.',
        si: 'නියමිත ලකුණු සම්මුති භාවිතයෙන් බහු-ප්‍රභව සහ බහු-ලූප DC පරිපථ සඳහා කර්චොෆ්ගේ වෝල්ටීයතා නියමය (KVL) යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Series and parallel resistor network reductions', si: 'ශ්‍රේණිගත සහ සමාන්තරගත ප්‍රතිරෝධක ජාල සුළු කිරීම්' },
      { en: 'Kirchhoff’s First Law (KCL): Junction rule and charge conservation', si: 'කර්චොෆ්ගේ පළමු නියමය (KCL): සන්ධි නීතිය සහ ආරෝපණ සංස්ථිතිය' },
      { en: 'Kirchhoff’s Second Law (KVL): Closed loop rule and energy conservation', si: 'කර්චොෆ්ගේ දෙවන නියමය (KVL): ලූප නීතිය සහ ශක්ති සංස්ථිතිය' },
      { en: 'Sign conventions for traversing EMF sources and resistive voltage drops', si: 'ප්‍රභව සහ ප්‍රතිරෝධක විභව බැස්ම සඳහා ලකුණු සම්මුති' },
      { en: 'Symmetric resistor cubes and complex network reduction methods', si: 'සමමිතික ප්‍රතිරෝධක ඝනක සහ සංකීර්ණ ජාල විසඳීමේ ක්‍රම' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'While simple single-loop circuits can be evaluated using Ohm\'s law alone, complex multi-branch and multi-source electrical grids require generalized conservation principles. Gustav Kirchhoff formulated two fundamental rules—one embodying electric charge conservation at nodes, and the other embodying energy conservation around closed loops.',
        si: 'සරල තනි ලූප පරිපථ ඕම් නියමයෙන් පමණක් විසඳිය හැකි වුවද, බහු ප්‍රභව සහිත සංකීර්ණ ජාල සඳහා සාර්වත්‍ර සංස්ථිති නියම අවශ්‍ය වේ. ගුස්ටාව් කර්චොෆ් විසින් සන්ධිවල ආරෝපණ සංස්ථිතිය සහ සංවෘත ලූපවල ශක්ති සංස්ථිතිය නිරූපණය කරන මූලික නියම දෙකක් සම්පාදනය කළේය.',
      },
      keyConcepts: [
        {
          title: { en: 'Kirchhoff’s First Law (KCL)', si: 'කර්චොෆ්ගේ පළමු නියමය (KCL)' },
          description: {
            en: 'The algebraic sum of currents entering any electrical junction must be zero (charge conservation): Σ I_in = Σ I_out.',
            si: 'ඕනෑම සන්ධියකට ඇතුළු වන ධාරාවල වීජීය එකතුව ශුන්‍ය වේ (ආරෝපණ සංස්ථිතිය): Σ I_ඇතුළු = Σ I_පිටවන.',
          },
          formula: '\\sum I = 0 \\quad \\Longleftrightarrow \\quad \\sum I_{\\text{in}} = \\sum I_{\\text{out}}',
        },
        {
          title: { en: 'Kirchhoff’s Second Law (KVL)', si: 'කර්චොෆ්ගේ දෙවන නියමය (KVL)' },
          description: {
            en: 'Around any closed electrical mesh, the algebraic sum of EMFs equals the algebraic sum of potential drops (energy conservation): Σ E = Σ IR.',
            si: 'ඕනෑම සංවෘත ලූපයක් වටා වි.ගා.බ. වල වීජීය එකතුව විභව බැස්මවල වීජීය එකතුවට සමාන වේ (ශක්ති සංස්ථිතිය): Σ E = Σ IR.',
          },
          formula: '\\sum E = \\sum I R',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'Electric current gets used up or diminishes as it flows through consecutive series resistors.',
            si: 'ශ්‍රේණිගත ප්‍රතිරෝධක හරහා ගමන් කිරීමේදී විද්‍යුත් ධාරාව වැය වී හෝ අඩුවී යයි.',
          },
          clarification: {
            en: 'Electric current is the continuous rate of charge flow; by charge conservation, every electron that enters one end of a series resistor must emerge from the other. What gets used up is electrical potential energy (voltage), never the charge or current itself.',
            si: 'ආරෝපණ සංස්ථිතියට අනුව ශ්‍රේණිගත පරිපථයක ධාරාව සෑම තැනකම එක සමාන වේ. වැය වන්නේ විද්‍යුත් විභව ශක්තිය (වෝල්ටීයතාව) මිස ධාරාව හෝ ආරෝපණ නොවේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.5: Potentiometer & Bridge Circuits
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-5',
    slug: 'potentiometer-bridge-circuits',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 5,
    syllabusRef: 'Competency 8.5',
    title: {
      en: 'Potentiometer & Bridge Circuits',
      si: 'විභවමානය සහ සේතු මිනුම් පරිපථ',
    },
    summary: {
      en: 'Potential divider principle, uniform potentiometer wire and potential gradient k = V/l, comparison of cell EMFs (E₁/E₂ = l₁/l₂), cell internal resistance determination r = R(l₀ - l)/l, Wheatstone Bridge balance condition P/Q = R/S, and the Meter Bridge.',
      si: 'විභව බෙදුම් මූලධර්මය, ඒකාකාර විභවමාන කම්බිය සහ විභව අනුක්‍රමණය k = V/l, වි.ගා.බ. සැසඳීම (E₁/E₂ = l₁/l₂), අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම r = R(l₀ - l)/l, විට්ස්ටන් සේතු සමතුලිතතාව P/Q = R/S සහ මීටර් සේතුව.',
    },
    learningObjectives: [
      {
        en: 'Explain why a potentiometer achieves ideal null-balance voltage measurements without drawing current from the test source.',
        si: 'පරීක්ෂා ප්‍රභවයෙන් ධාරාවක් නොගෙන විභවමානයකින් පරිපූර්ණ ශුන්‍ය සමතුලිත මිනුම් ලබාගත හැකි වන්නේ මන්දැයි පැහැදිලි කිරීම.',
      },
      {
        en: 'Calculate cell EMFs and determine cell internal resistance using potentiometer balance lengths: r = R(l₀ - l)/l.',
        si: 'සමතුලිත දිග ඇසුරෙන් වි.ගා.බ. ගණනය කිරීම සහ r = R(l₀ - l)/l මඟින් කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය නිර්ණය කිරීම.',
      },
      {
        en: 'Derive the Wheatstone Bridge balance condition (P/Q = R/S) and apply the Meter Bridge to measure unknown resistances and temperature coefficients.',
        si: 'විට්ස්ටන් සේතු සමතුලිතතා කොන්දේසිය (P/Q = R/S) ව්‍යුත්පන්න කර නොදන්නා ප්‍රතිරෝධ හා උෂ්ණත්ව සංගුණක මැනීමට මීටර් සේතුව යෙදීම.',
      },
    ],
    topicOutline: [
      { en: 'Potential divider circuit formula: V_out = V_in * (R₂ / (R₁ + R₂))', si: 'විභව බෙදුම් සූත්‍රය: V_out = V_in * (R₂ / (R₁ + R₂))' },
      { en: 'Potentiometer wire uniformity and potential gradient k = V_wire / L', si: 'විභවමාන කම්බියේ ඒකාකාර බව සහ විභව අනුක්‍රමණය k = V / L' },
      { en: 'Comparison of EMFs of two cells using potentiometer balance lengths', si: 'සමතුලිත දිග ඇසුරෙන් කෝෂ දෙකක වි.ගා.බ. සැසඳීම' },
      { en: 'Determination of internal resistance of a cell (open vs shunted balance)', si: 'කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම (විවෘත vs ෂන්ට් කළ සමතුලිතතාව)' },
      { en: 'Wheatstone Bridge principle: derivation of null condition P / Q = R / S', si: 'විට්ස්ටන් සේතු මූලධර්මය: P / Q = R / S සමතුලිතතාවය ව්‍යුත්පන්න කිරීම' },
      { en: 'Meter Bridge practical: end-error correction and sensitivity optimization at 50 cm', si: 'මීටර් සේතු ප්‍රායෝගිකය: අන්ත දෝෂ නිවැරදි කිරීම සහ 50 cm හි සංවේදීතාව' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'High-precision electrical metrology relies on null-deflection balance techniques. Because ordinary meters draw current and perturb the circuit under test, null-detecting instruments like the Potentiometer and Wheatstone Bridge balance opposing voltages or bridge ratios until zero current flows through a sensitive detector, eliminating loading errors entirely.',
        si: 'ඉහළ නිරවද්‍යතාවයකින් යුත් විද්‍යුත් මිනුම් ලබාගැනීමට ශුන්‍ය අපගමන ක්‍රම භාවිත කෙරේ. සාමාන්‍ය මීටර පරිපථයෙන් ධාරාවක් ලබාගන්නා බැවින් දෝෂ ඇතිවේ. එහෙත් විභවමානය සහ විට්ස්ටන් සේතුව ශුන්‍ය සමතුලිතතාවයට පැමිණෙන විට ගැල්වනෝමීටරය හරහා ධාරාවක් නොගලන බැවින් භාර දෝෂ මුළුමනින්ම පහව යයි.',
      },
      keyConcepts: [
        {
          title: { en: 'Potentiometer Internal Resistance Method', si: 'විභවමානයෙන් අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම' },
          description: {
            en: 'Open-circuit balance length l₀ measures EMF E. Shunted balance length l with resistor R measures terminal voltage V: r = R ((l₀ - l) / l).',
            si: 'විවෘත පරිපථ සමතුලිත දිග l₀ මඟින් වි.ගා.බ. E ද, R ෂන්ට් කළ විට සමතුලිත දිග l මඟින් V ද ලැබේ: r = R ((l₀ - l) / l).',
          },
          formula: 'r = R \\left( \\frac{l_0 - l}{l} \\right)',
        },
        {
          title: { en: 'Wheatstone Bridge Balance Condition', si: 'විට්ස්ටන් සේතු සමතුලිතතා කොන්දේසිය' },
          description: {
            en: 'When the potential difference across the galvanometer is zero (null deflection): P / Q = R / S  =>  S = (Q R) / P.',
            si: 'ගැල්වනෝමීටරය හරහා විභව අන්තරය ශුන්‍ය වන විට (ශුන්‍ය අපගමනය): P / Q = R / S  =>  S = (Q R) / P.',
          },
          formula: '\\frac{P}{Q} = \\frac{R}{S} \\quad \\Longleftrightarrow \\quad S = \\frac{Q \\cdot R}{P}',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'The potentiometer wire must be made of low-resistance copper to minimize heat.',
            si: 'තාපය අවම කිරීමට විභවමාන කම්බිය අඩු ප්‍රතිරෝධී තඹවලින් සෑදිය යුතුය.',
          },
          clarification: {
            en: 'The potentiometer wire requires high resistivity and a nearly zero temperature coefficient of resistance (like manganin or constantan) so that resistance per unit length remains strictly uniform and unaffected by current-induced temperature shifts.',
            si: 'විභවමාන කම්බිය සඳහා ඉහළ ප්‍රතිරෝධකතාවක් සහ ශුන්‍යයට ආසන්න උෂ්ණත්ව සංගුණකයක් ඇති මැන්ගනින් හෝ කොන්ස්ටන්ටන් භාවිත කළ යුතුය, එවිට ඒකක දිගක ප්‍රතිරෝධය ඒකාකාරව පවතී.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.6: Electromagnetic Induction & Motional EMF
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-6',
    slug: 'electromagnetic-induction-motional-emf',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 6,
    syllabusRef: 'Competency 8.6',
    title: {
      en: 'Electromagnetic Induction & Motional EMF',
      si: 'විද්‍යුත් චුම්බක ප්‍රේරණය සහ චාලක වි.ගා.බ.',
    },
    summary: {
      en: 'Magnetic flux linkage λ = NΦ, Faraday’s Law of Electromagnetic Induction ε = -N(dΦ/dt), Lenz’s Law and energy conservation, motional electromotive force on sliding conductors ε = Blv, and eddy current generation and damping.',
      si: 'චුම්බක ස්‍රාව බන්ධනය λ = NΦ, විද්‍යුත් චුම්බක ප්‍රේරණය පිළිබඳ ෆැරඩේ නියමය ε = -N(dΦ/dt), ලෙන්ස් නියමය සහ ශක්ති සංස්ථිතිය, චලනය වන සන්නායකවල චාලක වි.ගා.බ. ε = Blv සහ සුළි ධාරා හා මන්දනය.',
    },
    learningObjectives: [
      {
        en: 'State Faraday’s law of induction and calculate induced EMF from rates of magnetic flux linkage change: ε = -N(ΔΦ/Δt).',
        si: 'ෆැරඩේගේ ප්‍රේරණ නියමය ප්‍රකාශ කර ස්‍රාව බන්ධන වෙනස්වීමේ සීඝ්‍රතාවයෙන් ප්‍රේරිත වි.ගා.බ. ගණනය කිරීම: ε = -N(ΔΦ/Δt).',
      },
      {
        en: 'Apply Lenz’s law to determine the polarity of induced EMFs and current directions, showing its equivalence to conservation of energy.',
        si: 'ප්‍රේරිත වි.ගා.බ. හි ධ්‍රැවීයතාව හා ධාරා දිශාව තීරණය කිරීමට ලෙන්ස් නියමය යෙදීම සහ එය ශක්ති සංස්ථිතියට අනුකූල බව පෙන්වීම.',
      },
      {
        en: 'Derive motional EMF ε = Blv for a conducting rod moving through a perpendicular magnetic field.',
        si: 'ලම්බක චුම්බක ක්ෂේත්‍රයක් තුළ චලනය වන සන්නායක දණ්ඩක් සඳහා චාලක වි.ගා.බ. ε = Blv ව්‍යුත්පන්න කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Concept of magnetic flux Φ = B · A and flux linkage λ = NΦ (Wb)', si: 'චුම්බක ස්‍රාවය Φ = B · A සහ ස්‍රාව බන්ධනය λ = NΦ' },
      { en: 'Faraday’s Law of Induction: mathematical statement and units', si: 'විද්‍යුත් චුම්බක ප්‍රේරණය පිළිබඳ ෆැරඩේ නියමය' },
      { en: 'Lenz’s Law: physical meaning of the minus sign and mechanical resistance', si: 'ලෙන්ස් නියමය: සෘණ ලකුණෙහි භෞතික අර්ථය සහ යාන්ත්‍රික ප්‍රතිරෝධය' },
      { en: 'Motional EMF on moving conductors: derivation of ε = B l v', si: 'චලනය වන සන්නායකවල චාලක වි.ගා.බ.: ε = B l v ව්‍යුත්පන්න කිරීම' },
      { en: 'Eddy currents: formation in bulk metals, energy losses, and laminated core mitigation', si: 'සුළි ධාරා: සෑදීම, ශක්ති හානි සහ ලැමිෙන්ට් තහඩු මඟින් අවම කිරීම' },
      { en: 'Electromagnetic braking and damping applications', si: 'විද්‍යුත් චුම්බක තිරිංග සහ මන්දන යෙදවුම්' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Electromagnetic induction describes the generation of an electric voltage across a conductor whenever the magnetic flux linked with that conductor varies in time. Michael Faraday discovered this unifying bridge between magnetism and electricity in 1831, laying the physical foundation for electric generators, induction motors, and electrical power generation worldwide.',
        si: 'විද්‍යුත් චුම්බක ප්‍රේරණය යනු සන්නායකයක් සමඟ බැඳී පවතින චුම්බක ස්‍රාවය කාලය සමඟ වෙනස්වන සෑම විටම සන්නායකය දෙකෙළවර විද්‍යුත් විභවයක් හටගැනීමයි. 1831 දී මයිකල් ෆැරඩේ විසින් මෙම සංසිද්ධිය සොයාගත් අතර, එය ලොව පුරා විදුලි ජනක යන්ත්‍ර සහ ප්‍රේරක මෝටර් සඳහා පදනම විය.',
      },
      keyConcepts: [
        {
          title: { en: 'Faraday’s Law of Induction', si: 'ෆැරඩේගේ ප්‍රේරණ නියමය' },
          description: {
            en: 'The magnitude of induced EMF in a circuit is directly proportional to the time rate of change of magnetic flux linkage: ε = -N (dΦ / dt).',
            si: 'පරිපථයක ප්‍රේරණය වන වි.ගා.බ. චුම්බක ස්‍රාව බන්ධනය වෙනස්වීමේ කාල සීඝ්‍රතාවයට අනුලෝමව සමානුපාතික වේ: ε = -N (dΦ / dt).',
          },
          formula: '\\mathcal{E} = -N \\frac{d\\Phi}{dt} = -N \\frac{\\Delta(B A \\cos\\theta)}{\\Delta t}',
        },
        {
          title: { en: 'Motional EMF', si: 'චාලක විද්‍යුත් ගාමක බලය' },
          description: {
            en: 'A conductor of length l moving with speed v perpendicular to uniform magnetic field B develops an induced motional EMF: ε = B l v.',
            si: 'B ඒකාකාර චුම්බක ක්ෂේත්‍රයකට ලම්බකව v වේගයෙන් චලනය වන l දිගැති සන්නායකයක ප්‍රේරණය වන චාලක වි.ගා.බ.: ε = B l v වේ.',
          },
          formula: '\\mathcal{E} = B l v',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A strong magnetic field alone will continuously induce an electromotive force in a stationary loop.',
            si: 'ප්‍රබල චුම්බක ක්ෂේත්‍රයක් තිබීමෙන්ම නිශ්චල ලූපයක් තුළ අඛණ්ඩව වි.ගා.බ. ක් ප්‍රේරණය වේ.',
          },
          clarification: {
            en: 'No matter how intense the magnetic field B is, if it is completely static and constant (dΦ/dt = 0), the induced EMF is strictly zero. Induction demands dynamic time variation of magnetic flux or physical motion.',
            si: 'චුම්බක ක්ෂේත්‍රය කෙතරම් ප්‍රබල වුවද එය ස්ථාවරව පවතී නම් (dΦ/dt = 0) වි.ගා.බ. ක් ප්‍රේරණය නොවේ. ප්‍රේරණය සඳහා ස්‍රාව වෙනසක් හෝ චලිතයක් අත්‍යවශ්‍ය වේ.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.7: Alternating Current (AC) & Transformers
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-7',
    slug: 'alternating-current-transformers',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 7,
    syllabusRef: 'Competency 8.6',
    title: {
      en: 'Alternating Current (AC) & Transformers',
      si: 'ප්‍රත්‍යාවර්ත ධාරාව (AC) සහ පරිණාමක',
    },
    summary: {
      en: 'AC generation principles, sinusoidal voltage V(t) = V₀ sin(ωt), Root-Mean-Square (RMS) definitions V_rms = V₀/√2 and I_rms = I₀/√2, transformer action V_s/V_p = N_s/N_p, step-up/step-down conversions, efficiency η, and transformer power losses.',
      si: 'AC උත්පාදන මූලධර්ම, සයිනාකාර වෝල්ටීයතාව V(t) = V₀ sin(ωt), වර්ග මධ්‍යන්‍ය මූල (RMS) අර්ථ දැක්වීම් V_rms = V₀/√2 සහ I_rms = I₀/√2, පරිණාමක ක්‍රියාකාරීත්වය V_s/V_p = N_s/N_p, කාර්යක්ෂමතාව η සහ පරිණාමක ක්ෂමතා හානි.',
    },
    learningObjectives: [
      {
        en: 'Define sinusoidal AC peak and RMS values, deriving V_rms = V₀/√2 and I_rms = I₀/√2 from average Joule heating.',
        si: 'සයිනාකාර AC හි උපරිම හා RMS අගයන් අර්ථ දක්වා සාමාන්‍ය ජූල් තාපනය ඇසුරෙන් V_rms = V₀/√2 සහ I_rms = I₀/√2 ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Derive the ideal transformer equation V_s / V_p = N_s / N_p = I_p / I_s from Faraday’s law of mutual flux linkage.',
        si: 'අන්‍යෝන්‍ය ස්‍රාව බන්ධනය පිළිබඳ ෆැරඩේ නියමය ඇසුරෙන් පරිපූර්ණ පරිණාමක සමීකරණය V_s / V_p = N_s / N_p = I_p / I_s ව්‍යුත්පන්න කිරීම.',
      },
      {
        en: 'Analyze power losses in practical transformers (copper I²R, eddy currents, magnetic hysteresis, flux leakage) and calculate electrical efficiency η = (P_out / P_in) * 100%.',
        si: 'ප්‍රායෝගික පරිණාමකවල ක්ෂමතා හානි (තඹ I²R, සුළි ධාරා, හිස්ටරෙසිස්, ස්‍රාව කාන්දු) විශ්ලේෂණය කර කාර්යක්ෂමතාව η = (P_out / P_in) * 100% ගණනය කිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Generation of alternating sinusoidal EMF by rotating coils in uniform B-fields', si: 'ඒකාකාර B ක්ෂේත්‍රවල දඟර භ්‍රමණය කර සයිනාකාර AC උත්පාදනය' },
      { en: 'Mathematical waveform: V(t) = V₀ sin(2πft) and peak vs RMS values', si: 'ගණිතමය තරංග සමීකරණය: V(t) = V₀ sin(2πft) සහ උපරිම vs RMS අගයන්' },
      { en: 'Thermal definition of RMS current (P_avg = I_rms² R)', si: 'RMS ධාරාවේ තාපන අර්ථ දැක්වීම (P_avg = I_rms² R)' },
      { en: 'Construction and mutual induction principle of electrical transformers', si: 'විද්‍යුත් පරිණාමකවල ව්‍යුහය සහ අන්‍යෝන්‍ය ප්‍රේරණ මූලධර්මය' },
      { en: 'Transformer turn ratio equations: step-up vs step-down configurations', si: 'පරිණාමක පොට අනුපාත සමීකරණ: ස්ටෙප්-අප් vs ස්ටෙප්-ඩවුන්' },
      { en: 'Physical origins of transformer power loss and efficiency calculations', si: 'පරිණාමක ක්ෂමතා හානිවල භෞතික හේතු සහ කාර්යක්ෂමතා ගණනය' },
      { en: 'High-voltage national grid electrical power transmission', si: 'අධි-වෝල්ටීයතා ජාතික විදුලිබල සම්ප්‍රේෂණ පද්ධතිය' },
    ],
    status: 'ready',
    hasSimulation: false,
    content: {
      introduction: {
        en: 'Alternating Current (AC) reverses its direction periodically with a continuous sinusoidal time variation. The paramount engineering advantage of AC over DC is that AC voltages can be stepped up to hundreds of thousands of volts for long-distance transmission with negligible resistive loss, and then stepped down safely for consumer use using electrical transformers.',
        si: 'ප්‍රත්‍යාවර්ත ධාරාව (AC) කාලය සමඟ සයිනාකාරව එහි දිශාව කලින් කලට ප්‍රතිවර්තනය කරයි. DC හා සැසඳීමේදී AC හි ඇති ප්‍රධානතම ඉංජිනේරු වාසිය වන්නේ පරිණාමක භාවිතයෙන් වෝල්ටීයතාව වෝල්ට් ලක්ෂ ගණනක් දක්වා ඉහළ නංවා දිගු දුර සම්ප්‍රේෂණය කළ හැකි වීමත්, පාරිභෝගිකයන් සඳහා ආරක්ෂිතව වෝල්ටීයතාව පහළ හෙළිය හැකි වීමත්ය.',
      },
      keyConcepts: [
        {
          title: { en: 'RMS Voltage and Current', si: 'වර්ග මධ්‍යන්‍ය මූල (RMS) වෝල්ටීයතාව සහ ධාරාව' },
          description: {
            en: 'For a sinusoidal waveform, the effective heating value is related to the peak value by: V_rms = V₀ / √2 ≈ 0.707 V₀, and I_rms = I₀ / √2.',
            si: 'සයිනාකාර තරංගයක් සඳහා ඵලදායී තාපන අගය උපරිම අගයට සම්බන්ධ වන්නේ: V_rms = V₀ / √2 ≈ 0.707 V₀ සහ I_rms = I₀ / √2 ලෙසිනි.',
          },
          formula: 'V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}',
        },
        {
          title: { en: 'Ideal Transformer Relations', si: 'පරිපූර්ණ පරිණාමක සම්බන්ධතා' },
          description: {
            en: 'Voltages are directly proportional to turns, while currents are inversely proportional: V_s / V_p = N_s / N_p = I_p / I_s.',
            si: 'වෝල්ටීයතා පොටවල් ගණනට අනුලෝමවද ධාරා ප්‍රතිලෝමවද සමානුපාතික වේ: V_s / V_p = N_s / N_p = I_p / I_s.',
          },
          formula: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}',
        },
        {
          title: { en: 'Transformer Efficiency', si: 'පරිණාමක කාර්යක්ෂමතාව' },
          description: {
            en: 'Efficiency η is the ratio of useful secondary power output to primary power input: η = (V_s I_s / V_p I_p) * 100%.',
            si: 'කාර්යක්ෂමතාව η යනු ද්විතීයික ප්‍රතිදාන ක්ෂමතාවය ප්‍රාථමික ආදාන ක්ෂමතාවයට දරන ප්‍රතිශත අනුපාතයයි: η = (V_s I_s / V_p I_p) * 100%.',
          },
          formula: '\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%',
        },
      ],
      commonMisconceptions: [
        {
          misconception: {
            en: 'A step-up transformer creates electrical power from nothing, violating energy conservation.',
            si: 'ස්ටෙප්-අප් පරිණාමකයක් මඟින් ශක්ති සංස්ථිතිය කඩ කරමින් අලුතින් විදුලි ක්ෂමතාවක් නිර්මාණය කරයි.',
          },
          clarification: {
            en: 'A step-up transformer increases voltage at the expense of an exactly proportional reduction in current (P = VI). In fact, because of real core and copper losses, power output is always slightly less than power input (efficiency < 100%).',
            si: 'ස්ටෙප්-අප් පරිණාමකයකින් වෝල්ටීයතාව වැඩි කරන්නේ ධාරාව අනුපාතිකව අඩු කිරීමෙනි (P = VI). සැබවින්ම තාප හානි නිසා ප්‍රතිදාන ක්ෂමතාව ආදාන ක්ෂමතාවට වඩා සැමවිටම මඳක් අඩුය.',
          },
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Lesson 8.8: Interactive Simulation Lab
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-8',
    slug: 'electricity-circuit-simulation-lab',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 8,
    syllabusRef: 'Syllabus Laboratory Simulation',
    title: {
      en: 'DC Circuit & Transformer Simulation Lab',
      si: 'DC පරිපථ සහ පරිණාමක සමාකරණ විද්‍යාගාරය',
    },
    summary: {
      en: '60fps interactive laboratory featuring a precision potentiometer null-balance experiment (investigating potential gradient and determining internal resistance) and an AC transformer power analyzer with real core lamination losses.',
      si: 'විභවමානයකින් ශුන්‍ය සමතුලිතතාව හා අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම මෙන්ම AC පරිණාමකයක ප්‍රේරණය හා සුළි ධාරා ක්ෂමතා හානි ගවේෂණය කරන 60fps අන්තර්ක්‍රියාකාරී සමාකරණ විද්‍යාගාරය.',
    },
    learningObjectives: [
      {
        en: 'Adjust potentiometer wire parameters and jockey position to locate null-balance points with center-zero galvanometer telemetry.',
        si: 'විභවමාන කම්බියේ පරාමිතීන් සහ සර්පණ විදිනය වෙනස් කර කේන්ද්‍ර-ශුන්‍ය ගැල්වනෝමීටරයෙන් ශුන්‍ය සමතුලිත ලක්ෂ්‍ය නිර්ණය කිරීම.',
      },
      {
        en: 'Determine unknown cell EMF and calculate internal resistance from shunted balance measurements.',
        si: 'නොදන්නා වි.ගා.බ. මැනීම සහ ෂන්ට් කළ සමතුලිත මිනුම් ඇසුරෙන් අභ්‍යන්තර ප්‍රතිරෝධය r ගණනය කිරීම.',
      },
      {
        en: 'Simulate step-up and step-down AC transformer operation, observing oscilloscope waveforms and measuring efficiency under laminated vs solid cores.',
        si: 'ස්ටෙප්-අප් සහ ස්ටෙප්-ඩවුන් AC පරිණාමක සමාකරණය කර oscilloscope තරංග නිරීක්ෂණය කිරීම හා ලැමිෙන්ට් කළ vs ඝන හර යටතේ කාර්යක්ෂමතාව මැනීම.',
      },
    ],
    topicOutline: [
      { en: 'Interactive potentiometer slide-wire with live galvanometer deflection', si: 'සජීවී ගැල්වනෝමීටර අපගමනය සහිත අන්තර්ක්‍රියාකාරී විභවමාන කම්බිය' },
      { en: 'Open vs shunted key internal resistance calculation simulator', si: 'විවෘත vs ෂන්ට් යතුර මඟින් අභ්‍යන්තර ප්‍රතිරෝධය ගණනය' },
      { en: 'Dual-trace oscilloscope for AC primary and secondary voltage waveforms', si: 'ප්‍රාථමික හා ද්විතීයික AC වෝල්ටීයතා සඳහා ද්විත්ව කදම්භ oscilloscope තිරය' },
      { en: 'Transformer copper, eddy current, and hysteresis power loss calculator', si: 'පරිණාමක තඹ, සුළි ධාරා සහ හිස්ටරෙසිස් ක්ෂමතා හානි කැල්කියුලේටරය' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electricity-circuit-simulation',
  },

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // Lesson 8.9: Summative Unit Assessment
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-9',
    slug: 'current-electricity-assessment',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 9,
    syllabusRef: 'Unit 8 Summative Assessment',
    title: {
      en: 'Unit 8 Comprehensive Assessment',
      si: 'ඒකක 8 සමස්ත ඇගයීම',
    },
    summary: {
      en: '20-question summative exam covering all 6 syllabus competencies (8.1 to 8.6) with automated grading, competency breakdown, and targeted revision links.',
      si: 'ස්වයංක්‍රීය ලකුණු ලබාදීම, නිපුණතා විශ්ලේෂණය සහ ඉලක්කගත පුනරීක්ෂණ සබැඳි සහිත සියලු නිපුණතා 6 (8.1 සිට 8.6) ආවරණය කරන ප්‍රශ්න 20 ක සමාප්ති විභාගය.',
    },
    learningObjectives: [
      {
        en: 'Assess comprehensive student mastery of Unit 8 theory, circuit laws, potentiometer measurements, induction, and AC transformer calculations.',
        si: 'ඒකක 8 සිද්ධාන්ත, පරිපථ නීති, විභවමාන මිනුම්, ප්‍රේරණය සහ AC පරිණාමක ගණනය කිරීම් පිළිබඳ ශිෂ්‍ය ප්‍රවීණතාව ඇගයීම.',
      },
    ],
    topicOutline: [
      { en: 'Section 1: Current, Resistance & Ohm’s Law (Competency 8.1)', si: 'කොටස 1: ධාරාව, ප්‍රතිරෝධය සහ ඕම් නියමය (නිපුණතාව 8.1)' },
      { en: 'Section 2: DC Energy & Power (Competency 8.2)', si: 'කොටස 2: DC ශක්තිය සහ ක්ෂමතාව (නිපුණතාව 8.2)' },
      { en: 'Section 3: EMF & Internal Resistance (Competency 8.3)', si: 'කොටස 3: වි.ගා.බ. සහ අභ්‍යන්තර ප්‍රතිරෝධය (නිපුණතාව 8.3)' },
      { en: 'Section 4: Kirchhoff’s Laws & Circuit Analysis (Competency 8.4)', si: 'කොටස 4: කර්චොෆ් නීති සහ පරිපථ විශ්ලේෂණය (නිපුණතාව 8.4)' },
      { en: 'Section 5: Measuring Instruments, Bridges & Potentiometers (Competency 8.5)', si: 'කොටස 5: මිනුම් උපකරණ, සේතු සහ විභවමාන (නිපුණතාව 8.5)' },
      { en: 'Section 6: Electromagnetic Induction, AC & Transformers (Competency 8.6)', si: 'කොටස 6: විද්‍යුත් චුම්බක ප්‍රේරණය, AC සහ පරිණාමක (නිපුණතාව 8.6)' },
    ],
    status: 'ready',
    hasSimulation: false,
    simulationType: 'electricity-assessment',
  },

  // -------------------------------------------------------------------------
  // Lesson 8.10: Practical Investigations Hub
  // -------------------------------------------------------------------------
  {
    id: 'lesson-8-10',
    slug: 'practical-investigations',
    unitSlug: 'current-electricity',
    unitOrder: 8,
    lessonOrder: 10,
    syllabusRef: 'NIE Practical Handbook: Experiments 30, 31, 32, 33, 34, 35',
    title: {
      en: 'Current Electricity Practicals Hub',
      si: 'ධාරා විද්‍යුතය ප්‍රායෝගික පරීක්ෂණ මධ්‍යස්ථානය',
    },
    summary: {
      en: 'Complete suite of syllabus practicals: Exp 30 (V-I characteristics of conductor/diode), Exp 31 (internal resistance by voltmeter-ammeter), Exp 32 (resistance & resistivity by Meter Bridge), Exp 33 (temperature coefficient of resistance by Meter Bridge), Exp 34 (comparison of EMFs by Potentiometer), and Exp 35 (internal resistance of a cell by Potentiometer).',
      si: 'විෂය නිර්දේශයේ සියලුම ප්‍රායෝගික පරීක්ෂණ: පරීක්ෂණ 30 (සන්නායක/ඩයෝඩ V-I ලක්ෂණ), පරීක්ෂණ 31 (වෝල්ට්මීටර-ඇමීටර ක්‍රමයෙන් අභ්‍යන්තර ප්‍රතිරෝධය), පරීක්ෂණ 32 (මීටර් සේතුවෙන් ප්‍රතිරෝධය හා ප්‍රතිරෝධකතාව), පරීක්ෂණ 33 (මීටර් සේතුවෙන් උෂ්ණත්ව සංගුණකය), පරීක්ෂණ 34 (විභවමානයෙන් වි.ගා.බ. සැසඳීම) සහ පරීක්ෂණ 35 (විභවමානයෙන් අභ්‍යන්තර ප්‍රතිරෝධය).',
    },
    learningObjectives: [
      {
        en: 'Perform standard syllabus procedures for experiments 30 to 35 with live circuits, table data capture, and graph plotting.',
        si: 'සජීවී පරිපථ, දත්ත සටහන් කිරීම සහ ප්‍රස්තාර ඇඳීම සහිතව 30 සිට 35 දක්වා සම්මත විෂය නිර්දේශ ප්‍රායෝගික ක්‍රමවේද සිදුකිරීම.',
      },
    ],
    topicOutline: [
      { en: 'Experiment 30: V-I Characteristics of Ohmic Conductor & Diode', si: 'පරීක්ෂණය 30: ඕමීය සන්නායක හා ඩයෝඩවල V-I ලාක්ෂණික' },
      { en: 'Experiment 31: Determination of Internal Resistance & EMF (V-I method)', si: 'පරීක්ෂණය 31: අභ්‍යන්තර ප්‍රතිරෝධය සහ වි.ගා.බ. සෙවීම (V-I ක්‍රමය)' },
      { en: 'Experiment 32: Resistance & Resistivity of a Wire using Meter Bridge', si: 'පරීක්ෂණය 32: මීටර් සේතුව මඟින් කම්බියක ප්‍රතිරෝධය හා ප්‍රතිරෝධකතාව' },
      { en: 'Experiment 33: Temperature Coefficient of Resistance using Meter Bridge', si: 'පරීක්ෂණය 33: මීටර් සේතුව මඟින් ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය' },
      { en: 'Experiment 34: Comparison of EMFs of Two Cells using Potentiometer', si: 'පරීක්ෂණය 34: විභවමානය භාවිතයෙන් කෝෂ දෙකක වි.ගා.බ. සැසඳීම' },
      { en: 'Experiment 35: Determination of Internal Resistance of a Cell using Potentiometer', si: 'පරීක්ෂණය 35: විභවමානය භාවිතයෙන් කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම' },
    ],
    status: 'ready',
    hasSimulation: true,
    simulationType: 'electricity-practicals',
  },
];
