// ============================================
//  NAVBAR — scroll shadow
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
//  HAMBURGER — mobile menu
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================
//  TYPEWRITER
// ============================================
const phrases = [
  'Backend Engineer',
  'Java Developer',
  'Spring Boot Expert',
  'Problem Solver (1800+ Problems)',
  'System Design Enthusiast',
];

let pIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[pIdx];

  if (!deleting) {
    el.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 55 : 90);
}

type();

// ============================================
//  SCROLL REVEAL
// ============================================
const revealEls = document.querySelectorAll(
  'section, .project-card, .skill-category, .achievement-card, .stat-item, .contact-card, .education-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach(el => observer.observe(el));

// ============================================
//  ACTIVE NAV LINK on scroll
// ============================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
