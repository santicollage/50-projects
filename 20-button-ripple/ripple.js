const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  const x = e.x - e.target.offsetLeft;
  const y = e.y - e.target.offsetTop;

  wave(x, y);
  setTimeout(wave, 150, x, y);
  setTimeout(wave, 300, x, y)
})

function wave(x, y) {
  const span = document.createElement('span');
  span.style = `top:${y}px; left:${x}px;`;
  btn.appendChild(span);

  setTimeout(() => span.remove(), 1200)
}