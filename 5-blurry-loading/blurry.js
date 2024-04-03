const background = document.querySelector('.background');
const loading = document.querySelector('.loading');
let counter = 0;

let interval = setInterval(update, 20);

function update() {
  if (counter>=100) clearInterval(interval);
  background.style.filter = `blur(${rangeTransformer(100 - counter, 0, 100, 0, 20)}px)`;
  loading.style.opacity = `${rangeTransformer(100 - counter, 0, 100, 0, 1.5)}`;
  loading.style.transform = `scale(${rangeTransformer(100 - counter, 0, 100, 1, 4)})`;
  loading.innerText = `${counter}%`;
  counter++;
}

function rangeTransformer(num,minNum,maxNum,minRange,maxRange) {
  return minRange + ((num - minNum) * (maxRange - minRange)) / (maxNum - minNum);
}
