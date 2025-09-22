 // IMPORTANT:
// In JavaScript, the month parameter in new Date(year, month, day, ...) is ZERO-BASED:
// 0 = January, 1 = February, ..., 11 = December
// So, to represent July, use 6 (not 7) because number 7 is august.

 const openButtonss = document.querySelectorAll('.openButton_1');
  const countdownDivss = document.querySelectorAll('.countdown_1');

  // Assign unlock/lock dates for each box based on position
  const schedules = [
  // Events
    {
      unlockDate: new Date(2025, 6, 4, 0, 0, 0), // July 4, 2025
      lockDate: new Date(2025, 6, 20, 23, 59, 59) // July 20, 2025
    },
    {
      unlockDate: new Date(2026, 0, 25, 0, 0, 0), // January 25, 2026
      lockDate: new Date(2026, 1, 25, 23, 59, 59) // FEB 25, 2026
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