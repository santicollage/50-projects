const API_POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=6fbe83ba3495df0a2185a71e87b73c41&page=1';
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=6fbe83ba3495df0a2185a71e87b73c41&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_POPULAR)

async function getMovies (url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results)
}

function showMovies(movies) {

  main.innerHTML = '';

  movies.forEach(movie => {
    const article = document.createElement('article');

    let color = '';

    if (movie.vote_average < 5) {
      color = 'red';
    } else if (movie.vote_average < 7.5) {
      color = 'orange';
    } else {
      color = 'green';
    }
  
    article.innerHTML = `
    <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
    <div>
      <h2>${movie.title}</h2>
      <h3 class="${color}">${movie.vote_average}</h3>
    </div>
    <div>
      <p>${movie.overview}</p>
    </div>
    `;

    main.appendChild(article);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  if (search.value && search.value != '') {
    getMovies(`${API_SEARCH}&query=${search.value}`);
    search.value = '';
  } else {
    window.alert('Write something');
  }
})