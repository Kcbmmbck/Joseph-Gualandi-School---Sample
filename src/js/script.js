 function toggleMenu(icon) {
      document.getElementById("navLinks").classList.toggle("active");
    }

 
  
//-----------------------

   function isMobile() {
    return window.innerWidth <= 768;
  }

  // Toggle hamburger menu
  function toggleMenu(icon) {
    icon.classList.toggle("open");
    document.getElementById("navLinks").classList.toggle("active");
  }

  // Handle dropdown toggle for mobile
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
        if (isMobile()) {
          e.preventDefault(); // Stop link from navigating
          
          const dropdownMenu = this.nextElementSibling;

          // Close other dropdowns
          document.querySelectorAll(".dropdown-content").forEach(menu => {
            if (menu !== dropdownMenu) {
              menu.classList.remove("show-dropdown");
            }
          });

          // Toggle this dropdown
          dropdownMenu.classList.toggle("show-dropdown");
        }
      });
    });
  });

  // Close hamburger menu on touch outside (for touchscreens only)
  document.addEventListener("touchstart", function (e) {
    const nav = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    const isClickInsideNav = nav.contains(e.target) || hamburger.contains(e.target);

    if (!isClickInsideNav && nav.classList.contains("active")) {
      nav.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });

//-----------------------
   function revealCardsOnScroll() {
    const cards = document.querySelectorAll('.campus-card');
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      if (cardTop < triggerPoint && cardBottom > 0) {
        card.classList.add('show');
        card.classList.remove('hide');
      } else {
        card.classList.remove('show');
        card.classList.add('hide');
      }
    });
  }

  window.addEventListener('scroll', revealCardsOnScroll);
  window.addEventListener('load', revealCardsOnScroll);

  //-----------------------

  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-blurred-left, .slide-in-blurred-right, .text-focus-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));




