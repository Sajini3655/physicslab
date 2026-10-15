# Measurement Unit (Unit 1) - Complete A/L Syllabus Coverage Map & Quality Audit

This document defines the comprehensive curricular mapping and verification report for **Unit 1: Measurement (මිනුම)** in PhysicsLab according to the National Institute of Education (NIE) Sri Lanka G.C.E. Advanced Level Physics Syllabus, Teacher's Instructional Manual, and Resource Books.

---

## 1. Syllabus Competencies & Learning Outcomes Mapping

| Competency | Official NIE Description | PhysicsLab Lesson / Module | Practical Investigations | Question Bank Coverage |
| :--- | :--- | :--- | :--- | :--- |
| **1.1** | Inquires into the physical world and the contribution of physics to human development | `scientific-investigation`<br>*(Lesson 1.1)* | Scientific observation vs inference; hypothesis testing; controlled variables | Q-101 to Q-112 (12 questions) |
| **1.2** | Uses units appropriately in measuring physical quantities | `physical-quantities-and-units`<br>*(Lesson 1.2)* | 2019 SI redefinition constants; density calculation with SI conversions; sig figs | Q-113 to Q-124 (12 questions) |
| **1.3** | Uses dimensions of physical quantities in scientific studies | `dimensional-analysis`<br>*(Lesson 1.3)* | Checking equation homogeneity & deriving physical formulas | Q-125 to Q-134 (10 questions) |
| **1.4** | Uses measuring instruments appropriately and accurately in scientific investigations | `measuring-instruments`<br>`errors-and-uncertainties`<br>`practicals`<br>*(Lessons 1.4, 1.5, 1.7)* | **Practical 1**: Vernier Calipers (Cylinder & Tube)<br>**Practical 2**: Micrometer Screw Gauge (Coin)<br>**Practical 3**: Spherometer (Radius of Curvature)<br>**Practical 4**: Travelling Microscope (Rubber Tube)<br>**Practical 5**: Density of Regular Solid | Q-135 to Q-160 (26 questions) |
| **1.5** | Uses concepts of vectors and scalars to analyze physical situations | `vectors-and-scalars`<br>*(Lesson 1.6)* | Interactive 2D Vector Workspace (Resolution, Addition, Subtraction, Polygon Law) | Q-161 to Q-172 (12 questions) |
| **Unit Assessment** | Synthesis of Competencies 1.1 to 1.5 | `unit-assessment`<br>*(Lesson 1.8)* | Integrated problem solving across all competencies | 20-question balanced end-of-unit assessment |

---

## 2. NIE Grade 12 Practicals Specification & Implementation

### Practical 1: Dimensions and Volume of a Hollow Cylinder using Vernier Calipers
- **Apparatus**: Vernier calipers (least count 0.1 mm or 0.02 mm), hollow cylinder / vessel.
- **Physical Quantities**: External diameter ($D$), internal diameter ($d$), external height ($H_{\text{ext}}$), cavity depth ($h_{\text{cavity}}$), external radius ($R_{\text{ext}} = D/2$), internal radius ($r_{\text{int}} = d/2$).
- **Geometry Modes**:
  - **Open Hollow Tube**: $V_{\text{solid}} = \pi(R_{\text{ext}}^2 - r_{\text{int}}^2) H$.
  - **Closed-Bottom Vessel (Calorimeter)**: $V_{\text{ext}} = \pi R_{\text{ext}}^2 H_{\text{ext}}$, $V_{\text{cavity}} = \pi r_{\text{int}}^2 h_{\text{cavity}}$, $t_{\text{base}} = H_{\text{ext}} - h_{\text{cavity}}$, $V_{\text{solid}} = V_{\text{ext}} - V_{\text{cavity}}$.
- **Zero Correction**: $\text{Corrected} = \text{Observed} - (\text{Signed Zero Error})$.

### Practical 2: Diameter and Thickness of a Coin using a Micrometer Screw Gauge
- **Apparatus**: Micrometer screw gauge (pitch 0.5 mm, 50 circular divisions, least count 0.01 mm), coin.
- **Physical Quantities**: Diameter ($D$ across 3 coplanar orientations: 0°, 60°, 120°), thickness ($t$ across 3 rim positions).
- **Metrology & Guardrails**:
  - Replaced incorrect "three perpendicular axes" with 3 coplanar diameter orientations (0°, 60°, 120°) to account for elliptical deformation while measuring thickness separately.
  - Verified coin diameter fits within the simulated micrometer's 0–25 mm range, with real-time range badges.
  - Ratchet stop guarantees uniform contact pressure.
  - $V = \pi (D/2)^2 t$; Fractional uncertainty $\Delta V / V = 2(\text{LC}/D) + (\text{LC}/t)$.

### Practical 3: Radius of Curvature of Spherical Surfaces using a Spherometer
- **Apparatus**: Spherometer (pitch 1 mm, 100 circular divisions, least count 0.01 mm), plane glass plate, spherical watch glasses (convex & concave).
- **Physical Formula**:
  $$R = \frac{a^2}{6|h|} + \frac{|h|}{2}$$
- **Metrology & Safeguards**:
  - Negative sagitta ($h < 0$) represents a **concave depression** rather than a plane surface. Radius magnitude is computed using $|h|$.
  - Plane surface ($h = 0$) correctly yields $R = \infty$.
  - Sagitta below resolution ($0 < |h| < 0.01\text{ mm}$) is distinguished as unresolvable curvature.

### Practical 4: Internal and External Radii of a Rubber Tube using a Travelling Microscope
- **Apparatus**: Travelling microscope (vernier least count 0.01 mm), rubber tube section, illumination.
- **Physical Quantities**: Horizontal traverse coordinates $x_1$ (left outer), $x_2$ (left inner), $x_3$ (right inner), $x_4$ (right outer).
- **Calculations**:
  - Internal diameter: $d_{\text{int}} = |x_3 - x_2| \implies r_{\text{int}} = d_{\text{int}} / 2$.
  - External diameter: $d_{\text{ext}} = |x_1 - x_4| \implies r_{\text{ext}} = d_{\text{ext}} / 2$.
  - Wall thickness: $t = r_{\text{ext}} - r_{\text{int}}$.
- Both radii and diameters are explicitly taught and rendered in results displays.

### Practical 5: Determination of the Density of a Regular Solid
- **Apparatus**: Electronic balance (LC 0.01 g), Vernier calipers / Micrometer screw gauge, regular solids (brass block, steel cylinder, glass sphere).
- **Instrument Selection Rule**:
  - Replaced arbitrary "2 cm" rule with formal metrological criteria: measuring range, instrument resolution, specimen geometry, and target fractional error ($\Delta x / x$).
- **Calculations & Error Propagation**:
  - Density: $\rho = m / V$.
  - SI conversion: $1\text{ g cm}^{-3} = 1000\text{ kg m}^{-3}$.
  - Fractional error propagation: $\Delta \rho / \rho = \Delta m / m + \Delta V / V$.

---

## 3. Vector Workspace Enhancements

- **Perpendicular Component Resolution**: $A_x = A \cos\theta, A_y = A \sin\theta$.
- **Vector Addition**: Parallelogram Law and Head-to-Tail Triangle Law.
- **Vector Subtraction**: $\vec{D} = \vec{A} - \vec{B} = \vec{A} + (-\vec{B})$, illustrating reversed negative vector added head-to-tail for relative motion analysis.
- **Polygon Law of Vectors**: Head-to-tail addition of 3 coplanar vectors with resultant closing the polygon, highlighting static equilibrium ($\sum \vec{F} = 0$).

---

## 4. Question Bank & Assessment Quality Audit

- **Question Bank Size**: 72 original questions.
- **Question Classification**:
  - **MCQs**: 60 questions with 4 distinct options, verified keys, and hints.
  - **Numerical Questions**: 12 questions with calibrated tolerances and explicit unit checking.
  - **Diagram & Instrument Reading**: Coincident division reading for Vernier, Micrometer, Spherometer, and Microscope.
  - **Structured Practical Reasoning**: Step-by-step metrology and error propagation problems.
- **Summative Assessment**:
  - 20-question exam with fixed distribution across competencies: 1.1 (3), 1.2 (4), 1.3 (3), 1.4 (6), 1.5 (4).
  - Robust numerical input parser (`parseNumericalInput`) supports comma separators, units, and scientific notation while strictly preventing empty submissions from evaluating to zero.

---

## 5. Verification & Test Suite Summary

- **Unit Tests**: 111 / 111 tests passing across 5 test suites (`instruments.test.ts`, `question-bank.test.ts`, `engine.test.ts`, `contract.test.ts`, `interpret.test.ts`).
- **TypeScript**: 0 errors (`tsc --noEmit`).
- **ESLint**: 0 errors, 0 warnings.
- **Next.js Production Build**: 130 static pages rendered successfully via Turbopack.
- **Git Status**: Clean working tree on `feature/sajini-simulation-integration` with all changes strictly local.
