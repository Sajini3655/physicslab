# Unit 3: Oscillations and Waves – Complete Syllabus & Laboratory Coverage Map

**Curriculum Alignment**:
* National Institute of Education (NIE) Sri Lanka G.C.E. (A/L) Physics Syllabus 2017 (Unit 3: Oscillations and Waves, Competencies 3.1–3.7)
* NIE Grade 12 Physics Teacher's Instructional Manual & Resource Book
* NIE A/L Physics Practical Handbook (Practicals 3.1 to 3.5)

---

## 1. Competency Breakdown & Theoretical Models

### Competency 3.1: Simple Harmonic Motion (SHM)
* **Defining Condition**: Restoring acceleration is directly proportional to displacement from equilibrium and directed towards equilibrium:
  $$\frac{d^2 x}{dt^2} = -\omega^2 x \quad \iff \quad a = -\omega^2 x$$
* **Kinematics**:
  $$x(t) = A \sin(\omega t + \phi)$$
  $$v(t) = \frac{dx}{dt} = \omega A \cos(\omega t + \phi) = \pm \omega \sqrt{A^2 - x^2}$$
  $$a(t) = \frac{dv}{dt} = -\omega^2 A \sin(\omega t + \phi) = -\omega^2 x$$
* **Periodic Parameters**: Period $T = \frac{2\pi}{\omega}$, frequency $f = \frac{1}{T} = \frac{\omega}{2\pi}$.
* **Energy Distribution**:
  $$E_k = \frac{1}{2} m v^2 = \frac{1}{2} m \omega^2 (A^2 - x^2)$$
  $$E_p = \frac{1}{2} m \omega^2 x^2 = \frac{1}{2} k x^2$$
  $$E_{total} = E_k + E_p = \frac{1}{2} m \omega^2 A^2 = \text{constant}$$
* **Canonical Oscillators**:
  - Simple Pendulum (small angles $\theta \le 5^\circ$): $T = 2\pi \sqrt{\frac{L}{g}}$
  - Helical Spring: $T = 2\pi \sqrt{\frac{m}{k}}$, springs in series ($k_{eff} = \frac{k_1 k_2}{k_1 + k_2}$), springs in parallel ($k_{eff} = k_1 + k_2$)
  - U-tube Liquid Column: $T = 2\pi \sqrt{\frac{L}{2g}}$

### Competency 3.2: Damped & Forced Oscillations, Resonance
* **Damping Classification**:
  - Underdamped: Exponential amplitude decay $A(t) = A_0 e^{-\gamma t}$, oscillates with slightly lower frequency.
  - Critically Damped: Returns to equilibrium in minimum time without oscillation (automobile shock absorbers).
  - Overdamped: Sluggish non-oscillatory return.
* **Forced Vibration & Resonance**:
  - Driven oscillator amplitude peak when driver frequency matches natural frequency: $f_{driver} \approx f_0$.
  - Sharpness of resonance and Q-factor. Barton's pendulums demonstration.

### Competency 3.3: Progressive Waves & Superposition
* **Wave Parameters**: $v = f \lambda$, period $T$, phase difference $\Delta \phi = \frac{2\pi}{\lambda} \Delta x$.
* **Wave Function**: $y(x,t) = A \sin(\omega t \mp k x)$ where wave number $k = \frac{2\pi}{\lambda}$.
* **Superposition Principle**: When two or more waves overlap, the resultant displacement is the algebraic/vector sum: $y_{net} = \sum y_i$.
* **Stationary (Standing) Waves**: Superposition of identical progressive waves propagating in opposite directions:
  $$y = A \sin(\omega t - kx) + A \sin(\omega t + kx) = 2A \cos(kx) \sin(\omega t)$$
  - Nodes: $\cos(kx) = 0 \implies x = \frac{(2n+1)\lambda}{4}$ (zero amplitude, maximum pressure variation)
  - Antinodes: $|\cos(kx)| = 1 \implies x = \frac{n\lambda}{2}$ (maximum amplitude $2A$, minimum pressure variation)
  - Distance between consecutive nodes: $\frac{\lambda}{2}$; node to adjacent antinode: $\frac{\lambda}{4}$.

### Competency 3.4: Sound Waves & Doppler Effect
* **Speed of Sound**:
  - In liquids/solids: $v = \sqrt{\frac{B}{\rho}}$ or $v = \sqrt{\frac{Y}{\rho}}$.
  - In ideal gases (Laplace's formula): $v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}}$, temperature dependence $v \propto \sqrt{T}$.
* **Characteristics**:
  - Pitch $\propto$ frequency $f$.
  - Loudness $\propto$ intensity $I = \frac{P}{4\pi r^2}$ (inverse square law).
  - Sound Intensity Level $\beta = 10 \log_{10}\left(\frac{I}{I_0}\right)$ dB ($I_0 = 10^{-12}\text{ W m}^{-2}$).
* **Acoustic Beats**: Beat frequency $f_{beat} = |f_1 - f_2|$.
* **Doppler Effect**:
  $$f' = f \left(\frac{v \pm v_o}{v \mp v_s}\right)$$

### Competency 3.5: Vibrations of Strings & Air Columns (Practicals)
* **Stretched String**: $v = \sqrt{\frac{T}{m}}$ ($m$ = mass per unit length).
  - Fundamental: $\lambda = 2L \implies f_0 = \frac{1}{2L} \sqrt{\frac{T}{m}}$.
  - Harmonics: $f_n = n f_0$ ($n = 1, 2, 3, \dots$).
* **Closed Organ Pipe (One End Closed)**:
  - Fundamental: $L + e = \frac{\lambda}{4} \implies f_0 = \frac{v}{4(L+e)}$.
  - Only odd harmonics: $f_1, 3f_1, 5f_1, \dots$.
* **Open Organ Pipe (Both Ends Open)**:
  - Fundamental: $L + 2e = \frac{\lambda}{2} \implies f_0 = \frac{v}{2(L+2e)}$.
  - All harmonics present: $f_1, 2f_1, 3f_1, \dots$.

### Competency 3.6: Geometrical Optics
* **Refraction & Total Internal Reflection**:
  - Snell's Law: $n_1 \sin \theta_1 = n_2 \sin \theta_2$, critical angle $\sin c = \frac{1}{n}$.
  - Real and Apparent Depth: $n = \frac{\text{Real Depth}}{\text{Apparent Depth}}$.
* **Prism Refraction**:
  - Deviation $D = i_1 + i_2 - A$.
  - At minimum deviation $D_m$: $i_1 = i_2 = \frac{A + D_m}{2}$ and $r_1 = r_2 = \frac{A}{2} \implies n = \frac{\sin\left(\frac{A + D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$.
* **Thin Lenses & Optical Instruments**:
  - Thin Lens Formula: $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$.
  - Compound microscope angular magnification: $M = m_o \times M_e = -\frac{v_o}{u_o} \times \left(1 + \frac{D}{f_e}\right)$.
  - Astronomical telescope in normal adjustment: $M = \frac{f_o}{f_e}$, barrel length $L = f_o + f_e$.

### Competency 3.7: Physical Optics
* **Young's Double Slit Interference**: Fringe width $\beta = \frac{\lambda D}{d}$.
* **Transmission Diffraction Grating**: $d \sin \theta = n \lambda$, where grating element $d = \frac{1}{N}$.
* **Polarization**: Brewster's law $\tan i_p = n$; Malus' law $I = I_0 \cos^2 \theta$.

---

## 2. Canonical Laboratory Practicals (NIE Practical Handbook)

1. **Practical 3.1: Sonometer – Laws of Transverse Vibrations of Stretched Strings**
   - Apparatus: Sonometer box, movable bridges, tuning forks of known frequencies, slotted weight hanger, paper rider.
   - Relationships verified: $f \propto \frac{1}{L}$ (at constant $T, m$), $f \propto \sqrt{T}$ (at constant $L, m$).
2. **Practical 3.2: Resonance Tube – Speed of Sound in Air & End Correction**
   - Apparatus: Resonance water tube with movable reservoir, tuning forks ($256\text{ Hz}$ to $512\text{ Hz}$), metre rule, vernier calipers (tube internal diameter).
   - Relations: First resonance $l_1 + e = \frac{\lambda}{4}$, second resonance $l_2 + e = \frac{3\lambda}{4}$.
   - Wavelength: $\lambda = 2(l_2 - l_1)$. Speed of sound $v = f \lambda = 2f(l_2 - l_1)$.
   - End correction: $e = \frac{l_2 - 3l_1}{2} \approx 0.3 d_{int}$.
3. **Practical 3.3: Spectrometer – Refractive Index of a Glass Prism**
   - Apparatus: Spectrometer, glass prism, sodium vapour lamp / monochromatic source, magnifying glass.
   - Collimator leveling, prism angle $A$ measurement (reflected rays from two faces: $2A = |\theta_1 - \theta_2|$).
   - Angle of minimum deviation $D_m$ determination and refractive index calculation: $n = \frac{\sin\left(\frac{A+D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$.
4. **Practical 3.4: Spectrometer – Wavelength of Light Using Diffraction Grating**
   - Normal incidence adjustment, order $n = 1, 2$ diffraction angles $\theta_L, \theta_R$.
   - Grating equation: $d \sin \theta = n \lambda \implies \lambda = \frac{d \sin \theta}{n}$.
5. **Practical 3.5: Thin Lenses – Focal Length Determination**
   - Convex lens: $u-v$ method, displacement method between fixed object and screen ($f = \frac{D^2 - d^2}{4D}$).
   - Concave lens: Auxiliary convex lens combination ($f_{combined} \implies \frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2}$).
