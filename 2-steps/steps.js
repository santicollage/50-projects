const loadingLine = document.getElementById('complete');
const circles = document.querySelectorAll('.circle');
const btnBack = document.getElementById('back');
const btnNext = document.getElementById('next');

let counter = 1;

btnBack.addEventListener('click', () => {
  if (counter !== 0) {
    counter--;
    move();
  }
});

btnNext.addEventListener('click', () => {
  if (counter !== circles.length) {
    counter++;
    move();
  }
});

function move () {
  const newWidth = ((100 * (counter - 1)) / (circles.length - 1));
  loadingLine.style.width = newWidth + '%';

  circles.forEach((circle, index) => {
    if(index < counter) {
      circle.classList.add('circle-active');
    } else {
      circle.classList.remove('circle-active');
    }
  });

  switch (counter) {
    case 1:
      btnBack.disabled = true;
      break;

    case circles.length:
      btnNext.disabled = true;
      break;
  
    default:
      btnBack.disabled = false;
      btnNext.disabled = false;
      break;
  }
}