import { chromium } from 'playwright';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/sajin/.gemini/antigravity/brain/5ccff483-686c-42d4-9882-292b4bb6c704/screenshots';

async function runTests() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      console.log(`[HTTP ${res.status()}] ${res.url()}`);
    }
  });

  console.log('--- TEST 1: Home Page (EN) Desktop ---');
  await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01-home-en-desktop.png') });
  console.log('Title:', await page.title());

  console.log('--- TEST 2: Home Page (SI) Desktop ---');
  await page.goto('http://localhost:3000/si', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02-home-si-desktop.png') });

  console.log('--- TEST 3: Mobile Viewport (EN & SI) ---');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '03-home-en-mobile.png') });
  await page.goto('http://localhost:3000/si', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '04-home-si-mobile.png') });

  // Reset to desktop
  await page.setViewportSize({ width: 1280, height: 800 });

  console.log('--- TEST 4: Mechanics Unit & Lesson Journey ---');
  await page.goto('http://localhost:3000/en/units/mechanics', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '05-unit-mechanics-en.png') });

  // Go to projectiles lesson
  await page.goto('http://localhost:3000/en/units/mechanics/projectiles', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '06-lesson-projectiles-en.png') });

  console.log('--- TEST 5: Electronics Practicals Hub (BJT Transfer Characteristics) ---');
  await page.goto('http://localhost:3000/en/units/electronics/practical-investigations', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '07-electronics-practicals-hub-en.png') });

  const transferTab = page.locator('button:has-text("Transfer")');
  if (await transferTab.count() > 0) {
    await transferTab.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '08-bjt-transfer-char-en.png') });
  }

  console.log('--- TEST 6: Electricity Practicals Hub ---');
  await page.goto('http://localhost:3000/en/units/current-electricity/practical-investigations', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '09-electricity-practicals-hub-en.png') });

  console.log('--- TEST 7: Measurement Instrument Controls (Vernier / Micrometer) ---');
  await page.goto('http://localhost:3000/en/units/measurement/measuring-instruments', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '10-measurement-instruments-en.png') });

  console.log('--- TEST 8: Assessment Language Switch & State Persistence ---');
  await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '11-assessment-before-answering.png') });

  // Select option for Question 1
  const firstOption = page.locator('button span:text-is("A")').first();
  if (await firstOption.count() > 0) {
    await firstOption.click();
    console.log('Clicked first option A');
  }

  // Type in first numerical input if exists
  const numInput = page.locator('input[type="text"]').first();
  if (await numInput.count() > 0) {
    await numInput.fill('42.5');
    console.log('Entered 42.5 in numerical input');
  }

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '12-assessment-answered.png') });

  // Now switch language to Sinhala by navigating to /si/units/measurement/unit-assessment
  console.log('Navigating to Sinhala /si/units/measurement/unit-assessment...');
  await page.goto('http://localhost:3000/si/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '13-assessment-after-lang-switch.png') });

  // Check if option A or 42.5 is still preserved
  const numInputAfter = page.locator('input[type="text"]').first();
  let valAfter = '';
  if (await numInputAfter.count() > 0) {
    valAfter = await numInputAfter.inputValue();
  }
  console.log('Numerical input value after language switch:', valAfter);

  console.log('Console errors captured:', consoleErrors);

  await browser.close();
  console.log('ALL BROWSER JOURNEY CHECKS COMPLETE!');
}

runTests().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
