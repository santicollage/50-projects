// Sections
const startSection = document.querySelector('.start-section');
const chooseSection = document.querySelector('.choose-section');
const gameSection = document.querySelector('.game-section');

const gameContainer = document.querySelector('.game-container');

const timeText = document.getElementById('time');
const scoreText = document.getElementById('score');

const btnStart = document.getElementById('btn-start-game');
const btnInsects = document.querySelectorAll('.btn-insect');

let insectSelect; 
let seconds = 0;
let minutes = 0;
let score = 0;

// Start game
btnStart.addEventListener('click', () => {
  startSection.style.height = '0';
  chooseSection.style.height = '100vh';
});

// Choose insect
btnInsects.forEach(btnInsect => {
  btnInsect.addEventListener('click', () => {
    const img = btnInsect.querySelector('img');
    insectSelect = img.getAttribute('src');
    
    chooseSection.style.height = '0';
    gameSection.style.height = '100vh';

    setTimeout(startGame ,600);
    
  })
})

// Game
function startGame() {
  const startTime = setInterval( upDateTime, 1000);

  createInsect();
}

function upDateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes > 1 && seconds > 20) {
      finishGame();
    }
  }
  timeText.innerText = `Time: 0${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function createInsect() {
  const insect = document.createElement('img');
  insect.src = insectSelect;
  insect.style.top = random(0, gameContainer.offsetHeight - 50) + 'px';
  insect.style.left = random(0, gameContainer.offsetWidth - 50) + 'px';
  insect.style.transform = `rotate(${random(0, 360)}deg)`;

  gameContainer.appendChild(insect);
  
  insect.addEventListener('click', () => {
    score++;
    scoreText.innerText = `Score: ${score}`;

    insect.remove();

    let level = Math.floor(score / 20) + 1;

    for (let index = 0; index < level; index++) {
      createInsect();
    }
  })
}

function finishGame() {
  gameSection.innerHTML = `<h1>Congratulations your score was ${score}</h1>`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}