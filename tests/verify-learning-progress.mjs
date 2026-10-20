import { chromium } from 'playwright';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/sajin/.gemini/antigravity/brain/5ccff483-686c-42d4-9882-292b4bb6c704/screenshots';

async function runVerification() {
  console.log('=== STARTING LEARNING PROGRESS E2E VERIFICATION ===');
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

  page.on('response', (res) => {
    if (res.status() >= 400) {
      console.log(`[HTTP ${res.status()}] ${res.url()}`);
    }
  });

  // 1. Initial Empty State on My Learning
  console.log('\n--- 1. Testing Empty State on /en/my-learning ---');
  await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
  
  // Clear any existing localStorage
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-01-empty-en.png') });
  
  // Assert Empty State UI
  const emptyHeading = await page.locator('text="Start Your Learning Journey"').count();
  if (emptyHeading === 0) throw new Error('Empty state heading not found on /en/my-learning');
  console.log('✓ Found empty state heading: "Start Your Learning Journey"');

  const savedOnDeviceNotice = await page.locator('text="Saved on this device"').count();
  if (savedOnDeviceNotice === 0) throw new Error('"Saved on this device" notice not found');
  console.log('✓ Found "Saved on this device" notice');

  const browseBtn = await page.locator('a:has-text("Browse lessons")').count();
  if (browseBtn === 0) throw new Error('"Browse lessons" button not found');
  console.log('✓ Found "Browse lessons" action button');

  // Verify Sinhala empty state
  console.log('\n--- 2. Testing Sinhala Empty State on /si/my-learning ---');
  await page.goto('http://localhost:3000/si/my-learning', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-02-empty-si.png') });

  const siEmptyHeading = await page.locator('text="ඔබගේ ඉගෙනුම් චාරිකාව අරඹන්න"').count();
  if (siEmptyHeading === 0) throw new Error('Sinhala empty state heading not found');
  console.log('✓ Found Sinhala empty state heading: "ඔබගේ ඉගෙනුම් චාරිකාව අරඹන්න"');

  const siSavedNotice = await page.locator('text="මෙම උපාංගයේ සුරැකිණි"').count();
  if (siSavedNotice === 0) throw new Error('Sinhala saved on device notice not found');
  console.log('✓ Found Sinhala "මෙම උපාංගයේ සුරැකිණි" notice');

  // 3. Homepage before any visited lesson
  console.log('\n--- 3. Testing Homepage without visited lessons ---');
  await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' });
  const initialContinueCard = await page.locator('section[aria-label="Continue Learning"]').count();
  if (initialContinueCard !== 0) throw new Error('Continue learning card should NOT be visible before visiting any lesson');
  console.log('✓ Confirmed Continue Learning card is hidden for new visitor');

  // Verify My Learning link in header
  const myLearningHeaderLink = await page.locator('header a[href*="my-learning"]').count();
  if (myLearningHeaderLink === 0) throw new Error('My Learning navigation link missing from header');
  console.log('✓ Found accessible My Learning link in top header');

  // 4. Visit Lesson 1: Mechanics -> Projectiles
  console.log('\n--- 4. Visiting Lesson: /en/units/mechanics/projectiles ---');
  await page.goto('http://localhost:3000/en/units/mechanics/projectiles', { waitUntil: 'networkidle' });

  // Verify opening lesson does NOT automatically complete it
  const isCompletedInitial = await page.evaluate(() => {
    const raw = localStorage.getItem('physicslab_learning_progress_v1');
    if (!raw) return false;
    const data = JSON.parse(raw);
    return data.completedLessonIds.includes('lesson-2-4');
  });
  if (isCompletedInitial) throw new Error('Lesson was incorrectly automatically marked complete upon visit!');
  console.log('✓ Verified lesson is NOT automatically marked complete upon visit');

  // Find buttons: "Mark as complete" and "Save lesson"
  const markCompleteBtn = page.locator('button:has-text("Mark as complete")');
  const saveLessonBtn = page.locator('button:has-text("Save lesson")');
  if (await markCompleteBtn.count() === 0) throw new Error('"Mark as complete" button missing');
  if (await saveLessonBtn.count() === 0) throw new Error('"Save lesson" button missing');

  // Click Mark as complete
  await markCompleteBtn.click();
  await page.waitForTimeout(300);
  const markIncompleteBtn = page.locator('button:has-text("Mark as incomplete")');
  if (await markIncompleteBtn.count() === 0) throw new Error('Button failed to update to "Mark as incomplete"');
  console.log('✓ Successfully marked lesson as complete');

  // Click Save lesson
  await saveLessonBtn.click();
  await page.waitForTimeout(300);
  const removeSavedBtn = page.locator('button:has-text("Remove saved lesson")');
  if (await removeSavedBtn.count() === 0) throw new Error('Button failed to update to "Remove saved lesson"');
  console.log('✓ Successfully saved lesson to bookmarks');

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-03-lesson-actions-en.png') });

  // 5. Check Homepage Continue Learning Card
  console.log('\n--- 5. Checking Homepage Continue Learning Card ---');
  await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-04-home-continue-en.png') });

  const homeContinueCard = page.locator('section[aria-label="Continue Learning"]');
  if (await homeContinueCard.count() === 0) throw new Error('Continue learning card not visible on homepage after visiting lesson');
  
  const resumeLink = homeContinueCard.locator('a:has-text("Resume lesson")');
  if (await resumeLink.count() === 0) throw new Error('Resume lesson button not found in Continue learning card');
  const resumeHref = await resumeLink.getAttribute('href');
  console.log('✓ Continue learning card active with resume link:', resumeHref);
  if (!resumeHref.includes('/units/mechanics/projectiles')) {
    throw new Error(`Resume link href mismatch: expected /units/mechanics/projectiles, got ${resumeHref}`);
  }

  // Check Unit 2 card in Curriculum browser
  const unit2Card = page.locator('#curriculum-units a[href$="/units/mechanics"]');
  const unit2Text = await unit2Card.innerText();
  if (!unit2Text.includes('1 of 13')) {
    throw new Error(`Unit 2 progress badge mismatch. Expected "1 of 13", card text had:\n${unit2Text}`);
  }
  console.log('✓ Unit 2 Mechanics card correctly displays "1 of 13 completed"');

  // 6. Visit Lesson 2: Measurement -> Measuring Instruments
  console.log('\n--- 6. Visiting second lesson: /en/units/measurement/measuring-instruments ---');
  await page.goto('http://localhost:3000/en/units/measurement/measuring-instruments', { waitUntil: 'networkidle' });
  await page.locator('button:has-text("Save lesson")').click();
  await page.waitForTimeout(200);
  await page.locator('button:has-text("Mark as complete")').click();
  await page.waitForTimeout(200);
  console.log('✓ Saved and completed Measuring Instruments');

  // 7. Check My Learning populated dashboard
  console.log('\n--- 7. Checking populated My Learning dashboard ---');
  await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-05-dashboard-active-en.png') });

  // Verify Continue learning is now the latest visited (instruments)
  const continueTitle = await page.locator('section[aria-label="Continue Learning"] h3').innerText();
  console.log('✓ Latest Continue Learning title:', continueTitle);
  if (!continueTitle.toLowerCase().includes('instrument')) {
    throw new Error(`Expected instrument in latest continue learning, got: ${continueTitle}`);
  }

  // Verify Saved Lessons (2)
  const savedHeading = await page.locator('h2:has-text("Saved Lessons")').innerText();
  console.log('✓ Saved Lessons heading:', savedHeading);
  if (!savedHeading.includes('2')) {
    throw new Error(`Expected Saved Lessons (2), got: ${savedHeading}`);
  }

  // Remove one bookmark from My Learning page
  console.log('Testing bookmark removal from My Learning page...');
  const removeBtns = page.locator('button[title="Remove bookmark"]');
  const initialRemoveBtnCount = await removeBtns.count();
  if (initialRemoveBtnCount !== 2) throw new Error(`Expected 2 remove buttons, found ${initialRemoveBtnCount}`);
  
  await removeBtns.first().click();
  await page.waitForTimeout(300);
  
  const updatedSavedHeading = await page.locator('h2:has-text("Saved Lessons")').innerText();
  console.log('✓ After removal:', updatedSavedHeading);
  if (!updatedSavedHeading.includes('1')) {
    throw new Error(`Expected Saved Lessons (1) after removal, got: ${updatedSavedHeading}`);
  }

  // 8. Mobile Responsiveness on My Learning
  console.log('\n--- 8. Testing Mobile Responsiveness (375x667) ---');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
  
  const overflowInfo = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const offenders = Array.from(document.querySelectorAll('*'))
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.right > docWidth + 1;
      })
      .slice(0, 5)
      .map((el) => ({
        tag: el.tagName,
        className: typeof el.className === 'string' ? el.className : '',
        id: el.id,
        text: el.textContent?.trim().slice(0, 40),
      }));
    return {
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      offenders,
    };
  });
  console.log('Mobile overflow info:', JSON.stringify(overflowInfo, null, 2));
  if (overflowInfo.overflow) throw new Error(`Mobile viewport has horizontal overflow on /en/my-learning (scrollWidth: ${overflowInfo.scrollWidth}, clientWidth: ${overflowInfo.clientWidth})`);
  console.log('✓ Verified zero horizontal overflow on mobile viewport');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-06-mobile-en.png') });

  // 9. Reload Persistence Test
  console.log('\n--- 9. Testing Page Reload Persistence ---');
  await page.reload({ waitUntil: 'networkidle' });
  const reloadedSavedHeading = await page.locator('h2:has-text("Saved Lessons")').innerText();
  if (!reloadedSavedHeading.includes('1')) {
    throw new Error(`State lost after reload: ${reloadedSavedHeading}`);
  }
  console.log('✓ Verified learning progress state fully persists across page reload');

  // Reset desktop viewport
  await page.setViewportSize({ width: 1280, height: 800 });

  // 10. Language Switch to Sinhala populated
  console.log('\n--- 10. Testing Sinhala My Learning populated ---');
  await page.goto('http://localhost:3000/si/my-learning', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'learning-07-dashboard-active-si.png') });
  const siSavedCount = await page.locator('h2:has-text("සුරැකි පාඩම්")').innerText();
  console.log('✓ Sinhala populated saved lessons:', siSavedCount);

  console.log('\n=== ALL LEARNING PROGRESS E2E VERIFICATIONS PASSED SUCCESSFULLY! ===');
  await browser.close();
}

runVerification().catch((err) => {
  console.error('\n❌ E2E VERIFICATION FAILED:', err);
  process.exit(1);
});
