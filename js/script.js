// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
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

// Contact form (submits to Formspree)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formStatus.hidden = true;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      contactForm.reset();
      formStatus.hidden = false;
    } else {
      alert("Something went wrong sending your message — please email benhachimiwalid2@gmail.com directly.");
    }
  } catch (err) {
    alert("Something went wrong sending your message — please email benhachimiwalid2@gmail.com directly.");
  } finally {
    submitBtn.disabled = false;
  }
});
