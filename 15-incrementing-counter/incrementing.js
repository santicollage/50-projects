articles.forEach((article, index) => {
  articleCreate(article, index);
  count(article.score, index);
})

function articleCreate(article) {
  const section = document.querySelector('section');

  const container = document.createElement('article');
  const figure = document.createElement('figure');
  figure.style = `background-image: url(${article.url})`;
  const h1 = document.createElement('h1');
  h1.innerText = 0;
  const h3 = document.createElement('h3');
  h3.innerText = article.title;

  container.appendChild(figure);
  container.appendChild(h1);
  container.appendChild(h3);
  section.appendChild(container);
}

function count(score, index) {
  const scores = document.querySelectorAll('h1');
  const increment = Math.floor(score / 100);

  if(scores[index].innerText < score) {
    scores[index].innerText = +scores[index].innerText + increment;
    setTimeout(count, 10, score, index);
  } else {
    scores[index].innerText = score;
  }
  
}