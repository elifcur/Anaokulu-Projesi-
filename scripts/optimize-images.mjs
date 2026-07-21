import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { join, parse } from 'node:path'

const SRC = 'images'
const OUT = 'public/kitaplar'
// Logo files to skip (handled separately)
const SKIP = new Set(['logo-heren.jpg', 'yayinevi-logo.jpg'])

await mkdir(OUT, { recursive: true })
const files = (await readdir(SRC)).filter(
  (f) => /\.(png|jpe?g)$/i.test(f) && !SKIP.has(f)
)

let i = 0
const manifest = []
for (const file of files) {
  const { name } = parse(file)
  const src = join(SRC, file)
  const meta = await sharp(src).metadata()
  const orientation =
    meta.width > meta.height ? 'yatay' : meta.width < meta.height ? 'dikey' : 'kare'

  // Gallery size ~900px longest edge
  await sharp(src)
    .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(OUT, `${name}.webp`))

  // Small floating size ~380px
  await sharp(src)
    .resize({ width: 380, height: 380, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join(OUT, `${name}-sm.webp`))

  manifest.push({ id: name, orientation, w: meta.width, h: meta.height })
  i++
  process.stdout.write(`\r${i}/${files.length} ${file.slice(0, 20)}...            `)
}

// Also optimize the logo to a transparent-friendly webp + png passthrough
console.log(`\nDone: ${i} covers -> ${OUT}`)
console.log(JSON.stringify(manifest.map((m) => m.id)))
