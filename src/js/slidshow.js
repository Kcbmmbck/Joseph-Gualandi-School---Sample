let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex += n);
  autoSlide(); // restart auto slide
}

function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  autoSlide();
}

function autoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  slideIndex = 1;
  showSlides(slideIndex);
  autoSlide();
});
