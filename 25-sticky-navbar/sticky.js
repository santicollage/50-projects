const header = document.querySelector('header');

window.addEventListener('scroll', changeNav);

function changeNav() {
  if(window.scrollY > header.offsetHeight) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}