// Prerender: build sonrası her rotayı gerçek bir tarayıcıda çalıştırıp
// içeriği + meta etiketleri gömülü statik HTML olarak dist/ içine yazar.
// SEO ve sosyal paylaşım botları için tam HTML sağlar. Hata olursa build'i bozmaz.
import http from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, extname, dirname } from 'node:path'

const DIST = 'dist'
const PORT = 4321
const ROUTES = ['/hakkimizda', '/yaklasimimiz', '/kitaplik', '/iletisim', '/']
// Yayın alt yolu (vite base ile aynı). Kök için '/'.
const BASE = process.env.BASE_PATH || '/'
const BASE_NO_SLASH = BASE.replace(/\/$/, '') // '' | '/Anaokulu-Projesi-'

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

async function main() {
  // Orijinal SPA index.html'i belleğe al (fallback için — sonradan üzerine yazsak da bozulmasın)
  const indexHtml = await readFile(join(DIST, 'index.html'))

  const server = http.createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(req.url.split('?')[0])
      // base ön ekini kaldır (ör. /Anaokulu-Projesi-/assets/x.js → /assets/x.js)
      if (BASE_NO_SLASH && urlPath.startsWith(BASE_NO_SLASH)) {
        urlPath = urlPath.slice(BASE_NO_SLASH.length) || '/'
      }
      const filePath = join(DIST, urlPath)
      const data = await readFile(filePath).catch(() => null)
      if (data && extname(filePath)) {
        res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' })
        res.end(data)
        return
      }
      // SPA fallback → orijinal index.html (router sayfayı kursun)
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(indexHtml)
    } catch {
      res.writeHead(500)
      res.end('err')
    }
  })

  await new Promise((r) => server.listen(PORT, r))

  const { chromium } = await import('playwright')
  const browser = await chromium.launch()
  const page = await (await browser.newContext()).newPage()

  for (const route of ROUTES) {
    const visitPath = route === '/' ? BASE : BASE_NO_SLASH + route
    await page.goto(`http://localhost:${PORT}${visitPath}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(700)
    // reveal ile gizlenen içerik statik HTML'de görünür kalsın
    await page.evaluate(() =>
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in'))
    )
    const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
    const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1), 'index.html')
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf8')
    console.log('  prerendered', route, '→', outPath)
  }

  await browser.close()
  server.close()
  console.log('✅ Prerender tamam (' + ROUTES.length + ' sayfa)')
}

try {
  await main()
} catch (e) {
  console.warn('⚠️  Prerender atlandı (build yine de geçerli):', e.message)
} finally {
  process.exit(0)
}
