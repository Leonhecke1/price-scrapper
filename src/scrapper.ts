import { chromium } from 'playwright';

export async function getPrice(url: string, selector: string): Promise<number> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url);
  const text = await page.textContent(selector);

  await browser.close();

  if (!text) {
    throw new Error(`Could not find element with selector: ${selector}`);
  }

  return Number(
    text.replace(/[^\d,]/g, '').replace(',', '.')
  );
}
