# Heren Doğa Anaokulu — web sitesi

Doğa temelli anaokulu için Vite + React (React Router) ile hazırlanmış çok
sayfalı tanıtım sitesi. Tasarım: "doğanın içinde bir masal çayırı" — logodan
türeyen sıcak palet, süzülen hikâye kitabı kapakları ve iletişim formu.

## Sayfalar

- `/` **Anasayfa** — hero (logo), gelişim alanları, kitaplık, kapanış daveti
- `/hakkimizda` **Hakkımızda** — felsefe şiiri + vizyon/yaklaşım/uygulama
- `/yaklasimimiz` **Yaklaşımımız** — Montessori/Waldorf/Reggio kartları + günümüz
- `/kitaplik` **Kitaplığımız** — tüm kitap kapakları
- `/iletisim` **İletişim** — iletişim & ön kayıt formu

Sayfalar `src/pages/`, ortak bölümler `src/components/` içinde.
`public/_redirects` çok sayfalı yayında (Netlify) derin linklerin çalışmasını
sağlar; Vercel için `vercel.json` rewrite kuralı gerekebilir.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # dist/ klasörüne yayına hazır çıktı
npm run preview  # build çıktısını önizle
```

## İçeriği düzenleme

Neredeyse tüm metin ve ayarlar tek dosyada: **`src/data.js`**
- `OKUL` → okul adı, telefon, e-posta, adres, Instagram (şu an yer tutucu — gerçek bilgilerle değiştirin)
- `YAKLASIMLAR`, `GELISIM`, `GUNUMUZ`, `SLOGANLAR` → bölüm içerikleri
- `KITAPLAR`, `HERO_KITAPLAR` → gösterilecek kitap kapakları

## Görseller

- Kaynak görseller `photos/` içinde.
- `scripts/optimize-images.mjs` bunları `public/kitaplar/` içine webp olarak
  küçültür (`<id>.webp` galeri, `<id>-sm.webp` süzülen). Yeni görsel eklerseniz
  `node scripts/optimize-images.mjs` komutunu tekrar çalıştırın.

## İletişim formu

Form, **FormSubmit.co** üzerinden `src/data.js → OKUL.eposta` adresine gerçek
e-posta gönderir (sunucu/kayıt gerekmez).

**Kurulum (tek seferlik):**
1. `src/data.js` içinde `OKUL.eposta` değerini **gerçek** alıcı adresle
   değiştirin (ör. `info@herendoga.com`).
2. Siteyi yayınlayın ve formdan **bir test mesajı** gönderin.
3. FormSubmit, bu adrese bir **aktivasyon e-postası** yollar; içindeki bağlantıya
   bir kez tıklayın. Bundan sonra tüm form mesajları bu adrese düşer.

Alıcı adresi değiştirmek için tek yapmanız gereken `OKUL.eposta`'yı güncellemek —
form otomatik olarak yeni adrese gönderir. Bal küpü (`_gotcha`) alanı spam'i azaltır.

---
Tasarım & geliştirme: **Tasarloji**
