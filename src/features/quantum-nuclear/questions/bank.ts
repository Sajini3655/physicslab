import { QuantumQuestion } from './types';

export const QUANTUM_NUCLEAR_QUESTION_BANK: QuantumQuestion[] = [
  // ==========================================================================
  // COMPETENCY 11.1: Photoelectric Effect & Photon Theory of Radiation (13 Qs)
  // ==========================================================================
  {
    id: 'qn-11-1-01',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'According to Einstein’s photon theory, when the frequency of monochromatic light incident on a metal surface is doubled while maintaining constant intensity, which of the following statements is true?',
      si: 'අයින්ස්ටයින්ගේ ෆෝටෝන වාදයට අනුව, නියත තීව්‍රතාවක් පවත්වා ගනිමින් ලෝහ පෘෂ්ඨයක් මත පතිත වන ඒකවර්ණ ආලෝකයේ සංඛ්‍යාතය දෙගුණ කළ විට, පහත සඳහන් ප්‍රකාශ අතුරින් සත්‍ය වන්නේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The number of photons emitted per second doubles.', si: 'තත්පරයකට විමෝචනය වන ෆෝටෝන සංඛ්‍යාව දෙගුණ වේ.' } },
      { id: 'B', text: { en: 'The energy of each photon doubles, but the number of photons per second halves.', si: 'එක් එක් ෆෝටෝනයේ ශක්තිය දෙගුණ වන නමුත් තත්පරයකට පැමිණෙන ෆෝටෝන සංඛ්‍යාව අඩක් වේ.' } },
      { id: 'C', text: { en: 'The maximum kinetic energy of photoelectrons doubles.', si: 'ප්‍රකාශ ඉලෙක්ට්‍රෝනවල උපරිම චාලක ශක්තිය දෙගුණ වේ.' } },
      { id: 'D', text: { en: 'The stopping potential remains unchanged.', si: 'නැවැත්වීමේ විභවය නොවෙනස්ව පවතී.' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'Intensity is total energy per second per unit area: I = n * (h*f). If f doubles at constant I, n must halve.',
      si: 'තීව්‍රතාව යනු ඒකක කාලයකදී ඒකක වර්ගඵලයකට ලැබෙන ශක්තියයි: I = n * (hf). I නියතව f දෙගුණ වන විට n අඩක් විය යුතුය.',
    },
    explanation: {
      en: 'Photon energy is E = h*f. Doubling f doubles the energy carried per photon. Since total intensity I = (number of photons per second * h*f) / Area remains constant, the number of incident photons per second must halve.',
      si: 'ෆෝටෝන ශක්තිය E = hf වේ. f දෙගුණ වන විට එක් ෆෝටෝනයක ශක්තිය දෙගුණ වේ. මුළු තීව්‍රතාව නියත බැවින් තත්පරයකට පතිත වන ෆෝටෝන සංඛ්‍යාව අඩක් විය යුතුය.',
    },
  },
  {
    id: 'qn-11-1-02',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'Which of the following experimental facts cannot be explained by classical wave theory of light?',
      si: 'ආලෝකය පිළිබඳ සම්භාව්‍ය තරංග වාදයෙන් පැහැදිලි කළ නොහැක්කේ පහත දැක්වෙන කවර පර්යේෂණාත්මක කරුණද?',
    },
    options: [
      { id: 'A', text: { en: 'Existence of a minimum threshold frequency for photoelectric emission.', si: 'ප්‍රකාශ විද්‍යුත් විමෝචනය සඳහා අවම සීමාකාරී සංඛ්‍යාතයක් පැවතීම.' } },
      { id: 'B', text: { en: 'Instantaneous emission of electrons upon illumination (< 10⁻⁹ s).', si: 'ආලෝකය පතිත වූ සැණින් ඉලෙක්ට්‍රෝන ක්ෂණිකව විමෝචනය වීම (< 10⁻⁹ s).' } },
      { id: 'C', text: { en: 'Maximum kinetic energy is independent of incident light intensity.', si: 'උපරිම චාලක ශක්තිය පතිත ආලෝක තීව්‍රතාව මත රඳා නොපැවතීම.' } },
      { id: 'D', text: { en: 'All of the above.', si: 'ඉහත සියල්ලම.' } },
    ],
    correctOptionId: 'D',
    hint: {
      en: 'Classical wave theory predicted continuous energy accumulation and intensity-dependent kinetic energy.',
      si: 'සම්භාව්‍ය තරංග වාදය අඛණ්ඩ ශක්ති සංචිත වීමක් සහ තීව්‍රතාව මත පදනම් වූ චාලක ශක්තියක් පුරෝකථනය කළේය.',
    },
    explanation: {
      en: 'Classical electromagnetic wave theory failed on all three counts: it could not explain threshold frequency, instantaneous emission without time lag, or the fact that maximum KE depends on frequency rather than intensity.',
      si: 'සම්භාව්‍ය තරංග වාදයට මෙම කරුණු තුනම පැහැදිලි කළ නොහැකි විය: සීමාකාරී සංඛ්‍යාතය, ප්‍රමාදයකින් තොර ක්ෂණික විමෝචනය සහ චාලක ශක්තිය තීව්‍රතාව මත නොව සංඛ්‍යාතය මත රඳා පැවතීම.',
    },
  },
  {
    id: 'qn-11-1-03',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'In a photoelectric experiment, a graph of stopping potential (V_s) versus incident frequency (f) is plotted. The gradient and the x-intercept of this linear graph represent respectively:',
      si: 'ප්‍රකාශ විද්‍යුත් පරීක්ෂණයකදී, නැවැත්වීමේ විභවය (V_s) එදිරිව පතිත සංඛ්‍යාතය (f) ප්‍රස්ථාරගත කරනු ලැබේ. මෙම සරල රේඛාවේ අනුක්‍රමණය සහ x-අන්තඃඛණ්ඩය පිළිවෙළින් නිරූපණය කරන්නේ:',
    },
    options: [
      { id: 'A', text: { en: 'h/e and the threshold frequency f₀.', si: 'h/e සහ සීමාකාරී සංඛ්‍යාතය f₀.' } },
      { id: 'B', text: { en: 'h and the work function Φ.', si: 'h සහ කාර්ය ශ්‍රිතය Φ.' } },
      { id: 'C', text: { en: 'e/h and the threshold wavelength λ₀.', si: 'e/h සහ සීමාකාරී තරංග ආයාමය λ₀.' } },
      { id: 'D', text: { en: 'h/e and the work function Φ in Joules.', si: 'h/e සහ ජූල් වලින් කාර්ය ශ්‍රිතය Φ.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Rearrange e*V_s = h*f - Φ into y = mx + c format: V_s = (h/e)*f - (Φ/e).',
      si: 'e*V_s = h*f - Φ සමීකරණය y = mx + c ආකාරයට සකසන්න: V_s = (h/e)*f - (Φ/e).',
    },
    explanation: {
      en: 'From Einstein’s equation V_s = (h/e)f - (Φ/e), comparing with y = mx + c gives slope m = h/e (a universal constant). Setting V_s = 0 gives f = Φ/h = f_0 (the threshold frequency).',
      si: 'අයින්ස්ටයින් සමීකරණය V_s = (h/e)f - (Φ/e) අනුව, අනුක්‍රමණය m = h/e වන අතර, V_s = 0 වන විට x-අන්තඃඛණ්ඩය f_0 = Φ/h (සීමාකාරී සංඛ්‍යාතය) වේ.',
    },
  },
  {
    id: 'qn-11-1-04',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'Light of frequency f ejects photoelectrons from a metal with maximum velocity v_max. If the frequency of light is increased to 4f, the new maximum velocity of ejected photoelectrons will be:',
      si: 'f සංඛ්‍යාතය සහිත ආලෝකයෙන් ලෝහයකින් උපරිම ප්‍රවේගය v_max සහිත ප්‍රකාශ ඉලෙක්ට්‍රෝන විමෝචනය වේ. ආලෝකයේ සංඛ්‍යාතය 4f දක්වා වැඩි කළහොත්, විමෝචනය වන ප්‍රකාශ ඉලෙක්ට්‍රෝනවල නව උපරිම ප්‍රවේගය වනුයේ:',
    },
    options: [
      { id: 'A', text: { en: 'Exactly 2 v_max', si: 'හරියටම 2 v_max' } },
      { id: 'B', text: { en: 'Greater than 2 v_max', si: '2 v_max ට වඩා වැඩි' } },
      { id: 'C', text: { en: 'Less than 2 v_max', si: '2 v_max ට වඩා අඩු' } },
      { id: 'D', text: { en: 'Exactly 4 v_max', si: 'හරියටම 4 v_max' } },
    ],
    correctOptionId: 'B',
    hint: {
      en: 'K1 = hf - Φ = ½mv1². K2 = 4hf - Φ = 4(hf - Φ) + 3Φ = 4K1 + 3Φ > 4K1.',
      si: 'K1 = hf - Φ. K2 = 4hf - Φ = 4K1 + 3Φ > 4K1. එබැවින් v2² > 4v1².',
    },
    explanation: {
      en: 'Initial KE: K1 = ½mv² = hf - Φ. New KE: K2 = 4hf - Φ = 4(hf - Φ) + 3Φ = 4K1 + 3Φ. Since Φ > 0, K2 > 4K1. Therefore ½mv2² > 4(½mv1²), which yields v2 > 2v1.',
      si: 'ප්‍රාරම්භක K1 = hf - Φ. නව K2 = 4hf - Φ = 4K1 + 3Φ. Φ > 0 බැවින් K2 > 4K1 වේ. එබැවින් v2 > 2v_max වේ.',
    },
  },
  {
    id: 'qn-11-1-05',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'A point source of monochromatic light of power 40 W emits light of wavelength 600 nm uniformly in all directions. What is the rate of photon emission from the source? (Take h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m/s)',
      si: '40 W ජවයක් සහිත ඒකවර්ණ ආලෝක ලක්ෂ්‍ය ප්‍රභවයකින් 600 nm තරංග ආයාමයෙන් යුතු ආලෝකය සියලු දිශාවලට ඒකාකාරව විමෝචනය කරයි. ප්‍රභවයෙන් තත්පරයකට විමෝචනය වන ෆෝටෝන සංඛ්‍යාව කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '1.21 × 10²⁰ photons/s', si: '1.21 × 10²⁰ ෆෝටෝන/s' } },
      { id: 'B', text: { en: '2.42 × 10¹⁹ photons/s', si: '2.42 × 10¹⁹ ෆෝටෝන/s' } },
      { id: 'C', text: { en: '6.03 × 10¹⁸ photons/s', si: '6.03 × 10¹⁸ ෆෝටෝන/s' } },
      { id: 'D', text: { en: '3.62 × 10²¹ photons/s', si: '3.62 × 10²¹ ෆෝටෝන/s' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Energy per photon E = hc/λ. Rate of emission N = P / E.',
      si: 'එක් ෆෝටෝනයක ශක්තිය E = hc/λ. විමෝචන සීඝ්‍රතාව N = P / E.',
    },
    explanation: {
      en: 'E = (6.63 × 10⁻³⁴ × 3.0 × 10⁸) / (600 × 10⁻⁹) = 3.315 × 10⁻¹⁹ J. Number of photons per second N = P / E = 40 / (3.315 × 10⁻¹⁹) ≈ 1.21 × 10²⁰ photons/s.',
      si: 'E = (6.63 × 10⁻³⁴ × 3 × 10⁸) / 600 × 10⁻⁹ = 3.315 × 10⁻¹⁹ J. N = 40 / 3.315 × 10⁻¹⁹ ≈ 1.21 × 10²⁰ ෆෝටෝන/s.',
    },
  },
  {
    id: 'qn-11-1-06',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'When a clean Zinc plate attached to an electroscope is irradiated with ultraviolet rays, photoelectrons are emitted. However, no emission occurs under intense red laser light because:',
      si: 'විද්‍යුත් දර්ශකයකට සවි කළ පිරිසිදු සින්ක් තහඩුවක් මතට පාරජම්බුල කිරණ පතිත කළ විට ප්‍රකාශ ඉලෙක්ට්‍රෝන විමෝචනය වේ. එහෙත් තීව්‍ර රතු ලේසර් ආලෝකය යටතේ විමෝචනයක් සිදු නොවන්නේ:',
    },
    options: [
      { id: 'A', text: { en: 'Red light photons have individual energy less than the work function of Zinc.', si: 'රතු ආලෝක ෆෝටෝනවල තනි ශක්තිය සින්ක්හි කාර්ය ශ්‍රිතයට වඩා අඩු බැවිනි.' } },
      { id: 'B', text: { en: 'Red light is reflected completely by Zinc.', si: 'සින්ක් මගින් රතු ආලෝකය සම්පූර්ණයෙන්ම පරාවර්තනය කරන බැවිනි.' } },
      { id: 'C', text: { en: 'Laser light is coherent and cannot liberate electrons.', si: 'ලේසර් ආලෝකය සුසංගත බැවින් ඉලෙක්ට්‍රෝන නිදහස් කළ නොහැකි බැවිනි.' } },
      { id: 'D', text: { en: 'The red light intensity is too low.', si: 'රතු ආලෝකයේ තීව්‍රතාව ප්‍රමාණවත් නොවන බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Photoelectric emission is a one-photon-to-one-electron quantum interaction.',
      si: 'ප්‍රකාශ විද්‍යුත් විමෝචනය යනු එක් ෆෝටෝනයක් හා එක් ඉලෙක්ට්‍රෝනයක් අතර සිදුවන ක්වොන්ටම් අන්තර්ක්‍රියාවකි.',
    },
    explanation: {
      en: 'Zinc has a work function of ~4.3 eV (threshold in UV range). Red light photons possess only ~1.8 eV, which is far below the threshold energy. No matter how high the intensity (photon density), single red photons cannot liberate electrons.',
      si: 'සින්ක්හි කාර්ය ශ්‍රිතය ~4.3 eV (UV කලාපය) වේ. රතු ආලෝක ෆෝටෝනයක ඇත්තේ ~1.8 eV පමණි. තීව්‍රතාව කොතෙක් වැඩි වුවද තනි ෆෝටෝනයකට ඉලෙක්ට්‍රෝනයක් මුදාහැරිය නොහැක.',
    },
  },
  {
    id: 'qn-11-1-07',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'What is the momentum of a photon of wavelength λ? (h = Planck’s constant, c = speed of light)',
      si: 'තරංග ආයාමය λ වන ෆෝටෝනයක ගම්‍යතාව කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'h / λ', si: 'h / λ' } },
      { id: 'B', text: { en: 'h λ / c', si: 'h λ / c' } },
      { id: 'C', text: { en: 'h c / λ', si: 'h c / λ' } },
      { id: 'D', text: { en: 'h / (c λ)', si: 'h / (c λ)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'p = E / c and E = hc / λ.',
      si: 'p = E / c සහ E = hc / λ වේ.',
    },
    explanation: {
      en: 'From de Broglie and Einstein relations: p = E / c = (hc/λ) / c = h / λ.',
      si: 'ද බ්‍රොයි සහ අයින්ස්ටයින් සම්බන්ධතාවලින්: p = E / c = h / λ වේ.',
    },
  },
  {
    id: 'qn-11-1-08',
    competency: '11.1',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'In a photoelectric setup, the stopping potential for light of wavelength 400 nm is 1.10 V. When the wavelength is changed to 300 nm, what will be the new stopping potential? (hc/e ≈ 1240 V·nm)',
      si: 'ප්‍රකාශ විද්‍යුත් සැකසුමක 400 nm ආලෝකය සඳහා නැවැත්වීමේ විභවය 1.10 V වේ. තරංග ආයාමය 300 nm දක්වා වෙනස් කළ විට නව නැවැත්වීමේ විභවය කොපමණ වේද? (hc/e ≈ 1240 V·nm)',
    },
    options: [
      { id: 'A', text: { en: '2.13 V', si: '2.13 V' } },
      { id: 'B', text: { en: '1.47 V', si: '1.47 V' } },
      { id: 'C', text: { en: '0.85 V', si: '0.85 V' } },
      { id: 'D', text: { en: '3.10 V', si: '3.10 V' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'eV_s1 = hc/λ1 - Φ; eV_s2 = hc/λ2 - Φ. Subtract the two equations: V_s2 - V_s1 = (hc/e)(1/λ2 - 1/λ1).',
      si: 'V_s2 - V_s1 = (hc/e)(1/λ2 - 1/λ1).',
    },
    explanation: {
      en: 'E1 = 1240 / 400 = 3.10 eV. Work function Φ = E1 - eV_s1 = 3.10 - 1.10 = 2.00 eV. For λ2 = 300 nm: E2 = 1240 / 300 = 4.133 eV. Hence eV_s2 = E2 - Φ = 4.133 - 2.00 = 2.133 eV, giving V_s2 ≈ 2.13 V.',
      si: 'E1 = 1240 / 400 = 3.10 eV. Φ = 3.10 - 1.10 = 2.00 eV. 300 nm සඳහා E2 = 1240 / 300 = 4.133 eV. එවිට V_s2 = 4.133 - 2.00 = 2.13 V වේ.',
    },
  },
  {
    id: 'qn-11-1-09',
    competency: '11.1',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Calculate the threshold frequency (in units of 10¹⁴ Hz) for a photosensitive metal having a work function of 2.48 eV. (Take h = 6.63 × 10⁻³⁴ J s, e = 1.60 × 10⁻¹⁹ C)',
      si: 'කාර්ය ශ්‍රිතය 2.48 eV වන ප්‍රකාශ සංවේදී ලෝහයක සීමාකාරී සංඛ්‍යාතය (10¹⁴ Hz ඒකක වලින්) ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 5.98,
      unit: '10¹⁴ Hz',
      tolerance: 0.05,
    },
    hint: {
      en: 'f_0 = Φ / h where Φ is in Joules (multiply eV by 1.60 × 10⁻¹⁹).',
      si: 'f_0 = Φ / h වේ. මෙහි Φ ජූල් වලින් ආදේශ කරන්න (eV අගය 1.60 × 10⁻¹⁹ න් ගුණ කරන්න).',
    },
    explanation: {
      en: 'Φ = 2.48 × 1.60 × 10⁻¹⁹ J = 3.968 × 10⁻¹⁹ J. f_0 = Φ / h = 3.968 × 10⁻¹⁹ / (6.63 × 10⁻³⁴) = 5.985 × 10¹⁴ Hz.',
      si: 'Φ = 2.48 × 1.60 × 10⁻¹⁹ = 3.968 × 10⁻¹⁹ J. f_0 = 3.968 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 5.98 × 10¹⁴ Hz.',
    },
  },
  {
    id: 'qn-11-1-10',
    competency: '11.1',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Ultraviolet light of wavelength 250 nm is incident on a metal with work function 3.60 eV. Determine the stopping potential required to cut off the photocurrent (in Volts). (Take hc = 1240 eV·nm)',
      si: 'කාර්ය ශ්‍රිතය 3.60 eV වන ලෝහයක් මත 250 nm තරංග ආයාමයෙන් යුතු UV ආලෝකය පතිත වේ. ප්‍රකාශ විද්‍යුත් ධාරාව නැවැත්වීමට අවශ්‍ය නැවැත්වීමේ විභවය (V වලින්) ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 1.36,
      unit: 'V',
      tolerance: 0.05,
    },
    hint: {
      en: 'Photon energy E = 1240 / λ (nm). Max KE = E - Φ, and V_s = Max KE / e.',
      si: 'ෆෝටෝන ශක්තිය E = 1240 / λ (nm). K_max = E - Φ, සහ V_s = K_max / e.',
    },
    explanation: {
      en: 'Photon energy E = 1240 / 250 = 4.96 eV. Max KE = 4.96 - 3.60 = 1.36 eV. Therefore stopping potential V_s = 1.36 V.',
      si: 'ෆෝටෝන ශක්තිය E = 1240 / 250 = 4.96 eV. උපරිම KE = 4.96 - 3.60 = 1.36 eV. එබැවින් නැවැත්වීමේ විභවය V_s = 1.36 V වේ.',
    },
  },
  {
    id: 'qn-11-1-11',
    competency: '11.1',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'A photoelectric cathode has a threshold wavelength of 540 nm. If light of wavelength 400 nm falls on it, calculate the maximum speed of emitted photoelectrons in units of 10⁵ m/s. (Take m_e = 9.11 × 10⁻³¹ kg, hc = 1240 eV·nm, 1 eV = 1.6 × 10⁻¹⁹ J)',
      si: 'ප්‍රකාශ විද්‍යුත් කැතෝඩයක සීමාකාරී තරංග ආයාමය 540 nm වේ. ඒ මත 400 nm ආලෝකය පතිත වන විට, විමෝචනය වන ප්‍රකාශ ඉලෙක්ට්‍රෝනවල උපරිම ප්‍රවේගය 10⁵ m/s ඒකක වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 5.31,
      unit: '10⁵ m/s',
      tolerance: 0.05,
    },
    hint: {
      en: 'K_max = hc(1/λ - 1/λ₀) in Joules. Then solve v_max = sqrt(2 * K_max / m_e).',
      si: 'K_max = E - Φ. ඉන්පසු v_max = sqrt(2 * K_max / m_e) යොදන්න.',
    },
    explanation: {
      en: 'E = 1240 / 400 = 3.10 eV; Φ = 1240 / 540 = 2.296 eV. K_max = 3.10 - 2.296 = 0.804 eV = 1.286 × 10⁻¹⁹ J. v_max = sqrt(2 × 1.286 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = 5.31 × 10⁵ m/s.',
      si: 'E = 3.10 eV, Φ = 2.30 eV. K_max = 0.804 eV = 1.286 × 10⁻¹⁹ J. v_max = sqrt(2 × 1.286 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = 5.31 × 10⁵ m/s.',
    },
  },
  {
    id: 'qn-11-1-12',
    competency: '11.1',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'The saturation photocurrent in a photocell under 20 W of incident radiation is 4.8 μA. If the radiation power is increased to 50 W at the same wavelength, what will be the new saturation photocurrent (in μA)?',
      si: 'ප්‍රකාශ කෝෂයකට 20 W විකිරණ බලයක් යටතේ ලැබෙන සන්තෘප්ත ධාරාව 4.8 μA වේ. එම තරංග ආයාමයෙන්ම විකිරණ ජවය 50 W දක්වා වැඩි කළහොත් නව සන්තෘප්ත ධාරාව (μA වලින්) කුමක්ද?',
    },
    numericalAnswer: {
      value: 12.0,
      unit: 'μA',
      tolerance: 0.05,
    },
    hint: {
      en: 'Saturation photocurrent is directly proportional to incident radiation power/intensity: I ∝ P.',
      si: 'සන්තෘප්ත ප්‍රකාශ ධාරාව පතිත විකිරණ ජවයට/තීව්‍රතාවට අනුලෝමව සමානුපාතික වේ: I ∝ P.',
    },
    explanation: {
      en: 'Since I_sat ∝ Power: I2 = I1 × (P2 / P1) = 4.8 μA × (50 / 20) = 4.8 × 2.5 = 12.0 μA.',
      si: 'I ∝ P බැවින්: I2 = 4.8 × (50 / 20) = 12.0 μA වේ.',
    },
  },
  {
    id: 'qn-11-1-13',
    competency: '11.1',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'When light of wavelength λ illuminates a metal surface, stopping potential is V. When light of wavelength 2λ is used, stopping potential is V/4. Calculate the threshold wavelength λ₀ of the metal in terms of λ (give the numerical ratio λ₀ / λ).',
      si: 'λ තරංග ආයාමය සහිත ආලෝකය ලෝහයක් මත පතිත වූ විට නැවැත්වීමේ විභවය V වේ. 2λ ආලෝකය භාවිත කළ විට නැවැත්වීමේ විභවය V/4 වේ. λ ඇසුරින් ලෝහයේ සීමාකාරී තරංග ආයාමය λ₀ ගණනය කරන්න (λ₀ / λ අනුපාතය දෙන්න).',
    },
    numericalAnswer: {
      value: 3.0,
      unit: 'ratio',
      tolerance: 0.05,
    },
    hint: {
      en: 'eV = hc/λ - hc/λ₀ and e(V/4) = hc/(2λ) - hc/λ₀. Multiply second equation by 4 and equate to first.',
      si: 'eV = hc/λ - hc/λ₀ සහ e(V/4) = hc/(2λ) - hc/λ₀. දෙවන සමීකරණය 4 න් ගුණ කර පළමු සමීකරණයට සමාන කරන්න.',
    },
    explanation: {
      en: 'eV = hc/λ - hc/λ₀ and 4(eV/4) = 4(hc/2λ - hc/λ₀) = 2hc/λ - 4hc/λ₀. Equating the two expressions for eV: hc/λ - hc/λ₀ = 2hc/λ - 4hc/λ₀ ⟹ 3hc/λ₀ = hc/λ ⟹ λ₀ = 3λ. Hence the ratio is 3.0.',
      si: 'hc/λ - hc/λ₀ = 2hc/λ - 4hc/λ₀ ⟹ 3/λ₀ = 1/λ ⟹ λ₀ = 3λ. එබැවින් අනුපාතය 3.0 වේ.',
    },
  },

  // ==========================================================================
  // COMPETENCY 11.2: Wave-Particle Duality, de Broglie Waves & X-Rays (13 Qs)
  // ==========================================================================
  {
    id: 'qn-11-2-01',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'An electron and an alpha particle have the same kinetic energy. What is the ratio of the de Broglie wavelength of the electron to that of the alpha particle?',
      si: 'ඉලෙක්ට්‍රෝනයක සහ ඇල්ෆා අංශුවක චාලක ශක්තීන් සමාන වේ. ඉලෙක්ට්‍රෝනයේ ද බ්‍රොයි තරංග ආයාමය සහ ඇල්ෆා අංශුවේ ද බ්‍රොයි තරංග ආයාමය අතර අනුපාතය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '√(m_α / m_e)', si: '√(m_α / m_e)' } },
      { id: 'B', text: { en: '√(m_e / m_α)', si: '√(m_e / m_α)' } },
      { id: 'C', text: { en: 'm_α / m_e', si: 'm_α / m_e' } },
      { id: 'D', text: { en: '1 : 1', si: '1 : 1' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'λ = h / p = h / √(2m K). At equal kinetic energy K, λ ∝ 1 / √m.',
      si: 'λ = h / √(2m K). K සමාන විට λ ∝ 1 / √m වේ.',
    },
    explanation: {
      en: 'Since de Broglie wavelength is λ = h / √(2m K), at identical kinetic energies λ_e / λ_α = √(m_α / m_e). Since m_α ≈ 7300 m_e, the electron has a much longer wavelength.',
      si: 'λ = h / √(2mK) බැවින්, චාලක ශක්තීන් සමාන විට λ_e / λ_α = √(m_α / m_e) වේ.',
    },
  },
  {
    id: 'qn-11-2-02',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'In an X-ray tube operated at accelerating voltage V, the minimum cutoff wavelength λ_min of continuous Bremsstrahlung X-rays depends on V according to:',
      si: 'V ත්වරණ විභවයක් යටතේ ක්‍රියාකරන එක්ස්-කිරණ නළයක සන්තතික එක්ස්-කිරණ වර්ණාවලියේ අවම තරංග ආයාමය λ_min, V මත රඳා පවතින්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'λ_min ∝ 1 / V', si: 'λ_min ∝ 1 / V' } },
      { id: 'B', text: { en: 'λ_min ∝ 1 / √V', si: 'λ_min ∝ 1 / √V' } },
      { id: 'C', text: { en: 'λ_min ∝ V', si: 'λ_min ∝ V' } },
      { id: 'D', text: { en: 'λ_min is independent of V.', si: 'λ_min යනු V ගෙන් ස්වායත්ත අගයකි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Duane-Hunt law: hc / λ_min = eV.',
      si: 'ඩුවාන්-හන්ට් නියමය: hc / λ_min = eV.',
    },
    explanation: {
      en: 'When an electron loses all its kinetic energy in a single collision to produce a single photon: E_max = hc / λ_min = eV ⟹ λ_min = hc / (eV). Hence λ_min ∝ 1/V.',
      si: 'තනි ගැටුමකින් ඉලෙක්ට්‍රෝනයේ සම්පූර්ණ චාලක ශක්තිය ෆෝටෝනයක් බවට පත්වන විට: hc / λ_min = eV ⟹ λ_min ∝ 1/V වේ.',
    },
  },
  {
    id: 'qn-11-2-03',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'Which historic experiment provided the first direct conclusive evidence for the wave nature of electrons by demonstrating diffraction rings?',
      si: 'විවර්තන වළලු පෙන්වමින් ඉලෙක්ට්‍රෝනවල තරංගමය ස්වභාවය පිළිබඳ පළමු සෘජු තීරණාත්මක සාක්ෂිය සැපයූ ඓතිහාසික පරීක්ෂණය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Davisson-Germer nickel crystal experiment', si: 'ඩැවිසන්-ජර්මර් නිකල් ස්ඵටික පරීක්ෂණය' } },
      { id: 'B', text: { en: 'Rutherford alpha particle scattering experiment', si: 'රදර්ෆර්ඩ්ගේ ඇල්ෆා අංශු ප්‍රකිරණ පරීක්ෂණය' } },
      { id: 'C', text: { en: 'Millikan oil drop experiment', si: 'මිලිකන්ගේ තෙල් බිංදු පරීක්ෂණය' } },
      { id: 'D', text: { en: 'J.J. Thomson cathode ray e/m experiment', si: 'ජේ.ජේ. තොම්සන්ගේ කැතෝඩ කිරණ e/m පරීක්ෂණය' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Conducted in 1927 using slow electron beams scattered off a nickel lattice.',
      si: '1927 දී නිකල් දැලිසක් මතින් මන්දගාමී ඉලෙක්ට්‍රෝන කදම්බ විසිරුවා සිදු කරන ලදී.',
    },
    explanation: {
      en: 'The Davisson-Germer experiment (and G.P. Thomson’s thin foil diffraction) demonstrated that electrons undergo constructive and destructive interference like X-rays, validating de Broglie’s matter wave hypothesis.',
      si: 'ඩැවිසන්-ජර්මර් පරීක්ෂණයෙන් නිකල් ස්ඵටිකයෙන් පරාවර්තිත ඉලෙක්ට්‍රෝන කදම්බ මැදිහත්වීම් උපරිම ඇති කරන බව පෙන්වා දුන් අතර එය ද බ්‍රොයි තරංග වාදය සනාථ කළේය.',
    },
  },
  {
    id: 'qn-11-2-04',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'In an X-ray spectrum, the characteristic K_α peak occurs when:',
      si: 'එක්ස්-කිරණ වර්ණාවලියක ලාක්ෂණික K_α මුදුන ඇති වන්නේ:',
    },
    options: [
      { id: 'A', text: { en: 'An electron from the L-shell (n=2) transitions to fill a vacancy in the K-shell (n=1).', si: 'L-කවචයේ (n=2) ඉලෙක්ට්‍රෝනයක් K-කවචයේ (n=1) ඇති හිඩැසක් පිරවීමට සංක්‍රාන්ති වන විට.' } },
      { id: 'B', text: { en: 'An electron from the M-shell (n=3) transitions to the K-shell (n=1).', si: 'M-කවචයේ (n=3) ඉලෙක්ට්‍රෝනයක් K-කවචයට (n=1) සංක්‍රාන්ති වන විට.' } },
      { id: 'C', text: { en: 'An incoming electron decelerates in the nuclear Coulomb field without ionization.', si: 'පිටතින් පැමිණි ඉලෙක්ට්‍රෝනයක් අයනීකරණයකින් තොරව න්‍යෂ්ටික ක්ෂේත්‍රයේ මන්දනය වන විට.' } },
      { id: 'D', text: { en: 'A K-shell electron is ejected from the atom.', si: 'K-කවචයේ ඉලෙක්ට්‍රෝනයක් පරමාණුවෙන් ඉවතට විසිවන විට.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'K-series transitions drop into the n=1 K-shell. α denotes the adjacent shell (L, n=2), β denotes n=3.',
      si: 'K-ශ්‍රේණියේදී ඉලෙක්ට්‍රෝනය වැටෙන්නේ n=1 කවචයටයි. α යනු යාබද n=2 (L) කවචයයි.',
    },
    explanation: {
      en: 'When a fast bombarding electron knocks out an inner K-shell (n=1) electron, an electron from the L-shell (n=2) falls into the vacancy, emitting a characteristic K_α X-ray photon with energy ΔE = E_L - E_K.',
      si: 'වේගවත් ඉලෙක්ට්‍රෝනයක් ගැටී K-කවචයෙන් (n=1) ඉලෙක්ට්‍රෝනයක් ඉවත් වූ විට, L-කවචයේ (n=2) ඉලෙක්ට්‍රෝනයක් එම හිඩැසට වැටීමේදී K_α ලාක්ෂණික එක්ස්-කිරණ ෆෝටෝනයක් විමෝචනය වේ.',
    },
  },
  {
    id: 'qn-11-2-05',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'A proton and an electron have identical de Broglie wavelengths. Which particle possesses greater kinetic energy, and why?',
      si: 'ප්‍රෝටෝනයකට සහ ඉලෙක්ට්‍රෝනයකට සමාන ද බ්‍රොයි තරංග ආයාම ඇත. වැඩි චාලක ශක්තියක් ඇත්තේ කුමන අංශුවටද, මන්ද?',
    },
    options: [
      { id: 'A', text: { en: 'The electron, because kinetic energy K = p² / (2m) and m_e < m_p.', si: 'ඉලෙක්ට්‍රෝනයට, මක්නිසාද යත් K = p² / (2m) වන අතර m_e < m_p බැවිනි.' } },
      { id: 'B', text: { en: 'The proton, because it has greater mass.', si: 'ප්‍රෝටෝනයට, මක්නිසාද යත් ඊට වැඩි ස්කන්ධයක් ඇති බැවිනි.' } },
      { id: 'C', text: { en: 'Both have the exact same kinetic energy.', si: 'දෙකටම එකම චාලක ශක්තියක් ඇත.' } },
      { id: 'D', text: { en: 'The proton, because its charge is positive.', si: 'ප්‍රෝටෝනයට, මක්නිසාද යත් එහි ආරෝපණය ධන බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Equal de Broglie wavelength implies equal momentum p = h/λ. Then compare K = p² / 2m.',
      si: 'සමාන තරංග ආයාම යනු සමාන ගම්‍යතාව (p) වේ. K = p² / 2m සලකන්න.',
    },
    explanation: {
      en: 'Since λ = h/p, equal wavelengths mean equal momenta (p_e = p_p). Kinetic energy is K = p² / (2m). Since m_e ≈ m_p / 1836, the electron has ~1836 times greater kinetic energy than the proton.',
      si: 'λ = h/p බැවින් සමාන තරංග ආයාම ඇති විට ගම්‍යතාවන් සමාන වේ. K = p² / (2m) බැවින් ස්කන්ධය අඩු ඉලෙක්ට්‍රෝනයට බොහෝ වැඩි චාලක ශක්තියක් හිමි වේ.',
    },
  },
  {
    id: 'qn-11-2-06',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'If the accelerating potential difference of an electron microscope is increased from 25 kV to 100 kV, the de Broglie wavelength of the imaging electrons will:',
      si: 'ඉලෙක්ට්‍රෝන අන්වීක්ෂයක ත්වරණ විභව අන්තරය 25 kV සිට 100 kV දක්වා 4 ගුණයකින් වැඩි කළහොත්, ඉලෙක්ට්‍රෝනවල ද බ්‍රොයි තරංග ආයාමය:',
    },
    options: [
      { id: 'A', text: { en: 'Halve (decrease by factor of 2)', si: 'අඩක් වේ (සාධක 2කින් අඩු වේ)' } },
      { id: 'B', text: { en: 'Decrease by factor of 4', si: 'සාධක 4කින් අඩු වේ' } },
      { id: 'C', text: { en: 'Double', si: 'දෙගුණ වේ' } },
      { id: 'D', text: { en: 'Increase by factor of 4', si: '4 ගුණයකින් වැඩි වේ' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'λ ∝ 1 / √V. Increasing V by factor 4 decreases λ by factor √4 = 2.',
      si: 'λ ∝ 1 / √V වේ. V 4 ගුණයකින් වැඩි වන විට λ අගය √4 = 2 කින් බෙදේ.',
    },
    explanation: {
      en: 'For non-relativistic electrons, λ = h / √(2mqV) ∝ 1/√V. Thus λ2 / λ1 = √(25 / 100) = √(1/4) = 1/2. The wavelength halves, which doubles resolving power.',
      si: 'λ ∝ 1/√V බැවින්: λ2/λ1 = √(25/100) = 1/2 වේ. තරංග ආයාමය අඩක් වන අතර විභේදන බලය දෙගුණ වේ.',
    },
  },
  {
    id: 'qn-11-2-07',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'Why do everyday macroscopic objects (such as a 150 g cricket ball bowled at 40 m/s) NOT display observable wave diffraction effects?',
      si: 'එදිනෙදා සාර්ව වස්තූන් (උදා: 40 m/s ප්‍රවේගයෙන් යවන 150 g ක්‍රිකට් පන්දුවක්) නිරීක්ෂණය කළ හැකි තරංග විවර්තන නොපෙන්වන්නේ මන්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Their de Broglie wavelength (~10⁻³⁴ m) is unimaginably smaller than any physical aperture or atomic lattice spacing.', si: 'ඒවායේ ද බ්‍රොයි තරංග ආයාමය (~10⁻³⁴ m) පරමාණුක දැලිස් පරතරවලට වඩා අතිශයින්ම කුඩා බැවිනි.' } },
      { id: 'B', text: { en: 'Macroscopic objects do not possess momentum.', si: 'සාර්ව වස්තුවලට ගම්‍යතාවක් නොමැති බැවිනි.' } },
      { id: 'C', text: { en: 'Wave-particle duality only applies to charged particles.', si: 'තරංග-අංශු ද්වෛතය අදාළ වන්නේ ආරෝපිත අංශුවලට පමණක් බැවිනි.' } },
      { id: 'D', text: { en: 'Air resistance destroys the de Broglie waves.', si: 'වායු ප්‍රතිරෝධය මගින් ද බ්‍රොයි තරංග විනාශ කරන බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Diffraction is observable only when obstacle/slit size is comparable to wavelength λ = h/(mv).',
      si: 'විවර්තනය නිරීක්ෂණය කළ හැක්කේ බාධකයේ ප්‍රමාණය තරංග ආයාමයට ආසන්න වන විට පමණි.',
    },
    explanation: {
      en: 'For a 0.15 kg ball at 40 m/s: p = 6 kg m/s. λ = 6.63 × 10⁻³⁴ / 6 ≈ 1.1 × 10⁻³⁴ m. Since this is 10²⁴ times smaller than an atomic nucleus (~10⁻¹⁵ m), wave effects are completely unobservable.',
      si: 'ක්‍රිකට් පන්දුවේ තරංග ආයාමය ~1.1 × 10⁻³⁴ m තරම් අතිශය කුඩා වන අතර, එය පරමාණුක න්‍යෂ්ටියකටත් වඩා බිලියන ගණනක් කුඩා බැවින් විවර්තනයක් දැකිය නොහැක.',
    },
  },
  {
    id: 'qn-11-2-08',
    competency: '11.2',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'In an X-ray tube, if the tube current is doubled while keeping the accelerating high voltage constant, what happens to the resulting X-ray beam?',
      si: 'එක්ස්-කිරණ නළයක ත්වරණ අධි විභවය නියතව තබාගෙන නල ධාරාව දෙගුණ කළහොත්, පිටවන එක්ස්-කිරණ කදම්බයට කුමක් සිදුවේද?',
    },
    options: [
      { id: 'A', text: { en: 'The intensity of X-rays doubles, but the minimum wavelength λ_min remains unchanged.', si: 'එක්ස්-කිරණ තීව්‍රතාව දෙගුණ වන නමුත් අවම තරංග ආයාමය λ_min නොවෙනස්ව පවතී.' } },
      { id: 'B', text: { en: 'The minimum wavelength λ_min halves.', si: 'අවම තරංග ආයාමය λ_min අඩක් වේ.' } },
      { id: 'C', text: { en: 'Both intensity and minimum wavelength double.', si: 'තීව්‍රතාව සහ අවම තරංග ආයාමය යන දෙකම දෙගුණ වේ.' } },
      { id: 'D', text: { en: 'The penetrating power (hardness) of X-rays increases.', si: 'එක්ස්-කිරණවල විනිවිදීමේ හැකියාව (දෘඪතාව) වැඩි වේ.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Voltage governs photon energy (penetrating hardness & λ_min); filament/tube current governs number of electrons and photons (intensity).',
      si: 'විභවයෙන් ෆෝටෝන ශක්තිය (දෘඪතාව සහ λ_min) පාලනය වන අතර, ධාරාවෙන් ෆෝටෝන ගණන (තීව්‍රතාව) පාලනය වේ.',
    },
    explanation: {
      en: 'Tube current determines the number of electrons striking the target per second, hence doubling the intensity (total photons emitted). The voltage V determines maximum photon energy hc/λ_min = eV, so λ_min and penetrating hardness remain unchanged.',
      si: 'නල ධාරාව දෙගුණ කිරීමෙන් තත්පරයකට ඉලක්කය මත වදින ඉලෙක්ට්‍රෝන ගණන දෙගුණ වී තීව්‍රතාව දෙගුණ වේ. එහෙත් V නියත බැවින් λ_min සහ විනිවිදීමේ හැකියාව වෙනස් නොවේ.',
    },
  },
  {
    id: 'qn-11-2-09',
    competency: '11.2',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Calculate the de Broglie wavelength of an electron accelerated from rest across a potential difference of 150 V (in picometers, pm). (Take h = 6.63 × 10⁻³⁴ J s, m_e = 9.11 × 10⁻³¹ kg, e = 1.60 × 10⁻¹⁹ C)',
      si: '150 V විභව අන්තරයක් හරහා නිශ්චලතාවයෙන් ත්වරණය කරන ලද ඉලෙක්ට්‍රෝනයක ද බ්‍රොයි තරංග ආයාමය පිකෝමීටර (pm) වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 100.2,
      unit: 'pm',
      tolerance: 0.05,
    },
    hint: {
      en: 'Use λ = 1.227 / √V nm, and convert nm to pm (1 nm = 1000 pm).',
      si: 'λ = 1.227 / √V nm සූත්‍රය භාවිත කර pm වලට හරවන්න (1 nm = 1000 pm).',
    },
    explanation: {
      en: 'p = √(2 m_e e V) = √(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × 150) = 6.617 × 10⁻²⁴ kg m/s. λ = h / p = 6.63 × 10⁻³⁴ / 6.617 × 10⁻²⁴ = 1.002 × 10⁻¹⁰ m = 100.2 pm.',
      si: 'p = √(2mqV) = 6.617 × 10⁻²⁴ kg m/s. λ = 6.63 × 10⁻³⁴ / 6.617 × 10⁻²⁴ = 1.002 × 10⁻¹⁰ m = 100.2 pm.',
    },
  },
  {
    id: 'qn-11-2-10',
    competency: '11.2',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'An X-ray tube operates at an accelerating potential of 40 kV. Calculate the cutoff minimum wavelength λ_min of the emitted X-rays in picometers (pm). (Take hc = 1240 eV·nm)',
      si: 'එක්ස්-කිරණ නළයක් 40 kV ත්වරණ විභවයකින් ක්‍රියා කරයි. විමෝචිත එක්ස්-කිරණවල අවම කඩඉම් තරංග ආයාමය λ_min පිකෝමීටර (pm) වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 31.0,
      unit: 'pm',
      tolerance: 0.05,
    },
    hint: {
      en: 'λ_min = 1240 / V (in nm where V is in volts). 1 nm = 1000 pm.',
      si: 'λ_min = 1240 / V (nm වලින්). 1 nm = 1000 pm.',
    },
    explanation: {
      en: 'λ_min = 1240 eV·nm / 40000 eV = 0.0310 nm = 31.0 pm.',
      si: 'λ_min = 1240 / 40000 = 0.031 nm = 31.0 pm වේ.',
    },
  },
  {
    id: 'qn-11-2-11',
    competency: '11.2',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'A thermal neutron has a kinetic energy equal to 0.025 eV (at room temperature). Calculate its de Broglie wavelength in Angstroms (1 Å = 10⁻¹⁰ m). (Take m_n = 1.675 × 10⁻²⁷ kg, h = 6.63 × 10⁻³⁴ J s, 1 eV = 1.6 × 10⁻¹⁹ J)',
      si: 'තාපජ නියුට්‍රෝනයක චාලක ශක්තිය 0.025 eV වේ. එහි ද බ්‍රොයි තරංග ආයාමය ඇන්ග්ස්ට්‍රොම් (Å) වලින් ගණනය කරන්න (1 Å = 10⁻¹⁰ m).',
    },
    numericalAnswer: {
      value: 1.81,
      unit: 'Å',
      tolerance: 0.05,
    },
    hint: {
      en: 'K = 0.025 × 1.6 × 10⁻¹⁹ J. p = √(2 m_n K), then λ = h / p.',
      si: 'K = 0.025 × 1.6 × 10⁻¹⁹ J. p = √(2 m_n K), ඉන්පසු λ = h / p යොදන්න.',
    },
    explanation: {
      en: 'K = 0.025 × 1.6 × 10⁻¹⁹ = 4.0 × 10⁻²¹ J. p = √(2 × 1.675 × 10⁻²⁷ × 4.0 × 10⁻²¹) = 3.66 × 10⁻²⁴ kg m/s. λ = 6.63 × 10⁻³⁴ / 3.66 × 10⁻²⁴ = 1.81 × 10⁻¹⁰ m = 1.81 Å.',
      si: 'K = 4.0 × 10⁻²¹ J. p = 3.66 × 10⁻²⁴ kg m/s. λ = 6.63 × 10⁻³⁴ / 3.66 × 10⁻²⁴ = 1.81 × 10⁻¹⁰ m = 1.81 Å.',
    },
  },
  {
    id: 'qn-11-2-12',
    competency: '11.2',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'In an X-ray Coolidge tube, electrons strike a molybdenum target with kinetic energy 30 keV. What is the maximum frequency of the generated continuous X-rays in units of 10¹⁸ Hz? (Take h = 6.63 × 10⁻³⁴ J s, e = 1.60 × 10⁻¹⁹ C)',
      si: 'කූලිජ් නළයක ඉලෙක්ට්‍රෝන 30 keV චාලක ශක්තියෙන් යුතුව ඉලක්කය මත වදී. ජනනය වන සන්තතික එක්ස්-කිරණවල උපරිම සංඛ්‍යාතය 10¹⁸ Hz ඒකක වලින් කොපමණද?',
    },
    numericalAnswer: {
      value: 7.24,
      unit: '10¹⁸ Hz',
      tolerance: 0.05,
    },
    hint: {
      en: 'E_max = h * f_max = eV. Hence f_max = eV / h.',
      si: 'E_max = h * f_max = eV. එබැවින් f_max = eV / h.',
    },
    explanation: {
      en: 'E = 30000 × 1.6 × 10⁻¹⁹ = 4.80 × 10⁻¹⁵ J. f_max = 4.80 × 10⁻¹⁵ / (6.63 × 10⁻³⁴) = 7.24 × 10¹⁸ Hz.',
      si: 'E = 4.80 × 10⁻¹⁵ J. f_max = 4.80 × 10⁻¹⁵ / 6.63 × 10⁻³⁴ = 7.24 × 10¹⁸ Hz.',
    },
  },
  {
    id: 'qn-11-2-13',
    competency: '11.2',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'An electron microscope uses electrons accelerated through 50 kV. What is the momentum of each electron in units of 10⁻²³ kg·m/s? (Take m_e = 9.11 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C)',
      si: 'ඉලෙක්ට්‍රෝන අන්වීක්ෂයක 50 kV විභවයකින් ත්වරණය කළ ඉලෙක්ට්‍රෝන භාවිත වේ. එක් ඉලෙක්ට්‍රෝනයක ගම්‍යතාව 10⁻²³ kg·m/s ඒකක වලින් කොපමණද?',
    },
    numericalAnswer: {
      value: 1.21,
      unit: '10⁻²³ kg·m/s',
      tolerance: 0.05,
    },
    hint: {
      en: 'p = √(2 m_e q V).',
      si: 'p = √(2 m_e q V) සූත්‍රය යොදන්න.',
    },
    explanation: {
      en: 'p = √(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × 50000) = √(1.458 × 10⁻⁴⁵) = 1.207 × 10⁻²² kg m/s = 1.21 × 10⁻²³ kg·m/s (scaling to 10⁻²³).',
      si: 'p = √(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × 50000) ≈ 1.21 × 10⁻²² kg m/s.',
    },
  },

  // ==========================================================================
  // COMPETENCY 11.3: Atomic Models & Line Emission Spectra (13 Qs)
  // ==========================================================================
  {
    id: 'qn-11-3-01',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'Which of the following is Bohr’s angular momentum quantization postulate for an electron in a stable hydrogen stationary orbit of principal quantum number n?',
      si: 'ප්‍රධාන ක්වොන්ටම් අංකය n වන ස්ථායී කක්ෂයක ඉලෙක්ට්‍රෝනයක කෝණික ගම්‍යතා ක්වොන්ටීකරණය පිළිබඳ බෝර්ගේ උපකල්පනය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'L = n h / (2π)', si: 'L = n h / (2π)' } },
      { id: 'B', text: { en: 'L = 2π n / h', si: 'L = 2π n / h' } },
      { id: 'C', text: { en: 'L = n² h / (2π)', si: 'L = n² h / (2π)' } },
      { id: 'D', text: { en: 'L = h / (2π n)', si: 'L = h / (2π n)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Angular momentum mvr must equal an integer multiple of h-bar (h / 2π).',
      si: 'කෝණික ගම්‍යතාව mvr යනු h / (2π) හි පූර්ණ සංඛ්‍යා ගුණිතයකි.',
    },
    explanation: {
      en: 'Bohr’s second postulate states that the orbital angular momentum of an electron in a permissible stationary orbit is an integral multiple of h/(2π): L = mvr = nh / (2π), where n = 1, 2, 3...',
      si: 'බෝර්ගේ දෙවන උපකල්පනයට අනුව ස්ථායී කක්ෂයක ඉලෙක්ට්‍රෝනයේ කෝණික ගම්‍යතාව L = mvr = nh / (2π) වේ.',
    },
  },
  {
    id: 'qn-11-3-02',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'In the hydrogen emission spectrum, which spectral series falls within the visible region of electromagnetic radiation?',
      si: 'හයිඩ්‍රජන් විමෝචන වර්ණාවලියේ දෘශ්‍ය කලාපයට අයත් වන වර්ණාවලි ශ්‍රේණිය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Balmer series', si: 'බාමර් ශ්‍රේණිය' } },
      { id: 'B', text: { en: 'Lyman series', si: 'ලයිමන් ශ්‍රේණිය' } },
      { id: 'C', text: { en: 'Paschen series', si: 'පාෂන් ශ්‍රේණිය' } },
      { id: 'D', text: { en: 'Pfund series', si: 'ෆන්ඩ් ශ්‍රේණිය' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Transitions ending at n=2 produce visible lines (such as Hα red and Hβ blue-green).',
      si: 'n=2 මට්ටමට වැටෙන ඉලෙක්ට්‍රෝන සංක්‍රාන්ති දෘශ්‍ය ආලෝක කලාපයේ පවතී.',
    },
    explanation: {
      en: 'The Balmer series corresponds to transitions from higher states to n=2, emitting photons between ~400 nm and ~700 nm in the visible spectrum. Lyman (n=1) is in ultraviolet; Paschen (n=3) is in infrared.',
      si: 'බාමර් ශ්‍රේණිය (n=2 ට වැටෙන) දෘශ්‍ය කලාපයේ පවතී. ලයිමන් (n=1) පාරජම්බුල වන අතර පාෂන් (n=3) අධෝරක්ත වේ.',
    },
  },
  {
    id: 'qn-11-3-03',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'The ground state energy of a hydrogen atom is -13.6 eV. What is the kinetic energy (K) and potential energy (U) of the electron in the ground state?',
      si: 'හයිඩ්‍රජන් පරමාණුවේ භූමි මට්ටමේ මුළු ශක්තිය -13.6 eV වේ. භූමි මට්ටමේදී ඉලෙක්ට්‍රෝනයේ චාලක ශක්තිය (K) සහ විභව ශක්තිය (U) පිළිවෙළින් කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: 'K = +13.6 eV, U = -27.2 eV', si: 'K = +13.6 eV, U = -27.2 eV' } },
      { id: 'B', text: { en: 'K = -13.6 eV, U = 0 eV', si: 'K = -13.6 eV, U = 0 eV' } },
      { id: 'C', text: { en: 'K = +27.2 eV, U = -40.8 eV', si: 'K = +27.2 eV, U = -40.8 eV' } },
      { id: 'D', text: { en: 'K = +6.8 eV, U = -20.4 eV', si: 'K = +6.8 eV, U = -20.4 eV' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Virial theorem for Coulomb potential: Total energy E = -K and U = 2E = -2K.',
      si: 'කූලෝම් විභවය සඳහා: මුළු ශක්තිය E = -K සහ U = 2E = -2K වේ.',
    },
    explanation: {
      en: 'In Bohr hydrogen atom: E = K + U. By the Virial theorem: U = -2K, so E = K - 2K = -K. Since E = -13.6 eV, K = +13.6 eV and U = 2(-13.6) = -27.2 eV.',
      si: 'වීරියල් ප්‍රමේයය අනුව: U = 2E = 2(-13.6) = -27.2 eV වන අතර, K = -E = +13.6 eV වේ.',
    },
  },
  {
    id: 'qn-11-3-04',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'What is the minimum excitation energy required to raise a hydrogen atom from its ground state (n=1) to its first excited state (n=2)?',
      si: 'හයිඩ්‍රජන් පරමාණුවක් එහි භූමි මට්ටමේ (n=1) සිට පළමු උද්දීපිත මට්ටමට (n=2) ඔසවා තැබීමට අවශ්‍ය අවම උද්දීපන ශක්තිය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '10.2 eV', si: '10.2 eV' } },
      { id: 'B', text: { en: '3.4 eV', si: '3.4 eV' } },
      { id: 'C', text: { en: '13.6 eV', si: '13.6 eV' } },
      { id: 'D', text: { en: '1.51 eV', si: '1.51 eV' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'E1 = -13.6 eV, E2 = -13.6 / 2² = -3.4 eV. ΔE = E2 - E1.',
      si: 'E1 = -13.6 eV, E2 = -3.4 eV. ΔE = E2 - E1.',
    },
    explanation: {
      en: 'E1 = -13.6 eV. For n=2: E2 = -13.6 / 4 = -3.4 eV. The required excitation energy is ΔE = E2 - E1 = -3.4 - (-13.6) = 10.2 eV.',
      si: 'E1 = -13.6 eV, E2 = -3.4 eV. උද්දීපන ශක්තිය ΔE = -3.4 - (-13.6) = 10.2 eV වේ.',
    },
  },
  {
    id: 'qn-11-3-05',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'What is the ratio of the longest wavelength to the shortest wavelength (series limit) in the Lyman series of hydrogen?',
      si: 'හයිඩ්‍රජන්හි ලයිමන් ශ්‍රේණියේ උපරිම තරංග ආයාමය සහ අවම තරංග ආයාමය (ශ්‍රේණි සීමාව) අතර අනුපාතය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '4 / 3', si: '4 / 3' } },
      { id: 'B', text: { en: '9 / 5', si: '9 / 5' } },
      { id: 'C', text: { en: '3 / 2', si: '3 / 2' } },
      { id: 'D', text: { en: '4 / 1', si: '4 / 1' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Lyman: n1 = 1. Longest wavelength is n2 = 2 (smallest ΔE). Shortest wavelength is n2 = ∞.',
      si: 'ලයිමන්: n1 = 1. උපරිම තරංග ආයාමය සඳහා n2 = 2 (අවම ΔE). අවම තරංග ආයාමය සඳහා n2 = ∞.',
    },
    explanation: {
      en: 'Longest wavelength: 1/λ_max = R(1/1² - 1/2²) = 3R/4 ⟹ λ_max = 4/(3R). Shortest wavelength: 1/λ_min = R(1/1² - 1/∞) = R ⟹ λ_min = 1/R. Ratio λ_max / λ_min = (4/3R) / (1/R) = 4/3.',
      si: '1/λ_max = R(1 - 1/4) = 3R/4 ⟹ λ_max = 4/(3R). 1/λ_min = R(1 - 0) = R ⟹ λ_min = 1/R. අනුපාතය = (4/3R) / (1/R) = 4/3 වේ.',
    },
  },
  {
    id: 'qn-11-3-06',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'How does the orbital radius r_n of an electron in a hydrogen atom scale with principal quantum number n in Bohr’s model?',
      si: 'බෝර් ආකෘතියේ හයිඩ්‍රජන් පරමාණුවේ ඉලෙක්ට්‍රෝනයක කක්ෂීය අරය r_n ප්‍රධාන ක්වොන්ටම් අංකය n සමඟ විචලනය වන්නේ කෙසේද?',
    },
    options: [
      { id: 'A', text: { en: 'r_n ∝ n²', si: 'r_n ∝ n²' } },
      { id: 'B', text: { en: 'r_n ∝ n', si: 'r_n ∝ n' } },
      { id: 'C', text: { en: 'r_n ∝ 1/n', si: 'r_n ∝ 1/n' } },
      { id: 'D', text: { en: 'r_n ∝ √n', si: 'r_n ∝ √n' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Bohr radius formula: r_n = (n² h² ε₀) / (π m e²).',
      si: 'බෝර් අරය සූත්‍රය: r_n = (n² h² ε₀) / (π m e²).',
    },
    explanation: {
      en: 'In Bohr’s theory, r_n = n² * a_0, where a_0 ≈ 0.529 Å is the first Bohr radius. The orbital radius is directly proportional to n².',
      si: 'බෝර් න්‍යාය අනුව r_n = n² a_0 වන බැවින් කක්ෂීය අරය n² ට අනුලෝමව සමානුපාතික වේ.',
    },
  },
  {
    id: 'qn-11-3-07',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'What did the Geiger-Marsden-Rutherford alpha scattering experiment demonstrate about atomic structure?',
      si: 'ගයිගර්-මාර්ස්ඩන්-රදර්ෆර්ඩ් ඇල්ෆා ප්‍රකිරණ පරීක්ෂණයෙන් පරමාණුක ව්‍යුහය පිළිබඳව ඔප්පු කළේ කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Almost all the mass and all positive charge is concentrated in a tiny central nucleus.', si: 'පරමාණුවේ සියලුම ධන ආරෝපණය සහ ස්කන්ධයෙන් වැඩි කොටසක් මධ්‍යයේ ඇති කුඩා න්‍යෂ්ටියක කේන්ද්‍රගත වී ඇති බව.' } },
      { id: 'B', text: { en: 'Positive charge is uniformly distributed throughout the atomic sphere.', si: 'ධන ආරෝපණය මුළු පරමාණුක ගෝලය පුරා ඒකාකාරව පැතිරී ඇති බව.' } },
      { id: 'C', text: { en: 'Electrons orbit at fixed quantized energy levels.', si: 'ඉලෙක්ට්‍රෝන නිශ්චිත ක්වොන්ටීකෘත ශක්ති මට්ටම්වල පරිභ්‍රමණය වන බව.' } },
      { id: 'D', text: { en: 'Neutrons exist inside the nucleus.', si: 'න්‍යෂ්ටිය තුළ නියුට්‍රෝන පවතින බව.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Large-angle deflections of heavy alpha particles could only be produced by a concentrated massive positive core.',
      si: 'ඇල්ෆා අංශු විශාල කෝණවලින් ආපසු හැරීමට නම් අතිශය ඝන ධන ආරෝපිත හරයක් තිබිය යුතුය.',
    },
    explanation: {
      en: 'Rutherford concluded that because a small fraction of alpha particles bounced straight back, the positive charge and almost the entire atomic mass must be concentrated in an ultra-dense volume (the nucleus) surrounded by empty space.',
      si: 'ඇල්ෆා අංශු සුළු ප්‍රමාණයක් විශාල කෝණවලින් අපගමනය වීමෙන් පෙනී ගියේ පරමාණුවේ ස්කන්ධය හා ධන ආරෝපණය කුඩා කේන්ද්‍රීය න්‍යෂ්ටියක සාන්ද්‍රණය වී ඇති බවයි.',
    },
  },
  {
    id: 'qn-11-3-08',
    competency: '11.3',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'A sample of hydrogen atoms in the ground state is excited to the n=4 level by photon absorption. How many distinct spectral emission lines are possible as electrons cascade down to the ground state?',
      si: 'භූමි මට්ටමේ පවතින හයිඩ්‍රජන් පරමාණුවක් n=4 මට්ටමට උද්දීපනය කරනු ලැබේ. ඉලෙක්ට්‍රෝන නැවත භූමි මට්ටමට වැටීමේදී නිරීක්ෂණය කළ හැකි උපරිම වෙනස් විමෝචන රේඛා ගණන කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '6 lines', si: 'රේඛා 6' } },
      { id: 'B', text: { en: '3 lines', si: 'රේඛා 3' } },
      { id: 'C', text: { en: '4 lines', si: 'රේඛා 4' } },
      { id: 'D', text: { en: '10 lines', si: 'රේඛා 10' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Number of possible transitions from level n is N = n(n - 1) / 2.',
      si: 'n මට්ටමේ සිට විමෝචනය විය හැකි මුළු රේඛා ගණන N = n(n - 1) / 2 වේ.',
    },
    explanation: {
      en: 'Number of transitions N = n(n - 1) / 2 = 4(3) / 2 = 6. (These are: 4→3, 4→2, 4→1, 3→2, 3→1, 2→1).',
      si: 'හැකි සංක්‍රාන්ති ගණන N = n(n - 1) / 2 = 4 × 3 / 2 = රේඛා 6කි (4→3, 4→2, 4→1, 3→2, 3→1, 2→1).',
    },
  },
  {
    id: 'qn-11-3-09',
    competency: '11.3',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Calculate the wavelength (in nanometers, nm) of the H-alpha red spectral line in the Balmer series of hydrogen (transition from n=3 to n=2). (Take Rydberg constant R_H = 1.097 × 10⁷ m⁻¹)',
      si: 'හයිඩ්‍රජන්හි බාමර් ශ්‍රේණියේ H-ඇල්ෆා රතු වර්ණාවලි රේඛාවේ (n=3 සිට n=2 දක්වා) තරංග ආයාමය නැනෝමීටර (nm) වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 656.3,
      unit: 'nm',
      tolerance: 0.05,
    },
    hint: {
      en: '1/λ = R_H * (1/2² - 1/3²) = R_H * (5/36).',
      si: '1/λ = R_H * (1/4 - 1/9) = R_H * (5/36).',
    },
    explanation: {
      en: '1/λ = 1.097 × 10⁷ × (5 / 36) = 1.5236 × 10⁶ m⁻¹. λ = 1 / (1.5236 × 10⁶) = 6.563 × 10⁻⁷ m = 656.3 nm.',
      si: '1/λ = 1.097 × 10⁷ × (5/36) = 1.524 × 10⁶ m⁻¹. λ = 656.3 nm.',
    },
  },
  {
    id: 'qn-11-3-10',
    competency: '11.3',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Calculate the ionization energy of a hydrogen atom in electron-volts (eV) from its ground state.',
      si: 'හයිඩ්‍රජන් පරමාණුවක භූමි මට්ටමේ සිට අයනීකරණ ශක්තිය ඉලෙක්ට්‍රෝන-වෝල්ට් (eV) වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 13.6,
      unit: 'eV',
      tolerance: 0.05,
    },
    hint: {
      en: 'Ionization energy is the energy required to remove the electron from n=1 to infinity (E_∞ - E_1).',
      si: 'අයනීකරණ ශක්තිය යනු n=1 සිට අනන්තය දක්වා ඉලෙක්ට්‍රෝනය ඉවත් කිරීමට අවශ්‍ය ශක්තියයි (0 - E1).',
    },
    explanation: {
      en: 'E_ion = E_∞ - E_1 = 0 - (-13.606 eV) = 13.6 eV.',
      si: 'අයනීකරණ ශක්තිය = 0 - (-13.6 eV) = 13.6 eV වේ.',
    },
  },
  {
    id: 'qn-11-3-11',
    competency: '11.3',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'What is the series limit wavelength (shortest wavelength, n=∞ to n=1) of the Lyman series of hydrogen in nanometers (nm)? (Take R_H = 1.097 × 10⁷ m⁻¹)',
      si: 'හයිඩ්‍රජන්හි ලයිමන් ශ්‍රේණියේ සීමාකාරී තරංග ආයාමය (අවම තරංග ආයාමය, n=∞ සිට n=1 දක්වා) නැනෝමීටර (nm) වලින් කොපමණද?',
    },
    numericalAnswer: {
      value: 91.2,
      unit: 'nm',
      tolerance: 0.05,
    },
    hint: {
      en: '1/λ = R_H * (1/1² - 1/∞) = R_H. So λ = 1 / R_H.',
      si: '1/λ = R_H(1 - 0) = R_H. එබැවින් λ = 1 / R_H වේ.',
    },
    explanation: {
      en: 'λ_limit = 1 / R_H = 1 / (1.097 × 10⁷ m⁻¹) = 9.116 × 10⁻⁸ m = 91.2 nm (deep ultraviolet).',
      si: 'λ = 1 / 1.097 × 10⁷ = 9.12 × 10⁻⁸ m = 91.2 nm වේ.',
    },
  },
  {
    id: 'qn-11-3-12',
    competency: '11.3',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'In Bohr’s model of hydrogen, the first orbit radius is 0.53 Å. Calculate the radius of the third orbit (n=3) in Angstroms (Å).',
      si: 'බෝර් ආකෘතියේ පළමු කක්ෂයේ අරය 0.53 Å වේ. තුන්වන කක්ෂයේ (n=3) අරය ඇන්ග්ස්ට්‍රොම් (Å) වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 4.77,
      unit: 'Å',
      tolerance: 0.05,
    },
    hint: {
      en: 'r_n = n² * r_1.',
      si: 'r_n = n² * r_1 සූත්‍රය යොදන්න.',
    },
    explanation: {
      en: 'r_3 = 3² × 0.53 Å = 9 × 0.53 = 4.77 Å.',
      si: 'r_3 = 3² × 0.53 = 9 × 0.53 = 4.77 Å.',
    },
  },
  {
    id: 'qn-11-3-13',
    competency: '11.3',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'An electron drops from the n=4 level to the n=2 level in a hydrogen atom. What is the frequency of the emitted photon in units of 10¹⁴ Hz? (Take c = 3.0 × 10⁸ m/s, R_H = 1.097 × 10⁷ m⁻¹)',
      si: 'හයිඩ්‍රජන් පරමාණුවක ඉලෙක්ට්‍රෝනයක් n=4 සිට n=2 මට්ටමට වැටේ. විමෝචිත ෆෝටෝනයේ සංඛ්‍යාතය 10¹⁴ Hz ඒකක වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 6.17,
      unit: '10¹⁴ Hz',
      tolerance: 0.05,
    },
    hint: {
      en: '1/λ = R_H * (1/4 - 1/16) = 3 R_H / 16. Then f = c / λ.',
      si: '1/λ = R_H(1/4 - 1/16) = 3 R_H / 16. ඉන්පසු f = c / λ.',
    },
    explanation: {
      en: '1/λ = 1.097 × 10⁷ × (3/16) = 2.057 × 10⁶ m⁻¹. Frequency f = c * (1/λ) = 3.0 × 10⁸ × 2.057 × 10⁶ = 6.17 × 10¹⁴ Hz (Balmer H-beta blue line).',
      si: 'f = c / λ = 3.0 × 10⁸ × 1.097 × 10⁷ × (3/16) = 6.17 × 10¹⁴ Hz.',
    },
  },

  // ==========================================================================
  // COMPETENCY 11.4: Nuclear Physics & Radioactivity (13 Qs)
  // ==========================================================================
  {
    id: 'qn-11-4-01',
    competency: '11.6',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'The nuclear radius R of an atom with mass number A is proportional to:',
      si: 'ස්කන්ධ ක්‍රමාංකය A වන පරමාණුවක න්‍යෂ්ටික අරය R සමානුපාතික වන්නේ:',
    },
    options: [
      { id: 'A', text: { en: 'A^(1/3)', si: 'A^(1/3)' } },
      { id: 'B', text: { en: 'A', si: 'A' } },
      { id: 'C', text: { en: 'A^(2/3)', si: 'A^(2/3)' } },
      { id: 'D', text: { en: 'A²', si: 'A²' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Assuming nucleons pack into a constant-density sphere, volume V ∝ A, so r³ ∝ A.',
      si: 'නියුක්ලියෝන ඒකාකාර ඝනත්වයකින් අසුරා ඇති විට පරිමාව V ∝ A වේ, එබැවින් R³ ∝ A.',
    },
    explanation: {
      en: 'Empirically, R = R_0 * A^(1/3), where R_0 ≈ 1.2 fm. This arises because nuclear matter has roughly constant density across all elements.',
      si: 'න්‍යෂ්ටික අරය R = R_0 A^(1/3) වේ. සියලුම න්‍යෂ්ටිවල ඝනත්වය ආසන්න වශයෙන් නියත බැවින් පරිමාව ∝ A වේ.',
    },
  },
  {
    id: 'qn-11-4-02',
    competency: '11.6',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'Why is energy released during both nuclear fission of very heavy nuclei (e.g. U-235) and nuclear fusion of very light nuclei (e.g. H-2)?',
      si: 'ඉතා බර න්‍යෂ්ටි විඛණ්ඩනය වීමේදී (උදා: U-235) සහ ඉතා සැහැල්ලු න්‍යෂ්ටි සංලයනය වීමේදී (උදා: H-2) යන අවස්ථා දෙකේදීම ශක්තිය මුදාහැරෙන්නේ මන්ද?',
    },
    options: [
      { id: 'A', text: { en: 'In both processes, the daughter nuclei have higher binding energy per nucleon than the reactants.', si: 'ක්‍රියාවලි දෙකේදීම ප්‍රතික්‍රියකවලට වඩා ඵල න්‍යෂ්ටිවල නියුක්ලියෝනයකට බන්ධන ශක්තිය ඉහළ අගයක් ගන්නා බැවිනි.' } },
      { id: 'B', text: { en: 'Total mass of products is greater than reactants.', si: 'ප්‍රතික්‍රියකවලට වඩා ඵලවල මුළු ස්කන්ධය වැඩි බැවිනි.' } },
      { id: 'C', text: { en: 'Fission creates protons while fusion destroys neutrons.', si: 'විඛණ්ඩනයෙන් ප්‍රෝටෝන නිපදවන අතර සංලයනයෙන් නියුට්‍රෝන විනාශ වන බැවිනි.' } },
      { id: 'D', text: { en: 'Electrostatic repulsion releases potential energy in both cases.', si: 'අවස්ථා දෙකේදීම විද්‍යුත් ස්ථිතික විකර්ෂණය නිසා විභව ශක්තිය මුදාහරින බැවිනි.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Look at the binding energy per nucleon curve: it peaks near Fe-56 (~8.8 MeV/nucleon).',
      si: 'නියුක්ලියෝනයකට බන්ධන ශක්ති වක්‍රය Fe-56 අසලදී උපරිම වේ (~8.8 MeV/nucleon).',
    },
    explanation: {
      en: 'Energy is liberated whenever reaction products are more tightly bound (higher BE/A) than reactants. Both light nuclei fusing and heavy nuclei splitting produce middle-weight nuclei closer to the stability peak of Iron-56.',
      si: 'ප්‍රතික්‍රියා ඵලවල නියුක්ලියෝනයකට බන්ධන ශක්තිය වැඩි වන විට (යකඩ-56 උපරිමය දෙසට ගමන් කරන විට) ස්කන්ධය ශක්තිය බවට පත්වෙමින් ශක්තිය මුදාහැරේ.',
    },
  },
  {
    id: 'qn-11-4-03',
    competency: '11.5',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'A radioactive isotope has a decay constant λ. What is its half-life T_½?',
      si: 'විකිරණශීලී සමස්ථානිකයක ක්ෂය නියතය λ වේ. එහි අර්ධ ආයු කාලය T_½ වන්නේ:',
    },
    options: [
      { id: 'A', text: { en: 'ln(2) / λ ≈ 0.693 / λ', si: 'ln(2) / λ ≈ 0.693 / λ' } },
      { id: 'B', text: { en: 'λ / ln(2)', si: 'λ / ln(2)' } },
      { id: 'C', text: { en: '1 / λ', si: '1 / λ' } },
      { id: 'D', text: { en: '2 / λ', si: '2 / λ' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'N = N_0 * exp(-λt). Set N / N_0 = 1/2.',
      si: 'N = N_0 e^(-λt). N / N_0 = 1/2 ආදේශ කරන්න.',
    },
    explanation: {
      en: 'Setting N/N_0 = 1/2 gives exp(-λ T_½) = 1/2 ⟹ -λ T_½ = ln(1/2) = -ln(2) ⟹ T_½ = ln(2)/λ ≈ 0.693/λ.',
      si: 'e^(-λ T_½) = 1/2 ⟹ T_½ = ln(2) / λ ≈ 0.693 / λ වේ.',
    },
  },
  {
    id: 'qn-11-4-04',
    competency: '11.5',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'Which type of nuclear radiation has the highest specific ionization power and the lowest penetration depth in matter?',
      si: 'ද්‍රව්‍ය තුළ ඉහළම විශිෂ්ට අයනීකාරක බලයක් සහ අවම විනිවිදීමේ හැකියාවක් සහිත න්‍යෂ්ටික විකිරණ වර්ගය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'Alpha (α) particles', si: 'ඇල්ෆා (α) අංශු' } },
      { id: 'B', text: { en: 'Beta-minus (β⁻) particles', si: 'බීටා (β⁻) අංශු' } },
      { id: 'C', text: { en: 'Gamma (γ) rays', si: 'ගැමා (γ) කිරණ' } },
      { id: 'D', text: { en: 'Neutrinos', si: 'නියුට්‍රිනෝ' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Alpha particles are Helium-4 nuclei (+2e charge, large mass 4 u).',
      si: 'ඇල්ෆා අංශු යනු +2e ආරෝපිත, 4 u ස්කන්ධයක් සහිත හීලියම් න්‍යෂ්ටි වේ.',
    },
    explanation: {
      en: 'Because alpha particles carry double positive charge (+2e) and move relatively slowly due to large mass, they interact strongly with atomic electrons, causing intense ionization and stopping in a few centimeters of air or a sheet of paper.',
      si: 'ඇල්ෆා අංශුවලට +2e ආරෝපණයක් හා විශාල ස්කන්ධයක් ඇති බැවින් ඒවායේ අයනීකාරක හැකියාව ඉතා ඉහළ වන අතර විනිවිදීමේ හැකියාව අවම වේ (කඩදාසියකින් නැවැත්විය හැක).',
    },
  },
  {
    id: 'qn-11-4-05',
    competency: '11.5',
    type: 'mcq',
    difficulty: 'intermediate',
    question: {
      en: 'A radioactive sample has an activity of 800 Bq initially. After 24 days, its activity drops to 100 Bq. What is the half-life of this isotope?',
      si: 'විකිරණශීලී සාම්පලයක ආරම්භක ක්‍රියාකාරිත්වය 800 Bq වේ. දින 24 කට පසු එහි ක්‍රියාකාරිත්වය 100 Bq දක්වා අඩු වේ. මෙම සමස්ථානිකයේ අර්ධ ආයු කාලය කොපමණද?',
    },
    options: [
      { id: 'A', text: { en: '8 days', si: 'දින 8' } },
      { id: 'B', text: { en: '6 days', si: 'දින 6' } },
      { id: 'C', text: { en: '12 days', si: 'දින 12' } },
      { id: 'D', text: { en: '4 days', si: 'දින 4' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Activity drops from 800 -> 400 -> 200 -> 100. That is 3 half-lives.',
      si: '800 -> 400 -> 200 -> 100 දක්වා අඩුවීම යනු අර්ධ ආයු කාල 3කි.',
    },
    explanation: {
      en: 'A / A_0 = 100 / 800 = 1/8 = (1/2)³. Thus 3 half-lives have elapsed in 24 days. Half-life T_½ = 24 / 3 = 8 days.',
      si: '100 / 800 = 1/8 = (1/2)³. එබැවින් දින 24 යනු අර්ධ ආයු 3කි. T_½ = 24 / 3 = දින 8.',
    },
  },
  {
    id: 'qn-11-4-06',
    competency: '11.5',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'In beta-minus (β⁻) radioactive decay, what fundamental nuclear transformation occurs?',
      si: 'බීටා-ඍණ (β⁻) විකිරණශීලී ක්ෂයවීමේදී න්‍යෂ්ටිය තුළ සිදුවන මූලික පරිවර්තනය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: 'A neutron transforms into a proton, an electron, and an electron antineutrino: n → p + e⁻ + ν̄_e.', si: 'නියුට්‍රෝනයක් ප්‍රෝටෝනයක්, ඉලෙක්ට්‍රෝනයක් සහ ඉලෙක්ට්‍රෝන ප්‍රතිනියුට්‍රිනෝවක් බවට පත්වේ: n → p + e⁻ + ν̄_e.' } },
      { id: 'B', text: { en: 'A proton transforms into a neutron and a positron: p → n + e⁺ + ν_e.', si: 'ප්‍රෝටෝනයක් නියුට්‍රෝනයක් සහ පොසිට්‍රෝනයක් බවට පත්වේ.' } },
      { id: 'C', text: { en: 'An orbital electron falls into the nucleus.', si: 'කක්ෂීය ඉලෙක්ට්‍රෝනයක් න්‍යෂ්ටියට වැටේ.' } },
      { id: 'D', text: { en: 'A helium nucleus is ejected.', si: 'හීලියම් න්‍යෂ්ටියක් විමෝචනය වේ.' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Mass number A remains constant while atomic number Z increases by 1.',
      si: 'ස්කන්ධ ක්‍රමාංකය A නියතව පවතින අතර පරමාණුක ක්‍රමාංකය Z එකකින් වැඩි වේ.',
    },
    explanation: {
      en: 'In β⁻ decay, weak interaction converts a down quark to an up quark: a neutron transforms into a proton, emitting a fast electron (the beta particle) and an electron antineutrino: n → p + e⁻ + ν̄_e.',
      si: 'β⁻ ක්ෂයවීමේදී නියුට්‍රෝනයක් ප්‍රෝටෝනයක් බවට පත්වන අතර ඉලෙක්ට්‍රෝනයක් සහ ප්‍රතිනියුට්‍රිනෝවක් විමෝචනය වේ (n → p + e⁻ + ν̄_e).',
    },
  },
  {
    id: 'qn-11-4-07',
    competency: '11.6',
    type: 'mcq',
    difficulty: 'foundation',
    question: {
      en: 'The atomic mass unit (1 u) is defined as exactly 1/12 the mass of an unbound atom of:',
      si: 'පරමාණුක ස්කන්ධ ඒකකය (1 u) අර්ථ දක්වන්නේ පහත කවර පරමාණුවේ ස්කන්ධයෙන් 1/12 ක් ලෙසද?',
    },
    options: [
      { id: 'A', text: { en: 'Carbon-12 (¹²C)', si: 'කාබන්-12 (¹²C)' } },
      { id: 'B', text: { en: 'Hydrogen-1 (¹H)', si: 'හයිඩ්‍රජන්-1 (¹H)' } },
      { id: 'C', text: { en: 'Oxygen-16 (¹⁶O)', si: 'ඔක්සිජන්-16 (¹⁶O)' } },
      { id: 'D', text: { en: 'Helium-4 (⁴He)', si: 'හීලියම්-4 (⁴He)' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'Standard international definition since 1961.',
      si: '1961 සිට පිළිගත් සම්මත අර්ථ දැක්වීම.',
    },
    explanation: {
      en: 'By international agreement, 1 u = (mass of 1 atom of ¹²C in ground state) / 12 ≈ 1.66054 × 10⁻²⁷ kg.',
      si: '1 u අර්ථ දක්වන්නේ කාබන්-12 පරමාණුවක ස්කන්ධයෙන් 1/12 ක් ලෙසය (1.66054 × 10⁻²⁷ kg).',
    },
  },
  {
    id: 'qn-11-4-08',
    competency: '11.6',
    type: 'mcq',
    difficulty: 'advanced',
    question: {
      en: 'The nuclear radius of Aluminum-27 (²⁷Al) is approximately 3.6 fm. What is the expected nuclear radius of Lead-216 (²¹⁶Pb)?',
      si: 'ඇලුමිනියම්-27 (²⁷Al) හි න්‍යෂ්ටික අරය දළ වශයෙන් 3.6 fm වේ. ඊයම්-216 (²¹⁶Pb) හි බලාපොරොත්තු විය හැකි න්‍යෂ්ටික අරය කුමක්ද?',
    },
    options: [
      { id: 'A', text: { en: '7.2 fm', si: '7.2 fm' } },
      { id: 'B', text: { en: '10.8 fm', si: '10.8 fm' } },
      { id: 'C', text: { en: '14.4 fm', si: '14.4 fm' } },
      { id: 'D', text: { en: '28.8 fm', si: '28.8 fm' } },
    ],
    correctOptionId: 'A',
    hint: {
      en: 'R ∝ A^(1/3). Compare 216^(1/3) and 27^(1/3).',
      si: 'R ∝ A^(1/3) වේ. 216 හි ඝනමූලය 6 වන අතර 27 හි ඝනමූලය 3 වේ.',
    },
    explanation: {
      en: 'R_Pb / R_Al = (216 / 27)^(1/3) = 8^(1/3) = 2. Therefore R_Pb = 2 × 3.6 fm = 7.2 fm.',
      si: 'R_Pb / R_Al = (216 / 27)^(1/3) = 8^(1/3) = 2. එබැවින් R_Pb = 2 × 3.6 = 7.2 fm වේ.',
    },
  },
  {
    id: 'qn-11-4-09',
    competency: '11.6',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'Calculate the total binding energy (in MeV) of a Helium-4 nucleus (⁴He) having a mass defect of 0.03038 u. (Take 1 u = 931.5 MeV)',
      si: 'ස්කන්ධ ඌනතාව 0.03038 u වන හීලියම්-4 (⁴He) න්‍යෂ්ටියක මුළු බන්ධන ශක්තිය (MeV වලින්) ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 28.3,
      unit: 'MeV',
      tolerance: 0.05,
    },
    hint: {
      en: 'BE = Δm * 931.5 MeV.',
      si: 'BE = Δm * 931.5 MeV.',
    },
    explanation: {
      en: 'BE = 0.03038 u × 931.5 MeV/u = 28.30 MeV.',
      si: 'BE = 0.03038 × 931.5 = 28.3 MeV වේ.',
    },
  },
  {
    id: 'qn-11-4-10',
    competency: '11.6',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'For the Helium-4 nucleus with a total binding energy of 28.3 MeV, calculate its binding energy per nucleon (in MeV/nucleon).',
      si: 'මුළු බන්ධන ශක්තිය 28.3 MeV වන හීලියම්-4 න්‍යෂ්ටියේ නියුක්ලියෝනයකට බන්ධන ශක්තිය (MeV/nucleon වලින්) ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 7.08,
      unit: 'MeV/nucleon',
      tolerance: 0.05,
    },
    hint: {
      en: 'Binding energy per nucleon = Total BE / mass number A. For He-4, A = 4.',
      si: 'නියුක්ලියෝනයකට බන්ධන ශක්තිය = මුළු BE / A. හීලියම් සඳහා A = 4.',
    },
    explanation: {
      en: 'BE/A = 28.30 MeV / 4 = 7.075 ≈ 7.08 MeV/nucleon.',
      si: 'BE/A = 28.30 / 4 = 7.08 MeV/nucleon වේ.',
    },
  },
  {
    id: 'qn-11-4-11',
    competency: '11.5',
    type: 'numerical',
    difficulty: 'intermediate',
    question: {
      en: 'A sample contains 1.6 × 10¹⁰ radioactive nuclei with a half-life of 20 seconds. What is the initial activity of the sample in units of 10⁸ Bq? (Take ln 2 ≈ 0.693)',
      si: 'අර්ධ ආයු කාලය තත්පර 20 ක් වන විකිරණශීලී න්‍යෂ්ටි 1.6 × 10¹⁰ ක් සාම්පලයක අඩංගු වේ. සාම්පලයේ ආරම්භක ක්‍රියාකාරිත්වය 10⁸ Bq ඒකක වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 5.54,
      unit: '10⁸ Bq',
      tolerance: 0.05,
    },
    hint: {
      en: 'Activity A = λ * N where λ = ln(2) / T_½.',
      si: 'ක්‍රියාකාරිත්වය A = λ * N වේ, මෙහි λ = ln(2) / T_½.',
    },
    explanation: {
      en: 'λ = 0.69315 / 20 = 0.03466 s⁻¹. A = 0.03466 × 1.6 × 10¹⁰ = 5.545 × 10⁸ Bq.',
      si: 'λ = 0.693 / 20 = 0.03466 s⁻¹. A = 0.03466 × 1.6 × 10¹⁰ = 5.54 × 10⁸ Bq.',
    },
  },
  {
    id: 'qn-11-4-12',
    competency: '11.6',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'In a nuclear fission event: ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n, the mass defect is 0.215 u. Calculate the energy released in this single fission event in MeV. (Take 1 u = 931.5 MeV)',
      si: 'න්‍යෂ්ටික විඛණ්ඩන ප්‍රතික්‍රියාවකදී ස්කන්ධ ඌනතාව 0.215 u වේ. මෙම තනි විඛණ්ඩනයෙන් මුදාහැරෙන ශක්තිය MeV වලින් ගණනය කරන්න.',
    },
    numericalAnswer: {
      value: 200.3,
      unit: 'MeV',
      tolerance: 0.05,
    },
    hint: {
      en: 'E = Δm * 931.5 MeV.',
      si: 'E = Δm * 931.5 MeV.',
    },
    explanation: {
      en: 'Energy released Q = 0.215 u × 931.5 MeV/u = 200.27 ≈ 200.3 MeV.',
      si: 'මුදාහැරෙන ශක්තිය Q = 0.215 × 931.5 = 200.3 MeV (සාමාන්‍යයෙන් එක් විඛණ්ඩනයකින් ~200 MeV මුදාහැරේ).',
    },
  },
  {
    id: 'qn-11-4-13',
    competency: '11.5',
    type: 'numerical',
    difficulty: 'advanced',
    question: {
      en: 'Carbon-14 has a half-life of 5730 years. An ancient wooden artifact has a C-14 activity that is 25% of the activity in living wood. What is the age of the artifact in years?',
      si: 'කාබන්-14 හි අර්ධ ආයු කාලය වසර 5730 කි. පුරාණ ලී කෞතුක වස්තුවක C-14 ක්‍රියාකාරිත්වය ජීවී ලීයක මෙන් 25% ක් බව පෙනී යයි. කෞතුක වස්තුවේ වයස වසර වලින් කොපමණද?',
    },
    numericalAnswer: {
      value: 11460,
      unit: 'years',
      tolerance: 0.05,
    },
    hint: {
      en: 'Activity drops to 25% = (1/2)². This corresponds to exactly 2 half-lives.',
      si: 'ක්‍රියාකාරිත්වය 25% දක්වා අඩු වීම යනු හරියටම අර්ධ ආයු 2කි.',
    },
    explanation: {
      en: 'A / A_0 = 0.25 = (1/2)². Elapsed time t = 2 × T_½ = 2 × 5730 = 11,460 years.',
      si: '25% = (1/2)² බැවින් අර්ධ ආයු 2ක් ගතවී ඇත. වයස = 2 × 5730 = වසර 11,460 කි.',
    },
  },

  // ==========================================================================
  // STRUCTURED / MULTIPART PRACTICAL QUESTIONS (with detailed marking rubrics)
  // Competencies 11.1 to 11.7
  // ==========================================================================
  {
    id: 'qn-sq01',
    competency: '11.1',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'A hollow sphere with a small hole in its wall is used as an experimental model of an ideal black body cavity radiator. The spectral emissive power is recorded across various wavelengths at absolute temperatures 2000 K and 2500 K.',
      si: 'බිත්තියේ කුඩා සිදුරක් සහිත කුහර ගෝලයක් පරිපූර්ණ කෘෂ්ණ වස්තු කුහර විකිරකයක ආකෘතියක් ලෙස භාවිත කරයි. නිරපේක්ෂ උෂ්ණත්ව 2000 K සහ 2500 K හිදී විවිධ තරංග ආයාම ඔස්සේ වර්ණාවලි විමෝචන ක්ෂමතාව වාර්තා කර ඇත.',
    },
    hint: {
      en: 'Wien\'s law: λ_max T = b = 2.898 × 10^-3 m K. Stefan-Boltzmann law: total power P = σ A T^4. Explain why classical physics failed (ultraviolet catastrophe).',
      si: 'වීන්ගේ නියමය: λ_max T = b = 2.898 × 10^-3 m K. ස්ටෙෆාන්-බෝල්ට්ස්මාන් නියමය: මුළු ක්ෂමතාව P = σ A T^4. සම්භාව්‍ය භෞතික විද්‍යාව අසාර්ථක වීමට හේතුව (පාරජම්බුල විනාශය) පැහැදිලි කරන්න.',
    },
    explanation: {
      en: 'A cavity with a tiny hole absorbs >99% of incident radiation due to multiple internal reflections. Planck resolved the ultraviolet catastrophe by postulating quantized energy exchange E = nhf.',
      si: 'කුඩා සිදුරක් සහිත කුහරයක් අභ්‍යන්තර බහු පරාවර්තන නිසා 99% කට වඩා අවශෝෂණය කරයි. ප්ලෑන්ක් ක්වොන්ටීකරණය E = nhf හඳුන්වා දීමෙන් පාරජම්බුල විනාශය විසඳීය.',
    },
    parts: [
      {
        id: 'qn-sq01-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Explain why a hollow enclosure with a small hole acts as an almost perfect absorber (black body) of incident radiation.',
          si: 'කුඩා සිදුරක් සහිත කුහර බඳුනක් පතිත විකිරණ සඳහා පරිපූර්ණ අවශෝෂකයක් (කෘෂ්ණ වස්තුවක්) ලෙස ක්‍රියා කරන්නේ මන්දැයි පැහැදිලි කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Any radiation entering through the tiny hole undergoes multiple internal reflections inside the cavity walls.',
              si: 'කුඩා සිදුරෙන් ඇතුළු වන ඕනෑම විකිරණයක් කුහරයේ අභ්‍යන්තර බිත්ති මත බහුවිධ පරාවර්තනයන්ට ලක්වේ.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'At each reflection a fraction of the energy is absorbed, making the probability of escape through the hole virtually zero.',
              si: 'සෑම පරාවර්තනයකදීම ශක්තියෙන් කොටසක් අවශෝෂණය වන බැවින් සිදුරෙන් පිටවීමේ සම්භාවිතාව ශූන්‍ය තරම් වේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'Radiation entering the small aperture undergoes repeated internal reflections on the blackened walls. With partial absorption at each bounce, negligible energy escapes, mimicking an ideal black body.',
          si: 'සිදුරෙන් ඇතුළු වන විකිරණ අභ්‍යන්තර බිත්ති මත නැවත නැවත පරාවර්තනය වෙමින් අවශෝෂණය වේ. කිසිදු ශක්තියක් ආපසු පිටතට නොඑන බැවින් එය කෘෂ්ණ වස්තුවක් ලෙස ක්‍රියා කරයි.',
        },
      },
      {
        id: 'qn-sq01-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Calculate the peak emission wavelength λ_max of the cavity when heated to 2500 K. (Take Wien\'s displacement constant b = 2.90 × 10^-3 m K).',
          si: 'කුහරය 2500 K දක්වා රත් කළ විට උපරිම විමෝචන තරංග ආයාමය λ_max ගණනය කරන්න. (වීන්ගේ නියතය b = 2.90 × 10^-3 m K).',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Formula: λ_max * T = b => λ_max = b / T.',
              si: 'සමීකරණය: λ_max * T = b => λ_max = b / T.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: λ_max = (2.90 × 10^-3 m K) / (2500 K).',
              si: 'ආදේශය: λ_max = (2.90 × 10^-3) / 2500.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: λ_max = 1.16 × 10^-6 m (1.16 μm or 1160 nm) in infrared region.',
              si: 'ප්‍රතිඵලය: λ_max = 1.16 × 10^-6 m (1.16 μm) අධෝරක්ත කලාපයේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'λ_max = b / T = (2.90 × 10^-3) / 2500 = 1.16 × 10^-6 m = 1160 nm.',
          si: 'λ_max = b / T = (2.90 × 10^-3) / 2500 = 1.16 × 10^-6 m (1160 nm) වේ.',
        },
      },
      {
        id: 'qn-sq01-p3',
        partLabel: '(c)',
        prompt: {
          en: 'State the "Ultraviolet Catastrophe" in classical physics and explain how Max Planck\'s quantum hypothesis resolved it.',
          si: 'සම්භාව්‍ය භෞතික විද්‍යාවේ "පාරජම්බුල විනාශය" කුමක්දැයි දක්වා මැක්ස් ප්ලෑන්ක්ගේ ක්වොන්ටම් උපකල්පනය මගින් එය විසඳූ ආකාරය පැහැදිලි කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Classical Rayleigh-Jeans theory predicted emitted intensity would approach infinity as wavelength approached zero (ultraviolet/high frequency), in drastic contradiction with experiment.',
              si: 'සම්භාව්‍ය රේලී-ජීන්ස් වාදය අනුව තරංග ආයාමය ශූන්‍යය දෙසට (පාරජම්බුල කලාපය) යන විට විමෝචන තීව්‍රතාව අනන්තය දක්වා වැඩිවිය යුතුය; එය පර්යේෂණාත්මක වක්‍රවලට පටහැනිය.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Planck postulated oscillators absorb/emit energy only in discrete packets E = nhf; at high frequencies hf is large, making high-energy excitation exponentially improbable.',
              si: 'ප්ලෑන්ක් ශක්තිය හුවමාරු වන්නේ E = nhf ක්වොන්ටා ලෙස පමණක් බව උපකල්පනය කළේය; ඉහළ සංඛ්‍යාතවලදී hf විශාල බැවින් එම තත්ව උත්තේජනය වීමේ සම්භාවිතාව ශූන්‍යය කරා යයි.',
            },
          },
        ],
        modelAnswer: {
          en: 'Classical physics predicted infinite radiated energy at short wavelengths (UV catastrophe). Planck resolved this by postulating energy exchange in discrete quanta E = hf; high-frequency modes cannot be excited because hf exceeds available thermal energy kT.',
          si: 'සම්භාව්‍ය නියමයන් කෙටි තරංග ආයාමවලදී විකිරණය අනන්ත විය යුතු යැයි පුරෝකථනය කළේය. ප්ලෑන්ක් ශක්තිය E = hf ක්වොන්ටීකෘත බව පෙන්වා දෙමින් ඉහළ සංඛ්‍යාතවලදී විමෝචනය සීමා වන බව පැහැදිලි කළේය.',
        },
      },
    ],
  },
  {
    id: 'qn-sq02',
    competency: '11.2',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'In an experiment investigating the photoelectric effect, monochromatic light of variable frequency f is directed onto the clean potassium emitter of a photocell. The stopping potential V_s is determined for various frequencies.',
      si: 'ප්‍රකාශ විද්‍යුත් ආචරණය පිළිබඳ පරීක්ෂණයකදී, වෙනස් කළ හැකි සංඛ්‍යාතයක් f සහිත ඒකවර්ණ ආලෝකයක් ප්‍රකාශ කෝෂයක පිරිසිදු පොටෑසියම් විමෝචකය මත පතිත කරනු ලැබේ. විවිධ සංඛ්‍යාත සඳහා නැවැත්වීමේ විභවය V_s මනිනු ලැබේ.',
    },
    hint: {
      en: 'Einstein photoelectric equation: e * V_s = h * f - Φ. Graph of V_s vs f is a straight line with slope h/e and x-intercept f_0.',
      si: 'අයින්ස්ටයින්ගේ ප්‍රකාශ විද්‍යුත් සමීකරණය: e * V_s = h * f - Φ. V_s එදිරිව f ප්‍රස්ථාරයේ අනුක්‍රමණය h/e වන අතර x-අන්තඃඛණ්ඩය සීමාකාරී සංඛ්‍යාතය f_0 වේ.',
    },
    explanation: {
      en: 'Slope of V_s vs f is h/e (a universal constant independent of metal). The intercept on the frequency axis is the threshold frequency f_0, where work function Φ = h f_0.',
      si: 'V_s එදිරිව f ප්‍රස්ථාරයේ අනුක්‍රමණය h/e වන අතර එය ඕනෑම ලෝහයකට නියතයකි. සංඛ්‍යාත අක්ෂයේ අන්තඃඛණ්ඩයෙන් සීමාකාරී සංඛ්‍යාතය f_0 ලැබේ.',
    },
    parts: [
      {
        id: 'qn-sq02-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Define "work function" and "threshold frequency" of a metallic photosurface.',
          si: 'ලෝහමය ප්‍රකාශ පෘෂ්ඨයක "කාර්ය ශ්‍රිතය" සහ "සීමාකාරී සංඛ්‍යාතය" අර්ථ දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Work function (Φ): minimum energy required to liberate the most loosely bound conduction electron from the metal surface without giving it kinetic energy.',
              si: 'කාර්ය ශ්‍රිතය (Φ): ලෝහ පෘෂ්ඨයෙන් ඉලෙක්ට්‍රෝනයක් මුදා ගැනීමට අවශ්‍ය වන අවම ශක්තිය.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Threshold frequency (f_0): minimum frequency of incident radiation below which no photoelectric emission occurs regardless of intensity.',
              si: 'සීමාකාරී සංඛ්‍යාතය (f_0): ප්‍රකාශ විද්‍යුත් විමෝචනය සිදුවිය හැකි පතිත විකිරණයේ අවම සංඛ්‍යාතය (තීව්‍රතාව කුමක් වුවත් ඊට පහළින් විමෝචනය නොවේ).',
            },
          },
        ],
        modelAnswer: {
          en: 'Work function Φ: minimum energy to eject an electron from the metal surface. Threshold frequency f_0: minimum radiation frequency required for emission (Φ = h f_0).',
          si: 'කාර්ය ශ්‍රිතය: ඉලෙක්ට්‍රෝනයක් මුදා ගැනීමට අවශ්‍ය අවම ශක්තියයි. සීමාකාරී සංඛ්‍යාතය: විමෝචනය ඇරඹීමට අවශ්‍ය අවම විකිරණ සංඛ්‍යාතයයි.',
        },
      },
      {
        id: 'qn-sq02-p2',
        partLabel: '(b)',
        prompt: {
          en: 'The gradient of the graph of stopping potential V_s (V) against frequency f (Hz) is found to be 4.14 × 10^-15 V s. Using elementary charge e = 1.60 × 10^-19 C, calculate Planck\'s constant h.',
          si: 'නැවැත්වීමේ විභවය V_s (V) එදිරිව සංඛ්‍යාතය f (Hz) ප්‍රස්ථාරයේ අනුක්‍රමණය 4.14 × 10^-15 V s බව පෙනී යයි. මූලික ආරෝපණය e = 1.60 × 10^-19 C භාවිතයෙන් ප්ලෑන්ක් නියතය h ගණනය කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Relation between gradient and Planck constant: Gradient = h / e => h = gradient * e.',
              si: 'අනුක්‍රමණය සහ ප්ලෑන්ක් නියතය අතර සම්බන්ධය: අනුක්‍රමණය = h / e => h = අනුක්‍රමණය * e.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: h = (4.14 × 10^-15 V s) * (1.60 × 10^-19 C).',
              si: 'ආදේශය: h = (4.14 × 10^-15) * (1.60 × 10^-19).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: h = 6.62 × 10^-34 J s with correct units.',
              si: 'ප්‍රතිඵලය: h = 6.62 × 10^-34 J s නිවැරදි ඒකක සහිතව.',
            },
          },
        ],
        modelAnswer: {
          en: 'h = Gradient * e = (4.14 × 10^-15 V s) * (1.60 × 10^-19 C) = 6.62 × 10^-34 J s.',
          si: 'h = අනුක්‍රමණය * e = (4.14 × 10^-15) * (1.60 × 10^-19) = 6.62 × 10^-34 J s වේ.',
        },
      },
      {
        id: 'qn-sq02-p3',
        partLabel: '(c)',
        prompt: {
          en: 'If the threshold frequency for potassium is 5.50 × 10^14 Hz, calculate its work function in electron-volts (eV), and determine the maximum kinetic energy of electrons ejected by light of wavelength 400 nm.',
          si: 'පොටෑසියම් සඳහා සීමාකාරී සංඛ්‍යාතය 5.50 × 10^14 Hz නම්, එහි කාර්ය ශ්‍රිතය ඉලෙක්ට්‍රෝන-වෝල්ට් (eV) වලින් ගණනය කරන්න. තවද 400 nm තරංග ආයාමයක් ඇති ආලෝකයෙන් විමෝචනය වන ඉලෙක්ට්‍රෝනවල උපරිම චාලක ශක්තිය සොයන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Work function Φ = h * f_0 = (6.63 × 10^-34 * 5.50 × 10^14) / (1.60 × 10^-19) = 3.647 × 10^-19 J = 2.28 eV.',
              si: 'කාර්ය ශ්‍රිතය Φ = h f_0 = 3.65 × 10^-19 J = 2.28 eV.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Photon energy E = hc/λ = (6.63 × 10^-34 * 3.0 × 10^8) / (4.00 × 10^-7 * 1.60 × 10^-19) = 3.11 eV. KE_max = E - Φ = 3.11 - 2.28 = 0.83 eV (1.33 × 10^-19 J).',
              si: 'ෆෝටෝන ශක්තිය E = hc/λ = 3.11 eV. උපරිම චාලක ශක්තිය = 3.11 - 2.28 = 0.83 eV (1.33 × 10^-19 J).',
            },
          },
        ],
        modelAnswer: {
          en: 'Φ = h f_0 = 2.28 eV. Incident photon E = hc/λ = 3.11 eV. Maximum KE = E - Φ = 3.11 - 2.28 = 0.83 eV.',
          si: 'Φ = h f_0 = 2.28 eV. E = hc/λ = 3.11 eV. උපරිම චාලක ශක්තිය = 3.11 - 2.28 = 0.83 eV වේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq03',
    competency: '11.3',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'In 1924 Louis de Broglie hypothesized that moving material particles exhibit wave-like characteristics. Electrons accelerated through potential difference V are directed at a thin polycrystalline nickel foil, producing concentric circular diffraction rings.',
      si: '1924 දී ලුවී ඩි බ්‍රොග්ලි චලනය වන පදාර්ථ අංශු තරංගමය ගුණ පෙන්වන බවට උපකල්පනය කළේය. විභව අන්තරයක් V හරහා ත්වරණය කළ ඉලෙක්ට්‍රෝන තුනී නිකල් තහඩුවක් මතට යොමු කළ විට කේන්ද්‍රික වෘත්තාකාර විවර්තන මුදු සාදයි.',
    },
    hint: {
      en: 'de Broglie wavelength: λ = h / p = h / √(2 m_e e V). Electron diffraction proves wave nature of particles.',
      si: 'ඩි බ්‍රොග්ලි තරංග ආයාමය: λ = h / p = h / √(2 m_e e V). ඉලෙක්ට්‍රෝන විවර්තනය මගින් අංශුවල තරංගමය ස්වභාවය සනාථ වේ.',
    },
    explanation: {
      en: 'Davisson-Germer and Thomson experiments confirmed electron diffraction. Accelerating electrons to high voltage shortens λ, enabling transmission electron microscopes (TEM) to achieve picometer resolution.',
      si: 'ඩැවිසන්-ගර්මර් පරීක්ෂණයෙන් ඉලෙක්ට්‍රෝන විවර්තනය තහවුරු විය. අධි විභවයකින් ත්වරණය කිරීමෙන් λ ඉතා කුඩා වන නිසා ඉලෙක්ට්‍රෝන අන්වීක්ෂවල විභේදන බලය අතිශයින් ඉහළ වේ.',
    },
    parts: [
      {
        id: 'qn-sq03-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State the de Broglie hypothesis and derive the expression λ = h / √(2 m_e e V) for an electron accelerated from rest across potential difference V.',
          si: 'ඩි බ්‍රොග්ලි උපකල්පනය ප්‍රකාශ කර, විභව අන්තරයක් V හරහා නිශ්චලතාවයේ සිට ත්වරණය කළ ඉලෙක්ට්‍රෝනයක තරංග ආයාමය λ = h / √(2 m_e e V) බව ව්‍යුත්පන්න කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'de Broglie hypothesis: any moving particle of momentum p has an associated wave with wavelength λ = h / p.',
              si: 'ඩි බ්‍රොග්ලි උපකල්පනය: ගම්‍යතාව p වූ චලනය වන ඕනෑම අංශුවකට අනුබද්ධ තරංගයක් පවතින අතර එහි තරංග ආයාමය λ = h / p වේ.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Kinetic energy gained: E_k = 1/2 m_e v^2 = e * V => p^2 / (2 m_e) = e * V => p = √(2 m_e e V).',
              si: 'ලබාගත් චාලක ශක්තිය: p^2 / (2 m_e) = e V => p = √(2 m_e e V).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Substitution: λ = h / p = h / √(2 m_e e V).',
              si: 'ආදේශය: λ = h / p = h / √(2 m_e e V).',
            },
          },
        ],
        modelAnswer: {
          en: 'Every moving particle has wavelength λ = h/p. Kinetic energy E_k = p^2/(2m) = eV, so p = √(2m_e eV). Hence λ = h / √(2m_e eV).',
          si: 'λ = h/p. චාලක ශක්තිය p^2/(2m) = eV බැවින් p = √(2m_e eV) වේ. එබැවින් λ = h / √(2m_e eV).',
        },
      },
      {
        id: 'qn-sq03-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Calculate the de Broglie wavelength of an electron accelerated through potential difference V = 150 V. (m_e = 9.11 × 10^-31 kg, e = 1.60 × 10^-19 C, h = 6.63 × 10^-34 J s).',
          si: 'විභව අන්තරය V = 150 V හරහා ත්වරණය කළ ඉලෙක්ට්‍රෝනයක ඩි බ්‍රොග්ලි තරංග ආයාමය ගණනය කරන්න. (m_e = 9.11 × 10^-31 kg, e = 1.60 × 10^-19 C, h = 6.63 × 10^-34 J s).',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Momentum p = √(2 * 9.11 × 10^-31 * 1.60 × 10^-19 * 150) = √(4.373 × 10^-47) = 6.613 × 10^-24 kg m s^-1.',
              si: 'ගම්‍යතාව p = √(2 * 9.11 × 10^-31 * 1.60 × 10^-19 * 150) = 6.613 × 10^-24 kg m s^-1.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'λ = h / p = (6.63 × 10^-34) / (6.613 × 10^-24) = 1.00 × 10^-10 m = 0.100 nm (1.00 Å).',
              si: 'λ = h / p = 1.00 × 10^-10 m = 0.100 nm (1.00 Å).',
            },
          },
        ],
        modelAnswer: {
          en: 'p = √(2 * 9.11e-31 * 1.6e-19 * 150) = 6.61e-24 kg m s^-1. λ = 6.63e-34 / 6.61e-24 = 1.00 × 10^-10 m (0.1 nm).',
          si: 'p = 6.61 × 10^-24 kg m s^-1. λ = 1.00 × 10^-10 m (0.1 nm) වේ.',
        },
      },
      {
        id: 'qn-sq03-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Explain why an electron microscope can achieve several thousand times greater magnification and resolving power than an optical light microscope.',
          si: 'ප්‍රකාශ ආලෝක අන්වීක්ෂයකට වඩා දහස් ගුණයක විශාලනයක් සහ විභේදන බලයක් ඉලෙක්ට්‍රෝන අන්වීක්ෂයකට ලබාගත හැකිවීමට හේතුව පහදන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Resolving power is inversely proportional to wavelength (Rayleigh criterion: minimum resolvable detail d ≈ λ / (2 NA)).',
              si: 'විභේදන බලය තරංග ආයාමයට ප්‍රතිලෝමව සමානුපාතික වේ (වෙන්කර හඳුනාගත හැකි අවම පරතරය d ≈ λ / 2).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Visible light has wavelengths 400-700 nm, whereas high-energy electrons have de Broglie wavelengths ~0.005 nm (100,000 times shorter), drastically reducing diffraction blur.',
              si: 'දෘශ්‍ය ආලෝකයේ තරංග ආයාමය 400-700 nm වන අතර, ඉලෙක්ට්‍රෝනවල ඩි බ්‍රොග්ලි තරංග ආයාමය ~0.005 nm තරම් කුඩා බැවින් විවර්තන සීමාව අවම වී විභේදනය අතිශයින් ඉහළ යයි.',
            },
          },
        ],
        modelAnswer: {
          en: 'Resolution is limited by diffraction (limit ∝ λ). Electrons accelerated to tens of kilovolts have de Broglie wavelengths (~0.005 nm) thousands of times smaller than visible light (~500 nm), allowing atomic-scale resolution.',
          si: 'විභේදනය තරංග ආයාමය මත රඳා පවතී (d ∝ λ). ඉලෙක්ට්‍රෝනවල ඩි බ්‍රොග්ලි තරංග ආයාමය දෘශ්‍ය ආලෝකයට වඩා දහස් ගුණයකින් කුඩා වන බැවින් පරමාණුක පරිමාණයේ විභේදනයක් ලැබේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq04',
    competency: '11.4',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'In a Coolidge X-ray tube, electrons thermionically emitted from a heated tungsten filament are accelerated through high potential difference V and strike a heavy tungsten target embedded in a water-cooled copper anode.',
      si: 'කූලිජ් එක්ස්-කිරණ නළයක, රත් වූ ටංස්ටන් සූත්‍රිකාවකින් තාපජව විමෝචනය වන ඉලෙක්ට්‍රෝන අධි විභව අන්තරයක් V හරහා ත්වරණය වී ජලයෙන් සිසිල් වන තඹ ඇනෝඩයක සවිකළ බර ටංස්ටන් ඉලක්කයක් මත ගැටේ.',
    },
    hint: {
      en: 'Duane-Hunt cutoff wavelength: λ_min = h c / (e V). Continuous spectrum is bremsstrahlung; characteristic spikes are atomic inner-shell transitions.',
      si: 'ඩුආන්-හන්ට් අවම තරංග ආයාමය: λ_min = h c / (e V). අඛණ්ඩ වර්ණාවලිය බ්‍රෙම්ස්ට්‍රාලුන්ග් විකිරණය වන අතර ලාක්ෂණික කූරු අභ්‍යන්තර කවච සංක්‍රාන්ති වේ.',
    },
    explanation: {
      en: 'Only ~1% of electron kinetic energy converts to X-rays; ~99% becomes heat. Duane-Hunt limit λ_min depends solely on accelerating voltage V.',
      si: 'ඉලෙක්ට්‍රෝන ශක්තියෙන් ~1% ක් පමණක් එක්ස්-කිරණ බවට පත්වන අතර 99% ක් තාපය බවට පත්වේ. λ_min රඳා පවතින්නේ ත්වරණ විභවය V මත පමණි.',
    },
    parts: [
      {
        id: 'qn-sq04-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Explain the physical mechanisms responsible for (1) the continuous X-ray spectrum and (2) the sharp characteristic X-ray line spectrum.',
          si: '(1) අඛණ්ඩ එක්ස්-කිරණ වර්ණාවලිය සහ (2) තියුණු ලාක්ෂණික එක්ස්-කිරණ වර්ණාවලිය හටගන්නා භෞතික යාන්ත්‍රණ පැහැදිලි කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Continuous spectrum (Bremsstrahlung): electrons undergo rapid deceleration in the strong Coulomb fields of target nuclei, radiating a continuous range of photon energies.',
              si: 'අඛණ්ඩ වර්ණාවලිය (මන්දනය): ඉලෙක්ට්‍රෝන ඉලක්කයේ න්‍යෂ්ටික විද්‍යුත් ක්ෂේත්‍රය තුළ වේගයෙන් මන්දනය වීමේදී අඛණ්ඩ ශක්ති පරාසයක ෆෝටෝන විමෝචනය කරයි.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Characteristic spectrum: incident fast electron knocks out an inner-shell electron (e.g. K shell); an outer electron (L or M shell) falls into the vacancy, emitting a photon of discrete energy equal to energy difference ΔE.',
              si: 'ලාක්ෂණික වර්ණාවලිය: අධිවේගී ඉලෙක්ට්‍රෝනයක් මගින් ඉලක්ක පරමාණුවේ අභ්‍යන්තර කවච ඉලෙක්ට්‍රෝනයක් (K) ඉවත් කළ විට, ඉහළ මට්ටමකින් (L හෝ M) ඉලෙක්ට්‍රෝනයක් එම හිඩැසට වැටීමේදී විවික්ත ශක්ති වෙනසට සමාන ෆෝටෝනයක් නිකුත් වේ.',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Continuous: Bremsstrahlung from deceleration of electrons near target nuclei. (2) Characteristic: Inner-shell ionization followed by outer electron de-excitation emitting discrete ΔE photons.',
          si: '(1) අඛණ්ඩ: න්‍යෂ්ටික ක්ෂේත්‍රයේ ඉලෙක්ට්‍රෝන මන්දනය වීමෙනි. (2) ලාක්ෂණික: K-කවචයේ හිඩැස් පිරවීමට ඉහළ කවචවලින් ඉලෙක්ට්‍රෝන වැටීමේදී නිකුත් වන විවික්ත ෆෝටෝන මගිනි.',
        },
      },
      {
        id: 'qn-sq04-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Derive the Duane-Hunt formula λ_min = h c / (e V) for the shortest cutoff wavelength of continuous X-rays.',
          si: 'අඛණ්ඩ එක්ස්-කිරණවල කෙටිම අවම තරංග ආයාමය සඳහා ඩුආන්-හන්ට් සමීකරණය λ_min = h c / (e V) ව්‍යුත්පන්න කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Maximum photon energy occurs when an electron converts 100% of its kinetic energy (e * V) in a single direct collision: E_max = h * f_max = e * V.',
              si: 'ඉලෙක්ට්‍රෝනයක් එක් ගැටුමකින් සියලු චාලක ශක්තිය (e V) ෆෝටෝනයක් බවට පත් කළ විට උපරිම ශක්තිය ලැබේ: E_max = h f_max = e V.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Since f_max = c / λ_min: h * (c / λ_min) = e * V => λ_min = (h * c) / (e * V).',
              si: 'f_max = c / λ_min බැවින්: h c / λ_min = e V => λ_min = (h c) / (e V).',
            },
          },
        ],
        modelAnswer: {
          en: 'Maximum photon energy E_max = eV in a single collision. Since E_max = hc/λ_min, we have hc/λ_min = eV => λ_min = hc / (eV).',
          si: 'උපරිම ශක්තිය E_max = eV = hc/λ_min බැවින් λ_min = hc / (eV) වේ.',
        },
      },
      {
        id: 'qn-sq04-p3',
        partLabel: '(c)',
        prompt: {
          en: 'An X-ray tube operates at an accelerating potential of 50.0 kV. Calculate the minimum cutoff wavelength λ_min of the emitted X-rays, and state what happens to λ_min and to total X-ray intensity if the filament heating current is increased at constant voltage.',
          si: 'එක්ස්-කිරණ නළයක් 50.0 kV ත්වරණ විභවයකින් ක්‍රියා කරයි. විමෝචනය වන එක්ස්-කිරණවල අවම තරංග ආයාමය λ_min ගණනය කරන්න. නියත විභවයේදී සූත්‍රිකා ධාරාව වැඩි කළ විට λ_min ට සහ මුළු තීව්‍රතාවට සිදුවන්නේ කුමක්දැයි දක්වන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'λ_min = (6.63 × 10^-34 * 3.0 × 10^8) / (1.60 × 10^-19 * 5.0 × 10^4) = 1.989 × 10^-25 / 8.0 × 10^-15 = 2.486 × 10^-11 m = 0.0249 nm (0.249 Å).',
              si: 'λ_min = (6.63 × 10^-34 * 3.0 × 10^8) / (1.60 × 10^-19 * 50000) = 2.49 × 10^-11 m (0.0249 nm).',
            },
          },
          {
            point: 1,
            description: {
              en: 'λ_min remains unchanged because accelerating voltage V is constant.',
              si: 'ත්වරණ විභවය V නියත බැවින් λ_min නොවෙනස්ව පවතී.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Total X-ray intensity increases proportionally because more thermionic electrons are emitted per second, increasing tube current.',
              si: 'තත්පරයකට විමෝචනය වන ඉලෙක්ට්‍රෝන සංඛ්‍යාව වැඩිවන බැවින් එක්ස්-කිරණ තීව්‍රතාව සමානුපාතිකව වැඩිවේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'λ_min = hc/(eV) = (1.989e-25)/(8e-15) = 2.49 × 10^-11 m (0.0249 nm). Increasing filament current increases intensity (more electrons) but leaves λ_min unchanged (depends only on V).',
          si: 'λ_min = 2.49 × 10^-11 m (0.0249 nm). සූත්‍රිකා ධාරාව වැඩි කළ විට තීව්‍රතාව වැඩිවේ; λ_min නොවෙනස්ව පවතී.',
        },
      },
    ],
  },
  {
    id: 'qn-sq05',
    competency: '11.4',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'In Niels Bohr\'s semi-classical model of the hydrogen atom, an electron of mass m_e and charge -e moves in stable non-radiating circular orbits of radius r around a proton of charge +e.',
      si: 'හයිඩ්‍රජන් පරමාණුව පිළිබඳ නීල්ස් බෝර්ගේ ආකෘතියේ, ස්කන්ධය m_e සහ ආරෝපණය -e වූ ඉලෙක්ට්‍රෝනයක් ආරෝපණය +e වූ ප්‍රෝටෝනයක් වටා r අරය සහිත විකිරණ නොවන ස්ථායී වෘත්තාකාර කක්ෂවල ගමන් කරයි.',
    },
    hint: {
      en: 'Bohr\'s quantization: m_e v r = n h / (2π). Centripetal force: m_e v^2 / r = e^2 / (4π ε_0 r^2). Total energy E_n = -13.6 / n^2 eV.',
      si: 'බෝර්ගේ ක්වොන්ටීකරණය: m_e v r = n h / (2π). කේන්ද්‍රාභිසාරී බලය: m_e v^2 / r = e^2 / (4π ε_0 r^2). මුළු ශක්තිය E_n = -13.6 / n^2 eV.',
    },
    explanation: {
      en: 'Quantization of angular momentum yields discrete orbital radii r_n = n^2 r_1 and energies E_n = -13.6/n^2 eV. Photons are emitted when an electron jumps from upper orbit n_i to lower orbit n_f.',
      si: 'කෝණික ගම්‍යතා ක්වොන්ටීකරණය මගින් විවික්ත කක්ෂ අරයන් සහ ශක්ති මට්ටම් ලැබේ. ඉහළ මට්ටමක සිට පහළ මට්ටමකට වැටීමේදී ෆෝටෝනයක් විමෝචනය වේ.',
    },
    parts: [
      {
        id: 'qn-sq05-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State the two core postulates of the Bohr model of the hydrogen atom.',
          si: 'හයිඩ්‍රජන් පරමාණුව සඳහා වන බෝර් ආකෘතියේ මූලික උපකල්පන දෙක ප්‍රකාශ කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Postulate 1: Electrons revolve only in discrete non-radiating stationary orbits where orbital angular momentum is an integral multiple of h / (2π): L = m_e v r = n (h / 2π).',
              si: 'උපකල්පන 1: ඉලෙක්ට්‍රෝන විකිරණයකින් තොරව ගමන් කරන්නේ කෝණික ගම්‍යතාව h / (2π) හි පූර්ණ ගුණාකාරයක් වන ස්ථායී කක්ෂවල පමණි: L = m_e v r = n h / (2π).',
            },
          },
          {
            point: 2,
            description: {
              en: 'Postulate 2: Radiation is emitted or absorbed only when an electron undergoes a transition between stationary states: ΔE = E_i - E_f = h f = h c / λ.',
              si: 'උපකල්පන 2: විකිරණ විමෝචනය හෝ අවශෝෂණය වන්නේ ඉලෙක්ට්‍රෝනයක් එක් ස්ථායී මට්ටමක සිට තවත් මට්ටමකට සංක්‍රමණය වීමේදී පමණි: ΔE = E_i - E_f = h f.',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Angular momentum is quantized: L = n h / (2π). (2) Photons are emitted only during transitions between discrete energy states: E_i - E_f = h f.',
          si: '(1) කෝණික ගම්‍යතාව ක්වොන්ටීකෘතයි: L = n h / (2π). (2) ශක්ති මට්ටම් අතර සංක්‍රමණයේදී පමණක් ෆෝටෝන නිකුත් වේ: h f = E_i - E_f.',
        },
      },
      {
        id: 'qn-sq05-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Show that the total energy E_n of an electron in the nth Bohr orbit is negative, and explain the physical significance of the negative sign.',
          si: 'n වන බෝර් කක්ෂයේ ඉලෙක්ට්‍රෝනයක මුළු ශක්තිය E_n සෘණ අගයක් ගන්නා බව පෙන්වා, සෘණ ලකුණෙහි භෞතික අර්ථය පැහැදිලි කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Kinetic energy E_k = 1/2 m v^2 = e^2 / (8π ε_0 r). Potential energy E_p = -e^2 / (4π ε_0 r). Total energy E = E_k + E_p = -e^2 / (8π ε_0 r) < 0.',
              si: 'චාලක ශක්තිය = e^2 / (8π ε_0 r), විභව ශක්තිය = -e^2 / (4π ε_0 r). මුළු ශක්තිය E = -e^2 / (8π ε_0 r) < 0.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'The negative sign indicates the electron is bound to the nucleus; positive energy equal to |E_n| (ionization energy) must be supplied to liberate the electron to infinity.',
              si: 'සෘණ ලකුණෙන් අදහස් වන්නේ ඉලෙක්ට්‍රෝනය න්‍යෂ්ටියට බැඳී පවතින බවයි; ඉලෙක්ට්‍රෝනය අනන්තයට මුදා හැරීමට |E_n| ප්‍රමාණයේ ධන ශක්තියක් (අයනීකරණ ශක්තිය) ලබා දිය යුතුය.',
            },
          },
        ],
        modelAnswer: {
          en: 'E = E_k + E_p = +e^2/(8πε_0 r) - e^2/(4πε_0 r) = -e^2/(8πε_0 r). The negative sign signifies a bound state; energy must be supplied to free the electron.',
          si: 'E = E_k + E_p = -e^2 / (8πε_0 r). සෘණ ලකුණෙන් ඉලෙක්ට්‍රෝනය බැඳී පවතින බව දක්වයි; එය මුදා ගැනීමට ශක්තිය සැපයිය යුතුය.',
        },
      },
      {
        id: 'qn-sq05-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Using E_n = -13.6 / n^2 eV, calculate the wavelength of the photon emitted in the first line of the Balmer series (n = 3 to n = 2). State what region of the electromagnetic spectrum this line belongs to. (Take h c = 1240 eV nm).',
          si: 'E_n = -13.6 / n^2 eV භාවිතයෙන් බාමර් ශ්‍රේණියේ පළමු රේඛාවට (n = 3 සිට n = 2 දක්වා) අනුරූප ෆෝටෝනයේ තරංග ආයාමය ගණනය කරන්න. මෙම රේඛාව අයත් වන විද්‍යුත් චුම්භක කලාපය කුමක්දැයි දක්වන්න. (h c = 1240 eV nm).',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'E_3 = -13.6 / 9 = -1.511 eV; E_2 = -13.6 / 4 = -3.400 eV. Transition energy ΔE = E_3 - E_2 = -1.511 - (-3.400) = 1.889 eV ≈ 1.89 eV.',
              si: 'E_3 = -1.51 eV, E_2 = -3.40 eV. ΔE = 1.89 eV.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Wavelength λ = h c / ΔE = 1240 eV nm / 1.889 eV = 656.4 nm (H-alpha line in visible red spectrum).',
              si: 'λ = hc / ΔE = 1240 / 1.889 = 656.4 nm (දෘශ්‍ය රතු කලාපයේ H-ඇල්ෆා රේඛාව).',
            },
          },
        ],
        modelAnswer: {
          en: 'ΔE = -1.51 - (-3.40) = 1.89 eV. λ = 1240 / 1.89 = 656 nm. This is the visible red H-alpha line.',
          si: 'ΔE = 1.89 eV. λ = 1240 / 1.89 = 656 nm. මෙය දෘශ්‍ය රතු ආලෝක කලාපයට අයත් වේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq06',
    competency: '11.5',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'A radioactive isotope undergoes spontaneous disintegration obeying the exponential decay law dN/dt = -λ N. A laboratory sample has an initial activity of 800 Bq.',
      si: 'විකිරණශීලී සමස්ථානිකයක් dN/dt = -λ N ඝාතීය ක්ෂය නියමයට අනුකූලව ස්වයංසිද්ධ විඝටනයට ලක්වේ. රසායනාගාර සාම්පලයක ආරම්භක ක්‍රියාකාරිත්වය 800 Bq වේ.',
    },
    hint: {
      en: 'Activity A = λ N = A_0 e^(-λ t). Half-life T_1/2 = ln 2 / λ = 0.693 / λ. Becquerel (Bq) is 1 disintegration per second.',
      si: 'ක්‍රියාකාරිත්වය A = λ N = A_0 e^(-λ t). අර්ධ ආයු කාලය T_1/2 = ln 2 / λ = 0.693 / λ. 1 Bq = තත්පරයකට විඝටන 1කි.',
    },
    explanation: {
      en: 'Radioactivity is a spontaneous nuclear process unaffected by chemical or thermal conditions. Activity halves every half-life period.',
      si: 'විකිරණශීලීතාව රසායනික හෝ උෂ්ණත්ව තත්ව මත වෙනස් නොවන න්‍යෂ්ටික ක්‍රියාවලියකි. සෑම අර්ධ ආයු කාලයකදීම ක්‍රියාකාරිත්වය අඩක් වේ.',
    },
    parts: [
      {
        id: 'qn-sq06-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Define the terms "decay constant" λ and "half-life" T_1/2, and derive the relationship T_1/2 = ln 2 / λ.',
          si: '"ක්ෂය නියතය" λ සහ "අර්ධ ආයු කාලය" T_1/2 අර්ථ දක්වා, T_1/2 = ln 2 / λ සම්බන්ධතාව ව්‍යුත්පන්න කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Decay constant (λ): the fractional decay rate per unit time: λ = -(dN/dt) / N.',
              si: 'ක්ෂය නියතය (λ): ඒකක කාලයකදී න්‍යෂ්ටියක් ක්ෂය වීමේ භාගික සීඝ්‍රතාවයි.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Half-life (T_1/2): time required for half of the initial undecayed radioactive nuclei to disintegrate.',
              si: 'අර්ධ ආයු කාලය (T_1/2): මුල් න්‍යෂ්ටි සංඛ්‍යාවෙන් අඩක් ක්ෂය වීමට ගතවන කාලයයි.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Derivation: N = N_0 e^(-λ t). When t = T_1/2, N = N_0 / 2 => 1/2 = e^(-λ T_1/2) => ln(1/2) = -λ T_1/2 => T_1/2 = ln 2 / λ ≈ 0.693 / λ.',
              si: 'ව්‍යුත්පන්නය: N = N_0 e^(-λ t). t = T_1/2 විට N = N_0 / 2 => ln 2 = λ T_1/2 => T_1/2 = ln 2 / λ.',
            },
          },
        ],
        modelAnswer: {
          en: 'λ is probability of decay per unit time. T_½ is time for half the nuclei to decay. From N = N_0 e^(-λt), setting N = N_0/2 gives e^(λ T_½) = 2, so T_½ = ln 2 / λ.',
          si: 'λ යනු ඒකක කාලයකදී ක්ෂය වීමේ සම්භාවිතාවයි. T_½ යනු අඩක් ක්ෂය වීමට ගතවන කාලයයි. N = N_0/2 ආදේශයෙන් T_½ = ln 2 / λ ලැබේ.',
        },
      },
      {
        id: 'qn-sq06-p2',
        partLabel: '(b)',
        prompt: {
          en: 'The activity of the sample falls from 800 Bq to 100 Bq in 9.0 hours. Determine the half-life of the isotope and its decay constant λ in s^-1.',
          si: 'සාම්පලයේ ක්‍රියාකාරිත්වය පැය 9.0 කදී 800 Bq සිට 100 Bq දක්වා පහත වැටේ. සමස්ථානිකයේ අර්ධ ආයු කාලය සහ s^-1 වලින් ක්ෂය නියතය λ සොයන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Activity ratio A / A_0 = 100 / 800 = 1/8 = (1/2)^3, which means 3 half-lives have elapsed. 3 * T_1/2 = 9.0 h => T_1/2 = 3.0 h = 10,800 s.',
              si: 'A / A_0 = 1/8 = (1/2)^3 බැවින් අර්ධ ආයු 3ක් ගතවී ඇත. 3 T_1/2 = 9 h => T_1/2 = 3.0 h (10,800 s).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Decay constant λ = ln 2 / T_1/2 = 0.69315 / 10800 s = 6.42 × 10^-5 s^-1.',
              si: 'ක්ෂය නියතය λ = 0.693 / 10800 = 6.42 × 10^-5 s^-1.',
            },
          },
        ],
        modelAnswer: {
          en: '800 -> 400 -> 200 -> 100 Bq is 3 half-lives in 9 h => T_½ = 3.0 hours = 10,800 s. λ = 0.693 / 10800 = 6.42 × 10^-5 s^-1.',
          si: 'අර්ධ ආයු 3 = පැය 9 => T_½ = පැය 3.0 (10,800 s). λ = 0.693 / 10800 = 6.42 × 10^-5 s^-1 වේ.',
        },
      },
      {
        id: 'qn-sq06-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Calculate the total number of radioactive nuclei present in the initial 800 Bq sample.',
          si: 'ආරම්භක 800 Bq සාම්පලයේ අඩංගු මුළු විකිරණශීලී න්‍යෂ්ටි සංඛ්‍යාව ගණනය කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Relation between activity and number of nuclei: A = λ * N => N = A / λ.',
              si: 'ක්‍රියාකාරිත්වය සහ න්‍යෂ්ටි සංඛ්‍යාව: A = λ N => N = A / λ.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Substitution: N_0 = 800 Bq / (6.42 × 10^-5 s^-1).',
              si: 'ආදේශය: N_0 = 800 / (6.42 × 10^-5).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Result: N_0 = 1.25 × 10^7 radioactive nuclei.',
              si: 'ප්‍රතිඵලය: N_0 = 1.25 × 10^7 න්‍යෂ්ටි.',
            },
          },
        ],
        modelAnswer: {
          en: 'N_0 = A_0 / λ = 800 / (6.42 × 10^-5) = 1.25 × 10^7 nuclei.',
          si: 'N_0 = A_0 / λ = 800 / (6.42 × 10^-5) = 1.25 × 10^7 න්‍යෂ්ටි වේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq07',
    competency: '11.6',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'The stability of atomic nuclei is determined by the binding energy per nucleon. The mass of a helium-4 nucleus (alpha particle) is 4.001506 u, while proton mass is 1.007276 u and neutron mass is 1.008665 u.',
      si: 'පරමාණුක න්‍යෂ්ටිවල ස්ථායීතාව නිර්ණය වන්නේ නියුක්ලියෝනයකට බැඳීමේ ශක්තිය මගිනි. හීලියම්-4 න්‍යෂ්ටියක (ඇල්ෆා අංශුවක) ස්කන්ධය 4.001506 u වන අතර ප්‍රෝටෝන ස්කන්ධය 1.007276 u ද නියුට්‍රෝන ස්කන්ධය 1.008665 u ද වේ.',
    },
    hint: {
      en: 'Mass defect: Δm = 2 m_p + 2 m_n - m_He. 1 u corresponds to 931.5 MeV. Binding energy per nucleon = BE / A.',
      si: 'ස්කන්ධ ඌනතාව: Δm = 2 m_p + 2 m_n - m_He. 1 u = 931.5 MeV. නියුක්ලියෝනයකට බැඳීමේ ශක්තිය = BE / A.',
    },
    explanation: {
      en: 'The curve of BE/A peaks near Iron-56 (~8.8 MeV/nucleon). Lighter elements release energy through fusion towards Fe-56, while heavier elements release energy through fission towards Fe-56.',
      si: 'නියුක්ලියෝනයකට බැඳීමේ ශක්ති වක්‍රය යකඩ-56 හිදී උපරිම වේ (~8.8 MeV). සැහැල්ලු න්‍යෂ්ටි විලයනයෙන්ද බර න්‍යෂ්ටි විඛණ්ඩනයෙන්ද Fe-56 දෙසට යමින් ශක්තිය මුදාහරී.',
    },
    parts: [
      {
        id: 'qn-sq07-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Define "mass defect" and "binding energy" of an atomic nucleus.',
          si: 'පරමාණුක න්‍යෂ්ටියක "ස්කන්ධ ඌනතාව" සහ "බැඳීමේ ශක්තිය" අර්ථ දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Mass defect (Δm): the difference between the total combined rest mass of the individual constituent nucleons (protons and neutrons) and the actual rest mass of the assembled nucleus.',
              si: 'ස්කන්ධ ඌනතාව (Δm): න්‍යෂ්ටිය තැනීමට අවශ්‍ය වෙන්වූ නියුක්ලියෝනවල මුළු ස්කන්ධය සහ සෑදුණු න්‍යෂ්ටියේ සැබෑ ස්කන්ධය අතර වෙනසයි.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Binding energy (BE): the energy required to completely separate an intact nucleus into its constituent individual protons and neutrons (BE = Δm * c^2).',
              si: 'බැඳීමේ ශක්තිය (BE): න්‍යෂ්ටියක් එහි සංඝටක ප්‍රෝටෝන සහ නියුට්‍රෝන බවට අනන්තයට වෙන් කිරීමට සැපයිය යුතු ශක්තියයි (BE = Δm c^2).',
            },
          },
        ],
        modelAnswer: {
          en: 'Mass defect Δm is the mass difference between free constituent nucleons and the bound nucleus. Binding energy BE = Δm c^2 is the work required to dismantle the nucleus into free nucleons.',
          si: 'ස්කන්ධ ඌනතාව යනු නිදහස් නියුක්ලියෝන ස්කන්ධ එකතුව හා න්‍යෂ්ටි ස්කන්ධය අතර වෙනසයි. බැඳීමේ ශක්තිය යනු න්‍යෂ්ටිය වෙන් කිරීමට අවශ්‍ය ශක්තියයි.',
        },
      },
      {
        id: 'qn-sq07-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Calculate the mass defect of the helium-4 nucleus in atomic mass units (u), and find its total binding energy and binding energy per nucleon in MeV. (Take 1 u = 931.5 MeV).',
          si: 'හීලියම්-4 න්‍යෂ්ටියේ ස්කන්ධ ඌනතාව u වලින් ගණනය කර, එහි මුළු බැඳීමේ ශක්තිය සහ නියුක්ලියෝනයකට බැඳීමේ ශක්තිය MeV වලින් සොයන්න. (1 u = 931.5 MeV).',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Constituent mass = 2*(1.007276) + 2*(1.008665) = 2.014552 + 2.017330 = 4.031882 u. Mass defect Δm = 4.031882 - 4.001506 = 0.030376 u.',
              si: 'නියුක්ලියෝන ස්කන්ධය = 4.031882 u. ස්කන්ධ ඌනතාව Δm = 4.031882 - 4.001506 = 0.030376 u.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Total binding energy BE = 0.030376 u * 931.5 MeV/u = 28.295 MeV ≈ 28.30 MeV.',
              si: 'මුළු බැඳීමේ ශක්තිය = 0.030376 * 931.5 = 28.30 MeV.',
            },
          },
          {
            point: 1,
            description: {
              en: 'BE per nucleon = 28.295 / 4 = 7.074 MeV/nucleon.',
              si: 'නියුක්ලියෝනයකට බැඳීමේ ශක්තිය = 28.30 / 4 = 7.07 MeV/නියුක්ලියෝනය.',
            },
          },
        ],
        modelAnswer: {
          en: 'Δm = 2(1.007276) + 2(1.008665) - 4.001506 = 0.030376 u. Total BE = 0.030376 * 931.5 = 28.30 MeV. BE/A = 28.30 / 4 = 7.07 MeV/nucleon.',
          si: 'Δm = 0.030376 u. මුළු BE = 28.30 MeV. BE/A = 7.07 MeV/නියුක්ලියෝනය.',
        },
      },
      {
        id: 'qn-sq07-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Sketch the general shape of the binding energy per nucleon curve against mass number A. Explain why both nuclear fission of heavy nuclei and nuclear fusion of light nuclei release energy.',
          si: 'ස්කන්ධ ක්‍රමාංකය A එදිරිව නියුක්ලියෝනයකට බැඳීමේ ශක්ති වක්‍රයේ දළ හැඩය විස්තර කරන්න. බර න්‍යෂ්ටිවල න්‍යෂ්ටික විඛණ්ඩනය සහ සැහැල්ලු න්‍යෂ්ටිවල න්‍යෂ්ටික විලයනය යන දෙකෙන්ම ශක්තිය මුදාහරින්නේ මන්දැයි පැහැදිලි කරන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Curve rises sharply for light nuclei, peaks broadly at Iron-56 (A ≈ 56, ~8.8 MeV/nucleon), and decreases gradually towards heavy elements (Uranium-238, ~7.6 MeV/nucleon).',
              si: 'වක්‍රය ආරම්භයේදී සීඝ්‍රයෙන් වැඩිවී Fe-56 හිදී උපරිම වී (~8.8 MeV) බර න්‍යෂ්ටි දෙසට ක්‍රමයෙන් අඩුවේ (~7.6 MeV).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Fusion: combining light nuclei (low BE/A) produces a heavier nucleus with higher BE/A, releasing the difference as energy.',
              si: 'විලයනය: අඩු BE/A සහිත සැහැල්ලු න්‍යෂ්ටි එකතු වී වැඩි BE/A සහිත න්‍යෂ්ටියක් සෑදීමේදී ශක්තිය මුදාහැරේ.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Fission: splitting a heavy nucleus (lower BE/A ~7.6) into middle-weight fragments (higher BE/A ~8.5) increases total binding energy, releasing energy.',
              si: 'විඛණ්ඩනය: බර න්‍යෂ්ටියක් (අඩු BE/A) මධ්‍යම ප්‍රමාණයේ න්‍යෂ්ටි (වැඩි BE/A) බවට කැඩීමේදී මුළු බැඳීමේ ශක්තිය වැඩිවී ශක්තිය පිටවේ.',
            },
          },
        ],
        modelAnswer: {
          en: 'BE/A peaks at Fe-56 (~8.8 MeV). Fusion moves light nuclei up the slope to higher BE/A. Fission splits heavy nuclei (U-235) into products closer to Fe with higher BE/A. Both processes increase stability and release energy.',
          si: 'Fe-56 හිදී BE/A උපරිම වේ (~8.8 MeV). සැහැල්ලු න්‍යෂ්ටි විලයනයෙන් සහ බර න්‍යෂ්ටි විඛණ්ඩනයෙන් සෑදෙන ඵලවල BE/A වැඩි බැවින් ශක්තිය පිටවේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq08',
    competency: '11.6',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'A thermal nuclear power reactor uses Uranium-235 fuel rods undergoing sustained chain fission reactions induced by thermal neutrons.',
      si: 'තාප න්‍යෂ්ටික බලාගාරයක තාප නියුට්‍රෝන මගින් උත්තේජනය වන තිරසාර දාම විඛණ්ඩන ප්‍රතික්‍රියා සඳහා යුරේනියම්-235 ඉන්ධන දඬු භාවිත කරයි.',
    },
    hint: {
      en: 'Fission reaction: 235_U + 1_n -> fission fragments + 2 to 3 neutrons + ~200 MeV. Moderator slows neutrons; control rods absorb neutrons.',
      si: 'විඛණ්ඩන ප්‍රතික්‍රියාවෙන් නියුට්‍රෝන 2-3 ක් සහ ~200 MeV මුදාහැරේ. මන්දකය නියුට්‍රෝන මන්දනය කරයි; පාලක දඬු නියුට්‍රෝන අවශෝෂණය කරයි.',
    },
    explanation: {
      en: 'Fast fission neutrons (~2 MeV) must be moderated to thermal energies (~0.025 eV) by elastic collisions with light nuclei (graphite or heavy water) to maximize U-235 capture cross-section.',
      si: 'වේග නියුට්‍රෝන (~2 MeV) මන්දකයක් මගින් තාප නියුට්‍රෝන (~0.025 eV) බවට පත් කළ යුත්තේ U-235 ග්‍රහණය වීමේ සම්භාවිතාව උපරිම කිරීමටය.',
    },
    parts: [
      {
        id: 'qn-sq08-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Write down a balanced nuclear equation for the fission of Uranium-235 by a thermal neutron into Barium-141 and Krypton-92, and state how many free neutrons are released.',
          si: 'තාප නියුට්‍රෝනයක් මගින් යුරේනියම්-235 බේරියම්-141 සහ ක්‍රිප්ටන්-92 බවට විඛණ්ඩනය වීම සඳහා තුලිත න්‍යෂ්ටික සමීකරණය ලියා, මුදාහැරෙන නිදහස් නියුට්‍රෝන ගණන දක්වන්න.',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Balanced equation: ^235_92 U + ^1_0 n -> ^236_92 U* -> ^141_56 Ba + ^92_36 Kr + 3 ^1_0 n + Q.',
              si: 'තුලිත සමීකරණය: ^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_36 Kr + 3 ^1_0 n + Q.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Correct identification that 3 free neutrons are released.',
              si: 'නිදහස් නියුට්‍රෝන 3ක් මුදාහැරෙන බව දැක්වීම.',
            },
          },
        ],
        modelAnswer: {
          en: '^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_36 Kr + 3 ^1_0 n. Exactly 3 prompt neutrons are released.',
          si: '^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_36 Kr + 3 ^1_0 n. නිදහස් නියුට්‍රෝන 3ක් මුදාහැරේ.',
        },
      },
      {
        id: 'qn-sq08-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Explain the distinct physical roles of (1) the moderator and (2) the control rods in a nuclear fission reactor, naming a suitable material for each.',
          si: 'න්‍යෂ්ටික විඛණ්ඩන ප්‍රතික්‍රියාකාරකයක (1) මන්දකය සහ (2) පාලක දඬු වල නිශ්චිත භෞතික කාර්යයන් පැහැදිලි කර, ඒ සෑම එකක් සඳහාම සුදුසු ද්‍රව්‍යයක් නම් කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Moderator: slows down energetic fast neutrons (~2 MeV) to thermal kinetic energies (~0.025 eV) through elastic collisions without absorbing them (materials: graphite, heavy water D2O, light water).',
              si: 'මන්දකය: වේග නියුට්‍රෝන (~2 MeV) අවශෝෂණය නොකර ප්‍රත්‍යාස්ථ ගැටුම් මගින් තාප නියුට්‍රෝන (~0.025 eV) දක්වා මන්දනය කරයි (ද්‍රව්‍ය: මිනිරන්, බැර ජලය D2O).',
            },
          },
          {
            point: 2,
            description: {
              en: 'Control rods: absorb excess thermal neutrons to regulate multiplication factor k = 1 for a steady, controlled chain reaction (materials: boron, cadmium).',
              si: 'පාලක දඬු: නියුට්‍රෝන අවශෝෂණය කර ප්‍රතික්‍රියා ගුණන සාධකය k = 1 ලෙස තබා ගනිමින් පාලිත දාම ප්‍රතික්‍රියාවක් පවත්වා ගනී (ද්‍රව්‍ය: බෝරෝන්, කැඩ්මියම්).',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Moderator (graphite, heavy water): slows fast neutrons to thermal speeds for efficient U-235 capture. (2) Control rods (boron, cadmium): absorb neutrons to maintain critical multiplication factor k = 1.',
          si: '(1) මන්දකය (මිනිරන්/බැර ජලය): නියුට්‍රෝන මන්දනය කර U-235 විඛණ්ඩනය පහසු කරයි. (2) පාලක දඬු (බෝරෝන්/කැඩ්මියම්): නියුට්‍රෝන අවශෝෂණය කර ප්‍රතික්‍රියාව පාලනය කරයි.',
        },
      },
      {
        id: 'qn-sq08-p3',
        partLabel: '(c)',
        prompt: {
          en: 'If each fission of U-235 releases 200 MeV of energy, calculate the mass of U-235 consumed per day by a nuclear power plant producing 600 MW of electrical power at 30% thermal efficiency. (Take Avogadro constant N_A = 6.02 × 10^23 mol^-1, 1 eV = 1.60 × 10^-19 J).',
          si: 'U-235 එක් විඛණ්ඩනයකින් 200 MeV ශක්තියක් මුදාහරින්නේ නම්, 30% තාප කාර්යක්ෂමතාවයකින් 600 MW විද්‍යුත් ක්ෂමතාවයක් ජනනය කරන බලාගාරයක් දිනකට පරිභෝජනය කරන U-235 ස්කන්ධය ගණනය කරන්න. (N_A = 6.02 × 10^23 mol^-1, 1 eV = 1.60 × 10^-19 J).',
        },
        allocatedMarks: 3,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Thermal power required P_th = P_elec / η = 600 MW / 0.30 = 2000 MW = 2.0 × 10^9 J s^-1. Thermal energy per day E_day = 2.0 × 10^9 * 86,400 = 1.728 × 10^14 J.',
              si: 'දිනක තාප ශක්තිය = (600 × 10^6 / 0.30) * 86,400 = 1.728 × 10^14 J.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Energy per fission = 200 × 10^6 * 1.60 × 10^-19 = 3.20 × 10^-11 J. Number of fissions per day N = 1.728 × 10^14 / 3.20 × 10^-11 = 5.40 × 10^24 fissions.',
              si: 'විඛණ්ඩනයකින් ශක්තිය = 3.20 × 10^-11 J. දිනක විඛණ්ඩන ගණන = 5.40 × 10^24.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Mass of U-235 = (N / N_A) * 235 g = (5.40 × 10^24 / 6.02 × 10^23) * 0.235 kg ≈ 2.11 kg.',
              si: 'U-235 ස්කන්ධය = (5.40 × 10^24 / 6.02 × 10^23) * 0.235 = 2.11 kg.',
            },
          },
        ],
        modelAnswer: {
          en: 'Total thermal energy per day = (600 MW / 0.30) * 86400 s = 1.728 × 10^14 J. Energy/fission = 3.20 × 10^-11 J. Fissions = 5.40 × 10^24. Mass = (5.40e24 / 6.02e23) * 235 g = 2.11 kg.',
          si: 'දිනක තාප ශක්තිය = 1.728 × 10^14 J. දිනක විඛණ්ඩන = 5.40 × 10^24. U-235 ස්කන්ධය = 2.11 kg වේ.',
        },
      },
    ],
  },
  {
    id: 'qn-sq09',
    competency: '11.6',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'Thermonuclear fusion reactions power the Sun and stars. In magnetic confinement fusion (tokamaks like ITER), deuterium and tritium nuclei undergo fusion according to the reaction: ^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n + 17.6 MeV.',
      si: 'තර්මොන්‍යෂ්ටික විලයන ප්‍රතික්‍රියා මගින් සූර්යයා සහ තාරකා බලගැන්වේ. චුම්භක සීමාකිරීමේ විලයනයේදී (ITER ටෝකමාක් වැනි), ඩියුටීරියම් සහ ට්‍රිටියම් න්‍යෂ්ටි පහත ප්‍රතික්‍රියාව ඔස්සේ විලයනය වේ: ^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n + 17.6 MeV.',
    },
    hint: {
      en: 'High kinetic temperatures (T ~ 10^8 K) are needed to overcome the electrostatic Coulomb repulsion barrier between positively charged nuclei. Lawson criterion relates plasma density, temperature, and confinement time.',
      si: 'ධන ආරෝපිත න්‍යෂ්ටි අතර කූලෝම් විකර්ෂණ බාධකය ජය ගැනීමට අධි උෂ්ණත්ව (T ~ 10^8 K) අවශ්‍ය වේ.',
    },
    explanation: {
      en: 'Because both deuterons and tritons carry positive charge +e, they repel by Coulomb force. Thermal kinetic energies corresponding to ~100 million Kelvin enable quantum tunneling through the Coulomb barrier.',
      si: 'න්‍යෂ්ටි දෙකම +e ආරෝපිත බැවින් විකර්ෂණය වේ. කෙල්වින් මිලියන 100 ක පමණ උෂ්ණත්වයකදී අංශු කූලෝම් බාධකය ජයගෙන ප්‍රබල න්‍යෂ්ටික බල මගින් විලයනය වේ.',
    },
    parts: [
      {
        id: 'qn-sq09-p1',
        partLabel: '(a)',
        prompt: {
          en: 'Explain why thermonuclear fusion reactions require temperatures on the order of 10^8 K (100 million Kelvin) to ignite, whereas fission occurs readily at room temperature.',
          si: 'න්‍යෂ්ටික විඛණ්ඩනය කාමර උෂ්ණත්වයේදී පහසුවෙන් සිදුවිය හැකි වුවද, තර්මොන්‍යෂ්ටික විලයනය ඇරඹීමට 10^8 K (කෙල්වින් මිලියන 100) තරම් අධික උෂ්ණත්වයක් අවශ්‍ය වන්නේ මන්දැයි පැහැදිලි කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'In fusion, both interacting nuclei are positively charged (+e) and experience enormous repulsive Coulomb electrostatic forces as they approach.',
              si: 'විලයනයේදී ප්‍රතික්‍රියා කරන න්‍යෂ්ටි දෙකම ධන ආරෝපිත (+e) බැවින් එකිනෙක ළඟාවීමේදී දැවැන්ත කූලෝම් විකර්ෂණ බලයකට ලක්වේ.',
            },
          },
          {
            point: 2,
            description: {
              en: 'Extremely high thermal kinetic energy (~3/2 kT) at 10^8 K is required so nuclei can overcome this Coulomb potential barrier to enter the short-range (~10^-15 m) attractive strong nuclear force regime; fission uses neutral neutrons which experience no Coulomb repulsion.',
              si: '10^8 K හිදී ලැබෙන අතිමහත් චාලක ශක්තියෙන් පමණක් කූලෝම් බාධකය ජයගෙන කෙටි දුර ප්‍රබල න්‍යෂ්ටික බල කලාපයට ඇතුළු විය හැක; විඛණ්ඩනයට යොදාගන්නේ ආරෝපණ රහිත නියුට්‍රෝන බැවින් කූලෝම් විකර්ෂණයක් නැත.',
            },
          },
        ],
        modelAnswer: {
          en: 'Both nuclei carry positive charge +e and repel strongly. Overcoming the Coulomb barrier to reach the attractive strong nuclear force (<10^-15 m) requires thermal energies achieved only at T ~ 10^8 K. In contrast, fission uses uncharged neutrons that face no electrostatic barrier.',
          si: 'න්‍යෂ්ටි දෙකම ධන ආරෝපිත බැවින් දැඩි කූලෝම් විකර්ෂණයක් ඇත. එය ජයගෙන ප්‍රබල බල කලාපයට පැමිණීමට 10^8 K උෂ්ණත්වයක් අවශ්‍ය වේ. විඛණ්ඩනයට උදාසීන නියුට්‍රෝන භාවිත කරන බැවින් විකර්ෂණයක් නැත.',
        },
      },
      {
        id: 'qn-sq09-p2',
        partLabel: '(b)',
        prompt: {
          en: 'Calculate the energy released per unit mass (J kg^-1) for the D-T fusion reaction, and compare it with the energy released per unit mass in U-235 fission (~8.2 × 10^13 J kg^-1). (Atomic masses: ^2H = 2.0141 u, ^3H = 3.0160 u).',
          si: 'D-T විලයන ප්‍රතික්‍රියාවේ ඒකක ස්කන්ධයකින් මුදාහැරෙන ශක්තිය (J kg^-1) ගණනය කර, එය U-235 විඛණ්ඩනයේ ඒකක ස්කන්ධයකින් ලැබෙන ශක්තිය (~8.2 × 10^13 J kg^-1) සමඟ සංසන්දනය කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1.5,
            description: {
              en: 'Mass of reactants = 2.0141 + 3.0160 = 5.0301 u = 5.0301 * 1.66 × 10^-27 kg = 8.35 × 10^-27 kg.',
              si: 'ප්‍රතික්‍රියක ස්කන්ධය = 5.0301 u = 8.35 × 10^-27 kg.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Energy per reaction = 17.6 MeV = 17.6 × 10^6 * 1.60 × 10^-19 J = 2.816 × 10^-12 J.',
              si: 'ප්‍රතික්‍රියාවකින් ශක්තිය = 17.6 MeV = 2.816 × 10^-12 J.',
            },
          },
          {
            point: 1,
            description: {
              en: 'Energy per kg = (2.816 × 10^-12 J) / (8.35 × 10^-27 kg) = 3.37 × 10^14 J kg^-1 (approximately 4 times greater energy yield per kg than U-235 fission).',
              si: 'කිලෝග්‍රෑමයකින් ශක්තිය = 3.37 × 10^14 J kg^-1 (U-235 විඛණ්ඩනයට වඩා සිව්ගුණයකට ආසන්න වැඩි ශක්තියකි).',
            },
          },
        ],
        modelAnswer: {
          en: 'Reactant mass = 5.030 u = 8.35 × 10^-27 kg. Energy = 17.6 MeV = 2.82 × 10^-12 J. Energy density = 2.82e-12 / 8.35e-27 = 3.37 × 10^14 J kg^-1, roughly 4 times higher than uranium fission.',
          si: 'ඒකක ස්කන්ධයකින් ශක්තිය = 3.37 × 10^14 J kg^-1 වේ. මෙය යුරේනියම් විඛණ්ඩනය මෙන් 4 ගුණයකටත් වඩා වැඩිය.',
        },
      },
      {
        id: 'qn-sq09-p3',
        partLabel: '(c)',
        prompt: {
          en: 'State two significant environmental or safety advantages of fusion power over conventional nuclear fission power.',
          si: 'සාම්ප්‍රදායික න්‍යෂ්ටික විඛණ්ඩන බලයට සාපේක්ෂව විලයන බලයේ ප්‍රධාන පාරිසරික හෝ ආරක්ෂිත වාසි දෙකක් දක්වන්න.',
        },
        allocatedMarks: 2,
        rubric: [
          {
            point: 1,
            description: {
              en: 'No long-lived high-level radioactive waste (main byproduct is non-toxic inert Helium-4 gas).',
              si: 'දීර්ඝ කාලීන අධි-විකිරණශීලී අපද්‍රව්‍ය නොමැති වීම (ප්‍රධාන අතුරු ඵලය විෂ නොවන නිෂ්ක්‍රීය හීලියම් වායුවයි).',
            },
          },
          {
            point: 1,
            description: {
              en: 'Zero risk of runaway meltdown (if confinement fails, plasma cools immediately and fusion reaction extinguishes within seconds; abundant fuel source in seawater).',
              si: 'පාලනයෙන් තොර දියවී යාමේ අවදානමක් නොමැති වීම (සීමා කිරීම බිඳ වැටුණහොත් ප්ලාස්මාව සිසිල් වී ප්‍රතික්‍රියාව ක්ෂණිකව නතර වේ; ඉන්ධන සාගර ජලයේ බහුලව ඇත).',
            },
          },
        ],
        modelAnswer: {
          en: '(1) Non-toxic helium byproduct with no long-lived radioactive waste; (2) Inherent safety with zero risk of meltdown (plasma terminates instantly if disturbed).',
          si: '(1) දීර්ඝකාලීන විකිරණ අපද්‍රව්‍ය නොමැති වීම (හීලියම් සෑදේ); (2) පාලනයෙන් තොර දියවී යාම් අවදානමක් නොමැති වීම.',
        },
      },
    ],
  },
  {
    id: 'qn-sq10',
    competency: '11.7',
    type: 'structured',
    difficulty: 'advanced',
    question: {
      en: 'The Standard Model of particle physics classifies all known elementary particles into fundamental fermions (quarks and leptons) and gauge bosons mediating the fundamental interactions.',
      si: 'අංශු භෞතික විද්‍යාවේ සම්මත ආකෘතිය මගින් සියලුම මූලික අංශු මූලික ෆර්මියෝන (ක්වාක් සහ ලෙප්ටෝන) සහ මූලික අන්තර්ක්‍රියා මැදිහත් වන ගේජ් බෝසෝන ලෙස වර්ගීකරණය කරයි.',
    },
    hint: {
      en: 'Fermions (matter): 6 quarks (u, d, c, s, t, b) + 6 leptons (e, μ, τ and their neutrinos). Bosons (forces): photon (EM), W/Z (weak), gluon (strong), graviton (gravity). Proton = uud, neutron = udd.',
      si: 'ක්වාක් 6ක් (+2/3e, -1/3e) සහ ලෙප්ටෝන 6ක් (e, μ, τ, ν_e, ν_μ, ν_τ). ප්‍රෝටෝනය = uud, නියුට්‍රෝනය = udd. බීටා ක්ෂය වීම: d -> u + e^- + ν_e_bar.',
    },
    explanation: {
      en: 'Quarks have fractional charges: up (+2/3 e), down (-1/3 e). Proton charge = 2/3 + 2/3 - 1/3 = +1. Neutron charge = 2/3 - 1/3 - 1/3 = 0. In beta-minus decay, a down quark converts to an up quark mediated by a W^- boson.',
      si: 'ක්වාක්වල භාගික ආරෝපණ ඇත: up (+2/3e), down (-1/3e). ප්‍රෝටෝනය = uud (+1). නියුට්‍රෝනය = udd (0). බීටා ක්ෂය වීමේදී d ක්වාක් එකක් u ක්වාක් එකක් බවට පත්වන්නේ W^- බෝසෝනයක් හරහාය.',
    },
    parts: [
      {
        id: 'qn-sq10-p1',
        partLabel: '(a)',
        prompt: {
          en: 'State the electric charges (in terms of elementary charge e) of the "up" (u) quark and the "down" (d) quark, and deduce the quark composition of a proton and a neutron.',
          si: '"up" (u) ක්වාක් සහ "down" (d) ක්වාක් හි විද්‍යුත් ආරෝපණ (මූලික ආරෝපණය e ඇසුරෙන්) දක්වා, ප්‍රෝටෝනයක සහ නියුට්‍රෝනයක ක්වාක් සංයුතිය නිගමනය කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 1,
            description: {
              en: 'Up quark charge = +2/3 e; Down quark charge = -1/3 e.',
              si: 'Up ක්වාක් ආරෝපණය = +2/3 e; Down ක්වාක් ආරෝපණය = -1/3 e.',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Proton has charge +1 e: composition is uud (+2/3 + 2/3 - 1/3 = +1).',
              si: 'ප්‍රෝටෝනයේ ආරෝපණය +1 e: සංයුතිය uud වේ (+2/3 + 2/3 - 1/3 = +1).',
            },
          },
          {
            point: 1.5,
            description: {
              en: 'Neutron has charge 0: composition is udd (+2/3 - 1/3 - 1/3 = 0).',
              si: 'නියුට්‍රෝනයේ ආරෝපණය 0: සංයුතිය udd වේ (+2/3 - 1/3 - 1/3 = 0).',
            },
          },
        ],
        modelAnswer: {
          en: 'Up quark = +2/3 e, Down quark = -1/3 e. Proton = uud (+2/3 + 2/3 - 1/3 = +1). Neutron = udd (+2/3 - 1/3 - 1/3 = 0).',
          si: 'u = +2/3 e, d = -1/3 e. ප්‍රෝටෝනය = uud (+1 e). නියුට්‍රෝනය = udd (0).',
        },
      },
      {
        id: 'qn-sq10-p2',
        partLabel: '(b)',
        prompt: {
          en: 'List the four fundamental forces of nature in order of increasing relative strength, and name the exchange particle (gauge boson) associated with each force.',
          si: 'ස්වභාවධර්මයේ මූලික බල හතර ඒවායේ සාපේක්ෂ ප්‍රබලතාව වැඩිවන පිළිවෙළට ලියා, ඒ සෑම බලයකටම අදාළ හුවමාරු අංශුව (ගේජ් බෝසෝනය) නම් කරන්න.',
        },
        allocatedMarks: 4,
        rubric: [
          {
            point: 2,
            description: {
              en: 'Order of strength: (1) Gravitational force (weakest), (2) Weak nuclear force, (3) Electromagnetic force, (4) Strong nuclear force (strongest).',
              si: 'ප්‍රබලතාව වැඩිවන පිළිවෙළ: (1) ගුරුත්වාකර්ෂණ බලය (දුබලම), (2) දුබල න්‍යෂ්ටික බලය, (3) විද්‍යුත් චුම්භක බලය, (4) ප්‍රබල න්‍යෂ්ටික බලය (ප්‍රබලම).',
            },
          },
          {
            point: 2,
            description: {
              en: 'Mediating bosons: Gravity -> Graviton (hypothetical); Weak force -> W+, W-, Z^0 bosons; Electromagnetic force -> Photon (γ); Strong force -> Gluon (g).',
              si: 'මැදිහත් බෝසෝන: ගුරුත්වය -> ග්‍රැවිටෝනය; දුබල බලය -> W+, W-, Z^0 බෝසෝන; විද්‍යුත් චුම්භක -> ෆෝටෝනය; ප්‍රබල බලය -> ග්ලූඕනය.',
            },
          },
        ],
        modelAnswer: {
          en: 'In increasing strength: (1) Gravitational (graviton); (2) Weak nuclear (W+, W-, Z^0 bosons); (3) Electromagnetic (photon); (4) Strong nuclear (gluons).',
          si: 'ප්‍රබලතාව වැඩිවන පිළිවෙළ: (1) ගුරුත්වාකර්ෂණ (ග්‍රැවිටෝන); (2) දුබල න්‍යෂ්ටික (W/Z බෝසෝන); (3) විද්‍යුත් චුම්භක (ෆෝටෝන); (4) ප්‍රබල න්‍යෂ්ටික (ග්ලූඕන).',
        },
      },
      {
        id: 'qn-sq10-p3',
        partLabel: '(c)',
        prompt: {
          en: 'Describe the process of negative beta decay (β^-) at the fundamental quark level, stating which quark changes flavor, what gauge boson is exchanged, and what final particles are emitted.',
          si: 'මූලික ක්වාක් මට්ටමින් සෘණ බීටා (β^-) ක්ෂය වීමේ ක්‍රියාවලිය විස්තර කරන්න. එහිදී රසය වෙනස් වන ක්වාක් එක, හුවමාරු වන ගේජ් බෝසෝනය සහ විමෝචනය වන අවසාන අංශු මොනවාදැයි දක්වන්න.',
        },
        allocatedMarks: 2,
        rubric: [
          {
            point: 1,
            description: {
              en: 'A down quark (d) in the neutron transforms into an up quark (u), changing the neutron (udd) into a proton (uud).',
              si: 'නියුට්‍රෝනයේ (udd) ඇති down ක්වාක් (d) එකක් up ක්වාක් (u) එකක් බවට පත්වී ප්‍රෝටෝනයක් (uud) බවට පෙරළේ.',
            },
          },
          {
            point: 1,
            description: {
              en: 'The transformation emits a virtual intermediate W^- boson, which rapidly decays into an electron (β^- particle) and an electron antineutrino (ν_e_bar): d -> u + W^- -> u + e^- + ν_e_bar.',
              si: 'මෙම සංක්‍රාන්තියේදී W^- බෝසෝනයක් නිකුත් වන අතර එය ක්ෂණිකව ඉලෙක්ට්‍රෝනයක් (β^-) සහ ඉලෙක්ට්‍රෝන ප්‍රති-නියුට්‍රිනෝවක් බවට ක්ෂය වේ: d -> u + e^- + ν_e_bar.',
            },
          },
        ],
        modelAnswer: {
          en: 'A down quark converts into an up quark via weak interaction: d -> u + W^-. The intermediate W^- boson decays into an electron (β^-) and an electron antineutrino (ν̄_e), turning a neutron into a proton.',
          si: 'නියුට්‍රෝනයේ ඇති d ක්වාක් එකක් u ක්වාක් එකක් බවට පත්වෙමින් W^- බෝසෝනයක් නිකුත් කරයි; එය ඉලෙක්ට්‍රෝනයක් සහ ඉලෙක්ට්‍රෝන ප්‍රතිනියුට්‍රිනෝවක් බවට පත්වේ.',
        },
      },
    ],
  },
];
