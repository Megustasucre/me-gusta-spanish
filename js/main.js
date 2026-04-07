// Sticky navbar
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));
});

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Ticker animation is CSS-based, no JS needed

// ── FACULTY CAROUSEL ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const track    = document.getElementById('carousel-track');
  const viewport = document.getElementById('carousel-viewport');
  const dotsWrap = document.getElementById('carousel-dots');
  const btnPrev  = document.getElementById('carousel-prev');
  const btnNext  = document.getElementById('carousel-next');
  if (!track) return;

  const slides = track.querySelectorAll('.teacher-slide');
  let current = 0;

  function getSlidesVisible() {
    if (window.innerWidth < 640)  return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function totalPages() {
    return slides.length - getSlidesVisible() + 1;
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const dot = document.createElement('button');
      dot.style.cssText = 'width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:all 0.3s';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    dotsWrap.querySelectorAll('button').forEach((d, i) => {
      d.style.background = i === current ? '#ff2850' : '#d0d0d0';
      d.style.width      = i === current ? '24px'   : '8px';
      d.style.borderRadius = '4px';
    });
  }

  function goTo(index) {
    const pages = totalPages();
    current = Math.max(0, Math.min(index, pages - 1));
    const slideW = slides[0].offsetWidth + 24; // width + gap
    track.style.transform = `translateX(-${current * slideW}px)`;
    updateDots();
    btnPrev.style.opacity = current === 0 ? '0.35' : '1';
    btnNext.style.opacity = current >= pages - 1 ? '0.35' : '1';
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));

  // Rebuild on resize
  window.addEventListener('resize', () => { buildDots(); goTo(0); });

  buildDots();
  goTo(0);
});

// Active nav link
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('nav-active');
    }
  });
});
