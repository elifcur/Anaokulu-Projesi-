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
    'Doğa, oyun ve keşif temelli eğitim anlayışımızla çocukların hem kalbini hem zihnini besliyoruz. Doğadan ilham alan okul öncesi eğitim.',
}

// Kitaplık — optimize edilmiş kapaklar (public/kitaplar/<ad>.webp)
export const KITAPLAR = [
  'ac-tirtil', // Aç Tırtıl
  'renk-canavari', // Renk Canavarı
  'minik-tohum', // Minik Tohum
  'frederick', // Frederick
  'yayazula', // Yayazula
  'bukalemun', // Kafası Karışık Bukalemun
  'mutlu-suaygiri', // Mutlu Suaygırı
  'hopi', // Küçük Cesur Tavşan Hopi
  'sihirli-agac', // Dokun Sihirli Ağaca
  'sarilalim-mi', // Sarılalım mı?
  'tavsanlar-kitap', // Tavşanlar & kitap
  'nokta', // Nokta
  'agaca-tirmanan-inek', // Ağaca Tırmanan İnek
  'utangac-ayi-monti', // Utangaç Ayı Monti
  'panda-okul', // Panda'nın ilk okul günü
  'balina', // Balina
  'pezzettino', // Pezzettino
  'cu-plajda', // Çu Plajda
  'dogum-gunu', // Doğum günü bahçe
  'bir-kedi-olsaydim', // Bir Kedi Olsaydım
  'orman', // Orman sahnesi
  'balkabaklari', // Balkabakları
  'muhtesem-asci', // Muhteşem Aşçı
  'dedektif-zebra', // Dedektif Zebra
  'petra', // Petra
  'kirpi', // Kirpi
  'canavarini-besle', // Canavarını Besle
  'karistir-renklendir', // Karıştır Renklendir
  'bosluk', // Boşluk
  'penguen-bir-milyon', // Bir Milyon Ne Kadar Büyük (penguen)
]

// Süzülen kahraman kitapları (küçük, dikkat çekici kapaklar)
export const HERO_KITAPLAR = [
  'ac-tirtil',
  'renk-canavari',
  'minik-tohum',
  'yayazula',
  'frederick',
  'sarilalim-mi',
  'utangac-ayi-monti',
  'mutlu-suaygiri',
]
