const empty = document.getElementById('empty');
const full = document.getElementById('full');
const btns = document.querySelectorAll('.partial-container div');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('full') && !btns[index + 1].classList.contains('full')) {
        fill(index - 1);
    } else {
      fill(index);
    }
  })
})

function fill(limit) {
  btns.forEach(btn => {
    btn.classList.remove('full');
  })

  const percent = 100 * (limit + 1) / btns.length;

  for(i = 0; i <= limit; i++) {
    btns[i].classList.add('full');
  }
  full.style = `height: ${percent}%`;
  if(percent == 0) {
    full.innerText = '';
  } else {
    full.innerText = `${percent}%`;
  }
  empty.style = `height: ${100 - percent}%`;
  empty.innerHTML = `${2 - (percent * 2/ 100)} L 
  <small>Remained</small>`;
}