document.addEventListener('DOMContentLoaded', () => {
  const toggles = [
    document.getElementById('reveal-toggle2'),
    document.getElementById('reveal-toggle3'),
    document.getElementById('reveal-toggle4')
  ];
  const audio = document.getElementById('audio');

  let fadeInterval = null;
  let playTimeout = null;

  function clearAllTimers() {
    if (fadeInterval) {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
    if (playTimeout) {
      clearTimeout(playTimeout);
      playTimeout = null;
    }
  }

  function fadeOutAndPause() {
    clearAllTimers();

    const fadeDuration = 500; // 0.5 seconds
    const fadeSteps = 10;
    const fadeStepTime = fadeDuration / fadeSteps;
    const volumeStep = audio.volume / fadeSteps;

    fadeInterval = setInterval(() => {
      if (audio.volume > volumeStep) {
        audio.volume = Math.max(0, audio.volume - volumeStep);
      } else {
        audio.volume = 0;
        audio.pause();
        fadeInterval && clearInterval(fadeInterval);
        fadeInterval = null;
      }
    }, fadeStepTime);
  }

  function startPlayAndAutoFade() {
    clearAllTimers();

    if (audio.paused) {
      audio.volume = 1;
      audio.play().catch(err => console.error('Play failed:', err));
    } else {
      audio.volume = 1;
    }

    // After 2 seconds, start fading out
    playTimeout = setTimeout(() => {
      fadeOutAndPause();
    }, 4500);
  }

  toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        // Start audio for 2s, then fade out
        startPlayAndAutoFade();
      } else {
        // If NO toggles are checked anymore, stop audio immediately
        if (!toggles.some(t => t.checked)) {
          fadeOutAndPause();
        }
      }
    });
  });
});