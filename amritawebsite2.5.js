/*window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video2');
  video.playbackRate = 8.0; // Play at 3x speed
});



document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("run");
  const sound = document.getElementById("boom");
  const ghostImage = document.getElementById("ghostImage");

  if (!button || !sound || !ghostImage) return;

  // Unlock audio with one click (required on modern browsers)
  document.body.addEventListener("click", () => {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    }).catch(() => {});
  }, { once: true });

  button.addEventListener("mouseover", () => {
    const offset = 100;
    const maxX = window.innerWidth - button.offsetWidth - offset;
    const maxY = window.innerHeight - button.offsetHeight - offset;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Show ghost image
    ghostImage.style.opacity = 0.8;
    ghostImage.style.left = "50%";
    ghostImage.style.top = "50%";
    ghostImage.style.transform = "translate(-50%, -50%)"; // Adjust Y offset as needed

    setTimeout(() => {
      ghostImage.style.opacity = 0;
    }, 200); // fade out after 400ms

    // Play sound
    sound.currentTime = 0;
    sound.play().catch(err => console.log("Audio failed to play:", err));
  });
});



const ghostImage = document.getElementById('ghostImage');

const proximityThreshold = 100; // pixels

document.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distance = Math.hypot(e.clientX - buttonX, e.clientY - buttonY);

  if (distance < proximityThreshold) {
    // Move the button away randomly within the window bounds
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    const newX = Math.min(maxX, Math.max(0, button.offsetLeft + (Math.random() > 0.5 ? 100 : -100)));
    const newY = Math.min(maxY, Math.max(0, button.offsetTop + (Math.random() > 0.5 ? 100 : -100)));

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';

    ghostImage.style.opacity = 0.8; // faint visibility

    // After 1 second, hide the image again
    setTimeout(() => {
      ghostImage.style.opacity = 0;
    }, 300);
  }
});

document.getElementById('Button').addEventListener('click', function() {
  const step4 = document.querySelector('.step4');
  const step5 = document.querySelector('.step5');

  step4.style.display = 'none';

  step5.style.display = 'block';
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("runAwayBtn");
  const image = document.getElementById("flashImage");
  const sound = document.getElementById("sound");
  const threshold = 120; // px distance to trigger run away

  // Make sure button is positioned absolute
  button.style.position = "absolute";

  document.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (dist < threshold) {
      runAway();
    }
  });

  let isRunning = false; // avoid rapid triggers

  function runAway() {
    if (isRunning) return;
    isRunning = true;

    // Calculate new random position inside viewport
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    // Show image
    image.style.opacity = "0.9";

    // Play sound
    sound.currentTime = 0;
    sound.play().catch(() => {});

    // Hide image after 2 seconds
    setTimeout(() => {
      image.style.opacity = "0";
      isRunning = false;
    }, 2000);
  }
});








