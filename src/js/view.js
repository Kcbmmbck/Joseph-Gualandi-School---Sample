document.querySelectorAll('.openPopup').forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-popup');
      document.getElementById(modalId).style.display = 'flex';
    });
  });

  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
    });
  });

  document.querySelectorAll('.close-btn_1').forEach(function(button) {
  ['click', 'touchstart'].forEach(function(eventType) {
    button.addEventListener(eventType, function(e) {
      e.preventDefault(); // prevent ghost click on mobile
      var modal = this;
      while (modal && !modal.classList.contains('video-modal')) {
        modal = modal.parentElement;
      }
      if (modal) {
        // Pause video if playing
        var video = modal.querySelector('video');
        if (video) {
          video.muted = true
        }
        modal.style.display = 'none';
      }
    }, { passive: false }); // Ensure touchstart event can call preventDefault
  });
});

  const cards = Array.from(document.querySelectorAll('.announcement-card'));
  const maxVisible = 3;
  let start = 0;

  function updateVisibility(direction) {
    const grid = document.querySelector('.announcement-grid');
    grid.classList.remove('slide-left', 'slide-right');
    void grid.offsetWidth; // force reflow

    if (direction === 'next') grid.classList.add('slide-left');
    else if (direction === 'prev') grid.classList.add('slide-right');

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < start + maxVisible ? 'block' : 'none';
    });

    document.getElementById('prevBtn').style.display = start > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').style.display = start + maxVisible < cards.length ? 'inline-block' : 'none';
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    if (start > 0) {
      start -= maxVisible;
      updateVisibility('prev');
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (start + maxVisible < cards.length) {
      start += maxVisible;
      updateVisibility('next');
    }
  });

  window.addEventListener('DOMContentLoaded', () => updateVisibility());


  