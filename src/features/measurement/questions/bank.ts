import { MeasurementQuestion } from './types';

export const MEASUREMENT_QUESTION_BANK: MeasurementQuestion[] = [
  // =========================================================================
  // 1. SCIENTIFIC INVESTIGATION (Competency 1.1) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q01',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following statements represents a scientific observation rather than an inference?',
      si: 'පහත ප්‍රකාශ අතරින් නිගමනයකට වඩා විද්‍යාත්මක නිරීක්ෂණයක් නියෝජනය කරන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The liquid boiled because its vapour pressure equalled atmospheric pressure.', si: 'ද්‍රවය නැටුවේ එහි වාෂ්ප පීඩනය වායුගෝලීය පීඩනයට සමාන වූ බැවිනි.' } },
      { id: 'B', text: { en: 'The column of mercury rose to 760 mm on the barometer scale.', si: 'බැරෝමීටර පරිමාණයේ රසදිය කඳ 760 mm සලකුණ දක්වා ඉහළ ගියේය.' } },
      { id: 'C', text: { en: 'The object experienced a net unbalanced force.', si: 'වස්තුව මත ශුද්ධ අසමතුලිත බලයක් ක්‍රියාත්මක විය.' } },
      { id: 'D', text: { en: 'Heat was transferred via conduction through the copper rod.', si: 'තඹ දණ්ඩ හරහා සන්නයනය මගින් තාපය සම්ප්‍රේෂණය විය.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Observations are direct sensory or instrument readings without explanatory theoretical deduction.',
      si: 'නිරීක්ෂණ යනු න්‍යායික අනුමානයකින් තොරව ඉන්ද්‍රියයන්ගෙන් හෝ උපකරණයකින් සෘජුවම සටහන් කරගන්නා තොරතුරුය.',
    },
    solution: {
      en: 'A reading on an instrument scale (760 mm of mercury) is a direct, empirical observation. Statements explaining why something happened (vapour pressure, unbalanced force, conduction) are inferences.',
      si: 'උපකරණ පරිමාණයක පාඨාංකය සටහන් කරගැනීම (රසදිය 760 mm) සෘජු ප්‍රත්‍යක්ෂ නිරීක්ෂණයකි. එයට හේතු පැහැදිලි කරන ප්‍රකාශ (වාෂ්ප පීඩනය, අසමතුලිත බලය ආදිය) නිගමන වේ.',
    },
  },
  {
    id: 'meas-q02',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'In an experiment investigating the relationship between the period of a simple pendulum and its length, which variable is the independent variable?',
      si: 'සරල ලෝලකයක ආවර්ත කාලය සහ එහි දිග අතර සම්බන්ධතාව පරීක්ෂා කිරීමේදී ස්වායත්ත විචල්‍යය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The period of oscillation (T)', si: 'දෝලන ආවර්ත කාලය (T)' } },
      { id: 'B', text: { en: 'The length of the pendulum (L)', si: 'ලෝලකයේ දිග (L)' } },
      { id: 'C', text: { en: 'The mass of the bob (m)', si: 'ලෝලක ගෝලයේ ස්කන්ධය (m)' } },
      { id: 'D', text: { en: 'The amplitude of swing (θ)', si: 'දෝලන විස්තාරය (θ)' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'The independent variable is the one deliberately altered by the experimenter.',
      si: 'ස්වායත්ත විචල්‍යය යනු පරීක්ෂකයා විසින් අභිමත පරිදි වෙනස් කරනු ලබන විචල්‍යයයි.',
    },
    solution: {
      en: 'The experimenter systematically sets the length (L), making it the independent variable. The resulting period (T) is the dependent variable, while bob mass and angular amplitude are controlled variables.',
      si: 'පරීක්ෂකයා විසින් ලෝලකයේ දිග (L) පියවරෙන් පියවර වෙනස් කරන බැවින් එය ස්වායත්ත විචල්‍යයයි. ආවර්ත කාලය පරායත්ත විචල්‍යය වන අතර ස්කන්ධය හා විස්තාරය පාලිත විචල්‍ය වේ.',
    },
  },
  {
    id: 'meas-q03',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which criterion is essential for a scientific hypothesis to be considered valid in physics?',
      si: 'භෞතික විද්‍යාවේදී විද්‍යාත්මක උපකල්පනයක් වලංගු ලෙස සැලකීමට අත්‍යවශ්‍ය වන නිර්ණායකය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'It must already be proven mathematically beyond doubt.', si: 'එය සැකයකින් තොරව ගණිතමය වශයෙන් දැනටමත් ඔප්පු කර තිබිය යුතුය.' } },
      { id: 'B', text: { en: 'It must be testable and capable of being falsified by experiment.', si: 'එය පරීක්ෂා කළ හැකි සහ පරීක්ෂණ මගින් අසත්‍ය බව පෙන්විය හැකි (falsifiable) එකක් විය යුතුය.' } },
      { id: 'C', text: { en: 'It must agree with established common sense intuition.', si: 'එය සමාජයේ සාමාන්‍ය දැනීමට සහ බුද්ධිමය මතවලට එකඟ විය යුතුය.' } },
      { id: 'D', text: { en: 'It must involve at least five physical variables.', si: 'එයට අවම වශයෙන් භෞතික විචල්‍යයන් පහක්වත් ඇතුළත් විය යුතුය.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Karl Popper established that scientific statements must be falsifiable through empirical test.',
      si: 'විද්‍යාත්මක ප්‍රකාශනයක් ಪ್ರත්‍යක්ෂ පරීක්ෂණයකින් අසත්‍ය කළ හැකි (falsifiable) විය යුතුය.',
    },
    solution: {
      en: 'A hypothesis must make testable predictions that can theoretically be refuted by experimental observation. If an assertion cannot be tested or falsified, it lies outside empirical science.',
      si: 'විද්‍යාත්මක උපකල්පනයක් මගින් පරීක්ෂණාත්මකව සත්‍යාපනය හෝ අසත්‍ය කළ හැකි පුරෝකථන ඉදිරිපත් කළ යුතුය. අසත්‍ය කළ නොහැකි ප්‍රකාශ විද්‍යාත්මක ක්‍රමවේදයට අයත් නොවේ.',
    },
  },
  {
    id: 'meas-q04',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Why is it standard scientific practice to repeat measurements multiple times and report the mean?',
      si: 'මිනුම් කිහිප වරක් නැවත නැවත ලබාගෙන මධ්‍යන්‍යය වාර්තා කිරීම සම්මත විද්‍යාත්මක පිළිවෙතක් වන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'It eliminates all zero errors from the apparatus.', si: 'එමගින් උපකරණයේ සියලු ශූන්‍ය දෝෂ ඉවත් කෙරේ.' } },
      { id: 'B', text: { en: 'It reduces the effect of random fluctuations and improves precision.', si: 'එමගින් අහඹු විචල්‍යතාවල බලපෑම අඩු වී නිරවද්‍යතාව (precision) වැඩි දියුණු වේ.' } },
      { id: 'C', text: { en: 'It changes the least count of the instrument.', si: 'එමගින් උපකරණයේ කුඩාම මිනුම වෙනස් වේ.' } },
      { id: 'D', text: { en: 'It converts derived units into base units.', si: 'එමගින් ව්‍යුත්පන්න ඒකක මූලික ඒකක බවට පත් කෙරේ.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Random errors fluctuate unpredictably around the true value in both positive and negative directions.',
      si: 'අහඹු දෝෂ සත්‍ය අගය වටා ධන හා සෘණ දිශා දෙකටම විසිරෙන බැවින් මධ්‍යන්‍යයෙන් ඒවා අවම වේ.',
    },
    solution: {
      en: 'Random uncertainties have equal probability of being positive or negative. Averaging N readings reduces the standard uncertainty by a factor of 1/√N. It does NOT eliminate systematic or zero errors.',
      si: 'අහඹු දෝෂ ධන හා සෘණ ලෙස දෙපසටම ඇතිවිය හැකි බැවින්, වාර කිහිපයක මධ්‍යන්‍යය ගැනීමෙන් අහඹු උච්චාවචන අවලංගු වී නිරවද්‍යතාව වැඩි වේ. ක්‍රමානුකූල ශූන්‍ය දෝෂ මේ මගින් ඉවත් නොවේ.',
    },
  },
  {
    id: 'meas-q05',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which branch of physics is predominantly involved in the engineering of optical fibre communications?',
      si: 'ප්‍රකාශ තන්තු සන්නිවේදන ඉංජිනේරු විද්‍යාවේදී ප්‍රධාන වශයෙන් යොදා ගැනෙන්නේ භෞතික විද්‍යාවේ කුමන ක්ෂේත්‍රයද?',
    },
    options: [
      { id: 'A', text: { en: 'Thermodynamics', si: 'තාප ගතිවිද්‍යාව' } },
      { id: 'B', text: { en: 'Total internal reflection in optics', si: 'ප්‍රකාශ විද්‍යාවේ පූර්ණ අභ්‍යන්තර පරාවර්තනය' } },
      { id: 'C', text: { en: 'Nuclear fission', si: 'න්‍යෂ්ටික විඛණ්ඩනය' } },
      { id: 'D', text: { en: 'Hydrostatics', si: 'තරල ස්ථිති විද්‍යාව' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Light signals travel along glass fibres by bouncing off internal boundaries when angle of incidence exceeds critical angle.',
      si: 'ආවර්තන කෝණය අවධි කෝණය ඉක්මවා යන විට ආලෝක කිරණ වීදුරු තන්තු තුළින් සම්ප්‍රේෂණය වේ.',
    },
    solution: {
      en: 'Optical fibre transmission relies on total internal reflection (TIR) of light pulses within the denser glass core surrounded by a lower refractive index cladding.',
      si: 'ප්‍රකාශ තන්තු තුළින් දත්ත සම්ප්‍රේෂණය වන්නේ වැඩි වක්‍රතා අංකයක් ඇති හරය තුළ සිදුවන ආලෝකයේ පූර්ණ අභ්‍යන්තර පරාවර්තනය මගිනි.',
    },
  },
  {
    id: 'meas-q06',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When constructing a graph of experimental data in physics, why should the plotted points be clearly distinguished and a smooth best-fit line drawn rather than joining points dot-to-dot?',
      si: 'භෞතික විද්‍යා පරීක්ෂණ දත්ත ප්‍රස්ථාරගත කිරීමේදී ලක්ෂ්‍ය එකිනෙක යා නොකර සුමට හොඳම ගැළපුම් රේඛාවක් (best-fit line) අඳින්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'To force the line to pass through the origin.', si: 'ප්‍රස්ථාර රේඛාව අනිවාර්යයෙන්ම මූල ලක්ෂ්‍යය හරහා යැවීමට.' } },
      { id: 'B', text: { en: 'To average out experimental random errors across the entire dataset.', si: 'මුළු දත්ත සමූහය පුරා පවතින අහඹු දෝෂ මධ්‍යන්‍යගත කර නිරූපණය කිරීමට.' } },
      { id: 'C', text: { en: 'Because physics equations only allow straight lines.', si: 'භෞතික විද්‍යා සමීකරණ සරල රේඛා පමණක් පිළිගන්නා බැවිනි.' } },
      { id: 'D', text: { en: 'To hide faulty apparatus calibration.', si: 'උපකරණ ක්‍රමාංකන දෝෂ සැඟවීමට.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Each individual experimental reading contains small random errors. A best-fit line represents the underlying physical law.',
      si: 'තනි තනි ලක්ෂ්‍යවල අහඹු දෝෂ අඩංගු වන බැවින් හොඳම ගැළපුම් රේඛාව මගින් මූලික භෞතික නියමය මධ්‍යන්‍යගතව පෙන්වයි.',
    },
    solution: {
      en: 'Connecting points dot-to-dot assumes each reading has zero uncertainty. A smooth line of best fit balances positive and negative random deviations, effectively finding the continuous trend.',
      si: 'ලක්ෂ්‍ය එකිනෙක යා කළහොත් එක් එක් ලක්ෂ්‍යයේ දෝෂ නොමැති බව උපකල්පනය වේ. හොඳම ගැළපුම් රේඛාව මගින් දෙපසට විසිරුණු අහඹු දෝෂ තුලනය කර සමස්ත විද්‍යාත්මක රටාව පෙන්වයි.',
    },
  },
  {
    id: 'meas-q07',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What distinguishes a scientific law from a theory?',
      si: 'විද්‍යාත්මක නියමයක් (law) සහ වාදයක් (theory) අතර ඇති වෙනස කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'A law describes what happens; a theory explains why and how it happens.', si: 'නියමයකින් සිදුවන්නේ කුමක්දැයි විස්තර කරයි; වාදයකින් එය සිදුවන්නේ ඇයිද සහ කෙසේදැයි පැහැදිලි කරයි.' } },
      { id: 'B', text: { en: 'A theory is an unproven guess, whereas a law has no exceptions.', si: 'වාදයක් යනු අනුමානයක් වන අතර නියමයකට කිසිදු සීමාවක් නොමැත.' } },
      { id: 'C', text: { en: 'Laws are written in words; theories must only be mathematical equations.', si: 'නියම වචන වලින් ලියනු ලබන අතර වාද ගණිත සමීකරණ පමණක් විය යුතුය.' } },
      { id: 'D', text: { en: 'A law becomes a theory once accepted by the scientific community.', si: 'නියමයක් විද්‍යාඥයින් පිළිගත් පසු එය වාදයක් බවට පත්වේ.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Newton law of gravitation describes the force; General Relativity provides the theoretical explanatory framework.',
      si: 'නියමයකින් නිරීක්ෂණය වන සංසිද්ධියක් විස්තර කරන අතර වාදයකින් ඒ පිටුපස ඇති යාන්ත්‍රණය පැහැදිලි කරයි.',
    },
    solution: {
      en: 'A scientific law is a concise description (often mathematical) of an observed natural regularity (e.g. F = ma). A scientific theory is an overarching explanatory framework supported by extensive evidence (e.g. Kinetic Theory of Gases).',
      si: 'විද්‍යාත්මක නියමයක් යනු නිරීක්ෂිත ස්වභාවික රටාවක් සංක්ෂිප්තව විස්තර කිරීමකි (උදා: F = ma). වාදයක් යනු එම සංසිද්ධිය පිටුපස ඇති යාන්ත්‍රණය විස්තාරාත්මකව පැහැදිලි කරන රාමුවයි.',
    },
  },
  {
    id: 'meas-q08',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A student notices that a voltmeter reading is consistently 0.2 V higher than the true potential difference across various circuit elements. What kind of error is this?',
      si: 'ශිෂ්‍යයෙකු පරිපථයක මනින සෑම අවස්ථාවකදීම වෝල්ට්මීටර පාඨාංකය සත්‍ය විභව අන්තරයට වඩා 0.2 V කින් වැඩි බව දකියි. මෙය කුමන වර්ගයේ දෝෂයක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Random error', si: 'අහඹු දෝෂයකි' } },
      { id: 'B', text: { en: 'Systematic zero error', si: 'ක්‍රමානුකූල ශූන්‍ය දෝෂයකි' } },
      { id: 'C', text: { en: 'Parallax error of varying magnitude', si: 'විචල්‍ය විශාලත්වයකින් යුත් ලම්බන දෝෂයකි' } },
      { id: 'D', text: { en: 'Quantum uncertainty', si: 'ක්වොන්ටම් අවිනිශ්චිතතාවකි' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'An error with a constant magnitude and fixed directional sign is systematic.',
      si: 'නියත විශාලත්වයකින් සහ නියත දිශාවකට සිදුවන දෝෂයක් ක්‍රමානුකූල වේ.',
    },
    solution: {
      en: 'A constant shift in the same direction (+0.2 V) is a classic systematic zero error. It can be corrected by subtracting +0.2 V from every reading.',
      si: 'සෑම පාඨාංකයක්ම එකම දිශාවකට නියත අගයකින් (+0.2 V) මාරු වී තිබීම සම්භාව්‍ය ක්‍රමානුකූල ශූන්‍ය දෝෂයකි. සෑම පාඨාංකයකින්ම +0.2 V අඩු කිරීමෙන් මෙය නිවැරදි කළ හැකිය.',
    },
  },
  {
    id: 'meas-q09',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In an experiment to determine the speed of sound using a resonance tube, why is an end correction (c ≈ 0.6r) required?',
      si: 'අනුනාද නලයක් භාවිතයෙන් වාතයේ ධ්වනි ප්‍රවේගය සෙවීමේදී අන්ත ශෝධනයක් (c ≈ 0.6r) අවශ්‍ය වන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Because air molecules escape from the water boundary.', si: 'ජල මායිමෙන් වායු අණු පිටවන බැවිනි.' } },
      { id: 'B', text: { en: 'Because the displacement antinode forms slightly outside the open tube mouth.', si: 'විස්ථාපන ප්‍රස්පන්දය නලයේ විවෘත මුඛයෙන් සුළු දුරක් පිටතින් පිහිටන බැවිනි.' } },
      { id: 'C', text: { en: 'Because the speed of sound depends on the tuning fork material.', si: 'ධ්වනි ප්‍රවේගය සරසුලේ ද්‍රව්‍යය මත රඳා පවතින බැවිනි.' } },
      { id: 'D', text: { en: 'Because Vernier calipers cannot measure internal water levels.', si: 'වර්නියර් කැලිපරයෙන් ජල මට්ටම මැනිය නොහැකි බැවිනි.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'The air column does not terminate abruptly at the rim of the pipe; sound waves project outward.',
      si: 'නලයේ කට අසලදී වායු කඳ ක්ෂණිකව අවසන් නොවන අතර ප්‍රස්පන්දය කටට මදක් ඉහළින් පිහිටයි.',
    },
    solution: {
      en: 'At the open end of a pipe, the acoustic pressure drops to atmospheric slightly beyond the physical rim. The displacement antinode therefore forms at a distance c ≈ 0.6r outside the tube.',
      si: 'විවෘත කෙළවරේදී පීඩනය වායුගෝලීය පීඩනයට සමපාත වන්නේ නලයේ භෞතික කෙළවරට මදක් ඔබ්බෙනි. එබැවින් විස්ථාපන ප්‍රස්පන්දය නල මුඛයට c ≈ 0.6r දුරක් ඉහළින් පිහිටන බැවින් අන්ත ශෝධනයක් අවශ්‍ය වේ.',
    },
  },
  {
    id: 'meas-q10',
    competencyRef: 'Competency 1.1',
    category: 'scientific-investigation',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Two students measure the acceleration due to gravity g. Student 1 obtains (9.81 ± 0.05) m s⁻² while Student 2 obtains (9.702 ± 0.004) m s⁻². Compared to the accepted local value of 9.80 m s⁻², which statement is correct?',
      si: 'සිසුන් දෙදෙනෙකු ගුරුත්වජ ත්වරණය g මනියි. 1 වන ශිෂ්‍යයාට (9.81 ± 0.05) m s⁻² ද, 2 වන ශිෂ්‍යයාට (9.702 ± 0.004) m s⁻² ද ලැබේ. පිළිගත් අගය 9.80 m s⁻² නම්, පහත ප්‍රකාශ අතරින් නිවැරදි කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Student 1 is more accurate; Student 2 is more precise.', si: '1 වන ශිෂ්‍යයා වඩාත් නිවැරදිය (accurate); 2 වන ශිෂ්‍යයා වඩාත් සියුම්ය (precise).' } },
      { id: 'B', text: { en: 'Student 2 is more accurate; Student 1 is more precise.', si: '2 වන ශිෂ්‍යයා වඩාත් නිවැරදිය; 1 වන ශිෂ්‍යයා වඩාත් සියුම්ය.' } },
      { id: 'C', text: { en: 'Both measurements are equally accurate.', si: 'මිනුම් දෙකම එක හා සමානව නිවැරදිය.' } },
      { id: 'D', text: { en: 'Student 2 has a larger random uncertainty.', si: '2 වන ශිෂ්‍යයාට විශාල අහඹු අවිනිශ්චිතතාවක් ඇත.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Accuracy relates to closeness to the accepted true value; precision relates to the tightness of the uncertainty spread.',
      si: 'නිරවද්‍යතාව (accuracy) යනු සත්‍ය අගයට ඇති ආසන්නතාවයි; සියුම් බව (precision) යනු ප්‍රතිඵලයේ අවිනිශ්චිතතා පරාසය කුඩා වීමයි.',
    },
    solution: {
      en: 'Student 1’s mean (9.81) is very close to accepted 9.80 (high accuracy, moderate precision ±0.05). Student 2 has a tiny uncertainty ±0.004 (high precision) but their mean (9.702) is shifted away from the true value, likely due to systematic error (low accuracy).',
      si: '1 වන ශිෂ්‍යයාගේ අගය (9.81) සත්‍ය අගය වන 9.80 ට ඉතා ආසන්නය (ඉහළ accuracy). 2 වන ශිෂ්‍යයාගේ අගය කුඩා අවිනිශ්චිතතාවක් (±0.004) ඇති බැවින් ඉහළ precision ඇතත්, සත්‍ය අගයෙන් ඈත්ව තිබේ (ක්‍රමානුකූල දෝෂයක් සහිත අඩු accuracy).',
    },
  },

  // =========================================================================
  // 2. PHYSICAL QUANTITIES, SI UNITS & PREFIXES (Competency 1.2) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q11',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following groups contains ONLY fundamental (base) SI units?',
      si: 'පහත සඳහන් කාණ්ඩ අතරින් මූලික SI ඒකක පමණක් අඩංගු වන්නේ කුමන කාණ්ඩයේද?',
    },
    options: [
      { id: 'A', text: { en: 'kilogram, metre, second, ampere', si: 'කිලෝග්‍රෑම්, මීටර්, තත්පර, ඇම්පියර්' } },
      { id: 'B', text: { en: 'newton, joule, watt, second', si: 'නිව්ටන්, ජූල්, වොට්, තත්පර' } },
      { id: 'C', text: { en: 'coulomb, volt, ohm, kelvin', si: 'කූලෝම්, වෝල්ට්, ඕම්, කෙල්වින්' } },
      { id: 'D', text: { en: 'pascal, tesla, metre, candela', si: 'පැස්කල්, ටෙස්ලා, මීටර්, කැන්ඩෙලා' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Recall the 7 SI base quantities: length (m), mass (kg), time (s), current (A), temperature (K), amount of substance (mol), luminous intensity (cd).',
      si: 'SI මූලික ඒකක 7: m, kg, s, A, K, mol, cd.',
    },
    solution: {
      en: 'The 7 base SI units are metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd). In option A, all four are base units. Newton, joule, coulomb, and pascal are derived units.',
      si: 'SI ක්‍රමයේ මූලික ඒකක වන්නේ m, kg, s, A, K, mol, cd වේ. A කාණ්ඩයේ ඒකක 4 ම මූලික ඒකක වේ. නිව්ටන්, ජූල්, කූලෝම් සහ පැස්කල් ව්‍යුත්පන්න ඒකක වේ.',
    },
  },
  {
    id: 'meas-q12',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What is the equivalent expression for 1 Joule (J) expressed solely in terms of SI base units?',
      si: '1 ජූල් (J) ශක්ති ඒකකය SI මූලික ඒකක ඇසුරෙන් පමණක් දැක්වූ විට නිවැරදි ප්‍රකාශනය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'kg m s⁻¹', si: 'kg m s⁻¹' } },
      { id: 'B', text: { en: 'kg m² s⁻²', si: 'kg m² s⁻²' } },
      { id: 'C', text: { en: 'kg m⁻¹ s⁻²', si: 'kg m⁻¹ s⁻²' } },
      { id: 'D', text: { en: 'kg m² s⁻³', si: 'kg m² s⁻³' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Work = Force × Displacement = (mass × acceleration) × distance.',
      si: 'කාර්යය = බලය × විස්ථාපනය = (ස්කන්ධය × ත්වරණය) × දුර.',
    },
    solution: {
      en: 'Work W = F × s. Force F = m × a has units kg × (m s⁻²) = kg m s⁻². Therefore Joule = (kg m s⁻²) × m = kg m² s⁻².',
      si: 'කාර්යය W = F × s වේ. බලයේ ඒකකය kg m s⁻² වන බැවින්, ජූල් = (kg m s⁻²) × m = kg m² s⁻² වේ.',
    },
  },
  {
    id: 'meas-q13',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Convert a density of 2.7 g cm⁻³ into the standard SI unit (kg m⁻³):',
      si: '2.7 g cm⁻³ ක ඝනත්වයක් සම්මත SI ඒකකය වන kg m⁻³ බවට පරිවර්තනය කළ විට ලැබෙන අගය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.0027 kg m⁻³', si: '0.0027 kg m⁻³' } },
      { id: 'B', text: { en: '27 kg m⁻³', si: '27 kg m⁻³' } },
      { id: 'C', text: { en: '270 kg m⁻³', si: '270 kg m⁻³' } },
      { id: 'D', text: { en: '2700 kg m⁻³', si: '2700 kg m⁻³' } },
    ],
    correctOptionId: 'D',
    hint: {
      en: '1 g = 10⁻³ kg and 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³.',
      si: '1 g = 10⁻³ kg සහ 1 cm³ = 10⁻⁶ m³ වේ.',
    },
    solution: {
      en: '2.7 g cm⁻³ = 2.7 × (10⁻³ kg) / (10⁻⁶ m³) = 2.7 × 10³ kg m⁻³ = 2700 kg m⁻³.',
      si: '2.7 g cm⁻³ = 2.7 × (10⁻³ kg) / (10⁻⁶ m³) = 2.7 × 1000 = 2700 kg m⁻³ වේ.',
    },
  },
  {
    id: 'meas-q14',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How many picometres (pm) are in 1 nanometre (nm)?',
      si: 'නැනෝමීටර 1ක් (1 nm) තුළ පිකෝමීටර (pm) කීයක් අඩංගු වේද?',
    },
    options: [
      { id: 'A', text: { en: '10⁻³', si: '10⁻³' } },
      { id: 'B', text: { en: '10³ (1000)', si: '10³ (1000)' } },
      { id: 'C', text: { en: '10⁶', si: '10⁶' } },
      { id: 'D', text: { en: '10⁻⁶', si: '10⁻⁶' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Nano = 10⁻⁹, Pico = 10⁻¹².',
      si: 'නැනෝ = 10⁻⁹, පිකෝ = 10⁻¹².',
    },
    solution: {
      en: '1 nm = 10⁻⁹ m. 1 pm = 10⁻¹² m. Therefore 1 nm = 10⁻⁹ / 10⁻¹² pm = 10³ pm = 1000 pm.',
      si: '1 nm = 10⁻⁹ m වන අතර 1 pm = 10⁻¹² m වේ. එබැවින් 1 nm = 10⁻⁹ / 10⁻¹² = 10³ = පිකෝමීටර 1000 කි.',
    },
  },
  {
    id: 'meas-q15',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which of the following physical quantities is dimensionless yet has an SI unit?',
      si: 'පහත සඳහන් භෞතික රාශි අතරින් මාන රහිත වුවද SI ඒකකයක් පවතින රාශිය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Refractive index', si: 'වර්තනාංකය' } },
      { id: 'B', text: { en: 'Plane angle (radian)', si: 'තල කෝණය (රේඩියන්)' } },
      { id: 'C', text: { en: 'Relative density', si: 'සාපේක්ෂ ඝනත්වය' } },
      { id: 'D', text: { en: 'Mechanical advantage', si: 'යාන්ත්‍රික වාසිය' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Angle is defined as arc length divided by radius (length / length).',
      si: 'කෝණය යනු චාප දිග බෙදීම අරය වේ (දිග / දිග).',
    },
    solution: {
      en: 'Plane angle θ = s / r has dimension [L]/[L] = 1 (dimensionless), yet its coherent supplementary SI unit is the radian (rad). Refractive index and relative density are purely dimensionless ratios with no units.',
      si: 'තල කෝණය θ = s / r වන බැවින් මාන රහිත වේ ([L]/[L] = 1). එසේ වුවද එහි SI ඒකකය රේඩියන් (rad) වේ. වර්තනාංකය සහ සාපේක්ෂ ඝනත්වය ඒකක රහිත අනුපාත වේ.',
    },
  },
  {
    id: 'meas-q16',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Expressed in SI base units, the unit of electric potential difference (Volt, V) is:',
      si: 'විද්‍යුත් විභව අන්තරයේ ඒකකය වන වෝල්ට් (V) SI මූලික ඒකක ඇසුරෙන් දැක්වූ විට:',
    },
    options: [
      { id: 'A', text: { en: 'kg m² s⁻³ A⁻¹', si: 'kg m² s⁻³ A⁻¹' } },
      { id: 'B', text: { en: 'kg m s⁻² A⁻¹', si: 'kg m s⁻² A⁻¹' } },
      { id: 'C', text: { en: 'kg m² s⁻² A', si: 'kg m² s⁻² A' } },
      { id: 'D', text: { en: 'kg m³ s⁻¹ A⁻²', si: 'kg m³ s⁻¹ A⁻²' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Potential difference V = Work / Charge = W / Q = W / (I × t).',
      si: 'විභව අන්තරය V = කාර්යය / ආරෝපණය = W / (I × t).',
    },
    solution: {
      en: 'V = W / Q = (kg m² s⁻²) / (A s) = kg m² s⁻³ A⁻¹.',
      si: 'V = W / Q = (kg m² s⁻²) / (A s) = kg m² s⁻³ A⁻¹ වේ.',
    },
  },
  {
    id: 'meas-q17',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A blood capillary has an internal cross-sectional area of 0.25 mm². Express this area in m² using scientific notation (give the coefficient A in A × 10⁻⁷ m²):',
      si: 'රුධිර කේශනාලිකාවක අභ්‍යන්තර හරස්කඩ වර්ගඵලය 0.25 mm² වේ. මෙය A × 10⁻⁷ m² ලෙස දැක්වූ විට A හි අගය කුමක්ද?',
    },
    expected: 2.5,
    tolerance: 0.05,
    unit: { en: '', si: '' },
    hint: {
      en: '1 mm = 10⁻³ m, so 1 mm² = (10⁻³ m)² = 10⁻⁶ m².',
      si: '1 mm = 10⁻³ m බැවින් 1 mm² = 10⁻⁶ m² වේ.',
    },
    solution: {
      en: '0.25 mm² = 0.25 × 10⁻⁶ m² = 2.5 × 10⁻⁷ m². Thus A = 2.5.',
      si: '0.25 mm² = 0.25 × 10⁻⁶ m² = 2.5 × 10⁻⁷ m² වේ. එබැවින් A = 2.5.',
    },
  },
  {
    id: 'meas-q18',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the prefix representing 10⁻¹⁵ in the metric system?',
      si: 'මෙට්‍රික් ක්‍රමයේ 10⁻¹⁵ නියෝජනය කරන උපසර්ගය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'femto (f)', si: 'ෆෙම්ටෝ (f)' } },
      { id: 'B', text: { en: 'atto (a)', si: 'ඇටෝ (a)' } },
      { id: 'C', text: { en: 'pico (p)', si: 'පිකෝ (p)' } },
      { id: 'D', text: { en: 'micro (μ)', si: 'මයික්‍රෝ (μ)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Nuclear radii are often measured in femtometres (1 fm = 10⁻¹⁵ m).',
      si: 'න්‍යෂ්ටික අරය මනින ෆෙම්ටෝමීටරය (1 fm = 10⁻¹⁵ m) සිහිපත් කරන්න.',
    },
    solution: {
      en: '10⁻¹² is pico, 10⁻¹⁵ is femto (f), 10⁻¹⁸ is atto (a).',
      si: '10⁻¹² පිකෝ ද, 10⁻¹⁵ ෆෙම්ටෝ (f) ද, 10⁻¹⁸ ඇටෝ (a) ද වේ.',
    },
  },
  {
    id: 'meas-q19',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Which of the following derived units can be simplified to s⁻¹?',
      si: 'පහත සඳහන් ව්‍යුත්පන්න ඒකක අතරින් s⁻¹ බවට සරල කළ හැක්කේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Hertz (Hz), Angular frequency (rad s⁻¹), and Decay constant (λ)', si: 'හර්ට්ස් (Hz), කෝණික සංඛ්‍යාතය (rad s⁻¹) සහ ක්ෂය නියතය (λ)' } },
      { id: 'B', text: { en: 'Speed and acceleration', si: 'වේගය සහ ත්වරණය' } },
      { id: 'C', text: { en: 'Capacitance and Inductance', si: 'ධාරිතාව සහ ප්‍රේරකතාව' } },
      { id: 'D', text: { en: 'Electric flux', si: 'විද්‍යුත් ස්‍රාවය' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Frequency f = 1/T, rad is dimensionless, and decay law is N = N₀ e^(-λt) where λt is dimensionless.',
      si: 'සංඛ්‍යාතය f = 1/T ද, රේඩියන් මාන රහිත ද, ක්ෂය නියමය e^(-λt) ද වේ.',
    },
    solution: {
      en: 'Hertz is cycles per second (s⁻¹). Angular frequency is rad s⁻¹ which in base units is s⁻¹ since radian is dimensionless. Decay constant λ has unit s⁻¹ so that λt is a dimensionless exponent.',
      si: 'හර්ට්ස් (Hz) = s⁻¹ වේ. කෝණික සංඛ්‍යාතයේ rad මාන රහිත බැවින් මූලික ඒකකය s⁻¹ වේ. e^(-λt) ඝාතය මාන රහිත වීමට λ හි ඒකකයද s⁻¹ විය යුතුය.',
    },
  },
  {
    id: 'meas-q20',
    competencyRef: 'Competency 1.2',
    category: 'units-and-prefixes',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A car moves at a uniform speed of 108 km h⁻¹. What is its speed in standard SI units (m s⁻¹)?',
      si: 'මෝටර් රථයක් 108 km h⁻¹ ක ඒකාකාර වේගයකින් ගමන් කරයි. සම්මත SI ඒකකවලින් (m s⁻¹) එහි වේගය කීයද?',
    },
    expected: 30,
    tolerance: 0.1,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: '1 km h⁻¹ = (1000 m) / (3600 s) = 5/18 m s⁻¹.',
      si: '1 km h⁻¹ = 5/18 m s⁻¹ වේ.',
    },
    solution: {
      en: '108 km h⁻¹ = 108 × (1000 / 3600) = 108 × (5 / 18) = 30 m s⁻¹.',
      si: '108 km h⁻¹ = 108 × (5 / 18) = 6 × 5 = 30 m s⁻¹ වේ.',
    },
  },

  // =========================================================================
  // 3. DIMENSIONAL ANALYSIS (Competency 1.3) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q21',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the dimensions of pressure (P = Force / Area)?',
      si: 'පීඩනයේ මාන (P = බලය / වර්ගඵලය) කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'M L⁻¹ T⁻²', si: 'M L⁻¹ T⁻²' } },
      { id: 'B', text: { en: 'M L T⁻²', si: 'M L T⁻²' } },
      { id: 'C', text: { en: 'M L⁻² T⁻²', si: 'M L⁻² T⁻²' } },
      { id: 'D', text: { en: 'M L² T⁻¹', si: 'M L² T⁻¹' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: '[Force] = M L T⁻², [Area] = L².',
      si: '[බලය] = M L T⁻², [වර්ගඵලය] = L².',
    },
    solution: {
      en: '[P] = [Force] / [Area] = (M L T⁻²) / L² = M L⁻¹ T⁻².',
      si: '[P] = [බලය] / [වර්ගඵලය] = (M L T⁻²) / L² = M L⁻¹ T⁻² වේ.',
    },
  },
  {
    id: 'meas-q22',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'What are the dimensions of the Universal Gravitational Constant G in Newton’s law F = G m₁ m₂ / r²?',
      si: 'නිව්ටන්ගේ ගුරුත්වාකර්ෂණ නියමය F = G m₁ m₂ / r² හි ඇති විශ්ව ගුරුත්වාකර්ෂණ නියතය G හි මාන කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'M⁻¹ L³ T⁻²', si: 'M⁻¹ L³ T⁻²' } },
      { id: 'B', text: { en: 'M L³ T⁻²', si: 'M L³ T⁻²' } },
      { id: 'C', text: { en: 'M⁻² L² T⁻¹', si: 'M⁻² L² T⁻¹' } },
      { id: 'D', text: { en: 'M⁻¹ L² T⁻²', si: 'M⁻¹ L² T⁻²' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Rearrange: G = F r² / (m₁ m₂). Substitute dimensions for force, length squared, and mass squared.',
      si: 'සූත්‍රය සකසන්න: G = F r² / (m₁ m₂). [F] = M L T⁻² ආදේශ කරන්න.',
    },
    solution: {
      en: '[G] = [F][r]² / [m]² = (M L T⁻²)(L²) / M² = M⁻¹ L³ T⁻².',
      si: '[G] = [F][r]² / [m]² = (M L T⁻²)(L²) / M² = M⁻¹ L³ T⁻² වේ.',
    },
  },
  {
    id: 'meas-q23',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In the equation v² = u² + 2as, what does dimensional homogeneity require?',
      si: 'v² = u² + 2as සමීකරණයේ මාන සමජාතීයතාව මගින් ඉල්ලා සිටින්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Every additive term in the equation must have identical dimensions L² T⁻².', si: 'සමීකරණයේ එකතු වන සෑම පදයකම මාන L² T⁻² විය යුතුය.' } },
      { id: 'B', text: { en: 'The numerical constant 2 must have dimensions of velocity.', si: '2 සංඛ්‍යාත්මක නියතයට ප්‍රවේගයේ මාන තිබිය යුතුය.' } },
      { id: 'C', text: { en: 'Displacement s must have dimensions of T².', si: 's විස්ථාපනයට T² මාන තිබිය යුතුය.' } },
      { id: 'D', text: { en: 'The equation must be valid only for circular motion.', si: 'සමීකරණය වලංගු වන්නේ වෘත්ත චලිතයට පමණි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Physical quantities can only be added or subtracted if they share the same physical dimensions.',
      si: 'භෞතික රාශි එකතු කිරීමට හෝ අඩු කිරීමට නම් ඒවායේ මාන එකම විය යුතුය.',
    },
    solution: {
      en: '[v²] = (L T⁻¹)² = L² T⁻². [u²] = L² T⁻². [2as] = 1 × (L T⁻²) × L = L² T⁻². All terms have dimensions L² T⁻², satisfying the principle of dimensional homogeneity.',
      si: '[v²] = L² T⁻², [u²] = L² T⁻², [2as] = (L T⁻²) × L = L² T⁻² වේ. එකතු වන සෑම පදයකම මාන සමාන වීම මාන සමජාතීයතා මූලධර්මයයි.',
    },
  },
  {
    id: 'meas-q24',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'The velocity v of a surface water wave depends on surface tension γ (force per unit length), water density ρ, and wavelength λ as v ∝ γ^a ρ^b λ^c. Using dimensional analysis, what are the values of a, b, and c?',
      si: 'ජල තරංගයක ප්‍රවේගය v, පෘෂ්ඨික ආතතිය γ (ඒකක දිගක බලය), ඝනත්වය ρ සහ තරංග ආයාමය λ මත v ∝ γ^a ρ^b λ^c ලෙස රඳා පවතී. මාන විශ්ලේෂණයෙන් a, b, c හි අගයන් කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'a = 1/2, b = -1/2, c = -1/2', si: 'a = 1/2, b = -1/2, c = -1/2' } },
      { id: 'B', text: { en: 'a = 1, b = -1, c = 1', si: 'a = 1, b = -1, c = 1' } },
      { id: 'C', text: { en: 'a = 1/2, b = 1/2, c = 1/2', si: 'a = 1/2, b = 1/2, c = 1/2' } },
      { id: 'D', text: { en: 'a = 2, b = -2, c = 1', si: 'a = 2, b = -2, c = 1' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: '[v] = L T⁻¹, [γ] = M T⁻², [ρ] = M L⁻³, [λ] = L.',
      si: '[v] = L T⁻¹, [γ] = M T⁻², [ρ] = M L⁻³, [λ] = L. M, L, T දර්ශක සමකරන්න.',
    },
    solution: {
      en: 'L T⁻¹ = (M T⁻²)^a (M L⁻³)^b (L)^c = M^(a+b) L^(-3b+c) T^(-2a). For M: a + b = 0 => b = -a. For T: -2a = -1 => a = 1/2, so b = -1/2. For L: -3(-1/2) + c = 1 => 3/2 + c = 1 => c = -1/2. Therefore v ∝ √(γ / (ρ λ)).',
      si: 'L T⁻¹ = M^(a+b) L^(-3b+c) T^(-2a). T දර්ශකයෙන්: -2a = -1 => a = 1/2. M දර්ශකයෙන්: a + b = 0 => b = -1/2. L දර්ශකයෙන්: 3/2 + c = 1 => c = -1/2. එබැවින් a = 1/2, b = -1/2, c = -1/2 වේ.',
    },
  },
  {
    id: 'meas-q25',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which of the following pairs of physical quantities share IDENTICAL dimensions?',
      si: 'පහත සඳහන් භෞතික රාශි යුගල අතරින් එකම මාන පවතින යුගලය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Work and Torque', si: 'කාර්යය සහ ව්‍යාවර්තය (Torque)' } },
      { id: 'B', text: { en: 'Force and Pressure', si: 'බලය සහ පීඩනය' } },
      { id: 'C', text: { en: 'Linear momentum and Power', si: 'රේඛීය ගම්‍යතාව සහ ක්ෂමතාව' } },
      { id: 'D', text: { en: 'Energy and Surface tension', si: 'ශක්තිය සහ පෘෂ්ඨික ආතතිය' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Work = Force × parallel distance; Torque = Force × perpendicular distance.',
      si: 'කාර්යය = බලය × විස්ථාපනය; ව්‍යාවර්තය = බලය × ලම්බ දුර.',
    },
    solution: {
      en: 'Both Work and Torque have dimensions [Force] × [Length] = (M L T⁻²) × L = M L² T⁻². Note that although their dimensions are identical, work is a scalar and torque is a vector.',
      si: 'කාර්යය සහ ව්‍යාවර්තය යන දෙකෙහිම මාන [බලය] × [දිග] = M L² T⁻² වේ. (කාර්යය අදිශයක් වන අතර ව්‍යාවර්තය දෛශිකයකි).',
    },
  },
  {
    id: 'meas-q26',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is a major inherent limitation of dimensional analysis?',
      si: 'මාන විශ්ලේෂණයේ පවතින ප්‍රධාන සහජ සීමාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'It cannot determine dimensionless numerical proportionality constants (such as 2π or 1/2).', si: 'එමගින් 2π හෝ 1/2 වැනි මාන රහිත සංඛ්‍යාත්මක නියතයන් නිර්ණය කළ නොහැක.' } },
      { id: 'B', text: { en: 'It cannot be applied to equations involving mass.', si: 'ස්කන්ධය අඩංගු සමීකරණ සඳහා එය යෙදිය නොහැක.' } },
      { id: 'C', text: { en: 'It works only when time is measured in hours.', si: 'එය ක්‍රියාත්මක වන්නේ කාලය පැය වලින් මනින විට පමණි.' } },
      { id: 'D', text: { en: 'It cannot detect sign differences in subtraction.', si: 'එමගින් ලකුණු වෙනස්කම් හඳුනාගත නොහැක.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'In T = 2π√(L/g), dimensional analysis gives √(L/g) but cannot deduce 2π.',
      si: 'ලෝලක ආවර්ත කාලයේ 2π නියතය මාන වලින් ලබාගත නොහැක.',
    },
    solution: {
      en: 'Dimensional analysis compares dimensions [M], [L], [T] and cannot determine dimensionless numerical proportionality constants (e.g. 1/2 in s = ut + 1/2 at², or 2π in pendulum period).',
      si: 'මාන විශ්ලේෂණයෙන් මාන පමණක් සංසන්දනය වන බැවින් 1/2 හෝ 2π වැනි මාන රහිත සංඛ්‍යාත්මක නියතවල අගය තීරණය කළ නොහැක.',
    },
  },
  {
    id: 'meas-q27',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'In Van der Waals equation for real gases: (P + a/V²)(V - b) = RT, where P is pressure and V is molar volume, what are the dimensions of constant a?',
      si: 'තාත්වික වායු සඳහා වැන්ඩවාල්ස් සමීකරණය: (P + a/V²)(V - b) = RT හි, P පීඩනය සහ V මවුලික පරිමාව නම් a නියතයේ මාන කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'M L⁵ T⁻²', si: 'M L⁵ T⁻²' } },
      { id: 'B', text: { en: 'M L⁻¹ T⁻²', si: 'M L⁻¹ T⁻²' } },
      { id: 'C', text: { en: 'M L² T⁻²', si: 'M L² T⁻²' } },
      { id: 'D', text: { en: 'M L³ T⁻¹', si: 'M L³ T⁻¹' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'By dimensional homogeneity, a/V² must have the same dimensions as pressure P. So [a] = [P][V]².',
      si: 'මාන සමජාතීයතාව අනුව a/V² හි මාන P පීඩනයේ මානවලට සමාන විය යුතුය. [a] = [P][V]².',
    },
    solution: {
      en: '[P] = M L⁻¹ T⁻², [V] = L³. Therefore [a] = [P][V]² = (M L⁻¹ T⁻²)(L³)² = (M L⁻¹ T⁻²)(L⁶) = M L⁵ T⁻².',
      si: '[P] = M L⁻¹ T⁻², [V] = L³. එබැවින් [a] = [P][V]² = (M L⁻¹ T⁻²)(L³)² = M L⁵ T⁻² වේ.',
    },
  },
  {
    id: 'meas-q28',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Planck’s constant h has dimensions corresponding to:',
      si: 'ප්ලාන්ක් නියතය h හි මාන සමාන වන්නේ පහත සඳහන් කුමන රාශියටද?',
    },
    options: [
      { id: 'A', text: { en: 'Angular momentum', si: 'කෝණික ගම්‍යතාව' } },
      { id: 'B', text: { en: 'Linear momentum', si: 'රේඛීය ගම්‍යතාව' } },
      { id: 'C', text: { en: 'Power', si: 'ක්ෂමතාව' } },
      { id: 'D', text: { en: 'Force', si: 'බලය' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Energy E = h f, so [h] = [E] / [f] = [Energy] × [Time]. Compare with angular momentum L = m v r.',
      si: 'E = h f බැවින් [h] = [ශක්තිය] × [කාලය] වේ. කෝණික ගම්‍යතාව L = m v r සමඟ සංසන්දනය කරන්න.',
    },
    solution: {
      en: '[h] = [Energy] / [Frequency] = (M L² T⁻²) / T⁻¹ = M L² T⁻¹. Angular momentum L = m v r has dimensions M × (L T⁻¹) × L = M L² T⁻¹. They are dimensionally identical.',
      si: '[h] = (M L² T⁻²) / T⁻¹ = M L² T⁻¹. කෝණික ගම්‍යතාව L = mvr හි මාන M (L T⁻¹) L = M L² T⁻¹ වේ. දෙකෙහිම මාන සමාන වේ.',
    },
  },
  {
    id: 'meas-q29',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'The period of oscillation T of a gas bubble created by an underwater explosion depends on water density ρ, static pressure P, and total energy E as T = k P^a ρ^b E^c. What is the value of exponent c?',
      si: 'දිය යට පිපිරීමකින් ඇතිවන වායු බුබුලක ආවර්ත කාලය T, ජල ඝනත්වය ρ, ස්ථිතික පීඩනය P සහ මුළු ශක්තිය E මත T = k P^a ρ^b E^c ලෙස රඳා පවතී. c දර්ශකයේ අගය (භාගිකව හෝ දශමව) කීයද?',
    },
    expected: 0.33,
    tolerance: 0.05,
    unit: { en: '', si: '' },
    hint: {
      en: 'c = 1/3 ≈ 0.33. Set up equations for M, L, and T exponents.',
      si: 'c = 1/3 ≈ 0.33 වේ. M, L, T දර්ශක සමකර විසඳන්න.',
    },
    solution: {
      en: '[T] = T¹ = (M L⁻¹ T⁻²)^a (M L⁻³)^b (M L² T⁻²)^c. For M: a + b + c = 0. For T: -2a - 2c = 1. For L: -a - 3b + 2c = 0. Solving yields a = -5/6, b = 1/2, c = 1/3 ≈ 0.33.',
      si: 'T = (M L⁻¹ T⁻²)^a (M L⁻³)^b (M L² T⁻²)^c සමීකරණය විසඳූ විට a = -5/6, b = 1/2, c = 1/3 (≈ 0.33) ලැබේ.',
    },
  },
  {
    id: 'meas-q30',
    competencyRef: 'Competency 1.3',
    category: 'dimensional-analysis',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'If an equation in physics is dimensionally homogeneous (consistent), does that prove the equation is physically correct?',
      si: 'භෞතික විද්‍යා සමීකරණයක් මාන අතින් සමජාතීය (consistent) වූ පමණින් එය භෞතිකව නිවැරදි යැයි ඔප්පු වේද?',
    },
    options: [
      { id: 'A', text: { en: 'No; dimensional homogeneity is necessary but not sufficient (it cannot detect wrong numerical factors or missing dimensionless terms).', si: 'නැත; මාන සමජාතීයතාව අත්‍යවශ්‍ය කොන්දේසියක් වුවද ප්‍රමාණවත් නොවේ (වැරදි සංඛ්‍යාත්මක සාධක හඳුනාගත නොහැක).' } },
      { id: 'B', text: { en: 'Yes; any dimensionally consistent equation is guaranteed to be a true physical law.', si: 'ඔව්; මාන අතින් නිවැරදි ඕනෑම සමීකරණයක් සත්‍ය භෞතික නියමයක් බව ස්ථිරය.' } },
      { id: 'C', text: { en: 'Yes; provided all units are in the SI metric system.', si: 'ඔව්; සියලු ඒකක SI ක්‍රමයේ පවතී නම් පමණි.' } },
      { id: 'D', text: { en: 'No; unless the equation contains no mass terms.', si: 'නැත; සමීකරණයේ ස්කන්ධ පද නොමැති නම් පමණි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Consider s = 5at²: it is dimensionally homogeneous, but physically false because the correct factor is 1/2.',
      si: 's = 5at² සමීකරණය මාන අතින් නිවැරදි වුවද භෞතිකව වැරදිය (නිවැරදි සාධකය 1/2 වේ).',
    },
    solution: {
      en: 'A physically correct equation MUST be dimensionally consistent, but dimensional consistency does not ensure physical correctness. For instance, s = 99 ut + 42 at² is dimensionally correct but physically wrong.',
      si: 'භෞතිකව නිවැරදි සමීකරණයක් මාන අතින් අනිවාර්යයෙන්ම නිවැරදි විය යුතුය. එහෙත් මාන අතින් නිවැරදි වූ පමණින් සමීකරණය භෞතිකව නිවැරදි නොවේ (උදා: s = 5at² මාන අතින් නිවැරදි වුවද භෞතිකව වැරදිය).',
    },
  },

  // =========================================================================
  // 4. ERRORS, UNCERTAINTIES & REPORTING (Competency 1.4) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q31',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'The length of a rod is measured as (25.0 ± 0.1) cm. What is the percentage uncertainty in this measurement?',
      si: 'දණ්ඩක දිග (25.0 ± 0.1) cm ලෙස මනිනු ලැබේ. මෙම මිනුමේ ප්‍රතිශත අවිනිශ්චිතතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.4%', si: '0.4%' } },
      { id: 'B', text: { en: '0.1%', si: '0.1%' } },
      { id: 'C', text: { en: '2.5%', si: '2.5%' } },
      { id: 'D', text: { en: '4.0%', si: '4.0%' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Percentage uncertainty = (Absolute uncertainty / Measured value) × 100%.',
      si: 'ප්‍රතිශත අවිනිශ්චිතතාව = (නිරපේක්ෂ අවිනිශ්චිතතාව / මැනුම් අගය) × 100%.',
    },
    solution: {
      en: '(0.1 / 25.0) × 100% = (1 / 250) × 100% = 0.4%.',
      si: '(0.1 / 25.0) × 100% = 0.4% වේ.',
    },
  },
  {
    id: 'meas-q32',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two lengths are measured as x = (10.0 ± 0.2) cm and y = (4.0 ± 0.1) cm. If z = x - y, what is the absolute uncertainty in z?',
      si: 'දිගවල් දෙකක් x = (10.0 ± 0.2) cm සහ y = (4.0 ± 0.1) cm ලෙස මනිනු ලැබේ. z = x - y නම්, z හි නිරපේක්ෂ අවිනිශ්චිතතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '± 0.1 cm', si: '± 0.1 cm' } },
      { id: 'B', text: { en: '± 0.2 cm', si: '± 0.2 cm' } },
      { id: 'C', text: { en: '± 0.3 cm', si: '± 0.3 cm' } },
      { id: 'D', text: { en: '± 0.05 cm', si: '± 0.05 cm' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'When subtracting quantities, absolute uncertainties ALWAYS ADD together: Δz = Δx + Δy.',
      si: 'රාශි අඩු කිරීමේදීද නිරපේක්ෂ අවිනිශ්චිතතා සැමවිටම එකතු වේ: Δz = Δx + Δy.',
    },
    solution: {
      en: 'In subtraction z = x - y, the maximum absolute error accumulates: Δz = Δx + Δy = 0.2 + 0.1 = 0.3 cm. Therefore z = (6.0 ± 0.3) cm.',
      si: 'අඩු කිරීමකදී උපරිම නිරපේක්ෂ දෝෂය එකතු වේ: Δz = Δx + Δy = 0.2 + 0.1 = 0.3 cm. එබැවින් z = (6.0 ± 0.3) cm වේ.',
    },
  },
  {
    id: 'meas-q33',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'The resistance of a resistor is given by R = V / I. If V has a percentage uncertainty of 3% and I has a percentage uncertainty of 2%, what is the maximum percentage uncertainty in R?',
      si: 'ප්‍රතිරෝධකයක ප්‍රතිරෝධය R = V / I මගින් ලැබේ. V හි ප්‍රතිශත අවිනිශ්චිතතාව 3% ක්ද, I හි ප්‍රතිශත අවිනිශ්චිතතාව 2% ක්ද නම්, R හි උපරිම ප්‍රතිශත අවිනිශ්චිතතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '1%', si: '1%' } },
      { id: 'B', text: { en: '5%', si: '5%' } },
      { id: 'C', text: { en: '6%', si: '6%' } },
      { id: 'D', text: { en: '1.5%', si: '1.5%' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'For division Q = A / B, percentage uncertainties add: %ΔQ = %ΔA + %ΔB.',
      si: 'බෙදීමකදී ප්‍රතිශත අවිනිශ්චිතතා එකතු වේ: %ΔR = %ΔV + %ΔI.',
    },
    solution: {
      en: 'For quotients R = V / I, the fractional uncertainties add: (ΔR/R) = (ΔV/V) + (ΔI/I). Therefore % uncertainty in R = 3% + 2% = 5%.',
      si: 'R = V / I බෙදීමකදී භාගික අවිනිශ්චිතතා එකතු වේ: (ΔR/R) = (ΔV/V) + (ΔI/I). එබැවින් ප්‍රතිශත අවිනිශ්චිතතාව = 3% + 2% = 5% වේ.',
    },
  },
  {
    id: 'meas-q34',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'The radius r of a sphere is measured with a percentage uncertainty of 1.5%. What is the resulting percentage uncertainty in the calculated volume V = (4/3) π r³?',
      si: 'ගෝලයක අරය r මැනීමේදී 1.5% ක ප්‍රතිශත අවිනිශ්චිතතාවක් පවතී. ගණනය කළ පරිමාවේ V = (4/3) π r³ ප්‍රතිශත අවිනිශ්චිතතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '1.5%', si: '1.5%' } },
      { id: 'B', text: { en: '3.0%', si: '3.0%' } },
      { id: 'C', text: { en: '4.5%', si: '4.5%' } },
      { id: 'D', text: { en: '0.5%', si: '0.5%' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'If y = xⁿ, then (Δy / y) = n × (Δx / x). Here n = 3.',
      si: 'y = xⁿ නම් (Δy / y) = n × (Δx / x) වේ. මෙහි n = 3.',
    },
    solution: {
      en: 'For V ∝ r³, fractional uncertainty is ΔV/V = 3(Δr/r). Therefore percentage uncertainty in volume = 3 × 1.5% = 4.5%.',
      si: 'V ∝ r³ වන බැවින් ΔV/V = 3(Δr/r) වේ. එබැවින් පරිමාවේ ප්‍රතිශත අවිනිශ්චිතතාව = 3 × 1.5% = 4.5% වේ.',
    },
  },
  {
    id: 'meas-q35',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How many significant figures are in the measurement 0.04050 kg?',
      si: '0.04050 kg යන මිනුමේ අඩංගු සාර්ථක අංක ගණන කීයද?',
    },
    options: [
      { id: 'A', text: { en: '3', si: '3' } },
      { id: 'B', text: { en: '4', si: '4' } },
      { id: 'C', text: { en: '5', si: '5' } },
      { id: 'D', text: { en: '6', si: '6' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Leading zeros are never significant; trailing zeros after a decimal point ARE significant.',
      si: 'ආරම්භක ශූන්‍ය සාර්ථක නොවේ; දශම තිතට පසු අග ඇති ශූන්‍ය සාර්ථක වේ.',
    },
    solution: {
      en: 'Leading zeros (0.0...) merely locate the decimal point and are not significant. The digits 4, 0, 5, and the trailing zero 0 are significant. Hence there are 4 significant figures.',
      si: 'මුල ඇති ශූන්‍ය (0.0...) දශම තිත පිහිටුවීමට පමණක් යොදාගන්නා බැවින් සාර්ථක නොවේ. 4, 0, 5 සහ අග ඇති 0 සාර්ථක වේ. එබැවින් සාර්ථක අංක 4 ක් පවතී.',
    },
  },
  {
    id: 'meas-q36',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A student measures a current as 2.4 A and a resistance as 12.35 Ω. To how many significant figures should the calculated potential difference V = I × R be reported?',
      si: 'ශිෂ්‍යයෙකු ධාරාව 2.4 A ලෙසද ප්‍රතිරෝධය 12.35 Ω ලෙසද මනියි. V = I × R සූත්‍රයෙන් ගණනය කළ විභව අන්තරය වාර්තා කළ යුතු සාර්ථක අංක ගණන කීයද?',
    },
    options: [
      { id: 'A', text: { en: '2 significant figures (e.g. 30 V)', si: 'සාර්ථක අංක 2 ක් (උදා: 30 V)' } },
      { id: 'B', text: { en: '4 significant figures (e.g. 29.64 V)', si: 'සාර්ථක අංක 4 ක් (උදා: 29.64 V)' } },
      { id: 'C', text: { en: '3 significant figures', si: 'සාර්ථක අංක 3 ක්' } },
      { id: 'D', text: { en: '1 significant figure', si: 'සාර්ථක අංක 1 ක්' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'In multiplication, the product cannot have more significant figures than the least precise input factor.',
      si: 'ගුණ කිරීමකදී පිළිතුරේ සාර්ථක අංක ගණන අවම සාර්ථක අංක සහිත සාධකයට (2.4 -> 2 s.f.) සමාන විය යුතුය.',
    },
    solution: {
      en: 'Current 2.4 A has 2 significant figures. Resistance 12.35 Ω has 4 significant figures. In multiplication, the final result must be rounded to match the factor with the fewest significant figures (2 s.f.): V = 29.64 ≈ 30 V.',
      si: 'ධාරාව (2.4 A) සාර්ථක අංක 2 ක් සහිතය. ප්‍රතිරෝධය (12.35 Ω) සාර්ථක අංක 4 කි. ගුණ කිරීමේදී අවම සාර්ථක අංක ගණන වන 2 දක්වා වටයනු ලැබේ (30 V).',
    },
  },
  {
    id: 'meas-q37',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A quantity Q is calculated from Q = A² B / √C. If the percentage uncertainties in A, B, and C are 2%, 3%, and 4% respectively, what is the maximum percentage uncertainty in Q?',
      si: 'Q රාශියක් Q = A² B / √C මගින් ගණනය කෙරේ. A, B, C හි ප්‍රතිශත අවිනිශ්චිතතා පිළිවෙළින් 2%, 3%, 4% නම්, Q හි උපරිම ප්‍රතිශත අවිනිශ්චිතතාව (%) කීයද?',
    },
    expected: 9,
    tolerance: 0.1,
    unit: { en: '%', si: '%' },
    hint: {
      en: '%ΔQ = 2(%ΔA) + 1(%ΔB) + (1/2)(%ΔC).',
      si: '%ΔQ = 2(%ΔA) + %ΔB + (1/2)(%ΔC).',
    },
    solution: {
      en: '%ΔQ = 2 × 2% + 1 × 3% + 0.5 × 4% = 4% + 3% + 2% = 9%.',
      si: '%ΔQ = 2(2%) + 3% + 0.5(4%) = 4% + 3% + 2% = 9% වේ.',
    },
  },
  {
    id: 'meas-q38',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'How can parallax error be avoided when taking a reading with an analogue pointer instrument (like a voltmeter with a mirror behind the pointer)?',
      si: 'දර්ශකයක් සහිත ඇනලොග් වෝල්ට්මීටරයක (දර්ශකයට පිටුපසින් දර්පණයක් ඇති) ලම්බන දෝෂය වළක්වා ගන්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'View from an angle of 45 degrees.', si: 'අංශක 45 ක කෝණයකින් බැලීමෙන්.' } },
      { id: 'B', text: { en: 'Align the line of sight so that the pointer directly covers its own mirror reflection.', si: 'දර්ශකය සහ එහි දර්පණ ප්‍රතිබිම්බය එකිනෙක වැසෙන සේ දෘෂ්ටි රේඛාව ලම්බකව තබා ගැනීමෙන්.' } },
      { id: 'C', text: { en: 'Close both eyes and take an average.', si: 'දෑස් පියා මධ්‍යන්‍යය ගැනීමෙන්.' } },
      { id: 'D', text: { en: 'Connect the meter in parallel with high resistance.', si: 'මීටරය සමාන්තරගතව සම්බන්ධ කිරීමෙන්.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'The mirror reflects the pointer. When your eye is perpendicular to the dial, the pointer and reflection coincide.',
      si: 'දර්ශකය මතට ඇස ලම්බක වූ විට දර්ශකයෙන් එහි ප්‍රතිබිම්බය සම්පූර්ණයෙන්ම වැසේ.',
    },
    solution: {
      en: 'Anti-parallax mirrors work by ensuring perpendicular viewing: when the observer eye is perpendicular to the scale, the pointer completely obscures its own mirror reflection, eliminating parallax error.',
      si: 'දර්ශකය මගින් එහි ප්‍රතිබිම්බය ආවරණය වන පරිදි ඇස තබා ගැනීමෙන් දෘෂ්ටි රේඛාව පරිමාණයට ලම්බක වන අතර ලම්බන දෝෂය සම්පූර්ණයෙන්ම ඉවත් වේ.',
    },
  },
  {
    id: 'meas-q39',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A student measures the time for 20 oscillations of a pendulum as 36.4 s using a stopwatch of least count 0.2 s. What is the uncertainty in the period T of a single oscillation?',
      si: 'ලෝලකයක දෝලන 20ක් සඳහා කාලය 0.2 s කුඩාම මිනුමක් ඇති විරාම ඝටිකාවකින් 36.4 s ලෙස මනිනු ලැබේ. එක් දෝලනයක ආවර්ත කාලයේ T අවිනිශ්චිතතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.2 s', si: '0.2 s' } },
      { id: 'B', text: { en: '0.01 s', si: '0.01 s' } },
      { id: 'C', text: { en: '0.05 s', si: '0.05 s' } },
      { id: 'D', text: { en: '4.0 s', si: '4.0 s' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Total time t = 20T. Uncertainty in T = Δt / 20.',
      si: 'මුළු කාලය t = 20T බැවින් ΔT = Δt / 20 වේ.',
    },
    solution: {
      en: 'T = t / 20. The uncertainty ΔT = Δt / 20 = 0.2 s / 20 = 0.01 s. Timing 20 oscillations reduces the timing uncertainty per oscillation by a factor of 20!',
      si: 'T = t / 20 වන බැවින් ΔT = Δt / 20 = 0.2 s / 20 = 0.01 s වේ. දෝලන 20ක් සඳහා කාලය මැනීමෙන් එක් දෝලනයක අවිනිශ්චිතතාව 20 ගුණයකින් අඩු වේ!',
    },
  },
  {
    id: 'meas-q40',
    competencyRef: 'Competency 1.4',
    category: 'errors-and-uncertainties',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Why is it preferable in experimental physics to linearize a relationship (e.g. plot T² versus L for a pendulum) rather than plotting T versus L directly?',
      si: 'පරීක්ෂණාත්මක භෞතික විද්‍යාවේදී T ට එරෙහිව L ප්‍රස්ථාරගත කිරීමට වඩා T² ට එරෙහිව L ප්‍රස්ථාරගත කර සම්බන්ධතාව රේඛීයකරණය කිරීම වඩාත් යෝග්‍ය වන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Straight-line gradients and intercepts are mathematically straightforward to fit and yield precise constants (like g) with clear error bounds.', si: 'සරල රේඛාවක අනුක්‍රමණය සහ අන්තඃඛණ්ඩය ගණනය කිරීම පහසු වන අතර නියතයන් (g වැනි) පැහැදිලි දෝෂ සීමා සහිතව නිශ්චය කළ හැක.' } },
      { id: 'B', text: { en: 'Curves cannot be plotted on graph paper.', si: 'ප්‍රස්ථාර කඩදාසිවල වක්‍ර ඇඳිය නොහැකි බැවිනි.' } },
      { id: 'C', text: { en: 'Linear graphs automatically eliminate all human reading errors.', si: 'සරල රේඛා මගින් සියලු මිනිස් දෝෂ ඉවත් වන බැවිනි.' } },
      { id: 'D', text: { en: 'Calculators only work with straight lines.', si: 'ගණක යන්ත්‍ර ක්‍රියාත්මක වන්නේ සරල රේඛා සමඟ පමණි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'T = 2π√(L/g) => T² = (4π²/g)L. The gradient m = 4π²/g allows accurate determination of g.',
      si: 'T² = (4π²/g)L සරල රේඛීය ප්‍රස්ථාරයේ අනුක්‍රමණය m = 4π²/g මගින් g නිවැරදිව සෙවිය හැක.',
    },
    solution: {
      en: 'Fitting a best-fit straight line allows objective linear regression, easy detection of systematic intercept offsets, and direct calculation of physical constants from the gradient (m = 4π²/g) with well-defined uncertainties.',
      si: 'සරල රේඛාවක හොඳම ගැළපුම් රේඛාව ඇඳීම පහසු වන අතර, අනුක්‍රමණයෙන් (m = 4π²/g) භෞතික නියතයන් නිරවද්‍යව ගණනය කළ හැක. වක්‍රයකින් නියත සෙවීම අපහසුය.',
    },
  },

  // =========================================================================
  // 5. INSTRUMENT READING & SELECTION (Competency 1.4) - 12 Questions
  // =========================================================================
  {
    id: 'meas-q41',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A Vernier caliper has 10 Vernier scale divisions coinciding with 9 main scale millimeter divisions. What is its least count?',
      si: 'වර්නියර් කැලිපරයක වර්නියර් පරිමාණ කොටස් 10ක් ප්‍රධාන පරිමාණයේ මිලිමීටර් 9ක් සමඟ සමපාත වේ. එහි කුඩාම මිනුම කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.1 mm', si: '0.1 mm' } },
      { id: 'B', text: { en: '0.01 mm', si: '0.01 mm' } },
      { id: 'C', text: { en: '0.02 mm', si: '0.02 mm' } },
      { id: 'D', text: { en: '0.5 mm', si: '0.5 mm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Least count = 1 Main Scale Division - 1 Vernier Division = 1 mm - (9/10 mm).',
      si: 'කුඩාම මිනුම = ප්‍රධාන පරිමාණ කොටසක අගය - වර්නියර් කොටසක අගය = 1 mm - 0.9 mm.',
    },
    solution: {
      en: 'Least Count = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.',
      si: 'කුඩාම මිනුම = 1 mm - (9/10) mm = 1.0 mm - 0.9 mm = 0.1 mm වේ.',
    },
  },
  {
    id: 'meas-q42',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When the jaws of a Vernier caliper are closed, the zero of the Vernier scale lies to the right of the main scale zero mark, and the 3rd Vernier division coincides with a main scale line. What is the zero error and the zero correction?',
      si: 'වර්නියර් කැලිපරයක හනු එකිනෙක ස්පර්ශ කළ විට, වර්නියර් ශූන්‍යය ප්‍රධාන පරිමාණ ශූන්‍යයට දකුණින් පිහිටන අතර 3 වන වර්නියර් රේඛාව ප්‍රධාන පරිමාණ රේඛාවක් හා සමපාත වේ (LC = 0.1 mm). ශූන්‍ය දෝෂය සහ ශූන්‍ය ශෝධනය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Zero error = +0.3 mm; Zero correction = -0.3 mm', si: 'ශූන්‍ය දෝෂය = +0.3 mm; ශූන්‍ය ශෝධනය = -0.3 mm' } },
      { id: 'B', text: { en: 'Zero error = -0.3 mm; Zero correction = +0.3 mm', si: 'ශූන්‍ය දෝෂය = -0.3 mm; ශූන්‍ය ශෝධනය = +0.3 mm' } },
      { id: 'C', text: { en: 'Zero error = +0.7 mm; Zero correction = -0.7 mm', si: 'ශූන්‍ය දෝෂය = +0.7 mm; ශූන්‍ය ශෝධනය = -0.7 mm' } },
      { id: 'D', text: { en: 'Zero error = 0.0 mm; Zero correction = 0.0 mm', si: 'ශූන්‍ය දෝෂය = 0.0 mm; ශූන්‍ය ශෝධනය = 0.0 mm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'When Vernier zero is to the right, error is positive. Correction = -(error).',
      si: 'වර්නියර් ශූන්‍යය දකුණින් පිහිටන විට දෝෂය ධන වේ. ශෝධනය = -(දෝෂය).',
    },
    solution: {
      en: 'Since Vernier zero is to the right of main scale zero, it is a positive zero error of +3 × 0.1 mm = +0.3 mm. The zero correction to be added is -0.3 mm (i.e. subtract 0.3 mm from all observed readings).',
      si: 'වර්නියර් ශූන්‍යය දකුණින් පිහිටන බැවින් ධන ශූන්‍ය දෝෂයකි: +3 × 0.1 = +0.3 mm. නිවැරදි අගය ලබා ගැනීමට පාඨාංකයෙන් 0.3 mm අඩු කළ යුතුය (ශෝධනය = -0.3 mm).',
    },
  },
  {
    id: 'meas-q43',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When measuring an object with a Vernier caliper (least count 0.1 mm), the main scale reading is 32 mm, and the 7th Vernier division coincides with a main scale mark. If the instrument has a negative zero error of -0.2 mm, what is the corrected reading?',
      si: 'වර්නියර් කැලිපරයකින් (LC = 0.1 mm) මනින විට ප්‍රධාන පරිමාණ පාඨාංකය 32 mm ද, සමපාත වර්නියර් කොටස 7 ද වේ. උපකරණයේ -0.2 mm සෘණ ශූන්‍ය දෝෂයක් ඇත්නම්, ශෝධිත පාඨාංකය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '32.5 mm', si: '32.5 mm' } },
      { id: 'B', text: { en: '32.7 mm', si: '32.7 mm' } },
      { id: 'C', text: { en: '32.9 mm', si: '32.9 mm' } },
      { id: 'D', text: { en: '31.8 mm', si: '31.8 mm' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'Observed reading = MSR + (VSR × LC). Corrected reading = Observed - (Signed Zero Error).',
      si: 'නිරීක්ෂිත පාඨාංකය = 32 + (7 × 0.1) = 32.7 mm. ශෝධිත පාඨාංකය = නිරීක්ෂිත - (-0.2).',
    },
    solution: {
      en: 'Observed reading = 32 mm + (7 × 0.1 mm) = 32.7 mm. Corrected reading = Observed - (Zero error) = 32.7 mm - (-0.2 mm) = 32.7 + 0.2 = 32.9 mm.',
      si: 'නිරීක්ෂිත පාඨාංකය = 32 + 0.7 = 32.7 mm. ශෝධිත පාඨාංකය = 32.7 - (-0.2) = 32.7 + 0.2 = 32.9 mm වේ.',
    },
  },
  {
    id: 'meas-q44',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'A micrometer screw gauge has a pitch of 0.5 mm and 50 circular head divisions. What is its least count?',
      si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානයක අන්තරාලය (pitch) 0.5 mm වන අතර වට පරිමාණයේ කොටස් 50ක් ඇත. එහි කුඩාම මිනුම කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '0.01 mm', si: '0.01 mm' } },
      { id: 'B', text: { en: '0.02 mm', si: '0.02 mm' } },
      { id: 'C', text: { en: '0.001 mm', si: '0.001 mm' } },
      { id: 'D', text: { en: '0.1 mm', si: '0.1 mm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Least count = Pitch / Total circular scale divisions.',
      si: 'කුඩාම මිනුම = අන්තරාලය / වට පරිමාණ කොටස් ගණන.',
    },
    solution: {
      en: 'Least Count = 0.5 mm / 50 = 0.01 mm.',
      si: 'කුඩාම මිනුම = 0.5 mm / 50 = 0.01 mm වේ.',
    },
  },
  {
    id: 'meas-q45',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When the spindle and anvil of a micrometer screw gauge are brought into contact, the zero mark of the circular scale lies 3 divisions ABOVE the datum line. What is the zero error?',
      si: 'මයික්‍රොමීටරයක දඟරය සහ කිණිහිර ස්පර්ශ කළ විට, වට පරිමාණයේ 0 සලකුණ දත්ත රේඛාවට ඉහළින් කොටස් 3ක් පිහිටයි (47 වන සලකුණ දත්ත රේඛාවේ). ශූන්‍ය දෝෂය කුමක්ද? (LC = 0.01 mm)',
    },
    options: [
      { id: 'A', text: { en: '+0.03 mm', si: '+0.03 mm' } },
      { id: 'B', text: { en: '-0.03 mm', si: '-0.03 mm' } },
      { id: 'C', text: { en: '+0.47 mm', si: '+0.47 mm' } },
      { id: 'D', text: { en: '-0.47 mm', si: '-0.47 mm' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'When circular zero is above the reference line, the thimble has not reached the zero mark; this is a negative zero error.',
      si: 'වට පරිමාණයේ 0 දත්ත රේඛාවට ඉහළින් පිහිටන විට එය සෘණ ශූන්‍ය දෝෂයකි: e = -(50 - 47) × 0.01 mm = -0.03 mm.',
    },
    solution: {
      en: 'If circular zero is above the datum reference line, it indicates a negative zero error: e = -3 × 0.01 mm = -0.03 mm.',
      si: 'වට පරිමාණයේ ශූන්‍යය දත්ත රේඛාවට ඉහළින් පිහිටන විට එය සෘණ ශූන්‍ය දෝෂයකි: e = -0.03 mm වේ.',
    },
  },
  {
    id: 'meas-q46',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'On a micrometer screw gauge (least count 0.01 mm), the sleeve shows 4.5 mm clearly uncovered, and the 38th division on the thimble aligns with the datum line. What is the observed reading in mm?',
      si: 'මයික්‍රොමීටරයක (LC = 0.01 mm) කොපුවේ 4.5 mm සලකුණ නිරාවරණය වී ඇති අතර, කරකැවුමේ 38 වන කොටස දත්ත රේඛාව හා සමපාත වේ. නිරීක්ෂිත පාඨාංකය (mm) කීයද?',
    },
    expected: 4.88,
    tolerance: 0.01,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'Reading = Sleeve scale reading + (Circular scale reading × 0.01 mm).',
      si: 'පාඨාංකය = 4.5 mm + (38 × 0.01 mm).',
    },
    solution: {
      en: 'Observed reading = 4.5 mm + (38 × 0.01 mm) = 4.50 + 0.38 = 4.88 mm.',
      si: 'පාඨාංකය = 4.5 mm + 0.38 mm = 4.88 mm වේ.',
    },
  },
  {
    id: 'meas-q47',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the purpose of the ratchet mechanism at the end of a micrometer screw gauge?',
      si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානයේ කෙළවර ඇති රැචට් (ratchet) හිසේ කාර්යය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'To lock the spindle in place after measurement.', si: 'මිනුම ගත් පසු දඟරය සිරකර තැබීමට.' } },
      { id: 'B', text: { en: 'To apply a uniform, gentle pressure on the specimen and avoid deformation or screw thread damage.', si: 'නිදර්ශකය මත නියත මෘදු පීඩනයක් යෙදීමට සහ විරූපණය හෝ ඉස්කුරුප්පු දැති තැලීම වැළැක්වීමට.' } },
      { id: 'C', text: { en: 'To measure objects larger than 25 mm.', si: '25 mm ට වඩා විශාල වස්තු මැනීමට.' } },
      { id: 'D', text: { en: 'To convert circular scale into Vernier scale.', si: 'වට පරිමාණය වර්නියර් පරිමාණයක් බවට පත් කිරීමට.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'The ratchet slips with a clicking sound once optimal contact pressure is achieved.',
      si: 'නියමිත තෙරපුම ලැබුණු පසු රැචටය ශබ්ද නගමින් ලිස්සා යයි.',
    },
    solution: {
      en: 'The ratchet stop ensures that a constant measuring force is applied across all trials regardless of the user hand strength, preventing compression of soft specimens and protecting the precision threads.',
      si: 'රැචටය මගින් සෑම මිනුමකදීම නියත හා මෘදු තෙරපුමක් සහතික කරමින් වස්තුව තැලීම සහ ආමානයේ ඉස්කුරුප්පු දැති විනාශ වීම වළක්වයි.',
    },
  },
  {
    id: 'meas-q48',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Which instrument is most suitable for measuring the diameter of a thin resistance wire (~0.35 mm)?',
      si: 'තුනී ප්‍රතිරෝධක කම්බියක විෂ්කම්භය (~0.35 mm) මැනීමට වඩාත්ම සුදුසු උපකරණය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Metre ruler', si: 'මීටර් කෝදුව' } },
      { id: 'B', text: { en: 'Vernier calipers (LC 0.1 mm)', si: 'වර්නියර් කැලිපරය (LC 0.1 mm)' } },
      { id: 'C', text: { en: 'Micrometer screw gauge (LC 0.01 mm)', si: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (LC 0.01 mm)' } },
      { id: 'D', text: { en: 'Spherometer', si: 'ගෝලමානය' } },
    ],
    correctOptionId: 'C',
    hint: {
      en: 'With a Vernier caliper, the fractional error would be 0.1 / 0.35 ≈ 29%! A micrometer keeps fractional error under 3%.',
      si: 'වර්නියර් කැලිපරයෙන් මැනීමේදී භාගික දෝෂය 29% ක් තරම් විශාල වේ! මයික්‍රොමීටරයෙන් එය 3% ට අඩු වේ.',
    },
    solution: {
      en: 'To achieve an acceptable fractional uncertainty for a dimension around 0.35 mm, a least count of 0.01 mm (provided by a micrometer screw gauge) is required. A Vernier caliper would incur an unacceptably high fractional error (~29%).',
      si: '0.35 mm තරම් කුඩා මානයක් මැනීමේදී භාගික දෝෂය අවම කර ගැනීමට 0.01 mm කුඩාම මිනුමක් ඇති මයික්‍රොමීටරය අත්‍යවශ්‍ය වේ.',
    },
  },
  {
    id: 'meas-q49',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A spherometer has an equilateral triangular leg separation of a = 40.0 mm. When placed on a convex lens, its central screw is raised by h = 1.00 mm. What is the calculated radius of curvature R of the lens surface?',
      si: 'ගෝලමානයක බාහිර පාද අතර දුර a = 40.0 mm වේ. උත්තල කාචයක් මත තැබූ විට මැද ඉස්කුරුප්පුවේ එසවීම h = 1.00 mm වේ. කාච පෘෂ්ඨයේ වක්‍රතා අරය R කුමක්ද? (R = a²/(6h) + h/2)',
    },
    options: [
      { id: 'A', text: { en: '267.2 mm', si: '267.2 mm' } },
      { id: 'B', text: { en: '133.8 mm', si: '133.8 mm' } },
      { id: 'C', text: { en: '800.5 mm', si: '800.5 mm' } },
      { id: 'D', text: { en: '40.5 mm', si: '40.5 mm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'R = (40² / (6 × 1)) + (1 / 2) = (1600 / 6) + 0.5.',
      si: 'R = (1600 / 6) + 0.5 = 266.67 + 0.5.',
    },
    solution: {
      en: 'R = a² / (6h) + h/2 = (40.0)² / (6 × 1.00) + (1.00 / 2) = 1600 / 6 + 0.5 = 266.67 + 0.5 = 267.17 ≈ 267.2 mm.',
      si: 'R = (40.0)² / (6 × 1.0) + (1.0 / 2) = 1600 / 6 + 0.5 = 266.67 + 0.5 = 267.17 ≈ 267.2 mm වේ.',
    },
  },
  {
    id: 'meas-q50',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'Why is a travelling microscope chosen to measure the internal diameter of a glass capillary tube or rubber tube rather than Vernier calipers?',
      si: 'වීදුරු කේශික නලයක හෝ රබර් නලයක අභ්‍යන්තර විෂ්කම්භය මැනීමට වර්නියර් කැලිපරය වෙනුවට චල අන්වීක්ෂයක් තෝරා ගන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Caliper jaws cannot fit into narrow capillary bores, and their mechanical pressure deforms soft rubber tubes.', si: 'කැලිපර හනු සියුම් කේශික කුහර තුළට දැමිය නොහැකි අතර යාන්ත්‍රික තෙරපුමෙන් රබර් නල විරූපණය වේ.' } },
      { id: 'B', text: { en: 'Microscopes operate using laser wavelengths.', si: 'අන්වීක්ෂ ලේසර් ආලෝකයෙන් ක්‍රියාත්මක වන බැවිනි.' } },
      { id: 'C', text: { en: 'Capillary tubes are only transparent to ultraviolet light.', si: 'කේශික නල පාරජම්බුල ආලෝකයට පමණක් පාරදෘශ්‍ය බැවිනි.' } },
      { id: 'D', text: { en: 'Vernier calipers do not have a least count in millimeters.', si: 'වර්නියර් කැලිපරයේ කුඩාම මිනුම මිලිමීටර් වලින් නොමැති බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'A microscope is a non-contact optical instrument; it does not exert any compressive physical force.',
      si: 'චල අන්වීක්ෂය ස්පර්ශ රහිත දෘශ්‍ය උපකරණයකි; එයින් යාන්ත්‍රික තෙරපුමක් ඇති නොවේ.',
    },
    solution: {
      en: 'The travelling microscope measures optically without physical contact, preventing deformation of flexible specimens (like rubber tubing) and allowing precise measurement of narrow bores where metal caliper jaws cannot fit.',
      si: 'චල අන්වීක්ෂය මගින් ස්පර්ශයකින් තොරව දෘශ්‍යව මනින බැවින් රබර් වැනි ප්‍රත්‍යාස්ථ ද්‍රව්‍ය විරූපණය වීම වළකින අතර, හනු ඇතුළු කළ නොහැකි සියුම් කේශික කුහර මැනිය හැක.',
    },
  },
  {
    id: 'meas-q51',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A travelling microscope main scale is divided into 0.5 mm divisions. The vernier scale has 50 divisions that equal 49 main scale divisions. What is the least count of this travelling microscope in mm?',
      si: 'චල අන්වීක්ෂයක ප්‍රධාන පරිමාණය 0.5 mm කොටස්වලින් යුක්තය. වර්නියර් පරිමාණයේ කොටස් 50ක් ප්‍රධාන පරිමාණ කොටස් 49කට සමාන වේ. මෙම අන්වීක්ෂයේ කුඩාම මිනුම (mm) කීයද?',
    },
    expected: 0.01,
    tolerance: 0.001,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'Least count = 1 MSD / Number of vernier divisions = 0.5 mm / 50.',
      si: 'කුඩාම මිනුම = 0.5 mm / 50.',
    },
    solution: {
      en: 'Least Count = 0.5 mm / 50 = 0.01 mm.',
      si: 'කුඩාම මිනුම = 0.5 mm / 50 = 0.01 mm වේ.',
    },
  },
  {
    id: 'meas-q52',
    competencyRef: 'Competency 1.4',
    category: 'instruments',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which instrument feature allows a Vernier caliper to measure the internal depth of a test tube or blind hollow cavity?',
      si: 'පරීක්ෂණ නලයක අභ්‍යන්තර ගැඹුර මැනීමට වර්නියර් කැලිපරයේ උපකාරී වන කොටස කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The narrow sliding depth gauge rod attached to the movable jaw at the rear', si: 'චල හනුවට පිටුපසින් සවි කර ඇති සිහින් ගැඹුරු මනින කූර (depth probe)' } },
      { id: 'B', text: { en: 'The external lower jaws', si: 'බාහිර පහළ හනු' } },
      { id: 'C', text: { en: 'The circular thimble', si: 'වෘත්තාකාර කරකැවුම' } },
      { id: 'D', text: { en: 'The central spherometer screw', si: 'ගෝලමාන මැද ඉස්කුරුප්පුව' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'As the slider moves to open the jaws, a thin metallic rod extends from the rear end of the beam.',
      si: 'කැලිපරයේ හනු විවෘත වන විට පිටුපසින් සිහින් ලෝහ කූරක් එළියට පැමිණේ.',
    },
    solution: {
      en: 'The depth gauge probe at the rear of the Vernier caliper extends by exactly the same distance as the jaw opening, allowing depth measurement of cavities.',
      si: 'වර්නියර් කැලිපරයේ පිටුපස ඇති ගැඹුරු කූර හනුවල විවෘත වීමට සමාන දුරකින් එළියට පැමිණෙන බැවින් කුහරවල ගැඹුර මැනිය හැක.',
    },
  },

  // =========================================================================
  // 6. PRACTICAL REASONING & LABORATORY TECHNIQUES (Competency 1.4) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q53',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When measuring the diameter of a coin with a micrometer screw gauge, why is it essential to take readings across multiple different diameters?',
      si: 'මයික්‍රොමීටරයකින් කාසියක විෂ්කම්භය මැනීමේදී විවිධ දිශා ඔස්සේ විෂ්කම්භ කිහිපයක් මැනීම අත්‍යවශ්‍ය වන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Coins may not be perfectly circular due to minting tolerances and wear.', si: 'කාසි නිපදවීමේදී සහ ගෙවී යාම නිසා පරිපූර්ණ වෘත්තාකාර නොවිය හැකි බැවිනි.' } },
      { id: 'B', text: { en: 'To increase the pitch of the screw.', si: 'ඉස්කුරුප්පුවේ අන්තරාලය වැඩි කර ගැනීමට.' } },
      { id: 'C', text: { en: 'To reverse positive zero error into negative zero error.', si: 'ධන ශූන්‍ය දෝෂය සෘණ ශූන්‍ය දෝෂයක් බවට පත් කිරීමට.' } },
      { id: 'D', text: { en: 'To change the metal density of the coin.', si: 'කාසියේ ලෝහ ඝනත්වය වෙනස් කිරීමට.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Real manufactured objects often exhibit slight non-circular eccentricity.',
      si: 'කාසිවල පවතින සුළු අණ්ඩාකාර (non-circular) ස්වභාවය ඉවත් කිරීමට සාමාන්‍ය අගය ගනු ලැබේ.',
    },
    solution: {
      en: 'Coins can have minor ovality or irregularities. Taking measurements across multiple diameters yields a reliable mean diameter and accounts for slight non-circularity.',
      si: 'කාසි පරිපූර්ණ ලෙස වෘත්තාකාර නොවිය හැකි බැවින්, විවිධ දිශා ඔස්සේ මැන මධ්‍යන්‍යය ගැනීමෙන් අණ්ඩාකාර දෝෂ අවම වේ.',
    },
  },
  {
    id: 'meas-q54',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In Practical 3 with the spherometer, how do you verify that all four leg tips (3 outer legs and central screw) are making exact simultaneous contact with the surface?',
      si: 'ගෝලමාන ප්‍රායෝගික පරීක්ෂණයේදී පාද 4 ම (බාහිර පාද 3 සහ මැද ඉස්කුරුප්පුව) පෘෂ්ඨය මත එකවර ස්පර්ශ වී ඇති බව තහවුරු කරගන්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'The instrument stands stably without rocking when gently pressed alternately above the outer legs, and rotating the central screw begins to lift one outer leg.', si: 'බාහිර පාද මත මාරුවෙන් මාරුවට තද කළ විට සෙලවීමක් (rocking) නොමැති අතර, මැද ඉස්කුරුප්පුව තවත් කරකැවූ විට එක් පාදයක් එසවීමට පටන් ගනී.' } },
      { id: 'B', text: { en: 'The spherometer begins to spin freely on its own.', si: 'ගෝලමානය තනිවම නිදහසේ කැරකැවීමට පටන් ගනී.' } },
      { id: 'C', text: { en: 'A loud clicking sound is emitted by the pitch scale.', si: 'අන්තරාල පරිමාණයෙන් විශාල ශබ්දයක් නිකුත් වේ.' } },
      { id: 'D', text: { en: 'The glass surface changes colour under polarised light.', si: 'වීදුරු පෘෂ්ඨයේ වර්ණය වෙනස් වේ.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'If the center screw is too high, the spherometer tilts/rocks on the center screw and two legs. If too low, the center screw does not touch.',
      si: 'මැද ඉස්කුරුප්පුව වැඩිපුර එසවුවහොත් ගෝලමානය සෙලවෙයි (rocking). නිවැරදි ස්පර්ශයේදී සෙලවීමක් නොමැත.',
    },
    solution: {
      en: 'Exact contact is found when the spherometer rests without tilting or rocking. If the screw is lowered too far, it acts as a pivot causing the instrument to rock on two outer legs; if too high, it fails to touch.',
      si: 'පාද 4ම නිවැරදිව ස්පර්ශ වූ විට ගෝලමානය දෙපසට නොපැද්දී ස්ථාවරව පවතී. මැද ඉස්කුරුප්පුව වැඩිපුර තද වුවහොත් අනෙක් පාද එසවී පැද්දීම සිදුවේ.',
    },
  },
  {
    id: 'meas-q55',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When using a travelling microscope to measure the boundary coordinates of a tube, why must you ALWAYS move the microscope carriage in ONE continuous direction without reversing?',
      si: 'චල අන්වීක්ෂයකින් නලයක මායිම් මනින විට කරත්තය සැමවිටම එකම දිශාවකට පමණක් ගෙන යා යුතු අතර ආපසු නොහැරවිය යුත්තේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'To avoid backlash error caused by play/clearance between the lead screw threads.', si: 'ප්‍රධාන ඉස්කුරුප්පු දැති අතර පවතින බුරුල (play) නිසා ඇතිවන පශ්චාත්පාත දෝෂය (backlash error) වැළැක්වීමට.' } },
      { id: 'B', text: { en: 'Because the vernier scale only operates in positive numbers.', si: 'වර්නියර් පරිමාණය ධන සංඛ්‍යාවලට පමණක් ක්‍රියා කරන බැවිනි.' } },
      { id: 'C', text: { en: 'To prevent the microscope objective lens from demagnetizing.', si: 'අවශ්‍යක කාචයේ චුම්භකත්වය නැතිවීම වැළැක්වීමට.' } },
      { id: 'D', text: { en: 'Because reversing reverses the magnification of the image.', si: 'ආපසු හැරවීමෙන් විශාලනය ප්‍රතිවිරුද්ධ වන බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Mechanical lead screws have slight mechanical play between mating threads when motion is reversed.',
      si: 'ඉස්කුරුප්පු දැති අතර පවතින බුරුල නිසා දිශාව මාරු කළ විට පාඨාංකය වෙනස් නොවී ඉස්කුරුප්පුව සුළුවෙන් කැරකැවේ (backlash error).',
    },
    solution: {
      en: 'Reversing a mechanical screw introduces backlash error because the threads must traverse the mechanical gap/clearance before moving the stage again. Moving in one uniform direction keeps the threads continuously engaged on the same flank.',
      si: 'ඉස්කුරුප්පුවේ දිශාව ආපසු හැරවූ විට දැති අතර ඇති හිඩැස (clearance) නිසා කරත්තය චලනය නොවී ඉස්කුරුප්පුව කැරකැවෙන බැවින් පශ්චාත්පාත දෝෂය (backlash error) ඇතිවේ. එබැවින් එකම දිශාවකට ගමන් කළ යුතුය.',
    },
  },
  {
    id: 'meas-q56',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'A student measures a solid cube of brass with side length l = 2.00 cm using Vernier calipers and mass m = 68.0 g using a balance. What is the density of the brass cube in kg m⁻³?',
      si: 'ශිෂ්‍යයෙකු පිත්තල ඝනකයක පැත්තක දිග l = 2.00 cm සහ ස්කන්ධය m = 68.0 g ලෙස මනියි. පිත්තල ඝනකයේ ඝනත්වය සම්මත SI ඒකකවලින් (kg m⁻³) කීයද?',
    },
    expected: 8500,
    tolerance: 10,
    unit: { en: 'kg m⁻³', si: 'kg m⁻³' },
    hint: {
      en: 'Volume V = l³ = (2.00)³ = 8.00 cm³. Density = m / V = 68.0 / 8.00 = 8.5 g cm⁻³. Convert to kg m⁻³ by multiplying by 1000.',
      si: 'පරිමාව V = 2³ = 8.00 cm³. ඝනත්වය = 68 / 8 = 8.5 g cm⁻³. 1000 න් ගුණ කර kg m⁻³ බවට පත් කරන්න.',
    },
    solution: {
      en: 'Volume V = (2.00 cm)³ = 8.00 cm³. Density ρ = 68.0 g / 8.00 cm³ = 8.50 g cm⁻³. Converting to SI: 8.50 × 1000 = 8500 kg m⁻³.',
      si: 'පරිමාව V = 8.00 cm³. ඝනත්වය ρ = 68.0 / 8.00 = 8.50 g cm⁻³. SI ඒකකවලින්: 8.50 × 1000 = 8500 kg m⁻³ වේ.',
    },
  },
  {
    id: 'meas-q57',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Why should a chemical balance or electronic balance never be placed in a direct draught from a window or fan?',
      si: 'රසායනික හෝ සංවේදී ඉලෙක්ට්‍රොනික තුලාවක් ජනේලයකින් හෝ පංකාවකින් එන සෘජු සුළං ධාරාවලට නිරාවරණය නොකළ යුත්තේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'Air currents exert fluctuating aerodynamic forces on the pan, creating random mass measurement errors.', si: 'සුළං ධාරා මගින් තැටිය මත වායුගතික බල යෙදීම නිසා ස්කන්ධ මිනුම්වල අහඹු දෝෂ ඇතිවේ.' } },
      { id: 'B', text: { en: 'Wind alters the gravitational acceleration g of the laboratory.', si: 'සුළඟ නිසා රසායනාගාරයේ ගුරුත්වජ ත්වරණය g වෙනස් වන බැවිනි.' } },
      { id: 'C', text: { en: 'The battery will discharge more rapidly.', si: 'බැටරිය වේගයෙන් බැස යන බැවිනි.' } },
      { id: 'D', text: { en: 'The specimen will melt.', si: 'නිදර්ශකය දියවන බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Even slight air movement applies vertical aerodynamic lift or pressure on sensitive weighing pans.',
      si: 'සුළු සුළං ධාරාවකින් පවා සියුම් තුලා තැටිය මත සිරස් බල ඇතිවේ.',
    },
    solution: {
      en: 'Sensitive balances with precision to 0.01 g or 0.001 g detect aerodynamic drag and dynamic pressure from moving air currents, causing fluctuating readings.',
      si: 'සියුම් තුලාවල තැටිය මත සුළං ධාරා වැදීමෙන් ඇතිවන ගතික පීඩනය නිසා පාඨාංක උච්චාවචනය වී අහඹු දෝෂ හටගනී.',
    },
  },
  {
    id: 'meas-q58',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'In Practical 4, the horizontal vernier scale readings on a rubber tube are: Left outer x₁ = 32.50 mm, Left inner x₂ = 35.80 mm, Right inner x₃ = 42.20 mm, Right outer x₄ = 45.50 mm. What is the wall thickness of the rubber tube?',
      si: 'ප්‍රායෝගික පරීක්ෂණ 4 දී රබර් නලයක පාඨාංක: x₁ = 32.50 mm, x₂ = 35.80 mm, x₃ = 42.20 mm, x₄ = 45.50 mm වේ. රබර් නලයේ බිත්ති ඝනකම කීයද?',
    },
    options: [
      { id: 'A', text: { en: '3.30 mm', si: '3.30 mm' } },
      { id: 'B', text: { en: '6.60 mm', si: '6.60 mm' } },
      { id: 'C', text: { en: '13.00 mm', si: '13.00 mm' } },
      { id: 'D', text: { en: '1.65 mm', si: '1.65 mm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Wall thickness t = (d_ext - d_int) / 2 = ((x₄ - x₁) - (x₃ - x₂)) / 2.',
      si: 'බිත්ති ඝනකම t = (බාහිර විෂ්කම්භය - අභ්‍යන්තර විෂ්කම්භය) / 2.',
    },
    solution: {
      en: 'd_ext = x₄ - x₁ = 45.50 - 32.50 = 13.00 mm. d_int = x₃ - x₂ = 42.20 - 35.80 = 6.40 mm. Wall thickness t = (d_ext - d_int) / 2 = (13.00 - 6.40) / 2 = 6.60 / 2 = 3.30 mm.',
      si: 'බාහිර විෂ්කම්භය = 45.50 - 32.50 = 13.00 mm. අභ්‍යන්තර විෂ්කම්භය = 42.20 - 35.80 = 6.40 mm. බිත්ති ඝනකම t = (13.00 - 6.40) / 2 = 3.30 mm වේ.',
    },
  },
  {
    id: 'meas-q59',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'When measuring the volume of an irregularly shaped small stone that is denser than water, which laboratory procedure is most appropriate?',
      si: 'ජලයේ ගිලෙන කුඩා අක්‍රමවත් ගල් කැටයක පරිමාව මැනීමට වඩාත්ම සුදුසු රසායනාගාර ක්‍රමය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Measure its diameter with Vernier calipers.', si: 'වර්නියර් කැලිපරයෙන් එහි විෂ්කම්භය මැනීම.' } },
      { id: 'B', text: { en: 'Water displacement using a graduated measuring cylinder.', si: 'ක්‍රමාංකිත මිනුම් සිලින්ඩරයක් භාවිතයෙන් ජල විස්ථාපන ක්‍රමය.' } },
      { id: 'C', text: { en: 'Spherometer curvature elevation measurement.', si: 'ගෝලමානයෙන් වක්‍රතා එසවීම මැනීම.' } },
      { id: 'D', text: { en: 'Travelling microscope horizontal traversal.', si: 'චල අන්වීක්ෂයෙන් තිරස්ව මැනීම.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Irregular solid dimensions cannot be determined with calipers. Archimedes displacement principle gives exact volume.',
      si: 'අක්‍රමවත් වස්තුවල මාන කැලිපරවලින් මැනිය නොහැක. ජල විස්ථාපනයෙන් පරිමාව කෙලින්ම ලැබේ.',
    },
    solution: {
      en: 'Irregular geometries have no uniform length, width, or diameter. Submerging the insoluble solid in a measuring cylinder displaces an equal volume of water: V_stone = V_final - V_initial.',
      si: 'අක්‍රමවත් වස්තුවල මාන ඒකාකාර නොවන බැවින්, ජලයේ ගිල්වූ විට විස්ථාපනය වන ජල පරිමාවෙන් (V_අවසාන - V_මුල්) ගල් කැටයේ පරිමාව නිවැරදිව ලැබේ.',
    },
  },
  {
    id: 'meas-q60',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What is the correct protocol before beginning any experimental measurement with a laboratory instrument?',
      si: 'රසායනාගාර උපකරණයකින් ඕනෑම පරීක්ෂණ මිනුමක් ආරම්භ කිරීමට පෙර අනුගමනය කළ යුතු නිවැරදි පියවර කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Determine the least count and record any initial zero error.', si: 'කුඩාම මිනුම තීරණය කර ආරම්භක ශූන්‍ය දෝෂය පරීක්ෂා කර සටහන් කර ගැනීම.' } },
      { id: 'B', text: { en: 'Heat the instrument in a Bunsen flame.', si: 'උපකරණය බන්සන් දැල්ලෙන් රත් කිරීම.' } },
      { id: 'C', text: { en: 'Multiply the scale by 10.', si: 'පරිමාණය 10 න් ගුණ කිරීම.' } },
      { id: 'D', text: { en: 'Lubricate all scales with oil.', si: 'සියලු පරිමාණවල තෙල් ආලේප කිරීම.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Every precision instrument must first have its least count verified and its zero baseline checked.',
      si: 'සෑම මිනුමකටම පෙර කුඩාම මිනුම සහ ශූන්‍ය දෝෂය පරීක්ෂා කිරීම අත්‍යවශ්‍ය මූලික පියවරයි.',
    },
    solution: {
      en: 'Before taking readings, an investigator must determine the instrument least count (smallest measurable graduation) and inspect for positive or negative zero error so that appropriate zero corrections can be applied.',
      si: 'මිනුම් ගැනීමට පෙර උපකරණයේ කුඩාම මිනුම තහවුරු කරගෙන, ධන හෝ සෘණ ශූන්‍ය දෝෂයක් ඇත්දැයි බලා එය සටහන් කර ගැනීම අනිවාර්ය වේ.',
    },
  },
  {
    id: 'meas-q61',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A spherometer with leg separation a = 30.0 mm gives a zero reading of h₀ = 0.02 mm on plane glass and h₁ = 1.02 mm on a concave mirror surface. What is the radius of curvature R in mm?',
      si: 'පාද අතර දුර a = 30.0 mm වූ ගෝලමානයක තල වීදුරු පාඨාංකය h₀ = 0.02 mm ද, අවතල දර්පණ පාඨාංකය h₁ = 1.02 mm ද වේ. දර්පණයේ වක්‍රතා අරය R (mm) කීයද?',
    },
    expected: 150.5,
    tolerance: 0.5,
    unit: { en: 'mm', si: 'mm' },
    hint: {
      en: 'Elevation h = h₁ - h₀ = 1.02 - 0.02 = 1.00 mm. R = a²/(6h) + h/2 = 30² / 6 + 0.5.',
      si: 'එසවීම h = 1.02 - 0.02 = 1.00 mm. R = 900 / 6 + 0.5 = 150.5 mm.',
    },
    solution: {
      en: 'h = 1.02 - 0.02 = 1.00 mm. R = (30.0)² / (6 × 1.00) + (1.00 / 2) = 900 / 6 + 0.5 = 150 + 0.5 = 150.5 mm.',
      si: 'h = 1.00 mm. R = 30² / (6 × 1) + 1/2 = 150 + 0.5 = 150.5 mm වේ.',
    },
  },
  {
    id: 'meas-q62',
    competencyRef: 'Competency 1.4',
    category: 'practical-reasoning',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A cylinder has mass m = (100.0 ± 0.5) g, diameter d = (2.00 ± 0.02) cm, and height h = (5.00 ± 0.05) cm. What is the relative contribution of the diameter measurement to the total fractional uncertainty of density?',
      si: 'සිලින්ඩරයක ස්කන්ධය m = (100.0 ± 0.5) g, විෂ්කම්භය d = (2.00 ± 0.02) cm සහ උස h = (5.00 ± 0.05) cm වේ. ඝනත්වයේ මුළු භාගික අවිනිශ්චිතතාවට විෂ්කම්භයේ දායකත්වය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '2 × (Δd / d) = 2 × (0.02 / 2.00) = 0.02 (2%)', si: '2 × (Δd / d) = 2 × (0.02 / 2.00) = 0.02 (2%)' } },
      { id: 'B', text: { en: 'Δd / d = 0.01 (1%)', si: 'Δd / d = 0.01 (1%)' } },
      { id: 'C', text: { en: '4 × (Δd / d) = 0.04 (4%)', si: '4 × (Δd / d) = 0.04 (4%)' } },
      { id: 'D', text: { en: '0.005 (0.5%)', si: '0.005 (0.5%)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'In cylinder volume V = π(d/2)²h, d is squared, so its uncertainty contribution is multiplied by 2.',
      si: 'පරිමාව සෙවීමේදී d වර්ග වන බැවින් එහි භාගික අවිනිශ්චිතතාව 2 න් ගුණ වේ.',
    },
    solution: {
      en: 'Density ρ = 4m / (π d² h). Fractional error is Δρ/ρ = (Δm/m) + 2(Δd/d) + (Δh/h). Because diameter is squared in the denominator, its relative contribution is doubled: 2 × (0.02 / 2.00) = 0.02 or 2%.',
      si: 'ඝනත්වයේ සමීකරණයේ විෂ්කම්භය d වර්ග වී ඇති බැවින්, දෝෂ ප්‍රචාරණයේදී එහි දායකත්වය 2 න් ගුණ වේ: 2 × (0.02 / 2.00) = 0.02 (2%).',
    },
  },

  // =========================================================================
  // 7. VECTORS AND SCALARS (Competency 1.5) - 10 Questions
  // =========================================================================
  {
    id: 'meas-q63',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Which of the following physical quantities is a VECTOR quantity?',
      si: 'පහත සඳහන් භෞතික රාශි අතරින් දෛශික (vector) රාශියක් වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Electric potential', si: 'විද්‍යුත් විභවය' } },
      { id: 'B', text: { en: 'Weight (gravitational force)', si: 'බර (ගුරුත්වාකර්ෂණ බලය)' } },
      { id: 'C', text: { en: 'Kinetic energy', si: 'චාලක ශක්තිය' } },
      { id: 'D', text: { en: 'Temperature', si: 'උෂ්ණත්වය' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'A vector quantity requires both magnitude and a defined spatial direction.',
      si: 'දෛශික රාශියකට විශාලත්වයක් මෙන්ම නිශ්චිත දිශාවක්ද ඇත.',
    },
    solution: {
      en: 'Weight is a gravitational downward force with magnitude and direction directed towards Earth’s center. Potential, energy, and temperature are scalar quantities characterized solely by magnitude.',
      si: 'බර යනු පෘථිවි කේන්ද්‍රය දෙසට ක්‍රියා කරන ගුරුත්වාකර්ෂණ බලයකි. එබැවින් එය දෛශිකයකි. විභවය, ශක්තිය සහ උෂ්ණත්වය අදිශ වේ.',
    },
  },
  {
    id: 'meas-q64',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'A force of 50 N acts at an angle of 60° to the horizontal. What are its horizontal (Fx) and vertical (Fy) rectangular components?',
      si: '50 N ක බලයක් තිරසට 60° ක කෝණයකින් ක්‍රියා කරයි. එහි තිරස් (Fx) සහ සිරස් (Fy) සෘජුකෝණී සංරචක මොනවාද?',
    },
    options: [
      { id: 'A', text: { en: 'Fx = 25.0 N, Fy = 43.3 N', si: 'Fx = 25.0 N, Fy = 43.3 N' } },
      { id: 'B', text: { en: 'Fx = 43.3 N, Fy = 25.0 N', si: 'Fx = 43.3 N, Fy = 25.0 N' } },
      { id: 'C', text: { en: 'Fx = 50.0 N, Fy = 50.0 N', si: 'Fx = 50.0 N, Fy = 50.0 N' } },
      { id: 'D', text: { en: 'Fx = 35.4 N, Fy = 35.4 N', si: 'Fx = 35.4 N, Fy = 35.4 N' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Fx = F cos(60°) = 50 × 0.5; Fy = F sin(60°) = 50 × (√3/2).',
      si: 'Fx = 50 cos(60°) = 25 N; Fy = 50 sin(60°) ≈ 43.3 N.',
    },
    solution: {
      en: 'Fx = 50 cos(60°) = 50 × 0.5 = 25.0 N. Fy = 50 sin(60°) = 50 × 0.866 = 43.3 N.',
      si: 'Fx = 50 cos 60° = 25.0 N. Fy = 50 sin 60° = 50 × 0.866 = 43.3 N වේ.',
    },
  },
  {
    id: 'meas-q65',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'intermediate',
    type: 'numerical',
    question: {
      en: 'Two perpendicular forces of 6.0 N and 8.0 N act simultaneously at a point. What is the magnitude of their resultant force in Newtons?',
      si: 'ලක්ෂ්‍යයක් මත එකිනෙකට ලම්බකව 6.0 N සහ 8.0 N බල දෙකක් ක්‍රියා කරයි. ඒවායේ සම්ප්‍රයුක්ත බලයේ විශාලත්වය (N) කීයද?',
    },
    expected: 10,
    tolerance: 0.1,
    unit: { en: 'N', si: 'N' },
    hint: {
      en: 'For orthogonal vectors, R = √(A² + B²) = √(6² + 8²).',
      si: 'ලම්බක දෛශික සඳහා R = √(6² + 8²) = √(36 + 64).',
    },
    solution: {
      en: 'R = √(6.0² + 8.0²) = √(36 + 64) = √100 = 10.0 N.',
      si: 'R = √(6² + 8²) = √100 = 10.0 N වේ.',
    },
  },
  {
    id: 'meas-q66',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Two forces of equal magnitude F act on a particle at an angle of 120° to each other. What is the magnitude of their resultant?',
      si: 'සමාන විශාලත්වය F වූ බල දෙකක් එකිනෙකට 120° ක කෝණයකින් අංශුවක් මත ක්‍රියා කරයි. ඒවායේ සම්ප්‍රයුක්තයේ විශාලත්වය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'F', si: 'F' } },
      { id: 'B', text: { en: '2F', si: '2F' } },
      { id: 'C', text: { en: '√3 F', si: '√3 F' } },
      { id: 'D', text: { en: 'F / 2', si: 'F / 2' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'R² = F² + F² + 2(F)(F) cos(120°). Recall cos(120°) = -0.5.',
      si: 'R² = F² + F² + 2F² cos(120°). cos(120°) = -0.5 වේ.',
    },
    solution: {
      en: 'R² = F² + F² + 2 F² cos(120°) = 2F² + 2F²(-0.5) = 2F² - F² = F². Therefore R = F.',
      si: 'R² = F² + F² + 2F² cos 120° = 2F² - F² = F² => R = F වේ. (120° කෝණයකින් ක්‍රියා කරන සමාන බල දෙකක සම්ප්‍රයුක්තයද F ම වේ).',
    },
  },
  {
    id: 'meas-q67',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'What are the minimum and maximum possible resultant magnitudes of two forces of 5 N and 12 N acting at the same point?',
      si: 'එකම ලක්ෂ්‍යයක් මත ක්‍රියා කරන 5 N සහ 12 N බල දෙකක පැවතිය හැකි අවම සහ උපරිම සම්ප්‍රයුක්ත බල විශාලත්වයන් මොනවාද?',
    },
    options: [
      { id: 'A', text: { en: 'Minimum = 7 N, Maximum = 17 N', si: 'අවම = 7 N, උපරිම = 17 N' } },
      { id: 'B', text: { en: 'Minimum = 0 N, Maximum = 17 N', si: 'අවම = 0 N, උපරිම = 17 N' } },
      { id: 'C', text: { en: 'Minimum = 13 N, Maximum = 17 N', si: 'අවම = 13 N, උපරිම = 17 N' } },
      { id: 'D', text: { en: 'Minimum = 7 N, Maximum = 60 N', si: 'අවම = 7 N, උපරිම = 60 N' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Max occurs when parallel (θ = 0°): A + B. Min occurs when opposite (θ = 180°): |A - B|.',
      si: 'උපරිමය එකම දිශාවට (12 + 5 = 17 N). අවමය ප්‍රතිවිරුද්ධ දිශාවට (12 - 5 = 7 N).',
    },
    solution: {
      en: 'Maximum resultant = 12 + 5 = 17 N (when parallel). Minimum resultant = 12 - 5 = 7 N (when anti-parallel in opposite directions).',
      si: 'බල සමාන්තර වන විට උපරිමය 12 + 5 = 17 N ද, ප්‍රතිවිරුද්ධ වන විට අවමය 12 - 5 = 7 N ද වේ.',
    },
  },
  {
    id: 'meas-q68',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'advanced',
    type: 'mcq',
    question: {
      en: 'A block of mass m rests on a smooth plane inclined at angle θ to the horizontal. What is the component of the gravitational force (mg) acting parallel down the plane?',
      si: 'තිරසට θ ආනතියක් ඇති සිනිඳු ආනත තලයක් මත m ස්කන්ධයක් තබා ඇත. ආනත තලයට සමාන්තරව පහළට ක්‍රියා කරන ගුරුත්වාකර්ෂණ බල (mg) සංරචකය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'mg sin θ', si: 'mg sin θ' } },
      { id: 'B', text: { en: 'mg cos θ', si: 'mg cos θ' } },
      { id: 'C', text: { en: 'mg tan θ', si: 'mg tan θ' } },
      { id: 'D', text: { en: 'mg', si: 'mg' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Weight mg acts vertically downwards. Resolving along the incline gives mg sin θ, perpendicular gives mg cos θ.',
      si: 'සිරස්ව පහළට ක්‍රියා කරන බර ආනත තලයට සමාන්තරව mg sin θ ලෙසත්, ලම්බකව mg cos θ ලෙසත් විභේදනය වේ.',
    },
    solution: {
      en: 'The gravitational force acts vertically downwards. Resolving along the coordinate axis parallel to the inclined plane yields mg cos(90° - θ) = mg sin θ down the plane.',
      si: 'ආනත තලය ඔස්සේ පහළට සංරචකය mg sin θ වන අතර, තලයට ලම්බක සංරචකය mg cos θ වේ.',
    },
  },
  {
    id: 'meas-q69',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'Under what condition can three non-zero coplanar forces acting on a body keep it in equilibrium?',
      si: 'වස්තුවක් මත ක්‍රියා කරන ශූන්‍ය නොවන තලීය බල තුනක් මගින් එය සමතුලිතතාවයේ තැබිය හැක්කේ කුමන කොන්දේසිය යටතේද?',
    },
    options: [
      { id: 'A', text: { en: 'The three force vectors must form a closed triangle when placed head-to-tail, and their lines of action must be concurrent.', si: 'බල තුන මුලට-අග තැබූ විට වැසුණු ත්‍රිකෝණයක් සෑදිය යුතු අතර ඒවායේ ක්‍රියාකාරී රේඛා සමගාමී විය යුතුය.' } },
      { id: 'B', text: { en: 'All three forces must act in the exact same direction.', si: 'බල තුනම එකම දිශාවකට ක්‍රියා කළ යුතුය.' } },
      { id: 'C', text: { en: 'The forces must all have identical magnitudes.', si: 'බල තුනේම විශාලත්වයන් සමාන විය යුතුය.' } },
      { id: 'D', text: { en: 'Two forces must be zero.', si: 'බල දෙකක් ශූන්‍ය විය යුතුය.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Recall the Triangle Law of Forces for equilibrium and concurrency to avoid rotational torque.',
      si: 'සමතුලිතතාව සඳහා බල ත්‍රිකෝණ නීතිය සහ භ්‍රමණය වැළැක්වීමට සමගාමී (concurrent) විය යුතුය.',
    },
    solution: {
      en: 'For translational equilibrium, vector sum ΣF = 0, meaning the vectors form a closed polygon/triangle. For rotational equilibrium (zero net torque), the lines of action of the three non-parallel forces must intersect at a single concurrent point.',
      si: 'සමතුලිතතාව සඳහා සම්ප්‍රයුක්ත බලය ශූන්‍ය විය යුතු අතර (වැසුණු ත්‍රිකෝණයක්), ව්‍යාවර්තය ශූන්‍ය වීමට බලවල ක්‍රියාකාරී රේඛා එකම ලක්ෂ්‍යයක් හරහා (සමගාමීව) යා යුතුය.',
    },
  },
  {
    id: 'meas-q70',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'advanced',
    type: 'numerical',
    question: {
      en: 'A swimmer who swims at 4.0 m s⁻¹ in still water directs themselves straight across a river flowing at 3.0 m s⁻¹. What is the magnitude of the swimmer’s resultant velocity relative to the riverbank in m s⁻¹?',
      si: 'නිශ්චල ජලයේ 4.0 m s⁻¹ වේගයෙන් පිහිනිය හැකි පිහිනුම්කරුවෙකු, 3.0 m s⁻¹ කින් ගලන ගඟකට ලම්බකව පිහිනයි. ගං ඉවුරට සාපේක්ෂව ඔහුගේ සම්ප්‍රයුක්ත ප්‍රවේගයේ විශාලත්වය (m s⁻¹) කීයද?',
    },
    expected: 5.0,
    tolerance: 0.1,
    unit: { en: 'm s⁻¹', si: 'm s⁻¹' },
    hint: {
      en: 'The cross-stream velocity (4 m/s) and downstream river velocity (3 m/s) are mutually perpendicular: v_res = √(4² + 3²).',
      si: 'ගඟ හරහා ප්‍රවේගය (4 m/s) සහ ගඟ දිගේ ප්‍රවේගය (3 m/s) ලම්බක වේ: v = √(4² + 3²).',
    },
    solution: {
      en: 'v_resultant = √(v_swimmer² + v_river²) = √(4.0² + 3.0²) = √(16 + 9) = √25 = 5.0 m s⁻¹.',
      si: 'සම්ප්‍රයුක්ත ප්‍රවේගය = √(4.0² + 3.0²) = √25 = 5.0 m s⁻¹ වේ.',
    },
  },
  {
    id: 'meas-q71',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'intermediate',
    type: 'mcq',
    question: {
      en: 'If vector A has components Ax = 3, Ay = 4 and vector B has components Bx = -1, By = 2, what is the magnitude of the vector sum R = A + B?',
      si: 'දෛශිකය A හි සංරචක Ax = 3, Ay = 4 ද, දෛශිකය B හි සංරචක Bx = -1, By = 2 ද නම්, R = A + B සම්ප්‍රයුක්ත දෛශිකයේ විශාලත්වය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '√40 ≈ 6.32', si: '√40 ≈ 6.32' } },
      { id: 'B', text: { en: '√34 ≈ 5.83', si: '√34 ≈ 5.83' } },
      { id: 'C', text: { en: '8.00', si: '8.00' } },
      { id: 'D', text: { en: '√20 ≈ 4.47', si: '√20 ≈ 4.47' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Rx = Ax + Bx = 3 + (-1) = 2. Ry = Ay + By = 4 + 2 = 6. Then R = √(Rx² + Ry²).',
      si: 'Rx = 3 - 1 = 2. Ry = 4 + 2 = 6. R = √(2² + 6²) = √(4 + 36) = √40.',
    },
    solution: {
      en: 'Rx = 3 + (-1) = 2. Ry = 4 + 2 = 6. R = √(2² + 6²) = √(4 + 36) = √40 ≈ 6.32.',
      si: 'Rx = 2, Ry = 6 වේ. සම්ප්‍රයුක්තයේ විශාලත්වය R = √(2² + 6²) = √40 ≈ 6.32 වේ.',
    },
  },
  {
    id: 'meas-q72',
    competencyRef: 'Competency 1.5',
    category: 'vectors',
    difficulty: 'foundation',
    type: 'mcq',
    question: {
      en: 'Electric current has both magnitude and a defined direction along a wire. Why is electric current classified as a SCALAR quantity rather than a vector?',
      si: 'විද්‍යුත් ධාරාවට විශාලත්වයක් මෙන්ම කම්බියක් ඔස්සේ නිශ්චිත දිශාවක්ද ඇත. එසේ වුවද විද්‍යුත් ධාරාව දෛශිකයක් නොව අදිශ (scalar) රාශියක් ලෙස වර්ගීකරණය කරන්නේ ඇයි?',
    },
    options: [
      { id: 'A', text: { en: 'It does not obey the laws of vector addition (parallelogram law); currents at a junction add algebraically: I = I₁ + I₂ regardless of junction angle.', si: 'එය දෛශික එකතු කිරීමේ නීති (සමාන්තරාස්‍ර නියමය) පිළිපදින්නේ නැත; සන්ධියකදී කෝණය කුමක් වුවත් වීජීයව එකතු වේ (I = I₁ + I₂).' } },
      { id: 'B', text: { en: 'Because electrons have negative charge.', si: 'ඉලෙක්ට්‍රෝනවලට සෘණ ආරෝපණයක් ඇති බැවිනි.' } },
      { id: 'C', text: { en: 'Because wires can be coiled.', si: 'කම්බි එතීමට හැකි බැවිනි.' } },
      { id: 'D', text: { en: 'Because electric current cannot be measured with a ruler.', si: 'කෝදුවකින් ධාරාව මැනිය නොහැකි බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'To be a vector, a quantity must not only have magnitude and direction but MUST obey the laws of vector addition.',
      si: 'දෛශිකයක් වීමට විශාලත්වය හා දිශාවට අමතරව දෛශික එකතු කිරීමේ නීති අනිවාර්යයෙන්ම පිළිපැදිය යුතුය.',
    },
    solution: {
      en: 'Physical vectors must transform and add according to the parallelogram law. Electric currents at a node combine according to Kirchhoff’s First Law algebraically (I_total = I₁ + I₂), completely independent of the angle between the wires. Hence, current is a scalar.',
      si: 'දෛශිකයක් වීමට නම් සමාන්තරාස්‍ර නීතිය අනුව එකතු විය යුතුය. සන්ධියකදී ධාරා එකතු වන්නේ කම්බි අතර කෝණය මත නොව සරල වීජීය එකතුවක් (I = I₁ + I₂) ලෙසිනි. එබැවින් විද්‍යුත් ධාරාව අදිශ රාශියකි.',
    },
  },
];
