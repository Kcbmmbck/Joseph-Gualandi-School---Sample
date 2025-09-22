 const openButtonss = document.querySelectorAll('.openButton_1');
  const countdownDivss = document.querySelectorAll('.countdown_1');

  // Assign unlock/lock dates for each box based on position
  const schedules = [
  // Events
    {
      unlockDate: new Date(2025, 4, 24, 0, 0, 0), // May 24, 2025
      lockDate: new Date(2025, 5, 13, 23, 59, 59) // May 25, 2025
    },
    {
      unlockDate: new Date(2026, 1, 25, 0, 0, 0), // May 25, 2025
      lockDate: new Date(2026, 2, 25, 23, 59, 59) // May 26, 2025
    }
  ];

  function updateStatuss() {
    const now = new Date();

    openButtonss.forEach((button, index) => {
      const countdown_1 = countdownDivss[index];
      const { unlockDate, lockDate } = schedules[index];

      if (now >= unlockDate && now <= lockDate) {
        button.classList.remove('disabled');
        countdown_1.textContent = 'You can click OPEN now! Available now.';
      } else if (now < unlockDate) {
        button.classList.add('disabled');
        const timeLeft = unlockDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        countdown_1.textContent = ` The OPEN button will unlock soon: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        button.classList.add('disabled');
        countdown_1.textContent = 'The OPEN button is now closed.';
      }
    });
  }

  updateStatuss();
  setInterval(updateStatuss, 1000);