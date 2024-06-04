const container = document.querySelector('section');

const unsplashURL = 'https://source.unsplash.com/random/';
const quantity = 15;

createImages();

function createImages() {
  for (let i = 0; i < quantity; i++) {
    const img = document.createElement('img');
    img.src = `${ unsplashURL }${ getRandom() }`;
    container.appendChild(img);
  }
}

function getRandom () {
  return Math.floor(Math.random() * 10) + 300;
}