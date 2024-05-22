"use strict";

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Video Play
const videoPlayer = document.getElementById("videoPlayer");
const myVideo = document.getElementById("myVideo");
videoPlayer.addEventListener("click", function (event) {
  if (event === videoPlayer) {
    stopVideo;
  }
});

function stopVideo() {
  videoPlayer.style.display = "none";
  myVideo.muted = true;
}

function playVideo(file) {
  const imgLive = document.getElementById("imgLive");
  // imgLive.style.display = "none";
  myVideo.src = file;
  videoPlayer.style.display = "block";
  myVideo.muted = false;
}

// Slider Hero
let currentIndex = 0;
const slides = document.querySelectorAll(".hero-slide");
const totalSlides = slides.length;
const heroSection = document.querySelector(".section.hero");

document.querySelector(".next").addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (index + totalSlides) % totalSlides;
  slides[currentIndex].classList.add("active");
  updateBackground();
}

function updateBackground() {
  const backgroundUrl = slides[currentIndex].getAttribute("data-background");
  heroSection.style.backgroundImage = `url('${backgroundUrl}')`;
}

// Auto slide change every 5 seconds
setInterval(() => {
  goToSlide(currentIndex + 1);
}, 5000);

// Initialize
slides[currentIndex].classList.add("active");
updateBackground();
