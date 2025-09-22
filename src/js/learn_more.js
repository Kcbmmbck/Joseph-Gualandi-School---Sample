    document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const moreText = button.previousElementSibling;
      moreText.classList.toggle('hidden');
      button.textContent = moreText.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });
  });

