const fill = document.querySelector('.fill');
const containers = document.querySelectorAll('.container');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
  this.classList.add('drag');
  setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
  this.className = 'fill';
}

containers.forEach(container => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
})

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  console.log('enter');
  this.classList.add('hover');
}
function dragLeave() {
  console.log('leave');
  this.className = 'container';
}
function drop() {
  this.className = 'container';
  this.append(fill);
}