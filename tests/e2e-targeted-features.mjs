import { chromium } from 'playwright';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/sajin/.gemini/antigravity/brain/5ccff483-686c-42d4-9882-292b4bb6c704/screenshots';

async function testTargeted() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log('[BROWSER ERROR]', msg.text());
    }
  });

  // 1. Electronics Practicals Hub: Scroll to simulation and interact with BJT Transfer
  console.log('Testing Electronics Practicals Hub BJT Transfer...');
  await page.goto('http://localhost:3000/en/units/electronics/practical-investigations', { waitUntil: 'networkidle' });
  // Find the practicals hub or scroll into view
  const bjtBtn = page.locator('button:has-text("Transfer"), button:has-text("Exp 36")').first();
  if (await bjtBtn.count() > 0) {
    await bjtBtn.scrollIntoViewIfNeeded();
    await bjtBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-bjt-transfer.png') });
    console.log('Captured targeted-bjt-transfer.png');
  } else {
    // Scroll down to see simulation
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-electronics-scrolled.png') });
  }

  // 2. Thermal Practicals Hub (Humidity Dew Point)
  console.log('Testing Thermal Practicals Hub...');
  await page.goto('http://localhost:3000/en/units/thermal-physics/thermal-practicals-hub', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-thermal-practicals.png') });

  // 3. Matter Properties Practicals Hub (Poiseuille & Jaeger)
  console.log('Testing Matter Properties Practicals Hub...');
  await page.goto('http://localhost:3000/en/units/mechanical-properties-of-matter/matter-properties-practicals-hub', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-matter-properties.png') });

  // 4. Waves Spectrometer Practical
  console.log('Testing Waves Practicals Hub Spectrometer...');
  await page.goto('http://localhost:3000/en/units/oscillations-and-waves/waves-practicals', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-waves-practicals.png') });

  // 5. Unit 1 Assessment interaction and language toggle test
  console.log('Testing Assessment answering and language switch...');
  await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  
  // Find first MCQ option
  const optionBtn = page.locator('button span:text-is("A")').first();
  if (await optionBtn.count() > 0) {
    await optionBtn.click();
    console.log('Clicked MCQ Option A');
  }

  // Find numerical input
  const numInput = page.locator('input[type="text"]').first();
  if (await numInput.count() > 0) {
    await numInput.fill('12.34');
    console.log('Typed 12.34 in numerical input');
  }

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-answered-en.png') });

  // Switch to Sinhala
  console.log('Switching to Sinhala /si/units/measurement/unit-assessment...');
  await page.goto('http://localhost:3000/si/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);

  const numInputSi = page.locator('input[type="text"]').first();
  let siVal = '';
  if (await numInputSi.count() > 0) {
    siVal = await numInputSi.inputValue();
  }
  console.log('VALUE IN SINHALA AFTER SWITCH:', siVal);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-switched-si.png') });

  // Submit assessment in Sinhala
  const submitBtn = page.locator('button:has-text("පරීක්ෂණය අවසන් කරන්න")');
  if (await submitBtn.count() > 0) {
    await submitBtn.click();
    console.log('Submitted assessment in Sinhala!');
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-submitted-si.png') });
  }

  // Toggle explanation for Question 1
  const explainBtn = page.locator('button:has-text("විද්‍යාත්මක පැහැදිලි කිරීම බලන්න")').first();
  if (await explainBtn.count() > 0) {
    await explainBtn.click();
    console.log('Opened physical explanation in Sinhala!');
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-explanation-si.png') });
  }

  // Switch back to English to verify submission state remains preserved
  console.log('Switching back to English /en/units/measurement/unit-assessment...');
  await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-preserved-en.png') });

  // Click Retake Assessment
  const retakeBtn = page.locator('button:has-text("Retake Assessment")');
  if (await retakeBtn.count() > 0) {
    await retakeBtn.click();
    console.log('Clicked Retake Assessment in English!');
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'targeted-assessment-retaken-en.png') });
  }

  await browser.close();
  console.log('Targeted test complete!');
}

testTargeted().catch((e) => {
  console.error(e);
  process.exit(1);
});
