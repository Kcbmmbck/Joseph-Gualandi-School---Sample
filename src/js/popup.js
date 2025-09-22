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