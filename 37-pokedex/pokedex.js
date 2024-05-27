const URLAPI = 'https://pokeapi.co/api/v2/pokemon/';
const container = document.querySelector('.card-container');

const types = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#FCEAFF',
  poison: '#CD98D7',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEDA1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

getPokemon(200);

async function getPokemon(number) {
  for (let i = 1; i < number; i++) {
    await fetchPokemon(i);
  }
}

async function fetchPokemon(id) {
  const res = await fetch(`${URLAPI}${id}`);
  const data = await res.json();
  showPokemon(data)
}

function showPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('card');

  const name = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;
  const id = pokemon.id.toString().padStart(3, '0');
  const type = pokemon.types[0].type.name;

  card.style.background = types[type];
  card.style.boxShadow = `0 0 2px ${ types[type] }, 0 0 10px ${ types[type] }`;

  card.innerHTML = `
    <div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png" alt="${name}"></div>
    <h3>#${id}</h3>
    <h2>${name}</h2>
    <p>Type: ${type}</p>
  `;

  container.appendChild(card);
}