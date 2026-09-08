const progressBar = document.querySelector('#loader-progress');
const percentLabel = document.querySelector('#loader-percent');
const progressTrack = document.querySelector('.loader-track');
const rocket = document.querySelector('#loader-rocket');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const duration = reducedMotion ? 250 : 4000;
const startTime = performance.now();
rocket.style.setProperty('--rocket-duration', `${duration}ms`);

function updateLoader(currentTime) {
  const progress = Math.min((currentTime - startTime) / duration, 1);
  const percent = Math.round(progress * 100);
  progressBar.style.width = `${percent}%`;
  percentLabel.textContent = `${percent}%`;
  progressTrack.setAttribute('aria-valuenow', String(percent));

  if (progress < 1) {
    requestAnimationFrame(updateLoader);
  } else {
    window.location.href = 'index.html';
  }
}

requestAnimationFrame(updateLoader);
