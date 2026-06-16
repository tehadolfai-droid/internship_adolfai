const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Skill bar fill animation
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = width + '%';
  });
}

// Scroll to top
const scrollBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.pageYOffset >= top) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#ffffff' : 'rgba(255,255,255,0.8)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(animateSkillBars, 400);
});
