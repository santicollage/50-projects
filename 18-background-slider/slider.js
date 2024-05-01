const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');
const main = document.querySelector('main');
const img = document.querySelector('.img');

let counter = 0;

toggleImg();

btnRight.addEventListener('click', () => {
  toggleImg('right');
});
btnLeft.addEventListener('click', () => {
  toggleImg('left');
});

function toggleImg(direction) {
  switch (direction) {
    case 'right':
      counter + 1 == images.length ? counter = 0 : counter++;
      break;

    case 'left':
      counter == 0 ? counter = images.length - 1 : counter--;
      break;
  
    default:
      counter = 0;
      break;
  }
  main.style = `background-image: url(${images[counter]})`;
  img.style = `background-image: url(${images[counter]})`;
}