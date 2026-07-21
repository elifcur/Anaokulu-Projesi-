// Tüm site içeriği tek yerde — düzenlemesi kolay olsun diye.

export const OKUL = {
  ad: 'Heren Doğa Anaokulu',
  adTam: 'Özel Heren Doğa Anaokulu',
  slogan: 'Doğanın içinde, çocuğun ritminde.',
  telefon: '+90 (___) ___ __ __',
  eposta: 'info@herendoga.com',
  adres: 'Adres bilgisi buraya',
  instagram: '@herendoga',
}

// Kahraman bölümdeki büyük şiir (1. metin, kısaltılmış çekirdek)
export const HERO = {
  ustBaslik: 'Doğa temelli okul öncesi eğitim',
  satirlar: ['Çocukluk bir yarış değil,', 'yaşanması gereken bir dönemdir.'],
  altYazi:
    'Montessori’nin bağımsızlığını, Waldorf’un hayal gücünü ve Reggio Emilia’nın keşfini; doğayla ve oyunla buluşturuyoruz.',
}

// Manifesto — 1. metnin tam şiiri
export const MANIFESTO = {
  baslik: 'Her çocuk, dünyayı dokunarak öğrenir',
  dizeler: [
    'Toprağa basarak, oyun oynayarak, merak ederek…',
    'Biz çocukların sadece büyümesini değil,',
    'hayatı tanımasını önemsiyoruz.',
    '',
    'Bu yüzden burada çocuklar tabldot sırasına girmez.',
    'Gerçek tabaklardan yemek yer, cam bardaktan su içer,',
    'sofrasını kurmayı öğrenir.',
    'Bir tohumu toprağa eker, arkadaşını dinler;',
    'beklemeyi, paylaşmayı, üretmeyi deneyimler.',
  ],
}

// Hakkımızda sayfası içeriği
export const HAKKIMIZDA = {
  girisBaslik: 'Biz bir okuldan fazlasını hayal ettik',
  giris:
    'Çocukların doğadan kopmadığı, oyunun eğitimden ayrılmadığı, merakın susturulmadığı bir yer… Burada çocuklar sadece dinlemez; dener, yaşar, hisseder. Çünkü gerçek öğrenme, hayatın içindedir.',
  bloklar: [
    {
      etiket: 'Vizyonumuz',
      baslik: 'Eklektik ve çocuk merkezli bir kültür',
      metin:
        'Çağdaş okul öncesi modelleri ile uluslararası düzeyde kabul görmüş alternatif yaklaşımları (Reggio Emilia, Waldorf, Montessori) sentezliyoruz. Bu yaklaşımların çocuğu en çok besleyen niteliklerini, MEB Okul Öncesi Eğitim Programı kazanımlarıyla bütünleştirerek tek bir kalıba bağlı kalmadan özgün bir eğitim kültürü kuruyoruz.',
    },
    {
      etiket: 'Yaklaşımımız',
      baslik: 'Bütüncül bir gelişim',
      metin:
        'Amacımız standart bir kalıp sunmak değil; çocukların merak, araştırma, doğa bilinci ve kendini ifade etme becerilerini geliştirmektir. Ortamımız yalnızca bilişsel değil; duygusal, sosyal, fiziksel ve yaratıcı gelişimi de bütüncül olarak destekleyen, güvenli ve ritimli bir yapıya sahiptir.',
    },
    {
      etiket: 'Uygulamamız',
      baslik: 'Süreç ve ilişki odaklı değerlendirme',
      metin:
        'Doğa temelli öğrenme, sanat, hareket, duyusal keşif ve günlük yaşam deneyimleri programımızın temelidir. Her çocuğun gelişim hızının farklı olduğu bilinciyle; gözlem temelli, süreç ve ilişki odaklı, keşfetmeye alan tanıyan bir değerlendirme yöntemi benimseriz.',
    },
  ],
  alinti:
    'Bir çocuğa ne öğrettiğimiz kadar, ona nasıl bir dünya sunduğumuz da önemlidir. Bizim dünyamızda çocuklar acele ettirilmez; merak bastırılmaz, beslenir. Çünkü güçlü bireyler, sevgi ve güven içinde büyür.',
  degerler: [
    'Doğayla temas',
    'Kendi ritminde büyüme',
    'Bağımsızlık ve özgüven',
    'Merakı besleyen ortam',
    'Oyunla öğrenme',
    'Güvenli bir yuva',
  ],
}

// Eğitim yaklaşımı kartları
export const YAKLASIMLAR = [
  {
    ad: 'Montessori',
    ozet: 'Bağımsızlık ve özdisiplin',
    metin:
      'Çocuk kendi işini kendisi yapar. Düzenli ortam, gerçek yaşam becerileri ve “bırak ben yapayım” özgüveni.',
    renk: 'terra',
  },
  {
    ad: 'Waldorf',
    ozet: 'Hayal gücü ve iç dünya',
    metin:
      'Doğayla uyumlu, ritimli bir gün. Masal, sanat ve oyunla beslenen zengin bir hayal dünyası.',
    renk: 'green',
  },
  {
    ad: 'Reggio Emilia',
    ozet: 'Keşif ve yaratıcılık',
    metin:
      'Çocuğun sorusu programın merkezindedir. Proje temelli keşif, gözlem ve kendini ifade etme.',
    renk: 'gold',
  },
  {
    ad: 'Doğa + Oyun',
    ozet: 'İyileştiren zemin',
    metin:
      'Bahçe, toprak ve mevsimler bir sınıftır. Duyusal keşif ve oyunun iyileştirici gücü her günün içinde.',
    renk: 'sage',
  },
]

// Anasayfa ikon kartları (dairesel ikonlu özellik satırı)
export const FEATURES = [
  {
    icon: 'shield',
    renk: 'green',
    baslik: 'Güvenli & Sevgi Dolu Ortam',
    metin: 'Her çocuk için güvenli ve sıcak bir yuva.',
  },
  {
    icon: 'book',
    renk: 'gold',
    baslik: 'Oyunla Öğrenme',
    metin: 'Merakı besleyen, uygulamalı öğrenme.',
  },
  {
    icon: 'people',
    renk: 'sky',
    baslik: 'Deneyimli Eğitmenler',
    metin: 'Gelişime adanmış, şefkatli öğretmenler.',
  },
  {
    icon: 'sprout',
    renk: 'terra',
    baslik: 'Bütüncül Gelişim',
    metin: 'Akademik, sosyal ve duygusal büyüme.',
  },
  {
    icon: 'heart',
    renk: 'sage',
    baslik: 'Güçlü Aile İş Birliği',
    metin: 'Birlikte sağlam bir gelecek inşa ederiz.',
  },
]

// Bütüncül gelişim alanları
export const GELISIM = [
  { ad: 'Bilişsel', icon: 'brain' },
  { ad: 'Duygusal', icon: 'heart' },
  { ad: 'Sosyal', icon: 'people' },
  { ad: 'Fiziksel', icon: 'run' },
  { ad: 'Yaratıcı', icon: 'spark' },
]

// Günün içinden — deneyim şeritleri (video sahnelerinden)
export const GUNUMUZ = [
  { baslik: 'Doğayla Öğrenmek', metin: 'Bahçede, toprakta, mevsimin içinde.' },
  { baslik: 'Bağımsız Keşif', metin: 'Kendi materyaliyle, kendi ritminde.' },
  { baslik: 'Şefkatli Eğitim', metin: 'Dinlenen, cesaretlendirilen bir çocuk.' },
  { baslik: 'Güvenli Bir Yuva', metin: 'Kalbi güvende olan çocuk güçlü başlar.' },
]

// Kayan slogan bandı
export const SLOGANLAR = [
  'Doğanın içinde, çocuğun ritminde.',
  'Hayatı yaşayarak öğrenen çocuklar.',
  'Çocukluk burada acele etmez.',
  'Köklenen çocuklar, özgürce büyür.',
  'Oyunla, doğayla, yaşamla öğrenmek.',
  'Her çocuk kendi ritminde büyür.',
  'Bağımsızlık küçük yaşta başlar.',
  'Öğrenmek sadece masa başında değildir.',
]

// Kapanış cümlesi
export const KAPANIS = {
  baslik: 'Çocuklar için güvenli bir yuva,\naileler için güçlü bir gelecek.',
  metin:
    'Doğa, oyun ve keşif temelli eğitim anlayışımızla çocukların hem kalbini hem zihnini besliyoruz. Çünkü güçlü bireyler, sevgi ve güven içinde büyür.',
}

// Kitaplık — optimize edilmiş kapaklar (public/kitaplar/<id>.webp)
export const KITAPLAR = [
  '6bce82ae-64d0-4b63-9597-f86e1172941f', // Aç Tırtıl
  '2fad74c7-9400-49df-9bbf-51477274aef8', // Renk Canavarı
  '44206dd4-30a5-43d8-9ec4-a965f0e66b91', // Minik Tohum
  'd170f5a5-1376-4a37-871d-c159d4de2019', // Frederick
  '05a33669-40b8-429a-900f-b46a4595033d', // Yayazula
  '5819ce0e-2967-4b06-8c73-a6c2bed95bad', // Bukalemun
  '99e9efc4-1bda-42fd-a89c-552badd2e87e', // Mutlu Suaygırı
  '89587aa7-cf2a-4c9f-a2ca-5b384ac9afd9', // Hopi
  '375e3788-3923-452b-ba3b-840333ccc13e', // Sihirli Ağaç
  'c28cb1fb-cec3-4fe6-b686-ad464585280e', // Sarılalım mı
  '20231bcd-d4e1-4052-b0cb-ab900eef133d', // Tavşanlar & kitap
  '3ba3dcee-459b-496c-98c6-2311ef60fbeb', // Nokta
  '7260302d-057d-4afe-9df4-78191a3fbdb4', // Ağaca Tırmanan İnek
  '50ef9c12-e794-4010-a8d8-15d8f76b5bcf', // Utangaç Ayı Monti
  'd4fb264b-7df8-45cf-8c2c-9793e9cb9f06', // Panda okul
  'f2c20b05-e989-4923-9064-a422cd16404f', // Balina
  '9b302a62-ac6e-4e4f-9273-ee5e5d5c0c84', // Pezzettino
  'fba8fb81-29fa-403d-86c6-374d9a43f970', // Çu Plajda
  '83222baa-08ae-4a6f-8344-5b7c231da618', // Doğum günü bahçe
  '131885de-60b3-4bfc-a5ad-81e7e563e8fd', // Bir Kedi Olsaydım
  '4389d653-ac51-462a-b8c9-a0d5b2b8903f', // Orman sahnesi
  'e85dda27-04b2-42b6-bee4-237286fa48d6', // Balkabakları
  '73433012-a65e-4e98-a7af-3a6fe0a68b90', // Muhteşem Aşçı
  'fd11d8fc-e731-434e-bc07-25cd47460484', // Dedektif Zebra
  '1bab3c59-4015-4ca5-bbc5-f06d5397a254', // Petra
  '6e584ff5-225d-4f15-963c-da7c2089592f', // Kirpi
  'f0d9758e-a7d0-4a5e-9891-7342e972e00e', // Canavarını Besle
  '3a24b491-3cbd-4b7a-b2c6-1545c926c34e', // Karıştır Renklendir
  '7b52d0d8-182b-44c0-9da4-6133b5ad9ec0', // Boşluk
  'bb666282-ecad-4292-809b-6e02340daa1e', // Penguen
]

// Süzülen kahraman kitapları (küçük, dikkat çekici kapaklar)
export const HERO_KITAPLAR = [
  '6bce82ae-64d0-4b63-9597-f86e1172941f',
  '2fad74c7-9400-49df-9bbf-51477274aef8',
  '44206dd4-30a5-43d8-9ec4-a965f0e66b91',
  '05a33669-40b8-429a-900f-b46a4595033d',
  'd170f5a5-1376-4a37-871d-c159d4de2019',
  'c28cb1fb-cec3-4fe6-b686-ad464585280e',
  '50ef9c12-e794-4010-a8d8-15d8f76b5bcf',
  '99e9efc4-1bda-42fd-a89c-552badd2e87e',
]
