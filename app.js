/* ==========================================================================
   HAN KEBAP & STEAKHOUSE - QUIET LUXURY CONTROLLER (v3)
   Simple, Refined & Elegant — Zero Global Image Filters, Precision Meat Tint
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSubtleEmbers();
  initHeaderScroll();
  initPrecisionDonenessSimulator();
  initMenuFilter();
  initReservationModal();
  initFireSoundSynthesis();
  initMobileMenu();
});

/* ==========================================================================
   1. DELICATE & SUBTLE AMBIENT EMBERS (SLOW FLOATING WARM GOLD)
   ========================================================================== */
function initSubtleEmbers() {
  const canvas = document.getElementById('ember-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 20 : 35;

  class SubtleEmber {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 1.5 + 0.6;
      this.speedY = Math.random() * 0.8 + 0.3; // Very slow and gentle
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.life = Math.random() * 180 + 120;
      this.currentLife = 0;
      this.hue = Math.random() > 0.4 ? 40 : 25; // Warm gold to gentle amber
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.currentLife * 0.02) * 0.3;
      this.currentLife++;

      if (this.currentLife > this.life || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 55%, ${this.opacity * (1 - this.currentLife / this.life)})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `hsl(${this.hue}, 90%, 50%)`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new SubtleEmber());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. HEADER SCROLL & NAVIGATION
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });
}

/* ==========================================================================
   3. BİFTEK PİŞME REHBERİ (HER DERECE İÇİN AYRI ÖZGÜN FOTOĞRAF)
   Her pişme derecesi için renk filtresi yerine gerçek gastronomi fotoğrafları.
   ========================================================================== */
const precisionDonenessData = {
  rare: {
    temp: '48°C - 52°C',
    name: 'Az Pişmiş (Rare)',
    desc: 'Dış mühürlemenin ardında etin lifleri sıcak, koyu yakut kırmızısı ve ipeksi yumuşaklıktadır. Doğal et suyu ve saf aroması tamamen muhafaza edilir.',
    image: 'assets/images/steak_rare.jpg',
    pairing: 'Boğazkere veya Cabernet Sauvignon (Yüksek tanenli, gövdeli sek kırmızı)',
    tenderness: 96,
    juiciness: 92
  },
  mediumrare: {
    temp: '54°C - 57°C',
    name: 'Az - Orta (Medium Rare) · Şefin Seçimi',
    desc: 'Biftek gurmelerinin altın standardı. Ortada canlı pembe çekirdek, eriyen yağ dokusu ve karamelize dış kabuğun kusursuz lezzet dengesi.',
    image: 'assets/images/steak_medium_rare.jpg',
    pairing: 'Öküzgözü Rezerv veya Merlot (Dengeli meyvemsi tonlar ve kadifemsi bitiş)',
    tenderness: 92,
    juiciness: 95
  },
  medium: {
    temp: '60°C - 63°C',
    name: 'Orta Pişmiş (Medium)',
    desc: 'Merkezinde dengeli sıcak pembe bir şerit barındırır. Et lifleri kıvamında sıkılaşmış, aromatik meşe tütsüsü etin derinliklerine işlemiştir.',
    image: 'assets/images/steak_medium.jpg',
    pairing: 'Syrah (Şiraz) veya Kalecik Karası (Baharatlı ve tütsülü zengin gövde)',
    tenderness: 80,
    juiciness: 82
  },
  mediumwell: {
    temp: '64°C - 67°C',
    name: 'Orta - İyi Pişmiş (Medium Well)',
    desc: 'Merkezinde çok hafif soluk pembe bir ton kalırken etin büyük kısmı pişmiştir. Dış kabuğun yoğun meşe aroması ve kıvamı öne çıkar.',
    image: 'assets/images/steak_medium_well.jpg',
    pairing: 'Kalecik Karası Rezerv veya Boğazkere (Olgun tanenler ve tütsü uyumu)',
    tenderness: 68,
    juiciness: 65
  },
  welldone: {
    temp: '71°C+',
    name: 'İyi Pişmiş (Well Done)',
    desc: 'İçerisinde pembelik kalmayacak şekilde dinlendirilerek pişirilmiştir. Dış kabuğun meşe gevrekliği ile tam pişmiş, aromatik ve dolgun et lezzeti.',
    image: 'assets/images/steak_well_done.jpg',
    pairing: 'Gövdesi olgun Kalecik Karası veya Nar Ekşili Özel Meşrubat Seçkisi',
    tenderness: 58,
    juiciness: 52
  }
};

function initPrecisionDonenessSimulator() {
  const buttons = document.querySelectorAll('.doneness-tab-btn');
  const tempNumber = document.getElementById('clean-temp-num');
  const nameTitle = document.getElementById('clean-doneness-title');
  const descText = document.getElementById('clean-doneness-desc');
  const photoImg = document.getElementById('steak-natural-img');
  const tendernessFill = document.getElementById('clean-tenderness-fill');
  const juicinessFill = document.getElementById('clean-juiciness-fill');
  const tendernessVal = document.getElementById('clean-tenderness-val');
  const juicinessVal = document.getElementById('clean-juiciness-val');
  const pairingText = document.getElementById('clean-pairing-text');

  if (!buttons.length || !photoImg) return;

  // Preload all doneness images for instant response
  Object.values(precisionDonenessData).forEach(item => {
    if (item.image) {
      const preloadImg = new Image();
      preloadImg.src = item.image;
    }
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const level = btn.dataset.level;
      const data = precisionDonenessData[level];
      if (!data) return;

      // Smooth photo transition with authentic high-res images
      if (data.image) {
        photoImg.style.opacity = '0.35';
        photoImg.style.transform = 'scale(0.985)';
        
        setTimeout(() => {
          photoImg.src = data.image;
          photoImg.alt = `Izgara Biftek Kesiti - ${data.name}`;
          photoImg.style.opacity = '1';
          photoImg.style.transform = 'scale(1)';
        }, 120);
      }

      // Update text & indicators
      if (tempNumber) tempNumber.textContent = data.temp;
      if (nameTitle) nameTitle.textContent = data.name;
      if (descText) descText.textContent = data.desc;
      if (pairingText) pairingText.innerHTML = `<strong>Sommelier Eşleşmesi:</strong> ${data.pairing}`;

      if (tendernessFill) tendernessFill.style.width = `${data.tenderness}%`;
      if (juicinessFill) juicinessFill.style.width = `${data.juiciness}%`;
      if (tendernessVal) tendernessVal.textContent = `%${data.tenderness}`;
      if (juicinessVal) juicinessVal.textContent = `%${data.juiciness}`;
    });
  });
}

/* ==========================================================================
   4. FINE DINING GASTRONOMY MENU (PRICELESS & SOPHISTICATED)
   ========================================================================== */
const luxuryMenuItems = [
  {
    category: 'signatures',
    name: 'Han Tomahawk Ribeye',
    origin: 'Trakya Çiftliği · 1100g',
    desc: 'Himalayan pembe tuz odasında 28 gün olgunlaştırılmış kemikli kaburga antrikot. Masanızda köpüklü tereyağı ve taze biberiye eşliğinde sunulur.',
    tags: ['28 Gün Dry-Aged', 'İmza Sunum', 'BMS 8+'],
    isSignature: true
  },
  {
    category: 'signatures',
    name: 'Dana Kaburga Asado',
    origin: 'Balıkesir Düve · 750g',
    desc: 'Düşük ısıda meşe kömürü dumanında 12 saat ağır ateşte tütsülenmiş, kemiğinden zahmetsizce ayrılan lokum kıvamında dana kaburga.',
    tags: ['12 Saat Meşe Dumanı', 'Ağır Pişirim'],
    isSignature: false
  },
  {
    category: 'signatures',
    name: 'Kuzu Kafes Han Usulü',
    origin: 'Trakya Kıvırcık Kuzusu',
    desc: '8 pirzola kalemi, döküm ızgarada dağ kekiği ve soğuk sıkım zeytinyağı marinasyonuyla nar gibi mühürlenmiş bütün kuzu kafesi.',
    tags: ['Özel Kesim', 'Trakya Kıvırcık'],
    isSignature: true
  },
  {
    category: 'dryaged',
    name: 'Dallas Steak',
    origin: 'Özel Besi Dana Sırtı · 550g',
    desc: 'Kemikli antrikot, Himalayan tuz odası mikro-klimasında 28 gün dinlendirilmiş, yoğun mermerleşme ve fındıksı derin umami lezzeti.',
    tags: ['28 Gün Dry-Aged', 'Kemikli Antrikot'],
    isSignature: false
  },
  {
    category: 'dryaged',
    name: 'T-Bone & Porterhouse',
    origin: 'Marmara Damızlık Dana · 650g',
    desc: 'Bir tarafında ipeksi bonfile yaprağı, diğer tarafında zengin lezzetli kontrfile. Yüksek ateşte döküm mühürleme.',
    tags: ['24 Gün Dry-Aged', 'İki Ayrı Doku'],
    isSignature: true
  },
  {
    category: 'dryaged',
    name: 'Han Lokum Bonfile',
    origin: 'Körpe Dana Bonfile · 320g',
    desc: 'Yağsız, yaprak şeklinde özel dilimlenmiş pamuksu bonfile. Cızırdayan eritilmiş tereyağı sahanında masada son dokunuş.',
    tags: ['Masada Servis', 'Tereyağlı'],
    isSignature: false
  },
  {
    category: 'kebaps',
    name: 'Zırh Kıyması Han Kebap',
    origin: 'Gaziantep Zırh Ocağı',
    desc: 'Erkek kuzu döş ve dana boşluğundan elde zırhla çekilmiş saf kıyma. Urfa isotu, köz sarımsak, tırnak pide ve sumaklı taş fırın soğanıyla.',
    tags: ['El Zırhı', 'Odun Ateşi'],
    isSignature: true
  },
  {
    category: 'kebaps',
    name: 'Alinazik Bonfile Kebabı',
    origin: 'Anadolu Saray Mutfağı',
    desc: 'Közlenmiş patlıcanlı süzme manda yoğurdu yatağında, kömür ateşinde mühürlenmiş tereyağlı bonfile küpleri ve köpük tereyağı.',
    tags: ['Köz Patlıcan', 'Bonfile'],
    isSignature: false
  },
  {
    category: 'kebaps',
    name: 'Küşleme & Şiş Düeti',
    origin: 'Trakya Kıvırcık Kuzusu',
    desc: 'Kuzunun en nadide parçası küşleme, marine edilmiş kuzu but lokumları ve közlenmiş çeri domatesler ile canlı kömür mangalında.',
    tags: ['Nadir Kesim', 'Köz Mangal'],
    isSignature: false
  },
  {
    category: 'starters',
    name: 'Fırınlanmış İlikli Kemik',
    origin: 'Odun Fırını Ekmek Seçkisi',
    desc: 'Köz ateşinde kızartılmış kemik iliği, maydanozlu kapari salatası ve odun fırınından çıkan taze sıcak ekşi mayalı köy ekmeği.',
    tags: ['Fırınlanmış', 'Gurme Başlangıç'],
    isSignature: true
  },
  {
    category: 'starters',
    name: 'Trüflü Sıcak Humus & Pastırma',
    origin: 'Kayseri Antrikot Pastırması',
    desc: 'Çemenli antrikot pastırması, taze trüf yağı ve kavrulmuş Antep dolmalık fıstığı ile toprak güveçte sıcak servis edilir.',
    tags: ['Sıcak Meze', 'Trüf Yağı'],
    isSignature: false
  },
  {
    category: 'desserts',
    name: 'Közde Hatay Künefesi',
    origin: 'Antakya Tuzsuz Peyniri',
    desc: 'Özel tuzsuz peynirli, meşe kömürü közünde ağır ağır çevrilerek pişirilen çıtır künefe, keçi sütlü hakiki Maraş dövme dondurması ile.',
    tags: ['Közde Pişirim', 'Maraş Dondurması'],
    isSignature: true
  }
];

function initMenuFilter() {
  const container = document.getElementById('menu-clean-grid-target');
  const tabs = document.querySelectorAll('.menu-clean-tab-btn');
  if (!container || !tabs.length) return;

  function renderMenu(category = 'all') {
    container.innerHTML = '';
    const filtered = category === 'all'
      ? luxuryMenuItems
      : luxuryMenuItems.filter(item => item.category === category);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-clean-card';
      card.innerHTML = `
        <div class="menu-card-top">
          <h4 class="menu-dish-title">${item.name}</h4>
          <span class="menu-dish-origin">${item.origin}</span>
        </div>
        <p class="menu-dish-desc">${item.desc}</p>
        <div class="menu-dish-meta-row">
          <div class="menu-dish-tags">
            ${item.tags.map(t => `<span class="menu-tag-pill ${item.isSignature ? 'signature' : ''}">${t}</span>`).join('')}
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.category);
    });
  });

  renderMenu('all');
}

/* ==========================================================================
   5. VIP RESERVATION MODAL & TOAST
   ========================================================================== */
function initReservationModal() {
  const modal = document.getElementById('reservation-modal');
  const openButtons = document.querySelectorAll('.open-reservation-modal');
  const closeBtn = document.querySelector('.modal-close-btn');
  const form = document.getElementById('reservation-form');
  const toast = document.getElementById('toast-notice');
  const seatingOptions = document.querySelectorAll('.seating-radio-btn');

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  seatingOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      seatingOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const hiddenInput = document.getElementById('selected-seating');
      if (hiddenInput) hiddenInput.value = opt.dataset.area;
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('res-name')?.value || 'Misafirimiz';
      const guests = document.getElementById('res-guests')?.value || '2 Kişilik';
      const date = document.getElementById('res-date')?.value || 'Tarih Belirtildi';
      const time = document.getElementById('res-time')?.value || '20:00';
      const refCode = 'HK-' + Math.floor(1000 + Math.random() * 9000);

      closeModal();
      form.reset();

      if (toast) {
        const toastTitle = toast.querySelector('.toast-title');
        const toastText = toast.querySelector('.toast-text');
        if (toastTitle) toastTitle.textContent = `Rezervasyon Onaylandı [${refCode}]`;
        if (toastText) toastText.textContent = `Sayın ${name}, ${date} saat ${time} için ${guests} masanız ayrılmıştır.`;

        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 6000);
      }
    });
  }
}

/* ==========================================================================
   6. SUBTLE AMBIENT HEARTH SOUND (WEB AUDIO API)
   ========================================================================== */
function initFireSoundSynthesis() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let noiseNode = null;
  let gainNode = null;
  let crackleInterval = null;

  function createNoiseBuffer(ctx) {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.0;
    }
    return buffer;
  }

  function startFireSound() {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const buffer = createNoiseBuffer(audioCtx);
      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.14, audioCtx.currentTime + 1.2);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      noiseNode.start();

      crackleInterval = setInterval(() => {
        if (!isPlaying || !audioCtx) return;
        if (Math.random() > 0.45) {
          const osc = audioCtx.createOscillator();
          const popGain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(500 + Math.random() * 1200, audioCtx.currentTime);
          popGain.gain.setValueAtTime(0.05 + Math.random() * 0.06, audioCtx.currentTime);
          popGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
          osc.connect(popGain);
          popGain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.05);
        }
      }, 110);

      isPlaying = true;
      toggleBtn.classList.add('playing');
      toggleBtn.setAttribute('title', 'Ambiyans Sesini Kapat');
    } catch (err) {
      console.warn('Audio API init error:', err);
    }
  }

  function stopFireSound() {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
      setTimeout(() => {
        if (noiseNode) noiseNode.stop();
        if (audioCtx) audioCtx.close();
        clearInterval(crackleInterval);
        isPlaying = false;
        toggleBtn.classList.remove('playing');
        toggleBtn.setAttribute('title', 'Ambiyans Sesini Aç');
      }, 600);
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startFireSound();
    } else {
      stopFireSound();
    }
  });
}
