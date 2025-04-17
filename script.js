document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Language toggle functionality
  let currentLanguage = 'en';
  const languageToggle = document.querySelector('.language-toggle');
  const languageText = document.querySelector('.language-text');

  // Contact modal functionality
  const modal = document.getElementById('contactModal');
  const contactBtn = document.querySelector('.contact-btn');
  const contactCta = document.querySelector('.contact-cta');
  const closeBtn = document.querySelector('.modal-close');

  // Toggle language
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    updateLanguage();
  }

  // Update all text elements with the current language
  function updateLanguage() {
    // Update language toggle button text
    languageText.textContent = currentLanguage === 'en' ? 'EN / DE' : 'DE / EN';

    // Update all elements with data-en and data-de attributes
    document.querySelectorAll('[data-en]').forEach(element => {
      element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    // Update placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
      element.placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
    });
  }

  // Open modal
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  languageToggle.addEventListener('click', toggleLanguage);
  contactBtn.addEventListener('click', showEmail);
contactCta.addEventListener('click', showEmail);

function showEmail() {
  const user = 'mijatoho';
const domain = 'gmail.com';
const email = `${user}@${domain}`;
  const mailto = `mailto:${email}`;
  const message = `
    <div style="padding: 2rem; text-align: center;">
      <p style="font-size: 1.1rem;">📧 You can reach me at:</p>
      <a href="${mailto}" style="font-size: 1.2rem; color: #0077cc;">${email}</a>
      <p style="margin-top: 1rem; font-size: 0.9rem;">(Click the address to open your email app)</p>
    </div>
  `;

  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      ${message}
    </div>
  `;
  openModal();
  document.querySelector('.modal-close').addEventListener('click', closeModal);
}

  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initialize with English language
  updateLanguage();
});
