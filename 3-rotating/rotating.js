const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');
const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelectorAll('.nav');

btnOpen.addEventListener('click', () => {
  rotate();
});

btnClose.addEventListener('click', () => {
  rotate();
});

function rotate() {
  header.classList.toggle('header-rotate');
  main.classList.toggle('main-rotate');
  nav.forEach(li => {li.classList.toggle('disabled')});
}