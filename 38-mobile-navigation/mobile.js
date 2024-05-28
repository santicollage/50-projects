const images = document.querySelectorAll('img');
const btns = document.querySelectorAll('li');
const icons = document.querySelectorAll('li div');

btns.forEach((btn, index) => {
  btn.addEventListener('click',() => changePage(index));
})

function changePage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
  
  changeIcons(index);
}

function changeIcons(index) {
  icons.forEach(icon => {
    let regex1 = new RegExp(`1`, 'g');

    if (regex1.test(icon.style.backgroundImage)) {
      icon.style.backgroundImage = icon.style.backgroundImage.replace(regex1, '');
    }
  })

  const iconUrl = icons[index].style.backgroundImage;
  const regex = new RegExp(`.svg`, 'g');
  const newIcon = iconUrl.replace(regex, `1.svg`);

  icons[index].style.backgroundImage = newIcon;
}