import { chromium } from 'playwright'

const URL = 'http://localhost:5173/'
const OUT = 'C:/Users/win10/AppData/Local/Temp/claude/c--Users-win10-Desktop-Anas-n-f--Projesi/69695e98-db91-4861-804d-56969beeb37c/scratchpad'

async function scrollThrough(page) {
  const h = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < h; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y)
    await page.waitForTimeout(120)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(400)
}

const browser = await chromium.launch()

// Desktop
const d = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const dp = await d.newPage()
await dp.goto(URL, { waitUntil: 'networkidle' })
await dp.waitForTimeout(800)
await dp.screenshot({ path: `${OUT}/desktop-hero.png` })
await scrollThrough(dp)
await dp.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true })

// Section shots
async function shot(sel, name) {
  const el = await dp.$(sel)
  if (el) {
    await el.scrollIntoViewIfNeeded()
    await dp.waitForTimeout(600)
    await el.screenshot({ path: `${OUT}/${name}.png` })
  }
}
await shot('#yaklasim', 'sec-approach')
await shot('#gelisim', 'sec-develop')
await shot('#kitaplik', 'sec-library')
await shot('#iletisim', 'sec-contact')
await shot('.footer', 'sec-footer')

// Mobile
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const mp = await m.newPage()
await mp.goto(URL, { waitUntil: 'networkidle' })
await mp.waitForTimeout(700)
await mp.screenshot({ path: `${OUT}/mobile-hero.png` })
await scrollThrough(mp)
await mp.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true })

await browser.close()
console.log('shots done')
