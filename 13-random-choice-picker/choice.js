const choicesText = document.getElementById('choices');
const spanContainer = document.getElementById('span-container');

choicesText.addEventListener('keyup', (event) => {
  const choices = choicesText.value.split(',').filter(choice => choice.trim() != '').map(choice => choice.trim());
  createSpan(choices)
  if (event.key == 'Enter') {
    randomChoice(choices)
    setTimeout(() => {choicesText.value = ''}, 1000)
  }
})

function createSpan(choices) {
  spanContainer.innerHTML = '';
  
  choices.forEach(choice => {
    const span = document.createElement('span');
    span.innerText = choice;
    spanContainer.appendChild(span);
  });
}

function randomChoice(choices) {
  const time = choices.length;
  const spans = document.querySelectorAll('span')
  const interval = setInterval(() => {
    const numRandom = Math.floor(Math.random() * choices.length);
    spans[numRandom].classList.add('active');
    setTimeout(() => {spans[numRandom].classList.remove('active')}, 400);
  }, 500);

  setTimeout(() => {
    clearInterval(interval)
    const numRandom = Math.floor(Math.random() * choices.length);
    setTimeout(() => {spans[numRandom].classList.add('active')}, 500)
  }, time * 1000)
}