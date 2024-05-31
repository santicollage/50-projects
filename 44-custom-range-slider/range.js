const range = document.querySelector('input');
const label= document.querySelector('label');

range.addEventListener('input',slide);

function slide() {
  const value = range.value;

  label.innerText = value;
  label.style.left = `${value}%`;
}