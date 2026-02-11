/* =========================================================
   ABOUT SECTION ALIGNMENT
========================================================= */

(() => {
  const img = document.getElementById("bodyLogo");
  const box = document.getElementById("aboutBox");
  const OFFSET = -25;

  const alignBox = () => {
    if (!img || !box) return;

    box.style.transform = "";
    const imgCenter = img.getBoundingClientRect().top + img.offsetHeight / 2;
    const boxCenter = box.getBoundingClientRect().top + box.offsetHeight / 2;
    box.style.transform = `translateY(${imgCenter - boxCenter + OFFSET}px)`;
  };

  window.addEventListener("load", alignBox);
  window.addEventListener("resize", alignBox);
  img?.addEventListener("load", alignBox);
})();


/* =========================================================
   PROFILE IMAGE CAROUSEL
========================================================= */

const slides = document.querySelectorAll(".profile-slide");
const dots = document.querySelectorAll(".carousel-dots .dot");

let currentIndex = 0;
const intervalTime = 4000;
let carouselInterval;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index]?.classList.add("active");
  dots[index]?.classList.add("active");

  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function startCarousel() {
  if (!slides.length) return;
  carouselInterval = setInterval(nextSlide, intervalTime);
}

function resetCarousel() {
  clearInterval(carouselInterval);
  startCarousel();
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.slide);
    showSlide(index);
    resetCarousel();
  });
});

startCarousel();


/* =========================================================
   BACKGROUND MUSIC TOGGLE
========================================================= */

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

if (music && btn) {
  btn.addEventListener("click", () => {
    if (music.paused) {
      music.volume = 0.1;
      music.play();
      btn.classList.add("playing");
    } else {
      music.pause();
      btn.classList.remove("playing");
    }
  });
}

/* =========================================================
   MODAL IMAGE THUMB SWITCHING
========================================================= */

document.querySelectorAll(".modal-thumbs img").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const targetId = thumb.dataset.target;
    const mainImg = document.getElementById(targetId);

    if (mainImg) {
      mainImg.src = thumb.src;
    }
  });
});

/* =========================================================
   ACTIVITIES CAROUSEL CONTROLS
========================================================= */

const activitiesCarousel = document.getElementById("activitiesCarousel");
const prevBtn = document.getElementById("activityPrev");
const nextBtn = document.getElementById("activityNext");

if (activitiesCarousel && prevBtn && nextBtn) {
  const scrollAmount = 320;

  nextBtn.addEventListener("click", () => {
    activitiesCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    activitiesCarousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}

/* =========================================================
    Navbar Scroll Effect
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;

        const sectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - navbarHeight - 20; 
        // extra 20px breathing space (adjust if needed)

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

});

