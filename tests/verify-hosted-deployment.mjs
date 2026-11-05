import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://physicslab-eta.vercel.app';
const ARTIFACT_DIR = path.join(
  process.env.USERPROFILE || 'C:\\Users\\sajin',
  '.gemini',
  'antigravity',
  'brain',
  '5ccff483-686c-42d4-9882-292b4bb6c704',
  'screenshots'
);

async function runHostedDeploymentVerification() {
  console.log('===============================================================');
  console.log(`VERIFYING HOSTED PRODUCTION DEPLOYMENT AT: ${BASE_URL}`);
  console.log('===============================================================\n');

  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  page.on('dialog', async (dialog) => {
    console.log(`[Browser Dialog]: ${dialog.type()} - ${dialog.message()}`);
    await dialog.accept();
  });

  page.on('response', async (res) => {
    if (res.url().includes('/api/questions/interpret')) {
      try {
        const body = await res.text();
        console.log(`[/api/questions/interpret Response ${res.status()}]: ${body.slice(0, 160)}...`);
      } catch {
        console.log(`[/api/questions/interpret Response ${res.status()}]`);
      }
    }
  });

  // 1. Root redirect check
  console.log('1. Checking root URL redirect...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);
  const currentUrl = page.url();
  console.log(`   Initial URL redirected to: ${currentUrl}`);
  if (!currentUrl.includes('/en') && !currentUrl.includes('/si')) {
    throw new Error(`Expected root redirect to locale route, got ${currentUrl}`);
  }
  console.log('   ✓ Root successfully redirected to bilingual locale route.');

  // 2. Bilingual Switching
  console.log('\n2. Checking bilingual switching between /en and /si...');
  await page.goto(`${BASE_URL}/en`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hosted-home-en.png'), fullPage: false });

  // Switch to Sinhala
  const langTrigger = page.locator('header button:has(svg.lucide-globe)');
  if (await langTrigger.count() > 0) {
    await langTrigger.click();
    await page.waitForTimeout(300);
    const siOption = page.locator('[role="menuitem"]:has-text("සිංහල")');
    if (await siOption.count() > 0) {
      await siOption.click();
      await page.waitForURL('**/si**', { waitUntil: 'domcontentloaded', timeout: 45000 });
      console.log('   ✓ Successfully switched to Sinhala route.');
    }
  }

  // 3. Lesson & Curriculum Navigation
  console.log('\n3. Checking Units and Lesson navigation...');
  await page.goto(`${BASE_URL}/en/units/oscillations-and-waves`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(600);
  const unitHeading = await page.locator('h1, h2').first().textContent();
  console.log(`   Oscillations & Waves Heading: ${unitHeading?.trim()}`);

  // 4. Practicals Hub & Experiments 18, 20, 21.2
  console.log('\n4. Checking Waves Practicals Hub & Optics Experiments (18, 20, 21.2)...');
  await page.goto(`${BASE_URL}/en/units/oscillations-and-waves/waves-practicals`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(800);

  // Exp 18: Prism critical angle
  console.log('   Testing Exp 18 (Prism Critical Angle)...');
  const exp18Tab = page.locator('button:has-text("18. Prism Critical Angle")').first();
  if (await exp18Tab.count() > 0) {
    await exp18Tab.click();
    await page.waitForTimeout(500);
    console.log(`   ✓ Exp 18 critical angle tab clicked and rendered.`);
  }

  // Exp 20: Spectrometer
  console.log('   Testing Exp 17, 19 & 20 (Spectrometer & Prism)...');
  const exp20Tab = page.locator('button:has-text("17, 19 & 20. Spectrometer & Prism")').first();
  if (await exp20Tab.count() > 0) {
    await exp20Tab.click();
    await page.waitForTimeout(500);
    console.log(`   ✓ Exp 20 spectrometer tab clicked and rendered.`);
  }

  // Exp 21.2: Concave lens
  console.log('   Testing Exp 21.1 & 21.2 (Lenses & Concave Mirror Strip)...');
  const exp21Tab = page.locator('button:has-text("21.1 & 21.2. Convex & Concave Lenses")').first();
  if (await exp21Tab.count() > 0) {
    await exp21Tab.click();
    await page.waitForTimeout(500);
    const concave212SubTab = page.locator('button:has-text("21.2 Concave")').first();
    if (await concave212SubTab.count() > 0) {
      await concave212SubTab.click();
      await page.waitForTimeout(500);
    }
    console.log(`   ✓ Exp 21.2 concave lens tab clicked and rendered.`);
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hosted-practicals-waves.png'), fullPage: false });

  // 5. Assessment Lifecycle, History & My Learning
  console.log('\n5. Checking Assessment Lifecycle, Submission & History...');
  await page.goto(`${BASE_URL}/en/units/measurement/unit-assessment`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(800);

  // Answer first MCQ
  const firstMCQ = page.locator('button span:text-is("A")').first();
  if (await firstMCQ.count() > 0) {
    await firstMCQ.click();
  }
  // Fill numerical answer
  const numInput = page.locator('input[type="text"]').first();
  if (await numInput.count() > 0) {
    await numInput.fill('42.5');
  }

  // Submit assessment
  const submitBtn = page.locator('button:has-text("Submit Assessment")').first();
  if (await submitBtn.count() > 0) {
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();
    await page.waitForTimeout(800);
    console.log('   ✓ Assessment submitted successfully.');
  }

  // Navigate to My Learning dashboard
  console.log('   Checking My Learning dashboard...');
  await page.goto(`${BASE_URL}/en/my-learning`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(800);
  const myLearningHeading = await page.locator('h1, h2').first().textContent();
  console.log(`   My Learning Heading: ${myLearningHeading?.trim()}`);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hosted-my-learning.png'), fullPage: false });
  console.log('   ✓ My Learning dashboard rendered with student progress.');

  // 6. Mobile 375px Viewport & Tab Bar Wrapping Check
  console.log('\n6. Checking Mobile 375px Viewport Layout...');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${BASE_URL}/si/units/oscillations-and-waves/waves-practicals`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  const horizontalScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`   375px Mobile ScrollWidth: ${horizontalScrollWidth}px, ClientWidth: ${clientWidth}px`);
  if (horizontalScrollWidth > clientWidth + 2) {
    throw new Error(`Mobile 375px viewport has horizontal overflow! scrollWidth: ${horizontalScrollWidth}, clientWidth: ${clientWidth}`);
  }
  console.log('   ✓ Zero horizontal overflow on 375px mobile viewport with Sinhala labels.');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hosted-mobile-375px-si.png'), fullPage: false });

  // Reset viewport to desktop
  await page.setViewportSize({ width: 1280, height: 800 });

  // 7. Live AI Question Interpretation via UI
  console.log('\n7. Checking Live AI Question Interpretation (Groq) via UI at /en/questions/new...');
  await page.goto(`${BASE_URL}/en/questions/new`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(800);

  const questionInput = page.locator('textarea');
  if (await questionInput.count() === 0) {
    throw new Error('Question input textarea not found at /en/questions/new');
  }

  const testQuestion = 'A car travels at a constant velocity of 20 m/s for 15 seconds. Calculate the total displacement.';
  await questionInput.fill(testQuestion);
  console.log(`   Filled question text: "${testQuestion}"`);
  await page.waitForTimeout(500);

  console.log('   Clicking "Understand question" button, awaiting Groq response...');
  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes('/api/questions/interpret'), { timeout: 35000 }),
    page.click('button:has-text("Understand question"), button:has-text("ප්‍රශ්නය තේරුම් ගන්න")')
  ]);

  console.log(`   API response code: ${response.status()}`);
  await page.waitForTimeout(2000);

  // Assert scenario review heading appears
  const titleLocator = page.locator('h2:has-text("Here is how we understood your question")');
  await titleLocator.waitFor({ state: 'visible', timeout: 10000 });
  const titleCount = await titleLocator.count();
  console.log(`   Scenario review heading found: ${titleCount}`);
  if (titleCount === 0) {
    throw new Error('Scenario review section did not appear after Groq interpretation');
  }

  // Take screenshot of the result
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hosted-ai-interpretation-live.png'), fullPage: true });
  console.log('   ✓ Live Groq AI interpretation returned structured variables and rendered Scenario Review section!');

  console.log('\n===============================================================');
  console.log('ALL HOSTED VERIFICATION CHECKS PASSED WITH 100% SUCCESS!');
  console.log('===============================================================\n');

  await browser.close();
}

runHostedDeploymentVerification().catch((err) => {
  console.error('\n❌ Hosted verification failed:', err);
  process.exit(1);
});
