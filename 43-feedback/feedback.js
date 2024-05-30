const container = document.querySelector('section');
const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('button');

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    activeRemove();
    rating.classList.add('active')
  })
});

btn.addEventListener('click', createFeedback)

function activeRemove() {
  ratings.forEach(rating => rating.classList.remove('active'))
}

function createFeedback() {
  ratings.forEach(rating => {
    if (rating.classList.contains('active')) {
      const ratingText = rating.innerText;

      container.innerHTML = `
      <h3> ❤️<br>
        Thank You! <br>
        Feedback: ${ratingText}
      </h3>
      <p>Well use your feedback to improve <br> our customer support</p>
      `;
    }
  })
}