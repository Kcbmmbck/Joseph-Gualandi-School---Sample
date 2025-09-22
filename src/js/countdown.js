 const openButtons = document.querySelectorAll('.openButton');
  const countdownDivs = document.querySelectorAll('.countdown');

  // Assign unlock/lock dates for each box based on position
  const schedule = [
    // News
    {
      unlockDate: new Date(2025, 4, 23, 0, 0, 0), // May 23, 2025
      lockDate: new Date(2025, 4, 24, 23, 59, 59) // May 24, 2025
    },

    {
      unlockDate: new Date(2025, 4, 23, 0, 0, 0), // May 23, 2025
      lockDate: new Date(2025, 4, 24, 23, 59, 59) // May 24, 2025
    }
    ,
    // Events
    {
      unlockDate: new Date(2025, 4, 24, 0, 0, 0), // May 24, 2025
      lockDate: new Date(2025, 4, 25, 23, 59, 59) // May 25, 2025
    },
    {
      unlockDate: new Date(2025, 4, 25, 0, 0, 0), // May 25, 2025
      lockDate: new Date(2025, 4, 26, 23, 59, 59) // May 26, 2025
    }
  ];

  function updateStatus() {
    const now = new Date();

    openButtons.forEach((button, index) => {
      const countdown = countdownDivs[index];
      const { unlockDate, lockDate } = schedule[index];

      if (now >= unlockDate && now <= lockDate) {
        button.classList.remove('disabled');
        countdown.textContent = 'You can click OPEN now! Available now.';
      } else if (now < unlockDate) {
        button.classList.add('disabled');
        const timeLeft = unlockDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        countdown.textContent = ` The OPEN button will unlock soon: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        button.classList.add('disabled');
        countdown.textContent = 'The OPEN button is now closed.';
      }
    });
  }

  updateStatus();
  setInterval(updateStatus, 1000);