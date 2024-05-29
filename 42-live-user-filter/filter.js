const UrlApi = 'https://randomuser.me/api?results=50';

const container = document.querySelector('ul');
const search = document.querySelector('input');
const listUser = [];

fetchApi(UrlApi);

addEventListener('input', (e) => filterUser(e.target.value));

async function fetchApi(url) {
  const res = await fetch(url);
  const data = await res.json();

  createUser(data.results);
}

function createUser(users) {
  users.forEach(user => {
    const li = document.createElement('li');

    li.innerHTML = `
      <img src="${user.picture.thumbnail}" alt="${user.name.first}">
      <div>
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    listUser.push(li);

    container.appendChild(li);
  });
}

function filterUser(name) {
  listUser.forEach(user => {
    if (user.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      user.classList.remove('invisible');
    } else {
      user.classList.add('invisible');
    }
  })
}