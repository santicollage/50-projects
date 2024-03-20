const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => { 
    if (box.classList.contains('horizontal-box')) {
      toggle('horizontal-box', box);
    } else {
      toggle('vertical-box', box);
    }
  })
});

const toggle = (direction, box) => {
  boxes.forEach(box => {
    if (box.classList.contains(direction)){
      box.classList.remove('box-active');
    }
  })
  box.classList.add('box-active');
};