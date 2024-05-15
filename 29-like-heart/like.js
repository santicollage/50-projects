const cardsContainer = document.querySelectorAll('.card-container');
const hearts = document.querySelectorAll('.heart-likes')
const likesSpan = document.querySelectorAll('.likes-container span')

let clickTime = 0;
let likes = [];

cardsContainer.forEach((card, index) => {
  likes.push(0);
  card.addEventListener('click', (e) => {
    if (clickTime == 0) {
      clickTime = new Date().getTime();
    } else {
      if (new Date().getTime() - clickTime < 1000) {
        likeCard(index);
      } else {
        clickTime = new Date().getTime();
      }
    }
  });
})

function likeCard(index) {
  const span = document.createElement('span');
  span.classList.add('heart');

  cardsContainer[index].appendChild(span);
  setTimeout(() => {span.remove()}, 1000)

  hearts[index].src = './icons/heart-fill.svg'

  likes[index]++;
  likesSpan[index].innerText = likes[index];
}