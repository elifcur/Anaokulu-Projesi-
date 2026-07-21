import { chromium } from 'playwright'

const BASE = 'http://localhost:5173'
const OUT = 'C:/Users/win10/AppData/Local/Temp/claude/c--Users-win10-Desktop-Anas-n-f--Projesi/69695e98-db91-4861-804d-56969beeb37c/scratchpad'

const routes = [
  ['/', 'p-home'],
  ['/hakkimizda', 'p-hakkimizda'],
  ['/yaklasimimiz', 'p-yaklasim'],
  ['/kitaplik', 'p-kitaplik'],
  ['/iletisim', 'p-iletisim'],
]

async function scrollThrough(page) {
  const h = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < h; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y)
    await page.waitForTimeout(110)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(350)
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

for (const [route, name] of routes) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  await scrollThrough(page)
  await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true })
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)
  await page.screenshot({ path: `${OUT}/${name}-top.png` })
}

// Mobil nav açık
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const mp = await m.newPage()
await mp.goto(BASE + '/', { waitUntil: 'networkidle' })
await mp.click('.nav__burger')
await mp.waitForTimeout(400)
await mp.screenshot({ path: `${OUT}/m-nav-open.png` })

await browser.close()
console.log('pages shot')
