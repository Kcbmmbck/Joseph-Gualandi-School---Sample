
  document.querySelectorAll('.openVideo').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-video');
      const modal = document.getElementById(modalId);
      const video = modal.querySelector('video');

      modal.style.display = 'flex';
      video.currentTime = 0;
      video.play();
    });
  });

  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.video-modal');
      const video = modal.querySelector('video');

      modal.style.display = 'none';
      video.pause();
    });
  });

  window.addEventListener('click', e => {
    if (e.target.classList.contains('video-modal')) {
      const video = e.target.querySelector('video');
      e.target.style.display = 'none';
      video.pause();
    }
  });

