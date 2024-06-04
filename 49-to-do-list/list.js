const input = document.querySelector('input');
const container = document.querySelector('ul');
const form = document.querySelector('form');

const listLocal = JSON.parse(localStorage.getItem('listLocal'));

if (listLocal) {
  listLocal.forEach(toDo => createToDo(toDo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createToDo();
});

function createToDo(listLocal) {
  const toDo = document.createElement('li');
  let text = input.value;

  if(listLocal) {
    text = listLocal.text;
    if(listLocal.check) {
      toDo.classList.add('check');
    }
  }

  toDo.innerText = text;

  input.value = '';
  
  toDo.addEventListener('click', () => {
    toDo.classList.toggle('check');
    upDateToDo();
  });
  
  toDo.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    toDo.remove();
    upDateToDo();
  });
  
  container.appendChild(toDo);
  upDateToDo();
}

function upDateToDo() {
  const toDoList = document.querySelectorAll('li');
  const list = [];

  toDoList.forEach(toDo => {
    list.push({
      text: toDo.innerText,
      check: toDo.classList.contains('check')
    })
  })

  localStorage.setItem('listLocal', JSON.stringify(list));
}