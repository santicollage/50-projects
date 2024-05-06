const canvas = document.querySelector('canvas');
const colorBtn = document.querySelector('input');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const sizePen = document.querySelector('span');
const deleteBtn = document.getElementById('delete');

let size = 10;
let color = colorBtn.value;
let x;
let y;
let press = false;

const context = canvas.getContext('2d');
canvasSize();

function canvasSize() {
  canvas.width = window.innerWidth * 0.75;
  canvas.height = window.innerHeight * 0.8;
}

window.addEventListener('resize', canvasSize)

// Settings
colorBtn.addEventListener('change', () => {
  color = colorBtn.value;
});
plusBtn.addEventListener('click', () => {
  size += 2;
  if(size > 40) {
    size = 40;
  }
  sizePen.innerText = size;
});
minusBtn.addEventListener('click', () => {
  size -= 2;
  if(size<=2) {
    size = 2;
  }
  sizePen.innerText = size;
});
deleteBtn.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// Drawing
canvas.addEventListener('mousedown',(e) => {
  x = e.offsetX;
  y = e.offsetY;
  press = true;
});

canvas.addEventListener('mouseup',(e) => {
  x = undefined;
  y = undefined;
  press = false;
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (press) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
    x = x2;
    y = y2;
    console.log(x,y);
  }
}