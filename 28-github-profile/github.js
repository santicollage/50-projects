const API_URL = 'https://api.github.com/users/';

const form = document.querySelector('form');
const search = document.querySelector('input');
const section = document.querySelector('section');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (search.value) {
  getProfile(`${API_URL}${search.value}`);
  section.style = 'display: flex';
  search.value = '';
  }
})

async function getProfile (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    
    showProfile(data);
  } catch (error) {
    if (error.message.includes('404')) {
      showError('No profile found with this username');
    } else {
      console.error('An error occurred:', error);
    }
  }
}

async function getRepos (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
  
    showRepos(data);
  } catch (error) {
    showError('There was an error finding the repositories');
  }
}

function showProfile(user) {
  section.innerHTML = `
    <div>
      <img src="${user.avatar_url}" alt="${user.login}">
    </div>
    <div class="content-container">
      <h1>${user.login}</h1>
      <div class="statistics-container">
        <h2>${user.followers}<strong> Followers</strong></h2>
        <h2>${user.following}<strong> Following</strong></h2>
        <h2>${user.public_repos}<strong> Repos</strong></h2>
      </div>
      <div class="repos-container">
      </div>
    </div>
  `;

  getRepos(`${API_URL}${user.login}/repos?sort=created`);
}

function showRepos(repos) {
  const reposContainer = document.querySelector('.repos-container');

  repos.slice(0, 10).forEach(repo => {
    const a = document.createElement('a');
    a.href = repo.html_url;
    a.innerText = repo.name;

    reposContainer.appendChild(a);
  });

}

function showError(message) {
  section.innerHTML = `
  <div>
  <div class="content-container">
  <h1>${message}</h1>
  </div>
  </div>
  `;
}