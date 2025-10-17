// ==================================
// DIMAH Frontend Polish (keeps theme)
// ==================================

// Mobile menu: toggle, close-on-link, ESC
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.toggle('active');
  }
  document.addEventListener('click', (e) => {
    const link = e.target.closest('#navMenu a');
    const navMenu = document.getElementById('navMenu');
    if (link && navMenu) navMenu.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const navMenu = document.getElementById('navMenu');
      if (navMenu) navMenu.classList.remove('active');
    }
  });
  
  // Header: subtle state on scroll
  (function headerScroll(){
    const header = document.querySelector('.header');
    if (!header) return;
    const update = () => {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  })();
  
  // Hero slideshow (safe guards)
  (function slideshow(){
    const slides = document.querySelectorAll('.hero-slideshow img');
    if (!slides.length) return;
    let i = 0;
    slides[i].classList.add('active');
    setInterval(() => {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 5000);
  })();
  
  // Smooth scroll for on-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  // IntersectionObserver reveal (performant)
  (function reveal(){
    const els = document.querySelectorAll(
      '.fade-in, .feature-item, .service-card, .industry-card, .value-item, .timeline-item, .about-text, .about-image, .mission-text, .mission-image, .vision-text, .vision-image'
    );
    if (!els.length) return;
  
    const reduced = window.matchMedia &&
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { els.forEach(el => el.classList.add('scrolled')); return; }
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
          io.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  
    els.forEach(el => io.observe(el));
  })();
  
  // FAQ accordion
  (function faq(){
    const qs = document.querySelectorAll('.faq-question');
    qs.forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const ans = item.querySelector('.faq-answer');
        const active = item.classList.toggle('active');
        if (active) ans.style.maxHeight = ans.scrollHeight + 'px';
        else ans.style.maxHeight = null;
      });
    });
  })();
  
