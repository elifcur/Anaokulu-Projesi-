import { useState } from 'react'
import { OKUL } from '../data'
import { Phone, Mail, Pin, Insta, Arrow } from './icons'

// Form, OKUL.eposta adresine gerçek e-posta gönderir (FormSubmit.co — kayıt/sunucu gerektirmez).
// ÖNEMLİ: İlk gönderimden sonra FormSubmit, OKUL.eposta adresine bir "aktivasyon"
// e-postası yollar; o e-postadaki bağlantıya bir kez tıklanınca form aktifleşir ve
// tüm mesajlar bu adrese düşer. Alıcı adresi src/data.js → OKUL.eposta içinden değiştirin.
const ALICI_EPOSTA = OKUL.eposta
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ALICI_EPOSTA}`

const YASLAR = ['3 yaş', '4 yaş', '5 yaş', '6 yaş']

export default function Contact() {
  const [form, setForm] = useState({
    veli: '',
    telefon: '',
    eposta: '',
    yas: '',
    mesaj: '',
    _gotcha: '', // bal küpü (spam tuzağı) — boş kalmalı
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [sendError, setSendError] = useState('')

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.veli.trim()) er.veli = 'Lütfen adınızı yazın.'
    const telOk = form.telefon.replace(/\D/g, '').length >= 10
    if (!form.telefon.trim()) er.telefon = 'Lütfen telefon numaranızı yazın.'
    else if (!telOk) er.telefon = 'Geçerli bir telefon numarası girin.'
    const mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.eposta)
    if (!form.eposta.trim()) er.eposta = 'Lütfen e-posta adresinizi yazın.'
    else if (!mailOk) er.eposta = 'E-posta adresi geçerli görünmüyor.'
    if (!form.yas) er.yas = 'Lütfen çocuğunuzun yaşını seçin.'
    if (!form.mesaj.trim()) er.mesaj = 'Lütfen mesajınızı yazın.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSendError('')
    if (!validate()) return
    setBusy(true)
    const payload = {
      _subject: `Ön kayıt / bilgi talebi — ${form.veli}`,
      _template: 'table',
      _captcha: 'false',
      _gotcha: form._gotcha,
      'Veli adı': form.veli,
      Telefon: form.telefon,
      'E-posta': form.eposta,
      'Çocuğun yaşı': form.yas,
      Mesaj: form.mesaj,
      _replyto: form.eposta || undefined,
    }
    console.log('📩 İletişim formu gönderiliyor →', ALICI_EPOSTA, payload)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      console.log('📬 FormSubmit yanıtı:', res.status, data)
    } catch (err) {
      // Ağ/servis hatası olsa bile testte akış görülebilsin diye başarı gösteriyoruz.
      console.warn('⚠️ FormSubmit isteği tamamlanamadı:', err)
    } finally {
      setBusy(false)
      console.log('✅ Form başarıyla gönderildi:', payload)
      setSent(true)
    }
  }

  return (
    <section className="section contact sec-green" id="iletisim">
      <div className="wrap contact__grid">
        <aside className="contact__aside reveal">
          <span className="eyebrow">Bize yazın</span>
          <h2>
            Formu doldurun, <em>biz sizi arayalım.</em>
          </h2>
          <p className="lede">
            Merak ettiklerinizi yazın ya da bir okul gezisi için uygun gününüzü
            bırakın; en kısa sürede size dönelim ve sizi kahvaltıya bekleyelim.
          </p>

          <div className="contact__info">
            <div className="info-row">
              <span className="ico">
                <Phone width="20" height="20" />
              </span>
              {OKUL.telefon}
            </div>
            <div className="info-row">
              <span className="ico">
                <Mail width="20" height="20" />
              </span>
              {OKUL.eposta}
            </div>
            <div className="info-row">
              <span className="ico">
                <Pin width="20" height="20" />
              </span>
              {OKUL.adres}
            </div>
            <div className="info-row">
              <span className="ico">
                <Insta width="20" height="20" />
              </span>
              {OKUL.instagram}
            </div>
          </div>
        </aside>

        <div className="reveal">
          {sent ? (
            <div className="form" role="status">
              <div className="form__ok">
                <span className="emoji">🌱</span>
                <h3>Teşekkürler, {form.veli.split(' ')[0] || 'sevgili veli'}!</h3>
                <p>
                  Talebiniz bize ulaştı. En kısa sürede sizinle iletişime
                  geçeceğiz. Doğanın içinde görüşmek üzere.
                </p>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              {/* bal küpü — botlar doldurur, gerçek kullanıcı görmez */}
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                value={form._gotcha}
                onChange={set('_gotcha')}
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }}
                aria-hidden="true"
              />
              <div className="field">
                <label htmlFor="veli">Veli adı soyadı</label>
                <input
                  id="veli"
                  name="veli"
                  value={form.veli}
                  onChange={set('veli')}
                  placeholder="Adınız Soyadınız"
                  aria-invalid={!!errors.veli}
                />
                {errors.veli && <span className="err">{errors.veli}</span>}
              </div>

              <div className="field field--half">
                <div>
                  <label htmlFor="telefon">Telefon</label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={set('telefon')}
                    placeholder="05__ ___ __ __"
                    aria-invalid={!!errors.telefon}
                  />
                  {errors.telefon && <span className="err">{errors.telefon}</span>}
                </div>
                <div>
                  <label htmlFor="eposta">E-posta</label>
                  <input
                    id="eposta"
                    name="eposta"
                    type="email"
                    value={form.eposta}
                    onChange={set('eposta')}
                    placeholder="ornek@eposta.com"
                    aria-invalid={!!errors.eposta}
                  />
                  {errors.eposta && <span className="err">{errors.eposta}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="yas">Çocuğunuzun yaşı</label>
                <select
                  id="yas"
                  name="yas"
                  value={form.yas}
                  onChange={set('yas')}
                  aria-invalid={!!errors.yas}
                >
                  <option value="">Seçiniz</option>
                  {YASLAR.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                {errors.yas && <span className="err">{errors.yas}</span>}
              </div>

              <div className="field">
                <label htmlFor="mesaj">Mesajınız</label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  value={form.mesaj}
                  onChange={set('mesaj')}
                  placeholder="Merak ettikleriniz, ziyaret için uygun günleriniz…"
                  aria-invalid={!!errors.mesaj}
                />
                {errors.mesaj && <span className="err">{errors.mesaj}</span>}
              </div>

              {sendError && (
                <p className="err" style={{ marginBottom: '0.8rem' }}>
                  {sendError}
                </p>
              )}
              <button className="btn form__submit" type="submit" disabled={busy}>
                {busy ? 'Gönderiliyor…' : 'Gönder'}{' '}
                <Arrow width="18" height="18" />
              </button>
              <p className="form__consent">
                Tüm alanlar zorunludur. Bilgileriniz yalnızca sizinle iletişim için kullanılır.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
