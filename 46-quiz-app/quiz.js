const inputs = document.querySelectorAll('.answer');
const labels = document.querySelectorAll('label');
const question = document.getElementById('question');
const btn = document.querySelector('button')
const container = document.querySelector('section');

let score = 0;
let currentQuestion = 0;

upDateQuestion();

function upDateQuestion() {
  inputs.forEach(input => input.checked = false);

  question.innerText = questions[currentQuestion].question;
  labels.forEach((label, index) => label.innerText = questions[currentQuestion].options[index]);
}

btn.addEventListener('click', () => qualify());

function qualify() {
  let answer;
  inputs.forEach((input, index) => {
    if (input.checked) {
      answer = index;
    }
  });

  if(labels[answer].innerText == questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if(currentQuestion < questions.length) upDateQuestion();
  else finishQuiz();
}

function finishQuiz() {
  container.innerHTML = `<h2 id="question"> You answered ${score}/${questions.length} questions correctly</h2>
  <button onclick="location.reload()">Reload</button>`;
}