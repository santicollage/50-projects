const containers = document.querySelectorAll('.container');
const bottomWindow = (window.innerHeight / 10) * 7;

comparison();
window.addEventListener('scroll', comparison);

function comparison() {
  containers.forEach(container => {
    let topContainer = container.getBoundingClientRect().top;
    if (topContainer < bottomWindow) 
      container.classList.add('container-visible');
    else
      container.classList.remove('container-visible');
  });
}