const btn = document.querySelector('button');
const body = document.querySelector('body');
const handSecond = document.querySelector('.second');
const handMinute = document.querySelector('.minute');
const handHour = document.querySelector('.hour');
const digital = document.querySelector('h1');
const dateToday = document.querySelector('h3');

btn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(btn.innerText == 'Dark Mode') {
    btn.innerText = 'Light Mode';
  } else {
    btn.innerText = 'Dark Mode';
  }
})

upDate();

setInterval(upDate, 1000);

function upDate() {
  const date = new Date;

  const dayWeek = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const meridian = date.getHours() >= 12 ? 'PM' : 'AM';
  
  analogClock(hour, minute, second);
  digitalClock(hour, minute, second, meridian);
  dateClock(dayWeek, month, day)
}

function analogClock(h, m, s) {
  handSecond.style = `transform: translateY(-50%) rotate(${rangeTransformer(s, 0, 60, -90, 270)}deg)`;
  handMinute.style = `transform: translateY(-50%) rotate(${rangeTransformer(m, 0, 60, -90, 270)}deg)`;
  handHour.style = `transform: translateY(-50%) rotate(${rangeTransformer(h, 0, 12, -90, 270)}deg)`;
}

function digitalClock(h, m, s, meridian) {
  digital.innerText = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${s < 10 ? `0${s}` : s} ${meridian}`;
}

function dateClock(dw, m, d) {
  dateToday.innerHTML = `${days[dw]} ${months[m]} <span>${d}</span>`
}

function rangeTransformer(num,minNum,maxNum,minRange,maxRange) {
  return minRange + ((num - minNum) * (maxRange - minRange)) / (maxNum - minNum);
}