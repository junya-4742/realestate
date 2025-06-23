const fv = document.querySelector('.fv');
const images = [
  '/images/FirstView01.png',
  '/images/FirstView02.png',
  '/images/FirstView03.png',
];
let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  fv.style.backgroundImage = `url(${images[index]})`;
}

setInterval(changeBackground, 5000);


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});
