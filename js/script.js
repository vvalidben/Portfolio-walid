// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navActions = document.querySelector('.nav-actions');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navActions.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navActions.classList.remove('open');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Certifications modal
const certOpenBtn = document.getElementById('certOpenBtn');
const certCloseBtn = document.getElementById('certCloseBtn');
const certModalOverlay = document.getElementById('certModalOverlay');

function openCertModal() {
  certModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

certOpenBtn.addEventListener('click', openCertModal);
certCloseBtn.addEventListener('click', closeCertModal);
certModalOverlay.addEventListener('click', (e) => {
  if (e.target === certModalOverlay) closeCertModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModalOverlay.classList.contains('open')) closeCertModal();
});

// Contact form (placeholder submit handler)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('This form is not connected to a backend yet. Please email benhachimiwalid2@gmail.com directly, or wire this form up to a service like Formspree/EmailJS.');
});
