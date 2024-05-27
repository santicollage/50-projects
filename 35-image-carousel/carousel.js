const imageContainer = document.querySelector('.images');
const images = document.querySelectorAll('img');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let i = 0;

let interval = setInterval(scroll, 2500);

btnPrev.addEventListener('click', () => {
  i--;
  if(i < 0) i = images.length - 1;
  changeImg();
  clearInterval(interval);
  interval = setInterval(scroll, 2500);
});

btnNext.addEventListener('click', () => {
  i++;
  changeImg();
  clearInterval(interval);
  interval = setInterval(scroll, 2500);
});

function scroll() {
  i++;
  changeImg();
}

function changeImg() {
  if(i >= images.length) {
    i = 0;
  }
  imageContainer.style = `transform: translateX(${-i * 400}px)`;
}
