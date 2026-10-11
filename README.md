# Han Kebap & Steakhouse 🥩✨

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/goktugis/han-kebap-steakhouse)
![License: MIT](https://img.shields.io/badge/License-MIT-d4af37.svg)
![Status](https://img.shields.io/badge/Status-Live-success.svg)

> **Ateşin ve Ustalığın Asil Buluşması**  
> Geleneksel Türk kebap mirası ile modern kuru dinlendirilmiş (*dry-aged*) biftek kültürünü quiet luxury estetiğiyle harmanlayan üst segment gastronomi platformu.

---

## 🌟 Öne Çıkan Özellikler

### 🥩 İnteraktif Biftek Pişme Rehberi
* **Gerçek Gastronomi Çekimleri:** Yapay renk filtreleri yerine 5 farklı pişme derecesi (*Rare, Medium Rare, Medium, Medium Well, Well Done*) için özel hazırlanmış yüksek çözünürlüklü kesit fotoğrafları.
* **Hassas İç Isı ve Doku Metrikleri:** Her dereceye özel ideal fırın/ızgara iç sıcaklıkları, yumuşaklık ve sululuk oranları.
* **Sommelier Eşleşmeleri:** Seçilen pişme derecesi ve et karakterine göre uzman kav önerileri.
* **Akıcı Geçiş Deneyimi:** Preload mimarisiyle sıfır gecikmeli, yumuşak görsel geçiş efektleri.

### 🍽️ Küratörlü Fine Dining Menüsü
* **Michelin Standartlarında Sunum:** Kategori filtreli (İmza Tabaklar, Dry-Aged Seçkisi, Odun Ateşi Kebaplar, Başlangıç & Meze).
* **Menşe ve Olgunlaştırma Notları:** Trakya çiftliği, Balıkesir düve, 28 gün Himalayan tuz odası dinlendirme ve meşe tütsüsü detayları.

### 🍷 Ambiyans & Zanaat
* **Himalayan Pembe Tuz Odası:** Özel mikro-klima kuru dinlendirme süreçlerinin görsel anlatımı.
* **Meşe Kömürü & Döküm Izgara:** Etin dinlendirilmesinden mühürlenmesine uzanan ustalık felsefesi.

### 📅 VIP Rezervasyon Deneyimi
* Misafir sayısı, tarih, saat ve özel pişme/kutlama notlarını toplayan pratik ve zarif rezervasyon arayüzü.

### 📱 Kusursuz Mobil Deneyim
* Dokunmatik jestler, hamburger navigasyon, hızlı yatay kaydırma sekmeleri ve tüm ekran boyutlarına uyumlu responsive mimari.

---

## 🛠️ Teknoloji Mimarisi

* **Arayüz (Frontend):** Semantik HTML5, Modern CSS3 (CSS Custom Properties, Glassmorphism, CSS Grid & Flexbox)
* **Dinamik Mantık:** Saf Vanilla JavaScript (ES6+ Modüler Yapı, Event Delegation, Dinamik DOM Manipülasyonu)
* **Sunucu (Backend):** Hafif ve bağımlılıksız yerel Node.js HTTP Server (`server.js`)
* **Dağıtım (Deployment):** Render altyapısı ile tek tıkla otomatik CI/CD entegrasyonu (`render.yaml`)

---

## 📂 Proje Yapısı

```
han-kebap-steakhouse/
├── assets/
│   └── images/               # Yüksek çözünürlüklü fotoğraflar ve marka varlıkları
│       ├── steak_rare.jpg
│       ├── steak_medium_rare.jpg
│       ├── steak_medium.jpg
│       ├── steak_medium_well.jpg
│       └── steak_well_done.jpg
├── index.html                # Ana sayfa ve semantik içerik yapısı
├── styles.css                # Tasarım sistemi, tipografi ve animasyonlar
├── app.js                    # İnteraktif pişme rehberi, filtreler ve modal mantığı
├── server.js                 # Statik dosya sunucusu
├── render.yaml               # Render otomatik dağıtım yapılandırması
├── package.json              # Paket ve script tanımları
└── README.md                 # Proje dokümantasyonu
```

---

## 🚀 Hızlı Başlangıç (Lokal Kurulum)

Projeyi bilgisayarınızda yerel olarak çalıştırmak için:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/goktugis/han-kebap-steakhouse.git
   cd han-kebap-steakhouse
   ```

2. Sunucuyu başlatın:
   ```bash
   npm start
   # veya
   node server.js
   ```

3. Tarayıcınızda açın:
   ```
   http://localhost:3000
   ```

---

## ☁️ Canlıya Alma (Deployment)

Proje, Render platformu için önceden yapılandırılmıştır.

1. Yukarıdaki **Deploy to Render** butonuna tıklayın veya [Render Dashboard](https://dashboard.render.com/) üzerinden bu depoyu seçin.
2. `render.yaml` dosyası otomatik olarak algılanır ve statik servis yayına alınır.
3. Birkaç dakika içinde projeniz global CDN üzerinden canlıya geçer.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır.
