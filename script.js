// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Button click handlers
document.querySelectorAll('.cta-button, .btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.parentElement.classList.contains('hero-buttons') || this.classList.contains('cta-button')) {
            e.preventDefault();
            alert('Thank you for your interest! Please fill out the form on our contact page or call us at (555) 123-4567 for a free consultation.');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        if (header.style.backdropFilter !== undefined) {
            header.style.backdropFilter = 'blur(10px)';
        }
    } else {
        header.style.background = 'white';
        if (header.style.backdropFilter !== undefined) {
            header.style.backdropFilter = 'none';
        }
    }
});

// Hero Background Slideshow
const slides = document.querySelectorAll('.hero-slideshow img');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(changeSlide, 5000); // Change every 5 seconds
}

// Scroll animations
const scrollElements = document.querySelectorAll(
    '.fade-in, .feature-item, .service-card, .industry-card, .value-item, .timeline-item, .about-text, .about-image, .mission-text, .mission-image, .vision-text, .vision-image'
  );
  
  const elementInView = (el, dividend = 1.25) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };
  
  const displayScrollElement = (element) => element.classList.add('scrolled');
  const hideScrollElement = (element) => element.classList.remove('scrolled');
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) displayScrollElement(el);
      else hideScrollElement(el);
    });
  };
  
  // NEW: run once on load, then on scroll
  document.addEventListener('DOMContentLoaded', handleScrollAnimation);
  window.addEventListener('scroll', handleScrollAnimation);
  