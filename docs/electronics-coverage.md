# Unit 9: Electronics (ඉලෙක්ට්‍රොනික විද්‍යාව) - Syllabus & Coverage Mapping

**Official Syllabus Source:** NIE G.C.E. A/L Physics Syllabus (2017) & Teacher's Instructional Manual Grade 13  
**Unit:** 09 - Electronics  
**Target Coverage:** 100% Comprehensive Bilingual Implementation (English & Sinhala)

---

## Competency Mapping

| Competency | Official Description | Key Theoretical & Practical Outcomes | Implemented Lessons / Practicals / Activities | Question Bank IDs |
| :--- | :--- | :--- | :--- | :--- |
| **9.1** | Explores semiconductors, doping, and charge carriers | • Intrinsic vs extrinsic semiconductors<br>• Doping: trivalent (p-type, holes) vs pentavalent (n-type, electrons)<br>• Majority and minority carriers<br>• Energy bands: valence band, conduction band, forbidden band gap $E_g$ | `lesson-9-1` (Semiconductors and Doping) | `elec-9-1-01` to `elec-9-1-08` |
| **9.2** | Investigates p-n junction diodes and I-V characteristics | • Depletion layer formation and barrier potential ($V_B \approx 0.7\text{ V}$ for Si, $0.3\text{ V}$ for Ge)<br>• Forward and reverse bias characteristics<br>• Dynamic resistance $r_d = \frac{\Delta V}{\Delta I}$<br>• Zener diode avalanche and Zener breakdown | `lesson-9-2` (p-n Junction Diodes and Zener Diodes) | `elec-9-2-01` to `elec-9-2-08` |
| **9.3** | Analyzes rectification, smoothing, and voltage regulation | • Half-wave rectification ($f_{\text{out}} = f_{\text{in}}$)<br>• Full-wave bridge rectification ($f_{\text{out}} = 2f_{\text{in}}$, 4 diodes)<br>• Capacitor smoothing filters, ripple factor, and peak inverse voltage (PIV)<br>• Zener diode voltage regulation: $V_L = V_Z$ | `lesson-9-3` (Rectification and Power Supplies) | `elec-9-3-01` to `elec-9-3-08` |
| **9.4** | Investigates Bipolar Junction Transistors (BJT) | • Structure of npn and pnp transistors<br>• Biasing conditions: Active, Saturation, and Cut-off<br>• Current relations: $I_E = I_B + I_C$, DC current gain $\beta = \frac{I_C}{I_B}$<br>• Common Emitter (CE) characteristics and load line<br>• CE voltage amplifier: voltage gain $A_v = -\beta \frac{R_C}{R_{\text{in}}}$ and 180° phase inversion<br>• Transistor as an electronic switch | `lesson-9-4` (Bipolar Junction Transistors and Amplification) | `elec-9-4-01` to `elec-9-4-10` |
| **9.5** | Investigates Operational Amplifiers (Op-Amps) | • Ideal Op-Amp properties: $A_{\text{OL}} = \infty, R_{\text{in}} = \infty, R_{\text{out}} = 0$<br>• Virtual ground and virtual short concepts<br>• Inverting amplifier: $A_v = -\frac{R_f}{R_{\text{in}}}$<br>• Non-inverting amplifier: $A_v = 1 + \frac{R_f}{R_1}$<br>• Voltage follower (buffer): $A_v = 1$<br>• Summing amplifier and voltage comparators with saturation limits | `lesson-9-5` (Operational Amplifiers and Negative Feedback) | `elec-9-5-01` to `elec-9-5-10` |
| **9.6** | Analyzes digital logic gates and Boolean combinational circuits | • Logic levels: binary 0 and 1<br>• Basic gates: NOT, AND, OR<br>• Universal gates: NAND, NOR<br>• Exclusive gates: XOR, XNOR<br>• Truth tables, Boolean algebra, De Morgan’s Laws<br>• Sensor-driven switching circuits (LDR, thermistor) | `lesson-9-6` (Digital Logic Gates and Boolean Algebra) | `elec-9-6-01` to `elec-9-6-10` |
| **Interactive Simulation Lab** | 60fps Semiconductor Diode, Transistor Amplifier & Op-Amp Circuit Lab | • Multi-mode interactive laboratory: Mode 1 Diode bridge rectifier with interactive capacitor filter and oscilloscope; Mode 2 Inverting/Non-inverting Op-Amp circuit simulator with real-time saturation clipping | `lesson-9-7` (Electronics & Op-Amp Simulation Lab) | Interactive Exploration |
| **Summative Assessment** | 16-Question Comprehensive Diagnostic Exam | Balanced across all 6 competencies with automated scoring and revision links | `lesson-9-8` (Electronics Unit Assessment) | `elec-9-1-xx` to `elec-9-6-xx` |

---

## Canonical Physical Constants & Standard Formulas

- Thermal voltage at 300 K: $V_T = \frac{kT}{q} \approx 25.86\text{ mV}$
- Silicon barrier potential: $V_B \approx 0.7\text{ V}$
- Germanium barrier potential: $V_B \approx 0.3\text{ V}$
- Ideal Diode equation: $I = I_s \left( e^{\frac{V}{n V_T}} - 1 \right)$
- Transistor current gain: $\beta = \frac{I_C}{I_B}$, $\alpha = \frac{I_C}{I_E} = \frac{\beta}{\beta + 1}$
- Inverting Op-Amp gain: $A_v = -\frac{R_f}{R_1}$
- Non-inverting Op-Amp gain: $A_v = 1 + \frac{R_f}{R_1}$
