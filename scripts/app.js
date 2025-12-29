/**
 * Dark mode toggle with memory using localStorage
 */
const toggle = document.getElementById('themeToggle');

/**
 * Load saved theme from localStorage and apply it
 */
if (localStorage.getItem('theme')) {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}

/**
 * Toggle dark/light mode on button click and save preference
 */
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

/**
 * Subtle entrance animations using Intersection Observer
 */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  // Set initial state
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});

/**
 * Open modal when clicking "Vis mer"-knappen
 * Buttons have data-modal attribute pointing to modal ID
 */
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    modal.style.display = 'flex';
  });
});

/**
 * Close modal when clicking the close icon
 */
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});

/**
 * Close modal when clicking outside the modal content
 */
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

/** Hamburger menu toggle */
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
document.querySelector('.header-layout').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
  hamburger.classList.toggle('active');
});
