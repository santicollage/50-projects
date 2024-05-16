const text = document.getElementById('text');
const inputSpeed = document.getElementById('speed');

const sentence = 'Give me liberty, or give me death!';
let speed = 800 / inputSpeed.value;
let i = 0;

inputSpeed.addEventListener('input', () => {
  speed = 800/ inputSpeed.value;
  clearInterval(interval);
  interval = setInterval(showSentence, speed);
})

let interval = setInterval(showSentence, speed);

function showSentence() {
  text.innerText = sentence.slice(0,i);
  i++;

  if (i > sentence.length) i = 0;
}