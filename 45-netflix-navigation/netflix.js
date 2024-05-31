const open = document.querySelector('.btn-nav');
const close = document.querySelector('.btn-close');
const nav = document.querySelectorAll('.nav');

open.addEventListener('click',toggleNav);
close.addEventListener('click', toggleNav)

function toggleNav() {
  nav.forEach(side => side.classList.toggle('show'));
}