const container = document.querySelector('.main-container');

const colors = [
  '#ccff00',
  '#ff3403',
  '#0ff0fc',
  '#ff33ee',
  '#a760ff',
  '#ffff33',
];

showGrid(300);

function showGrid(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', () => on(div));
    div.addEventListener('mouseout', () => off(div));
    container.appendChild(div);
  }
}

function on(square) {
  const color = getColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${ color }, 0 0 10px ${ color }`;
}

function off(square) {
  square.style.background = '#31363F';
  square.style.boxShadow = `0 0 1px #222831`;
}

function getColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}