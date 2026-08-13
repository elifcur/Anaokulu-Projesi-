// Logo türevlerini tek kaynaktan üretir: node scripts/make-logo.mjs
// Kaynak dosyaya hiç dokunulmaz; tüm işlemler bellekte yapılır.
import sharp from 'sharp'
import { access } from 'node:fs/promises'

const SRC = 'images/Toprak_güncesi_logo.jpg'
const OUT = 'public'
// Krem zemin — src/index.css --paper ile aynı olmalı
const PAPER = '#fbefe3'

try {
  await access(SRC)
} catch {
  console.error(`\nBulunamadı: ${SRC}`)
  console.error('Logoyu bu yola kaydedip tekrar çalıştırın.\n')
  process.exit(1)
}

const srcMeta = await sharp(SRC).metadata()
console.log(`Kaynak: ${SRC} (${srcMeta.width}x${srcMeta.height}, ${srcMeta.format})`)

// 1) Dairenin dışındaki düz zemini şeffaf yap (JPG'de alfa yok)
let base = await cutBackground(await sharp(SRC).ensureAlpha().png().toBuffer())

// 2) Şeffaf kenar boşluklarını kırp — küçük boyutlarda logo dolu görünsün
base = await sharp(base)
  .trim()
  .toBuffer()
  .catch(() => base)

// 3) Krem zemini PAPER'a hizala (kaynak zaten doğruysa atlanır)
base = await recolorPaper(base, PAPER)

const meta = await sharp(base).metadata()
console.log(`Hazır:  ${meta.width}x${meta.height}\n`)

// width: en uzun kenar, fit:'inside' ile oran korunur
const VARIANTS = [
  { file: 'logo-header.webp', width: 480, quality: 82, note: 'Nav çubuğu' },
  { file: 'logo-cut.webp', width: 900, quality: 82, note: 'Hero (LCP)' },
  { file: 'logo.webp', width: 240, quality: 80, note: 'Footer rozeti' },
]

for (const { file, width, quality, note } of VARIANTS) {
  const info = await sharp(base)
    .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(`${OUT}/${file}`)
  console.log(`  ${file.padEnd(20)} ${info.width}x${info.height}  ${kb(info.size)}  ${note}`)
}

// Favicon — şeffaf zeminli kare PNG
const fav = await sharp(base)
  .resize({ width: 180, height: 180, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/favicon-toprak.png`)
console.log(`  ${'favicon-toprak.png'.padEnd(20)} 180x180  ${kb(fav.size)}  Tarayıcı sekmesi`)

// Sosyal paylaşım görseli — 1200x630 krem zemine ortalanmış logo
const badge = await sharp(base)
  .resize({ width: 520, height: 520, fit: 'inside', withoutEnlargement: true })
  .toBuffer()

const og = await sharp({
  create: { width: 1200, height: 630, channels: 4, background: PAPER },
})
  .composite([{ input: badge, gravity: 'center' }])
  .jpeg({ quality: 86, chromaSubsampling: '4:4:4' })
  .toFile(`${OUT}/og-image.jpg`)
console.log(`  ${'og-image.jpg'.padEnd(20)} 1200x630  ${kb(og.size)}  Sosyal paylaşım`)

console.log('\nTamam — 5 görsel public/ içine yazıldı.\n')

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`.padStart(9)
}

// Köşelerden taşma yöntemiyle daire dışını şeffaflaştırır. Global eşik yerine
// bağlantı takip edildiği için dairenin içindeki kreme sızamaz — arada koyu
// yeşil halka var. Kenardaki yumuşak geçiş kısmi alfa alır, böylece daire
// kenarı testere dişi olmaz.
async function cutBackground(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const idx = (x, y) => (y * width + x) * channels

  const c = idx(0, 0)
  const bg = [data[c], data[c + 1], data[c + 2]]
  const dist = (i) =>
    Math.max(
      Math.abs(data[i] - bg[0]),
      Math.abs(data[i + 1] - bg[1]),
      Math.abs(data[i + 2] - bg[2])
    )

  const TOL = 10 // buraya kadar tam şeffaf
  const FEATHER = 16 // buraya kadar kısmi; sonrası logo, yayılma durur
  const seen = new Uint8Array(width * height)
  const stack = []
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const p = y * width + x
    if (seen[p]) return
    seen[p] = 1
    stack.push(p)
  }

  push(0, 0)
  push(width - 1, 0)
  push(0, height - 1)
  push(width - 1, height - 1)

  let cleared = 0
  while (stack.length) {
    const p = stack.pop()
    const i = p * channels
    const d = dist(i)
    if (d >= FEATHER) continue
    const t = d <= TOL ? 1 : (FEATHER - d) / (FEATHER - TOL)
    data[i + 3] = Math.round(data[i + 3] * (1 - t))
    cleared++
    const x = p % width
    const y = (p / width) | 0
    push(x - 1, y)
    push(x + 1, y)
    push(x, y - 1)
    push(x, y + 1)
  }

  const pct = ((cleared / (width * height)) * 100).toFixed(1)
  console.log(`Daire dışı ${hex(bg)} şeffaflaştırıldı (%${pct} piksel)`)
  return sharp(data, { raw: { width, height, channels } })
    .png()
    .toBuffer()
}

// Daire içindeki kremi hedef renge çeker. Kaynak kremi yazı olmayan bir
// noktadan okunur, böylece logo yenilenirse script kendini ayarlar.
async function recolorPaper(buf, targetHex) {
  const to = [1, 3, 5].map((i) => parseInt(targetHex.slice(i, i + 2), 16))
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info

  const s = (Math.round(height * 0.22) * width + Math.round(width * 0.5)) * channels
  const from = [data[s], data[s + 1], data[s + 2]]
  const delta = to.map((v, i) => v - from[i])
  if (delta.every((d) => d === 0)) {
    console.log(`Krem zemin zaten ${targetHex}`)
    return buf
  }

  const TOL = 10
  const FEATHER = 24
  let touched = 0
  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] === 0) continue
    const d = Math.max(
      Math.abs(data[i] - from[0]),
      Math.abs(data[i + 1] - from[1]),
      Math.abs(data[i + 2] - from[2])
    )
    if (d >= FEATHER) continue
    const t = d <= TOL ? 1 : (FEATHER - d) / (FEATHER - TOL)
    for (let ch = 0; ch < 3; ch++) {
      data[i + ch] = Math.max(0, Math.min(255, Math.round(data[i + ch] + delta[ch] * t)))
    }
    touched++
  }

  const pct = ((touched / (width * height)) * 100).toFixed(1)
  console.log(`Krem zemin: ${hex(from)} → ${targetHex} (%${pct} piksel)`)
  return sharp(data, { raw: { width, height, channels } })
    .png()
    .toBuffer()
}

function hex(a) {
  return '#' + a.map((v) => v.toString(16).padStart(2, '0')).join('')
}
