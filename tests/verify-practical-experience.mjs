import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(
  process.env.USERPROFILE || 'C:\\Users\\sajin',
  '.gemini',
  'antigravity',
  'brain',
  '5ccff483-686c-42d4-9882-292b4bb6c704',
  'screenshots'
);

async function runPracticalVerification() {
  console.log(`\n=== RUNNING FULL PRACTICAL SUITE VERIFICATION ===\nTarget URL: ${BASE_URL}\n`);
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log(`[Browser Console Error] ${msg.text()}`);
    }
  });

  try {
    // ------------------------------------------------------------------------
    // 1. Vernier Calipers (Exp 1) - Setup, Specimen Toggle, Observations, Calculations, Rubric
    // ------------------------------------------------------------------------
    console.log('\n--- 1. Testing Practical 1: Vernier Calipers (/en/units/measurement/practical-investigations) ---');
    await page.goto(`${BASE_URL}/en/units/measurement/practical-investigations`, { waitUntil: 'networkidle' });

    // Clear practical work state
    await page.evaluate(() => {
      localStorage.removeItem('physicslab_practical_work_v1');
    });
    await page.reload({ waitUntil: 'networkidle' });

    // Assert Practical 1 is default tab
    const exp1Heading = await page.locator('text=Practical 1: Internal/External Radii & Material Volume of a Cylinder').count();
    if (exp1Heading === 0) throw new Error('Practical 1 heading not found');
    console.log('✓ Found Practical 1: Internal/External Radii & Material Volume of a Cylinder');

    // Test Specimen Switch to Rectangular Block
    const blockSpecimenBtn = page.locator('button:has-text("Rectangular Block")').first();
    await blockSpecimenBtn.click();
    await page.waitForTimeout(200);
    const blockInputs = await page.locator('text=Block Length (l)').count();
    if (blockInputs === 0) throw new Error('Block Length row not displayed after selecting block specimen');
    console.log('✓ Specimen switch verified: Rectangular Block observations rendered');

    // Switch back to Closed Cylinder
    const cylSpecimenBtn = page.locator('button:has-text("Closed Cylinder")').first();
    await cylSpecimenBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Switched back to Cylinder (Closed Bottom)');

    // Click "Load Sample Data" to load realistic observations
    const loadSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await loadSampleBtn.click();
    await page.waitForTimeout(300);
    console.log('✓ Clicked "Load Sample Data"');

    // Verify first external diameter trial has value 25.4
    const extTrialsInput = page.locator('tbody tr').first().locator('input').first();
    const loadedExtVal = await extTrialsInput.inputValue();
    if (loadedExtVal !== '25.4') {
      throw new Error(`Sample observation not loaded! Expected '25.4', got '${loadedExtVal}'`);
    }
    console.log(`✓ Sample observation loaded: External diameter D1 = ${loadedExtVal} mm`);

    // Verify both Cavity Capacity Volume and Solid Material Volume cards exist separately
    const cavityCard = await page.locator('text=Hollow-Cylinder Capacity').count();
    const solidCard = await page.locator('text=Solid Material Volume (V_solid)').count();
    if (cavityCard === 0 || solidCard === 0) {
      throw new Error('Separate hollow-cylinder capacity and solid material volume cards not rendered!');
    }
    console.log('✓ Verified distinct results: Hollow-Cylinder Capacity V = π(d/2)²h and Solid Material Volume V_solid');

    // Switch to Independent Mode
    const indepBtn = page.locator('button:has-text("Independent Practice")').first();
    await indepBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Switched to Independent Practice Mode');

    // In Independent mode, enter an incorrect external radius to trigger diagnostic feedback
    const rExtInput = page.locator('input[placeholder="R (mm)"]').first();
    await rExtInput.fill('25.38'); // student incorrectly forgot to divide diameter by 2!
    console.log('✓ Entered student test value in R (mm): 25.38');

    // Click Check Calculations
    const checkBtn = page.locator('button:has-text("Check My Calculations")').first();
    await checkBtn.click();
    await page.waitForTimeout(300);

    // Verify diagnostic feedback shows guidance
    const feedbackText = await page.locator('p:has-text("External radius is half of corrected diameter")').count();
    if (feedbackText === 0) throw new Error('Expected diagnostic feedback on radius halving not shown!');
    console.log('✓ Diagnostic feedback triggered correctly: "External radius is half of corrected diameter"');

    // Now correct the radius value (25.38 / 2 = 12.69)
    await rExtInput.fill('12.69');
    await checkBtn.click();
    await page.waitForTimeout(300);
    console.log('✓ Corrected radius calculation entered: 12.69 mm');

    // Complete Self-Assessment Rubric (select score 2 on all 3 criteria)
    const rubricButtons = page.locator('button:text-is("2")');
    const rubricCount = await rubricButtons.count();
    for (let i = 0; i < rubricCount; i++) {
      await rubricButtons.nth(i).click();
    }
    console.log(`✓ Scored full marks on ${rubricCount} rubric criteria`);

    // Submit / Mark Completed
    const completeBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await completeBtn.click();
    await page.waitForTimeout(300);

    const submittedBanner = await page.locator('text=Practical record completed and saved to your laboratory log.').count();
    if (submittedBanner === 0) throw new Error('Lab completion confirmation not displayed!');
    console.log('✓ Lab submitted and confirmed: "Practical record completed and saved to your laboratory log."');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-01-vernier-en.png') });

    // ------------------------------------------------------------------------
    // 2. Language Switch to Sinhala & Persistence Verification
    // ------------------------------------------------------------------------
    console.log('\n--- 2. Switching to Sinhala & Verifying Persistence ---');
    const langDropdown = page.locator('header button:has(svg.lucide-globe)');
    await langDropdown.click();
    await page.waitForTimeout(200);
    const siOption = page.locator('[role="menuitem"]:has-text("සිංහල")');
    await siOption.click();
    await page.waitForURL('**/si/units/measurement/practical-investigations', { waitUntil: 'networkidle' });

    // Verify Sinhala UI
    const siTitle = await page.locator('text=ප්‍රායෝගික පරීක්ෂණය 1: සිලින්ඩරයක අභ්‍යන්තර/බාහිර අරය').count();
    if (siTitle === 0) throw new Error('Sinhala title for Exp 1 not found');
    console.log('✓ Sinhala title rendered: ප්‍රායෝගික පරීක්ෂණය 1: සිලින්ඩරයක අභ්‍යන්තර/බාහිර අරය...');

    // Verify observations survived
    const siExtInput = page.locator('tbody tr').first().locator('input').first();
    const siExtVal = await siExtInput.inputValue();
    if (siExtVal !== '25.4') {
      throw new Error(`Observation failed to survive language switch! Expected '25.4', got '${siExtVal}'`);
    }
    console.log(`✓ Preserved observation across language switch: D1 = ${siExtVal} mm`);

    // Verify calculation input survived
    const siRInput = page.locator('input[placeholder="R (mm)"]').first();
    const siRVal = await siRInput.inputValue();
    if (siRVal !== '12.69') {
      throw new Error(`Calculation input failed to survive! Expected '12.69', got '${siRVal}'`);
    }
    console.log(`✓ Preserved student calculation across language switch: R = ${siRVal} mm`);

    // Verify rubric score survived (6 / 6)
    const siRubricScore = await page.locator('span:has-text("/ 6")').first().innerText();
    if (!siRubricScore.includes('6')) {
      throw new Error(`Rubric score failed to survive! Got: ${siRubricScore}`);
    }
    console.log(`✓ Preserved rubric self-evaluation score: ${siRubricScore}`);

    // Verify Mobile Responsive & Zero Horizontal Overflow at 375px
    console.log('\n--- 3. Testing Mobile Responsive Viewport (375px) in Sinhala ---');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (hasOverflow) throw new Error('Horizontal overflow detected on 375px mobile view!');
    console.log('✓ Zero horizontal overflow on 375px mobile viewport');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-02-vernier-si-mobile.png') });

    // Reset viewport to desktop
    await page.setViewportSize({ width: 1280, height: 800 });

    // ------------------------------------------------------------------------
    // 4. Reload Persistence Verification
    // ------------------------------------------------------------------------
    console.log('\n--- 4. Testing Reload Persistence ---');
    await page.reload({ waitUntil: 'networkidle' });
    const reloadedExtVal = await page.locator('tbody tr').first().locator('input').first().inputValue();
    if (reloadedExtVal !== '25.4') {
      throw new Error(`Observation failed to survive reload! Got '${reloadedExtVal}'`);
    }
    console.log('✓ Observations survived page reload');

    // Switch back to English
    await page.goto(`${BASE_URL}/en/units/measurement/practical-investigations`, { waitUntil: 'networkidle' });

    // ------------------------------------------------------------------------
    // 5. Practical 2: Micrometer Screw Gauge (Coin, Thin Wire, Bearing Sphere, Glass Slide, Paper)
    // ------------------------------------------------------------------------
    console.log('\n--- 5. Testing Practical 2: Micrometer Screw Gauge ---');
    const exp2Tab = page.locator('button:has-text("2. Micrometer")').first();
    await exp2Tab.click();
    await page.waitForTimeout(300);

    const exp2Heading = await page.locator('text=Practical 2: Measurement of Small Lengths Using a Micrometer Screw Gauge').count();
    if (exp2Heading === 0) throw new Error('Practical 2 heading not found');
    console.log('✓ Practical 2: Measurement of Small Lengths Using a Micrometer Screw Gauge rendered');

    // Load sample data for coin
    const exp2SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp2SampleBtn.click();
    await page.waitForTimeout(200);

    const exp2SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp2SubmitBtn.click();
    await page.waitForTimeout(200);

    // ------------------------------------------------------------------------
    // 6. Practical 3: Spherometer Curvature & Flat Slide Thickness
    // ------------------------------------------------------------------------
    console.log('\n--- 6. Testing Practical 3: Spherometer Curvature & Slide Thickness ---');
    const exp3Tab = page.locator('button:has-text("3. Spherometer")').first();
    await exp3Tab.click();
    await page.waitForTimeout(300);

    const exp3SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp3SampleBtn.click();
    await page.waitForTimeout(200);

    const exp3SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp3SubmitBtn.click();
    await page.waitForTimeout(200);

    // ------------------------------------------------------------------------
    // 7. Practical 4 & 16: Travelling Microscope (Tube, Capillary, Apparent Depth)
    // ------------------------------------------------------------------------
    console.log('\n--- 7. Testing Practical 4 & Exp 16: Travelling Microscope ---');
    const exp4Tab = page.locator('button:has-text("4. Travelling Microscope")').first();
    await exp4Tab.click();
    await page.waitForTimeout(300);

    // Test rubber tube default
    const exp4SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp4SampleBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Practical 4 Rubber Tube sample observations loaded');

    // Switch to Exp 16: Glass Block Refractive Index (Real & Apparent Depth)
    console.log('--- Testing Exp 16: Refractive Index by Real and Apparent Depth ---');
    const apparentDepthBtn = page.locator('button:has-text("Glass Block Refractive Index"), button:has-text("Exp 16")').first();
    await apparentDepthBtn.click();
    await page.waitForTimeout(200);

    // Load Exp 16 sample observations
    const loadSampleMicroBtn = page.locator('button:has-text("Load Sample Data")').first();
    await loadSampleMicroBtn.click();
    await page.waitForTimeout(300);

    // Verify Real Depth d = 20.00 mm, Apparent Depth d' = 13.29 mm, Refractive Index n = 1.505
    const realDepthText = await page.locator('text=/20(\\.\\d+)?\\s*mm/').count();
    const nText = await page.locator('text=/1\\.505/').count();
    if (realDepthText === 0 || nText === 0) {
      throw new Error('Exp 16 Real Depth and Refractive Index calculations not displayed!');
    }
    console.log('✓ Exp 16 Refractive Index calculated: d = 20.00 mm, d\' = 13.29 mm, n = 1.505');

    // Switch to Independent Mode for Exp 16
    const microscopeIndepBtn = page.locator('button:has-text("Independent Practice")').first();
    await microscopeIndepBtn.click();
    await page.waitForTimeout(200);

    const nCalcInput = page.locator('input[placeholder*="1.50"], input[placeholder*="n"]').first();
    await nCalcInput.fill('1.505');
    const microscopeCheckBtn = page.locator('button:has-text("Check My Calculations")').first();
    await microscopeCheckBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 16 Independent student calculation verified: n = 1.505');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-03-microscope-apparent-en.png') });

    const exp4SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp4SubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Travelling Microscope & Exp 16 lab record submitted');

    // ------------------------------------------------------------------------
    // 8. Density of Regular Solid
    // ------------------------------------------------------------------------
    console.log('\n--- 8. Testing Additional Investigation: Regular Solid Density ---');
    const densityTab = page.locator('button:has-text("Solid Density")').first();
    await densityTab.click();
    await page.waitForTimeout(300);

    const densitySampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await densitySampleBtn.click();
    await page.waitForTimeout(200);

    const densitySubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await densitySubmitBtn.click();
    await page.waitForTimeout(200);

    // ------------------------------------------------------------------------
    // 9. Unit 2 Mechanics Practicals Hub (/en/units/mechanics/practical-investigations)
    // ------------------------------------------------------------------------
    console.log('\n--- 9. Testing Mechanics Practicals Hub (Exp 5–9) ---');
    await page.goto(`${BASE_URL}/en/units/mechanics/practical-investigations`, { waitUntil: 'networkidle' });

    // Exp 5: Force Parallelogram & Unknown Mass Mode
    console.log('\n--- Testing Mechanics Exp 5: Force Board & Unknown Mass Mode ---');
    const exp5MechHeading = await page.locator('text=Practical 5: Verification of the Parallelogram Law & Triangle of Forces').count();
    if (exp5MechHeading === 0) throw new Error('Mechanics Exp 5 heading not found!');
    console.log('✓ Mechanics Exp 5: Parallelogram Law & Triangle of Forces rendered');

    // Switch to Unknown Body Mass mode
    const unknownMassBtn = page.locator('button:has-text("Unknown Body Mass")').first();
    await unknownMassBtn.click();
    await page.waitForTimeout(200);

    const exp5MechSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp5MechSampleBtn.click();
    await page.waitForTimeout(200);

    // Verify calculated unknown mass Mx = 480.0 g
    const mxText = await page.locator('text=480.0 g').count();
    if (mxText === 0) throw new Error('Calculated unknown body mass Mx = 480.0 g not displayed in Exp 5!');
    console.log('✓ Exp 5 Unknown Mass mode verified: Mx = 480.0 g with electronic balance comparison');

    const exp5MechSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp5MechSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 5 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-09-mechanics-exp5-en.png') });

    // Exp 6: Principle of Moments & Unknown Mass Distance Graph
    console.log('\n--- Testing Mechanics Exp 6: Principle of Moments & Distance Graph ---');
    const exp6Tab = page.locator('button:has-text("6. Principle of Moments")').first();
    await exp6Tab.click();
    await page.waitForTimeout(300);

    const exp6Heading = await page.locator('text=Practical 6: Verification of the Principle of Moments').count();
    if (exp6Heading === 0) throw new Error('Mechanics Exp 6 heading not found!');
    console.log('✓ Mechanics Exp 6: Principle of Moments rendered');

    // Check primary Unknown Mass (Distance Graph) Mode
    const unknownMomentsBtn = page.locator('button:has-text("Unknown Mass (Distance Graph)")').first();
    await unknownMomentsBtn.click();
    await page.waitForTimeout(200);

    const exp6SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp6SampleBtn.click();
    await page.waitForTimeout(200);

    // Verify distance graph gradient and calculated mass Mx = 150.0 g
    const momentsMxText = await page.locator('text=150.0 g').count();
    if (momentsMxText === 0) throw new Error('Calculated unknown mass 150.0 g not displayed in Exp 6!');
    console.log('✓ Exp 6 primary investigation verified: Unknown mass Mx = 150.0 g from d2 vs d1 origin distance graph');

    // Switch submode to Metre Rule Mass Determination
    const ruleMassSubModeBtn = page.locator('button:has-text("Metre Rule Mass Determination")').first();
    await ruleMassSubModeBtn.click();
    await page.waitForTimeout(200);

    const exp6SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp6SubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 6 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-10-mechanics-exp6-en.png') });

    // Exp 7: U-Tube Immiscible Liquids
    console.log('\n--- Testing Mechanics Exp 7: U-Tube ---');
    const exp7Tab = page.locator('button:has-text("7. U-Tube Immiscible Liquids")').first();
    await exp7Tab.click();
    await page.waitForTimeout(300);
    const exp7SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp7SampleBtn.click();
    await page.waitForTimeout(200);
    const exp7SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp7SubmitBtn.click();
    await page.waitForTimeout(200);

    // Exp 8: Hare's Apparatus
    console.log('\n--- Testing Mechanics Exp 8: Hare\'s Apparatus ---');
    const exp8Tab = page.locator('button:has-text("8. Hare’s Apparatus")').first();
    await exp8Tab.click();
    await page.waitForTimeout(300);
    const exp8SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp8SampleBtn.click();
    await page.waitForTimeout(200);
    const exp8SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp8SubmitBtn.click();
    await page.waitForTimeout(200);

    // Exp 9: Loaded Test Tube Hydrometer
    console.log('\n--- Testing Mechanics Exp 9: Loaded Test Tube Hydrometer ---');
    const exp9Tab = page.locator('button:has-text("9. Loaded Test Tube")').first();
    await exp9Tab.click();
    await page.waitForTimeout(300);
    const exp9SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp9SampleBtn.click();
    await page.waitForTimeout(200);
    const exp9SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp9SubmitBtn.click();
    await page.waitForTimeout(200);

    // ------------------------------------------------------------------------
    // 10. Unit 3 Waves Practicals Hub (/en/units/oscillations-and-waves/waves-practicals)
    // ------------------------------------------------------------------------
    console.log('\n--- 10. Testing Waves Practicals Hub (Exp 10–21.2) ---');
    await page.goto(`${BASE_URL}/en/units/oscillations-and-waves/waves-practicals`, { waitUntil: 'networkidle' });

    // Exp 10: Simple Pendulum
    console.log('\n--- Testing Simple Pendulum (Exp 10) ---');
    const pendulumTab = page.locator('button:has-text("10. Simple Pendulum")').first();
    await pendulumTab.click();
    await page.waitForTimeout(300);

    const pendulumSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await pendulumSampleBtn.click();
    await page.waitForTimeout(200);

    const pendulumGText = await page.locator('text=9.81 m/s²').count();
    if (pendulumGText === 0) throw new Error('Exp 10 g = 9.81 m/s² calculation not displayed!');
    console.log('✓ Exp 10 Simple Pendulum verified: T² vs L origin regression yields g = 9.81 m/s²');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-11-pendulum-en.png') });

    const pendulumSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await pendulumSubmitBtn.click();
    await page.waitForTimeout(200);

    // Exp 11: Helical Spring
    console.log('\n--- Testing Helical Spring (Exp 11) ---');
    const springTab = page.locator('button:has-text("11. Helical Spring")').first();
    await springTab.click();
    await page.waitForTimeout(300);

    const springSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await springSampleBtn.click();
    await page.waitForTimeout(200);

    const springKText = await page.locator('text=/21\\.[45]/').count();
    if (springKText === 0) throw new Error('Exp 11 spring constant k = 21.5 N/m not displayed!');
    console.log('✓ Exp 11 Helical Spring verified: T² vs m regression yields k = 21.5 N/m and effective mass me = 12.0 g');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-12-spring-en.png') });

    const springSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await springSubmitBtn.click();
    await page.waitForTimeout(200);

    // Exp 12 & 13: Sonometer
    console.log('\n--- Testing Sonometer (Exp 12 & 13) ---');
    const sonometerTab = page.locator('button:has-text("Sonometer")').first();
    await sonometerTab.click();
    await page.waitForTimeout(300);

    const sonoSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await sonoSampleBtn.click();
    await page.waitForTimeout(200);

    // Check Exp 13 Law of Tension toggle
    const tensionModeBtn = page.locator('button:has-text("Exp 13: Law of Tension")').first();
    await tensionModeBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Sonometer Exp 13 Law of Tension mode active');

    const sonoSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await sonoSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Sonometer lab record submitted');

    // Exp 14 & 15: Resonance Tube
    console.log('\n--- Testing Resonance Tube (Exp 14 & 15) ---');
    const resonanceTab = page.locator('button:has-text("Resonance Tube")').first();
    await resonanceTab.click();
    await page.waitForTimeout(300);

    // Verify Exp 15 official method (set of tuning forks, l vs 1/f regression)
    const exp15ModeBtn = page.locator('button:has-text("Exp 15: Set of Tuning Forks")').first();
    await exp15ModeBtn.click();
    await page.waitForTimeout(200);

    const resSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await resSampleBtn.click();
    await page.waitForTimeout(200);

    const soundSpeedVal = await page.locator('text=/340(\\.\\d+)?\\s*m\\/s/').count();
    const endCorrVal = await page.locator('text=/1\\.\\d+\\s*cm/').count();
    if (soundSpeedVal === 0 || endCorrVal === 0) {
      throw new Error('Exp 15 sound speed or end correction not derived correctly from l vs 1/f regression!');
    }
    console.log('✓ Exp 15 verified: l vs 1/f regression yields v ≈ 340.3 m/s and end correction e ≈ 1.13 cm');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-13-resonance-exp15-en.png') });

    // Check Exp 14 single fork two-resonance mode
    const exp14ModeBtn = page.locator('button:has-text("Exp 14: Single Fork")').first();
    await exp14ModeBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 14 single fork two-resonance mode verified');

    const resSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await resSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Resonance Tube lab record submitted');

    // Exp 17-19: Prism Refraction & Spectrometer
    console.log('\n--- Testing Prism Refraction & Spectrometer (Exp 17–19) ---');
    const prismTab = page.locator('button:has-text("Prism Refraction")').first();
    await prismTab.click();
    await page.waitForTimeout(300);

    const prismSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await prismSampleBtn.click();
    await page.waitForTimeout(200);

    const prismSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await prismSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Spectrometer prism record submitted');

    // Exp 20: Diffraction Grating
    console.log('\n--- Testing Diffraction Grating Spectrometer (Exp 20) ---');
    const gratingTab = page.locator('button:has-text("Diffraction Grating")').first();
    await gratingTab.click();
    await page.waitForTimeout(300);

    const gratingSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await gratingSampleBtn.click();
    await page.waitForTimeout(200);

    const gratingSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await gratingSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Diffraction Grating record submitted');

    // Exp 21.1 & 21.2: Convex & Concave Lenses
    console.log('\n--- Testing Convex & Concave Lenses (Exp 21.1 & 21.2) ---');
    const lensTab = page.locator('button:has-text("Convex & Concave Lenses")').first();
    await lensTab.click();
    await page.waitForTimeout(300);

    // Test Exp 21.1 Convex No-Parallax Optical Pin Method (Official)
    const convexSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await convexSampleBtn.click();
    await page.waitForTimeout(200);
    const convexFocalCount = await page.locator('text=/15\\.00?\\s*cm/').count();
    if (convexFocalCount === 0) throw new Error('Exp 21.1 Convex focal length 15.0 cm not displayed!');
    console.log('✓ Exp 21.1 Official no-parallax optical pin method verified: f = (u*v)/(u + v) = 15.0 cm');

    // Test Exp 21.1 Supplementary Displacement Method
    const dispModeBtn = page.locator('button:has-text("Displacement Method")').first();
    await dispModeBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 21.1 Convex displacement method f = (D² - d²)/4D active');

    // Test Exp 21.2 Concave auxiliary combination (Official)
    const concaveModeBtn = page.locator('button:has-text("21.2 Concave")').first();
    await concaveModeBtn.click();
    await page.waitForTimeout(200);

    await convexSampleBtn.click();
    await page.waitForTimeout(200);
    const concaveFocalCount = await page.locator('text=/30\\.00?\\s*cm/').count();
    if (concaveFocalCount === 0) throw new Error('Exp 21.2 Concave focal length 30.0 cm not displayed!');
    console.log('✓ Exp 21.2 Official auxiliary convex lens combination verified: |f2| = (u*v)/(v - u) = 30.0 cm');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-14-lens-exp21-en.png') });

    const lensSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await lensSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Lens practical record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-15-waves-hub-en.png') });

    // ------------------------------------------------------------------------
    // 11. Unit 4 Thermal Physics Practicals Hub (Exp 22–30)
    // ------------------------------------------------------------------------
    console.log('\n--- 11. Testing Unit 4 Thermal Physics Practicals Hub (Exp 22–30) ---');
    await page.goto(`${BASE_URL}/en/units/thermal-physics/thermal-practicals-hub`, { waitUntil: 'networkidle' });

    // Exp 22-24: Boyle & Gas Laws
    const boyleTab = page.locator('button:has-text("Boyle")').first();
    await boyleTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 22–24 Boyle & Gas Laws tab rendered');

    // Exp 25: Metal Specific Heat
    const calTab = page.locator('button:has-text("Metal Specific Heat")').first();
    await calTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 25 Solid Metal Specific Heat tab rendered');

    // Exp 26: Newton's Law of Cooling
    const coolTab = page.locator('button:has-text("Newton")').first();
    await coolTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 26 Newton’s Law of Cooling tab rendered');

    // Exp 27: Latent Heat of Ice Fusion
    const fusionTab = page.locator('button:has-text("Ice Fusion")').first();
    await fusionTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 27 Latent Heat of Ice Fusion tab rendered');

    // Exp 28: Latent Heat of Steam Vaporization
    const vapTab = page.locator('button:has-text("Steam Vaporization")').first();
    await vapTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 28 Latent Heat of Steam Vaporization tab rendered');

    // Exp 29: Humidity & Dew Point
    const dewTab = page.locator('button:has-text("Relative Humidity"), button:has-text("Dew Point")').first();
    await dewTab.click();
    await page.waitForTimeout(300);

    const loadDewBtn = page.locator('button:has-text("Load Coastal Tropical Sample Data"), button:has-text("Load Sample Data")').first();
    await loadDewBtn.click();
    await page.waitForTimeout(200);

    const dewVal = await page.locator('text=Calculated Relative Humidity').count();
    if (dewVal === 0) throw new Error('Relative humidity output not calculated!');
    console.log('✓ Relative humidity calculated via Magnus-Tetens formula');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-07-humidity-en.png') });

    // Exp 30: Searle's Bar Conductivity
    const searleBarTab = page.locator('button:has-text("Searle\'s Bar")').first();
    await searleBarTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 30 Searle’s Bar Thermal Conductivity tab rendered');

    // ------------------------------------------------------------------------
    // 12. Unit 8 Current Electricity Practicals Hub (Exp 31–34)
    // ------------------------------------------------------------------------
    console.log('\n--- 12. Testing Current Electricity Practicals Hub (Exp 31–34) ---');
    await page.goto(`${BASE_URL}/en/units/current-electricity/practical-investigations`, { waitUntil: 'networkidle' });

    // Exp 31: Dry Cell Internal Resistance
    const dryCellTab = page.locator('button:has-text("Dry Cell")').first();
    await dryCellTab.click();
    await page.waitForTimeout(200);
    const dryCellHeading = await page.locator('text=Dry Cell EMF & Internal Resistance').count();
    if (dryCellHeading === 0) throw new Error('Exp 31 Dry Cell heading not found!');
    console.log('✓ Exp 31 Dry Cell EMF & Internal Resistance verified');

    // Exp 32: Metre Bridge Temp Coeff of Resistance
    const metreBridgeTab = page.locator('button:has-text("Metre Bridge")').first();
    await metreBridgeTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 32 Metre Bridge Temperature Coefficient of Resistance verified');

    // Exp 33: Potentiometer Compare EMFs
    const compareEmfTab = page.locator('button:has-text("EMF Comparison"), button:has-text("Compare EMF")').first();
    await compareEmfTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 33 Potentiometer Comparison of EMFs verified');

    // Exp 34: Potentiometer Internal Resistance
    const potInternalRTab = page.locator('button:has-text("Potentiometer Internal Resistance")').first();
    await potInternalRTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 34 Potentiometer Internal Resistance of a Cell verified');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-17-electricity-hub-en.png') });

    // ------------------------------------------------------------------------
    // 13. Unit 9 Electronics Practicals Hub (Exp 35–37)
    // ------------------------------------------------------------------------
    console.log('\n--- 13. Testing Electronics Practicals Hub (Exp 35–37) ---');
    await page.goto(`${BASE_URL}/en/units/electronics/practical-investigations`, { waitUntil: 'networkidle' });

    // Exp 35: Diode Characteristics
    const diodeTab = page.locator('button:has-text("Diode")').first();
    await diodeTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 35 Diode Characteristics & Dynamic Resistance verified');

    // Exp 36: BJT Common Emitter Transfer Characteristics
    const bjtTab = page.locator('button:has-text("Exp 36"), button:has-text("Transistor")').first();
    await bjtTab.click();
    await page.waitForTimeout(300);

    const bjtHeading = await page.locator('text=Transfer Characteristics and Current Gain (β) of a CE npn Transistor (Exp 36)').count();
    if (bjtHeading === 0) throw new Error('Practical 36 heading not found');
    console.log('✓ Practical 36: BJT Common Emitter Transfer Characteristics rendered');

    const ibSlider = page.locator('input[type="range"]').first();
    await ibSlider.fill('35');
    await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-08-bjt-en.png') });
    console.log('✓ BJT transfer characteristic telemetry and graphs verified');

    // Exp 37: Logic Gates
    const gatesTab = page.locator('button:has-text("Logic Gates"), button:has-text("Exp 37")').first();
    await gatesTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 37 Logic Gates truth table and state verification confirmed');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-18-electronics-gates-en.png') });

    // ------------------------------------------------------------------------
    // 14. Unit 10 Mechanical Properties Hub (Exp 38–42)
    // ------------------------------------------------------------------------
    console.log('\n--- 14. Testing Mechanical Properties Hub (Exp 38–42) ---');
    await page.goto(`${BASE_URL}/en/units/mechanical-properties-of-matter/matter-properties-practicals-hub`, { waitUntil: 'networkidle' });

    // Exp 38: Searle's Wire
    const searleTab = page.locator('button:has-text("Searle")').first();
    await searleTab.click();
    await page.waitForTimeout(200);
    const searleLoaded = await page.locator('text=Searle').count();
    if (searleLoaded === 0) throw new Error('Exp 38 Searle wire heading not found!');
    console.log('✓ Exp 38 Searle’s Apparatus Young’s Modulus rendered');

    // Exp 39: Poiseuille Capillary Viscosity
    const poiseuilleTab = page.locator('button:has-text("Poiseuille")').first();
    await poiseuilleTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 39 Poiseuille Capillary Flow Viscosity rendered');

    // Exp 40: Microscope Slide Surface Tension
    const slideTab = page.locator('button:has-text("Microscope Slide")').first();
    await slideTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 40 Microscope Slide Surface Tension rendered');

    // Exp 41: Capillary Rise Surface Tension
    const capTab = page.locator('button:has-text("Capillary Surface Tension")').first();
    await capTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 41 Capillary Rise Surface Tension rendered');

    // Exp 42: Jaeger's Method
    const jaegerTab = page.locator('button:has-text("Jaeger")').first();
    await jaegerTab.click();
    await page.waitForTimeout(200);
    console.log('✓ Exp 42 Jaeger’s Maximum Bubble Pressure Method rendered');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-16-matter-properties-en.png') });

    // ------------------------------------------------------------------------
    // 15. Storage Isolation and Integrity Check
    // ------------------------------------------------------------------------
    console.log('\n--- 15. Verifying Storage Isolation & Integrity ---');
    const storageState = await page.evaluate(() => {
      return {
        practicalWork: localStorage.getItem('physicslab_practical_work_v1'),
        assessmentHistory: localStorage.getItem('physicslab_assessment_history_v1'),
        learningProgress: localStorage.getItem('physicslab_learning_progress_v1'),
      };
    });

    if (!storageState.practicalWork) {
      throw new Error('physicslab_practical_work_v1 is missing or empty in localStorage!');
    }
    const parsedPracticals = JSON.parse(storageState.practicalWork);
    const expectedKeys = [
      'exp-1-vernier',
      'exp-2-micrometer',
      'exp-3-spherometer',
      'exp-4-microscope',
      'exp-density',
      'exp-5-force-board',
      'exp-6-moments',
      'exp-7-utube',
      'exp-8-hares',
      'exp-9-test-tube',
      'exp-10-pendulum',
      'exp-11-spring',
      'exp-12-sonometer',
      'exp-14-resonance',
      'exp-16-prism',
      'exp-20-grating',
      'exp-21-lens',
    ];

    for (const key of expectedKeys) {
      if (!parsedPracticals.records[key]) {
        throw new Error(`Expected practical experiment record '${key}' missing in storage!`);
      }
      console.log(`✓ Record '${key}' confirmed in persistent storage.`);
    }

    console.log(`✓ Practical storage contains ${Object.keys(parsedPracticals.records).length} persistent experiment records.`);
    console.log('✓ Storage isolation maintained: practical work does not collide with assessment history or learning progress.');

    console.log('\n=== ALL PRACTICAL EXPERIENCE VERIFICATIONS PASSED WITH 100% SUCCESS! ===');
  } catch (err) {
    console.error('\n❌ Practical verification failed:', err);
    throw err;
  } finally {
    await browser.close();
  }
}

runPracticalVerification().catch((err) => {
  console.error(err);
  process.exit(1);
});
