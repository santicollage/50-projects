const box = document.querySelector('body');
const containerLeft = document.querySelector('.container-left');
const containerRight = document.querySelector('.container-right');

containerLeft.addEventListener('mouseenter', () => box.classList.add('hover-left'));
containerRight.addEventListener('mouseenter', () => box.classList.add('hover-right'));

containerLeft.addEventListener('mouseleave', () => box.classList.remove('hover-left'));
containerRight.addEventListener('mouseleave', () => box.classList.remove('hover-right'));