const countContainer = document.querySelector('.count-container');
const finishContainer = document.querySelector('.finish-container');
const counts = document.querySelectorAll('span');
const btn = document.querySelector('button');

animation();

btn.addEventListener('click', () => {
  countContainer.classList.remove('invisible');
  finishContainer.classList.remove('show');

  counts[0].classList.add('in');

  animation();
})

function animation() {
  counts.forEach((count,index) => {
    count.addEventListener('animationend', (e) => {
      if(e.animationName == 'in') {
        count.classList.remove('in');
        count.classList.add('out');  
      } else if (e.animationName == 'out' && counts[index +1]) {
        count.classList.remove('out');
        counts[index +1].classList.add('in');
      } else {
        count.classList.remove('out');
        countContainer.classList.add('invisible');
        setTimeout(() => {finishContainer.classList.add('show')}, 500)
        
      }
    })
  })
}