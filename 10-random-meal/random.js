const btn = document.querySelector('button');
const title = document.getElementById('title');
const img = document.getElementById('img-meal');
const ul = document.getElementById('ul-ingredients');
const from = document.getElementById('from');

btn.addEventListener('click', generateMeal);

generateMeal();

async function generateMeal() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await res.json();
  const meal = data.meals[0];

  title.innerText = meal.strMeal;
  img.src = meal.strMealThumb;
  from.innerText = `This is a ${meal.strArea} dish`;

  const ingredients = Object.entries(meal).filter(ingredient => ingredient[0].includes('strIngredient') && ingredient[1]!='');
  
  ul.innerHTML = '';

  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerText = ingredient[1];

    ul.appendChild(li);
  });
}