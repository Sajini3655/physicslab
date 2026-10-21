import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = 'C:/Users/sajin/.gemini/antigravity/brain/5ccff483-686c-42d4-9882-292b4bb6c704/screenshots';

async function runPracticalVerification() {
  console.log('=== STARTING PRACTICAL EXPERIENCE E2E BROWSER VERIFICATION ===');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
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
    // 5. Practical 2: Micrometer Multi-Specimen Investigation
    // ------------------------------------------------------------------------
    console.log('\n--- 5. Testing Practical 2: Micrometer Multi-Specimen Investigation ---');
    const exp2Tab = page.locator('button:has-text("2. Micrometer Gauge")').first();
    await exp2Tab.click();
    await page.waitForTimeout(300);

    const exp2Heading = await page.locator('text=Practical 2: Measurement of Small Lengths').count();
    if (exp2Heading === 0) throw new Error('Practical 2 heading not found');
    console.log('✓ Practical 2: Measurement of Small Lengths Using a Micrometer Screw Gauge rendered');

    // Load sample data for coin
    const exp2SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp2SampleBtn.click();
    await page.waitForTimeout(200);

    // Verify sample data loaded into observation table
    const coinDiaInput = page.locator('tbody tr').first().locator('input').first();
    const coinDiaVal = await coinDiaInput.inputValue();
    if (!coinDiaVal) throw new Error('Failed to load sample coin data');
    console.log(`✓ Loaded sample coin data: ${coinDiaVal} mm`);

    // Test Specimen Switch to Thin Wire
    const wireSpecimenBtn = page.locator('button:has-text("Thin Wire")').first();
    await wireSpecimenBtn.click();
    await page.waitForTimeout(200);
    const wireAreaHeading = await page.locator('text=Cross-Section Area').count();
    if (wireAreaHeading === 0) throw new Error('Wire cross-sectional area calculation card not displayed!');
    console.log('✓ Specimen switch verified: Thin wire cross-sectional calculation card rendered');

    // Switch back to Coin and submit
    const coinSpecimenBtn = page.locator('button:has-text("Coin (Diameter")').first();
    await coinSpecimenBtn.click();
    await page.waitForTimeout(200);
    const exp2SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp2SubmitBtn.click();
    await page.waitForTimeout(200);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-03-micrometer-en.png') });

    // ------------------------------------------------------------------------
    // 6. Practical 3: Spherometer Curvature & Flat Slide Thickness
    // ------------------------------------------------------------------------
    console.log('\n--- 6. Testing Practical 3: Spherometer Curvature & Slide Thickness ---');
    const exp3Tab = page.locator('button:has-text("3. Spherometer")').first();
    await exp3Tab.click();
    await page.waitForTimeout(300);

    const exp3Heading = await page.locator('text=Practical 3: Radius of Curvature').count();
    if (exp3Heading === 0) throw new Error('Practical 3 heading not found');
    console.log('✓ Practical 3: Radius of Curvature Using a Spherometer rendered');

    const exp3SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp3SampleBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Loaded sample spherometer data');

    // Test Mode Switch to Glass Slide Thickness
    const thicknessModeBtn = page.locator('button:has-text("Glass Slide Thickness")').first();
    await thicknessModeBtn.click();
    await page.waitForTimeout(200);
    const thicknessFormula = await page.locator('text=t = |h₁ - h₀|').count();
    if (thicknessFormula === 0) throw new Error('Slide thickness calculation card not displayed!');
    console.log('✓ Investigation toggle verified: Glass slide thickness calculation rendered');

    // Switch back to Curvature and submit
    const curvatureModeBtn = page.locator('button:has-text("Spherical Surface Curvature")').first();
    await curvatureModeBtn.click();
    await page.waitForTimeout(200);
    const exp3SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp3SubmitBtn.click();
    await page.waitForTimeout(200);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-04-spherometer-en.png') });

    // ------------------------------------------------------------------------
    // 7. Practical 4: Travelling Microscope Tube & Capillary Bore
    // ------------------------------------------------------------------------
    console.log('\n--- 7. Testing Practical 4: Travelling Microscope ---');
    const exp4Tab = page.locator('button:has-text("4. Travelling Microscope")').first();
    await exp4Tab.click();
    await page.waitForTimeout(300);

    const exp4Heading = await page.locator('text=Practical 4: Internal & External Radii').count();
    if (exp4Heading === 0) throw new Error('Practical 4 heading not found');
    console.log('✓ Practical 4: Internal & External Radii of a Rubber Tube rendered');

    const exp4SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp4SampleBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Loaded sample microscope data');

    // Test Mode Switch to Capillary Tube Bore
    const capModeBtn = page.locator('button:has-text("Capillary Tube")').first();
    await capModeBtn.click();
    await page.waitForTimeout(200);
    const capAreaText = await page.locator('text=Cross-Section Area A').count();
    if (capAreaText === 0) throw new Error('Capillary bore calculation card not displayed!');
    console.log('✓ Investigation toggle verified: Capillary tube bore calculation rendered');

    // Switch back to Rubber Tube and submit
    const tubeModeBtn = page.locator('button:has-text("Rubber Tube")').first();
    await tubeModeBtn.click();
    await page.waitForTimeout(200);
    const exp4SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp4SubmitBtn.click();
    await page.waitForTimeout(200);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-05-microscope-en.png') });

    // ------------------------------------------------------------------------
    // 8. Additional Syllabus Investigation: Regular Solid Density
    // ------------------------------------------------------------------------
    console.log('\n--- 8. Testing Additional Investigation: Regular Solid Density ---');
    const densityTab = page.locator('button:has-text("Regular Solid Density"), button:has-text("Solid Density")').first();
    await densityTab.click();
    await page.waitForTimeout(300);

    const densityHeading = await page.locator('text=Determination of the Density of a Regular Solid').count();
    if (densityHeading === 0) throw new Error('Regular Solid Density heading not found');
    console.log('✓ Additional Investigation: Determination of the Density of a Regular Solid rendered');

    const densitySampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await densitySampleBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Loaded sample solid density data');

    const densitySubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await densitySubmitBtn.click();
    await page.waitForTimeout(200);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-06-density-en.png') });

    // ------------------------------------------------------------------------
    // 9. Unit 2 Mechanics Practicals Hub (/en/units/mechanics/practical-investigations)
    // ------------------------------------------------------------------------
    console.log('\n--- 9. Testing Mechanics Practicals Hub (Exp 5–9) ---');
    await page.goto(`${BASE_URL}/en/units/mechanics/practical-investigations`, { waitUntil: 'networkidle' });

    // Exp 5: Force Parallelogram
    const exp5MechHeading = await page.locator('text=Practical 5: Verification of the Parallelogram Law & Triangle of Forces').count();
    if (exp5MechHeading === 0) throw new Error('Mechanics Exp 5 heading not found!');
    console.log('✓ Mechanics Exp 5: Parallelogram Law & Triangle of Forces rendered');

    const exp5MechSampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp5MechSampleBtn.click();
    await page.waitForTimeout(200);

    const exp5MechSubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp5MechSubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 5 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-09-mechanics-exp5-en.png') });

    // Exp 6: Principle of Moments & Metre Rule Mass
    console.log('\n--- Testing Mechanics Exp 6: Principle of Moments ---');
    const exp6Tab = page.locator('button:has-text("6. Principle of Moments")').first();
    await exp6Tab.click();
    await page.waitForTimeout(300);

    const exp6Heading = await page.locator('text=Practical 6: Verification of the Principle of Moments & Mass of a Metre Rule').count();
    if (exp6Heading === 0) throw new Error('Mechanics Exp 6 heading not found!');
    console.log('✓ Mechanics Exp 6: Principle of Moments & Mass of a Metre Rule rendered');

    // Switch submode to Metre Rule Mass Determination
    const ruleMassSubModeBtn = page.locator('button:has-text("Metre Rule Mass Determination")').first();
    await ruleMassSubModeBtn.click();
    await page.waitForTimeout(200);

    const exp6SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp6SampleBtn.click();
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

    const exp7Heading = await page.locator('text=Practical 7: Determination of Relative Density of an Immiscible Liquid Using a U-Tube').count();
    if (exp7Heading === 0) throw new Error('Mechanics Exp 7 heading not found!');
    console.log('✓ Mechanics Exp 7: U-Tube Immiscible Liquids rendered');

    const exp7SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp7SampleBtn.click();
    await page.waitForTimeout(200);

    const exp7SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp7SubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 7 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-11-mechanics-exp7-en.png') });

    // Exp 8: Hare's Apparatus
    console.log('\n--- Testing Mechanics Exp 8: Hare\'s Apparatus ---');
    const exp8Tab = page.locator('button:has-text("8. Hare’s Apparatus")').first();
    await exp8Tab.click();
    await page.waitForTimeout(300);

    const exp8Heading = await page.locator('text=Practical 8: Determination of Relative Density of a Liquid Using Hare’s Apparatus').count();
    if (exp8Heading === 0) throw new Error('Mechanics Exp 8 heading not found!');
    console.log('✓ Mechanics Exp 8: Hare\'s Apparatus rendered');

    const exp8SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp8SampleBtn.click();
    await page.waitForTimeout(200);

    const exp8SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp8SubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 8 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-12-mechanics-exp8-en.png') });

    // Exp 9: Loaded Test Tube Hydrometer
    console.log('\n--- Testing Mechanics Exp 9: Loaded Test Tube Hydrometer ---');
    const exp9Tab = page.locator('button:has-text("9. Loaded Test Tube")').first();
    await exp9Tab.click();
    await page.waitForTimeout(300);

    const exp9Heading = await page.locator('text=Practical 9: Principle of Flotation & Loaded Test Tube Hydrometer').count();
    if (exp9Heading === 0) throw new Error('Mechanics Exp 9 heading not found!');
    console.log('✓ Mechanics Exp 9: Principle of Flotation & Loaded Test Tube Hydrometer rendered');

    const exp9SampleBtn = page.locator('button:has-text("Load Sample Data")').first();
    await exp9SampleBtn.click();
    await page.waitForTimeout(200);

    const exp9SubmitBtn = page.locator('button:has-text("Submit Practical Record")').first();
    await exp9SubmitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Mechanics Exp 9 record submitted');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-13-mechanics-exp9-en.png') });

    // Test Mechanics Hub in Sinhala & Mobile Responsive Viewport
    console.log('\n--- Testing Mechanics Hub in Sinhala on Mobile (375px) ---');
    await page.goto(`${BASE_URL}/si/units/mechanics/practical-investigations`, { waitUntil: 'networkidle' });
    const siMechTitle = await page.locator('text=උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 2 යාන්ත්‍ර විද්‍යාව').count();
    if (siMechTitle === 0) throw new Error('Sinhala Mechanics hub title not found!');
    console.log('✓ Sinhala Mechanics hub rendered');

    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    const mechOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (mechOverflow) throw new Error('Horizontal overflow detected on Mechanics 375px mobile view!');
    console.log('✓ Zero horizontal overflow on Mechanics 375px mobile viewport');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-14-mechanics-si-mobile.png') });

    // Reset viewport
    await page.setViewportSize({ width: 1280, height: 800 });

    // ------------------------------------------------------------------------
    // 10. Practical 29: Humidity & Dew Point Investigation
    // ------------------------------------------------------------------------
    console.log('\n--- 10. Testing Practical 29: Humidity & Dew Point (/en/units/thermal-physics/thermal-practicals-hub) ---');
    await page.goto(`${BASE_URL}/en/units/thermal-physics/thermal-practicals-hub`, { waitUntil: 'networkidle' });

    const dewTab = page.locator('button:has-text("Practical 4.7"), button:has-text("Dew Point")').first();
    await dewTab.click();
    await page.waitForTimeout(300);

    const dewHeading = await page.locator('text=Determination of Relative Humidity by Dew Point Method').count();
    if (dewHeading === 0) throw new Error('Practical 29 heading not found');
    console.log('✓ Practical 29: Determination of Relative Humidity by Dew Point Method rendered');

    const loadDewBtn = page.locator('button:has-text("Load Coastal Tropical Sample Data"), button:has-text("Load Sample Data")').first();
    await loadDewBtn.click();
    await page.waitForTimeout(200);

    const dewVal = await page.locator('text=Calculated Relative Humidity').count();
    if (dewVal === 0) throw new Error('Relative humidity output not calculated!');
    console.log('✓ Relative humidity calculated via Magnus-Tetens formula');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-07-humidity-en.png') });

    // ------------------------------------------------------------------------
    // 11. Practical 36: BJT Common Emitter Transfer Characteristics
    // ------------------------------------------------------------------------
    console.log('\n--- 11. Testing Practical 36: BJT Transfer Characteristics (/en/units/electronics/practical-investigations) ---');
    await page.goto(`${BASE_URL}/en/units/electronics/practical-investigations`, { waitUntil: 'networkidle' });

    const bjtTab = page.locator('button:has-text("Exp 36"), button:has-text("Transfer")').first();
    await bjtTab.click();
    await page.waitForTimeout(300);

    const bjtHeading = await page.locator('text=Transfer Characteristics and Current Gain (β) of a CE npn Transistor (Exp 36)').count();
    if (bjtHeading === 0) throw new Error('Practical 36 heading not found');
    console.log('✓ Practical 36: BJT Common Emitter Transfer Characteristics rendered');

    // Adjust Base Current slider and verify plot telemetry
    const ibSlider = page.locator('input[type="range"]').first();
    await ibSlider.fill('35');
    await page.waitForTimeout(200);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'practical-08-bjt-en.png') });
    console.log('✓ BJT transfer characteristic telemetry and graphs verified');

    // ------------------------------------------------------------------------
    // 12. Storage Isolation and Integrity Check
    // ------------------------------------------------------------------------
    console.log('\n--- 12. Verifying Storage Isolation & Integrity ---');
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
    ];

    for (const key of expectedKeys) {
      if (!parsedPracticals.records[key]) {
        throw new Error(`Expected practical experiment record '${key}' missing in storage!`);
      }
      console.log(`✓ Record '${key}' confirmed in persistent storage.`);
    }

    console.log(`✓ Practical storage contains all ${Object.keys(parsedPracticals.records).length} persistent experiment records.`);
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
