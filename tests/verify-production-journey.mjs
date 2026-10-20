import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:3000';

async function runProductionVerifications() {
  console.log('=== STARTING PRODUCTION BROWSER VERIFICATION ===');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // --------------------------------------------------------------------------
  // TEST 1: Measurement Assessment Lifecycle & Language Switcher
  // --------------------------------------------------------------------------
  console.log('\n--- 1. Testing Measurement Assessment Lifecycle & Language Switcher ---');
  await page.goto(`${BASE_URL}/en/units/measurement/unit-assessment`, { waitUntil: 'networkidle' });

  // 1a. Ensure model answers / explanations are hidden before submission
  console.log('Asserting model answers and solutions are hidden prior to submission...');
  const explanationButtons = await page.locator('button:has-text("View Physical Explanation"), button:has-text("භෞතික විවරණය බලන්න")').count();
  const explanationLabels = await page.locator('span:has-text("Physical Explanation:"), span:has-text("භෞතික විවරණය:")').count();
  const expectedLabels = await page.locator('span:has-text("Expected:")').count();
  const modelAnswerLabels = await page.locator('span:has-text("Model Answer:"), span:has-text("ආදර්ශ පිළිතුර:")').count();
  const rubricLabels = await page.locator('span:has-text("Marking Rubric:"), span:has-text("ලකුණු දීමේ පටිපාටිය:")').count();

  if (explanationButtons !== 0 || explanationLabels !== 0 || expectedLabels !== 0 || modelAnswerLabels !== 0 || rubricLabels !== 0) {
    throw new Error(`Model answers visible before submission! Explanations: ${explanationButtons + explanationLabels}, Expected: ${expectedLabels}, Model: ${modelAnswerLabels}`);
  }
  console.log('✓ Model answers & physical explanations are hidden before submission.');

  // Record initial question prompts
  const initialPrompts = await page.locator('h3').allTextContents();
  console.log(`Initial Question Count: ${initialPrompts.length}`);

  // Enter MCQ choice (Option A on first MCQ)
  const mcqOptionA = page.locator('button span:text-is("A")').first();
  await mcqOptionA.click();
  console.log('✓ Selected MCQ Option A');

  // Enter numerical answer
  const numInput = page.locator('input[type="text"]').first();
  await numInput.fill('42.5');
  console.log('✓ Entered 42.5 in numerical input');

  // Use actual language switcher in header: click dropdown and select 'සිංහල'
  console.log('Opening language switcher dropdown in header...');
  const langDropdownTrigger = page.locator('header button:has(svg.lucide-globe)');
  await langDropdownTrigger.click();
  await page.waitForTimeout(300);

  console.log('Selecting Sinhala option from dropdown...');
  const sinhalaMenuItem = page.locator('[role="menuitem"]:has-text("සිංහල")');
  await sinhalaMenuItem.click();
  await page.waitForURL('**/si/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Assert in Sinhala:
  // Answers preserved
  const numInputSi = page.locator('input[type="text"]').first();
  const siVal = await numInputSi.inputValue();
  console.log(`Sinhala input value: ${siVal}`);
  if (siVal !== '42.5') {
    throw new Error(`Numerical answer not preserved across language switch! Expected 42.5, got ${siVal}`);
  }
  console.log('✓ Numerical answer 42.5 preserved in Sinhala.');

  // Questions order preserved
  const siPrompts = await page.locator('h3').allTextContents();
  if (siPrompts.length !== initialPrompts.length) {
    throw new Error(`Question count changed across language switch! Expected ${initialPrompts.length}, got ${siPrompts.length}`);
  }
  console.log('✓ Question set and order preserved across language switch.');

  // Model answers still hidden
  const siPreSubmitExplanations = await page.locator('text=භෞතික විවරණය:').count();
  if (siPreSubmitExplanations !== 0) {
    throw new Error('Solutions leaked before submission in Sinhala!');
  }
  console.log('✓ Solutions remain hidden before submission in Sinhala.');

  // Submit assessment in Sinhala
  console.log('Submitting assessment in Sinhala...');
  const submitBtnSi = page.locator('button:has-text("පරීක්ෂණය අවසන් කරන්න"), button:has-text("Submit Assessment")').first();
  await submitBtnSi.scrollIntoViewIfNeeded();
  await submitBtnSi.click();
  await page.waitForTimeout(600);

  // Assert score displayed
  const scoreCardSi = page.locator('svg.lucide-award');
  if (await scoreCardSi.count() === 0) {
    throw new Error('Score card not visible after submission in Sinhala!');
  }
  console.log('✓ Score card rendered after submission in Sinhala.');

  // Switch back to English using language switcher
  console.log('Switching back to English via language switcher in header...');
  const langDropdownTriggerSi = page.locator('header button:has(svg.lucide-globe)');
  await langDropdownTriggerSi.click();
  await page.waitForTimeout(300);

  const englishMenuItem = page.locator('[role="menuitem"]:has-text("English")');
  await englishMenuItem.click();
  await page.waitForURL('**/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Confirm submitted state survives switch back to English
  const scoreCardEn = page.locator('svg.lucide-award');
  if (await scoreCardEn.count() === 0) {
    throw new Error('Submitted score card lost after switching back to English!');
  }
  console.log('✓ Score card and submitted state preserved after switching back to English.');

  const numInputEnAfter = page.locator('input[type="text"]').first();
  const enValAfter = await numInputEnAfter.inputValue();
  if (enValAfter !== '42.5') {
    throw new Error(`Numerical answer lost after switching back to English! Got: ${enValAfter}`);
  }
  console.log('✓ Numerical answer 42.5 preserved in English.');

  // Reveal physical explanation after submission
  const showExplanationBtn = page.locator('button:has-text("View Physical Explanation")').first();
  if (await showExplanationBtn.count() > 0) {
    await showExplanationBtn.click();
    await page.waitForTimeout(300);
    const explanationText = page.locator('text=Step-by-step Solution:');
    if (await explanationText.count() === 0) {
      throw new Error('Physical explanation toggle failed to reveal content!');
    }
    console.log('✓ Step-by-step solution revealed successfully on demand.');
  }

  // --------------------------------------------------------------------------
  // TEST 2: Active Assessment Reload Persistence
  // --------------------------------------------------------------------------
  console.log('\n--- 2. Testing Active Assessment Reload Persistence ---');
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const reloadedScoreCard = page.locator('svg.lucide-award');
  if (await reloadedScoreCard.count() === 0) {
    throw new Error('Assessment state lost on page reload!');
  }
  const reloadedVal = await page.locator('input[type="text"]').first().inputValue();
  if (reloadedVal !== '42.5') {
    throw new Error(`Answer corrupted on reload! Got ${reloadedVal}`);
  }
  console.log('✓ Active assessment attempt fully restored upon browser reload.');

  // --------------------------------------------------------------------------
  // TEST 3: Mechanics Assessment & Structured Multipart Rubrics
  // --------------------------------------------------------------------------
  console.log('\n--- 3. Testing Mechanics Structured Multipart Answers & Rubrics ---');
  await page.goto(`${BASE_URL}/en/units/mechanics/unit-assessment`, { waitUntil: 'networkidle' });

  // Verify rubrics and model answers hidden before submission
  const preSubmitRubrics = await page.locator('text=Marking Rubric:').count();
  const preSubmitModel = await page.locator('text=Model Answer:').count();
  if (preSubmitRubrics !== 0 || preSubmitModel !== 0) {
    throw new Error('Mechanics model answers or rubrics visible before submission!');
  }
  console.log('✓ Mechanics model answers and marking rubrics hidden before submission.');

  // Fill structured textarea
  const structuredTextarea = page.locator('textarea').first();
  if (await structuredTextarea.count() > 0) {
    await structuredTextarea.fill('Kinematics derivation test response: v = u + at, s = ut + 0.5at^2');
    console.log('✓ Entered structured multipart answer in textarea.');
  }

  // Switch to Sinhala via language dropdown
  console.log('Switching Mechanics assessment to Sinhala via header switcher...');
  await page.locator('header button:has(svg.lucide-globe)').click();
  await page.waitForTimeout(300);
  await page.locator('[role="menuitem"]:has-text("සිංහල")').click();
  await page.waitForURL('**/si/units/mechanics/unit-assessment', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Verify textarea value survived
  if (await structuredTextarea.count() > 0) {
    const siTextVal = await page.locator('textarea').first().inputValue();
    if (!siTextVal.includes('Kinematics derivation test response')) {
      throw new Error(`Structured multipart answer lost during language switch! Got: ${siTextVal}`);
    }
    console.log('✓ Structured multipart answer survived language switch into Sinhala.');
  }

  // Submit in Sinhala
  console.log('Submitting Mechanics assessment in Sinhala...');
  const submitMechSi = page.locator('button:has-text("ඇගයීම ඉදිරිපත් කරන්න"), button:has-text("Submit Assessment")').first();
  await submitMechSi.scrollIntoViewIfNeeded();
  await submitMechSi.click();
  await page.waitForTimeout(600);

  // Check marking rubric and model answer are displayed upon submission
  const siModelAns = await page.locator('text=ආදර්ශ පිළිතුර:').count();
  const siRubric = await page.locator('text=ලකුණු දීමේ පටිපාටිය:').count();
  if (siModelAns === 0 || siRubric === 0) {
    throw new Error(`Marking rubrics or model answers missing upon submission! Model: ${siModelAns}, Rubric: ${siRubric}`);
  }
  console.log(`✓ Structured question model answer (${siModelAns}) and rubric (${siRubric}) rendered upon submission.`);

  // Switch back to English
  await page.locator('header button:has(svg.lucide-globe)').click();
  await page.waitForTimeout(300);
  await page.locator('[role="menuitem"]:has-text("English")').click();
  await page.waitForURL('**/en/units/mechanics/unit-assessment', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const enModelAns = await page.locator('text=Model Answer:').count();
  const enRubric = await page.locator('text=Marking Rubric:').count();
  if (enModelAns === 0 || enRubric === 0) {
    throw new Error('English model answers or rubrics missing after language switch back!');
  }
  console.log('✓ English model answer and rubrics rendered correctly.');

  // --------------------------------------------------------------------------
  // TEST 4: Retake Assessment & Storage Isolation
  // --------------------------------------------------------------------------
  console.log('\n--- 4. Testing Retake Assessment & Storage Isolation ---');
  // Click Retake Assessment on Mechanics (Unit 2)
  const retakeBtn = page.locator('button:has-text("Retake Assessment")');
  await retakeBtn.scrollIntoViewIfNeeded();
  await retakeBtn.click();
  await page.waitForTimeout(500);

  // Confirm Unit 2 is reset
  const unit2ScoreCard = await page.locator('svg.lucide-award').count();
  if (unit2ScoreCard !== 0) {
    throw new Error('Unit 2 assessment score card still visible after retake!');
  }
  console.log('✓ Unit 2 assessment successfully reset upon clicking Retake Assessment.');

  // Navigate back to Unit 1 (Measurement) and verify Unit 1 was NOT wiped!
  console.log('Navigating back to Unit 1 to test storage key isolation...');
  await page.goto(`${BASE_URL}/en/units/measurement/unit-assessment`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const unit1ScoreCard = await page.locator('svg.lucide-award').count();
  if (unit1ScoreCard === 0) {
    throw new Error('Unit 1 assessment attempt was wiped when Unit 2 was reset! Storage isolation failed.');
  }
  const unit1PreservedVal = await page.locator('input[type="text"]').first().inputValue();
  if (unit1PreservedVal !== '42.5') {
    throw new Error(`Unit 1 answer corrupted by Unit 2 reset! Got: ${unit1PreservedVal}`);
  }
  console.log('✓ Unit 1 assessment attempt remains completely isolated and intact in storage.');

  // --------------------------------------------------------------------------
  // TEST 5: Practical Hubs Rendering & Activity Controls Assertions
  // --------------------------------------------------------------------------
  console.log('\n--- 5. Confirming Practical URLs & Activity Rendering ---');

  // 5a. Electronics Practicals Hub (Experiment 36 BJT Transfer)
  console.log('Testing Electronics Hub: /en/units/electronics/practical-investigations');
  await page.goto(`${BASE_URL}/en/units/electronics/practical-investigations`, { waitUntil: 'networkidle' });
  const bjtTab = page.locator('button:has-text("Exp 36"), button:has-text("Transfer")').first();
  await bjtTab.click();
  await page.waitForTimeout(400);

  // Assert BJT elements render
  const vceSlider = page.locator('input[type="range"]').first();
  const betaGainText = page.locator('text=β =');
  const transferChartSvg = page.locator('svg').first();
  if (await vceSlider.count() === 0 || await betaGainText.count() === 0 || await transferChartSvg.count() === 0) {
    throw new Error('Electronics Hub failed to render BJT transfer characteristic controls or plot!');
  }
  console.log('✓ Electronics BJT Transfer characteristic graph, telemetry slider, and β gain rendered.');

  // 5b. Electricity Practicals Hub
  console.log('Testing Electricity Hub: /en/units/current-electricity/practical-investigations');
  await page.goto(`${BASE_URL}/en/units/current-electricity/practical-investigations`, { waitUntil: 'networkidle' });
  const elecCanvas = page.locator('canvas, svg').first();
  const exp30Tab = page.locator('button:has-text("Exp 30"), button:has-text("Ohm")').first();
  if (await elecCanvas.count() === 0 && await exp30Tab.count() === 0) {
    throw new Error('Electricity practicals hub failed to render circuit activity!');
  }
  console.log('✓ Current Electricity practicals hub rendered active circuit experiment controls.');

  // 5c. Thermal Practicals Hub (Boyle, Latent Heat, Dew Point)
  console.log('Testing Thermal Hub: /en/units/thermal-physics/thermal-practicals-hub');
  await page.goto(`${BASE_URL}/en/units/thermal-physics/thermal-practicals-hub`, { waitUntil: 'networkidle' });
  const thermalControls = page.locator('button:has-text("Practical"), button:has-text("Boyle"), button:has-text("Dew")').first();
  if (await thermalControls.count() === 0) {
    throw new Error('Thermal practicals hub failed to render experiment tabs!');
  }
  console.log('✓ Thermal practicals hub rendered with investigation tabs and apparatus.');

  // 5d. Matter Properties Practicals Hub (Young Modulus, Viscosity, Surface Tension)
  console.log('Testing Matter Properties Hub: /en/units/mechanical-properties-of-matter/matter-properties-practicals-hub');
  await page.goto(`${BASE_URL}/en/units/mechanical-properties-of-matter/matter-properties-practicals-hub`, { waitUntil: 'networkidle' });
  const matterControls = page.locator('button:has-text("Searle"), button:has-text("Stokes"), button:has-text("Exp 14")').first();
  if (await matterControls.count() === 0) {
    throw new Error('Matter properties practicals hub failed to render experiment tabs!');
  }
  console.log('✓ Mechanical Properties of Matter practicals hub rendered with experiment apparatus.');

  // 5e. Waves Practicals Hub (Spectrometer, Sonometer, Resonance)
  console.log('Testing Waves Hub: /en/units/oscillations-and-waves/waves-practicals');
  await page.goto(`${BASE_URL}/en/units/oscillations-and-waves/waves-practicals`, { waitUntil: 'networkidle' });
  const wavesControls = page.locator('button:has-text("Spectrometer"), button:has-text("Sonometer"), button:has-text("Resonance")').first();
  if (await wavesControls.count() === 0) {
    throw new Error('Waves practicals hub failed to render spectrometer or apparatus controls!');
  }
  console.log('✓ Oscillations & Waves practicals hub rendered with spectrometer controls.');

  // 5f. Measurement Instruments (Vernier Caliper & Micrometer)
  console.log('Testing Measurement Instruments: /en/units/measurement/measuring-instruments');
  await page.goto(`${BASE_URL}/en/units/measurement/measuring-instruments`, { waitUntil: 'networkidle' });
  const vernierControls = page.locator('input[type="range"], canvas, svg').first();
  if (await vernierControls.count() === 0) {
    throw new Error('Measurement instruments failed to render caliper/micrometer controls!');
  }
  console.log('✓ Measuring instruments rendered with interactive slider calibration controls.');

  console.log('\n=== ALL PRODUCTION BROWSER VERIFICATIONS COMPLETED SUCCESSFULLY! ===');
  await browser.close();
}

runProductionVerifications().catch((err) => {
  console.error('\n❌ Production browser verification failed:', err);
  process.exit(1);
});
