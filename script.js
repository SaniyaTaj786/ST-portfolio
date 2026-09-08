const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const aboutIntro = document.querySelector('.about-copy p');
const educationSection = document.querySelector('.education-section');
const contactEmail = document.querySelector('.contact-email');
const projectList = document.querySelector('.project-list');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.site-nav a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active-page');
    link.setAttribute('aria-current', 'page');
  }
});

if (contactEmail) {
  contactEmail.href = 'mailto:saniyatajgulzar181@gmail.com';
  contactEmail.firstChild.textContent = 'saniyatajgulzar181@gmail.com ';
}

const portfolioProject = projectList?.querySelector('.project-arrow');
if (portfolioProject) {
  portfolioProject.href = 'index.html';
  portfolioProject.target = '_blank';
  portfolioProject.rel = 'noopener';
  portfolioProject.setAttribute('aria-label', 'Open Saniya Taj portfolio');
}

if (educationSection && !educationSection.querySelector('[data-qualification="puc"]')) {
  educationSection.insertAdjacentHTML('beforeend', '<div class="education-card" data-qualification="puc"><p class="education-year">Completed with distinction</p><h3>PUC / Pre-University Course</h3><p>Completed PUC with distinction as a PCMB student. My curiosity about programming led me to choose <strong>computer science</strong> and begin my journey toward technology and software development.</p><div class="tag-list"><span>PCMB</span><span>Computer science</span><span>Distinction</span></div></div><div class="education-card" data-qualification="sslc"><p class="education-year">Completed with distinction</p><h3>SSLC</h3><p>Completed SSLC with distinction, developing a strong academic foundation in mathematics, science, languages, and disciplined study habits.</p><div class="tag-list"><span>Secondary education</span><span>Academic distinction</span></div></div>');
}

if (aboutIntro) {
  aboutIntro.innerHTML = aboutIntro.innerHTML.replace('I’m Saniya, a Bachelor of Computer Applications student', 'I’m Saniya Taj, a <strong>Bachelor of Computer Applications</strong> student');
  document.querySelector('.about-copy .text-link')?.remove();
}

if (themeToggle) {
  const savedTheme = localStorage.getItem('saniya-theme');
  if (savedTheme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    themeToggle.textContent = 'Light mode';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
    themeToggle.setAttribute('aria-pressed', 'true');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('saniya-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? 'Dark mode' : 'Light mode';
    themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'dark' : 'light'} mode`);
    themeToggle.setAttribute('aria-pressed', String(!isDark));
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = isOpen ? 'Close <span>↙</span>' : 'Menu <span>↘</span>';
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav) {
      siteNav.classList.remove('is-open');
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = 'Menu <span>↘</span>';
    }
  });
});
