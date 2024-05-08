const header = document.querySelector('.card-header');
const tittle = document.querySelector('.card-title');
const description = document.querySelector('.card-description');
const profileImg = document.querySelector('.profile-img');
const name = document.querySelector('.content-profile strong');
const date = document.querySelector('.content-profile small');

const animations = document.querySelectorAll('.loading');
const texts = document.querySelectorAll('.text');

setTimeout(showContent, 3000);

function showContent() {
  header.style = `background-image: url(./images/img.jpg);`;
  tittle.innerHTML = 'Travel around the world';
  description.innerHTML = 'Traveling around the world changes and expands your way of thinking, travel as much as you can.';
  profileImg.style = `background-image: url(./images/profile.jpg);`;
  name.innerHTML = 'Santiago Urrego';
  date.innerHTML = '09/08/2020';

  animations.forEach(animation => {animation.classList.remove('loading')})
  texts.forEach(text => {text.classList.remove('text')})
}