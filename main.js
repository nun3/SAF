const carousel = document.querySelector('.carousel');
const imgs = carousel.querySelectorAll('img');
let currentImg = 0;

setInterval(() => {
  currentImg++;

  if (currentImg >= imgs.length) {
    currentImg = 0;
  }

  imgs.forEach((img, i) => {
    img.style.left = `${i - currentImg}00%`;
  });
}, 2000);
