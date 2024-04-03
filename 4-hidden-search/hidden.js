const btn = document.querySelector('button');
const input = document.querySelector('input');
const background = document.querySelector('.background');

btn.addEventListener('click', () => {
  input.classList.toggle('disabled');
  background.classList.toggle('active')
});