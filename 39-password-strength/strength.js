const password = document.getElementById('password');
const background = document.querySelector('.background');

password.addEventListener('input',changeBlur);

function changeBlur() {
  const num = password.value.length;
  if (num < 10) {
    background.style.filter = `blur(${20 - num * 2}px)`;
  } else {
    background.style.filter = `blur(0)`;
  }
}