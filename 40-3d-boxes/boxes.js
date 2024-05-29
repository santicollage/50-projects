const container = document.querySelector('.boxes-container');
const btn = document.querySelector('button');

createPuzzle();

btn.addEventListener('click', () => container.classList.toggle('puzzle'));

function createPuzzle() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const cube = document.createElement('div');
      cube.classList.add('box');
      cube.style.backgroundPosition = `${400 - 100 * j}px ${400 - 100 * i}px`
      container.appendChild(cube);
    }
    
  }
}