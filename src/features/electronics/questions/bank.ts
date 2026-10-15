import { ElectronicsQuestion } from './types';

export const ELECTRONICS_QUESTION_BANK: ElectronicsQuestion[] = [
  // ==========================================
  // Competency 9.1: Semiconductors & Doping (1-9)
  // ==========================================
  {
    id: 'elec-9-1-01',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the majority charge carriers in an n-type semiconductor?',
      si: 'n-වර්ගයේ අර්ධ සන්නායකයක බහුතර ආරෝපණ වාහක මොනවාද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Conduction electrons', si: 'සන්නායක ඉලෙක්ට්‍රෝන' } },
      { id: 'opt2', text: { en: 'Holes', si: 'කුහර' } },
      { id: 'opt3', text: { en: 'Positive donor ions', si: 'ධන දායක අයන' } },
      { id: 'opt4', text: { en: 'Negative acceptor ions', si: 'සෘණ ප්‍රතිග්‍රාහක අයන' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Consider the pentavalent dopant atoms contributing extra free electrons.',
      si: 'පංචසංයුජ මාත්‍රක පරමාණු මඟින් අමතර නිදහස් ඉලෙක්ට්‍රෝන ලබා දෙන ආකාරය සලකන්න.',
    },
    solution: {
      en: 'Doping silicon or germanium with pentavalent impurities (e.g., Phosphorus, Arsenic) yields extra conduction electrons, making electrons the majority carriers.',
      si: 'සිලිකන් හෝ ජර්මේනියම් පංචසංයුජ අපද්‍රව්‍ය (උදා: පොස්පරස්) සමඟ මාත්‍රණය කළ විට අමතර සන්නායක ඉලෙක්ට්‍රෝන ලැබෙන බැවින් බහුතර වාහක ඉලෙක්ට්‍රෝන වේ.',
    },
  },
  {
    id: 'elec-9-1-02',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which impurity element produces a p-type semiconductor when added to pure Silicon?',
      si: 'ශුද්ධ සිලිකන් වෙත එක් කළ විට p-වර්ගයේ අර්ධ සන්නායකයක් ලබා දෙන අපද්‍රව්‍ය මූලද්‍රව්‍යය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Boron (Trivalent)', si: 'බෝරෝන් (ත්‍රිසංයුජ)' } },
      { id: 'opt2', text: { en: 'Phosphorus (Pentavalent)', si: 'පොස්පරස් (පංචසංයුජ)' } },
      { id: 'opt3', text: { en: 'Arsenic (Pentavalent)', si: 'ආසනික් (පංචසංයුජ)' } },
      { id: 'opt4', text: { en: 'Antimony (Pentavalent)', si: 'ඇන්ටිමනි (පංචසංයුජ)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'P-type doping requires a Group 13 (trivalent) element having 3 valence electrons.',
      si: 'p-වර්ගයේ මාත්‍රණය සඳහා සංයුජතා ඉලෙක්ට්‍රෝන 3ක් ඇති 13 කාණ්ඩයේ (ත්‍රිසංයුජ) මූලද්‍රව්‍යයක් අවශ්‍ය වේ.',
    },
    solution: {
      en: 'Boron has 3 valence electrons (trivalent); it creates an electron deficiency (hole) in the covalent bond lattice, forming a p-type semiconductor.',
      si: 'බෝරෝන් සතුව සංයුජතා ඉලෙක්ට්‍රෝන 3ක් ඇත (ත්‍රිසංයුජ); එය සහසංයුජ බන්ධන දැලිසේ ඉලෙක්ට්‍රෝන ඌනතාවක් (කුහරයක්) ඇති කර p-වර්ගයේ අර්ධ සන්නායකයක් සාදයි.',
    },
  },
  {
    id: 'elec-9-1-03',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is an extrinsic semiconductor electrically neutral as a whole at room temperature?',
      si: 'කාමර උෂ්ණත්වයේදී මුළු බාහිර අර්ධ සන්නායකයම සමස්තයක් ලෙස විද්‍යුත් උදාසීන වන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'The total number of mobile positive charges and immobile negative ions equals the total electrons', si: 'චලනය වන ආරෝපණ සහ අචල අයනවල එකතුව ධන හා සෘණ ආරෝපණ සමතුලිත කරයි' } },
      { id: 'opt2', text: { en: 'The crystal contains no ions whatsoever', si: 'ස්ඵටිකය තුළ කිසිදු අයනයක් නොපවතී' } },
      { id: 'opt3', text: { en: 'Electrons and holes immediately neutralize completely', si: 'ඉලෙක්ට්‍රෝන සහ කුහර ක්ෂණිකව සම්පූර්ණයෙන්ම උදාසීන වේ' } },
      { id: 'opt4', text: { en: 'Dopant atoms have zero protons in their nuclei', si: 'මාත්‍රක පරමාණුවල න්‍යෂ්ටියේ ප්‍රෝටෝන නොමැත' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Neutral atoms are added to neutral host crystals; total protons always equal total electrons.',
      si: 'උදාසීන ස්ඵටිකයකට උදාසීන පරමාණු එක් කරයි; මුළු ප්‍රෝටෝන සංඛ්‍යාව මුළු ඉලෙක්ට්‍රෝන සංඛ්‍යාවට සමාන වේ.',
    },
    solution: {
      en: 'Every donor or acceptor atom introduced is initially electrically neutral. When ionized, the mobile carrier charge is exactly balanced by the immobile crystal lattice ion charge.',
      si: 'ඇතුළු කරන සෑම දායක හෝ ප්‍රතිග්‍රාහක පරමාණුවක්ම මුලින් උදාසීන වේ. අයනීකරණය වූ විට චල්‍ය වාහක ආරෝපණය අචල අයන ආරෝපණය මඟින් නියම ලෙස තුලනය වේ.',
    },
  },
  {
    id: 'elec-9-1-04',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'At 300 K, an intrinsic silicon crystal has an intrinsic carrier concentration n_i = 1.5e16 m^-3. If it is doped with donor atoms such that the electron concentration n_e = 4.5e21 m^-3, calculate the hole concentration n_h (in units of 10^10 m^-3) using the mass action law n_e * n_h = n_i^2.',
      si: '300 K හිදී ශුද්ධ සිලිකන් ස්ඵටිකයක සහජ වාහක ඝනත්වය n_i = 1.5e16 m^-3 වේ. ඉලෙක්ට්‍රෝන ඝනත්වය n_e = 4.5e21 m^-3 වන සේ දායක පරමාණු මඟින් මාත්‍රණය කළ විට, ස්කන්ධ ක්‍රියාකාරී නියමය n_e * n_h = n_i^2 භාවිතයෙන් කුහර ඝනත්වය n_h (10^10 m^-3 ඒකක වලින්) ගණනය කරන්න.',
    },
    expected: 5.0,
    tolerance: 0.2,
    unit: { en: '10^10 m^-3', si: '10^10 m^-3' },
    hint: {
      en: 'n_h = n_i^2 / n_e = (1.5e16)^2 / (4.5e21) = 2.25e32 / 4.5e21 = 5.0e10 m^-3.',
      si: 'n_h = n_i^2 / n_e = (1.5e16)^2 / (4.5e21) = 2.25e32 / 4.5e21 = 5.0e10 m^-3.',
    },
    solution: {
      en: 'From the mass-action law: n_h = n_i^2 / n_e = (1.5 × 10^16)^2 / (4.5 × 10^21) = 2.25 × 10^32 / (4.5 × 10^21) = 5.0 × 10^10 m^-3.',
      si: 'ස්කන්ධ ක්‍රියාකාරී නියමයෙන්: n_h = n_i^2 / n_e = (1.5 × 10^16)^2 / (4.5 × 10^21) = 5.0 × 10^10 m^-3 වේ.',
    },
  },
  {
    id: 'elec-9-1-05',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'What happens to the electrical conductivity of an intrinsic semiconductor when its temperature is increased?',
      si: 'උෂ්ණත්වය වැඩි වන විට සහජ අර්ධ සන්නායකයක විද්‍යුත් සන්නායකතාවට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It increases significantly as more covalent bonds break', si: 'වැඩි සහසංයුජ බන්ධන බිඳී යාම නිසා එය කැපී පෙනෙන ලෙස වැඩි වේ' } },
      { id: 'opt2', text: { en: 'It decreases because lattice vibrations scatter electrons', si: 'දැලිස් කම්පන හේතුවෙන් එය අඩු වේ' } },
      { id: 'opt3', text: { en: 'It remains perfectly constant', si: 'එය නියතව පවතී' } },
      { id: 'opt4', text: { en: 'It drops abruptly to zero', si: 'එය ශුන්‍යය දක්වා ක්ෂණිකව පහත වැටේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Semiconductors have a negative temperature coefficient of resistance (NTC).',
      si: 'අර්ධ සන්නායක සතුව සෘණ ප්‍රතිරෝධ උෂ්ණත්ව සංගුණකයක් (NTC) පවතී.',
    },
    solution: {
      en: 'Thermal energy excites valence electrons across the band gap Eg into the conduction band, creating electron-hole pairs and drastically increasing conductivity.',
      si: 'තාප ශක්තිය මඟින් සංයුජතා පටියේ ඉලෙක්ට්‍රෝන තහනම් කලාපය Eg තරණය කර සන්නායක පටියට යොමු කර ඉලෙක්ට්‍රෝන-කුහර යුගල බහුලව ජනනය කරයි.',
    },
  },
  {
    id: 'elec-9-1-06',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the approximate forbidden energy band gap (Eg) of Silicon at room temperature?',
      si: 'කාමර උෂ්ණත්වයේදී සිලිකන්හි තහනම් ශක්ති පරතරය (Eg) ආසන්න වශයෙන් කොපමණද?',
    },
    options: [
      { id: 'opt1', text: { en: '1.1 eV', si: '1.1 eV' } },
      { id: 'opt2', text: { en: '0.67 eV', si: '0.67 eV' } },
      { id: 'opt3', text: { en: '5.5 eV', si: '5.5 eV' } },
      { id: 'opt4', text: { en: '0.01 eV', si: '0.01 eV' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Germanium is ~0.67 eV, Silicon is ~1.1 eV, and Diamond (insulator) is ~5.5 eV.',
      si: 'ජර්මේනියම් ~0.67 eV වන අතර සිලිකන් ~1.1 eV වේ.',
    },
    solution: {
      en: 'Silicon has an energy band gap Eg ≈ 1.1 eV at room temperature (300 K), while Germanium has Eg ≈ 0.67 eV.',
      si: 'කාමර උෂ්ණත්වයේදී සිලිකන්හි තහනම් ශක්ති පරතරය Eg ≈ 1.1 eV වන අතර ජර්මේනියම්හි එය 0.67 eV වේ.',
    },
  },
  {
    id: 'elec-9-1-07',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A semiconductor has electron mobility mu_e = 0.14 m^2/(V*s) and hole mobility mu_h = 0.05 m^2/(V*s). If n_e = 1.0e22 m^-3 and n_h = 2.0e10 m^-3, calculate the electrical conductivity sigma in (Omega*m)^-1. (Take elementary charge e = 1.6e-19 C).',
      si: 'අර්ධ සන්නායකයක ඉලෙක්ට්‍රෝන සංචලතාව mu_e = 0.14 m^2/(V*s) සහ කුහර සංචලතාව mu_h = 0.05 m^2/(V*s) වේ. n_e = 1.0e22 m^-3 සහ n_h = 2.0e10 m^-3 නම්, සන්නායකතාව sigma [(Omega*m)^-1 වලින්] ගණනය කරන්න. (e = 1.6e-19 C).',
    },
    expected: 224,
    tolerance: 5,
    unit: { en: '(Ω·m)^-1', si: '(Ω·m)^-1' },
    hint: {
      en: 'sigma = e * (n_e * mu_e + n_h * mu_h). The hole term is negligible compared to the majority electron term.',
      si: 'sigma = e * (n_e * mu_e + n_h * mu_h). කුහර පදය ඉලෙක්ට්‍රෝන පදයට සාපේක්ෂව නොගිණිය හැකිය.',
    },
    solution: {
      en: 'sigma ≈ e * n_e * mu_e = 1.6e-19 * 1.0e22 * 0.14 = 224 (Ω·m)^-1.',
      si: 'sigma ≈ e * n_e * mu_e = 1.6 × 10^-19 × 1.0 × 10^22 × 0.14 = 224 (Ω·m)^-1 වේ.',
    },
  },
  {
    id: 'elec-9-1-08',
    competencyRef: 'Competency 9.1',
    category: 'semiconductors-doping',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following describes a hole in semiconductor physics?',
      si: 'අර්ධ සන්නායක භෞතික විද්‍යාවේ කුහරයක් (hole) වඩාත් හොඳින් විස්තර කරන්නේ කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'An absence of an electron in the valence band acting as an effective positive charge', si: 'සංයුජතා පටියේ ඉලෙක්ට්‍රෝනයක් නොමැති වීම නිසා ධන ආරෝපණයක් ලෙස හැසිරෙන ස්ථානයක්' } },
      { id: 'opt2', text: { en: 'A physical void or bubble in the crystal lattice', si: 'ස්ඵටික දැලිසේ පවතින හිස් සිදුරක් හෝ බුබුලක්' } },
      { id: 'opt3', text: { en: 'A free proton that escaped the nucleus', si: 'න්‍යෂ්ටියෙන් මිදුණු නිදහස් ප්‍රෝටෝනයක්' } },
      { id: 'opt4', text: { en: 'A stationary negative ion', si: 'නිශ්චල සෘණ අයනයක්' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'When a valence electron jumps to a neighboring bond, the vacant site moves in the opposite direction.',
      si: 'සංයුජතා ඉලෙක්ට්‍රෝනයක් අසල්වැසි බන්ධනයකට පනින විට පුරප්පාඩුව ප්‍රතිවිරුද්ධ දිශාවට ගමන් කරයි.',
    },
    solution: {
      en: 'A hole represents an unoccupied electronic state in the valence band that behaves like a particle with positive elementary charge +e and positive effective mass.',
      si: 'කුහරයක් යනු සංයුජතා පටියේ හිස් වූ ඉලෙක්ට්‍රෝන අවස්ථාවක් වන අතර එය +e ආරෝපණයක් සහිත අංශුවක් සේ හැසිරේ.',
    },
  },

  // ==========================================
  // Competency 9.2: p-n Junction Diodes & Zener Diodes (9-17)
  // ==========================================
  {
    id: 'elec-9-2-01',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What causes the formation of the depletion region in an unbiased p-n junction?',
      si: 'අභිසරණය නොකළ p-n සන්ධියක ක්ෂය කලාපය සෑදීමට හේතුව කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Diffusion of majority carriers across the junction and recombination leaving unneutralized ions', si: 'බහුතර වාහක සන්ධිය හරහා විසරණය වී ප්‍රතිසංයෝජනය වීමෙන් පසු අචල අයන ඉතිරි වීම' } },
      { id: 'opt2', text: { en: 'Gravitational settling of free electrons', si: 'නිදහස් ඉලෙක්ට්‍රෝන ගුරුත්වය නිසා තැන්පත් වීම' } },
      { id: 'opt3', text: { en: 'External leakage currents', si: 'බාහිර කාන්දු ධාරා' } },
      { id: 'opt4', text: { en: 'Magnetic interaction between dopant atoms', si: 'මාත්‍රක පරමාණු අතර චුම්භක අන්තර්ක්‍රියා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Electrons diffuse from n-side to p-side, leaving positive donor ions behind.',
      si: 'ඉලෙක්ට්‍රෝන n-පැත්තේ සිට p-පැත්තට විසරණය වී ධන දායක අයන ඉතිරි කරයි.',
    },
    solution: {
      en: 'Concentration gradients cause electrons from the n-region to diffuse into the p-region and recombine with holes, exposing immobile positive donor ions on the n-side and negative acceptor ions on the p-side.',
      si: 'සාන්ද්‍රණ අනුක්‍රමණය හේතුවෙන් ඉලෙක්ට්‍රෝන n-ප්‍රදේශයේ සිට p-ප්‍රදේශයට විසරණය වී කුහර සමඟ එක්වේ; එවිට n-පැත්තේ අචල ධන දායක අයනද p-පැත්තේ සෘණ ප්‍රතිග්‍රාහක අයනද නිරාවරණය වේ.',
    },
  },
  {
    id: 'elec-9-2-02',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the typical barrier potentials (knee voltages) of Silicon and Germanium p-n junctions at 25 °C?',
      si: '25 °C දී සිලිකන් සහ ජර්මේනියම් p-n සන්ධිවල සාමාන්‍ය විභව බාධක අගයන් (දණහිස් වෝල්ටීයතා) මොනවාද?',
    },
    options: [
      { id: 'opt1', text: { en: '0.7 V for Si, 0.3 V for Ge', si: 'Si සඳහා 0.7 V, Ge සඳහා 0.3 V' } },
      { id: 'opt2', text: { en: '0.3 V for Si, 0.7 V for Ge', si: 'Si සඳහා 0.3 V, Ge සඳහා 0.7 V' } },
      { id: 'opt3', text: { en: '1.5 V for Si, 1.1 V for Ge', si: 'Si සඳහා 1.5 V, Ge සඳහා 1.1 V' } },
      { id: 'opt4', text: { en: '0.1 V for Si, 0.05 V for Ge', si: 'Si සඳහා 0.1 V, Ge සඳහා 0.05 V' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Silicon requires approximately 0.7 V forward bias to overcome the barrier potential.',
      si: 'සිලිකන් සන්ධියේ බාධකය බිඳ දැමීමට ආසන්න වශයෙන් 0.7 V පෙර නැඹුරු වෝල්ටීයතාවක් අවශ්‍ය වේ.',
    },
    solution: {
      en: 'Silicon has a barrier potential of roughly 0.6–0.7 V, whereas Germanium has a lower barrier potential of ~0.3 V due to its smaller band gap.',
      si: 'කුඩා ශක්ති පරතරය නිසා ජර්මේනියම් සඳහා විභව බාධකය ~0.3 V වන අතර සිලිකන් සඳහා එය ~0.7 V වේ.',
    },
  },
  {
    id: 'elec-9-2-03',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A forward-biased silicon diode experiences a voltage increase from 0.70 V to 0.74 V, causing its forward current to rise from 10 mA to 30 mA. Calculate its dynamic resistance r_d in Ohms (Ω).',
      si: 'පෙර නැඹුරු සිලිකන් ඩයෝඩයක වෝල්ටීයතාව 0.70 V සිට 0.74 V දක්වා වැඩි වන විට, එහි පෙර ධාරාව 10 mA සිට 30 mA දක්වා වැඩි වේ. එහි ගතික ප්‍රතිරෝධය r_d ඕම් (Ω) වලින් ගණනය කරන්න.',
    },
    expected: 2.0,
    tolerance: 0.1,
    unit: { en: 'Ω', si: 'Ω' },
    hint: {
      en: 'r_d = Delta V / Delta I = (0.74 - 0.70) V / (30 - 10) mA.',
      si: 'r_d = Delta V / Delta I = (0.74 - 0.70) V / (30 - 10) mA.',
    },
    solution: {
      en: 'r_d = Delta V / Delta I = 0.04 V / 0.020 A = 2.0 Ω.',
      si: 'r_d = 0.04 V / 0.020 A = 2.0 Ω වේ.',
    },
  },
  {
    id: 'elec-9-2-04',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What primary physical mechanism is responsible for reverse breakdown in heavily doped Zener diodes operating below 5 V?',
      si: '5 V ට වඩා අඩු වෝල්ටීයතාවලදී ක්‍රියාත්මක වන තදින් මාත්‍රණය කළ සෙනර් ඩයෝඩවල පසුපස බිඳවැටීමට ප්‍රධාන වශයෙන් වගකිව යුතු යාන්ත්‍රණය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Quantum mechanical tunneling (Zener breakdown)', si: 'ක්වොන්ටම් යාන්ත්‍රික උමංකරණය (සෙනර් බිඳවැටීම)' } },
      { id: 'opt2', text: { en: 'Impact ionization by accelerated carriers (Avalanche breakdown)', si: 'ත්වරණය වූ වාහක මඟින් සිදුවන ඝට්ටන අයනීකරණය (ඇවලාන්ෂ් බිඳවැටීම)' } },
      { id: 'opt3', text: { en: 'Thermionic electron emission', si: 'තාපජ ඉලෙක්ට්‍රෝන විමෝචනය' } },
      { id: 'opt4', text: { en: 'Electrochemical melting of the junction', si: 'සන්ධිය විද්‍යුත් රසායනිකව දියවීම' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Heavy doping produces a very thin depletion layer where intense electric fields enable direct tunneling of electrons.',
      si: 'තදින් මාත්‍රණය කිරීමෙන් ඉතා සිහින් ක්ෂය කලාපයක් සහ අධික විද්‍යුත් ක්ෂේත්‍රයක් නිර්මාණය වී සෘජු උමංකරණය සිදුවේ.',
    },
    solution: {
      en: 'In heavily doped p-n junctions, the depletion layer width is < 10 nm, creating an electric field > 10^7 V/m that pulls electrons directly from the valence to conduction band via quantum tunneling (Zener effect).',
      si: 'තදින් මාත්‍රණය කළ සන්ධිවල ක්ෂය කලාපය ඉතා සිහින් බැවින් අධික විද්‍යුත් ක්ෂේත්‍රය යටතේ ඉලෙක්ට්‍රෝන සෘජුවම ක්වොන්ටම් උමංකරණය හරහා සන්නායක පටියට යයි.',
    },
  },
  {
    id: 'elec-9-2-05',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A 6.8 V Zener diode is used in a voltage regulator circuit supplied by a 12.0 V DC unregulated source through a series resistor R_s = 200 Ω. If a load resistor draws I_L = 16 mA, calculate the current passing through the Zener diode I_Z in mA.',
      si: '12.0 V අක්‍රමවත් DC ප්‍රභවයකින් ශ්‍රේණිගත ප්‍රතිරෝධකයක් R_s = 200 Ω හරහා 6.8 V සෙනර් ඩයෝඩයක් වෝල්ටීයතා නියාමකයක් ලෙස සවි කර ඇත. භාර ප්‍රතිරෝධකය 16 mA ධාරාවක් ගන්නේ නම්, සෙනර් ඩයෝඩය හරහා ගලන ධාරාව I_Z (mA වලින්) ගණනය කරන්න.',
    },
    expected: 10.0,
    tolerance: 0.5,
    unit: { en: 'mA', si: 'mA' },
    hint: {
      en: 'Total source current I_s = (V_in - V_Z) / R_s = (12.0 - 6.8) / 200. Then I_Z = I_s - I_L.',
      si: 'සමස්ත ධාරාව I_s = (V_in - V_Z) / R_s = (12.0 - 6.8) / 200. අනතුරුව I_Z = I_s - I_L.',
    },
    solution: {
      en: 'I_s = (12.0 V - 6.8 V) / 200 Ω = 5.2 V / 200 Ω = 0.026 A = 26 mA. Therefore, I_Z = I_s - I_L = 26 mA - 16 mA = 10.0 mA.',
      si: 'I_s = (12.0 V - 6.8 V) / 200 Ω = 5.2 / 200 = 26 mA. එබැවින් I_Z = 26 mA - 16 mA = 10.0 mA වේ.',
    },
  },
  {
    id: 'elec-9-2-06',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is a light-emitting diode (LED) manufactured using direct bandgap semiconductors such as Gallium Arsenide (GaAs) rather than Silicon?',
      si: 'සිලිකන් වෙනුවට ගැලියම් ආසනයිඩ් (GaAs) වැනි සෘජු ශක්ති පරතර සහිත අර්ධ සන්නායක ආලෝක විමෝචක ඩයෝඩ (LED) සඳහා යොදා ගන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'Electron-hole recombination emits photons directly with high efficiency', si: 'ඉලෙක්ට්‍රෝන-කුහර ප්‍රතිසංයෝජනයෙන් ෆෝටෝන (ආලෝකය) සෘජුව හා ඉහළ කාර්යක්ෂමතාවයකින් නිකුත් වීම' } },
      { id: 'opt2', text: { en: 'Silicon is an electrical insulator', si: 'සිලිකන් යනු විද්‍යුත් පරිවාරකයක් වන නිසා' } },
      { id: 'opt3', text: { en: 'GaAs has infinite dynamic resistance', si: 'GaAs සතුව අනන්ත ගතික ප්‍රතිරෝධයක් ඇති නිසා' } },
      { id: 'opt4', text: { en: 'Silicon melts under forward bias', si: 'පෙර නැඹුරුවේදී සිලිකන් දියවන නිසා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Indirect bandgap semiconductors like Silicon release recombination energy predominantly as phonons (heat).',
      si: 'සිලිකන් වැනි වක්‍ර ශක්ති පරතර සහිත ද්‍රව්‍යවල ශක්තිය වැඩි වශයෙන් තාපය ලෙස පිටවේ.',
    },
    solution: {
      en: 'In direct bandgap semiconductors like GaAs and GaN, electrons drop from the conduction to valence band conserving crystal momentum, radiating energy directly as visible or infrared photons.',
      si: 'GaAs වැනි සෘජු ශක්ති පරතර ද්‍රව්‍යවල ඉලෙක්ට්‍රෝන පහත වැටීමේදී ගම්‍යතාව වෙනස් නොවී ශක්තිය සෘජුවම ආලෝක ෆෝටෝන ලෙස විමෝචනය වේ.',
    },
  },
  {
    id: 'elec-9-2-07',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'When a p-n junction is reverse biased, what happens to the width of the depletion layer?',
      si: 'p-n සන්ධියක් පසු නැඹුරු කළ විට, ක්ෂය කලාපයේ පළලට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It widens', si: 'එය පළල් වේ' } },
      { id: 'opt2', text: { en: 'It narrows to zero', si: 'එය ශුන්‍යය දක්වා සිහින් වේ' } },
      { id: 'opt3', text: { en: 'It remains unaffected', si: 'එය නොවෙනස්ව පවතී' } },
      { id: 'opt4', text: { en: 'It oscillates continuously', si: 'එය අඛණ්ඩව දෝලනය වේ' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'The external reverse voltage attracts majority carriers away from the junction.',
      si: 'බාහිර පසුපස වෝල්ටීයතාව මඟින් බහුතර වාහක සන්ධියෙන් ඉවතට ඇද ගනී.',
    },
    solution: {
      en: 'Reverse bias pulls holes in the p-region and electrons in the n-region away from the junction, exposing additional immobile ions and widening the depletion layer.',
      si: 'පසු නැඹුරුව මඟින් බහුතර වාහක සන්ධියෙන් ඉවතට ඇද ගන්නා බැවින් තවත් අචල අයන නිරාවරණය වී ක්ෂය කලාපය පළල් වේ.',
    },
  },
  {
    id: 'elec-9-2-08',
    competencyRef: 'Competency 9.1',
    category: 'pn-junction-diodes',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In a forward-biased silicon diode circuit with source voltage V_in = 5.0 V and series resistor R = 430 Ω, assuming diode forward drop is fixed at 0.70 V, find the forward current in mA.',
      si: '5.0 V ප්‍රභවයක් සහ 430 Ω ශ්‍රේණිගත ප්‍රතිරෝධකයක් සහිත පරිපථයක සිලිකන් ඩයෝඩයක් පෙර නැඹුරු කර ඇත. ඩයෝඩයේ වෝල්ටීයතා බැස්ම 0.70 V නම්, පරිපථයේ පෙර ධාරාව mA වලින් සොයන්න.',
    },
    expected: 10.0,
    tolerance: 0.2,
    unit: { en: 'mA', si: 'mA' },
    hint: {
      en: 'I = (V_in - V_D) / R = (5.0 - 0.70) / 430.',
      si: 'I = (V_in - V_D) / R = (5.0 - 0.70) / 430.',
    },
    solution: {
      en: 'I = (5.0 V - 0.70 V) / 430 Ω = 4.30 V / 430 Ω = 0.010 A = 10.0 mA.',
      si: 'I = (5.0 V - 0.70 V) / 430 Ω = 4.30 V / 430 Ω = 10.0 mA වේ.',
    },
  },

  // ==========================================
  // Competency 9.3: Rectification & Power Supplies (18-26)
  // ==========================================
  {
    id: 'elec-9-3-01',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the ripple frequency of the output from a full-wave bridge rectifier supplied by 50 Hz AC mains?',
      si: '50 Hz AC ප්‍රධාන සැපයුමකින් ක්‍රියාත්මක වන පූර්ණ තරංග පාලම් ධාරා නිවැරදි කරකයක ප්‍රතිදාන රැළිති සංඛ්‍යාතය (ripple frequency) කොපමණද?',
    },
    options: [
      { id: 'opt1', text: { en: '100 Hz', si: '100 Hz' } },
      { id: 'opt2', text: { en: '50 Hz', si: '50 Hz' } },
      { id: 'opt3', text: { en: '25 Hz', si: '25 Hz' } },
      { id: 'opt4', text: { en: '200 Hz', si: '200 Hz' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'A full-wave rectifier conducts during both half-cycles, doubling the pulse frequency: f_out = 2 * f_in.',
      si: 'පූර්ණ තරංග නිවැරදි කරකය අර්ධ චක්‍ර දෙකේදීම සන්නයනය කරයි: f_out = 2 * f_in.',
    },
    solution: {
      en: 'In full-wave rectification, both positive and negative input half-cycles are inverted to positive output pulses, so f_out = 2 × 50 Hz = 100 Hz.',
      si: 'පූර්ණ තරංග නිවැරදි කරණයේදී ධන හා සෘණ අර්ධ චක්‍ර දෙකම ධන ස්පන්ද බවට පත්වන බැවින් f_out = 2 × 50 Hz = 100 Hz වේ.',
    },
  },
  {
    id: 'elec-9-3-02',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A transformer delivers an RMS secondary voltage of 12 V to a full-wave bridge rectifier using silicon diodes (each having 0.7 V drop). Calculate the peak DC voltage V_peak across the load in Volts. (Take sqrt(2) = 1.414).',
      si: 'ට්‍රාන්ස්ෆෝමරයක ද්විතියිකයෙන් 12 V RMS වෝල්ටීයතාවක් සිලිකන් ඩයෝඩ (එක් ඩයෝඩයක බැස්ම 0.7 V) සහිත පූර්ණ තරංග පාලම් නිවැරදි කරකයකට සපයයි. භාරය හරහා උපරිම DC වෝල්ටීයතාව V_peak වෝල්ට් (V) වලින් ගණනය කරන්න. (sqrt(2) = 1.414).',
    },
    expected: 15.57,
    tolerance: 0.2,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Secondary peak V_s,pk = 12 * 1.414 = 16.97 V. In a bridge rectifier, current flows through two conducting diodes simultaneously: V_out,pk = V_s,pk - 2 * 0.7.',
      si: 'ද්විතියික උපරිමය V_s,pk = 12 * 1.414 = 16.97 V. පාලම් නිවැරදි කරකයක ඩයෝඩ දෙකක් එකවර සන්නයනය වේ: V_out,pk = V_s,pk - 2 * 0.7.',
    },
    solution: {
      en: 'Secondary peak voltage = 12 × 1.414 = 16.97 V. Bridge rectifier load peak = 16.97 V - 2(0.7 V) = 16.97 - 1.40 = 15.57 V.',
      si: 'ද්විතියික උපරිම වෝල්ටීයතාව = 12 × 1.414 = 16.97 V. පාලම් නිවැරදි කරකයේ උපරිමය = 16.97 V - 2(0.7 V) = 15.57 V වේ.',
    },
  },
  {
    id: 'elec-9-3-03',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A full-wave rectifier circuit with a smoothing capacitor C = 1000 µF supplies a DC load current I_L = 100 mA at 100 Hz ripple frequency. Estimate the peak-to-peak ripple voltage V_r in Volts using V_r = I_L / (f * C).',
      si: '100 Hz රැළිති සංඛ්‍යාතයකින් ක්‍රියාත්මක වන සුමටන ධාරිත්‍රකයක් C = 1000 µF සහිත පූර්ණ තරංග නිවැරදි කරක පරිපථයක් 100 mA භාර ධාරාවක් සපයයි. V_r = I_L / (f * C) සූත්‍රය භාවිතයෙන් අග්‍රස්ථ-අග්‍රස්ථ රැළිති වෝල්ටීයතාව V_r වෝල්ට් වලින් සොයන්න.',
    },
    expected: 1.0,
    tolerance: 0.05,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_r = I_L / (f * C) = 0.100 A / (100 Hz * 1000e-6 F).',
      si: 'V_r = I_L / (f * C) = 0.100 A / (100 Hz * 1000e-6 F).',
    },
    solution: {
      en: 'V_r = 0.100 A / (100 × 10^-3 F) = 1.0 V.',
      si: 'V_r = 0.100 A / (100 × 10^-3 F) = 1.0 V වේ.',
    },
  },
  {
    id: 'elec-9-3-04',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How does connecting a large reservoir capacitor across the output of a rectifier affect the DC output?',
      si: 'නිවැරදි කරකයක ප්‍රතිදානයට සමාන්තරව විශාල ධාරිත්‍රකයක් (සුමටන ධාරිත්‍රකය) සම්බන්ධ කළ විට DC ප්‍රතිදානයට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'It reduces voltage ripple and increases the average DC voltage towards the peak', si: 'රැළිති වෝල්ටීයතාව අඩු කර සාමාන්‍ය DC අගය උපරිම අගය දෙසට වැඩි කරයි' } },
      { id: 'opt2', text: { en: 'It inverts the polarity of the DC output', si: 'DC ප්‍රතිදානයේ ධ්‍රැවීයතාව ප්‍රතිවිරුද්ධ කරයි' } },
      { id: 'opt3', text: { en: 'It doubles the ripple voltage', si: 'රැළිති වෝල්ටීයතාව දෙගුණ කරයි' } },
      { id: 'opt4', text: { en: 'It converts the output back into pure AC', si: 'ප්‍රතිදානය නැවත පිරිසිදු AC බවට පත් කරයි' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'The capacitor charges to peak voltage and discharges slowly through the load during diode non-conduction.',
      si: 'ඩයෝඩ සන්නයනය නොවන විට ධාරිත්‍රකය භාරය හරහා සෙමින් විසර්ජනය වෙමින් වෝල්ටීයතාව පවත්වා ගනී.',
    },
    solution: {
      en: 'A smoothing capacitor acts as a low-pass filter; it charges during peaks and discharges between pulses, drastically smoothing the waveform and boosting average DC voltage.',
      si: 'සුමටන ධාරිත්‍රකය ස්පන්ද අතරතුර විසර්ජනය වෙමින් රැළිති අඩු කර සාමාන්‍ය DC වෝල්ටීයතාව උපරිමයට ආසන්න මට්ටමකට ඔසවා තබයි.',
    },
  },
  {
    id: 'elec-9-3-05',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In a bridge rectifier, what is the peak inverse voltage (PIV) rating required for each diode when secondary peak voltage is Vm?',
      si: 'පාලම් නිවැරදි කරකයක ද්විතියික උපරිම වෝල්ටීයතාව Vm වන විට, එක් එක් ඩයෝඩය සඳහා අවශ්‍ය අවම උපරිම ප්‍රතිලෝම වෝල්ටීයතාවය (PIV) කොපමණද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Vm', si: 'Vm' } },
      { id: 'opt2', text: { en: '2 Vm', si: '2 Vm' } },
      { id: 'opt3', text: { en: '0.5 Vm', si: '0.5 Vm' } },
      { id: 'opt4', text: { en: '4 Vm', si: '4 Vm' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Unlike a center-tapped full-wave rectifier which requires 2 Vm, the bridge rectifier requires only Vm per diode.',
      si: 'මැද-තට්ටු සහිත පරිපථයට 2 Vm අවශ්‍ය වුවද, පාලම් පරිපථයේදී එක් ඩයෝඩයකට අවශ්‍ය වන්නේ Vm පමණි.',
    },
    solution: {
      en: 'In a bridge configuration, two reverse-biased diodes share the voltage path during each half cycle, keeping the maximum reverse stress across each diode at Vm (or Vm - 0.7 V).',
      si: 'පාලම් වින්‍යාසයේදී එක් එක් ඩයෝඩය හරහා යෙදෙන උපරිම පසුපස වෝල්ටීයතාව Vm වේ.',
    },
  },
  {
    id: 'elec-9-3-06',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A half-wave rectifier is driven by a 230 V, 50 Hz supply stepped down by a 10:1 transformer. Neglecting diode drop, what is the DC average output voltage V_dc in Volts? (V_dc = V_m / pi, where V_m = V_rms * sqrt(2)). (Take sqrt(2) = 1.414, pi = 3.1416).',
      si: '230 V, 50 Hz සැපයුමක් 10:1 ට්‍රාන්ස්ෆෝමරයකින් අඩු කර අර්ධ තරංග නිවැරදි කරකයකට සපයයි. ඩයෝඩ බැස්ම නොසලකා, DC සාමාන්‍ය වෝල්ටීයතාව V_dc වෝල්ට් වලින් ගණනය කරන්න. (V_dc = V_m / pi, V_m = V_rms * sqrt(2)).',
    },
    expected: 10.35,
    tolerance: 0.2,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_rms,sec = 230 / 10 = 23 V. V_m = 23 * 1.4142 = 32.53 V. V_dc = 32.53 / 3.1416.',
      si: 'V_rms = 230 / 10 = 23 V. V_m = 23 * 1.4142 = 32.53 V. V_dc = 32.53 / 3.1416.',
    },
    solution: {
      en: 'V_rms = 23 V. V_m = 23 × 1.4142 = 32.53 V. V_dc = 32.53 / π = 10.35 V.',
      si: 'V_rms = 23 V. V_m = 23 × 1.4142 = 32.53 V. V_dc = 32.53 / π = 10.35 V වේ.',
    },
  },
  {
    id: 'elec-9-3-07',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How many diodes are required to construct a full-wave bridge rectifier?',
      si: 'පූර්ණ තරංග පාලම් ධාරා නිවැරදි කරකයක් නිර්මාණය කිරීමට ඩයෝඩ කීයක් අවශ්‍යද?',
    },
    options: [
      { id: 'opt1', text: { en: '4 diodes', si: 'ඩයෝඩ 4 ක්' } },
      { id: 'opt2', text: { en: '2 diodes', si: 'ඩයෝඩ 2 ක්' } },
      { id: 'opt3', text: { en: '1 diode', si: 'ඩයෝඩ 1 ක්' } },
      { id: 'opt4', text: { en: '3 diodes', si: 'ඩයෝඩ 3 ක්' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'The standard Graetz bridge topology uses four diodes arranged in a ring.',
      si: 'සම්මත පාලම් වින්‍යාසය සඳහා ඩයෝඩ හතරක් අවශ්‍ය වේ.',
    },
    solution: {
      en: 'A bridge rectifier requires four diodes connected in a closed bridge loop to steer both polarities of AC current through the load in the same direction.',
      si: 'AC ධාරාවේ දෙපසම එකම දිශාවකට භාරය හරහා මෙහෙයවීමට පාලම් වින්‍යාසයක ඩයෝඩ 4 ක් අවශ්‍ය වේ.',
    },
  },
  {
    id: 'elec-9-3-08',
    competencyRef: 'Competency 9.1',
    category: 'rectification-power-supplies',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'If one diode in a 4-diode full-wave bridge rectifier burns out into an open circuit, what will be observed at the load?',
      si: 'ඩයෝඩ 4 කින් යුත් පූර්ණ තරංග පාලම් නිවැරදි කරකයක එක් ඩයෝඩයක් විවෘත පරිපථයක් ලෙස දැවී ගියහොත්, භාරය හරහා කුමක් නිරීක්ෂණය වේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'The circuit operates as a half-wave rectifier with halved output frequency', si: 'පරිපථය අර්ධ තරංග නිවැරදි කරකයක් ලෙස ක්‍රියා කර ප්‍රතිදාන සංඛ්‍යාතය අඩක් බවට පත්වේ' } },
      { id: 'opt2', text: { en: 'The output voltage instantly doubles', si: 'ප්‍රතිදාන වෝල්ටීයතාව ක්ෂණිකව දෙගුණ වේ' } },
      { id: 'opt3', text: { en: 'The load experiences pure AC sinusoidal current', si: 'භාරයට පිරිසිදු AC සයිනාකාර ධාරාවක් ලැබේ' } },
      { id: 'opt4', text: { en: 'The transformer primary fuse burns out immediately', si: 'ට්‍රාන්ස්ෆෝමරයේ ප්‍රාථමික ෆියුස් එක ක්ෂණිකව පිපිරී යයි' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'One half of the AC cycle can no longer complete its path through the burned diode.',
      si: 'දැවී ගිය ඩයෝඩය නිසා එක් අර්ධ චක්‍රයකට පරිපථය සම්පූර්ණ කළ නොහැක.',
    },
    solution: {
      en: 'With one diode open, conduction only occurs during the alternate half-cycle where the intact pair conducts. The circuit degenerates into a half-wave rectifier, doubling the ripple and dropping ripple frequency back to 50 Hz.',
      si: 'එක් ඩයෝඩයක් විවෘත වූ විට සන්නයනය සිදුවන්නේ එක් අර්ධ චක්‍රයකදී පමණි; එම නිසා පරිපථය අර්ධ තරංග නිවැරදි කරකයක් බවට පත්වී රැළිති සංඛ්‍යාතය 50 Hz දක්වා අඩුවේ.',
    },
  },

  // ==========================================
  // Competency 9.4: Bipolar Junction Transistors (BJT) (27-35)
  // ==========================================
  {
    id: 'elec-9-4-01',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the normal bias conditions for an npn BJT to operate in its active linear amplification region?',
      si: 'npn ට්‍රාන්සිස්ටරයක් සක්‍රිය (active) රේඛීය වර්ධන කලාපයේ ක්‍රියා කිරීමට අවශ්‍ය සාමාන්‍ය නැඹුරු කොන්දේසි මොනවාද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Base-Emitter junction forward-biased, Base-Collector junction reverse-biased', si: 'පාදම-විමෝචක සන්ධිය පෙර නැඹුරු, පාදම-සංග්‍රාහක සන්ධිය පසු නැඹුරු' } },
      { id: 'opt2', text: { en: 'Both junctions forward-biased', si: 'සන්ධි දෙකම පෙර නැඹුරු' } },
      { id: 'opt3', text: { en: 'Both junctions reverse-biased', si: 'සන්ධි දෙකම පසු නැඹුරු' } },
      { id: 'opt4', text: { en: 'Base-Emitter reverse-biased, Base-Collector forward-biased', si: 'පාදම-විමෝචක සන්ධිය පසු නැඹුරු, පාදම-සංග්‍රාහක සන්ධිය පෙර නැඹුරු' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Emitter injects carriers into the base (forward), and collector gathers them across a reverse field.',
      si: 'විමෝචකය වාහක පාදමට එන්නත් කරයි (පෙර නැඹුරු), සංග්‍රාහකය ඒවා එකතු කරයි (පසු නැඹුරු).',
    },
    solution: {
      en: 'For linear active amplification, the emitter-base junction must be forward biased (~0.7 V) to inject minority carriers into the thin base, while the collector-base junction is reverse biased to sweep them into the collector.',
      si: 'ක්‍රියාකාරී කලාපයේදී විමෝචක-පාදම සන්ධිය පෙර නැඹුරු විය යුතු අතර (~0.7 V) සංග්‍රාහක-පාදම සන්ධිය පසු නැඹුරු විය යුතුය.',
    },
  },
  {
    id: 'elec-9-4-02',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In an npn transistor circuit operating in the active region, the collector current I_C = 4.95 mA and the base current I_B = 50 µA. Calculate the DC common-emitter current gain beta (h_FE).',
      si: 'සක්‍රිය කලාපයේ ක්‍රියාත්මක වන npn ට්‍රාන්සිස්ටරයක සංග්‍රාහක ධාරාව I_C = 4.95 mA සහ පාදම ධාරාව I_B = 50 µA වේ. DC පොදු විමෝචක ධාරා ලාභය beta (h_FE) ගණනය කරන්න.',
    },
    expected: 99.0,
    tolerance: 0.5,
    unit: { en: '', si: '' },
    hint: {
      en: 'beta = I_C / I_B. Remember to express both currents in the same unit (e.g. mA: 50 µA = 0.050 mA).',
      si: 'beta = I_C / I_B. ධාරා දෙකම එකම ඒකකයෙන් තබා ගන්න (50 µA = 0.050 mA).',
    },
    solution: {
      en: 'beta = I_C / I_B = 4.95 mA / 0.050 mA = 99.0.',
      si: 'beta = I_C / I_B = 4.95 mA / 0.050 mA = 99.0 වේ.',
    },
  },
  {
    id: 'elec-9-4-03',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A Common Emitter (CE) amplifier has a collector load resistor R_C = 2.0 kΩ and an effective input resistance R_in = 1.0 kΩ. If the transistor current gain beta = 100, calculate the magnitude of the voltage gain |A_v|.',
      si: 'පොදු විමෝචක (CE) වර්ධකයක සංග්‍රාහක භාර ප්‍රතිරෝධකය R_C = 2.0 kΩ සහ ඵලදායී ආදාන ප්‍රතිරෝධය R_in = 1.0 kΩ වේ. ට්‍රාන්සිස්ටරයේ ධාරා ලාභය beta = 100 නම්, වෝල්ටීයතා ලාභයේ විශාලත්වය |A_v| ගණනය කරන්න.',
    },
    expected: 200,
    tolerance: 5,
    unit: { en: '', si: '' },
    hint: {
      en: '|A_v| = beta * (R_C / R_in) = 100 * (2000 / 1000).',
      si: '|A_v| = beta * (R_C / R_in) = 100 * (2000 / 1000).',
    },
    solution: {
      en: '|A_v| = beta × (R_C / R_in) = 100 × (2.0 kΩ / 1.0 kΩ) = 200.',
      si: '|A_v| = beta × (R_C / R_in) = 100 × (2.0 / 1.0) = 200 වේ.',
    },
  },
  {
    id: 'elec-9-4-04',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the phase relationship between the input signal and output signal in a Common Emitter (CE) transistor voltage amplifier?',
      si: 'පොදු විමෝචක (CE) ට්‍රාන්සිස්ටර වෝල්ටීයතා වර්ධකයක ආදාන සංඥාව සහ ප්‍රතිදාන සංඥාව අතර කලා සම්බන්ධතාව කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: '180° out of phase (phase inversion)', si: '180° කලා විපර්යාසයක් පවතී (ප්‍රතිවිරුද්ධ කලාව)' } },
      { id: 'opt2', text: { en: 'Exactly in phase (0°)', si: 'නියම ලෙස එකම කලාවේ පවතී (0°)' } },
      { id: 'opt3', text: { en: '90° phase lead', si: '90° කලා පෙරමුණක්' } },
      { id: 'opt4', text: { en: '45° phase lag', si: '45° කලා පසුගාමීත්වයක්' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'As base voltage increases, collector current increases, causing collector voltage V_C = V_CC - I_C*R_C to drop.',
      si: 'පාදම වෝල්ටීයතාව වැඩි වන විට සංග්‍රාහක ධාරාව වැඩි වී V_C = V_CC - I_C*R_C වෝල්ටීයතාව පහත වැටේ.',
    },
    solution: {
      en: 'An increase in input v_in increases base current and collector current, dropping output voltage v_out = V_CC - i_C R_C, resulting in a 180° phase inversion.',
      si: 'ආදානය ධන වන විට සංග්‍රාහක ධාරාව වැඩි වී ප්‍රතිදාන වෝල්ටීයතාව අඩු වන බැවින් 180° කලා විපර්යාසයක් ලැබේ.',
    },
  },
  {
    id: 'elec-9-4-05',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'In a transistor circuit, V_CC = 12.0 V, R_C = 1.5 kΩ, and the base is driven heavily into saturation such that V_CE,sat = 0.2 V. What is the saturation collector current I_C,sat in mA?',
      si: 'ට්‍රාන්සිස්ටර පරිපථයක V_CC = 12.0 V, R_C = 1.5 kΩ වන අතර ට්‍රාන්සිස්ටරය සන්තෘප්ත කලාපයේ ක්‍රියාත්මක වන විට V_CE,sat = 0.2 V වේ. සන්තෘප්ත සංග්‍රාහක ධාරාව I_C,sat (mA වලින්) කොපමණද?',
    },
    expected: 7.87,
    tolerance: 0.1,
    unit: { en: 'mA', si: 'mA' },
    hint: {
      en: 'I_C,sat = (V_CC - V_CE,sat) / R_C = (12.0 - 0.2) / 1.5.',
      si: 'I_C,sat = (V_CC - V_CE,sat) / R_C = (12.0 - 0.2) / 1.5.',
    },
    solution: {
      en: 'I_C,sat = (12.0 V - 0.2 V) / 1.5 kΩ = 11.8 V / 1500 Ω = 7.867 mA ≈ 7.87 mA.',
      si: 'I_C,sat = (12.0 V - 0.2 V) / 1.5 kΩ = 11.8 V / 1500 Ω = 7.87 mA වේ.',
    },
  },
  {
    id: 'elec-9-4-06',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which formula correctly relates the alpha (common base gain) and beta (common emitter gain) of a transistor?',
      si: 'ට්‍රාන්සිස්ටරයක alpha (පොදු පාදම ලාභය) සහ beta (පොදු විමෝචක ලාභය) අතර නිවැරදි සම්බන්ධතාව කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'alpha = beta / (beta + 1)', si: 'alpha = beta / (beta + 1)' } },
      { id: 'opt2', text: { en: 'alpha = (beta + 1) / beta', si: 'alpha = (beta + 1) / beta' } },
      { id: 'opt3', text: { en: 'alpha = beta^2', si: 'alpha = beta^2' } },
      { id: 'opt4', text: { en: 'beta = alpha / (1 + alpha)', si: 'beta = alpha / (1 + alpha)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Since I_E = I_B + I_C, divide both sides by I_C: 1/alpha = 1/beta + 1 = (beta + 1) / beta.',
      si: 'I_E = I_B + I_C බැවින්, I_C වලින් බෙදූ විට 1/alpha = 1/beta + 1 ලැබේ.',
    },
    solution: {
      en: 'alpha = I_C / I_E = I_C / (I_B + I_C) = (I_C / I_B) / (1 + I_C / I_B) = beta / (beta + 1). Since beta is typically 50–300, alpha is slightly less than 1 (0.98–0.997).',
      si: 'alpha = I_C / I_E = beta / (beta + 1) වන අතර එහි අගය සෑම විටම 1 ට මඳක් අඩු අගයක් (0.98–0.99) ගනී.',
    },
  },
  {
    id: 'elec-9-4-07',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'When a transistor is used as an electronic switch in digital logic, in which two states does it operate?',
      si: 'ට්‍රාන්සිස්ටරයක් ඉලෙක්ට්‍රොනික ස්විචයක් ලෙස යොදා ගන්නා විට එය ක්‍රියා කරන්නේ කුමන අවස්ථා දෙක අතරද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Cut-off (OFF) and Saturation (ON)', si: 'විසන්ධි (OFF) සහ සන්තෘප්ත (ON)' } },
      { id: 'opt2', text: { en: 'Active and Breakdown', si: 'සක්‍රිය සහ බිඳවැටුම්' } },
      { id: 'opt3', text: { en: 'Linear and Saturation', si: 'රේඛීය සහ සන්තෘප්ත' } },
      { id: 'opt4', text: { en: 'Cut-off and Active', si: 'විසන්ධි සහ සක්‍රිය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'A switch is either fully open (no current, cut-off) or fully closed (minimal voltage drop, saturation).',
      si: 'ස්විචයක් සම්පූර්ණයෙන් විවෘත (විසන්ධි) හෝ සම්පූර්ණයෙන් වැසුණු (සන්තෘප්ත) අවස්ථාවල ක්‍රියා කරයි.',
    },
    solution: {
      en: 'As a switch, the BJT is driven between Cut-off (I_B = 0, I_C = 0, V_CE = V_CC, switch open) and Saturation (I_B high, V_CE ≈ 0.2 V, switch closed).',
      si: 'ස්විචයක් ලෙස ක්‍රියා කිරීමේදී ට්‍රාන්සිස්ටරය විසන්ධි අවස්ථාව (ස්විචය විවෘත) සහ සන්තෘප්ත අවස්ථාව (ස්විචය වැසුණු) අතර මාරු වේ.',
    },
  },
  {
    id: 'elec-9-4-08',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An npn transistor amplifier has V_CC = 10.0 V and R_C = 1.0 kΩ. If the quiescent operating point has I_C = 4.0 mA, calculate the collector-emitter voltage V_CE in Volts.',
      si: 'npn ට්‍රාන්සිස්ටර වර්ධකයක V_CC = 10.0 V සහ R_C = 1.0 kΩ වේ. නිහඬ ක්‍රියාකාරී ලක්ෂ්‍යයේ (quiescent point) සංග්‍රාහක ධාරාව I_C = 4.0 mA නම්, සංග්‍රාහක-විමෝචක වෝල්ටීයතාව V_CE වෝල්ට් වලින් ගණනය කරන්න.',
    },
    expected: 6.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Apply Kirchhoff’s voltage law to the collector loop: V_CE = V_CC - I_C * R_C.',
      si: 'සංග්‍රාහක ලූපයට කර්චොෆ් නියමය යොදන්න: V_CE = V_CC - I_C * R_C.',
    },
    solution: {
      en: 'V_CE = V_CC - I_C * R_C = 10.0 V - (4.0 mA × 1.0 kΩ) = 10.0 V - 4.0 V = 6.0 V.',
      si: 'V_CE = V_CC - I_C * R_C = 10.0 V - 4.0 V = 6.0 V වේ.',
    },
  },
  {
    id: 'elec-9-4-09',
    competencyRef: 'Competency 9.2',
    category: 'bjt-amplifiers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is the base region of a bipolar junction transistor made extremely thin and lightly doped?',
      si: 'ද්විධ්‍රැව සන්ධි ට්‍රාන්සිස්ටරයක පාදම ප්‍රදේශය අතිශයින් තුනීව සහ අඩුවෙන් මාත්‍රණය කර සාදන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'To minimize carrier recombination in the base so that nearly all carriers reach the collector', si: 'පාදම තුළ වාහක ප්‍රතිසංයෝජනය අවම කර සියලුම වාහක පාහේ සංග්‍රාහකයට ළඟා වීමට සැලැස්වීම සඳහා' } },
      { id: 'opt2', text: { en: 'To increase the electrical resistance to prevent any current from reaching the collector', si: 'කිසිදු ධාරාවක් සංග්‍රාහකයට නොයන ලෙස ප්‍රතිරෝධය වැඩි කිරීමට' } },
      { id: 'opt3', text: { en: 'To allow light to penetrate into the junction', si: 'සන්ධිය තුළට ආලෝකය විනිවිද යාමට ඉඩ සැලසීමට' } },
      { id: 'opt4', text: { en: 'To keep the manufacturing cost low', si: 'නිෂ්පාදන පිරිවැය අඩු කර ගැනීමට' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'If the base were thick and heavily doped, injected electrons would recombine in the base and never reach the collector.',
      si: 'පාදම ඝනකම් සහ තදින් මාත්‍රණය කර තිබුණේ නම්, එන්නත් කළ ඉලෙක්ට්‍රෝන පාදම තුළදීම විනාශ වේ.',
    },
    solution: {
      en: 'A thin, lightly doped base ensures that over 98-99% of carriers injected by the emitter diffuse across the base without recombining, ensuring high current gain alpha ≈ 1.',
      si: 'සිහින් සහ අඩු මාත්‍රණයක් සහිත පාදම මඟින් විමෝචකයෙන් එන වාහකවලින් 98-99% කට වඩා ප්‍රතිසංයෝජනය නොවී සංග්‍රාහකයට ළඟා වීම තහවුරු කරයි.',
    },
  },

  // ==========================================
  // Competency 9.5: Operational Amplifiers (Op-Amps) (36-44)
  // ==========================================
  {
    id: 'elec-9-5-01',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following is a characteristic of an ideal operational amplifier (Op-Amp)?',
      si: 'පරමාදර්ශී ක්‍රියාකාරී වර්ධකයක (Op-Amp) ලක්ෂණයක් වන්නේ පහත සඳහන් කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Infinite input resistance (R_in = infinity) and zero output resistance (R_out = 0)', si: 'අනන්ත ආදාන ප්‍රතිරෝධය (R_in = අනන්තය) සහ ශුන්‍ය ප්‍රතිදාන ප්‍රතිරෝධය (R_out = 0)' } },
      { id: 'opt2', text: { en: 'Zero open-loop gain (A_OL = 0)', si: 'ශුන්‍ය විවෘත ලූප ලාභය (A_OL = 0)' } },
      { id: 'opt3', text: { en: 'Zero bandwidth', si: 'ශුන්‍ය කලාප පළල' } },
      { id: 'opt4', text: { en: 'Infinite output resistance (R_out = infinity)', si: 'අනන්ත ප්‍රතිදාන ප්‍රතිරෝධය (R_out = අනන්තය)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'An ideal amplifier draws no input current and can deliver any load current without dropping internal voltage.',
      si: 'පරමාදර්ශී වර්ධකයක් ආදානයෙන් ධාරාව ලබා නොගන්නා අතර අභ්‍යන්තර වෝල්ටීයතා බැස්මකින් තොරව ඕනෑම භාරයකට ධාරාව සපයයි.',
    },
    solution: {
      en: 'An ideal Op-Amp has infinite open-loop gain (A_OL = ∞), infinite input impedance (R_in = ∞), zero output impedance (R_out = 0), and infinite bandwidth.',
      si: 'පරමාදර්ශී Op-Amp සතුව A_OL = ∞, R_in = ∞, R_out = 0 සහ අනන්ත කලාප පළලක් පවතී.',
    },
  },
  {
    id: 'elec-9-5-02',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'In an inverting Op-Amp circuit, the input resistor R_in = 10 kΩ and feedback resistor R_f = 50 kΩ. If an input voltage V_in = +1.2 V is applied with supply rails at ±15 V, calculate the output voltage V_out in Volts.',
      si: 'ප්‍රතිලෝම Op-Amp පරිපථයක ආදාන ප්‍රතිරෝධකය R_in = 10 kΩ සහ ප්‍රතිපෝෂණ ප්‍රතිරෝධකය R_f = 50 kΩ වේ. සැපයුම් රේල් ±15 V වන විට, V_in = +1.2 V ආදාන වෝල්ටීයතාවක් යෙදුවහොත් ප්‍රතිදාන වෝල්ටීයතාව V_out (වෝල්ට් වලින්) ගණනය කරන්න.',
    },
    expected: -6.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_out = -(R_f / R_in) * V_in = -(50 / 10) * 1.2.',
      si: 'V_out = -(R_f / R_in) * V_in = -(50 / 10) * 1.2.',
    },
    solution: {
      en: 'V_out = -(R_f / R_in) × V_in = -(50 kΩ / 10 kΩ) × 1.2 V = -5 × 1.2 V = -6.0 V (well within ±15 V rails).',
      si: 'V_out = -(50 / 10) × 1.2 V = -6.0 V වේ (±15 V සීමාව තුළ පවතී).',
    },
  },
  {
    id: 'elec-9-5-03',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A non-inverting Op-Amp amplifier has R_1 = 2.0 kΩ (connected to ground) and feedback resistor R_f = 18.0 kΩ. What is the closed-loop voltage gain A_v of this amplifier?',
      si: 'අප්‍රතිලෝම Op-Amp වර්ධකයක භූගත කළ R_1 = 2.0 kΩ සහ ප්‍රතිපෝෂණ ප්‍රතිරෝධකය R_f = 18.0 kΩ වේ. මෙම වර්ධකයේ සංවෘත ලූප වෝල්ටීයතා ලාභය A_v කොපමණද?',
    },
    expected: 10.0,
    tolerance: 0.1,
    unit: { en: '', si: '' },
    hint: {
      en: 'Non-inverting gain formula: A_v = 1 + (R_f / R_1).',
      si: 'අප්‍රතිලෝම ලාභ සූත්‍රය: A_v = 1 + (R_f / R_1).',
    },
    solution: {
      en: 'A_v = 1 + (R_f / R_1) = 1 + (18.0 kΩ / 2.0 kΩ) = 1 + 9 = 10.0.',
      si: 'A_v = 1 + (18.0 / 2.0) = 1 + 9 = 10.0 වේ.',
    },
  },
  {
    id: 'elec-9-5-04',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the voltage gain and primary application of a voltage follower (buffer) Op-Amp circuit where the output is directly connected to the inverting input (R_f = 0)?',
      si: 'ප්‍රතිදානය සෘජුවම ප්‍රතිලෝම අග්‍රයට සම්බන්ධ කළ (R_f = 0) වෝල්ටීයතා අනුගාමික (buffer) Op-Amp පරිපථයක වෝල්ටීයතා ලාභය සහ ප්‍රධාන භාවිතය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Gain = 1; used for impedance matching to prevent circuit loading', si: 'ලාභය = 1; පරිපථ භාරවීම වැළැක්වීමට සම්බාධන ගැලපීම සඳහා යොදා ගනී' } },
      { id: 'opt2', text: { en: 'Gain = infinity; used for oscillation', si: 'ලාභය = අනන්තය; දෝලනය සඳහා යොදා ගනී' } },
      { id: 'opt3', text: { en: 'Gain = -1; used for phase inversion', si: 'ලාභය = -1; කලා විපර්යාසය සඳහා යොදා ගනී' } },
      { id: 'opt4', text: { en: 'Gain = 0; used as a circuit isolator switch', si: 'ලාභය = 0; හුදකලා කිරීමේ ස්විචයක් ලෙස යොදා ගනී' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'A_v = 1 + (0 / R_1) = 1. High input impedance prevents loading the source.',
      si: 'A_v = 1 + 0 = 1. ඉහළ ආදාන සම්බාධනය නිසා ප්‍රභවය භාරවීම වළක්වයි.',
    },
    solution: {
      en: 'A voltage follower has a unity gain A_v = 1. Because of its extremely high input resistance and very low output resistance, it serves as an ideal buffer for impedance matching.',
      si: 'වෝල්ටීයතා අනුගාමිකයේ ලාභය A_v = 1 වේ. ඉතා ඉහළ ආදාන ප්‍රතිරෝධය සහ ඉතා අඩු ප්‍රතිදාන ප්‍රතිරෝධය නිසා එය සම්බාධන ගැලපුම් බෆරයක් ලෙස ක්‍රියා කරයි.',
    },
  },
  {
    id: 'elec-9-5-05',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An inverting Op-Amp has R_in = 5.0 kΩ, R_f = 50 kΩ, and power supply rails at ±12 V. If an input voltage V_in = 2.0 V is applied, what is the actual output voltage V_out in Volts (assuming rail saturation at ±12 V)?',
      si: 'ප්‍රතිලෝම Op-Amp පරිපථයක R_in = 5.0 kΩ, R_f = 50 kΩ සහ සැපයුම් රේල් ±12 V වේ. V_in = 2.0 V ආදානයක් යෙදුවහොත්, සන්තෘප්ත සීමා ±12 V සලකා සැබෑ ප්‍රතිදාන වෝල්ටීයතාව V_out වෝල්ට් වලින් කොපමණද?',
    },
    expected: -12.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'Theoretical linear output would be - (50/5) * 2.0 = -20 V, but the output cannot exceed the supply rail.',
      si: 'න්‍යායික ලාභයෙන් -20 V ලැබුණද, ප්‍රතිදානයට සැපයුම් රේල් සීමාව ඉක්මවිය නොහැක.',
    },
    solution: {
      en: 'Theoretical V_out = -(50/5) × 2.0 V = -20 V. Since -20 V is more negative than the negative supply rail (-12 V), the Op-Amp saturates at V_out = -12.0 V.',
      si: 'න්‍යායික අගය -20 V වුවද, සැපයුම් සීමාව ඉක්මවිය නොහැකි බැවින් ප්‍රතිදානය සෘණ රේලයේ සන්තෘප්ත වී -12.0 V වේ.',
    },
  },
  {
    id: 'elec-9-5-06',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is the inverting terminal called a "virtual ground" in an inverting Op-Amp with negative feedback when the non-inverting terminal is grounded?',
      si: 'අප්‍රතිලෝම අග්‍රය භූගත කර ඇති ඍණ ප්‍රතිපෝෂණ සහිත ප්‍රතිලෝම Op-Amp පරිපථයක, ප්‍රතිලෝම අග්‍රය "අතථ්‍ය භූගතයක්" (virtual ground) ලෙස හඳුන්වන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'Its potential is held at 0 V by negative feedback without being physically wired to ground', si: 'භෞතිකව භූගත කර නොමැති වුවද සෘණ ප්‍රතිපෝෂණය මඟින් එහි විභවය 0 V හි පවත්වා ගැනීම නිසා' } },
      { id: 'opt2', text: { en: 'A huge current drains from it directly into the earth', si: 'එයින් විශාල ධාරාවක් සෘජුවම පොළවට ගලා යන නිසා' } },
      { id: 'opt3', text: { en: 'It is connected to ground through a 1 Ω resistor', si: 'එය 1 Ω ප්‍රතිරෝධකයක් හරහා භූගත කර ඇති නිසා' } },
      { id: 'opt4', text: { en: 'The Op-Amp is turned off', si: 'Op-Amp එක ක්‍රියා විරහිත කර ඇති නිසා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Since open loop gain A_OL is enormous, V_+ - V_- = V_out / A_OL ≈ 0, forcing V_- to track V_+ = 0 V.',
      si: 'A_OL අතිශය විශාල බැවින් V_+ - V_- ≈ 0 වී V_- අගය V_+ = 0 V අගයට සමාන වේ.',
    },
    solution: {
      en: 'With huge open-loop gain and stable negative feedback, the differential voltage (V+ - V-) is virtually zero. Since V+ = 0 V (ground), V- is held at 0 V without any direct physical connection to ground.',
      si: 'අධික විවෘත ලාභය සහ සෘණ ප්‍රතිපෝෂණය නිසා අග්‍ර දෙක අතර විභව අන්තරය ශුන්‍ය වේ. V+ භූගතව ඇති බැවින් V- අග්‍රයද භෞතික සම්බන්ධයක් නැතිව 0 V හි පවතී.',
    },
  },
  {
    id: 'elec-9-5-07',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'An inverting summing amplifier has two inputs: V_1 = 1.0 V through input resistor R_1 = 10 kΩ, and V_2 = 2.0 V through input resistor R_2 = 20 kΩ. If feedback resistor R_f = 20 kΩ, calculate the output voltage V_out in Volts.',
      si: 'ප්‍රතිලෝම එකතු කිරීමේ වර්ධකයක ආදාන දෙකකි: R_1 = 10 kΩ හරහා V_1 = 1.0 V සහ R_2 = 20 kΩ හරහා V_2 = 2.0 V වේ. ප්‍රතිපෝෂණ ප්‍රතිරෝධකය R_f = 20 kΩ නම්, ප්‍රතිදාන වෝල්ටීයතාව V_out වෝල්ට් වලින් ගණනය කරන්න.',
    },
    expected: -4.0,
    tolerance: 0.1,
    unit: { en: 'V', si: 'V' },
    hint: {
      en: 'V_out = -R_f * (V_1 / R_1 + V_2 / R_2) = -20 * (1.0/10 + 2.0/20).',
      si: 'V_out = -R_f * (V_1 / R_1 + V_2 / R_2) = -20 * (1.0/10 + 2.0/20).',
    },
    solution: {
      en: 'V_out = - [ (R_f / R_1) V_1 + (R_f / R_2) V_2 ] = - [ (20/10)(1.0) + (20/20)(2.0) ] = - [ 2.0 + 2.0 ] = -4.0 V.',
      si: 'V_out = - [ (20/10)(1.0) + (20/20)(2.0) ] = - [ 2.0 + 2.0 ] = -4.0 V වේ.',
    },
  },
  {
    id: 'elec-9-5-08',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In an open-loop Op-Amp voltage comparator with supply rails at ±10 V, what is the output V_out when non-inverting input V_+ = 3.5 V and inverting input V_- = 2.0 V?',
      si: '±10 V සැපයුම් රේල් සහිත විවෘත ලූප Op-Amp වෝල්ටීයතා සංසන්දකයක V_+ = 3.5 V සහ V_- = 2.0 V වන විට ප්‍රතිදානය V_out කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: '+10 V (Positive saturation)', si: '+10 V (ධන සන්තෘප්තිය)' } },
      { id: 'opt2', text: { en: '-10 V (Negative saturation)', si: '-10 V (සෘණ සන්තෘප්තිය)' } },
      { id: 'opt3', text: { en: '1.5 V', si: '1.5 V' } },
      { id: 'opt4', text: { en: '0 V', si: '0 V' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Since V_+ > V_-, the massive open-loop gain drives the output to positive rail saturation.',
      si: 'V_+ > V_- බැවින් දැවැන්ත විවෘත ලූප ලාභය මඟින් ප්‍රතිදානය ධන සන්තෘප්තියට පත් කරයි.',
    },
    solution: {
      en: 'In a comparator without negative feedback, V_+ - V_- = 3.5 V - 2.0 V = +1.5 V > 0. The output instantly swings to the positive saturation rail (+10 V).',
      si: 'ප්‍රතිපෝෂණ නොමැති විට V_+ > V_- බැවින් ප්‍රතිදානය ක්ෂණිකව ධන සන්තෘප්ත වෝල්ටීයතාව වන +10 V දක්වා ඉහළ නගී.',
    },
  },
  {
    id: 'elec-9-5-09',
    competencyRef: 'Competency 9.3',
    category: 'operational-amplifiers',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the role of negative feedback in an operational amplifier circuit?',
      si: 'ක්‍රියාකාරී වර්ධක පරිපථයක සෘණ ප්‍රතිපෝෂණයේ කාර්යභාරය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Stabilizes voltage gain, reduces distortion, and broadens bandwidth', si: 'වෝල්ටීයතා ලාභය ස්ථාවර කරයි, විකෘතිතා අඩු කරයි සහ කලාප පළල පුළුල් කරයි' } },
      { id: 'opt2', text: { en: 'Increases the voltage gain to infinity', si: 'වෝල්ටීයතා ලාභය අනන්තය දක්වා වැඩි කරයි' } },
      { id: 'opt3', text: { en: 'Forces the amplifier to oscillate as a square wave', si: 'වර්ධකය කොටු තරංග දෝලකයක් බවට පත් කරයි' } },
      { id: 'opt4', text: { en: 'Burns off excess heat from the power supply', si: 'බල සැපයුමේ අතිරික්ත තාපය දහනය කරයි' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Negative feedback trades raw open-loop gain for precision, linearity, and stability.',
      si: 'සෘණ ප්‍රතිපෝෂණය මඟින් අතිවිශාල අස්ථාවර විවෘත ලාභය වෙනුවට නිරවද්‍ය ස්ථාවර ලාභයක් ලබා දෙයි.',
    },
    solution: {
      en: 'Negative feedback sacrifices raw open-loop gain to produce a stable, predictable closed-loop gain determined purely by external resistors, while widening bandwidth and minimizing distortion.',
      si: 'සෘණ ප්‍රතිපෝෂණය මඟින් බාහිර ප්‍රතිරෝධක මඟින් තීරණය වන ස්ථාවර සංවෘත ලාභයක් ලබා දෙන අතර විකෘතිතා අවම කරයි.',
    },
  },

  // ==========================================
  // Competency 9.6: Digital Logic Gates & Boolean Algebra (45-54)
  // ==========================================
  {
    id: 'elec-9-6-01',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which logic gate produces an output of logic 0 ONLY when both of its inputs are logic 1?',
      si: 'ආදාන දෙකම තාර්කික 1 වන විට පමණක් තාර්කික 0 ප්‍රතිදානයක් ලබා දෙන තාර්කික ද්වාරය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'NAND gate', si: 'NAND ද්වාරය' } },
      { id: 'opt2', text: { en: 'NOR gate', si: 'NOR ද්වාරය' } },
      { id: 'opt3', text: { en: 'AND gate', si: 'AND ද්වාරය' } },
      { id: 'opt4', text: { en: 'XOR gate', si: 'XOR ද්වාරය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'NAND is the negation of AND: NOT(A AND B).',
      si: 'NAND යනු AND හි ප්‍රතිලෝමය වේ: NOT(A AND B).',
    },
    solution: {
      en: 'A NAND gate output is Y = NOT(A AND B). When A=1 and B=1, Y = NOT(1) = 0. For all other combinations, Y = 1.',
      si: 'NAND ද්වාරයේ ප්‍රතිදානය Y = NOT(A AND B) වේ. A=1 සහ B=1 වන විට Y = 0 වන අතර අන් සෑම විටම Y = 1 වේ.',
    },
  },
  {
    id: 'elec-9-6-02',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why are NAND and NOR gates called "universal gates"?',
      si: 'NAND සහ NOR ද්වාර "සාර්වත්‍ර ද්වාර" (universal gates) ලෙස හඳුන්වන්නේ ඇයි?',
    },
    options: [
      { id: 'opt1', text: { en: 'Any Boolean function or logic circuit can be constructed using only that gate type', si: 'ඕනෑම බූලීය ශ්‍රිතයක් හෝ තාර්කික පරිපථයක් එම ද්වාර වර්ගය පමණක් භාවිතයෙන් ගොඩනැඟිය හැකි නිසා' } },
      { id: 'opt2', text: { en: 'They work at any temperature in the universe', si: 'විශ්වයේ ඕනෑම උෂ්ණත්වයකදී ඒවා ක්‍රියාත්මක වන නිසා' } },
      { id: 'opt3', text: { en: 'They require no power supply rails', si: 'ඒවාට කිසිදු බල සැපයුමක් අවශ්‍ය නොවන නිසා' } },
      { id: 'opt4', text: { en: 'They have an infinite number of inputs', si: 'ඒවාට අනන්ත ආදාන සංඛ්‍යාවක් ඇති නිසා' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'NOT, AND, and OR can all be formed purely from interconnected NAND gates or purely from NOR gates.',
      si: 'NOT, AND සහ OR ද්වාර සියල්ලම NAND වලින් පමණක් හෝ NOR වලින් පමණක් නිර්මාණය කළ හැක.',
    },
    solution: {
      en: 'Universal gates can synthesize the complete fundamental set of Boolean operators (NOT, AND, OR), meaning any combinational digital system can be built exclusively from NAND or exclusively from NOR gates.',
      si: 'NOT, AND සහ OR යන මූලික ද්වාර සියල්ලම NAND වලින් පමණක් හෝ NOR වලින් පමණක් සැකසිය හැකි බැවින් ඒවා සාර්වත්‍ර ද්වාර නම් වේ.',
    },
  },
  {
    id: 'elec-9-6-03',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'According to De Morgan’s Laws, which Boolean expression is equivalent to NOT(A + B)?',
      si: 'ඩි මෝගන්ගේ නියමයන්ට අනුව NOT(A + B) ට තුල්‍ය වන බූලීය ප්‍රකාශනය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'NOT(A) · NOT(B)', si: 'NOT(A) · NOT(B)' } },
      { id: 'opt2', text: { en: 'NOT(A) + NOT(B)', si: 'NOT(A) + NOT(B)' } },
      { id: 'opt3', text: { en: 'A · B', si: 'A · B' } },
      { id: 'opt4', text: { en: 'NOT(A · B)', si: 'NOT(A · B)' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: '"Break the line, change the sign": bar(A + B) = bar(A) · bar(B).',
      si: '"රේඛාව කඩන්න, ලකුණ මාරු කරන්න": bar(A + B) = bar(A) · bar(B).',
    },
    solution: {
      en: 'De Morgan’s first theorem states that the complement of a sum equals the product of the complements: NOT(A + B) = NOT(A) · NOT(B).',
      si: 'ඩි මෝගන්ගේ පළමු නියමය අනුව ඓක්‍යයක අනුපූරකය අනුපූරකවල ගුණිතයට සමාන වේ: NOT(A + B) = NOT(A) · NOT(B).',
    },
  },
  {
    id: 'elec-9-6-04',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the output Y of a 2-input XOR gate when inputs A = 1 and B = 1?',
      si: 'ආදාන A = 1 සහ B = 1 වන විට ආදාන 2 ක XOR ද්වාරයක ප්‍රතිදානය Y කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: '0', si: '0' } },
      { id: 'opt2', text: { en: '1', si: '1' } },
      { id: 'opt3', text: { en: 'Undefined', si: 'අර්ථ දැක්විය නොහැක' } },
      { id: 'opt4', text: { en: 'High impedance (Z)', si: 'ඉහළ සම්බාධනය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Exclusive-OR outputs 1 only when the two inputs are strictly different.',
      si: 'XOR ද්වාරය 1 ලබා දෙන්නේ ආදාන දෙක එකිනෙකට වෙනස් වූ විට පමණි.',
    },
    solution: {
      en: 'An XOR gate outputs 1 if and only if exactly one input is 1 (A != B). When both A = 1 and B = 1, Y = 0.',
      si: 'XOR ද්වාරයේ ආදාන දෙකම සමාන වූ විට (1, 1 හෝ 0, 0) ප්‍රතිදානය 0 වේ.',
    },
  },
  {
    id: 'elec-9-6-05',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Simplify the Boolean expression: Y = A·B + A·NOT(B).',
      si: 'Y = A·B + A·NOT(B) බූලීය ප්‍රකාශනය සරල කරන්න.',
    },
    options: [
      { id: 'opt1', text: { en: 'A', si: 'A' } },
      { id: 'opt2', text: { en: 'B', si: 'B' } },
      { id: 'opt3', text: { en: 'A·B', si: 'A·B' } },
      { id: 'opt4', text: { en: '1', si: '1' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'Factor out A: Y = A · (B + NOT(B)). Recall that B + NOT(B) = 1.',
      si: 'A පොදු සාධකයක් ලෙස ගන්න: Y = A · (B + NOT(B)). මෙහි B + NOT(B) = 1 වේ.',
    },
    solution: {
      en: 'Y = A(B + NOT(B)) = A(1) = A.',
      si: 'Y = A(B + NOT(B)) = A(1) = A වේ.',
    },
  },
  {
    id: 'elec-9-6-06',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'How can a 2-input NAND gate be configured to function as a simple NOT gate (inverter)?',
      si: 'ආදාන 2 ක NAND ද්වාරයක් සරල NOT ද්වාරයක් ලෙස ක්‍රියා කිරීමට සකස් කරන්නේ කෙසේද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Tie both inputs together as a single input', si: 'ආදාන දෙකම එකට එකතු කර තනි ආදානයක් ලෙස සම්බන්ධ කිරීම' } },
      { id: 'opt2', text: { en: 'Connect one input to ground (0)', si: 'එක් ආදානයක් භූගත කිරීම (0)' } },
      { id: 'opt3', text: { en: 'Leave one input disconnected', si: 'එක් ආදානයක් විවෘතව තැබීම' } },
      { id: 'opt4', text: { en: 'Connect the output directly to the input', si: 'ප්‍රතිදානය නැවත ආදානයට සම්බන්ධ කිරීම' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'When A = B, NAND(A, A) = NOT(A AND A) = NOT(A).',
      si: 'A = B වූ විට, NAND(A, A) = NOT(A AND A) = NOT(A) වේ.',
    },
    solution: {
      en: 'Tying both inputs of a NAND gate together ensures that when the input is 0, output is 1; when the input is 1, output is 0, performing the NOT function.',
      si: 'NAND ද්වාරයේ ආදාන දෙක එකට සම්බන්ධ කළ විට ආදානය 0 නම් ප්‍රතිදානය 1 ද, ආදානය 1 නම් ප්‍රතිදානය 0 ද වී NOT ශ්‍රිතය ඉටු වේ.',
    },
  },
  {
    id: 'elec-9-6-07',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In an automatic night-light switching circuit, an LDR (Light Dependent Resistor) is connected in a potential divider with a fixed resistor. In darkness, the LDR resistance rises to 500 kΩ. To turn on a lamp at darkness using a transistor, what voltage level at the base is required?',
      si: 'ස්වයංක්‍රීය රාත්‍රී පහන් පරිපථයක LDR එකක් නියත ප්‍රතිරෝධකයක් සමඟ විභව බෙදුමක සවි කර ඇත. අඳුරේදී LDR ප්‍රතිරෝධය 500 kΩ දක්වා ඉහළ නගී. අඳුරේදී ලාම්පුව දැල්වීම සඳහා ට්‍රාන්සිස්ටර පාදමට අවශ්‍ය වෝල්ටීයතා මට්ටම කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'Sufficiently high (> 0.7 V) to forward-bias the base-emitter junction into saturation', si: 'පාදම-විමෝචක සන්ධිය පෙර නැඹුරු කර සන්තෘප්ත කිරීමට ප්‍රමාණවත් ඉහළ වෝල්ටීයතාවක් (> 0.7 V)' } },
      { id: 'opt2', text: { en: 'Strictly 0 V', si: 'නියත වශයෙන්ම 0 V' } },
      { id: 'opt3', text: { en: 'Negative relative to ground (-5 V)', si: 'භූමියට සාපේක්ෂව සෘණ වෝල්ටීයතාවක් (-5 V)' } },
      { id: 'opt4', text: { en: 'Oscillating at 50 Hz', si: '50 Hz සංඛ්‍යාතයකින් දෝලනය වන වෝල්ටීයතාවක්' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'To switch ON an npn transistor, V_BE must exceed the silicon barrier threshold of ~0.7 V.',
      si: 'npn ට්‍රාන්සිස්ටරය ON කිරීමට V_BE අගය ~0.7 V බාධක විභවය ඉක්මවිය යුතුය.',
    },
    solution: {
      en: 'When the potential divider is arranged such that V_B exceeds ~0.7 V in the dark, base current flows, switching the transistor into saturation and powering the lamp relay.',
      si: 'අඳුරේදී පාදම වෝල්ටීයතාව > 0.7 V වන පරිදි විභව බෙදුම සැලසුම් කළ විට, ට්‍රාන්සිස්ටරය සන්තෘප්ත වී ලාම්පුව දල්වයි.',
    },
  },
  {
    id: 'elec-9-6-08',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the Boolean function realized by a NOR gate followed immediately by an inverter (NOT gate)?',
      si: 'NOR ද්වාරයක් පිටුපසින් ක්ෂණිකව NOT ද්වාරයක් සම්බන්ධ කළ විට ලැබෙන බූලීය ශ්‍රිතය කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'OR gate', si: 'OR ද්වාරය' } },
      { id: 'opt2', text: { en: 'AND gate', si: 'AND ද්වාරය' } },
      { id: 'opt3', text: { en: 'NAND gate', si: 'NAND ද්වාරය' } },
      { id: 'opt4', text: { en: 'XOR gate', si: 'XOR ද්වාරය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'NOT(NOR(A, B)) = NOT(NOT(A + B)) = A + B.',
      si: 'NOT(NOR(A, B)) = NOT(NOT(A + B)) = A + B.',
    },
    solution: {
      en: 'Inverting the output of a NOR gate cancels the negation: NOT(NOT(A + B)) = A + B, giving a standard OR gate.',
      si: 'NOR ද්වාරයේ ප්‍රතිදානය NOT කළ විට නැවත OR ශ්‍රිතය ලැබේ: NOT(NOT(A + B)) = A + B.',
    },
  },
  {
    id: 'elec-9-6-09',
    competencyRef: 'Competency 9.4',
    category: 'digital-logic-gates',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Which gate is commonly used as a digital comparator or parity detector because it produces a 1 whenever its inputs are mismatched?',
      si: 'ආදාන එකිනෙකට වෙනස් වන සෑම විටම 1 ප්‍රතිදානයක් ලබා දෙන බැවින් ඩිජිටල් සංසන්දකයක් හෝ සමානතා හඳුනාගැනීමේ ද්වාරයක් (parity detector) ලෙස බහුලව භාවිත වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'opt1', text: { en: 'XOR gate', si: 'XOR ද්වාරය' } },
      { id: 'opt2', text: { en: 'AND gate', si: 'AND ද්වාරය' } },
      { id: 'opt3', text: { en: 'OR gate', si: 'OR ද්වාරය' } },
      { id: 'opt4', text: { en: 'NOR gate', si: 'NOR ද්වාරය' } },
    ],
    correctOptionId: 'opt1',
    hint: {
      en: 'XOR yields 1 when inputs differ (0,1 or 1,0) and 0 when inputs match (0,0 or 1,1).',
      si: 'ආදාන වෙනස් වූ විට 1 ද ආදාන සමාන වූ විට 0 ද ලබා දෙන්නේ XOR ද්වාරයයි.',
    },
    solution: {
      en: 'The Exclusive-OR (XOR) gate performs modulo-2 addition and outputs high when inputs differ, making it the fundamental building block for binary adders and parity checkers.',
      si: 'ආදාන දෙක එකිනෙකට අසමාන වන විට පමණක් 1 ලබා දෙන XOR ද්වාරය බූලීය සංසන්දක සහ සමානතා පරික්ෂක සඳහා යොදා ගැනේ.',
    },
  },
{
  "id": "elec9-sq01",
  "competencyRef": "Competency 9.1",
  "category": "semiconductors-doping",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "Silicon has four valence electrons and forms a crystalline lattice via covalent bonding. (a) Distinguish between intrinsic and extrinsic semiconductors. (b) Explain how doping pure silicon with: (i) Phosphorus (valency 5) produces an n-type semiconductor, and (ii) Boron (valency 3) produces a p-type semiconductor, drawing energy band diagrams showing donor and acceptor levels. (c) Explain why an n-type semiconductor remains electrically neutral as a whole, despite having a large concentration of free electrons.",
    "si": "සිලිකන්වල සංයුජතා ඉලෙක්ට්‍රෝන 4 ක් ඇති අතර සහසංයුජ බන්ධන මගින් ස්ඵටික දැලිසක් සාදයි. (a) සහජ සහ අසහජ අර්ධ සන්නායක අතර වෙනස දක්වන්න. (b) පිරිසිදු සිලිකන්: (i) පොස්පරස් (සංයුජතාව 5) මගින් මාත්‍රණයෙන් n-වර්ගයේ අර්ධ සන්නායකයක්ද, (ii) බෝරෝන් (සංයුජතාව 3) මගින් p-වර්ගයේ අර්ධ සන්නායකයක්ද සෑදෙන ආකාරය දායක සහ ප්‍රතිග්‍රාහක මට්ටම් දැක්වෙන ශක්ති පටි සටහන් ඇසුරින් පහදන්න. (c) n-වර්ගයේ අර්ධ සන්නායකයක විශාල නිදහස් ඉලෙක්ට්‍රෝන සාන්ද්‍රණයක් තිබුණද, සමස්තයක් ලෙස එය විද්‍යුත් වශයෙන් උදාසීන වන්නේ මන්දැයි පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Distinguish between intrinsic and extrinsic semiconductors.",
        "si": "සහජ සහ අසහජ අර්ධ සන්නායක අතර වෙනස දක්වන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "An intrinsic semiconductor is a chemically pure semiconductor (e.g. pure Si or Ge) where electrical conduction is due solely to thermally generated electron-hole pairs (n_e = n_h). An extrinsic semiconductor is a semiconductor doped with a controlled small quantity of suitable trivalent or pentavalent impurity atoms to dramatically increase its electrical conductivity.",
        "si": "සහජ අර්ධ සන්නායකයක් යනු රසායනිකව පිරිසිදු (පිරිසිදු Si හෝ Ge) අර්ධ සන්නායකයක් වන අතර සන්නයනය සිදුවන්නේ තාපජව ජනනය වන ඉලෙක්ට්‍රෝන-කුහර යුගල මගින් පමණි (n_e = n_h). අසහජ අර්ධ සන්නායකයක් යනු සන්නායකතාව වැඩි කිරීම සඳහා පාලනය කළ සුළු ත්‍රිසංයුජ හෝ පංචසංයුජ අපද්‍රව්‍ය පරමාණු මාත්‍රණය කළ අර්ධ සන්නායකයකි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Intrinsic: chemically pure, equal numbers of thermally generated electrons and holes",
            "si": "සහජ: පිරිසිදු, සමාන ඉලෙක්ට්‍රෝන හා කුහර සංඛ්‍යා"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Extrinsic: doped with impurities to significantly alter carrier concentrations",
            "si": "අසහජ: අපද්‍රව්‍ය මාත්‍රණයෙන් වාහක සාන්ද්‍රණ වැඩි කළ"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain n-type and p-type doping mechanisms and energy band level positions.",
        "si": "n-වර්ගයේ සහ p-වර්ගයේ මාත්‍රණ යාන්ත්‍රණ සහ ශක්ති පටි මට්ටම් පිහිටීම් පහදන්න."
      },
      "allocatedMarks": 5,
      "modelAnswer": {
        "en": "(i) N-type: Phosphorus has 5 valence electrons. Four form covalent bonds with adjacent Si atoms, while the 5th electron is loosely bound. With minimal thermal energy (~0.05 eV in Si), this electron enters the conduction band, leaving a fixed positive donor ion. In the band diagram, the donor energy level E_D lies just below the bottom of the conduction band E_c. (ii) P-type: Boron has 3 valence electrons. It forms bonds with 3 neighbouring Si atoms, leaving a deficiency (vacancy) in the fourth bond called a hole. A neighbouring valence electron easily jumps into this vacancy, creating a mobile hole in the valence band and a fixed negative acceptor ion. In the band diagram, the acceptor level E_A lies just above the top of the valence band E_v.",
        "si": "(i) n-වර්ගය: පොස්පරස් සතුව සංයුජතා ඉලෙක්ට්‍රෝන 5 ක් ඇත. 4 ක් Si සමග බන්ධන සාදන අතර 5 වන ඉලෙක්ට්‍රෝනය දුබලව බැඳී පවතී. ඉතා සුළු තාප ශක්තියකින් එය සන්නායක පටියට මුදාහැර ධන දායක අයනයක් ඉතිරි වේ. දායක මට්ටම E_D සන්නායක පටියේ පහළ දාරයට මදක් පහළින් පිහිටයි. (ii) p-වර්ගය: බෝරෝන් සතුව ඉලෙක්ට්‍රෝන 3 කි. සිව්වන බන්ධනයේ ඉලෙක්ට්‍රෝන ඌනතාවය කුහරයක් වේ. අසල්වැසි සංයුජතා ඉලෙක්ට්‍රෝනයක් එයට පැන සංයුජතා පටියේ චලනය විය හැකි කුහරයක් සාදයි. ප්‍රතිග්‍රාහක මට්ටම E_A සංයුජතා පටියේ ඉහළ දාරයට මදක් ඉහළින් පිහිටයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "N-type: 5th electron easily ionized into conduction band",
            "si": "n-වර්ගය: 5 වන ඉලෙක්ට්‍රෝනය සන්නායක පටියට නිදහස් වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Donor level E_D positioned just below conduction band edge",
            "si": "දායක මට්ටම E_D සන්නායක පටියට මදක් පහළින් පිහිටීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "P-type: trivalent atom creates vacancy/hole in covalent bond",
            "si": "p-වර්ගය: ත්‍රිසංයුජ පරමාණුව බන්ධනයේ කුහරයක් ඇතිකිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Acceptor level E_A positioned just above valence band edge",
            "si": "ප්‍රතිග්‍රාහක මට්ටම E_A සංයුජතා පටියට මදක් ඉහළින් පිහිටීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Mentions immobile donor/acceptor ions remaining in lattice",
            "si": "දැලිසේ අචල දායක/ප්‍රතිග්‍රාහක අයන ඉතිරි වන බව"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why n-type semiconductors are electrically neutral overall.",
        "si": "n-වර්ගයේ අර්ධ සන්නායක සමස්තයක් ලෙස උදාසීන වන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Before doping, both the host silicon atoms and the phosphorus impurity atoms are electrically neutral (equal numbers of protons in nuclei and orbital electrons). When a donor atom ionizes, it releases a free electron (-e) into the conduction band and becomes an immobile positive donor ion (+e) in the crystal lattice. Because the total number of positive charges (protons in nuclei + fixed donor ions) exactly equals the total number of negative charges (conduction electrons + bound core electrons), the net electric charge of the crystal is zero.",
        "si": "මාත්‍රණයට පෙර සිලිකන් පරමාණු සහ පොස්පරස් අපද්‍රව්‍ය පරමාණු යන දෙකම විද්‍යුත් වශයෙන් උදාසීන වේ (න්‍යෂ්ටියේ ප්‍රෝටෝන සංඛ්‍යාව ඉලෙක්ට්‍රෝන සංඛ්‍යාවට සමානයි). දායක පරමාණුවක් අයනීකරණය වන විට සන්නායක පටියට නිදහස් වන සෑම සෘණ ඉලෙක්ට්‍රෝනයකටම (-e) අනුරූපව ස්ඵටික දැලිසේ අචල ධන දායක අයනයක් (+e) ඉතිරි වේ. මුළු ධන ආරෝපණ ප්‍රමාණය මුළු සෘණ ආරෝපණ ප්‍රමාණයට සමාන වන බැවින් ශුද්ධ ආරෝපණය ශුන්‍ය වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Starting atoms (Si and dopant) are individually neutral",
            "si": "ආරම්භක පරමාණු තනි තනිව උදාසීන බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Each free conduction electron is matched by a fixed positive donor ion",
            "si": "සෑම නිදහස් ඉලෙක්ට්‍රෝනයකටම අචල ධන දායක අයනයක් ගැළපීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Total positive charge equals total negative charge, so net Q = 0",
            "si": "මුළු ධන ආරෝපණ මුළු සෘණ ආරෝපණවලට සමාන බැවින් ශුද්ධ Q = 0"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "N-type has donor level just below conduction band; P-type has acceptor level just above valence band; neutrality is preserved because donor ions balance conduction electrons.",
    "si": "n-වර්ගයේ දායක මට්ටම සන්නායක පටියට යටින්ද, p-වර්ගයේ ප්‍රතිග්‍රාහක මට්ටම සංයුජතා පටියට උඩින්ද පිහිටයි; අචල අයන නිදහස් වාහක සමතුලිත කරයි."
  },
  "solution": {
    "en": "Intrinsic is pure (n_e = n_h); extrinsic is doped. Donor level E_D lies below E_c; acceptor level E_A lies above E_v. Net charge is zero because mobile electrons balance fixed positive donor ions.",
    "si": "සහජ යනු පිරිසිදුය; අසහජ මාත්‍රණය කළ එකකි. E_D සන්නායක පටියට පහළින්ද E_A සංයුජතා පටියට ඉහළින්ද වේ. අචල ධන අයන නිදහස් ඉලෙක්ට්‍රෝන සමතුලිත කරන නිසා උදාසීන වේ."
  }
},
{
  "id": "elec9-sq02",
  "competencyRef": "Competency 9.1",
  "category": "pn-junction-diodes",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "When a p-type semiconductor and an n-type semiconductor are brought into intimate contact, a p-n junction is formed. (a) Explain how the depletion layer and the junction barrier potential (contact potential) are established. (b) Explain the effect on the depletion layer width and barrier height when the junction is: (i) Forward-biased, (ii) Reverse-biased. (c) Sketch the complete current-voltage (I-V) characteristic curve for a silicon p-n diode, labeling the knee voltage (barrier potential), reverse saturation current, and breakdown voltage.",
    "si": "p-වර්ගයේ සහ n-වර්ගයේ අර්ධ සන්නායක එකට ස්පර්ශ වන සේ එක් කළ විට p-n සන්ධියක් සෑදේ. (a) ක්ෂය කලාපය සහ සන්ධි විභව බාධකය (ස්පර්ශ විභවය) ගොඩනැගෙන ආකාරය පැහැදිලි කරන්න. (b) සන්ධිය: (i) පෙර නැඹුරු කළ විට සහ (ii) පසු නැඹුරු කළ විට, ක්ෂය කලාපයේ පළලට සහ විභව බාධකයේ උසට සිදුවන බලපෑම පහදන්න. (c) සිලිකන් p-n ඩයෝඩයක් සඳහා සම්පූර්ණ ධාරා-වෝල්ටීයතා (I-V) ලාක්ෂණික වක්‍රය ඇඳ දණහිස් වෝල්ටීයතාව, පසු සංතෘප්ත ධාරාව, සහ බිඳවැටුම් වෝල්ටීයතාව ලකුණු කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Explain formation of the depletion layer and barrier potential.",
        "si": "ක්ෂය කලාපය සහ විභව බාධකය ඇතිවන ආකාරය පැහැදිලි කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Due to concentration gradients across the metallurgical junction, majority holes diffuse from the p-side into the n-side, and majority electrons diffuse from the n-side into the p-side. Near the junction, diffusing electrons and holes recombine and neutralize each other. This leaves unneutralized, immobile ionized donor ions (+ve) on the n-side and immobile ionized acceptor ions (-ve) on the p-side, forming a region depleted of mobile charge carriers known as the DEPLETION REGION. The separated fixed ions establish an internal electric field pointing from the n-side to the p-side, setting up a barrier potential V_B (~0.7 V for Si) that prevents further majority diffusion.",
        "si": "සාන්ද්‍රණ අනුක්‍රමණය නිසා p-පැත්තේ සිට n-පැත්තට කුහරද, n-පැත්තේ සිට p-පැත්තට ඉලෙක්ට්‍රෝනද විසරණය වේ. සන්ධිය අසලදී මේවා එකිනෙක ප්‍රතිසංයෝජනය වී උදාසීන වේ. එමගින් n-පැත්තේ අචල ධන දායක අයනද p-පැත්තේ අචල සෘණ ප්‍රතිග්‍රාහක අයනද ඉතිරි වී චලනය වන වාහකයන්ගෙන් තොර ක්ෂය කලාපය සෑදේ. මෙම අයන මගින් n දෙසින් p දෙසට අභ්‍යන්තර විද්‍යුත් ක්ෂේත්‍රයක් ඇති කර වැඩිදුර බහුතර විසරණය වළක්වන විභව බාධකයක් (~0.7 V) ඇති කරයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Diffusion of majority carriers across junction due to concentration gradient",
            "si": "සාන්ද්‍රණ අනුක්‍රමණය නිසා බහුතර වාහක සන්ධිය හරහා විසරණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Recombination neutralizes carriers leaving immobile ions",
            "si": "ප්‍රතිසංයෝජනයෙන් වාහක උදාසීන වී අචල අයන ඉතිරිවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Depletion region defined as layer devoid of free charge carriers",
            "si": "නිදහස් වාහකවලින් තොර ක්ෂය කලාපය අර්ථ දැක්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Internal electric field establishes barrier potential opposing further diffusion",
            "si": "අභ්‍යන්තර ක්ෂේත්‍රය මගින් විසරණය වළක්වන විභව බාධකය ඇතිවීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain effects of forward bias and reverse bias on depletion width and barrier height.",
        "si": "පෙර නැඹුරුව සහ පසු නැඹුරුව මගින් ක්ෂය පළලට හා බාධක උසට වන බලපෑම පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(i) Forward Bias (p connected to +ve, n connected to -ve): The external applied electric field opposes the built-in barrier field. The barrier height decreases to (V_B - V), and the depletion layer width narrows significantly. Once V exceeds the knee voltage (~0.7 V), majority carriers flow freely, producing large forward current. (ii) Reverse Bias (p connected to -ve, n connected to +ve): The external applied field aids the internal barrier field. The barrier height increases to (V_B + V), and the depletion layer widens. Majority flow is blocked; only a tiny reverse saturation current of minority carriers flows.",
        "si": "(i) පෙර නැඹුරුව (p ධන, n සෘණ): බාහිර ක්ෂේත්‍රය අභ්‍යන්තර බාධක ක්ෂේත්‍රයට විරුද්ධ වේ. විභව බාධකය (V_B - V) දක්වා අඩුවී ක්ෂය කලාපය පටු වේ. 0.7 V ඉක්මවූ විට විශාල පෙර ධාරාවක් ගලා යයි. (ii) පසු නැඹුරුව (p සෘණ, n ධන): බාහිර ක්ෂේත්‍රය අභ්‍යන්තර ක්ෂේත්‍රයට ආධාර කරයි. බාධකය (V_B + V) දක්වා වැඩිවී ක්ෂය කලාපය පළල් වේ. බහුතර ප්‍රවාහය අවහිර වන අතර සුළුතර වාහක නිසා කුඩා පසු සංතෘප්ත ධාරාවක් පමණක් ගලා යයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Forward bias: external voltage opposes barrier, narrowing depletion width",
            "si": "පෙර නැඹුරුව: බාධකය අඩුකර ක්ෂය කලාපය පටු කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Reverse bias: external voltage aids barrier, widening depletion width",
            "si": "පසු නැඹුරුව: බාධකය වැඩිකර ක්ෂය කලාපය පළල් කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies minority carrier origin of tiny reverse saturation current",
            "si": "කුඩා පසු සංතෘප්ත ධාරාව සුළුතර වාහක නිසා ඇතිවන බව"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Describe features of the complete I-V characteristic curve.",
        "si": "සම්පූර්ණ I-V ලාක්ෂණික වක්‍රයේ ලක්ෂණ විස්තර කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "The I-V curve features: (1) Forward region: Exponential rise in current once forward voltage exceeds the knee voltage V_k ≈ 0.7 V for silicon (0.3 V for Ge); measured in mA. (2) Reverse region: Tiny, almost voltage-independent reverse saturation current I_s (typically nA to μA). (3) Breakdown region: At a sufficiently high reverse voltage (breakdown voltage V_Z or V_BR), current increases dramatically, which can damage a normal diode by thermal runaway.",
        "si": "I-V වක්‍රයේ ලක්ෂණ: (1) පෙර කලාපය: සිලිකන් සඳහා 0.7 V (Ge සඳහා 0.3 V) දණහිස් වෝල්ටීයතාවය ඉක්මවූ පසු ධාරාව ඝාතීයව ඉහළ යාම (mA වලින්). (2) පසු කලාපය: වෝල්ටීයතාව මත රඳා නොපවතින කුඩා පසු සංතෘප්ත ධාරාව I_s (nA හෝ μA). (3) බිඳවැටුම් කලාපය: ප්‍රමාණවත් තරම් ඉහළ පසු වෝල්ටීයතාවයකදී (V_Z හෝ V_BR) ධාරාව ක්ෂණිකව විශාල ලෙස වැඩිවීම."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Forward knee voltage at ~0.7 V for Si with steep exponential current in mA",
            "si": "Si සඳහා 0.7 V දණහිස් වෝල්ටීයතාව හා mA වලින් ධාරාව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Reverse saturation current nearly constant at negligible microamps/nanoamps",
            "si": "නියත තරම් වන කුඩා පසු සංතෘප්ත ධාරාව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Sharp vertical breakdown at reverse breakdown voltage V_BR",
            "si": "බිඳවැටුම් වෝල්ටීයතාවයේදී තියුණු බිඳවැටීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Depletion region has immobile ions forming barrier V_B (~0.7 V for Si); forward bias shrinks it, reverse bias expands it; I-V shows knee at 0.7 V and sharp reverse breakdown.",
    "si": "ක්ෂය කලාපයේ අචල අයන මගින් 0.7 V බාධකයක් සාදයි; පෙර නැඹුරුවෙන් එය පටු වන අතර පසු නැඹුරුවෙන් පළල් වේ; I-V හි දණහිස 0.7 V දී ලැබේ."
  },
  "solution": {
    "en": "Depletion layer formed by diffusion and recombination of carriers, leaving fixed donor (+ve) and acceptor (-ve) ions. Forward bias reduces width (V_knee ≈ 0.7 V); reverse bias widens it until breakdown V_Z.",
    "si": "විසරණය හා ප්‍රතිසංයෝජනයෙන් අචල අයන සහිත ක්ෂය කලාපය සෑදේ. පෙර නැඹුරුවෙන් පළල අඩුවේ (දණහිස 0.7 V); පසු නැඹුරුවෙන් පළල වැඩිවේ."
  }
},
{
  "id": "elec9-sq03",
  "competencyRef": "Competency 9.1",
  "category": "pn-junction-diodes",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A Zener diode with breakdown voltage V_Z = 6.8 V and maximum rated power dissipation P_Zmax = 680 mW is used in a voltage regulator circuit. The DC input supply voltage V_in varies between 10.0 V and 16.0 V, and the circuit supplies a constant output to a load resistor R_L = 340 Ω. (a) Explain how a Zener diode maintains a constant terminal voltage in its reverse breakdown region. (b) Calculate the maximum safe Zener current I_Zmax and the load current I_L. (c) Determine the minimum and maximum allowable values of the series current-limiting resistor R_s to maintain regulation without exceeding P_Zmax (assume minimum required Zener current I_Zmin = 5.0 mA).",
    "si": "බිඳවැටුම් වෝල්ටීයතාව V_Z = 6.8 V සහ උපරිම ක්ෂමතා හානිය P_Zmax = 680 mW වන සීනර් ඩයෝඩයක් වෝල්ටීයතා නියාමක පරිපථයක භාවිත කරයි. සරල ධාරා ආදාන සැපයුම් වෝල්ටීයතාව V_in 10.0 V සිට 16.0 V දක්වා විචලනය වන අතර R_L = 340 Ω භාර ප්‍රතිරෝධකයකට නියත ප්‍රතිදානයක් සපයයි. (a) සීනර් ඩයෝඩය පසු බිඳවැටුම් කලාපයේදී නියත අග්‍රස්ථ වෝල්ටීයතාවයක් පවත්වා ගන්නේ කෙසේදැයි පහදන්න. (b) උපරිම ආරක්ෂිත සීනර් ධාරාව I_Zmax සහ භාර ධාරාව I_L ගණනය කරන්න. (c) P_Zmax ඉක්මවා නොයමින් නියාමනය පවත්වා ගැනීමට අවශ්‍ය ශ්‍රේණිගත සීමාකාරී ප්‍රතිරෝධකයේ R_s අවම සහ උපරිම අගයන් නිර්ණය කරන්න (අවම සීනර් ධාරාව I_Zmin = 5.0 mA)."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Explain voltage regulation principle of Zener diode in breakdown.",
        "si": "බිඳවැටුම් කලාපයේදී සීනර් ඩයෝඩයේ වෝල්ටීයතා නියාමන මූලධර්මය පහදන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "A Zener diode is heavily doped so that its reverse breakdown occurs at a sharp, well-defined breakdown voltage V_Z. In this breakdown region, the dynamic resistance ΔV / ΔI is virtually zero; that is, the terminal voltage remains almost perfectly constant at V_Z over a wide range of reverse currents. Any variation in input voltage or load current is absorbed as current variations through the Zener diode and voltage drops across the series resistor R_s.",
        "si": "සීනර් ඩයෝඩය තදින් මාත්‍රණය කර ඇති බැවින් එහි පසු බිඳවැටීම තියුණු නියත V_Z වෝල්ටීයතාවයකදී සිදුවේ. මෙම බිඳවැටුම් කලාපයේදී ඩයෝඩයේ ගතික ප්‍රතිරෝධය පාහේ ශුන්‍ය වේ; එනම් පුළුල් පසු ධාරා පරාසයක් පුරා අග්‍රස්ථ වෝල්ටීයතාව V_Z හි නියතව පවතී. ආදාන වෝල්ටීයතාවයේ හෝ භාර ධාරාවේ ඕනෑම විචලනයක් සීනර් ධාරාවේ වෙනස්වීම් සහ ශ්‍රේණිගත ප්‍රතිරෝධකයේ වෝල්ටීයතා බැස්ම මගින් අවශෝෂණය කර ගනී."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Operates in reverse breakdown where voltage is virtually constant despite large current changes",
            "si": "විශාල ධාරා වෙනස්වීම්වලදී වෝල්ටීයතාව නියතව පවතින පසු බිඳවැටුමේ ක්‍රියා කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Series resistor absorbs excess voltage fluctuations",
            "si": "ශ්‍රේණිගත ප්‍රතිරෝධකය මගින් අතිරික්ත වෝල්ටීයතා උච්චාවචන අවශෝෂණය"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate maximum Zener current I_Zmax and load current I_L.",
        "si": "උපරිම සීනර් ධාරාව I_Zmax සහ භාර ධාරාව I_L ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Maximum safe Zener current: I_Zmax = P_Zmax / V_Z = 680 mW / 6.8 V = 0.680 W / 6.8 V = 0.100 A = 100 mA. Load current through R_L = 340 Ω at regulated output V_out = V_Z = 6.8 V: I_L = V_Z / R_L = 6.8 V / 340 Ω = 0.020 A = 20 mA.",
        "si": "උපරිම සීනර් ධාරාව: I_Zmax = P_Zmax / V_Z = 680 mW / 6.8 V = 100 mA (0.10 A). භාර ධාරාව: I_L = V_Z / R_L = 6.8 / 340 = 0.020 A = 20 mA."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula I_Zmax = P_Zmax / V_Z",
            "si": "I_Zmax = P_Zmax / V_Z සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I_Zmax = 100 mA (0.10 A)",
            "si": "I_Zmax = 100 mA ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I_L = 20 mA (0.020 A)",
            "si": "I_L = 20 mA ගණනය කිරීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Determine minimum and maximum allowable values of R_s.",
        "si": "R_s හි අවම සහ උපරිම අනුමත අගයන් නිර්ණය කරන්න."
      },
      "allocatedMarks": 5,
      "modelAnswer": {
        "en": "Maximum R_s (worst-case lowest input V_in,min = 10.0 V, where Zener current is smallest I_Zmin = 5.0 mA): Total current I_total = I_Zmin + I_L = 5.0 mA + 20 mA = 25 mA = 0.025 A. Voltage across R_s is V_in,min - V_Z = 10.0 - 6.8 = 3.2 V. R_s,max = 3.2 V / 0.025 A = 128 Ω. Minimum R_s (worst-case highest input V_in,max = 16.0 V, where Zener current is largest and must not exceed I_Zmax = 100 mA): Total current I_total = I_Zmax + I_L = 100 mA + 20 mA = 120 mA = 0.120 A. Voltage across R_s is V_in,max - V_Z = 16.0 - 6.8 = 9.2 V. R_s,min = 9.2 V / 0.120 A = 76.7 Ω. Therefore, 76.7 Ω ≤ R_s ≤ 128 Ω (a standard 100 Ω resistor is ideal).",
        "si": "R_s,max (අවම ආදානය V_in = 10.0 V, I_Zmin = 5 mA): මුළු ධාරාව = 5 + 20 = 25 mA. R_s හරහා විභවය = 10.0 - 6.8 = 3.2 V. R_s,max = 3.2 / 0.025 = 128 Ω. R_s,min (උපරිම ආදානය V_in = 16.0 V, I_Zmax = 100 mA): මුළු ධාරාව = 100 + 20 = 120 mA. R_s හරහා විභවය = 16.0 - 6.8 = 9.2 V. R_s,min = 9.2 / 0.120 = 76.7 Ω. එබැවින් 76.7 Ω ≤ R_s ≤ 128 Ω."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Conditions for R_s,max: lowest input voltage and minimum Zener current",
            "si": "R_s,max සඳහා අවම ආදානය සහ අවම සීනර් ධාරාව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates R_s,max = 128 Ω",
            "si": "R_s,max = 128 Ω ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Conditions for R_s,min: highest input voltage and maximum safe Zener current",
            "si": "R_s,min සඳහා උපරිම ආදානය සහ උපරිම සීනර් ධාරාව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates R_s,min = 76.7 Ω",
            "si": "R_s,min = 76.7 Ω ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "States range 76.7 Ω ≤ R_s ≤ 128 Ω",
            "si": "76.7 Ω ≤ R_s ≤ 128 Ω පරාසය ප්‍රකාශ කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "V_out = V_Z = 6.8 V; I_L = V_Z / R_L = 20 mA; R_s,max = (V_in,min - V_Z)/(I_Zmin + I_L); R_s,min = (V_in,max - V_Z)/(I_Zmax + I_L).",
    "si": "V_out = 6.8 V; I_L = 20 mA; R_s,max = (V_in,min - V_Z)/(I_Zmin + I_L); R_s,min = (V_in,max - V_Z)/(I_Zmax + I_L)."
  },
  "solution": {
    "en": "I_Zmax = 100 mA; I_L = 20 mA. R_s,min = 76.7 Ω; R_s,max = 128 Ω. Safe operating range: 76.7 Ω to 128 Ω.",
    "si": "I_Zmax = 100 mA; I_L = 20 mA. R_s,min = 76.7 Ω; R_s,max = 128 Ω. ආරක්ෂිත පරාසය: 76.7 Ω සිට 128 Ω."
  }
},
{
  "id": "elec9-sq04",
  "competencyRef": "Competency 9.1",
  "category": "rectification-power-supplies",
  "difficulty": "intermediate",
  "type": "structured",
  "question": {
    "en": "A full-wave bridge rectifier circuit consists of four silicon diodes D₁, D₂, D₃, D₄ connected across the secondary winding of a step-down transformer delivering 12 V RMS at 50 Hz. The rectifier feeds a resistive load R_L = 100 Ω. (a) Sketch the circuit diagram of the full-wave bridge rectifier, clearly showing the 4 diodes, AC input, and load resistor. (b) Explain how the bridge rectifier produces unidirectional current through load R_L during both positive and negative half-cycles of the AC input. (c) Calculate: (i) the peak secondary voltage V_peak, (ii) the peak voltage across the load resistor (taking silicon diode forward drop V_d = 0.7 V each), (iii) the peak inverse voltage (PIV) rating required for each diode.",
    "si": "සම්පූර්ණ තරංග පාලම් සෘජුකාරක පරිපථයක් 50 Hz හිදී 12 V RMS සපයන බැස්සුම් ට්‍රාන්ස්ෆෝමරයක ද්විතීයික දඟරය හරහා සම්බන්ධ කර ඇති සිලිකන් ඩයෝඩ D₁, D₂, D₃, D₄ හතරකින් සමන්විත වේ. සෘජුකාරකය R_L = 100 Ω ප්‍රතිරෝධී භාරයකට සම්බන්ධ කර ඇත. (a) ඩයෝඩ 4, AC ආදානය සහ භාර ප්‍රතිරෝධකය පැහැදිලිව දක්වමින් පරිපථ සටහන අඳින්න. (b) AC ආදානයේ ධන සහ සෘණ යන අර්ධ චක්‍ර දෙකේදීම R_L හරහා එකම දිශාවට ධාරාවක් ගලා යන ආකාරය පහදන්න. (c) (i) ද්විතීයිකයේ උපරිම වෝල්ටීයතාව V_peak, (ii) එක් ඩයෝඩයක පෙර වෝල්ටීයතා බැස්ම 0.7 V බැගින් සලකා භාරය හරහා උපරිම වෝල්ටීයතාව, (iii) එක් එක් ඩයෝඩය සඳහා අවශ්‍ය උපරිම ප්‍රතිලෝම වෝල්ටීයතා (PIV) අගය ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Describe the circuit diagram of the bridge rectifier.",
        "si": "පාලම් සෘජුකාරකයේ පරිපථ සටහන විස්තර කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "The four diodes form a closed diamond/bridge network. D₁ and D₂ are connected in series-like pairs such that the AC input secondary terminals connect to two opposite nodes. The load resistor R_L is connected between the common cathode junction (positive DC terminal) and the common anode junction (negative DC terminal / ground).",
        "si": "ඩයෝඩ හතර රොම්බස්/පාලම් ආකාර ජාලයක් සාදයි. AC ආදාන අග්‍ර ප්‍රතිවිරුද්ධ සන්ධි දෙකකට සම්බන්ධ වේ. භාර ප්‍රතිරෝධකය R_L පොදු කැතෝඩ සන්ධිය (ධන DC අග්‍රය) සහ පොදු ඇනෝඩ සන්ධිය (සෘණ DC අග්‍රය) අතර සම්බන්ධ වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Bridge configuration of 4 diodes correctly oriented",
            "si": "ඩයෝඩ 4 පාලම් ආකාරයෙන් නිවැරදි දිශානතියෙන් යුක්ත වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "AC input connected to two opposite diagonal junctions",
            "si": "AC ආදානය ප්‍රතිවිරුද්ධ විකර්ණ සන්ධි දෙකට සම්බන්ධ වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "DC output taken across common cathodes (+ve) and common anodes (-ve)",
            "si": "DC ප්‍රතිදානය පොදු කැතෝඩ සහ පොදු ඇනෝඩ අතරින් ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain conduction during alternate half-cycles ensuring unidirectional load current.",
        "si": "ප්‍රත්‍යාවර්ත අර්ධ චක්‍රවලදී සන්නයනය සිදුවී භාරය හරහා ඒකදිශ ධාරාවක් ලැබෙන ආකාරය පහදන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "During the positive half-cycle, terminal A is positive relative to B: Diodes D₁ and D₃ are forward-biased, while D₂ and D₄ are reverse-biased. Current flows from A -> D₁ -> through R_L from top to bottom -> D₃ -> B. During the negative half-cycle, terminal B is positive relative to A: Diodes D₂ and D₄ are forward-biased, while D₁ and D₃ are reverse-biased. Current flows from B -> D₂ -> through R_L from top to bottom -> D₄ -> A. Since current flows through load R_L in the exact same direction during both half-cycles, full-wave unidirectional (rectified) DC is produced.",
        "si": "ධන අර්ධ චක්‍රයේදී (A ධන, B සෘණ): D₁ සහ D₃ පෙර නැඹුරු වන අතර D₂ සහ D₄ පසු නැඹුරු වේ. ධාරාව A -> D₁ -> R_L (ඉහළ සිට පහළට) -> D₃ -> B ඔස්සේ ගලා යයි. සෘණ අර්ධ චක්‍රයේදී (B ධන, A සෘණ): D₂ සහ D₄ පෙර නැඹුරු වන අතර D₁ සහ D₃ පසු නැඹුරු වේ. ධාරාව B -> D₂ -> R_L (ඉහළ සිට පහළට) -> D₄ -> A ඔස්සේ ගලා යයි. අර්ධ චක්‍ර දෙකේදීම R_L හරහා ධාරාව එකම දිශාවට ගලන බැවින් පූර්ණ තරංග ඒකදිශ DC ලැබේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies D₁ & D₃ conducting in positive half-cycle",
            "si": "ධන අර්ධයේ D₁ සහ D₃ සන්නයනය හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Identifies D₂ & D₄ conducting in negative half-cycle",
            "si": "සෘණ අර්ධයේ D₂ සහ D₄ සන්නයනය හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Demonstrates current passes through load in identical direction in both cycles",
            "si": "චක්‍ර දෙකේදීම භාරය හරහා එකම දිශාවට ධාරාව ගලන බව පෙන්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Concludes full-wave rectified DC output",
            "si": "පූර්ණ තරංග සෘජුකාරක ප්‍රතිදානයක් බව නිගමනය"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate peak secondary voltage, peak load voltage, and PIV rating.",
        "si": "ද්විතීයික උපරිම වෝල්ටීයතාව, භාර උපරිම වෝල්ටීයතාව, සහ PIV අගය ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(i) V_peak = V_rms × √2 = 12 V × 1.414 = 16.97 V ≈ 17.0 V. (ii) In a bridge rectifier, current passes through two conducting diodes in series at any instant. Peak load voltage: V_L,peak = V_peak - 2 V_d = 16.97 V - 2(0.7 V) = 16.97 - 1.40 = 15.57 V ≈ 15.6 V. (iii) In a bridge circuit, when two diodes conduct, the reverse voltage across each non-conducting diode is V_peak - V_d = 16.97 - 0.7 = 16.27 V ≈ 17.0 V. Hence, the required PIV rating is equal to peak secondary voltage V_peak ≈ 17.0 V.",
        "si": "(i) V_peak = 12 × √2 = 16.97 V ≈ 17.0 V. (ii) ඕනෑම මොහොතක ශ්‍රේණිගත ඩයෝඩ 2 ක් සන්නයනය වන බැවින්: V_L,peak = 16.97 - 2(0.7) = 15.57 V ≈ 15.6 V. (iii) එක් එක් ඩයෝඩය සඳහා අවශ්‍ය PIV අගය = V_peak ≈ 17.0 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "V_peak = 12 × √2 = 17.0 V",
            "si": "V_peak = 12 × √2 = 17.0 V ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Subtracts two diode drops 2(0.7 V) to get V_L,peak = 15.6 V",
            "si": "ඩයෝඩ බැස්ම 2 ක් අඩුකර V_L,peak = 15.6 V ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "PIV rating = V_peak ≈ 17.0 V",
            "si": "PIV අගය = 17.0 V බව හඳුනා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "V_peak = V_rms × √2; bridge rectifier drops two diode voltages (2 × 0.7 V); PIV per diode equals V_peak.",
    "si": "V_peak = V_rms × √2; පාලම් සෘජුකාරකයේ ඩයෝඩ දෙකක වෝල්ටීයතාව බැසයයි (1.4 V); PIV = V_peak."
  },
  "solution": {
    "en": "V_peak = 17.0 V; V_L,peak = 15.6 V; PIV = 17.0 V. Diodes conduct in diagonal pairs, yielding unidirectional DC.",
    "si": "V_peak = 17.0 V; V_L,peak = 15.6 V; PIV = 17.0 V. විකර්ණ යුගල ලෙස සන්නයනය වී ඒකදිශ DC ලබා දෙයි."
  }
},
{
  "id": "elec9-sq05",
  "competencyRef": "Competency 9.1",
  "category": "rectification-power-supplies",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A reservoir capacitor C = 1000 μF is connected in parallel with the load resistor R_L = 200 Ω of a 50 Hz full-wave rectifier to smooth the pulsating DC voltage. The peak rectified voltage is V_p = 15.0 V. (a) Explain how the reservoir capacitor smooths the pulsating output voltage. (b) What is the frequency of the ripple voltage in a full-wave rectifier operating on 50 Hz AC? (c) Estimate: (i) the DC load current I_dc, (ii) the peak-to-peak ripple voltage V_r using the approximation V_r ≈ I_dc / (2 f C), (iii) the average DC output voltage V_dc.",
    "si": "ස්පන්දන DC වෝල්ටීයතාව සුමට කිරීම සඳහා 50 Hz පූර්ණ තරංග සෘජුකාරකයක R_L = 200 Ω භාර ප්‍රතිරෝධකයට සමාන්තරගතව C = 1000 μF ධාරිත්‍රකයක් සම්බන්ධ කර ඇත. උපරිම සෘජුකෘත වෝල්ටීයතාව V_p = 15.0 V වේ. (a) ධාරිත්‍රකය මගින් ස්පන්දන ප්‍රතිදාන වෝල්ටීයතාව සුමට කරන්නේ කෙසේදැයි පහදන්න. (b) 50 Hz AC මගින් ක්‍රියාත්මක වන පූර්ණ තරංග සෘජුකාරකයක රැළිති වෝල්ටීයතාවයේ සංඛ්‍යාතය කොපමණද? (c) (i) DC භාර ධාරාව I_dc, (ii) V_r ≈ I_dc / (2 f C) ආසන්න කිරීම භාවිතයෙන් අග්‍රයෙන්-අග්‍රයට රැළිති වෝල්ටීයතාව V_r, (iii) සාමාන්‍ය DC ප්‍රතිදාන වෝල්ටීයතාව V_dc ඇස්තමේන්තු කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Explain the smoothing action of the reservoir capacitor.",
        "si": "ධාරිත්‍රකයේ සුමට කිරීමේ ක්‍රියාවලිය පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "When the rectified voltage rises to its peak V_p, the capacitor charges rapidly through the forward-biased diodes to V_p. As the input voltage falls past the peak, the diodes become reverse-biased and turn off. The capacitor then slowly discharges stored charge through the high-resistance load R_L with a long time constant τ = R_L C. Before the capacitor voltage drops significantly, the next voltage peak arrives, recharging the capacitor back to V_p. This drastically reduces voltage fluctuations, converting pulsating DC into steady DC with a small ripple.",
        "si": "සෘජුකෘත වෝල්ටීයතාව උපරිම V_p දක්වා ඉහළ යන විට ඩයෝඩ හරහා ධාරිත්‍රකය වේගයෙන් ආරෝපණය වේ. වෝල්ටීයතාව උපරිමය පසුකර බසින විට ඩයෝඩ පසු නැඹුරු වී විසන්ධි වේ. එවිට ධාරිත්‍රකය R_L භාරය හරහා τ = R_L C දිගු කාල නියතයකින් සෙමින් විසර්ජනය වේ. ධාරිත්‍රක වෝල්ටීයතාව සැලකිය යුතු ලෙස අඩුවීමට පෙර ඊළඟ වෝල්ටීයතා උපරිමය පැමිණ එය නැවත V_p දක්වා ආරෝපණය කරයි. එමගින් වෝල්ටීයතා උච්චාවචන විශාල ලෙස අඩුවී සුමට DC ලැබේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Capacitor charges rapidly to peak voltage V_p through conducting diodes",
            "si": "සන්නයනය වන ඩයෝඩ හරහා ධාරිත්‍රකය V_p දක්වා වේගයෙන් ආරෝපණය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Discharges slowly through load resistor R_L when diodes turn off",
            "si": "ඩයෝඩ විසන්ධි වූ විට R_L හරහා සෙමින් විසර්ජනය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Time constant R_L C >> period, maintaining voltage near peak",
            "si": "R_L C කාල නියතය විශාල බැවින් වෝල්ටීයතාව උපරිමය ආසන්නයේ රැඳීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "State the ripple frequency for a 50 Hz full-wave rectifier.",
        "si": "50 Hz පූර්ණ තරංග සෘජුකාරකයක රැළිති සංඛ්‍යාතය දක්වන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "In a full-wave rectifier, both positive and negative half-cycles of the AC input produce output pulses. Therefore, ripple frequency is double the input line frequency: f_ripple = 2 × f_in = 2 × 50 Hz = 100 Hz.",
        "si": "පූර්ණ තරංග සෘජුකාරකයක අර්ධ චක්‍ර දෙකෙන්ම ස්පන්දන නිපදවයි. එබැවින් රැළිති සංඛ්‍යාතය ආදාන සංඛ්‍යාතය මෙන් දෙගුණයක් වේ: f_ripple = 2 × 50 Hz = 100 Hz."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Identifies full-wave ripple frequency is double input frequency (2 f)",
            "si": "පූර්ණ තරංගයේ රැළිති සංඛ්‍යාතය දෙගුණයක් බව හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains f_ripple = 100 Hz",
            "si": "f_ripple = 100 Hz ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Estimate I_dc, ripple voltage V_r, and average DC voltage V_dc.",
        "si": "I_dc, රැළිති වෝල්ටීයතාව V_r, සහ සාමාන්‍ය DC වෝල්ටීයතාව V_dc ඇස්තමේන්තු කරන්න."
      },
      "allocatedMarks": 5,
      "modelAnswer": {
        "en": "(i) Approximate load current: I_dc ≈ V_p / R_L = 15.0 V / 200 Ω = 0.075 A = 75 mA. (ii) Peak-to-peak ripple voltage: V_r ≈ I_dc / (2 f C) = 0.075 A / [ 2 × 50 Hz × (1000 × 10⁻⁶ F) ] = 0.075 / [ 100 × 1.0 × 10⁻³ ] = 0.075 / 0.10 = 0.75 V. (iii) Average DC output voltage: V_dc = V_p - (V_r / 2) = 15.0 V - (0.75 V / 2) = 15.0 - 0.375 = 14.625 V ≈ 14.6 V.",
        "si": "(i) I_dc ≈ 15.0 / 200 = 0.075 A (75 mA). (ii) V_r ≈ I_dc / (2 f C) = 0.075 / (100 × 1000 × 10⁻⁶) = 0.075 / 0.10 = 0.75 V. (iii) සාමාන්‍ය DC වෝල්ටීයතාව V_dc = V_p - V_r/2 = 15.0 - 0.375 = 14.625 V ≈ 14.6 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Calculates I_dc ≈ 75 mA (0.075 A)",
            "si": "I_dc ≈ 75 mA ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula V_r ≈ I_dc / (2 f C)",
            "si": "V_r ≈ I_dc / (2 f C) සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates peak-to-peak ripple V_r = 0.75 V",
            "si": "රැළිති වෝල්ටීයතාව V_r = 0.75 V ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula V_dc = V_p - V_r / 2",
            "si": "V_dc = V_p - V_r / 2 සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates average V_dc = 14.6 V",
            "si": "සාමාන්‍ය V_dc = 14.6 V ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "In 50 Hz full-wave, ripple frequency is 100 Hz; V_r ≈ I_dc / (2 f C); V_dc = V_p - V_r / 2.",
    "si": "50 Hz පූර්ණ තරංගයේ රැළිති සංඛ්‍යාතය 100 Hz වේ; V_r ≈ I_dc / (2 f C); V_dc = V_p - V_r / 2."
  },
  "solution": {
    "en": "f_ripple = 100 Hz; I_dc = 75 mA; V_r = 0.75 V; V_dc = 14.6 V. Smoothing capacitor discharges through load between peaks.",
    "si": "f_ripple = 100 Hz; I_dc = 75 mA; V_r = 0.75 V; V_dc = 14.6 V. ධාරිත්‍රකය උපරිම අතරතුර භාරය හරහා සෙමින් විසර්ජනය වේ."
  }
},
{
  "id": "elec9-sq06",
  "competencyRef": "Competency 9.2",
  "category": "bjt-amplifiers",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A bipolar junction transistor (BJT) can operate in three distinct regions: cutoff, active, and saturation. (a) For an npn transistor, state the bias conditions (forward or reverse) of: (i) the base-emitter (BE) junction, (ii) the collector-base (CB) junction in: Active region, Cutoff region, Saturation region. (b) Explain how an npn transistor operates as an electronic switch. (c) A transistor switch has collector supply V_CC = 10.0 V, collector resistor R_C = 1.0 kΩ, and current gain β = 50. When turned fully ON in saturation (V_CE(sat) = 0.2 V), calculate: (i) the saturation collector current I_C(sat), (ii) the minimum base current I_B(min) required to ensure saturation.",
    "si": "ද්විධ්‍රැව සන්ධි ට්‍රාන්සිස්ටරයකට (BJT) කලාප තුනක ක්‍රියා කළ හැක: කපාහැරුම්, සක්‍රීය, සහ සංතෘප්ත. (a) npn ට්‍රාන්සිස්ටරයක් සඳහා (i) පාදම-විමෝචක (BE) සන්ධියේ සහ (ii) සංග්‍රාහක-පාදම (CB) සන්ධියේ නැඹුරුතා තත්ත්වයන් (පෙර හෝ පසු) දක්වන්න: සක්‍රීය කලාපය, කපාහැරුම් කලාපය, සංතෘප්ත කලාපය. (b) npn ට්‍රාන්සිස්ටරයක් විද්‍යුත් ස්විචයක් ලෙස ක්‍රියා කරන ආකාරය පහදන්න. (c) ට්‍රාන්සිස්ටර ස්විචයක සංග්‍රාහක සැපයුම V_CC = 10.0 V, සංග්‍රාහක ප්‍රතිරෝධය R_C = 1.0 kΩ, සහ ධාරා ලාභය β = 50 වේ. සංතෘප්තව සම්පූර්ණයෙන්ම ON වූ විට (V_CE(sat) = 0.2 V): (i) සංතෘප්ත සංග්‍රාහක ධාරාව I_C(sat), (ii) සංතෘප්තතාවය සහතික කිරීමට අවශ්‍ය අවම පාදම ධාරාව I_B(min) ගණනය කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State junction bias conditions for Active, Cutoff, and Saturation regions.",
        "si": "සක්‍රීය, කපාහැරුම්, සහ සංතෘප්ත කලාප සඳහා සන්ධි නැඹුරුතා දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "(1) Active region: BE junction is Forward-biased; CB junction is Reverse-biased (used for linear amplification). (2) Cutoff region: BE junction is Reverse-biased (or zero bias); CB junction is Reverse-biased (transistor is OFF). (3) Saturation region: BE junction is Forward-biased; CB junction is Forward-biased (transistor is fully ON).",
        "si": "(1) සක්‍රීය කලාපය: BE සන්ධිය පෙර නැඹුරු; CB සන්ධිය පසු නැඹුරු (විස්තාරණය සඳහා). (2) කපාහැරුම් කලාපය: BE සන්ධිය පසු නැඹුරු; CB සන්ධිය පසු නැඹුරු (ස්විචය OFF). (3) සංතෘප්ත කලාපය: BE සන්ධිය පෙර නැඹුරු; CB සන්ධිය පෙර නැඹුරු (ස්විචය සම්පූර්ණයෙන් ON)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Active: BE forward, CB reverse",
            "si": "සක්‍රීය: BE පෙර, CB පසු"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Cutoff: BE reverse/zero, CB reverse",
            "si": "කපාහැරුම්: BE පසු/0, CB පසු"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Saturation: BE forward, CB forward",
            "si": "සංතෘප්ත: BE පෙර, CB පෙර"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain how the transistor operates as a digital switch (OFF vs ON states).",
        "si": "ට්‍රාන්සිස්ටරය ඩිජිටල් ස්විචයක් ලෙස ක්‍රියා කරන ආකාරය පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "OFF State: When input base voltage V_in is 0 V (below 0.7 V), I_B = 0. The transistor is in Cutoff: no collector current flows (I_C = 0), and output voltage V_out = V_CE = V_CC (open switch). ON State: When a sufficiently large positive voltage is applied to the base, a large base current I_B drives the transistor into Saturation. Collector-emitter voltage drops to V_CE(sat) ≈ 0.2 V (closed switch), and maximum collector current flows limited only by external resistor R_C.",
        "si": "OFF තත්ත්වය: ආදාන පාදම වෝල්ටීයතාව 0 V (0.7 V ට අඩු) විට I_B = 0 වේ. ට්‍රාන්සිස්ටරය කපාහැරුම් කලාපයේ පවතී: I_C = 0 වන අතර V_out = V_CE = V_CC වේ (විවෘත ස්විචයක්). ON තත්ත්වය: පාදමට ප්‍රමාණවත් ධන වෝල්ටීයතාවයක් යෙදූ විට විශාල I_B ධාරාවක් මගින් ට්‍රාන්සිස්ටරය සංතෘප්තියට පත් කරයි. V_CE(sat) ≈ 0.2 V දක්වා පහත වැටෙන අතර (සංවෘත ස්විචයක්) R_C මගින් සීමා වන උපරිම සංග්‍රාහක ධාරාවක් ගලා යයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Zero base drive puts transistor into cutoff (I_C = 0, V_CE = V_CC, open switch)",
            "si": "පාදම ධාරාව 0 විට කපාහැරුම් (I_C = 0, V_CE = V_CC, විවෘත ස්විචය)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "High base drive drives transistor into saturation (V_CE ≈ 0.2 V, closed switch)",
            "si": "ඉහළ පාදම ධාරාව සංතෘප්ත කරයි (V_CE ≈ 0.2 V, සංවෘත ස්විචය)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Switching transitions rapidly between cutoff and saturation",
            "si": "කපාහැරුම් සහ සංතෘප්ත අතර සීඝ්‍ර සංක්‍රාන්තිය"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate saturation current I_C(sat) and minimum base current I_B(min).",
        "si": "සංතෘප්ත ධාරාව I_C(sat) සහ අවම පාදම ධාරාව I_B(min) ගණනය කරන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) In saturation: V_CE = V_CE(sat) = 0.2 V. Collector current I_C(sat) = (V_CC - V_CE(sat)) / R_C = (10.0 V - 0.2 V) / 1000 Ω = 9.8 V / 1000 Ω = 9.8 × 10⁻³ A = 9.8 mA. (ii) At the edge of saturation: I_C = β I_B => I_B(min) = I_C(sat) / β = 9.8 mA / 50 = 0.196 mA = 196 μA. To guarantee solid overdrive into saturation, designers typically choose I_B ≥ 2 to 3 times I_B(min).",
        "si": "(i) සංතෘප්තියේදී: I_C(sat) = (V_CC - V_CE(sat)) / R_C = (10.0 - 0.2) / 1000 = 9.8 mA. (ii) I_B(min) = I_C(sat) / β = 9.8 mA / 50 = 0.196 mA (196 μA)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula I_C(sat) = (V_CC - V_CE(sat)) / R_C",
            "si": "I_C(sat) = (V_CC - V_CE(sat)) / R_C සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I_C(sat) = 9.8 mA",
            "si": "I_C(sat) = 9.8 mA ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Formula I_B(min) = I_C(sat) / β",
            "si": "I_B(min) = I_C(sat) / β සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Calculates I_B(min) = 196 μA (0.196 mA)",
            "si": "I_B(min) = 196 μA ලබා ගැනීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "Cutoff: BE reverse, CB reverse (OFF); Saturation: BE forward, CB forward (ON); I_C(sat) = (V_CC - V_CE(sat))/R_C; I_B(min) = I_C(sat)/β.",
    "si": "කපාහැරුම්: BE පසු, CB පසු (OFF); සංතෘප්ත: BE පෙර, CB පෙර (ON); I_C(sat) = (V_CC - V_CE(sat))/R_C; I_B(min) = I_C(sat)/β."
  },
  "solution": {
    "en": "Active: BE forward, CB reverse. Cutoff: both reverse. Saturation: both forward. I_C(sat) = 9.8 mA; I_B(min) = 196 μA.",
    "si": "සක්‍රීය: BE පෙර, CB පසු. කපාහැරුම්: දෙකම පසු. සංතෘප්ත: දෙකම පෙර. I_C(sat) = 9.8 mA; I_B(min) = 196 μA."
  }
},
{
  "id": "elec9-sq07",
  "competencyRef": "Competency 9.2",
  "category": "bjt-amplifiers",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "A common-emitter (CE) voltage amplifier circuit is powered by a single supply V_CC = 12.0 V with a collector resistor R_C = 2.0 kΩ. The transistor has current gain β = 100, and is biased in the active region at a quiescent collector current I_CQ = 3.0 mA. (a) Draw the DC load line on the output characteristics (I_C vs V_CE) identifying the saturation point, cutoff point, and Q-point coordinates. (b) Calculate the quiescent collector-emitter voltage V_CEQ at this operating point. (c) Explain why the output AC voltage waveform is 180° out of phase with the input AC voltage signal in a common-emitter amplifier.",
    "si": "පොදු විමෝචක (CE) වෝල්ටීයතා විස්තාරක පරිපථයක් V_CC = 12.0 V තනි සැපයුමකින් සහ R_C = 2.0 kΩ සංග්‍රාහක ප්‍රතිරෝධකයකින් බලගන්වා ඇත. ට්‍රාන්සිස්ටරයේ ධාරා ලාභය β = 100 වන අතර සක්‍රීය කලාපයේ නිශ්චල සංග්‍රාහක ධාරාව I_CQ = 3.0 mA වන සේ නැඹුරු කර ඇත. (a) ප්‍රතිදාන ලාක්ෂණික මත DC භාර රේඛාව ඇඳ සංතෘප්ත ලක්ෂ්‍යය, කපාහැරුම් ලක්ෂ්‍යය, සහ Q-ලක්ෂ්‍යයේ ඛණ්ඩාංක දක්වන්න. (b) මෙම ක්‍රියාකාරී ලක්ෂ්‍යයේදී නිශ්චල සංග්‍රාහක-විමෝචක වෝල්ටීයතාව V_CEQ ගණනය කරන්න. (c) පොදු විමෝචක විස්තාරකයක ප්‍රතිදාන AC වෝල්ටීයතා තරංගය ආදාන AC වෝල්ටීයතා සංඥාව සමග 180° කින් කලාවෙන් පිටස්තර වන්නේ මන්දැයි පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Identify endpoints of DC load line and Q-point.",
        "si": "DC භාර රේඛාවේ අන්ත ලක්ෂ්‍ය සහ Q-ලක්ෂ්‍යය හඳුනාගන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "The DC load line equation is V_CE = V_CC - I_C R_C. (1) Cutoff point (vertical axis I_C = 0): V_CE = V_CC = 12.0 V. Coordinates: (12.0 V, 0 mA). (2) Saturation point (horizontal axis V_CE = 0): I_C(sat) = V_CC / R_C = 12.0 V / 2000 Ω = 6.0 mA. Coordinates: (0 V, 6.0 mA). The DC load line is a straight line connecting (12 V, 0 mA) and (0 V, 6 mA). The Q-point lies on this line at I_CQ = 3.0 mA, which is exactly midway on the load line.",
        "si": "DC භාර රේඛා සමීකරණය: V_CE = V_CC - I_C R_C. (1) කපාහැරුම් ලක්ෂ්‍යය (I_C = 0): V_CE = V_CC = 12.0 V. ඛණ්ඩාංක: (12.0 V, 0 mA). (2) සංතෘප්ත ලක්ෂ්‍යය (V_CE = 0): I_C(sat) = 12.0 / 2000 = 6.0 mA. ඛණ්ඩාංක: (0 V, 6.0 mA). භාර රේඛාව මෙම ලක්ෂ්‍ය දෙක යා කරන සරල රේඛාවකි. Q-ලක්ෂ්‍යය I_CQ = 3.0 mA හිදී භාර රේඛාවේ මධ්‍යයේ පිහිටයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Load line equation V_CE = V_CC - I_C R_C",
            "si": "භාර රේඛා සමීකරණය V_CE = V_CC - I_C R_C"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Cutoff point at V_CE = 12.0 V, I_C = 0",
            "si": "කපාහැරුම් ලක්ෂ්‍යය (12.0 V, 0)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Saturation point at V_CE = 0, I_C = 6.0 mA",
            "si": "සංතෘප්ත ලක්ෂ්‍යය (0, 6.0 mA)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Q-point marked at I_CQ = 3.0 mA (centre of line)",
            "si": "Q-ලක්ෂ්‍යය I_CQ = 3.0 mA හි ලකුණු කිරීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate quiescent collector-emitter voltage V_CEQ.",
        "si": "නිශ්චල සංග්‍රාහක-විමෝචක වෝල්ටීයතාව V_CEQ ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "V_CEQ = V_CC - I_CQ R_C = 12.0 V - (3.0 × 10⁻³ A × 2000 Ω) = 12.0 V - 6.0 V = 6.0 V. Coordinates of Q-point: (6.0 V, 3.0 mA).",
        "si": "V_CEQ = V_CC - I_CQ R_C = 12.0 - (3.0 × 10⁻³ × 2000) = 12.0 - 6.0 = 6.0 V. Q-ලක්ෂ්‍යයේ ඛණ්ඩාංක: (6.0 V, 3.0 mA)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Formula V_CEQ = V_CC - I_CQ R_C",
            "si": "V_CEQ = V_CC - I_CQ R_C සූත්‍රය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Drop across R_C is 6.0 V",
            "si": "R_C හරහා විභවය 6.0 V වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains V_CEQ = 6.0 V",
            "si": "V_CEQ = 6.0 V ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Explain why the CE amplifier produces 180° phase inversion.",
        "si": "CE විස්තාරකය 180° කලා ප්‍රතිවර්තනයක් ඇති කරන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "When the input AC signal goes positive, the forward bias V_BE increases, causing base current i_b to increase. Collector current increases by Δi_c = β Δi_b. The increased collector current produces a larger voltage drop across the collector resistor: ΔV_RC = Δi_c × R_C. Since output voltage is V_out = V_CC - i_c R_C, as i_c increases, V_out DECREASES (swings negative). Conversely, during the negative input half-cycle, i_c decreases, causing V_out to rise (swings positive). Therefore, output voltage is precisely 180° out of phase with input voltage.",
        "si": "ආදාන AC සංඥාව ධන වන විට BE පෙර නැඹුරුව වැඩි වී පාදම ධාරාව i_b වැඩිවේ. සංග්‍රාහක ධාරාව Δi_c = β Δi_b ප්‍රමාණයකින් වැඩිවේ. එමගින් R_C හරහා වෝල්ටීයතා බැස්ම i_c R_C වැඩිවේ. V_out = V_CC - i_c R_C බැවින් i_c වැඩිවන විට V_out අඩුවේ (සෘණ දෙසට යයි). සෘණ අර්ධයේදී i_c අඩුවන බැවින් V_out වැඩිවේ (ධන දෙසට යයි). එබැවින් ප්‍රතිදාන වෝල්ටීයතාව ආදානය සමග 180° කින් කලාවෙන් පිටස්තර වේ."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Positive input swing increases base and collector current",
            "si": "ධන ආදානයෙන් පාදම හා සංග්‍රාහක ධාරා වැඩිවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Increased I_C produces larger voltage drop across R_C",
            "si": "I_C වැඩිවීමෙන් R_C හරහා බැස්ම වැඩිවීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V_out = V_CC - I_C R_C decreases, creating 180° phase inversion",
            "si": "V_out = V_CC - I_C R_C අඩුවීමෙන් 180° කලා පෙරළියක් ඇතිවීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "DC load line connects (V_CC, 0) and (0, V_CC/R_C); V_CEQ = V_CC - I_CQ R_C; 180° phase shift occurs because V_out = V_CC - I_C R_C falls when I_C rises.",
    "si": "DC භාර රේඛාව (V_CC, 0) සහ (0, V_CC/R_C) යා කරයි; V_CEQ = V_CC - I_CQ R_C; V_out = V_CC - I_C R_C නිසා 180° කලා පෙරළියක් ඇතිවේ."
  },
  "solution": {
    "en": "Cutoff at 12 V, saturation at 6 mA. V_CEQ = 6.0 V at Q-point (6V, 3mA). 180° inversion arises because higher input current increases I_C R_C drop, lowering V_out.",
    "si": "කපාහැරුම 12 V, සංතෘප්තිය 6 mA. Q-ලක්ෂ්‍යය (6V, 3mA). ධන ආදානයෙන් I_C R_C වැඩිවී V_out අඩුවන නිසා 180° කලා පෙරළියක් ලැබේ."
  }
},
{
  "id": "elec9-sq08",
  "competencyRef": "Competency 9.3",
  "category": "operational-amplifiers",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "An operational amplifier (Op-Amp) is configured as an inverting amplifier using input resistor R_in = 10.0 kΩ and feedback resistor R_f = 100.0 kΩ powered by ±15.0 V dual power supplies. (a) State three ideal characteristics of an operational amplifier. (b) Explain the concept of \"virtual ground\" and derive the closed-loop voltage gain formula A_v = -R_f / R_in. (c) If an input signal V_in = +1.2 V is applied, calculate the output voltage V_out. If V_in is increased to +2.0 V, what is the output voltage? Explain your answer.",
    "si": "ආදාන ප්‍රතිරෝධකය R_in = 10.0 kΩ සහ ප්‍රතිපෝෂණ ප්‍රතිරෝධකය R_f = 100.0 kΩ සහිතව ±15.0 V ද්විත්ව බල සැපයුමකින් ක්‍රියාත්මක වන පරිපූර්ණ ක්‍රියාකාරී විස්තාරකයක් (Op-Amp) ප්‍රතිලෝම විස්තාරකයක් ලෙස සකසා ඇත. (a) ක්‍රියාකාරී විස්තාරකයක පරිපූර්ණ ලක්ෂණ තුනක් දක්වන්න. (b) \"අතථ්‍ය භූගතය\" (virtual ground) සංකල්පය පැහැදිලි කර සංවෘත ලූප වෝල්ටීයතා ලාභය සඳහා A_v = -R_f / R_in සූත්‍රය ගොඩනගන්න. (c) ආදාන සංඥාව V_in = +1.2 V වූ විට ප්‍රතිදාන වෝල්ටීයතාව V_out ගණනය කරන්න. V_in අගය +2.0 V දක්වා වැඩි කළහොත් ප්‍රතිදාන වෝල්ටීයතාව කුමක් වේදැයි පැහැදිලි කරන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "State three ideal Op-Amp characteristics.",
        "si": "පරිපූර්ණ Op-Amp ලක්ෂණ තුනක් දක්වන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Ideal Op-Amp characteristics: (1) Infinite open-loop voltage gain (A_OL = ∞), (2) Infinite input impedance / resistance (R_in = ∞, drawing zero input current into terminals), (3) Zero output impedance / resistance (R_out = 0), (4) Infinite bandwidth, (5) Zero offset voltage (V_out = 0 when V_+ = V_-).",
        "si": "පරිපූර්ණ Op-Amp ලක්ෂණ: (1) අනන්ත විවෘත ලූප වෝල්ටීයතා ලාභය (A_OL = ∞), (2) අනන්ත ආදාන ප්‍රතිබාධනය (R_in = ∞, අග්‍ර තුළට ධාරාවක් නොගනී), (3) ශුන්‍ය ප්‍රතිදාන ප්‍රතිබාධනය (R_out = 0), (4) අනන්ත කලාප පළල, (5) ශුන්‍ය ඕෆ්සෙට් වෝල්ටීයතාව."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Infinite open-loop gain A_OL = ∞",
            "si": "අනන්ත විවෘත ලූප ලාභය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Infinite input impedance (zero input current)",
            "si": "අනන්ත ආදාන ප්‍රතිබාධනය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Zero output impedance",
            "si": "ශුන්‍ය ප්‍රතිදාන ප්‍රතිබාධනය"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain virtual ground and derive A_v = -R_f / R_in.",
        "si": "අතථ්‍ය භූගතය පැහැදිලි කර A_v = -R_f / R_in ගොඩනගන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Virtual ground: With non-inverting terminal grounded (V_+ = 0 V), the open-loop relationship is V_out = A_OL (V_+ - V_-). Because A_OL is virtually infinite (~10⁵ to 10⁶), for finite output voltage V_out, the differential input (V_+ - V_-) = V_out / A_OL ≈ 0. Therefore, V_- ≈ V_+ = 0 V. The inverting terminal is held at 0 V potential without being physically connected to ground, hence called a \"virtual ground\". Derivation: Due to infinite input impedance, zero current enters the inverting terminal. By Kirchhoff's Current Law at the inverting node: I_in = I_f => (V_in - V_-) / R_in = (V_- - V_out) / R_f. Since V_- = 0 V: V_in / R_in = -V_out / R_f => V_out = -(R_f / R_in) V_in => A_v = V_out / V_in = -R_f / R_in.",
        "si": "අතථ්‍ය භූගතය: V_+ = 0 V (භූගත) විට, V_out = A_OL(V_+ - V_-) වේ. A_OL අනන්ත බැවින් V_out සන්තතික වීමට නම් V_+ - V_- ≈ 0 විය යුතුය. එබැවින් V_- ≈ 0 V වේ. භෞතිකව භූගත නොවී 0 V විභවයේ පැවතීම අතථ්‍ය භූගතයයි. ව්‍යුත්පන්නය: අග්‍ර තුළට ධාරාවක් නොයන බැවින් I_in = I_f වේ. (V_in - 0)/R_in = (0 - V_out)/R_f => V_out / V_in = -R_f / R_in."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Virtual ground: V_- held at 0 V because V_+ = 0 and differential input is negligible (A_OL = ∞)",
            "si": "අතථ්‍ය භූගතය: A_OL අනන්ත බැවින් V_- = 0 V වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Current into terminal is zero (R_in = ∞)",
            "si": "අග්‍රය තුළට ධාරාව ශුන්‍ය වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "KCL equation: (V_in - 0)/R_in = (0 - V_out)/R_f",
            "si": "KCL සමීකරණය: V_in/R_in = -V_out/R_f"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Derives A_v = -R_f / R_in",
            "si": "A_v = -R_f / R_in ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Calculate V_out for V_in = +1.2 V and for V_in = +2.0 V, explaining saturation clipping.",
        "si": "V_in = +1.2 V සහ +2.0 V සඳහා V_out ගණනය කර සංතෘප්ත කප්පාදුව පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Gain A_v = -R_f / R_in = -100.0 kΩ / 10.0 kΩ = -10. (1) For V_in = +1.2 V: V_out = A_v × V_in = -10 × (+1.2 V) = -12.0 V. Since |-12.0 V| is within the ±15.0 V supply rails, the output is -12.0 V. (2) For V_in = +2.0 V: Theoretical output would be -10 × (+2.0 V) = -20.0 V. However, an Op-Amp cannot output a voltage outside its supply rails. The output clips (saturates) at the negative supply rail, so V_out ≈ -14.0 V (or -15.0 V for rail-to-rail Op-Amp).",
        "si": "ලාභය A_v = -100 / 10 = -10. (1) V_in = +1.2 V විට: V_out = -10 × 1.2 = -12.0 V (±15 V සීමාව තුළ ඇති බැවින් පිළිතුර -12.0 V). (2) V_in = +2.0 V විට: සෛද්ධාන්තිකව -20.0 V වුවද Op-Amp ප්‍රතිදානය සැපයුම් රේල් පීලි සීමාව ඉක්මවා යා නොහැක. එය සෘණ සැපයුම් වෝල්ටීයතාවයේදී සංතෘප්ත (කප්පාදු) වේ: V_out ≈ -14.0 V (හෝ -15.0 V)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Calculates gain A_v = -10",
            "si": "ලාභය A_v = -10 ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "V_out = -12.0 V for V_in = +1.2 V",
            "si": "+1.2 V ආදානයට V_out = -12.0 V"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Explains saturation clipping at negative supply rail (~ -14 V to -15 V) for +2.0 V input",
            "si": "+2.0 V ආදානයට සෘණ රේලයේදී (-14 V හෝ -15 V) සංතෘප්ත කප්පාදුව පැහැදිලි කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "A_v = -R_f / R_in = -10; V_- is at virtual ground (0 V); output cannot exceed supply voltage rails (±15 V).",
    "si": "A_v = -R_f / R_in = -10; V_- අතථ්‍ය භූගතයේ (0 V) පවතී; ප්‍රතිදානය සැපයුම් සීමාව (±15 V) ඉක්මවිය නොහැක."
  },
  "solution": {
    "en": "A_v = -10. For V_in = +1.2 V, V_out = -12.0 V. For V_in = +2.0 V, V_out saturates at -14 V to -15 V (supply rail clipping).",
    "si": "A_v = -10. V_in = +1.2 V විට V_out = -12.0 V. V_in = +2.0 V විට -14 V සිට -15 V දක්වා සංතෘප්ත වේ."
  }
},
{
  "id": "elec9-sq09",
  "competencyRef": "Competency 9.3",
  "category": "operational-amplifiers",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "An operational amplifier is connected as a non-inverting amplifier with feedback resistor R_f = 90.0 kΩ and ground resistor R_1 = 10.0 kΩ. (a) Derive the closed-loop voltage gain formula A_v = 1 + R_f / R_1. (b) Calculate the voltage gain and the output voltage when an input signal V_in = 0.50 V is applied. (c) A voltage follower (buffer) is constructed by setting R_f = 0 and removing R_1 (R_1 = ∞). State its voltage gain and explain why this circuit is widely used in electronic measuring instruments.",
    "si": "ප්‍රතිපෝෂණ ප්‍රතිරෝධකය R_f = 90.0 kΩ සහ භූගත ප්‍රතිරෝධකය R_1 = 10.0 kΩ සහිතව ක්‍රියාකාරී විස්තාරකයක් අප්‍රතිලෝම විස්තාරකයක් ලෙස සම්බන්ධ කර ඇත. (a) සංවෘත ලූප වෝල්ටීයතා ලාභය සඳහා A_v = 1 + R_f / R_1 සූත්‍රය ගොඩනගන්න. (b) ආදාන සංඥාව V_in = 0.50 V යෙදූ විට වෝල්ටීයතා ලාභය සහ ප්‍රතිදාන වෝල්ටීයතාව ගණනය කරන්න. (c) R_f = 0 සහ R_1 = ∞ කරමින් වෝල්ටීයතා අනුගාමකයක් (බෆරයක්) සාදනු ලැබේ. එහි වෝල්ටීයතා ලාභය දක්වා විද්‍යුත් මිනුම් උපකරණවල මෙම පරිපථය බහුලව භාවිත කරන්නේ මන්දැයි පහදන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Derive non-inverting gain A_v = 1 + R_f / R_1.",
        "si": "අප්‍රතිලෝම ලාභය A_v = 1 + R_f / R_1 ගොඩනගන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "Input V_in is applied to non-inverting terminal (+): V_+ = V_in. With high open-loop gain and negative feedback, virtual short condition holds: V_- = V_+ = V_in. Resistors R_1 and R_f form a potential divider across V_out: V_- = V_out × [ R_1 / (R_1 + R_f) ]. Equating gives: V_in = V_out × [ R_1 / (R_1 + R_f) ] => V_out / V_in = (R_1 + R_f) / R_1 = 1 + R_f / R_1. Alternatively, by KCL at the inverting node: (0 - V_-) / R_1 = (V_- - V_out) / R_f => -V_in / R_1 = (V_in - V_out) / R_f => V_out = V_in (1 + R_f / R_1).",
        "si": "V_+ = V_in. අතථ්‍ය සමානතාව නිසා: V_- = V_+ = V_in. R_1 සහ R_f මගින් විභව බෙදුමක් සාදයි: V_- = V_out [R_1 / (R_1 + R_f)]. V_in = V_out [R_1 / (R_1 + R_f)] => V_out / V_in = (R_1 + R_f) / R_1 = 1 + R_f / R_1."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Virtual short condition V_- = V_+ = V_in",
            "si": "අතථ්‍ය සමානතාව V_- = V_+ = V_in"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Potential divider relation at inverting terminal",
            "si": "අප්‍රතිලෝම අග්‍රයේ විභව බෙදුම් සම්බන්ධය"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Equating and rearranging for V_out / V_in",
            "si": "සමාන කර V_out / V_in ලබා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains A_v = 1 + R_f / R_1",
            "si": "A_v = 1 + R_f / R_1 ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Calculate voltage gain and output voltage for V_in = 0.50 V.",
        "si": "V_in = 0.50 V සඳහා වෝල්ටීයතා ලාභය සහ ප්‍රතිදාන වෝල්ටීයතාව ගණනය කරන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "Voltage gain A_v = 1 + (90.0 kΩ / 10.0 kΩ) = 1 + 9.0 = 10.0 (in-phase, non-inverted). Output voltage: V_out = A_v × V_in = 10.0 × 0.50 V = +5.0 V.",
        "si": "වෝල්ටීයතා ලාභය A_v = 1 + (90 / 10) = 1 + 9 = 10.0. ප්‍රතිදාන වෝල්ටීයතාව V_out = 10.0 × 0.50 V = +5.0 V."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Calculates gain A_v = 10.0",
            "si": "ලාභය A_v = 10.0 ගණනය කිරීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Notes non-inverted positive output",
            "si": "ධන අප්‍රතිලෝම ප්‍රතිදානය හඳුනා ගැනීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Obtains V_out = +5.0 V",
            "si": "V_out = +5.0 V ලබා ගැනීම"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "State gain of voltage follower and explain its function as an impedance buffer.",
        "si": "වෝල්ටීයතා අනුගාමකයේ ලාභය දක්වා ප්‍රතිබාධන බෆරයක් ලෙස එහි කාර්යය පහදන්න."
      },
      "allocatedMarks": 3,
      "modelAnswer": {
        "en": "For a voltage follower: A_v = 1 + 0 = 1.0 (unity gain, V_out = V_in). Practical importance: It has extremely high input impedance (draws virtually zero current from the signal source) and very low output impedance (can supply substantial current to a low-resistance load). It acts as an IMPEDANCE BUFFER / ISOLATOR, preventing loading of high-impedance sensors or potential dividers without altering the voltage signal.",
        "si": "වෝල්ටීයතා අනුගාමකයේ ලාභය A_v = 1.0 වේ (V_out = V_in). ප්‍රායෝගික වැදගත්කම: එයට අතිශය ඉහළ ආදාන ප්‍රතිබාධනයක් (ප්‍රභවයෙන් ධාරාවක් නොගනී) සහ ඉතා අඩු ප්‍රතිදාන ප්‍රතිබාධනයක් (භාරයට ධාරාව සපයයි) ඇත. එය ප්‍රතිබාධන බෆරයක් ලෙස ක්‍රියා කර සංඥා වෝල්ටීයතාව වෙනස් නොකර ඉහළ ප්‍රතිරෝධී සංවේදකවල පූරණ දෝෂ වළක්වයි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "States unity voltage gain A_v = 1.0",
            "si": "ඒකක වෝල්ටීයතා ලාභය A_v = 1.0"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Extremely high input impedance avoids loading high-resistance sources",
            "si": "ඉහළ ආදාන ප්‍රතිබාධනයෙන් පූරණ දෝෂ වැළැක්වීම"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Low output impedance allows driving low-resistance loads as a buffer",
            "si": "අඩු ප්‍රතිදාන ප්‍රතිබාධනයෙන් බෆරයක් ලෙස ක්‍රියා කිරීම"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "A_v = 1 + R_f / R_1; for voltage follower R_f = 0, giving A_v = 1; buffers isolate high-impedance sources from loading.",
    "si": "A_v = 1 + R_f / R_1; වෝල්ටීයතා අනුගාමකයට A_v = 1; බෆර මගින් පූරණ දෝෂ වළක්වයි."
  },
  "solution": {
    "en": "A_v = 10.0; V_out = +5.0 V. Voltage follower has A_v = 1, high input Z, low output Z, serving as an ideal buffer.",
    "si": "A_v = 10.0; V_out = +5.0 V. වෝල්ටීයතා අනුගාමකයට A_v = 1 වන අතර එය පරිපූර්ණ බෆරයක් ලෙස ක්‍රියා කරයි."
  }
},
{
  "id": "elec9-sq10",
  "competencyRef": "Competency 9.4",
  "category": "digital-logic-gates",
  "difficulty": "advanced",
  "type": "structured",
  "question": {
    "en": "Logic gates are the fundamental building blocks of digital electronic systems. (a) Construct truth tables and write Boolean algebra expressions for: (i) NAND gate, (ii) NOR gate, (iii) XOR gate. (b) Explain why NAND and NOR gates are termed \"universal logic gates\". (c) Show using circuit diagrams and Boolean algebra how all three basic logic gates (NOT, AND, OR) can be constructed using only 2-input NAND gates.",
    "si": "තාර්කික ද්වාර යනු ඩිජිටල් ඉලෙක්ට්‍රොනික පද්ධතිවල මූලික තැනුම් ඒකක වේ. (a) (i) NAND ද්වාරය, (ii) NOR ද්වාරය, (iii) XOR ද්වාරය සඳහා සත්‍යතා වගු ගොඩනගා බූලීය වීජීය ප්‍රකාශන ලියන්න. (b) NAND සහ NOR ද්වාර \"සාර්වත්‍රික තාර්කික ද්වාර\" ලෙස හඳුන්වන්නේ මන්දැයි පහදන්න. (c) 2-ආදාන NAND ද්වාර පමණක් භාවිතයෙන් මූලික තාර්කික ද්වාර තුනම (NOT, AND, OR) ගොඩනගන ආකාරය පරිපථ සටහන් සහ බූලීය වීජ ගණිතය ඇසුරින් පෙන්වන්න."
  },
  "parts": [
    {
      "id": "p1",
      "partLabel": "(a)",
      "prompt": {
        "en": "Write Boolean expressions and truth tables for NAND, NOR, and XOR.",
        "si": "NAND, NOR, සහ XOR සඳහා බූලීය ප්‍රකාශන සහ සත්‍යතා වගු ලියන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(i) NAND: Y = (A · B)‾. Output is 0 only when both A=1 and B=1; otherwise 1. (Truth table: 00->1, 01->1, 10->1, 11->0). (ii) NOR: Y = (A + B)‾. Output is 1 only when both A=0 and B=0; otherwise 0. (Truth table: 00->1, 01->0, 10->0, 11->0). (iii) XOR: Y = A ⊕ B = A‾B + AB‾. Output is 1 when inputs are different; 0 when inputs are identical. (Truth table: 00->0, 01->1, 10->1, 11->0).",
        "si": "(i) NAND: Y = (A · B)‾. A=1 සහ B=1 විට පමණක් ප්‍රතිදානය 0 වේ (00->1, 01->1, 10->1, 11->0). (ii) NOR: Y = (A + B)‾. A=0 සහ B=0 විට පමණක් ප්‍රතිදානය 1 වේ (00->1, 01->0, 10->0, 11->0). (iii) XOR: Y = A ⊕ B = A‾B + AB‾. ආදාන එකිනෙකට වෙනස් විට 1 ද සමාන විට 0 ද වේ (00->0, 01->1, 10->1, 11->0)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "NAND expression and truth table correct",
            "si": "NAND ප්‍රකාශනය සහ සත්‍යතා වගුව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "NOR expression and truth table correct",
            "si": "NOR ප්‍රකාශනය සහ සත්‍යතා වගුව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "XOR expression Y = A‾B + AB‾ and truth table correct",
            "si": "XOR ප්‍රකාශනය සහ සත්‍යතා වගුව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Accurate binary input permutations 00, 01, 10, 11",
            "si": "ආදාන සංයෝජන නිවැරදිව දැක්වීම"
          }
        }
      ]
    },
    {
      "id": "p2",
      "partLabel": "(b)",
      "prompt": {
        "en": "Explain why NAND and NOR gates are called universal gates.",
        "si": "NAND සහ NOR සාර්වත්‍රික ද්වාර ලෙස හඳුන්වන්නේ මන්දැයි පහදන්න."
      },
      "allocatedMarks": 2,
      "modelAnswer": {
        "en": "NAND and NOR gates are called universal gates because any digital logic function or circuit (including basic gates AND, OR, NOT, as well as complex combinational circuits like adders, multiplexers, and flip-flops) can be implemented entirely using only NAND gates or only NOR gates without requiring any other gate type.",
        "si": "NAND සහ NOR සාර්වත්‍රික ද්වාර ලෙස හඳුන්වන්නේ වෙනත් කිසිදු ද්වාර වර්ගයක් භාවිත නොකර, NAND ද්වාර පමණක් හෝ NOR ද්වාර පමණක් භාවිතයෙන් ඕනෑම ඩිජිටල් තාර්කික ශ්‍රිතයක් හෝ පරිපථයක් (මූලික NOT, AND, OR මෙන්ම එකතුකාරක, ෆ්ලිප්-ෆ්ලොප්) නිර්මාණය කළ හැකි බැවිනි."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "Can implement all three basic gates (AND, OR, NOT)",
            "si": "මූලික ද්වාර තුනම නිර්මාණය කළ හැකි බව"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Can synthesize any arbitrary Boolean logic function using only one gate type",
            "si": "එක් ද්වාර වර්ගයකින් පමණක් ඕනෑම බූලීය ශ්‍රිතයක් ගොඩනැගිය හැකි බව"
          }
        }
      ]
    },
    {
      "id": "p3",
      "partLabel": "(c)",
      "prompt": {
        "en": "Show implementation of NOT, AND, and OR using only NAND gates.",
        "si": "NAND ද්වාර පමණක් භාවිතයෙන් NOT, AND, සහ OR ගොඩනගන ආකාරය පෙන්වන්න."
      },
      "allocatedMarks": 4,
      "modelAnswer": {
        "en": "(1) NOT from NAND: Connect both inputs of a 2-input NAND gate together to a single input A. Output Y = (A · A)‾ = A‾. (Requires 1 NAND gate). (2) AND from NAND: Feed input signals A and B into a NAND gate to obtain (A · B)‾, then pass this into a NAND configured as a NOT gate. Output Y = ((A · B)‾)‾ = A · B. (Requires 2 NAND gates). (3) OR from NAND (using De Morgan's Law A + B = (A‾ · B‾)‾): Invert input A using a NAND gate to get A‾; invert input B using a second NAND gate to get B‾; feed A‾ and B‾ into a third NAND gate. Output Y = (A‾ · B‾)‾ = (A‾)‾ + (B‾)‾ = A + B. (Requires 3 NAND gates).",
        "si": "(1) NOT ද්වාරය: 2-ආදාන NAND ද්වාරයක ආදාන දෙකම එකට කෙටි කර A ආදානයට සම්බන්ධ කිරීම: Y = (A · A)‾ = A‾ (NAND 1 ක්). (2) AND ද්වාරය: A සහ B NAND එකකට දී (A · B)‾ ලබාගෙන එය NOT ලෙස සකසන ලද දෙවන NAND එකකට දීම: Y = ((A · B)‾)‾ = A · B (NAND 2 ක්). (3) OR ද්වාරය (ඩිමෝර්ගන් නියමයෙන් A + B = (A‾ · B‾)‾): පළමු NAND එකෙන් A‾ ද, දෙවනුවෙන් B‾ ද ලබාගෙන එම දෙක තෙවන NAND එකකට දීම: Y = (A‾ · B‾)‾ = A + B (NAND 3 ක්)."
      },
      "rubric": [
        {
          "point": 1,
          "description": {
            "en": "NOT: tied inputs Y = (A·A)‾ = A‾ (1 NAND)",
            "si": "NOT: ආදාන එකට ගැටගසා Y = A‾ (NAND 1)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "AND: NAND followed by NAND inverter Y = ((AB)‾)‾ = AB (2 NANDs)",
            "si": "AND: NAND පසුපස ඉන්වර්ටරයක් (NAND 2)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "OR: inverted inputs fed into 3rd NAND via De Morgan (3 NANDs)",
            "si": "OR: ඩිමෝර්ගන් නියමය යොදා ආදාන ප්‍රතිලෝම කර තෙවන ද්වාරයට (NAND 3)"
          }
        },
        {
          "point": 1,
          "description": {
            "en": "Accurate Boolean equations justifying each configuration",
            "si": "සෑම පරිපථයකටම නිවැරදි බූලීය සාධනය"
          }
        }
      ]
    }
  ],
  "hint": {
    "en": "NAND is universal; NOT: tie inputs; AND: invert NAND output; OR: invert inputs before NAND (De Morgan: (A‾·B‾)‾ = A + B).",
    "si": "NAND සාර්වත්‍රික වේ; NOT: ආදාන එකට; AND: NAND ප්‍රතිදානය ප්‍රතිලෝම කිරීම; OR: ආදාන ප්‍රතිලෝම කර NAND කිරීම (ඩිමෝර්ගන්)."
  },
  "solution": {
    "en": "Truth tables: NAND is false only at 11; NOR is true only at 00; XOR is true when inputs differ. NOT needs 1 NAND; AND needs 2 NANDs; OR needs 3 NANDs.",
    "si": "NAND 11 හිදී 0 වේ; NOR 00 හිදී 1 වේ; XOR ආදාන වෙනස් විට 1 වේ. NOT සඳහා NAND 1 ක්, AND සඳහා 2 ක්, OR සඳහා 3 ක් අවශ්‍යයි."
  }
}
];
