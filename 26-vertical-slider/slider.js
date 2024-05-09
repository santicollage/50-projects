const contentContainer = document.querySelector('.content-container');
const imgContainer = document.querySelector('.img-container');
const btnUp = document.querySelector('.up-arrow');
const btnDown = document.querySelector('.down-arrow');

let position = 0;

colors.forEach((color, index) => {
  const content = document.createElement('div');
  content.style = `background-color: ${color.color}`;
  content.innerHTML = `
    <h1 style="color: var(${color.colorText});">${color.title}</h1>
    <h2 style="color: var(${color.colorText});">${color.phrase}</h2>
  `;
  const img = document.createElement('div');
  img.style = `background-image: url(${colors[colors.length - (index + 1)].url})`;
  contentContainer.appendChild(content);
  imgContainer.appendChild(img);
});

function toggleColor() {
  contentContainer.style.transform = `translateY(-${window.innerHeight * position}px)`;
  imgContainer.style.transform = `translateY(${window.innerHeight * position}px)`;
}

imgContainer.style.bottom = `${(colors.length - 1) * 100}vh`;

toggleColor();

btnUp.addEventListener('click', () => {
  position--;
  if (position < 0) position = colors.length - 1;
  toggleColor();
});
btnDown.addEventListener('click', () => {
  position++;
  if (position >= colors.length) position = 0;
  toggleColor();
});