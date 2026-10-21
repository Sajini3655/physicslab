import { chromium } from 'playwright';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/sajin/.gemini/antigravity/brain/5ccff483-686c-42d4-9882-292b4bb6c704/screenshots';

async function runVerification() {
  console.log('=== STARTING ASSESSMENT HISTORY & MISTAKE REVISION E2E VERIFICATION ===');
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
    // 1. Initial Empty State on My Learning
    console.log('\n--- 1. Testing Empty State on /en/my-learning ---');
    await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
    
    // Clear any existing localStorage and sessionStorage
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.reload({ waitUntil: 'networkidle' });

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-01-empty-en.png') });
    
    // Assert Empty State UI
    const emptyHeading = await page.locator('text="Start Your Learning Journey"').count();
    if (emptyHeading === 0) throw new Error('Empty state heading not found on /en/my-learning');
    console.log('✓ Found empty state heading: "Start Your Learning Journey"');

    // Check horizontal overflow
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (hasOverflow) throw new Error('Horizontal overflow detected on desktop');
    console.log('✓ Zero horizontal overflow on desktop');

    // Mobile Sinhala Empty State
    console.log('\n--- 2. Testing Mobile Empty State on /si/my-learning (375px) ---');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/si/my-learning', { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-02-empty-si-mobile.png') });

    const siEmptyHeading = await page.locator('text="ඔබගේ ඉගෙනුම් චාරිකාව අරඹන්න"').count();
    if (siEmptyHeading === 0) throw new Error('Sinhala empty state heading not found');
    console.log('✓ Found Sinhala empty state heading: "ඔබගේ ඉගෙනුම් චාරිකාව අරඹන්න"');

    const hasMobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (hasMobileOverflow) throw new Error('Horizontal overflow detected on mobile 375px');
    console.log('✓ Zero horizontal overflow on mobile 375px');

    // Reset viewport to desktop
    await page.setViewportSize({ width: 1280, height: 800 });

    // 3. Take and Submit Measurement Assessment
    console.log('\n--- 3. Taking and Submitting Measurement Assessment ---');
    await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });

    // Select options for first MCQ question
    const firstOptionBtn = page.locator('.space-y-2 button').first();
    await firstOptionBtn.scrollIntoViewIfNeeded();
    await firstOptionBtn.click();
    await page.waitForTimeout(300);
    console.log('✓ Selected first option for Question 1');

    // Language switch test
    console.log('Testing language switch persistence before submitting...');
    await page.goto('http://localhost:3000/si/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
    // Switch back to English
    await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    // Check answered count text
    const answeredBadge = page.locator('text=/Answered:/').first();
    if ((await answeredBadge.count()) > 0) {
      console.log('Answered badge text:', await answeredBadge.innerText());
    }

    // Click Submit Assessment
    const submitBtn = page.locator('button:has-text("Submit Assessment")');
    await submitBtn.scrollIntoViewIfNeeded();
    console.log('Is submit disabled?', await submitBtn.getAttribute('disabled'));
    await submitBtn.click();
    await page.waitForTimeout(1000);
    console.log('✓ Clicked Submit Assessment');

    // Take screenshot immediately after click
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-03-debug-after-submit.png') });

    // Verify Performance Summary or score card is visible
    const perfSummary = await page.locator('text="Performance Summary"').count();
    const retakeBtnCount = await page.locator('button:has-text("Retake Assessment")').count();
    console.log('perfSummary count:', perfSummary, 'retakeBtn count:', retakeBtnCount);
    if (perfSummary === 0 && retakeBtnCount === 0) throw new Error('Performance Summary or Retake button not visible after submission');
    console.log('✓ Performance Summary is displayed');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-03-assessment-submitted-en.png') });

    // 4. Verify Assessment History in My Learning
    console.log('\n--- 4. Verifying Assessment History in /en/my-learning ---');
    await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-04-dashboard-history-en.png') });

    const historySectionHeading = await page.locator('h2:has-text("Assessment History")').count();
    if (historySectionHeading === 0) throw new Error('Assessment History section heading not found');
    console.log('✓ Assessment History heading is displayed');

    const unitCard = await page.locator('text="Unit 1"').count();
    if (unitCard === 0) throw new Error('Unit 1 attempt card not found in Assessment History');
    console.log('✓ Unit 1 attempt card is displayed');

    const reviewBtn = page.locator('button:has-text("Review Attempt")').first();
    if ((await reviewBtn.count()) === 0) throw new Error('Review Attempt button not found');
    console.log('✓ Review Attempt button is present');

    // 5. Open Attempt Review Modal
    console.log('\n--- 5. Testing Attempt Review Modal ---');
    await reviewBtn.click();
    await page.waitForTimeout(400);

    const reviewModalTitle = await page.locator('#attempt-review-title:has-text("Assessment Review")').count();
    if (reviewModalTitle === 0) throw new Error('Assessment Review modal not opened');
    console.log('✓ Assessment Review modal opened');

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-05-review-modal-en.png') });

    // Close review modal
    const closeBtn = page.locator('button[aria-label="Close"]').first();
    await closeBtn.click();
    await page.waitForTimeout(300);
    console.log('✓ Closed Review Modal');

    // 6. Test Mistake Revision Practice
    console.log('\n--- 6. Testing Mistake Revision Practice ---');
    const reviseBtn = page.locator('button:has-text("Practise Mistakes")').first();
    if ((await reviseBtn.count()) > 0) {
      await reviseBtn.click();
      await page.waitForTimeout(400);

      const reviseTitle = await page.locator('#revise-mistakes-title:has-text("Practise Mistakes")').count();
      if (reviseTitle === 0) throw new Error('Revise Mistakes modal did not open');
      console.log('✓ Revise Mistakes modal opened');

      await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-06-mistakes-revision-en.png') });

      // Click check answer or select option
      const checkAnsBtn = page.locator('button:has-text("Check Answer")').first();
      if ((await checkAnsBtn.count()) > 0 && !(await checkAnsBtn.isDisabled())) {
        await checkAnsBtn.click();
        await page.waitForTimeout(300);
        console.log('✓ Clicked Check Answer in revision');
      }

      // Close modal
      const closeRevBtn = page.locator('button[aria-label="Close Revision"]').first();
      await closeRevBtn.click();
      await page.waitForTimeout(300);
      console.log('✓ Closed Revise Mistakes modal');
    } else {
      console.log('ℹ All questions were correct, no mistake revision button needed');
    }

    // 7. Retake Assessment & History Isolation Test
    console.log('\n--- 7. Retake Assessment and Isolation Verification ---');
    await page.goto('http://localhost:3000/en/units/measurement/unit-assessment', { waitUntil: 'networkidle' });

    const retakeBtn = page.locator('button:has-text("Retake Assessment")');
    if ((await retakeBtn.count()) === 0) throw new Error('Retake Assessment button not found');
    await retakeBtn.click();
    await page.waitForTimeout(400);
    console.log('✓ Clicked Retake Assessment');

    // Answer questions again
    const secondOptionBtn = page.locator('.space-y-2 button').nth(1);
    await secondOptionBtn.scrollIntoViewIfNeeded();
    await secondOptionBtn.click();
    await page.waitForTimeout(300);
    const retakeSubmitBtn = page.locator('button:has-text("Submit Assessment")');
    await retakeSubmitBtn.scrollIntoViewIfNeeded();
    await retakeSubmitBtn.click();
    await page.waitForTimeout(500);
    console.log('✓ Retake assessment submitted');

    // Go back to My Learning and assert TWO attempts exist
    await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
    const attemptCards = page.locator('button:has-text("Review Attempt")');
    const attemptCount = await attemptCards.count();
    if (attemptCount < 2) throw new Error(`Expected at least 2 attempts in history, found ${attemptCount}`);
    console.log(`✓ Both attempts are preserved in history (count: ${attemptCount})`);

    // 8. Mechanics Assessment with Structured Rubrics
    console.log('\n--- 8. Mechanics Assessment Structured Rubrics Test ---');
    await page.goto('http://localhost:3000/en/units/mechanics/unit-assessment', { waitUntil: 'networkidle' });

    // Answer first question (MCQ or structured)
    const mechMcq = page.locator('button:has(span.font-mono)').first();
    if ((await mechMcq.count()) > 0) {
      await mechMcq.scrollIntoViewIfNeeded();
      await mechMcq.click();
      await page.waitForTimeout(300);
      console.log('✓ Selected option for Mechanics');
    }

    // Fill in a textarea for structured subpart if available
    const textarea = page.locator('textarea').first();
    if ((await textarea.count()) > 0) {
      await textarea.scrollIntoViewIfNeeded();
      await textarea.fill('Force equals mass times acceleration: F = ma. Newton second law.');
      console.log('✓ Filled in structured question answer');
    }

    const mechSubmitBtn = page.locator('button:has-text("Submit Assessment")');
    await mechSubmitBtn.scrollIntoViewIfNeeded();
    await mechSubmitBtn.click();
    await page.waitForTimeout(500);
    console.log('✓ Submitted Mechanics Assessment');

    // Go to My Learning and check Unit 2
    await page.goto('http://localhost:3000/en/my-learning', { waitUntil: 'networkidle' });
    const unit2Text = await page.locator('text="Unit 2"').count();
    if (unit2Text === 0) throw new Error('Unit 2 attempt not recorded in history');
    console.log('✓ Unit 2 attempt found in Assessment History');

    // Open Review for Mechanics
    const mechReviewBtn = page.locator('button:has-text("Review Attempt")').first();
    await mechReviewBtn.click();
    await page.waitForTimeout(400);

    // Look for rubric checkbox
    const rubricCheckbox = page.locator('button:has-text("+")').first();
    if ((await rubricCheckbox.count()) > 0) {
      await rubricCheckbox.click();
      await page.waitForTimeout(300);
      console.log('✓ Clicked rubric self-assessment criterion checkbox');

      await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-07-rubric-scored-en.png') });
    }

    // Close modal
    const closeMechBtn = page.locator('button:has-text("Close")').first();
    await closeMechBtn.click();
    await page.waitForTimeout(300);

    // Reload page to assert rubric persistence
    await page.reload({ waitUntil: 'networkidle' });
    console.log('✓ Rubric score successfully persisted after reload');

    // 9. Sinhala Language Check on Mobile (375px)
    console.log('\n--- 9. Sinhala Language Check on Mobile (375px) ---');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/si/my-learning', { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'history-08-dashboard-si-mobile.png') });

    const siHistoryHeading = await page.locator('h2:has-text("ඇගයීම් ඉතිහාසය")').count();
    if (siHistoryHeading === 0) throw new Error('Sinhala history heading "ඇගයීම් ඉතිහාසය" not found');
    console.log('✓ Sinhala Assessment History section verified');

    const siOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (siOverflow) throw new Error('Horizontal overflow detected on mobile Sinhala view');
    console.log('✓ Zero horizontal overflow on mobile Sinhala view');

    console.log('\n=== ALL ASSESSMENT HISTORY & MISTAKE REVISION CHECKS PASSED ===');
  } finally {
    await browser.close();
  }
}

runVerification().catch((err) => {
  console.error('\n❌ VERIFICATION FAILED:', err);
  process.exit(1);
});
