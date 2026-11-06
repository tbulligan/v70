// Valdo 70-mečio prezentacijos variklis
class Presentation {
  constructor(data) {
    this.slides = data;
    this.currentIndex = 0;
    this.activePhotoIdx = null; // null = skaidrės apžvalga, skaičius = padidinta nuotrauka
    this.preloadedImages = new Set();
    
    this.initDOM();
    this.initEvents();
    this.renderSlide(0);
    this.preloadAdjacent(0);
  }

  initDOM() {
    this.viewport = document.getElementById("slideViewport");
    this.progressBar = document.getElementById("progressBar");
    this.counterCurrent = document.getElementById("counterCurrent");
    this.counterTotal = document.getElementById("counterTotal");
    this.btnPrev = document.getElementById("btnPrev");
    this.btnNext = document.getElementById("btnNext");
    this.btnFullscreen = document.getElementById("btnFullscreen");
    this.btnDrawer = document.getElementById("btnDrawer");
    
    // Lightbox elementai
    this.lightbox = document.getElementById("lightboxModal");
    this.lightboxImg = document.getElementById("lightboxImg");
    this.lightboxTitle = document.getElementById("lightboxTitle");
    this.lightboxCaption = document.getElementById("lightboxCaption");
    this.lightboxCounter = document.getElementById("lbCounter");
    this.lightboxClose = document.getElementById("lightboxClose");
    this.lbPrev = document.getElementById("lbPrev");
    this.lbNext = document.getElementById("lbNext");
    
    // Drawer elementai
    this.drawer = document.getElementById("drawerModal");
    this.drawerGrid = document.getElementById("drawerGrid");
    this.drawerClose = document.getElementById("drawerClose");
    
    this.counterTotal.textContent = String(this.slides.length).padStart(2, '0');
    
    this.buildSlidesHTML();
    this.buildDrawerHTML();
  }

  buildSlidesHTML() {
    this.viewport.innerHTML = "";
    
    this.slides.forEach((slide, sIdx) => {
      const slideEl = document.createElement("div");
      slideEl.className = "slide";
      slideEl.id = `slide-${sIdx}`;
      
      if (slide.type === "hero") {
        slideEl.innerHTML = `
          <div class="hero-slide-content">
            <span class="badge-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              ${slide.tag}
            </span>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="hero-subtitle">${slide.subtitle}</p>
            <div class="hero-note">${slide.leadNote}</div>
            <button class="hero-btn" onclick="presentation.goToSlide(1)">${slide.ctaText}</button>
          </div>
        `;
      } else if (slide.type === "photos") {
        const photoCount = slide.photos.length;
        const photosHTML = slide.photos.map((p, pIdx) => `
          <div class="photo-card" onclick="presentation.openLightbox(${sIdx}, ${pIdx})">
            <div class="card-image-wrap">
              <span class="card-badge">${p.badge}</span>
              <div class="card-zoom-hint" title="Padidinti">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
              </div>
              <img class="card-img" src="${p.src}" alt="${p.title}" loading="lazy" />
            </div>
            <div class="card-info">
              <div class="card-title">${p.title}</div>
              <div class="card-caption">${p.caption}</div>
            </div>
          </div>
        `).join("");

        slideEl.innerHTML = `
          <div class="slide-header">
            <div class="slide-tag">${slide.tag}</div>
            <h2 class="slide-title">${slide.title}</h2>
            <p class="slide-description">${slide.description}</p>
          </div>
          <div class="photos-grid grid-count-${photoCount}">
            ${photosHTML}
          </div>
        `;
      } else if (slide.type === "congrats") {
        const wishesHTML = slide.wishes.map(w => `<li>${w}</li>`).join("");
        slideEl.innerHTML = `
          <div class="congrats-content">
            <span class="badge-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ${slide.tag}
            </span>
            <h1 class="congrats-title">${slide.title}</h1>
            <p class="congrats-subtitle">${slide.subtitle}</p>
            <div class="wishes-card">
              <ul class="wishes-list">
                ${wishesHTML}
              </ul>
            </div>
            <div class="congrats-closing">${slide.closing}</div>
            <div class="congrats-actions">
              <button class="confetti-trigger-btn" onclick="presentation.triggerConfetti(true)">🎉 Šauti šventinį konfeti!</button>
              <button class="restart-btn" onclick="presentation.goToSlide(0)">${slide.restartText}</button>
            </div>
          </div>
        `;
      }
      
      this.viewport.appendChild(slideEl);
    });
  }

  buildDrawerHTML() {
    this.drawerGrid.innerHTML = "";
    this.slides.forEach((slide, idx) => {
      const item = document.createElement("div");
      item.className = `drawer-item ${idx === this.currentIndex ? "active" : ""}`;
      item.onclick = () => {
        this.goToSlide(idx);
        this.closeDrawer();
      };
      
      let previewImg = "";
      if (slide.photos && slide.photos.length > 0) {
        previewImg = `<img src="${slide.photos[0].src}" alt="${slide.title}" />`;
      } else {
        previewImg = `<div style="color: var(--accent-gold-light); font-size: 2rem; font-weight:800;">70</div>`;
      }
      
      item.innerHTML = `
        <div class="drawer-item-preview">${previewImg}</div>
        <div class="drawer-item-num">Skaidrė ${idx + 1}</div>
        <div class="drawer-item-title">${slide.title}</div>
      `;
      this.drawerGrid.appendChild(item);
    });
  }

  initEvents() {
    // Navigacijos mygtukai (visada šoka per pilną skaidrę)
    this.btnPrev.addEventListener("click", () => this.prevSlide());
    this.btnNext.addEventListener("click", () => this.nextSlide());
    this.btnFullscreen.addEventListener("click", () => this.toggleFullscreen());
    this.btnDrawer.addEventListener("click", () => this.openDrawer());
    this.drawerClose.addEventListener("click", () => this.closeDrawer());
    
    // Lightbox navigacija ir uždarymas
    this.lightboxClose.addEventListener("click", () => this.closeLightbox());
    this.lbPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      this.prevLightboxPhoto();
    });
    this.lbNext.addEventListener("click", (e) => {
      e.stopPropagation();
      this.nextLightboxPhoto();
    });
    this.lightbox.addEventListener("click", (e) => {
      if (e.target === this.lightbox) this.closeLightbox();
    });

    // Klaviatūros valdymas su nuoseklia eiga (Slide -> Photo 1 -> Photo 2 -> Next Slide)
    window.addEventListener("keydown", (e) => {
      if (this.drawer.classList.contains("active")) {
        if (e.key === "Escape") this.closeDrawer();
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case " ": // Space
          e.preventDefault();
          this.nextSeamless();
          break;

        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          this.prevSeamless();
          break;

        case "PageDown":
          e.preventDefault();
          this.nextSlide();
          break;

        case "PageUp":
          e.preventDefault();
          this.prevSlide();
          break;

        case "Home":
          e.preventDefault();
          this.goToSlide(0);
          break;

        case "End":
          e.preventDefault();
          this.goToSlide(this.slides.length - 1);
          break;

        case "Escape":
          if (this.lightbox.classList.contains("active")) {
            this.closeLightbox();
          } else if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;

        case "f":
        case "F":
          e.preventDefault();
          this.toggleFullscreen();
          break;
      }
    });

    // Liečiamieji gestai
    let touchStartX = 0;
    this.viewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.viewport.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.nextSeamless();
        else this.prevSeamless();
      }
    }, { passive: true });
  }

  // Nuosekli eiga: skaidrė -> foto 1 -> foto 2 -> kita skaidrė
  nextSeamless() {
    const slide = this.slides[this.currentIndex];
    const hasPhotos = slide.photos && slide.photos.length > 0;

    if (this.lightbox.classList.contains("active")) {
      // Esame padidintos nuotraukos režime
      if (hasPhotos && this.activePhotoIdx < slide.photos.length - 1) {
        // Kita nuotrauka toje pačioje skaidrėje
        this.renderLightboxPhoto(this.activePhotoIdx + 1);
      } else {
        // Paskutinė nuotrauka peržiūrėta -> uždarome lightbox ir šokame į kitą skaidrę
        this.closeLightbox();
        if (this.currentIndex < this.slides.length - 1) {
          this.renderSlide(this.currentIndex + 1);
        }
      }
    } else {
      // Esame bendroje skaidrės apžvalgoje
      if (hasPhotos) {
        // Atidarome pirmą nuotrauką padidintai
        this.openLightbox(this.currentIndex, 0);
      } else {
        // Jei skaidrė be nuotraukų (titulinis / finalas) -> einame į kitą skaidrę
        this.nextSlide();
      }
    }
  }

  // Nuosekli atgalinė eiga
  prevSeamless() {
    const slide = this.slides[this.currentIndex];
    const hasPhotos = slide.photos && slide.photos.length > 0;

    if (this.lightbox.classList.contains("active")) {
      if (this.activePhotoIdx > 0) {
        this.renderLightboxPhoto(this.activePhotoIdx - 1);
      } else {
        // Grįžtame iš pirmos nuotraukos į skaidrės apžvalgą
        this.closeLightbox();
      }
    } else {
      // Iš skaidrės apžvalgos einame į ankstesnę skaidrę
      this.prevSlide();
    }
  }

  // Tiesioginiai mygtukai skaidrėms peršokti
  nextSlide() {
    this.closeLightbox();
    if (this.currentIndex < this.slides.length - 1) {
      this.renderSlide(this.currentIndex + 1);
    }
  }

  prevSlide() {
    this.closeLightbox();
    if (this.currentIndex > 0) {
      this.renderSlide(this.currentIndex - 1);
    }
  }

  goToSlide(index) {
    this.closeLightbox();
    if (index >= 0 && index < this.slides.length) {
      this.renderSlide(index);
    }
  }

  renderSlide(index) {
    const prevSlideEl = document.getElementById(`slide-${this.currentIndex}`);
    if (prevSlideEl) prevSlideEl.classList.remove("active");

    this.currentIndex = index;
    const currentSlideEl = document.getElementById(`slide-${this.currentIndex}`);
    if (currentSlideEl) currentSlideEl.classList.add("active");

    // Skaitiklis ir progreso juosta
    this.counterCurrent.textContent = String(this.currentIndex + 1).padStart(2, '0');
    const percent = ((this.currentIndex + 1) / this.slides.length) * 100;
    this.progressBar.style.width = `${percent}%`;

    // Atnaujinti stalčiaus aktyvią skaidrę
    const drawerItems = this.drawerGrid.querySelectorAll(".drawer-item");
    drawerItems.forEach((item, idx) => {
      item.classList.toggle("active", idx === this.currentIndex);
    });

    // Priešlaikinis gretimų skaidrių nuotraukų įkėlimas į naršyklės podėlį
    this.preloadAdjacent(index);

    // Finalas -> konfeti
    if (index === this.slides.length - 1) {
      setTimeout(() => this.triggerConfetti(), 300);
    }
  }

  // Lightbox atidarymas
  openLightbox(slideIdx, photoIdx) {
    if (slideIdx !== this.currentIndex) {
      this.renderSlide(slideIdx);
    }
    const slide = this.slides[this.currentIndex];
    if (!slide || !slide.photos || !slide.photos[photoIdx]) return;

    this.activePhotoIdx = photoIdx;
    this.renderLightboxPhoto(photoIdx);
    this.lightbox.classList.add("active");
  }

  renderLightboxPhoto(photoIdx) {
    const slide = this.slides[this.currentIndex];
    if (!slide || !slide.photos || !slide.photos[photoIdx]) return;

    this.activePhotoIdx = photoIdx;
    const photo = slide.photos[photoIdx];

    this.lightboxImg.src = photo.src;
    this.lightboxTitle.textContent = photo.title;
    this.lightboxCaption.textContent = photo.caption;
    this.lightboxCounter.textContent = `${photoIdx + 1} iš ${slide.photos.length}`;

    // Rodome / slepiame rodykles
    this.lbPrev.style.visibility = photoIdx > 0 ? "visible" : "hidden";
    this.lbNext.title = photoIdx < slide.photos.length - 1 
      ? "Kita nuotrauka (→)" 
      : "Baigti peržiūrą ir eiti į kitą skaidrę (→)";
  }

  nextLightboxPhoto() {
    this.nextSeamless();
  }

  prevLightboxPhoto() {
    if (this.activePhotoIdx > 0) {
      this.renderLightboxPhoto(this.activePhotoIdx - 1);
    } else {
      this.closeLightbox();
    }
  }

  closeLightbox() {
    this.lightbox.classList.remove("active");
    this.activePhotoIdx = null;
  }

  openDrawer() {
    this.drawer.classList.add("active");
  }

  closeDrawer() {
    this.drawer.classList.remove("active");
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen error:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Vaizdų priešlaikinis įkėlimas (preloader iš iceland-photos)
  preloadAdjacent(currentIdx) {
    const toPreload = [currentIdx, currentIdx + 1, currentIdx + 2];
    toPreload.forEach(idx => {
      if (idx >= 0 && idx < this.slides.length) {
        const slide = this.slides[idx];
        if (slide.photos) {
          slide.photos.forEach(p => {
            if (!this.preloadedImages.has(p.src)) {
              const img = new Image();
              img.src = p.src;
              this.preloadedImages.add(p.src);
            }
          });
        }
      }
    });
  }

  // Konfeti efektas
  triggerConfetti(blastExtra = false) {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#f59e0b", "#fbbf24", "#38bdf8", "#ec4899", "#10b981", "#a855f7"];
    const particles = [];
    const count = blastExtra ? 160 : 100;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.65,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 16 - 8,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        drag: 0.98,
        opacity: 1
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;

      particles.forEach(p => {
        p.vx *= p.drag;
        p.vy = (p.vy + p.gravity) * p.drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.005;

        if (p.opacity > 0 && p.y < canvas.height + 50) {
          alive++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        }
      });

      if (alive > 0) {
        animationId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationId);
      }
    };

    animate();
  }
}

// Lango keitimas
window.addEventListener("resize", () => {
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

let presentation;
document.addEventListener("DOMContentLoaded", () => {
  presentation = new Presentation(SLIDES_DATA);
});
