const video = document.getElementById('myVideo');
const audio = document.getElementById('myAudio');
const overlay = document.getElementById('startOverlay');
const bgFade = document.getElementById('bgFade');
const endButton = document.getElementById('endButton');

overlay.addEventListener('click', async () => {
  // Remove overlay
  overlay.style.display = 'none';

  // Show video now (was hidden)
  video.style.display = 'block';
  video.muted = true;

  try {
    await video.play();
    await audio.play();
  } catch (err) {
    console.error('Playback error:', err);
  }

  video.addEventListener('ended', () => {
    // Freeze last frame
    video.pause();
    video.currentTime = video.duration;

    // Fade out video and background
    video.classList.add('fade-out');
    bgFade.classList.add('show');

    // Show the End button after video fades out
    setTimeout(() => {
      endButton.style.display = 'block'; // Make the button visible
    }, 3000);  // Wait for 3 seconds (duration of fade-out)
  });
});


