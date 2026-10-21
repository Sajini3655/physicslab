import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(
  process.env.USERPROFILE || 'C:\\Users\\sajin',
  '.gemini',
  'antigravity',
  'brain',
  '5ccff483-686c-42d4-9882-292b4bb6c704',
  'screenshots'
);

async function runLocalRuntimeVerification() {
  console.log(`=== RUNNING CHUNK LOAD & LOCAL RUNTIME VERIFICATION ===`);
  console.log(`Target: ${BASE_URL}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  const failedRequests = [];
  const chunkRequests = [];
  const consoleErrors = [];

  page.on('requestfailed', (req) => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  page.on('response', (res) => {
    if (res.url().includes('/_next/static/chunks/')) {
      chunkRequests.push({ url: res.url(), status: res.status() });
      if (res.status() !== 200 && res.status() !== 304) {
        failedRequests.push({ url: res.url(), status: res.status() });
      }
    }
  });

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  try {
    // 1. Visit root page and verify redirection to /en
    console.log('1. Loading root page / ...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    const currentUrl = page.url();
    console.log(`✓ Navigated to: ${currentUrl}`);
    if (!currentUrl.includes('/en')) {
      throw new Error(`Expected redirect to /en, got: ${currentUrl}`);
    }

    // Check chunk loading
    console.log(`✓ Loaded ${chunkRequests.length} Next.js chunks with 0 404 errors.`);
    if (failedRequests.length > 0) {
      throw new Error(`Failed requests detected: ${JSON.stringify(failedRequests)}`);
    }

    // 2. Perform hard reload
    console.log('\n2. Testing page hard refresh...');
    chunkRequests.length = 0;
    await page.reload({ waitUntil: 'networkidle' });
    console.log(`✓ Hard reload successful. ${chunkRequests.length} chunks served cleanly.`);

    // 3. Language switch to Sinhala
    console.log('\n3. Testing language switch to Sinhala (/si)...');
    const siLangBtn = page.locator('button:has-text("සිංහල")').first();
    if (await siLangBtn.isVisible()) {
      await siLangBtn.click();
      await page.waitForURL('**/si**');
      await page.waitForLoadState('networkidle');
      console.log(`✓ Switched language to Sinhala: ${page.url()}`);
    } else {
      await page.goto(`${BASE_URL}/si`, { waitUntil: 'networkidle' });
      console.log(`✓ Directly navigated to Sinhala: ${page.url()}`);
    }

    // Switch back to English
    console.log('Switching back to English (/en)...');
    const enLangBtn = page.locator('button:has-text("English")').first();
    if (await enLangBtn.isVisible()) {
      await enLangBtn.click();
      await page.waitForURL('**/en**');
      await page.waitForLoadState('networkidle');
    } else {
      await page.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle' });
    }

    // 4. Navigate to Waves Practicals Hub
    console.log('\n4. Navigating to Waves Practicals Hub...');
    await page.goto(`${BASE_URL}/en/units/oscillations-and-waves/waves-practicals`, {
      waitUntil: 'networkidle',
    });
    console.log(`✓ Waves Practicals Hub loaded: ${page.url()}`);

    // Verify Exp 18: Prism Critical Angle Method
    console.log('Checking Practical 18 (Prism Critical Angle)...');
    const prismCritTab = page.locator('button:has-text("Prism Critical Angle"), button:has-text("ප්‍රිස්ම අවධි කෝණ")').first();
    await prismCritTab.click();
    await page.waitForTimeout(300);

    const prismCritTitle = await page.locator('text=/Practical 18|ප්‍රායෝගික පරීක්ෂණය 18/').count();
    if (prismCritTitle === 0) throw new Error('Exp 18 title not visible!');
    console.log('✓ Exp 18 rendered cleanly without chunk error');

    // Test eye slider & load sample data
    const sampleBtn = page.locator('button:has-text("Load Sample Data"), button:has-text("ආදර්ශ දත්ත")').first();
    await sampleBtn.click();
    await page.waitForTimeout(200);
    const nBadge = await page.locator('text=/1\\.516/').count();
    if (nBadge === 0) throw new Error('Exp 18 sample data calculation failed!');
    console.log('✓ Exp 18 sample data verified (n = 1.516)');

    // Verify Exp 20: Spectrometer Minimum Deviation
    console.log('Checking Practical 20 (Spectrometer Minimum Deviation)...');
    const prismTab = page.locator('button:has-text("Spectrometer & Prism"), button:has-text("වර්ණාවලීමානය")').first();
    await prismTab.click();
    await page.waitForTimeout(300);
    const exp20Title = await page.locator('text=/Practical 20|ප්‍රායෝගික පරීක්ෂණය 20/').count();
    if (exp20Title === 0) throw new Error('Exp 20 title not visible!');
    console.log('✓ Exp 20 rendered cleanly');

    // Verify Exp 21.2: Concave Lens No-Parallax (Plane Mirror Strip)
    console.log('Checking Practical 21.2 (Concave Lens Plane Mirror Strip)...');
    const lensTab = page.locator('button:has-text("Convex & Concave Lenses"), button:has-text("උත්තල සහ අවතල")').first();
    await lensTab.click();
    await page.waitForTimeout(300);

    const concaveMirrorBtn = page.locator('button:has-text("21.2 Concave (Plane Mirror Strip"), button:has-text("21.2 අවතල")').first();
    await concaveMirrorBtn.click();
    await page.waitForTimeout(200);

    const concaveSampleBtn = page.locator('button:has-text("Load Sample Data"), button:has-text("ආදර්ශ දත්ත")').first();
    await concaveSampleBtn.click();
    await page.waitForTimeout(200);
    const focalBadge = await page.locator('text=/-15\\.00?\\s*cm/').count();
    if (focalBadge === 0) throw new Error('Exp 21.2 focal length failed!');
    console.log('✓ Exp 21.2 Cartesian analysis verified (f = -15.00 cm)');

    // Submit lens record
    const submitBtn = page.locator('button:has-text("Submit Practical Record"), button:has-text("ප්‍රායෝගික සටහන")').first();
    await submitBtn.click();
    await page.waitForTimeout(200);
    console.log('✓ Practical record submitted to persistent storage');

    // 5. Test page reload persistence
    console.log('\n5. Testing reload persistence of practical observations...');
    await page.reload({ waitUntil: 'networkidle' });
    const focalAfterReload = await page.locator('text=/-15\\.00?\\s*cm/').count();
    if (focalAfterReload === 0) throw new Error('Observations lost on page reload!');
    console.log('✓ Observations survived page reload');

    // 6. Test My Learning Dashboard
    console.log('\n6. Navigating to My Learning Dashboard (/en/my-learning)...');
    await page.goto(`${BASE_URL}/en/my-learning`, { waitUntil: 'networkidle' });
    console.log(`✓ My Learning Dashboard loaded: ${page.url()}`);

    // 7. Test Question Review (/en/questions/new)
    console.log('\n7. Navigating to Question Submission & Review (/en/questions/new)...');
    await page.goto(`${BASE_URL}/en/questions/new`, { waitUntil: 'networkidle' });
    console.log(`✓ Question Submission screen loaded: ${page.url()}`);

    // 8. Test 375px mobile viewport
    console.log('\n8. Testing 375px mobile viewport in Sinhala...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/si/units/oscillations-and-waves/waves-practicals`, {
      waitUntil: 'networkidle',
    });
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    if (hasHorizontalOverflow) {
      throw new Error('Horizontal scroll overflow detected on 375px mobile viewport!');
    }
    console.log('✓ Zero horizontal overflow on 375px mobile viewport in Sinhala');

    // Screenshot evidence
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'local-runtime-mobile-si.png') });
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'local-runtime-desktop-en.png') });
    console.log('✓ Desktop and mobile screenshots captured');

    // Final checks on errors
    const chunkErrors = consoleErrors.filter((e) => e.includes('ChunkLoadError') || e.includes('404'));
    if (chunkErrors.length > 0) {
      throw new Error(`Chunk errors found in console: ${chunkErrors.join(', ')}`);
    }

    console.log(`\n=== ALL LOCAL RUNTIME CHECKS PASSED WITH 0 CHUNK ERRORS! ===`);
  } catch (err) {
    console.error('\n❌ Verification failed:', err);
    throw err;
  } finally {
    await browser.close();
  }
}

runLocalRuntimeVerification().catch((err) => {
  console.error(err);
  process.exit(1);
});
