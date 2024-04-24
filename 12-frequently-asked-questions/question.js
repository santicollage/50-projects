const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active')
  })
})